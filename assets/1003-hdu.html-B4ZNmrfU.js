import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as l,f as s,a as n,e as t}from"./app-DCTCPPGQ.js";const d={},a=n("p",null,"照理说应当是一道相当简单入门的线性题，但是实际做的时候还是踩了不少坑",-1),u=n("h3",{id:"几种没有考虑到的特殊情况",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#几种没有考虑到的特殊情况"},[n("span",null,"几种没有考虑到的特殊情况：")])],-1),r=n("ul",null,[n("li",null,"数列全为负数的情况下，应当找到最小负数"),n("li",null,"线性过程中的t_sum应该在首项赋值")],-1),c=t(`<p><strong>代码如下</strong>：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;cstdio&gt;
#include &lt;iostream&gt;
#include &lt;algorithm&gt;
#include &lt;vector&gt;
#include &lt;cstring&gt;
#include &lt;string&gt;
#include &lt;string.h&gt;
#include &lt;ctime&gt;
#include &lt;cmath&gt;
#include &lt;stdlib.h&gt;
#include &lt;iomanip&gt;

using namespace std;

struct ANS_
{
    int begin = 0;
    int end = 0;
    int sum = 0;
};

ANS_ caculate(int seq[], int l)
{
    ANS_ ans;

    int t_sum = seq[0];
    ans.sum = seq[0];
    int last = 0;
    for (int i = 0; i &lt; l; i++)
    {
        if (last != i)
            t_sum += seq[i];

        //cout &lt;&lt; t_sum &lt;&lt; endl;

        if (t_sum &gt;= 0 &amp;&amp; t_sum &gt; ans.sum)
        {
            ans.sum = t_sum;
            ans.end = i;
            ans.begin = last;
        }
        else if (t_sum &lt; 0)
        {
            if (t_sum &gt; ans.sum)
            {
                ans.sum = t_sum;
                ans.end = i;
                ans.begin = last;
            }

            t_sum = seq[i + 1];
            last = i + 1;
        }
    }
    return ans;
}

int main()
{
    //FILE *stream1;
    //freopen_s(&amp;stream1, &quot;data.in&quot;, &quot;r&quot;, stdin);
    //freopen_s(&amp;stream1, &quot;a.out&quot;, &quot;w&quot;, stdout);

    int n;
    int seq[100005];

    cin &gt;&gt; n;

    for (int j = 0; j &lt; n; j++)
    {
        int l;
        cin &gt;&gt; l;

        for (int i = 0; i &lt; l; i++)
        {
            cin &gt;&gt; seq[i];
        }
        ANS_ ans = caculate(seq, l);
        cout &lt;&lt; &quot;Case &quot; &lt;&lt; j + 1 &lt;&lt; &#39;:&#39; &lt;&lt; endl
             &lt;&lt; ans.sum &lt;&lt; &#39; &#39; &lt;&lt; ans.begin + 1 &lt;&lt; &#39; &#39; &lt;&lt; ans.end + 1 &lt;&lt; endl;

        if (j != n - 1)
            cout &lt;&lt; endl;
        // &lt;&lt; endl;
    }
    fclose(stdin);
    fclose(stdout);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(m,o){return e(),l("div",null,[a,u,r,s(" more "),c])}const g=i(d,[["render",v],["__file","1003-hdu.html.vue"]]),h=JSON.parse(`{"path":"/posts/algorithm/oi/quiz/1003-hdu.html","title":"hdu1003","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"hdu1003","tag":["最大字串和","DP"],"categories":["OI练习"],"mathjax":true,"description":"照理说应当是一道相当简单入门的线性题，但是实际做的时候还是踩了不少坑 几种没有考虑到的特殊情况： 数列全为负数的情况下，应当找到最小负数 线性过程中的t_sum应该在首项赋值 代码如下： ","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/algorithm/oi/quiz/1003-hdu.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"hdu1003"}],["meta",{"property":"og:description","content":"照理说应当是一道相当简单入门的线性题，但是实际做的时候还是踩了不少坑 几种没有考虑到的特殊情况： 数列全为负数的情况下，应当找到最小负数 线性过程中的t_sum应该在首项赋值 代码如下： "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T13:35:40.000Z"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"最大字串和"}],["meta",{"property":"article:tag","content":"DP"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T13:35:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hdu1003\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T13:35:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":3,"title":"几种没有考虑到的特殊情况：","slug":"几种没有考虑到的特殊情况","link":"#几种没有考虑到的特殊情况","children":[]}],"git":{"createdTime":1712936892000,"updatedTime":1713101740000,"contributors":[{"name":"DnullP","email":"dnull123p@gmail.com","commits":2}]},"readingTime":{"minutes":0.92,"words":275},"filePathRelative":"posts/algorithm/oi/quiz/1003-hdu.md","localizedDate":"2021年1月1日","excerpt":"<p>照理说应当是一道相当简单入门的线性题，但是实际做的时候还是踩了不少坑</p>\\n<h3>几种没有考虑到的特殊情况：</h3>\\n<ul>\\n<li>数列全为负数的情况下，应当找到最小负数</li>\\n<li>线性过程中的t_sum应该在首项赋值</li>\\n</ul>\\n","autoDesc":true}`);export{g as comp,h as data};
