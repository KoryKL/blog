import{_ as n,V as s,W as a,a0 as t}from"./framework-91a010c2.js";const p={},e=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//lc 724</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">pivotIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">int</span> <span class="token class-name">Leftsum</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Rightsum</span> <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">Rightsum</span> <span class="token operator">-=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Leftsum</span> <span class="token operator">==</span> <span class="token class-name">Rightsum</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        
        <span class="token class-name">Leftsum</span> <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","1.中心索引.html.vue"]]);export{k as default};
