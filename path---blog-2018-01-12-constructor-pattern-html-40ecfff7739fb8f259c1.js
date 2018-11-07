webpackJsonp([34186222656622],{443:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="构造函数"><a href="#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>构造函数</h3>\n<p>在JavaScript中，构造函数通常是用开创建实例的，JavaScript中没有类的概念，但是有特殊的构造函数，可以通过<code>new</code>关键字来调用构造函数，约定成俗的构造函数的首字母大写。</p>\n<h3 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>example</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> xiaobu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">\'小布\'</span><span class="token punctuation">,</span> <span class="token string">\'拉布拉多\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> erhuo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">\'傻子\'</span><span class="token punctuation">,</span> <span class="token string">\'哈士奇\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nxiaobu <span class="token keyword">instanceof</span> <span class="token class-name">Dog</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// true</span>\n\nxiaobu<span class="token punctuation">.</span>sound <span class="token operator">===</span> erhuo<span class="token punctuation">.</span>sound<span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// false</span>\n</code></pre>\n      </div>\n<p>从上面的代码，我们能看到构造函数模式有一个严重的缺点，就是每次创建一个新的对象的时候，都要创建一个新的<code>sound</code>方法，这个却是非常没有必要的，因为一般来说，两个实例对象只是属性不一样，而方法是一样的，因此有些人表示这个问题好解决,我们可以把方法放到外面去：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token operator">=</span> sound<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">sound</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>但是这样一改，却产生了一个仅仅供<code>Dog</code>使用的全部函数，这和构造函数模式本身的封装特性相悖，具体怎么做更好呢，请看下一篇的<a href="">原型模式</a>。</p>\n<h3 id="不用new来创建对象"><a href="#%E4%B8%8D%E7%94%A8new%E6%9D%A5%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>不用new来创建对象</h3>\n<h4 id="用call改变上下文"><a href="#%E7%94%A8call%E6%94%B9%E5%8F%98%E4%B8%8A%E4%B8%8B%E6%96%87" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>用call,改变上下文</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> xiaobu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">;</span>\nDog<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>xiaobu<span class="token punctuation">,</span> <span class="token string">\'xiaobu\'</span><span class="token punctuation">,</span> <span class="token string">\'拉布拉多\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nxiaobu <span class="token keyword">instanceof</span> <span class="token class-name">Dog</span>   <span class="token comment" spellcheck="true">// false</span>\n</code></pre>\n      </div>\n<p>用这种方法创建的<code>xiaobu</code>不是<code>Dog</code>的实例。</p>\n<h4 id="作为函数调用"><a href="#%E4%BD%9C%E4%B8%BA%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>作为函数调用</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> xiaobu<span class="token operator">=</span><span class="token function">Dog</span><span class="token punctuation">(</span><span class="token string">\'xiaobu\'</span><span class="token punctuation">,</span> <span class="token string">\'拉布拉多\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> xiaobu<span class="token punctuation">)</span>  <span class="token comment" spellcheck="true">//undefined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">sound</span><span class="token punctuation">(</span><span class="token string">\'wang wang ...\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// \'wang wang ...\'</span>\n</code></pre>\n      </div>\n<p>因为不是通过<code>new</code>关键字，而是直接调用<code>Dog</code>构造函数，此时<code>Dog</code>函数内的<code>this</code>指向<code>window</code>对象。</p>',frontmatter:{title:"构造函数模式",img:"./img/2018-01-12.jpeg",author:["Sylvenas"]},fields:{date:"January 11, 2018",path:"blog/design-pattern/2018-01-12-constructor-pattern.md",slug:"/blog/2018/01/12/constructor-pattern.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}},{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"What is 'this' in JavaScript"},fields:{slug:"/blog/2018/06/24/this.html"}}},{node:{frontmatter:{title:"react 性能优化：arrow function in react"},fields:{slug:"/blog/2018/06/15/arrow-in-react.html"}}},{node:{frontmatter:{title:"react 条件渲染"},fields:{slug:"/blog/2018/05/26/react-if.html"}}},{node:{frontmatter:{title:"higher-order component(HOC)"},fields:{slug:"/blog/2018/05/21/hight-order-component.html"}}},{node:{frontmatter:{title:"arrow function this"},fields:{slug:"/blog/2018/03/16/arrow-function-this.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--responsive-image"},fields:{slug:"/blog/2018/03/10/responsive-img.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--placeholder"},fields:{slug:"/blog/2018/03/09/placeholder.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--lazy-load"},fields:{slug:"/blog/2018/03/08/lazy-loading.html"}}}]}},pathContext:{slug:"/blog/2018/01/12/constructor-pattern.html"}}}});