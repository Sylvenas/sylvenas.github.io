webpackJsonp([0xf2da187dbd5c],{513:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="simple-factory-pattern-intro"><a href="#simple-factory-pattern-intro" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple Factory Pattern Intro</h3>\n<p>简单工厂模式的定义为定义一个工厂类，它可以根据参数的不同返回不同类的实例；简单工厂模式不属于GOF 23个经典设计模式之一，它的设计思想很简单，其基本流程如下：</p>\n<ul>\n<li>将需要创建的各种不同类型的对象的相关代码封装到不同的类中，这些类称为具体产品类。</li>\n<li>提供一个工厂方法用来创建产品，该方法可以根据所传入的参数不同创建不同的具体产品对象。</li>\n<li>客户端调用工厂方法并传入相应的参数。</li>\n</ul>\n<h3 id="simple-factory-pattern-example"><a href="#simple-factory-pattern-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple Factory Pattern Example</h3>\n<ul>\n<li>\n<p>封装产品生产</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">LineChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">\'折线图\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n</ul>\n<p>function PieChart() {\nthis.type = ‘饼状图’;\n}</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">* 创建工厂方法\n``` js\nfunction Chart(type) {\n\tlet chart;\n\tswitch (type) {\n\t\tcase &#39;line&#39;:\n\t\t\tchart = new LineChart();\n\t\t\tbreak;\n\t\tcase &#39;pie&#39;:\n\t\t\tchart = new PieChart();\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tbreak;\n\t}\n\treturn chart;\n}</code></pre>\n      </div>\n<ul>\n<li>\n<p>传入不同的参数生产产品</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> chart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span><span class="token string">\'line\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n</ul>\n<h3 id="简单工厂模式优缺点"><a href="#%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F%E4%BC%98%E7%BC%BA%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>简单工厂模式优缺点</h3>\n<h4 id="优点"><a href="#%E4%BC%98%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>优点</h4>\n<ul>\n<li>工厂方法必须包含必要的判断逻辑，可以决定在什么时候创建哪一个产品类的实例，客户端免除了直接创建产品对象的职责，而仅仅”消费”产品，实现了对象创建和使用的分离。</li>\n<li>使用者无须知道所创建的具体产品类的名称，只需要知道具体产品类所对应的参数即可，可以在一定程度上减少使用者的记忆量。</li>\n</ul>\n<h4 id="缺点"><a href="#%E7%BC%BA%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缺点</h4>\n<ul>\n<li>工厂类集中了所有产品类的创建逻辑，一旦工厂类出现的异常，整个系统都要受到影响。</li>\n<li>系统扩展困难，一旦添加新产品就不得不修改工厂类逻辑，当产品类型较多的时候，可能会造成工厂逻辑过于复杂。</li>\n</ul>\n<h4 id="简单工厂模式适用场景"><a href="#%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>简单工厂模式适用场景</h4>\n<ul>\n<li>工厂类负责创建的对象比较少，由于创建的对象比较少，则不会导致工厂类的逻辑过于复杂。</li>\n<li>客户端只知道传入工厂的参数，对于如何创建对象并不关心。</li>\n</ul>\n<h3 id="factory-pattern-intro"><a href="#factory-pattern-intro" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Factory Pattern Intro</h3>\n<p>工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类，该模式使类色实例化延迟到子类，而子类可以重写接口方法以便创建的时候制定自己的对象类型。换句更加通俗易懂的话来说就是：事先定义好每条流水线，每条流水线生产的东西是不一样的，然后工厂统一管理流水线，工厂通过订单类型来决定生产何种产品。</p>\n<h3 id="factory-pattern-example"><a href="#factory-pattern-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Factory Pattern Example</h3>\n<p>我们通过一个创建dom节点的例子，来看一下什么是工厂模式，以及工厂模式的工作流程：</p>\n<h4 id="创建图表库的例子"><a href="#%E5%88%9B%E5%BB%BA%E5%9B%BE%E8%A1%A8%E5%BA%93%E7%9A%84%E4%BE%8B%E5%AD%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>创建图表库的例子</h4>\n<ul>\n<li>\n<p>预定义工厂流水线</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> productFactory <span class="token operator">=</span> <span class="token punctuation">{</span>\nline<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">\'折线图\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\npie<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">\'饼状图\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n<li>\n<p>工厂方法统一管理流水线</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">Chart</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">productFactory</span><span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>封装生产产品实例</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">const</span> productFactory <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tline<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">\'折线图\'</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\tpie<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">\'饼状图\'</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">Chart</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">productFactory</span><span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token function">Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> chart <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">\'pie\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n</ul>\n<h4 id="创建dom节点例子"><a href="#%E5%88%9B%E5%BB%BAdom%E8%8A%82%E7%82%B9%E4%BE%8B%E5%AD%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>创建DOM节点例子</h4>\n<ul>\n<li>\n<p>预定义工厂流水线</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">createInput</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">let</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nel<span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n<span class="token keyword">return</span> el<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> controls <span class="token operator">=</span> <span class="token punctuation">{</span>\ntext<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">let</span> el <span class="token operator">=</span> <span class="token function">createInput</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options<span class="token punctuation">.</span>value <span class="token operator">!=</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tel<span class="token punctuation">.</span>value <span class="token operator">=</span> options<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">return</span> el<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\ncheckbox<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">let</span> el <span class="token operator">=</span> <span class="token function">createInput</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options<span class="token punctuation">.</span>checked <span class="token operator">!=</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tel<span class="token punctuation">.</span>checked <span class="token operator">=</span> options<span class="token punctuation">.</span>checked<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">return</span> el<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n<li>\n<p>工厂统一管理流水线</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">let</span> type <span class="token operator">=</span> options<span class="token punctuation">.</span>type <span class="token operator">?</span> options<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> undefined<span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>type <span class="token operator">||</span> <span class="token operator">!</span>controls<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">throw</span> <span class="token punctuation">{</span>\n\t\tmessage<span class="token punctuation">:</span> type <span class="token operator">+</span> <span class="token string">\' is not supported.\'</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">return</span> controls<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>根据订单生产指定产品</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'text\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">\'hello world\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="工厂模式优缺点"><a href="#%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F%E4%BC%98%E7%BC%BA%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>工厂模式优缺点</h3>\n<h4 id="优点-1"><a href="#%E4%BC%98%E7%82%B9-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>优点</h4>\n</li>\n<li>\n<p>工厂方法在创建客户需要的产品的同时，隐藏了哪个具体产品类将要被实例化，用户只需知道所需产品对应的工厂，无须关心具体产品类的名称。</p>\n</li>\n<li>\n<p>在系统需要加入新的产品类的时候，完全无须修改工厂方法，只需要添加一个具体的产品类就可以了，增强了系统的可扩展性，符合”开闭原则”。</p>\n</li>\n</ul>\n<h4 id="缺点-1"><a href="#%E7%BC%BA%E7%82%B9-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缺点</h4>\n<ul>\n<li>在添加新的产品时，需要增加产品类的个数，在一定程度上增加了系统的复杂性。</li>\n<li>考虑了扩展性则必然增加了代码复杂性，不宜与理解和测试。</li>\n</ul>\n<h3 id="工厂模式适用场景"><a href="#%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>工厂模式适用场景</h3>\n<ul>\n<li>对象的创建十分复杂。</li>\n<li>需要依赖不同环境创建不同实例。</li>\n<li>处理大量具有类似属性的小对象。</li>\n</ul>',frontmatter:{title:"工厂模式",img:"./img/2018-01-20.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"January 19, 2018",path:"blog/design-pattern/2018-01-20-factory-pattern.md",slug:"/blog/2018/01/20/factory-pattern.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}}]}},pathContext:{slug:"/blog/2018/01/20/factory-pattern.html"}}}});