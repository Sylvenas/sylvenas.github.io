webpackJsonp([0x9db901fcbb1e],{734:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="array-insideout"><a href="#array-insideout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Array insideOut</h3>\n<p>假如我们现在有一个数字的数组，我们要把这些数字转换为对应的26个英文字母，但是这个转换肯能会失败，因为并不是所有的数字都是可以转换的，所以这种情况下我们可以使用Either来处理转换成功和转换失败：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">toChar</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">></span> <span class="token number">25</span>\n  <span class="token operator">?</span> <span class="token function">Left</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token string">\' is out of bounds!\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">:</span> <span class="token function">Right</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>下面继续使用<code class="gatsby-code-text">toChar</code>函数:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">  <span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>toChar<span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span> <span class="token comment">// [ Right(A), Right(B), Right(C) ]</span></code></pre>\n      </div>\n<p>看上去问题不大！但是感觉怪怪的啊！或许我们理想的结果是<code class="gatsby-code-text">Right([A,B,C])</code>?</p>\n<p>类似的例子:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">httpGet</span> <span class="token operator">=</span> name <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>rej<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> \n\n<span class="token keyword">const</span> nameList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'James\'</span><span class="token punctuation">,</span><span class="token string">\'Melo\'</span><span class="token punctuation">]</span>\n\nnameList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>name <span class="token operator">=></span> <span class="token function">httpGet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// => [Promise,Promise]</span>\n\n<span class="token comment">// 我们一般不会这么操作的，我们会借助Promise.all来完成这个过程</span>\nPromise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>nameList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>name <span class="token operator">=></span> <span class="token function">httpGet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// => Promise([])</span></code></pre>\n      </div>\n<p>现在回头看一下，我们如何把<code class="gatsby-code-text">[Right(A),Right(B),Right(C)]</code>转换为<code class="gatsby-code-text">Right([A,B,C])</code>呢？实际上这是一个<code class="gatsby-code-text">insideOut</code>的过程，也就是把<code class="gatsby-code-text">Right(A)</code>,<code class="gatsby-code-text">Right(B)</code>从Array中解救出来，然后再集合放到Right中。</p>\n<p>这个过程我们可以借助Array.reduce来完成：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>toChar<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">lift2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>f<span class="token punctuation">,</span> fx<span class="token punctuation">,</span> fy<span class="token punctuation">)</span> <span class="token operator">=></span> fx<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ap</span><span class="token punctuation">(</span>fy<span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">append</span> <span class="token operator">=</span> y <span class="token operator">=></span> xs <span class="token operator">=></span> xs<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">insideOut</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token constant">T</span><span class="token punctuation">,</span> xs<span class="token punctuation">)</span> <span class="token operator">=></span>\n    xs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span>acc<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">lift2</span><span class="token punctuation">(</span>append<span class="token punctuation">,</span> x<span class="token punctuation">,</span> acc<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token constant">T</span><span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">insideOut</span><span class="token punctuation">(</span>Either<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// => Right(A,B,C)    </span></code></pre>\n      </div>\n<p>本质上就是对一个数组先进行map,然后进行reduce(或者先reducer，然后map,结果应该是一样的)，这段代码，我们可以稍微做个抽象：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token constant">T</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span>acc<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>append<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ap</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token constant">T</span><span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n <span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span>Either<span class="token punctuation">,</span> toChar<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span> <span class="token comment">// => Left(-1 is out of bounds!)</span>\n\n<span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span>Either<span class="token punctuation">,</span> toChar<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span> <span class="token comment">// => Right(A,B,C,D,E)</span></code></pre>\n      </div>\n<h3 id="list"><a href="#list" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>List</h3>\n<p>之前我们仿照Array的<code class="gatsby-code-text">map</code>创建了一个最简单的Functor - box,现在，我们可以仿照<code class="gatsby-code-text">traverse</code>创建一个新的Functor：List</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">List</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  x<span class="token punctuation">,</span>\n  map<span class="token punctuation">:</span> f <span class="token operator">=></span> <span class="token function">List</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  concat<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">List</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  ap<span class="token punctuation">:</span> o <span class="token operator">=></span> x<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f <span class="token operator">=></span> o<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token operator">=></span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  chain<span class="token punctuation">:</span> f <span class="token operator">=></span> x<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token operator">=></span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  traverse<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token constant">T</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>append<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ap</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>inspect<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`List([</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">])`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nList<span class="token punctuation">.</span><span class="token function-variable function">of</span> <span class="token operator">=</span> x <span class="token operator">=></span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">List</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>List的参数原则上是一个数组；\nmap方法：和普通的Box有所区别在于是变换List中的每一项\nconcat方法：是把新项追加到数组中，然后用List重新包装,\nap方法：接收另外一个List,然后把x中func逐一应用到o的item上(注意此时x为函数的数组)，然后通过reducer合并\nchain方法：接收一个函数直接把List中的每一项全部应用map，然后通过reducer合并\ntraverse方法：完全相同与上面介绍的Array.prototype.traverse</p>\n<h4 id="list应用与并发应用"><a href="#list%E5%BA%94%E7%94%A8%E4%B8%8E%E5%B9%B6%E5%8F%91%E5%BA%94%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>List应用与并发应用</h4>\n<p>得益于Applicative的并行特性，我们可以使用traverse创建更简洁的并行逻辑</p>\n<p>List traverse 同步逻辑</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">app</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">List</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span>Either<span class="token punctuation">,</span> toChar<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span>x <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'log left\'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        x <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'log right\'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// log right [ \'A\', \'B\', \'C\', \'D\' ]</span>\n<span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// log left  \'-2 is out of bounds!-1 is out of bounds!\'</span></code></pre>\n      </div>\n<p>List traverse 异步逻辑</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">httpGet</span> <span class="token operator">=</span> name <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>rej<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> \n\n <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'melo\'</span><span class="token punctuation">,</span> <span class="token string">\'james\'</span><span class="token punctuation">,</span> <span class="token string">\'brian\'</span><span class="token punctuation">]</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">\'getName\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">List</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span>Task<span class="token punctuation">,</span> httpGet<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span>x <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'log left\'</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span> x<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        x <span class="token operator">=></span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">\'getName\'</span><span class="token punctuation">)</span> <span class="token comment">//2006.420ms</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'log right\'</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span> x<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token comment">// log right object [\'My name is melo\', \'My name is james\', \'My name is brian\']</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>',frontmatter:{title:"遍历与队列 - Traversable",img:"./img/2017-11-07.jpeg",author:["sylvenas"],excerpt:null,catalogue:null},fields:{date:"April 24, 2020",path:"blog/monad/2020-04-25-遍历与队列.md",slug:"/blog/2020/04/25/遍历与队列.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}}]}},pathContext:{slug:"/blog/2020/04/25/遍历与队列.html"}}}});