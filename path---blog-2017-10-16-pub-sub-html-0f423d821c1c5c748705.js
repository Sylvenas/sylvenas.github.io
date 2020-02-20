webpackJsonp([94560950738343],{479:function(n,s){n.exports={data:{markdownRemark:{html:'<p>发布订阅模式Pub/Sub,它的主要概念为<code class="gatsby-code-text">定义一对多的关系，当一件事发布时会同时通知所有的订阅者</code>，在JavaScript和Jquery非常容易看到该模式的使用，例如Jquery里的<code class="gatsby-code-text">on</code>,下面的代码就可以想象成，<code class="gatsby-code-text">$(&#39;.someThing&#39;)</code>为订阅者，订阅了click,如果click事件发生了。发布者就会执行<code class="gatsby-code-text">doSomething</code>方法。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.SomeThing\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//doSomething</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>该模式的优点在于<code class="gatsby-code-text">解偶合</code>，发布者与订阅者不需要知道对方的存在。<br>\n在使用的时候，当一个对象改变时，需要同时改变其他对象，但却不知道实际有多少个对象时，就可以考虑使用<code class="gatsby-code-text">Pub/Sub模式</code>。   </p>\n<h3 id="pubsub-简单示例"><a href="#pubsub-%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pub/Sub 简单示例</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> EventHub <span class="token operator">=</span> <span class="token punctuation">{</span>\n    topics<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    subscribe<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>topic<span class="token punctuation">,</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    publish<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>topic<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">listener</span><span class="token punctuation">(</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>然后就可以使用了，首先订阅一个<code class="gatsby-code-text">Task</code>,并且当Task被触发时，会自动执行<code class="gatsby-code-text">task函数</code>。   </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">EventHub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">\'Task\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">task</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data <span class="token operator">+</span> <span class="token string">\'by Task1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nEventHub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">\'Task\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">task</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data <span class="token operator">+</span> <span class="token string">\'by Task2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>然后来触发<code class="gatsby-code-text">Task</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">EventHub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">\'Task\'</span><span class="token punctuation">,</span> <span class="token string">\'Hello pub and sub~\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>执行结果为：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token string">\'Hello pub and sub ~ by Task1\'</span>\n<span class="token string">\'Hello pub and sub ~ by Task2\'</span></code></pre>\n      </div>\n<h3 id="pubsub-不适合处理的类型"><a href="#pubsub-%E4%B8%8D%E9%80%82%E5%90%88%E5%A4%84%E7%90%86%E7%9A%84%E7%B1%BB%E5%9E%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pub/Sub 不适合处理的类型</h3>\n<p><code class="gatsby-code-text">Pub/Sub</code>不适合用于一次性事件，所谓一次性事件，是指执行一次任务但可能产生多重结果（例如成功事件和失败事件），做不同的处理，<code class="gatsby-code-text">Ajax</code>请求就是很常见的一次性事件。这种最好使用Promise来处理。</p>',frontmatter:{title:"pub & sub",img:"./img/2017-10-16.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"October 15, 2017",path:"blog/design-pattern/2017-10-16-pub-sub.md",slug:"/blog/2017/10/16/pub-sub.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/02/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}},{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}}]}},pathContext:{slug:"/blog/2017/10/16/pub-sub.html"}}}});