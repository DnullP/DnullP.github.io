import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,f as l,a as t,b as a,e as i}from"./app-DCTCPPGQ.js";const p={},r=t("p",null,[a("久违的做一篇题解，心中甚是悲伤，已经要开始纠结于这种简单题了吗"),t("br"),a(" 看来还需要多加努力")],-1),o=t("figure",null,[t("img",{src:"https://s3.bmp.ovh/imgs/2021/12/f9a9dcaeefc8326c.png",alt:"题目",tabindex:"0",loading:"lazy"}),t("figcaption",null,"题目")],-1),c=t("h2",{id:"思路",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#思路"},[t("span",null,"思路：")])],-1),m=t("p",null,[a("对于这个序列，我们可以画出它的函数图像，假设其中离散的点是连续的，然后作出目标函数"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"y"),t("mo",null,"="),t("mi",null,"p")]),t("annotation",{encoding:"application/x-tex"},"y=p")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),t("span",{class:"mord mathnormal"},"p")])])])],-1),h=i(`<ul><li>每个在目标点之下的极小值点，可以使总非零段数量加一</li><li>每个在目标点之下的极大值点，可以使总非零段数量减一</li></ul><p>换句话说，当目标函数没过极小值点时，函数被分成两段，非零段数量增加</p><p>目标函数没过极大值点时，有一段函数消失，非零段减少</p><p>所以我们用差分序列的方式（具体参看树状数组一节），在极小值处加一，在极大值处减一，记录差分数列前缀和最大值，得到答案</p><p>还有种思考方式：</p><p>每个极小值点后面必定有一个极大值点或者序列边界，所以我们可以把目标函数看作贯穿了一个个极大极小值得区间，而我们的目的是求这些区间重叠最多的部分（有点抽象，不便叙述）</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码：</span></a></h2><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>未保存 有空补全
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8);function d(g,u){return s(),n("div",null,[r,l(" more -"),o,c,m,h])}const f=e(p,[["render",d],["__file","csp20210903.html.vue"]]),x=JSON.parse(`{"path":"/posts/algorithm/oi/quiz/csp20210903.html","title":"CSP_20210902","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"CSP_20210902","tag":["线性","差分"],"categories":["OI练习"],"mathjax":true,"description":"久违的做一篇题解，心中甚是悲伤，已经要开始纠结于这种简单题了吗 看来还需要多加努力 题目题目 思路： 对于这个序列，我们可以画出它的函数图像，假设其中离散的点是连续的，然后作出目标函数y=p 每个在目标点之下的极小值点，可以使总非零段数量加一 每个在目标点之下的极大值点，可以使总非零段数量减一 换句话说，当目标函数没过极小值点时，函数被分成两段，非零段...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/algorithm/oi/quiz/csp20210903.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"CSP_20210902"}],["meta",{"property":"og:description","content":"久违的做一篇题解，心中甚是悲伤，已经要开始纠结于这种简单题了吗 看来还需要多加努力 题目题目 思路： 对于这个序列，我们可以画出它的函数图像，假设其中离散的点是连续的，然后作出目标函数y=p 每个在目标点之下的极小值点，可以使总非零段数量加一 每个在目标点之下的极大值点，可以使总非零段数量减一 换句话说，当目标函数没过极小值点时，函数被分成两段，非零段..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s3.bmp.ovh/imgs/2021/12/f9a9dcaeefc8326c.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T13:35:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"CSP_20210902"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"线性"}],["meta",{"property":"article:tag","content":"差分"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T13:35:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSP_20210902\\",\\"image\\":[\\"https://s3.bmp.ovh/imgs/2021/12/f9a9dcaeefc8326c.png\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T13:35:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":2,"title":"思路：","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"代码：","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1712936892000,"updatedTime":1713101740000,"contributors":[{"name":"DnullP","email":"dnull123p@gmail.com","commits":2}]},"readingTime":{"minutes":1.16,"words":349},"filePathRelative":"posts/algorithm/oi/quiz/csp20210903.md","localizedDate":"2021年1月1日","excerpt":"<p>久违的做一篇题解，心中甚是悲伤，已经要开始纠结于这种简单题了吗<br>\\n看来还需要多加努力</p>\\n<!-- more --->\\n<figure><img src=\\"https://s3.bmp.ovh/imgs/2021/12/f9a9dcaeefc8326c.png\\" alt=\\"题目\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>题目</figcaption></figure>\\n<h2>思路：</h2>\\n<p>对于这个序列，我们可以画出它的函数图像，假设其中离散的点是连续的，然后作出目标函数<span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>y</mi><mo>=</mo><mi>p</mi></mrow><annotation encoding=\\"application/x-tex\\">y=p</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">p</span></span></span></span></p>","autoDesc":true}`);export{f as comp,x as data};
