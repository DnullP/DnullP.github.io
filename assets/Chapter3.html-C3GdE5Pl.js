import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as i,e as a,a as n,b as s}from"./app-DCTCPPGQ.js";const t="/assets/3_1-DU0iuF0T.png",c="/assets/3_2-DhgmLF-2.png",p="/assets/3_3-CKwHgJTI.png",d="/assets/3_4-BGNTUi8O.png",o="/assets/3_5-Bz4MemP_.png",r="/assets/3_6-dV9avzCX.png",u="/assets/3_7-VSggrgPD.png",m="/assets/3_8-DoWWK8k3.png",v="/assets/3_9-CsD-xgKV.png",b="/assets/3_10-B0J5D88c.png",k="/assets/3_11-TlGfBbDb.png",g="/assets/3_12-Gq732tj5.png",h="/assets/3_13-Dgw8IiKX.png",x="/assets/3_14-CxVF5Meh.png",y="/assets/3_15-Nwq5UbQr.png",w="/assets/3_16-MysK9SHh.png",f={},_=a(`<h3 id="处理器状态" tabindex="-1"><a class="header-anchor" href="#处理器状态"><span>处理器状态</span></a></h3><ul><li>程序计数器</li><li>寄存器文件</li><li>条件码寄存器</li><li>向量寄存器</li></ul><h3 id="开始第三章前的一点准备" tabindex="-1"><a class="header-anchor" href="#开始第三章前的一点准备"><span>开始第三章前的一点准备</span></a></h3><p>由于第三章会涉及到很多汇编语言，所以先预设好c语言的编译指令 <code>gcc -Og -S .\\filename</code>这样的</p><p><code>gcc -c .\\filename</code>——编译为目标文件</p><p><code>objdump -d -s .\\filename</code>——反汇编目标文件</p><h3 id="一些要点" tabindex="-1"><a class="header-anchor" href="#一些要点"><span>一些要点</span></a></h3><ul><li><code>x86-64</code>指令长度从1到15个字节不等</li><li>一般情况下，反汇编生成的代码和GCC生成的汇编代码后缀有一个‘q’的差别，一般不影响</li></ul><div class="language-x86 line-numbers-mode" data-ext="x86" data-title="x86"><pre class="language-x86"><code>main:
 subq $56, %rsp
 .seh_stackalloc 56
 .seh_endprologue
 call __main
 leaq 44(%rsp), %rdx
 leaq 40(%rsp), %r8
 leaq .LC0(%rip), %rcx
 call scanf
 movl 40(%rsp), %edx
 movl 44(%rsp), %ecx
 call mult
 movl %eax, %edx
 leaq .LC0(%rip), %rcx
 call printf
 movl $0, %eax
 addq $56, %rsp
 ret
 .seh_endproc
 .ident &quot;GCC: (x86_64-win32-seh-rev0, Built by MinGW-W64 project) 8.1.0&quot;
 .def scanf; .scl 2; .type 32; .endef
 .def printf; .scl 2; .type 32; .endef

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-x86 line-numbers-mode" data-ext="x86" data-title="x86"><pre class="language-x86"><code>0000000000401556 &lt;main&gt;:
  401556: 48 83 ec 38           sub    $0x38,%rsp
  40155a: e8 f1 00 00 00        callq  401650 &lt;__main&gt;
  40155f: 48 8d 54 24 2c        lea    0x2c(%rsp),%rdx
  401564: 4c 8d 44 24 28        lea    0x28(%rsp),%r8
  401569: 48 8d 0d 90 2a 00 00  lea    0x2a90(%rip),%rcx        # 404000 &lt;.rdata&gt;
  401570: e8 0b 15 00 00        callq  402a80 &lt;scanf&gt;
  401575: 8b 54 24 28           mov    0x28(%rsp),%edx
  401579: 8b 4c 24 2c           mov    0x2c(%rsp),%ecx
  40157d: e8 ce ff ff ff        callq  401550 &lt;mult&gt;
  401582: 89 c2                 mov    %eax,%edx
  401584: 48 8d 0d 75 2a 00 00  lea    0x2a75(%rip),%rcx        # 404000 &lt;.rdata&gt;
  40158b: e8 f8 14 00 00        callq  402a88 &lt;printf&gt;
  401590: b8 00 00 00 00        mov    $0x0,%eax
  401595: 48 83 c4 38           add    $0x38,%rsp
  401599: c3                    retq   
  40159a: 90                    nop
  40159b: 90                    nop
  40159c: 90                    nop
  40159d: 90                    nop
  40159e: 90                    nop
  40159f: 90                    nop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两段汇编，前一段来自编译器初次编译的汇编代码，后一段来自完成编译和链接后的可执行应用程序通过反汇编生成的代码，可以发现两段代码有细微的差别，但是整体结构一致</p><p>但是反汇编的代码中还包括了引用的库、链接的库等其他系统背后的代码编译，所以exe文件大小远远大于初步编译获得的汇编代码大小</p><h3 id="寄存器命名" tabindex="-1"><a class="header-anchor" href="#寄存器命名"><span>寄存器命名</span></a></h3><p>x86-64的cpu中包含16个64位的<strong>通用目的寄存器</strong>，其命名和功能对应如下图：</p><p><img src="`+t+'" alt="" loading="lazy">)</p><h3 id="操作数" tabindex="-1"><a class="header-anchor" href="#操作数"><span>操作数</span></a></h3><p>每个指令需要有操作的对象，这些对象被称为操作数，并且主要分为以下三类：</p><ul><li>立即数——可以直接使用的常量，表示方式为 <code>$Imm</code></li></ul><p>tips：<code>Imm</code>是c语言中的标准表示数</p>',19),L=n("ul",null,[n("li",null,[n("p",null,[s("寄存器——保存在寄存器中的数，表示方式为"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"r"),n("mi",null,"a")])]),n("annotation",{encoding:"application/x-tex"},"r_a")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.1514em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"a")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])])])])]),s(" 书写时，我们用"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"r"),n("mi",null,"a")])]),n("annotation",{encoding:"application/x-tex"},"r_a")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.1514em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"a")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])])])])]),s("表示一个寄存器，用"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"R"),n("mo",{stretchy:"false"},"("),n("msub",null,[n("mi",null,"r"),n("mi",null,"a")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"R(r_a)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.1514em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"a")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mclose"},")")])])]),s("表示寄存器中储存的数值")])]),n("li",null,[n("p",null,[s("内存引用——保存在内存中的数，我们用一个数值 "),n("code",null,"Imm"),s("表示内存的地址，用"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"M"),n("mo",{stretchy:"false"},"["),n("mi",null,"I"),n("mi",null,"m"),n("mi",null,"m"),n("mo",{stretchy:"false"},"]")]),n("annotation",{encoding:"application/x-tex"},"M[Imm]")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"M"),n("span",{class:"mopen"},"["),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mord mathnormal"},"mm"),n("span",{class:"mclose"},"]")])])]),s("表示地址对应的内存中所储存的数值")])])],-1),q=a(`<p>以下列出一些操作数格式：</p><ul><li><code>$Imm</code>——立即数</li><li><code>%rax</code>——寄存器中的数值</li><li><code>Imm</code>——根据 <code>Imm</code>寻址</li><li><code>Imm(%rax)</code>—— <code>Imm</code>的值加上<code>%rax</code>的值进行寻址（基址+偏移量）</li><li><code>(%rax,%rbx)</code>——两值相加得到的数字进行寻址</li><li><code>Imm(%rax,%rbx)</code>——两值相加得到的数字作为偏移量（bias）进行寻址</li><li><code>(,%rax,s)</code>——按照寄存器值的s倍作为数值进行寻址</li><li><code>(%rax)</code>——按照寄存器的值进行寻址</li></ul><h3 id="mov指令" tabindex="-1"><a class="header-anchor" href="#mov指令"><span>mov指令</span></a></h3><p>mov指令会把操作数（S）写入目标位置（D），目标位置可以为寄存器或者内存地址，操作数可以为寄存器、内存地址、立即数，但是操作数和目标位置不能同时为内存地址，所以将内存的中的数据进行拷贝的操作需要将数据先写入寄存器，再从寄存器写入内存地址</p><p>mov指令包括以下五种：</p><ul><li><code>movb</code></li><li><code>movw</code></li><li><code>movl</code></li><li><code>movq</code></li><li><code>movabsq</code></li></ul><p>分别移动的数据长度为1字节、2字节、4字节、8字节</p><ul><li><p>写入数据时只会修改写入长度的数值，但是 <code>movl</code>特别，写入的目的是寄存器时，会把寄存器前4个字节设定为0</p></li><li><p>常规的mov只能写入32位的源立即数，但是最后一种 <code>movabsq</code>可以处理64位的立即数源</p></li></ul><p>当目标位置大小大于源时，可使用组合的方式扩展源数据并写入目的：</p><ul><li><p><code>movsbw</code>——把一字节符号扩展到2字节</p></li><li><p><code>movzbw</code>——把一字节零扩展到2字节</p></li><li><p><code>cltq</code>——特别情况，把 <code>%eax</code>扩展到 <code>%rax</code></p></li></ul><p>特别的，<code>movzlq</code>这条指令并不存在，但是可以直接利用 <code>movl</code>的特性实现4字节零扩展到8字节</p><p>tips: 使用 <code>mov</code> 指令时，按照源和目的中较小的一个确定指令后缀</p><h3 id="push和pop指令" tabindex="-1"><a class="header-anchor" href="#push和pop指令"><span>push和pop指令</span></a></h3><p>一个程序的栈在内存上是从高到低储存的，寄存器 <code>%rsp</code>始终储存着指向栈顶元素的指针地址</p><p>两条指令都只有一个操作数</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>pushq %rax
