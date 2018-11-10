webpackJsonp([0xbbc5271b2e2],{418:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="react-magic"><a href="#react-magic" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>react-magic</h1>\n<p><a href="https://www.npmjs.com/package/react-magic"><img src="https://badge.fury.io/js/react-magic.svg" alt="npm version"></a>\n<a href="https://github.com/facebook/react"><img src="https://img.shields.io/badge/react-v15.4.2-blue.svg" alt="react"></a>\n<a href="https://github.com/miniMAC/magic"><img src="https://img.shields.io/badge/magic-v1.2.0-blue.svg" alt="react"></a>\n<a href="https://github.com/Khan/aphrodite"><img src="https://img.shields.io/badge/aphrodite-v1.1.0-blue.svg" alt="react"></a></p>\n<p>A collection of magic animations for react components. Although React provides a way to implement arbitrary animations,\nit is not an easy task to do it, even for simple animations. That’s where react-magic package comes in. It supports inline styles work with <a href="https://github.com/Khan/aphrodite">aphrodite</a>.\nMost animations was implemented base on <a href="https://github.com/miniMAC/magic">magic</a>.</p>\n<div style="text-align:center" align="center">\n  <img src="https://sylvenas.github.io/react-magic/demo.gif" />\n</div>    \n   \n## Demo online               \n<p>A demo is available on the Github Pages webpage for react-magic <a href="https://sylvenas.github.io/react-magic/">Check out demo</a>!          </p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>React-magic is distributed via <a href="https://www.npmjs.com/package/react-magic">npm</a>:     </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>npm install --save react-magic    </code></pre>\n      </div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>You can import each animation directly from the main package</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> swap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-magic\'</span>\n</code></pre>\n      </div>\n<p>or you can import a specific animation directly</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> swap <span class="token keyword">from</span> <span class="token string">\'react-magic/lib/magic/swap\'</span>\n</code></pre>\n      </div>\n<p>usage with <a href="https://github.com/Khan/aphrodite">Aphrodite</a>     </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> PropTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'aphrodite\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> swap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-magic\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    magic<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        animationName<span class="token punctuation">:</span> swap<span class="token punctuation">,</span>\n        animationDuration<span class="token punctuation">:</span> <span class="token string">\'1s\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">css</span><span class="token punctuation">(</span>styles<span class="token punctuation">.</span>magic<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>react<span class="token operator">-</span>magic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>   \n</code></pre>\n      </div>\n<h2 id="animations"><a href="#animations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Animations</h2>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>.\n├── magic\n│   |── magic     \n│   |── twisterInDown           \n│   |── twisterInUp         \n│   └── swap    \n├── bling                         \n│   |── puffIn             \n│   |── puffOut            \n│   |── vanishIn                           \n│   └── vanishOut                     \n├── staticEffects                         \n│   |── openDownLeft             \n│   |── openDownLeftReturn            \n│   |── openDownRight       \n│   |── openDownRightReturn    \n│   |── openUpLeft    \n│   |── openUpLeftReturn    \n│   |── openUpRight                        \n│   └── openUpRightReturn                \n├── staticEffectsOut                         \n│   |── openDownLeftOut             \n│   |── openDownRightOut            \n│   |── openUpLeftOut                           \n│   └── openUpRightOut     \n├── perspective                         \n│   |── perspectiveDown             \n│   |── perspectiveDownReturn            \n│   |── perspectiveLeft       \n│   |── perspectiveLeftReturn  \n│   |── perspectiveRight    \n│   |── perspectiveRightReturn    \n│   |── perspectiveUp                        \n│   └── perspectiveUpReturn              \n├── rotate                         \n│   |── rotateDownIn             \n│   |── rotateDownOut            \n│   |── rotateLeftIn       \n│   |── rotateLeftOut  \n│   |── rotateRightIn    \n│   |── rotateRightOut    \n│   |── rotateUpIn                        \n│   └── rotateUpOut               \n├── slide                         \n│   |── slideDown             \n│   |── slideDownReturn            \n│   |── slideLeft       \n│   |── slideLeftReturn  \n│   |── slideRight    \n│   |── slideRightReturn    \n│   |── slideUp                        \n│   └── slideUpReturn            \n├── math                                \n│   |── foolishIn       \n│   |── foolishOut  \n│   |── holeIn    \n│   |── holeOut    \n│   |── swashIn                        \n│   └── swashOut     \n├── tin                         \n│   |── tinDownIn             \n│   |── tinDownOut            \n│   |── tinLeftIn       \n│   |── tinLeftOut  \n│   |── tinRightIn    \n│   |── tinRightOut    \n│   |── tinUpIn                        \n│   └── tinUpOut     \n├── bomb\n│   |── bombLeftOut           \n│   └── bombRightOut           \n├── boing\n│   |── boingInUp           \n│   └── boingOutDown     \n├── space                         \n│   |── spaceInDown             \n│   |── spaceInLeft            \n│   |── spaceInRight       \n│   |── spaceInUp  \n│   |── spaceOutDown    \n│   |── spaceOutLeft    \n│   |── spaceOutRight                        \n│   └── spaceOutUp         </code></pre>\n      </div>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT  </p>',frontmatter:{title:"React Magic",img:"./img/2017-02-26.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"February 25, 2017",path:"blog/react/2017-02-26-react-magic.md",slug:"/blog/2017/02/26/react-magic.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}},{node:{frontmatter:{title:"What is 'this' in JavaScript"},fields:{slug:"/blog/2018/06/24/this.html"}}},{node:{frontmatter:{title:"react 性能优化：arrow function in react"},fields:{slug:"/blog/2018/06/15/arrow-in-react.html"}}},{node:{frontmatter:{title:"react 条件渲染"},fields:{slug:"/blog/2018/05/26/react-if.html"}}},{node:{frontmatter:{title:"higher-order component(HOC)"},fields:{slug:"/blog/2018/05/21/hight-order-component.html"}}},{node:{frontmatter:{title:"arrow function this"},fields:{slug:"/blog/2018/03/16/arrow-function-this.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--responsive-image"},fields:{slug:"/blog/2018/03/10/responsive-img.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--placeholder"},fields:{slug:"/blog/2018/03/09/placeholder.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--lazy-load"},fields:{slug:"/blog/2018/03/08/lazy-loading.html"}}}]}},pathContext:{slug:"/blog/2017/02/26/react-magic.html"}}}});