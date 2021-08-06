---
title: "webpack HRM"
author: [Sylvenas]
categories: 'bundlers'
img: './img/2015-05-11.jpeg'
---

## webpack hot module replacement
webpack HRM 作为提升开发效率的神器，在修改了部分代码的情况下，可以做到不reload整个页面实现修改模块的指定刷新，非常的“神器",下面逐渐分析一下HRM的实现原理。

首先我们先明确几个开发阶段的问题，并作出简答，后续会逐步实现/解决这几个问题

- 1.浏览器请求的代码 (`http://localhost:3000/static/js/main.js`) 是从哪里来的？   
  必定存在一个静态资源服务器可以为我们提供这些 js,css 等文件，我们称之为 server side

- 2.可是我们在本地磁盘并没有见到这些打包过后的 js，css 啊，他们在哪里？
  webpack 通过 [memfs](https://www.npmjs.com/package/memfs) 库把打包之后的文件，写入了内存中，然后我们的静态资源服务器，同样借助 memfs 从内存中读取文件，并返回给浏览器

- 3.当我们修改了代码之后，怎么做到实时编译的呢？
  webpack 提供了 watch 机制，使用 [chokidar](https://www.npmjs.com/package/chokidar) 库监听本地文件变化，然后重新打包

- 4.browser 怎么知道代码已经被重新编译了呢？
  所以client 和 server side 之间必定存在一种通讯机制，轮询？no，no，no! websocket 走起！在 webpack rebuild done 之后发消息通知 browser 有新的代码了，然后 brower 主动拉取新的代码

- 5.browser 也要建立 socket 通信，还要能拉取代码？可是我们自己写的代码里面怎么可能有这种逻辑？
  所以我们在启动 server 的时候，必定往打包的代码里面夹带了私货，也就是修改了 webapckConfig.entry，加入了建立 socket 链接，拉取新代码，并执行等相关逻辑的代码，我们称之为 client side

- 6.browser 怎么知道拉取那个代码？怎么知道那些模块变更了，都拉取？那岂不是和直接刷新浏览器一样了，幸运的是`webpack.HotModuleReplacementPlugin`,会帮助我们计算好每次更新了那些模块(xxxxxxxx(hash).hot-update.json)，以及更新的代码(module.xxxxxxxx(hash).hot-update.js)，我们只要在 browser 主动拉取即可

- 6.browser 拉取新的“已修改部分”代码之后，执行该部分代码，不久可以实现了HRM了么！

### server side

#### 实现静态资源服务
``` js
const Koa = require('koa')

const app = new Koa()

/** static file middleware **/
app.use(staticFileMiddleware)

app.listen(port, () => {
  console.log(`dev server started at port: ${port}`)
})
```

现在问题来了staticFileMiddleware，该如何实现呢？我们可以借助 [koa-static](https://www.npmjs.com/package/koa-static) 等等工具直接帮我们映射到 disk 的某个文件夹吗？ 答案不行。

问题2，已经回答了 webpack 打包之后并没有把文件写入到磁盘中，而是保存在内存中，所以，我们要从内存中获取文件，然后返回给browser

#### 从内存中获取js，css等文件 

首先我们获取文件请求的路径，比如说 browser 请求`http://localhost:3000/static/js/main.js` 文件，那么 koa `ctx.url` 则为"/static/js/main.js"，然后我们加上 `webpackConfig.output.path` 不就是完整的文件路径了么。

``` js
function staticFileMiddleware(ctx, next) {

    const filename = path.join(webpackConfig.output.path, ctx.url.slice(1))
}
```
可是有了文件路径，怎么从内存中读取文件呢？毕竟我们还没有写入啊，所以这个问题先搁置一下，先解决“write to memory”的问题，然后我们再递归回来解决“read from memory”的问题

#### 把打包后的js,css 写入 memory

根据webapck 文档 [outputFileSystem](https://webpack.docschina.org/blog/2020-10-10-webpack-5-release/#filesystems)，得知我们可以修改 `compiler.outputFileSystem` 为memory，而不是disk，这个我们可以借助 [memfs](https://www.npmjs.com/package/memfs) 来实现

``` js
const { createFsFromVolume, Volume } = require('memfs')

function reWriteFileToMemory(compiler) {
  let vol = new Volume()
  let outputFileSystem = createFsFromVolume(vol);
  outputFileSystem.join = path.join.bind(path);

  compiler.outputFileSystem = outputFileSystem;
}
```

> compiler 是什么？compiler 是把 webpackConfig 传入 webapck 之后创建的一个对象，该对象包含 webpack 所有核心功能， `const compiler = webpack(webpackConfig)`


既然解决了写入的问题，是时候递归回去解决读取的问题了，根据 memfs 的文档，使用`statSync`，`readFileSync` 来读取文件,然后返回给 browser。

``` js
function staticFileMiddleware(ctx, next) {
  const filename = path.join(webpackConfig.output.path, ctx.url.slice(1))

  let fsStats = compiler.outputFileSystem.statSync(filename)

  // 判断是否存在这个文件,并获取文件内容和文件类型
  if (fsStats.isFile()) {
    let content = compiler.outputFileSystem.readFileSync(filename)
    let contentType = mime.getType(filename)
    ctx.response.type = contentType
    ctx.response.body = content
  } else {
    return ctx.body = "NotFound"
  }

}
```

#### 监听本地文件变化，重新打包
这部分应该是最简单的，借助 webapck 的 [watch](https://webpack.docschina.org/configuration/watch/) 机制，可以轻松实现 webapck 的监听，webpack 内部借助 [chokidar](https://www.npmjs.com/package/chokidar),来实现的监听，具体怎么做的，可以阅读一下webpack watch 部分的源码
``` js
function watchLocalFile() {
  compiler.watch({}, err => {
    console.log('又一次编译任务成功完成了')
  })
}
```

现在我们只是监听了文件变化，并重新打包，可是怎么知道打包是否完成了呢？webapck 的消息机制同样提供了打包结束的事件，可以让我们监听：
``` js
function listenWebpackHook() {
  compiler.hooks.done.tap('webpack-dev-server', (stats) => {
    lastHash = stats.hash
  })
}
```

现在我们可以获取到最新一次打包的 hash 值了，下一步就是通知 browser 有新的打包结果了，你快来拉取呀，怎么通知呢？很明显
websocket 是一个绝佳的方案。

### websocket
我们在 server side 创建 socket的服务端，然后该服务端可以实现消息的推送基本功能，这个过程我们借助 [socket.io](https://www.npmjs.com/package/socket.io) 实现
``` js
const http = require('http')
const socketIo = require("socket.io")

const socketList = []

function createSocketServer () {
  let server = http.createServer(app.callback())
  let io = socketIo(server)

  const onConnection = (socket) => {
    socketList.push(socket)
    socket.emit('hash', lastHash)
    socket.emit('ok')
  }

  io.on('connection', onConnection)
}
```

这里根据[文档]我们,必须把 koa server 转换为最原始的 http server(虽然也没什么本质的区别)，然后创建 socket server，并注意我们把所有的 socket 链接存在放一个数组中，这样做的原因是因为用户可能打开了多个 browser tab, 后面我们在发送消息的时候要全部发送，不然，仅仅会其中的某一个tab，收到更新的通知。

#### 编译完成，则推送消息通知 browser

在 监听本地文件变化，重新打包，这一小节我们已经能够收到打包成功的消息了，获取取最新一次打包的 hash 值，现在就是推送消息给 browser， 让他拉取新的代码

``` js
function listenWebpackHook() {
  compiler.hooks.done.tap('webpack-dev-server', (stats) => {
    lastHash = stats.hash
    // 每当新一个编译完成后都会向客户端发送消息
    socketList.forEach(socket => {
      socket.emit('hash', stats.hash) // 先向客户端发送最新的hash值
      socket.emit('ok') // 再向客户端发送一个ok
    })
  })
}
```

#### browser 接收 编译完成的消息
这个过程，同样借助 socket.io client完成相关的连接和消息接收
``` js
const SocketClient = require("socket.io-client")

const io = SocketClient.io
let hotCurrentHash // lastHash 上一次 hash值 
let currentHash // 这一次的hash值

const socket = io('http://localhost:3000', { transports: ["websocket"] })
socket.on('connect', () => {
  console.log('客户端连接成功')
})

socket.on('hash', (hash) => {
  currentHash = hash
})

socket.on('ok', () => {
  reloadApp(true)
})
```

### client side

#### 获取那些模块发生了变更

``` js
function reloadApp(hot) {
  // 如果hot为true 走热更新的逻辑
  if (hot) { 
    // 如果是第一次链接，或者本次和上一次打包的hash 一致，则无需拉取，因为没有任何变动
    // 对应的行为是用户没有修改代码，仅仅是 cmd+s 了一下
    if (!hotCurrentHash || hotCurrentHash == currentHash) { 
      return hotCurrentHash = currentHash
    }
    hotCheck()
  } else { // 如果不支持热更新，则直接重新加载
    window.location.reload()
  }
}
```

`hotCheck` 函数作用就是拉取 `xxxxxxxx(hash).hot-update.json` 获取那些模块发生了变化

``` js
function hotCheck() {
  hotDownloadManifest().then(update => {
    let chunkIds = update.c
  })
}

function hotDownloadManifest() {
  return new Promise(function (resolve) {
    let request = new XMLHttpRequest()
    //hot-update.json文件里存放着从上一次编译到这一次编译 取到差异
    let requestPath = '/main.' + hotCurrentHash + ".hot-update.json"
    request.open('GET', requestPath, true)
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        let update = JSON.parse(request.responseText)
        resolve(update)
      }
    }
    request.send()
  })
}
```
> 这里请注意 requestPath 的路径拼写规则，为什么用的上次编译的 hash，作为路径的一部分呢？我想这样设计的原因可能在于，当前的
".hot-update.json" 是相对于上次的编译的增量，他们之间是 “累加”的关系。

#### 获取变更模块新的js代码
现在我们已经知道了，哪些模块发生了变化，只要根据模块id和hash,拉取最新的`xxxxxxxx(hash).hot-update.js`文件即可,拉取完成之后，并以script的方式插入到 document 中
``` js
function hotCheck() {
  hotDownloadManifest().then(update => {
    let chunkIds = update.c
    chunkIds.forEach(chunkId => {
      hotDownloadUpdateChunk(chunkId)
    })
  })
}

function hotDownloadUpdateChunk(chunkId) {
  let script = document.createElement('script')
  // /main.xxxx.hot-update.js
  script.src = '/' + chunkId + "." + hotCurrentHash + ".hot-update.js"
  document.head.appendChild(script)
}
```

> 在webpack dev server 的源代码中这个代码的插入实际上是使用了jsonp，拉取代码之后直接执行，优势是不侵入我们的页面代码，我们选择显式的插入script的方式，这样可以让读者们更好的理解和调试代码，不过这并没有什么本质上的区别

#### 执行 moduleid.xxxxxxxx.hot-update.js
分析一下拉取的 `moduleid.xxxxxxxx.hot-update.js`的代码案例：
``` js
self["webpackHotUpdatewebpack_hmr"]("code_asyncTask_js",{

/***/ "./code/asyncTask.js":
/*!***************************!*\
  !*** ./code/asyncTask.js ***!
  \***************************/
/***/ (() => {

const txt = "123";
const body = document.querySelector("body");
let btn = document.querySelector("button");

if (!btn) {
  btn = document.createElement("button");
}

btn.textContent = txt;
body.append(btn);

/***/ })

});
//# sourceMappingURL=code_asyncTask_js.934cc6044df3b9c0ab98.hot-update.js.map
```
可以发现，我们需要声明一个全局的`webpackHotUpdatewebpack_hmr`函数，来执行这份代码，不然就出现“self["webpackHotUpdatewebpack_hmr"] is not a function”的 type error 错误，let's do it:

``` js
window.webpackHotUpdatewebpack_hmr = function (chunkId, updatedModules) {
  // 循环新拉来的模块
  for (let moduleId in updatedModules) {
    // 从模块缓存中取到老的模块定义
    let oldModule = __webpack_require__.c[moduleId]
    // parents哪些模块引用这个模块 children这个模块引用了哪些模块
    // parents=['./src/index.js']
    let {
      parents,
      children
    } = oldModule
    // 更新缓存为最新代码 缓存进行更新
    let module = __webpack_require__.c[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
      parents,
      children,
      hot: window.hotCreateModule(moduleId)
    }

    window.module=module

    updatedModules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    module.l = true // 状态变为加载就是给module.exports 赋值了
    parents.forEach(parent => {
      let parentModule = __webpack_require__.c[parent]
      if (parentModule && parentModule.hot && parentModule.hot._acceptedDependencies[moduleId]) {
        parentModule.hot._acceptedDependencies[moduleId]()
      }
    })
    hotCurrentHash = currentHash
  }
}

window.hotCreateModule = function () {
  let hot = {
    _acceptedDependencies: {},
    dispose() {
      // 销毁老的元素
    },
    accept: function (deps, callback) {
      for (let i = 0; i < deps.length; i++) {
        // hot._acceptedDependencies={'./title': render}
        hot._acceptedDependencies[deps[i]] = callback
      }
    }
  }
  return hot
}
```

这部分代码就是遍历并执行变更的模块，但是请注意 `window.module=module` 的代码，这部分的目的是把 module 暴露出去，可以让用户决定部分模块热更新，还是全部热更新
``` js
if (module.hot) {
  module.hot.accept('./task.js', function () {
    console.log('Accepting the updated task module!');
    // only ./task.js changed, wo will do something
  })
}
```

到目前位置，我们已经实现了从server side 到 client side 的主流程，等等还有一个步骤没有做，client 部分代码难道要用户手动引入吗？不，脏活累活自然都是我们干！

### inject the client side code
``` js
const webpackConfig = require('../../webpack.config')

webpackConfig.entry = [require.resolve("../client"), webpackConfig.entry]
const compiler = webpack(webpackConfig)
```

### 总结
看到这里，是不是发现原来所谓的热更新也没什么复杂的，我们也都能做到，然后难的是这个 idea ，在互联网应用层我们缺少的并不是技术，而是思路，缺少的是思考问题与解决问题的主动性

全部代码：[webpack-HRM]()

