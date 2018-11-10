webpackJsonp([0xdd143d12d53b],{416:function(e,n){e.exports={data:{markdownRemark:{html:'<h3 id="针对web的攻击技术"><a href="#%E9%92%88%E5%AF%B9web%E7%9A%84%E6%94%BB%E5%87%BB%E6%8A%80%E6%9C%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>针对Web的攻击技术</h3>\n<p>简单的HTTP协议本身并不存在安全性问题，因此协议本身几乎不会成为攻击对象。而应用HTTP协议的服务器和客户端，以及运行在服务器上的Web应用等才是攻击的目标。<br>\n<strong>HTTP本身不具备必要的安全功能</strong><br>\n从整体上看HTTP就是一个通用的单纯协议机制，它并不具备会话(session)安全，加密处理等安全性方面的功能，开发者需要自行设计并开发认证及会话管理来腕足web应用的安全，自行设计就意味着可能会出现各种各样的Bug。</p>\n<h3 id="针对web应用的攻击模式"><a href="#%E9%92%88%E5%AF%B9web%E5%BA%94%E7%94%A8%E7%9A%84%E6%94%BB%E5%87%BB%E6%A8%A1%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>针对Web应用的攻击模式</h3>\n<h4 id="主动攻击以服务器为目标的主动攻击"><a href="#%E4%B8%BB%E5%8A%A8%E6%94%BB%E5%87%BB%E4%BB%A5%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%BA%E7%9B%AE%E6%A0%87%E7%9A%84%E4%B8%BB%E5%8A%A8%E6%94%BB%E5%87%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>主动攻击(以服务器为目标的主动攻击)</h4>\n<p>主动攻击是指攻击者通过直接访问Web应用，把攻击代码传入的攻击模式，主动攻击模式里最具代表性的攻击是<code>SQL注入攻击</code>和<code>OS命令注入攻击</code>。 </p>\n<h4 id="被动攻击以服务器为目标的被动攻击"><a href="#%E8%A2%AB%E5%8A%A8%E6%94%BB%E5%87%BB%E4%BB%A5%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%BA%E7%9B%AE%E6%A0%87%E7%9A%84%E8%A2%AB%E5%8A%A8%E6%94%BB%E5%87%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>被动攻击(以服务器为目标的被动攻击)</h4>\n<p>被动攻击是利用圈套策略执行攻击代码的攻击模式。在被动攻击过程中，攻击者不直接对目标web网站发起攻击，而是事先布置好攻击的陷阱然后借助用户来进行攻击，被动攻击模式中最具代表性的是<code>跨站攻击脚本</code>和<code>跨站点请求伪造</code>。</p>\n<h3 id="因输出值转义不完全引发的安全漏洞"><a href="#%E5%9B%A0%E8%BE%93%E5%87%BA%E5%80%BC%E8%BD%AC%E4%B9%89%E4%B8%8D%E5%AE%8C%E5%85%A8%E5%BC%95%E5%8F%91%E7%9A%84%E5%AE%89%E5%85%A8%E6%BC%8F%E6%B4%9E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>因输出值转义不完全引发的安全漏洞</h3>\n<h4 id="跨站脚本攻击xss"><a href="#%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BBxss" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>跨站脚本攻击(XSS)</h4>\n<p>XSS(Cross-Site Scripting,XSS)是指通过存在安全漏洞的Web网站浏览器内运行非法的HTML标签或JavaScript进行的一种攻击。动态创建的HTML部分有可能隐藏着安全漏洞。攻击者编写脚本设下陷阱，用户在自己的浏览器上运行时，一不小心就会收到被动攻击。</p>\n<p>跨站脚本攻击有可能造成以下影响：</p>\n<ul>\n<li>利用虚假输入表单骗取用户个人信息</li>\n<li>利用脚本窃取用户的Cookie值，被害者在不知情的情况下，帮助攻击者发送恶意请求</li>\n<li>显示伪造的页面(文章或者图片)</li>\n</ul>\n<p><strong>跨站脚本攻击常用的手段有</strong>：</p>\n<ul>\n<li><strong>存储型</strong>：在用户输入框内输入恶意的HTML标签，或者恶意的<code>&#x3C;script>some script..&#x3C;/script></code>，然后用户把恶意的代码提交到了服务端，下次服务端回传给客户端这些恶意的代码的时候，攻击代码就会执行。</li>\n<li><strong>反射型</strong>：该攻击方式一般是把恶意代码存在URL中，然后诱导用户去点击这个地址，然后成功实施攻击，例如窃取用户的cookie等(eg:<code>http://www.some.com/user=">&#x3C;script src=\'恶意代码地址\'>&#x3C;/script></code>).</li>\n</ul>\n<p>跨站脚本攻击的案例：</p>\n<ul>\n<li>存储型：页面上有个评论的输入框，正常情况下大部分的用户都是输入了正常的用评论文字，不过如果有攻击者，输入了<code>&#x3C;script>alert(\'XSS\')&#x3C;/script></code>,然后直接提交到了服务端，存储到数据库中，当用户下次展示的时候，页面上就是弹出<code>XSS</code>,如果攻击者是其他更恶意的代码，后果不堪设想。</li>\n<li>反射型：如上已经说明</li>\n</ul>\n<p><strong>防御XSS攻击的常用方法</strong></p>\n<ul>\n<li>所有前端的页面渲染，尽量使用ajax异步进行，从后台获取要显示的数据。</li>\n<li>前端提交过来的数据，在后台入口处统统对HTML中的关键字进行html编码转义。</li>\n</ul>\n<h4 id="sql注入攻击"><a href="#sql%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SQL注入攻击</h4>\n<p>SQL注入是指针对Web应用使用的数据库，通过运行非法的SQL而产生的攻击，SQL注入产生的根本原因在<code>未经检查或者未充分检查的用户输入数据或URLc传递的参数，意外变成了代码被执行(被数据库系统编译而产生了开发者预期之外的动作，也就是用户输入的数据，在拼接SQL语句的过程中，超越了数据本身，成为了SQL语句的一部分，然后这样被拼接出来的SQL语句被数据库执行，产生了开发者预期之外的动作)</code>,该安全隐患可能引发极大地危险，搞不好就是：<code>从删库到跑路</code>。</p>\n<p>SQL注入可能引发一下危险：</p>\n<ul>\n<li>非法查看或篡改数据库内的数据</li>\n<li>规避认证</li>\n<li>执行和数据服务器业务关联的程序等。</li>\n</ul>\n<p><strong>典型的SQL攻击的示例</strong>\n假设用户在输入框内输入的用户名为<code>张三</code>，那么查询关于张三的内容，并且<code>flag = 1</code>的数据,SQL语句如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> userTb <span class="token keyword">where</span> username <span class="token operator">=</span> <span class="token string">\'张三\'</span> <span class="token operator">and</span> flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>如果我们想进行sql注入攻击，我们输入的用户名为<code>张三\'--</code>，SQL语句就变成了：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> userTb <span class="token keyword">where</span> username <span class="token operator">=</span> <span class="token string">\'张三\'</span><span class="token comment" spellcheck="true">--\' and flag = 1;</span>\n</code></pre>\n      </div>\n<p>那么我们可以看到总共有三个<code>(\')</code>，第一个表示<code>username</code>的值的开始，第二个表示结束，那么<code>--</code>后面的则相当于被注释掉了，那么这个时候我们的查询语句很明显少了一个条件，这样查询出来的数据，已经偏离了开发人员的预想，而攻击人员已经拿到了更多的数据，达到了攻击的目的。</p>\n<p><strong>如何确定SQL注入漏洞</strong>\n黑客并不知道我们程序代码的逻辑和SQL语法，那么他是如何确定一个网站是否存在SQL注入安全漏洞的呢？一般来说有如下两种途径：</p>\n<ul>\n<li>错误提示\n如果目标Web网站开启了错误提示，攻击者就可以通过反复调整发送的参数、查看页面打印的错误日志，推测出Web网站使用的数据库和表结构等信息。</li>\n<li>盲注\n除非运维人员疏忽，否则大部分的Web运营网站都应该变比了错误提示信息，此时攻击者一般会采取盲注的技巧来进行反复的尝试。</li>\n</ul>\n<p><strong>如何防御SQL攻击</strong>\n通过以上对SQL注入攻击的分析可以发信啊，对于用户输入的内容或者传递的参数，我们应该要时刻保持警惕，这就是安全领域的<code>外部数据不可信任原则</code>，Web安全领域的各种攻击方式，大都是因为开发人员违反了这个原则，那么我们就可以从变量的检测、过滤、验证下周，确保变量是开发者所预想的。</p>\n<ul>\n<li>绑定变量，使用预编译语句\n实际上，绑定变量使用预编译语句是预防SQL注入的最佳方式，使用预编译的SQL语句语义不会发生改变，在SQL语句中，变量用问号?表示，黑客即使本事再大，也无法改变SQL语句的结构，像上面例子中，username变量传递的<code>张三\'--</code>参数，也只会当作username字符串来解释查询，从根本上杜绝了SQL注入攻击的发生。</li>\n<li>检查变量的类型和格式<br>\n如果你的SQL语句是类似<code>where id = {$id}</code>这种形式，数据库里所有的id都是数字，那么就应该在SQL被执行前，检查确保变量的id是init类型，如果是邮箱，那么就应该检查并确保变量一定是邮箱格式的，其他的类型比如日期，时间等也是一个道理。总结起来就是：<strong>只要是有固定格式的变量，在SQL语句执行之前，就应该严格按照固定格式去检查，确保变量比我们余项的格式</strong>，(这部分的校验在前端开发中同样适用)，这样很大程度上可以避免SQL注入攻击。</li>\n<li>过滤特殊符号\n对于无法固定格式的变量一定要进行特殊富豪过滤或转义处理，一般会转义<code>(\')、("")</code>等特殊字符。</li>\n</ul>\n<p><strong>数据库信息加密</strong>\n一般会对数据库中的关键数据，例如账号密码等进行MD5,SHA-1等加密酸处理之后，在进行存贮，这样即使攻击者拿到了数据，也无法解密。</p>\n<h4 id="http首部注入攻击"><a href="#http%E9%A6%96%E9%83%A8%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTTP首部注入攻击</h4>\n<p>HTTP首部注入攻击(HTTP Header Injection)是指攻击者通过在响应首部字段内插入换行，添加任意响应首部或主体的一种攻击，属于被动攻击的一种。</p>\n<p>向首部主体内添加内容的攻击称为HTTP响应截断攻击(HTTP Respone Splitting Attack)。</p>\n<p>HTTP首部注入攻击有可能会造成一下一些影响：</p>\n<ul>\n<li>设置任何Cookie信息</li>\n<li>重定向至人意URL</li>\n<li>显示任意的主体(HTTP响应截断攻击)</li>\n</ul>\n<p><strong>HTTP首部注入攻击的案例</strong>\n假设我们通过一个URL<code>http://example.com/?user=1</code>来定位到某个页面，那么攻击者可能会把<code>user=1</code>替换成<code>user=1%0D%0ASet-Cookie:+SID=1234</code>。\n其中，<code>%0D%0A</code>代表HTTP报文中的换行符，紧接着的是可以将被攻击网站的回话ID设置成<code>SID=1234</code>的Set-Cookie首部字段。</p>\n<p>发送该请求之后，假设结果返回一下响应：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>Location: http://example/?user=1(%0D%0A:换行符)\nSet-Cookie:SID=1234</code></pre>\n      </div>\n<p>攻击者输入的<code>%0D%0A</code>原本应该属于首部字段Location的查询值部分，但经过解析之后，<code>%0D%0A</code>变成了换行符，结果插入了新的首部字段<code>Set-Cookie</code>，攻击者可以伪装成用户，同理，攻击者可在响应中插入任意的首部字段。</p>\n<p><strong>HTTP响应截断攻击案例</strong>\nHTTP响应阶段攻击是用在HTTP首部注入的一种攻击。攻击顺序相同，但是要将两个<code>%0D%0A%0D%0A</code>并排插入字符串后发送。利用这两个连续的换行就可作出HTTP首部与主体分隔所需的空行了，这样就能显示伪造的主体，达到攻击的目的。例如：\n<code>%0D%0A%0D%0A&#x3C;html>&#x3C;head>&#x3C;title>....想要显示的网页内容 &#x3C;!--</code>。</p>\n<p>在可能进行HTTP受不住如的环节，通过发送上面的字符串，返回结果得到如下响应：<code>Set-Cookie:UID=(%0D%0A:换行符)(%0D%0A:换行符)&#x3C;html>&#x3C;head>&#x3C;title>....想要显示的网页内容 &#x3C;!--(原本正常情况的html内容被注释)</code>。</p>\n<h4 id="os命令注入攻击"><a href="#os%E5%91%BD%E4%BB%A4%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>OS命令注入攻击</h4>\n<p>OS命令诸如攻击是指通过Web应用，执行非法的操作系统命令达到攻击的目的。只要在存在Shell函数的地方就有存在被攻击的风险。</p>\n<p>可以从Web应用中通过Shell来调用操作系统命令。倘若调用Shell时存在疏漏，就可以执行插入非法的OS命令。</p>\n<p>OS命令注入攻击可以向Shell发送命令，使Window或Linux操作系统的命令行启动程序。也就是说，通过OS注入攻击可执行OS上安装着的各种程序。</p>\n<h4 id="目录遍历攻击"><a href="#%E7%9B%AE%E5%BD%95%E9%81%8D%E5%8E%86%E6%94%BB%E5%87%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>目录遍历攻击</h4>\n<p>目录遍历(Directory Traversal)攻击是指对本无意公开的文件目录，通过非法截断其目录路径后，达成访问\n目的的一种攻击。这种攻击有时也称为路径遍历(Path Traversal)攻击。\n通过 Web 应用对文件处理操作时，在由外部指定文件名的处理存在疏漏的情况下，用户可使用 …/ 等相对路 径定位到 /etc/passed 等绝对路径上，因此服务器上任意的文件或文件目录皆有可能被访问到。这样一来，就 有可能非法浏览、篡改或删除 Web 服务器上的文件。\n固然存在输出值转义的问题，但更应该关闭指定对任意文件名的访问权限。</p>\n<h3 id="因设置或设计上的缺陷引发的安全漏洞"><a href="#%E5%9B%A0%E8%AE%BE%E7%BD%AE%E6%88%96%E8%AE%BE%E8%AE%A1%E4%B8%8A%E7%9A%84%E7%BC%BA%E9%99%B7%E5%BC%95%E5%8F%91%E7%9A%84%E5%AE%89%E5%85%A8%E6%BC%8F%E6%B4%9E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>因设置或设计上的缺陷引发的安全漏洞</h3>\n<h4 id="强制浏览"><a href="#%E5%BC%BA%E5%88%B6%E6%B5%8F%E8%A7%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>强制浏览</h4>\n<p>强制浏览(Forced Browsing)安全漏洞是指，从安置在 Web 服务器的公开目录下的文件中，浏览那些原本 非自愿公开的文件。\n强制浏览有可能会造成以下一些影响。 泄露顾客的个人信息等重要情报 泄露原本需要具有访问权限的用户才可查阅的信息内容 泄露未外连到外界的文件\n对那些原本不愿公开的文件，为了保证安全会隐蔽其 URL。可一旦知道了那些 URL，也就意味着可浏览 URL 对应的文件。直接显示容易推测的文件名或文件目录索引时，通过某些方法可能会使 URL 产生泄露。</p>\n<p>容易被推测的文件名及目录名 <code>http://www.example.com/entry/entry_081202.log</code> 文件名称容易推测(按上面的情况，可推出下一个文件是<code>entry_081203.log</code>)</p>\n<h3 id="因会话管理疏忽引发的安全漏洞"><a href="#%E5%9B%A0%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86%E7%96%8F%E5%BF%BD%E5%BC%95%E5%8F%91%E7%9A%84%E5%AE%89%E5%85%A8%E6%BC%8F%E6%B4%9E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>因会话管理疏忽引发的安全漏洞</h3>\n<p>会话管理是用来管理用户状态的必备功能，但是如果在会话管理上有所疏忽，就会导致用户的认证状态被窃取等后果。</p>\n<h4 id="会话劫持"><a href="#%E4%BC%9A%E8%AF%9D%E5%8A%AB%E6%8C%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>会话劫持</h4>\n<p>会话劫持(Session Hijack)是指攻击者通过某种手段拿到了用户的会话ID，并非法使用此会话ID伪装成用户，达到攻击的目的。</p>\n<p><strong>会话劫持攻击的案例</strong>\n下面我们以认证功能为例讲解会话劫持。这里的认证功能通过会话管理机制，会将成功认证的用户的会 话 ID(SID)保存在用户浏览器的 Cookie 中。\n攻击者在得知该 Web 网站存在可跨站攻击(XSS)的安全漏洞后，就设置好用 JavaScript 脚本调用 document.cookie 以窃取 Cookie 信息的陷阱，一旦用户踏入陷阱(访问了该脚本)，攻击者就能获取含 有会话 ID 的 Cookie。\n攻击者拿到用户的会话 ID 后，往自己的浏览器的 Cookie 中设置该会话 ID，即可伪装成会话 ID 遭窃的 用户，访问 Web 网站了。</p>\n<p><strong>会话固定攻击</strong>\n对以窃取目标会话 ID 为主动攻击手段的会话劫持而言，会话固定攻击(Session Fixation)攻击会强制用户使用攻击者指定的会话 ID，属于被动攻击。</p>\n<p>会话固定攻击的案例：\n下面我们以认证功能为例讲解会话固定攻击。这个Web网站的认证功能，会在认证前发布一个会话ID，若认证成功，就会在服务器内改变认证状态。</p>\n<ul>\n<li>攻击者准备陷阱，先访问 Web 网站拿到会话 ID(SID=f5d1278e8109)。此刻，会话ID在服务器上的记录仍是(未认证)状态。</li>\n<li>攻击者设置好强制用户使用该会话ID的陷阱，并等待用户拿着这个会话I 前去认证。一旦用户触发陷 阱并完成认证，会话 ID(SID=f5d1278e8109)在服务器上的状态(用户A已认证)就会被记录下来。</li>\n<li>攻击者估计用户差不多已触发陷阱后，再利用之前这个会话ID访问网站。由于该会话ID目前已是(用户A已认证)状态，于是攻击者作为用户A的身份顺利登录网站。</li>\n</ul>\n<h4 id="跨站点请求伪造"><a href="#%E8%B7%A8%E7%AB%99%E7%82%B9%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>跨站点请求伪造</h4>\n<p>跨站点请求伪造(Cross-Site Request Forgeries，CSRF)攻击是指攻击者通过设置好的陷阱，强制对已完 成认证的用户进行非预期的个人信息或设定信息等某些状态更新，属于被动攻击。</p>\n<p>跨站点请求伪造有可能会造成以下等影响。</p>\n<ul>\n<li>利用已通过认证的用户权限更新设定信息等</li>\n<li>利用已通过认证的用户权限购买商品 </li>\n<li>利用已通过认证的用户权限在留言板上发表言本论</li>\n</ul>\n<p>跨站点请求伪造的案例：\n以留言板为例，留言板一般只允许已认证并且登录的用户在留言板上发表内容。</p>\n<p>那么攻击者可以在留言板上发表含有恶意代码的评论：<code>&#x3C;img src = \'http://example.com/msg?q=你好\'></code>，那么在其他用户认证并登陆之后，会自动发送请求：<code>GET http://example.com/msg?q=你好 HTTP/1.1</code>,这个时候攻击者就可以利用其他用户的身份干坏事。</p>\n<h3 id="其他安全漏洞"><a href="#%E5%85%B6%E4%BB%96%E5%AE%89%E5%85%A8%E6%BC%8F%E6%B4%9E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>其他安全漏洞</h3>\n<h4 id="密码破解"><a href="#%E5%AF%86%E7%A0%81%E7%A0%B4%E8%A7%A3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>密码破解</h4>\n<p>密码破解攻击(Password Cracking)即算出密码，突破认证。攻击不仅限于 Web 应用，还包括其他的系统 (如 FTP 或 SSH 等)，本节将会讲解对具备认证功能的 Web 应用进行的密码破解。\n密码破解一般有：穷举法和字典攻击两种</p>\n<h4 id="dos攻击"><a href="#dos%E6%94%BB%E5%87%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dos攻击</h4>\n<p>DoS 攻击(Denial of Service attack)是一种让运行中的服务呈停止状态的攻击。有时也叫做服务停止攻击或拒绝服务攻击。DoS 攻击的对象不仅限于 Web 网站，还包括网络设备及服务器等。\n主要有以下两种 DoS 攻击方式：</p>\n<ul>\n<li>集中利用访问请求造成资源过载，资源用尽的同时，实际上服务也就呈停止状态。</li>\n<li>通过攻击安全漏洞使服务停止。\n其中，集中利用访问请求的DoS攻击，单纯来讲就是发送大量的合法请求。服务器很难分辨何为正常请求，何为攻击请求，因此很难防止DoS攻击。</li>\n</ul>\n<p>多台计算机发起的 DoS 攻击称为 DDoS 攻击(Distributed Denial of Service attack)。DDoS 攻击通常利用那些感染病毒的计算机作为攻击者的攻击跳板。</p>\n<h4 id="后门程序backdoor"><a href="#%E5%90%8E%E9%97%A8%E7%A8%8B%E5%BA%8Fbackdoor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>后门程序(Backdoor)</h4>\n<p>是指开发设置的隐藏入口，可不按正常步骤使用受限功能。利用后门程序就能够使用 原本受限制的功能。\n通常的后门程序分为以下 3 种类型。 </p>\n<ul>\n<li>开发阶段作为 Debug 调用的后门程序 </li>\n<li>开发者为了自身利益植入的后门程序 </li>\n<li>攻击者通过某种方法设置的后门程序\n可通过监视进程和通信的状态发现被植入的后门程序。但设定在 Web 应用中的后门程序，由于和正常使用时 区别不大，通常很难发现。</li>\n</ul>',frontmatter:{title:"web攻击与防范",img:"./img/2016-09-23.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"September 22, 2016",path:"blog/http/2016-09-23-web攻击与防范.md",slug:"/blog/2016/09/23/web攻击与防范.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}},{node:{frontmatter:{title:"What is 'this' in JavaScript"},fields:{slug:"/blog/2018/06/24/this.html"}}},{node:{frontmatter:{title:"react 性能优化：arrow function in react"},fields:{slug:"/blog/2018/06/15/arrow-in-react.html"}}},{node:{frontmatter:{title:"react 条件渲染"},fields:{slug:"/blog/2018/05/26/react-if.html"}}},{node:{frontmatter:{title:"higher-order component(HOC)"},fields:{slug:"/blog/2018/05/21/hight-order-component.html"}}},{node:{frontmatter:{title:"arrow function this"},fields:{slug:"/blog/2018/03/16/arrow-function-this.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--responsive-image"},fields:{slug:"/blog/2018/03/10/responsive-img.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--placeholder"},fields:{slug:"/blog/2018/03/09/placeholder.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--lazy-load"},fields:{slug:"/blog/2018/03/08/lazy-loading.html"}}}]}},pathContext:{slug:"/blog/2016/09/23/web攻击与防范.html"}}}});