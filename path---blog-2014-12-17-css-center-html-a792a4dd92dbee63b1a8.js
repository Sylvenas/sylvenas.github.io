webpackJsonp([24037326979274],{463:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="水平居中"><a href="#%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>水平居中</h3>\n<h4 id="子元素是行内元素inline或者inline-block-inline-table-inline-flex"><a href="#%E5%AD%90%E5%85%83%E7%B4%A0%E6%98%AF%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0inline%E6%88%96%E8%80%85inline-block-inline-table-inline-flex" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>子元素是行内元素(inline)或者inline-block, inline-table, inline-flex</h4>\n<p>父元素直接设置<code class="gatsby-code-text">text-align:center</code></p>\n<h4 id="子元素是块级元素"><a href="#%E5%AD%90%E5%85%83%E7%B4%A0%E6%98%AF%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>子元素是块级元素</h4>\n<ul>\n<li>\n<p>子元素直接设置<code class="gatsby-code-text">margin:0 auto;</code></p>\n</li>\n<li>\n<p>父元素设置<code class="gatsby-code-text">position:relative</code>,子元素设置<code class="gatsby-code-text">position: absolute;left: 50%;transform: translateX(-50%);</code></p>\n</li>\n</ul>\n<blockquote>\n<p>注意这个时候需要子元素需要设置一个宽度(如果子元素不设置宽度的话，块级元素的宽度将是100%，也就不需要所谓的水平居中了)</p>\n</blockquote>\n<h4 id="多个块级子元素"><a href="#%E5%A4%9A%E4%B8%AA%E5%9D%97%E7%BA%A7%E5%AD%90%E5%85%83%E7%B4%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>多个块级子元素</h4>\n<p>如果有多个块级子元素需要居中对齐，最好的方法就是把多个子元素全部设置为<code class="gatsby-code-text">display:inline-block</code>,然后父元素设置<code class="gatsby-code-text">text-align:center</code></p>\n<h3 id="垂直居中"><a href="#%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>垂直居中</h3>\n<h4 id="子元素是行内元素inline或者inline-block-inline-table-inline-flex-1"><a href="#%E5%AD%90%E5%85%83%E7%B4%A0%E6%98%AF%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0inline%E6%88%96%E8%80%85inline-block-inline-table-inline-flex-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>子元素是行内元素(inline)或者inline-block, inline-table, inline-flex</h4>\n<ul>\n<li>单行(一行能够摆开)：父元素的line-height设置为和height的值一样,其实这个是利用<code class="gatsby-code-text">line box</code>的<a href="">垂直居中行</a>来实现的。</li>\n</ul>\n<p>先说一个大家都熟知的现象，有一个空的div，<code class="gatsby-code-text">&lt;div&gt;&lt;/div&gt;</code>，如果没有设置至少大于1像素高度height值时，该div的高度就是个0。如果该div里面打入了一个空格或是文字，则此div就会有一个高度。那么您思考过没有，为什么div里面有文字后就会有高度呢？</p>\n<p>这是个看上去很简单的问题，是理解<code class="gatsby-code-text">line-height</code>非常重要的一个问题。可能有人会跟认为是：文字撑开的！文字占据空间，自然将div撑开。我一开始也是这样理解的，但是事实上，深入理解inline模型后，我发现，根本不是文字撑开了div的高度，而是<code class="gatsby-code-text">line-height</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n    <span class="token selector">.test1</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span> <span class="token property">line-height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span>1px solid #ccc<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span>#eee<span class="token punctuation">;</span><span class="token punctuation">}</span>\n    <span class="token selector">.test2</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">line-height</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span>1px solid #ccc<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span>#eee<span class="token punctuation">;</span><span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>  \n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>上面的代码的结果是怎么样的呢？</p>\n<div style="text-align:center;margin-top:20px" align="center">\n  <img style="height:200px;" src="../images/line-height.jpeg" />\n</div>  \n<p>是不是很震惊，可以看到test1的文字<code class="gatsby-code-text">font-size:20px</code>,文字虽然现实出来了，但是隐式行内框<code class="gatsby-code-text">hello world</code>的外层div元素的高度却是0；而test2的文字<code class="gatsby-code-text">font-size:0</code>，文字没有显示出来，但是隐式行内框<code class="gatsby-code-text">hello world</code>却把外层div元素的高度撑起来了。</p>\n<p>本质上的原因是行框的高度是由<code class="gatsby-code-text">line-height</code>来决定的，而不是行内元素的<code class="gatsby-code-text">height</code>决定的，更不是由行内的文字高度决定的。</p>\n<p>其实<code class="gatsby-code-text">line boxes</code>不是直接的生产者，属于中层干部，真正的活儿都是它的手下 – <code class="gatsby-code-text">inline boxes</code>干的，这些手下就是文字啦，图片啊，<code class="gatsby-code-text">&lt;span&gt;</code>之类的inline属性的标签啦。<code class="gatsby-code-text">line boxes</code>只是个考察汇报人员，考察它的手下谁的实际<code class="gatsby-code-text">line-height</code>值最高，谁最高，它就要谁的值，然后向上汇报，形成高度。例如，<code class="gatsby-code-text">&lt;span style=&quot;line-height:20px;&quot;&gt;取手下line-height&lt;span style=&quot;line-height:40px;&quot;&gt;最高&lt;/span&gt;的值&lt;/span&gt;</code>。则line boxes的高度就是40像素了。</p>\n<p>由上面的知识可以推导出，如果父元素内只有一个<code class="gatsby-code-text">inline-*</code>元素，那么只要把父元素的<code class="gatsby-code-text">line-height</code>设置为和<code class="gatsby-code-text">height</code>的值一样即可。(实质上这种情况下，父元素的height的值已经没用了，因为line-height具有继承性，也就是说子元素的line-height也被设置为了和父元素一样的行高，父元素的高度是由子元素撑起来的，这个时候父元素的height已经没有存在的价值了)</p>\n<ul>\n<li>多行\n如果行内元素要占据多行的情况下，则稍微麻烦一点，可以使用老式的table布局，不过这个实在是太out了。</li>\n</ul>\n<p>现在来说最为时尚的做法是使用伪元素，使用一个100%高度的伪元素进行一个占位，然后让行内元素相对于改伪元素进行垂直居中看代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n<span class="token selector">.ghost-center</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 240px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n    <span class="token property">resize</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>\n    <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.ghost-center::before</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" "</span><span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>\n    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.ghost-center span</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 190px<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> rebeccapurple<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ghost-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n        I\'m vertically centered multiple lines of text in a container. Centered with a ghost pseudoelement\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h4 id="子元素是已知高度的块级元素"><a href="#%E5%AD%90%E5%85%83%E7%B4%A0%E6%98%AF%E5%B7%B2%E7%9F%A5%E9%AB%98%E5%BA%A6%E7%9A%84%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>子元素是已知高度的块级元素</h4>\n<p>这种情况是最简单的，一般思路是父元素先使用绝对定位，把子元素的左上角拉到父元素的中间位置，然后使用<code class="gatsby-code-text">负margin</code>,<code class="gatsby-code-text">translateY</code>,等等把子元素往上拉一半的高度：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span> <span class="token comment">/* account for padding and border if not using box-sizing: border-box; */</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="子元素是未知高度的块级元素"><a href="#%E5%AD%90%E5%85%83%E7%B4%A0%E6%98%AF%E6%9C%AA%E7%9F%A5%E9%AB%98%E5%BA%A6%E7%9A%84%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>子元素是未知高度的块级元素</h4>\n<p>其实这个时候整体思路上和上面的是一样的，不同的地方在于，这种情况下不能再使用<code class="gatsby-code-text">负margin-top</code>来把元素拉上去，因为没法设定margin-top的具体的值，更不能用百分比，因为margin的百分比是相对于父元素的宽度而言的，这个时候只能用相对于自身高度的<code class="gatsby-code-text">translateY</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>conclusion</h3>\n<p>以上边上常用的水平垂直居中对齐的各种方案，一般能够应付常见的业务场景了。不过用现在浏览器兼容性的程度来说，<code class="gatsby-code-text">flex box</code>会是更简单方便的方案了。</p>',frontmatter:{title:"CSS实现元素水平垂直居中",img:"./img/2014-12-17.jpg",author:["sylvenas"],excerpt:null,catalogue:null},fields:{date:"December 16, 2014",path:"blog/css/2014-12-17-CSS-center.md",slug:"/blog/2014/12/17/CSS-center.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}}]}},pathContext:{slug:"/blog/2014/12/17/CSS-center.html"}}}});