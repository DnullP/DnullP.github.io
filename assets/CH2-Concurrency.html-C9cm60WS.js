import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as d,c as l,e as i,a as e,b as n}from"./app-DCTCPPGQ.js";const s={},t=i(`<h1 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程"><span>多线程</span></a></h1><p>我们在之前对进程有了一个相对详细的介绍, 接下来要介绍的是线程和并发</p><p>现在假设这么一个场景, 我们有一个程序正在运行, 然后它产生了一个中断, 并且调用了IO操作 如果按照之前的想法, 我们的进程将会堵塞, 然后OS会切换到另一个进程, 但是如果我们不想要切换到其它进程 (没有其他进程或者该进程需要快速完成), 我们就该在进程执行IO的时候, 做一些其他的不需要IO的工作</p><p>如何在一个进程中安排这些工作, 使得它们能够并发执行呢?</p><p>我们引入了<strong>线程(thread)</strong> 的概念, 线程可以认为是进程的一个子任务, 一个进程可以有多个线程, 所有的线程共享进程的内存空间</p><p>对于一个单CPU的系统, 一个时刻只能进行一个任务, 所以多线程实际上是多个线程轮流执行, 中间伴随着线程的<strong>上线文切换</strong>, 为一个进程安排多个子任务的想方法我们可以称为<strong>并发(concurrency)</strong></p><p>而对于一个多CPU的系统, 一个时刻可以有多个线程 (进程)同时运行, 此时同时运行的线程之间互相影响, 这个情况我们称它们为<strong>并行(parallelism)</strong> 的.</p><h2 id="多处理器的进程-线程-调度" tabindex="-1"><a class="header-anchor" href="#多处理器的进程-线程-调度"><span>多处理器的进程(线程)调度</span></a></h2><h3 id="缓存一致性" tabindex="-1"><a class="header-anchor" href="#缓存一致性"><span>缓存一致性</span></a></h3><p>我们知道, 在内存之上还有一级缓存. 二级缓存, 三级缓存等位于CPU之中的缓存, 用于加速CPU的访问数据的速度 其结构如下:</p><div class="language-Mermaid line-numbers-mode" data-ext="Mermaid" data-title="Mermaid"><pre class="language-Mermaid"><code>graph
    CPU_1 --&gt; L1_1
    CPU_2 --&gt; L1_2
    L1_2 --&gt; L2
    L1_1 --&gt; L2
    L2 --&gt; L3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多处理器在进程(线程)调度时存在以下问题: 如果一个数据从内存读入了CPU_1的一级缓存, 然后进行了运算, 但是还没有写回到内存中, 只是储存在了缓存中, 而此时CPU_2也读取了这个数据, 那么CPU_1的修改就没有落实到CPU_2所读取的数据上</p><p>我们可以使用锁机制来解决这个问题, 也可以用总线监测来维护缓存的准确性: 大致原理是让修改了某个数据的缓存监测总线上的数据流, 如果检测到其他缓存需要读取自己缓存了的数据, 则将自己的缓存数据输出, 不过关于这方面还有很多细节需要考虑, 计算机组成原理也提要提上日程</p><h3 id="缓存亲和性-cache-affinity" tabindex="-1"><a class="header-anchor" href="#缓存亲和性-cache-affinity"><span>缓存亲和性(Cache Affinity)</span></a></h3><p>如果我们有多个处理器, 每个处理器有自己的缓存, 一个进程如果一直在一个处理器上运行, 那么它的缓存就会一直被使用, 从而在这个特定的CPU上运行较快, 如果此时将其调度到另一个处理器上, 那么它需要重新读取缓存, 产生性能浪费</p><h3 id="多处理器的进程调度方式" tabindex="-1"><a class="header-anchor" href="#多处理器的进程调度方式"><span>多处理器的进程调度方式</span></a></h3><p>基于以上的两个问题, 书中中提出了以下多处理器的进程调度算法:</p><ul><li>SQMS(single-queue multi-processor scheduling) 全局维护一个队列, 其中储存需要运行的进程, 然后如果一个处理器处于空闲状态, 则从队列中取出一个进程运行处理(只处理一个time slice的时间段就结束), 同时为每个进程维护锁 这个方案在于难以维护缓存亲和性</li><li>MQMS(multi-queue multi-processor scheduling) 为每个处理器维护一个队列, 每个队列中储存需要运行的进程, 同时维护进程锁 这个方案的问题在于, 如果一个处理器的进程处理完了, 其需要检查其他处理器的进程队列, 然后根据情况从中取出进程运行, 这个过程产生额外开销, 包括检查多个处理器的队列以及将进程的上下文切换到空处理器, 我们称为进程移民(migration)</li></ul><p>关于linux中使用的多CPU调度算法包括O(1)算法, CFS算法和BF调度算法, 不多叙述</p><h2 id="多线程数据共享" tabindex="-1"><a class="header-anchor" href="#多线程数据共享"><span>多线程数据共享</span></a></h2><p>类似于多个进程对于共享数据的问题, 我们编写多线程程序时, 所有的线程共享一个内存空间, 同样存在数据一致性的问题 一个线程读取了一个数据, 将其写入了寄存器并计算, 但是在汇编级别上还没有将数据写回内存 (或者在写回内存的指令上还没进行到访存阶段), 此时另一个线程读取了这个数据, 并进行计算, 同样导致了数据的不一致</p><p>对于这样的共享数据问题, 我们使用锁来解决: 锁的概念主要建立在两个对象之上, 一个是要保护的数据, 一个是对保护数据做的操作</p><p>比如以下的代码:</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>void *thread(void *vargp) {
    P(&amp;mutex);
    cnt++;
    V(&amp;mutex);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),r=e("p",null,[e("code",null,"cnt"),n("是我们要保护的数据, 我们对于这个要保护的数据维护一个互斥量:"),e("code",null,"mutex"),n(", 然后加锁就是在整个涉及到"),e("code",null,"cnt"),n("数据的操作前给互斥量"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"+"),e("mn",null,"1")]),e("annotation",{encoding:"application/x-tex"},"+1")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"+"),e("span",{class:"mord"},"1")])])]),n(", 在完成操作后给互斥量"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"−"),e("mn",null,"1")]),e("annotation",{encoding:"application/x-tex"},"-1")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"−"),e("span",{class:"mord"},"1")])])]),n(", 其他的操作也同样的操作, 并且在执行前如果互斥量已经被加锁, 说明有其他线程(进程)在对这个数据进行操作, 所以会进入阻塞以等待互斥量被释放")],-1),c=i(`<p>互斥量只能为0和1, 我们可以看作信号量的子集 (信号量可以为任意正整数), 这只算是并发同步的入门解决方案, 接下来我们还要讨论多种功能的实现方式</p><hr><h2 id="线程的api" tabindex="-1"><a class="header-anchor" href="#线程的api"><span>线程的API</span></a></h2><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>#include &lt;pthread.h&gt;
#include &lt;stdio.h&gt;

void* thread(void* arg) {
    printf(&quot;Hello World!&quot;);
    return NULL;
}

int main() {
    pthread_t t;
    pthread_create(&amp;t, NULL, thread, NULL);
    pthread_join(t, NULL);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于Linux中C所支持的线程API包括以下的内容:</p><ul><li><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>pthread_create(pthread* thread,
               pthread_attr_t* attr,
               void* (*start_routine)(void*),
               void* arg
               )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建进程所用的函数, 其中<code>thread</code>是线程的指针, <code>attr</code>是线程的属性 (包括了线程的栈大小, 线程的优先级等), <code>start_routine</code>是线程的入口函数, <code>arg</code>是传递给线程的参数 一旦一个线程创建以后立即开始运行, 如果创建成功, 则返回0, 否则返回错误码</p></li><li><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>pthread_join(pthread_t thread, void** retval)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待线程结束, <code>thread</code>是要等待的线程, <code>retval</code>是线程的返回值 这个函数用于等待某个线程结束, 可以用于确定线程完成的先后顺序</p></li></ul><h3 id="线程中的锁" tabindex="-1"><a class="header-anchor" href="#线程中的锁"><span>线程中的锁</span></a></h3><ul><li>互斥锁 通过使用<strong>互斥量</strong> (互斥量为0或1) 来实现的锁, 如果互斥量为1, 则表示锁被某个线程占用, 接下来的操作需要等待锁的释放, 所以线程进入阻塞状态, 如果为0则说明可以占用锁, 将锁加一, 实现上锁</li></ul><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>#include &lt;pthread.h&gt;
#include &lt;stdio.h&gt;

pthread_mutex_t lock = PTHREAD_MUTEX_INITIALIZER;

void* add_one(void* x) {
    int* a = (int*)x;
    pthread_mutex_lock(&amp;lock);

    for (int i = 0; i &lt; 1000000; i++) {
        *a = *a + 1;
    }
    pthread_mutex_unlock(&amp;lock);
}

int main() {
    int* a = malloc(sizeof(int));
    *a = 0;
    pthread_t t_1, t_2;
    pthread_create(&amp;t_1, NULL, add_one, a);
    pthread_create(&amp;t_2, NULL, add_one, a);
    pthread_join(t_1, NULL);
    pthread_join(t_2, NULL);
    printf(&quot;%d\\n&quot;, *a);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是使用互斥量实现多线程累加的程序, 通过一个全局的<code>lock</code>来完成加锁, <code>PTHREAD_MUTEX_INITIALIZER</code>是一个宏, 其声明如下:</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>#define GENERIC_INITIALIZER    ((void *) (size_t) -1)
#define PTHREAD_MUTEX_INITIALIZER   (pthread_mutex_t)GENERIC_INITIALIZER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过将其设定为一个固定的初始值, <code>pthread_mutex_lock()</code>函数如果检测到为该初始值, 则对锁分配相应的资源, 之后锁的值就改变了, 所以如果一个锁不为初始值, 则说明其已经分配完毕, 不会再对其分配资源, 如果不使用一个锁或者<code>PTHREAD_MUTEX_INITIALIZER</code>来初始化锁就进行加锁解锁, 可能造成程序崩溃</p><ul><li>自旋锁 自旋锁和互斥锁的作用相似, 但是实现方式和性能有所差异</li></ul><p>互斥锁是检测到锁占用后阻塞, 并切换到其他线程计算, 而自旋锁是在检测到锁占用时进入循环等待, 在锁释放后再占用锁</p><p>这样的好处是: 如果线程对锁的占用时间很短, 上下文切换会消费一定的时间, 如果只是进入循环等待的话, 则可以很快进入下一步的操作</p><p>此外, 自旋锁只适用于多处理器的环境, 因为等待需要两个线程并行执行, 并且一者等待另一者, 单核处理器只会进入死锁</p><p>自旋锁存在以下问题:</p><ul><li><p>如果两个线程同时占用一个自选锁, 两者会同时陷入循环, 导致死循环: 自旋锁简单代码如下:</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>while(lock == 1){}
lock = 1;
do_something();
lock = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个线程经过了while循环后一起设置<code>lock</code>为1, 然后一起进入了critical section, 从而没有发挥锁的作用</p></li></ul><p>所以我们需要使用具有<strong>原子性</strong>的锁</p><h4 id="原子性" tabindex="-1"><a class="header-anchor" href="#原子性"><span>原子性</span></a></h4><p>原子性就是不可再分性, 表示一条指令不能在同级别上再分, 我们的程序从高级语言开始, 一直都是可再分为更低级别的:</p><div class="language-Mermaid line-numbers-mode" data-ext="Mermaid" data-title="Mermaid"><pre class="language-Mermaid"><code>graph LR
A[高级语言] --&gt; B[汇编]
B --&gt; C[指令的五个阶段]
C --&gt; D[微指令]
D --&gt; E[微操作]
E --&gt; F[电路]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系统的中断可以在指令的五个阶段中的任何一个阶段发生, 也就是说直到微指令级别的指令才对于OS来说是原子的 我们完全有可能在一个指令进行到某个阶段时发生中断, 然后将上下文(包括此时的所有寄存器)存入栈中, 然后切换到一个trap handler, 从而发生数据不一致问题</p><p>所以我们需要通过一些刻意的手段来实现某些指令的原子性, 比如汇编级别的<code>cmpxchg</code>实现<strong>比较并交换</strong>的操作, 并且在汇编级别具有原子性</p><p>而为了解决自旋锁的并发问题, 我们可以把</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>while(lock == 1){}
lock = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这两条指令合并为一条具有原子性的指令, 也就是说, 如果程序运行到这里, 这两条指令一定连续执行, 不会由于系统中断而被打断切换</p><p>具体的实现方式有以下几种:</p><h4 id="test-and-set" tabindex="-1"><a class="header-anchor" href="#test-and-set"><span>test-and-set</span></a></h4><p>C语言库中包含了<code>test_and_set()</code>函数, 该函数的实现如下:</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>int test_and_set(int* target,int new_value) {
    int rv = *target;
    *target = new_value;
    return rv;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个函数接收一个指针和一个值, 对指针赋值并返回旧值, 并保证自身的<strong>原子性</strong></p><p>我们可以使用这个函数来实现自旋锁, 代码如下:</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>while(test_and_set(&amp;lock, 1) == 1){}
do_something();
lock = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就把检测当前值和赋值合并为了一条指令, 从而保证了不会两个线程同时进入critical section</p><h4 id="compare-and-swap" tabindex="-1"><a class="header-anchor" href="#compare-and-swap"><span>compare-and-swap</span></a></h4><p>比较并交换, 该函数在汇编级别就有对应的指令直接对应了, 接收一个指针和两个值, 对比指针所指值和其第一个值是否相等, 如果相等则将第二个值赋值给指针所指, 否则不做操作, 返回值始终为赋值前的值</p><p>我们可以使用这个函数来实现自旋锁, 代码如下:</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>while(compare_and_swap(&amp;lock, 0, 1) == 1){}
do_something();
lock = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于<code>test_and_set</code>函数, <code>compare_and_swap</code>更加强大</p><h4 id="load-linked-and-store-conditional" tabindex="-1"><a class="header-anchor" href="#load-linked-and-store-conditional"><span>load-linked and store-conditional</span></a></h4><p>其对于的C语言实现可以如下:</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>int LoadLinked(int *ptr) {
  return *ptr;
}

int StoreConditional(int *ptr, int value) {
  if (no update to *ptr since LoadLinked to this address) {
    *ptr = value;
    return 1; // success!
  } else {
    return 0; // failed to update
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看见<code>Linked-Load</code>和普通的加载并没有什么不同, 但是<code>Store-Conditional</code>在更新值之前会检查<code>Linked-Load</code>和<code>Store-Conditional</code>之间是否有其他线程对该地址进行了更新, 如果有则更新失败, 否则更新成功</p><p>使用这组指令实现的自旋锁如下:</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>while(1) {
  while(LoadLinked(&amp;lock) == 1){} // spin until lock is free
  // if interrupt happens here and others get the lock, the next store conditional will fail
  if (StoreConditional(&amp;lock, 1) == 1) { 
    break; // got the lock!
  }
}
do_something();
lock = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fetch-and-add" tabindex="-1"><a class="header-anchor" href="#fetch-and-add"><span>fetch-and-add</span></a></h4><p>这个原子操作取值然后加1, 并且返回原来的值</p><p>这个指令提供了一种 <strong>ticket lock(门票锁)</strong> 的实现, 我们维护一个全局的次序变量, 表示此时是哪个票号的线程可以进入critical section, 然后对应的线程进入critical section并完成操作, 然后将全局次序加一, 表示下一个次序可以进入critical section</p><p>然后我们再维护一个总票号的变量, 用以记录目前的排队线程数量 如果一个线程想要占用一个锁, 那么就读取这个总票号, 然后将总票号加一, 作为自己的票号, 等待锁的释放</p><p>具体的代码如下:</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>typedef struct {
  int ticket;
  int turn;
} lock_t;

void lock_init(lock_t *lock) {
  lock-&gt;ticket = 0;
  lock-&gt;turn = 0;
}
void lock_acquire(lock_t *lock) {
  int my_ticket = fetch_and_add(&amp;lock-&gt;ticket, 1);
  while (lock-&gt;turn != my_ticket) {}
}
void lock_release(lock_t *lock) {
  fetch_and_add(&amp;lock-&gt;turn, 1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>上述了一些基本的线程锁, 下面我们讨论一下线程的<strong>效率</strong>和<strong>公平性</strong></p><p>如果我们使用一个自旋锁, 在获取锁失败时, 就会一直循环等待, 导致资源浪费</p><p>我们可以像一个互斥锁一样直接yeild, 放弃当前线程而执行其他线程, 这样会产生公平性问题, 以及导致一部分线程的<strong>饥饿状态</strong></p><p>于是我们可以使用一个<strong>等待队列</strong>来解决这个问题, 当一个线程获取锁失败时, 将其加入到等待队列之中 一个线程完成解锁后, 会检查等待队列中是否有等待的线程, 如果有, 则维持锁的状态, 并将等待队列中的第一个线程唤醒</p>`,57),o=[t,r,c];function v(p,u){return d(),l("div",null,o)}const b=a(s,[["render",v],["__file","CH2-Concurrency.html.vue"]]),g=JSON.parse(`{"path":"/posts/operating-system/ostep/CH2-Concurrency.html","title":"多线程并发","lang":"zh-CN","frontmatter":{"title":"多线程并发","tag":["operating-system","concurrency"],"categories":["操作系统","Three-Easy-Pieces"],"math":true,"mermaid":true,"date":"2023-03-12T00:00:00.000Z","description":"多线程 我们在之前对进程有了一个相对详细的介绍, 接下来要介绍的是线程和并发 现在假设这么一个场景, 我们有一个程序正在运行, 然后它产生了一个中断, 并且调用了IO操作 如果按照之前的想法, 我们的进程将会堵塞, 然后OS会切换到另一个进程, 但是如果我们不想要切换到其它进程 (没有其他进程或者该进程需要快速完成), 我们就该在进程执行IO的时候, ...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/operating-system/ostep/CH2-Concurrency.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"多线程并发"}],["meta",{"property":"og:description","content":"多线程 我们在之前对进程有了一个相对详细的介绍, 接下来要介绍的是线程和并发 现在假设这么一个场景, 我们有一个程序正在运行, 然后它产生了一个中断, 并且调用了IO操作 如果按照之前的想法, 我们的进程将会堵塞, 然后OS会切换到另一个进程, 但是如果我们不想要切换到其它进程 (没有其他进程或者该进程需要快速完成), 我们就该在进程执行IO的时候, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T13:35:40.000Z"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"operating-system"}],["meta",{"property":"article:tag","content":"concurrency"}],["meta",{"property":"article:published_time","content":"2023-03-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T13:35:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程并发\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T13:35:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":2,"title":"多处理器的进程(线程)调度","slug":"多处理器的进程-线程-调度","link":"#多处理器的进程-线程-调度","children":[{"level":3,"title":"缓存一致性","slug":"缓存一致性","link":"#缓存一致性","children":[]},{"level":3,"title":"缓存亲和性(Cache Affinity)","slug":"缓存亲和性-cache-affinity","link":"#缓存亲和性-cache-affinity","children":[]},{"level":3,"title":"多处理器的进程调度方式","slug":"多处理器的进程调度方式","link":"#多处理器的进程调度方式","children":[]}]},{"level":2,"title":"多线程数据共享","slug":"多线程数据共享","link":"#多线程数据共享","children":[]},{"level":2,"title":"线程的API","slug":"线程的api","link":"#线程的api","children":[{"level":3,"title":"线程中的锁","slug":"线程中的锁","link":"#线程中的锁","children":[]}]}],"git":{"createdTime":1712936892000,"updatedTime":1713101740000,"contributors":[{"name":"DnullP","email":"dnull123p@gmail.com","commits":2}]},"readingTime":{"minutes":11.85,"words":3555},"filePathRelative":"posts/operating-system/ostep/CH2-Concurrency.md","localizedDate":"2023年3月12日","excerpt":"\\n<p>我们在之前对进程有了一个相对详细的介绍, 接下来要介绍的是线程和并发</p>\\n<p>现在假设这么一个场景, 我们有一个程序正在运行, 然后它产生了一个中断, 并且调用了IO操作\\n如果按照之前的想法, 我们的进程将会堵塞, 然后OS会切换到另一个进程, 但是如果我们不想要切换到其它进程 (没有其他进程或者该进程需要快速完成), 我们就该在进程执行IO的时候, 做一些其他的不需要IO的工作</p>\\n<p>如何在一个进程中安排这些工作, 使得它们能够并发执行呢?</p>\\n<p>我们引入了<strong>线程(thread)</strong> 的概念, 线程可以认为是进程的一个子任务, 一个进程可以有多个线程, 所有的线程共享进程的内存空间</p>","autoDesc":true}`);export{b as comp,g as data};
