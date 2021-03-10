webpackJsonp([0xdaa7d2fc33dc],{473:function(a,t){a.exports={data:{markdownRemark:{html:'<p>作为一个软件开发者，你一定会对网络应用如何工作有一个完整的层次化的认知，同样这里也包括这些应用所用到的技术：像浏览器，HTTP，HTML，网络服务器，需求处理等等。</p>\n<p> 本文将更深入的研究当你输入一个网址的时候，后台到底发生了一件件什么样的事～</p>\n<h3 id="1-首先嘛，你得在浏览器里输入要网址"><a href="#1-%E9%A6%96%E5%85%88%E5%98%9B%EF%BC%8C%E4%BD%A0%E5%BE%97%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E9%87%8C%E8%BE%93%E5%85%A5%E8%A6%81%E7%BD%91%E5%9D%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 首先嘛，你得在浏览器里输入要网址</h3>\n<p>例如:<code class="gatsby-code-text">https://facebook.com/</code></p>\n<h3 id="2-浏览器查找域名的ip地址"><a href="#2-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9F%A5%E6%89%BE%E5%9F%9F%E5%90%8D%E7%9A%84ip%E5%9C%B0%E5%9D%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. 浏览器查找域名的IP地址</h3>\n<p>导航的第一步是通过访问的域名找出其IP地址。DNS查找过程如下：</p>\n<ul>\n<li>浏览器缓存 – 浏览器会缓存DNS记录一段时间。 有趣的是，操作系统没有告诉浏览器储存DNS记录的时间，这样不同浏览器会储存个自固定的一个时间（2分钟到30分钟不等）。</li>\n<li>系统缓存 – 如果在浏览器缓存里没有找到需要的记录，浏览器会做一个系统调用（windows里是gethostbyname）。这样便可获得系统缓存中的记录。  </li>\n<li>路由器缓存 – 接着，前面的查询请求发向路由器，它一般会有自己的DNS缓存。</li>\n<li>ISP DNS 缓存 – 接下来要check的就是ISP缓存DNS的服务器。在这一般都能找到相应的缓存记录。</li>\n<li>递归搜索 – 你的ISP的DNS服务器从根域名服务器开始进行递归搜索，从<code class="gatsby-code-text">.com</code>顶级域名服务器到<code class="gatsby-code-text">Facebook</code>的域名服务器。一般DNS服务器的缓存中会有.com域名服务器中的域名，所以到顶级服务器的匹配过程不是那么必要了。</li>\n</ul>\n<p>DNS递归查找如下图所示：</p>\n<p>DNS有一点令人担忧，这就是像<code class="gatsby-code-text">wikipedia.org</code>或者<code class="gatsby-code-text">facebook.com</code>这样的整个域名看上去只是对应一个单独的IP地址。还好，有几种方法可以消除这个瓶颈：</p>\n<ul>\n<li>循环DNS 是DNS查找时返回多个IP时的解决方案。举例来说，Facebook.com实际上就对应了四个IP地址。</li>\n<li>负载平衡器 是以一个特定IP地址进行侦听并将网络请求转发到集群服务器上的硬件设备。 一些大型的站点一般都会使用这种昂贵的高性能负载平衡器。</li>\n<li>地理DNS 根据用户所处的地理位置，通过把域名映射到多个不同的IP地址提高可扩展性。这样不同的服务器不能够更新同步状态，但映射静态内容的话非常好。</li>\n<li>Anycast 是一个IP地址映射多个物理主机的路由技术。 美中不足，Anycast与TCP协议适应的不是很好，所以很少应用在那些方案中。</li>\n</ul>\n<p>大多数DNS服务器使用Anycast来获得高效低延迟的DNS查找。</p>\n<p>这个是正常的网络环境的情况,不过国内有DNS污染,可以在你查询DNS的时候给你个假的ip,你用了错误的ip就上不<code class="gatsby-code-text">facebook.com</code>了</p>\n<p>即使你能解决DNS污染的问题(如改hosts),<code class="gatsby-code-text">facebook.com</code>的ip早就被XXX给屏蔽了你还是上不去</p>\n<p>即使你有功夫网没屏蔽的<code class="gatsby-code-text">facebook.com</code>的ip,但是你要访问的URL中有<code class="gatsby-code-text">facebook.com</code>这个关键字,你路过XXX还是会被挂断,这个浏览器一般是显示<code class="gatsby-code-text">连接被远程服务器关闭</code>之类的错误.</p>\n<h3 id="3浏览器给web服务器发送一个http请求"><a href="#3%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BB%99web%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%91%E9%80%81%E4%B8%80%E4%B8%AAhttp%E8%AF%B7%E6%B1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.浏览器给web服务器发送一个HTTP请求</h3>\n<p>因为像Facebook主页这样的动态页面，打开后在浏览器缓存中很快甚至马上就会过期，毫无疑问他们不能从中读取。</p>\n<p>所以，浏览器将把一下请求发送到Facebook所在的服务器：\nGET <a href="https://facebook.com/">https://facebook.com/</a> HTTP/1.1\nAccept: application/x-ms-application, image/jpeg, application/xaml+xml, […]\nUser-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; […]\nAccept-Encoding: gzip, deflate\nConnection: Keep-Alive\nHost: facebook.com\nCookie: datr=1265876274-[…]; locale=en<em>US; lsd=WW[…]; c</em>user=2101[…]</p>\n<p>GET 这个请求定义了要读取的URL:<code class="gatsby-code-text">http://facebook.com/</code>。 浏览器自身定义(<code class="gatsby-code-text">User-Agent</code>头)， 和它希望接受什么类型的相应 (<code class="gatsby-code-text">Accept and Accept-Encoding</code>头). <code class="gatsby-code-text">Connection</code>头要求服务器为了后边的请求不要关闭TCP连接。</p>\n<p>请求中也包含浏览器存储的该域名的<code class="gatsby-code-text">cookies</code>。可能你已经知道，在不同页面请求当中，<code class="gatsby-code-text">cookies</code>是与跟踪一个网站状态相匹配的键值。这样<code class="gatsby-code-text">cookies</code>会存储登录用户名，服务器分配的密码和一些用户设置等。Cookies会以文本文档形式存储在客户机里，每次请求时发送给服务器。</p>\n<p>用来看原始HTTP请求及其相应的工具很多。作者比较喜欢使用fiddler，当然也有像FireBug这样其他的工具。这些软件在网站优化时会帮上很大忙。</p>\n<p>除了获取请求，还有一种是发送请求，它常在提交表单用到。发送请求通过URL传递其参数(e.g.: <code class="gatsby-code-text">http://robozzle.com/puzzle.aspx?id=85</code>)。发送请求在请求正文头之后发送其参数。</p>\n<p>像<code class="gatsby-code-text">http://facebook.com/</code>中的斜杠是至关重要的。这种情况下，浏览器能安全的添加斜杠。而像<code class="gatsby-code-text">http: //example.com/folderOrFile</code>这样的地址，因为浏览器不清楚<code class="gatsby-code-text">folderOrFile</code>到底是文件夹还是文件，所以不能自动添加<code class="gatsby-code-text">斜杠</code>。这时，浏览器就不加斜杠直接访问地址，服务器会响应一个重定向，结果造成一次不必要的握手。</p>\n<h3 id="4-facebook服务的永久重定向响应"><a href="#4-facebook%E6%9C%8D%E5%8A%A1%E7%9A%84%E6%B0%B8%E4%B9%85%E9%87%8D%E5%AE%9A%E5%90%91%E5%93%8D%E5%BA%94" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. facebook服务的永久重定向响应</h3>\n<p>图中所示为Facebook服务器发回给浏览器的响应：\nHTTP/1.1 301 Moved Permanently\nCache-Control: private, no-store, no-cache, must-revalidate, post-check=0,\npre-check=0\nExpires: Sat, 01 Jan 2000 00:00:00 GMT\nLocation: <a href="http://www.facebook.com/">http://www.facebook.com/</a>\nP3P: CP=“DSP LAW”\nPragma: no-cache\nSet-Cookie: made<em>write</em>conn=deleted; expires=Thu, 12-Feb-2009 05:09:50 GMT;\npath=/; domain=.facebook.com; httponly\nContent-Type: text/html; charset=utf-8\nX-Cnection: close\nDate: Fri, 12 Feb 2010 05:09:51 GMT\nContent-Length: 0</p>\n<p>服务器给浏览器响应一个<code class="gatsby-code-text">301</code>永久重定向响应，这样浏览器就会访问<code class="gatsby-code-text">http://www.facebook.com/</code> 而非<code class="gatsby-code-text">http://facebook.com/</code>。</p>\n<p>为什么服务器一定要重定向而不是直接发会用户想看的网页内容呢？这个问题有好多有意思的答案。</p>\n<p>其中一个原因跟搜索引擎排名有关。你看，如果一个页面有两个地址，就像<code class="gatsby-code-text">http://www.igoro.com/</code>和<code class="gatsby-code-text">http://igoro.com/</code>，搜索引擎会认为它们是两个网站，结果造成每一个的搜索链接都减少从而降低排名。而搜索引擎知道<code class="gatsby-code-text">301永久重定向</code>是什么意思，这样就会把访问带<code class="gatsby-code-text">www</code>的和不带<code class="gatsby-code-text">www</code>的地址归到同一个网站排名下。</p>\n<p>还有一个是用不同的地址会造成缓存友好性变差。当一个页面有好几个名字时，它可能会在缓存里出现好几次。</p>\n<h3 id="5-浏览器跟踪重定向地址"><a href="#5-%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B7%9F%E8%B8%AA%E9%87%8D%E5%AE%9A%E5%90%91%E5%9C%B0%E5%9D%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. 浏览器跟踪重定向地址</h3>\n<p>现在，浏览器知道了<code class="gatsby-code-text">http://www.facebook.com/</code>才是要访问的正确地址，所以它会发送另一个获取请求：\nGET <a href="http://www.facebook.com/">http://www.facebook.com/</a> HTTP/1.1\nAccept: application/x-ms-application, image/jpeg, application/xaml+xml, […]\nAccept-Language: en-US\nUser-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; […]\nAccept-Encoding: gzip, deflate\nConnection: Keep-Alive\nCookie: lsd=XW[…]; c_user=21[…]; x-referer=[…]\nHost: www.facebook.com</p>\n<p>头信息以之前请求中的意义相同。</p>\n<h3 id="6-服务器处理请求"><a href="#6-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%A4%84%E7%90%86%E8%AF%B7%E6%B1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6. 服务器“处理”请求</h3>\n<p>服务器接收到获取请求，然后处理并返回一个响应。</p>\n<p>这表面上看起来是一个顺向的任务，但其实这中间发生了很多有意思的东西- 就像作者博客这样简单的网站，何况像facebook那样访问量大的网站呢！</p>\n<ul>\n<li>\n<p>Web服务器软件\nweb服务器软件（像<code class="gatsby-code-text">IIS</code>和<code class="gatsby-code-text">Apache</code>）接收到HTTP请求，然后确定执行什么请求处理来处理它。请求处理就是一个能够读懂请求并且能生成HTML来进行响应的程序（像<code class="gatsby-code-text">Java</code>,<code class="gatsby-code-text">node.js</code>,<code class="gatsby-code-text">PHP</code>,<code class="gatsby-code-text">RUBY</code>…）。</p>\n</li>\n<li>\n<p>请求处理\n请求处理阅读请求及它的参数和cookies。它会读取也可能更新一些数据，并将数据存储在服务器上。然后，需求处理会生成一个HTML响应。</p>\n</li>\n</ul>\n<p>所有动态网站都面临一个有意思的难点 -如何存储数据。小网站一半都会有一个SQL数据库来存储数据，存储大量数据和/或访问量大的网站不得不找一些办法把数据库分配到多台机器上。解决方案 有：sharding （基于主键值讲数据表分散到多个数据库中），复制，利用弱语义一致性的简化数据库。</p>\n<p>委托工作给批处理是一个廉价保持数据更新的技术。举例来讲，Fackbook得及时更新新闻feed，但数据支持下的“你可能认识的人”功能只需要每晚更新 （作者猜测是这样的，改功能如何完善不得而知）。批处理作业更新会导致一些不太重要的数据陈旧，但能使数据更新耕作更快更简洁。</p>\n<h3 id="7-服务器发回一个html响应"><a href="#7-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%91%E5%9B%9E%E4%B8%80%E4%B8%AAhtml%E5%93%8D%E5%BA%94" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7. 服务器发回一个HTML响应</h3>\n<p>图中为服务器生成并返回的响应：\nHTTP/1.1 200 OK\nCache-Control: private, no-store, no-cache, must-revalidate, post-check=0,\npre-check=0\nExpires: Sat, 01 Jan 2000 00:00:00 GMT\nP3P: CP=“DSP LAW”\nPragma: no-cache\nContent-Encoding: gzip\nContent-Type: text/html; charset=utf-8\nX-Cnection: close\nTransfer-Encoding: chunked\nDate: Fri, 12 Feb 2010 09:05:55 GMT</p>\n<p>2b3Tn@[…]</p>\n<p>整个响应大小为<code class="gatsby-code-text">35kB</code>，其中大部分在整理后以blob类型传输。</p>\n<p>内容编码头告诉浏览器整个响应体用gzip算法进行压缩。解压blob块后，你可以看到如下期望的HTML：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token doctype">&lt;!DOCTYPE html></span>     \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/1999/xhtml<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xml:</span>lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>facebook<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span> no_js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>   \n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/html; charset=utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-language<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n...</code></pre>\n      </div>\n<p>关于压缩，头信息说明了是否缓存这个页面，如果缓存的话如何去做，有什么cookies要去设置（前面这个响应里没有这点）和隐私信息等等。</p>\n<p>请注意报头中把<code class="gatsby-code-text">Content-type</code>设置为<code class="gatsby-code-text">text/html</code>。报头让浏览器将该响应内容以<code class="gatsby-code-text">HTML形式呈现</code>，而不是以文件形式下载它。浏览器会根据报头信息决定如何解释该响应，不过同时也会考虑像URL扩展内容等其他因素。</p>\n<h3 id="8-浏览器开始显示html"><a href="#8-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%80%E5%A7%8B%E6%98%BE%E7%A4%BAhtml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>8. 浏览器开始显示HTML</h3>\n<p>在浏览器没有完整接受全部HTML文档时，它就已经开始显示这个页面了：</p>\n<h3 id="9-浏览器发送获取嵌入在html中的对象"><a href="#9-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%91%E9%80%81%E8%8E%B7%E5%8F%96%E5%B5%8C%E5%85%A5%E5%9C%A8html%E4%B8%AD%E7%9A%84%E5%AF%B9%E8%B1%A1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>9. 浏览器发送获取嵌入在HTML中的对象</h3>\n<p>在浏览器显示HTML时，它会注意到需要获取其他地址内容的标签。这时，浏览器会发送一个获取请求来重新获得这些文件。</p>\n<p>下面是几个我们访问facebook.com时需要重获取的几个URL：\n图片\n<a href="http://static.ak.fbcdn.net/rsrc.php/z12E0/hash/8q2anwu7.gif">http://static.ak.fbcdn.net/rsrc.php/z12E0/hash/8q2anwu7.gif</a><br>\n<a href="http://static.ak.fbcdn.net/rsrc.php/zBS5C/hash/7hwy7at6.gif">http://static.ak.fbcdn.net/rsrc.php/zBS5C/hash/7hwy7at6.gif</a><br>\n…\nCSS 式样表\n<a href="http://static.ak.fbcdn.net/rsrc.php/z448Z/hash/2plh8s4n.css">http://static.ak.fbcdn.net/rsrc.php/z448Z/hash/2plh8s4n.css</a><br>\n<a href="http://static.ak.fbcdn.net/rsrc.php/zANE1/hash/cvtutcee.css">http://static.ak.fbcdn.net/rsrc.php/zANE1/hash/cvtutcee.css</a><br>\n…\nJavaScript 文件\n<a href="http://static.ak.fbcdn.net/rsrc.php/zEMOA/hash/c8yzb6ub.js">http://static.ak.fbcdn.net/rsrc.php/zEMOA/hash/c8yzb6ub.js</a><br>\n<a href="http://static.ak.fbcdn.net/rsrc.php/z6R9L/hash/cq2lgbs8.js">http://static.ak.fbcdn.net/rsrc.php/z6R9L/hash/cq2lgbs8.js</a><br>\n…</p>\n<p>这些地址都要经历一个和HTML读取类似的过程。所以浏览器会在DNS中<code class="gatsby-code-text">查找域名</code>，<code class="gatsby-code-text">发送请求</code>，<code class="gatsby-code-text">重定向</code>等等…</p>\n<p>但不像动态页面那样，静态文件会允许浏览器对其进行缓存。有的文件可能会不需要与服务器通讯，而从缓存中直接读取。服务器的响应中包含了静态文件保存的期限信息，所以浏览器知道要把它们缓存多长时间。还有，每个响应都可能包含像版本号一样工作的<code class="gatsby-code-text">ETag</code>头（被请求变量的实体值），如果浏览器观察到文件的版本<code class="gatsby-code-text">ETag</code>信息已经存在，就马上停止这个文件的传输。</p>\n<p>试着猜猜看<code class="gatsby-code-text">fbcdn.net</code>在地址中代表什么？聪明的答案是<code class="gatsby-code-text">Facebook内容分发网络</code>。Facebook利用内容分发网络（<code class="gatsby-code-text">CDN</code>）分发像图片，<code class="gatsby-code-text">CSS</code>表和<code class="gatsby-code-text">JavaScript</code>文件这些静态文件。所以，这些文件会在全球很多CDN的数据中心中留下备份。</p>\n<p>静态内容往往代表站点的带宽大小，也能通过CDN轻松的复制。通常网站会使用第三方的CDN。例如，Facebook的静态文件由最大的CDN提供商Akamai来托管。</p>\n<p>举例来讲，当你试着<code class="gatsby-code-text">ping static.ak.fbcdn.net</code>的时候，可能会从某个<code class="gatsby-code-text">akamai.net</code>服务器上获得响应。有意思的是，当你同样再ping一次的时候，响应的服务器可能就不一样，这说明幕后的负载平衡开始起作用了。</p>\n<h3 id="10-浏览器发送异步（ajax）请求"><a href="#10-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%91%E9%80%81%E5%BC%82%E6%AD%A5%EF%BC%88ajax%EF%BC%89%E8%AF%B7%E6%B1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>10. 浏览器发送异步（AJAX）请求</h3>\n<p>在Web 2.0伟大精神的指引下，页面显示完成后客户端仍与服务器端保持着联系。</p>\n<p>以 Facebook聊天功能为例，它会持续与服务器保持联系来及时更新你那些亮亮灰灰的好友状态。为了更新这些头像亮着的好友状态，在浏览器中执行的 JavaScript代码会给服务器发送异步请求。这个异步请求发送给特定的地址，它是一个按照程式构造的获取或发送请求。还是在Facebook这个例 子中，客户端发送给<code class="gatsby-code-text">http://www.facebook.com/ajax/chat/buddy_list.php</code>一个发布请求来获取你好友里哪个在线的状态信息。</p>\n<p>提起这个模式，就必须要讲讲<code class="gatsby-code-text">AJAX</code>— <code class="gatsby-code-text">异步JavaScript和XML</code>，虽然服务器为什么用XML格式来进行响应也没有个一清二白的原因。再举个例子吧，对于异步请求，Facebook会返回一些JavaScript的代码片段。</p>\n<p>除了其他，fiddler这个工具能够让你看到浏览器发送的异步请求。事实上，你不仅可以被动的做为这些请求的看客，还能主动出击修改和重新发送它们。AJAX请求这么容易被蒙，可着实让那些计分的在线游戏开发者们郁闷的了。（当然，可别那样骗人家~）</p>\n<p>Facebook聊天功能提供了关于AJAX一个有意思的问题案例：把数据从服务器端推送到客户端。因为HTTP是一个请求-响应协议，所以聊天服务器不能把新消息发给客户。取而代之的是客户端不得不隔几秒就轮询下服务器端看自己有没有新消息。</p>\n<blockquote>\n<p>现在来看ajax轮询已经是一个过时的技术方案了，更加成熟强大的websoket是更好的解决方案</p>\n</blockquote>\n<p>这些情况发生时长轮询是个减轻服务器负载挺有趣的技术。如果当被轮询时服务器没有新消息，它就不理这个客户端。而当尚未超时的情况下收到了该客户的新消息，服务器就会找到未完成的请求，把新消息做为响应返回给客户端。</p>\n<p>总结一下</p>\n<p>希望看了本文，你能明白不同的网络模块是如何协同工作的</p>',frontmatter:{title:"What really happens when you navigate to a url?",img:"./img/2016-03-23.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"March 22, 2016",path:"blog/http/2016-03-23-what-really-happens-when-you-nav-to-a-url.md",slug:"/blog/2016/03/23/what-really-happens-when-you-nav-to-a-url.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}}]}},pathContext:{slug:"/blog/2016/03/23/what-really-happens-when-you-nav-to-a-url.html"}}}});