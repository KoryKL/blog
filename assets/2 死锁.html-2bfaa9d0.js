const t=JSON.parse(`{"key":"v-781b795b","path":"/cs/database/mysql/%F0%9F%93%93%207%20%E9%94%81/2%20%E6%AD%BB%E9%94%81.html","title":"死锁","lang":"en-US","frontmatter":{"description":"死锁 死锁的四个必要条件：互斥、占有且等待、不可强占用、循环等待。 预防死锁 数据库层面： 设置事务等待锁的超时时间 当一个事务的等待时间超过该值后，就对这个事务进行回滚，于是锁就释放了，另一个事务就可以继续执行了。在 InnoDB 中，参数 innodb_lock_wait_timeout 是用来设置超时时间的，默认值时 50 秒。 开启主动死锁检测 在发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 innodb_deadlock_detect 设置为 on，表示开启这个逻辑，默认就开启。","head":[["meta",{"property":"og:url","content":"https://korykl.github.io/blog/blog/cs/database/mysql/%F0%9F%93%93%207%20%E9%94%81/2%20%E6%AD%BB%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"Kory's Blog"}],["meta",{"property":"og:title","content":"死锁"}],["meta",{"property":"og:description","content":"死锁 死锁的四个必要条件：互斥、占有且等待、不可强占用、循环等待。 预防死锁 数据库层面： 设置事务等待锁的超时时间 当一个事务的等待时间超过该值后，就对这个事务进行回滚，于是锁就释放了，另一个事务就可以继续执行了。在 InnoDB 中，参数 innodb_lock_wait_timeout 是用来设置超时时间的，默认值时 50 秒。 开启主动死锁检测 在发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 innodb_deadlock_detect 设置为 on，表示开启这个逻辑，默认就开启。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-09T08:02:29.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-09T08:02:29.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://korykl.github.io/blog/blog/zh/cs/database/mysql/%F0%9F%93%93%207%20%E9%94%81/2%20%E6%AD%BB%E9%94%81.html"}]]},"headers":[{"level":3,"title":"预防死锁","slug":"预防死锁","link":"#预防死锁","children":[]},{"level":2,"title":"插入发生死锁","slug":"插入发生死锁","link":"#插入发生死锁","children":[]},{"level":2,"title":"隐式锁？","slug":"隐式锁","link":"#隐式锁","children":[]}],"git":{"createdTime":1681027349000,"updatedTime":1681027349000,"contributors":[{"name":"KoryKL","email":"1274994508@qq.com","commits":1}]},"readingTime":{"minutes":1.93,"words":578},"localizedDate":"April 9, 2023","filePathRelative":"cs/database/mysql/📓 7 锁/2 死锁.md","excerpt":"<h1> 死锁</h1>\\n<p>死锁的四个必要条件：<strong>互斥、占有且等待、不可强占用、循环等待</strong>。</p>\\n<h3> 预防死锁</h3>\\n<p>数据库层面：</p>\\n<ul>\\n<li>\\n<p><strong>设置事务等待锁的超时时间</strong></p>\\n<p>当一个事务的等待时间超过该值后，就对这个事务进行回滚，于是锁就释放了，另一个事务就可以继续执行了。在 InnoDB 中，参数 <code>innodb_lock_wait_timeout</code> 是用来设置超时时间的，默认值时 50 秒。</p>\\n</li>\\n<li>\\n<p><strong>开启主动死锁检测</strong></p>\\n<p>在发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 <code>innodb_deadlock_detect</code> 设置为 on，表示开启这个逻辑，默认就开启。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{t as data};
