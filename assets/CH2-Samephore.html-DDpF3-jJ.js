import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as n}from"./app-DCTCPPGQ.js";const s={},p=n(`<p>信号量是我最喜欢的计算机科学家之一: Edsger Dijkstra 发明的一种同步机制, 用于解决多线程的同步问题</p><hr><p>信号量可以看作互斥锁的超集, 互斥锁只有两种状态: 锁住和未锁住, 而信号量可以有多种状态, 用于解决更复杂的同步问题</p><h2 id="信号量的定义" tabindex="-1"><a class="header-anchor" href="#信号量的定义"><span>信号量的定义</span></a></h2><p>我们实现互斥锁时, 用一个变量储存0或1来表示锁的状态, 当锁为0时则说明锁住了</p><p>而信号量在此基础上, 可以有0, 1, 2, 3, ...等多种状态, 每当一个线程获取锁时, 信号量的值减一, 当信号量的值为0 (或小于0) 时, 说明锁住了, 此时其他线程获取锁时, 会阻塞</p><p>当一个线程完成了critical section中的操作后, 会将信号量的值加一, 并向所有阻塞的线程发出信号, 通知它们可以继续执行了</p><p>当然, 我们将阻塞的线程加入一个等待队列中, 直接从中选取一个线程来继续执行, 而不用让这些线程来&quot;争抢&quot;信号量的资源</p><p>这个队列中的线程我们就可以按照之前的进程调度中介绍过的方法来安排调度了: 包括了<strong>优先级调度</strong>, <strong>FIFO</strong>等</p><h2 id="信号量的使用" tabindex="-1"><a class="header-anchor" href="#信号量的使用"><span>信号量的使用</span></a></h2><p>下面是C语言中的信号量使用: 声明与初始化:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token class-name">sem_t</span> s<span class="token punctuation">;</span>
<span class="token function">sem_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>int sem_init(sem_t *sem, int pshared, unsigned int value);</code><ul><li>第一个参数是信号量变量</li><li>第二个参数是进程间的共享标志, 如果为0则在当前线程中使用, 如果为其他参数则可以在不同进程中按照参数值进行共享</li><li>第三个参数是信号量的初始值</li></ul></li></ul><p>所以信号量也可以用于进程之间的通信</p><p>P操作:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token function">sem_wait</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>这个操作使信号量的值减一, 如果信号量的值小于0, 则阻塞当前线程</li></ul><p>V操作:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token function">sem_post</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>这个操作使信号量的值加一, 并向所有阻塞的线程发出信号, 通知它们可以继续执行了</li></ul>`,20),o=[p];function i(l,c){return t(),a("div",null,o)}const d=e(s,[["render",i],["__file","CH2-Samephore.html.vue"]]),m=JSON.parse(`{"path":"/posts/operating-system/ostep/CH2-Samephore.html","title":"信号量","lang":"zh-CN","frontmatter":{"title":"信号量","tag":["operating-system","concurrency"],"categories":["操作系统","Three-Easy-Pieces"],"math":true,"mermaid":true,"date":"2023-05-18T00:00:00.000Z","description":"信号量是我最喜欢的计算机科学家之一: Edsger Dijkstra 发明的一种同步机制, 用于解决多线程的同步问题 信号量可以看作互斥锁的超集, 互斥锁只有两种状态: 锁住和未锁住, 而信号量可以有多种状态, 用于解决更复杂的同步问题 信号量的定义 我们实现互斥锁时, 用一个变量储存0或1来表示锁的状态, 当锁为0时则说明锁住了 而信号量在此基础上,...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/operating-system/ostep/CH2-Samephore.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"信号量"}],["meta",{"property":"og:description","content":"信号量是我最喜欢的计算机科学家之一: Edsger Dijkstra 发明的一种同步机制, 用于解决多线程的同步问题 信号量可以看作互斥锁的超集, 互斥锁只有两种状态: 锁住和未锁住, 而信号量可以有多种状态, 用于解决更复杂的同步问题 信号量的定义 我们实现互斥锁时, 用一个变量储存0或1来表示锁的状态, 当锁为0时则说明锁住了 而信号量在此基础上,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T13:35:40.000Z"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"operating-system"}],["meta",{"property":"article:tag","content":"concurrency"}],["meta",{"property":"article:published_time","content":"2023-05-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T13:35:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"信号量\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T13:35:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":2,"title":"信号量的定义","slug":"信号量的定义","link":"#信号量的定义","children":[]},{"level":2,"title":"信号量的使用","slug":"信号量的使用","link":"#信号量的使用","children":[]}],"git":{"createdTime":1712936892000,"updatedTime":1713101740000,"contributors":[{"name":"DnullP","email":"dnull123p@gmail.com","commits":2}]},"readingTime":{"minutes":1.94,"words":582},"filePathRelative":"posts/operating-system/ostep/CH2-Samephore.md","localizedDate":"2023年5月18日","excerpt":"<p>信号量是我最喜欢的计算机科学家之一: Edsger Dijkstra 发明的一种同步机制, 用于解决多线程的同步问题</p>\\n<hr>\\n<p>信号量可以看作互斥锁的超集, 互斥锁只有两种状态: 锁住和未锁住, 而信号量可以有多种状态, 用于解决更复杂的同步问题</p>\\n<h2>信号量的定义</h2>\\n<p>我们实现互斥锁时, 用一个变量储存0或1来表示锁的状态, 当锁为0时则说明锁住了</p>\\n<p>而信号量在此基础上, 可以有0, 1, 2, 3, ...等多种状态, 每当一个线程获取锁时, 信号量的值减一, 当信号量的值为0 (或小于0) 时, 说明锁住了, 此时其他线程获取锁时, 会阻塞</p>","autoDesc":true}`);export{d as comp,m as data};
