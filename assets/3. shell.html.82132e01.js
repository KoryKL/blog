import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as e,f as n}from"./app.b2eb5079.js";const l={},i=n(`<h1 id="_3-shell-编程" tabindex="-1"><a class="header-anchor" href="#_3-shell-编程" aria-hidden="true">#</a> 3. Shell 编程</h1><p>（Linux课讲的是系统编程不是shell）</p><h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h3><ol><li>#是注释</li></ol><p>shell脚本的第一行</p><p>文件的前16个bit（前两个字节/英文字符）是magic number，</p><p>来说明是啥，然后用后面的东西解释（sh可以ls也可以，都行，但是能做的内容不一样多）</p><blockquote><p>”符号链接“待会讲</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ll是alias：ls -l</p><p>执行方法：</p><ul><li><p>sh 名字</p></li><li><p>Chmod -x 增加可执行权限</p></li></ul><p>脚本语言里面，变量基本上不需要声明类型，直接=赋值即可</p><p>shell里面变量只有一种类型，就是字符串</p><p>shell里面变量名称喜欢全大写，</p><p>连续的字符串可以 省略引号，但是如果有括号，就必须要单引号、双引号</p><p>变量引用，就是在变量名前面+$符号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$HELLO</span>
<span class="token variable">\${HELLO}</span>
<span class="token variable">\${HELLO<span class="token operator">:</span>3<span class="token operator">:</span>4}</span> <span class="token comment">#完整版，取3到4</span>
<span class="token variable">\${HELLO<span class="token operator">:</span><span class="token operator">:</span>4}</span> <span class="token comment">#可以随意缺省部分</span>
<span class="token variable">\${HELLO<span class="token operator">:</span>3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特殊变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$#</span> <span class="token comment">#传入的参数个数</span>
<span class="token variable">$0</span> <span class="token comment">#sh脚本的名</span>
<span class="token variable">$1</span> <span class="token comment">#就是输入的第一个参数</span>
<span class="token variable">$?</span> <span class="token comment">#The status of last CMD上一个命令的返回值（成功是0，失败是1等）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串（变量值）拼接，直接echo后面变量挨着写即可</p><p>变量默认值（常用于取不一定设置的环境变量时）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">\${COLOR<span class="token operator">:-</span>green}</span> <span class="token comment">#无的时候用-后面替换</span>
<span class="token variable">\${COLOR<span class="token operator">:=</span>green}</span> <span class="token comment">#无的时候用=后面替换，且将这个变量赋值，如果有则不赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>env是set的子集</p><p>ps看进程</p><p>export可以把set里面的变量升级为环境变量</p><p>环境变量：可以通过父进程传递给子进程的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>.:<span class="token environment constant">$PATH</span> <span class="token comment">#就是加上这个&quot;.&quot;#当前目录</span>
恢复的话就是，<span class="token environment constant">PATH</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span><span class="token operator">:</span>2}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>su命令只切换目录，但是不切换环境；su -就可以同时切换到目标用户的环境</p><p>有空格分割的话，for each的时候就相当于数组</p><h3 id="条件测试" tabindex="-1"><a class="header-anchor" href="#条件测试" aria-hidden="true">#</a> 条件测试</h3><p>分支</p><p>测试工具主要就是$?</p><p>其实就是在运行一些命令（实际上并不是在变成）</p><p>0-255，只用了8个bit</p><p>shell里面0是真，其他都是假（与C相反）</p><p>权限测试语句</p><ul><li>test -w 文件名，测试他的执行权限</li><li><code>[ -w a.c ]</code>方括号语法，注意空格一个都不能差，不然报错</li></ul><p>字符串测试</p><ul><li>!=</li><li>=</li></ul><p>数字测试</p><ul><li>gt</li><li>lt</li><li>ne</li><li>eq</li></ul><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h2><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> foreach</h3><p>命令替换：</p><ul><li>\`ls\`</li><li>$(ls)</li></ul><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><h3 id="while-until-loop" tabindex="-1"><a class="header-anchor" href="#while-until-loop" aria-hidden="true">#</a> while &amp; until loop</h3><p>执行数学运算$((1+1))</p><p>if</p><p>case</p><h2 id="i-o" tabindex="-1"><a class="header-anchor" href="#i-o" aria-hidden="true">#</a> I/O</h2><p>echo</p><p>read，读取用户输入的字符</p><p>tee 可以把命令的流分成两叉，常用在既把输出到文件又输出他</p><p>&#39; &#39;只是当做字符串</p><p>&quot; &quot;可以转义里面的变量或者公式进行输出</p><p>\` \`命令替换</p><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>想要获取输入的参数就用，$1, $2等</p><p>返回值，在0-255之间，但是</p><p>include：.</p>`,62),p=[i];function r(o,t){return s(),e("div",null,p)}const h=a(l,[["render",r],["__file","3. shell.html.vue"]]);export{h as default};