popq %rdx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两句汇编的含义是：</p><ul><li>将<code>rax</code>中的数据写入栈顶，并且 <code>%rsp</code>减去对应长度</li><li>将栈顶元素写入 <code>%rdx</code>，然后 <code>%rsp</code>加上对应长度</li></ul><p>后缀的q、l、w、b依然代表操作数的数据长度</p><h3 id="算术和逻辑操作" tabindex="-1"><a class="header-anchor" href="#算术和逻辑操作"><span>算术和逻辑操作</span></a></h3><h4 id="leaq指令" tabindex="-1"><a class="header-anchor" href="#leaq指令"><span>leaq指令</span></a></h4><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>leaq S D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把S的有效地址作为数值写入D中</p><p>比如 <code>(%rdi,%rsi,4)</code>本来应该是一个内存地址上的值，但是使用leaq时会直接把计算出来的内存地址写入D，而不去寻址求值</p><h4 id="一元操作和二元操作" tabindex="-1"><a class="header-anchor" href="#一元操作和二元操作"><span>一元操作和二元操作</span></a></h4><p>包括 <code>incq</code>在内的一元操作符 包括 <code>subq</code>在内的二元操作符</p><p>需要注意的是，当使用二元操作符时，如果目的是内存地址，那么处理器会先读取内存中的数值到寄存器，计算之后再写回原地址</p><p>大部分操作指令都放在下表：</p><p><img src="`+c+'" alt="" loading="lazy">)</p><h4 id="移位操作" tabindex="-1"><a class="header-anchor" href="#移位操作"><span>移位操作</span></a></h4><p>第一个操作数是移位量，第二个操作数是要移位的数</p>',31),M=n("p",null,[s("移位量可以是一个立即数或者储存在寄存器 "),n("code",null,"%cl"),s("中的数(由于处理器的原因)，而 "),n("code",null,"cl"),s("是个8位数字，最大值为256，同时也代表了左移（右移）的位数的限制——（"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mn",null,"8")]),n("mo",null,"−"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"2^8-1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"8")])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s("）")],-1),$=a('<p>移位有两种版本—— <code>SAR</code>和 <code>SHR</code>前者进行算术右移，后者进行逻辑右移，而左移的两种版本并没有什么不同</p><hr><p><img src="'+p+`" alt="" loading="lazy">)</p><p>八字不合的新解释</p><hr><h3 id="_128位乘法和除法、取模" tabindex="-1"><a class="header-anchor" href="#_128位乘法和除法、取模"><span>128位乘法和除法、取模</span></a></h3><h4 id="_128位乘法" tabindex="-1"><a class="header-anchor" href="#_128位乘法"><span>128位乘法</span></a></h4><p>对于128位的乘法，需要16个字节的长度来储存（八字）</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">unsigned</span> __int128 <span class="token class-name">uint128_t</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token class-name">uint128_t</span> <span class="token operator">*</span>dest<span class="token punctuation">,</span> <span class="token class-name">uint64_t</span> x<span class="token punctuation">,</span> <span class="token class-name">uint64_t</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token operator">*</span>dest <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token class-name">uint128_t</span><span class="token punctuation">)</span>y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>汇编代码：</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>test_1:
 .seh_endprologue
 movq %rdx, %rax
 mulq %r8
 movq %rax, (%rcx)
 movq %rdx, 8(%rcx)
 ret
 .seh_endproc
 .def __main; .scl 2; .type 32; .endef
 .globl main
 .def main; .scl 2; .type 32; .endef
 .seh_proc main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以注意到这里的乘法指令 <code>mulq</code>只有一个操作数，事实上，另一个操作数默认储存在寄存器<code>%rax</code>之中，得到的结果将会写入 <code>%rax</code>和 <code>%rdx</code> 最后两条指令把结果拷贝到 <code>%rcx</code>处，中间相差8个字节</p><p>但是 <code>__int128</code>一般默认是给编译器用的，并不希望在程序中使用，在MSVC中更是长久以来都不支持 <code>__int128</code>，在语法分析上一直出现错误。但是当我实际编译时，编译器并没有拒绝理解这种数据类型，并且生成了正确的汇编代码</p><p>按照StackOverflow上的一位老哥的话： <code>Never trust the syntax hilighter; it is user editable, and thus likely to either have bogus or &#39;future&#39; types in it.</code></p><h4 id="除法和取模" tabindex="-1"><a class="header-anchor" href="#除法和取模"><span>除法和取模</span></a></h4><p><img src="`+d+`" alt="" loading="lazy">)</p><p>除法和取模运算是同一个指令下产生的计算，其运算模式和128位乘法相似</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token class-name">uint64_t</span> <span class="token operator">*</span>qp<span class="token punctuation">,</span> <span class="token class-name">uint64_t</span> x<span class="token punctuation">,</span> <span class="token class-name">uint64_t</span> y<span class="token punctuation">,</span> <span class="token class-name">uint64_t</span> <span class="token operator">*</span>cd<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token operator">*</span>qp <span class="token operator">=</span> x <span class="token operator">/</span> y<span class="token punctuation">;</span>
    <span class="token operator">*</span>cd <span class="token operator">=</span> x <span class="token operator">%</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>汇编代码：</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>test_1:
 .seh_endprologue
 movq %rdx, %rax
 movl $0, %edx
 divq %r8
 movq %rax, (%rcx)
 movq %rdx, (%r9)
 ret
 .seh_endproc
 .def __main; .scl 2; .type 32; .endef
 .globl main
 .def main; .scl 2; .type 32; .endef
 .seh_proc main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照上面的汇编代码，被除数默认储存在 <code>%rax</code>中，执行 <code>divq</code>运算后，商存储在 <code>%rax</code>中，余数储存在 <code>%rdx</code>中</p><p>所以说对于整数来说，除法和取模的效率完全一样，而浮点数的编码模式不允许取模运算</p><p>对于有符号数的除法来说，汇编代码会有所不同：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token class-name">int64_t</span> <span class="token operator">*</span>qp<span class="token punctuation">,</span> <span class="token class-name">int64_t</span> x<span class="token punctuation">,</span> <span class="token class-name">int64_t</span> y<span class="token punctuation">,</span> <span class="token class-name">int64_t</span> <span class="token operator">*</span>cd<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token operator">*</span>qp <span class="token operator">=</span> x <span class="token operator">/</span> y<span class="token punctuation">;</span>
    <span class="token operator">*</span>cd <span class="token operator">=</span> x <span class="token operator">%</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>汇编代码：</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>test_1:
 .seh_endprologue
 movq %rdx, %rax
 cqto
 idivq %r8
 movq %rax, (%rcx)
 movq %rdx, (%r9)
 ret
 .seh_endproc
 .def __main; .scl 2; .type 32; .endef
 .globl main
 .def main; .scl 2; .type 32; .endef
 .seh_proc main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中的 <code>movl $0, %edx</code>被换成了 <code>cqto</code>，这条指令的意思是把 <code>%rax</code>符号扩展到16位，高八位储存在 <code>%rdx</code>中，这样来实现有符号数的符号扩展，而除法指令改变为使用 <code>idivq</code></p><h3 id="条件码及其设置" tabindex="-1"><a class="header-anchor" href="#条件码及其设置"><span>条件码及其设置</span></a></h3><p>除去之前一直提到整数寄存器，除去整数寄存器处理器中还有一部分被称为<strong>条件码寄存器</strong>，里面记录了一系列数字，用来表示最近一次运算的一些性质，这些数字被称为条件码，下面是书上记录的常用条件码：</p><p><img src="`+o+'" alt="" loading="lazy">)</p><p>除了之前的常用运算指令会设置条件码，还有两组指令 <code>CMP</code>和 <code>TEST</code>：</p><p><img src="'+r+'" alt="" loading="lazy">)</p><ul><li><code>CMP</code>指令将两个数相减，后者减去前者</li><li><code>TEST</code>指令将两个数执行与（&amp;）操作</li></ul><h4 id="访问条件码" tabindex="-1"><a class="header-anchor" href="#访问条件码"><span>访问条件码</span></a></h4><p>第一种方式：<strong>SET</strong>指令</p><p><code>SET</code>指令会根据当前的条件码状态，将一个目标设置为0或1，用于得到上次运算的某些特点</p><p><img src="'+u+`" alt="" loading="lazy">)</p><p>简单记忆一下，e相等，g更大，l更小，ge大等，le小等，ab大小无符号</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>comp:
 .seh_endprologue
 cmpl %edx, %ecx
 setg %al
 ret
 .seh_endproc
 .def __main; .scl 2; .type 32; .endef
 .globl main
 .def main; .scl 2; .type 32; .endef
 .seh_proc main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较函数的汇编代码，首先通过 <code>cmp</code>比较两个数的大小，再通过 <code>set</code>指令得到两个数相减的结果，写入 <code>%al</code>中作为返回值</p><p>第二种方式：<strong>跳转指令</strong></p><p>使用 <code>JMP</code>指令可以跳转到指定的<strong>标号</strong>处，使用特定的 <code>JMP</code>语句可以检查条件码后再跳转：</p><p>C语言代码：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">_Bool</span> <span class="token function">comp</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>汇编代码：</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>comp:
 cmpl %edx, %ecx
 jg .L4
 testl %edx, %edx
 setne %al
 jmp .L2
