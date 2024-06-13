import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as l,c as u,a as n,d as t,w as p,b as a,e}from"./app-DCTCPPGQ.js";const i={},r=n("h1",{id:"多维数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多维数组"},[n("span",null,"多维数组")])],-1),k=e(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token punctuation">]</span></span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//此时的a的行列在定义时就决定了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="交错数组" tabindex="-1"><a class="header-anchor" href="#交错数组"><span>交错数组</span></a></h1>`,2),d=e(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//定义数组的数组</span>

a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//每个数组可以不同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(h,b){const s=c("Badge");return l(),u("div",null,[r,n("p",null,[t(s,{type:"danger"},{default:p(()=>[a("的多维数组不同于C")]),_:1}),a("C++")]),n("ul",null,[n("li",null,[t(s,{type:"danger"},{default:p(()=>[a("的多维数组可以看作一个矩阵")]),_:1}),a("阵，是一个数集")])]),k,n("ul",null,[n("li",null,[t(s,{type:"danger"},{default:p(()=>[a("的多维数组可以参考C")]),_:1}),a("C++的多维数组，是一种数组的数组")])]),d])}const y=o(i,[["render",m],["__file","Array.html.vue"]]),_=JSON.parse(`{"path":"/posts/program-language/Csharp/Array.html","title":"c#中的数组","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"c#中的数组","tag":["c#","数组"],"categories":["C#学习记录"],"mathjax":true,"description":"多维数组 C++ 阵，是一个数集 交错数组 C++的多维数组，是一种数组的数组 ","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/program-language/Csharp/Array.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"c#中的数组"}],["meta",{"property":"og:description","content":"多维数组 C++ 阵，是一个数集 交错数组 C++的多维数组，是一种数组的数组 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:tag","content":"数组"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c#中的数组\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.5,"words":149},"filePathRelative":"posts/program-language/Csharp/Array.md","localizedDate":"2021年1月1日","excerpt":"\\n<p>C++</p>\\n<ul>\\n<li>阵，是一个数集</li>\\n</ul>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">]</span></span> a <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                <span class=\\"token punctuation\\">{</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                <span class=\\"token punctuation\\">{</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//此时的a的行列在定义时就决定了</span>\\n</code></pre></div>","autoDesc":true}`);export{y as comp,_ as data};
