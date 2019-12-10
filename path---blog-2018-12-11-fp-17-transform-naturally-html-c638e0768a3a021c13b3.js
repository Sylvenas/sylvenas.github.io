webpackJsonp([0xf8b5d3a76f18],{517:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="令人生厌的嵌套"><a href="#%E4%BB%A4%E4%BA%BA%E7%94%9F%E5%8E%8C%E7%9A%84%E5%B5%8C%E5%A5%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>令人生厌的嵌套</h3>\n<p>我想要提出一个关于嵌套的问题。但不是那种马上会唤起老母亲整理打扫天性的那种问题，而是我们马上会在之后的章节中遇到的问题。在任何情况下，我所谓的<em>嵌套</em>是将不同的两个类型套在同一个值上，某种意义上，看上去就像一个全新的类型。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">Right</span><span class="token punctuation">(</span><span class="token function">Maybe</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token constant">IO</span><span class="token punctuation">(</span><span class="token function">Task</span><span class="token punctuation">(</span><span class="token constant">IO</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">[</span><span class="token function">Identity</span><span class="token punctuation">(</span><span class="token string">\'bee thousand\'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>现在，我们用一些精心制作的例证来说明仿佛我们已经能够摆脱这些常见的嵌套情形。但是实际上我们编码的时候，不同的类型就像耳机线一样乱成一团，仿佛一种恶魔召唤的邪恶产物。如果我们编码的时候不是一丝不苟地组织正在使用的类型，最后代码会比猫咪咖啡厅的披头族更加难以理解。</p>\n<h3 id="一场情景喜剧"><a href="#%E4%B8%80%E5%9C%BA%E6%83%85%E6%99%AF%E5%96%9C%E5%89%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一场情景喜剧</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// getValue :: Selector -> Task Error (Maybe String)</span>\n<span class="token comment">// postComment :: String -> Task Error Comment</span>\n<span class="token comment">// validate :: String -> Either ValidationError String</span>\n\n<span class="token comment">// saveComment :: () -> Task Error (Maybe (Either ValidationError (Task Error Comment)))</span>\n<span class="token keyword">const</span> saveComment <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>\n  <span class="token function">map</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span>postComment<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">map</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span>validate<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">\'#comment\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>让类型声明形同虚设的坏家伙们都在这里了。容我稍微解释一下这一段代码。一开始，用<code class="gatsby-code-text">getValue(&#39;#comment&#39;)</code>获取用户输入，这是一个<code class="gatsby-code-text">action</code>，从一个<code class="gatsby-code-text">element</code>中获取文本。但是可能会因为字符串值不存在而获取失败，从而返回<code class="gatsby-code-text">Task Error(Maybe String)</code>。在这之后，我们需要<code class="gatsby-code-text">map</code>所有<code class="gatsby-code-text">Task</code>和<code class="gatsby-code-text">Maybe</code>传递文本到<code class="gatsby-code-text">validate</code>。最后，我们不是得到<code class="gatsby-code-text">ValiadtionError</code>或者想要的<code class="gatsby-code-text">String</code>。然后，从过层层 map，把当前<code class="gatsby-code-text">Task Error(Maybe(Either ValidationError String))</code>中的<code class="gatsby-code-text">String</code>传入<code class="gatsby-code-text">postComment</code>，最后返回<code class="gatsby-code-text">Task</code>的结果。\n简直乱得骇人。一大堆抽象类型乱得像一幅业余表现主义的烂作，还混杂着波洛克式的多态，蒙德里安风的大统一。对于这种常见的情况，有许多解决方法。把这些类型编好弄成一个巨大的容器，分类后再<code class="gatsby-code-text">join</code>，将其同化，解构，等等。而重点，就在于通过 <em>Natural Transformations</em> 将他们同化。</p>\n<h3 id="全都很自然"><a href="#%E5%85%A8%E9%83%BD%E5%BE%88%E8%87%AA%E7%84%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>全都很自然</h3>\n<p><em>Natural Transformations</em>是“functor 之间的态射”，就是，一个操作容器本身的函数。类型上来说，它是个函数<code class="gatsby-code-text">(Functor f, Functor g) =&gt; f a -&gt; g a</code>。让这个函数特殊的是，在任何情况下，都不能得知 functor 中的内容。就像两个党派交换机密文件，都会把东西封在马尼拉纸信封里，戳上“最高机密”。这是一个结构上的操作。functor 外壳的变化。形式上，<em>Natural Transformations</em> 作用于如下功能：</p>\n<img width=600 src="images/natural_transformation.png" alt="natural transformation diagram" />\n<p>或者代码:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// nt :: (Functor f, Functor g) => f a -> g a</span>\n<span class="token function">compose</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">,</span> nt<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">compose</span><span class="token punctuation">(</span>nt<span class="token punctuation">,</span> <span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>两者都体现了同样的东西：我们可以先自然变换再<code class="gatsby-code-text">map</code>，或者先<code class="gatsby-code-text">map</code>再自然变换，结果都是一样的。顺便，在 <a href="ch7.md#free-as-in-theorem">free theorem</a> 中，也提到，自然变换不仅局限于函数和类型（以及 functor）。</p>\n<h3 id="有原则的类型转换"><a href="#%E6%9C%89%E5%8E%9F%E5%88%99%E7%9A%84%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>有原则的类型转换</h3>\n<p>作为程序员，我们对类型转换十分熟悉。我们经常把<code class="gatsby-code-text">String</code>转换成<code class="gatsby-code-text">Boolean</code>，或者<code class="gatsby-code-text">Integer</code> 转换成<code class="gatsby-code-text">Float</code>（虽然<code class="gatsby-code-text">JavaScript</code>只有<code class="gatsby-code-text">Number</code>）。这些类型之间的区别很简单，这些类型都是一些代数容器，我们手头有一些可以运用的理论。</p>\n<p>以下是一些例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// idToMaybe :: Identity a -> Maybe a</span>\n<span class="token keyword">const</span> <span class="token function-variable function">idToMaybe</span> <span class="token operator">=</span> x <span class="token operator">=></span> Maybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>$value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// idToIO :: Identity a -> IO a</span>\n<span class="token keyword">const</span> <span class="token function-variable function">idToIO</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token constant">IO</span><span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>$value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// eitherToTask :: Either a b -> Task a b</span>\n<span class="token keyword">const</span> eitherToTask <span class="token operator">=</span> <span class="token function">either</span><span class="token punctuation">(</span>Task<span class="token punctuation">.</span>rejected<span class="token punctuation">,</span> Task<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ioToTask :: IO a -> Task () a</span>\n<span class="token keyword">const</span> <span class="token function-variable function">ioToTask</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Task</span><span class="token punctuation">(</span><span class="token punctuation">(</span>reject<span class="token punctuation">,</span> resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">unsafePerform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// maybeToTask :: Maybe a -> Task () a</span>\n<span class="token keyword">const</span> <span class="token function-variable function">maybeToTask</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>isNothing <span class="token operator">?</span> Task<span class="token punctuation">.</span><span class="token function">rejected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> Task<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>$value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// arrayToMaybe :: [a] -> Maybe a</span>\n<span class="token keyword">const</span> <span class="token function-variable function">arrayToMaybe</span> <span class="token operator">=</span> x <span class="token operator">=></span> Maybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>看到了吗？这些只是从一个 functor 换到了另一个。在转换过程中的数据丢失是被允许的，只要要被<code class="gatsby-code-text">map</code>的数据在转换（shape shift shuffle）中不会消失即可。这就是重点，<code class="gatsby-code-text">map</code>必须以定义执行，就算在转换之后。</p>\n<p>从另一个角度来看，转换的是某个作用（effects）。由此可以认为，<code class="gatsby-code-text">ioToTask</code>就是从同步到异步的转换，和<code class="gatsby-code-text">arrayToMaybe</code>是从非确定性到可能失败。要注意的是，在<code class="gatsby-code-text">JavaScript</code> 里，并不能把异步变到同步，无法实现<code class="gatsby-code-text">taskToIO</code>方法，那是个”超自然”变换。</p>\n<h3 id="方法狂-feature-envy"><a href="#%E6%96%B9%E6%B3%95%E7%8B%82-feature-envy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>方法狂 Feature Envy</h3>\n<p>假设要使用一些其他类型的方法（feature），比如对一个<code class="gatsby-code-text">List</code>进行<code class="gatsby-code-text">sortBy</code>。<em>Natural Transformations</em> 提供了变换为目标类型的巧妙方式，只要该类型支持<code class="gatsby-code-text">map</code>操作。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// arrayToList :: [a] -> List a</span>\n<span class="token keyword">const</span> arrayToList <span class="token operator">=</span> List<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> doListyThings <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token function">sortBy</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">filter</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">,</span> arrayToList<span class="token punctuation">,</span> <span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> doListyThings_ <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token function">sortBy</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">filter</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">,</span> arrayToList<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// law applied</span></code></pre>\n      </div>\n<p>捏一把鼻子，颠三下魔杖，放进<code class="gatsby-code-text">arrayToList</code>，当当当当，<code class="gatsby-code-text">[a]</code>变成了<code class="gatsby-code-text">List a</code>，甚至还可以对其<code class="gatsby-code-text">sortBy</code>。</p>\n<p>此外，如<code class="gatsby-code-text">doListyThings_</code>所示，将映射操作<code class="gatsby-code-text">map(f)</code>移到 <em>Natural Transformations</em> 的左边，更加容易实现函数的优化或者复合。</p>\n<h3 id="同构的-javascript-isomorphic-javascript"><a href="#%E5%90%8C%E6%9E%84%E7%9A%84-javascript-isomorphic-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>同构的 JavaScript Isomorphic JavaScript</h3>\n<p>当把一个值前后怎么转换都不会丢失任何数据时，可称之为 <em>同构 Isomorphic</em> 。看上去挺高大上，不过就是“保持相同的数据”而已。如果两个类型在 <em>Natural Transformations</em> 中既可以<code class="gatsby-code-text">to</code>也可以<code class="gatsby-code-text">from</code> ，就被称之为是 <em>同构 Isomorphic</em> ，证明如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// promiseToTask :: Promise a b -> Task a b</span>\n<span class="token keyword">const</span> <span class="token function-variable function">promiseToTask</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Task</span><span class="token punctuation">(</span><span class="token punctuation">(</span>reject<span class="token punctuation">,</span> resolve<span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>reject<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// taskToPromise :: Task a b -> Promise a b</span>\n<span class="token keyword">const</span> <span class="token function-variable function">taskToPromise</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> x<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span>reject<span class="token punctuation">,</span> resolve<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> x <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'ring\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">taskToPromise</span><span class="token punctuation">(</span><span class="token function">promiseToTask</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> x<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> y <span class="token operator">=</span> Task<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">\'rabbit\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">promiseToTask</span><span class="token punctuation">(</span><span class="token function">taskToPromise</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> y<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>证毕。</p>\n<p><code class="gatsby-code-text">Promise</code>与<code class="gatsby-code-text">Task</code>是 <em>同构 Isomorphic</em> 。也可以实现方法<code class="gatsby-code-text">listToArray</code>使之与<code class="gatsby-code-text">arrayToList</code>构成  <em>同构Isomorphism</em>。反之，与 <code class="gatsby-code-text">arrayToMaybe</code>无法 <em>同构 Isomorphism</em>，因为转换时有数据丢失。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// maybeToArray :: Maybe a -> [a]</span>\n<span class="token keyword">const</span> <span class="token function-variable function">maybeToArray</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>isNothing <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span>x<span class="token punctuation">.</span>$value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// arrayToMaybe :: [a] -> Maybe a</span>\n<span class="token keyword">const</span> <span class="token function-variable function">arrayToMaybe</span> <span class="token operator">=</span> x <span class="token operator">=></span> Maybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'elvis costello\'</span><span class="token punctuation">,</span> <span class="token string">\'the attractions\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 不 isomorphic</span>\n<span class="token function">maybeToArray</span><span class="token punctuation">(</span><span class="token function">arrayToMaybe</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [\'elvis costello\']</span>\n\n<span class="token comment">// 但是是一个 natural transformation</span>\n<span class="token function">compose</span><span class="token punctuation">(</span>arrayToMaybe<span class="token punctuation">,</span> <span class="token function">map</span><span class="token punctuation">(</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'elvis\'</span><span class="token punctuation">,</span> <span class="token string">\'lou\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Just(\'lou costello\')</span>\n<span class="token comment">// ==</span>\n<span class="token function">compose</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'elvis\'</span><span class="token punctuation">,</span> <span class="token string">\'lou\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arrayToMaybe<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Just(\'lou costello\')</span></code></pre>\n      </div>\n<p>这就是 <em>Natural Transformations</em>，然而，因为两边的<code class="gatsby-code-text">map</code>都得到相同的结果。行文到本章的一半，似乎已经将 <em>Isomorphic</em> 说的差不多了，但是可别被这些表象所迷惑，真正的 <em>Isomorphic</em> 比我们想象的要广泛，有用的多。话不多说，让我们继续。</p>\n<h3 id="更加宽泛的定义"><a href="#%E6%9B%B4%E5%8A%A0%E5%AE%BD%E6%B3%9B%E7%9A%84%E5%AE%9A%E4%B9%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更加宽泛的定义</h3>\n<p>这些结构函数绝不仅仅局限于类型转换。\n以下是一些不同的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">reverse <span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token punctuation">[</span>a<span class="token punctuation">]</span>\n\njoin <span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>Monad m<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">m</span> <span class="token punctuation">(</span>m a<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> m a\n\nhead <span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">-</span><span class="token operator">></span> a\n\n<span class="token keyword">of</span> <span class="token punctuation">:</span><span class="token punctuation">:</span> a <span class="token operator">-</span><span class="token operator">></span> f a</code></pre>\n      </div>\n<p>Natural Transformations 的法则同样适用于上述方法。其中可能让你有点疑惑的是，<code class="gatsby-code-text">head :: [a] -&gt; a</code>可以被看做成<code class="gatsby-code-text">head :: [a] -&gt; Identity a</code>。在其中的任何地方，都可以插入<code class="gatsby-code-text">Identity</code>，因为<code class="gatsby-code-text">a</code>与<code class="gatsby-code-text">Identity a</code>为 Isomorphic。（看，我说过 <em>Isomorphic</em> 用途很广泛吧）</p>\n<h3 id="实现单层嵌套的方法"><a href="#%E5%AE%9E%E7%8E%B0%E5%8D%95%E5%B1%82%E5%B5%8C%E5%A5%97%E7%9A%84%E6%96%B9%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>实现单层嵌套的方法</h3>\n<p>回到之前的场景。在其中试试 <em>Natural Transformations</em>，使调用中的各个类型统一化，从而可以将函数<code class="gatsby-code-text">join</code>起来。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// getValue :: Selector -> Task Error (Maybe String)</span>\n<span class="token comment">// postComment :: String -> Task Error Comment</span>\n<span class="token comment">// validate :: String -> Either ValidationError String</span>\n\n<span class="token comment">// saveComment :: () -> Task Error Comment</span>\n<span class="token keyword">const</span> saveComment <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>\n  <span class="token function">chain</span><span class="token punctuation">(</span>postComment<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">chain</span><span class="token punctuation">(</span>eitherToTask<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">map</span><span class="token punctuation">(</span>validate<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">chain</span><span class="token punctuation">(</span>maybeToTask<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">\'#comment\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>这里具体的操作仅仅加入了<code class="gatsby-code-text">chain(maybeToTask)</code>和<code class="gatsby-code-text">chain(eigherToTack)</code>。都是同样的效果。在<code class="gatsby-code-text">join</code>时很自然的将<code class="gatsby-code-text">Task</code>的 functor 转换到另一个<code class="gatsby-code-text">Task</code>的 functor。就像窗边的尖刺驱鸟器，从源头扼杀了嵌套。就像他们巴黎（city of the light）人说的：“Mieux vaut prévenir que guérir” - 花一英镑去治疗不如花一盎司用于预防。</p>\n<h3 id="小结"><a href="#%E5%B0%8F%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>小结</h3>\n<p><em>Natural Transformations</em>是操作 functor 的方法。在范畴学中是非常重要的概念，特别是采用多种抽象化机制时，就会用的更多。上述例子，仅仅局限于几个具体的应用中。如上文所言，只要转换类型时,确保可组合性，即可以实现所需要的不同作用 effects。同时可以解决嵌套问题，虽然会将类型同化到最低的共同母类（lowest common denominator），在实际应用中，一般是作用最易变的函子（通常是<code class="gatsby-code-text">Task</code> ）（functor with most volatile effects）。</p>\n<p>这种连续而冗长的类型是实现的代价 - 从以太中召唤而来。当然，隐式作用（implicit effects）更有潜在风险，所以也算是合理的方案。不过,如果想归并大量类型，还需要更多的工具。之后，我们将通过 <em>Traverable</em> 讨论重组类型。</p>',frontmatter:{title:"FP17：Transform Naturally",img:"./img/2018-12-11.jpeg",author:["Sylvenas"],excerpt:"我想要提出一个关于嵌套的问题。但不是那种马上会唤起老母亲整理打扫天性的那种问题，而是我们马上会在之后的章节中遇到的问题...",catalogue:null},fields:{date:"December 10, 2018",path:"blog/functional/2018-12-11-FP17-Transform-Naturally.md",slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}},{node:{frontmatter:{title:"移动端开发基础知识"},fields:{slug:"/blog/2019/05/24/mobile.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"
},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}}]}},pathContext:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}}});