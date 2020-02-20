webpackJsonp([38745902503841],{477:function(n,s){n.exports={data:{markdownRemark:{html:'<p>React最近发布了16.0版本,该版本中，主要新增了 <code class="gatsby-code-text">componentDidCatch</code>用来捕捉错误信息,<code class="gatsby-code-text">render return gragments or string</code>使得render方法，可以返回两种新的数据类型-数组和字符串,<code class="gatsby-code-text">custom DOM attributes</code>可以对原生的DOM元素添加自定义的属性,<code class="gatsby-code-text">Portals</code>可以让我们在组件的父组件之外渲染一个React Component。     </p>\n<p>我觉得最有趣的应该是上面描述中的第四个:<code class="gatsby-code-text">Portals</code>。<a href="https://reactjs.org/docs/portals.html">React docs</a>把这个特性解释的很清楚，并且使用了一个<code class="gatsby-code-text">modal</code>的应用作为示例。    </p>\n<p>好像上面的描述没有什么有趣的地方，不过让接下来让我们开始做一些不可思议的事情吧。    </p>\n<p><code class="gatsby-code-text">Portals</code>所做的事情，就是把一个React Component 插入到一个DOM Element中，这个操作绝不仅仅局限于把组件插入到 <em>current</em> document。你完全可以把组件插入到一个不同的<code class="gatsby-code-text">document</code>中，甚至是不同的<code class="gatsby-code-text">window</code>对象中的document。     </p>\n<p>下面的图片中，我有一个父页面(左侧)，里面包含一个计数器和一个红色的按钮，另外一个小的窗口(右侧)，包含几乎一样的内容，不过没有暂时没有<code class="gatsby-code-text">css</code>。     </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/react16-cool-ce1239df72ef6647fc03565886a5faf2-65740.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50.481283422459896%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIEBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeZeYUkf/8QAGRABAAIDAAAAAAAAAAAAAAAAAQACAxAT/9oACAEBAAEFAq3R75IrZ3//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAACAgMAAAAAAAAAAAAAAAABEQAgITJx/9oACAEBAAY/AmMcmxjJZp//xAAZEAADAAMAAAAAAAAAAAAAAAAAAREgUfH/2gAIAQEAAT8hqyoOkPDWx4f/2gAMAwEAAgADAAAAEGfP/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EF2f/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxABAAICAwAAAAAAAAAAAAAAAQAxEBFhkeH/2gAIAQEAAT8QBoJG7PcXK+TxH7C7GOCf/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="example"\n        title=""\n        src="/static/react16-cool-ce1239df72ef6647fc03565886a5faf2-a6b71.jpeg"\n        srcset="/static/react16-cool-ce1239df72ef6647fc03565886a5faf2-1839a.jpeg 210w,\n/static/react16-cool-ce1239df72ef6647fc03565886a5faf2-6c621.jpeg 420w,\n/static/react16-cool-ce1239df72ef6647fc03565886a5faf2-a6b71.jpeg 840w,\n/static/react16-cool-ce1239df72ef6647fc03565886a5faf2-c5125.jpeg 1260w,\n/static/react16-cool-ce1239df72ef6647fc03565886a5faf2-bc244.jpeg 1680w,\n/static/react16-cool-ce1239df72ef6647fc03565886a5faf2-65740.jpeg 1870w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>上面例子中看到所有的内容都在一个Component中：      </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      counter<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      showWindowPortal<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>toggleWindowPortal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>toggleWindowPortal<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    window<span class="token punctuation">.</span><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token operator">...</span>state<span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">        counter<span class="token punctuation">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n</span>      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">toggleWindowPortal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token operator">...</span>state<span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">      showWindowPortal<span class="token punctuation">:</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>showWindowPortal<span class="token punctuation">,</span>\n</span>    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Counter<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggleWindowPortal<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>showWindowPortal <span class="token operator">?</span> <span class="token string">\'Close the\'</span> <span class="token punctuation">:</span> <span class="token string">\'Open a\'</span><span class="token punctuation">}</span> Portal\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n<span class="gatsby-highlight-code-line">        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>showWindowPortal <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n</span>          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyWindowPortal</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Counter <span class="token keyword">in</span> a portal<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Even though <span class="token constant">I</span> render <span class="token keyword">in</span> a different window<span class="token punctuation">,</span> <span class="token constant">I</span> share state<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\n<span class="gatsby-highlight-code-line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showWindowPortal<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">></span></span>\n</span>              Close me<span class="token operator">!</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyWindowPortal</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>上面的代码中<code class="gatsby-code-text">&lt;MyWindowPortal&gt;</code>是一个稍微特殊一点的组件，这个组件内的所有的内容都会在另一个window中渲染，<code class="gatsby-code-text">&lt;MyWindowPortal&gt;</code>做了两件事：    </p>\n<ol>\n<li>在<code class="gatsby-code-text">componentDidMount</code>时，打开一个新的浏览器窗口       </li>\n<li>创建一个<code class="gatsby-code-text">Portal</code>并把<code class="gatsby-code-text">props.children</code>的内容添加到新的window的body中     </li>\n</ol>\n<p>请仔细看下面的代码：   </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">MyWindowPortal</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// STEP 1: 创建一个容器 &lt;div></span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>containerEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>    <span class="token keyword">this</span><span class="token punctuation">.</span>externalWindow <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// STEP 2: 在渲染额时候，把 props.children 添加到容器 &lt;div> 中 </span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>containerEl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// STEP 3: 打开一个新的浏览器窗口</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>externalWindow <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">\'width=600,height=400,left=200,top=200\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>    <span class="token function">copyStyles</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>externalWindow<span class="token punctuation">.</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// STEP 4: 把容器 &lt;div> 添加到新打开的窗口的 body 中</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>externalWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>containerEl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// STEP 5: 当父组件中的 this.state.showWindowPortal 变为 false 的时候将会执行(关闭窗口)</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>externalWindow<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>上面的<code class="gatsby-code-text">MyWindowPortal</code>组件没有返回具体的内容，但是却在别的地方进行了渲染。通常来说，一个父组件对子组件说:“hey,render some DOM,then append the results to me”,子组一般也是照做。但是在这个例子中，子组件说:“No! ’m gonna render stuff in a different window”。     </p>\n<p>上面的逻辑中还有一个缺陷就是，子窗口中的元素暂时没有style,刚开始我的想法是直接把所有的css文件都复制到新的window中，但是很明显，这样太费时间了，所以写了一个方法，来做这件事情：   </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">copyStyles</span><span class="token punctuation">(</span>sourceDoc<span class="token punctuation">,</span> targetDoc<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span>sourceDoc<span class="token punctuation">.</span>styleSheets<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>styleSheet <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>styleSheet<span class="token punctuation">.</span>cssRules<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// for &lt;style> elements</span>\n      <span class="token keyword">const</span> newStyleEl <span class="token operator">=</span> sourceDoc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'style\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span>styleSheet<span class="token punctuation">.</span>cssRules<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>cssRule <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// write the text of each rule into the body of the style element</span>\n        newStyleEl<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>sourceDoc<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>cssRule<span class="token punctuation">.</span>cssText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      targetDoc<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newStyleEl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>styleSheet<span class="token punctuation">.</span>href<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// for &lt;link> elements loading CSS from a URL</span>\n      <span class="token keyword">const</span> newLinkEl <span class="token operator">=</span> sourceDoc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'link\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      newLinkEl<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">\'stylesheet\'</span><span class="token punctuation">;</span>\n      newLinkEl<span class="token punctuation">.</span>href <span class="token operator">=</span> styleSheet<span class="token punctuation">.</span>href<span class="token punctuation">;</span>\n      targetDoc<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newLinkEl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>现在我可以用下面的代码复制样式文件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">this</span><span class="token punctuation">.</span>externalWindow <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                                  \n<span class="token function">copyStyles</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>externalWindow<span class="token punctuation">.</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>上面整个示例的代码在<a href="https://stackblitz.com/edit/react-ztiawz">example</a>.</p>',frontmatter:{title:"Using React 16 Portal to do something cool",img:"./img/2017-09-30.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"September 29, 2017",path:"blog/react/2017-09-30-using-react16-portal.md",slug:"/blog/2017/09/30/using-react16-portal.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/02/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}},{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}}]}},pathContext:{slug:"/blog/2017/09/30/using-react16-portal.html"}}}});