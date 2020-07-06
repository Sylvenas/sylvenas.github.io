webpackJsonp([0x814f4b846fd2],{541:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Node.js是基于Chrome浏览器的V8引擎构建的，也就说明它的模型与浏览器是类似的。我们的JavaScript会运行在单个进程的单个线程上。这样有一个好处：</p>\n<ul>\n<li>状态单一</li>\n<li>没有锁</li>\n<li>不需要线程间同步</li>\n<li>减少系统上下文的切换</li>\n<li>有效提高单核CPU的使用率</li>\n</ul>\n<p>但是<code class="gatsby-code-text">V8引擎</code>的单进程单线程并不是完美的结构，现如今CPU基本上都是多核的。真正的服务器往往有好几个CPU（像我们的线上物理机有12个核），所以，这就将抛出Node.js实际应用中的第一个问题：“如何充分利用多核CPU服务器？”</p>\n<p>另外，由于Node.js执行在单线程上，一旦单线程出现未捕获的异常，就会造成这个进程crash。所以就遇到了第二个问题：“如何保证进程的健壮性和稳定性？”</p>\n<blockquote>\n<p>从严格意义上来讲，Node.js其实并不是真正的单线程架构，因为Node.js自身还有<code class="gatsby-code-text">I/O线程</code>存在（<code class="gatsby-code-text">网络I/O</code>、<code class="gatsby-code-text">磁盘I/O</code>），这些<code class="gatsby-code-text">I/O线程</code>是由更底层的<code class="gatsby-code-text">libuv</code>处理，这部分线程对于JavaScript开发者来说不用特意关注。JavaScript代码永远运行在V8上，是单线程的。所以表面上来看Node.js是单线程的。</p>\n</blockquote>\n<h2 id="服务器进程模型的进化"><a href="#%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E7%A8%8B%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%BF%9B%E5%8C%96" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>服务器进程模型的进化</h2>\n<h3 id="1同步单进程服务器"><a href="#1%E5%90%8C%E6%AD%A5%E5%8D%95%E8%BF%9B%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.同步单进程服务器</h3>\n<p>这类服务器是最早出现的，其执行模型是同步的（<code class="gatsby-code-text">基于read或select I/O模型</code>），它的服务模式是一次只能处理一个请求，其他的请求都需要按照顺序依次等待接受处理。这就意味着除了当前的请求被处理之外，剩下的请求都是处于阻塞等待的状态。所以，它的处理能力特别的低下。</p>\n<p>假如服务器每次响应请求处理的时间为N秒，那么这类服务器的QPS为: <strong>1/N</strong>。</p>\n<h3 id="2同步多进程服务器"><a href="#2%E5%90%8C%E6%AD%A5%E5%A4%9A%E8%BF%9B%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2.同步多进程服务器</h3>\n<p>为了解决上面的同步单进程服务器无法处理的并发问题，这类服务器通过进程的复制同时服务更多的请求和用户。<code class="gatsby-code-text">一个请求需要一个进程来服务，也就是100个请求就需要100个进程来进行服务，这需要很大的代价</code>。因为在进程的复制总会复制进程内部的状态，对于每个连接都进行这样的复制的话，相同的状态会在内存中存在很多份，造成浪费。同时这个过程会因为复制很多个进程影响进行的启动时间。而且服务器的进程数量也是有上限的。所以，这个模型并没有实质上解决并发问题。</p>\n<p>假如这类服务器的进程数上限为M，每个请求处理的时间为N秒，那么这类服务器的QPS为: <strong>M*1/N</strong>。</p>\n<h3 id="3同步多进程多线程服务器"><a href="#3%E5%90%8C%E6%AD%A5%E5%A4%9A%E8%BF%9B%E7%A8%8B%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.同步多进程多线程服务器</h3>\n<p>为了解决进程复制中的资源浪费问题，多线程被引入了服务模型，<code class="gatsby-code-text">从一个进程处理一个请求改为一个线程处理一个请求</code>。线程相对于进程的开销要小许多，而且线程之间可以共享数据。此外<code class="gatsby-code-text">可以利用线程池来减少创建和销毁线程的开销</code>。但是多线程所面临的并发问题只能说比多进程好点而已，因为每个线程需要一定内存来存放自己的堆栈。另外一个CPU核心只能处理一件事，系统是通过将CPU切分为时间片的方法来让线程可以均匀地使用CPU资源，在系统切换线程的过程中也会进行线程的上下文切换（切换为当前线程的堆栈），当线程数量过多时进行上下文切换会非常耗费时间。所以在大的并发量下，多线程结构还是无法做到强大的伸缩性。大名鼎鼎的Apache服务器就是采用了这样的架构，所以出现了著名的<a href="http://www.kegel.com/c10k.html">C10K</a>(client 10000，单机1万个并发连接)问题。</p>\n<p>计算机领域有很多算法或者是方法都会用到一种智慧：“空间换时间”。 即用使用更多内存的方式换取更快的运行速度：<strong>事先创建出很多进程/线程 ，就像一个池子，这样虽然会浪费一部分的内存，但连接过来的时候就省去了 开启进程/线程的时间</strong>。</p>\n<p>但这种方式会有一个比较显著的缺陷：当并发数大于进程/线程池的大小的时候 性能就会发生很大的下滑。</p>\n<p>我们忽略系统进行线程的上下文切换的开销，假如这类服务器可以创建M个进程，一个进程可以使用L个线程，每个请求处理的时间为N秒，那么它的QPS为: <strong>M*L/N</strong>。</p>\n<h3 id="4单进程单线程下机遇事件驱动的服务器"><a href="#4%E5%8D%95%E8%BF%9B%E7%A8%8B%E5%8D%95%E7%BA%BF%E7%A8%8B%E4%B8%8B%E6%9C%BA%E9%81%87%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4.单进程单线程下机遇事件驱动的服务器</h3>\n<p>为了解决<code class="gatsby-code-text">C10K</code>以及解决更高并发的问题，基于<code class="gatsby-code-text">epoll（效率最高的I/O事件通知机制）</code>的事件驱动模型出现了。采用单线程避免了不必要的内存开销和上下文切换开销。</p>\n<p>不过这种基于事件的服务器模型存在的文章刚开始提出两个问题：<strong>“CPU的利用率和健壮性”</strong>。</p>\n<p>另外，所有的请求处理都在单线程上进行，影响事件驱动服务模型性能的只有CPU的计算能力，它的上限决定了这类服务器的性能上限，但它不受多进程多线程模式中资源上限的影响，可伸缩性比前两者都高。如果可以解决多核CPU的利用问题，那么带来的性能提升是非常高的。</p>\n<p>那么，非阻塞&#x26;事件驱动这么好，为什么大家没有一开始就采用这种方式呢？ 原因有二：</p>\n<ul>\n<li>非阻塞&#x26;事件驱动需要系统的支持，提供<a href="">non-blocking</a>版的整套系统调用。</li>\n<li>非阻塞&#x26;事件驱动编程难度较大，需要很高的抽象思维能力， 把整个任务拆解；采用<a href="">有限状态机</a>编程才能实现。</li>\n</ul>\n<h2 id="nodejs的多进程架构"><a href="#nodejs%E7%9A%84%E5%A4%9A%E8%BF%9B%E7%A8%8B%E6%9E%B6%E6%9E%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node.js的多进程架构</h2>\n<p>面对单进程单线程对多核使用率不高的问题，按照之前的经验，每个进程各使用一个CPU即可，以此实现多核CPU的利用。Node提供了<code class="gatsby-code-text">child_process</code>模块，并且也提供了<code class="gatsby-code-text">fork()</code>方法来实现进程的复制(只要是进程复制，都需要一定的资源和时间。Node复制进程需要不小于10M的内存和不小于30ms的时间)。</p>\n<p>这样的解决方案就是<code class="gatsby-code-text">*nix</code>系统上最经典的<code class="gatsby-code-text">Master-Worker</code>模式，又称为<code class="gatsby-code-text">主从模式</code>。这种典型并行处理业务模式的分布式架构具备较好的可伸缩性（可伸缩性实际上是和并行算法以及并行计算机体系结构放在一起讨论的。某个算法在某个机器上的可扩放性反映该算法是否能有效利用不断增加的CPU。）和稳定性。<code class="gatsby-code-text">主进程不负责具体的业务处理，而是负责调度和管理工作进程，工作进程负责具体的业务处理</code>，所以，工作进程的稳定性是开发人员需要关注的。</p>\n<p><img src="https://p1.music.126.net/qdlJ73MuwWcb-nnEcKMPaw==/109951164831029228.jpg" alt="Master-Worker 模式"></p>\n<p>通过<code class="gatsby-code-text">fork()</code>复制的进程都是一个独立的进程，这个进程中有着独立而全新的V8实例。虽然Node提供了<code class="gatsby-code-text">fork()</code>用来复制进程使每个CPU内核都使用上，但是依然要记住<code class="gatsby-code-text">fork()</code>进程代价是很大的。好在Node通过事件驱动在单个线程上可以处理大并发的请求。</p>\n<blockquote>\n<p>注意：这里启动多个进程只是为了充分将CPU资源利用起来，而不是为了解决并发问题。</p>\n</blockquote>\n<h2 id="nodejs创建子进程的4种方式"><a href="#nodejs%E5%88%9B%E5%BB%BA%E5%AD%90%E8%BF%9B%E7%A8%8B%E7%9A%844%E7%A7%8D%E6%96%B9%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node.js创建子进程的4种方式</h2>\n<h3 id="spawn"><a href="#spawn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>spawn</h3>\n<p>创建一个子进程来执行命令。</p>\n<h3 id="exec"><a href="#exec" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>exec</h3>\n<p>创建一个子进程来执行命令，和spawn不同的是方法参数不同，它可以传入回调函数来获取子进程的状态。</p>\n<h3 id="execfile"><a href="#execfile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>execFile</h3>\n<p>启动一个子进程来执行指定文件。注意，该文件的顶部必须声明SHEBAN符号(#!)用来指定进程类型。</p>\n<h3 id="fork"><a href="#fork" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>fork</h3>\n<p>和spawn类似，不同点在于它常见Node.js子进程只需要指定要执行的JavaScript文件模块即可。</p>\n<blockquote>\n<p>注意：后面的3种方法都是spawn的延伸应用</p>\n</blockquote>\n<h2 id="nodejs进程间通信"><a href="#nodejs%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node.js进程间通信</h2>\n<p>在<code class="gatsby-code-text">Master-Worker</code>模式中，要实现主进程管理和调度工作进程的功能，需要主进程和工作进程之间的通信。它们通过消息来传递内容，而不是共享文件或直接操作相关资源，这是比较轻量和无依赖的做法。</p>\n<p>通过<code class="gatsby-code-text">fork()</code>或者其他的API创建子进程之后，为了实现父子进程之间的通信，父进程与子进程之间将会创建<code class="gatsby-code-text">IPC通道</code>。通过<code class="gatsby-code-text">IPC通道</code>，父子进程之间才可以传递消息。</p>\n<h3 id="ipc进程间通信原理"><a href="#ipc%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1%E5%8E%9F%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>IPC(进程间通信)原理</h3>\n<p>IPC全称<code class="gatsby-code-text">Inter-Process Communication</code>,也就是进程间通信。进程间通信的目的是为了让不同的进程能够互相访问资源并进行协调工作。Node中的IPC创建和实现过程如下：</p>\n<p><img src="https://p1.music.126.net/F89tTZ-wK1YjtDVtBZJX9A==/109951164831082511.jpg" alt="IPC"></p>\n<p>父进程在实际创建子进程之前，会先创建IPC通道并监听他，然后才真正创建出子进程。子进程在启动的过程中会去链接这个已经存在IPC通道，从而完成父子进程之间的连接。</p>\n<p><img src="https://p1.music.126.net/6KY4sZOD6xBAZ9ahNNI4-g==/109951164831080631.jpg" alt="先创建IPC通道，再创建子进程"></p>\n<h3 id="句柄传递"><a href="#%E5%8F%A5%E6%9F%84%E4%BC%A0%E9%80%92" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>句柄传递</h3>\n<p>创建好进程之间的IPC之后，如果仅仅只用来发送一些简单数据，显然不够我们的实际使用。\n理想情况下，不管服务启动了多少个子进程都应该经过同一个<code class="gatsby-code-text">Master</code>进程来进行控制和调度。所以所有请求都应该先经过同一个端口，然后通过<code class="gatsby-code-text">Master</code>进程交由具体的<code class="gatsby-code-text">Worker</code>进程处理。</p>\n<h4 id="代理模式"><a href="#%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>代理模式</h4>\n<p>让每个进程监听不同的端口，其中主进程监听主端口(80/443),主进程对外接受所有的网络请求，再将这些请求代理到不同的端口进程上。</p>\n<p><img src="https://p1.music.126.net/TialgPma6vuI1LbIYlqNvg==/109951164831137877.jpg" alt="代理模式"></p>\n<p>通过代理，可以避免端口不能重复监听的问题，也可以在代理进程做适当的负载均衡，这样每个子进程都可以均衡的处理服务。</p>\n<blockquote>\n<p>由于进程每接受到一个连接，将会用到一个文件描述符，因此代理模式连接工作进程的过程需要用到两个文件描述符。操作系统的文件描述符是有限的。所以这种方案影响了系统的扩展能力</p>\n</blockquote>\n<h4 id="句柄共享模式"><a href="#%E5%8F%A5%E6%9F%84%E5%85%B1%E4%BA%AB%E6%A8%A1%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>句柄共享模式</h4>\n<p>Node.js提供了进程间发送句柄的功能。有了这个功能我们可以不使用代理模式方案，使主进程接受到socket请求之后，将这个socket对象直接转发给工作进程，而不是重新遇工作进程之间创建新的socket连接来转发数据。这样的话，<code class="gatsby-code-text">文件描述符浪费的问题可以轻轻松解决</code>。</p>\n<blockquote>\n<p>在程序设计中，句柄（handle）是一种特殊的智能指针。当一个应用程序要引用其他系统（如数据库、操作系统）所管理的内存块或对象时，就要使用句柄。</p>\n</blockquote>\n<p>这样所有的请求都是由子进程处理了。整个过程中，服务的过程发生了一次改变如下图：</p>\n<p><img src="https://p1.music.126.net/mnBvVWBWU30b1oMpslqjVw==/109951164831277069.jpg"></p>\n<p>主进程发送完句柄并关闭监听之后，就成了下图的机构。</p>\n<p><img src="https://p1.music.126.net/yFb3Yd_oP1n-qMqF_liPSw==/109951164831277559.jpg"></p>\n<p>多个应用监听相同的端口时，文件描述符同一时间只能被某个进程所用，也就是网络请求发送的服务器端时，只有一个幸运的进程能够抢到连接，只有它能为这个请求进行服务。所以这些进程服务是抢占式的。</p>\n<p>至此，以此介绍了创建子进程、进程间通信的IPC通道实现、句柄在进程间的发送和使用原理、端口共用等细节。通过这些基础技术，在多核的CPU服务器上，让Node进程能够充分利用资源不是难题。</p>',frontmatter:{title:"Node.js 与多核CPU",img:"./img/2018-03-06.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"October 21, 2018",path:"blog/node/2018-10-22-node-process-stability.md",slug:"/blog/2018/10/22/node-process-stability.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}}]}},pathContext:{slug:"/blog/2018/10/22/node-process-stability.html"}}}});