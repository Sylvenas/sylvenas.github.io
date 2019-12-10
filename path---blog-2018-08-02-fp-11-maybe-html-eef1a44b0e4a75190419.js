webpackJsonp([0xd949506db49],{508:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="schrödingers-maybe"><a href="#schr%C3%B6dingers-maybe" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Schrödinger’s Maybe</h3>\n<p><img src="../images/cat.png" alt="Schrödinger&#x27;s Maybe"></p>\n<p>说实话上一章讲解的<code class="gatsby-code-text">Box</code> functor挺无聊的，通常我们称它为<code class="gatsby-code-text">Identity</code>，与<code class="gatsby-code-text">id</code>函数的作用相同（这里也是有数学上的联系的，我们会在适当时候加以说明）。除此之外，还有另外一种 functor，那就是实现了 map 函数的类似容器的数据类型，这种 functor 在调用 map 的时候能够提供非常有用的行为。现在让我们来定义一个这样的 functor。</p>\n<p>Maybe Monad侧重于有效整合null-判断逻辑。Maybe是一个包含两个具体子类型的空类型(标记类型)</p>\n<ul>\n<li>Just(value)  — 表示值的容器</li>\n<li>Nothing() — 表示要么没有值或者没有失败的附加信息，当然还可以应用函数到Nothing上</li>\n</ul>\n<p>这些字类型实现了<code class="gatsby-code-text">Identity</code> Functor的全部属性和方法，并且附加了一些独特的行为。Maybe的实现如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Maybe</span> <span class="token punctuation">{</span>                        <span class="token comment">// 容器类型(父类)</span>\n    <span class="token keyword">static</span> <span class="token function">just</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Just</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">static</span> <span class="token function">nothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Nothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">static</span> <span class="token keyword">of</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>     <span class="token comment">// 由一个可为空的类型创建Maybe(即构造函数)</span>\n        <span class="token keyword">return</span> a <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> Maybe<span class="token punctuation">.</span><span class="token function">just</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">:</span> Maybe<span class="token punctuation">.</span><span class="token function">nothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">get</span> <span class="token function">isJust</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">get</span> <span class="token function">isNothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Just 子类型用于处理存在的值</span>\n<span class="token keyword">class</span> <span class="token class-name">Just</span> <span class="token keyword">extends</span> <span class="token class-name">Maybe</span> <span class="token punctuation">{</span>       \n    <span class="token function">constructor</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$value <span class="token operator">=</span> val\n    <span class="token punctuation">}</span>\n    <span class="token function">map</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> Maybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$value<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 将映射函数作用于Just,变换其中的值，并存储回容器内</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">filter</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        Maybe<span class="token punctuation">.</span><span class="token function">fromNullable</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$value<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$value <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// filter值</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">getOrElse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// Monad提供默认的一元操作符，用于从中获取其值</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$value\n    <span class="token punctuation">}</span>\n    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$value\n    <span class="token punctuation">}</span>\n    <span class="token keyword">get</span> <span class="token function">isJust</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">inspect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`Maybe.Just(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>$value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Nothing子类型用于为无值的情况提供保护</span>\n<span class="token keyword">class</span> <span class="token class-name">Nothing</span> <span class="token keyword">extends</span> <span class="token class-name">Maybe</span> <span class="token punctuation">{</span>\n    <span class="token function">map</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">getOrElse</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// 忽略值返回other</span>\n        <span class="token keyword">return</span> other\n    <span class="token punctuation">}</span>\n    <span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$value\n    <span class="token punctuation">}</span>\n    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>     <span class="token comment">// 任何试图直接从Nothing类型中取值的操作都会引发表征错误的信息</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">\'Can’t extract the value of a nothing\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">get</span> <span class="token function">isNothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">inspect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`Maybe.Nothing`</span></span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">Maybe</code>看起来跟<code class="gatsby-code-text">Box</code>非常类似，但是有一点不同：<code class="gatsby-code-text">Maybe</code>会先检查自己的值是否为空，然后才调用传进来的函数。这样我们在使用<code class="gatsby-code-text">map</code>的时候就能避免恼人的空值了,因为再是空值的情况下，我们根本不会执行传递给map的映射函数，而是直接<code class="gatsby-code-text">return this</code>（注意这个实现出于教学目的做了简化）。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Maybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">"Malkovich Malkovich"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/a/ig</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//=> Maybe([\'a\', \'a\'])</span>\n\nMaybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/a/ig</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//=> Maybe(null)</span>\n\nMaybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"Boris"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//=> Maybe(null)</span>\n\nMaybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"Dinah"</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//=> Maybe(24)</span></code></pre>\n      </div>\n<p>注意看，当传给<code class="gatsby-code-text">map</code>的值是<code class="gatsby-code-text">null</code>时，代码并没有爆出错误。这是因为每一次<code class="gatsby-code-text">Maybe</code>要调用函数的时候，都会先检查它自己的值是否为空。</p>\n<p>这种点记法（dot notation syntax）已经足够函数式了，但是正如在第 1 部分指出的那样，我们更想保持一种 pointfree 的风格。碰巧的是，map 完全有能力以 curry 函数的方式来“代理”任何 functor：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// map :: Functor f => (a -> b) -> f a -> f b</span>\n<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> anyFunctor<span class="token punctuation">)</span> <span class="token operator">=></span> anyFunctor<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>这样我们就可以像平常一样使用组合，同时也能正常使用 <code class="gatsby-code-text">map</code> 了，非常振奋人心。<code class="gatsby-code-text">ramda</code>的<code class="gatsby-code-text">map</code>也是这样。后面的章节中，我们将在点记法更有教育意义的时候使用点记法，在方便使用<code class="gatsby-code-text">pointfree</code>模式的时候就用 <code class="gatsby-code-text">pointfree</code>。你注意到了么？我在类型标签中偷偷引入了一个额外的标记：<code class="gatsby-code-text">Functor f =&gt;</code>。这个标记告诉我们<code class="gatsby-code-text">f</code>必须是一个<code class="gatsby-code-text">functor</code>。没什么复杂的，但我觉得有必要提一下。</p>\n<h3 id="use-cases"><a href="#use-cases" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use Cases</h3>\n<p>实际当中，<code class="gatsby-code-text">Maybe</code>最常用在那些可能会无法成功返回结果的函数中，例如：查询数据库、在集合中查找、从服务器返回数据等</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// safeHead :: [a] -> Maybe(a)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">safeHead</span> <span class="token operator">=</span> xs <span class="token operator">=></span> Maybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span>xs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// streetName :: Object -> Maybe String</span>\n<span class="token keyword">const</span> streetName <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'street\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> safeHead<span class="token punctuation">,</span> <span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'addresses\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">streetName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> addresses<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Nothing</span>\n\n<span class="token function">streetName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> addresses<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> street<span class="token punctuation">:</span> <span class="token string">\'Shady Ln.\'</span><span class="token punctuation">,</span> number<span class="token punctuation">:</span> <span class="token number">4201</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Just(\'Shady Ln.\')</span></code></pre>\n      </div>\n<p>safeHead 与一般的 _.head 类似，但是增加了类型安全保证。引入 Maybe 会发生一件非常有意思的事情，那就是我们被迫要与狡猾的 null 打交道了。safeHead 函数能够诚实地预告它可能的失败——失败真没什么可耻的——然后返回一个 Maybe 来通知我们相关信息。实际上不仅仅是通知，因为毕竟我们想要的值深藏在 Maybe 对象中，而且只能通过 map 来操作它。本质上，这是一种由 safeHead 强制执行的空值检查。有了这种检查，我们才能在夜里安然入睡，因为我们知道最不受人待见的 null 不会突然出现。类似这样的 API 能够把一个像纸糊起来的、脆弱的应用升级为实实在在的、健壮的应用，这样的 API 保证了更加安全的软件。</p>\n<p>有时候函数可以明确返回一个 Maybe(null) 来表明失败，例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// withdraw :: Number -> Account -> Maybe(Account)</span>\n<span class="token keyword">const</span> withdraw <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>amount<span class="token punctuation">,</span> <span class="token punctuation">{</span> balance <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n  Maybe<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span>balance <span class="token operator">>=</span> amount <span class="token operator">?</span> <span class="token punctuation">{</span> balance<span class="token punctuation">:</span> balance <span class="token operator">-</span> amount <span class="token punctuation">}</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This function is hypothetical, not implemented here... nor anywhere else.</span>\n<span class="token comment">// updateLedger :: Account -> Account </span>\n<span class="token keyword">const</span> <span class="token function-variable function">updateLedger</span> <span class="token operator">=</span> account <span class="token operator">=></span> account<span class="token punctuation">;</span>\n\n<span class="token comment">// remainingBalance :: Account -> String</span>\n<span class="token keyword">const</span> <span class="token function-variable function">remainingBalance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> balance <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`Your balance is $</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>balance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">// finishTransaction :: Account -> String</span>\n<span class="token keyword">const</span> finishTransaction <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>remainingBalance<span class="token punctuation">,</span> updateLedger<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token comment">// getTwenty :: Account -> Maybe(String)</span>\n<span class="token keyword">const</span> getTwenty <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span>finishTransaction<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">getTwenty</span><span class="token punctuation">(</span><span class="token punctuation">{</span> balance<span class="token punctuation">:</span> <span class="token number">200.00</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token comment">// Just(\'Your balance is $180\')</span>\n\n<span class="token function">getTwenty</span><span class="token punctuation">(</span><span class="token punctuation">{</span> balance<span class="token punctuation">:</span> <span class="token number">10.00</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Nothing</span></code></pre>\n      </div>\n<p>要是钱不够，<code class="gatsby-code-text">withdraw</code>就会对我们嗤之以鼻然后返回一个<code class="gatsby-code-text">Maybe(null)</code>。<code class="gatsby-code-text">withdraw</code>也显示出了它的多变性，使得我们后续的操作只能用<code class="gatsby-code-text">map</code>来进行。这个例子与前面例子不同的地方在于，这里的<code class="gatsby-code-text">null</code>是有意的。我们不用<code class="gatsby-code-text">Maybe(String)</code>，而是用 <code class="gatsby-code-text">Maybe(null)</code>来发送失败的信号，这样程序在收到信号后就能立刻停止执行。这一点很重要：如果<code class="gatsby-code-text">withdraw</code>失败了，<code class="gatsby-code-text">map</code>就会切断后续代码的执行，因为它根本就不会运行传递给它的函数，即<code class="gatsby-code-text">finishTransaction</code>。</p>\n<p>这正是预期的效果：如果取款失败，我们并不想更新或者显示账户余额。</p>\n<h3 id="releasing-the-value"><a href="#releasing-the-value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Releasing the Value</h3>\n<p>人们经常忽略的一个事实是：任何事物都有个最终尽头。那些会产生作用的函数，不管它们是发送 JSON 数据，还是在屏幕上打印东西，还是更改文件系统，还是别的什么，都要有一个结束。但是我们无法通过 return 把输出传递到外部世界，必须要运行这样或那样的函数才能传递出去。关于这一点，可以借用禅宗公案的口吻来叙述：“如果一个程序运行之后没有可观察到的作用，那它到底运行了没有？”。或者，运行之后达到自身的目的了没有？有可能它只是浪费了几个 CPU 周期然后就去睡觉了…</p>\n<p>应用程序所做的工作就是获取、更改和保存数据直到不再需要它们，对数据做这些操作的函数有可能被 map 调用，这样的话数据就可以不用离开它温暖舒适的容器。讽刺的是，有一种常见的错误就是试图以各种方法删除 Maybe 里的值，好像这个不确定的值是魔鬼，删除它就能让它突然显形，然后一切罪恶都会得到宽恕似的（译者注：此处原文应该是源自圣经）。要知道，我们的值没有完成它的使命，很有可能是其他代码分支造成的。我们的代码，就像薛定谔的猫一样，在某个特定的时间点有两种状态，而且应该保持这种状况不变直到最后一个函数为止。这样，哪怕代码有很多逻辑性的分支，也能保证一种线性的工作流。</p>\n<p>不过，对容器里的值来说，还是有个逃生口可以出去。也就是说，如果我们想返回一个自定义的值然后还能继续执行后面的代码的话，是可以做到的；要达到这一目的，可以借助一个帮助函数 maybe：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//  maybe :: b -> (a -> b) -> Maybe a -> b</span>\n<span class="token keyword">var</span> maybe <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> f<span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> m<span class="token punctuation">.</span><span class="token function">isNothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> x <span class="token punctuation">:</span> <span class="token function">f</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>__value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//  getTwenty :: Account -> String</span>\n<span class="token keyword">var</span> getTwenty <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>\n  <span class="token function">maybe</span><span class="token punctuation">(</span><span class="token string">"You\'re broke!"</span><span class="token punctuation">,</span> finishTransaction<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token function">getTwenty</span><span class="token punctuation">(</span><span class="token punctuation">{</span> balance<span class="token punctuation">:</span> <span class="token number">200.00</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// "Your balance is $180.00"</span>\n\n<span class="token function">getTwenty</span><span class="token punctuation">(</span><span class="token punctuation">{</span> balance<span class="token punctuation">:</span> <span class="token number">10.00</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// "You\'re broke!"</span></code></pre>\n      </div>\n<p>这样就可以要么返回一个静态值（与 finishTransaction 返回值的类型一致），要么继续愉快地在没有 Maybe 的情况下完成交易。maybe 使我们得以避免普通 map 那种命令式的 <code class="gatsby-code-text">if/else</code> 语句：<code class="gatsby-code-text">if(x !== null) { return f(x) }else{ return null }</code>。</p>\n<p>引入 Maybe 可能会在初期造成一些不适。<code class="gatsby-code-text">Swift</code> 和 <code class="gatsby-code-text">Scala</code> 用户知道我在说什么，因为这两门语言的核心库里就有 Maybe 的概念，只不过伪装成 Option(al) 罢了。被迫在任何情况下都进行空值检查（甚至有些时候我们可以确定某个值不会为空），的确让大部分人头疼不已。然而随着时间推移，空值检查会成为第二本能，说不定你还会感激它提供的安全性呢。不管怎么说，空值检查大多数时候都能防止在代码逻辑上偷工减料，让我们脱离危险。</p>\n<p>编写不安全的软件就像用蜡笔小心翼翼地画彩蛋，画完之后把它们扔到大街上一样（意思是彩蛋非常易于寻找。来源于复活节习俗，人们会藏起一些彩蛋让孩子寻找），或者像用三只小猪警告过的材料盖个养老院一样（来源于“三只小猪”童话故事）。Maybe 能够非常有效地帮助我们增加函数的安全性。</p>\n<p>有一点我必须要提及，否则就太不负责任了，那就是 Maybe 的“真正”实现会把它分为两种类型：一种是非空值，另一种是空值。这种实现允许我们遵守 map 的 parametricity 特性，因此 null 和 undefined 能够依然被 map 调用，functor 里的值所需的那种普遍性条件也能得到满足。所以你会经常看到 Some(x) / None 或者 Just(x) / Nothing 这样的容器类型在做空值检查，而不是 Maybe。</p>',frontmatter:{title:"FP11：Schrödinger's Maybe",img:"./img/2018-08-02.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"August 01, 2018",path:"blog/functional/2018-08-02-FP11-Maybe.md",slug:"/blog/2018/08/02/FP11-Maybe.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}},{node:{frontmatter:{title:"移动端开发基础知识"},fields:{slug:"/blog/2019/05/24/mobile.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}}]}},pathContext:{slug:"/blog/2018/08/02/FP11-Maybe.html"}}}});