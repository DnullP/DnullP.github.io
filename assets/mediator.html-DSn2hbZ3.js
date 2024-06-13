import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DCTCPPGQ.js";const t={},o=e(`<h3 id="mediator" tabindex="-1"><a class="header-anchor" href="#mediator"><span>mediator</span></a></h3><p>中介者模式简单来说就是在各个交互的类之间加上一个中间件，使得各个组件之间的交流通过中间件来控制，各个组件只能和中间件通信，对于每个组件来说其他组件都是未知的，这样使得组件之间实现了解耦，组件的代码得以在其他地方得到复用</p><p>比如我们现在要组成一个窗口，窗口内的按钮和label之间会相互影响，那么我们建立一个窗口类，这个窗口类可以接收所有按钮和label的请求，并处理请求，寻找合适的其他对象进行请求和通信</p><p>下面来看一下来自refactoring.guru的类结构图：</p><figure><img src="https://refactoring.guru/images/patterns/diagrams/mediator/structure.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中包含三个要素：</p><ul><li><p>Component 所有这些Component都是相互协作运行的一些类，他们都有一个中间件Mediator作为成员，来完成黑盒通信</p></li><li><p>Mediator 中间件接口，通过<code>notify()</code>方法来和其他组件交互</p></li><li><p>具体实现的中介者不再赘述</p></li></ul><p>下面是来自refactoring.guru的代码例子：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// The mediator interface declares a method used by components</span>
<span class="token comment">// to notify the mediator about various events. The mediator may</span>
<span class="token comment">// react to these events and pass the execution to other</span>
<span class="token comment">// components.</span>
<span class="token keyword">interface</span> <span class="token class-name">Mediator</span> is
    method <span class="token function">notify</span><span class="token punctuation">(</span>sender<span class="token operator">:</span> <span class="token class-name">Component</span><span class="token punctuation">,</span> event<span class="token operator">:</span> string<span class="token punctuation">)</span>


<span class="token comment">// The concrete mediator class. The intertwined web of</span>
<span class="token comment">// connections between individual components has been untangled</span>
<span class="token comment">// and moved into the mediator.</span>
<span class="token keyword">class</span> <span class="token class-name">AuthenticationDialog</span> <span class="token keyword">implements</span> <span class="token class-name">Mediator</span> is
    <span class="token keyword">private</span> field title<span class="token operator">:</span> string
    <span class="token keyword">private</span> field loginOrRegisterChkBx<span class="token operator">:</span> <span class="token class-name">Checkbox</span>
    <span class="token keyword">private</span> field loginUsername<span class="token punctuation">,</span> loginPassword<span class="token operator">:</span> <span class="token class-name">Textbox</span>
    <span class="token keyword">private</span> field registrationUsername<span class="token punctuation">,</span> registrationPassword<span class="token punctuation">,</span>
                  registrationEmail<span class="token operator">:</span> <span class="token class-name">Textbox</span>
    <span class="token keyword">private</span> field okBtn<span class="token punctuation">,</span> cancelBtn<span class="token operator">:</span> <span class="token class-name">Button</span>

    constructor <span class="token class-name">AuthenticationDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        <span class="token comment">// Create all component objects by passing the current</span>
        <span class="token comment">// mediator into their constructors to establish links.</span>

    <span class="token comment">// When something happens with a component, it notifies the</span>
    <span class="token comment">// mediator. Upon receiving a notification, the mediator may</span>
    <span class="token comment">// do something on its own or pass the request to another</span>
    <span class="token comment">// component.</span>
    method <span class="token function">notify</span><span class="token punctuation">(</span>sender<span class="token punctuation">,</span> event<span class="token punctuation">)</span> is
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sender <span class="token operator">==</span> loginOrRegisterChkBx and event <span class="token operator">==</span> <span class="token string">&quot;check&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>loginOrRegisterChkBx<span class="token punctuation">.</span>checked<span class="token punctuation">)</span>
                title <span class="token operator">=</span> <span class="token string">&quot;Log in&quot;</span>
                <span class="token comment">// 1. Show login form components.</span>
                <span class="token comment">// 2. Hide registration form components.</span>
            <span class="token keyword">else</span>
                title <span class="token operator">=</span> <span class="token string">&quot;Register&quot;</span>
                <span class="token comment">// 1. Show registration form components.</span>
                <span class="token comment">// 2. Hide login form components</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>sender <span class="token operator">==</span> okBtn <span class="token operator">&amp;&amp;</span> event <span class="token operator">==</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>loginOrRegister<span class="token punctuation">.</span>checked<span class="token punctuation">)</span>
                <span class="token comment">// Try to find a user using login credentials.</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>found<span class="token punctuation">)</span>
                    <span class="token comment">// Show an error message above the login</span>
                    <span class="token comment">// field.</span>
            <span class="token keyword">else</span>
                <span class="token comment">// 1. Create a user account using data from the</span>
                <span class="token comment">// registration fields.</span>
                <span class="token comment">// 2. Log that user in.</span>
                <span class="token comment">// ...</span>


