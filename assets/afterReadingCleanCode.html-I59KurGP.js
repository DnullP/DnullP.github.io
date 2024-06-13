import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as t,f as a,a as e,b as n,e as s}from"./app-DCTCPPGQ.js";const r={},o=e("p",null,[e("em",null,"Clean Code"),n(" called 《代码整洁之道》in Chinese give a lot of guidance on how to write readable code.")],-1),c=e("p",null,"在此为此书的阅读做出整理",-1),p=e("hr",null,null,-1),d=s('<ul><li><a href="#%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86">第一部分</a><ul><li><a href="#%e6%a0%bc%e5%bc%8fformat%e9%83%a8%e5%88%86">格式(format)部分</a><ul><li><a href="#vertical-formatting">vertical formatting</a></li><li><a href="#horizontal-formatting">horizontal formatting</a></li></ul></li><li><a href="#intermission">intermission</a></li></ul></li><li><a href="#%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86">第二部分</a><ul><li><a href="#%e5%af%b9%e8%b1%a1%e5%92%8c%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84">对象和数据结构</a><ul><li><a href="#%e6%95%b0%e6%8d%ae%e7%9a%84%e6%8a%bd%e8%b1%a1">数据的抽象</a></li><li><a href="#%e5%8f%8d%e5%af%b9%e7%a7%b0%e6%80%a7">反对称性</a></li><li><a href="#%e8%bf%aa%e7%b1%b3%e7%89%b9%e5%8e%9f%e5%88%99">迪米特原则</a></li><li><a href="#%e5%af%b9%e8%b1%a1%e5%92%8c%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84-1">对象和数据结构</a></li></ul></li><li><a href="#%e9%94%99%e8%af%af%e5%a4%84%e7%90%86">错误处理</a></li><li><a href="#%e8%be%b9%e7%95%8cboundary">边界(boundary)</a></li><li><a href="#%e5%8d%95%e5%85%83%e6%b5%8b%e8%af%95">单元测试</a><ul><li><a href="#ttdtest-driven-development">TTD(Test-Driven Development)</a></li><li><a href="#clean-test">clean test</a></li></ul></li><li><a href="#class">Class</a><ul><li><a href="#small-enough">Small Enough!</a></li><li><a href="#organizing-for-change">Organizing for Change</a></li></ul></li><li><a href="#system">System</a><ul><li><a href="#%e4%be%9d%e8%b5%96%e6%b3%a8%e5%85%a5">依赖注入</a></li><li><a href="#ioc">Ioc</a></li><li><a href="#aop">AOP</a></li><li><a href="#test-drive-the-archithecture">Test drive the Archithecture</a></li><li><a href="#%e5%81%9a%e5%87%ba%e6%9b%b4%e5%a5%bd%e7%9a%84%e5%86%b3%e5%ae%9a">做出更好的决定</a></li><li><a href="#%e7%90%86%e6%80%a7%e5%af%b9%e5%be%85%e6%a0%87%e5%87%86">理性对待<em>标准</em></a></li><li><a href="#%e4%bd%bf%e7%94%a8dsldomain-specific-language">使用DSL(Domain Specific Language)</a></li></ul></li><li><a href="#emergence">Emergence</a><ul><li><a href="#emergent-design">Emergent Design</a></li></ul></li><li><a href="#concurrency">Concurrency</a><ul><li><a href="#srp-in-conccurrency">SRP in Conccurrency</a></li><li><a href="#%e5%87%8f%e5%b0%91%e5%85%b1%e4%ba%ab%e6%95%b0%e6%8d%ae-%e7%bc%a9%e5%b0%8f%e6%95%b0%e6%8d%aescope">减少共享数据, 缩小数据scope</a></li><li><a href="#%e5%b0%bd%e9%87%8f%e7%8b%ac%e7%ab%8b">尽量独立</a></li><li><a href="#excution-models">Excution Models</a><ul><li><a href="#produceer-consumer">Produceer-Consumer</a></li><li><a href="#readers-writers">Readers-Writers</a></li><li><a href="#dining-philosophers">Dining Philosophers</a></li></ul></li><li><a href="#synchronized-method">Synchronized Method</a></li></ul></li></ul></li><li><a href="#%e7%ac%ac%e4%b8%89%e9%83%a8%e5%88%86">第三部分</a></li></ul>',1),h=s(`<hr><h1 id="第一部分" tabindex="-1"><a class="header-anchor" href="#第一部分"><span>第一部分</span></a></h1><p>这一部分以代码提供有效的信息和组织代码以优化信息为主.</p><ul><li><p>给变量取名字要清晰，避免多个名字的混淆，这对于英语词汇量的要求会很高</p></li><li><p>函数的取名最好用动词，用来描述函数的行为，如果能够给出一个好命名的话, 只需要看函数和变量命名就能知道代码的行为, 我们认为这是好代码</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token comment">// bad</span>
  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token function">getThem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> list1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> x <span class="token operator">:</span> theList<span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span>
              list1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> list1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// good</span>
  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token function">getFlaggedCells</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> flaggedCells <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cell <span class="token operator">:</span> gameBoard<span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>cell<span class="token punctuation">[</span><span class="token constant">STATUS_VALUE</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token constant">FLAGGED</span><span class="token punctuation">)</span>
              flaggedCells<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cell<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> flaggedCells<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有人知道<code>getThem</code>到底是想要得到什么, <code>list1</code>也只是让人知道这是个列表, 想要理解代码逻辑必须仔细阅读才行 如果按照下面的代码命名, 我们能够一眼看出函数的作用: 得到被标记的格子. 然后我们可以看出代码是在从棋盘上遍历所有格子, 然后检查各自的状态, 并将标记的各自取出返回 代码就像是在&quot;tell a story&quot;, 能够通过阅读理解, 而不是分析理解</p></li></ul><p> </p><ul><li><p>函数和变量的命名可以形成动宾结构, 对象和成员函数的命名可以形成主谓结构, 遵守这样的原则可以让代码更加清晰</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>targetStudent.isGirl();
targetStudent.setScore(100);

targetClass.deleteStudent(targetStudent);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的代码即便我们不去阅读class的源码, 也能够一眼看出代码的作用</p><p>实际上我们此处的代码应该更加简化 [^1]</p></li></ul><p>[^1]: 这里的<code>targetClass.deleteStudent(targetStudent);</code>实际上可以简化为<code>targetClass.delete(targetStudent);</code>因为Class和Student实际上存在着一种潜在的必然关系, 并且我们的参数命名也应该提供足够的信息, 来明确此处要删除的是Student, 所以在函数名中再强调删除对象是多余的</p><p> </p><ul><li>为了尽量维护动宾结构和主谓结构, 我们函数的参数最好不要超过两个参数 (可变参数除外), 三个参数的函数我们认为已经是极其糟糕的结构了 一个函数只要负责一个功能就行了, 最理想的情况是每个函数总行数不超过5行, 除非函数需要实现高聚合度的复杂功能 对于一些情况, 需要完成某些功能确实需要大量的参数设定时, 不要局限于用一个函数来实现. 比如我们要实现一个http的request, 我们需要设定url, header, timeout等参数信息, 使用一个函数来实现就十分的不优雅. 具体的, 我们对于一个request编写一个class, 将参数设定为成员变量, 然后针对每一个参数编写设置函数, 最后编写一个<code>send</code>函数来发送请求, 这样的代码就十分的优雅了, 这种设计模式我们称为<strong>建造者</strong>模式</li></ul><p> </p><ul><li><p>注释不是必要的, 我们需要达到的至高境界是, 能够只通过函数和变量的命名, 就能够把代码的含义表述清楚</p></li><li><p>上面一条不是你不写注释的理由, 相信我, 你的代码写不到这么好</p></li><li><p>下面是一些通过注释写明的信息:</p><ul><li>合法信息: 包括了代码的作者, 版权信息, 代码的版本号等</li><li>对于复杂内容的阐明: 我们不能保证代码中所有内容都能通过函数和变量名表述清楚, 比如我在一处使用了正则表达式匹配, 正则表达式本身的可读性是很差的, 所以我或许需要用注释来阐明一下它的含义和匹配对象</li><li>TODO注释: 用来标记一些未完成的工作, 以及一些需要改进的地方</li></ul></li><li><p>阐明代码意图和解释模糊代码, 这是弥补代码不足的方式</p></li><li><p>对于一段代码, 如果需要警告用户一些重要的使用规则, 那么使用注释是没问题的, 比如对于一个计算函数:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//WARNING: totalAmount can&#39;t be zero</span>
<span class="token keyword">double</span> <span class="token function">calTheUtilization</span><span class="token punctuation">(</span><span class="token keyword">int</span> usedAmount<span class="token punctuation">,</span> <span class="token keyword">int</span> totalAmount<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>usedAmount <span class="token operator">/</span> totalAmount<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示用户参数的使用限制, 这是一个合理的注释使用</p></li><li><p>对每一个参数都做注释并不是必要的, 但是对于一些规范的库而言, 给与尽可能详细的注释是有必要的</p></li><li><p>现在的IDE一般会提供良好的注释辅助, 将函数, class, 参数的注释直接显示给用户, 也提供了引用查找之类的便捷功能, 所以一些旧时代遗留下来注释习惯我们往往不必去在意</p></li></ul><h2 id="格式-format-部分" tabindex="-1"><a class="header-anchor" href="#格式-format-部分"><span>格式(format)部分</span></a></h2><h3 id="vertical-formatting" tabindex="-1"><a class="header-anchor" href="#vertical-formatting"><span>vertical formatting</span></a></h3><ul><li>适当的空行, 以分割代码逻辑</li><li>控制垂直密度, 过高密度降低可读性</li><li>控制垂直距离, 减少被调用代码和调用代码的距离, 相近概念的代码放在一起</li><li>排列垂直顺序, 被调用者在调用者后面, 主要逻辑在细微逻辑后面, 把代码的主要内容放在最前面</li></ul><h3 id="horizontal-formatting" tabindex="-1"><a class="header-anchor" href="#horizontal-formatting"><span>horizontal formatting</span></a></h3><ul><li>横线的信息密度由类似链式调用的代码提供, 我们需要控制横向代码的密度</li><li>横向对齐</li></ul><hr><h2 id="intermission" tabindex="-1"><a class="header-anchor" href="#intermission"><span>intermission</span></a></h2><p>到这里为止的五章可以归类为第一部分, 这一部分强调的是代码本身为程序员提供信息理解的这一部分.</p><p>变量和函数的命名提供了信息, format为信息提供了组织形式, 注释为信息提供了补充. 所有这些要素一起协作为我们提供了理解代码的基本信息, 优秀的代码凭借这些基本原则可以提供很高的可读性.</p><hr><h1 id="第二部分" tabindex="-1"><a class="header-anchor" href="#第二部分"><span>第二部分</span></a></h1><p>这一部分以设计模式和设计原则为主</p><h2 id="对象和数据结构" tabindex="-1"><a class="header-anchor" href="#对象和数据结构"><span>对象和数据结构</span></a></h2><h3 id="数据的抽象" tabindex="-1"><a class="header-anchor" href="#数据的抽象"><span>数据的抽象</span></a></h3><p>我们将数据设置为private, 通过函数的方式让外界来获取数据, 这样能够将数据的真实情况抽象出来, 让user不关注于数据的具体实现.</p><p>具体来说, 我们可以使用<code>x, y</code>表示笛卡尔坐标系的一个点, 但是我们获取数据时完全可以使用polar coordinates的方式获得坐标点, 尽管底层实际是<code>x, y</code></p><h3 id="反对称性" tabindex="-1"><a class="header-anchor" href="#反对称性"><span>反对称性</span></a></h3><p>尽管我们一般使用将数据抽象出来的方式, 以OPP的思想来实现数据的获取, 但是实际上将数据暴露出来, 通过一个过程来获得其数据也不是没有不可取之处.</p><p>考虑如下的情况:</p><div class="language-Mermaid line-numbers-mode" data-ext="Mermaid" data-title="Mermaid"><pre class="language-Mermaid"><code>classDiagram
  class Shape{
    +auto somedata
    +getArea()
    +getPerimeter()
  }
  class Rectangle{
    +auto somedata
  }
  class Circle{
    +auto somedata
    +getRadius()
  }
  Shape &lt;|-- Rectangle
  Shape &lt;|-- Circle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时如果我们需要给Shape添加新的功能, 比如获取图形的<code>metadata</code>, 那么新的函数需要所有的class都做出修改才能实现</p><p>如果是将数据暴露出来, 使用一个公共过程的话, 我们就可以不对储存数据的结构做出任何修改, 只用修改管理函数的一个类即可:</p><div class="language-Mermaid line-numbers-mode" data-ext="Mermaid" data-title="Mermaid"><pre class="language-Mermaid"><code>classDiagram
  class Shape{
    +auto somedata
  }
  class Rectangle{
    +auto somedata
  }
  class Circle{
    +auto somedata
  }
  Shape &lt;|-- Rectangle
  Shape &lt;|-- Circle

  class Method{
    +getArea(Shape)
    +getPerimeter(Shape)
    +getRadius(Shape)
  }

  Shape --&gt; Method
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迪米特原则" tabindex="-1"><a class="header-anchor" href="#迪米特原则"><span>迪米特原则</span></a></h3><blockquote><p>只与你的直接朋友交谈, 不要和陌生人说话</p></blockquote>`,36),u=e("p",null,[n("也就是说一个类"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"C")]),e("annotation",{encoding:"application/x-tex"},"C")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C")])])]),n("中的函数"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"f")]),e("annotation",{encoding:"application/x-tex"},"f")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f")])])]),n("只应该调用以下的其他函数或变量:")],-1),m=e("ul",null,[e("li",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"C")]),e("annotation",{encoding:"application/x-tex"},"C")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C")])])]),n("本身")]),e("li",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"f")]),e("annotation",{encoding:"application/x-tex"},"f")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f")])])]),n("自己创建的对象")]),e("li",null,[n("作为参数传递给"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"f")]),e("annotation",{encoding:"application/x-tex"},"f")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f")])])]),n("的对象")]),e("li",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"C")]),e("annotation",{encoding:"application/x-tex"},"C")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C")])])]),n("的成员")])],-1),g=s('<p>此原则的最终目的是<strong>低耦合, 高内聚</strong></p><h3 id="对象和数据结构-1" tabindex="-1"><a class="header-anchor" href="#对象和数据结构-1"><span>对象和数据结构</span></a></h3><p>对象是隐藏内部, 只展示operation的, 而数据结构暴露内部数据, 而提供很少的对外行为</p><p>对于只提供数据的存在, 我们使用结构来实现, 而如果我们需要实现某种行为, 我们需要考虑对象, 并且遵守<strong>低耦合高内聚</strong>的原则</p><p>对于完全没有自己行为, 完全只有数据的struct, 我们可以将其视作DTO(Data Transfer Object), 或者叫做一个Bean</p><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理"><span>错误处理</span></a></h2><p>感悟不是很深, 随便记几点:</p><ul><li>不要传递Null</li><li>不要返回Null</li><li>用异常机制代替错误码</li><li>避免不必要的错误捕捉</li></ul><h2 id="边界-boundary" tabindex="-1"><a class="header-anchor" href="#边界-boundary"><span>边界(boundary)</span></a></h2><p>边界用于描述一个模块与外部相连的部分, 可以参照类的接口来理解</p><ul><li><p>对于一个模块提供的过多的并不需要的功能, 我们通过封装来减少第三方代码的边界, 从而降低自己的代码和第三方代码的耦合性, 并且提高可读性, 避免冗余信息</p></li><li><p>学习探索第三方代码的最佳方式就是test, 自己编写相关功能的测试代码, 来理解各个代码的作用如何. 官方提供的测试用例也是使用代码的良好参考</p></li><li><p>可以使用不存在的代码, 然后将这些代码编写为一个adapter接口, 再使用第三方代码进行实现, 使我们在选择依赖前先完成自己的设计</p></li></ul><h2 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试"><span>单元测试</span></a></h2><h3 id="ttd-test-driven-development" tabindex="-1"><a class="header-anchor" href="#ttd-test-driven-development"><span>TTD(Test-Driven Development)</span></a></h3><p>TTD的原则:</p><ul><li>You may not write production code until you have written a failing unit test.</li><li>You may not write more of a unit test than is sufficient to fail, and not compiling is failing.</li><li>You may not write more production code than is sufficient to pass the currently failing test.</li></ul><p>测试使得开发更稳定灵活, 你不必再担心代码改动是否会造成其他部分的故障, 因为test能够限制代码在一定的范围中起作用.</p><h3 id="clean-test" tabindex="-1"><a class="header-anchor" href="#clean-test"><span>clean test</span></a></h3><p>为了编写简洁的测试, 我们需要将测试需要的数据生成部分单独编写分离, 避免在test函数中编写生成数据的逻辑.</p><p>然后, 我们调用需要测试的函数, 并尽量避免在test函数中编写过多的逻辑</p><p>最后, 我们使用<strong>一条</strong>断言来判断输出的正确性</p><h2 id="class" tabindex="-1"><a class="header-anchor" href="#class"><span>Class</span></a></h2><h3 id="small-enough" tabindex="-1"><a class="header-anchor" href="#small-enough"><span>Small Enough!</span></a></h3><p>类的大小应该足够小, 对于一个类的设计, 我们应该满足SRP(Single Responsibility Principle)</p><p>怎样来划分责任取决于设计者的喜好, 但是我们总存在一个普遍认可的指导原则: <strong>高内聚(High Cohesion)</strong></p><p>内聚是指类的成员函数和成员变量之间的关系, 如果一个函数能够尽量多地使用成员变量, 那么我们则称为<strong>高内聚</strong>. 于是如果一个类的责任过多, 不同的函数之间对变量的使用不可能完全重合, 所以过多的责任将导致类的内聚程度降低, 所以使用<strong>高内聚</strong>的原则来划分类的责任是一个值得参考的方式</p><h3 id="organizing-for-change" tabindex="-1"><a class="header-anchor" href="#organizing-for-change"><span>Organizing for Change</span></a></h3><p>将代码变化部分和不变部分分离, 形成继承结构, 从而满足OCP(Open Closed Principle)</p><p>开闭原则指的是, <strong>开放扩展, 关闭修改</strong>.</p><p>当我们需要扩展功能时, 通过继承就能实现, 而不改变已有部分</p><p>使用接口是对于Change处理的极端情况, 我们将不变部分设置为接口, 我们的扩展行为是对接口的实现. 而使用接口的部分不需要进行修改.</p><h2 id="system" tabindex="-1"><a class="header-anchor" href="#system"><span>System</span></a></h2><p>构建系统和使用系统是两个事情, 我们应该将其分开, 其中的一种实现方式叫做DI(dependency injection)</p><h3 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入"><span>依赖注入</span></a></h3><p>我们构建一个服务时需要使用很多额外的工具和依赖, 我们需要创建这些依赖并配置它们, 然后使用它们.</p><p>依赖注入的思想就是将创建和配置的过程交给其他类来负责, 服务中只需要使用传递进来的完成的依赖的对象即可, 然后在服务中直接使用.</p><h3 id="ioc" tabindex="-1"><a class="header-anchor" href="#ioc"><span>Ioc</span></a></h3><p>IoC(Inversion of Control)是一种设计思想, 即把程序的某一部分的控制抽取出来, 让外界来负责这一部分的职责. 依赖注入是控制反转的一种具体实现, 将程序的依赖反转给了外部来实现.</p><h3 id="aop" tabindex="-1"><a class="header-anchor" href="#aop"><span>AOP</span></a></h3><p>AOP(Aspect Oriented Programming)是一种编程思想, 我们的程序运行中存在许多固定的phrase, 这些共同的phrase我们可以看作一个切面, 然后我们通过某些方式将代码加入到切面的某个位置, 从而实现在所有相同的阶段来进行某个操作, 比如记录日志等</p><h3 id="test-drive-the-archithecture" tabindex="-1"><a class="header-anchor" href="#test-drive-the-archithecture"><span>Test drive the Archithecture</span></a></h3><p>我们先编写测试, 而在架构上偏向于使用高度解耦但是简单且原生的方式来实现, 然后在测试中不断优化, 增加功能, 最后实现稳定可靠的系统</p><h3 id="做出更好的决定" tabindex="-1"><a class="header-anchor" href="#做出更好的决定"><span>做出更好的决定</span></a></h3><p>做决定时, 将决定权分散(去中心化)能够更好的保证决定的正确性, 并且应当将决定放到不得不做时再决定, 此时你才拥有最多的信息来判断决定的正确性</p><h3 id="理性对待标准" tabindex="-1"><a class="header-anchor" href="#理性对待标准"><span>理性对待<em>标准</em></span></a></h3><p>对于所谓的行业标准或者编码标准, 只有当你能明确其带来的价值时, 才去采用它, 否则只是无故的增加工作的难度和员工犯错的可能性</p><h3 id="使用dsl-domain-specific-language" tabindex="-1"><a class="header-anchor" href="#使用dsl-domain-specific-language"><span>使用DSL(Domain Specific Language)</span></a></h3><p>领域特定语言是对应领域的描述方式, 某个领域的专家更偏向于使用的专业语言.</p><p>如果我们在代码中使用这样的语言来表达, 可以更好的减少代码对于领域特定实现的错误</p><hr><h2 id="emergence" tabindex="-1"><a class="header-anchor" href="#emergence"><span>Emergence</span></a></h2><p>涌现(emergence)如同字面意思一样, 不同的元素如同泉水一般一点点从泉眼中出现, 量少而连续不断</p><h3 id="emergent-design" tabindex="-1"><a class="header-anchor" href="#emergent-design"><span>Emergent Design</span></a></h3><p>涌现式设计就是这种形式的一种体现, 我们会源源不断地产生新的想法和方案, 然后将这些想法一一付诸实践. 但是这势必会造成现有系统的不断更改, 从而造成无用工作. 所以对于涌现式设计, 我们需要在项目建立之时就采用灵活且低耦合的设计方式, 然后不断地将想法融入其中.</p><p>为了实现涌现式设计, 我们需要遵守以下原则:</p><ul><li><p>编写好完整地测试</p><p>编写好了完整地测试后, 我们就可以自由地修改现有程序, 而保证我们的修改没有破坏原本的程序</p></li><li><p>Refactory(重构)</p><p>完成了测试后, 我们需要不断地重构代码, 具体包括如下;</p><ul><li>消除重复代码</li><li>优化代码表达性</li><li>最小化类和方法</li></ul></li></ul><h2 id="concurrency" tabindex="-1"><a class="header-anchor" href="#concurrency"><span>Concurrency</span></a></h2><p>并发从来都是一个提高程序性能但是难以把控的问题.</p><p>简单回顾一下引发死锁的四个必要条件:</p><ul><li>互斥条件: 一个资源每次只能被一个进程使用</li><li>请求与保持条件: 一个进程因请求资源而阻塞时, 对已获得的资源保持不放</li><li>不剥夺条件: 进程已获得的资源, 在末使用完之前, 不能强行剥夺</li><li>循环等待条件: 若干进程之间形成一种头尾相接的循环等待资源关系</li></ul><h3 id="srp-in-conccurrency" tabindex="-1"><a class="header-anchor" href="#srp-in-conccurrency"><span>SRP in Conccurrency</span></a></h3><p>由于并发代码的复杂性, 并且其拥有单独的错误和调试方式, 所以我们应当将并发代码视作单独的责任, 尽管它属于功能的一部分.</p><h3 id="减少共享数据-缩小数据scope" tabindex="-1"><a class="header-anchor" href="#减少共享数据-缩小数据scope"><span>减少共享数据, 缩小数据scope</span></a></h3><p>数据一致性问题是并发编程面对的主要挑战之一, 所以为了减少shared data带来的问题, 我们偏好于减少共享数据的采用.</p><p>其中一种解决方式是通过拷贝原始数据到多个threads中, 然后在完成后将各自的结果合并.</p><h3 id="尽量独立" tabindex="-1"><a class="header-anchor" href="#尽量独立"><span>尽量独立</span></a></h3><p>线程进行的任务应该尽量的独立, 而不依靠其他线程, 这样可以减少条件变量和线程之间的依赖, 降低系统复杂度, 从而减少问题的产生.</p><h3 id="excution-models" tabindex="-1"><a class="header-anchor" href="#excution-models"><span>Excution Models</span></a></h3><h4 id="produceer-consumer" tabindex="-1"><a class="header-anchor" href="#produceer-consumer"><span>Produceer-Consumer</span></a></h4><p>生产者消费者模型, 很常见</p><h4 id="readers-writers" tabindex="-1"><a class="header-anchor" href="#readers-writers"><span>Readers-Writers</span></a></h4><p>读写锁相关的模型</p><h4 id="dining-philosophers" tabindex="-1"><a class="header-anchor" href="#dining-philosophers"><span>Dining Philosophers</span></a></h4><p>多个消耗资源的对象和多个资源构成的模型.</p><h3 id="synchronized-method" tabindex="-1"><a class="header-anchor" href="#synchronized-method"><span>Synchronized Method</span></a></h3><p>使用<code>Synchronized</code>修饰的方法可以保证内部的原子性, 但是需要注意多个方法之间的并发问题</p><hr><h1 id="第三部分" tabindex="-1"><a class="header-anchor" href="#第三部分"><span>第三部分</span></a></h1><p>第三部分是关于工程实践, 略过</p>',78);function f(b,v){return i(),t("div",null,[o,c,p,a(" TOC "),d,a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),a(" /TOC "),h,u,m,g])}const x=l(r,[["render",f],["__file","afterReadingCleanCode.html.vue"]]),C=JSON.parse(`{"path":"/posts/essay/afterReadingCleanCode.html","title":"Clean Code阅读笔记","lang":"zh-CN","frontmatter":{"title":"Clean Code阅读笔记","tag":["编码规范","代码能力"],"categories":["随笔","读后感"],"mathjax":true,"mermaid":true,"date":"2023-07-25T00:00:00.000Z","description":"Clean Code called 《代码整洁之道》in Chinese give a lot of guidance on how to write readable code. 在此为此书的阅读做出整理 第一部分 格式(format)部分 vertical formatting horizontal formatting intermission ...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/essay/afterReadingCleanCode.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"Clean Code阅读笔记"}],["meta",{"property":"og:description","content":"Clean Code called 《代码整洁之道》in Chinese give a lot of guidance on how to write readable code. 在此为此书的阅读做出整理 第一部分 格式(format)部分 vertical formatting horizontal formatting intermission ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T13:35:40.000Z"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"编码规范"}],["meta",{"property":"article:tag","content":"代码能力"}],["meta",{"property":"article:published_time","content":"2023-07-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T13:35:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Clean Code阅读笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T13:35:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":2,"title":"格式(format)部分","slug":"格式-format-部分","link":"#格式-format-部分","children":[{"level":3,"title":"vertical formatting","slug":"vertical-formatting","link":"#vertical-formatting","children":[]},{"level":3,"title":"horizontal formatting","slug":"horizontal-formatting","link":"#horizontal-formatting","children":[]}]},{"level":2,"title":"intermission","slug":"intermission","link":"#intermission","children":[]},{"level":2,"title":"对象和数据结构","slug":"对象和数据结构","link":"#对象和数据结构","children":[{"level":3,"title":"数据的抽象","slug":"数据的抽象","link":"#数据的抽象","children":[]},{"level":3,"title":"反对称性","slug":"反对称性","link":"#反对称性","children":[]},{"level":3,"title":"迪米特原则","slug":"迪米特原则","link":"#迪米特原则","children":[]},{"level":3,"title":"对象和数据结构","slug":"对象和数据结构-1","link":"#对象和数据结构-1","children":[]}]},{"level":2,"title":"错误处理","slug":"错误处理","link":"#错误处理","children":[]},{"level":2,"title":"边界(boundary)","slug":"边界-boundary","link":"#边界-boundary","children":[]},{"level":2,"title":"单元测试","slug":"单元测试","link":"#单元测试","children":[{"level":3,"title":"TTD(Test-Driven Development)","slug":"ttd-test-driven-development","link":"#ttd-test-driven-development","children":[]},{"level":3,"title":"clean test","slug":"clean-test","link":"#clean-test","children":[]}]},{"level":2,"title":"Class","slug":"class","link":"#class","children":[{"level":3,"title":"Small Enough!","slug":"small-enough","link":"#small-enough","children":[]},{"level":3,"title":"Organizing for Change","slug":"organizing-for-change","link":"#organizing-for-change","children":[]}]},{"level":2,"title":"System","slug":"system","link":"#system","children":[{"level":3,"title":"依赖注入","slug":"依赖注入","link":"#依赖注入","children":[]},{"level":3,"title":"Ioc","slug":"ioc","link":"#ioc","children":[]},{"level":3,"title":"AOP","slug":"aop","link":"#aop","children":[]},{"level":3,"title":"Test drive the Archithecture","slug":"test-drive-the-archithecture","link":"#test-drive-the-archithecture","children":[]},{"level":3,"title":"做出更好的决定","slug":"做出更好的决定","link":"#做出更好的决定","children":[]},{"level":3,"title":"理性对待标准","slug":"理性对待标准","link":"#理性对待标准","children":[]},{"level":3,"title":"使用DSL(Domain Specific Language)","slug":"使用dsl-domain-specific-language","link":"#使用dsl-domain-specific-language","children":[]}]},{"level":2,"title":"Emergence","slug":"emergence","link":"#emergence","children":[{"level":3,"title":"Emergent Design","slug":"emergent-design","link":"#emergent-design","children":[]}]},{"level":2,"title":"Concurrency","slug":"concurrency","link":"#concurrency","children":[{"level":3,"title":"SRP in Conccurrency","slug":"srp-in-conccurrency","link":"#srp-in-conccurrency","children":[]},{"level":3,"title":"减少共享数据, 缩小数据scope","slug":"减少共享数据-缩小数据scope","link":"#减少共享数据-缩小数据scope","children":[]},{"level":3,"title":"尽量独立","slug":"尽量独立","link":"#尽量独立","children":[]},{"level":3,"title":"Excution Models","slug":"excution-models","link":"#excution-models","children":[]},{"level":3,"title":"Synchronized Method","slug":"synchronized-method","link":"#synchronized-method","children":[]}]}],"git":{"createdTime":1712936892000,"updatedTime":1713101740000,"contributors":[{"name":"DnullP","email":"dnull123p@gmail.com","commits":2}]},"readingTime":{"minutes":15.25,"words":4575},"filePathRelative":"posts/essay/afterReadingCleanCode.md","localizedDate":"2023年7月25日","excerpt":"<p><em>Clean Code</em> called 《代码整洁之道》in Chinese give a lot of guidance on how to write readable code.</p>\\n<p>在此为此书的阅读做出整理</p>\\n<hr>\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86\\">第一部分</a>\\n<ul>\\n<li><a href=\\"#%e6%a0%bc%e5%bc%8fformat%e9%83%a8%e5%88%86\\">格式(format)部分</a>\\n<ul>\\n<li><a href=\\"#vertical-formatting\\">vertical formatting</a></li>\\n<li><a href=\\"#horizontal-formatting\\">horizontal formatting</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#intermission\\">intermission</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86\\">第二部分</a>\\n<ul>\\n<li><a href=\\"#%e5%af%b9%e8%b1%a1%e5%92%8c%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84\\">对象和数据结构</a>\\n<ul>\\n<li><a href=\\"#%e6%95%b0%e6%8d%ae%e7%9a%84%e6%8a%bd%e8%b1%a1\\">数据的抽象</a></li>\\n<li><a href=\\"#%e5%8f%8d%e5%af%b9%e7%a7%b0%e6%80%a7\\">反对称性</a></li>\\n<li><a href=\\"#%e8%bf%aa%e7%b1%b3%e7%89%b9%e5%8e%9f%e5%88%99\\">迪米特原则</a></li>\\n<li><a href=\\"#%e5%af%b9%e8%b1%a1%e5%92%8c%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84-1\\">对象和数据结构</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%e9%94%99%e8%af%af%e5%a4%84%e7%90%86\\">错误处理</a></li>\\n<li><a href=\\"#%e8%be%b9%e7%95%8cboundary\\">边界(boundary)</a></li>\\n<li><a href=\\"#%e5%8d%95%e5%85%83%e6%b5%8b%e8%af%95\\">单元测试</a>\\n<ul>\\n<li><a href=\\"#ttdtest-driven-development\\">TTD(Test-Driven Development)</a></li>\\n<li><a href=\\"#clean-test\\">clean test</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#class\\">Class</a>\\n<ul>\\n<li><a href=\\"#small-enough\\">Small Enough!</a></li>\\n<li><a href=\\"#organizing-for-change\\">Organizing for Change</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#system\\">System</a>\\n<ul>\\n<li><a href=\\"#%e4%be%9d%e8%b5%96%e6%b3%a8%e5%85%a5\\">依赖注入</a></li>\\n<li><a href=\\"#ioc\\">Ioc</a></li>\\n<li><a href=\\"#aop\\">AOP</a></li>\\n<li><a href=\\"#test-drive-the-archithecture\\">Test drive the Archithecture</a></li>\\n<li><a href=\\"#%e5%81%9a%e5%87%ba%e6%9b%b4%e5%a5%bd%e7%9a%84%e5%86%b3%e5%ae%9a\\">做出更好的决定</a></li>\\n<li><a href=\\"#%e7%90%86%e6%80%a7%e5%af%b9%e5%be%85%e6%a0%87%e5%87%86\\">理性对待<em>标准</em></a></li>\\n<li><a href=\\"#%e4%bd%bf%e7%94%a8dsldomain-specific-language\\">使用DSL(Domain Specific Language)</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#emergence\\">Emergence</a>\\n<ul>\\n<li><a href=\\"#emergent-design\\">Emergent Design</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#concurrency\\">Concurrency</a>\\n<ul>\\n<li><a href=\\"#srp-in-conccurrency\\">SRP in Conccurrency</a></li>\\n<li><a href=\\"#%e5%87%8f%e5%b0%91%e5%85%b1%e4%ba%ab%e6%95%b0%e6%8d%ae-%e7%bc%a9%e5%b0%8f%e6%95%b0%e6%8d%aescope\\">减少共享数据, 缩小数据scope</a></li>\\n<li><a href=\\"#%e5%b0%bd%e9%87%8f%e7%8b%ac%e7%ab%8b\\">尽量独立</a></li>\\n<li><a href=\\"#excution-models\\">Excution Models</a>\\n<ul>\\n<li><a href=\\"#produceer-consumer\\">Produceer-Consumer</a></li>\\n<li><a href=\\"#readers-writers\\">Readers-Writers</a></li>\\n<li><a href=\\"#dining-philosophers\\">Dining Philosophers</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#synchronized-method\\">Synchronized Method</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#%e7%ac%ac%e4%b8%89%e9%83%a8%e5%88%86\\">第三部分</a></li>\\n</ul>","autoDesc":true}`);export{x as comp,C as data};
