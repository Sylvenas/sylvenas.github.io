webpackJsonp([0x7f9feedd3a31],{503:function(e,t){e.exports={data:{markdownRemark:{html:'<h3 id="简介"><a href="#%E7%AE%80%E4%BB%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>简介</h3>\n<p>编写可维护的代码的一个最重要的方面就是能够总结出代码中反复出现的问题，以及总结问题，找到这一类问题的解决方案。</p>\n<p>设计模式并不仅仅出现在计算机领域，生活中的方方面面都可以总结出设计模式，设计模式的明确提出，最早可以追溯到一位名为<code class="gatsby-code-text">克里斯托弗·亚历山大</code>的建筑设计师。他经常会写一些关于解决设计问题方面的总结文章。有一天，亚历山大想到，一次又一次的使用某些设计结构可以达到他的理想效果。</p>\n<p>亚历山大后来和Sara Ishikawa、Murray Silverstein合作创作了一门设计语言，并在1977年发表了一篇名为《A Pattern Language》的文章，用来帮助设计师和建筑师完成设计和规划。后来被整编成了一本书，国内翻译的书名叫做《建筑模式语言》。</p>\n<p>大约30年前，软件工程师开始把Alexander写的关于设计模式的文章第一次写进了技术文档，来指导那些新手开发人员提高编程技巧。但是有一点需要明确的提出，设计模式背后的这些概念在软件行业早已有大量的开发人员在使用，只是这些概念和形式没有被正式的提炼和总结出来。</p>\n<p>在计算机领域发表的关于设计模式的最有标志性的作品为：《Design Patterns:Elements of Reusable Object-Oriented Software》,这本书由Erich Gamma、Richard Helm、Ralph Johnson 和 John Vlissides在1995年撰写完成，这四位后来被称为<code class="gatsby-code-text">GoF</code>(四人帮)。</p>\n<p>GOF的这本书，极大的推动了设计模式在计算机领域的理论和实践，这本书表述了很多设计模式的开发技术和缺陷，以及在当今世界中大量使用的23个核心的面向对象设计模式。</p>\n<p>设计模式的一般定义如下：设计模式是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结，使用设计模式是为了可重用代码、让代码更容易被他人理解并保证代码可靠性。</p>\n<h3 id="设计模式有什么用"><a href="#%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>设计模式有什么用</h3>\n<p>简单来说：设计模式至少有一下几个用途：</p>\n<ul>\n<li>\n<p>设计模式来源众多开发人员的经验和智慧，它们是从许多优秀的软件系统中总结出的成功的、能够实现可维护性复用的设计方案。也许我们苦思冥想，大量工作经验总结而来的一个’自以为很高效简明的方法’，不过是设计模式中的一种。学习设计模式毫无疑问可以提高开发和设计效率。</p>\n</li>\n<li>\n<p>设计模式提供了一套通用的设计词汇和一种通用的形式来方便开发人员之间沟通和交流，使得日常工作交流和工作代码的合作上更加通俗易懂。</p>\n</li>\n<li>\n<p>大部分设计模式都兼顾了系统的可重用性和可扩展性，使得我们可以更好的重用一些已有的设计方案、功能模块甚至一个完整的软件系统，避免了自己编写大量的重复代码。</p>\n</li>\n</ul>\n<h3 id="个人观点"><a href="#%E4%B8%AA%E4%BA%BA%E8%A7%82%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>个人观点</h3>\n<p>关于金庸小说中到底是招式重要还是内功重要的争论从未停止，我们在这里并不分析张无忌的九阳神功和令狐冲的独孤九剑到底哪个厉害，但是我想每一个武林人士梦寐以求的应该是类似于乔峰的既有淋漓的招式又有深厚的内功。</p>\n<p>而在计算机领域，也有一个招式和内功：向众多开发语言、框架、类库的API,各种编程工具，等等都是外家功夫；而数据结构、算法、设计模式、软件工程等则为内功。像现在社会上大量的培训班、速成班，都是教授外家功夫，大家都可以很快的学会，而内功的修炼则绝不是三个月、五个月可以速成的，必须要有自己的深刻的理解和大量的实践总结而来。</p>',frontmatter:{title:"JavaScript设计模式简介",img:"./img/2018-01-03.jpeg",author:["Sylvenas"],excerpt:"JavaScript 设计模式简介",catalogue:null},fields:{date:"January 02, 2018",path:"blog/design-pattern/2018-01-03-desgin-pattern-in-js.md",slug:"/blog/2018/01/03/desgin-pattern-in-js.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}}]}},pathContext:{slug:"/blog/2018/01/03/desgin-pattern-in-js.html"}}}});