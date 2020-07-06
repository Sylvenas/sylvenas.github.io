webpackJsonp([86781549884547],{476:function(n,s){n.exports={data:{markdownRemark:{html:'<p>在解释 BFC 是什么之前，需要先介绍 Box、Formatting Context的概念。</p>\n<h4 id="box-css布局的基本单位"><a href="#box-css%E5%B8%83%E5%B1%80%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8D%95%E4%BD%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Box: CSS布局的基本单位</h4>\n<p>Box是CSS布局的对象和基本单位，直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个Box的类型。 不同类型的Box，会参与不同的Formatting Context（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染。让我们看看有哪些盒子：</p>\n<p>block-level box:display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；</p>\n<p>inline-level box:display 属性为 inline, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 inline formatting context；</p>\n<p>run-in box: css3 中才有， 这儿先不讲了。</p>\n<h4 id="formatting-context"><a href="#formatting-context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Formatting context</h4>\n<p>Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。</p>\n<p>CSS2.1 中只有 BFC 和 IFC, CSS3 中还增加了 GFC (Grid formatting context) 和 FFC (Flex formatting context)。</p>\n<h4 id="bfc-定义"><a href="#bfc-%E5%AE%9A%E4%B9%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BFC 定义</h4>\n<p>BFC(Block formatting context)直译为”块级格式化上下文”。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。</p>\n<h4 id="bfc布局规则："><a href="#bfc%E5%B8%83%E5%B1%80%E8%A7%84%E5%88%99%EF%BC%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BFC布局规则：</h4>\n<ul>\n<li>内部的Box会在垂直方向，一个接一个地放置。    </li>\n<li>Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠    </li>\n<li>每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。  </li>\n<li>BFC的区域不会与float box重叠。    </li>\n<li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。     </li>\n<li>计算BFC的高度时，浮动元素也参与计算    </li>\n</ul>\n<h4 id="bfc触发方法"><a href="#bfc%E8%A7%A6%E5%8F%91%E6%96%B9%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BFC触发方法</h4>\n<ul>\n<li>根元素(html)</li>\n<li>float属性不为none</li>\n<li>position为absolute或fixed</li>\n<li>display为inline-block, table-cell, table-caption, flex, inline-flex</li>\n<li>overflow不为visible</li>\n</ul>\n<h4 id="bfc的典型用途"><a href="#bfc%E7%9A%84%E5%85%B8%E5%9E%8B%E7%94%A8%E9%80%94" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BFC的典型用途</h4>\n<ul>\n<li>\n<p>自适应两栏布局</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n<span class="token selector">body</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.aside</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #f66<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.main</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>aside<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>根据BFC布局规则第3条：<br>\n每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。\n因此，虽然存在浮动的元素aslide，但main的左边依然会与包含块的左边相接触。</p>\n</li>\n</ul>\n<p>根据BFC布局规则第四条：\nBFC的区域不会与float box重叠。\n我们可以通过通过触发main生成BFC， 来实现自适应两栏布局。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.main</span> <span class="token punctuation">{</span>\n    <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>如果要增加两列之间的间隔的话，有两种方法比较好：</p>\n<ol>\n<li>\n<p>左侧浮动元素增加<code class="gatsby-code-text">margin-right:20px;</code></p>\n</li>\n<li>\n<p>右侧BFC元素增加<code class="gatsby-code-text">padding-left:20px;</code></p>\n</li>\n<li>\n<p>清除内部浮动</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n<span class="token selector">.par</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #fcc<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #f66<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>par<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>根据BFC布局规则第六条：\n计算BFC的高度时，浮动元素也参与计算\n为达到清除内部浮动，我们可以触发par生成BFC，那么par在计算高度时，par内部的浮动元素child也会参与计算。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.par</span> <span class="token punctuation">{</span>\n<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>防止垂直 margin 重叠</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n<span class="token selector">p</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> #f55<span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n    <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Haha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hehe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>两个p之间的距离为100px，发送了margin重叠。\n根据BFC布局规则第二条：\nBox垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。\n我们可以在p外面包裹一层容器，并触发该容器生成一个BFC。那么两个P便不属于同一个BFC，就不会发生margin重叠了。</p>\n</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n    <span class="token selector">.wrap</span> <span class="token punctuation">{</span>\n        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">p</span> <span class="token punctuation">{</span>\n        <span class="token property">color</span><span class="token punctuation">:</span> #f55<span class="token punctuation">;</span>\n        <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>\n        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n        <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n        <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>\n        <span class="token property">margin</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Haha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hehe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code></pre>\n      </div>',frontmatter:{title:"BFC 块级格式化上下文",img:"./img/2016-08-21.jpeg",author:["sylvenas"],excerpt:null,catalogue:null},fields:{date:"August 20, 2016",path:"blog/css/2016-08-21-bfc.md",slug:"/blog/2016/08/21/bfc.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}}]}},pathContext:{slug:"/blog/2016/08/21/bfc.html"}}}});