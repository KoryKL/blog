import{_ as a,V as n,W as i,a0 as s}from"./framework-91a010c2.js";const e={},t=s(`<h1 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h1><h5 id="紧密结构-顺序结构" tabindex="-1"><a class="header-anchor" href="#紧密结构-顺序结构" aria-hidden="true">#</a> 紧密结构（顺序结构）</h5><p>数组</p><h5 id="跳转结构-链式结构" tabindex="-1"><a class="header-anchor" href="#跳转结构-链式结构" aria-hidden="true">#</a> 跳转结构（链式结构）</h5><p>链表</p><p>针对数组的缺点，引入集合</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-21 19.24.04.png" alt="截屏2022-07-21 19.24.04" loading="lazy"></p><p>不同集合底层数据结构不一样</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220721210849434.png" alt="image-20220721210849434" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220721212737660.png" alt="image-20220721212737660" loading="lazy"></p><p>接口不能创建对象，利用实现类创建对象</p><p>如：</p><h5 id="接口-实现类【写在方法里面】" tabindex="-1"><a class="header-anchor" href="#接口-实现类【写在方法里面】" aria-hidden="true">#</a> 接口 = 实现类【写在方法里面】</h5><p><code>List list = new ArrayList();</code></p><p>拓展性好</p><p>集合只能存放引用数据类型的数据【但是可以放多种】，不能是基本数据类型</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//遍历collection接口两种方式</span>
<span class="token comment">//1.增强for循环</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> col<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">sout</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//2.迭代器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h4><p>不使用泛型的话，可能会在集合中错误录入不一样的数据类型</p><p>泛型相当于标签</p><p>泛型的类型都是引用数据类型</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220722173021918.png" alt="image-20220722173021918" loading="lazy"></p><p>优点：编译时期就会对类型检查</p><h5 id="自定义泛型结构" tabindex="-1"><a class="header-anchor" href="#自定义泛型结构" aria-hidden="true">#</a> 自定义泛型结构</h5><p>泛型类</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220724121016131.png" alt="" loading="lazy"></p><p>泛型类的静态方法，不能使用类的泛型</p><p>泛型接口</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220724234518332.png" alt="image-20220724234518332" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220724234752790.png" alt="image-20220724234752790" loading="lazy"></p><h5 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h5><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-25 15.18.47.png" alt="截屏2022-07-25 15.18.47" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-25 15.24.53.png" alt="截屏2022-07-25 15.24.53" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220725152544679.png" alt="image-20220725152544679" loading="lazy"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220725153707367.png" alt="image-20220725153707367" loading="lazy"></p><h4 id="linkedlist" tabindex="-1"><a class="header-anchor" href="#linkedlist" aria-hidden="true">#</a> LinkedList</h4><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/截屏2022-07-28 15.38.36.png" alt="截屏2022-07-28 15.38.36" loading="lazy"></p><p>每一个元素都被封装成对象</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220728225519042.png" alt="image-20220728225519042" loading="lazy"></p><p>其中遍历方法迭代器：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220728225808722.png" alt="image-20220728225808722" loading="lazy"></p><h5 id="iterable接口-iterator-方法-返回值iterator" tabindex="-1"><a class="header-anchor" href="#iterable接口-iterator-方法-返回值iterator" aria-hidden="true">#</a> Iterable接口，iterator()方法，返回值Iterator</h5><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220728230323444.png" alt="image-20220728230323444" loading="lazy"></p><h4 id="hashset" tabindex="-1"><a class="header-anchor" href="#hashset" aria-hidden="true">#</a> HashSet</h4><p>唯一、无序</p><p>但是自定义的类型并不满足唯一的特点</p><p>放入这个集合的数据对应的类，必须重写hashCode方法和quals方法</p><h5 id="实现类" tabindex="-1"><a class="header-anchor" href="#实现类" aria-hidden="true">#</a> 实现类</h5><p>LinkedHashSet：在HashSet基础上，多了一个总的链表；将放入的元素串在一起，方便有序遍历</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220729184104064.png" alt="image-20220729184104064" loading="lazy"></p><h4 id="hashmap" tabindex="-1"><a class="header-anchor" href="#hashmap" aria-hidden="true">#</a> HashMap</h4><p>LinkedHashMap按照输入的顺序输出</p>`,52),p=[t];function c(h,o){return n(),i("div",null,p)}const d=a(e,[["render",c],["__file","11 集合.html.vue"]]);export{d as default};
