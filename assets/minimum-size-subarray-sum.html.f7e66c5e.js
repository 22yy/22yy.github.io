import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as e,a as n,b as o,d as s,e as c,r as l}from"./app.9df2c7c9.js";const u={},i=n("h1",{id:"_6-\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4","aria-hidden":"true"},"#"),s(" 6.\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4")],-1),r=n("h2",{id:"_209-\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_209-\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4","aria-hidden":"true"},"#"),s(" 209.\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4")],-1),k={href:"https://leetcode.cn/problems/minimum-size-subarray-sum/",target:"_blank",rel:"noopener noreferrer"},d=s("\u9898\u76EE\u94FE\u63A5"),m=c(`<p>\u7ED9\u5B9A\u4E00\u4E2A\u542B\u6709 n \u4E2A\u6B63\u6574\u6570\u7684\u6570\u7EC4\u548C\u4E00\u4E2A\u6B63\u6574\u6570 s \uFF0C\u627E\u51FA\u8BE5\u6570\u7EC4\u4E2D\u6EE1\u8DB3\u5176\u548C \u2265 s \u7684\u957F\u5EA6\u6700\u5C0F\u7684 \u8FDE\u7EED \u5B50\u6570\u7EC4\uFF0C\u5E76\u8FD4\u56DE\u5176\u957F\u5EA6\u3002\u5982\u679C\u4E0D\u5B58\u5728\u7B26\u5408\u6761\u4EF6\u7684\u5B50\u6570\u7EC4\uFF0C\u8FD4\u56DE 0\u3002</p><p>\u793A\u4F8B\uFF1A</p><p>\u8F93\u5165\uFF1As = 7, nums = [2,3,1,2,4,3] \u8F93\u51FA\uFF1A2 \u89E3\u91CA\uFF1A\u5B50\u6570\u7EC4 [4,3] \u662F\u8BE5\u6761\u4EF6\u4E0B\u7684\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4\u3002</p><h3 id="\u66B4\u529B\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B\u89E3\u6CD5" aria-hidden="true">#</a> \u66B4\u529B\u89E3\u6CD5</h3><p>\u4E24\u4E2Afor\u5FAA\u73AF\uFF0C\u7136\u540E\u4E0D\u65AD\u7684\u5BFB\u627E\u7B26\u5408\u6761\u4EF6\u7684\u5B50\u5E8F\u5217</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">minSubArrayLen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span><span class="token comment">//\u521D\u59CB\u5316\u4E3A\u65E0\u7A77\u5927</span>
   <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> sublength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//\u5B50\u5E8F\u5217\u957F\u5EA6</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//\u91CD\u65B0\u5FAA\u73AF\u65F6\u8981\u91CD\u7F6Esum\u4E3A0</span>
       <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>          
          sublength <span class="token operator">=</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//\u5B50\u5E8F\u5217\u957F\u5EA6</span>
          result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span>sublength<span class="token punctuation">)</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> result <span class="token operator">===</span> <span class="token number">Infinity</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6ED1\u52A8\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6ED1\u52A8\u7A97\u53E3" aria-hidden="true">#</a> \u6ED1\u52A8\u7A97\u53E3</h3><p>\u53EF\u4EE5\u7406\u89E3\u4E3A\u53CC\u6307\u9488\u7684\u4E00\u79CD</p><p>\u7A97\u53E3\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF1A\u5982\u679C\u5F53\u524D\u7A97\u53E3\u7684\u503C\u5927\u4E8Es\u4E86\uFF0C\u7A97\u53E3\u5C31\u8981\u5411\u524D\u79FB\u52A8\u4E86</p><p>\u7A97\u53E3\u7684\u7ED3\u675F\u4F4D\u7F6E\uFF1A\u7A97\u53E3\u7684\u7ED3\u675F\u4F4D\u7F6E\u5C31\u662F\u904D\u5386\u6570\u7EC4\u7684\u6307\u9488\uFF0C\u4E5F\u5C31\u662Ffor\u5FAA\u73AF\u91CC\u7684\u7D22\u5F15\u3002</p><p>\u7CBE\u9AD3\u5728\u4E8E\u52A8\u6001\u8C03\u8282\u6ED1\u52A8\u7A97\u53E3\u7684\u8D77\u59CB\u4F4D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">minSubArrayLen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> sublength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//\u6ED1\u52A8\u7A97\u53E3\u7684\u957F\u5EA6</span>
 <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>fast <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> fast<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u4F7F\u7528while\uFF0C\u6BCF\u6B21\u66F4\u65B0slow\uFF0C\u4E0D\u65AD\u8FDB\u884C\u6BD4\u8F83</span>
       sublength <span class="token operator">=</span> fast<span class="token operator">-</span>slow<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
       result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span>sublength<span class="token punctuation">)</span><span class="token punctuation">;</span>
       sum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>slow<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//\u4E0D\u65AD\u53D8\u66F4\u8D77\u59CB\u4F4D\u7F6E</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> result <span class="token operator">===</span> <span class="token number">Infinity</span> <span class="token operator">?</span> <span class="token number">0</span><span class="token operator">:</span>result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function v(b,h){const a=l("ExternalLinkIcon");return p(),e("div",null,[i,r,n("p",null,[n("a",k,[d,o(a)])]),m])}var _=t(u,[["render",v],["__file","minimum-size-subarray-sum.html.vue"]]);export{_ as default};
