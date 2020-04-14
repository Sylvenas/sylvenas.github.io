webpackJsonp([0xc0b894e87b1f],{463:function(n,s){n.exports={data:{markdownRemark:{html:'<p>如何将<code class="gatsby-code-text">footer</code>固定在底部是一个非常经典的问题，这个问题 <strong>乍看起来非常简单</strong>，但是实际上相当棘手，在所有的”隐蔽大坑”的难题中，简直就是教科书一般的存在。</p>\n<p>而我们想要达成的效果是：</p>\n<ul>\n<li>1、当页面内容尚未充满的时候，页脚固定在底部。</li>\n<li>2、页面填充满后，页脚随页面内容的增加而填充在主体内容的下方。</li>\n</ul>\n<p>几乎所有的经典的解决方案都是给页脚设置固定的高度，然后按照某些特定的结构来写，可以先来看一下这些经典的解决方案，假定有如下的HTML结构</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> header <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>main content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> footer <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>这个时候可以使用如下几种方法的的CSS代码使footer位于底部：</p>\n<h4 id="绝对定位方法"><a href="#%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E6%96%B9%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>绝对定位方法</h4>\n<p>通过footer的绝对定位沉底和main的padding-bottom:100px预留出足够的空间防止main的内容过多的时候覆盖footer</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">*</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">html,body</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.container</span> <span class="token punctuation">{</span>\n    <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.header</span><span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.main</span> <span class="token punctuation">{</span>\n    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.footer</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="calc动态计算方法"><a href="#calc%E5%8A%A8%E6%80%81%E8%AE%A1%E7%AE%97%E6%96%B9%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>calc动态计算方法</h4>\n<p>把main的最小高度设置为：视窗的高度-header高度-footer高度</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">*</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.header</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.main</span> <span class="token punctuation">{</span>\n    <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.footer</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="负margin-top方法"><a href="#%E8%B4%9Fmargin-top%E6%96%B9%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>负margin-top方法</h4>\n<p>核心是把main的最小高度设置为100%-header的高度，并预留<code class="gatsby-code-text">padding-bottom</code>的空间，然后通过负margin-top把footer<code class="gatsby-code-text">拉上来</code>,</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">*</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">html.body</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.container</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.header</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.main</span> <span class="token punctuation">{</span>\n    <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.footer</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">margin-top</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>总结一下上面的三种办法，都需要把footer,设定为某个固定的高度，如果说想要在footer不固定高度的情况下，纯CSS实现这个效果，在CSS3之前几乎是不可能的。CSS3提出的flex box弹性盒模型，可以解决这个问题，核心就在于让main的grow为1；</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">*</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.container</span> <span class="token punctuation">{</span>\n    <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.main</span> <span class="token punctuation">{</span>\n    <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{title:"How To Keep Your Footer At The Bottom Of The Page With CSS",img:"./img/2015-06-07.jpeg",author:["sylvenas"],excerpt:null,catalogue:null},fields:{date:"June 06, 2015",path:"blog/css/2015-06-07-keep-footer-bottom.md",slug:"/blog/2015/06/07/keep-footer-bottom.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}}]}},pathContext:{slug:"/blog/2015/06/07/keep-footer-bottom.html"}}}});