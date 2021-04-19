webpackJsonp([0x7e4362bd9d40],{508:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>“古之欲明明德于天下者，先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身；欲修其身者，先正其心；欲正其心者，先诚其意；欲诚其意者，先致其知，致知在格物。物格而后知至，知至而后意诚，意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，国治而后天下平。”   —《礼记·大学》</p>\n</blockquote>\n<p>递归不是一个容易掌握的概念。递归的思考需要考虑递归自身以及自身的一个修改版本。例如：想象将树枝组合成一棵树，一个树枝有叶子以及其他的树枝，而他们有更多的叶子和更多的树枝。这个过程将无限的持续下去，只有再达到外部限制时才会停止。</p>\n<p>这种描述还是太过于抽象，看一个简单的例子，更容易理解：对数组中所有的数求和。\n先看看一个我们最常见的求和方法：循环</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>\n\n<span class="token keyword">let</span> acc <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    acc <span class="token operator">+=</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>通常开发者会使用一个累加器，因为要计算一个总和的时候，这绝对是必要的。但是真的需要循环吗？<code class="gatsby-code-text">Array.prototype.Reduce</code>函数呼之欲出，<code class="gatsby-code-text">Reduce</code>无需考虑循环，甚至是数组的大小。可以通过将第一个元素添加到其余部分来计算结果，从而实现递归思维。这种思考过程可以想象成如下的序列求和操作，这被称为<strong>横向思维</strong>：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n             <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n             <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span><span class="token number">3</span>\n             <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">5</span>\n             <span class="token operator">=</span> <span class="token number">6</span></code></pre>\n      </div>\n<p>递归和迭代是一枚硬币的两面。在不可变的条件下，递归提供了一种更具表现力、强大切优秀的迭代替代方案。事实上，纯函数式编程语言甚至没有标准的循环结构，如：do、for、while，因为所有的循环都是递归完成的。递归使代码更容易理解，因为他是以多次较小的输入上重复相同的操作为基础的。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>        <span class="token comment">// 基例(终止条件)</span>\n        <span class="token keyword">return</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> _<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">rest</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// 递归条件：使用更小的一些输入集调用自身</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// => 0</span>\n<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// => 6</span></code></pre>\n      </div>\n<p>空数组会满足基例,返回0.而对于非空数组，就会继续将第一个元素于数组的其余部分递归的求和。从底层来看，递归调用会在函数调用栈中不断的堆叠。当算法满足终止条件的时候，运行时就会展开调用栈并执行操作，此时所有的返回语句都会被逐步执行，递归就是通过语言运行时这种机制代替了循环。</p>\n<blockquote>\n<p>递归是将任务分解成更小版本的的自己的机制，通常境况下，每次递归调用都在一个更小的子集解决“同样的问题”，直到达到递归的基例情况，然后释放堆栈返回结果。</p>\n</blockquote>\n<p>看到这里，自然是要思考一下递归和迭代的性能问题，毕竟，在递归调用的过程当中系统为每一层的返回点、局部量等开辟了栈来存储，而栈的空间是有限的，调用层次过多容易造成栈溢出。而编译器在处理循环的优化问题上是非常强大的。</p>\n<p>递归求Fibonacci数列n=4时，栈的变化情况：</p>\n<p><img src="/fibonacci-n-4-8082c28365237a496245ff41aaf37d87.gif" alt="Fibonacci数列n=4"></p>\n<p>递归解决方案的缺点：递归往往不注意堆栈空间，尤其是类似于Fibonacci数列这种情况下，堆栈桢的数量跟输入的大小是相同比例的。不过这种问题在一定程度上可以使用函数结果记忆化来一定程度上解决这个问题(但是对于输入不断变化，同样会导致高速缓存一直用不上)</p>\n<p>JavaScript的ES6带来了一种被称为<strong>尾调用优化(TCO)</strong>的功能，可以使递归和迭代的性能表现的更加接近。考虑一个稍有不同的sum实现：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>acc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token function">sum</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">rest</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">,</span> acc <span class="token operator">+</span> _<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>这个版本的实现将递归调用作为函数体中最后的步骤，也就是<strong>尾部位置</strong>。</p>\n<p><strong>TCO</strong>也被称为<strong>尾部调用优化</strong>，是ES6添加的编译器增强功能。同时，在最后的为位置调用别的函数也可以优化(虽然通常是本身)，改调用位置称为<strong>尾部位置</strong>(尾递归因此而得名)。</p>\n<p>这什么算是一种优化？函数的最后一件事情如果是递归函数的调用，那么运行时会认为不必要保存当前的栈帧，因为所有工作已经完成，完全可以抛弃当前帧。在大多数情况下，只有将函数的上下文状态作为参数传递给下一个函数调用，才能使递归不需要依赖当前帧。通过这种方式，递归每次都会创建一个新的帧，回收旧的帧，而不是将新的帧叠加在旧的上。</p>\n<p>看个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 常规递归</span>\n<span class="token keyword">const</span> <span class="token function-variable function">factorial</span> <span class="token operator">=</span> n <span class="token operator">=></span>\n    <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> n <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 尾递归</span>\n<span class="token keyword">const</span> <span class="token function-variable function">factorial</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">,</span> current <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n    <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> current <span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">*</span> current<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>这个时候常规递归是一个典型的递归金字塔：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">factorial(4)\n    4 * factorial(3)\n        4 * 3 * factorial(2)\n            4 * 3 * 2 * factorial(1)\n                4 * 3 * 2 * 1\n            4 * 3 * 2\n        4 * 6\n    24\n    return 24</code></pre>\n      </div>\n<p>采用尾递归之后，那么将会一个非常扁平化的上下文堆栈：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">factorial(4)\n    factorial(3,4)\n    factorial(2,12)\n    factorial(1,24)\n    return 24</code></pre>\n      </div>\n<p>尾递归factorial(4)求值过程中，函数只使用了一桢，TCO负责抛弃当前帧，为新的帧让路，就像factorial在循环中求值一样，这种扁平化的结构可以有效的利用栈，不再需要保留N帧。</p>\n<p>尾递归带来的递归循环的性能接近于for循环，所以对于有尾递归优化的雨呀，比如ES6,就可以在保持算法的正确性和mutation控制，同时还能保持不会拖累性能。</p>\n<p>不过尾调用也不仅限于尾递归。也可以是调用另一个函数，这种情况在JavaScript代码中也很常见。</p>',frontmatter:{title:"FP8：Recursion",img:"./img/2018-01-02.jpg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"January 01, 2018",path:"blog/functional/2018-01-02-FP8-Recursion.md",slug:"/blog/2018/01/02/FP8-Recursion.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}}]}},pathContext:{slug:"/blog/2018/01/02/FP8-Recursion.html"}}}});