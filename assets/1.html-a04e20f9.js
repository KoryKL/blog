const e=JSON.parse(`{"key":"v-a1809b9e","path":"/cs/database/mysql/%F0%9F%93%93%207%20%E9%94%81/1.html","title":"锁","lang":"en-US","frontmatter":{"description":"锁 定义：计算机协调多个进程或线程并发访问某一资源的机制 出了传统的计算资源（CPU、RAM、I/O）的争用外，数据也是供许多用户共享的资源 锁冲突也是影响数据库并发访问性能的重要因素 MySQL中，按照锁的粒度分为以下三类： 1⃣️ 全局锁 锁定数据库中所有表 所有数据就只读，后续的DML的写入语句、DDL、更新操作的事务提交语句都会被阻塞 典型应用：全库的逻辑备份，获取一致性视图、保证数据完整性、一致性","head":[["meta",{"property":"og:url","content":"https://korykl.github.io/blog/blog/cs/database/mysql/%F0%9F%93%93%207%20%E9%94%81/1.html"}],["meta",{"property":"og:site_name","content":"Kory's Blog"}],["meta",{"property":"og:title","content":"锁"}],["meta",{"property":"og:description","content":"锁 定义：计算机协调多个进程或线程并发访问某一资源的机制 出了传统的计算资源（CPU、RAM、I/O）的争用外，数据也是供许多用户共享的资源 锁冲突也是影响数据库并发访问性能的重要因素 MySQL中，按照锁的粒度分为以下三类： 1⃣️ 全局锁 锁定数据库中所有表 所有数据就只读，后续的DML的写入语句、DDL、更新操作的事务提交语句都会被阻塞 典型应用：全库的逻辑备份，获取一致性视图、保证数据完整性、一致性"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-10T04:15:55.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-10T04:15:55.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://korykl.github.io/blog/blog/zh/cs/database/mysql/%F0%9F%93%93%207%20%E9%94%81/1.html"}]]},"headers":[{"level":3,"title":"1⃣️ 全局锁","slug":"_1⃣️-全局锁","link":"#_1⃣️-全局锁","children":[]},{"level":3,"title":"2⃣️ 表级锁","slug":"_2⃣️-表级锁","link":"#_2⃣️-表级锁","children":[]},{"level":3,"title":"3⃣️ 行级锁","slug":"_3⃣️-行级锁","link":"#_3⃣️-行级锁","children":[]}],"git":{"createdTime":1673067544000,"updatedTime":1673324155000,"contributors":[{"name":"KoryKL","email":"1274994508@qq.com","commits":3}]},"readingTime":{"minutes":4.63,"words":1389},"localizedDate":"January 7, 2023","filePathRelative":"cs/database/mysql/📓 7 锁/1.md","excerpt":"<h1> 锁</h1>\\n<p>定义：计算机协调多个进程或线程并发访问某一资源的机制</p>\\n<p>出了传统的计算资源（CPU、RAM、I/O）的争用外，数据也是供许多用户共享的资源</p>\\n<p>锁冲突也是影响数据库并发访问性能的重要因素</p>\\n<p>MySQL中，按照锁的粒度分为以下三类：</p>\\n<h3> 1⃣️ 全局锁</h3>\\n<p>锁定数据库中所有表</p>\\n<p>所有数据就只读，后续的DML的写入语句、DDL、更新操作的事务提交语句都会被阻塞</p>\\n<p>典型应用：全库的逻辑备份，获取一致性视图、保证数据完整性、一致性</p>\\n<p><img src=\\"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230107180700388.png\\" alt=\\"image-20230107180700388\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{e as data};