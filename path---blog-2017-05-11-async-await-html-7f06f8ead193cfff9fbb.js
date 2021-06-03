webpackJsonp([76242677258713],{653:function(n,s){n.exports={data:{markdownRemark:{html:'<p>关于异步的实现，上面的一节中的需求：有接口1，接口2，接口3，要求按照顺序输出接口1，接口2，接口3的返回值\n如果用async函数来实现，可以这样写：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> <span class="token function">loadData1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">await</span> <span class="token function">loadData2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">await</span> <span class="token function">loadData3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">async</code>就像是Generator中的<code class="gatsby-code-text">*</code>，<code class="gatsby-code-text">await</code>就相当于Generator中的<code class="gatsby-code-text">yield</code>，同样的await只能在使用了async的函数内使用。</p>\n<h3 id="generator--promise"><a href="#generator--promise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generator + Promise</h3>\n<p>看一个简单的基于Promise实现的ajax的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`http://some.url?x=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;y=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>x <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> err <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>那么如果我们想用Generator包装一下这个ajax请求呢，我们可以使用yield把foo函数返回的promise返回出来，然后等待这个promise的决议，然后把决议之后的结果在通过yield的双向通道传递给Generator函数，听起来非常的绕口，我们看一下代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`http://some.url?x=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;y=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> it <span class="token operator">=</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> promise <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n\npromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>x <span class="token operator">=></span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> err <span class="token operator">=></span> it<span class="token punctuation">.</span><span class="token keyword">throw</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>实际上这并没有那么痛苦，对吧，但是如果有一个方法能够帮助我们实现重复(即循环)的执行迭代控制，每次生成一个promise,待其决议之后再继续，那该多好啊，这是时候，async/await就会登场了</p>\n<blockquote>\n<p>实际上async/await组合就是Generator + Promise的语法糖</p>\n</blockquote>\n<h3 id="async函数的返回值"><a href="#async%E5%87%BD%E6%95%B0%E7%9A%84%E8%BF%94%E5%9B%9E%E5%80%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>async函数的返回值</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">doSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> hello <span class="token operator">=</span> <span class="token string">\'hello\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">doSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => Promise {&lt;resolved>:undefined}</span></code></pre>\n      </div>\n<p>async 自动把函数转换为 Promise，返回的是一个Promise对象</p>\n<h3 id="async的实战"><a href="#async%E7%9A%84%E5%AE%9E%E6%88%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>async的实战</h3>\n<p>还是那个需求稍微修改一下：接口2的请求依赖接口1的返回值，接口3依赖接口2的返回值</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 一个函数p11，返回一个axios，Promise对象</span>\n<span class="token keyword">function</span> <span class="token function">p11</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">\'https://easy-mock.com/mock/5b0525349ae34e7a89352191/example/promise1\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        data\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>name\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 一个函数p22，返回一个axios，Promise对象</span>\n<span class="token keyword">function</span> <span class="token function">p22</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">\'https://easy-mock.com/mock/5b0525349ae34e7a89352191/example/promise2\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      data\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>name\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 一个函数p33，返回一个axios，Promise对象</span>\n<span class="token keyword">function</span> <span class="token function">p33</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">\'https://easy-mock.com/mock/5b0525349ae34e7a89352191/example/mock\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      data\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>projects\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="基于promise的实现："><a href="#%E5%9F%BA%E4%BA%8Epromise%E7%9A%84%E5%AE%9E%E7%8E%B0%EF%BC%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>基于Promise的实现：</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">p11</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res1 <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token function">p22</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res2 <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token function">p33</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res3 <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> res3\n  <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h4 id="基于async的处理"><a href="#%E5%9F%BA%E4%BA%8Easync%E7%9A%84%E5%A4%84%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>基于async的处理</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token constant">RES1</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">p11</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">RES1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token constant">RES2</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">p22</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">RES2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token constant">RES3</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">p33</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">RES3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token constant">RES3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">asyncFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>await的存在 使异步变成了同步\n<strong>在处理异步的时候，await后面要根的是一个返回Promise的函数</strong>,如果不是就需要使用Promise包装一下\n就像上面的p11,p22,p33,函数都是返回一个axios（axios返回一个Promise对象)</p>\n<h4 id="async函数处理报错"><a href="#async%E5%87%BD%E6%95%B0%E5%A4%84%E7%90%86%E6%8A%A5%E9%94%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>async函数处理报错</h4>\n<p>看到了，async中没有<code class="gatsby-code-text">then、catch</code>，怎么处理报错信息呢？\n天无绝人之路，使用<code class="gatsby-code-text">try catch</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncFUn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token constant">RES1</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">p11</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">RES1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token constant">RES2</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">p22</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">RES2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token constant">RES3</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">p33</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">RES3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token constant">RES3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token function">asyncFUn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h3>\n<p>我们说起异步，之前首先想到的是回调函数，但是回调函数存在各种问题   </p>\n<p>ES6中出现了Promise，解决了回调函数问题，Promise中我们又介绍了几个常用的API\nPromise.all()、Promise.race()、Promise.finally()、Promise.then()、Promise.catch()</p>\n<p>我们后来又介绍了Generator，通过Generator引出了async await\nasync就是Generator的语法糖，简化了Generator的使用方法\nasync无法取代Promise，async的使用依赖于Promise</p>\n<p>有人说async await是处理异步的终极方案，这个说法有些极端</p>\n<p>处理异步的方法我们介绍很多，没有最好的，只有最合适的，会的多了，选择也就多了，代码质量自然就会高</p>',frontmatter:{title:"async & await",img:"./img/2015-05-11.jpeg",author:["Sylvenas"],excerpt:null,catalogue:["Generator","Generator之yield","generator实战"]},fields:{date:"May 10, 2017",path:"blog/async/2017-05-11-async-await.md",slug:"/blog/2017/05/11/async-await.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"shell intro"},fields:{slug:"/blog/2021/06/02/shell-intro.html"}}},{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"Koa实现原理分析"},fields:{slug:"/blog/2021/02/06/koa.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}}]}},pathContext:{slug:"/blog/2017/05/11/async-await.html"}}}});