webpackJsonp([0xa0be997efebc],{455:function(s,a){s.exports={data:{markdownRemark:{html:'<p><code class="gatsby-code-text">ECMAScript3</code> 开始支持正则表达式，其语法和其他语言的正则表达式语法很类似，一个完整的正则表达式结构如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> expression <span class="token operator">=</span> <span class="token operator">/</span>pattern<span class="token operator">/</span>flags <span class="token punctuation">;</span></code></pre>\n      </div>\n<p>其中，模式(pattern)部分可以是任何简单或复杂的正则表达式，可以包含字符型、限定符、分组、向前查找以及反向查找。</p>\n<p>每个正则表达式都可带有亦或多个标志(flags),用以标明正则表达式的行为，正则表达式支持下列3个标志：</p>\n<ul>\n<li>g - 表示全局(global)模式，即模式将被应用到所有的字符串，而非在发现第一个匹配项时立即停止。</li>\n<li>i — 表示不区分大小写(case-insensitive),即在确定匹配项时忽略模式与字符串的大小写。</li>\n<li>m - 表示多行(multiline)模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项，例如：字符串模板中出现的多行字符串。</li>\n</ul>\n<p>如果有多个标志同时使用时，则写成：<code class="gatsby-code-text">gmi</code>。</p>\n<h3 id="正则表达式的创建"><a href="#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E5%88%9B%E5%BB%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>正则表达式的创建</h3>\n<p>正则表达式的创建有两种方式： <code class="gatsby-code-text">new RegExp(expression)</code> 和 直接字面量。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 使用直接字面量创建</span>\n<span class="token keyword">var</span> exp1 <span class="token operator">=</span> <span class="token regex">/(^\\s+)|(\\s+$)/g</span><span class="token punctuation">;</span>\n<span class="token comment">// 使用RegExp对象创建</span>\n<span class="token keyword">var</span> exp2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">\'(^\\\\s+)|(\\\\s+$)\'</span><span class="token punctuation">,</span> <span class="token string">\'g\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">exp1</code>和<code class="gatsby-code-text">exp2</code>是两个完全等价的正则表达式，需要注意的是，传递给<code class="gatsby-code-text">RegExp</code>构造函数的两个参数都是字符串，不能把正则表达式字面量传递给RegExp构造函数。</p>\n<p>学习正则表达式的网站:<a href="https://regexper.com">https://regexper.com</a>，可以查看任意的正则表达式的含义</p>\n<h3 id="原义文本字符与元字符"><a href="#%E5%8E%9F%E4%B9%89%E6%96%87%E6%9C%AC%E5%AD%97%E7%AC%A6%E4%B8%8E%E5%85%83%E5%AD%97%E7%AC%A6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>原义文本字符与元字符</h3>\n<h4 id="原义文本字符"><a href="#%E5%8E%9F%E4%B9%89%E6%96%87%E6%9C%AC%E5%AD%97%E7%AC%A6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>原义文本字符</h4>\n<p>就是代表文本原本含义的字符，例如：abc就是表示文本abc,123就是表示数字123；</p>\n<h3 id="元字符"><a href="#%E5%85%83%E5%AD%97%E7%AC%A6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>元字符</h3>\n<p>元字符是在正则表达式中有特殊含义的非字母字符</p>\n<p>与其他语言中的正则表达式类似，模式中使用的所有元字符都必须转义(使用<code class="gatsby-code-text">\\</code>转义)。正则表达式中的元字符包括：\n<code class="gatsby-code-text">( )</code>、<code class="gatsby-code-text">[ ]</code>、<code class="gatsby-code-text">{ }</code>、<code class="gatsby-code-text">\\</code>、<code class="gatsby-code-text">^</code>、<code class="gatsby-code-text">|</code>、<code class="gatsby-code-text">?</code>、<code class="gatsby-code-text">*</code>、<code class="gatsby-code-text">+</code>、<code class="gatsby-code-text">.</code>，<code class="gatsby-code-text">$</code>\n后面会详细介绍这些<code class="gatsby-code-text">元字符</code>的含义。</p>\n<h3 id="字符类"><a href="#%E5%AD%97%E7%AC%A6%E7%B1%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>字符类</h3>\n<p>使用元字符<code class="gatsby-code-text">[]</code>来构建一个简单的类，所谓类就是指符合某些特征的对象，是一个泛指，而不是特指某个字符，例如：<code class="gatsby-code-text">[abc]</code>表示只要有<code class="gatsby-code-text">a</code>,<code class="gatsby-code-text">b</code>,<code class="gatsby-code-text">c</code>中的任意一个就ok！</p>\n<p><strong>字符类取反</strong>：使用<code class="gatsby-code-text">^</code>创建反向类，也就是不属于某个类的内容，就是一个数学取反的操作。例如：<code class="gatsby-code-text">[^abc]</code>表示任意不是a,b,c的字符。</p>\n<p><strong>范围类</strong>：可以使用<code class="gatsby-code-text">[a-z]</code>来表示从a到z的任意字符(包含a和z本身)；[0-9]表示任意的数字；类内部连写：<code class="gatsby-code-text">[a-zA-Z]</code>表示任意的a-Z的大小写字母；</p>\n<blockquote>\n<p><code class="gatsby-code-text">-</code>并不是元字符，如果范围类中使用<code class="gatsby-code-text">-</code>可以直接写，例如：2014-05-06，如果要匹配数字和-，/[0-9]-/就可以了</p>\n</blockquote>\n<h4 id="正则表达式默认的字符类"><a href="#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E9%BB%98%E8%AE%A4%E7%9A%84%E5%AD%97%E7%AC%A6%E7%B1%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>正则表达式默认的字符类</h4>\n<ul>\n<li><code class="gatsby-code-text">.</code> - 等价于<code class="gatsby-code-text">[^\\r\\n]</code> 除了回车和换行符之外的所有字符</li>\n<li><code class="gatsby-code-text">\\d</code> - 等价于<code class="gatsby-code-text">[0-9]</code> 数字(digit)字符</li>\n<li><code class="gatsby-code-text">\\D</code> - 等价于<code class="gatsby-code-text">[^0-9]</code> 非数字字符</li>\n<li><code class="gatsby-code-text">\\s</code> - 等价于<code class="gatsby-code-text">[\\t\\n\\x0b\\f\\r]</code> 空白符(space)</li>\n<li><code class="gatsby-code-text">\\S</code> - 等价于<code class="gatsby-code-text">[^\\t\\n\\x0b\\f\\r]</code> 非空白符</li>\n<li><code class="gatsby-code-text">\\w</code> - 等价于<code class="gatsby-code-text">[a-zA-Z_0-9]</code> 单词(word)字符(字母、数字、下划线)</li>\n<li>\n<p><code class="gatsby-code-text">\\W</code> - 等价于<code class="gatsby-code-text">[a-zA-Z_0-9]</code> 非单词字符</p>\n<h4 id="边界"><a href="#%E8%BE%B9%E7%95%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>边界</h4>\n</li>\n<li><code class="gatsby-code-text">^</code> - 以x开头的(^在字符类中表示取反)</li>\n<li><code class="gatsby-code-text">$</code> - 以x结束</li>\n<li><code class="gatsby-code-text">\\b</code> - 单词边界</li>\n<li><code class="gatsby-code-text">\\B</code> - 非单词边界</li>\n</ul>\n<h3 id="量词"><a href="#%E9%87%8F%E8%AF%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>量词</h3>\n<ul>\n<li><code class="gatsby-code-text">?</code> - 出现0次或者一次(最多出现一次)</li>\n<li><code class="gatsby-code-text">+</code> - 出现一次或者多次(至少出现一次)</li>\n<li><code class="gatsby-code-text">*</code> - 出现0次或者多次(任意次)</li>\n<li><code class="gatsby-code-text">{n}</code> - 出现n次</li>\n<li><code class="gatsby-code-text">{n,m}</code> - 出现n-m次</li>\n<li><code class="gatsby-code-text">{n,}</code> - 出现至少n次</li>\n</ul>\n<blockquote>\n<p>量词只能作用于紧挨着的字符，而不能作用于整个单词，例如：<code class="gatsby-code-text">/mello{5}/</code>,表示的是<code class="gatsby-code-text">o</code>重复5次，而绝不是单词<code class="gatsby-code-text">mello</code>重复5次。</p>\n</blockquote>\n<h3 id="贪婪模式与非贪婪模式"><a href="#%E8%B4%AA%E5%A9%AA%E6%A8%A1%E5%BC%8F%E4%B8%8E%E9%9D%9E%E8%B4%AA%E5%A9%AA%E6%A8%A1%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>贪婪模式与非贪婪模式</h3>\n<p>如果我们有一个字符串<code class="gatsby-code-text">12345678</code>，那么正则表达式<code class="gatsby-code-text">/\\d{3,6}/</code>该如何匹配呢？因为字符串即满足数字出现3次，也满足出现6次，甚至满足出现4次，5次；</p>\n<p>而JavaScript是默认的贪婪模式，也就是尽可能多的匹配，也就是上面的表达式会匹配<code class="gatsby-code-text">12345678</code>中的<code class="gatsby-code-text">123456</code>。</p>\n<p>如果我们想让正则表达式尽量少的匹配，也就是说一旦匹配成功不再继续尝试，也就是非贪婪模式，只要在量词后面加上<code class="gatsby-code-text">?</code>就可以将贪婪模式转换为非贪婪模式。例如上面的正则表达式修改为<code class="gatsby-code-text">/\\d{3,6}?/</code>,那么这个时候匹配的结果就是<code class="gatsby-code-text">123</code>和<code class="gatsby-code-text">456</code>。</p>\n<h3 id="分组"><a href="#%E5%88%86%E7%BB%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>分组</h3>\n<p>上面在量词一节中提到的量词只能作用于紧挨着的字符吗，而不是作用于整个单词，如果我们就是想要匹配整个单词怎么办呢？我们可以使用<code class="gatsby-code-text">()</code>来分组。例如：<code class="gatsby-code-text">/(mello){5}/</code>就是表示单词<code class="gatsby-code-text">mello</code>重复5次</p>\n<p><strong>|</strong> 表示或的关系，举个例子就是<code class="gatsby-code-text">/hello (mello|tyran)/</code>表示能匹配<code class="gatsby-code-text">hello</code>后面跟着mello或者tyran的字符串。</p>\n<h4 id="反向引用"><a href="#%E5%8F%8D%E5%90%91%E5%BC%95%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>反向引用</h4>\n<p>前面讲到的都是用各种法则去匹配字符串，那么我们如何捕获我们匹配的内容呢？</p>\n<p>举例来说：<code class="gatsby-code-text">2014-05-06</code>如果要转换为<code class="gatsby-code-text">2014/05/06</code>那么我们可以使用<code class="gatsby-code-text">&#39;2014-05-06&#39;.replace(/(\\d{4})-(\\d{2})-(\\d{2})/,&#39;$2/$3/$1&#39;)</code>来完成这项工作，其中第二个参数<code class="gatsby-code-text">字符串中的</code>,<code class="gatsby-code-text">$2</code>、<code class="gatsby-code-text">$3</code>、<code class="gatsby-code-text">$1</code>分别表示分组匹配中的第一项，第二项，第三项</p>\n<p><strong>忽略分组</strong> 如果要取消某个分组的捕获，可以在分组的最开始加上<code class="gatsby-code-text">?:</code>即可！</p>\n<h3 id="前瞻"><a href="#%E5%89%8D%E7%9E%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>前瞻</h3>\n<p>正则表达式从文本的头部向尾部开始解析，文本尾部方向，被称为 <strong>前</strong>，前瞻就是在正则表达式匹配到规则的时候，<strong>向前检查是否符合断言</strong>。</p>\n<p>前瞻分为正向前瞻(?=)和负向(?!)前瞻，也就是断言部分可以设定为符合条件和不符合条件。</p>\n<p>正向前瞻：<code class="gatsby-code-text">exp(?=assert)</code>,负向前瞻：<code class="gatsby-code-text">exp(?!assert)</code></p>\n<p>例如：<code class="gatsby-code-text">&#39;a2*3&#39;.replace(/\\w(?=\\d)/,&#39;X&#39;)</code>的结果为<code class="gatsby-code-text">&#39;X2*3&#39;</code>,就是正则表达式匹配的部分被替换掉了，而断言部分的没有被替换。</p>\n<h3 id="正则表达式对象的属性和方法"><a href="#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>正则表达式对象的属性和方法</h3>\n<h4 id="属性"><a href="#%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>属性</h4>\n<p><code class="gatsby-code-text">var reg = /\\d/</code>;</p>\n<ul>\n<li>reg.global:是否全文检索，默认是false</li>\n<li>ref.ignoreCase:是否大小写敏感，默认是false</li>\n<li>multiline:是否是多行检索，默认是false</li>\n<li>lastIndex:当前表达式匹配内容的最后一个字符的下一个位置(下一次正则表达式开始匹配的字符串的位置)</li>\n<li>source:正则表达式的文本字符串(本例中为’\\d’)</li>\n</ul>\n<h4 id="regexpprototypeteststr"><a href="#regexpprototypeteststr" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>RegExp.prototype.test(str)</h4>\n<p>用于测试字符串参数中是否包含存在匹配正则表达式模式的字符串，如果存在则返回true,否则返回false;</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> reg1 <span class="token operator">=</span> <span class="token regex">/\\w/</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> reg2 <span class="token operator">=</span> <span class="token regex">/\\w/g</span><span class="token punctuation">;</span>\nreg1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">\'ab\'</span><span class="token punctuation">)</span> <span class="token comment">//true reg2.lastIndex 0</span>\nreg1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">\'ab\'</span><span class="token punctuation">)</span> <span class="token comment">//true reg2.lastIndex 0</span>\nreg1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">\'ab\'</span><span class="token punctuation">)</span> <span class="token comment">//true reg2.lastIndex 0</span>\n\nreg2<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">\'ab\'</span><span class="token punctuation">)</span> <span class="token comment">//true reg2.lastIndex 1</span>\nreg2<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">\'ab\'</span><span class="token punctuation">)</span> <span class="token comment">//true reg2.lastIndex 2</span>\nreg2<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">\'ab\'</span><span class="token punctuation">)</span> <span class="token comment">//false reg2.lastIndex 0</span>\nreg2<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">\'ab\'</span><span class="token punctuation">)</span> <span class="token comment">//true reg2.lastIndex 1</span></code></pre>\n      </div>\n<p>上面的代码中，我们发现当正则表达式有’g’和没有’g’的时候，test函数的表现大不相同</p>\n<ul>\n<li>没有g的时候，正则表达式每次匹配字符串的时候不会修改本身的<code class="gatsby-code-text">lastIndex</code>属性，也就是每次都是从头开始匹配，那么匹配结果肯定每次都一样。</li>\n<li>在有g的时候，每次调用正则表达式的<code class="gatsby-code-text">test</code>方式之后，都会修改本身的<code class="gatsby-code-text">lastIndex</code>属性，也就是每次开始匹配的字符串的位置都不一样，那么就会导致匹配的结果不一致，也就是上面的例子中第三次调用test的时候的结果变成了false，同时<code class="gatsby-code-text">lastIndex</code>属性重置为了0(当匹配不到的时候就会重置为0)。</li>\n</ul>\n<blockquote>\n<p>test方法的本意是看看字符串中是否含有能匹配的模式，不管能匹配几次，也不管在哪里匹配到，所以一般情况下都不会加g,但我们也要知道加g会产生的后果</p>\n</blockquote>\n<h4 id="regexpprototypeexecstr"><a href="#regexpprototypeexecstr" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>RegExp.prototype.exec(str)</h4>\n<p><code class="gatsby-code-text">exec</code>方法会对字符串进行搜索，并且会更新正则表达式本身的<code class="gatsby-code-text">lastIndex</code>属性以反应匹配结果，如果没有匹配的结果则返回<code class="gatsby-code-text">null</code>,否则返回一个结果数组(该数组包含两个特殊的属性，<code class="gatsby-code-text">index</code>表示声明匹配文本的第一个字符的位置，input存放被检索的字符串string)。</p>\n<p>exac在有<code class="gatsby-code-text">g</code>和没有<code class="gatsby-code-text">g</code>的时候表现也不一样。</p>\n<ul>\n<li>没有<code class="gatsby-code-text">g</code> - 类似于test没有g的时候，每次执行exac的时候，正则表达式本身的lastIndex不会发生改变，每次都是从开头开始匹配，找到第一个匹配项就会停止匹配；返回的数组第一个元素是与正则表达式相匹配的文本，第二个元素是与正则表达中子表达式(分组)相匹配的文本(如果有的话)，第三个元素和第二个类似，以此类推</li>\n<li>有<code class="gatsby-code-text">g</code> -  类似于test方法有g的时候，每次调用正则表达式的<code class="gatsby-code-text">test</code>方式之后，都会修改本身的<code class="gatsby-code-text">lastIndex</code>属性，也就是每次开始匹配的字符串的位置都不一样，那么就会导致匹配的结果不一致；每次匹配的返回值，如果匹配成功的话，就是数组，如果失败就是null,返回的数组第一个元素是与正则表达式相匹配的文本，第二个元素是与正则表达中子表达式(分组)相匹配的文本(如果有的话)，第三个元素和第二个类似，以此类推</li>\n</ul>\n<h3 id="字符串中的regexp"><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84regexp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>字符串中的RegExp</h3>\n<h4 id="stringprototypesearchregexp"><a href="#stringprototypesearchregexp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String.prototype.search(regexp)</h4>\n<p>用于检索字符串中制定的子字符串，或者检索与正则表达式相匹配的子字符串，方法返回第一个匹配结果的index(在string中的索引)，查找不到返回-1；</p>\n<p>如果传入的参数是字符串或者数字的话，JavaScript会隐式的将他们转换为正则表达式。</p>\n<p>search方法不会执行全局匹配，将会忽略’g’标志，并且总是从字符串的开头开始匹配，</p>\n<h4 id="stringprototypematchregexp"><a href="#stringprototypematchregexp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String.prototype.match(regexp)</h4>\n<p>检索字符串，找到一个或者多个与regexp匹配的文本</p>\n<ul>\n<li>\n<p>没有g - 返回值和用正则表达式调用exac方法的返回值一样，只不过调用顺序变换了一下\n在非全局检索的时候，match方法只能在字符串中进行一次匹配，如果没有任何匹配的文本，则返回null,否则返回一个数组，数组中存放着与他找到的匹配文本有关的信息，数组的第一个元素存放的是匹配的文本，其余的元素存放的是与子表达式匹配的文本，除了常规的数组元素之外，该数组包含两个特殊的属性，<code class="gatsby-code-text">index</code>表示声明匹配文本的其实字符在字符串的位置，input存放被检索的字符串string</p>\n</li>\n<li>\n<p>有g - match方法将执行全局检索，找到字符串中所有的匹配的子字符串，如果没有找到任何匹配项，返回null,如果找到一个或者多个，则返回一个数组，数组中存放的是所有的匹配子项，并且数组没有index和input属性</p>\n</li>\n</ul>\n<h4 id="stringprototypesplitregexp"><a href="#stringprototypesplitregexp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String.prototype.split(regexp)</h4>\n<p>使用正则表达式将字符串切割成数组</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token string">\'a,b,c,d\'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex">/,/</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [a,b,c,d]</span>\n<span class="token string">\'a1b2c3d4\'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex">/\\d/g</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [a,,b,c,d]</span>\n<span class="token string">\'a,b|f\'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex">/,|\\|/g</span><span class="token punctuation">)</span> <span class="token comment">// [a,b,f]</span></code></pre>\n      </div>\n<h4 id="stringprototypereplaceregexp"><a href="#stringprototypereplaceregexp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String.prototype.replace(regexp)</h4>\n<p>replace函数的第一个参数可以是一个字符串，也可以是一个正则表达式，表示要找到的项，第二个参数是一个字符串或者是一个函数，表示要替换成的目标。</p>\n<p>函数是在每次匹配替换的时候，就会调用一次，然后把函数执行的结果作为替换目标，函数有四个参数，第一个是匹配字符串，第二个是正则表达式分组内容(不一定会有，如果没有的话，后面的参数就会前移，如果有多个，后面的参数后移)，第三个是匹配项在字符串中的index,第四个是原字符串</p>\n<h3 id="正则表达式常见的用法"><a href="#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%B8%B8%E8%A7%81%E7%9A%84%E7%94%A8%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>正则表达式常见的用法</h3>\n<h4 id="判断数据类型"><a href="#%E5%88%A4%E6%96%AD%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>判断数据类型</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">/**\n* @param {Object} obj\n* @return {String} 传入的对象的数据类型\n*/</span>\n<span class="token keyword">function</span> <span class="token function">getDataType</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> rst <span class="token operator">=</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    rst <span class="token operator">=</span> rst<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\[object\\s(\\w+)\\]/</span><span class="token punctuation">,</span><span class="token string">\'$1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [object Xxx]</span>\n    <span class="token keyword">return</span> rst<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="提取浏览器url中的键值对"><a href="#%E6%8F%90%E5%8F%96%E6%B5%8F%E8%A7%88%E5%99%A8url%E4%B8%AD%E7%9A%84%E9%94%AE%E5%80%BC%E5%AF%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>提取浏览器url中的键值对</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">/**\n* 参数为 window.location对象\n* @param {Object} location\n* @return {Object} url中search对象\n*/</span>\n<span class="token keyword">function</span> <span class="token function">getUrlParamObj</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token comment">//获取url的参数部分</span>\n    <span class="token keyword">var</span> params <span class="token operator">=</span> location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//[^&amp;=]+ 表示不含&amp;或=的连续字符，加上()就是提取对应字符串</span>\n    params<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/([^&amp;=]+)=([^&amp;=]*)/gi</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>rs<span class="token punctuation">,</span> $<span class="token number">1</span><span class="token punctuation">,</span> $<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        obj<span class="token punctuation">[</span>$<span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>$<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="实现html编码，将、、、、等转译，避免xss攻击"><a href="#%E5%AE%9E%E7%8E%B0html%E7%BC%96%E7%A0%81%EF%BC%8C%E5%B0%86%E3%80%81%E3%80%81%E3%80%81%E3%80%81%E7%AD%89%E8%BD%AC%E8%AF%91%EF%BC%8C%E9%81%BF%E5%85%8Dxss%E6%94%BB%E5%87%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>实现HTML编码，将&#x3C;>、/、“、、&#x26;等转译，避免xss攻击</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">htmlEncode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//匹配&lt; / > " &amp; `</span>\n    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/[&lt;>"&amp;\\/`]/g</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">switch</span> <span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">case</span> <span class="token string">"&lt;"</span><span class="token punctuation">:</span>\n                <span class="token keyword">return</span> "<span class="token operator">&lt;</span>"<span class="token punctuation">;</span>\n            <span class="token keyword">case</span> "<span class="token operator">></span>"<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> "<span class="token operator">></span>"<span class="token punctuation">;</span>\n            <span class="token keyword">case</span> "<span class="token operator">&amp;</span>"<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> "<span class="token operator">&amp;</span>"<span class="token punctuation">;</span>\n            <span class="token keyword">case</span> "\\""<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> "\'"<span class="token punctuation">;</span>\n            <span class="token keyword">case</span> "<span class="token operator">/</span>"<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> "<span class="token operator">/</span>"\n            <span class="token keyword">case</span> "`"<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> <span class="token string">"\'"</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="校验email"><a href="#%E6%A0%A1%E9%AA%8Cemail" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>校验email</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">/**\n* @param {String} email\n* @return {Boolean} 是否是合法的email地址\n*/</span>\n<span class="token keyword">function</span> <span class="token function">validateEmail</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex">/^(([^&lt;>()\\[\\]\\\\.,;:\\s@"]+(\\.[^&lt;>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',
frontmatter:{title:"JavaScript Regular Expression",img:"./img/2013-06-12.jpeg",author:["sylvenas"],excerpt:null,catalogue:null},fields:{date:"May 05, 2014",path:"blog/javascript/2014-05-06-RegExp.md",slug:"/blog/2014/05/06/RegExp.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}}]}},pathContext:{slug:"/blog/2014/05/06/RegExp.html"}}}});