.L4:
 movl $1, %eax
.L2:
 ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.L4和.L2就是标号，是JMP指令跳转的依据，从代码中也可以看出汇编代码一般处理 <code>if-else</code>条件的方式——检查条件，不满足则跳到不满足的代码区，完成后跳过满足代码继续，满足则跳过不满足代码，这类似的逻辑方式</p><p>目标文件编码：</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>0000000000000001 &lt;comp&gt;:
   1: 39 d1                 cmp    %edx,%ecx
   3: 7f 07                 jg     c &lt;comp+0xb&gt;
   5: 85 d2                 test   %edx,%edx
   7: 0f 95 c0              setne  %al
   a: eb 05                 jmp    11 &lt;comp+0x10&gt;
   c: b8 01 00 00 00        mov    $0x1,%eax
  11: c3                    retq   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>观察目标文件的编码可以发现，跳转指令的最后一个数加上跳转指令的下一条指令的地址，所得到的结果总是跳转目标的地址，这就是跳转编码中使用的<strong>PC相对</strong>（program-counter-released）(与程序计数器相关的)</p><p>我们知道汇编语言从上到下运行，通过程序计数器来记录程序运行到了哪一行，而PC相对的跳转编码就是让程序计数器加上或减去一个固定的数字，使得程序的运行跳转到某一个位置，这使得无论程序在内存的哪个位置，都可以按照既定的顺序运行</p><p>比如第一次的跳转：我们的跳转目标是c位置，那么用其下一条指令的位置 <code>5</code>加上编码的最后一个字节 <code>0x07</code>得到12，也就是 <code>0xc</code></p><p>以下是常用JMP指令： <img src="`+m+`" alt="" loading="lazy">)</p><p>第三种方式：<strong>条件数据传送</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">cond</span><span class="token punctuation">(</span><span class="token keyword">long</span> a<span class="token punctuation">,</span> <span class="token keyword">long</span> <span class="token operator">*</span>p<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token operator">*</span>p <span class="token operator">=</span> a <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> a <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码，我们可以使用之前说的<strong>跳转</strong>来实现<strong>条件控制转移</strong>，从而实现条件判断，但是在处理器的运行中，涉及到有关<strong>流水线</strong>的原理，大概就是操作的指令是一个个排列着等待处理器执行的，但是如果条件控制的条件不成立，那么后面的指令的内容、顺序就会受到影响，从而把后方已经排列好的指令全部舍弃掉重新排列，造成<strong>预测错误处罚</strong>，事实上，处理器会通过复杂的逻辑结构来预测如何排列指令可以得到最终结果，但是预测失败就会出现刚刚所说的情况</p><p>所以，为了解决这个问题，汇编中还设计了一种<strong>条件数据传送</strong>的指令，用于一次性检查条件传送数据：</p><p><img src="`+v+`" alt="" loading="lazy">)</p><p>上面这些指令会在检查条件满足后直接传送数据，这样把所有操作打包成一个指令在流水线中排列，就可以一定程度上减少预测错误处罚</p><p>但是可以看到，这样的操作只能传送数据，并且还需要对所有的条件都计算出结果后才能确定是否传送数据，这样在判断复杂条件时必然会增加处理器的负担，所以条件数据传送的使用并不普遍</p><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h3><p>汇编实现循环的方式是<strong>条件+跳转</strong>，具体参考代码即可：</p><p>C语言：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">func_1</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        result <span class="token operator">*=</span> n<span class="token punctuation">;</span>
        n<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">func_2</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span>
    <span class="token punctuation">{</span>
        result <span class="token operator">*=</span> n<span class="token punctuation">;</span>
        n<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应汇编：</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>func_1:
 movl $1, %eax
.L2:
 cmpl $1, %ecx
 jle .L4
 imull %ecx, %eax
 subl $1, %ecx
 jmp .L2
.L4:
 ret

func_2:
 movl $1, %eax
.L6:
 imull %ecx, %eax
 subl $1, %ecx
 cmpl $1, %ecx
 jg .L6
 ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外书上还专门提出来，如果使用O1的优化等级，生成的汇编代码如下：</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>func_1:
 cmpl $1, %ecx
 jle .L4
 movl $1, %eax
.L3:
 imull %ecx, %eax
 subl $1, %ecx
 cmpl $1, %ecx
 jne .L3
.L1:
 ret
.L4:
 movl $1, %eax
 jmp .L1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，初始条件检测放到了循环的外部，这样可以方便编译器对第一次的条件检测做优化，而循环体的内部则变为了和do-while一样的形式，这种翻译方法被称为<strong>guarded-do</strong></p><p>for循环的汇编代码想来也是很明确了，只是单独于while循环外，再新加一个用来控制循环的变量而已了</p><p>switch做条件分支时，如果case的值相差不大，在汇编中使用的<strong>跳转表</strong>作为实现方式：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">func_2</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token number">300</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token number">32023</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token number">640</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token number">30430</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token number">8</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token number">320323</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">11</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token number">604</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">12</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token number">3050</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token number">13</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token number">320623</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>func_2:
 .seh_endprologue
 cmpl $13, %ecx
 ja .L5
 movl %ecx, %ecx
 leaq .L8(%rip), %rdx
 movslq (%rdx,%rcx,4), %rax
 addq %rdx, %rax
 jmp *%rax
 .section .rdata,&quot;dr&quot;
 .align 4
.L8:
 .long .L5-.L8
 .long .L16-.L8
 .long .L17-.L8
 .long .L14-.L8
 .long .L5-.L8
 .long .L13-.L8
 .long .L5-.L8
 .long .L12-.L8
 .long .L11-.L8
 .long .L5-.L8
 .long .L5-.L8
 .long .L10-.L8
 .long .L9-.L8
 .long .L7-.L8
 .text
.L14:
 movl $32023, %eax
 jmp .L5
.L13:
 movl $640, %eax
 jmp .L5
.L12:
 movl $30430, %eax
 jmp .L5
.L11:
 movl $320323, %eax
 jmp .L5
.L10:
 movl $604, %eax
 jmp .L5
.L9:
 movl $3050, %eax
 jmp .L5
.L7:
 movl $320623, %eax
 jmp .L5
.L16:
 movl $60, %eax
 jmp .L5
.L17:
 movl $300, %eax
.L5:
 ret
 .seh_endproc
 .def __main; .scl 2; .type 32; .endef
 .globl main
 .def main; .scl 2; .type 32; .endef
 .seh_proc main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这之中，<code>.L8</code>这样的标记也表示一个内存位置，通过一系列计算得到需要跳转的位置，通过*号来间接寻址，得到跳转位置</p><h3 id="过程" tabindex="-1"><a class="header-anchor" href="#过程"><span>过程</span></a></h3><p><strong>过程</strong>是种程序的抽象，比较容易理解的例子就是函数，此外还包括<strong>方法</strong>、<strong>子例程</strong>等等</p><p>函数之间的互相调用就形成了过程之间的嵌套，比如过程A中需要跳转到另一个过程B，完成过程B后再跳回过程A继续执行。</p><p>我们知道CPU寄存器的空间是有限的，如果过程中的变量数超过了寄存器的空间，就会把多出来的数据写到栈里面，这个栈被称为<strong>运行时栈</strong>，栈中每个分配的数据被称为<strong>栈帧</strong></p><p>此外，在过程的互相跳转中，如果要跳转到过程B，那么需要保存过程A此时的数据和程序运行到的内存位置，在完成B过程后再跳转回来，这些程序的控制信息也是保存在运行时栈中的</p><h3 id="call和ret指令" tabindex="-1"><a class="header-anchor" href="#call和ret指令"><span>call和ret指令</span></a></h3><p><code>call</code>指令操作数可以是标号或者地址，把下一条指令的地址压入栈，然后使PC指向操作数的地址</p><p><code>ret</code>出栈并跳转回原来的过程，此时，如果有返回值，返回值储存在 <code>%rax</code>寄存器中</p><p>传递参数时，如果参数数量小于等于6，则可以直接使用寄存器传递参数，具体参数的位置按照参数的大小如下：</p><p><img src="`+b+'" alt="avatar" loading="lazy">)</p><h3 id="使用栈传递参数" tabindex="-1"><a class="header-anchor" href="#使用栈传递参数"><span>使用栈传递参数</span></a></h3><p><img src="'+k+`" alt="avatar" loading="lazy">)</p><p>上面的代码中，函数 <code>proc()</code>有八个参数，其中六个以寄存器的方式传递，多出来的两个参数在调用函数时，提前先压入栈中，然后再压入跳转地址，跳转到proc函数所在位置</p><p>此时访问栈中的参数，使用栈顶寄存器进行运算得到： <code>8(%rsp)</code>从 <code>%rsp</code>的前八个字节开始取数据， <code>%rsp</code>即为栈顶寄存器</p><h3 id="把数据压入栈的情况" tabindex="-1"><a class="header-anchor" href="#把数据压入栈的情况"><span>把数据压入栈的情况</span></a></h3><p>除了程序需要把大于6个的参数压入栈中，用来传递给调用的函数，还有以下情况也需要把数据存入运行时栈中：</p><ul><li>寄存器空间不够存本地数据</li><li>使用&amp;符号获得本地变量的地址</li><li>使用数组这种使用索引访问连续数据的</li></ul><p>以第二种情况为例:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">long</span> <span class="token function">swap_add</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token operator">*</span>xp<span class="token punctuation">,</span> <span class="token keyword">long</span> <span class="token operator">*</span>yp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">long</span> x <span class="token operator">=</span> <span class="token operator">*</span>xp<span class="token punctuation">;</span>
    <span class="token keyword">long</span> y <span class="token operator">=</span> <span class="token operator">*</span>yp<span class="token punctuation">;</span>
    <span class="token operator">*</span>xp <span class="token operator">=</span> y<span class="token punctuation">;</span>
    <span class="token operator">*</span>yp <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">long</span> <span class="token function">caller</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">long</span> arg1 <span class="token operator">=</span> <span class="token number">534</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> arg2 <span class="token operator">=</span> <span class="token number">1057</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> sum <span class="token operator">=</span> <span class="token function">swap_add</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arg1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>arg2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> diff <span class="token operator">=</span> arg1 <span class="token operator">-</span> arg2<span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum <span class="token operator">*</span> diff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>swap_add:
 movl (%rcx), %eax
 movl (%rdx), %r8d
 movl %r8d, (%rcx)
 movl %eax, (%rdx)
 addl %r8d, %eax
 ret
