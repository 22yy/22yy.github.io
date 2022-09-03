import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as t,a as n,b as o,d as s,e as c,r as l}from"./app.88c706ba.js";const i={},u=n("h1",{id:"_4-\u79FB\u9664\u5143\u7D20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-\u79FB\u9664\u5143\u7D20","aria-hidden":"true"},"#"),s(" 4.\u79FB\u9664\u5143\u7D20")],-1),r=n("h2",{id:"_27-\u79FB\u9664\u5143\u7D20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_27-\u79FB\u9664\u5143\u7D20","aria-hidden":"true"},"#"),s(" 27.\u79FB\u9664\u5143\u7D20")],-1),k={href:"https://leetcode.cn/problems/remove-element/",target:"_blank",rel:"noopener noreferrer"},d=s("\u9898\u76EE\u94FE\u63A5"),v=c(`<p>\u9898\u76EE\u63CF\u8FF0\uFF1A</p><p>\u7ED9\u4F60\u4E00\u4E2A\u6570\u7EC4 nums \u548C\u4E00\u4E2A\u503C val\uFF0C\u4F60\u9700\u8981 \u539F\u5730 \u79FB\u9664\u6240\u6709\u6570\u503C\u7B49\u4E8E val \u7684\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u79FB\u9664\u540E\u6570\u7EC4\u7684\u65B0\u957F\u5EA6\u3002</p><p>\u4E0D\u8981\u4F7F\u7528\u989D\u5916\u7684\u6570\u7EC4\u7A7A\u95F4\uFF0C\u4F60\u5FC5\u987B\u4EC5\u4F7F\u7528 O(1) \u989D\u5916\u7A7A\u95F4\u5E76\u539F\u5730\u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u3002</p><p>\u5143\u7D20\u7684\u987A\u5E8F\u53EF\u4EE5\u6539\u53D8\u3002\u4F60\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002</p><p>\u793A\u4F8B 1: \u7ED9\u5B9A nums = [3,2,2,3], val = 3, \u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6 2, \u5E76\u4E14 nums \u4E2D\u7684\u524D\u4E24\u4E2A\u5143\u7D20\u5747\u4E3A 2\u3002 \u4F60\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002</p><p>\u793A\u4F8B 2: \u7ED9\u5B9A nums = [0,1,2,2,3,0,4,2], val = 2, \u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6 5, \u5E76\u4E14 nums \u4E2D\u7684\u524D\u4E94\u4E2A\u5143\u7D20\u4E3A 0, 1, 3, 0, 4\u3002</p><p>\u4F60\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002</p><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><p>\u6570\u7EC4\u7684\u5143\u7D20\u5728\u5185\u5B58\u5730\u5740\u4E2D\u662F<strong>\u8FDE\u7EED</strong>\u7684\uFF0C\u4E0D\u80FD\u5355\u72EC\u5220\u9664\u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u5143\u7D20\uFF0C\u53EA\u80FD<strong>\u8986\u76D6</strong>\u3002</p><h3 id="\u66B4\u529B\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B\u89E3\u6CD5" aria-hidden="true">#</a> \u66B4\u529B\u89E3\u6CD5</h3><p>\u4E24\u5C42for\u5FAA\u73AF\uFF0C\u4E00\u5C42\u904D\u5386\u6570\u7EC4\uFF0C\u4E00\u5C42\u66F4\u65B0\u6570\u7EC4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">let</span> size<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>size<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// \u53D1\u73B0\u9700\u8981\u79FB\u9664\u7684\u5143\u7D20\uFF0C\u5C31\u5C06\u6570\u7EC4\u96C6\u4F53\u5411\u524D\u79FB\u52A8\u4E00\u4F4D</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>size<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                nums<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            i<span class="token operator">--</span><span class="token punctuation">;</span><span class="token comment">//i\u540E\u9762\u7684\u5143\u7D20\u90FD\u524D\u79FB\u4E86\u4E00\u4F4D\uFF0Ci\u4E5F\u5411\u524D\u79FB\u52A8\u4E00\u4F4D</span>
            size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> size<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53CC\u6307\u9488\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488\u6CD5" aria-hidden="true">#</a> \u53CC\u6307\u9488\u6CD5</h3><p>\u53CC\u6307\u9488\u6CD5\uFF08\u5FEB\u6162\u6307\u9488\u6CD5\uFF09\uFF1A \u901A\u8FC7\u4E00\u4E2A\u5FEB\u6307\u9488\u548C\u6162\u6307\u9488\u5728\u4E00\u4E2Afor\u5FAA\u73AF\u4E0B\u5B8C\u6210\u4E24\u4E2Afor\u5FAA\u73AF\u7684\u5DE5\u4F5C\u3002</p><p>\u5B9A\u4E49\u5FEB\u6162\u6307\u9488</p><ul><li>\u5FEB\u6307\u9488\uFF1A\u5BFB\u627E\u65B0\u6570\u7EC4\u7684\u5143\u7D20 \uFF0C\u65B0\u6570\u7EC4\u5C31\u662F\u4E0D\u542B\u6709\u76EE\u6807\u5143\u7D20\u7684\u6570\u7EC4</li><li>\u6162\u6307\u9488\uFF1A\u6307\u5411\u66F4\u65B0 \u65B0\u6570\u7EC4\u4E0B\u6807\u7684\u4F4D\u7F6E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">let</span> slow<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> fast<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>fast<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>fast<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token operator">!==</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
           nums<span class="token punctuation">[</span>slow<span class="token operator">++</span><span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slow
 <span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#js\u89E3\u6CD5" aria-hidden="true">#</a> js\u89E3\u6CD5</h3><p>\u7528splice\u5220\u9664\u76F8\u540C\u7684\u5143\u7D20</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
 <span class="token keyword">let</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> len<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span><span class="token comment">//\u540E\u9762nums.length\u4F1A\u53D8\uFF0C\u8981\u4FDD\u5B58\u521D\u59CBnum.length</span>
 <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     index<span class="token operator">=</span>nums<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&lt;=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
     nums<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(b,h){const a=l("ExternalLinkIcon");return p(),t("div",null,[u,r,n("p",null,[n("a",k,[d,o(a)])]),v])}var y=e(i,[["render",m],["__file","remove-element.html.vue"]]);export{y as default};
