const e=JSON.parse(`{"key":"v-5477631e","path":"/se/BackEnd/JUC/1%20AQS.html","title":"AbstractQueuedSynchronizer","lang":"en-US","frontmatter":{"description":"AbstractQueuedSynchronizer 本类提供了一个用于实现阻塞锁和同步器（信号量、事件等）的框架，依 [1 AQS.md](1 AQS.md) 赖先进先出 (FIFO) 的等待队列来实现。 它为大多数通过单个 int 类型的原子值来表示状态的同步器提供了实现基础。子类必须重写更改同步器状态的 protected 方法，并定义该状态在获取或释放子类对象方面的具体含义。","head":[["meta",{"property":"og:url","content":"https://korykl.github.io/blog/blog/se/BackEnd/JUC/1%20AQS.html"}],["meta",{"property":"og:site_name","content":"Kory's Blog"}],["meta",{"property":"og:title","content":"AbstractQueuedSynchronizer"}],["meta",{"property":"og:description","content":"AbstractQueuedSynchronizer 本类提供了一个用于实现阻塞锁和同步器（信号量、事件等）的框架，依 [1 AQS.md](1 AQS.md) 赖先进先出 (FIFO) 的等待队列来实现。 它为大多数通过单个 int 类型的原子值来表示状态的同步器提供了实现基础。子类必须重写更改同步器状态的 protected 方法，并定义该状态在获取或释放子类对象方面的具体含义。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-26T09:43:18.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-04-26T09:43:18.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://korykl.github.io/blog/blog/zh/se/BackEnd/JUC/1%20AQS.html"}]]},"headers":[{"level":2,"title":"设计","slug":"设计","link":"#设计","children":[{"level":3,"title":"同步队列｜CLH","slug":"同步队列-clh","link":"#同步队列-clh","children":[]},{"level":3,"title":"Node","slug":"node","link":"#node","children":[]}]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"createdTime":1682502198000,"updatedTime":1682502198000,"contributors":[{"name":"KoryKL","email":"1274994508@qq.com","commits":1}]},"readingTime":{"minutes":2.48,"words":745},"localizedDate":"April 26, 2023","filePathRelative":"se/BackEnd/JUC/1 AQS.md","excerpt":"<h1> AbstractQueuedSynchronizer</h1>\\n<p>本类提供了一个用于实现阻塞锁和同步器（信号量、事件等）的框架，依 [1 <a href=\\"http://AQS.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">AQS.md</a>](1 <a href=\\"http://AQS.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">AQS.md</a>) 赖先进先出 (FIFO) 的等待队列来实现。</p>\\n<p>它为大多数通过单个 int 类型的原子值来表示状态的同步器提供了实现基础。子类必须重写更改同步器状态的 protected 方法，并定义该状态在获取或释放子类对象方面的具体含义。</p>","autoDesc":true}`);export{e as data};