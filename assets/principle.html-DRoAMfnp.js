import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,e as s}from"./app-DCTCPPGQ.js";const t={},i=s(`<h4 id="_1-6-how-design-pattern-solve-design-problems" tabindex="-1"><a class="header-anchor" href="#_1-6-how-design-pattern-solve-design-problems"><span>1.6 How design pattern solve design problems</span></a></h4><p>there are some tips taken down:</p><ul><li><strong>request</strong> is the <strong>only</strong> way to get an object to excute an operation, and <strong>operation</strong> is the only way to change the <strong>internal data</strong>. we call this <strong>encapsulated</strong>.</li></ul><p>How to design a pattern?</p><ul><li>1.find the appropriate object</li><li>2.determine the granularity of objects</li><li>3.specifying object interface <strong>signature</strong>: name, parameters, return value of a operation <strong>interface</strong>: it defines all signatures of an object <strong>type</strong>: to call a particular interface different types may share their interface, and we call a type owning a subset of another type&#39;s interface <strong>subtype</strong>. <strong>type is not same as class. class includes implement, field, internal state of an object, while type just refers to its interface which indicates the set of requests that it can handle and respond.</strong> because of the different implement of the same interface of objects, it is a run-time association between requests and operation, which we call <strong>&quot;dynamic binding&quot;</strong>.</li><li>4.specifying object implementation objects are <strong>instantiating</strong> from a class to be an <strong>instance</strong>. we use such diagram to describe a pattern:</li></ul><p>a class is present as below:</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">class</span> ClassName<span class="token punctuation">{</span>
  Fuction<span class="token punctuation">(</span> <span class="token punctuation">)</span>
  Variable
<span class="token punctuation">}</span>
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>this dashed arrowhead line indicates a class that instantiating objects of another class.</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">class</span> Instantiator
<span class="token keyword">class</span> Instantiatee
Instantiator <span class="token arrow operator">.&gt;</span>Instantiatee
<span class="token keyword">hide</span> members
<span class="token keyword">hide</span> circle
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and this indicates an inheritance relationship, and it&#39;s usually vertical.</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">class</span> ParentClass<span class="token punctuation">{</span>
  operation<span class="token punctuation">(</span> <span class="token punctuation">)</span>
  Variables
<span class="token punctuation">}</span>
<span class="token keyword">class</span> Subclass<span class="token punctuation">{</span>
  operation<span class="token punctuation">(</span> <span class="token punctuation">)</span>
  Variables
<span class="token punctuation">}</span>
ParentClass <span class="token arrow operator">&lt;|--</span> Subclass
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>this is an Abstract class and its Subclass</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">hide</span> field
Abstract AbstractClass<span class="token punctuation">{</span>
  operation <span class="token punctuation">(</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
Class ConcreteSubclass<span class="token punctuation">{</span>
  operation <span class="token punctuation">(</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">note</span> right of ConcreteSubclass<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token string">&quot;operation ( )&quot;</span>
  implementation
  pseudocode
<span class="token keyword">end note</span>
AbstractClass <span class="token arrow operator">&lt;|--</span> ConcreteSubclass
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a mixin class which provide an optional interface:</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">hide</span> field
<span class="token keyword">class</span> ExistingClass<span class="token punctuation">{</span>
  operation_1 <span class="token punctuation">(</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> MixinClass<span class="token punctuation">{</span>
  operation_2 <span class="token punctuation">(</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> Subclass<span class="token punctuation">{</span>
  operation_1 <span class="token punctuation">(</span> <span class="token punctuation">)</span>
  operation_2 <span class="token punctuation">(</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
ExistingClass <span class="token arrow operator">&lt;|--</span> Subclass
MixinClass <span class="token arrow operator">&lt;|--</span> Subclass
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>we emphasize that <strong>program to an interface, not an implementation</strong>. the most important is not code-sharing, but the relationship between class, and interface inheritance make sure the change can be carried out more easily.</p><ul><li>class inheritance make let you implement a class in term of another one.</li><li>interface inheritance describe a kind of classes can be used somewhere. if we implement a class in term of a interface, this class can be uesed in everyplace where use the interface.</li></ul><h5 id="inheritance-versus-composition" tabindex="-1"><a class="header-anchor" href="#inheritance-versus-composition"><span>inheritance versus composition</span></a></h5><p>it&#39;s two kinds of method to reuse code. composition is to assembling the objects to get a more complecated functionality, which we also call &quot;black box reuse&quot;, because we don&#39;t know the detailed implementation of each object.</p><p>we emphasize that <strong>&quot;Favor object composition over class inheritance&quot;</strong>. It enhances the degree of encasulation.</p><h4 id="delegation" tabindex="-1"><a class="header-anchor" href="#delegation"><span>delegation</span></a></h4><p>it is a way to making the composition. we instantiate a class to an object in another class, and forward the require from the superclass to the internal object so that to realize the composition.</p><p>dpciting a diagram below:</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">hide</span> field
<span class="token keyword">class</span> Window<span class="token punctuation">{</span>
  +Area <span class="token punctuation">(</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">show</span> Rectangle fields
<span class="token keyword">class</span> Rectangle<span class="token punctuation">{</span>
  +Area <span class="token punctuation">(</span> <span class="token punctuation">)</span>
  +width
  +height
<span class="token punctuation">}</span>
<span class="token keyword">note</span> <span class="token string">&quot;return rectangle-&gt;Area ( )&quot;</span> <span class="token keyword">as</span> N1
Window<span class="token punctuation">:</span><span class="token punctuation">:</span>Area <span class="token arrow operator">&lt;--</span> N1
<span class="token keyword">note</span> <span class="token string">&quot;return width * height&quot;</span> <span class="token keyword">as</span> N2
Rectangle<span class="token punctuation">:</span><span class="token punctuation">:</span>Area <span class="token arrow operator">&lt;--</span>N2
Window <span class="token string">&quot;rectangle&quot;</span> <span class="token arrow operator">-&gt;</span> Rectangle
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aggregation-and-acquaintance" tabindex="-1"><a class="header-anchor" href="#aggregation-and-acquaintance"><span>aggregation and acquaintance</span></a></h4><p>aggregation implies that one object own another one, which we dpcit as below: (aggregator own the aggregatee)</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">hide</span> method
<span class="token keyword">hide</span> fields

<span class="token keyword">class</span> aggregator
<span class="token keyword">class</span> aggregatee

aggregator <span class="token arrow operator">o-&gt;</span> aggregatee
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and the acquaintance implies they just have a somehow relationship, but not responsiblity for one another:</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml" data-title="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
<span class="token keyword">hide</span> method
<span class="token keyword">hide</span> fields

<span class="token keyword">class</span> ClassA
<span class="token keyword">class</span> ClassB

ClassA <span class="token arrow operator">-&gt;</span> ClassB
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="design-for-change" tabindex="-1"><a class="header-anchor" href="#design-for-change"><span>design for change</span></a></h4><p>different patterns make the system more rebust in a particular kind of change</p><h4 id="difference-between-a-framework-and-a-pattern" tabindex="-1"><a class="header-anchor" href="#difference-between-a-framework-and-a-pattern"><span>difference between a framework and a pattern</span></a></h4><ul><li>a pattern is usually a conception and abstraction, but a framework has concret code and implement.</li><li>a pattern is a small unit than framework</li><li>a pattern is less specialized than framework</li></ul>`,33),l=[i];function o(r,c){return a(),e("div",null,l)}const u=n(t,[["render",o],["__file","principle.html.vue"]]),m=JSON.parse(`{"path":"/posts/SE/design-pattern/principle.html","title":"设计模式","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"设计模式","tag":["design-pattern","面向对象"],"categories":["设计模式"],"mathjax":true,"description":"1.6 How design pattern solve design problems there are some tips taken down: request is the only way to get an object to excute an operation, and operation is the only way to ch...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/SE/design-pattern/principle.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"设计模式"}],["meta",{"property":"og:description","content":"1.6 How design pattern solve design problems there are some tips taken down: request is the only way to get an object to excute an operation, and operation is the only way to ch..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"design-pattern"}],["meta",{"property":"article:tag","content":"面向对象"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.22,"words":665},"filePathRelative":"posts/SE/design-pattern/principle.md","localizedDate":"2021年1月1日","excerpt":"<h4>1.6 How design pattern solve design problems</h4>\\n<p>there are some tips taken down:</p>\\n<ul>\\n<li><strong>request</strong> is the <strong>only</strong> way to get an object to excute an operation, and <strong>operation</strong> is the only way to change the <strong>internal data</strong>.\\nwe call this  <strong>encapsulated</strong>.</li>\\n</ul>","autoDesc":true}`);export{u as comp,m as data};
