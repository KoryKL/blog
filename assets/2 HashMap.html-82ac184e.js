const e=JSON.parse(`{"key":"v-58269c63","path":"/se/BackEnd/%F0%9F%8C%9F%20java%E9%9B%86%E5%90%88/1%20%E5%9F%BA%E7%A1%80/2%20HashMap.html","title":"HashMap","lang":"en-US","frontmatter":{"description":"HashMap 高频面试题 1⃣️ 底层数据结构？ 1.7 数组 + 链表 数组和链表 结合在一起使用也就是 链表散列。 “拉链法” 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。 1.8 数组 + 链表 ｜ 红黑树 （根据数据量多少而转换） 当链表长度大于阈值（默认为 8）时，会首先调用 treeifyBin()方法。这个方法会根据 HashMap 数组来决定是否转换为红黑树。只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。否则，就是只是执行 resize() 方法对数组扩容。","head":[["meta",{"property":"og:url","content":"https://korykl.github.io/blog/blog/se/BackEnd/%F0%9F%8C%9F%20java%E9%9B%86%E5%90%88/1%20%E5%9F%BA%E7%A1%80/2%20HashMap.html"}],["meta",{"property":"og:site_name","content":"Kory's Blog"}],["meta",{"property":"og:title","content":"HashMap"}],["meta",{"property":"og:description","content":"HashMap 高频面试题 1⃣️ 底层数据结构？ 1.7 数组 + 链表 数组和链表 结合在一起使用也就是 链表散列。 “拉链法” 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。 1.8 数组 + 链表 ｜ 红黑树 （根据数据量多少而转换） 当链表长度大于阈值（默认为 8）时，会首先调用 treeifyBin()方法。这个方法会根据 HashMap 数组来决定是否转换为红黑树。只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。否则，就是只是执行 resize() 方法对数组扩容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-26T09:43:18.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-26T09:43:18.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://korykl.github.io/blog/blog/zh/se/BackEnd/%F0%9F%8C%9F%20java%E9%9B%86%E5%90%88/1%20%E5%9F%BA%E7%A1%80/2%20HashMap.html"}]]},"headers":[{"level":2,"title":"高频面试题","slug":"高频面试题","link":"#高频面试题","children":[{"level":3,"title":"1⃣️ 底层数据结构？","slug":"_1⃣️-底层数据结构","link":"#_1⃣️-底层数据结构","children":[]},{"level":3,"title":"2⃣️ 为什么红黑树？为什么一上来不树化，要转化？为什么阈值是8？什么时候树化，什么时候退化成链表？","slug":"_2⃣️-为什么红黑树-为什么一上来不树化-要转化-为什么阈值是8-什么时候树化-什么时候退化成链表","link":"#_2⃣️-为什么红黑树-为什么一上来不树化-要转化-为什么阈值是8-什么时候树化-什么时候退化成链表","children":[]},{"level":3,"title":"3⃣️ 索引计算方法？有hashcode，为什么要提供hash()方法？数组容量为什么是2的n次幂？","slug":"_3⃣️-索引计算方法-有hashcode-为什么要提供hash-方法-数组容量为什么是2的n次幂","link":"#_3⃣️-索引计算方法-有hashcode-为什么要提供hash-方法-数组容量为什么是2的n次幂","children":[]},{"level":3,"title":"4⃣️ put方法流程，1.7，1.8版本的差异？","slug":"_4⃣️-put方法流程-1-7-1-8版本的差异","link":"#_4⃣️-put方法流程-1-7-1-8版本的差异","children":[]},{"level":3,"title":"5⃣️ 加载因子 / 扩容因子 为什么默认是0.75f？","slug":"_5⃣️-加载因子-扩容因子-为什么默认是0-75f","link":"#_5⃣️-加载因子-扩容因子-为什么默认是0-75f","children":[]},{"level":3,"title":"6⃣️ 多线程可能出现的问题？","slug":"_6⃣️-多线程可能出现的问题","link":"#_6⃣️-多线程可能出现的问题","children":[]},{"level":3,"title":"7⃣️ put方法","slug":"_7⃣️-put方法","link":"#_7⃣️-put方法","children":[]},{"level":3,"title":"8⃣️ String对象的hashCode()如何设计？为什么每次乘31？","slug":"_8⃣️-string对象的hashcode-如何设计-为什么每次乘31","link":"#_8⃣️-string对象的hashcode-如何设计-为什么每次乘31","children":[]}]}],"git":{"createdTime":1675481863000,"updatedTime":1682502198000,"contributors":[{"name":"KoryKL","email":"1274994508@qq.com","commits":3}]},"readingTime":{"minutes":2.57,"words":770},"localizedDate":"February 4, 2023","filePathRelative":"se/BackEnd/🌟 java集合/1 基础/2 HashMap.md","excerpt":"<h1> HashMap</h1>\\n<h2> 高频面试题</h2>\\n<h3> 1⃣️ 底层数据结构？</h3>\\n<p>1.7 数组 + 链表</p>\\n<p><strong>数组和链表</strong> 结合在一起使用也就是 <strong>链表散列</strong>。</p>\\n<p><strong>“拉链法”</strong> 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。</p>\\n<p>1.8 数组 + 链表 ｜ 红黑树 （根据数据量多少而转换）</p>\\n<p>当链表长度大于阈值（默认为 8）时，会首先调用 <code>treeifyBin()</code>方法。这个方法会根据 HashMap 数组来决定是否转换为红黑树。只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。否则，就是只是执行 <code>resize()</code> 方法对数组扩容。</p>","autoDesc":true}`);export{e as data};