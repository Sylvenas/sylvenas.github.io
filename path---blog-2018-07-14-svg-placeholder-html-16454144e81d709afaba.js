webpackJsonp([62172665694623],{696:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="svg-placeholder-loader"><a href="#svg-placeholder-loader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>svg-placeholder-loader</h3>\n<p>配合前面写的<code class="gatsby-code-text">webp-loader</code>,接下来接收到webp-loader传递过来的数据，继续把文件处理成一个svg格式的placeholder。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"loader-utils"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> validateOptions <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"schema-utils"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> sqip <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"sqip"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> schema <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./options.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// https://codepen.io/tigt/post/optimizing-svgs-in-data-uris</span>\n<span class="token keyword">function</span> <span class="token function">encodeSvgDataUri</span><span class="token punctuation">(</span>svg<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> uriPayload <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>svg<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/%0A/g</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/%20/g</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/%3D/g</span><span class="token punctuation">,</span> <span class="token string">"="</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/%3A/g</span><span class="token punctuation">,</span> <span class="token string">":"</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/%2F/g</span><span class="token punctuation">,</span> <span class="token string">"/"</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/%22/g</span><span class="token punctuation">,</span> <span class="token string">"\'"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token string">"data:image/svg+xml,"</span> <span class="token operator">+</span> uriPayload<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 接收webp-loader传递过来的buffer</span>\n    <span class="token keyword">var</span> contentBuffer <span class="token operator">=</span> source<span class="token punctuation">.</span>buffer<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cacheable <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cacheable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 获取options并校验</span>\n    <span class="token keyword">var</span> options <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token function">validateOptions</span><span class="token punctuation">(</span>schema<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token string">"SQIP Loader"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>contentBuffer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> content <span class="token operator">=</span> contentBuffer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">"utf8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> filePath <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resourcePath<span class="token punctuation">;</span>\n        <span class="token keyword">var</span> contentIsUrlExport <span class="token operator">=</span> <span class="token regex">/^module.exports = "data:(.*)base64,(.*)/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//var contentIsFileExport = /^module.exports = (.*)/.test(content);</span>\n        <span class="token keyword">var</span> src <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 对于base64格式的内联图片，不做任何处理，直接返回</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>contentIsUrlExport<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            src <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/^module.exports = (.*)/</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>skipPreviewIfBase64<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token string">\'module.exports = { "originSrc": \'</span> <span class="token operator">+</span> src <span class="token operator">+</span> <span class="token string">\', "preview": "" };\'</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// svg格式的图片也不做处理，直接返回(svg不需要placeholder)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>filePath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'.\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">\'svg\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n            <span class="token keyword">return</span> <span class="token string">\'module.exports = { "originSrc":__webpack_public_path__ +"\'</span> <span class="token operator">+</span> source<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">\'", "preview": "" };\'</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 处理loader options</span>\n    <span class="token keyword">var</span> numberOfPrimitives <span class="token operator">=</span> <span class="token string">"numberOfPrimitives"</span> <span class="token keyword">in</span> options <span class="token operator">?</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>numberOfPrimitives<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> mode <span class="token operator">=</span> <span class="token string">"mode"</span> <span class="token keyword">in</span> options <span class="token operator">?</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>mode<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> blur <span class="token operator">=</span> <span class="token string">"blur"</span> <span class="token keyword">in</span> options <span class="token operator">?</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>blur<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">;</span>\n    <span class="token comment">// 生成svg格式的占位符图片</span>\n    <span class="token keyword">var</span> sqipResult <span class="token operator">=</span> <span class="token function">sqip</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        filename<span class="token punctuation">:</span> filePath<span class="token punctuation">,</span>\n        numberOfPrimitives<span class="token punctuation">:</span> numberOfPrimitives<span class="token punctuation">,</span>\n        mode<span class="token punctuation">:</span> mode<span class="token punctuation">,</span>\n        blur<span class="token punctuation">:</span> blur\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> encodedSvgDataUri <span class="token operator">=</span> <span class="token function">encodeSvgDataUri</span><span class="token punctuation">(</span>sqipResult<span class="token punctuation">.</span>final_svg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> dimensions <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>sqipResult<span class="token punctuation">.</span>img_dimensions<span class="token punctuation">)</span>\n    <span class="token comment">// 拼接需要返回的module</span>\n    <span class="token keyword">return</span> <span class="token string">\'module.exports = {\'</span> <span class="token operator">+</span>\n        <span class="token string">\'"originSrc": __webpack_public_path__ + "\'</span> <span class="token operator">+</span> source<span class="token punctuation">.</span>url <span class="token operator">+</span>\n        <span class="token string">\'" , "webpSrc": __webpack_public_path__ + "\'</span> <span class="token operator">+</span> source<span class="token punctuation">.</span>webpUrl <span class="token operator">+</span>\n        <span class="token string">\'" , "preview": "\'</span> <span class="token operator">+</span> encodedSvgDataUri <span class="token operator">+</span>\n        <span class="token string">\'", "dimensions": \'</span> <span class="token operator">+</span> dimensions <span class="token operator">+</span>\n        <span class="token string">\' };\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="项目实战"><a href="#%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>项目实战</h3>\n<p>一张原图片在经过<code class="gatsby-code-text">webp-loader</code>，<code class="gatsby-code-text">svg-placeholder-loader</code>的处理之后，最终导出的图片数据为：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> girl <span class="token keyword">from</span> <span class="token string">\'./girl.jpeg\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>girl<span class="token punctuation">)</span>\n\n<span class="token comment">// {</span>\n<span class="token comment">//     dimensions: {height: 1002, width: 668, type: "jpg"},</span>\n<span class="token comment">//     originSrc: "/static/media/girl.jpeg",</span>\n<span class="token comment">//     preview: "data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'........\'",</span>\n<span class="token comment">//     webpSrc: "/static/media/girl.jpeg.webp",</span>\n<span class="token comment">// }</span></code></pre>\n      </div>\n<p>配合实际的React项目(绝不仅限于React项目，同样适用于Vue,Jquery的项目)来用就是：\nwebpack.config.js 配置：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token regex">/\\.bmp$/</span><span class="token punctuation">,</span> <span class="token regex">/\\.gif$/</span><span class="token punctuation">,</span> <span class="token regex">/\\.jpe?g$/</span><span class="token punctuation">,</span> <span class="token regex">/\\.png$/</span><span class="token punctuation">,</span> <span class="token regex">/\\.svg$/</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'./picture-loader/svg-placeholder-loader.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            numberOfPrimitives<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'./picture-loader/webp-loader.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            limit<span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n            name<span class="token punctuation">:</span> <span class="token string">\'static/media/[name].[ext]\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> girl <span class="token keyword">from</span> <span class="token string">\'./girl.jpeg\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Picture</span> <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>girl<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>my girl<span class="token punctuation">\'</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>my-girl<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span>\n<span class="token keyword">import</span> <span class="token string">\'./picture.css\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Picture</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>svg <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function-variable function">handleImgLoad</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>svg<span class="token punctuation">.</span>current<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span> img<span class="token punctuation">,</span> alt<span class="token punctuation">,</span> className <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>picture<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>img<span class="token punctuation">.</span>preview<span class="token punctuation">}</span></span>\n                    <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alt<span class="token punctuation">}</span></span>\n                    <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'svg \'</span> <span class="token operator">+</span> className<span class="token punctuation">}</span></span>\n                    <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>svg<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcSet</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>img<span class="token punctuation">.</span>webpSrc<span class="token punctuation">}</span></span>\n                        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image/webp<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">onLoad</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleImgLoad<span class="token punctuation">}</span></span>\n                        <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>img<span class="token punctuation">.</span>originSrc<span class="token punctuation">}</span></span>\n                        <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alt<span class="token punctuation">}</span></span>\n                        <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'img \'</span> <span class="token operator">+</span> className<span class="token punctuation">}</span></span>\n                    <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nPicture<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    img<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        preview<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n        originSrc<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n        webpSrc<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    alt<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n    className<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Picture<span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="summary"><a href="#summary" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Summary</h3>\n<p>经过上面的学习，webpack loader从开发到实战都应该有了一个清晰的认识,并且有了在项目中实战的例子</p>\n<p>不过不得不说的是，使用loader一方面会方便我们处理图片，另一方面也会降低项目启动和打包的速度(尽管充分利用了异步和缓存)，我还是更倾向于配合gulp的watch功能，监听图片的新增实现图片的转换，会大大的提高webpack的处理速度。</p>',frontmatter:{title:"webpack svg placeholder loader",img:"./img/2015-03-25.jpg",author:["Sylvenas"],excerpt:"使用webpack loader生成svg placeholder，并在项目的实践",catalogue:["svg-placeholder-loader","项目实战","Summary"]},fields:{date:"July 13, 2018",path:"blog/bundlers/2018-07-14-svg-placeholder.md",slug:"/blog/2018/07/14/svg-placeholder.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{
slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}}]}},pathContext:{slug:"/blog/2018/07/14/svg-placeholder.html"}}}});