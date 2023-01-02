import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as e,f as t}from"./app.b2eb5079.js";const s={},a=t('<h1 id="list类型" tabindex="-1"><a class="header-anchor" href="#list类型" aria-hidden="true">#</a> List类型</h1><p>类似LinkedList，可以看做一个双向链表</p><p>特征：</p><ul><li>有序</li><li>元素可以重复</li><li>插入和删除快</li><li>查询速度一般</li></ul><p>常用来存储一个有序数据，例如：朋友圈点赞列表，评论列表等。</p><h2 id="常见命令" tabindex="-1"><a class="header-anchor" href="#常见命令" aria-hidden="true">#</a> 常见命令</h2><ul><li>lpush 向列表左侧插入一个或多个元素</li><li>lpop 移除并返回列表左侧的第一个</li><li>rpush 向列表右侧插入一个或多个元素</li><li>rpop 移除并返回列表右侧的第一个元素</li><li>Lrange key start end</li><li>BLPOP 会阻塞指定时间，等到有元素了再pop</li><li>BRPOP 会阻塞指定时间</li></ul><p>如何利用List结构模拟一个栈?</p><ul><li>入口和出口在同一边</li></ul><p>如何利用List结构模拟一个队列?</p><ul><li>入口和出口在不同边</li></ul><p>如何利用List结构模拟一个阻塞队列?</p><ul><li>入口和出口在不同边</li><li>出队时采用BLPOP或BRPOP</li></ul>',13),r=[a];function p(o,n){return l(),e("div",null,r)}const h=i(s,[["render",p],["__file","list.html.vue"]]);export{h as default};
