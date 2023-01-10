import{_ as a,V as p,W as e,a0 as i}from"./framework-91a010c2.js";const t={},h=i('<h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1><h5 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> +</h5><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707111422307.png" alt="image-20220707111422307" loading="lazy"></p><p>+两侧任意一侧有字符串，那么就是字符串拼接</p><p>sout的作用：将双引号内的东西输出</p><p>字符串和字符直接和在一起，不用通过底层运算</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707112808859.png" alt="image-20220707112808859" loading="lazy"></p><h5 id="自增" tabindex="-1"><a class="header-anchor" href="#自增" aria-hidden="true">#</a> ++自增</h5><blockquote><p>++的优先级高于 +</p></blockquote><p>单独使用时都一样</p><p>用了++的变量，本身就是+1</p><p>但是，位置不一样时，影响整体运算结果</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707114210402.png" alt="image-20220707114210402" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707115419713.png" alt="image-20220707115419713" loading="lazy"></p><h4 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符 =</h4><p>右边的数给左边</p><blockquote><p>交换数字：</p><p>法1 引入中间变量</p><p>法2 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707121509549.png" alt="image-20220707121509549" loading="lazy"></p></blockquote><blockquote><p>法3 直接打印的时候交换</p></blockquote><p>a+b 未必等于 b + a</p><p>当两者为string类型</p><h5 id="a-b" tabindex="-1"><a class="header-anchor" href="#a-b" aria-hidden="true">#</a> a+=b</h5><p>不用考虑类型，底层自动类型转换</p><p>a = a + b</p><p>考虑字符类型，有时需要强转换a = （byte）a + b</p><h4 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h4><p>&lt; &gt; = !=</p><p>结果只有布尔值</p><h4 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h4><p>&amp; 逻辑与</p><p>&amp;&amp; 短路与，效率更高</p><p>如果第一个是false，就不会算第二个</p><blockquote><p>只要有一个false就是false</p></blockquote><p>| 或</p><p>||短路或，同上</p><blockquote><p>仅当两个false时，为false</p></blockquote><p>!非</p><p>^异或</p><p>两个值不一样，true</p><p>两个值一样，false</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707152852634.png" alt="image-20220707152852634" loading="lazy"></p><h4 id="条件运算符-三元运算符" tabindex="-1"><a class="header-anchor" href="#条件运算符-三元运算符" aria-hidden="true">#</a> 条件运算符（三元运算符）</h4><p>a ? b : c</p><p>a是布尔类型表达式，返回结果要么t要么f</p><p>如果a结果ture，结果为b</p><p>false，结果为c</p><h4 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h4><p>左右连接具体数值</p><p><strong>&amp;</strong></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707220119460.png" alt="image-20220707220119460" loading="lazy"></p><p><strong>｜</strong></p><p>同上，不过是有一个1就是1</p><p><strong>^</strong></p><p>异或</p><p>相同为0，不同为1【其实是一种无进位相加】</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220808223110099.png" alt="image-20220808223110099" loading="lazy"></p><blockquote><p>N ^ 0 = N</p><p>N ^ N = 0</p></blockquote><p><strong>~</strong></p><p>反</p><p>单目，连接一个数</p><h5 id="有符号右移" tabindex="-1"><a class="header-anchor" href="#有符号右移" aria-hidden="true">#</a> &quot;&gt;&gt;&quot;有符号右移</h5><p>除法</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707214942522.png" alt="image-20220707214942522" loading="lazy"></p><p>结果是1</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707215417824.png" alt="image-20220707215417824" loading="lazy"></p><p>![image-20220707215526367](/Users/apple/Library/Application Support/typora-user-images/image-20220707215526367.png)</p><p>然后要求出这个数的十进制数：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220707215716848.png" alt="image-20220707215716848" loading="lazy"></p><h5 id="无符号右移" tabindex="-1"><a class="header-anchor" href="#无符号右移" aria-hidden="true">#</a> &quot;&gt;&gt;&gt;&quot;无符号右移</h5><p>前面就是补00</p><h5 id="化为二进制-左移动" tabindex="-1"><a class="header-anchor" href="#化为二进制-左移动" aria-hidden="true">#</a> &lt;&lt; 化为二进制，左移动</h5><p>乘法</p><p>很巧妙，如：4乘8最快的方式，让4 &lt;&lt; 3</p><blockquote><p>求正数 +1 取反 得到相反数</p><p>求负数 -1 取反 得到相反数</p></blockquote><h4 id="运算符的优先级" tabindex="-1"><a class="header-anchor" href="#运算符的优先级" aria-hidden="true">#</a> 运算符的优先级</h4><p>单目（非）&gt; 算术 &gt; 关系 &gt; 逻辑 &gt; 三目 &gt; 赋值</p>',75),n=[h];function o(c,g){return p(),e("div",null,n)}const s=a(t,[["render",o],["__file","3 运算符.html.vue"]]);export{s as default};
