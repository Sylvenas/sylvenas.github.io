webpackJsonp([55339036939558],{507:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="什么是原型链"><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%9E%8B%E9%93%BE" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>什么是原型链</h3>\n<p>发现很多文章都是先讲<code class="gatsby-code-text">prototype</code>,这里我们换个思路来介绍，我们先讲<code class="gatsby-code-text">__proto__</code>。JS中每个对象(除了null和undefined)都有一个私有的只读属性<code class="gatsby-code-text">__proto__</code>。</p>\n<p>当我们调用一个对象(obj)的某个方法或者属性(fn)的时候，首先会在该对象本身去查找是否具有这个属性(<code class="gatsby-code-text">obj.fn</code>)，如果找到，则直接返回；</p>\n<p>如果没有找到则去查找<code class="gatsby-code-text">obj.__proto__</code>属性上有没有该属性(<code class="gatsby-code-text">obj.__proto__.fn</code>)，<code class="gatsby-code-text">__proto__</code>属性就是指向该对象的构造函数的原型，如果该对象的构造函数上找到了该属性，则返回该属性；</p>\n<p>如果没有，那么继续查找该对象的构造函数的构造函数的原型上是否有<code class="gatsby-code-text">fn</code>属性，也就是查找<code class="gatsby-code-text">obj.__proto__.__proto__.fn</code>上是否存在;</p>\n<p>这个过程就叫做遍历原型链，直到原型链的顶端，也就是<code class="gatsby-code-text">Object.prototype</code>,而<code class="gatsby-code-text">Object</code>对象的原型指向为<code class="gatsby-code-text">null</code>，(<code class="gatsby-code-text">Object.getPrototypeOf(Object.prototype) === null</code>),根据定义，null没有原型,作为原型链的最后一个环节，如果整个原型链上都找不到，那么返回’undefined’。</p>\n<p>上面描述的整个链状向上遍历的关系，就叫做原型链，JavaScript正是基于这个特性实现的<code class="gatsby-code-text">“继承”</code>(我认为在JavaScript中叫<code class="gatsby-code-text">组合</code>更为合理)。</p>\n<h4 id="举例说明"><a href="#%E4%B8%BE%E4%BE%8B%E8%AF%B4%E6%98%8E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>举例说明</h4>\n<p>当我们有一个构造函数<code class="gatsby-code-text">Animal</code>,它的原型属性<code class="gatsby-code-text">Animal.prototype</code>上存在一个方法<code class="gatsby-code-text">move</code></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nAnimal<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">move</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'I am moving\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">\'dog\'</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animal<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> Animal<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animal<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>                              <span class="token comment">// dog</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animal<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\t\t\t\t\t\t\t   <span class="token comment">// \'I am moving\'</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Animal<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Animal<span class="token punctuation">)</span>   <span class="token comment">// true</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Animal<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> Function<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>  <span class="token comment">// true</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Animal<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>  <span class="token comment">// true</span></code></pre>\n      </div>\n<ul>\n<li>\n<p>构造函数<code class="gatsby-code-text">Animal</code>的原型属性<code class="gatsby-code-text">Animal.prototype</code>里有共有的方法，所有构造函数声明的实例(animal)都可以共享这个方法。</p>\n</li>\n<li>\n<p>原型对象<code class="gatsby-code-text">Animal.prototype</code>保存着实例共享的方法，有一个指针<code class="gatsby-code-text">constructor</code>指回该构造函数(<code class="gatsby-code-text">Animal.prototype.constructor === Animal</code>)。</p>\n</li>\n<li>\n<p><code class="gatsby-code-text">animal</code>是构造函数<code class="gatsby-code-text">Animal</code>的实例，<code class="gatsby-code-text">animal</code>对象也有属性<code class="gatsby-code-text">__proto__</code>,指向<code class="gatsby-code-text">Animal</code>的原型对象(<code class="gatsby-code-text">Animal.prototype</code>)—(<code class="gatsby-code-text">animal.__proto__ === Animal.prototype</code>)。</p>\n</li>\n<li>\n<p>构造函数<code class="gatsby-code-text">Animal</code>除了是方法，它也是个对象啊，它也有<code class="gatsby-code-text">__proto__</code>属性，指向<code class="gatsby-code-text">Animal</code>的构造函数<code class="gatsby-code-text">Function</code>的原型对象<code class="gatsby-code-text">Function.prototype</code>。(<code class="gatsby-code-text">Animal.__proto__ === Function.prototype</code>)。</p>\n</li>\n<li>\n<p>构造函数<code class="gatsby-code-text">Animal</code>的原型属性<code class="gatsby-code-text">Animal.prototype</code>也是对象，那么<code class="gatsby-code-text">Animal.prototype.__proto__</code>又指向哪里呢，很明显指向<code class="gatsby-code-text">Animal.prototype</code>的构造函数的原型对象<code class="gatsby-code-text">Object.prototype</code>。(<code class="gatsby-code-text">Animal.prototype.__proto__ === Object.prototype</code>)。</p>\n</li>\n</ul>\n<p>总结：</p>\n<ul>\n<li>对象有属性<code class="gatsby-code-text">__proto__</code>,指向该对象的构造函数的原型对象。</li>\n<li>方法除了有<code class="gatsby-code-text">__proto__</code>还有属性<code class="gatsby-code-text">prototype</code>,<code class="gatsby-code-text">prototype</code>指向该方法的原型对象。</li>\n</ul>\n<p>原型链也会有终点，终点就在<code class="gatsby-code-text">Object.prototype.__proto__ === null</code>，那么既然<code class="gatsby-code-text">Object.prototype</code>也是一个对象，那么<code class="gatsby-code-text">Object.prototype.__proto__</code>就应该指向<code class="gatsby-code-text">Object.prototype</code>,不过很遗憾，尽管<code class="gatsby-code-text">Object.prototype</code>也是一个对象，但是这个对象却不是由<code class="gatsby-code-text">Object</code>构造函数所创建的，而是有JS引擎(eg:V8)按照ECMAScript规范创建的。</p>\n<p>原型链有一个例外就是，<code class="gatsby-code-text">Function</code>的原型指向<code class="gatsby-code-text">Function</code>的原型对象，也就是<code class="gatsby-code-text">Function.__proto__ === Function.prototype</code>。这是一个<a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15%EF%BC%8C_%E9%B8%A1%E5%92%8C%E8%9B%8B_%E7%9A%84%E9%97%AE%E9%A2%98%E5%B0%B1%E6%98%AF%E8%BF%99%E4%B9%88%E5%87%BA%E7%8E%B0%E5%92%8C%E8%AE%BE%E8%AE%A1%E7%9A%84%EF%BC%9A**%60Function%60%E7%BB%A7%E6%89%BF%60Function%60%E6%9C%AC%E8%BA%AB%EF%BC%8C%60Function.prototype%60%E7%BB%A7%E6%89%BF%60Object.prototype%60%E3%80%82">鸡生蛋，蛋生鸡</a>的过程,说不清楚，还是看看规范吧。</p>\n<h4 id="实现继承"><a href="#%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>实现继承</h4>\n<p>现在我们有一个子构造函数<code class="gatsby-code-text">Dog</code>,它啥都没有，需要让它的实例继承<code class="gatsby-code-text">Animal</code>的所有属性和方法</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Dog<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nDog<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Dog<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>因为<code class="gatsby-code-text">new Animal()</code>的<code class="gatsby-code-text">__proto__</code>指向<code class="gatsby-code-text">Animal.prototype</code>这样的效果相当于：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Dog<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> Animal<span class="token punctuation">.</span>prototype   <span class="token comment">//true</span></code></pre>\n      </div>\n<p>当我们<code class="gatsby-code-text">new Dog()</code>的时候，那么就是</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> Dog<span class="token punctuation">.</span>prototype   <span class="token comment">//true</span></code></pre>\n      </div>\n<p>根据向上遍历原型链的规则,<code class="gatsby-code-text">var dog = new Dog()</code>，当访问<code class="gatsby-code-text">dog</code>的<code class="gatsby-code-text">move</code>方法时，会依次查询<code class="gatsby-code-text">dog本身</code>，<code class="gatsby-code-text">Dog.prototype</code>,<code class="gatsby-code-text">Animal.prototype</code>,最终找到<code class="gatsby-code-text">move</code>方法。</p>\n<p>但是有一点需要注意的是，整个原型链是动态的，也就是无论<code class="gatsby-code-text">Dog</code>生成了多少个实例，一旦更新了原型链上的属性、方法，则所有实例上的属性和方法，将跟随着改变，因为他们指向同一个引用。</p>\n<p>我们还可以使用ES5的<code class="gatsby-code-text">Object.create</code>方法串起原型链,<code class="gatsby-code-text">const newObj = Object.create({ a: 1 }, { b: { value: 1, writable: false, configurable: true } })</code>方法的作用为，新创建的<code class="gatsby-code-text">newObj</code>对象的<code class="gatsby-code-text">__proto__</code>指向<code class="gatsby-code-text">{a:1}</code>,而第二个参数为属性描述符，会被添加到<code class="gatsby-code-text">newObj</code>对象的本身属性上，而不是原型属性上。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> newObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> b<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> writable<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> configurable<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// {b:1}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// {a:1}</span></code></pre>\n      </div>\n<p>用在上面的例子中则是：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nAnimal<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">move</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'I am moving\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n\nDog<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Animal<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>\nDog<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Dog<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">\'金毛\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// undefined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// \'I am moving\'</span></code></pre>\n      </div>\n<p>这样做很明显<code class="gatsby-code-text">dog</code>无法继承<code class="gatsby-code-text">Animal</code>构造函数中定义的属性和方法,例如<code class="gatsby-code-text">dog.type</code>,因为我们仅仅将<code class="gatsby-code-text">Animal</code>的原型对象添加到了<code class="gatsby-code-text">Dog</code>的原型上，那么我们可以这样解决：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tAnimal<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>扩展一下，这个思路为我们提供了多父类继承的方法：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tSuperClass<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\tOtherSuperClass<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// inherit one class</span>\nMyClass<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>SuperClass<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// mixin another</span>\nObject<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> OtherSuperClass<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// re-assign constructor</span>\nMyClass<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> MyClass<span class="token punctuation">;</span>\n\nMyClass<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// do a thing</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="原型模式"><a href="#%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>原型模式</h3>\n<p>原型模式是指用原型实例指向创建对象的种类，并且通过拷贝这些原型创建新的对象，原型模式在JavaScript里的使用简直是无处不在，其它很多模式有很多也是基于<code class="gatsby-code-text">prototype</code>的,上面的讲解中，我们多次提到了<code class="gatsby-code-text">类</code>的概念，但是JavaScript本质上避免了<code class="gatsby-code-text">class</code>的概念，ES6中的<code class="gatsby-code-text">class</code>只是个语法糖，本质上还是使用原型，关于这一点我们从JavaScript的作者Brendan Eich后来的访谈中也能看出些许：</p>\n<blockquote>\n<p>“我并非骄傲，只不过是很高兴我选择 Scheme 式的一等函数以及 Self 式（尽管很怪异）的原型作为主要因素。至于 Java 的影响，主要是把数据分成基本类型和对象类型两种（比如字符串和 String 对象），以及引入了Y2K 日期问题，这真是不幸。我把最终进入 JavaScript 中的一些”不幸”类似 Java 的特性加入到如下列表中”:</p>\n</blockquote>\n<ul>\n<li>构造器函数和<code class="gatsby-code-text">new</code>关键字</li>\n<li><code class="gatsby-code-text">class</code>关键字加上单一祖先的<code class="gatsby-code-text">extend</code>作为主要继承机制</li>\n<li>用户的偏好是把<code class="gatsby-code-text">class</code>当作一个<code class="gatsby-code-text">静态</code>类型(实际上完全不是)。</li>\n</ul>\n<p>JavaScript只是简单的从现有对象进行拷贝来创建新的对象，我们应该尽量使用<a href="https://lit-forest.github.io/blog/2017/12/10/composing-software-intro.html">对象组合</a>的方式去构建对象，在JavaScript中应该尽量避免使用<code class="gatsby-code-text">继承</code>的思路。</p>\n<p>使用<code class="gatsby-code-text">继承</code>脑袋去思考<code class="gatsby-code-text">原型</code>只会把简单的问题弄得越来越复杂。</p>',frontmatter:{title:"原型模式",img:"./img/2018-01-16.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"January 15, 2018",path:"blog/design-pattern/2018-01-16-prototype-pattern.md",slug:"/blog/2018/01/16/prototype-pattern.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}}]}},pathContext:{slug:"/blog/2018/01/16/prototype-pattern.html"}}}});