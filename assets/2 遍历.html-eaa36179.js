import{_ as e,V as a,W as r,a0 as h}from"./framework-91a010c2.js";const t={},d=h('<h2 id="前序遍历" tabindex="-1"><a class="header-anchor" href="#前序遍历" aria-hidden="true">#</a> 前序遍历</h2><p>根 - 左- 右</p><h2 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历" aria-hidden="true">#</a> 中序遍历</h2><p>左 - 根 - 右</p><h2 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历" aria-hidden="true">#</a> 后序遍历</h2><p>左 - 右 - 根</p><p>三种遍历很相像</p><p>删除树中的节点时，删除过程将按照后序遍历的顺序进行。</p><p>即为首先删除它的左节点和它的右边的节点，然后再删除节点本身。</p><p>前序位置的代码在刚刚进入一个二叉树节点的时候执行；</p><p>后序位置的代码在将要离开一个二叉树节点的时候执行；</p><p>中序位置的代码在一个二叉树节点左子树都遍历完，即将开始遍历右子树的时候执行。</p><h2 id="层序遍历" tabindex="-1"><a class="header-anchor" href="#层序遍历" aria-hidden="true">#</a> 层序遍历</h2><p>一层一层地存，所以需要两层list</p>',14),i=[d];function n(c,p){return a(),r("div",null,i)}const _=e(t,[["render",n],["__file","2 遍历.html.vue"]]);export{_ as default};
