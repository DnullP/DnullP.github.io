import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as t,e as r}from"./app-DCTCPPGQ.js";const p={},a=r('<h2 id="关键词记录解释" tabindex="-1"><a class="header-anchor" href="#关键词记录解释"><span>关键词记录解释</span></a></h2><h3 id="bottom-up-parse-top-down-parse" tabindex="-1"><a class="header-anchor" href="#bottom-up-parse-top-down-parse"><span>Bottom-up-parse, Top-down-parse</span></a></h3><ul><li><p>Bottom-up-parse 自底向上的解析, 从最小的语法单元开始解析, 直到解析到最大的语法单元, 使用右线性文法的语言适合使用Bottom-up-parse</p></li><li><p>Top-down-parse 自顶向下的解析, 从最大的语法单元开始解析, 直到解析到最小的语法单元, 使用左线性文法的语言适合使用Top-down-parse, 需要避免左递归</p></li></ul><h3 id="error-type" tabindex="-1"><a class="header-anchor" href="#error-type"><span>Error type</span></a></h3><ul><li>Lexical error 词法错误, 例如<code>int a = 10;</code>中的<code>int</code>写成了<code>intt</code></li><li>Syntactic error 语法错误, 例如<code>case</code>缺少对应的<code>switch</code>, <code>else</code>缺少对应的<code>if</code></li><li>Semantic error 语义错误, 例如需要返回<code>int</code>类型的函数返回了<code>string</code>类型的值, 并且没有支持的隐式转换(implicit conversion)</li><li>Logical error 逻辑错误, 例如<code>a = a + 1</code>写成了<code>a = a - 1</code>或者<code>a == 10</code>写成了<code>a = 10</code>, 这些错误并不会导致程序无法运行, 但是会使得程序偏离预期的结果</li></ul><h3 id="viable-prefix-property" tabindex="-1"><a class="header-anchor" href="#viable-prefix-property"><span>viable-prefix property</span></a></h3><p>可行前缀性, 我们的Lexical analyzer产生了一传的token stream给parser, parser可以接收流并进行解析, 在遇到错误时直接处理, 而不用等到所有的Token都解析完毕 也就是说我们可以根据语言的前缀来判定解析的可行性, 这样的流式处理也能很好的利用计算资源</p><p>但是只有语法解析(Syntactic analysis)可以利用可行前缀性, 语义解析则往往需要向后解析许多后才能确定错误</p><h3 id="语法解析需要提供的" tabindex="-1"><a class="header-anchor" href="#语法解析需要提供的"><span>语法解析需要提供的</span></a></h3><ul><li><p>report the error presence 报告错误的存在, 一般定位到产生错误的行和列</p></li><li><p>recover from the error 从错误中恢复, 并继续解析, 以便发现后续的错误</p></li><li><p>尽量优化程序解析的效率</p></li></ul><h3 id="如何从错误中恢复" tabindex="-1"><a class="header-anchor" href="#如何从错误中恢复"><span>如何从错误中恢复</span></a></h3><ul><li><p>panic mode recovery 恐慌模式恢复, 当遇到错误时, 丢弃当前的token, 直到遇到一个同步符号, 然后继续解析, 例如<code>int a = 10;</code>中的<code>int</code>写成了<code>intt</code>, 那么我们会丢弃<code>intt</code>直到遇到<code>;</code>为止, 然后继续解析</p></li><li><p>phrase-level recovery 编译器会尝试修复一些简单的错误, 比如缺少<code>;</code>之类的, 会自动补上这些符号, 然后继续解析</p></li><li><p>Error productions 编译器的设计人员在编译器中加入了一些常见错误语法的产生式, 并执行相应的错误反馈, 比如在python中输入了<code>;</code>在statement的结尾, 就会告诉你<code>python的结尾不需要;</code>, 这样解析并不会陷入错误, 然后继续解析</p></li><li><p>Global correction 编译器尝试寻找一个最接近源代码的, 可以正确解析的代码, 尽管这样的代码并不是程序员想要的, 但是可以提供一个修改代码的评估</p></li></ul>',12),i=[a];function c(n,l){return o(),t("div",null,i)}const h=e(p,[["render",c],["__file","CH4-note.html.vue"]]),m=JSON.parse(`{"path":"/posts/CS/compiler/CH4-note.html","title":"编译原理-语法解析","lang":"zh-CN","frontmatter":{"title":"编译原理-语法解析","tags":["compiler","词法分析","语法分析","语义分析","中间代码生成"],"categories":["compiler"],"math":true,"date":"2023-04-27T00:00:00.000Z","description":"关键词记录解释 Bottom-up-parse, Top-down-parse Bottom-up-parse 自底向上的解析, 从最小的语法单元开始解析, 直到解析到最大的语法单元, 使用右线性文法的语言适合使用Bottom-up-parse Top-down-parse 自顶向下的解析, 从最大的语法单元开始解析, 直到解析到最小的语法单元, 使用...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/CS/compiler/CH4-note.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"编译原理-语法解析"}],["meta",{"property":"og:description","content":"关键词记录解释 Bottom-up-parse, Top-down-parse Bottom-up-parse 自底向上的解析, 从最小的语法单元开始解析, 直到解析到最大的语法单元, 使用右线性文法的语言适合使用Bottom-up-parse Top-down-parse 自顶向下的解析, 从最大的语法单元开始解析, 直到解析到最小的语法单元, 使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"compiler"}],["meta",{"property":"article:tag","content":"词法分析"}],["meta",{"property":"article:tag","content":"语法分析"}],["meta",{"property":"article:tag","content":"语义分析"}],["meta",{"property":"article:tag","content":"中间代码生成"}],["meta",{"property":"article:published_time","content":"2023-04-27T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编译原理-语法解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-27T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":2,"title":"关键词记录解释","slug":"关键词记录解释","link":"#关键词记录解释","children":[{"level":3,"title":"Bottom-up-parse, Top-down-parse","slug":"bottom-up-parse-top-down-parse","link":"#bottom-up-parse-top-down-parse","children":[]},{"level":3,"title":"Error type","slug":"error-type","link":"#error-type","children":[]},{"level":3,"title":"viable-prefix property","slug":"viable-prefix-property","link":"#viable-prefix-property","children":[]},{"level":3,"title":"语法解析需要提供的","slug":"语法解析需要提供的","link":"#语法解析需要提供的","children":[]},{"level":3,"title":"如何从错误中恢复","slug":"如何从错误中恢复","link":"#如何从错误中恢复","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.54,"words":761},"filePathRelative":"posts/CS/compiler/CH4-note.md","localizedDate":"2023年4月27日","excerpt":"<h2>关键词记录解释</h2>\\n<h3>Bottom-up-parse, Top-down-parse</h3>\\n<ul>\\n<li>\\n<p>Bottom-up-parse\\n自底向上的解析, 从最小的语法单元开始解析, 直到解析到最大的语法单元, 使用右线性文法的语言适合使用Bottom-up-parse</p>\\n</li>\\n<li>\\n<p>Top-down-parse\\n自顶向下的解析, 从最大的语法单元开始解析, 直到解析到最小的语法单元, 使用左线性文法的语言适合使用Top-down-parse, 需要避免左递归</p>\\n</li>\\n</ul>\\n<h3>Error type</h3>\\n<ul>\\n<li>Lexical error\\n词法错误, 例如<code>int a = 10;</code>中的<code>int</code>写成了<code>intt</code></li>\\n<li>Syntactic error\\n语法错误, 例如<code>case</code>缺少对应的<code>switch</code>, <code>else</code>缺少对应的<code>if</code></li>\\n<li>Semantic error\\n语义错误, 例如需要返回<code>int</code>类型的函数返回了<code>string</code>类型的值, 并且没有支持的隐式转换(implicit conversion)</li>\\n<li>Logical error\\n逻辑错误, 例如<code>a = a + 1</code>写成了<code>a = a - 1</code>或者<code>a == 10</code>写成了<code>a = 10</code>, 这些错误并不会导致程序无法运行, 但是会使得程序偏离预期的结果</li>\\n</ul>","autoDesc":true}`);export{h as comp,m as data};
