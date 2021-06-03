webpackJsonp([0xe62ff9e1f03d],{657:function(a,e){a.exports={data:{markdownRemark:{html:'<p>我16岁的时候，花了很多时间与最好的哥们一起玩电脑游戏。他家里有一个满是电脑的房间。它们对于我来说是无法抵御的、神奇的。我花了很多时间探索所有游戏。有一天我问我哥们，“我们做一个游戏怎么样？”。</p>\n<p>他也不知道怎么做，所以我们就问他老爸。他老爸爬上一个高架子，拿出一本用 Basic 编写的游戏书。于是我们就开始了编程之旅。等到公立学校开始教代数时，我已经对代数掌握的不错了，因为编程基本上都是代数。大致就是这样的。</p>\n<h3 id="the-rise-of-composable-software"><a href="#the-rise-of-composable-software" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Rise of Composable Software</h3>\n<p>在计算机科学的开始，在大多数计算机科学可以实际在计算机上完成之前，有两个伟大的计算机科学家：Alonzo Church（阿伦佐.邱奇）和 Alan Turing（艾兰.图灵）。他们发明了两种不同的，但是等效的通用计算模型。这两种模型都可以计算任何可以被计算的东西（因此称为通用的）。</p>\n<p>Alonzo Church 发明了 lambda 演算，这是一种基于函数应用的通用计算模型。而 Alan Turing 以图灵机闻名。图灵机是一种通用的计算模型，它定义了一种通过操作纸带上的符号进行计算的理论设备。</p>\n<p>他们在一起协作展示 lambda 演算和图灵机在功能上是等效的。</p>\n<p>Lambda 演算都是与函数组合有关。以函数组合来思考是一种相当有表现力和说服力的组合软件的方式。在本文中，我们将讨论函数组合在软件设计中的重要性。</p>\n<p>有三个要点让 Lambda 演算变得很特别：</p>\n<ul>\n<li>1.函数总是匿名的。在 JavaScript 中，const sum = (x, y) => x + y 的右边是匿名函数表达式 (x, y) => x + y。</li>\n<li>2.Lambda 演算中的函数只接受一个输入。它们是一元的（unary）。如果需要多个形参，函数会带一个输入，并返回一个带有下一个形参的新函数，依此类推。多元函数 (x, y) => x + y 可以被表示为一个一元函数，比如：x => y => x + y。这种从多元函数到一元函数的转换被称为柯里化（currying）。</li>\n<li>3。函数是头等的，意思是说函数可以用作为其它函数的输入，以及函数可以返回函数。</li>\n</ul>\n<p>这些特性用在一起，形成一种简单，不过依然是富有表现力的词汇，使用函数作为主要的构造单元来组合软件。在 JavaScript 中，匿名函数和柯里化的函数是可选的特性。虽然 JavaScript 支持 lambda 演算的重要特性，但是并不强制使用它们。</p>\n<p>传统的函数组合用一个函数的输出作为另一个函数的输入。例如，组合：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">f <span class="token punctuation">.</span> g</code></pre>\n      </div>\n<p>可以被写成：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function-variable function">compose2</span> <span class="token operator">=</span> f <span class="token operator">=></span> g <span class="token operator">=></span> x <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>如下是使用它的方式：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function-variable function">double</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span>\n<span class="token function-variable function">inc</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">+</span> <span class="token number">1</span>\n\n<span class="token function">compose2</span><span class="token punctuation">(</span>double<span class="token punctuation">)</span><span class="token punctuation">(</span>inc<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">compose2</code>函数将<code class="gatsby-code-text">double</code>函数作为第一个实参，将<code class="gatsby-code-text">inc</code>函数作为第二个，然后将这两个函数的组合应用到实参<code class="gatsby-code-text">3</code>。再看看<code class="gatsby-code-text">compose2</code>的签名，<code class="gatsby-code-text">f</code>是<code class="gatsby-code-text">double()</code>,<code class="gatsby-code-text">g</code>是<code class="gatsby-code-text">inc</code>,<code class="gatsby-code-text">x</code>是<code class="gatsby-code-text">3</code>。函数调用<code class="gatsby-code-text">conpose2(double)(inc)(3)</code>实际上是3个不同的函数调用：</p>\n<ul>\n<li>1.先把<code class="gatsby-code-text">double</code>作为参数传递给<code class="gatsby-code-text">compose2</code>并返回一个新函数。</li>\n<li>2.返回的函数以<code class="gatsby-code-text">inc</code>为参数，并返回一个新函数。</li>\n<li>3.下一个返回函数以<code class="gatsby-code-text">3</code>为参数，并求现在变为<code class="gatsby-code-text">double(inc(3))</code>的<code class="gatsby-code-text">f(g(x))</code>的值。</li>\n<li>4.x求值为3，并传递给<code class="gatsby-code-text">inc</code>。</li>\n<li>5.<code class="gatsby-code-text">inc(3)</code>求值为<code class="gatsby-code-text">4</code>。</li>\n<li>6.<code class="gatsby-code-text">double(4)</code>求值为<code class="gatsby-code-text">8</code>。</li>\n<li>7.<code class="gatsby-code-text">8</code>从函数返回。</li>\n</ul>\n<p>Lambda 演算在软件设计上产生了巨大影响，在 1980 年之前，很多有重大影响的计算机科学象征都是用函数组合来构建软件。Lisp 是在 1958 年发明的，是深受 lambda 演算的影响。今天，Lisp 是依然在广泛使用的第二种最古老的语言。</p>\n<h3 id="the-fall-of-composable-software"><a href="#the-fall-of-composable-software" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Fall of Composable Software</h3>\n<p>在 1970 到 1980 之间的某个时候，软件创建的方式渐渐远离简单的组合，开始变成一个计算机要听从的线性指令列表。然后面向对象编程出来了，这是一种关于组件封装和消息传递的不错的理念，不过被流行语言扭曲成一种为特性重用而实现的继承层次结构和 “is-a” 关系的糟糕理念。</p>\n<p>函数式编程被打入冷宫和学术界，只有最极客的编程爱好者、常春藤大学中的教授，以及一些在二十世纪九十年代到二十一世纪十年代间逃脱 Java 强迫喂养的幸运的学生，还在幸福地痴迷着。</p>\n<p>对于我们大多数人来说，这三十年间创建软件是个噩梦。这是黑暗的年代。</p>\n<h3 id="the-rise-of-composable-software-1"><a href="#the-rise-of-composable-software-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Rise of Composable Software</h3>\n<p>2010年左右，一些伟大的事情开始发生了：JavaScript爆发了。大约 2006 年之前，JavaScript被广泛当作是一门玩具语言，用来在浏览器中创建卡通动漫，不过它有一些强大的特性被埋没了。那就是，最重要的 lambda 演算特性。人们开始暗中窃窃私语 “函数式编程” 的这种很酷的新东西。</p>\n<p>到了2015年，用函数组合来创建软件的理念再度流行。为让它更简单，JavaScript规范做了十年来第一次重大升级，并添加了箭头函数，而箭头函数让创建和读函数、柯里化以及lambda表达式变得更简单。</p>\n<p>箭头函数像函数式编程的火箭推进剂一样，在JavaScript中爆发。现在不大量使用函数式编程技术的大型应用程序已经很罕见了。</p>\n<p>组合是一种为软件的行为清晰建模的简单、优雅而富于表现力的方式。组合小的、确定性的函数，来创建更大的软件组件和功能的过程，会生成更容易组织、理解、调试、扩展、测试和维护的软件。</p>\n<p>在阅读后续的文章时，请用示例来实验。在学习时，请回忆孩童时代拆掉东西、探索和玩是什么感觉。重拾童年探索的欢乐。让我们来施点魔法吧。</p>',frontmatter:{title:"FP0：Rise and fall of functional programming",img:"./img/2017-12-16.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"July 15, 2017",path:"blog/functional/2017-07-16-FP0-functional-programming.md",slug:"/blog/2017/07/16/FP0-functional-programming.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"shell intro"},fields:{slug:"/blog/2021/06/02/shell-intro.html"}}},{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"Koa实现原理分析"},fields:{slug:"/blog/2021/02/06/koa.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}}]}},pathContext:{slug:"/blog/2017/07/16/FP0-functional-programming.html"}}}});