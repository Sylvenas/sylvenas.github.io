webpackJsonp([0x6ef6eac2ffe9],{707:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>“A monad is just a monoid in the category of endofunctors. What’s the problem?”</p>\n</blockquote>\n<p>Monad是非常简单的，但是它的概念却有点让人云里雾里，尤其是网上查询资料博客的时候，一般会从范畴论开始讲解，这是正确的道路，不过可惜的是大部分的JavaScript开发人员，并不懂范畴论，范畴不仅仅是一种数学语言，也是一种哲学观点，范畴论也绝不是一两篇文章就能讲清楚的，这里我们不过多的去说明范畴论，而仅仅是谈论一下在计算机编程中的Monad的概念</p>\n<p>Monad是一种组合函数的方法，除了返回值之外，还需要上下文，比如计算，if/else分支，IO等等。Monad可以类型提升，并且扁平化的映射<code class="gatsby-code-text">a -&gt; M(b)</code>,使函数可组合，可以把类型a的数据映射成数据b的类型，并隐藏了实现的细节</p>\n<blockquote>\n<p>这里说的上下文不同于函数执行上下文，这里的上下文，仅仅是只数据的外部环境，或者是某种Wrapper、Box之类的概念，例如数组的仅仅是对数据的一种包裹，但是却可以提供很多的便捷的方法</p>\n</blockquote>\n<ul>\n<li>Function map:<code class="gatsby-code-text">a=&gt;b</code></li>\n<li>Functor map with context:<code class="gatsby-code-text">Functor(a) =&gt; Functor(b)</code></li>\n<li>Monad flatten and map with context:<code class="gatsby-code-text">Monad(Monad(a)) =&gt; Monad(b)</code></li>\n</ul>\n<p>上面所说的：<code class="gatsby-code-text">map</code>，<code class="gatsby-code-text">flatten</code>,<code class="gatsby-code-text">context</code>又是什么意思呢？</p>\n<ul>\n<li>Map的意思是说，使用参数a调用一个函数，计算之后，函数返回值为b. Given some input, return some output.</li>\n<li>Context是组合Monad的计算细节，这里和Functor类似，我们可以直接调用<code class="gatsby-code-text">fmap</code>之类的方法，却无需关心实现的细节，这样我们就可以放心的在上下文环境中，完成从数据a,到数据b的映射，并返回处于同样上下文中的b，eg:<code class="gatsby-code-text">Array(a) =&gt; Array(b)</code>,<code class="gatsby-code-text">Observable(a) =&gt; Observable(b)</code></li>\n<li>Type lift意味着将数据提升到上下文中,这样可以方便的使用上下文的方法，<code class="gatsby-code-text">a =&gt; Functor(a)</code>,Monad只不过是更强大的Functor，eg:字符串’abc’,‘xyz’，把他们做个类型提升：<code class="gatsby-code-text">[&#39;abc&#39;,&#39;xyz&#39;]</code>,那么就可以方便快捷的，使用数据的map,filter等等方法了，借助Functor可以提升任何类型的数据</li>\n<li>Flatten是从上下文中取出数据<code class="gatsby-code-text">Functor(a) =&gt; a</code>,去除包装，取出果实，有可能一个值是被层层包装的，那么就是层层的去除包装来扁平化，类似于拨洋葱一样一层一层的去除外衣</li>\n</ul>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>             <span class="token comment">// Some data of type `a`</span>\n<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>     <span class="token comment">// A function from `a` to `b`</span>\n<span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// The type lift.</span>\n<span class="token comment">// JS has type lift sugar for arrays: [x]</span>\n<span class="token comment">// .map() applies the function f to the value x</span>\n<span class="token comment">// in the context of the array.</span>\n<span class="token keyword">const</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [40]</span></code></pre>\n      </div>\n<p>在这个例子中，Array就是<code class="gatsby-code-text">context</code>,<code class="gatsby-code-text">x</code>是被包裹的值。</p>\n<p>这个例子中没有包含，数组中的数组，但是使用concat扁平化数组，绝不陌生：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>concat<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 4]</span></code></pre>\n      </div>\n<h3 id="youre-probably-already-using-monads"><a href="#youre-probably-already-using-monads" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>You’re probably already using monads</h3>\n<p>函数组合创建数据流经的函数管道。您在管道的第一阶段输入了一些输入，并且一些数据从管道的最后一个阶段弹出，进行了转换。但要实现这一点，管道的每个阶段都必须期望前一阶段返回的数据类型。</p>\n<p>编写简单的函数很容易，因为类型都很容易排列。只需将输出类型b的函数<code class="gatsby-code-text">g</code>与输入类型b的函数<code class="gatsby-code-text">f</code>匹配即可：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">g: a =&gt; b\nf: b =&gt; c\nh = f(g(a)): a =&gt; c</code></pre>\n      </div>\n<p>如果是在<code class="gatsby-code-text">Functor</code>中进行组合或者连续调用，也非常简单，因为永远都是相同的Wrapper类型：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">g: F(a) =&gt; F(b)\nf: F(b) =&gt; F(c)\nh = f(g(Fa)): F(a) =&gt; F(c)</code></pre>\n      </div>\n<p>但是如果你想组合的函数是<code class="gatsby-code-text">a =&gt; F(b)</code>,<code class="gatsby-code-text">b =&gt; F(c)</code>,这个时候就需要Monad了，使用<code class="gatsby-code-text">M</code>Functor替换一下<code class="gatsby-code-text">F</code>,让问题更清晰一些：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">g: a =&gt; M(b)\nf: b =&gt; M(c)\nh = composeM(f, g): a =&gt; M(c)</code></pre>\n      </div>\n<p>Oops.这个时候发现类型对应不上，<code class="gatsby-code-text">f</code>函数的输入我们想要的是类型<code class="gatsby-code-text">b</code>,但是我们得到的却是类型<code class="gatsby-code-text">M(b)</code>,由于这中错位，在<code class="gatsby-code-text">composeM</code>中，我们需要从函数<code class="gatsby-code-text">g</code>的返回值<code class="gatsby-code-text">M(b)</code>中取出数据<code class="gatsby-code-text">b</code>。而这个过程正是<code class="gatsby-code-text">flaten</code>和<code class="gatsby-code-text">map</code>的过程</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">g: a =&gt; M(b) flattens to =&gt; b\nf: b maps to =&gt; M(c)\nh composeM(f, g):a flatten(M(b)) =&gt; b =&gt; map(b =&gt; M(c)) =&gt; M(c)</code></pre>\n      </div>\n<p>在上面中<code class="gatsby-code-text">M(b) =&gt; b</code>的展平，以及<code class="gatsby-code-text">b =&gt; M(c)</code>的映射，实在<code class="gatsby-code-text">a =&gt; M(c)</code>的<code class="gatsby-code-text">chain</code>中完成的，在更高层级<code class="gatsby-code-text">composeM</code>中的完成的，稍后会讲解<code class="gatsby-code-text">composeM</code>如何实现。</p>\n<p>现在我们只要知道我们借助Monad完成更高级的函数组合，有很多的函数不是简单的从<code class="gatsby-code-text">a =&gt; b</code>的映射，有些函数需要处理副作用，例如(promise)、分支处理(Either)、异常处理(Maybe)。。。</p>\n<p>举一个更实际的例子，如果我们要从一个异步的API中获取某个用户的信息，然后把这个信息，传递给另一个异步的API,来查询别的数据，这个时候我们怎么办呢？</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">getUserById(id) =&gt; Promise(User)\nhasPermision(User) =&gt; Promise(Boolean)</code></pre>\n      </div>\n<p>首先写一些工具函数，帮助我们完成任务：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>fns<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">trace</span> <span class="token operator">=</span> label <span class="token operator">=></span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> label <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> value <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>然后可以这样使用代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> label <span class="token operator">=</span> <span class="token string">\'API call composition\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// a => Promise(b)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">getUserById</span> <span class="token operator">=</span> id <span class="token operator">=></span> id <span class="token operator">===</span> <span class="token number">3</span> <span class="token operator">?</span>\n    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Kurt\'</span><span class="token punctuation">,</span> role<span class="token punctuation">:</span> <span class="token string">\'Author\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>\n    undefined\n\n<span class="token comment">// b => Promise(c)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">hasPermission</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> role <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>role <span class="token operator">===</span> <span class="token string">\'Author\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Try to compose them. Warning: this will fail.</span>\n<span class="token keyword">const</span> authUser <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>hasPermission<span class="token punctuation">,</span> getUserById<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Oops! Always false!</span>\n<span class="token function">authUser</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token function">trace</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>当我们组合<code class="gatsby-code-text">getUserById</code>，<code class="gatsby-code-text">hasPermission</code>函数的时候，我们发现了一个大问题，<code class="gatsby-code-text">hasPermission</code>函数期望得到一个<code class="gatsby-code-text">User</code>对象作为参数，而<code class="gatsby-code-text">getUserById</code>函数的返回值却是<code class="gatsby-code-text">Promise(User)</code>，为了解决这个问题，我们需要使用<code class="gatsby-code-text">then</code>方法从<code class="gatsby-code-text">Promise(User)</code>中把<code class="gatsby-code-text">User</code>对象取出来,为此我们做一个定制版的<code class="gatsby-code-text">composePromises</code>函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">composeM</span> <span class="token operator">=</span> chainMethod <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token operator">...</span>ms<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    ms<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">[</span>chainMethod<span class="token punctuation">]</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> composePromises <span class="token operator">=</span> <span class="token function">composeM</span><span class="token punctuation">(</span><span class="token string">\'then\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> label <span class="token operator">=</span> <span class="token string">\'API call composition\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// a => Promise(b)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">getUserById</span> <span class="token operator">=</span> id <span class="token operator">=></span> id <span class="token operator">===</span> <span class="token number">3</span> <span class="token operator">?</span>\n    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Kurt\'</span><span class="token punctuation">,</span> role<span class="token punctuation">:</span> <span class="token string">\'Author\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>\n    undefined\n\n<span class="token comment">// b => Promise(c)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">hasPermission</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> role <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>role <span class="token operator">===</span> <span class="token string">\'Author\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Compose the functions (this works!)</span>\n<span class="token keyword">const</span> authUser <span class="token operator">=</span> <span class="token function">composePromises</span><span class="token punctuation">(</span>hasPermission<span class="token punctuation">,</span> getUserById<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">authUser</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token function">trace</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></code></pre>\n      </div>\n<p>Promise也是一种Monad。</p>\n<h4 id="what-monads-are-made-of"><a href="#what-monads-are-made-of" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Monads are Made of</h4>\n<p>Monad遵循一个简单的对称，把一个值包装到context中，并且能够把值从context中取出来。</p>\n<ul>\n<li><strong>Lift/Unit</strong>:把一个值包装到Monad的context中，<code class="gatsby-code-text">a =&gt; M(a)</code></li>\n<li><strong>Flatten/Join</strong>:把值从context中取出来，<code class="gatsby-code-text">M(a) =&gt; a</code></li>\n</ul>\n<p>Monad肯定也是一个Functor,那么很明显也有一个fmap方法：</p>\n<ul>\n<li><strong>Map</strong>:从一个Functor映射到另一个Functor,<code class="gatsby-code-text">M(a) =&gt; M(b)</code></li>\n</ul>\n<p>合并<code class="gatsby-code-text">Flatten</code>和<code class="gatsby-code-text">Map</code>,这个就是<code class="gatsby-code-text">Chain</code></p>\n<ul>\n<li><strong>FlatMap/Chain</strong>: Flatten + map: <code class="gatsby-code-text">M(M(a)) =&gt; M(b)</code></li>\n</ul>\n<blockquote>\n<p>在Promise中<code class="gatsby-code-text">.then</code>方法实际上就是Monad中的<code class="gatsby-code-text">FlatMap/Chain</code>方法</p>\n</blockquote>\n<blockquote>\n<p>Monad是一个抽象接口(类似于Java中的Interface)，定义了实现该接口必须定义的方法，而实现了Monad的具体类型被称为<strong>Monadic</strong>,Monadic才是根据方向，可以有不同的具体的实现,例如Promise，Array等等</p>\n</blockquote>\n<h4 id="扩展应用"><a href="#%E6%89%A9%E5%B1%95%E5%BA%94%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>扩展应用</h4>\n<p>看一个具体的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// The algebraic definition of function composition:</span>\n<span class="token comment">// (f ∘ g)(x) = f(g(x))</span>\n<span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>    <span class="token comment">// The value</span>\n<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// The container</span>\n<span class="token comment">// Some functions to compose</span>\n<span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token comment">// Proof that .map() accomplishes function composition.</span>\n<span class="token comment">// Chaining calls to map is function composition.</span>\n<span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">\'map composes\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">compose</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// => [42], [42]</span></code></pre>\n      </div>\n<p>不仅仅是数组具有map方法，我们可以把任何包含<code class="gatsby-code-text">map</code>方法的Functor,都可以组合</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">composeMap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>ms<span class="token punctuation">)</span> <span class="token operator">=></span> ms<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Promise的组合:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> label <span class="token operator">=</span> <span class="token string">\'Promise composition\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> n <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> n <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token function">composePromises</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">h</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token function">trace</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">// Promise composition: 42</span></code></pre>\n      </div>\n<p>其实规律非常简单，只要是这种结构的数据都可以自由的定义组合：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">composeM</span> <span class="token operator">=</span> method <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token operator">...</span>ms<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  ms<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> composePromises <span class="token operator">=</span> <span class="token function">composeM</span><span class="token punctuation">(</span><span class="token string">\'then\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> composeMap <span class="token operator">=</span> <span class="token function">composeM</span><span class="token punctuation">(</span><span class="token string">\'map\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> composeFlatMap <span class="token operator">=</span> <span class="token function">composeM</span><span class="token punctuation">(</span><span class="token string">\'flatMap\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',frontmatter:{title:"FP15：Monad-2",img:"./img/2018-09-11.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"September 10, 2018",path:"blog/functional/2018-09-11-FB15-Monad-2.md",slug:"/blog/2018/09/11/FB15-Monad-2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"shell intro"},fields:{slug:"/blog/2021/06/02/shell-intro.html"}}},{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"Koa实现原理分析"},fields:{slug:"/blog/2021/02/06/koa.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}}]}},pathContext:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}}});