caller:
 subq $56, %rsp

 movl $534, 44(%rsp)
 movl $1057, 40(%rsp)
 leaq 40(%rsp), %rdx
 leaq 44(%rsp), %rcx
 call swap_add
 movl 44(%rsp), %edx
 subl 40(%rsp), %edx
 imull %edx, %eax
 addq $56, %rsp
 ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先第一步先分配56字节的栈空间，其中40字节是调用函数固定分配的，所以为了传递参数而分配的栈空间是16字节，然后把534和1057写入分配的栈空间中，因为两个数字的变量取了地址，所以两个数字必须在内存中分配，不能在寄存器中传递</p><p>然后把这两个栈地址写入 <code>%rdx</code>和 <code>%rsp</code>作为传入参数，此时的局部变量是储存在栈内存中，而不是寄存器</p><p>接下来说一下书上一个相对复杂的例子：</p><p><img src="`+g+'" alt="avatar" loading="lazy">) <img src="'+h+'" alt="avatar" loading="lazy">)</p>',98),C=n("p",null,[s("上面的代码中，一共有四个变量，每个变量都要取地址，所以栈中空间有"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"8"),n("mo",null,"+"),n("mn",null,"4"),n("mo",null,"+"),n("mn",null,"2"),n("mo",null,"+"),n("mn",null,"1"),n("mo",null,"="),n("mn",null,"15")]),n("annotation",{encoding:"application/x-tex"},"8+4+2+1=15")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},"8"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},"4"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},"2"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"15")])])]),s(" 然后还有8个需要传递的参数，所以需要额外分配2个参数，一个 "),n("code",null,"char"),s("，一个 "),n("code",null,"char*"),s("总大小为24字节，再加上返回地址占8字节，所以栈分配空间为32字节")],-1),j=a(`<h3 id="调用者保存寄存器、被调用者保存寄存器" tabindex="-1"><a class="header-anchor" href="#调用者保存寄存器、被调用者保存寄存器"><span>调用者保存寄存器、被调用者保存寄存器</span></a></h3><p>在过程A调用过程B的时候，可能过程B会使用到一些寄存器，而这些寄存器在过程A中正在被使用。为了让过程B完成后，过程A使用的寄存器能够维持原状，需要保存寄存器中的数据，将其压入栈中。</p><p>如果在调用B过程之前，在A过程中将数据压入栈，在B完成后恢复，则称这种寄存器为<strong>调用者保存寄存器</strong></p><p>如果在调用过程B之后，将数据压入栈保存，在完成过程B之前恢复寄存器状态，则称为<strong>被调用者保存寄存器</strong></p><ul><li><code>%rbx %rbp %r12~%r15</code>这些寄存器都是<strong>被调用者寄存器</strong></li></ul><p>对于储存在调用者保存寄存器的数据，如果数量不是很多，可以将其转移到被调用者保存寄存器中，然后再调用函数</p><p>典型代码，计算阶乘的递归：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">rfact</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">long</span> result<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        result <span class="token operator">=</span> n <span class="token operator">*</span> <span class="token function">rfact</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>rfact:
 pushq %rbx
 subq $32, %rsp
 movl %ecx, %ebx
 cmpl $1, %ecx
 jg .L7
 movl $1, %eax
