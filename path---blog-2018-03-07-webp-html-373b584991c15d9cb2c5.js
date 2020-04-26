webpackJsonp([0xc0ed678569d4],{513:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="what-is-webp"><a href="#what-is-webp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>what is webp</h3>\n<p>webp 是由 Google 收购 On2 Technologies 后发展出来的格式，以BSD授权条款发布。目前已经在不同厂商之间进行了尝试，如Google、Facebook、ebay、百度、腾讯、淘宝等。</p>\n<p>webp支持有损压缩和无损压缩，可以使用于大多数的图片、半透明、透明都可以；并且有损压缩的程度是可以调节的，用户可以在文件大小和图像质量之间作出权衡，根据研究，webp通常可以比jpg和jpeg图像在不损失图像质量的情况下，体积缩小30%。</p>\n<p>目前只有Chrome、Opera和最新版的Edge浏览器支持webp,不过Firefox也在开发计划中自持webp，不过现在已经支持webp的浏览器已经占到首场份额的75%，这已经让我们有足够的动力，让我们去使用webp了。</p>\n<h3 id="how-can-i-detect-browser-support-for-webp"><a href="#how-can-i-detect-browser-support-for-webp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How can I detect browser support for WebP</h3>\n<p>在<a href="https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp">google开发者平台</a>提供了关于检测浏览器是否支持webp的方法：</p>\n<h4 id="request-header"><a href="#request-header" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Request Header</h4>\n<p>浏览器在支持 webp 图片格式的情况下，会在请求的 http header accept 中携带 webp/image 的字段，后端接收到请求之后可以按照该形式来判断是否返回 webp 图片内容。</p>\n<h4 id="前端代码检测是否支持webp格式的图片"><a href="#%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81%E6%A3%80%E6%B5%8B%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81webp%E6%A0%BC%E5%BC%8F%E7%9A%84%E5%9B%BE%E7%89%87" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>前端代码检测是否支持webp格式的图片</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// check_webp_feature:</span>\n<span class="token comment">// \'feature\' can be one of \'lossy\', \'lossless\', \'alpha\' or \'animation\'.</span>\n<span class="token comment">// \'callback(feature, result)\' will be passed back the detection result (in an asynchronous way!)</span>\n<span class="token keyword">function</span> <span class="token function">check_webp_feature</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> kTestImages <span class="token operator">=</span> <span class="token punctuation">{</span>\n        lossy<span class="token punctuation">:</span> <span class="token string">"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"</span><span class="token punctuation">,</span>\n        lossless<span class="token punctuation">:</span> <span class="token string">"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="</span><span class="token punctuation">,</span>\n        alpha<span class="token punctuation">:</span> <span class="token string">"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="</span><span class="token punctuation">,</span>\n        animation<span class="token punctuation">:</span> <span class="token string">"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">(</span>img<span class="token punctuation">.</span>width <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>img<span class="token punctuation">.</span>height <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">callback</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">callback</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"data:image/webp;base64,"</span> <span class="token operator">+</span> kTestImages<span class="token punctuation">[</span>feature<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>当判断当前浏览器支持webp的时候，可以在localStorage中存储一个状态，方便后面JS使用；另外一方面可以给body元素添加一个<code class="gatsby-code-text">webpa</code>的class,方便以后的css选择器使用。</p>\n<h3 id="using-webp-in-html"><a href="#using-webp-in-html" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Webp In HTML</h3>\n<p>使用HTML5的新元素picture，可以使用source,使浏览器支持webp的时候，优先选择webp的图片加载webp图片。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span>\n   <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image.webp<span class="token punctuation">"</span></span>\n   <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image/webp<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>\n   <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image.jpg<span class="token punctuation">"</span></span>\n   <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image/jpeg<span class="token punctuation">"</span></span>\n   <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h3 id="using-webp-in-css"><a href="#using-webp-in-css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Webp In CSS</h3>\n<p>上面提到的我们可以在判断浏览器支持webp之后，给body元素添加一个<code class="gatsby-code-text">webpa</code>class，这个时候我们就可以配合css与处理器less或者sass和css选择器的权重使用了</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-less"><code class="gatsby-code-less"><span class="token comment">// webp兼容性方案</span>\n<span class="token selector">.webpbg(<span class="token variable">@url</span>)</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(@url)</span><span class="token punctuation">;</span>\n    <span class="token selector">.webpa &amp;</span> <span class="token punctuation">{</span>\n        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'@{url}.webp\')</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.test</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token mixin-usage function">.webpbg</span><span class="token punctuation">(</span><span class="token string">\'./bg.jpg\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>编译之后的css文件为：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.test</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'./bg.jpg\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.webpa .test</span> <span class="token punctuation">{</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'./bg.jpg.webp\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="using-webp-in-lazy-load"><a href="#using-webp-in-lazy-load" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Webp In Lazy Load</h3>\n<p>图片大量使用的时候我们会使用懒加载进行图片的延迟加载。这时就可以修改懒加载插件，在插件里动态兼容webp图片了:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">getWebpSrc</span><span class="token punctuation">(</span>imgsrc<span class="token punctuation">,</span>webpimgsrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> needwebp <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        src <span class="token operator">=</span> <span class="token string">\'\'</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>localStorage <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> localStorage <span class="token operator">===</span> <span class="token string">\'object\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      needwebp <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'webpsupport\'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">\'true\'</span>\n    <span class="token punctuation">}</span>\n    src <span class="token operator">=</span> needwebp <span class="token operator">?</span> webpimgsrc <span class="token punctuation">:</span> imgsrc\n    <span class="token keyword">return</span> src\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> imgSmall <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.img-small\'</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> loadImage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    img<span class="token punctuation">.</span>src <span class="token operator">=</span> imgSmall<span class="token punctuation">.</span>src\n    img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'load\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      imgSmall<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'loaded\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> imgLarge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    imgLarge<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token function">getWebpSrc</span><span class="token punctuation">(</span>imgSmall<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>large<span class="token punctuation">,</span>imgSmall<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>largewebp<span class="token punctuation">)</span>\n  \n    imgLarge<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'load\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      imgLarge<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'loaded\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n    imgSmall<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>imgLarge<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h3 id="generate-webp"><a href="#generate-webp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generate Webp</h3>\n<p>上面介绍了webp的基本的使用的方法，那么如何生产webp的图片，主要有一下两种思路，第一是前端生成静态的webp的图片，托管在服务器上，第二种是服务端动态生成webp的图片。</p>\n<h4 id="生成静态webp图片"><a href="#%E7%94%9F%E6%88%90%E9%9D%99%E6%80%81webp%E5%9B%BE%E7%89%87" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>生成静态webp图片</h4>\n<p>使用<a href="https://github.com/imagemin/imagemin"><code class="gatsby-code-text">imagemin</code></a>可以生成webp的图片，简单的使用方法如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> imagemin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"imagemin"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">// The imagemin module.</span>\n    webp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"imagemin-webp"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">// imagemin\'s WebP plugin.</span>\n    outputFolder <span class="token operator">=</span> <span class="token string">"./img"</span><span class="token punctuation">,</span>            <span class="token comment">// Output folder</span>\n    PNGImages <span class="token operator">=</span> <span class="token string">"./img/*.png"</span><span class="token punctuation">,</span>         <span class="token comment">// PNG images</span>\n    JPEGImages <span class="token operator">=</span> <span class="token string">"./img/*.jpg"</span><span class="token punctuation">;</span>        <span class="token comment">// JPEG images</span>\n\n<span class="token function">imagemin</span><span class="token punctuation">(</span><span class="token punctuation">[</span>PNGImages<span class="token punctuation">]</span><span class="token punctuation">,</span> outputFolder<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token function">webp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        lossless<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token operator">/</span><span class="token operator">/</span> Losslessly encode images\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">imagemin</span><span class="token punctuation">(</span><span class="token punctuation">[</span>JPEGImages<span class="token punctuation">]</span><span class="token punctuation">,</span> outputFolder<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token function">webp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        quality<span class="token punctuation">:</span> <span class="token number">65</span> <span class="token operator">/</span><span class="token operator">/</span> Quality setting <span class="token keyword">from</span> <span class="token number">0</span> to <span class="token number">100</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>另外一种是在前端资源打包的时候，利用webpack的loader，来生成webp，不过这样会严重拖慢打包的速度，故不如直接用node.js生成图片</p>\n<h4 id="服务端动态生成webp"><a href="#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%8A%A8%E6%80%81%E7%94%9F%E6%88%90webp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>服务端动态生成webp</h4>\n<p><code class="gatsby-code-text">nginx+lua+graphicsmagick</code>这套方案其实做的事情就是nginx对域名进行拦截，lua脚本进行域名后缀规则的匹配，比如说300x300.png/.webp类似的后缀，匹配完成后再在lua里调用graphicsmagick的命令，进行一些图片转换、裁剪等工作。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-lua"><code class="gatsby-code-lua"><span class="token keyword">if</span> table<span class="token punctuation">.</span><span class="token function">isLegal</span><span class="token punctuation">(</span>size_list<span class="token punctuation">)</span> <span class="token keyword">and</span> extend <span class="token operator">==</span> <span class="token string">"webp"</span> <span class="token keyword">then</span>\n        command <span class="token operator">=</span> <span class="token string">[[/usr/local/GraphicsMagick-1.3.25/bin/gm convert -quality 75 -density 72 +profile "*"  ]]</span> <span class="token operator">..</span> ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>image_root <span class="token operator">..</span>  originalUri  <span class="token operator">..</span> <span class="token string">" -geometry "</span> <span class="token operator">..</span> area <span class="token operator">..</span> <span class="token string">" "</span> <span class="token operator">..</span> ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>file<span class="token punctuation">;</span>\n        os<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">end</span></code></pre>\n      </div>',frontmatter:{title:"web image 加载优化方案--webp",img:"./img/2018-03-07.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"March 06, 2018",path:"blog/performance/2018-03-07-webp.md",slug:"/blog/2018/03/07/webp.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}}]}},pathContext:{slug:"/blog/2018/03/07/webp.html"}}}});