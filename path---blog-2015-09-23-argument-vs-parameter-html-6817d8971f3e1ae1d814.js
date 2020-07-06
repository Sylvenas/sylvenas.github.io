webpackJsonp([50806470763578],{471:function(e,t){e.exports={data:{markdownRemark:{html:'<h3 id="argument-vs-parameter"><a href="#argument-vs-parameter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Argument vs Parameter</h3>\n<p>在试用函数的时候常常遇到这两个名词，翻译上有很多种，常见的有<code class="gatsby-code-text">形参</code>和<code class="gatsby-code-text">实参</code>却让挺多的人容易混淆，为了以后的清晰明了，做个总结😄。</p>\n<p>引用<a href="https://stackoverflow.com/questions/1788923/parameter-vs-argument/1788926#1788926">stack overflow</a>上的回答，</p>\n<blockquote>\n<p>An argument is an expression used when calling the method.</p>\n</blockquote>\n<blockquote>\n<p>A parameter is the variable which is part of the method’s signature (method declaration).</p>\n</blockquote>\n<p>那么翻译过来就是:</p>\n<blockquote>\n<p>Argument 是用于调用函数的具体的数据</p>\n</blockquote>\n<blockquote>\n<p>Parameter 是函数签名的一部分，是函数的描述的一部分</p>\n</blockquote>\n<p>抛弃了以前的<code class="gatsby-code-text">形参</code>和<code class="gatsby-code-text">实参</code>，在函数调用的时候把<code class="gatsby-code-text">实参</code>赋值给<code class="gatsby-code-text">形参</code>的描述，来单纯的理解，<code class="gatsby-code-text">Argument</code>就是函数调用的时候的具体参数，<code class="gatsby-code-text">Parameter</code>就是函数的描述的一部分。</p>\n<p>实际上在JavaScript中也没有函数签名这一说法，因为函数签名是用来做参数类型检查，重载等等，而这些JavaScript根本就没有，在使用参数的时候只需要遍历<code class="gatsby-code-text">arguments</code>这个类数组对象就可以了。</p>',frontmatter:{title:"Argument vs Parameter",img:"./img/2015-09-23.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"September 22, 2015",path:"blog/javascript/2015-09-23-argument-vs-parameter.md",slug:"/blog/2015/09/23/argument-vs-parameter.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}}]}},pathContext:{slug:"/blog/2015/09/23/argument-vs-parameter.html"}}}});