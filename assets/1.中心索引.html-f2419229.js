const n=JSON.parse(`{"key":"v-c90d3416","path":"/algo/%F0%9F%93%93%20%E6%80%BB%E7%BB%93/%F0%9F%93%92%20%E6%95%B0%E7%BB%84/1.%E4%B8%AD%E5%BF%83%E7%B4%A2%E5%BC%95.html","title":"","lang":"en-US","frontmatter":{"description":"//lc 724 public int pivotIndex(int[] nums) { int Leftsum = 0, Rightsum = Arrays.stream(nums).sum(); for (int i = 0; i &lt; nums.length; i++){ Rightsum -= nums[i]; if (Leftsum == Rightsum) return i; Leftsum += nums[i]; } return -1; }","head":[["meta",{"property":"og:url","content":"https://korykl.github.io/blog/blog/algo/%F0%9F%93%93%20%E6%80%BB%E7%BB%93/%F0%9F%93%92%20%E6%95%B0%E7%BB%84/1.%E4%B8%AD%E5%BF%83%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"Kory's Blog"}],["meta",{"property":"og:description","content":"//lc 724 public int pivotIndex(int[] nums) { int Leftsum = 0, Rightsum = Arrays.stream(nums).sum(); for (int i = 0; i &lt; nums.length; i++){ Rightsum -= nums[i]; if (Leftsum == Rightsum) return i; Leftsum += nums[i]; } return -1; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-16T07:55:53.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-16T07:55:53.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://korykl.github.io/blog/blog/zh/algo/%F0%9F%93%93%20%E6%80%BB%E7%BB%93/%F0%9F%93%92%20%E6%95%B0%E7%BB%84/1.%E4%B8%AD%E5%BF%83%E7%B4%A2%E5%BC%95.html"}]]},"headers":[],"git":{"createdTime":1673855753000,"updatedTime":1673855753000,"contributors":[{"name":"KoryKL","email":"1274994508@qq.com","commits":1}]},"readingTime":{"minutes":0.12,"words":35},"localizedDate":"January 16, 2023","filePathRelative":"algo/📓 总结/📒 数组/1.中心索引.md","excerpt":"<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">//lc 724</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">pivotIndex</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> nums<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n       <span class=\\"token keyword\\">int</span> <span class=\\"token class-name\\">Leftsum</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Rightsum</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Arrays</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">stream</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sum</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n       <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\n        <span class=\\"token class-name\\">Rightsum</span> <span class=\\"token operator\\">-=</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Leftsum</span> <span class=\\"token operator\\">==</span> <span class=\\"token class-name\\">Rightsum</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">return</span> i<span class=\\"token punctuation\\">;</span>\\n        \\n        <span class=\\"token class-name\\">Leftsum</span> <span class=\\"token operator\\">+=</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
