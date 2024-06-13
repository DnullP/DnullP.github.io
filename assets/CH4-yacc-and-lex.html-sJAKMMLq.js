import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as s,e as l,a as e,b as n}from"./app-DCTCPPGQ.js";const t={},c=l(`<h1 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备"><span>前置准备</span></a></h1><ul><li>Yacc: parser的生成器</li><li>Lex: scanner的生成器</li></ul><p>在Ubuntu环境下安装对应的<code>bsion</code>和<code>flex</code></p><h1 id="基本格式" tabindex="-1"><a class="header-anchor" href="#基本格式"><span>基本格式</span></a></h1><h2 id="flex" tabindex="-1"><a class="header-anchor" href="#flex"><span>Flex</span></a></h2><div class="language-lex line-numbers-mode" data-ext="lex" data-title="lex"><pre class="language-lex"><code>%{
#include &quot;y.tab.h&quot;
letter [a-zA-Z]
digit [0-9]
word {letter}({letter}|{digit})*
%}

%%
[0-9]+          { yylval = atoi(yytext); return T_NUM; }
[-/+*()\\n]      { return yytext[0]; }
[ \\t\\n]         ;
.               { yyerror(&quot;Unknown character&quot;); }
%%

int yywrap(void) { 
    return 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上<code>%%</code>将程序分为三个区域:</p><ul><li>第一个区域是声明, 包括了头文件的声明和正则定义</li><li>第二个区域是词法分析规则</li><li>第三个区域是辅助函数</li></ul><p>通过<code>%{</code>和<code>%}</code>括起来的部分会原封不动的复制到生成的<code>lex.yy.c</code>中, 一般用于包含头文件 正则定义使用一般通用的正则表达式语法, 但是也包括了一些扩展语法, 比较常用的有:</p><ul><li><code>r/s</code>: 当后面跟着的是<code>s</code>时, 才返回<code>r</code></li><li><code>{}</code>: 用花括号括起一个class, 可以表示一个正则表达式的名字</li><li><code>()</code>: 括号用于规定优先级</li><li><code>&quot;&quot;</code>: 表示字符串的匹配</li><li><code>&#39;&#39;</code>: 表示字符的匹配, 特殊字符可以用<code>\\</code>转义, 也可以用<code>&#39;</code>括起来</li></ul><p>在词法分析区的后面是对应的lexeme匹配后, 进行的动作</p><ul><li><code>yylval</code>代表这个token的属性参数, 是一个全局变量, 在parser调用<code>yylex()</code>返回token后压入栈中, 供parser使用</li><li><code>yytext</code>代表目前匹配到的字符串</li><li><code>yywarp()</code>是在读取完当前文件后, 是否继续读取下一个文件, 一般返回1表示结束</li></ul><h2 id="bsion" tabindex="-1"><a class="header-anchor" href="#bsion"><span>Bsion</span></a></h2><div class="language-yacc line-numbers-mode" data-ext="yacc" data-title="yacc"><pre class="language-yacc"><code>%{
#include &lt;stdio.h&gt;
void yyerror(const char* msg) {}
%}

%token T_NUM

%left &#39;+&#39; &#39;-&#39;
%left &#39;*&#39; &#39;/&#39;

%%

S   :   S E &#39;\\n&#39;        { printf(&quot;ans = %d\\n&quot;, $2); }
    |   /* empty */     { /* empty */ }
    ;

E   :   E &#39;+&#39; E         { $$ = $1 + $3; }
    |   E &#39;-&#39; E         { $$ = $1 - $3; }
    |   E &#39;*&#39; E         { $$ = $1 * $3; }
    |   E &#39;/&#39; E         { $$ = $1 / $3; }
    |   T_NUM           { $$ = $1; }
    |   &#39;(&#39; E &#39;)&#39;       { $$ = $2; }
    ;

%%

int main() {
    return yyparse();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yacc也通过<code>%%</code>划分为了三个区域:</p><ul><li>声明区域</li><li>规则区域</li><li>辅助函数区域</li></ul><p>之前的词法分析中用到的<code>yyerror()</code>定义在此处了, 同时还包括了头文件的声明</p>`,17),d=e("ul",null,[e("li",null,[n("%token: 声明一个语法单元, 词法翻译器中的返回值即为语法分析器中定义的token, 如果有"),e("code",null,"yylval"),n("的话, 会将"),e("code",null,"yylval"),n("加入语法分析的栈中")]),e("li",null,[e("p",{class:"katex-block"},[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"表示产生式左边的句型的属性变量"),e("mo",{separator:"true"},","),e("mi",{mathvariant:"normal"},"$"),e("mn",null,"1"),e("mtext",null,"表示产生式右边第一个语法单元的属性变量"),e("mo",{separator:"true"},","),e("mi",{mathvariant:"normal"},"$"),e("mn",null,"2"),e("mtext",null,"表示第二个"),e("mo",{separator:"true"},","),e("mtext",null,"以此类推"),e("mo",{separator:"true"},","),e("mtext",null,"这些属性变量就是"),e("mi",{mathvariant:"normal"},"‘"),e("mi",null,"y"),e("mi",null,"y"),e("mi",null,"l"),e("mi",null,"v"),e("mi",null,"a"),e("mi",null,"l"),e("mi",{mathvariant:"normal"},"‘"),e("mtext",null,"绑定的值")]),e("annotation",{encoding:"application/x-tex"}," 表示产生式左边的句型的属性变量, \\$1表示产生式右边第一个语法单元的属性变量, \\$2表示第二个, 以此类推, 这些属性变量就是`yylval`绑定的值 ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.9444em","vertical-align":"-0.1944em"}}),e("span",{class:"mord cjk_fallback"},"表示产生式左边的句型的属性变量"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"$1"),e("span",{class:"mord cjk_fallback"},"表示产生式右边第一个语法单元的属性变量"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},"$2"),e("span",{class:"mord cjk_fallback"},"表示第二个"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord cjk_fallback"},"以此类推"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord cjk_fallback"},"这些属性变量就是"),e("span",{class:"mord"},"‘"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"yy"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mord"},"‘"),e("span",{class:"mord cjk_fallback"},"绑定的值")])])])])])])],-1),r=l(`<p><code>%left</code>和<code>%right</code>用于解决二义性, 优先级高的放在前面, 优先级低的放在后面</p><p>left表示左结合, right表示右结合</p><p>通过向前读1符号, 可以解决一些二义性情况, 如果仍然无法判断, 则可以通过<code>%prec</code>来指定优先级</p><div class="language-yacc line-numbers-mode" data-ext="yacc" data-title="yacc"><pre class="language-yacc"><code>%left &#39;+&#39; &#39;-&#39;
%left &#39;*&#39; &#39;/&#39;
%left UMINUS

%%

E   :   E &#39;+&#39; E         { $$ = $1 + $3; }
    |   E &#39;-&#39; E         { $$ = $1 - $3; }
    |   E &#39;*&#39; E         { $$ = $1 * $3; }
    |   E &#39;/&#39; E         { $$ = $1 / $3; }
    |   &#39;-&#39; E %prec UMINUS { $$ = -$2; }
    |   T_NUM           { $$ = $1; }
    |   &#39;(&#39; E &#39;)&#39;       { $$ = $2; }
    ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里为<code>E -&gt; &#39;-&#39; E</code>这个产生式指定了优先级, 使得<code>-</code>的优先级比<code>+</code>和<code>-</code>高(靠后的优先级高)</p><p>如果不加入对负号的优先级设定, 则会产生以下的移入-归约冲突(其中一个例子):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Example: &#39;-&#39; E • &#39;+&#39; E
  Shift derivation
    E
    ↳ 8: &#39;-&#39; E
             ↳ 3: E • &#39;+&#39; E
  Reduce derivation
    E
    ↳ 3: E            &#39;+&#39; E
         ↳ 8: &#39;-&#39; E •
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[c,d,r];function m(u,v){return i(),s("div",null,o)}const y=a(t,[["render",m],["__file","CH4-yacc-and-lex.html.vue"]]),h=JSON.parse(`{"path":"/posts/CS/compiler/CH4-yacc-and-lex.html","title":"Yacc和Lex的基本使用","lang":"zh-CN","frontmatter":{"title":"Yacc和Lex的基本使用","tags":["compiler","词法分析","语法分析","语义分析","中间代码生成"],"categories":["compiler"],"math":true,"date":"2023-05-03T00:00:00.000Z","description":"前置准备 Yacc: parser的生成器 Lex: scanner的生成器 在Ubuntu环境下安装对应的bsion和flex 基本格式 Flex 如上%%将程序分为三个区域: 第一个区域是声明, 包括了头文件的声明和正则定义 第二个区域是词法分析规则 第三个区域是辅助函数 通过%{和%}括起来的部分会原封不动的复制到生成的lex.yy.c中, 一般...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/CS/compiler/CH4-yacc-and-lex.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"Yacc和Lex的基本使用"}],["meta",{"property":"og:description","content":"前置准备 Yacc: parser的生成器 Lex: scanner的生成器 在Ubuntu环境下安装对应的bsion和flex 基本格式 Flex 如上%%将程序分为三个区域: 第一个区域是声明, 包括了头文件的声明和正则定义 第二个区域是词法分析规则 第三个区域是辅助函数 通过%{和%}括起来的部分会原封不动的复制到生成的lex.yy.c中, 一般..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"compiler"}],["meta",{"property":"article:tag","content":"词法分析"}],["meta",{"property":"article:tag","content":"语法分析"}],["meta",{"property":"article:tag","content":"语义分析"}],["meta",{"property":"article:tag","content":"中间代码生成"}],["meta",{"property":"article:published_time","content":"2023-05-03T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Yacc和Lex的基本使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-03T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Flex","slug":"flex","link":"#flex","children":[]},{"level":2,"title":"Bsion","slug":"bsion","link":"#bsion","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.76,"words":828},"filePathRelative":"posts/CS/compiler/CH4-yacc-and-lex.md","localizedDate":"2023年5月3日","excerpt":"\\n<ul>\\n<li>Yacc: parser的生成器</li>\\n<li>Lex: scanner的生成器</li>\\n</ul>\\n<p>在Ubuntu环境下安装对应的<code>bsion</code>和<code>flex</code></p>\\n<h1>基本格式</h1>\\n<h2>Flex</h2>\\n<div class=\\"language-lex\\" data-ext=\\"lex\\" data-title=\\"lex\\"><pre class=\\"language-lex\\"><code>%{\\n#include \\"y.tab.h\\"\\nletter [a-zA-Z]\\ndigit [0-9]\\nword {letter}({letter}|{digit})*\\n%}\\n\\n%%\\n[0-9]+          { yylval = atoi(yytext); return T_NUM; }\\n[-/+*()\\\\n]      { return yytext[0]; }\\n[ \\\\t\\\\n]         ;\\n.               { yyerror(\\"Unknown character\\"); }\\n%%\\n\\nint yywrap(void) { \\n    return 1;\\n}\\n</code></pre></div>","autoDesc":true}`);export{y as comp,h as data};
