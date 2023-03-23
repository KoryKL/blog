import{_ as a,V as e,W as n,a0 as s}from"./framework-91a010c2.js";const r={},i=s(`<h1 id="索引-index" tabindex="-1"><a class="header-anchor" href="#索引-index" aria-hidden="true">#</a> 索引（index）</h1><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>帮助MySQL高效<strong>获取数据</strong>的数据结构（有序）</p><blockquote><p>如果不加索引，会从头到尾全部遍历（可能有多个）</p></blockquote><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>提高数据检索效率、降低数据库的IO成本</li><li>通过索引对数据排序，降低排序的成本、降低CPU的消耗</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>索引列占据空间</li><li>降低更新表的速度（INSERT、UPDATE、DELETE）</li></ul><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h3><ul><li>按「数据结构」分类：<strong>B+tree索引、Hash索引、Full-text索引</strong>。</li><li>按「物理存储」分类：<strong>聚簇索引（主键索引）、二级索引（辅助索引）</strong>。</li><li>按「字段特性」分类：<strong>主键索引、唯一索引、普通索引、前缀索引</strong>。</li><li>按「字段个数」分类：<strong>单列索引、联合索引</strong>。</li></ul><h3 id="索引结构分类" tabindex="-1"><a class="header-anchor" href="#索引结构分类" aria-hidden="true">#</a> 索引结构分类</h3><h4 id="_0⃣️-二叉树索引" tabindex="-1"><a class="header-anchor" href="#_0⃣️-二叉树索引" aria-hidden="true">#</a> 0⃣️ 二叉树索引</h4><p>缺点：顺序插入时，会形成链表，查询性能大大降低</p><blockquote><p>红黑树可解决：自平衡</p></blockquote><p>数据量大时，层级深、检索速度慢</p><blockquote><p>二叉树的弊端</p></blockquote><h4 id="_0⃣️-b树-b-tree多路平衡查找树" tabindex="-1"><a class="header-anchor" href="#_0⃣️-b树-b-tree多路平衡查找树" aria-hidden="true">#</a> 0⃣️ B树（B-Tree多路平衡查找树）</h4><p>以一颗最大度数为5的b树为例</p><p>【每个节点最多存储4个key，5个指针】</p><blockquote><p>因为指针是key之间的范围，所以指针数比key多1</p></blockquote><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230103231159538.png" alt="image-20230103231159538" loading="lazy"></p><p>满员后：</p><p>中间元素向上分裂，其余分成两边</p><h4 id="_1⃣️-b-tree索引" tabindex="-1"><a class="header-anchor" href="#_1⃣️-b-tree索引" aria-hidden="true">#</a> 1⃣️ B+ Tree索引</h4><p><strong>创建的主键索引和二级索引默认使用的是 B+Tree 索引</strong>。</p><blockquote><p>最常见、大部分引擎都支持</p><p>B树的变体</p></blockquote><p>叶子节点才存放数据，非叶子节点只存放索引，而且每个节点里的数据是<strong>按主键顺序存放</strong>的。每一层父节点的索引值都会出现在下层子节点的索引值中</p><p>所有的节点都会出现在叶子结点</p><p>叶子结点之间形成双向链表</p><blockquote><p>与经典B+树相比，MySQL增加了相邻叶子结点之间的指针</p></blockquote><blockquote><p>数据库的索引和数据都是存储在硬盘的，我们可以把读取一个节点当作一次磁盘 I/O 操作。那么上面的整个查询过程一共经历了 3 个节点，也就是进行了 3 次 I/O 操作。</p><p>B+Tree 存储千万级的数据只需要 3-4 层高度就可以满足，这意味着从千万级的表查询目标数据最多需要 3-4 次磁盘 I/O，</p></blockquote><h5 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点：</h5><ul><li>比二叉树层级少，搜索效率高</li><li>对于B树，叶子结点和非叶子结点都会保存，导致一页中存储的键值减少、指针减少，要保存大量数据，只能增加树的高度、降低性能。B+树只在叶子结点存储数据，单个节点的数据量更小，在相同的磁盘 I/O 次数下，就能查询更多的节点。</li><li>B+Tree 叶子节点采用的是双链表连接，适合 MySQL 中常见的基于范围的顺序查找</li></ul><h5 id="主键索引" tabindex="-1"><a class="header-anchor" href="#主键索引" aria-hidden="true">#</a> <strong>主键索引</strong></h5><p>B+Tree 的叶子节点存放的是实际数据，所有完整的用户记录都存放在主键索引的 B+Tree 的叶子节点里；</p><h5 id="二级索引" tabindex="-1"><a class="header-anchor" href="#二级索引" aria-hidden="true">#</a> <strong>二级索引</strong></h5><p>B+Tree 的叶子节点存放的是主键值，而不是实际数据。</p><p>先检二级索引中的 B+Tree 的索引值，找到对应的叶子节点，然后获取主键值。</p><p>然后再通过主键索引中的 B+Tree 树查询到对应的叶子节点，然后获取整行数据。<strong>这个过程叫「回表」，也就是说要查两个 B+Tree 才能查到数据</strong>。</p><p>当查询的数据是能在二级索引的 B+Tree 的叶子节点里查询到，这时就不用再查主键索引查。</p><p><strong>这种在二级索引的 B+Tree 就能查询到结果的过程就叫作「覆盖索引」，也就是只需要查一个 B+Tree 就能找到数据</strong>。</p><blockquote><p>在查询时使用了二级索引，如果查询的数据能在二级索引里查询的到，那么就不需要回表，这个过程就是覆盖索引。如果查询的数据不在二级索引里，就会先检索二级索引，找到对应的叶子节点，获取到主键值后，然后再检索主键索引，就能查询到数据了，这个过程就是回表。</p></blockquote><h4 id="_2⃣️-hash索引" tabindex="-1"><a class="header-anchor" href="#_2⃣️-hash索引" aria-hidden="true">#</a> 2⃣️ Hash索引</h4><p>采用hash算法，将键值换算，映射到对应的槽位上</p><blockquote><p>如果发生冲突，可以采用链表的方式解决</p></blockquote><p>特点：</p><ol><li>只有精确匹配才有效，不支持范围查询</li><li>无法用索引完成排序</li><li>效率高，通常只需要一次检索（除了冲突时）</li></ol><p>存储引擎：</p><p>Memory引擎支持hash索引，InnoDB自适应hash功能</p><h4 id="_3⃣️-r-tree空间索引" tabindex="-1"><a class="header-anchor" href="#_3⃣️-r-tree空间索引" aria-hidden="true">#</a> 3⃣️ R-tree空间索引</h4><p>MyISAM引擎的特殊索引类型，较少用（主要用于地理空间数据类型）</p><h4 id="_4⃣️-full-text全文索引" tabindex="-1"><a class="header-anchor" href="#_4⃣️-full-text全文索引" aria-hidden="true">#</a> 4⃣️ Full-text全文索引</h4><p>建立倒排索引，快速匹配文档</p><h5 id="不同索引在存储引擎中的支持情况" tabindex="-1"><a class="header-anchor" href="#不同索引在存储引擎中的支持情况" aria-hidden="true">#</a> 不同索引在存储引擎中的支持情况</h5><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230103230543882.png" alt="image-20230103230543882" loading="lazy"></p><h3 id="物理存储分类" tabindex="-1"><a class="header-anchor" href="#物理存储分类" aria-hidden="true">#</a> 物理存储分类</h3><blockquote><p>二级索引又称辅助索引</p></blockquote><p><strong>聚集索引｜主键索引</strong>选取规则：</p><ul><li><strong>如果有主键，主键索引就是聚集索引</strong></li><li>如果没有，将会用第一个唯一索引作为聚集索引</li><li>如果都没有，InnoDB会自动生成一个rowid作为隐藏的聚集索引</li></ul><p>id的索引：聚集索引——叶子结点挂的是这一行的数据</p><p>其他字段（name）：二级索引——叶子结点挂的是主键</p><blockquote><p>下面的名称：按照字母先后比大小</p></blockquote><p>回表查询：先走二级索引，拿到主键；再走聚集索引，拿到这一行</p><h3 id="字段特性分类" tabindex="-1"><a class="header-anchor" href="#字段特性分类" aria-hidden="true">#</a> 字段特性分类</h3><h3 id="索引语法" tabindex="-1"><a class="header-anchor" href="#索引语法" aria-hidden="true">#</a> 索引语法</h3><ul><li><h5 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引" aria-hidden="true">#</a> 创建索引</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token punctuation">[</span><span class="token keyword">UNIQUE</span><span class="token operator">|</span>FULLTEXT<span class="token punctuation">]</span> <span class="token keyword">INDEX</span> index_name <span class="token keyword">ON</span> table_name<span class="token punctuation">(</span>index_col_name<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不加 <code>[]</code> ，说明创建的是常规索引</p><p><code>Index_col_name</code> 表示关联的字段</p><p>联合索引：写多个col name</p><blockquote><p>联合索引的col name顺序表示建立索引的先后，即先按照第一列排序，第一列相同则按照第二列排序</p></blockquote></li><li><h5 id="查看索引" tabindex="-1"><a class="header-anchor" href="#查看索引" aria-hidden="true">#</a> 查看索引</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">INDEX</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><h5 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引" aria-hidden="true">#</a> 删除索引</h5><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> index_name <span class="token keyword">ON</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,66),t=[i];function l(o,d){return e(),n("div",null,t)}const h=a(r,[["render",l],["__file","1.介绍.html.vue"]]);export{h as default};
