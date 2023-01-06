const n=JSON.parse(`{"key":"v-276dcbbe","path":"/algo/%F0%9F%93%93%20%E6%80%BB%E7%BB%93/%F0%9F%93%92%20%E9%93%BE%E8%A1%A8/1.%E5%8F%8C%E6%8C%87%E9%92%88.html","title":"链表与双指针","lang":"en-US","frontmatter":{"description":"链表与双指针 有序合并 ListNode mergeTwoLists(ListNode l1, ListNode l2) { ListNode dummy = new ListNode(-1), p = dummy; ListNode p1 = l1, p2 = l2; while(p1 != null &amp;&amp; p2 != null){ \\tif(p1.val &lt; p2.val) \\tp.next = p1; \\tp1 = p1.next; \\t}else{ \\tp.next = p2; \\tp2 = p2.next; \\t} p = p.next; } \\t//最后都弄完了，还有个链有剩余 \\tif (p1 != null){ p.next = p1; } \\tif (p2 != null){ p.next = p2; } \\treturn dummy.next; }","head":[["meta",{"property":"og:url","content":"https://korykl.github.io/blog/blog/algo/%F0%9F%93%93%20%E6%80%BB%E7%BB%93/%F0%9F%93%92%20%E9%93%BE%E8%A1%A8/1.%E5%8F%8C%E6%8C%87%E9%92%88.html"}],["meta",{"property":"og:site_name","content":"Kory's Blog"}],["meta",{"property":"og:title","content":"链表与双指针"}],["meta",{"property":"og:description","content":"链表与双指针 有序合并 ListNode mergeTwoLists(ListNode l1, ListNode l2) { ListNode dummy = new ListNode(-1), p = dummy; ListNode p1 = l1, p2 = l2; while(p1 != null &amp;&amp; p2 != null){ \\tif(p1.val &lt; p2.val) \\tp.next = p1; \\tp1 = p1.next; \\t}else{ \\tp.next = p2; \\tp2 = p2.next; \\t} p = p.next; } \\t//最后都弄完了，还有个链有剩余 \\tif (p1 != null){ p.next = p1; } \\tif (p2 != null){ p.next = p2; } \\treturn dummy.next; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-06T04:35:58.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-06T04:35:58.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://korykl.github.io/blog/blog/zh/algo/%F0%9F%93%93%20%E6%80%BB%E7%BB%93/%F0%9F%93%92%20%E9%93%BE%E8%A1%A8/1.%E5%8F%8C%E6%8C%87%E9%92%88.html"}]]},"headers":[],"git":{"createdTime":1672979758000,"updatedTime":1672979758000,"contributors":[{"name":"KoryKL","email":"1274994508@qq.com","commits":1}]},"readingTime":{"minutes":3.23,"words":968},"localizedDate":"January 6, 2023","filePathRelative":"algo/📓 总结/📒 链表/1.双指针.md","excerpt":"<h1> 链表与双指针</h1>\\n<h4> 有序合并</h4>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">ListNode</span> <span class=\\"token function\\">mergeTwoLists</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ListNode</span> l1<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ListNode</span> l2<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token class-name\\">ListNode</span> dummy <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ListNode</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> p <span class=\\"token operator\\">=</span> dummy<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token class-name\\">ListNode</span> p1 <span class=\\"token operator\\">=</span> l1<span class=\\"token punctuation\\">,</span> p2 <span class=\\"token operator\\">=</span> l2<span class=\\"token punctuation\\">;</span>\\n  \\n  <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>p1 <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">&amp;&amp;</span> p2 <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  \\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>p1<span class=\\"token punctuation\\">.</span>val <span class=\\"token operator\\">&lt;</span> p2<span class=\\"token punctuation\\">.</span>val<span class=\\"token punctuation\\">)</span>  \\n    \\tp<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> p1<span class=\\"token punctuation\\">;</span>\\n    \\tp1 <span class=\\"token operator\\">=</span> p1<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n        \\n  \\t<span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n    \\tp<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> p2<span class=\\"token punctuation\\">;</span>\\n    \\tp2 <span class=\\"token operator\\">=</span> p2<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n  \\t<span class=\\"token punctuation\\">}</span>\\n  p <span class=\\"token operator\\">=</span> p<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token comment\\">//最后都弄完了，还有个链有剩余</span>\\n\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>p1 <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    p<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> p1<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>p2 <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    p<span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> p2<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token keyword\\">return</span> dummy<span class=\\"token punctuation\\">.</span>next<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
