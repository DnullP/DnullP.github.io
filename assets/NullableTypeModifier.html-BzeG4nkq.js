import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c,f as r,a as n,d as e,w as t,b as a,e as i}from"./app-DCTCPPGQ.js";const u={},d=n("p",null,[a("在我有限的代码经验里还没有见识过"),n("strong",null,"可空类型修饰符"),n("br"),a(" 但是直觉告诉我：它一定很重要")],-1),m=n("h2",{id:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:""},[n("span",null,"？")])],-1),g=n("li",null,[n("strong",null,"用法一")],-1),k=i(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> a<span class="token punctuation">;</span><span class="token comment">//若a为空，则返回NULL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>用法二</strong></li></ul><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>a<span class="token operator">??</span>b<span class="token comment">//若a为空则返回b，优先返回a</span>

a<span class="token operator">??</span>b<span class="token operator">??</span>c <span class="token operator">=</span> a<span class="token operator">??</span><span class="token punctuation">(</span>b<span class="token operator">??</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>用法三</strong></li></ul><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name">Point</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Point</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
   
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p<span class="token punctuation">?.</span>X<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//若p为空则返回NULL</span>
                                                  <span class="token comment">//不进行后续函数调用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function h(b,v){const s=p("Badge");return l(),c("div",null,[d,r(" more "),m,n("ul",null,[n("li",null,[e(s,{type:"danger"},{default:t(()=>[a("中")]),_:1}),e(s,{type:"danger"},{default:t(()=>[a("中")]),_:1}),a("，可空类型修饰符就是一个问号")]),g]),k])}const f=o(u,[["render",h],["__file","NullableTypeModifier.html.vue"]]),N=JSON.parse(`{"path":"/posts/program-language/Csharp/NullableTypeModifier.html","title":"C#中的可空类型修饰符","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"C#中的可空类型修饰符","tag":["语法","特性","c#"],"categories":["C#学习记录"],"mathjax":true,"description":"在我有限的代码经验里还没有见识过可空类型修饰符 但是直觉告诉我：它一定很重要 ？ ，可空类型修饰符就是一个问号 用法一 用法二 用法三 ","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/program-language/Csharp/NullableTypeModifier.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"C#中的可空类型修饰符"}],["meta",{"property":"og:description","content":"在我有限的代码经验里还没有见识过可空类型修饰符 但是直觉告诉我：它一定很重要 ？ ，可空类型修饰符就是一个问号 用法一 用法二 用法三 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"语法"}],["meta",{"property":"article:tag","content":"特性"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C#中的可空类型修饰符\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":2,"title":"？","slug":"","link":"#","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.52,"words":156},"filePathRelative":"posts/program-language/Csharp/NullableTypeModifier.md","localizedDate":"2021年1月1日","excerpt":"<p>在我有限的代码经验里还没有见识过<strong>可空类型修饰符</strong><br>\\n但是直觉告诉我：它一定很重要</p>\\n","autoDesc":true}`);export{f as comp,N as data};
