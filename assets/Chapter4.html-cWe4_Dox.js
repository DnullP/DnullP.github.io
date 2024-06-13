import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,e as l,a as s,b as a}from"./app-DCTCPPGQ.js";const i="/assets/4_1-BuXe5q3D.png",p="/assets/4_5-3a0JqM1u.png",r="/assets/4_6-DWaeBjZT.png",o="/assets/4_3-C_QI_qDm.png",m="/assets/4_4-YIH_9i3e.png",c="/assets/4_7-DuRZeUTN.png",h="/assets/4_9-Dlk4tC3E.png",g="/assets/4_10-Bim0dccG.png",d="/assets/4_8-sYiDwb0l.png",u="/assets/4_11-CtdKvT1j.png",y="/assets/4_12-Sqdk5bkF.png",v="/assets/4_13_1-CIZcvQyF.png",_="/assets/4_13_2-YnSYmmvQ.png",x="/assets/4_13_3-BFmhXvjq.png",b="/assets/4_13_4-C1FicPYc.png",C="/assets/4_13_5-ClzXtzk1.png",f="/assets/4_13_6-CxJ8PpVT.png",z="/assets/4_13_7-Bt1f0H0u.png",k={},P=l('<p>这一章比汇编更底层，关于处理器原理</p><h2 id="y86-64" tabindex="-1"><a class="header-anchor" href="#y86-64"><span>Y86-64</span></a></h2><p>为了简便指令编码，本书提出了一种简化的指令集——Y86</p><p><img src="'+i+'" alt="" loading="lazy">)</p><p>寄存器相比X84少了一个，条件码只有三种</p><p><strong>我们将寄存器集合称为寄存器文件</strong></p><p>本身和X86差别不大，只是有些方面有所简化</p><p>Y86指令集： <img src="'+p+'" alt="" loading="lazy">) <img src="'+r+'" alt="" loading="lazy">)</p><h2 id="逻辑电路" tabindex="-1"><a class="header-anchor" href="#逻辑电路"><span>逻辑电路</span></a></h2><p><strong>HCL</strong>：描述电路的程序语言</p><p><strong>逻辑门</strong>：与或非门，与非门，或非门</p><p><strong>多路复用器</strong>：通过一个s信号控制两个输入a和b的输出结果</p><p><strong>字级组合电路</strong>：小写字母a、b表示单个01，表示位；大写字母A、B表示字级数据，可用int代表</p><p><strong>算术逻辑单元</strong>：ALU，处理器的基本组件之一</p>',14),A=s("p",null,[s("strong",null,"集合关系"),a("：用来控制多路复用器的s信号由code输入决定，Control元件根据不同code得到相同的s，那么这些code归为一个集合，写作"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i"),s("mi",null,"e"),s("mi",null,"x"),s("mi",null,"p"),s("mi",null,"r"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"{"),s("mi",null,"i"),s("mi",null,"e"),s("mi",null,"x"),s("mi",null,"p"),s("msub",null,[s("mi",null,"r"),s("mn",null,"1")]),s("mo",{separator:"true"},","),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",{separator:"true"},","),s("mi",null,"i"),s("mi",null,"e"),s("mi",null,"x"),s("mi",null,"p"),s("mi",null,"r"),s("msub",null,[s("mi",null,"e"),s("mi",null,"k")]),s("mo",{stretchy:"false"},"}")]),s("annotation",{encoding:"application/x-tex"},"iexpr in \\{iexpr_1,...,iexpre_k\\}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"{"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"..."),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},"}")])])])],-1),w=l('<p><img src="'+o+'" alt="" loading="lazy">)</p><p><strong>寄存器</strong>：软件层面的寄存器我们用来表示CPU中可寻址的字，硬件层面我们用来表示一种<strong>时序电路</strong></p><p><strong>时序电路</strong>：之前的输出只与输入有关的电路我们称作组合电路，如果输出与之前的状态有关，那么这种电路称作<strong>时序电路</strong></p><p>通过多路复用器，处理器对寄存器进行选择，将选择结果作为输入给ALU处理</p><p><strong>寄存器文件</strong>：寄存器的集合，可以抽象成一个电路元件，包括读写端和时钟信号</p><p><img src="'+m+'" alt="" loading="lazy">)</p><h2 id="y86指令的顺序" tabindex="-1"><a class="header-anchor" href="#y86指令的顺序"><span>Y86指令的顺序</span></a></h2><p><strong>取指</strong>：获得当前指令，并且根据指令编码计算出指令长度</p><p>下面用书上的例子做说明：</p><p><img src="'+c+'" alt="" loading="lazy">)</p><p>icode和ifun分别是指令的第一个字节的前四位和后四位，用来确定指令的操作</p><p>icode的作用如下：</p><ol><li>判断指令是否合法：由Y86的编码表得知，指令编码最多到0xB，所以大于0xB的指令为非法编码</li><li>判断指令的长度：由icode可以得到指令类型，也就可以得到指令需要的操作数，从而判断指令长度</li></ol><p><img src="'+h+'" alt="" loading="lazy">)</p><p>rA和rB代表了寄存器的编号，通过寄存器的值和icode可以从寄存器文件获得输入信号</p><p><strong>需要icode的原因</strong>：对于push这样的指令来说，虽然只有一个rA操作数，但实际上还需要从寄存器rsp中获得栈的位置，所以需要输入icode，不能只依靠rA和rB来判断</p><p><strong>译码</strong>：译码阶段负责把寄存器中的值取出作为输入</p><p><strong>执行</strong>：根据指令和译码得到的数据，进行规定的运算</p><p><img src="'+g+'" alt="" loading="lazy">)</p><ol><li>首先，icode和ifun通过ALUfun控制ALU对输入进行何种操作</li><li>在完成计算后，ALU会设置条件码CC，但是对于push这种指令中对栈指针的计算不需要设置条件码，所以设置SetCC元件来控制是否设置条件码</li><li>在计算出条件码后，jmp指令会根据ifun和CC，通过Cond组件得到Cnd，用来进行下一步跳转的条件判断</li></ol><p><strong>访存</strong>：如果程序需要将得到的结果写入内存中某个位置，在这个阶段完成</p><p><img src="'+d+'" alt="" loading="lazy">) 比如这个pushq指令，将9写入了栈中新分配的空间，栈空间属于内存部分，所以在访存阶段完成</p><p><strong>写回</strong>：写入内存对应访存阶段，写入寄存器对应写回阶段</p><p><strong>更新PC</strong>：完成指令后更新PC的位置，对于call指令来说会跳到另一个过程</p><h2 id="y86硬件实现逻辑" tabindex="-1"><a class="header-anchor" href="#y86硬件实现逻辑"><span>Y86硬件实现逻辑</span></a></h2><p><img src="'+u+'" alt="" loading="lazy">)</p><ol><li>线路：黑色粗线表示64位长度的数据线，细线表示4或八位的数据线，虚线表示单个位的数据线</li><li>硬件单元：蓝色方框表示硬件单元，可以当作被抽象出来的“黑箱”</li><li>线路标识：线路中的圆圈表示线路的名字和传输的数据</li><li>控制逻辑块：灰色圆角方框表示，用来进行数据的逻辑运算或选择</li><li>时钟寄存器：图中唯一的时钟寄存器——PC</li></ol><p>以上Y86电路的实现称为SEQ 组合电路和指令内存不存在时序（指令内存只存在写操作）</p><p>其余四类硬件元件：程序计数器、条件码寄存器、数据内存、寄存器文件都有时序控制，且都由时间寄存器中的时钟控制，所有的状态更新同步完成</p><p>完成上述功能所需要遵循的原则：</p><ol><li><strong>从不回读</strong>：处理器不需要为了完成一条指令而去读由该指令更新了的状态 比如push指令，需要更新rsp的同时更新栈内存</li></ol><p>其运行时顺序具体可表现如下：</p><p><img src="'+y+'" alt="" loading="lazy">)</p><p>周期3结束后，只有组合电路部分状态改变了，在周期4开始时，时钟信号到达上升沿，才更新时序电路部分的状态</p><h2 id="各个阶段的硬件细节" tabindex="-1"><a class="header-anchor" href="#各个阶段的硬件细节"><span>各个阶段的硬件细节</span></a></h2><h4 id="取指阶段" tabindex="-1"><a class="header-anchor" href="#取指阶段"><span>取指阶段</span></a></h4><p><img src="'+v+'" alt="" loading="lazy">)</p><ol><li>首先PC取出对应的指令地址，输入指令内存</li><li>指令内存不合法时产生imem_error信号，并将icode设置成nop指令，合法时从对应地址取出十个字节，第一个字节和后九个字节分别输入给Split和Align元件</li><li>Split元件按前四位和后四位得到icode和ifun，并判断是否为无效指令</li><li>Align根据icode和ifun得到是否需要rA和rB和ValC，并读取对应的位作为参数</li><li>icode和ifun可以得到操作数的类型和数量，通过NeedvalC和Needregids元件得到对应信号，从而计算出指令长度，用来更新PC的值</li></ol><h4 id="译码和写回阶段" tabindex="-1"><a class="header-anchor" href="#译码和写回阶段"><span>译码和写回阶段</span></a></h4><p><img src="'+_+'" alt="" loading="lazy">)</p><p>译码阶段和写回阶段都是对寄存器的操作</p><p>寄存器文件包括了四个端口，两个读端口（AB）两个写端口（ME），每个端口包含了一个地址线路和一个数据线路，同时地址线路由rArB和icode、Cnd同时控制，用来检测是否需要寄存器之类的</p><h4 id="执行阶段" tabindex="-1"><a class="header-anchor" href="#执行阶段"><span>执行阶段</span></a></h4><p><img src="'+x+'" alt="" loading="lazy">)</p><p>执行阶段的操作数为aluB和aluA</p><p>其中aluA可能为：valA、valC、8、-8 通过输入icode和ifun来判断，并同时判断是否需要设置CC条件码 ALUfun用来决定ALU进行何种运算</p><h4 id="访存阶段" tabindex="-1"><a class="header-anchor" href="#访存阶段"><span>访存阶段</span></a></h4><p><img src="'+b+'" alt="" loading="lazy">) 类似于译码和写回阶段，不再描述</p><h2 id="流水线的基本原理" tabindex="-1"><a class="header-anchor" href="#流水线的基本原理"><span>流水线的基本原理</span></a></h2><p>我们把一条指令的执行分为了六个阶段，如果单独执行一条指令，完成之后执行下一条指令，则需要的时间是每条指令的时间总和</p><p>如果我们按照流水线的思路，把一条指令的执行分成六个部分，一条指令完成一个部分后进入下一个部分，而下一条指令进入当前部分，不同部分用流水线寄存器储存输出，这样就可以在单位时间内完成更多的指令</p><p>单位时间内完成的指令数我们称为<strong>吞吐量</strong>，单位为GIP，这个概念在其他领域也同样存在</p><h4 id="流水线的局限性" tabindex="-1"><a class="header-anchor" href="#流水线的局限性"><span>流水线的局限性</span></a></h4><ol><li><p>流水线把一条指令拆分成部分后，需要保证所有部分的操作都已经完成，然后才能进入下一个阶段。但是我们无法保证每个部分所花耗的时间一样，所以流水线的每次时钟周期由最慢的一个部分决定，这一定程度上减小了流水线的吞吐量</p></li><li><p>如果增加流水线的步骤数量，每个部分之间都需要流水线寄存器来连接，但是流水线寄存器也存在一定的延迟，增加步骤也就增加了流水线寄存器的时间消耗，因为流水线寄存器是一步一步更新而不是同步更新的</p></li><li><p>流水线并不是每条指令都能拆分成对应部分的，有些指令和上下文具有关联性，比如跳转指令，是否跳转要由上一条指令的运算阶段结束后才能知道，所以这条指令就会停留在译码阶段等待上一条指令的结果，并且将结果反馈给它才行，这在某些情况下会拖慢速度，并且需要针对流水线做特殊的条件反馈才行</p></li></ol><h2 id="流水线的实现" tabindex="-1"><a class="header-anchor" href="#流水线的实现"><span>流水线的实现</span></a></h2><p>重新安排SEQ，把计算和更新PC的步骤放到一个周期的最开始，每次通过流水线寄存器传递上一个周期产生的信号，并在新周期的开始计算并更新PC，这样的结构称为<strong>SEQ+</strong></p><p>在每个步骤的主要元件之间加上流水线寄存器，保证每个步骤正在进行的指令相互独立，使用各自对应的流水线寄存器储存的数据，这样的结构称为<strong>PIPE-</strong></p><p><img src="'+C+'" alt="" loading="lazy">)</p><p>图中每个流水线寄存器需要区别，所以使用WMEDF字母作为前缀来区别寄存器和其中的数据信号</p><p><strong>tips:每个信号都需要随着流水线传递到周期的末尾，以保证写回、访存阶段的正确性</strong></p><h3 id="数据冒险" tabindex="-1"><a class="header-anchor" href="#数据冒险"><span>数据冒险</span></a></h3><p>指令之间存在数据的依赖关系，这种情况称为<strong>数据相关</strong> 由于数据相关，导致后面的计算指令在译码阶段无法得到正确的寄存器数据，这样的情况称为<strong>数据冒险</strong></p><p>解决数据冒险的方式由两种：</p><ol><li><p><strong>暂停</strong> 当指令执行到译码阶段，检查需要的寄存器ID和之前的指令中操作的寄存器ID是否相同，如果两者一致，说明之间存在数据相关，需要插入一条暂停指令，称为<strong>气泡(Bubble)</strong></p></li><li><p><strong>数据转发(旁路)</strong> 译码阶段需要的寄存器数据如果使用暂停的方式，必须等到相关的指令完成写回阶段才能继续执行，但是相关的数据一般在E、M阶段就已经得到了结果，所以在E、M阶段加入连接到译码阶段的线路，称为<strong>旁路</strong>，在需要的时候直接从E、M阶段转发数据，就可以减少暂停的时间</p><p>tips：但是如果上一条指令还未执行到M阶段，仍然必须暂停到M阶段后才能转发数据</p></li></ol><h3 id="控制冒险" tabindex="-1"><a class="header-anchor" href="#控制冒险"><span>控制冒险</span></a></h3><p>当执行ret指令时，需要暂停三个时钟周期到访存阶段，读取栈中的跳转地址后，才能知道下一条指令</p><p>在执行jxx指令时，需要检查条件，跳转到不同的指令，但是这里使用<strong>分支预测</strong>会比暂停等待更快一些。这里预测分支的方式是直接假设指令执行跳转，并将跳转的指令加入流水线中，在第一条指令执行到译码阶段时，跳转指令执行到执行阶段，此时如果<strong>预测失误</strong>，就将跳转后的两条指令用气泡填充，在执行阶段之前的两个阶段不会产生程序员可见的改变的，所以这两条指令就可以当作无事发生，而去执行没有跳转的正确指令</p><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理"><span>异常处理</span></a></h3><p>Y86指令集包括三种内部异常：</p><ol><li>halt指令</li><li>有非法指令和功能码组合</li><li>取指或数据试图访问一个非法地址</li></ol><p>这里书上说明几种产生和处理异常的细节：</p><ol><li>指令的处理从深度较深的开始处理，即按照WMEDF的顺序进行处理，报告异常时也是按照这样的顺序报告异常</li><li>如果一个跳转后指令出现了异常，但是指令并不应该跳转到这里，此时需要想办法取消这条指令</li><li>在出现异常后指令不能更新条件码寄存器或数据内存，所以在出现异常后要禁止执行阶段和访存阶段对程序员可见状态进行修改</li></ol><h2 id="pipe各阶段的实现" tabindex="-1"><a class="header-anchor" href="#pipe各阶段的实现"><span>PIPE各阶段的实现</span></a></h2><h3 id="fetch阶段" tabindex="-1"><a class="header-anchor" href="#fetch阶段"><span>Fetch阶段</span></a></h3><p>取指阶段中，需要确定下一条指令的地址，此处分为两种情况：</p><ol><li>顺序执行</li><li>跳转执行</li></ol><p>在顺序执行的情况下，下一条指令的地址可以通过当前指令的地址加上当前指令的长度得到</p><p>在跳转执行的情况下，包括了call指令、ret指令、和jxx指令</p><p>当执行call和ret指令时很容易理解，可以直接将栈中的地址或者跳转的地址作为下一条指令的地址 当执行jxx指令时存在跳转和不跳转两种策略，PC预测逻辑单元会根据情况对跳转进行预测，如果预测错误还有<strong>Select PC</strong>单元进行纠错，从转发的信号和预测的信号中选择正确的跳转情况</p><p><img src="'+f+'" alt="" loading="lazy">)</p><h3 id="decode阶段" tabindex="-1"><a class="header-anchor" href="#decode阶段"><span>Decode阶段</span></a></h3><p>译码阶段可以直接从寄存器文件中读取数据，但是在流水线中的数据可能还没有完成写回的数据，之间存在数据依赖，所以使用转发可以直接从写回阶段的流水线寄存器中读取数据，同样，ALU的输出结果，访存阶段的对于寄存器修改值，都可以作为转发源，这些转发步骤使得<strong>译码阶段</strong>的流水线构造变得更复杂</p><p><img src="'+z+`" alt="" loading="lazy">)</p><p>视频中对<strong>Sel+Fwd A</strong>的讲解具体如下：</p><p>对于call指令、jxx指令并不需要从srcA读取数据，只需要一个操作数就够了，同时，只有这两类指令需要用到valP（执行的下一条指令的地址），所以在这里可以将valP和d_rvalA合并为一个信号，两者只存在其中一个</p><p><strong>对于其他阶段和顺序结构的实现没有太大差别，不进行记录</strong></p><h2 id="流水线控制逻辑" tabindex="-1"><a class="header-anchor" href="#流水线控制逻辑"><span>流水线控制逻辑</span></a></h2><p>在流水线出现特殊情况（如下）时，在流水线中插入气泡和暂停来使程序正常执行</p><h3 id="加载-使用冒险" tabindex="-1"><a class="header-anchor" href="#加载-使用冒险"><span>加载/使用冒险</span></a></h3><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>mrmovq 0(%rdx), %rax
addq %rbx, %rax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当修改一个值与使用一个值的指令相邻时，使用指令处于<strong>译码阶段</strong>时，修改指令还在执行阶段，此时<strong>暂停</strong>译码阶段的指令，向执行阶段中插入<strong>气泡</strong>，等到修改指令在访存阶段将寄存器的值<strong>转发</strong>到译码阶段</p><h3 id="预测错误的条件分支" tabindex="-1"><a class="header-anchor" href="#预测错误的条件分支"><span>预测错误的条件分支</span></a></h3><p>执行阶段完成后，可以检测到条件分支的预测错误，在下一个时钟周期取消已经接收到的两条指令，则需要在<strong>译码</strong>和<strong>执行阶段</strong>加入两个气泡</p><h3 id="ret指令" tabindex="-1"><a class="header-anchor" href="#ret指令"><span>ret指令</span></a></h3><p>ret指令在访存阶段才能得到指令跳转的地址，所以在接下来的三个时钟周期内给<strong>译码阶段</strong>加上气泡即可</p><p>不同的处理器对于流水线的控制逻辑设计有差别，这里只要理解一些简单的控制逻辑即可</p><h3 id="性能评估" tabindex="-1"><a class="header-anchor" href="#性能评估"><span>性能评估</span></a></h3>`,97),Y=s("p",null,[a("CPI - Cyscles Per Instruction（执行一条指令所需周期数） 假设一定时间内执行了"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"C"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"},"C_i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("条指令和"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"C"),s("mi",null,"b")])]),s("annotation",{encoding:"application/x-tex"},"C_b")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"b")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("个气泡")],-1),M=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"C"),s("mi",null,"P"),s("mi",null,"I"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("msub",null,[s("mi",null,"C"),s("mi",null,"i")]),s("mo",null,"+"),s("msub",null,[s("mi",null,"C"),s("mi",null,"b")])]),s("msub",null,[s("mi",null,"C"),s("mi",null,"i")])])]),s("annotation",{encoding:"application/x-tex"}," CPI = \\frac{C_i+C_b}{C_i} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"CP"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1963em","vertical-align":"-0.836em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"b")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.836em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),B=[P,A,w,Y,M];function D(S,L){return n(),e("div",null,B)}const T=t(k,[["render",D],["__file","Chapter4.html.vue"]]),X=JSON.parse(`{"path":"/posts/CS/CSAPP-notes/Chapter4.html","title":"处理器体系结构","lang":"zh-CN","frontmatter":{"date":"2021-01-01T00:00:00.000Z","title":"处理器体系结构","tag":["cpu原理","计算机系统"],"categories":["CSAPP学习笔记"],"mathjax":true,"description":"这一章比汇编更底层，关于处理器原理 Y86-64 为了简便指令编码，本书提出了一种简化的指令集——Y86 ) 寄存器相比X84少了一个，条件码只有三种 我们将寄存器集合称为寄存器文件 本身和X86差别不大，只是有些方面有所简化 Y86指令集： ) ) 逻辑电路 HCL：描述电路的程序语言 逻辑门：与或非门，与非门，或非门 多路复用器：通过一个s信号控制...","head":[["meta",{"property":"og:url","content":"https://Dnullp.github.io/posts/CS/CSAPP-notes/Chapter4.html"}],["meta",{"property":"og:site_name","content":"Dnull's Blog"}],["meta",{"property":"og:title","content":"处理器体系结构"}],["meta",{"property":"og:description","content":"这一章比汇编更底层，关于处理器原理 Y86-64 为了简便指令编码，本书提出了一种简化的指令集——Y86 ) 寄存器相比X84少了一个，条件码只有三种 我们将寄存器集合称为寄存器文件 本身和X86差别不大，只是有些方面有所简化 Y86指令集： ) ) 逻辑电路 HCL：描述电路的程序语言 逻辑门：与或非门，与非门，或非门 多路复用器：通过一个s信号控制..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Dnull"}],["meta",{"property":"article:tag","content":"cpu原理"}],["meta",{"property":"article:tag","content":"计算机系统"}],["meta",{"property":"article:published_time","content":"2021-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"处理器体系结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dnull\\",\\"url\\":\\"https://Dnullp.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Y86-64","slug":"y86-64","link":"#y86-64","children":[]},{"level":2,"title":"逻辑电路","slug":"逻辑电路","link":"#逻辑电路","children":[]},{"level":2,"title":"Y86指令的顺序","slug":"y86指令的顺序","link":"#y86指令的顺序","children":[]},{"level":2,"title":"Y86硬件实现逻辑","slug":"y86硬件实现逻辑","link":"#y86硬件实现逻辑","children":[]},{"level":2,"title":"各个阶段的硬件细节","slug":"各个阶段的硬件细节","link":"#各个阶段的硬件细节","children":[]},{"level":2,"title":"流水线的基本原理","slug":"流水线的基本原理","link":"#流水线的基本原理","children":[]},{"level":2,"title":"流水线的实现","slug":"流水线的实现","link":"#流水线的实现","children":[{"level":3,"title":"数据冒险","slug":"数据冒险","link":"#数据冒险","children":[]},{"level":3,"title":"控制冒险","slug":"控制冒险","link":"#控制冒险","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]}]},{"level":2,"title":"PIPE各阶段的实现","slug":"pipe各阶段的实现","link":"#pipe各阶段的实现","children":[{"level":3,"title":"Fetch阶段","slug":"fetch阶段","link":"#fetch阶段","children":[]},{"level":3,"title":"Decode阶段","slug":"decode阶段","link":"#decode阶段","children":[]}]},{"level":2,"title":"流水线控制逻辑","slug":"流水线控制逻辑","link":"#流水线控制逻辑","children":[{"level":3,"title":"加载/使用冒险","slug":"加载-使用冒险","link":"#加载-使用冒险","children":[]},{"level":3,"title":"预测错误的条件分支","slug":"预测错误的条件分支","link":"#预测错误的条件分支","children":[]},{"level":3,"title":"ret指令","slug":"ret指令","link":"#ret指令","children":[]},{"level":3,"title":"性能评估","slug":"性能评估","link":"#性能评估","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":13.31,"words":3992},"filePathRelative":"posts/CS/CSAPP-notes/Chapter4.md","localizedDate":"2021年1月1日","excerpt":"<p>这一章比汇编更底层，关于处理器原理</p>\\n<h2>Y86-64</h2>\\n<p>为了简便指令编码，本书提出了一种简化的指令集——Y86</p>\\n<p>)</p>\\n<p>寄存器相比X84少了一个，条件码只有三种</p>\\n<p><strong>我们将寄存器集合称为寄存器文件</strong></p>\\n<p>本身和X86差别不大，只是有些方面有所简化</p>\\n<p>Y86指令集：\\n)\\n)</p>\\n<h2>逻辑电路</h2>\\n<p><strong>HCL</strong>：描述电路的程序语言</p>\\n<p><strong>逻辑门</strong>：与或非门，与非门，或非门</p>\\n<p><strong>多路复用器</strong>：通过一个s信号控制两个输入a和b的输出结果</p>","autoDesc":true}`);export{T as comp,X as data};
