webpackJsonp([0x9325e85f9977],{546:function(n,s){n.exports={data:{markdownRemark:{html:'<p>所谓<code class="gatsby-code-text">Semigroup</code>(半群)，其实就是含有concat方法的数据类型，典型的如字符串和数组，看代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> resStr <span class="token operator">=</span> <span class="token string">\'a\'</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span> \n<span class="token comment">// => \'abc\'</span>\n\n<span class="token keyword">const</span> resArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">// => [1,2,3,4,5,6]</span></code></pre>\n      </div>\n<p>实际上，我们还可以发现一个规律<code class="gatsby-code-text">Semigroup</code>是可以随意的合并操作的，什么意思呢？</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> resStr <span class="token operator">=</span> <span class="token string">\'a\'</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">// => \'abc\'</span>\n\n<span class="token keyword">const</span> resArr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">// => [1,2,3,4,5,6]</span></code></pre>\n      </div>\n<p>无论前后的顺序如何，或者无论怎么组合，得到的结果是一致的。\n完全类似于数据的加法运算：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> \n<span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span>\n<span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>但是我们却不能直接使用<code class="gatsby-code-text">1.concat(2).concat(3)</code>这样的代码，因为number并没有实现<code class="gatsby-code-text">concat</code>方法，但是我们可以自己简单实现一个Sum的<code class="gatsby-code-text">Semigroup</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Sum</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">Sum</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`Sum(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nSum<span class="token punctuation">.</span><span class="token function-variable function">empty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>现在就可以直接这样使用Sum了：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>Sum<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">// => Sum(6)</span>\n<span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">// => Sum(6)</span></code></pre>\n      </div>\n<p>Sum的使用场景不是很多，仅仅是为了学习而建立的，下面看几个使用场景比较多的<code class="gatsby-code-text">Semigroup</code></p>\n<ul>\n<li>\n<p>All:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span>  <span class="token comment">// true</span>\n<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token comment">// false</span>\n<span class="token punctuation">{</span>\n<span class="token keyword">const</span> <span class="token function-variable function">All</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">All</span><span class="token punctuation">(</span>x <span class="token operator">&amp;&amp;</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`All(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nAll<span class="token punctuation">.</span><span class="token function-variable function">empty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">All</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">All</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">All</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>All<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>First:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n<span class="token keyword">const</span> <span class="token function-variable function">First</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> _ <span class="token operator">=></span>\n        <span class="token function">First</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`First(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">First</span><span class="token punctuation">(</span><span class="token string">\'bob\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token string">\'smith\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>Max &#x26; Min</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n<span class="token keyword">const</span> <span class="token function-variable function">Max</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">Max</span><span class="token punctuation">(</span>x <span class="token operator">></span> y <span class="token operator">?</span> x <span class="token punctuation">:</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`Max(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nMax<span class="token punctuation">.</span><span class="token function-variable function">empty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Max</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Min</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">Min</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y <span class="token operator">?</span> x <span class="token punctuation">:</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`Min(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nMin<span class="token punctuation">.</span><span class="token function-variable function">empty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Min</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>Either</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Right</span> <span class="token operator">=</span> x <span class="token operator">=></span>\n<span class="token punctuation">(</span><span class="token punctuation">{</span>\n    chain<span class="token punctuation">:</span> f <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    ap<span class="token punctuation">:</span> other <span class="token operator">=></span> other<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    traverse<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">of</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>Right<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    map<span class="token punctuation">:</span> f <span class="token operator">=></span> <span class="token function">Right</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    fold<span class="token punctuation">:</span> <span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> o <span class="token operator">=></span>\n        o<span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span>_ <span class="token operator">=></span> <span class="token function">Right</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            y <span class="token operator">=></span> <span class="token function">Right</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`Right(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">Left</span> <span class="token operator">=</span> x <span class="token operator">=></span>\n<span class="token punctuation">(</span><span class="token punctuation">{</span>\n    chain<span class="token punctuation">:</span> f <span class="token operator">=></span> <span class="token function">Left</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    ap<span class="token punctuation">:</span> other <span class="token operator">=></span> <span class="token function">Left</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    traverse<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">of</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">of</span><span class="token punctuation">(</span><span class="token function">Left</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    map<span class="token punctuation">:</span> f <span class="token operator">=></span> <span class="token function">Left</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    fold<span class="token punctuation">:</span> <span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> o <span class="token operator">=></span>\n        o<span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span>_ <span class="token operator">=></span> <span class="token function">Left</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            y <span class="token operator">=></span> o<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`Left(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">fromNullable</span> <span class="token operator">=</span> x <span class="token operator">=></span>\nx <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token function">Right</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token function">Left</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">tryCatch</span> <span class="token operator">=</span> f <span class="token operator">=></span> <span class="token punctuation">{</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">Right</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">Left</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// List from https://github.com/DrBoolean/immutable-ext</span>\n<span class="token keyword">const</span> stats <span class="token operator">=</span> List<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token punctuation">{</span>page<span class="token punctuation">:</span><span class="token string">\'home\'</span><span class="token punctuation">,</span> view<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>page<span class="token punctuation">:</span><span class="token string">\'about\'</span><span class="token punctuation">,</span> view<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>page<span class="token punctuation">:</span><span class="token string">\'blog\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\nstate<span class="token punctuation">.</span><span class="token function">foldMap</span><span class="token punctuation">(</span>x <span class="token operator">=></span> \n    <span class="token function">fromNullable</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>views<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>Sum<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">Right</span><span class="token punctuation">(</span>Sum<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n</li>\n</ul>',frontmatter:{title:"FP18：Semigroup",img:"./img/2018-12-13.jpeg",author:["Sylvenas"],excerpt:"所谓`Semigroup`(半群)，其实就是含有concat方法的数据类型，典型的如字符串和数组...",catalogue:null},fields:{date:"December 12, 2018",path:"blog/functional/2018-12-13-FP18-Semigroup.md",slug:"/blog/2018/12/13/FP18-Semigroup.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}}]}},pathContext:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}}});