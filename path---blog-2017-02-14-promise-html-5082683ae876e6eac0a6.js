webpackJsonp([0xa92b8c6a6115],{648:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="callback的缺点"><a href="#callback%E7%9A%84%E7%BC%BA%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>callback的缺点</h3>\n<p>我们说处理javascript异步最常用的方式就是通过回调函数，对于回调函数我们昨天对此做了介绍\n简单快速，\n我们一般使用嵌套回调或者链式回调，会产生以下问题</p>\n<ul>\n<li>当采用嵌套回调时，会导致层级太多，不利于维护</li>\n<li>所以我们又采用了链式回调，对嵌套回调进行拆分，拆分后的函数间耦合度很高，</li>\n<li>如果需要传递参数，函数之间的关联性会更高，而且要对参数进行校验以提高代码的健壮性</li>\n<li>\n<p>如果将我们自己的回调函数传递给第三方插件或者库，就要考虑一些不可控因素</p>\n<ul>\n<li>调用回调过早</li>\n<li>调用回调过晚（或不被调用）</li>\n<li>调用回调次数过多或者过少</li>\n</ul>\n</li>\n</ul>\n<p>Promise的存在就是为了解决以上问题，Promise是一种封装和组合未来值的易于复用的机制。\n虽然我们日常写回调函数不会有这么严格的要求，但是如果不这样去写回调函数，就会存在隐患，当在团队协作的时候，显得编码规范显得尤为重要</p>\n<p>本文不重点介绍如何使用promise，重点介绍的是promise解决了哪些异步回调出现的问题。</p>\n<h3 id="什么是promise"><a href="#%E4%BB%80%E4%B9%88%E6%98%AFpromise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>什么是Promise</h3>\n<p>我们来看一个场景，有助于我们了解Promise:</p>\n<p>设想一下这个场景，我去KFC，交给收银员10元，下单买一个汉堡，下单付款。到这里，我已经发出了一个请求（买汉堡），启动了一次交易。\n但是做汉堡需要时间，我不能马上得到这个汉堡，收银员给我一个收据来代替汉堡。到这里，收据就是一个承诺(promise),保证我最后能得到汉堡。\n所以我需要好好的保留的这个收据，对我来说，收据就是汉堡，虽然这张收据不能吃，我需要等待汉堡做好，等待收银员叫号通知我。</p>\n<p>等待的过程中，我可以做些别的事情。</p>\n<p>收银员终于叫到了我的号，我用收据换来了汉堡。</p>\n<p>当然还有一种情况，当我去柜台取汉堡的时候，收银员告诉我汉堡卖光了，做汉堡的师傅受伤了等等原因，导致了我无法得到这个汉堡\n虽然我有收据(承诺)，但是可能得到汉堡(成功)，可能得不到汉堡(失败)。</p>\n<p>我由等待汉堡变成了等到或者等不到，这个过程不可逆(至少目前人类还没有发明时光机)。</p>\n<p>上面很形象的介绍了promise，上面的等待汉堡和得到汉堡，汉堡卖光了，得不到汉堡，分别对应promise的三种状态\n三种状态：<code class="gatsby-code-text">pending</code>(进行中)、<code class="gatsby-code-text">fulfilled</code>(已成功)和<code class="gatsby-code-text">rejected</code>(已失败)(一旦状态改变，就不会再变)</p>\n<h3 id="回调函数调用过早"><a href="#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E8%BF%87%E6%97%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>回调函数调用过早</h3>\n<p>调用过早就是将异步函数作为同步处理了，\n我们之前说过，javascript以单线程同步的方式执行主线程，遇到异步会将异步函数放入到任务队列中，\n当主线程执行完毕，会循环执行任务队列中的函数，也就是事件循环，直到任务队列为空。</p>\n<h4 id="事件循环和任务队列"><a href="#%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E5%92%8C%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>事件循环和任务队列</h4>\n<p>事件循环就像是一个游乐场，玩过一个游戏后，你需要重新排到队尾才能再玩一次。\n任务队列就是，在你玩过一个游戏后，可以插队接着玩。</p>\n<p>看个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"成功啦"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\npromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我是异步执行的"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'我在主线程\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>看下输出，重点看输出顺序:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 我在主线程</span>\n<span class="token comment">// 成功啦</span>\n<span class="token comment">// 我是异步执行的</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">resolve(&quot;成功啦&quot;)</code>直接将promise的状态切为成功状态，<code class="gatsby-code-text">console.log(&quot;我是异步执行的&quot;)</code>;这段代码也是异步执行的\n提供给<code class="gatsby-code-text">then()</code>的回调永远都是异步执行的，所以promise中不会出现回调函数过早执行的情况。</p>\n<h4 id="回调函数调用过晚"><a href="#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E8%BF%87%E6%99%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>回调函数调用过晚</h4>\n<p>回调函数调用过晚的处理原理和调用过早很类似，\n在promise的then()中存放着异步函数，所有的异步都存在于js的任务队列中，当js的主线程执行完毕后，会依次执行任务队列中的内容，不会出现执行过晚的情况</p>\n<h4 id="回调函数不被调用"><a href="#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E4%B8%8D%E8%A2%AB%E8%B0%83%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>回调函数不被调用</h4>\n<p>我们用例子说话：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'成功啦\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\npromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>s <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'我在主线程\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>成功状态的输出：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 我在主线程</span>\n<span class="token comment">// 成功啦</span></code></pre>\n      </div>\n<p>成功状态下回调被调用\n继续看一下失败的回调</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'失败啦\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\npromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> s <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'我在主线程\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>失败状态的输出：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 我在主线程</span>\n<span class="token comment">// 失败啦</span></code></pre>\n      </div>\n<p>失败状态下回调被调用\n所以说，不管是成功还是失败，回调函数都会被调用</p>\n<h4 id="回调函数调用次数过多"><a href="#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E6%AC%A1%E6%95%B0%E8%BF%87%E5%A4%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>回调函数调用次数过多</h4>\n<p>我们之前说了Promise有三种状态：\n<code class="gatsby-code-text">pending(进行中)</code>,<code class="gatsby-code-text">fulfilled(已成功)</code>,<code class="gatsby-code-text">rejected(已失败)</code>一旦状态改变，就不会在变成另外一个</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'失败啦\'</span><span class="token punctuation">)</span>\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'成功啦\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\npromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`我是异步执行的成功:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>res<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>err<span class="token operator">=></span><span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`我是异步执行的失败:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>err<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'我在主线程\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>输出:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 我在主线程</span>\n<span class="token comment">// 我是异步执行的失败；失败啦</span></code></pre>\n      </div>\n<p>当状态变为失败时，就不会在变为成功，成功的函数也不会执行，反之亦然</p>\n<h4 id="调用次数过少"><a href="#%E8%B0%83%E7%94%A8%E6%AC%A1%E6%95%B0%E8%BF%87%E5%B0%91" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>调用次数过少</h4>\n<p>回调函数正常是调用一次，过少=>0次=>回调函数不被调用，上面刚刚讨论过</p>\n<h3 id="promise的局限"><a href="#promise%E7%9A%84%E5%B1%80%E9%99%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>promise的局限</h3>\n<h4 id="错误被吃掉"><a href="#%E9%94%99%E8%AF%AF%E8%A2%AB%E5%90%83%E6%8E%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>错误被吃掉</h4>\n<p>首先我们要理解，什么是错误被吃掉，是指错误信息不被打印吗？\n并不是，举个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'不会执行这里\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>在这种情况下，以为throw error的缘故，代码被阻断执行，并不会打印<code class="gatsby-code-text">&quot;不会执行这里&quot;</code>,再举个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'不会执行这里\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>这次会正常的打印 <code class="gatsby-code-text">&quot;不会执行这里&quot;</code>，说明<code class="gatsby-code-text">Promise</code>内部的错误不会影响到<code class="gatsby-code-text">Promise</code>外部的代码，而这种情况我们就通常称为<code class="gatsby-code-text">吃掉错误</code>。\n其实这并不是<code class="gatsby-code-text">Promise</code>独有的局限性，<code class="gatsby-code-text">try..catch</code>也是这样，同样会捕获一个异常并简单的吃掉错误。\n而正是因为错误被吃掉，<code class="gatsby-code-text">Promise</code>链中的错误很容易被忽略掉，这也是为什么会一般推荐在<code class="gatsby-code-text">Promise</code>链的最后添加一个<code class="gatsby-code-text">catch</code>函数，因为对于一个没有错误处理函数的Promise链，任何错误都会在链中被传播下去，直到你注册了错误处理函数。</p>\n<h4 id="单一值"><a href="#%E5%8D%95%E4%B8%80%E5%80%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>单一值</h4>\n<p>Promise 只能有一个完成值或一个拒绝原因，然而在真实使用的时候，往往需要传递多个值，一般做法都是构造一个对象或数组，然后再传递，then 中获得这个值后，又会进行取值赋值的操作，每次封装和解封都无疑让代码变得笨重。\n说真的，并没有什么好的方法，建议是使用 ES6 的解构赋值：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h4 id="无法取消"><a href="#%E6%97%A0%E6%B3%95%E5%8F%96%E6%B6%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>无法取消</h4>\n<p>Promise 一旦新建它就会立即执行，无法中途取消。</p>\n<h4 id="无法得知pending状态"><a href="#%E6%97%A0%E6%B3%95%E5%BE%97%E7%9F%A5pending%E7%8A%B6%E6%80%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>无法得知pending状态</h4>\n<p>当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。</p>\n<ul>\n<li>只了解API,会丢失很多抽象的细节。</li>\n</ul>\n<p>经过大量的工作，你本可以通过丑陋的回调组合专门创建出来类似的效果，但这真的不是一个有效的策略，特别是你不得不一次又一次的重复操作。</p>\n<p>鸭子类型检测是不是promise类型</p>\n<p>promise 回调超时（使用被称为竞态的高级抽象机制）</p>\n<p>resolve,reject不传值的情况下，后面的then函数接收到的就是undefined,如果传递多个值的时候，只有第一个值有效，后面的值都会被忽略，即使通过arguments依然获取不到,如果要传递多个值，可以通过数组或者对象的方式</p>\n<p>如果向Promise.resolve传递一个非Promise,非thenable的值，就会得到一个用这个值填充的promise;而如果向一个Promise.reslove传递一个真正的Promise,就只会返回同一个promise</p>\n<h3 id="错误处理"><a href="#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>错误处理</h3>\n<p>try…catch当然很好处理错误处理，但是无法跨越异步操作，即try…catch无法捕获在异步流程中产生的错误</p>\n<p>异步中的 error-first 回调风格，类似于node.js的风格</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 要求bar是一个同步函数，否则无法捕捉错误</span>\n      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">cb</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Promise的错误处理机制是分离回调，类似于Either(Monda)</p>\n<p>即使在then链的最后添加catch函数，依然无法解决”绝望的陷阱”，因为catch(handleError)中，handleError如果出错了，又该如何解决？</p>',frontmatter:{title:"Promise",img:"./img/2017-02-14.jpeg",author:["Sylvenas"],excerpt:null,catalogue:["callback的缺点","什么是Promise","回调函数调用过早","事件循环和任务队列","promise的局限","错误被吃掉","单一值","无法取消","无法得知pending状态"]},fields:{date:"February 13, 2017",path:"blog/async/2017-02-14-promise.md",slug:"/blog/2017/02/14/promise.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"shell intro"},fields:{slug:"/blog/2021/06/02/shell-intro.html"}}},{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"Koa实现原理分析"},fields:{slug:"/blog/2021/02/06/koa.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}}]}},pathContext:{slug:"/blog/2017/02/14/promise.html"}}}});