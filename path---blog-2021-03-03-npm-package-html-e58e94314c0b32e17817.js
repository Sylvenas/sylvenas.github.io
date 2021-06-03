webpackJsonp([0xa6016ad7398],{740:function(e,c){e.exports={data:{markdownRemark:{html:'<h2 id="前言"><a href="#%E5%89%8D%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>前言</h2>\n<p>提起 npm，大家第一个想到的应该就是 <code class="gatsby-code-text">npm install</code> 了，但是 <code class="gatsby-code-text">npm install</code> 之后生成的 <code class="gatsby-code-text">node_modules</code> 大家有观察过吗？<code class="gatsby-code-text">package-lock.json</code> 文件的作用大家知道吗？除了 <code class="gatsby-code-text">dependencies</code> 和 <code class="gatsby-code-text">devDependencies</code>，其他的依赖有什么作用呢？接下来，本文将针对 npm 中的你可能忽略的细节和大家分享一些经验 。</p>\n<h2 id="npm-安装机制"><a href="#npm-%E5%AE%89%E8%A3%85%E6%9C%BA%E5%88%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>npm 安装机制</h2>\n<p><code class="gatsby-code-text">A</code> 和 <code class="gatsby-code-text">B</code> 同时依赖 <code class="gatsby-code-text">C</code>，<code class="gatsby-code-text">C</code> 这个包会被安装在哪里呢？<code class="gatsby-code-text">C</code> 的版本相同和版本不同时安装会有什么差异呢？<code class="gatsby-code-text">package.json</code> 中包的前后顺序对于安装时有什么影响吗？这些问题平时大家可能没有注意过，今天我们就来一起研究一下吧。</p>\n<h3 id="a-和-b-同时依赖-c，这个包会被安装在哪里呢？"><a href="#a-%E5%92%8C-b-%E5%90%8C%E6%97%B6%E4%BE%9D%E8%B5%96-c%EF%BC%8C%E8%BF%99%E4%B8%AA%E5%8C%85%E4%BC%9A%E8%A2%AB%E5%AE%89%E8%A3%85%E5%9C%A8%E5%93%AA%E9%87%8C%E5%91%A2%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A 和 B 同时依赖 C，这个包会被安装在哪里呢？</h3>\n<p>假如有 <code class="gatsby-code-text">A</code> 和 <code class="gatsby-code-text">B</code> 两个包，两个包都依赖 <code class="gatsby-code-text">C</code> 这个包，<strong>npm 2</strong> 会依次递归安装 <code class="gatsby-code-text">A</code> 和 <code class="gatsby-code-text">B</code> 两个包及其子依赖包到 <code class="gatsby-code-text">node_modules</code> 中。执行完毕后，我们会看到 <code class="gatsby-code-text">./node_modules</code> 这层目录只含有这两个子目录：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">node_modules/\n├─┬ A\n│ ├── C\n├─┬ B\n│ └── C</code></pre>\n      </div>\n<p>如果使用 <strong>npm 3</strong> 来进行安装的话，<code class="gatsby-code-text">./node_modules</code> 下的目录将会包含三个子目录：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">node_modules/\n├─┬ A\n├─┬ B\n├─┬ C</code></pre>\n      </div>\n<p>为什么会出现这样的区别呢？这就要从 npm 的工作方式说起了：</p>\n<h3 id="npm-2-和-npm-3-模块安装机制的差异"><a href="#npm-2-%E5%92%8C-npm-3-%E6%A8%A1%E5%9D%97%E5%AE%89%E8%A3%85%E6%9C%BA%E5%88%B6%E7%9A%84%E5%B7%AE%E5%BC%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>npm 2 和 npm 3 模块安装机制的差异</h3>\n<p>虽然目前最新的 npm 版本是 <code class="gatsby-code-text">npm 7</code>，但 <code class="gatsby-code-text">npm 2</code> 到 <code class="gatsby-code-text">npm 3</code> 的版本变更中实现了目录打平，与其他版本相比差别较大。因此，让我们具体看下这两个版本的差异 ​。</p>\n<p><code class="gatsby-code-text">npm 2</code> 在安装依赖包时，采用简单的递归安装方法。执行 <code class="gatsby-code-text">npm install</code> 后，npm 根据 <code class="gatsby-code-text">dependencies</code> 和 <code class="gatsby-code-text">devDependencies</code> 属性中指定的包来确定第一层依赖，<code class="gatsby-code-text">npm 2</code> 会根据第一层依赖的子依赖，递归安装各个包到子依赖的 <code class="gatsby-code-text">node_modules</code> 中，直到子依赖不再依赖其他模块。执行完毕后，我们会看到 <code class="gatsby-code-text">./node_modules</code> 这层目录中包含有我们 package.json 文件中所有的依赖包，而这些依赖包的子依赖包都安装在了自己的 <code class="gatsby-code-text">node_modules</code> 中 ，形成类似于下面的依赖树：</p>\n<p><img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8587922045/3070/cff1/36c5/97cd26e52a74d70cbb0dbb3d1ca882b9.png" alt="npm 2 package tree"></p>\n<p>这样的目录有较为明显的好处：</p>\n<ul>\n<li>\n<p>1）层级结构非常明显，可以清楚的在第一层的 <code class="gatsby-code-text">node_modules</code> 中看到我们安装的所有包的子目录；</p>\n</li>\n<li>\n<p>2）在已知自己所需包的名字以及版本号时，可以复制粘贴相应的文件到 <code class="gatsby-code-text">node_modules</code> 中，然后手动更改 <code class="gatsby-code-text">package.json</code> 中的配置；</p>\n</li>\n<li>\n<p>3）如果想要删除某个包，只需要简单的删除 <code class="gatsby-code-text">package.json</code> 文件中相应的某一行，然后删除 <code class="gatsby-code-text">node_modules</code> 中该包的目录；</p>\n</li>\n</ul>\n<p>但是这样的层级结构也有较为明显的缺陷，当我的 <code class="gatsby-code-text">A</code>，<code class="gatsby-code-text">B</code>，<code class="gatsby-code-text">C</code> 三个包中有相同的依赖 <code class="gatsby-code-text">D</code> 时，执行 <code class="gatsby-code-text">npm install</code> 后，<code class="gatsby-code-text">D</code> 会被重复下载三次，而随着我们的项目越来越复杂，<code class="gatsby-code-text">node_modules</code> 中的依赖树也会越来越复杂，像 <code class="gatsby-code-text">D</code> 这样的包也会越来越多，造成了大量的冗余；在 <code class="gatsby-code-text">windows</code> 系统中，甚至会<strong>因为目录的层级太深导致文件的路径过长，触发文件路径不能超过 280 个字符的错误</strong>；</p>\n<p>​ 为了解决以上问题，<code class="gatsby-code-text">npm 3</code> 的 <code class="gatsby-code-text">node_modules</code> 目录改成了更为扁平状的层级结构，尽量把依赖以及依赖的依赖平铺在 <code class="gatsby-code-text">node_modules</code> 文件夹下共享使用。</p>\n<h3 id="npm-3-对于同一依赖的不同版本会怎么处理呢？"><a href="#npm-3-%E5%AF%B9%E4%BA%8E%E5%90%8C%E4%B8%80%E4%BE%9D%E8%B5%96%E7%9A%84%E4%B8%8D%E5%90%8C%E7%89%88%E6%9C%AC%E4%BC%9A%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E5%91%A2%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>npm 3 对于同一依赖的不同版本会怎么处理呢？</h3>\n<p><code class="gatsby-code-text">npm 3</code> 会遍历所有的节点，逐个将模块放在 <code class="gatsby-code-text">node_modules</code> 的第一层，<strong>当发现有重复模块时，则判断版本是否兼容，兼容则跳过不再重复安装， 不兼容则继续采用 <code class="gatsby-code-text">npm 2</code> 的处理方式，前面的放在跟目录 <code class="gatsby-code-text">node_modules</code> 目录中，后面的放在依赖树中</strong>。举个例子： <code class="gatsby-code-text">A</code>，<code class="gatsby-code-text">B</code>，依赖 <code class="gatsby-code-text">D</code>(v 0.0.1)，<code class="gatsby-code-text">C</code> 依赖 <code class="gatsby-code-text">D</code>(v 0.0.2):</p>\n<p><img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8588051089/c213/9b56/cf72/997029c823a51d4bc2b4b8f1f9a96d02.png" alt="npm 3 packages"></p>\n<p>但是 <code class="gatsby-code-text">npm 3</code> 会带来一个新的问题：由于在执行 <code class="gatsby-code-text">npm install</code> 的时候，按照 <code class="gatsby-code-text">package.json</code> 里依赖的顺序依次解析，上图如果 <code class="gatsby-code-text">C</code> 的顺序在 <code class="gatsby-code-text">A，B</code> 的前边，<code class="gatsby-code-text">node_modules</code> 树则会改变，会出现下边的情况：</p>\n<p><img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8588134162/be45/2d48/8f1d/ead5c23d4eb16e368685b5defb242fc6.png"></p>\n<p>由此可见，<code class="gatsby-code-text">npm 3</code> 的整体思路是:<strong>尽量平铺，发生冲突在 <code class="gatsby-code-text">package.json</code> 靠后的则采用树状结构</strong>，但是 <code class="gatsby-code-text">npm 3</code> 并未完全解决冗余的问题，甚至还会带来新的问题。</p>\n<h3 id="npm-3-冲突解决机制真的很完美吗？"><a href="#npm-3-%E5%86%B2%E7%AA%81%E8%A7%A3%E5%86%B3%E6%9C%BA%E5%88%B6%E7%9C%9F%E7%9A%84%E5%BE%88%E5%AE%8C%E7%BE%8E%E5%90%97%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>npm 3 冲突解决机制真的很完美吗？</h3>\n<p>当出现版本不兼容时，npm 会将依赖的包安装至当前包的 node_modules 下，有点 submodule 的意思，但也不是真的万无一失，还是有可能出现由于多版本共存导致的冲突。</p>\n<p>还是拿上面的 A/B/C 三个依赖模块来举例，比如 <code class="gatsby-code-text">D v0.0.1</code> 中向 <code class="gatsby-code-text">window</code> 对象注册了一个属性，<code class="gatsby-code-text">D v0.0.2</code> 也向 <code class="gatsby-code-text">window</code> 中注册了一个属性，由于 <code class="gatsby-code-text">D v0.0.1</code> 和 <code class="gatsby-code-text">D v0.0.2</code> 差距很大，虽然注册的是同一个对象，但属性和其函数差距很大，当一个页面同时引入 A/B/C 模块时，<code class="gatsby-code-text">D v0.0.1</code> 和 <code class="gatsby-code-text">D v0.0.2</code> 都会加载，可能会出现一些意外的错误。对于使用者来说是不能接受的。</p>\n<p>这种问题在 Java 生态中的包管理虽然也有，但形式会有所不同：</p>\n<p>在 Maven 中（Java 生态的包管理工具），虽然依赖是树状结构的，但构建后的结果其实是平面（flat）的的。如果出现多个版本的 jar 包，运行时一般会将所有 jar 包都加载；不过由于 JAVA 中 ClassLoader 的 parent delegate 机制，同样的 Class 只会被加载一次，下 N 个 Jar 包内的的同名类（包名+类名）会被忽略，这样的好处是简单，如果出现版本冲突也清晰可见，冲突问题需要使用者自行处理。</p>\n<p>Maven Build 对包（传递）依赖多版本的处理，如下图所示：</p>\n<p><img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8599680522/e111/c7bc/86e1/65fc443ebfe767d05dfb58f9e773ce41.png"></p>\n<p>npm 对于这种可能出现的版本冲突问题，也提供了一个解决办法：<code class="gatsby-code-text">peerDependencies</code>，npm 依赖分为 5 中没，常用的有三种，请看下一节依赖分类介绍：</p>\n<h2 id="依赖的区别与使用场景"><a href="#%E4%BE%9D%E8%B5%96%E7%9A%84%E5%8C%BA%E5%88%AB%E4%B8%8E%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>依赖的区别与使用场景</h2>\n<p>npm 目前支持以下几类依赖包管理包括：</p>\n<ul>\n<li>dependencies</li>\n<li>devDependencies</li>\n<li>peerDependencies 同等依赖</li>\n<li>optionalDependencies 可选择的依赖包</li>\n<li>bundledDependencies 捆绑依赖包</li>\n</ul>\n<p>下面我们来看一下这几种依赖的区别以及各自的应用场景：</p>\n<h3 id="dependencies"><a href="#dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dependencies</h3>\n<p><code class="gatsby-code-text">dependencies</code> 是无论在开发环境还是在生产环境都必须使用的依赖，是我们最常用的依赖包管理对象，例如 <code class="gatsby-code-text">React</code>，<code class="gatsby-code-text">Loadsh</code>，<code class="gatsby-code-text">Axios</code> 等，通过 <code class="gatsby-code-text">npm install XXX</code> 下载的包都会默认安装在 <code class="gatsby-code-text">dependencies</code> 对象中，也可以使用 <code class="gatsby-code-text">npm install XXX --save</code> 下载 <code class="gatsby-code-text">dependencies</code> 中的包；</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsxon"><code class="gatsby-code-jsxon">{\n  &quot;dependencies&quot;: {\n    &quot;foo&quot;: &quot;1.0.0 - 2.9999.9999&quot;,\n    &quot;bar&quot;: &quot;&gt;=1.0.2 &lt;2.1.2&quot;,\n    &quot;baz&quot;: &quot;&gt;1.0.2 &lt;=2.3.4&quot;,\n    &quot;boo&quot;: &quot;2.0.1&quot;,\n    &quot;qux&quot;: &quot;&lt;1.0.0 || &gt;=2.3.1 &lt;2.4.5 || &gt;=2.5.2 &lt;3.0.0&quot;,\n    &quot;asd&quot;: &quot;http://asdf.com/asdf.tar.gz&quot;,\n    &quot;til&quot;: &quot;~1.2&quot;,\n    &quot;elf&quot;: &quot;~1.2.3&quot;,\n    &quot;two&quot;: &quot;2.x&quot;,\n    &quot;thr&quot;: &quot;3.3.x&quot;,\n    &quot;lat&quot;: &quot;latest&quot;,\n    &quot;dyl&quot;: &quot;file:../dyl&quot;\n  }\n}</code></pre>\n      </div>\n<h3 id="devdependencies"><a href="#devdependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>devDependencies</h3>\n<p><code class="gatsby-code-text">devDependencies</code> 是指可以在<strong>开发环境使用但是正式环境不需要</strong>的依赖，例如 <code class="gatsby-code-text">eslint</code>，<code class="gatsby-code-text">debug</code> 等，通过 <code class="gatsby-code-text">npm install packageName --save-dev</code> 下载的包都会在 <code class="gatsby-code-text">devDependencies</code> 对象中；</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsxon"><code class="gatsby-code-jsxon">{\n  &quot;devDependencies&quot;: {\n    &quot;eslint&quot;: &quot;^5.0.0&quot;\n  }\n}</code></pre>\n      </div>\n<p><code class="gatsby-code-text">dependencies</code> 和 <code class="gatsby-code-text">devDependencies</code> 区别是:在打包运行时，执行 <code class="gatsby-code-text">npm install</code> 时默认会把所有依赖全部安装，但是如果使用 <code class="gatsby-code-text">npm install --production</code> 时就只会安装 <code class="gatsby-code-text">dependencies</code> 中的依赖，如果是 <code class="gatsby-code-text">node</code> 服务项目，就可以采用这样的方式用于服务运行时安装和打包，减少包大小。</p>\n<p><code class="gatsby-code-text">dependencies</code> 和 <code class="gatsby-code-text">devDependencies</code> 的另一个核心区别是：当我们开发了某个 <code class="gatsby-code-text">packageA</code>,然后 publish 到 npm 以后，别人在使用<code class="gatsby-code-text">npm i packageA</code>的时候，<strong><code class="gatsby-code-text">packageA</code> 中的<code class="gatsby-code-text">dependencies</code>会被安装，而 <code class="gatsby-code-text">devDependencies</code> 不会被安装，这很重要</strong>。</p>\n<h3 id="peerdependencies"><a href="#peerdependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>peerDependencies</h3>\n<p><code class="gatsby-code-text">peerDependencies</code> 用于指定你当前的插件兼容的宿主必须要安装的包的版本，这个是什么意思呢？举个例子 🌰：我们常用的 <code class="gatsby-code-text">react</code> 组件库 <code class="gatsby-code-text">ant-design@3.x</code> 的 <code class="gatsby-code-text">package.json</code> 中的配置如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsxon"><code class="gatsby-code-jsxon">&quot;peerDependencies&quot;: {\n  &quot;react&quot;: &quot;&gt;=16.9.0&quot;,\n  &quot;react-dom&quot;: &quot;&gt;=16.9.0&quot;\n},</code></pre>\n      </div>\n<p>假设我们创建了一个名为 <code class="gatsby-code-text">project</code> 的项目，在此项目中我们要使用 <code class="gatsby-code-text">ant-design@3.x</code> 这个插件，此时我们的项目就必须先安装 <code class="gatsby-code-text">React &gt;= 16.9.0</code> 和 <code class="gatsby-code-text">React-dom &gt;= 16.9.0</code> 的版本。</p>\n<ul>\n<li>\n<p>在 <code class="gatsby-code-text">npm 2</code> 中，当我们下载 <code class="gatsby-code-text">ant-design@3.x</code> 时，<code class="gatsby-code-text">peerDependencies</code> 中指定的依赖会随着 <code class="gatsby-code-text">ant-design@3.x</code> 一起被强制安装，所以我们不需要在宿主项目的 <code class="gatsby-code-text">package.json</code> 文件中指定 <code class="gatsby-code-text">peerDependencies</code> 中的依赖 (React)</p>\n</li>\n<li>\n<p>在 <code class="gatsby-code-text">npm 3-6</code> 中，不会再强制安装 <code class="gatsby-code-text">peerDependencies</code> 中所指定的包，<strong>而是通过警告的方式来提示我们</strong>，此时就需要手动在 <code class="gatsby-code-text">package.json</code> 文件中手动添加依赖。</p>\n</li>\n<li>\n<p>在 <code class="gatsby-code-text">npm 7</code> 中 <code class="gatsby-code-text">peerDependencies</code> 指定的依赖会被<strong>默认强制安装</strong> (这可真是戏剧性的一幕，天下大势，分久必合，合久必分…)</p>\n</li>\n</ul>\n<p>某项目 <code class="gatsby-code-text">A</code> ，依赖 <code class="gatsby-code-text">packageB</code> 和 <code class="gatsby-code-text">packageC</code>(c1:‘1.0.5’)，同时 <code class="gatsby-code-text">B</code> 中 <code class="gatsby-code-text">peerDependencies</code> 同样声明了 <code class="gatsby-code-text">packageC</code>(c2:‘2.0.0’)，此时 <code class="gatsby-code-text">c1</code> 和 <code class="gatsby-code-text">c2</code> 版本不兼容,则在安装 <code class="gatsby-code-text">packageB</code> 的时候，<strong>npm 会提示 warn，要求手动安装 c2:‘2.0.0’，并解决冲突，不然可能会遇到未知的 bug</strong>。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-sh"><code class="gatsby-code-sh">npm WARN hidash@0.2.0 requires a peer of lodash@~1.3.1 but none is installed. You must install peer dependencies yourself.</code></pre>\n      </div>\n<p><code class="gatsby-code-text">peerDependencies</code> 是开发 npm 包中及其重要的一环，比如：我们可以多个公用的基础包，放在 <code class="gatsby-code-text">peerDependencies</code> 中，这样可以“在一定程度上避免版本冲突”。</p>\n<h2 id="为什么会出现-package-lockjson-呢？"><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E5%87%BA%E7%8E%B0-package-lockjson-%E5%91%A2%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为什么会出现 package-lock.json 呢？</h2>\n<p>为什么会有 <code class="gatsby-code-text">package-lock.json</code> 文件呢？这个我们就要先从 <code class="gatsby-code-text">package.json</code> 文件说起了。</p>\n<h3 id="packagejson-的不足之处"><a href="#packagejson-%E7%9A%84%E4%B8%8D%E8%B6%B3%E4%B9%8B%E5%A4%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>package.json 的不足之处</h3>\n<p><code class="gatsby-code-text">npm install</code> 执行后，会生成一个 <code class="gatsby-code-text">node_modules</code> 树，在理想情况下， 希望对于同一个 <code class="gatsby-code-text">package.json</code> 总是生成完全相同 <code class="gatsby-code-text">node_modules</code> 树。在某些情况下，确实如此。但在多数情况下，<code class="gatsby-code-text">npm</code> 无法做到这一点。有以下两个原因：</p>\n<ul>\n<li>\n<p>1）某些依赖项自上次安装以来，可能已发布了新版本 。比如：<code class="gatsby-code-text">A</code> 包在团队中第一个人安装的时候是 <code class="gatsby-code-text">1.0.5</code> 版本，<code class="gatsby-code-text">package.json</code> 中的配置项为 <code class="gatsby-code-text">A: &#39;^1.0.5&#39;</code> ；团队中第二个人把代码拉下来的时候，<code class="gatsby-code-text">A</code> 包的版本已经升级成了 <code class="gatsby-code-text">1.0.8</code>，根据 <code class="gatsby-code-text">package.json</code> 中的 <a href="https://semver.org/">semver-range version</a> 规范，此时第二个人 <code class="gatsby-code-text">npm install</code> 后会自动更新 <code class="gatsby-code-text">A</code> 的版本为 <code class="gatsby-code-text">1.0.8</code>； 可能会造成因为依赖版本不同而导致的 <code class="gatsby-code-text">bug</code>；</p>\n</li>\n<li>\n<p>2）针对 1）中的问题，可能有的小伙伴会想，把 <code class="gatsby-code-text">A</code> 的版本号固定为 <code class="gatsby-code-text">A: &#39;1.0.5&#39;</code> 不就可以了吗？但是这样的做法其实并没有解决问题， 比如 <code class="gatsby-code-text">A</code> 的某个依赖在第一个人下载的时候是 <code class="gatsby-code-text">2.1.3</code> 版本，但是第二个人下载的时候已经升级到了 <code class="gatsby-code-text">2.2.5</code> 版本，此时生成的 <code class="gatsby-code-text">node_modules</code> 树依旧不完全相同 ，<strong>固定版本只是固定来自身的版本，依赖的版本无法固定,也不能要求所有人都采用固定版本的方案</strong>。</p>\n</li>\n</ul>\n<h3 id="针对-packagejson-不足的解决方法"><a href="#%E9%92%88%E5%AF%B9-packagejson-%E4%B8%8D%E8%B6%B3%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>针对 package.json 不足的解决方法</h3>\n<p>为了解决上述问题以及 <code class="gatsby-code-text">npm 3</code> 的问题，在 <code class="gatsby-code-text">npm 5.0</code> 版本后，<code class="gatsby-code-text">npm install</code> 后都会自动生成一个 <code class="gatsby-code-text">package-lock.json</code> 文件 ，当包中有 <code class="gatsby-code-text">package-lock.json</code> 文件时，<code class="gatsby-code-text">npm install</code> 执行时，如果 <code class="gatsby-code-text">package.json</code> 和 <code class="gatsby-code-text">package-lock.json</code> 中的版本兼容，会根据 <code class="gatsby-code-text">package-lock.json</code> 中的版本下载；如果不兼容，将会根据 <code class="gatsby-code-text">package.json</code> 的版本，更新 <code class="gatsby-code-text">package-lock.json</code> 中的版本，已保证 <code class="gatsby-code-text">package-lock.json</code> 中的版本兼容 <code class="gatsby-code-text">package.json</code>。</p>\n<h3 id="package-lockjson-文件的作用"><a href="#package-lockjson-%E6%96%87%E4%BB%B6%E7%9A%84%E4%BD%9C%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>package-lock.json 文件的作用</h3>\n<ul>\n<li>\n<p>在团队开发中，确保每个团队成员安装的依赖版本是一致的，确定一棵唯一的 <code class="gatsby-code-text">node_modules</code> 树；</p>\n</li>\n<li>\n<p><code class="gatsby-code-text">node_modules</code> 目录本身是不会被提交到代码库的，但是 <code class="gatsby-code-text">package-lock.json</code> 可以提交到代码库，如果开发人员想要回溯到某一天的目录状态，只需要把 <code class="gatsby-code-text">package.json</code> 和 <code class="gatsby-code-text">package-lock.json</code> 这两个文件回退到那一天即可 。</p>\n</li>\n<li>\n<p>由于 <code class="gatsby-code-text">package-lock.json</code> 和 <code class="gatsby-code-text">node_modules</code> 中的依赖嵌套完全一致，可以更加清楚的了解树的结构及其变化。</p>\n</li>\n<li>\n<p>在安装时，<code class="gatsby-code-text">npm</code> 会比较 <code class="gatsby-code-text">node_modules</code> 已有的包，和 <code class="gatsby-code-text">package-lock.json</code> 进行比较，如果重复的话，就跳过安装 ，从而优化了安装的过程。</p>\n</li>\n</ul>\n<h2 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h2>\n<h3 id="npm--webpack"><a href="#npm--webpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>npm &#x26; webpack</h3>\n<p>现在很多项目都会使用 <code class="gatsby-code-text">webpack</code> 来作为项目的构建工具，但是和 <code class="gatsby-code-text">java</code> 中的 <code class="gatsby-code-text">maven</code> <code class="gatsby-code-text">不同，webpack</code> 和 <code class="gatsby-code-text">npm</code> 是两套独立的工具，构建和包管理是分开的</p>\n<p>也就是说，哪怕 <code class="gatsby-code-text">npm</code> 将冲突包作为“submodule”的形式安装在当前包内，但是 <code class="gatsby-code-text">webpack</code> 可不一定认。</p>\n<p>比如上面 <code class="gatsby-code-text">A/B/C</code> 三个模块的例子，如果 <code class="gatsby-code-text">A</code> 模块的代码中 <code class="gatsby-code-text">import BObj from D module</code>，那么 <code class="gatsby-code-text">webpack</code> 构建之后，会让 <code class="gatsby-code-text">A</code> 引用哪一个 <code class="gatsby-code-text">B</code> 版本呢？<code class="gatsby-code-text">v0.0.1</code> 还是 <code class="gatsby-code-text">v0.0.1</code>？</p>\n<p>这个场景相当复杂，本文就不介绍了，请阅读<a href="">TODO:</a></p>\n<h3 id="最后"><a href="#%E6%9C%80%E5%90%8E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>最后</h3>\n<p>npm 包管理的设计理念虽然很好，但不适合所有的场景，比如这种 <code class="gatsby-code-text">submodule</code> 的模式拿到 <code class="gatsby-code-text">java</code> 里就不可行，而且 <code class="gatsby-code-text">submodule</code> 的模式还是有一定的风险，只是风险降低了。一旦有多个依赖的代码在一个页面同时工作或交互，就很容易出问题。</p>\n<p>无论是什么包管理工具，最安全的做法还是避免重复。在增加新依赖或是新建项目后，使用一些依赖分析检查工具检测一遍，修复重复/冲突的依赖。</p>',frontmatter:{title:"npm package依赖管理",img:"./img/2018-03-06.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"March 02, 2021",path:"blog/node/2021-03-03-npm-package.md",slug:"/blog/2021/03/03/npm-package.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"shell intro"},fields:{slug:"/blog/2021/06/02/shell-intro.html"}}},{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"Koa实现原理分析"},fields:{slug:"/blog/2021/02/06/koa.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}}]}},pathContext:{slug:"/blog/2021/03/03/npm-package.html"}}}});