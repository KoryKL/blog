const e=JSON.parse(`{"key":"v-4c062396","path":"/cs/database/mysql/%F0%9F%93%93%201%20%E4%BA%8B%E5%8A%A1/3.%E5%B9%B6%E5%8F%91.html","title":"并发","lang":"en-US","frontmatter":{"description":"并发 并发引发的问题 1⃣️ 脏读 一个事务读取到另一个未提交事务修改的数据 因为这个修改数据的事务还没提交，可能发生回滚。如果回滚，读取数据的事务得到的就是过期数据。 2⃣️ 不可重复读 一个事务内多次读取同一条记录，但是两次读取的数据不同 例如：一个事务查询两次，另一个事务在中间的时候update 3⃣️ 幻读 一个事务按照条件查询数据时，没有对应的数据行，但是插入时已经存在","head":[["meta",{"property":"og:url","content":"https://korykl.github.io/blog/blog/cs/database/mysql/%F0%9F%93%93%201%20%E4%BA%8B%E5%8A%A1/3.%E5%B9%B6%E5%8F%91.html"}],["meta",{"property":"og:site_name","content":"Kory's Blog"}],["meta",{"property":"og:title","content":"并发"}],["meta",{"property":"og:description","content":"并发 并发引发的问题 1⃣️ 脏读 一个事务读取到另一个未提交事务修改的数据 因为这个修改数据的事务还没提交，可能发生回滚。如果回滚，读取数据的事务得到的就是过期数据。 2⃣️ 不可重复读 一个事务内多次读取同一条记录，但是两次读取的数据不同 例如：一个事务查询两次，另一个事务在中间的时候update 3⃣️ 幻读 一个事务按照条件查询数据时，没有对应的数据行，但是插入时已经存在"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-06T03:21:04.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-06T03:21:04.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://korykl.github.io/blog/blog/zh/cs/database/mysql/%F0%9F%93%93%201%20%E4%BA%8B%E5%8A%A1/3.%E5%B9%B6%E5%8F%91.html"}]]},"headers":[{"level":2,"title":"并发引发的问题","slug":"并发引发的问题","link":"#并发引发的问题","children":[{"level":3,"title":"1⃣️ 脏读","slug":"_1⃣️-脏读","link":"#_1⃣️-脏读","children":[]},{"level":3,"title":"2⃣️ 不可重复读","slug":"_2⃣️-不可重复读","link":"#_2⃣️-不可重复读","children":[]},{"level":3,"title":"3⃣️ 幻读","slug":"_3⃣️-幻读","link":"#_3⃣️-幻读","children":[]}]},{"level":2,"title":"事务隔离级别","slug":"事务隔离级别","link":"#事务隔离级别","children":[{"level":3,"title":"隔离级别的实现","slug":"隔离级别的实现","link":"#隔离级别的实现","children":[]}]},{"level":2,"title":"在MVCC的工作？","slug":"在mvcc的工作","link":"#在mvcc的工作","children":[{"level":3,"title":"ReadView重要字段","slug":"readview重要字段","link":"#readview重要字段","children":[]},{"level":3,"title":"聚簇索引的两个隐藏列","slug":"聚簇索引的两个隐藏列","link":"#聚簇索引的两个隐藏列","children":[]}]},{"level":2,"title":"MVCC","slug":"mvcc","link":"#mvcc","children":[{"level":3,"title":"可重复读","slug":"可重复读","link":"#可重复读","children":[]},{"level":3,"title":"读提交","slug":"读提交","link":"#读提交","children":[]}]},{"level":2,"title":"可重复读不能解决幻读的情况","slug":"可重复读不能解决幻读的情况","link":"#可重复读不能解决幻读的情况","children":[{"level":3,"title":"可以解决的原理","slug":"可以解决的原理","link":"#可以解决的原理","children":[]},{"level":3,"title":"不能的情况","slug":"不能的情况","link":"#不能的情况","children":[]}]}],"git":{"createdTime":1672758980000,"updatedTime":1680751264000,"contributors":[{"name":"KoryKL","email":"1274994508@qq.com","commits":3}]},"readingTime":{"minutes":7.36,"words":2208},"localizedDate":"January 3, 2023","filePathRelative":"cs/database/mysql/📓 1 事务/3.并发.md","excerpt":"<h1> 并发</h1>\\n<h2> 并发引发的问题</h2>\\n<h3> 1⃣️ 脏读</h3>\\n<p>一个事务读取到另一个未提交事务修改的数据</p>\\n<blockquote>\\n<p>因为这个修改数据的事务还没提交，可能发生回滚。如果回滚，读取数据的事务得到的就是过期数据。</p>\\n</blockquote>\\n<h3> 2⃣️ 不可重复读</h3>\\n<p>一个事务内多次读取同一条记录，但是两次读取的数据不同</p>\\n<blockquote>\\n<p>例如：一个事务查询两次，另一个事务在中间的时候update</p>\\n</blockquote>\\n<h3> 3⃣️ 幻读</h3>\\n<p>一个事务按照条件查询数据时，没有对应的数据行，但是插入时已经存在</p>","autoDesc":true}`);export{e as data};
