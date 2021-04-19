webpackJsonp([0xe9f2fd4a4fa1],{556:function(a,n){a.exports={data:{markdownRemark:{html:'<p>浏览器里并不是每一个资源加载都很重要。 </p>\n<p>为了达到重要的资源先加载，浏览器有试探法，尝试对资源进行权重分配，例如CSS会在脚本和图片之前先加载。 因为浏览器在试探权重分配，所以并不总是分配的很正确，通常因为没有足够的信息，浏览器可能做出错误的决定。</p>\n<p>下面介绍如何在现代浏览器中以代码的形式来调整资源加载的优先级。</p>\n<h3 id="默认优先级"><a href="#%E9%BB%98%E8%AE%A4%E4%BC%98%E5%85%88%E7%BA%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>默认优先级</h3>\n<p>如前所述，浏览器根据它们的重要程度为不同类型的资源分配不同的相对优先级。 像页面的<code class="gatsby-code-text">&lt;head&gt;</code>中的<code class="gatsby-code-text">&lt;script&gt;</code>标记将以”高优先级(High priority)“(CSS是”最高优先级(Highest priority)“)加载到Chrome中，但如果它具有<code class="gatsby-code-text">async</code>属性，则该优先级将更改为”低(Low priority)“（意味着它可以加载并异步运行）。在查看站点的加载性能时，优先级变得很重要。 除了测量和分析关键渲染路径的常用技术之外，了解Chrome对每种资源的优先级分配也很有用。您可以在Chrome开发者工具的”网络”面板中找到它。 这是它的样子：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/network-priority-3ab504487833ef302dc01c0e95f4c45b-82ec2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 33.58885017421603%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABVklEQVQozz1R2bKQMBTj/39MP8AHde5FoCzd91IWZ+JpHX3I9JDkkAaGkhOCdxD8wLFvkIJDEPZt7fNOnFaywzuLGBzB045H5Cs8GxGtQ02xv2f49rHixywxcY9fh+/nIiPNFqtK9OzAVMT3iXee+wvjprGZjHFkEKvA123CF0aXchXDx7yjYd7JpDxcvuHLAx1Knw8dIX2BdBmx/u4a44b0E/M4wRwCW4iYKDScL4bPcQRjDM45lJzxPjee+8JZCq6rdj7GSNV30p7Oe6p21Qoxj8iK4yE+p7+7w8/PBfPKIU2ATxUhX/00PsO2W8YTyiXyiK413z/vsTBYuqGjWRr6F+nCMM0LpFIolHxTUku77xtaGyRKde3jxwQpFd737ZrSGpn8YplQnUGlRoZ8bXfYqIoQgpYTKtU4z7NDUYgnU0MIAdba/3qbW5imymVfcBJvyde0P7UoEcF1kFZkAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="network priority"\n        title=""\n        src="/static/network-priority-3ab504487833ef302dc01c0e95f4c45b-acf85.png"\n        srcset="/static/network-priority-3ab504487833ef302dc01c0e95f4c45b-c1418.png 210w,\n/static/network-priority-3ab504487833ef302dc01c0e95f4c45b-5d5d8.png 420w,\n/static/network-priority-3ab504487833ef302dc01c0e95f4c45b-acf85.png 840w,\n/static/network-priority-3ab504487833ef302dc01c0e95f4c45b-de0cd.png 1260w,\n/static/network-priority-3ab504487833ef302dc01c0e95f4c45b-bd6c2.png 1680w,\n/static/network-priority-3ab504487833ef302dc01c0e95f4c45b-70dc4.png 2520w,\n/static/network-priority-3ab504487833ef302dc01c0e95f4c45b-82ec2.png 2870w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>Chrome开发者工具中网络面板中的优先级,如果没有看到该列，您可以通过右键单击列标题来启用“优先级”列 </p>\n</blockquote>\n<p>优先级使您了解浏览器处理每个资源的相对重要性。 请记住，微妙的差异足以让浏览器分配不同的优先级; 例如，作为初始渲染的一部分的图像优先于高于从屏幕外开始的图像。</p>\n<p>如果您发现资源加载的优先级与您想要的不同，您会怎么做？本文展示了三种不同的声明性解决方案，它们都是相对较新的<code class="gatsby-code-text">&lt;link&gt;</code>类型。 如果您的资源对用户体验至关重要，但加载的优先级过低，则可以尝试通过以下两种方式之一进行修复：<code class="gatsby-code-text">预加载(Preload)</code>或<code class="gatsby-code-text">预链接(Preconnect)</code>。 另一方面，如果您希望浏览器在完成处理其他内容时获取某些资源，请尝试<code class="gatsby-code-text">预获取(Prefetch)</code>。</p>\n<h3 id="预加载preload"><a href="#%E9%A2%84%E5%8A%A0%E8%BD%BDpreload" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>预加载(Preload)</h3>\n<p><code class="gatsby-code-text">&lt;link rel=&quot;preload&quot;&gt;</code>通知浏览器接下来可能用到的资源，并尽快开始加载资源。 你可以像这样使用：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>script<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>super-important.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>critical.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>如你期望，“as”告诉浏览器资源类型。你要通过<code class="gatsby-code-text">as</code>设置正确的类型，否则浏览器不会使用预加载的资源。 </p>\n<p>浏览器在空闲的时候会去加载相应的资源，并在合适的时候使用它们。</p>\n<p><code class="gatsby-code-text">&lt;link rel=&quot;preload&quot;&gt;</code>是浏览器的强制性指令，preload后浏览器就必定去预加载相应的资源。使用时需要仔细测试，确保您不会因为使用它而意外导致任何资源加载2次。使用<code class="gatsby-code-text">&lt;link rel=&quot;preload&quot;&gt;</code>获取但在3秒内未被当前页面使用的资源将在Chrome开发者工具的控制台中触发警告，因此请务必留意这些！</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/preload-warn-f48470be88108b285548d14b675ad70d-bfb40.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 18.72015281757402%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6UlEQVQY0z2O626CQBCFef8HqoltjGmT/jBtgnJRKMplKewS0ICXRFn8CrR2kpM5M2fOzBhKKZJEkGc5YRixC0Oqak/TNNR1/Zd/MfAHjsfjPx+0oVaqwGiamtP5xBBaa+73juv1yuVy7heXtO1t7Gvd0nV6PCJlPmqHw6Gfv/OIon/OqKSLSpdU0qHI12TCQWZr0thCRCv8zQIRr0gTi1J5lLmNFCZit6BSLvLbJQw+e5/NuUkwAntK4Dwjgjd26xmb5YQva0rozYn81157YevOENt3NuYEz3wi9ucjBq8UHyP2hUV3S/kBYHMnYhMdaAAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="preload warn"\n        title=""\n        src="/static/preload-warn-f48470be88108b285548d14b675ad70d-acf85.png"\n        srcset="/static/preload-warn-f48470be88108b285548d14b675ad70d-c1418.png 210w,\n/static/preload-warn-f48470be88108b285548d14b675ad70d-5d5d8.png 420w,\n/static/preload-warn-f48470be88108b285548d14b675ad70d-acf85.png 840w,\n/static/preload-warn-f48470be88108b285548d14b675ad70d-de0cd.png 1260w,\n/static/preload-warn-f48470be88108b285548d14b675ad70d-bd6c2.png 1680w,\n/static/preload-warn-f48470be88108b285548d14b675ad70d-bfb40.png 2094w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>图中显示unused.js通过预加载进行了资源加载，但是接下来并没有使用，如果用不到的资源最好不要使用预加载。</p>\n<h4 id="preload使用场景"><a href="#preload%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>preload使用场景</h4>\n<h5 id="字体"><a href="#%E5%AD%97%E4%BD%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>字体</h5>\n<p>字体资源是预获取的一个很好的例子</p>\n<p>为了减少用户等待站点文本内容的时间，以及避免系统字体与样式中定义的字体之间应用时的闪烁，您可以在HTML中使用<code class="gatsby-code-text">&lt;link rel =&quot;preload&quot;&gt;</code>让浏览器知道样式文件中需要加载的字体资源。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>font<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>crossorigin<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>font/woff2<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myfont.woff2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>请注意，使用<code class="gatsby-code-text">crossorigin</code>很重要; 如果没有此属性，浏览器将忽略预加载的字体，并发起一个新的请求。 这是因为浏览器使用匿名请求加载字体，也只有使用<code class="gatsby-code-text">crossorigin</code>属性使预加载请求匿名。</p>\n<blockquote>\n<p>如果您使用的是CDN，例如Google字体，请确保您预加载的字体文件与CSS中的字体文件匹配，由于unicode范围，权重和字体变体，这可能很棘手。 字体也可以定期更新，如果你预加载了一个旧版本的字体，但在样式文件中使用了新版本的字符，则最终可能会下载相同字体的两个版本并浪费用户的带宽。 这种情况请考虑使用<code class="gatsby-code-text">&lt;link rel =&quot;preconnect&quot;&gt;</code>。</p>\n</blockquote>\n<h4 id="关键路径css和javascript"><a href="#%E5%85%B3%E9%94%AE%E8%B7%AF%E5%BE%84css%E5%92%8Cjavascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>关键路径CSS和JavaScript</h4>\n<p>在谈论页面性能时，一个有用的概念是“关键路径”。 关键路径是指在初始渲染之前必须加载的资源。 这些资源(如CSS)对于获取用户屏幕上的第一个像素至关重要。以前，建议将此内容内嵌到您的HTML中。</p>\n<p>但是，在多页，服务器端呈现的场景中，这很快就会变成大量浪费的字节。 它还使版本控制变得更加困难，因为关键代码中的任何更改都会使任何内联页面无效。<code class="gatsby-code-text">&lt;link rel =&quot;preload&quot;&gt;</code>允许您保留单个文件版本控制和缓存的好处，同时为您提供尽快请求资源的机制。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>script<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>super-important.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>critical.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>预加载缺点：需要额外的往返。 这个额外的往返来自于浏览器先获取HTML，然后它才能从HTML中找出要加载的下一个资源。</p>\n<p>解决额外往返的一种方法是使用<code class="gatsby-code-text">HTTP/2推送</code>，在这种情况下，您可以将关键资源附加到和发送HTML的同一连接。 这可以保证用户浏览器检索HTML和开始下载关键资源之间没有停顿时间。 但是，在使用HTTP/2推送时要小心，因为这是控制用户带宽使用的一种非常有力的方式，并且留给浏览器做决定的空间很小，例如不检索已经在缓存中的文件！</p>\n<h3 id="预连接preconnect"><a href="#%E9%A2%84%E8%BF%9E%E6%8E%A5preconnect" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>预连接(Preconnect)</h3>\n<p><code class="gatsby-code-text">&lt;link rel =&quot;preconnect&quot;&gt;</code>通知浏览器您的页面打算与另一个来源建立连接，并且您希望该过程尽快启动。</p>\n<p>建立连接通常需要在慢速网络中占用大量时间，特别是在涉及安全连接时，因为它可能涉及DNS查找，重定向以及到处理用户请求的最终服务器的多次往返。 提前处理所有这些可以使您的应用程序对用户感觉更加快捷，而不会对带宽的使用产生负面影响。 建立连接的大部分时间都花在等待上，而不是交换数据。</p>\n<p>告知浏览器您的意图就像在页面中添加链接标记一样简单：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>在这种情况下，我们让浏览器知道我们打算连接到”example.com”并从那里检索内容。请记住，虽然<code class="gatsby-code-text">&lt;link rel =&quot;preconnect&quot;&gt;</code>轻量，但它仍然占用宝贵的CPU时间，特别是在安全连接上。 如果在10秒内没有使用连接，这会特别糟糕，因为浏览器会关闭它，浪费所有早期的连接工作。</p>\n<p>一般情况下，尝试使用<link rel ="preload">，因为它是一个更全面的性能优化方案，其它更复杂的情况，你需要使用<link rel ="preconnect">。</p>\n<blockquote>\n<p>注意：</p>\n<p>实际上还有另一个与连接相关的<code class="gatsby-code-text">&lt;link&gt;</code>类型：<code class="gatsby-code-text">&lt;link rel =&quot;dns-prefetch&quot;&gt;</code>。 这仅处理DNS查找，它是<code class="gatsby-code-text">&lt;link rel =&quot;preconnect&quot;&gt;</code>的一小部分。<code class="gatsby-code-text">&lt;link rel =&quot;dns-prefetch&quot;&gt;</code>具有更广泛的浏览器支持，因此它可以作为一个很好的后备。 您可以用相同的方式使用它：<code class="gatsby-code-text">&lt;link rel =&quot;dns-prefetch&quot; href =&quot;https://example.com&quot;&gt;</code></p>\n</blockquote>\n<h4 id="preconnect用例cdn"><a href="#preconnect%E7%94%A8%E4%BE%8Bcdn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Preconnect用例CDN</h4>\n<p>知道资源会从哪里来，但不知道最终获取什么资源。有时您知道将从给定的CDN中检索资源，但并不知道完整路径。 根据用户的使用情况或其它运行时特征，从CDN上获取一个或多个资源。</p>\n<p>在这种情况下，如果您要获取的资源很重要，您可能希望通过预连接到服务器来节省尽可能多的时间。 浏览器不会在需要之前开始提取文件（也就是说，一旦请求以某种方式从您的页面发出），但至少它可以提前处理连接，从而使用户无需等待几次往返。</p>\n<h4 id="preconnect-流媒体"><a href="#preconnect-%E6%B5%81%E5%AA%92%E4%BD%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Preconnect 流媒体</h4>\n<p>流媒体不同来源的流媒体，您可能希望在连接阶段节省一些时间但不一定立即开始获取内容。根据页面处理流内容的方式，您可能需要等到脚本加载完毕并做好准备后才处理流。 一旦准备加载资源，预连接可帮助您缩短单次往返的等待时间。</p>\n<h3 id="预获取prefetch"><a href="#%E9%A2%84%E8%8E%B7%E5%8F%96prefetch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>预获取(Prefetch)</h3>\n<p>它通过向浏览器通知将来需要的资源来加速页面的后续展现，例如，如果用户采取了我们期望的操作，则我们可以提前加载稍后可能需要的东西。 </p>\n<p>当前页面加载并且有可用带宽时，这些资源在Chrome中以最低优先级获取。这意味着预获取最适合提前做好用户下一步可能做的事情的准备，例如检索结果列表中的第一个产品详细信息页面，或检索分页内容中的下一页。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page-2.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>但请记住，预取不会递归地起作用。 在上面的示例中, 除非您明确预获取page-2.html中的内容，否则浏览器不会提前下载page-2.html所需的任何资源。</p>\n<h3 id="预获取prefetch不会覆盖"><a href="#%E9%A2%84%E8%8E%B7%E5%8F%96prefetch%E4%B8%8D%E4%BC%9A%E8%A6%86%E7%9B%96" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>预获取(Prefetch)不会覆盖</h3>\n<p>请务必注意，不能使用<code class="gatsby-code-text">&lt;link rel =&quot;prefetch&quot;&gt;</code>作为降低现有资源优先级的方法。 在下面的HTML中，您可能认为在预取中声明<code class="gatsby-code-text">optional.css</code>会降低后续<code class="gatsby-code-text">&lt;link rel =&quot;stylesheet&quot;&gt;</code>的优先级：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>optional.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>optional.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    Hello!\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>事情上，这会导致样式表被加载两次（尽管第二个可能命中缓存），一次是默认的最高优先级，一次是最低优先级：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/prefetch-warn-259ac63e9dc81f1988d3c134da0eb2e0-6fd6f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 15.087719298245613%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAt0lEQVQI1x2N0U6EMBRE+f/f8S98MsboanTjQoFCS+G2TbvALse6DyeZnMlkqlZbJK7kDeL1TtoOnCTawTG6gPOZ3swPF9KOtlJcwsyRcRLUMNP0luAj1/WgqjvD88uJWi9IOih71Cg0w8JvO/FdD5x+FO3oKb9cesdZmYLl9ePM29eFT7Py9J5pTKbyImitEVm47WthI8ZACL68CpO1dF2HL/39thfnH/l/Z61hcRM5Z5SLtDbwB6bg4qsLSnVMAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="prefetch不会覆盖"\n        title=""\n        src="/static/prefetch-warn-259ac63e9dc81f1988d3c134da0eb2e0-acf85.png"\n        srcset="/static/prefetch-warn-259ac63e9dc81f1988d3c134da0eb2e0-c1418.png 210w,\n/static/prefetch-warn-259ac63e9dc81f1988d3c134da0eb2e0-5d5d8.png 420w,\n/static/prefetch-warn-259ac63e9dc81f1988d3c134da0eb2e0-acf85.png 840w,\n/static/prefetch-warn-259ac63e9dc81f1988d3c134da0eb2e0-de0cd.png 1260w,\n/static/prefetch-warn-259ac63e9dc81f1988d3c134da0eb2e0-bd6c2.png 1680w,\n/static/prefetch-warn-259ac63e9dc81f1988d3c134da0eb2e0-6fd6f.png 1710w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>资源多次加载对用户来说是不好的。 在这种情况下，他们不仅要等待渲染阻止CSS，而且还可能通过两次下载文件来浪费他们的带宽。务必彻底分析您的网络请求，并留意任何相同资源的多次加载！</p>\n<p><strong>什么时候该用<code class="gatsby-code-text">&lt;link rel=”preload”&gt;</code>？什么时候又该用<code class="gatsby-code-text">&lt;link rel=”prefetch”&gt;</code> ?</strong></p>\n<p><strong>建议：对于当前页面很有必要的资源使用<code class="gatsby-code-text">preload</code>，对于可能在将来的页面中使用的资源使用<code class="gatsby-code-text">prefetch</code>。</strong></p>',frontmatter:{title:"前端资源加载优先级",img:"./img/2019-01-12.jpeg",author:["Sylvenas"],excerpt:null,catalogue:["默认优先级","预加载Preload","预连接Preconnect","预获取Prefetch","预获取Prefetch不会覆盖"]},fields:{date:"January 11, 2019",path:"blog/performance/2019-01-12-load-priority.md",slug:"/blog/2019/01/12/load-priority.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}}]}},pathContext:{slug:"/blog/2019/01/12/load-priority.html"}}}});