import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,f as t,a as n,e as p}from"./app-DCTCPPGQ.js";const o={},l=n("h1",{id:"leetcode——2-两数相加",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#leetcode——2-两数相加"},[n("span",null,"LeetCode——2.两数相加")])],-1),c=n("p",null,"评注：类似高精度加法的一道题，通过链表结构实现",-1),i=p(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListNode</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> val<span class="token punctuation">;</span>
            <span class="token keyword">public</span> <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
            <span class="token keyword">public</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> val <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">ListNode</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token return-type class-name">ListNode</span> <span class="token function">AddTwoNumbers</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getLength</span><span class="token punctuation">(</span>l2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token function">getLength</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">ref</span> l1<span class="token punctuation">,</span><span class="token keyword">ref</span> l2<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token class-name">ListNode</span> orgin <span class="token operator">=</span> l1<span class="token punctuation">;</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> l2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    l1<span class="token punctuation">.</span>val <span class="token operator">+=</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> <span class="token number">10</span><span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        l1<span class="token punctuation">.</span>val <span class="token operator">-=</span> <span class="token number">10</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                        <span class="token punctuation">{</span>
                            l1<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token operator">++</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">else</span>
                        <span class="token punctuation">{</span>
                            l1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                    l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> <span class="token number">10</span><span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        l1<span class="token punctuation">.</span>val <span class="token operator">-=</span> <span class="token number">10</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                        <span class="token punctuation">{</span>
                            l1<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token operator">++</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">else</span>
                        <span class="token punctuation">{</span>
                            l1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> orgin<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> L<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">int</span></span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

                <span class="token keyword">while</span> <span class="token punctuation">(</span>L <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    len<span class="token operator">++</span><span class="token punctuation">;</span>
                    L <span class="token operator">=</span> L<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> len<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">ref</span> <span class="token class-name">ListNode</span> L1<span class="token punctuation">,</span><span class="token keyword">ref</span>  <span class="token class-name">ListNode</span> L2<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> L2<span class="token punctuation">;</span>
                L2 <span class="token operator">=</span> L1<span class="token punctuation">;</span>
                L1 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function u(r,d){return a(),e("div",null,[l,c,t(" more "),i])}const m=s(o,[["render",u],["__file","2.html.vue"]]),b=JSON.parse(`{"path":"/posts/algorithm/Leetcode/2.html","title":"LeetCode——c#——2","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"LeetCode——c#——2","tag":["语法","特性","c#","Leetcode"],"categories":["LeetCode练习"],"mathjax":true,"description":"LeetCode——2.两数相加 评注：类似高精度加法的一道题，通过链表结构实现 ","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/algorithm/Leetcode/2.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"LeetCode——c#——2"}],["meta",{"property":"og:description","content":"LeetCode——2.两数相加 评注：类似高精度加法的一道题，通过链表结构实现 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"语法"}],["meta",{"property":"article:tag","content":"特性"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:tag","content":"Leetcode"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LeetCode——c#——2\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.58,"words":174},"filePathRelative":"posts/algorithm/Leetcode/2.md","localizedDate":"2021年1月1日","excerpt":"\\n<p>评注：类似高精度加法的一道题，通过链表结构实现</p>\\n","autoDesc":true}`);export{m as comp,b as data};
