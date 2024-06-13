import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as a,f as e,a as t,b as n,e as i}from"./app-DCTCPPGQ.js";const m={},r=t("p",null,"训练时遇到的题目，思路完全想错了，看过别人思路后再打一遍",-1),c=t("h1",{id:"题目大意",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#题目大意"},[t("span",null,"题目大意：")])],-1),d=t("ul",null,[t("li",null,[t("p",null,[t("strong",null,"有L件衣服，每件衣服完全相同")])]),t("li",null,[t("p",null,[t("strong",null,"每件衣服需要通过水洗和烘干两个步骤")])]),t("li",null,[t("p",null,[t("strong",null,"一共有N台洗衣机和M台烘干机")])]),t("li",null,[t("p",null,[t("strong",null,[n("每台洗衣机清洗一件衣服的时间为"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("msub",null,[t("mi",{mathvariant:"bold"},"W"),t("mi",null,"i")])]),t("annotation",{encoding:"application/x-tex"},"\\mathbf W_i")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.8361em","vertical-align":"-0.15em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathbf",style:{"margin-right":"0.01597em"}},"W"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.3117em"}},[t("span",{style:{top:"-2.55em","margin-left":"-0.016em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mathnormal mtight"},"i")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])])])])])])])]),t("li",null,[t("p",null,[t("strong",null,[n("每台烘干机烘干一件衣服的时间为"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("msub",null,[t("mi",{mathvariant:"bold"},"D"),t("mi",null,"i")])]),t("annotation",{encoding:"application/x-tex"},"\\mathbf D_i")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.8361em","vertical-align":"-0.15em"}}),t("span",{class:"mord"},[t("span",{class:"mord mathbf"},"D"),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.3117em"}},[t("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mathnormal mtight"},"i")])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.15em"}},[t("span")])])])])])])])])])])]),t("li",null,[t("p",null,[t("strong",null,"先水洗再烘干")])]),t("li",null,[t("p",null,[t("strong",null,"一台机器同一时间只能处理一件衣服")])]),t("li",null,[t("p",null,[t("strong",null,"问最少需要多长时间才能洗完所有衣服")])])],-1),o=t("h1",{id:"解题思路",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#解题思路"},[t("span",null,"解题思路：")])],-1),p=t("ul",null,[t("li",null,[t("p",null,[n("（一）"),t("br"),n(" 在第一步水洗中，优先将衣服排在花费时间最少的洗衣机"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"j")]),t("annotation",{encoding:"application/x-tex"},"j")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j")])])]),n("上"),t("br"),n(" 花费时间第二小的洗衣机为第"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"k")]),t("annotation",{encoding:"application/x-tex"},"k")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6944em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),n("台洗衣机"),t("br"),n(" 当"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"j")]),t("annotation",{encoding:"application/x-tex"},"j")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j")])])]),n("号洗衣机总时间大于"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"k")]),t("annotation",{encoding:"application/x-tex"},"k")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6944em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),n("号洗衣机时，将下一件衣服排到"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"j")]),t("annotation",{encoding:"application/x-tex"},"j")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j")])])]),n("号洗衣机上")]),t("p",null,"由此可以得到用时最少的情况下，如何安排每台洗衣机衣服的数量")]),t("li",null,[t("p",null,[n("（二）"),t("br"),n(" 通过第一步，知道了如何安排衣服的数量之后，可以得知每件衣服水洗完毕的时间点, 然后用相似的原理，将每件衣服放入烘干机")]),t("p",null,"不同的是，水洗完时间点最晚的衣服放入时间最短的烘干机，这样使得最后洗完的衣服花的时间最少")])],-1),u=i(`<h1 id="ac代码" tabindex="-1"><a class="header-anchor" href="#ac代码"><span>AC代码：</span></a></h1><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include&lt;iostream&gt;
#include&lt;cstdio&gt;
#include&lt;queue&gt;
#include&lt;utility&gt;
#define p pair&lt;long long,long long&gt;

using namespace std;

long long times[1000005];//记录每件衣服洗完的时间点
int T,T_1;
int L , N , M;

int main() {
	
	
	scanf(&quot;%d&quot;, &amp;T);
	T_1 = T;

	while (T--) {
		priority_queue&lt;p, vector&lt;p&gt;, greater&lt;p&gt;&gt;w,d;//优先队列维护最小时间的
		scanf(&quot;%d%d%d&quot;, &amp;L,&amp;N,&amp;M);                  //洗衣机

		long long t = 0;
		for (long long i = 1; i &lt;= N; i++) {
			scanf(&quot;%lld&quot;, &amp;t);
			w.push(p(t, t));
		}
		for (long long i = 1; i &lt;= M; i++) {
			scanf(&quot;%lld&quot;, &amp;t);
			d.push(p(t, t));
		}
		for (long long i = 1; i &lt;= L; i++) {
			p temp = w.top();

			w.pop();
			times[i] = temp.first;
			
			temp.first += temp.second;//将衣服加入总耗时最短的洗衣机中
                                      //从而增加该洗衣机的总耗时

			w.push(temp);
		}
		long long ans = 0;
		for (long long i = L; i &gt;= 1; i--) {//这个地方从最晚洗完的衣服开始

			p temp = d.top();
			d.pop();

			ans = max(ans, times[i] + temp.first);

			temp.first += temp.second;
			
			d.push(temp);
		}
		printf(&quot;Case #%d: %lld\\n&quot;,(T_1-T),ans);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(v,g){return l(),a("div",null,[r,e(" more "),c,d,o,p,u])}const w=s(m,[["render",h],["__file","ccpc2016-B.html.vue"]]),y=JSON.parse(`{"path":"/posts/algorithm/oi/quiz/ccpc2016-B.html","title":"CCPC2016.B","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"CCPC2016.B","tag":["优先队列","贪心"],"categories":["OI练习"],"mathjax":true,"description":"训练时遇到的题目，思路完全想错了，看过别人思路后再打一遍 题目大意： 有L件衣服，每件衣服完全相同 每件衣服需要通过水洗和烘干两个步骤 一共有N台洗衣机和M台烘干机 每台洗衣机清洗一件衣服的时间为Wi​ 每台烘干机烘干一件衣服的时间为Di​ 先水洗再烘干 一台机器同一时间只能处理一件衣服 问最少需要多长时间才能洗完所有衣服 解题思路： （一） 在第一步...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/algorithm/oi/quiz/ccpc2016-B.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"CCPC2016.B"}],["meta",{"property":"og:description","content":"训练时遇到的题目，思路完全想错了，看过别人思路后再打一遍 题目大意： 有L件衣服，每件衣服完全相同 每件衣服需要通过水洗和烘干两个步骤 一共有N台洗衣机和M台烘干机 每台洗衣机清洗一件衣服的时间为Wi​ 每台烘干机烘干一件衣服的时间为Di​ 先水洗再烘干 一台机器同一时间只能处理一件衣服 问最少需要多长时间才能洗完所有衣服 解题思路： （一） 在第一步..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T13:35:40.000Z"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"优先队列"}],["meta",{"property":"article:tag","content":"贪心"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T13:35:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CCPC2016.B\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T13:35:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1712936892000,"updatedTime":1713101740000,"contributors":[{"name":"DnullP","email":"dnull123p@gmail.com","commits":2}]},"readingTime":{"minutes":1.96,"words":588},"filePathRelative":"posts/algorithm/oi/quiz/ccpc2016-B.md","localizedDate":"2021年1月1日","excerpt":"<p>训练时遇到的题目，思路完全想错了，看过别人思路后再打一遍</p>\\n","autoDesc":true}`);export{w as comp,y as data};
