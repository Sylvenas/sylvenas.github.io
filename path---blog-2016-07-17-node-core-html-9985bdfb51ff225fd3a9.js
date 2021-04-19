webpackJsonp([0xf57dc8d41178],{482:function(n,a){n.exports={data:{markdownRemark:{html:'<h2 id="nodejs架构"><a href="#nodejs%E6%9E%B6%E6%9E%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node.js架构</h2>\n<p>相信只要你是一名前端，或多或少都能说出一些你对 Node.js 的理解与看法。</p>\n<p>我们先来看看浏览器与Node的一个对比，毕竟很多前端初学者可能还没有接触过Node，只是在浏览器里面跑项目。</p>\n<p><img src="https://p1.music.126.net/EEohndwWlmawXTRv6As9Ww==/109951164833954299.png" alt="Node.js VS Chrome"></p>\n<p>左图是浏览器的一个简单架构，我们平时写的前端项目无非就是3个部分:</p>\n<p>HTML跟CSS交给<code class="gatsby-code-text">WebKit</code>引擎去处理，经过一系列的转换处理，最终呈现到我们的屏幕上，之前有看过Chrome团队SteveKobes的一个分享，从最底层出发分析了浏览器的一个渲染过程，后面找时间再跟大家分享。</p>\n<p>JavaScript交给<code class="gatsby-code-text">V8引擎</code>去处理，解析，关于引擎本文暂时不多讲。</p>\n<p>再往下看到中间层，Chrome中的中间层能力是有限的，因为被限制在了浏览器中，比如我们想在浏览器中操作一些本地的文件，早些时候是很难的一件事情，不过随着HTML5的普及，已经可以实现部分功能了，但是跟Node中间层的能力比起来，还差很多。</p>\n<p>我们把左图中的红色部分去掉，其实也就是一个简单的 Node 架构了，在 Node 中，我们可以随意的操控文件，甚至搭建各种服务，虽然 Node 不处理 UI 层，但是却与浏览器以相同的机制和原理运行，并且在中间层这里有着自己更加强大的功能。</p>\n<blockquote>\n<p>顺着这个思路，我们再想想，如果我们把 WebKit 引擎也进行抽离，然后再加上 Node，是不是就可以脱离浏览器开发带有 UI 处理的 Node 项目了？想必你已经知道怪怪要说啥了，Electron 其实就是这样做的 ~ </p>\n</blockquote>\n<p>所以，简单直观的来讲 Node 就是脱离了浏览器的，但仍然基于 Chrome V8 引擎的一个 JavaScript 的运行环境。  </p>\n<p>从官网的介绍中也可以看到，其 轻量、高效、事件驱动、非阻塞 I/O 是 Node 几个很重要的特性，接下来，我们将从 Node 的运行机制作为切入点，一步步带大家剖析 Node 单线程如何实现高并发，又是如何充分利用服务器资源的。 </p>\n<p>上面的 Node 架构图比较简易，下面看看比较完整的，基础架构可以大致分为下面三层：</p>\n<p><img src="https://p1.music.126.net/IaLqEsbRQL8ZhcyAr2wXsQ==/109951164834009707.png" alt="Node.js架构图"></p>\n<h3 id="上层"><a href="#%E4%B8%8A%E5%B1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>上层</h3>\n<p>这一层是Node.js标准库，其实简单理解就是JavaScript代码，可以在便携代码时直接调用相关API，Node.js提供了很多很强大的 API 供我们实现，具体可多在实践中去使用深入，举个很简单的例子，我们可以用 Node 写一个定时脚本，去检查口罩是否有货。</p>\n<h3 id="中层"><a href="#%E4%B8%AD%E5%B1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>中层</h3>\n<p>Node bindings（由 c++ 实现），这一层说白了就是个媒人，牵线搭桥，让 JavaScript 小哥哥能够与下层的一堆小姐姐进行交往，Node 之所有这么强，这一层起了十分关键的作用。</p>\n<h3 id="下层"><a href="#%E4%B8%8B%E5%B1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>下层</h3>\n<p>这一层是Node.js运行时的关键核心所在</p>\n<ul>\n<li>\n<p>V8: 可以简单粗暴归纳为，目前业界最牛的 JavaScrpt 引擎。虽然有人尝试使用 V8 的替代品，比如 node-chakracore 项目 以及 spidernode 项目，但 Node.js 依然默认使用 V8 引擎。</p>\n</li>\n<li>\n<p>c-ares: 一个由 C 语言实现的异步 DNS 请求库</p>\n</li>\n<li>\n<p>http parser: OpenSSL、zlib 等，提供一些其他的基础能力</p>\n</li>\n<li>\n<p>libuv: 是一个高性能的，事件驱动的 I/O 库，并且提供了跨平台（如 Windows、Linux）的API。它强制使用异步的，事件驱动的编程风格，核心工作就是提供一个 event loop，还有基于 I/O 和其它事件通知的回调函数。并且还提供了一些核心工具，例如定时器，非阻塞的网络支持，异步文件系统访问，子进程等</p>\n</li>\n</ul>\n<h3 id="nodejs的调用的链路说明"><a href="#nodejs%E7%9A%84%E8%B0%83%E7%94%A8%E7%9A%84%E9%93%BE%E8%B7%AF%E8%AF%B4%E6%98%8E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node.js的调用的链路说明</h3>\n<p>假设我们需要打开一个本地 txt 的文件的内容，那代码可以写成这样：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span>\n\nfs<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">\'./hello.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'w\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span>content<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">fs.open()</code>的作用是根据指定路径和参数去打开一个文件，返回一个文件描述符</p>\n<p>我们进去 lib/fs.js ，看看底层源码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token function"> open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> flags<span class="token punctuation">,</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n  mode <span class="token operator">=</span><span class="token function"> modeNum</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> <span class="token number">0o666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n  path <span class="token operator">=</span><span class="token function"> getPathFromURL</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n  <span class="token function">validatePath</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n  <span class="token function">validateUint32</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> <span class="token string">\'mode\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FileHandle</span><span class="token punctuation">(</span>\n    <span class="token keyword">await</span> binding<span class="token punctuation">.</span><span class="token function">openFileHandle</span><span class="token punctuation">(</span>\n      pathModule<span class="token punctuation">.</span><span class="token function">toNamespacedPath</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">,</span> \n      <span class="token function">stringToFlags</span><span class="token punctuation">(</span>flags<span class="token punctuation">)</span><span class="token punctuation">,</span> \n      mode<span class="token punctuation">,</span> \n      kUsePromises<span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>JavaScript 代码通过调用 C++ 核心模块进行下层操作，其调用过程可表示为:</p>\n<p><img src="https://p1.music.126.net/TXMjFBa8WEbILn7rpM2nfA==/109951164834044273.png" alt="JS -> C++"></p>\n<p>从 JavaScript 调用 Node.js 标准库，再由标准库调用 C++ 模块，C++ 模块再通过 libuv 进行系统调用，这一流程即为 Node 中最为常见的调用方式。同时 libuv 还提供了 *UNIX 和 Windows 两个平台的实现，赋予了 Node.js 跨平台的能力。</p>\n<h2 id="nodejs与单线程"><a href="#nodejs%E4%B8%8E%E5%8D%95%E7%BA%BF%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node.js与单线程</h2>\n<p>所谓的 Node 单线程其实只是一个 JavaScript 主线程，那些耗时的异步操作还是线程池完成的，Node 将这些耗时的操作都扔到线程池去处理了，而 Node 自己只需要往返调度，并没有执行真正的 I/O 操作。</p>\n<p><img src="https://p1.music.126.net/nj7_WNaLiDK2THr6iD-bOg==/109951164834047884.png" alt="Node.js与单线程"></p>\n<h3 id="单线程与cpu密集"><a href="#%E5%8D%95%E7%BA%BF%E7%A8%8B%E4%B8%8Ecpu%E5%AF%86%E9%9B%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>单线程与CPU密集</h3>\n<p>单线程带来了不需要在意状态同步问题的好处，同时也带了几个弱点</p>\n<ul>\n<li>无法利用多核 CPU</li>\n<li>出现错误会导致整个应用退出</li>\n<li>CPU 密集型任务会导致异步I/O失效</li>\n</ul>\n<p>Node.js 中用来解决单线程中 CPU 密集任务的方法很粗暴，那就是直接开子进程，通过 child_process 将计算任务分发给子进程，再通过进程之间的事件消息来传递结果，也就是进程间通信。（Node 中是采用管道的方式进行通信的哦~）</p>\n<p>此部分可以仔细阅读<a href="/blog/2018/10/22/node-process-stability.html">专题文章</a>深入理解</p>\n<h2 id="事件驱动"><a href="#%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>事件驱动</h2>\n<p>由于JavaScript是单线程的，这使得它天生就是同步的。也是就是说JavaScript在运行中会逐行执行，直到程序结束。由于Node.js是基于JavaScript的，因此Node.js继承了这种单线程同步行为。不过某些功能需要等待另外一些耗时操作(比如读取文件，等待web响应)，而操作完成之前程序无法继续运行，这很很明显是不合理切不可接受的。</p>\n<p>防止这种阻塞的解决方案就是事件驱动，事件驱动的实质就是通过<code class="gatsby-code-text">主循环</code> + <code class="gatsby-code-text">事件触发</code>的方式来运行程序。</p>\n<p>事件循环的职责，就是不断得等待事件的发生，然后将这个事件的所有处理器，以它们订阅这个事件的时间顺序，依次执行。当这个事件的所有处理器都被执行完毕之后，事件循环就会开始继续等待下一个事件的触发，不断往复。</p>\n<h3 id="事件循环"><a href="#%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>事件循环</h3>\n<p>Node 的事件循环采用了 libuv 的默认事件循环，相应代码可在 src/node.cc 中看到。</p>\n<p>创建 Node 运行环境：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-c++"><code class="gatsby-code-c++">Environment* env = CreateEnvironment(\n  node_isolate,\n  uv_default_loop(),\n  context,\n  argc,\n  argv,\n  exec_argc,\n  exec_argv);</code></pre>\n      </div>\n<p>启动事件循环:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-c++"><code class="gatsby-code-c++">bool more;\ndo {  \n  more = uv_run(env-&gt;event_loop(), UV_RUN_ONCE);  \n  if (more == false) {    \n    EmitBeforeExit(env);    \n    // Emit `beforeExit` if the loop became alive either after emitting    \n    // event, or after running some callbacks.    \n    more = uv_loop_alive(env-&gt;event_loop());    \n    if (uv_run(env-&gt;event_loop(), UV_RUN_NOWAIT) != 0)      \n    more = true;  \n    }\n  } while (more == true);\n  code = EmitExit(env);\n  RunAtExit(env);</code></pre>\n      </div>\n<p>more 用来标识是否进行下一轮循环。接下来 Node.js 会根据 more 的情况决定下一步操作</p>\n<ul>\n<li>\n<p>如果more为true，则继续运行下一轮loop。</p>\n</li>\n<li>\n<p>如果more为false，说明已经没有等待处理的事件了，EmitBeforeExit(env); 触发进程的  beforeExit 事件，检查并处理相应的处理函数，完成后直接跳出循环。</p>\n</li>\n</ul>\n<p>最后触发 exit 事件，执行相应的回调函数，Node.js 运行结束，后面会进行一些资源释放操作。</p>\n<p><img src="https://p1.music.126.net/-CJmC4_h96TNWO8TSH3raw==/109951164834093676.png" alt="event loop"></p>\n<h3 id="观察者"><a href="#%E8%A7%82%E5%AF%9F%E8%80%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>观察者</h3>\n<p>每个事件循环中都会有观察者，判断是否有要处理的事件就是向这些观察者询问。在 Node.js 中，事件来源主要有网络请求，文件 I/O 等，这些事件都会对应不同的观察者。</p>\n<h3 id="请求对象"><a href="#%E8%AF%B7%E6%B1%82%E5%AF%B9%E8%B1%A1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>请求对象</h3>\n<p>请求对象是 Node 发起调用到内核执行完成 I/O 操作的过渡过程中，产生的一种中间产物。例如，libuv 调用文件 I/O 时，就会立即返回 FSReqWrap 请求对象，JavaScript 传入的参数和当前的方法都被封装在这个请求对象中，同时这个对象也会被推送给内核等待执行。</p>\n<h3 id="事件驱动的优势"><a href="#%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8%E7%9A%84%E4%BC%98%E5%8A%BF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>事件驱动的优势</h3>\n<p>事件循环、观察者、请求对象、I/O 线程池共同构成了 Node 的事件驱动异步 I/O 模型。</p>\n<p>Apache 采用每个请求启动一个线程的方式来处理请求，虽然线程比较轻量，但仍需要占用一定内存，当大并发请求来临时，内存占用会非常高，导致服务器缓慢。</p>\n<p>Node.js 采用事件驱动的方式处理请求，无须为每个请求创建线程，可以省去很多线程创建、销毁和系统上下文切换的开销，即使在大并发条件下，也能提供良好的性能。Nginx 也和 Node 采用了相同的事件驱动模型，借助优异的性能，Nginx 也在逐渐取代 Apache 成为 Web 服务器的主流。</p>',frontmatter:{title:"Node.js核心概念讲解",img:"./img/2018-03-06.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"July 16, 2016",path:"blog/node/2016-07-17-node-core.md",slug:"/blog/2016/07/17/node-core.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}}]}},pathContext:{slug:"/blog/2016/07/17/node-core.html"}}}});