webpackJsonp([5747279328798],{429:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="what-is-functional-programming"><a href="#what-is-functional-programming" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is Functional Programming?</h3>\n<p>函数式编程已经成为JavaScript领域里的一个非常热门的话题。几年以前，很少有JavaScript程序猿知道函数式编程是什么，但是在过去的三年里我所见过的每个大型应用程序代码都大量使用了函数式编程的思想。</p>\n<p>函数式编程一种编程范式，我们常见的编程范式有命令式编程(<code>Imperative programming</code>)，函数式编程(<code>Functional programming</code>)。我们常见的面向对象编程是属于命令式编程的一种。</p>\n<p>函数式编程中的函数不是计算机领域中的函数，而是指数学中的函数，现在让我们来复习一下中学的数学知识,函数的现代定义：</p>\n<blockquote>\n<p>设<code>A、B</code>是两个非空数集，如果按照某个特定的对应关系f，使对于A中的任何一个数x，在集合B中都有唯一确定的数<code>f(x)</code>和它对应，那么称 <code>f:A→B</code> 为从集合A到集合B的一个函数。记作：<code>y=f(x) (x∈A)</code> 。其中，x是自变量，x的取值集合A叫做函数的定义域；与x的值对应的<code>f(x)</code>的值叫做函数值，函数值的集合 <code>{f(x)|x∈A}</code> 叫做函数的值域。\n从函数的定义可以得出：一个函数的值仅决定于函数的参数x的值和对应法则f,不依赖于其他状态。比如:<code>Math.abs(x)</code>函数计算x的绝对值，只要x不变，不论什么时候调用，不论调用多少次，最终的求值都是一样的。</p>\n</blockquote>\n<p>如果你打算开始学习函数式编程，那么你必将遇到下面几个专业名词，这些名词对于初学者来说，非常抽象；但是如果你已经熟练的掌握了JavaScript编程，那么你肯定已经在实际项目中了解过函数式编程的几个基本概念：</p>\n<ul>\n<li>Pure functions</li>\n<li>Function composition</li>\n<li>Avoid shared state</li>\n<li>Avoid mutating state</li>\n<li>Avoid side effects</li>\n</ul>\n<p>如果你想要真正的掌握函数式编程，最好从理解这几个核心概念入手：</p>\n<h3 id="pure-function"><a href="#pure-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pure Function</h3>\n<p>在计算机编程中，假如满足下面这两个条件的约束，一个函数可以被描述为一个纯函数(pure function)：</p>\n<ul>\n<li>给出相同的参数，那么函数的返回值一定相同。该函数结果值不依赖任何隐藏信息或程序执行处理可能改变的状态，也不能依赖于任何来自I/O的外部输入。</li>\n<li>在对函数返回值的计算过程中，不会产生任何语义上可观察的副作用或输出，例如对象的变化或者输出到I/O的操作。</li>\n</ul>\n<p><strong>纯函数</strong>有许多对函数式编程非常有用的特性，包括引用透明(referential transparency,你可以直接把一个函数调用替换成函数执行后的结果，而不会对程序造成任何影响),关于纯函数可以阅读<a href="/blog/2017/11/15/Pure-function.html">What is a Pure Function?</a>。</p>\n<p><strong>函数组合</strong>是把两个或者多个函数合并成一个函数。将函数组合在一起，就像将一连串管道扣合在一起，让数据流过一样。举例来说：<code>f.g</code>在JavaScript中相当于之行<code>f(g(x))</code>。函数组合是函数式编程中很重要的概念，关于函数组合可以阅读<a href="">What is Function Composition</a>。</p>\n<h3 id="shared-state"><a href="#shared-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Shared State</h3>\n<p><strong>共享状态</strong>是指任意的变量，对象或者内存空间存在于共享作用域中，或则作为对象的属性在不同的作用域中传递。共享作用域可以包含全局作用域和局部作用域。通常，在面向对象编程中，对象以添加属性到其他对象上的方式在作用域内共享。</p>\n<p>共享状态所带来的问题是，如果你想要理解某个函数的作用，那么你不得不仔细观察函数内所用到的共享变量的全部的变化历史(从创建到销毁)。</p>\n<p>举个例子，你有一个user对象需要保存，你有一个<code>saveUser()</code>函数向服务器发起一个请求。紧接着，用户修改了他们的头像，通过<code>updateAvatar</code>并触发了另一次<code>saveUser</code>请求。在<code>saveUser</code>函数执行之后，服务端返回一个新的user对象，客户端需要用这个新的user对象替换掉老的user对象。</p>\n<p>有时候，不幸的是，第二次请求有可能比第一次请求更早返回，所以当第一次请求返回时(现在已经过时了)，新的头像被替换成了旧的头像，这是一个同步竞争的例子，一个非常常见的bug。</p>\n<p>共享状态的另一个问题是改变函数的调用顺序会导致一连串的错误，因为函数操作共享数据的时候是有时间顺序的：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment" spellcheck="true">// 使用共享数据的时候，函数调用的顺序会导致不同的结果</span>\n<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span>\n  val<span class="token punctuation">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> x1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span>val <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> x2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span>val <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token function">x1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">x2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 6</span>\n\n<span class="token comment" spellcheck="true">// 下面的例子与上面的相同，除了函数的调用次序颠倒了一下</span>\n<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token punctuation">{</span>\n  val<span class="token punctuation">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> y1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> y<span class="token punctuation">.</span>val <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> y2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> y<span class="token punctuation">.</span>val <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token function">y2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">y1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// 产生了不同的结果值</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 5</span>\n</code></pre>\n      </div>\n<p>如果避免使用数据的共享状态，函数的调用时序不同，会导致不同的结果值。但是如果使用纯函数，给定同样的输入，总是能得到同样的输出结果。这样可以使得函数的调用完全独立于其他函数的调用，可以从根本上简化变更和重构。改变纯函数的内容，或者修改纯函数的调用顺序，不会影响到程序的其他部分的逻辑。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span>\n  val<span class="token punctuation">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> x1 <span class="token operator">=</span> x <span class="token operator">=></span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token punctuation">{</span> val<span class="token punctuation">:</span> x<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> x2 <span class="token operator">=</span> x <span class="token operator">=></span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token punctuation">{</span> val<span class="token punctuation">:</span> x<span class="token punctuation">.</span>val <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">x1</span><span class="token punctuation">(</span><span class="token function">x2</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 5</span>\n\n<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token punctuation">{</span>\n  val<span class="token punctuation">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// 由于纯函数没有操作外部的可变数据，你可以各种次序调用这些函数任意次，都不会改变之后调用函数的结果值。</span>\n<span class="token function">x2</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">x1</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">x1</span><span class="token punctuation">(</span><span class="token function">x2</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 5</span>\n</code></pre>\n      </div>\n<p>在上面的例子中，我们使用<code>Object.assign()</code>方法并传入一个空对象作为第一个参数来拷贝x的属性，防止x在函数内部被改变。在这个例子中，他等价于创建一个新对象，这在JavaScript是很常见的操作，采用拷贝已存在的状态而非直接使用引用，从而避免第一个例子里出现的问题。</p>\n<p>如果你仔细看例子中的<code>console.log(x1(x2(y)).val)</code>，你会发现这个就是我们前面提到的<strong>函数组合</strong>，回顾一下，函数组合看起来像是这样：<code>f(g(x))</code>。在这个例子里，我们的<code>f()</code>和<code>g()</code>分别为<code>x1()</code>,<code>x2()</code>,所以组合式x1.x2。</p>\n<p>当然，当然如果你改变符合的顺序，输出将改变，操作的顺序仍然很重要。<code>f(g(x))</code>并不总是等价于<code>g(f(x))</code>,但是有一个关键点和前面的例子大不同，<strong>函数外部的变量不会被修改</strong>，原来函数修改外部变量会是一个严重的问题。</p>\n<p>移除函数的时序依赖，可以减少很多去仔细分析函数上下文的精力。</p>\n<h3 id="immutability"><a href="#immutability" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Immutability</h3>\n<p>一个<strong>不可变的(immutability)</strong>的对象是指一个对象不会在它创建之后被改变。对应的一个<strong>可变的(mutable)</strong>的对象是指对象在创建之后可以被修改。</p>\n<p>在JavaScript中，很重要的一点是不要混肴了<code>const</code>关键字和<code>immutability</code>。使用<code>const</code>关键字可以创建一个变量绑定，让该对象不能被重新赋值。但是<code>const</code>并不是创建了一个不可变对象。虽然不能修改<code>const</code>声明的变量的指向，但是你可以修改它的属性，这意味着<code>const</code>关键字声明的变量仍然是可以改变的。</p>\n<p>不可变对象完全不能被修改。你可以通过<code>Object.freeze</code>来冻结一个对象：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> a <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  foo<span class="token punctuation">:</span> <span class="token string">\'Hello\'</span><span class="token punctuation">,</span>\n  bar<span class="token punctuation">:</span> <span class="token string">\'world\'</span><span class="token punctuation">,</span>\n  baz<span class="token punctuation">:</span> <span class="token string">\'!\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\na<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">\'Goodbye\'</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Error: Cannot assign to read only property \'foo\' of object Object</span>\n</code></pre>\n      </div>\n<p>但是<code>Object.freeze</code>仅仅是冻结了对象的第一层，对象深层次的属性依然是可以修改的,除非你遍历整个对象树并冻结每一个属性(显然这不是个好主意)：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> a <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  foo<span class="token punctuation">:</span> <span class="token punctuation">{</span> greeting<span class="token punctuation">:</span> <span class="token string">\'Hello\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  bar<span class="token punctuation">:</span> <span class="token string">\'world\'</span><span class="token punctuation">,</span>\n  baz<span class="token punctuation">:</span> <span class="token string">\'!\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\na<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>greeting <span class="token operator">=</span> <span class="token string">\'Goodbye\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>在许多函数式编程语言中，有一种特殊的不可变数据结构，被称为<strong>trie</strong>数据结构(trie的发音为tree),该结构能够有效的进行深度冻结—对象的任意层级的属性都是完全不能被修改的。\n当一个对象被拷贝的时候，trie使用结构共享来共用不可变对象的引用内存地址，这样可以减少内存占用，优化性能。</p>\n<p>有一个已经使用了trie的JavaScript库<a href="https://github.com/facebook/immutable-js">Immutable.js</a>。关于<code>Immutable.js</code>更多请查阅<a href="https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44">10 Tips for Better Redux Architecture</a>。</p>\n<h3 id="side-effects"><a href="#side-effects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Side Effects</h3>\n<p>副作用是指除了函数返回值以外，任何在函数调用之外产生的可观察的程序状态变化，包括但不局限于：</p>\n<ul>\n<li>改变了任何外部变量或对象属性(例如：全局变量，或者父级作用域上的变量)</li>\n<li>写日志</li>\n<li>屏幕输出</li>\n<li>写文件</li>\n<li>发起网络请求</li>\n<li>调用另一个有副作用的函数</li>\n</ul>\n<p>在函数式编程中我们应该尽量避免副作用，副作用与你的程序逻辑分离，使程序更便于扩展、重构、调试、测试和维护，这也是为什么大部分前端框架鼓励我们分开管理状态和组建渲染，尽量采用松耦合的模型。</p>\n<h4 id="reusability-through-higher-order-functions"><a href="#reusability-through-higher-order-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reusability Through Higher Order Functions</h4>\n<p>函数式编程倾向于复用通用的函数来处理数据。而面向对象编程则倾向于把方法和数据集中到对象上。那些被集中的方法只能用来操作设计好的数据类型，通常是那些包含在特定对象实例上的数据。</p>\n<p>在函数式编程里，对任何类型的数据一视同仁。同样的<code>map()</code>操作可以map(映射)对象、字符串、数字或任何别的类型，因为它接收一个函数作为参数，而这个函数可以适当的操作给定类型。函数式编程使用<strong>高阶函数</strong>来实现这一技巧。</p>\n<p>在JavaScript里，<strong>函数是一等公民</strong>，JavaScript允许开发人员像操作变量一个操作函数，例如将函数赋值给变量、把函数作为参数传递给其他函数、函数作为另一个函数的返回值，等等…</p>\n<p><strong>高阶函数</strong>是指一个函数以函数作为参数，或以函数作为返回值，或者即以函数作为参数又以函数作为返回值。高阶函数经常用于：</p>\n<ul>\n<li>抽象或隔离行为、异步控制流作为回调函数，promise等</li>\n<li>创建可以泛用于各种数据类型的功能</li>\n<li>创建一个偏函数或者一个柯里化函数，以复用函数或者函数组合</li>\n<li>接收一个函数列表并返回由这个列表里部分函数组成的复合函数</li>\n</ul>\n<h3 id="containers-functors-lists"><a href="#containers-functors-lists" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Containers, Functors, Lists</h3>\n<p><code>Functor(函子)</code>是可以用来执行map(映射)操作的数据。换句话说，它是一个有接口的<code>容器</code>，能够遍历其中的值。当你看到<code>functor</code>这个词的时候，你应该在脑海中马上想到它是<code>mapable(可遍历的)</code>。</p>\n<p>之前我们说同样的<code>map(映射)</code>能够操作各种数据类型。它是通过将map操作抽象出来，提供给functor的api使用，<code>map(映射)</code>使用该接口执行重要的流程控制操作。在<code>Array.prototype.map()</code>的场景中，容器是一个数组，但是其他的数据类型也完全可以作为functor,它们同样也提供了mapping操作的API。</p>\n<p>让我们看一下<code>Array.prototype.map()</code>时如何让你从mapping函数中抽象数据类型，让<code>map()</code>可以适用于任何数据类型。我们创建一个简单的<code>double()</code>mapping,它简单的将传递给它的值乘2:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> double <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> doubleMap <span class="token operator">=</span> numbers <span class="token operator">=></span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>double<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">doubleMap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// [ 4, 6, 8 ]</span>\n</code></pre>\n      </div>\n<p>假设我们相对游戏中的目标执行分数翻倍操作，我么需要做的仅仅是小小的改变一下我们传给<code>map()</code>的<code>double()</code>函数，这样便能解决问题：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> double <span class="token operator">=</span> n <span class="token operator">=></span> n<span class="token punctuation">.</span>points <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> doubleMap <span class="token operator">=</span> numbers <span class="token operator">=></span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>double<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">doubleMap</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'ball\'</span><span class="token punctuation">,</span> points<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'coin\'</span><span class="token punctuation">,</span> points<span class="token punctuation">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'candy\'</span><span class="token punctuation">,</span> points<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// [ 4, 6, 8 ]</span>\n</code></pre>\n      </div>\n<p>使用<code>functor</code>以及高阶函数抽象来创建通用功能函数，以及处理任意数值或不同类型的数据，这是函数式编程中很重要的概念。</p>\n<h3 id="declarative-vs-imperative"><a href="#declarative-vs-imperative" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Declarative vs Imperative</h3>\n<p>函数式编程是一种声明式的编程范式，意思是程序逻辑不需要明确的描述操作流程来表达。</p>\n<p><strong>命令式</strong>程序花费大量的代码来描述用来达成期望结果的特定步骤—<strong>控制流</strong>：即如何做。</p>\n<p><strong>声明式</strong>程序抽象了控制流过程，花费大量代码描述的是—<strong>数据流</strong>：即做什么。</p>\n<p>举个例子，下面是一个用<strong>命令式</strong>方式实现的mapping过程，接受一个数值数组，并返回一个新的数组，新数组将原数组的每个值乘2：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> doubleMap <span class="token operator">=</span> numbers <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    doubled<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> doubled<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">doubleMap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// [4, 6, 8]</span>\n</code></pre>\n      </div>\n<p>而实现同样功能的<strong>声明式</strong>mapping用函数<code>Array.prototype.map()</code>将控制流抽象了，我们只要关注具体做的逻辑即可，从而表达了更清晰的数据流：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> doubleMap <span class="token operator">=</span> numbers <span class="token operator">=></span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>n <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">doubleMap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// [4, 6, 8]</span>\n</code></pre>\n      </div>\n<p><strong>命令式</strong>代码中频繁使用<code>语句</code>。<code>语句</code>是指一小段代码，它用来完成某个行为。常见的语句例子包括<code>for</code>,<code>if</code>,<code>switch</code>,<code>throw</code>，等等…</p>\n<p><strong>声明式</strong>代码更多依赖<code>表达式</code>。<code>表达式</code>是指一小段代码，它用来计算某个值。表达式通常是某些函数调用的组合、一些值和操作符，用来计算出结果值。\n一下都是表达式：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">2</span>\n<span class="token function">doubleMap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\nMath<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>通常在代码里，你会看到一个表达式被赋值给某个变量，或者作为函数的返回值，或者作为参数传递给一个函数。在被赋值、返回或传递之前，表达式首先被计算，之后它的结果值被使用。</p>\n<h3 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h3>\n<p>函数式编程的特征：</p>\n<ul>\n<li>使用纯函数而不是使用共享状态和副作用</li>\n<li>让可变数据称为不可变的</li>\n<li>使用函数组合替代命令式控制流</li>\n<li>使用高阶函数来操作多种数据类型，创建通用、可服用的功能取代只能操作指定数据的方法</li>\n<li>使用声明式而不是命令式的代码(关注做什么，而不是怎么做)</li>\n<li>使用表达式来替代语句</li>\n</ul>',frontmatter:{title:"Functional Programming",img:"./img/2017-11-14.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"November 13, 2017",path:"blog/functional/2017-11-14-Functional-Programming.md",slug:"/blog/2017/11/14/Functional-Programming.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}},{node:{frontmatter:{title:"What is 'this' in JavaScript"},fields:{slug:"/blog/2018/06/24/this.html"}}},{node:{frontmatter:{title:"react 性能优化：arrow function in react"},fields:{slug:"/blog/2018/06/15/arrow-in-react.html"}}},{node:{frontmatter:{title:"react 条件渲染"},fields:{slug:"/blog/2018/05/26/react-if.html"}}},{node:{frontmatter:{title:"higher-order component(HOC)"},fields:{slug:"/blog/2018/05/21/hight-order-component.html"}}},{node:{frontmatter:{title:"arrow function this"},fields:{slug:"/blog/2018/03/16/arrow-function-this.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--responsive-image"},fields:{slug:"/blog/2018/03/10/responsive-img.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--placeholder"},fields:{slug:"/blog/2018/03/09/placeholder.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--lazy-load"},fields:{slug:"/blog/2018/03/08/lazy-loading.html"}}}]}},pathContext:{slug:"/blog/2017/11/14/Functional-Programming.html"}}}});