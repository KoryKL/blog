import{_ as p,V as t,W as o,X as n,Y as s,$ as e,a0 as c,E as l}from"./framework-91a010c2.js";const i={},u=n("h1",{id:"难题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#难题","aria-hidden":"true"},"#"),s(" 难题")],-1),r={href:"https://leetcode.cn/problems/median-of-two-sorted-arrays/solutions/258842/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/",target:"_blank",rel:"noopener noreferrer"},k=c(`<p>思路二</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230206204203647.png" alt="image-20230206204203647" style="zoom:50%;"><p>找到这个划分的位置以后，就是思路二</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230206204243236.png" alt="image-20230206204243236" style="zoom:50%;"><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230206204307793.png" alt="image-20230206204307793" style="zoom:50%;"><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230206204325312.png" alt="image-20230206204325312" style="zoom:50%;"><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230206204340210.png" alt="image-20230206204340210" style="zoom:50%;"><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// lc4. </span>
<span class="token comment">// 答案集为较短的那个数组中隔板所有可以插入的位置</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums1<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 让长的在后面，这样j在大多数情况下不会越界</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span>nums2<span class="token punctuation">,</span> nums1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">int</span> m <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">,</span> n <span class="token operator">=</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">searchLast</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> m<span class="token punctuation">,</span> <span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 从1开始数，奇数时为正中间，偶数时为中间偏左</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> mid<span class="token punctuation">;</span>
        <span class="token comment">// mid == 0 || j == n || 可以省略</span>
        <span class="token comment">// 向上取整mid不会等于0</span>
        <span class="token comment">// 当且仅当n = m，且mid = 0时，j=n，而mid不等于0，所以j不会等于n</span>
        <span class="token keyword">return</span> nums1<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> i<span class="token punctuation">;</span>
    <span class="token comment">// left1, right1, left2, right2 </span>
    <span class="token comment">// 分别表示 nums1[i-1], nums1[i], nums2[j-1], nums2[j]</span>
    <span class="token keyword">int</span> left1 <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span> <span class="token operator">:</span> nums1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> left2 <span class="token operator">=</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span> <span class="token operator">:</span> nums2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// median1：前一半的最大值</span>
    <span class="token keyword">int</span> median1 <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left1<span class="token punctuation">,</span> left2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> right1 <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> m <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">:</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right2 <span class="token operator">=</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> n <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">:</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// median2：后一半的最小值</span>
    <span class="token keyword">int</span> median2 <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>right1<span class="token punctuation">,</span> right2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">(</span>median1 <span class="token operator">+</span> median2<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0</span> <span class="token operator">:</span> median1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">searchLast</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">,</span> <span class="token class-name">IntPredicate</span> isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            start <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 直接写法</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums1<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span>nums2<span class="token punctuation">,</span> nums1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> m <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">,</span> n <span class="token operator">=</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> m<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]</span>
        <span class="token comment">// 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1]</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> i<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">==</span> n <span class="token operator">||</span> nums1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> i<span class="token punctuation">;</span>
    <span class="token comment">// left1, right1, left2, right2 </span>
    <span class="token comment">// 分别表示 nums1[i-1], nums1[i], nums2[j-1], nums2[j]</span>
    <span class="token keyword">int</span> left1 <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span> <span class="token operator">:</span> nums1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right1 <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> m <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">:</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> left2 <span class="token operator">=</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span> <span class="token operator">:</span> nums2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right2 <span class="token operator">=</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> n <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">:</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// median1：前一部分的最大值, median2：后一部分的最小值</span>
    <span class="token keyword">int</span> median1 <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left1<span class="token punctuation">,</span> left2<span class="token punctuation">)</span><span class="token punctuation">,</span> median2 <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>right1<span class="token punctuation">,</span> right2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">(</span>median1 <span class="token operator">+</span> median2<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0</span> <span class="token operator">:</span> median1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(m,v){const a=l("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[n("a",r,[s("https://leetcode.cn/problems/median-of-two-sorted-arrays/solutions/258842/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/"),e(a)])]),k])}const g=p(i,[["render",d],["__file","1.html.vue"]]);export{g as default};