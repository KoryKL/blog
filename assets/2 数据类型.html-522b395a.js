import{_ as a,V as n,W as s,a0 as p}from"./framework-91a010c2.js";const e={},i=p(`<h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1><ol><li><h4 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h4></li></ol><p>标识符（名称）：包、类、方法、变量</p><p>类名：首字母大写，其余驼峰命名</p><p>方法名、变量名：首字母小写，其余驼峰</p><p>包名：全部小写，不驼峰</p><ol start="2"><li><h4 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h4><p>特殊含义、专门用途的单词</p></li><li><h4 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h4></li></ol><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220705171443534.png" alt="image-20220705171443534" loading="lazy"></p><ol start="4"><li><h4 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h4></li></ol><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220705171616417.png" alt="image-20220705171616417" loading="lazy"></p><p>作用范围：最近的{}，声明之后的部分</p><p>定义在方法内的变量：局部变量</p><p>定义在类中、方法外的：成员变量</p><ol start="5"><li><h4 id="数据类型-1" tabindex="-1"><a class="header-anchor" href="#数据类型-1" aria-hidden="true">#</a> 数据类型</h4></li></ol><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220705191441826.png" alt="image-20220705191441826" loading="lazy"></p><h5 id="_1整数类型常量-进制" tabindex="-1"><a class="header-anchor" href="#_1整数类型常量-进制" aria-hidden="true">#</a> 1整数类型常量：进制</h5><p>进制转换</p><p>小进制转大进制 =&gt; 乘法</p><p>大转小 =&gt; 除法</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230110123133307.png" alt="image-20230110123133307" loading="lazy"></p><p>【2】十进制13转换为2进制</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230110123147252.png" alt="image-20230110123147252" loading="lazy"></p><blockquote><p>进制转换，中间用10进制做桥梁</p><p>程序员计算器内置进制转换</p></blockquote><h5 id="_2整数类型变量" tabindex="-1"><a class="header-anchor" href="#_2整数类型变量" aria-hidden="true">#</a> 2整数类型变量</h5><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220705192950950.png" alt="image-20220705192950950" loading="lazy"></p><p>1字节 = 2进制的8位</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220705193323650.png" alt="image-20220705193323650" loading="lazy"></p><p>第一位是存符号的，0是正数，1是负数</p><p>值默认都是int，要用long的办法</p><p>（这个值超出了int的范围才需要加L，否则不用也可以赋值给long）</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220705202337080.png" alt="image-20220705202337080" loading="lazy"></p><h5 id="_3浮点类型常量" tabindex="-1"><a class="header-anchor" href="#_3浮点类型常量" aria-hidden="true">#</a> 3浮点类型常量</h5><p>小数、科学技术法（314e2/ 314e-2）</p><h5 id="_4浮点类型变量" tabindex="-1"><a class="header-anchor" href="#_4浮点类型变量" aria-hidden="true">#</a> 4浮点类型变量</h5><p>浮点型默认是double类型</p><p>后面加f/F才能变成float</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220705224833984.png" alt="image-20220705224833984" loading="lazy"></p><p>有效数字：第一个不为0的数到最后一位</p><p>符号、指数、底数单独存</p><p>最好不要进行浮点类型的比较</p><h5 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h5><p>解码是编码的逆过程</p><p>编码表/字符集（暗号）</p><p>asc码等 unicode</p><p>8位 一个字节</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220705232038147.png" alt="image-20220705232038147" loading="lazy"></p><p>utf标准</p><p>UTF-8</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230110123244542.png" alt="image-20230110123244542" loading="lazy"></p><h5 id="字符" tabindex="-1"><a class="header-anchor" href="#字符" aria-hidden="true">#</a> 字符</h5><p>单引号引起来的叫字符</p><p>字符占两个字节</p><p>java中的char是utf-16类型</p><p>转义字符</p><p>\\n</p><blockquote><p>char类型显示的样子是和字面常量一样，但是<strong>底层计算的时候，是按照ASC｜｜码进行计算的</strong></p><p>但是char类型是按照unicode码表存储的</p><p>（unicode兼容阿斯克码）</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230110123315081.png" alt="image-20230110123315081" loading="lazy"></p></blockquote><p>字形和码之间的转换很神奇</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220706160755132.png" alt="image-20220706160755132" loading="lazy"></p><p>![image-20220706160806136](/Users/apple/Library/Application Support/typora-user-images/image-20220706160806136.png)</p><blockquote><p>编码格式和jdk不一样的话，可能会乱码</p><p>记事本编码可以设置以ANSI格式编码，可以获取当前操作系统的编码格式</p></blockquote><h5 id="布尔类型变量" tabindex="-1"><a class="header-anchor" href="#布尔类型变量" aria-hidden="true">#</a> 布尔类型变量</h5><p>一般取名叫flag，只有两面</p><p>布尔类型占1位</p><p>=ture/false</p><p>⬆️不能用0，1等数字代替</p><h5 id="基本数据类型的转换" tabindex="-1"><a class="header-anchor" href="#基本数据类型的转换" aria-hidden="true">#</a> 基本数据类型的转换</h5><p>int占4字节，double占8字节</p><p>所以double自动转int会报错</p><p>如int i = 6.5</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220706184743764.png" alt="image-20220706184743764" loading="lazy"></p><p>强转要加括号</p><p>多种数据类型参与运算的时候，只用布尔类型不能参与运算</p><p>转化为级别最高的类型运算</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220706185552322.png" alt="image-20220706185552322" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220706190000172.png" alt="image-20220706190000172" loading="lazy"></p><p>对于byte，short，char类型，只要在他们的表数范围内，就不用强转，直接赋值即可。</p><p>如果一个变量被final修饰，这个变量就变成了常量（字符常量）</p><p><em>字符常量的命名需要全部大写</em></p><h5 id="scanner" tabindex="-1"><a class="header-anchor" href="#scanner" aria-hidden="true">#</a> Scanner</h5><p>使用扫描器</p><p><code>Scanner sc = new Scanner(System.in);</code></p><p>用扫描器录入int类型的数据</p><p><code>int a = sc.nextInt();</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入年龄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> age <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 如果接受char类型</span>
<span class="token keyword">char</span> sex <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">chartAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输入的东西的第0号位</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,84),t=[i];function c(o,l){return n(),s("div",null,t)}const u=a(e,[["render",c],["__file","2 数据类型.html.vue"]]);export{u as default};
