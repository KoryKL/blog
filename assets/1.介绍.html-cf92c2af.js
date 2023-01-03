import{_ as e,V as a,W as h,a0 as r}from"./framework-91a010c2.js";const i={},t=r('<h1 id="索引-index" tabindex="-1"><a class="header-anchor" href="#索引-index" aria-hidden="true">#</a> 索引（index）</h1><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>帮助MySQL高效<strong>获取数据</strong>的数据结构（有序）</p><blockquote><p>如果不加索引，会从头到尾全部遍历（可能有多个）</p></blockquote><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>提高数据检索效率、降低数据库的IO成本</li><li>通过索引对数据排序，降低排序的成本、降低CPU的消耗</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>索引列占据空间</li><li>降低更新表的速度（INSERT、UPDATE、DELETE）</li></ul><h3 id="索引结构分类" tabindex="-1"><a class="header-anchor" href="#索引结构分类" aria-hidden="true">#</a> 索引结构分类</h3><h4 id="_0⃣️-二叉树索引" tabindex="-1"><a class="header-anchor" href="#_0⃣️-二叉树索引" aria-hidden="true">#</a> 0⃣️ 二叉树索引</h4><p>缺点：顺序插入时，会形成链表，查询性能大大降低</p><blockquote><p>红黑树可解决：自平衡</p></blockquote><p>数据量大时，层级深、检索速度慢</p><blockquote><p>二叉树的弊端</p></blockquote><h4 id="_0⃣️-b树-b-tree多路平衡查找树" tabindex="-1"><a class="header-anchor" href="#_0⃣️-b树-b-tree多路平衡查找树" aria-hidden="true">#</a> 0⃣️ B树（B-Tree多路平衡查找树）</h4><p>以一颗最大度数为5的b树为例</p><p>【每个节点最多存储4个key，5个指针】</p><blockquote><p>因为指针是key之间的范围，所以指针数比key多1</p></blockquote><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230103231159538.png" alt="image-20230103231159538" loading="lazy"></p><p>满员后：</p><p>中间元素向上分裂，其余分成两边</p><h4 id="_1⃣️-b-tree索引" tabindex="-1"><a class="header-anchor" href="#_1⃣️-b-tree索引" aria-hidden="true">#</a> 1⃣️ B+ Tree索引</h4><p>最常见、大部分引擎都支持</p><h4 id="_2⃣️-hash索引" tabindex="-1"><a class="header-anchor" href="#_2⃣️-hash索引" aria-hidden="true">#</a> 2⃣️ Hash索引</h4><p>底层数据结构用哈希表实现，只有精确匹配才有效，不支持范围查询</p><h4 id="_3⃣️-r-tree空间索引" tabindex="-1"><a class="header-anchor" href="#_3⃣️-r-tree空间索引" aria-hidden="true">#</a> 3⃣️ R-tree空间索引</h4><p>MyISAM引擎的特殊索引类型，较少用（主要用于地理空间数据类型）</p><h4 id="_4⃣️-full-text全文索引" tabindex="-1"><a class="header-anchor" href="#_4⃣️-full-text全文索引" aria-hidden="true">#</a> 4⃣️ Full-text全文索引</h4><p>建立倒排索引，快速匹配文档</p><h5 id="不同索引在存储引擎中的支持情况" tabindex="-1"><a class="header-anchor" href="#不同索引在存储引擎中的支持情况" aria-hidden="true">#</a> 不同索引在存储引擎中的支持情况</h5><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230103230543882.png" alt="image-20230103230543882" loading="lazy"></p>',31),d=[t];function n(c,l){return a(),h("div",null,d)}const s=e(i,[["render",n],["__file","1.介绍.html.vue"]]);export{s as default};
