---
title: "browser 与 cache"
author: [Sylvenas]
categories: 'http'
img: './img/2015-03-25.jpg'
---

在 [HTTP cache](/blog/2018/01/03/http-cache.html) 中讲解了 HTTP 缓存相关的知识，我们知道了：

- `Cache-Control` 用来控制强缓存(code:200, from memory/disk)， 
- `Last-Modified/If-Modified-Since 和 Etag/If-None-Match` 用来控制协商缓存，决定是(code:304,Not Modified)，还是 (code:200, from server)

浏览器的行为(`back/forward/refresh`)又和 HTTP 缓存怎么互相配合的？

在 single-page app  中的，点击超链接跳转其他的路由，然后点击浏览器的回退和点击超链接回退又有什么区别呢？回来的页面会刷新吗？

## 实验
三个获取随机 字符串的请求 `no-cache`,`no-store`,，Header 分别设计为：
- /api/test/no-cache：
``` sh
Cache-Control: must-revalidate, no-cache, private
Pragma: no-cache
Etag: "((the hex value))"
```

- /api/test/no-store：
``` sh
Cache-Control: must-revalidate, no-store, no-cache, private
Pragma: no-store, no-cache
Etag: "((the hex value))"
```

- /api/test/no-cache?test=Math.random()：
``` sh
Cache-Control: must-revalidate, no-cache, private
Pragma: no-cache
Etag: "((the hex value))"
```

> 最后一个用来破坏缓存，每次都会请求最新的数据

## Chrome

### 浏览器 back
清空缓存：
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10185779686/c614/a7bc/e088/917ac7d5e1f4fadc7a45161fa411a827.png)

点击第一个超链接跳转到同源的 other page, 然后点击浏览器的back，回到主页：
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10185787348/e703/b4ab/f865/305ff60af43ccf9a518ca28c3985a98f.png)

得出结论：
- home page 和 no-cache 接口都被缓存
- no-store 接口不被缓存，重新触发了请求


### 点击页面超链接回退
清空缓存：
![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10185748406/4bfd/a943/b56e/3f12919d29e62b88c4c88ea5faf22104.png)

点击第一个超链接跳转到同源的 other page, 然后点击other page 上的超链接，回到主页：
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10185755221/e4fb/7638/136a/daf2f4b51ce8f33d76a382c7cdc620b1.png)

得出结论：
- home page 和 no-cache 接口不被缓存，重新触发了请求
- no-store 接口不被缓存，重新触发了请求


### 刷新浏览器
清空缓存：
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10185867312/e59f/4e73/53fb/d2e5fdbe2c6374f4af1334b25ac6f30e.png)

点击浏览器刷新按钮：
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10185876452/3d2e/c480/e5ac/b99a7898bb9b9a09d5bb9e2bb7730953.png)

得出结论：
- home page 和 no-cache 接口不被缓存，重新触发了请求
- no-store 接口不被缓存，重新触发了请求

## Safari

### 浏览器 back
清空缓存：
![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10186067171/c67d/42e5/fb30/4109021e1365a6b1e83a86336b588ce1.png)

点击第一个超链接跳转到同源的 other page, 然后点击浏览器的back，回到主页：
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10186073791/cdc8/a9a8/aeaf/71586eca72da69000a52fdda512fa93b.png)

得出结论：
- home page 没有被缓存，触发了新请求，但是所有的接口的都没有触发重新请求
- no-cache 接口被缓存
- no-store 接口被缓存


### 点击页面超链接回退
清空缓存：
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10186101293/0f4d/2e17/8dcd/38edd8a9f760c1bf976dd951c259a0aa.png)

点击第一个超链接跳转到同源的 other page, 然后点击other page 上的超链接，回到主页：
![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10186106351/7a81/1bf0/3c0c/bb8384cae243699e67890ed92633ce36.png)

得出结论：
- home page 和 no-cache 接口不被缓存，重新触发了请求
- no-store 接口不被缓存，重新触发了请求


### 刷新浏览器
清空缓存：
![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10186113580/0409/aee8/d5b5/61e95bd3b8cd1716dbbdd57567b5cf71.png)

点击浏览器刷新按钮：
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10186118877/73d8/86b0/f98a/8e7044a528b9f2a9e8866e265eca6e0f.png)

得出结论：
- home page 和 no-cache 接口不被缓存，重新触发了请求
- no-store 接口不被缓存，重新触发了请求

## 结论
- 可能每种浏览器实现的方式都不一样
- 但是对于HTML文件的处理，倒是很相似，刷新浏览器还是点击超链接回退，都是会主动请求的(哪怕已经设置了 Cache-Control:max-age:60)

> 为什么 HTML 文件 都不会使用缓存呢？因为客户端也可以使用 `Cache-Control:max-age:0`，来强化或者放松对过期时间的限制，有些应用程序对文档的新鲜度要求很高，比如人工刷新按钮，对这些应用程序而言客户端(浏览器会自动放弃缓存从浏览器读取)，可以看下 HTML 文件的 `Request Header Cache-Control`，做验证


## 参考资料
- [html history](https://stackoverflow.com/questions/16173322/google-chrome-does-not-revalidate-etag-on-back-forth/16506960#16506960)
- [You Do Not Understand Browser History](https://madhatted.com/2013/6/16/you-do-not-understand-browser-history)

- [Index.html is being cached making the whole app display an old build](https://github.com/facebook/create-react-app/issues/1910)
