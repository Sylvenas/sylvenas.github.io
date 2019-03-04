webpackJsonp([0x880e8dd0878b],{478:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="发布订阅模式的概念"><a href="#%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%A6%82%E5%BF%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>发布订阅模式的概念</h3>\n<p>发布订阅模式Pub/Sub,它的主要概念为<code class="gatsby-code-text">定义一对多的关系，当一件事发布时会同时通知所有的订阅者</code>，在JavaScript和Jquery非常容易看到该模式的使用，例如Jquery里的<code class="gatsby-code-text">on</code>,下面的代码就可以想象成，<code class="gatsby-code-text">$(&#39;.someThing&#39;)</code>为订阅者，订阅了click,如果click事件发生了。发布者就会执行<code class="gatsby-code-text">doSomething</code>方法。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.SomeThing\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//doSomething</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>该模式的优点在于<code class="gatsby-code-text">解偶合</code>，发布者与订阅者不需要知道对方的存在。<br>\n在使用的时候，当一个对象改变时，需要同时改变其他对象，但却不知道实际有多少个对象时，就可以考虑使用<code class="gatsby-code-text">Pub/Sub模式</code>。</p>\n<h3 id="发布订阅模式的实现过程"><a href="#%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E8%BF%87%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>发布订阅模式的实现过程</h3>\n<ul>\n<li>创建一个调度中心，用来调度各种发布者和订阅者。</li>\n<li>创建一个缓存列表，用来存放订阅者以及订阅者接收数据的响应逻辑，并提供对象的取消订阅的方法。</li>\n<li>提供一个供发布者发布数据的接口，可以接受发布的数据。</li>\n</ul>\n<h3 id="pubsub-简单示例"><a href="#pubsub-%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pub/Sub 简单示例</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> ControlCenter <span class="token operator">=</span> <span class="token punctuation">{</span>\n    subscribers<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token function">subscribe</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token function">unsubscribe</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> listeners <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>listeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">let</span> index <span class="token operator">=</span> listeners<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            listeners<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token function">publish</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> valObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>valObj<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            valObj<span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">let</span> listeners <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> ll <span class="token operator">=</span> listeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ll<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            listeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>valObj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>然后就可以使用了，首先订阅一个<code class="gatsby-code-text">test/foo</code>,并且当Task被触发时，会自动执行<code class="gatsby-code-text">foo函数</code>。   </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nControlCenter<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">\'test/foo\'</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>然后来触发<code class="gatsby-code-text">test/foo</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">ControlCenter<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">\'test/foo\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> msg<span class="token punctuation">:</span> <span class="token string">\'hello,this is a msg\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>最后再取消关注<code class="gatsby-code-text">test/foo</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">ControlCenter<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token string">\'test/foo\'</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nControlCenter<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">\'test/foo\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> msg<span class="token punctuation">:</span> <span class="token string">\'this should not be seen\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>执行结果为：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token string">\'hello,this is a msg\'</span></code></pre>\n      </div>\n<h3 id="发布订阅模式的应用场景"><a href="#%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>发布订阅模式的应用场景</h3>\n<ul>\n<li>\n<p>DOM事件<br>\n一种典型的发布订阅者模式，一个事件(‘click’)对一个dom节点进行监听；我们操作DOM节点，触发相应的事件，响应函数执。虽然dom节点和响应函数彼此之间，互相完全不了解，却不影响整个流程的完整进行。</p>\n</li>\n<li>\n<p>自定义事件<br>\n事件是与DOM交互的最常见的方式，但是事件的概念完全可以应用在非DOM代码中;</p>\n</li>\n<li>\n<p>全局的发布订阅模式<br>\n使用一个全局的<code class="gatsby-code-text">ControlCenter</code>对象做为调度中心，来管理全局的<code class="gatsby-code-text">发布者</code>和<code class="gatsby-code-text">订阅者</code>，完全解除了发布者和订阅者之间的耦合关系。</p>\n</li>\n<li>\n<p>模块之间的通信<br>\n现在流行的MVVM框架中，两个不相关联的模块之间的通信。典型的例子为<code class="gatsby-code-text">redux</code>中的最核心代码：<a href="https://github.com/reactjs/redux/blob/master/src/createStore.js"><code class="gatsby-code-text">createStore</code></a>类中的<code class="gatsby-code-text">subscriabe</code>和<code class="gatsby-code-text">dispatch</code>方法为典型的发布订阅模式。</p>\n</li>\n</ul>\n<h3 id="pubsub-不适合处理的类型"><a href="#pubsub-%E4%B8%8D%E9%80%82%E5%90%88%E5%A4%84%E7%90%86%E7%9A%84%E7%B1%BB%E5%9E%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pub/Sub 不适合处理的类型</h3>\n<p><code class="gatsby-code-text">Pub/Sub</code>不适合用于一次性事件，所谓一次性事件，是指执行一次任务但可能产生多重结果（例如成功事件和失败事件），做不同的处理，<code class="gatsby-code-text">Ajax</code>请求就是很常见的一次性事件。这种最好使用Promise来处理。</p>',frontmatter:{title:"发布订阅模式",img:"./img/2018-01-06.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"January 05, 2018",path:"blog/design-pattern/2018-01-06-pub-sub-pattern.md",slug:"/blog/2018/01/06/pub-sub-pattern.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}},{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}}]}},pathContext:{slug:"/blog/2018/01/06/pub-sub-pattern.html"}}}});