<span class="token comment">// Components communicate with a mediator using the mediator</span>
<span class="token comment">// interface. Thanks to that, you can use the same components in</span>
<span class="token comment">// other contexts by linking them with different mediator</span>
<span class="token comment">// objects.</span>
<span class="token keyword">class</span> <span class="token class-name">Component</span> is
    field dialog<span class="token operator">:</span> <span class="token class-name">Mediator</span>

    constructor <span class="token class-name">Component</span><span class="token punctuation">(</span>dialog<span class="token punctuation">)</span> is
        <span class="token keyword">this</span><span class="token punctuation">.</span>dialog <span class="token operator">=</span> dialog

    method <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        dialog<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>

    method <span class="token function">keypress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        dialog<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;keypress&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// Concrete components don&#39;t talk to each other. They have only</span>
<span class="token comment">// one communication channel, which is sending notifications to</span>
<span class="token comment">// the mediator.</span>
<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> is
    <span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">Textbox</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> is
    <span class="token comment">// ...</span>

<span class="token keyword">class</span> <span class="token class-name">Checkbox</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> is
    method <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> is
        dialog<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;check&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的伪代码中，Mediator和Component互相包含 Mediator通过<code>notify()</code>方法被其他组件调用，并传递信息，从而执行规定的行为 而其他组件又包含在Mediator之中，可以被Mediator调用以完成各类功能响应</p>`,10),i=[o];function p(c,l){return s(),a("div",null,i)}const m=n(t,[["render",p],["__file","mediator.html.vue"]]),u=JSON.parse(`{"path":"/posts/SE/design-pattern/mediator.html","title":"mediator","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"mediator","tag":["design-pattern","面向对象"],"categories":["设计模式"],"mathjax":true,"description":"mediator 中介者模式简单来说就是在各个交互的类之间加上一个中间件，使得各个组件之间的交流通过中间件来控制，各个组件只能和中间件通信，对于每个组件来说其他组件都是未知的，这样使得组件之间实现了解耦，组件的代码得以在其他地方得到复用 比如我们现在要组成一个窗口，窗口内的按钮和label之间会相互影响，那么我们建立一个窗口类，这个窗口类可以接收所有按...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/SE/design-pattern/mediator.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"mediator"}],["meta",{"property":"og:description","content":"mediator 中介者模式简单来说就是在各个交互的类之间加上一个中间件，使得各个组件之间的交流通过中间件来控制，各个组件只能和中间件通信，对于每个组件来说其他组件都是未知的，这样使得组件之间实现了解耦，组件的代码得以在其他地方得到复用 比如我们现在要组成一个窗口，窗口内的按钮和label之间会相互影响，那么我们建立一个窗口类，这个窗口类可以接收所有按..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://refactoring.guru/images/patterns/diagrams/mediator/structure.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"mediator"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"design-pattern"}],["meta",{"property":"article:tag","content":"面向对象"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mediator\\",\\"image\\":[\\"https://refactoring.guru/images/patterns/diagrams/mediator/structure.png\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":3,"title":"mediator","slug":"mediator","link":"#mediator","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.42,"words":725},"filePathRelative":"posts/SE/design-pattern/mediator.md","localizedDate":"2021年1月1日","excerpt":"<h3>mediator</h3>\\n<p>中介者模式简单来说就是在各个交互的类之间加上一个中间件，使得各个组件之间的交流通过中间件来控制，各个组件只能和中间件通信，对于每个组件来说其他组件都是未知的，这样使得组件之间实现了解耦，组件的代码得以在其他地方得到复用</p>\\n<p>比如我们现在要组成一个窗口，窗口内的按钮和label之间会相互影响，那么我们建立一个窗口类，这个窗口类可以接收所有按钮和label的请求，并处理请求，寻找合适的其他对象进行请求和通信</p>\\n<p>下面来看一下来自refactoring.guru的类结构图：</p>\\n<figure><img src=\\"https://refactoring.guru/images/patterns/diagrams/mediator/structure.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}`);export{m as comp,u as data};
