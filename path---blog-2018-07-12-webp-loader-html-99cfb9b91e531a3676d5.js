webpackJsonp([0x5f150de97bb3],{514:function(n,s){n.exports={data:{markdownRemark:{html:'<p>上一节介绍了webpack loader的基本概念以及处理流程，并且简单的实现了使用<code class="gatsby-code-text">name-loader</code>来动态的加载<code class="gatsby-code-text">.tpl</code>文件，正好前面总结了在项目中使用webp优化网站的方案，之前的思路是用一段JavaScript代码生成webp格式的图片，现在换个思路，可以在<code class="gatsby-code-text">import some-img from some-img.jpg</code>的时候，动态的生成webp的图片，而这个过程正好可以使用webpack loader来实现。</p>\n<h3 id="webp-loader的实现"><a href="#webp-loader%E7%9A%84%E5%AE%9E%E7%8E%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webp-loader的实现</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> imagemin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'imagemin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> imageminWebp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'imagemin-webp\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'loader-utils\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>content<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cacheable <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cacheable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>emitFile<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"emitFile is required from module system"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> options <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 写入原文件</span>\n    <span class="token keyword">var</span> url <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">interpolateName</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">"[hash].[ext]"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        content<span class="token punctuation">:</span> content<span class="token punctuation">,</span>\n        regExp<span class="token punctuation">:</span> options<span class="token punctuation">.</span>regExp\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emitFile</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 如果源文件比较小，则没必要转换为webp格式的图片，直接使用callback传递给下一个loader处理</span>\n    <span class="token keyword">var</span> limit<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        limit <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>limit<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>limit <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> content<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> buffer<span class="token punctuation">:</span> content<span class="token punctuation">,</span> url <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 根据options内容生成webpOptions</span>\n    <span class="token keyword">var</span> webpOptions <span class="token operator">=</span> <span class="token punctuation">{</span>\n        preset<span class="token punctuation">:</span> options<span class="token punctuation">.</span>preset <span class="token operator">||</span> <span class="token string">\'default\'</span><span class="token punctuation">,</span>\n        quality<span class="token punctuation">:</span> options<span class="token punctuation">.</span>quality <span class="token operator">||</span> <span class="token number">75</span><span class="token punctuation">,</span>\n        alphaQuality<span class="token punctuation">:</span> options<span class="token punctuation">.</span>alphaQuality <span class="token operator">||</span> <span class="token number">100</span><span class="token punctuation">,</span>\n        method<span class="token punctuation">:</span> options<span class="token punctuation">.</span>method <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        sns<span class="token punctuation">:</span> options<span class="token punctuation">.</span>sns <span class="token operator">||</span> <span class="token number">80</span><span class="token punctuation">,</span>\n        autoFilter<span class="token punctuation">:</span> options<span class="token punctuation">.</span>autoFilter <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        sharpness<span class="token punctuation">:</span> options<span class="token punctuation">.</span>sharpness <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        lossless<span class="token punctuation">:</span> options<span class="token punctuation">.</span>lossless <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        webpOptions<span class="token punctuation">.</span>size <span class="token operator">=</span> options<span class="token punctuation">.</span>size<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>filter<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        webpOptions<span class="token punctuation">.</span>filter <span class="token operator">=</span> options<span class="token punctuation">.</span>filter<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 生成的webp图片的名称为原图片的名称后面追加.webp,</span>\n    <span class="token comment">// 例如：xxx.jpg.webp, 方便在css预处理器中的使用</span>\n    <span class="token keyword">var</span> webpUrl <span class="token operator">=</span> url <span class="token operator">+</span> <span class="token string">\'.webp\'</span><span class="token punctuation">;</span>\n    <span class="token comment">// 原图片异步转换为webp的图片</span>\n    imagemin<span class="token punctuation">.</span><span class="token function">buffer</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span> plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token function">imageminWebp</span><span class="token punctuation">(</span>webpOptions<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>file <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// 写入webp图片并调用callback</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emitFile</span><span class="token punctuation">(</span>webpUrl<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 传递给svg-placrholder-loader，继续处理成placeholder</span>\n        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> buffer<span class="token punctuation">:</span> content<span class="token punctuation">,</span> url<span class="token punctuation">,</span> webpUrl <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">/* 如果要单独使用的话，可以使用该注释部分的代码\n        const exportJson = \'module.exports = { \' +\n            \'"originSrc": __webpack_public_path__ + "\' + url +\n            \'" , "webpSrc": __webpack_public_path__ + "\' + webpUrl +\n            \'"\' +\n            \' };\';\n        callback(null, exportJson);   \n        */</span>  \n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 要求webpack传入原始的buffer，方便处理图片</span>\nmodule<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="注意事项"><a href="#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>注意事项</h3>\n<p>目前缩写的<code class="gatsby-code-text">webp-loader</code>还不能独立的使用，因为并没有导出合法的JavaScript模块，后面继续讲解<code class="gatsby-code-text">svg-placeholder</code>处理方案。</p>',frontmatter:{title:"webpack webp loader",img:"./img/2015-03-25.jpg",author:["Sylvenas"],excerpt:"使用webpack loader动态的生成webp图片",catalogue:["webp-loader的实现","注意事项"]},fields:{date:"July 11, 2018",path:"blog/bundlers/2018-07-12-webp-loader.md",slug:"/blog/2018/07/12/webp-loader.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/02/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}},{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}}]}},pathContext:{slug:"/blog/2018/07/12/webp-loader.html"}}}});