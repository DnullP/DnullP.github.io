import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-DCTCPPGQ.js";const t={},p=e(`<h3 id="facade" tabindex="-1"><a class="header-anchor" href="#facade"><span>facade</span></a></h3><p>facade相对来说比较简单，其思想如下： 当我们有一个复杂的框架、系统时，我们需要通过这个框架实现某个功能，而不需要关系这个框架本身，也不需要用它实现其他功能时，则使用一个类，把这些功能封装为一个简单的类供客户使用</p><p>依然使用来自Refactorying·Guru的插图：</p><figure><img src="https://refactoring.guru/images/patterns/diagrams/facade/structure.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>同时，为了防止新导出的facade类也变得复杂，我们可以分层使用多个Additional Facade类，把各个功能的实现分散到各个类中，用户只需要和需要功能的facade类交互即可，而Additional Facade类既可以被用户使用，也可以用来构建用户需要的facade类</p><p>下面是java代码：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
   <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//这是一个接口</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
 
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Rectangle::draw()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
 
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Square::draw()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
 
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Circle::draw()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//通过这个接口实现了三个类，我们认为这是一个相对复杂的系统</span>
<span class="token comment">//用户需要知道这个系统中有三个Shape，并且需要分别调用他们的draw()方法</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShapeMaker</span> <span class="token punctuation">{</span>
   <span class="token keyword">private</span> <span class="token class-name">Shape</span> circle<span class="token punctuation">;</span>
   <span class="token keyword">private</span> <span class="token class-name">Shape</span> rectangle<span class="token punctuation">;</span>
   <span class="token keyword">private</span> <span class="token class-name">Shape</span> square<span class="token punctuation">;</span>
 
   <span class="token keyword">public</span> <span class="token class-name">ShapeMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      rectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      square <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      circle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      rectangle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drawSquare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      square<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//现在定义一个facade类，用户可以简单地通过一个类的三个函数画出需要的三个图形</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FacadePatternDemo</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">ShapeMaker</span> shapeMaker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShapeMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      shapeMaker<span class="token punctuation">.</span><span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      shapeMaker<span class="token punctuation">.</span><span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      shapeMaker<span class="token punctuation">.</span><span class="token function">drawSquare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function o(i,l){return a(),s("div",null,c)}const d=n(t,[["render",o],["__file","Facade.html.vue"]]),k=JSON.parse(`{"path":"/posts/SE/design-pattern/Facade.html","title":"facade pattern","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"facade pattern","tag":["design-pattern","面向对象"],"categories":["设计模式"],"mathjax":true,"description":"facade facade相对来说比较简单，其思想如下： 当我们有一个复杂的框架、系统时，我们需要通过这个框架实现某个功能，而不需要关系这个框架本身，也不需要用它实现其他功能时，则使用一个类，把这些功能封装为一个简单的类供客户使用 依然使用来自Refactorying·Guru的插图： 同时，为了防止新导出的facade类也变得复杂，我们可以分层使用多...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/SE/design-pattern/Facade.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"facade pattern"}],["meta",{"property":"og:description","content":"facade facade相对来说比较简单，其思想如下： 当我们有一个复杂的框架、系统时，我们需要通过这个框架实现某个功能，而不需要关系这个框架本身，也不需要用它实现其他功能时，则使用一个类，把这些功能封装为一个简单的类供客户使用 依然使用来自Refactorying·Guru的插图： 同时，为了防止新导出的facade类也变得复杂，我们可以分层使用多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://refactoring.guru/images/patterns/diagrams/facade/structure.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"facade pattern"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"design-pattern"}],["meta",{"property":"article:tag","content":"面向对象"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"facade pattern\\",\\"image\\":[\\"https://refactoring.guru/images/patterns/diagrams/facade/structure.png\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":3,"title":"facade","slug":"facade","link":"#facade","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.39,"words":416},"filePathRelative":"posts/SE/design-pattern/Facade.md","localizedDate":"2021年1月1日","excerpt":"<h3>facade</h3>\\n<p>facade相对来说比较简单，其思想如下：\\n当我们有一个复杂的框架、系统时，我们需要通过这个框架实现某个功能，而不需要关系这个框架本身，也不需要用它实现其他功能时，则使用一个类，把这些功能封装为一个简单的类供客户使用</p>\\n<p>依然使用来自Refactorying·Guru的插图：</p>\\n<figure><img src=\\"https://refactoring.guru/images/patterns/diagrams/facade/structure.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}`);export{d as comp,k as data};