.L4:
 addq $32, %rsp
 popq %rbx
 ret
.L7:
 leal -1(%rcx), %ecx
 call rfact
 imull %ebx, %eax
 jmp .L4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><p>一般的数组没什么好说的</p>`,11),z=n("p",null,[s("二维数组："),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"a"),n("mo",{stretchy:"false"},"["),n("mi",null,"M"),n("mo",{stretchy:"false"},"]"),n("mo",{stretchy:"false"},"["),n("mi",null,"N"),n("mo",{stretchy:"false"},"]")]),n("annotation",{encoding:"application/x-tex"},"a[M][N]")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mopen"},"["),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"M"),n("span",{class:"mclose"},"]"),n("span",{class:"mopen"},"["),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),n("span",{class:"mclose"},"]")])])]),s(" 二维数组的寻址公式："),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"a"),n("mo",{stretchy:"false"},"["),n("mi",null,"i"),n("mo",{stretchy:"false"},"]"),n("mo",{stretchy:"false"},"["),n("mi",null,"j"),n("mo",{stretchy:"false"},"]"),n("mo",null,"="),n("msub",null,[n("mi",null,"x"),n("mn",null,"0")]),n("mo",null,"+"),n("mi",null,"T"),n("mo",{stretchy:"false"},"("),n("mi",null,"N"),n("mi",null,"i"),n("mo",null,"+"),n("mi",null,"j"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"a[i][j] = x_0 + T(Ni+j)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mopen"},"["),n("span",{class:"mord mathnormal"},"i"),n("span",{class:"mclose"},"]"),n("span",{class:"mopen"},"["),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),n("span",{class:"mclose"},"]"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7333em","vertical-align":"-0.15em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"x"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3011em"}},[n("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"0")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),n("span",{class:"mord mathnormal"},"i"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),n("span",{class:"mclose"},")")])])])],-1),S=a(`<h4 id="循环遍历数组的优化" tabindex="-1"><a class="header-anchor" href="#循环遍历数组的优化"><span>循环遍历数组的优化</span></a></h4><p>有些处理器的乘法计算会导致严重的性能处罚，所以如果在编译器中启用优化的话，编译器就会避免每次通过计算公式得到元素的地址，因为这样每次都会计算多次乘法，大幅度拖慢速度</p><p>编译器使用的优化方法是，得到循环的首地址，然后每次循环都将对应地址加上对应的长度，就像迭代器的遍历一样：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">N</span> <span class="token expression"><span class="token number">16</span></span></span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> fixed_matrix<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span>fixed_matrix A<span class="token punctuation">,</span> fixed_matrix B<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        result <span class="token operator">+=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> B<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-O1优化</p><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>func:
 movslq %r8d, %r8
 salq $6, %r8                #计算行数
 addq %r8, %rcx      #加上列数，得到初始A的位置

 movslq %r9d, %r9
 leaq (%rdx,%r9,4), %rdx    #计算B的初始位置

 leaq 1024(%rdx), %r9     #计算B的结束位置
 movl $0, %eax
