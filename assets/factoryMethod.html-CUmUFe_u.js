import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-DCTCPPGQ.js";const t={},l=e(`<h3 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式"><span>工厂方法模式</span></a></h3><p>在工厂方法模式中，我们主要考虑的就是“方法”</p><p>我们之前已经了解过了抽象工厂，通过实现工厂和产品的接口来将产品和client分割开来，而这里的工厂方法模式是从具体的视角来看待抽象工厂</p><p>我们在抽象工厂中考虑的工厂的方法全部都是抽象的，产品对应的方法也全部都是抽象的，但是实际上工厂会有一些具体的方法不需要每个工厂单独实现</p><p>我们的创造产品的代码就和其他的代码区别开来了，每个不同的工厂单独实现创造产品的模式就是工厂方法模式，这也正是对应其命名，工厂中分别定义的是方法</p><p>工厂方法常常和抽象工厂结合使用，我认为他们都是工厂模式的一部分，只是考虑的方式和视角不一样，对此就不对工厂方法模式做更多的例子了</p><hr><p>在Consquence部分，我看到了一个没有想过的作用：</p><p>考虑这样一种情况： 我们有一个抽象类，其有两个实现，现在我们需要一个控制器来控制这个类，然后我们在抽象类中写了一个Create函数来创建一个通用的控制器</p><p>这样的话类图结构就是这样</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">hide</span> fields
Abstract Abstract<span class="token punctuation">{</span>
    +create<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> ClassA<span class="token punctuation">{</span>
    +create<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token arrow operator">+...</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> ClassB<span class="token punctuation">{</span>
    +create<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token arrow operator">+...</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
Abstract <span class="token arrow operator">&lt;|--</span> ClassA
Abstract <span class="token arrow operator">&lt;|--</span> ClassB

<span class="token keyword">hide</span> client circle
<span class="token keyword">hide</span> client method
<span class="token keyword">class</span> client
client <span class="token arrow operator">-&gt;</span> Abstract

<span class="token keyword">class</span> Handler<span class="token punctuation">{</span>
    +operations<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

Handler <span class="token arrow operator">&lt;-</span> client
Handler <span class="token arrow operator">&lt;.</span> ClassA
Handler <span class="token arrow operator">&lt;.</span> ClassB
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么一来Handler就和抽象类是一层的了，因为是抽象类来控制其生产，这样的话Handler就是为了抽象类以及其所有子类负责，如果有改动将会用于所有子类</p><p>如果我们通过factory method的思想，make the Handler degrade to the concret class，也就是让每一个具体类实现各自的Handler</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">hide</span> fields
Abstract Abstract<span class="token punctuation">{</span>
    <span class="token punctuation">{</span>Abstract<span class="token punctuation">}</span>+create<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> ClassA<span class="token punctuation">{</span>
    +create<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token arrow operator">+...</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> ClassB<span class="token punctuation">{</span>
    +create<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token arrow operator">+...</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
Abstract <span class="token arrow operator">&lt;|--</span> ClassA
Abstract <span class="token arrow operator">&lt;|--</span> ClassB

<span class="token keyword">hide</span> client circle
<span class="token keyword">hide</span> client method
<span class="token keyword">class</span> client
client <span class="token arrow operator">-&gt;</span> Abstract

Abstract AbstractHandler<span class="token punctuation">{</span>
    <span class="token punctuation">{</span>Abstract<span class="token punctuation">}</span>+operations<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> HandlerA<span class="token punctuation">{</span>
    +operations<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> HandlerB<span class="token punctuation">{</span>
    +operations<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
AbstractHandler <span class="token arrow operator">&lt;|--</span> HandlerA
AbstractHandler <span class="token arrow operator">&lt;|--</span> HandlerB

AbstractHandler <span class="token arrow operator">&lt;-</span> client
HandlerA <span class="token arrow operator">&lt;.</span> ClassA
HandlerB <span class="token arrow operator">&lt;.</span> ClassB
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们就让Handler的maintaining降到了和各个具体类一个等级</p><p>通过这里这种想法，我们再回过去看一下Builder中的类图：</p><figure><img src="https://www.runoob.com/wp-content/uploads/2014/08/20210315-builder-pattern.svg" alt="avator" tabindex="0" loading="lazy"><figcaption>avator</figcaption></figure><p>之前我就考虑过这里的Builder使用了层级结构，仍然有些不太明了，参考了上面使用Factor methode降层的思想后，我们给Builder一个明确的层级结构</p><p>但是Builder不像上面的产品类一样有这么强的inheritance，Builder构造的产品层次结构是灵活多变的，这里的Builder包括了Item、Buger、ColdDrink、Packing，然后考虑到构造是一层层向上构造的，这里一共有两层，一层是Item，一层是Packing，这是Builder的部分，对于Builder的视角来说只有这两个构造的选项，但是我们引入factory method的思想，就会多出Item的subclass和Packing之间的关系了</p><p>Burger、ColdDrink可以视作两个抽象工厂，子类为具体工厂，Item为“根工厂”，Packing视作一个抽象工厂，其子类由Burger和ColdDrink调用创建产品，所以Packing可以视作和Item同一层级，而Warpper和Bottle和Burger、ColdDrink一个层级</p><p>再考虑把factory method和Builder结合起来看： 从builder视角来看，只考虑Meal（产品）、mealBuilder（director）、所有的具体类（concrete builder0）、中间的抽象类构成的层级结构不在builder的考虑范围内</p><p>从factory method的角度看，Item往上的东西都不考虑，只考虑Item以下以及Packing的关系，Item分三层，Packing分两层，Packing的第二层和Item的第二层之间存在关系</p><p>最后做一个逆向解释，像之前factory method的例子一样，我们把创建Packing的位置放到Item上，Item就不再能区别Burger和ColdDrink的Packing，所以使用统一的Packing就行了，直接在Item中创建一个Packing，就像在Burger中创建一样</p>`,23),i=[l];function p(c,r){return a(),s("div",null,i)}const u=n(t,[["render",p],["__file","factoryMethod.html.vue"]]),m=JSON.parse(`{"path":"/posts/SE/design-pattern/factoryMethod.html","title":"Abstract Factory","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"Abstract Factory","tag":["design-pattern","面向对象"],"categories":["设计模式"],"mathjax":true,"description":"工厂方法模式 在工厂方法模式中，我们主要考虑的就是“方法” 我们之前已经了解过了抽象工厂，通过实现工厂和产品的接口来将产品和client分割开来，而这里的工厂方法模式是从具体的视角来看待抽象工厂 我们在抽象工厂中考虑的工厂的方法全部都是抽象的，产品对应的方法也全部都是抽象的，但是实际上工厂会有一些具体的方法不需要每个工厂单独实现 我们的创造产品的代码就...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/SE/design-pattern/factoryMethod.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"Abstract Factory"}],["meta",{"property":"og:description","content":"工厂方法模式 在工厂方法模式中，我们主要考虑的就是“方法” 我们之前已经了解过了抽象工厂，通过实现工厂和产品的接口来将产品和client分割开来，而这里的工厂方法模式是从具体的视角来看待抽象工厂 我们在抽象工厂中考虑的工厂的方法全部都是抽象的，产品对应的方法也全部都是抽象的，但是实际上工厂会有一些具体的方法不需要每个工厂单独实现 我们的创造产品的代码就..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.runoob.com/wp-content/uploads/2014/08/20210315-builder-pattern.svg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Abstract Factory"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"design-pattern"}],["meta",{"property":"article:tag","content":"面向对象"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Abstract Factory\\",\\"image\\":[\\"https://www.runoob.com/wp-content/uploads/2014/08/20210315-builder-pattern.svg\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":3,"title":"工厂方法模式","slug":"工厂方法模式","link":"#工厂方法模式","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.57,"words":1071},"filePathRelative":"posts/SE/design-pattern/factoryMethod.md","localizedDate":"2021年1月1日","excerpt":"<h3>工厂方法模式</h3>\\n<p>在工厂方法模式中，我们主要考虑的就是“方法”</p>\\n<p>我们之前已经了解过了抽象工厂，通过实现工厂和产品的接口来将产品和client分割开来，而这里的工厂方法模式是从具体的视角来看待抽象工厂</p>\\n<p>我们在抽象工厂中考虑的工厂的方法全部都是抽象的，产品对应的方法也全部都是抽象的，但是实际上工厂会有一些具体的方法不需要每个工厂单独实现</p>\\n<p>我们的创造产品的代码就和其他的代码区别开来了，每个不同的工厂单独实现创造产品的模式就是工厂方法模式，这也正是对应其命名，工厂中分别定义的是方法</p>\\n<p>工厂方法常常和抽象工厂结合使用，我认为他们都是工厂模式的一部分，只是考虑的方式和视角不一样，对此就不对工厂方法模式做更多的例子了</p>","autoDesc":true}`);export{u as comp,m as data};
