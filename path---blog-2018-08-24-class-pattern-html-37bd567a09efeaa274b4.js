webpackJsonp([0xe935c8abb960],{543:function(s,n){s.exports={data:{markdownRemark:{html:'<h3 id="oop"><a href="#oop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>oop</h3>\n<p>面向对象编程强调的是数据和操作数据的行为本质上是相互关联的(当然，不同的数据有不同的行为)，因此好的设计就是把数据以及和它相关的行为打包(封装)起来，这在正是的计算机科学中有时候被称为数据结构。</p>\n<p>举例来说：用来表示一个单词或者短语的<code class="gatsby-code-text">一串字符通</code>常被称为字符串。字符就是<code class="gatsby-code-text">数据</code>。但是你关心的往往不是<code class="gatsby-code-text">数据是什么</code>，而是<code class="gatsby-code-text">可以对数据做什么</code>，所以可以应用在这种数据上的行为(计算长度、添加数据、搜索，等等)都被设计成<code class="gatsby-code-text">String</code>类的方法。</p>\n<p>所有字符串都是<code class="gatsby-code-text">String</code>类的一个实例，也就是说它是一个包裹，包含字符数据和我们可以 应用在数据上的函数。</p>\n<p>我们来看一个常见的例子，“汽车”可以被看作“交通工具”的一种特例，后者是更广泛的类。</p>\n<p>我们可以在软件中定义一个<code class="gatsby-code-text">Vehicle</code>类和一个<code class="gatsby-code-text">Car</code>类来对这种关系进行建模。\n<code class="gatsby-code-text">Vehicle</code>的定义可能包含推进器(比如引擎)、载人能力等等，这些都是<code class="gatsby-code-text">Vehicle</code>的行为。我们在<code class="gatsby-code-text">Vehicle</code>中定义的是(几乎)所有类型的交通工具(飞机、火车和汽车)都包含的东西。\n在我们的软件中，对不同的交通工具重复定义“载人能力”是没有意义的。相反，我们只在<code class="gatsby-code-text">Vehicle</code>中定义一次，定义<code class="gatsby-code-text">Car</code>时，只要声明它<code class="gatsby-code-text">继承</code>(或者扩展)了<code class="gatsby-code-text">Vehicle</code>的这个基础定义就行。<code class="gatsby-code-text">Car</code>的定义就是对通用<code class="gatsby-code-text">Vehicle</code>定义的特殊化。\n虽然<code class="gatsby-code-text">Vehicle</code>和<code class="gatsby-code-text">Car</code>会定义相同的方法，但是实例中的数据可能是不同的，比如每辆车独一无二的 VIN(Vehicle Identification Number，车辆识别号码)，等等。</p>\n<p>这就是<code class="gatsby-code-text">类</code>、<code class="gatsby-code-text">继承</code>和<code class="gatsby-code-text">实例化</code>。\n类的另一个核心概念是<code class="gatsby-code-text">多态</code>，这个概念是说父类的通用行为可以被子类<code class="gatsby-code-text">用更特殊的行为重写</code>。实际上，相对多态性允许我们从重写行为中引用基础行为。</p>\n<p>类理论强烈建议父类和子类使用相同的方法名来表示特定的行为，从而让子类重写父类。</p>\n<p>总结一下经典的面向对象编程的思维导图：\n<img src="../images/oop.png" alt="oop"></p>\n<h3 id="类与实例"><a href="#%E7%B1%BB%E4%B8%8E%E5%AE%9E%E4%BE%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>类与实例</h3>\n<p>举例来说类和实例的关系，服装设计师会设计好每个服装的模型，包括领口多款，袖子多长，等等模版；设计师并不关心他设计的模版衣服会在哪里生产，会生产多少件。</p>\n<p>而生产厂家拿到了衣服的模版之后，就会让工人来批量生产衣服。</p>\n<p>那么生产完成之后的具体的每一件衣服。也就是模版的一份物理实例，本质上就是对模版的复制。</p>\n<p>一个类就是一个模版。为了获得真正可以交互的对象，我们必须按照类来建造(也可以说<code class="gatsby-code-text">实例化</code>)一个东西，这个东西通常被称为<code class="gatsby-code-text">实例</code>，有需要的话，我们可以直接在实例上调用方法并访问其所有公有数据属性。\n这个对象就是类中描述的所有特性的一份副本。</p>\n<h3 id="构造函数"><a href="#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>构造函数</h3>\n<p>类实例是由一个特殊的类方法构造的，这个方法名通常和类名相同，被称为构造函数。这\n个方法的任务就是初始化实例需要的所有信息(状态)。 举例来说，思考下面这个关于类的伪代码(编造出来的语法):</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">CoolGuy</span> <span class="token punctuation">{</span>\n  specialTrick <span class="token operator">=</span> nothing\n  <span class="token function">CoolGuy</span><span class="token punctuation">(</span> trick <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    specialTrick <span class="token operator">=</span> trick\n<span class="token punctuation">}</span>\n  <span class="token function">showOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">output</span><span class="token punctuation">(</span> <span class="token string">"Here\'s my trick: "</span><span class="token punctuation">,</span> specialTrick <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>我们可以调用类构造函数来生成一个<code class="gatsby-code-text">CoolGuy</code>实例:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Joe <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CoolGuy</span><span class="token punctuation">(</span> <span class="token string">"jumping rope"</span> <span class="token punctuation">)</span>\nJoe<span class="token punctuation">.</span><span class="token function">showOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 这是我的绝技:跳绳</span></code></pre>\n      </div>\n<p>注意，<code class="gatsby-code-text">CoolGuy</code>类有一个<code class="gatsby-code-text">CoolGuy()</code>构造函数，执行<code class="gatsby-code-text">new</code>它。构造函数会返回一个对象(也就是类的一个实例)，之后我们可以在这个对象上调用<code class="gatsby-code-text">showOff()</code>方法，来输出指定 <code class="gatsby-code-text">CoolGuy</code>的特长。\n类构造函数属于类，而且通常和类同名。此外，构造函数大多需要用<code class="gatsby-code-text">new</code>来调，这样语言引擎才知道你想要构造一个新的类实例。</p>\n<h3 id="类的继承"><a href="#%E7%B1%BB%E7%9A%84%E7%BB%A7%E6%89%BF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>类的继承</h3>\n<p>在面向类的语言中，你可以先定义一个类，然后定义一个继承前者的类。\n后者通常被称为“子类”，前者通常被称为“父类”。这些术语显然是类比父母和孩子，不过在意思上稍有扩展，你很快就会看到。\n对于父母的亲生孩子来说，父母的基因特性会被复制给孩子。显然，在大多数生物的繁殖系统中，双亲都会贡献等量的基因给孩子。但是在编程语言中，我们假设只有一个父类。\n一旦孩子出生，他们就变成了单独的个体。虽然孩子会从父母继承许多特性，但是他是一个独一无二的存在。如果孩子的头发是红色，父母的头发未必是红的，也不会随之变红，二者之间没有直接的联系。</p>\n<p>同理，定义好一个子类之后，相对于父类来说它就是一个独立并且完全不同的类。子类会包含父类行为的原始副本，但是也可以重写所有继承的行为甚至定义新行为。\n非常重要的一点是，我们讨论的父类和子类并不是实例。父类和子类的比喻容易造成一些误解，实际上我们应当把父类和子类称为父类 DNA 和子类 DNA。我们需要根据这些 DNA 来创建(或者说实例化)一个人，然后才能和他进行沟通。</p>\n<p>好了，我们先抛开现实中的父母和孩子，来看一个稍有不同的例子:不同类型的交通工具。这是一个非常典型(并且经常被抱怨)的讲解继承的例子。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>\n  engines <span class="token operator">=</span> <span class="token number">1</span>\n  <span class="token function">ignition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">output</span><span class="token punctuation">(</span><span class="token string">"Turning on my engine."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">ignition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">output</span><span class="token punctuation">(</span><span class="token string">"Steering and moving forward!"</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Car</span> inherits Vehicle <span class="token punctuation">{</span>\n  wheels <span class="token operator">=</span> <span class="token number">4</span>\n  <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    inherited<span class="token punctuation">:</span> <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">output</span><span class="token punctuation">(</span><span class="token string">"Rolling on all "</span><span class="token punctuation">,</span> wheels<span class="token punctuation">,</span> <span class="token string">" wheels!"</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">SpeedBoat</span> inherits Vehicle <span class="token punctuation">{</span>\n  engines <span class="token operator">=</span> <span class="token number">2</span>\n  <span class="token function">ignition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">output</span><span class="token punctuation">(</span><span class="token string">"Turning on my "</span><span class="token punctuation">,</span> engines<span class="token punctuation">,</span> <span class="token string">" engines."</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">pilot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    inherited<span class="token punctuation">:</span> <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">output</span><span class="token punctuation">(</span><span class="token string">"Speeding through the water with ease!"</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>我们通过定义<code class="gatsby-code-text">Vehicle</code>类来假设一种发动机，一种点火方式，一种驾驶方法。但是你不可 能制造一个通用的“交通工具”，因为这个类只是一个抽象的概念。\n接下来我们定义了两类具体的交通工具:<code class="gatsby-code-text">Car</code>和<code class="gatsby-code-text">SpeedBoat</code>。它们都从<code class="gatsby-code-text">Vehicle</code>继承了通用的特性并根据自身类别修改了某些特性。汽车需要四个轮子，快艇需要两个发动机，因此 它必须启动两个发动机的点火装置。</p>\n<h4 id="多态"><a href="#%E5%A4%9A%E6%80%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>多态</h4>\n<p><code class="gatsby-code-text">Car</code>重写了继承自父类的<code class="gatsby-code-text">drive()</code>方法，但是之后<code class="gatsby-code-text">Car</code>调用了<code class="gatsby-code-text">inherited:drive(</code>)方法， 这表明<code class="gatsby-code-text">Car</code>可以引用继承来的原始<code class="gatsby-code-text">drive()</code>方法。快艇的<code class="gatsby-code-text">pilot()</code>方法同样引用了原始<code class="gatsby-code-text">drive()</code>方法。\n这个技术被称为多态或者虚拟多态。在本例中，更恰当的说法是相对多态。\n多态是一个非常广泛的话题，我们现在所说的“相对”只是多态的一个方面:任何方法都\n可以引用继承层次中高层的方法(无论高层的方法名和当前方法名是否相同)。之所以说 “相对”是因为我们并不会定义想要访问的绝对继承层次(或者说类)，而是使用相对引用 “查找上一层”。\n在许多语言中可以使用<code class="gatsby-code-text">super</code>来代替本例中的 inherited:，它的含义是“超类” (superclass)，表示当前类的父类/祖先类。\n多态的另一个方面是，在继承链的不同层次中一个方法名可以被多次定义，当调用方法时 会自动选择合适的定义。\n在之前的代码中就有两个这样的例子:drive() 被定义在<code class="gatsby-code-text">Vehicle</code>和<code class="gatsby-code-text">Car</code>中，<code class="gatsby-code-text">ignition()</code>被定义在<code class="gatsby-code-text">Vehicle</code>和<code class="gatsby-code-text">SpeedBoat</code>中。</p>\n<h3 id="maxin"><a href="#maxin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>maxin</h3>\n<p>上面是描述的经典的面向对象编程中的基本的概念以及特征。</p>\n<blockquote>\n<p>我个人认为更应该叫面向类编程，而JavaScript才是真正的面向对象编程，JavaScript中只有对象而没有类的概念,并且可以不通过类就能直接创建对象。</p>\n</blockquote>\n<p>在继承或者实例化时，JavaScript的对象机制并不会自动执行复制行为。简单来说,JavaScript中只有对象，并不存在可以被实例化的“类”。一个对象并不会被复制到其他对象，它们会被<code class="gatsby-code-text">关联</code>起来。</p>\n<p>由于在其他语言中类表现出来的都是复制行为，因此JavaScript开发者也想出了一个方法来模拟类的复制行为，这个方法就是混入。接下来我们会看到两种类型的混入:显式和隐式。</p>\n<h4 id="显式混入"><a href="#%E6%98%BE%E5%BC%8F%E6%B7%B7%E5%85%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>显式混入</h4>\n<p>首先我们来回顾一下之前提到的<code class="gatsby-code-text">Vehicle</code>和<code class="gatsby-code-text">Car</code>。由于<code class="gatsby-code-text">JavaScript</code>不会自动实现<code class="gatsby-code-text">Vehicle</code>到<code class="gatsby-code-text">Car</code>的复制行为，所以我们需要手动实现复制功能。这个功能在许多库和框架中被称为<code class="gatsby-code-text">extend(..)</code>，但是为了方便理解我们称之为<code class="gatsby-code-text">mixin(..)</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 非常简单的 mixin(..) 例子 :</span>\n<span class="token keyword">function</span> <span class="token function">mixin</span><span class="token punctuation">(</span>sourceObj<span class="token punctuation">,</span> targetObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> sourceObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 只会在不存在的情况下复制</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> targetObj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      targetObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> sourceObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> targetObj<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> Vehicle <span class="token operator">=</span> <span class="token punctuation">{</span>\n  engines<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  ignition<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Turning on my engine."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  drive<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">ignition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Steering and moving forward!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Car <span class="token operator">=</span> <span class="token function">mixin</span><span class="token punctuation">(</span>Vehicle<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  wheels<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n  drive<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Vehicle<span class="token punctuation">.</span>drive<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n      <span class="token string">"Rolling on all "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>wheels <span class="token operator">+</span> <span class="token string">" wheels!"</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<blockquote>\n<p>有一点需要注意，我们处理的已经不再是类了，因为在 JavaScript 中不存在 类，Vehicle 和 Car 都是对象，供我们分别进行复制和粘贴。</p>\n</blockquote>\n<p>现在<code class="gatsby-code-text">Car</code>中就有了一份<code class="gatsby-code-text">Vehicle</code>属性和函数的副本了。从技术角度来说，函数实际上没有被复制，复制的是函数引用。所以，<code class="gatsby-code-text">Car</code>中的属性<code class="gatsby-code-text">ignition</code>只是从<code class="gatsby-code-text">Vehicle</code>中复制过来的对于<code class="gatsby-code-text">ignition()</code>函数的引用。相反，属性<code class="gatsby-code-text">engines</code> 就是直接从<code class="gatsby-code-text">Vehicle</code>中复制了值 1。\n<code class="gatsby-code-text">Car</code>已经有了<code class="gatsby-code-text">drive</code>属性(函数)，所以这个属性引用并没有被<code class="gatsby-code-text">mixin</code>重写，从而保留了<code class="gatsby-code-text">Car</code>中定义的同名属性，实现了“子类”对“父类”属性的重写(参见 mixin(..) 例子中 的 if 语句)。</p>\n<h4 id="显式多态"><a href="#%E6%98%BE%E5%BC%8F%E5%A4%9A%E6%80%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>显式多态</h4>\n<p>我们来分析一下这条语句:<code class="gatsby-code-text">Vehicle.drive.call(this)</code>。这就是我所说的显式多态。还记得吗，在之前的伪代码中对应的语句是<code class="gatsby-code-text">inherited:drive()</code>，我们称之为<code class="gatsby-code-text">相对多态</code>。\nJavaScript(在 ES6之前;参见附录A)并没有相对多态的机制。所以，由于<code class="gatsby-code-text">Car</code>和<code class="gatsby-code-text">Vehicle</code>中都有<code class="gatsby-code-text">drive()</code>函数，为了指明调用对象，我们必须使用绝对(而不是相对)引 用。我们通过名称显式指定<code class="gatsby-code-text">Vehicle</code>对象并调用它的<code class="gatsby-code-text">drive()</code>函数。\n但是如果直接执行<code class="gatsby-code-text">Vehicle.drive()</code>，函数调用中的<code class="gatsby-code-text">this</code>会被绑定到<code class="gatsby-code-text">Vehicle</code>对象而不是<code class="gatsby-code-text">Car</code>对象，这并不是我们想要的。因此，我们会使用<code class="gatsby-code-text">.call(this)</code>来确保 drive() 在<code class="gatsby-code-text">Car</code>对象的上下文中执行。</p>\n<p>复制操作完成后，<code class="gatsby-code-text">Car</code>就和<code class="gatsby-code-text">Vehicle</code>分离了，向<code class="gatsby-code-text">Car</code>中添加属性不会影响<code class="gatsby-code-text">Vehicle</code>，反之亦然。</p>\n<blockquote>\n<p>这里跳过了一些小细节，实际上，在复制完成之后两者之间仍然有一些巧妙 的方法可以“影响”到对方，例如引用同一个对象(比如一个数组)。</p>\n</blockquote>\n<p>由于两个对象引用的是同一个函数，因此这种复制(或者说混入)实际上并不能完全模拟面向类的语言中的复制。\nJavaScript中的函数无法(用标准、可靠的方法)真正地复制，所以你只能复制对共享函数对象的引用(函数就是对象,只不过是可调用的对象)。如果你修改了共享的函数对象(比如 ignition())，比如添加了一个属性，那<code class="gatsby-code-text">Vehicle</code>和<code class="gatsby-code-text">Car</code>都会受到影响。\n显式混入是JavaScript中一个很棒的机制，不过它的功能也没有看起来那么强大。虽然它可以把一个对象的属性复制到另一个对象中，但是这其实并不能带来太多的好处，无非就是少几条定义语句，而且还会带来我们刚才提到的函数对象引用问题。</p>\n<p>在支持相对多态的面向类的语言中，<code class="gatsby-code-text">Car</code>和<code class="gatsby-code-text">Vehicle</code>之间的联系只在类定义的开头被创建,从而只需要在这一个地方维护两个类的联系。</p>\n<p>但是在JavaScript中(由于屏蔽)使用显式伪多态会在所有需要使用(伪)多态引用的地 方创建一个函数关联，这会极大地增加维护成本。此外，由于显式伪多态可以模拟多重继承，所以它会进一步增加代码的复杂度和维护难度。\n使用伪多态通常会导致代码变得更加复杂、难以阅读并且难以维护，因此应当尽量避免使 用显式伪多态，因为这样做往往得不偿失。</p>\n<h3 id="solution"><a href="#solution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>solution</h3>\n<p>类是一种设计模式。许多语言提供了对于面向类软件设计的原生语法。JavaScript也有类似的语法，但是和其他语言中的类完全不同。</p>\n<p>类意味着复制。</p>\n<p>传统的类被实例化时，它的行为会被复制到实例中。类被继承时，行为也会被复制到子类中。</p>\n<p>多态(在继承链的不同层次名称相同但是功能不同的函数)看起来似乎是从子类引用父类，但是本质上引用的其实是复制的结果。</p>\n<p>JavaScript并不会(像类那样)自动创建对象的副本。</p>\n<p>混入模式可以用来模拟类的复制行为，但是通常会产生丑陋并且脆弱的语法，比如显式伪多态<code class="gatsby-code-text">(OtherObj.methodName.call(this, ...))</code>，这会让代码更加难懂并且难以维护。</p>\n<p>此外，显式混入实际上无法完全模拟类的复制行为，因为对象(和函数!别忘了函数也 是对象)只能复制引用，无法复制被引用的对象或者函数本身。忽视这一点会导致许多问题。\n总地来说，在<code class="gatsby-code-text">JavaScript</code>中模拟类是得不偿失的，虽然能解决当前的问题，但是可能会埋下更多的隐患。</p>',frontmatter:{title:"'类'模式",img:"./img/2018-01-16.jpeg",author:["Sylvenas"],excerpt:"面向对象编程强调的是数据和操作数据的行为本质上是相互关联的(当然，不同的数据有不同的行为)，因此好的设计就是把数据以及和它相关的行为打包(封装)起来，这在正是的计算机科学中有时候被称为数据结构...",catalogue:null},fields:{date:"August 23, 2018",path:"blog/javascript/2018-08-24-class-pattern.md",slug:"/blog/2018/08/24/class-pattern.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}}]}},pathContext:{slug:"/blog/2018/08/24/class-pattern.html"}}}});