.L9:
 movl (%rcx), %r8d
 imull (%rdx), %r8d
 addl %r8d, %eax
 addq $4, %rcx
 addq $64, %rdx
 cmpq %r9, %rdx
 jne .L9
 ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h3><p>C语言中的结构比C++简单许多，在汇编实现中通过简单的偏移来实现，结构的类型信息和内存对齐都是由编译器来完成，最终汇编只用偏移访问结构的字段：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">A</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">int</span> b<span class="token punctuation">;</span>
    <span class="token keyword">char</span> c<span class="token punctuation">;</span>
    <span class="token keyword">int</span> d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">testA</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">A</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    result <span class="token operator">+=</span> ptr<span class="token operator">-&gt;</span>a<span class="token punctuation">;</span>
    result <span class="token operator">+=</span> ptr<span class="token operator">-&gt;</span>b<span class="token punctuation">;</span>

    result <span class="token operator">-=</span> ptr<span class="token operator">-&gt;</span>c<span class="token punctuation">;</span>
    result <span class="token operator">*=</span> ptr<span class="token operator">-&gt;</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>testA:
 movl 4(%rcx), %eax
 addl (%rcx), %eax
 movsbl 8(%rcx), %edx
 subl %edx, %eax
 imull 16(%rcx), %eax
 ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="联合" tabindex="-1"><a class="header-anchor" href="#联合"><span>联合</span></a></h3><p>学C++时没怎么学过联合，联合是可以通过不同的类型来占用同一块内存，而不改变数值的编码方式，维持位状态的一致，可以用联合来实现二叉树的空间节省、同一个内存位置的不同访问方式等</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">NodeType</span>
