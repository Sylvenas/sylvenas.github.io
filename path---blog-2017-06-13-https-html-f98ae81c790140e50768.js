webpackJsonp([51993022045857],{651:function(e,t){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>本篇文章为摘抄，原作者：接水怪，原文地址：<a href="https://mp.weixin.qq.com/s/uUGy94fp3x8khCTR0gZeJA">https://mp.weixin.qq.com/s/uUGy94fp3x8khCTR0gZeJA</a></p>\n</blockquote>\n<p>本篇文章将带你深入 HTTPS 加解密原理，希望看完能够有这些收获：</p>\n<ul>\n<li>\n<p>明白 HTTPS 到底解决了什么问题</p>\n</li>\n<li>\n<p>理解对称加密与非对称加密的原理和使用场景</p>\n</li>\n<li>\n<p>明白 CA 机构和根证书到底起了什么作用</p>\n</li>\n</ul>\n<blockquote>\n<p>近几年来，各大公司都在大力推进 HTTPS 的建设。Google Chrome将非 HTTPS 的网站标注为「不安全」，苹果要求 APP 中需要使用HTTPS进行通信，微信小程序也要求使用HTTPS协议。那么，我们为什么非要做这么一件事呢？</p>\n</blockquote>\n<p>我们先来看看HTTP。HTTP（Hypertext Transfer Protocol）超文本传输协议，是一种用于分布式、协作式和超媒体信息系统的应用层协议，可以说 HTTP 是当代互联网通信的基础。</p>\n<p>但是，HTTP 有着一个致命的缺陷，那就是内容是<code class="gatsby-code-text">明文传输</code>的，没有经过任何加密，而这些<code class="gatsby-code-text">明文数据</code>会经过<code class="gatsby-code-text">WiFi</code>、<code class="gatsby-code-text">路由器</code>、<code class="gatsby-code-text">运营商</code>、<code class="gatsby-code-text">机房</code>等多个物理设备节点，如果在这中间任意一个节点被监听，传输的内容就会完全暴露，，这一攻击手法叫做MITM（Man In The Middle）<code class="gatsby-code-text">中间人</code>攻击。</p>\n<p>下面举个例子说明中间人攻击：</p>\n<p>可以拿小时候上课传纸条来类比，你坐在教室靠墙的一边，想要传一句「晚上放学操场我等你」给坐在窗边的小红，中间要经过六七个人的传递。虽然你把纸条对折了一下，但是防君子不防小人，中间的所有人都可以很轻易地打开纸条看到你想要说什么。</p>\n<p>只是看还好，如果有小刚也喜欢小红，看到你俩马上就要甜甜蜜蜜地回家了，心有不甘，换了一张纸条，改成了「晚上放学你自己回家吧，我要去网吧玩游戏」。</p>\n<p>小红看到你要抛弃她自己去玩游戏，非常伤心，开始在纸条上质问「说好的一起回家呢，为什么要去打游戏，哼」。</p>\n<p>在小红的纸条传回来的路上，小刚又改了纸条「你玩你的游戏去吧，我要和小刚回家」。</p>\n<p>于是，你和小红都倍感伤心，小刚横刀夺爱，而你一头雾水。</p>\n<p>回忆一下几年前遍地都是的<code class="gatsby-code-text">运营商劫持</code>，当你访问一个本来很正常的网页，但页面上却莫名其妙出现了一些广告标签、跳转脚本、欺骗性的红包按钮，甚至有时候本来要下载一个文件，最后下下来却变成了另外一个完全不同的东西，这些都是被运营商劫持了HTTP明文数据的现象。</p>\n<p><img src="https://p1.music.126.net/t32S3r9XgRnI_puDg5aM7A==/109951164860302464.webp" alt="运行商劫持"></p>\n<p>还有各大公司的员工安全培训里都有一条「不要连陌生的WiFi」，也是类似的原因，恶意WiFi的控制者可以看到和篡改HTTP明文传输的信息。</p>\n<p>为了解决HTTP明文传输数据可能导致的安全问题，1994年网景公司提出了HTTPS（HyperText Transfer Protocol Secure）超文本传输安全协议，数据通信仍然是HTTP，但利用<code class="gatsby-code-text">SSL/TLS加密数据包</code>。</p>\n<h2 id="https实现原理"><a href="#https%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTTPS实现原理</h2>\n<blockquote>\n<p>前面说到，HTTPS其实就是将HTTP的数据包再通过SSL/TLS加密后传输，那么SSL/TLS又是什么呢？</p>\n</blockquote>\n<p>SSL（Secure Sockets Layer）安全套接层和TLS（Transport Layer Security）传输层安全协议其实是一套东西。</p>\n<p>网景公司在1994年提出HTTPS协议时，使用的是SSL进行加密。后来IETF（Internet Engineering Task Force）互联网工程任务组将SSL进一步标准化，于1999年公布第一版TLS协议文件TLS 1.0。目前最新版的TLS协议是TLS 1.3，于2018年公布。</p>\n<h3 id="工作流程"><a href="#%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>工作流程</h3>\n<p>我们先来看看HTTPS的加解密流程。</p>\n<p><img src="https://p1.music.126.net/kHIiP0BnJXxBW7qL0TD6cA==/109951164860310486.webp" alt="HTTPS流程"></p>\n<p>1.用户在浏览器发起HTTPS请求（如 <a href="https://www.mogu.com/%EF%BC%89%EF%BC%8C%E9%BB%98%E8%AE%A4%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%9A%84443%E7%AB%AF%E5%8F%A3%E8%BF%9B%E8%A1%8C%E8%BF%9E%E6%8E%A5%EF%BC%9B">https://www.mogu.com/），默认使用服务端的443端口进行连接；</a></p>\n<p>2.HTTPS需要使用一套CA数字证书，证书内会附带一个公钥Pub，而与之对应的私钥Private保留在服务端不公开；</p>\n<p>3.服务端收到请求，返回配置好的包含公钥Pub的证书给客户端；</p>\n<p>4.客户端收到证书，校验合法性，主要包括是否在有效期内、证书的域名与请求的域名是否匹配，上一级证书是否有效（递归判断，直到判断到系统内置或浏览器配置好的根证书），如果不通过，则显示HTTPS警告信息，如果通过则继续；</p>\n<p>5.客户端生成一个用于对称加密的随机Key，并用证书内的公钥Pub进行加密，发送给服务端；</p>\n<p>6.服务端收到随机Key的密文，使用与公钥Pub配对的私钥Private进行解密，得到客户端真正想发送的随机Key；</p>\n<p>7.服务端使用客户端发送过来的随机Key对要传输的HTTP数据进行对称加密，将密文返回客户端；</p>\n<p>8.客户端使用随机Key对称解密密文，得到HTTP数据明文；</p>\n<p>9.后续HTTPS请求使用之前交换好的随机Key进行对称加解密。</p>\n<h3 id="对称加密与非对称加密"><a href="#%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E4%B8%8E%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对称加密与非对称加密</h3>\n<blockquote>\n<p>又是对称加密又是非对称加密，一会公钥一会私钥一会随机Key，为什么要这么复杂呢，一套搞到底不好么？</p>\n</blockquote>\n<h4 id="对称加密"><a href="#%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对称加密</h4>\n<p>对称加密是指有一个密钥，用它可以对一段明文加密，加密之后也只能用这个密钥来解密得到明文。如果通信双方都持有密钥，且天知地知你知我知，绝对不会有别的人知道，那么通信安全自然是可以得到保证的（在密钥足够强的情况下）。</p>\n<p>然而，在HTTPS的传输场景下，服务端事先并不知道客户端是谁，你也不可能在事先不通过互联网和每一个网站的管理员都悄悄商量好一个通信密钥出来，那么<code class="gatsby-code-text">必然存在一个密钥在互联网上传输的过程</code>，如果在传输过程中被别人监听到了，那么后续的所有加密都是无用功。</p>\n<p>这时，我们就需要另一种神奇的加密类型，非对称加密。</p>\n<h4 id="非对称加密"><a href="#%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>非对称加密</h4>\n<p>非对称加密有<code class="gatsby-code-text">两个密钥</code>，一个是公钥，另一个是私钥。一般来说，公钥用来加密，这时密文只能用私钥才能解开。</p>\n<p>那么，当客户端发起连接请求，服务端将公钥传输过去，客户端利用公钥加密好信息，再将密文发送给服务端，服务端里有私钥可以解密。</p>\n<p>但是，当服务端要返回数据，如果用公钥加密，那么客户端并没有私钥用来解密，而如果用私钥加密，客户端虽然有公钥可以解密，<code class="gatsby-code-text">但这个公钥之前就在互联网上传输过</code>，很有可能已经有人拿到，并不安全，所以这一过程只用非对称加密是不能满足的。</p>\n<p>只有一组公钥私钥只能保证单程的加解密，那么如果我们准备两组公钥私钥呢，是不是可以解决这个问题？来看下面这个过程:</p>\n<ul>\n<li>\n<p>服务端有非对称加密的公钥A1，私钥A2；</p>\n</li>\n<li>\n<p>客户端有非对称加密的公钥B1，私钥B2；</p>\n</li>\n<li>\n<p>客户端向服务端发起请求，服务端将公钥A1返回给客户端；</p>\n</li>\n<li>\n<p>浏览器收到公钥A1，将自己保存的公钥B1发送给服务端；</p>\n</li>\n<li>\n<p>之后浏览器所有向客户端发送的数据，使用公钥B1加密，客户端可以使用私钥B2解密；</p>\n</li>\n<li>\n<p>客户端所有向服务端发送的数据，使用公钥A1加密，服务端可以使用私钥A2解密。</p>\n</li>\n</ul>\n<p>此时，两条传输方向的数据都经过非对称加密，都能保证安全性，此方案从加密的角度来考虑非常完美，那么为什么不采用这种方案呢？</p>\n<p><strong>最主要的原因是非对称加解密耗时要远大于对称加解密，对性能有很大损耗，大家的使用体验很差。</strong></p>\n<p>所以，我们才最终选用了上文介绍到非对称加密+对称加密的方案，再复习一下：</p>\n<p>服务端有非对称加密的公钥A1，私钥A2；</p>\n<p>客户端发起请求，服务端将公钥A1返回给客户端；</p>\n<p>客户端随机生成一个对称加密的密钥K，用公钥A1加密后发送给服务端；</p>\n<p>服务端收到密文后用自己的私钥A2解密，得到对称密钥K，此时完成了安全的对称密钥交换，解决了对称加密时密钥传输被人窃取的问题</p>\n<p>之后双方通信都使用密钥K进行对称加解密。</p>\n<blockquote>\n<p>生成私钥和公钥的方法可参考：<a href="/blog/2019/06/11/node-http.html#%E5%88%9B%E5%BB%BA%E7%A7%81%E9%92%A5">Node.js与http</a></p>\n</blockquote>\n<blockquote>\n<p>对称加密和非对称加密的核心区别：对称加密是用同一个密钥对内容进行加密和解密(加密解密对称)；非对称加密是指通过公钥来对内容加密，但是只能通过私钥解密(加密解密不对称)。</p>\n</blockquote>\n<p>看起来是一个非常完美的方案，<strong>兼顾了安全性和性能，但是，真的就安全了么？</strong></p>\n<h3 id="ca颁发机构"><a href="#ca%E9%A2%81%E5%8F%91%E6%9C%BA%E6%9E%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CA颁发机构</h3>\n<p>依然考虑<code class="gatsby-code-text">中间人攻击</code>的情况，非对称加密的算法都是<code class="gatsby-code-text">公开</code>的，所有人都可以自己生成一对公钥私钥。</p>\n<p>当服务端向客户端返回公钥A1的时候，<code class="gatsby-code-text">中间人将其替换成自己的公钥B1传送给浏览器</code>。</p>\n<p>而浏览器此时一无所知，傻乎乎地使用公钥B1加密了密钥K发送出去，<code class="gatsby-code-text">又被中间人截获</code>，中间人利用自己的私钥B2解密，得到密钥K，再使用服务端的公钥A1加密传送给服务端，完成了通信链路，而服务端和客户端毫无感知。</p>\n<p><img src="https://p1.music.126.net/PfJ2UJkXsEizck9GU0N7ag==/109951164860337789.webp" alt="HTTPS中间人攻击"></p>\n<p>出现这一问题的核心原因是<code class="gatsby-code-text">客户端无法确认收到的公钥是不是真的是服务端发来的</code>。为了解决这个问题，互联网引入了一个<code class="gatsby-code-text">公信机构</code>，这就是CA。</p>\n<p>服务端在使用HTTPS前，去经过认证的CA机构申请颁发一份<code class="gatsby-code-text">数字证书</code>，数字证书里包含有证书持有者、证书有效期、公钥等信息，服务端将证书发送给客户端，客户端校验证书身份和要访问的网站身份确实一致后再进行后续的加密操作。</p>\n<p>但是，如果中间人也聪明一点，<code class="gatsby-code-text">只改动了证书中的公钥部分</code>，客户端依然不能确认证书是否被篡改，这时我们就需要一些防伪技术了。</p>\n<p>前面说过，非对称加密中一般公钥用来加密，私钥用来解密，虽然私钥加密理论上可行，但由于数学上的设计这么做并不适合，那么私钥就只有解密这个功能了么？</p>\n<p>私钥除了解密外的真正用途其实还有一个，就是数字签名，其实就是一种防伪技术，只要有人篡改了证书，那么数字签名必然校验失败。具体过程如下:</p>\n<p>1.CA机构拥有自己的一对公钥和私钥</p>\n<p>2.CA机构在颁发证书时对证书明文信息进行哈希</p>\n<p>3.将哈希值用私钥进行加签，得到数字签名</p>\n<p><strong>明文数据和数字签名组成证书，传递给客户端。</strong></p>\n<p>1.客户端得到证书，分解成明文部分Text和数字签名Sig1</p>\n<p>2.用CA机构的公钥进行解签，得到Sig2（由于CA机构是一种公信身份，因此在系统或浏览器中会内置CA机构的证书和公钥信息）</p>\n<p>3.用证书里声明的哈希算法对明文Text部分进行哈希得到H</p>\n<p>4.当自己计算得到的哈希值T与解签后的Sig2相等，表示证书可信，没有被篡改</p>\n<p>这时，签名是由CA机构的私钥生成的，中间人篡改信息后无法拿到CA机构的私钥，保证了证书可信。</p>\n<p>在这个过程中，系统或浏览器中内置的CA机构的证书和公钥成为了至关重要的环节，这也是CA机构公信身份的证明，如果系统或浏览器中没有这个CA机构，那么客户端可以不接受服务端传回的证书，显示HTTPS警告。</p>\n<p>实际上CA机构的证书是一条信任链，A信任B，B信任C，以掘金的证书为例，掘金向RapidSSL申请一张证书，而RapidSSL的CA身份是由DigiCert Global根CA认证的，构成了一条信任链。</p>\n<p>各级CA机构的私钥是绝对的私密信息，一旦CA机构的私钥泄露，其公信力就会一败涂地。之前就有过几次<code class="gatsby-code-text">CA机构私钥泄露</code>，引发信任危机，各大系统和浏览器只能纷纷吊销内置的对应CA的根证书。</p>\n<blockquote>\n<p>证书创建可以参考：<a href="/blog/2019/06/11/node-http.html#%E5%88%9B%E5%BB%BA%E8%AF%81%E4%B9%A6">Node.js与http</a></p>\n</blockquote>\n<h2 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h2>\n<p>HTTPS 的出发点是解决HTTP明文传输时信息被篡改和监听的问题。</p>\n<ul>\n<li>\n<p>为了兼顾性能和安全性，使用了非对称加密+对称加密的方案。</p>\n</li>\n<li>\n<p>为了保证公钥传输中不被篡改，又使用了非对称加密的数字签名功能，借助CA机构和系统根证书的机制保证了HTTPS证书的公信力。</p>\n</li>\n</ul>',frontmatter:{title:"HTTPS与网络安全",img:"./img/2015-03-25.jpg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"June 12, 2017",path:"blog/http/2017-06-13-https.md",slug:"/blog/2017/06/13/https.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}}]}},pathContext:{slug:"/blog/2017/06/13/https.html"}}}});