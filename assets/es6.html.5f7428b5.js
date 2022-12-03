import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as l,e as n}from"./app.a1b22ce7.js";const a={},o=n(`<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><h2 id="_1-var-let-const\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-var-let-const\u533A\u522B" aria-hidden="true">#</a> 1.var let const\u533A\u522B</h2><p>\u4E09\u8005\u7684\u533A\u522B\u53EF\u56F4\u7ED5\u4E0B\u97625\u70B9\u5C55\u5F00:</p><ol><li>\u53D8\u91CF\u63D0\u5347</li></ol><ul><li>var\u58F0\u660E\u7684\u53D8\u91CF\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u53D8\u91CF\u53EF\u4EE5\u5728\u58F0\u660E\u4E4B\u524D\u8C03\u7528\uFF0C\u503C\u4E3Aundefined</li><li>let const\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u58F0\u660E\u7684\u53D8\u91CF\u4E00\u5B9A\u8981\u5728\u58F0\u660E\u540E\u4F7F\u7528</li></ul><ol start="2"><li>\u6682\u65F6\u6027\u6B7B\u533A</li></ol><ul><li>var \u4E0D\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A</li><li>let const\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A\uFF0C\u53EA\u6709\u7B49\u5230\u58F0\u660E\u53D8\u91CF\u7684\u90A3\u4E00\u884C\u4EE3\u7801\u51FA\u73B0\uFF0C\u624D\u53EF\u4EE5\u83B7\u53D6\u548C\u4F7F\u7528\u8BE5\u53D8\u91CF\u3002</li></ul><ol start="3"><li>\u5757\u7EA7\u4F5C\u7528\u57DF</li></ol><ul><li>var\u4E0D\u5B58\u5728\u5757\u7EA7\u4F5C\u7528\u57DF</li><li>let\u548Cconst\u5B58\u5728\u5757\u7EA7\u4F5C\u7528\u57DF</li></ul><ol start="4"><li>\u91CD\u590D\u58F0\u660E</li></ol><ul><li>var\u5141\u8BB8\u91CD\u590D\u58F0\u660E\u53D8\u91CF</li><li>let\u548Cconst\u5728\u540C\u4E00\u4F5C\u7528\u57DF\u4E0B\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E\u53D8\u91CF</li></ul><ol start="5"><li>\u4FEE\u6539\u58F0\u660E\u7684\u53D8\u91CF</li></ol><ul><li>var\u548Clet\u53EF\u4EE5</li><li>const\u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\uFF0C\u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u503C\u5C31\u4E0D\u80FD\u6539\u53D8</li></ul><ol start="6"><li>\u4F7F\u7528</li></ol><ul><li>\u80FD\u7528const\u7684\u60C5\u51B5\u5C3D\u91CF\u4F7F\u7528const\uFF0C\u5176\u4ED6\u60C5\u51B5\u5927\u591A\u6570\u4F7F\u7528let\uFF0C\u907F\u514D\u4F7F\u7528var</li></ul><h2 id="_2-\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B" aria-hidden="true">#</a> 2.\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B</h2><ol><li><strong>\u7BAD\u5934\u51FD\u6570\u4E0D\u4F1A\u521B\u5EFA\u81EA\u5DF1\u7684this</strong></li></ol><blockquote><p>\u7BAD\u5934\u51FD\u6570\u4E0D\u4F1A\u521B\u5EFA\u81EA\u5DF1\u7684this\uFF0C\u6240\u4EE5\u5B83\u6CA1\u6709\u81EA\u5DF1\u7684 this\uFF0C \u5B83\u53EA\u4F1A\u4ECE\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\u94FE\u7684\u4E0A\u4E00\u5C42\u7EE7\u627Fthis\u3002</p></blockquote><ol start="2"><li><strong>\u7BAD\u5934\u51FD\u6570\u7EE7\u627F\u800C\u6765\u7684this\u6307\u5411\u6C38\u8FDC\u4E0D\u53D8</strong>\uFF08\uFF01\uFF01\uFF09</li></ol><blockquote><p>\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684this\uFF0C \u5B83\u4F1A\u6355\u83B7\u81EA\u5DF1\u5728\u5B9A\u4E49\u65F6\uFF08\u6CE8\u610F \u662F\u5B9A\u4E49\u65F6\uFF0C\u4E0D\u662F\u8C03\u7528\u65F6\uFF09\u6240\u5904\u7684\u5916\u5C42\u6267\u884C\u73AF\u5883\u7684this\uFF0C\u5E76\u7EE7 \u627F\u8FD9\u4E2Athis\u503C\u3002\u6240\u4EE5\uFF0C\u7BAD\u5934\u51FD\u6570\u4E2Dthis\u7684\u6307\u5411\u5728\u5B83\u88AB\u5B9A\u4E49\u7684 \u65F6\u5019\u5C31\u5DF1\u7ECF\u786E\u5B9A\u4E86\uFF0C\u4E4B\u540E\u6C38\u8FDC\u4E0D\u4F1A\u6539\u53D8\u3002</p></blockquote><ol start="3"><li>.call()/.apply()/.bind()\u65E0\u6CD5\u6539\u53D8\u7BAD\u5934\u51FD\u6570\u4E2Dthis\u7684\u6307\u5411</li></ol><blockquote><p>.call()/.apply()/.bind()\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u52A8\u6001\u4FEE\u6539\u51FD\u6570\u6267\u884C\u65F6 this\u7684\u6307\u5411\uFF0C\u4F46\u7531\u4E8E\u7BAD\u5934\u51FD\u6570\u7684this\u5B9A\u4E49\u65F6\u5C31\u5DF2\u7ECF\u786E\u5B9A\u4E14\u6C38 \u8FDC\u4E0D\u4F1A\u6539\u53D8\u3002\u6240\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u65B9\u6CD5\u6C38\u8FDC\u4E5F\u6539\u53D8\u4E0D\u4E86\u7BAD\u5934\u51FD\u6570 this\u7684\u6307\u5411\uFF0C\u867D\u7136\u8FD9\u4E48\u505A\u4EE3\u7801\u4E0D\u4F1A\u62A5\u9519\u3002</p></blockquote><ol start="4"><li>\u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u4F7F\u7528</li></ol><blockquote><p>\u6784\u9020\u51FD\u6570\u7684new\u7B80\u5355\u6765\u8BF4 \u5206\u4E3A\u56DB\u6B65\uFF1A \u2460 JS\u5185\u90E8\u9996\u5148\u4F1A\u5148\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF1B<br> \u2461\u518D\u628A\u51FD\u6570\u4E2D\u7684this\u6307\u5411\u8BE5\u5BF9\u8C61\uFF1B \u2462\u7136\u540E\u6267\u884C\u6784\u9020\u51FD\u6570\u4E2D\u7684\u8BED\u53E5\uFF1B \u2463\u6700\u7EC8\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u5B9E\u4F8B</p></blockquote><blockquote><p>\u4F46\u662F\u56E0\u4E3A\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684this\uFF0C\u5B83\u7684this\u5176\u5B9E\u662F\u7EE7 \u627F\u4E86\u5916\u5C42\u6267\u884C\u73AF\u5883\u4E2D\u7684this\uFF0C \u4E14this\u6307\u5411\u6C38\u8FDC\u4E0D\u4F1A\u968F\u5728\u54EA\u91CC \u8C03\u7528\u3001\u88AB\u8C01\u8C03\u7528\u800C\u6539\u53D8\uFF0C\u6240\u4EE5\u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u4F5C\u4E3A\u6784\u9020\u51FD\u6570 \u4F7F\u7528\uFF0C\u6216\u8005\u8BF4\u6784\u9020\u51FD\u6570\u4E0D\u80FD\u5B9A\u4E49\u6210\u7BAD\u5934\u51FD\u6570\uFF0C\u5426\u5219\u7528new\u8C03 \u7528\u65F6\u4F1A\u62A5\u9519\uFF01</p></blockquote><ol start="5"><li><p>\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684arguments \u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684arguments\u5BF9\u8C61\u3002\u5728\u7BAD\u5934\u51FD\u6570\u4E2D\u8BBF\u95EE arguments\u5B9E\u9645\u4E0A\u83B7\u5F97\u7684\u662F\u5916\u5C42\u5C40\u90E8 \uFF08\u51FD\u6570\uFF09\u6267\u884C\u73AF\u5883\u4E2D\u7684 \u503C\u3002</p></li><li><p>\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u539F\u578Bprototype</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">sayHi</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
console <span class="token punctuation">.</span> <span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&quot;Hello World !&quot;</span><span class="token punctuation">)</span>  
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span> <span class="token function">log</span> <span class="token punctuation">(</span>sayHi<span class="token punctuation">.</span> prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>\u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u7528\u4F5CGenerator\u51FD\u6570\uFF0C\u4E0D\u80FD\u4F7F\u7528yeild\u5173\u952E \u5B57</li></ol>`,28),i=[o];function e(c,p){return t(),l("div",null,i)}var d=s(a,[["render",e],["__file","es6.html.vue"]]);export{d as default};