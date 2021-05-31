webpackJsonp([0xd0b588f2e92e],{488:function(n,s){n.exports={data:{markdownRemark:{html:'<p>说起javascript异步，我想你一定会想起ES7的<code class="gatsby-code-text">async</code>，甚至要排在Promise之前，从今天起我们来聊一聊async<br>\n要说async，就不得不提Generator生成器（好多知识都是一环扣一环，很是无奈），async就是Generator的语法糖</p>\n<h3 id="generator"><a href="#generator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generator</h3>\n<p>Generator写法很像一个函数，但是区别于普通函数，一个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">doSth1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">\'这是普通函数\'</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> it1 <span class="token operator">=</span> <span class="token function">doSth1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//=>这是普通函数</span>\n\n\n<span class="token comment">//一个生成器doSth</span>\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">doSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token string">\'郭靖抓鸡\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token string">\'郭靖杀鸡\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token string">\'黄蓉拔毛\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token string">\'黄蓉炖鸡\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token string">\'洪七公吃鸡\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token string">"洪七公说：这只鸡真好吃"</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 通过一个遍历器控制这个生成器的执行</span>\n<span class="token keyword">const</span> it <span class="token operator">=</span> <span class="token function">doSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span> </code></pre>\n      </div>\n<p>it是一个迭代器，我们没有像打印普通函数那样打印出我们想要的结果<br>\n普通的函数一旦执行，就不会停下来，直到执行完毕（不考虑debugger，alert，throw err，死循环等情况）   </p>\n<p>Generator生成器，可以做到，它可以让一个函数的执行暂停<br>\nGenerator生成器不会自行启动，需要使用遍历器的<code class="gatsby-code-text">next()</code>,来控制<code class="gatsby-code-text">Generator</code>生成器的执行:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {value: "郭靖抓鸡", done: false}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {value: "郭靖杀鸡", done: false}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {value: "黄蓉拔毛", done: false}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {value: "黄蓉炖鸡", done: false}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {value: "洪七公吃鸡", done: false}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => {value: "洪七公说：这只鸡真好吃", done: true}</span></code></pre>\n      </div>\n<blockquote>\n<p>我们打断一下，先声明一个知识点，在函数中，return不是必须存在的，但是如果我们没有为函数执行return，函数会隐式存在一个return undefined，Genterator函数也是如此</p>\n</blockquote>\n<h3 id="generator之yield"><a href="#generator%E4%B9%8Byield" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generator之yield</h3>\n<p>第一次调用next,是对Generator生成器进行启动操作，Generator生成器启动，执行，当遇到内部的yield时就会暂停</p>\n<p>生成器中的yield有点像普通函数中的return,但是普通函数中当遇到return,就意味着函数执行完毕，以此作为输出</p>\n<p>而yield不会完全停止函数的执行</p>\n<blockquote>\n<p>可以这么理解，Generator从一开始就是暂停的，通过第一次调用next方法打破其暂停状态，当遇到yield时，会执行yeild后面的表达式，并返回执行之后的值，然后再次进入暂停状态</p>\n</blockquote>\n<p>调用第一个<code class="gatsby-code-text">it.next()</code>，向Generator提出申请，我要的下一个值是什么？第一个<code class="gatsby-code-text">yield</code>，对其进行回复，就是<code class="gatsby-code-text">yield</code> ‘郭靖抓鸡’;然后Generato暂停了，等待下一次询问\n然后调用第二个<code class="gatsby-code-text">it.next()</code>，向Generator提出申请，我要的下一个值是什么？第二个<code class="gatsby-code-text">yield</code>，对其进行回复，就是<code class="gatsby-code-text">yield</code> ‘郭靖杀鸡’;然后又停了\n…\n当调用第六个<code class="gatsby-code-text">it.next()</code>时，Generator已经没有<code class="gatsby-code-text">yield</code>了，怎么回答呢？它用return进行回答，终极回答\n如果没有return呢，这就是我们前面说的隐式的return undefined\n仔细看代码，你会发现，next和<code class="gatsby-code-text">yield</code>有一个对应关系，如果要使Generator执行完毕（done：true），next的数量要比<code class="gatsby-code-text">yield</code>的数量多一个\n为什么会存在这种情况呢？\n因为第一个<code class="gatsby-code-text">it.next()</code>是用来启动Generator生成器，启动后，遇到了第一个<code class="gatsby-code-text">yield</code>，停下来了，\n第二个<code class="gatsby-code-text">it.next()</code>是用来启动第一个<code class="gatsby-code-text">yield</code>，以此类推，这样就导致他们“错位”了\n直到Generator的return（显式或隐式）最后执行完毕</p>\n<p>再看一个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">doSth</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> params <span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">yield</span> <span class="token string">"黄蓉"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> it <span class="token operator">=</span> <span class="token function">doSth</span><span class="token punctuation">(</span><span class="token string">\'郭靖\'</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//=>{value: "黄蓉", done: false}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">\'吃饭\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//=>{value: "郭靖吃饭", done: true}</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">next()</code>支持传递参数，但是不会在第一个<code class="gatsby-code-text">next()</code>中传递参数，因为第一个<code class="gatsby-code-text">next()</code>是用来启动Generator的</p>\n<blockquote>\n<p>规范和浏览器都会默默的丢弃传递给第一个next的任何东西，因此启动生成器的第一个next一定不要传递任何参数</p>\n</blockquote>\n<p>第一个<code class="gatsby-code-text">next()</code>执行，启动了 doSth(),遇到第一个yield停下来，yield把“黄蓉”返给第一个<code class="gatsby-code-text">next()</code>\n第二个<code class="gatsby-code-text">next()</code>执行，启动了第一个yield，并把”吃饭”传递给正在等待的yield，然后继续执行，遇到了return，执行完毕</p>\n<p><strong>我们可以看到Generator实际上一个消息双向传递的机制，<code class="gatsby-code-text">yield someData</code>作为一个表达式可以发出消息响应<code class="gatsby-code-text">next(..)</code>调用，<code class="gatsby-code-text">next(..)</code>也可以向暂停的yield表达式发送值。</strong></p>\n<h3 id="generator实战"><a href="#generator%E5%AE%9E%E6%88%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>generator实战</h3>\n<p>需求如下：现在有接口1，接口2，接口3，要求按照顺序输出接口1，接口2，接口3的返回值\n现在简单模拟一下数据请求：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">loadData1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"url1"</span><span class="token punctuation">,</span>\n    success<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      data<span class="token punctuation">,</span>\n      success\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadData2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"url2"</span><span class="token punctuation">,</span>\n    success<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      data\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadData3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"url3"</span><span class="token punctuation">,</span>\n    success<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      data<span class="token punctuation">,</span>\n      success\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="回调函数"><a href="#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>回调函数</h4>\n<p>常规做法，即loadData1执行成功后，执行loadData2，loadData2执行成功后执行loadData3</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"https://easy-mock.com/mock/5b0525349ae34e7a89352191/example/promise1"</span><span class="token punctuation">,</span>\n    success<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      data<span class="token punctuation">,</span>\n      success\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          url<span class="token punctuation">:</span> <span class="token string">"https://easy-mock.com/mock/5b0525349ae34e7a89352191/example/promise2"</span><span class="token punctuation">,</span>\n          success<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n            data\n          <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                url<span class="token punctuation">:</span> <span class="token string">"https://easy-mock.com/mock/5b0525349ae34e7a89352191/example/mock"</span><span class="token punctuation">,</span>\n                success<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n                  data<span class="token punctuation">,</span>\n                  success\n                <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n                  <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                  <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>这就是典型的<strong>回调地狱</strong></p>\n<h4 id="promise"><a href="#promise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Promise</h4>\n<p>来一个Promise实现的，顺便对前面的Promise进行复习</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">/*\n*对ajax的请求做了一个简单的封装\n*@ajaxUrl,接口地址，公共部分已经抽取\n*@successCb，ajax请求成功后的回调函数\n*/</span>\n<span class="token keyword">function</span> <span class="token function">ajaxFun</span><span class="token punctuation">(</span>ajaxUrl<span class="token punctuation">,</span> successCb<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> ajaxUrl<span class="token punctuation">,</span>\n    success<span class="token punctuation">:</span> res <span class="token operator">=></span> <span class="token function">successCb</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//promise</span>\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">ajaxFun</span><span class="token punctuation">(</span><span class="token string">"promise1"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      data<span class="token punctuation">,</span>\n      success\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'接口一\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">ajaxFun</span><span class="token punctuation">(</span><span class="token string">"promise2"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      data\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'接口二\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">ajaxFun</span><span class="token punctuation">(</span><span class="token string">"mock"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      data<span class="token punctuation">,</span>\n      success\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'接口三\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h4 id="generator的实现"><a href="#generator%E7%9A%84%E5%AE%9E%E7%8E%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generator的实现</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">loadData1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">ajaxFun</span><span class="token punctuation">(</span><span class="token string">"promise1"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token punctuation">,</span>\n    success\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'接口一\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//“接口一成功返回后，执行下一步”</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadData2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">ajaxFun</span><span class="token punctuation">(</span><span class="token string">"promise2"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'接口二\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//“接口二成功返回后，执行下一步”</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadData3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">ajaxFun</span><span class="token punctuation">(</span><span class="token string">"mock"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token punctuation">,</span>\n    success\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'接口三\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token function">loadData1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">yield</span> <span class="token function">loadData2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">yield</span> <span class="token function">loadData3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> it <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nit<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//“启动生成器”</span></code></pre>\n      </div>\n<p>先弄一个遍历器出来，然后通过<code class="gatsby-code-text">it.next()</code>,启动遍历器<br>\n执行第一个接口请求，当第一个接口请求成功了，继续<code class="gatsby-code-text">next()</code>,以此类推<br>\n我想很少有人会通过Generator实现多个异步同步执行，但是<code class="gatsby-code-text">async</code>可以，后面会介绍<code class="gatsby-code-text">async</code>函数的用法   </p>',
frontmatter:{title:"Generator",img:"./img/2015-03-11.jpeg",author:["Sylvenas"],excerpt:null,catalogue:["Generator","Generator之yield","generator实战"]},fields:{date:"March 10, 2017",path:"blog/async/2017-03-11-generator.md",slug:"/blog/2017/03/11/generator.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}}]}},pathContext:{slug:"/blog/2017/03/11/generator.html"}}}});