import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as t}from"./app-DCTCPPGQ.js";const e={},p=t(`<h3 id="strategy" tabindex="-1"><a class="header-anchor" href="#strategy"><span>Strategy</span></a></h3><p>策略模式是与算法的选择有关的设计模式 现在假设我们有一个地图导航程序，我们通过输入起点和终点，能够得到一条线路，我们通过不同的算法可以得到最短线路、步行线路、经过景点的线路等等</p><p>为了实现代码复用和维护方便，我们把不同的算法封装为类，满足一个接口，让程序通过接口调用不同的算法，这样的思想就是策略模式</p><p>下面是来自refactoring的UML图：</p><figure><img src="https://refactoring.guru/images/patterns/diagrams/strategy/structure.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里面包含了四个要素：</p><ul><li>Client</li><li>Strategy 这是策略算法的接口类，其中包含一个接收参数返回结果的方法</li><li>Context 在Context中包含strategy接口，并且可以根据需求改变strategy，用以执行不同的算法</li></ul><p>下面是来自noob note的代码：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Strategy</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>算法策略的接口</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperationAdd</span> <span class="token keyword">implements</span> <span class="token class-name">Strategy</span><span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperationSubtract</span> <span class="token keyword">implements</span> <span class="token class-name">Strategy</span><span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperationMultiply</span> <span class="token keyword">implements</span> <span class="token class-name">Strategy</span><span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> num1 <span class="token operator">*</span> num2<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面实现了三种不同的算法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
   <span class="token keyword">private</span> <span class="token class-name">Strategy</span> strategy<span class="token punctuation">;</span>
 
   <span class="token keyword">public</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token class-name">Strategy</span> strategy<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">executeStrategy</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> strategy<span class="token punctuation">.</span><span class="token function">doOperation</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上下文包含策略的管理方式</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StrategyPatternDemo</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Context</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OperationAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;10 + 5 = &quot;</span> <span class="token operator">+</span> context<span class="token punctuation">.</span><span class="token function">executeStrategy</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OperationSubtract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;10 - 5 = &quot;</span> <span class="token operator">+</span> context<span class="token punctuation">.</span><span class="token function">executeStrategy</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OperationMultiply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;10 * 5 = &quot;</span> <span class="token operator">+</span> context<span class="token punctuation">.</span><span class="token function">executeStrategy</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用不同的策略进行计算</p>`,18),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","strategy.html.vue"]]),k=JSON.parse(`{"path":"/posts/SE/design-pattern/strategy.html","title":"Strategy","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"Strategy","tag":["design-pattern","面向对象"],"categories":["设计模式"],"mathjax":true,"description":"Strategy 策略模式是与算法的选择有关的设计模式 现在假设我们有一个地图导航程序，我们通过输入起点和终点，能够得到一条线路，我们通过不同的算法可以得到最短线路、步行线路、经过景点的线路等等 为了实现代码复用和维护方便，我们把不同的算法封装为类，满足一个接口，让程序通过接口调用不同的算法，这样的思想就是策略模式 下面是来自refactoring的U...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/SE/design-pattern/strategy.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"Strategy"}],["meta",{"property":"og:description","content":"Strategy 策略模式是与算法的选择有关的设计模式 现在假设我们有一个地图导航程序，我们通过输入起点和终点，能够得到一条线路，我们通过不同的算法可以得到最短线路、步行线路、经过景点的线路等等 为了实现代码复用和维护方便，我们把不同的算法封装为类，满足一个接口，让程序通过接口调用不同的算法，这样的思想就是策略模式 下面是来自refactoring的U..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://refactoring.guru/images/patterns/diagrams/strategy/structure.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Strategy"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"design-pattern"}],["meta",{"property":"article:tag","content":"面向对象"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Strategy\\",\\"image\\":[\\"https://refactoring.guru/images/patterns/diagrams/strategy/structure.png\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":3,"title":"Strategy","slug":"strategy","link":"#strategy","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"posts/SE/design-pattern/strategy.md","localizedDate":"2021年1月1日","excerpt":"<h3>Strategy</h3>\\n<p>策略模式是与算法的选择有关的设计模式\\n现在假设我们有一个地图导航程序，我们通过输入起点和终点，能够得到一条线路，我们通过不同的算法可以得到最短线路、步行线路、经过景点的线路等等</p>\\n<p>为了实现代码复用和维护方便，我们把不同的算法封装为类，满足一个接口，让程序通过接口调用不同的算法，这样的思想就是策略模式</p>\\n<p>下面是来自refactoring的UML图：</p>\\n<figure><img src=\\"https://refactoring.guru/images/patterns/diagrams/strategy/structure.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}`);export{d as comp,k as data};
