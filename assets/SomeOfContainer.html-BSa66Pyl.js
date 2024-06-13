import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,f as s,a as t,e as o}from"./app-DCTCPPGQ.js";const c={},p=t("p",null,"容器的使用很频繁，只补充一些碎片化的知识",-1),l=o(`<p>容器分为顺序容器、关联容器、无序容器 同一类型的容器具有一些相同的操作，这方便于我们进行记忆</p><h2 id="顺序容器" tabindex="-1"><a class="header-anchor" href="#顺序容器"><span>顺序容器</span></a></h2><ul><li><code>vector</code></li><li><code>deque</code></li><li><code>list</code></li><li><code>forword_list</code></li><li><code>array</code></li><li><code>string</code></li></ul><h3 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器"><span>迭代器</span></a></h3><ul><li><p>对于在连续内存上储存数据的容器，才可以使用迭代器（指针）进行相减运算、大小比较，比如<code>vector</code>、<code>deque</code>等<br> 但是<code>list</code>一类的离散储存的数据类型就不能这样操作。</p></li><li><p>但是对于初始化的前后迭代器可以用于<code>list</code>类型</p></li><li><p><code>swap()</code>函数交换的是引用，真实的数据储存并不受影响，因为STL的容器都是引用类型</p></li></ul><h3 id="emplace函数" tabindex="-1"><a class="header-anchor" href="#emplace函数"><span>emplace函数</span></a></h3><p><code>emplace()</code>函数接收容器元素的构造函数的参数，并直接在容器的内存中构造元素</p><h3 id="sort函数" tabindex="-1"><a class="header-anchor" href="#sort函数"><span>sort函数</span></a></h3><ul><li><code>sort()</code>函数只能对支持随机访问的顺序容器进行排序</li></ul><h3 id="at-函数" tabindex="-1"><a class="header-anchor" href="#at-函数"><span>at()函数</span></a></h3><ul><li>使用下标运算符不会检查是否越界的问题，但是可以是使用<code>at(0)</code>函数，在下标越界后抛出<code>out_of_range</code>异常</li></ul><h3 id="erace-函数" tabindex="-1"><a class="header-anchor" href="#erace-函数"><span>erace()函数</span></a></h3><ul><li>使用<code>erace()</code>函数删除两个迭代器之间的元素时，结尾的指针是一个区间的尾后指针</li></ul><h3 id="reserve-和resize-函数" tabindex="-1"><a class="header-anchor" href="#reserve-和resize-函数"><span>reserve()和resize()函数</span></a></h3><ul><li><p><code>reserve()</code>和<code>resize()</code>函数都只能扩张容器的大小，<code>resize()</code>只是删除了多余的元素，不影响容器的大小</p></li><li><p>容器的预留空间上不一定有元素，<code>resize()</code>会创造新的对象</p></li><li><p>对应的，需要区别 <code>size()</code>和 <code>capacity()</code>函数</p></li></ul><hr><p>其实啊，对于这些函数大概记住主要的集中使用方式就好了，具体有些什么复杂的功能可以在需要的时候再参阅资料，我不可能把一个语言的所有工具的每个细节都记得清清楚楚</p><hr><h3 id="有意思的find函数" tabindex="-1"><a class="header-anchor" href="#有意思的find函数"><span>有意思的find函数</span></a></h3><p>不是指一般的<code>find()</code>函数，而是<code>find_first_of(arg)</code></p><p>其寻找字符串中，<code>arg</code>中任何一个字符第一次出现的位置</p><p>有点正则表达式的味道了</p><h3 id="字符串的值转换" tabindex="-1"><a class="header-anchor" href="#字符串的值转换"><span>字符串的值转换</span></a></h3><ul><li><code>to_string()</code></li><li><code>stod()</code></li><li><code>stoi()</code></li></ul><p>之类的</p><p>这些都是<code>string</code>的外部函数</p><h3 id="容器的适配器" tabindex="-1"><a class="header-anchor" href="#容器的适配器"><span>容器的适配器</span></a></h3><p>这是一种面向对象的概念，应用于STL的容器中</p><p>我以前一直以为 <code>stack</code> <code>queue</code>之类的类也是一种容器，但是现在我明确看到了这种基于现有容器继承而来的类的标准命名——容器适配器</p><p>通过现有的容器来限制组合其操作，从而获得的新类</p><p><code>stack&lt;int,vector&lt;&gt; &gt;</code>我们通过 <code>vector</code>构造了一个栈，使得这个 <code>vector</code>可以使用栈的操作</p><p>而不设置指定实现容器的话，会使用一个默认的容器：</p><ul><li><code>stack</code>—— <code>deque</code></li><li><code>queue</code>—— <code>deque</code></li><li><code>priority_queue</code>—— <code>vector</code></li></ul><h2 id="泛型算法" tabindex="-1"><a class="header-anchor" href="#泛型算法"><span>泛型算法</span></a></h2><p>虽然但是，泛型算法不仅适用于STL容器，而且适用于内置数组 一般包含于 <code>algorithm</code>和 <code>numeric</code></p><h3 id="泛型算法库原则" tabindex="-1"><a class="header-anchor" href="#泛型算法库原则"><span>泛型算法库原则：</span></a></h3><p>算法不直接调用顺序容器操作，通过迭代器修改内存区间的元素顺序或数值</p><h3 id="插入迭代器" tabindex="-1"><a class="header-anchor" href="#插入迭代器"><span>插入迭代器</span></a></h3><p><code>back_inserter</code> 是一种插入迭代器，当解引用并给其赋值时，会自动调用容器的 <code>push_back</code>操作</p><p>此外还有<code>front_inserter()</code>、<code>inserter()</code>之类的插入迭代器</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> a<span class="token punctuation">;</span>

<span class="token keyword">auto</span> it <span class="token operator">=</span> <span class="token function">back_inserter</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//now &quot;a&quot; has been the back_inserter of a</span>

<span class="token operator">*</span>it <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span><span class="token comment">//this way, it creates a new element at the end of the vector</span>

<span class="token function">fill_n</span><span class="token punctuation">(</span>it<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//this way, we can append 10 new &quot;10&quot; into the vector</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="io流对象迭代器" tabindex="-1"><a class="header-anchor" href="#io流对象迭代器"><span>IO流对象迭代器</span></a></h3><p>标准算法库搭配容器、迭代器玩出来的花样太多了，IO流对象的迭代器大概说明一下吧</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   istream_iterator<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">int_in</span><span class="token punctuation">(</span>cin<span class="token punctuation">)</span><span class="token punctuation">;</span>
   istream_iterator<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> eof<span class="token punctuation">;</span>

   <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>int_in <span class="token operator">!=</span> eof<span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
       cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>int_in<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上这段代码中定义了从流中读取整数的迭代器， <code>++</code>操作为从流中析取一个整数，<code>*</code>操作是返回析取的数</p><p>需要注意的是，在定义<code>int_in</code>时，就已经执行过一次读取了，所以会有一次多出的输入</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>istream_iterator<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">int_in</span><span class="token punctuation">(</span>cin<span class="token punctuation">)</span><span class="token punctuation">,</span> eof<span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token function">accumulate</span><span class="token punctuation">(</span>int_in<span class="token punctuation">,</span> eof<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是书上比较有趣的一个用法，通过连续的流输入得到一个整数和<br> 通过这个例子稍微能理解流对象迭代器的设计思想了</p><p>对于顺序容器而言，泛型算法可以在一段连续的元素上执行操作，而流输入的数据也是连续的一整段元素，所以通过流对象迭代器来让泛型算法对用户的输入执行某些操作</p><p>基于这种思想，我们可以很容易的理解<code>ostream_iterator</code>的使用</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> a<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
ostream_iterator<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">out_</span><span class="token punctuation">(</span>cout<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">copy</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> out_<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fill_n</span><span class="token punctuation">(</span>out_<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ostream_iterator</code>通过赋值进行输出，所以所有在连续迭代器区间上赋值的泛型算法都可以使用它进行输出</p><h2 id="反向迭代器" tabindex="-1"><a class="header-anchor" href="#反向迭代器"><span>反向迭代器</span></a></h2><p>这种东西真的只需要略过就好，简单易懂还没什么重要作用（暂时没有）</p><h2 id="泛型算法的标准" tabindex="-1"><a class="header-anchor" href="#泛型算法的标准"><span>泛型算法的标准</span></a></h2><p>每个算法都接受至少一个迭代器的范围，而算法要求传递的迭代器具有指定的类型</p><h3 id="迭代器类型" tabindex="-1"><a class="header-anchor" href="#迭代器类型"><span>迭代器类型</span></a></h3><ul><li>输入输出迭代器</li><li>前向迭代器</li><li>双向迭代器</li><li>随机访问迭代器</li></ul><p>有些算法接受第二个迭代器范围，一般涉及两个序列一起进行的操作，比如合并之类的</p><h3 id="算法命名" tabindex="-1"><a class="header-anchor" href="#算法命名"><span>算法命名</span></a></h3><ul><li><code>_if</code>——接受一个元素值的算法往往会有一个_if后缀版本的函数，接受的不为元素值，而是一个谓词</li><li><code>_copy</code>——将修改的容器拷贝到目标位置</li></ul>`,61);function i(r,d){return e(),a("div",null,[p,s(" more -"),l])}const k=n(c,[["render",i],["__file","SomeOfContainer.html.vue"]]),m=JSON.parse(`{"path":"/posts/program-language/CPP-notes/SomeOfContainer.html","title":"C++的容器的碎片知识","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"C++的容器的碎片知识","tag":["C++","容器","STL","顺序容器","关联容器","无序容器"],"categories":["C++学习记录"],"mathjax":true,"description":"容器的使用很频繁，只补充一些碎片化的知识 容器分为顺序容器、关联容器、无序容器 同一类型的容器具有一些相同的操作，这方便于我们进行记忆 顺序容器 vector deque list forword_list array string 迭代器 对于在连续内存上储存数据的容器，才可以使用迭代器（指针）进行相减运算、大小比较，比如vector、deque等 ...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/program-language/CPP-notes/SomeOfContainer.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"C++的容器的碎片知识"}],["meta",{"property":"og:description","content":"容器的使用很频繁，只补充一些碎片化的知识 容器分为顺序容器、关联容器、无序容器 同一类型的容器具有一些相同的操作，这方便于我们进行记忆 顺序容器 vector deque list forword_list array string 迭代器 对于在连续内存上储存数据的容器，才可以使用迭代器（指针）进行相减运算、大小比较，比如vector、deque等 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"容器"}],["meta",{"property":"article:tag","content":"STL"}],["meta",{"property":"article:tag","content":"顺序容器"}],["meta",{"property":"article:tag","content":"关联容器"}],["meta",{"property":"article:tag","content":"无序容器"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++的容器的碎片知识\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":2,"title":"顺序容器","slug":"顺序容器","link":"#顺序容器","children":[{"level":3,"title":"迭代器","slug":"迭代器","link":"#迭代器","children":[]},{"level":3,"title":"emplace函数","slug":"emplace函数","link":"#emplace函数","children":[]},{"level":3,"title":"sort函数","slug":"sort函数","link":"#sort函数","children":[]},{"level":3,"title":"at()函数","slug":"at-函数","link":"#at-函数","children":[]},{"level":3,"title":"erace()函数","slug":"erace-函数","link":"#erace-函数","children":[]},{"level":3,"title":"reserve()和resize()函数","slug":"reserve-和resize-函数","link":"#reserve-和resize-函数","children":[]},{"level":3,"title":"有意思的find函数","slug":"有意思的find函数","link":"#有意思的find函数","children":[]},{"level":3,"title":"字符串的值转换","slug":"字符串的值转换","link":"#字符串的值转换","children":[]},{"level":3,"title":"容器的适配器","slug":"容器的适配器","link":"#容器的适配器","children":[]}]},{"level":2,"title":"泛型算法","slug":"泛型算法","link":"#泛型算法","children":[{"level":3,"title":"泛型算法库原则：","slug":"泛型算法库原则","link":"#泛型算法库原则","children":[]},{"level":3,"title":"插入迭代器","slug":"插入迭代器","link":"#插入迭代器","children":[]},{"level":3,"title":"IO流对象迭代器","slug":"io流对象迭代器","link":"#io流对象迭代器","children":[]}]},{"level":2,"title":"反向迭代器","slug":"反向迭代器","link":"#反向迭代器","children":[]},{"level":2,"title":"泛型算法的标准","slug":"泛型算法的标准","link":"#泛型算法的标准","children":[{"level":3,"title":"迭代器类型","slug":"迭代器类型","link":"#迭代器类型","children":[]},{"level":3,"title":"算法命名","slug":"算法命名","link":"#算法命名","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.87,"words":1461},"filePathRelative":"posts/program-language/CPP-notes/SomeOfContainer.md","localizedDate":"2021年1月1日","excerpt":"<p>容器的使用很频繁，只补充一些碎片化的知识</p>\\n<!-- more --->\\n<p>容器分为顺序容器、关联容器、无序容器\\n同一类型的容器具有一些相同的操作，这方便于我们进行记忆</p>\\n<h2>顺序容器</h2>\\n<ul>\\n<li><code>vector</code></li>\\n<li><code>deque</code></li>\\n<li><code>list</code></li>\\n<li><code>forword_list</code></li>\\n<li><code>array</code></li>\\n<li><code>string</code></li>\\n</ul>\\n<h3>迭代器</h3>","autoDesc":true}`);export{k as comp,m as data};