<span class="token punctuation">{</span>
    leafNode<span class="token punctuation">,</span>
    innerNode
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">TNode</span>
<span class="token punctuation">{</span>
    <span class="token keyword">enum</span> <span class="token class-name">NodeType</span> type<span class="token punctuation">;</span>
    <span class="token keyword">union</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">struct</span> <span class="token class-name">TNode</span> <span class="token operator">*</span>Lchild<span class="token punctuation">;</span>
        <span class="token keyword">struct</span> <span class="token class-name">TNode</span> <span class="token operator">*</span>Rchild<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> internal<span class="token punctuation">;</span>
    <span class="token keyword">int</span> data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的写法可以节约一部分内存空间</p><p>另外，使用联合改变访问类型时，需要注意大端法机器和小端法机器的区别</p><h3 id="数据对齐" tabindex="-1"><a class="header-anchor" href="#数据对齐"><span>数据对齐</span></a></h3><p>为了提高数据在内存中的存储效率，数据在内存中的存储地址必须是其字节大小的倍数。</p><p>比如：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Test_2</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">short</span> b<span class="token punctuation">;</span>
    <span class="token keyword">char</span> c<span class="token punctuation">;</span>
    <span class="token keyword">int</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Test_2</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lld&quot;</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果是12，但是4+2+1+4的大小只有11，因为为了使d的存储地址能够是4的倍数，所以c和d中间必须插入一个字节的空隙，这就是数据的对齐，此外，还可以通过预编译指令来修改数据对齐的最小大小等属性，实现不同的内存对齐方式</p><p>汇编中设置内存对齐的倍数指令： <code>.align 8</code> 数据的存储位置必须为8的倍数</p><h3 id="内存越界引用和缓冲区溢出" tabindex="-1"><a class="header-anchor" href="#内存越界引用和缓冲区溢出"><span>内存越界引用和缓冲区溢出</span></a></h3><p>书上这一节很有意思，讲明了缓冲区溢出攻击的原理：</p><p>以C语言标准库中的<code>gets</code>函数为例子，这个函数从标准输入读取一个字符串，结尾加上&#39;\\0&#39;后写入到指定的内存位置</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>
<span class="token keyword">void</span> <span class="token function">test_3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span> 
 <span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">gets</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">puts</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>test_3:
 pushq %rbx

 subq $48, %rsp

 leaq 44(%rsp), %rbx
 movq %rbx, %rcx
 call gets
 movq %rbx, %rcx
 call puts
 nop
 addq $48, %rsp
 popq %rbx
 ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面函数对应的汇编代码中，分配了48字节的栈空间，根据栈帧的结构，参数空间为0，返回地址为8字节，本地变量为4字节，有36字节的未使用空间</p><p>如果输入的字符串超过了36+4个字节，那么多出来的字节就会覆盖返回地址，从而使函数跳转到意料之外的函数中，或者直接无法继续进行。</p><p>使用 <code>gets()</code>这样的函数，如果被人故意使用这样的漏洞，可能使对方调用指定的函数来侵入系统。</p><h4 id="防治方法" tabindex="-1"><a class="header-anchor" href="#防治方法"><span>防治方法</span></a></h4><ul><li><p>栈随机化 每次程序运行分配栈的地址都不一样，这就使得攻击代码没办法准确定位 但是通过在攻击代码前跟上一长段<strong>nop</strong>指令，就能增加攻击代码命中的范围，再通过暴力的方式尝试跳转，可以有更高的几率使攻击代码生效，该方式被称为空操作雪橇（nop sled）</p></li><li><p>栈破坏检测 在局部变量和返回地址之间加入一个随机产生的数据，被称为<strong>金丝雀值</strong>。在调用完函数后检测这些值是否被修改，如果被修改，则说明发生了缓冲区溢出，程序会调用一个异常处理机制来结束程序</p></li><li><p>限制可执行代码区域 以前的内存中，可读区域和可执行区域是一体的，一个可以读写的区域也就可以执行。之后通过把读写区域和执行区域分开来，在不影响性能的情况下避免攻击代码的执行</p></li></ul><h3 id="变长栈帧" tabindex="-1"><a class="header-anchor" href="#变长栈帧"><span>变长栈帧</span></a></h3><p>在栈空间分配大小不确定时，会保存一个帧指针，用来作为访问局部变量的<strong>基址</strong>，因为此时的栈指针位置不能确定了，而帧指针在函数调用后的一开始就创建好，位置是固定的</p><p>帧指针一般保存在 <code>%rbx</code>寄存器中</p><h3 id="浮点代码" tabindex="-1"><a class="header-anchor" href="#浮点代码"><span>浮点代码</span></a></h3><p>CPU中对于浮点数的计算等操作有专门的架构和指令集</p><p>这些体系结构原本是允许多个操作以并行模式执行，来支持图形和图像处理，称为<strong>单指令多数据</strong>（SIMD），最开始的指令集为MXX，后来是SSE，再后来是AVX，还有SSE2和AVX2等</p><p>AVX浮点体系结构允许数据储存在16个YMM寄存器中：</p><p><img src="`+x+'" alt="avatar" loading="lazy">)</p><p>YMM寄存器是AVX体系结构的寄存器，有256位的空间，xmm是SSE体系的寄存器，有128位空间</p><p>一个YMM寄存器可以储存4个双精度浮点数，或者8个整数，并且通过<strong>向量</strong>操作同时对多个数执行同一个操作，实现<strong>硬件加速</strong></p><p>但是书上说接下来的程序里大部分都只会进行<strong>标量</strong>的计算，也就是说只使用YMM寄存器的低位进行操作和计算</p><h4 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h4><p><img src="'+y+'" alt="avatar" loading="lazy">)</p><p>GCC只会使用标量传送操作来在XMM寄存器和内存之间传送数据，在XMM寄存器之间传输数据时，采用标量或矢量传送其中一种</p><p>因为 <code>vmovaps</code>中的a代表alined（对齐的），所以如果需要把寄存器中的数据传送到内存上，需要保证内存的十六进制对齐，否则发生报错</p><p><img src="'+w+`" alt="avatar" loading="lazy">)</p><p>这些是实现数据转换的指令，表中的X表示必须是XMM寄存器，R为通用寄存器，M为内存位置</p><p>3-48中的指令是三操作数的指令，一般源2和目的操作数保持一致即可，源2的值只影响结果的高位字节</p><p>书上说把一个单精度值转化为一个双精度值之前，会先使用一次 <code>vunpcklps</code>指令，并且书上表示这个操作并没有任何作用，然后咱尝试这编译了这样的代码：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">test_3</span><span class="token punctuation">(</span><span class="token keyword">double</span> <span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token keyword">float</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">float</span> a <span class="token operator">=</span> <span class="token number">123.3423423</span> <span class="token operator">*</span> n<span class="token punctuation">;</span>
    <span class="token keyword">float</span> b <span class="token operator">=</span> <span class="token number">312.24231234</span> <span class="token operator">/</span> n<span class="token punctuation">;</span>
    <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3.212</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>test_3:
 cvtss2sd %xmm1, %xmm1
 movapd %xmm1, %xmm0
 mulsd .LC0(%rip), %xmm0
 cvtsd2ss %xmm0, %xmm0
 movsd .LC1(%rip), %xmm2
 divsd %xmm1, %xmm2
 cvtsd2ss %xmm2, %xmm2
 mulss %xmm2, %xmm0
 cvtss2sd %xmm0, %xmm0
 divsd .LC2(%rip), %xmm0
 movsd %xmm0, (%rcx)
 ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初步编译出来的汇编中并没有使用这样的指令，所以咱暂时认为这个操作被优化删除了</p>`,53),T=[_,L,q,M,$,C,j,z,S];function N(B,A){return l(),i("div",null,T)}const I=e(f,[["render",N],["__file","Chapter3.html.vue"]]),V=JSON.parse(`{"path":"/posts/CS/CSAPP-notes/Chapter3.html","title":"机器级程序和汇编","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"机器级程序和汇编","tag":["二进制","编码","计算机系统","汇编"],"categories":["CSAPP学习笔记"],"mathjax":true,"description":"处理器状态 程序计数器 寄存器文件 条件码寄存器 向量寄存器 开始第三章前的一点准备 由于第三章会涉及到很多汇编语言，所以先预设好c语言的编译指令 gcc -Og -S .\\\\filename这样的 gcc -c .\\\\filename——编译为目标文件 objdump -d -s .\\\\filename——反汇编目标文件 一些要点 x86-64指令长度从1...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/CS/CSAPP-notes/Chapter3.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"机器级程序和汇编"}],["meta",{"property":"og:description","content":"处理器状态 程序计数器 寄存器文件 条件码寄存器 向量寄存器 开始第三章前的一点准备 由于第三章会涉及到很多汇编语言，所以先预设好c语言的编译指令 gcc -Og -S .\\\\filename这样的 gcc -c .\\\\filename——编译为目标文件 objdump -d -s .\\\\filename——反汇编目标文件 一些要点 x86-64指令长度从1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"二进制"}],["meta",{"property":"article:tag","content":"编码"}],["meta",{"property":"article:tag","content":"计算机系统"}],["meta",{"property":"article:tag","content":"汇编"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"机器级程序和汇编\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":3,"title":"处理器状态","slug":"处理器状态","link":"#处理器状态","children":[]},{"level":3,"title":"开始第三章前的一点准备","slug":"开始第三章前的一点准备","link":"#开始第三章前的一点准备","children":[]},{"level":3,"title":"一些要点","slug":"一些要点","link":"#一些要点","children":[]},{"level":3,"title":"寄存器命名","slug":"寄存器命名","link":"#寄存器命名","children":[]},{"level":3,"title":"操作数","slug":"操作数","link":"#操作数","children":[]},{"level":3,"title":"mov指令","slug":"mov指令","link":"#mov指令","children":[]},{"level":3,"title":"push和pop指令","slug":"push和pop指令","link":"#push和pop指令","children":[]},{"level":3,"title":"算术和逻辑操作","slug":"算术和逻辑操作","link":"#算术和逻辑操作","children":[]},{"level":3,"title":"128位乘法和除法、取模","slug":"_128位乘法和除法、取模","link":"#_128位乘法和除法、取模","children":[]},{"level":3,"title":"条件码及其设置","slug":"条件码及其设置","link":"#条件码及其设置","children":[]},{"level":3,"title":"循环","slug":"循环","link":"#循环","children":[]},{"level":3,"title":"过程","slug":"过程","link":"#过程","children":[]},{"level":3,"title":"call和ret指令","slug":"call和ret指令","link":"#call和ret指令","children":[]},{"level":3,"title":"使用栈传递参数","slug":"使用栈传递参数","link":"#使用栈传递参数","children":[]},{"level":3,"title":"把数据压入栈的情况","slug":"把数据压入栈的情况","link":"#把数据压入栈的情况","children":[]},{"level":3,"title":"调用者保存寄存器、被调用者保存寄存器","slug":"调用者保存寄存器、被调用者保存寄存器","link":"#调用者保存寄存器、被调用者保存寄存器","children":[]},{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":3,"title":"联合","slug":"联合","link":"#联合","children":[]},{"level":3,"title":"数据对齐","slug":"数据对齐","link":"#数据对齐","children":[]},{"level":3,"title":"内存越界引用和缓冲区溢出","slug":"内存越界引用和缓冲区溢出","link":"#内存越界引用和缓冲区溢出","children":[]},{"level":3,"title":"变长栈帧","slug":"变长栈帧","link":"#变长栈帧","children":[]},{"level":3,"title":"浮点代码","slug":"浮点代码","link":"#浮点代码","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":24.07,"words":7221},"filePathRelative":"posts/CS/CSAPP-notes/Chapter3.md","localizedDate":"2021年1月1日","excerpt":"<h3>处理器状态</h3>\\n<ul>\\n<li>程序计数器</li>\\n<li>寄存器文件</li>\\n<li>条件码寄存器</li>\\n<li>向量寄存器</li>\\n</ul>\\n<h3>开始第三章前的一点准备</h3>\\n<p>由于第三章会涉及到很多汇编语言，所以先预设好c语言的编译指令\\n<code>gcc -Og -S .\\\\filename</code>这样的</p>\\n<p><code>gcc -c .\\\\filename</code>——编译为目标文件</p>\\n<p><code>objdump -d -s .\\\\filename</code>——反汇编目标文件</p>\\n<h3>一些要点</h3>\\n<ul>\\n<li><code>x86-64</code>指令长度从1到15个字节不等</li>\\n<li>一般情况下，反汇编生成的代码和GCC生成的汇编代码后缀有一个‘q’的差别，一般不影响</li>\\n</ul>","autoDesc":true}`);export{I as comp,V as data};
