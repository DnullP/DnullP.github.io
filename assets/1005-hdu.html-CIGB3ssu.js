import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as l,a as s,e as a}from"./app-DCTCPPGQ.js";const d={},t=s("p",null,"求一个递推公式得第n项，数据范围不能使用线性算法，所以采用矩阵快速幂的做法",-1),r=a(`<p>虽然是很久以前就会的算法，但是实际写起来还是踩了不少坑，此外在写对拍程序时遇到了c++输出的缓冲问题，以至于数据生成器一直无法生成数据，非常消耗人的心态</p><p>另外此题貌似可以通过找规律来解决，但是我并不想花时间去玩找规律的游戏</p><h3 id="本题踩的一些坑" tabindex="-1"><a class="header-anchor" href="#本题踩的一些坑"><span>本题踩的一些坑</span></a></h3><ul><li>重载矩阵乘法时，下标搞错</li><li>需要特殊判断n=1的情况</li></ul><h3 id="代码如下" tabindex="-1"><a class="header-anchor" href="#代码如下"><span>代码如下：</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;cstdio&gt;
#include &lt;iostream&gt;
#include &lt;map&gt;
#include &lt;cstring&gt;

using namespace std;

struct rec_2
{
    int a_11 = 0, a_12 = 0, a_21 = 0, a_22 = 0;

    rec_2 operator*(rec_2 b)
    {

        rec_2 c(0, 0, 0, 0);

        c.a_11 = (a_11 * b.a_11 + a_12 * b.a_21) % 7;
        c.a_12 = (a_11 * b.a_12 + a_12 * b.a_22) % 7;
        c.a_21 = (a_21 * b.a_11 + a_22 * b.a_21) % 7;
        c.a_22 = (a_21 * b.a_12 + a_22 * b.a_22) % 7;

        return c;
    }
    rec_2(int a, int b, int c, int d)
    {
        a_11 = a;
        a_21 = b;
        a_12 = c;
        a_22 = d;
    }
};

rec_2 qpow(rec_2 x, long long a)
{
    rec_2 base = x;
    rec_2 ans(1, 0, 0, 1);

    while (a)
    {
        if (a &amp; 1)
            ans = ans * base;
        base = base * base;
        a &gt;&gt;= 1;
    }
    return ans;
}

int main()
{
    /* FILE *stream1;
    freopen_s(&amp;stream1, &quot;data.in&quot;, &quot;r&quot;, stdin);
    freopen_s(&amp;stream1, &quot;a.out&quot;, &quot;w&quot;, stdout); */

    while (true)
    {
        int A, B;
        long long n;

        cin &gt;&gt; A &gt;&gt; B &gt;&gt; n;

        if (A == 0 &amp;&amp; B == 0 &amp;&amp; n == 0)
            break;

        if(n==1){
            cout&lt;&lt;1&lt;&lt;endl;
            continue;
        }
        if(n==0){
            continue;
        }
        rec_2 base(A, B, 1, 0);
        rec_2 f(1, 0, 1, 0);

        f = f * qpow(base, n - 2);

        cout &lt;&lt; f.a_11 % 7 &lt;&lt; endl;
    }

    //fclose(stdin);
    //fclose(stdout);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function c(v,u){return e(),i("div",null,[t,l(" more "),r])}const b=n(d,[["render",c],["__file","1005-hdu.html.vue"]]),p=JSON.parse(`{"path":"/posts/algorithm/oi/quiz/1005-hdu.html","title":"hdu1005","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"hdu1005","tag":["矩阵"],"categories":["OI练习"],"mathjax":true,"description":"求一个递推公式得第n项，数据范围不能使用线性算法，所以采用矩阵快速幂的做法 虽然是很久以前就会的算法，但是实际写起来还是踩了不少坑，此外在写对拍程序时遇到了c++输出的缓冲问题，以至于数据生成器一直无法生成数据，非常消耗人的心态 另外此题貌似可以通过找规律来解决，但是我并不想花时间去玩找规律的游戏 本题踩的一些坑 重载矩阵乘法时，下标搞错 需要特殊判断...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/algorithm/oi/quiz/1005-hdu.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"hdu1005"}],["meta",{"property":"og:description","content":"求一个递推公式得第n项，数据范围不能使用线性算法，所以采用矩阵快速幂的做法 虽然是很久以前就会的算法，但是实际写起来还是踩了不少坑，此外在写对拍程序时遇到了c++输出的缓冲问题，以至于数据生成器一直无法生成数据，非常消耗人的心态 另外此题貌似可以通过找规律来解决，但是我并不想花时间去玩找规律的游戏 本题踩的一些坑 重载矩阵乘法时，下标搞错 需要特殊判断..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T13:35:40.000Z"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"矩阵"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T13:35:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hdu1005\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T13:35:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":3,"title":"本题踩的一些坑","slug":"本题踩的一些坑","link":"#本题踩的一些坑","children":[]},{"level":3,"title":"代码如下：","slug":"代码如下","link":"#代码如下","children":[]}],"git":{"createdTime":1712936892000,"updatedTime":1713101740000,"contributors":[{"name":"DnullP","email":"dnull123p@gmail.com","commits":2}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"posts/algorithm/oi/quiz/1005-hdu.md","localizedDate":"2021年1月1日","excerpt":"<p>求一个递推公式得第n项，数据范围不能使用线性算法，所以采用矩阵快速幂的做法</p>\\n","autoDesc":true}`);export{b as comp,p as data};
