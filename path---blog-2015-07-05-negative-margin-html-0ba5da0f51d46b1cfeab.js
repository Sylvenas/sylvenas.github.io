webpackJsonp([0xa9ea3b750594],{443:function(a,n){a.exports={data:{markdownRemark:{html:'<p>作为前端开发人员，我们都在使用margin,不过在使用负margin的时候，有时候会变得非常的头疼，有些人认为负margin是常规武器，有些人确认为负margin是魔鬼的代名词。</p>\n<p>常见的negative margin如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.content</span><span class="token punctuation">{</span>\n    <span class="token property">margin-left</span><span class="token punctuation">:</span>-100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>关于negative margin必须有一下几个要点需要澄清：</p>\n<ul>\n<li><strong>negative margin是一个完全合法的CSS。</strong>W3C里有说明”<em>Negative values for margin properties are allowed…</em>“,<a href="http://www.w3.org/TR/CSS2/box.html#margin-properties">查看W3C标准</a></li>\n<li><strong>negative margin绝不是黑科技。</strong>有很多不理解负margin作用的人，会认为negative margin 表现的莫名其妙，完全是个黑科技。</li>\n<li><strong>不影响文档流。</strong>negative margin被应用到元素上的时候，不会破坏正常文档流(当然，元素本身是float元素的除外)。所以被应用negative margin的元素后面的元素也会正常的进行布局</li>\n<li><strong>negative margin在被应用到正常文档流和float元素上的时候，表现大不一样。</strong></li>\n</ul>\n<h3 id="negative-margin的工作原理"><a href="#negative-margin%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>negative margin的工作原理</h3>\n<h4 id="negative-margin-在普通元素上的表现"><a href="#negative-margin-%E5%9C%A8%E6%99%AE%E9%80%9A%E5%85%83%E7%B4%A0%E4%B8%8A%E7%9A%84%E8%A1%A8%E7%8E%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>negative margin 在普通元素上的表现</h4>\n<p><img src="../images/negative-margin.gif" alt="普通元素负边距">\n所谓的普通元素，也就是没有被使用<code class="gatsby-code-text">float</code>属性的元素，上面的图片说明了普通元素是如何被negative margin影响的。</p>\n<ul>\n<li>\n<p>当一个普通元素应用了 <strong>top/left</strong> 方向的negative margin的时候，这个时候该元素会被朝着 <strong>top/left</strong>方向推动，举例如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token comment">/* 会把mydiv1元素向上移动 10px */</span>\n<span class="token selector">#mydiv1</span><span class="token punctuation">{</span>\n    <span class="token property">margin-top</span> <span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>但是当一个元素应用了 <strong>bottom/right</strong>方向的negative margin的时候，这个时候该元素却不会想你想象的一样被向 <strong>down/right</strong>方向推动。实际上，它会把相邻的下一个元素<code class="gatsby-code-text">拉向</code>该元素，并且覆盖该元素，而自己本身不会有任何移动。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token comment">/* 紧邻 mydiv1 的元素会向上移动 10px,但是 mydiv1 本身却没有任何移动 */</span>\n<span class="token selector">#mydiv1</span><span class="token punctuation">{</span>\n    <span class="token property">margin-bottom</span> <span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>如果元素的宽度是auto,那么给该元素添加<code class="gatsby-code-text">left/right</code>方向的negative margin，则会增加元素的宽度。</li>\n</ul>\n<h4 id="negative-margin-在浮动元素上的表现"><a href="#negative-margin-%E5%9C%A8%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%E4%B8%8A%E7%9A%84%E8%A1%A8%E7%8E%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>negative margin 在浮动元素上的表现</h4>\n<p>浮动框的上边缘会去贴当前行盒的上边缘或是之前浮动框的下边缘，左浮动框的左边缘会去贴包含框的左边缘，或者他之前的左浮动框的右边缘。如果当前行剩余的空间容不下一个浮动框，他就会换行。（右浮动同理）</p>\n<p>一句话描述就是，只要空间够且无阻碍，浮动框边缘一定是要挨着包含框content边缘的。</p>\n<p>考虑如下的HTML:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>mydiv1<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>First<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>mydiv2<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>Second<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<ul>\n<li>\n<p>第一个元素应用<code class="gatsby-code-text">float:left</code>,如果应用如下的样式：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token comment">/* A negative margin is applied opposite the float */</span>\n<span class="token selector">#mydiv1</span> <span class="token punctuation">{</span><span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span>-100px<span class="token punctuation">;</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<p>实际上这个时候<code class="gatsby-code-text">mydiv1</code>的任务会被<code class="gatsby-code-text">mydiv2</code>的内容完全覆盖住。</p>\n</li>\n<li>两个元素都应用<code class="gatsby-code-text">float:left</code>和<code class="gatsby-code-text">margin-right:-20px</code>，这个时候<code class="gatsby-code-text">mydiv1</code>的宽度会比实际宽度小<code class="gatsby-code-text">20px</code>,但是这个时候有趣的内容是<code class="gatsby-code-text">mydiv1</code>的内容却不会收到宽度减少的影响。</li>\n<li>如果negative margin的值等于元素本身的宽度，则这个元素将会被完全覆盖住</li>\n</ul>\n<h4 id="对浮动元素的影响"><a href="#%E5%AF%B9%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%E7%9A%84%E5%BD%B1%E5%93%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对浮动元素的影响</h4>\n<p>绝对定位的框完全脱离普通流，所以他对其他任何框都不会产生影响，也就意味着，他的margin-left和margin-top会让他左右和上下移动，而margin-right和margin-bottom则不会产生任何影响。</p>\n<h3 id="negative-margin的实际应用场景"><a href="#negative-margin%E7%9A%84%E5%AE%9E%E9%99%85%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>negative margin的实际应用场景</h3>\n<h4 id="去除列表的右边框"><a href="#%E5%8E%BB%E9%99%A4%E5%88%97%E8%A1%A8%E7%9A%84%E5%8F%B3%E8%BE%B9%E6%A1%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>去除列表的右边框</h4>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/negative-margin-yanxuan-3910a792c1dd2cc44877caf2c2330d7d-63bb8.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 65.35714285714286%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACTElEQVQ4y0VTO28TQRDOj4QqBRJdWqpUVCkpkegQvwCUAskJCAoLUwRC4sTCPj/wM+d72b7H3tP2x3x7d/ZKo91vdh7fzM6e5HmORAVQUYA0y5CmqUiCyF/pc0bJcsRyH4tdURSCUy2h7yFJksonxXa7xQkDqihCGIpDHCOSM7Hvb0QnexAgrO5dx4W59LDe0FYhEJtIKe1DYTIdkMpvrXtcNe9wc2+AusHAwHXjM75/vcJiPoNSMd5/uMTbdx/x6bKJWBg5sxmGP1uY//4FZzwuGWZVmcZwgo4xhmk5mqnnuRj0ezCfFpotS3x47OJH6xbD0VQSKPibNSadDuzJBBvPOzJk0FwciiLX/WNfEkmS54XgrMQivN/vd6I/6jIJkoh/LOdDD7kC34dn2wiCUGMaryWr57r6rG2kn465FMaBxmQUrDdYiQ0flEsH3O/3ukw+Bp2JaUwchSHqpGwNdbTloj6W0qnLxf4QkOUqVb4SMfc0iXUrMt4LZjl5deZOXNvXstvtykfJEiWx91pJhhyJKFjpRAxMrKrx4F5LVLGlD7F+FJbX7w9xcfEGz56/wNnZK90rYzhF608XrTsDiyX7GMv8beC6HhzHOQSfz+dot9swTbNkyICj0T+cnr7E+flrNBpfkEjWx78DXDdv8WBMYdrlj1guLUxkRBaLRTk28pBGr4derwvbto4lkyrHoV40zkW/lTHZFjKnVUlaX7WlxrV/OVZFGZAseWnKSHDn4nezZIxsEZandfLi5tOTZlYntiwLtgjbxDj/AXcO2bSYkh92AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="网易严选官网"\n        title=""\n        src="/static/negative-margin-yanxuan-3910a792c1dd2cc44877caf2c2330d7d-acf85.png"\n        srcset="/static/negative-margin-yanxuan-3910a792c1dd2cc44877caf2c2330d7d-c1418.png 210w,\n/static/negative-margin-yanxuan-3910a792c1dd2cc44877caf2c2330d7d-5d5d8.png 420w,\n/static/negative-margin-yanxuan-3910a792c1dd2cc44877caf2c2330d7d-acf85.png 840w,\n/static/negative-margin-yanxuan-3910a792c1dd2cc44877caf2c2330d7d-de0cd.png 1260w,\n/static/negative-margin-yanxuan-3910a792c1dd2cc44877caf2c2330d7d-bd6c2.png 1680w,\n/static/negative-margin-yanxuan-3910a792c1dd2cc44877caf2c2330d7d-63bb8.png 2240w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n上面的图片是典型的电商网站的商品展示页面，一般的HTML结构如下</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我是一个列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>这个时候就有一个需求就是让每一行的最后一个卡片的<code class="gatsby-code-text">margin-right</code>重置为0,要不然ul的宽度不够，则第四个元素会被<code class="gatsby-code-text">挤下去</code></p>\n<p>一般这个时候我们可以使用CSS的<code class="gatsby-code-text">li:nth-child(4n){ margin-right:0 }</code>选择器，或者使用flex box方案解决，但是这两种都有兼容性的问题。</p>\n<p>这个时候negative margin 可以隐式的增加元素宽度的特性就有发挥的空间了,这个时候设置父元素的<code class="gatsby-code-text">margin-right</code>的<code class="gatsby-code-text">负的li margin-right的值</code></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.list</span><span class="token punctuation">{</span>\n    <span class="token property">margin-right</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="resources"><a href="#resources" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Resources</h3>\n<p>More info on negative margins.</p>\n<ul>\n<li>Search This, <a href="http://www.search-this.com/2007/08/01/the-positive-side-of-negative-margins/">The Positive Side of Negative Margins</a></li>\n<li>Severn Solutions, <a href="http://www.severnsolutions.co.uk/twblog/archive/2004/07/01/cssnegativemarginsalgebra">CSS Negative Margins Algebra</a></li>\n<li>A List Apart, <a href="http://www.alistapart.com/articles/negativemargins/">Creating Liquid Layouts with Negative Margins</a></li>\n<li>W3.org, <a href="http://www.w3.org/TR/1998/REC-CSS2-19980512/box.html#margin-properties">Margin Properties</a></li>\n<li>Branbell, <a href="http://www.brainbell.com/tutorials/HTML_and_CSS/Using_Negative_Margins.htm">Using Negative Margins</a></li>\n<li>devarticles, <a href="http://www.devarticles.com/c/a/Web-Style-Sheets/Swapping-Column-Positions-in-Web-Page-Layouts-with-Negative-Margins/">Swapping Column Positions in Web Page Layouts with Negative Margins</a></li>\n<li>Simplebits, <a href="http://www.simplebits.com/notebook/2005/05/23/negative.html">Exceptionally Negative</a></li>\n<li>brunildo, <a href="http://www.brunildo.org/test/NegMOutH.html">Horizontal Negative Margins</a></li>\n<li>Ben Nadel, <a href="http://www.bennadel.com/blog/1174-Negative-CSS-Margins-Are-Not-Cool.htm">Negative CSS Margins Are Not Cool</a></li>\n</ul>',frontmatter:{title:"negative margin",img:"./img/2015-07-05.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"July 04, 2015",path:"blog/css/2015-07-05-negative-margin.md",slug:"/blog/2015/07/05/negative-margin.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}},{node:{frontmatter:{title:"移动端开发基础知识"},fields:{slug:"/blog/2019/05/24/mobile.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}}]}},pathContext:{slug:"/blog/2015/07/05/negative-margin.html"}}}});