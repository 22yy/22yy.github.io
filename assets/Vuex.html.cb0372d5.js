import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.995874d9.js";const t={},p=e(`<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h1><p><img src="https://vuex.vuejs.org/vuex.png" alt="vuex"></p><h2 id="_1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u5FF5" aria-hidden="true">#</a> 1. \u6982\u5FF5</h2><p>\u5728Vue\u4E2D\u5B9E\u73B0\u96C6\u4E2D\u5F0F\u72B6\u6001\uFF08\u6570\u636E\uFF09\u7BA1\u7406\u7684\u4E00\u4E2AVue\u63D2\u4EF6\uFF0C\u5BF9vue\u5E94\u7528\u4E2D\u591A\u4E2A\u7EC4\u4EF6\u7684\u5171\u4EAB\u72B6\u6001\u8FDB\u884C\u96C6\u4E2D\u5F0F\u7684\u7BA1\u7406\uFF08\u8BFB/\u5199\uFF09\uFF0C\u4E5F\u662F\u4E00\u79CD\u7EC4\u4EF6\u901A\u4FE1\u7684\u65B9\u5F0F\uFF0C\u4E14\u9002\u7528\u4E8E\u4EFB\u610F\u7EC4\u4EF6\u901A\u4FE1\u3002</p><h2 id="_2-\u4F55\u65F6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a> 2.\u4F55\u65F6\u4F7F\u7528</h2><p>\u591A\u4E2A\u7EC4\u4EF6\u9700\u8981\u5171\u4EAB\u6570\u636E\u65F6</p><h2 id="_3-\u642D\u5EFAvuex\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_3-\u642D\u5EFAvuex\u73AF\u5883" aria-hidden="true">#</a> 3.\u642D\u5EFAVuex\u73AF\u5883</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> \u521B\u5EFA\u6587\u4EF6src<span class="token operator">/</span>store<span class="token operator">/</span>index<span class="token punctuation">.</span>js
<span class="token comment">//\u5F15\u5165Vue\u6838\u5FC3\u5E93</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//\u5F15\u5165Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">//\u5E94\u7528Vuex\u63D2\u4EF6</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token comment">//\u51C6\u5907actions\u5BF9\u8C61\u2014\u2014\u54CD\u5E94\u7EC4\u4EF6\u4E2D\u7528\u6237\u7684\u52A8\u4F5C</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//\u51C6\u5907mutations\u5BF9\u8C61\u2014\u2014\u4FEE\u6539state\u4E2D\u7684\u6570\u636E</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//\u51C6\u5907state\u5BF9\u8C61\u2014\u2014\u4FDD\u5B58\u5177\u4F53\u7684\u6570\u636E</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//\u521B\u5EFA\u5E76\u66B4\u9732store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
actions<span class="token punctuation">,</span>
mutations<span class="token punctuation">,</span>
state
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token number">2.</span> \u5728main<span class="token punctuation">.</span>js\u4E2D\u521B\u5EFAvm\u65F6\u4F20\u5165store\u914D\u7F6E\u9879
<span class="token operator">...</span><span class="token operator">...</span>
<span class="token comment">//\u5F15\u5165store</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token operator">...</span><span class="token operator">...</span>

<span class="token comment">//\u521B\u5EFAvm</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
store
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 4.\u57FA\u672C\u4F7F\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> \u521D\u59CB\u5316\u6570\u636E\u3001\u914D\u7F6Eactions\u3001\u914D\u7F6Emutations\uFF0C\u64CD\u4F5C\u6587\u4EF6store<span class="token punctuation">.</span>js

<span class="token comment">//\u5F15\u5165Vue\u6838\u5FC3\u5E93</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//\u5F15\u5165Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">//\u5F15\u7528Vuex</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token comment">//\u54CD\u5E94\u7EC4\u4EF6\u4E2D\u52A0\u7684\u52A8\u4F5C</span>
<span class="token function">jia</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">// console.log(&#39;actions\u4E2D\u7684jia\u88AB\u8C03\u7528\u4E86&#39;,miniStore,value)</span>
 context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token comment">//\u6267\u884C\u52A0</span>
<span class="token constant">JIA</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">// console.log(&#39;mutations\u4E2D\u7684JIA\u88AB\u8C03\u7528\u4E86&#39;,state,value)</span>
 state<span class="token punctuation">.</span>sum <span class="token operator">+=</span> value
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u521D\u59CB\u5316\u6570\u636E</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sum</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u521B\u5EFA\u5E76\u66B4\u9732store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
actions<span class="token punctuation">,</span>
mutations<span class="token punctuation">,</span>
state<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token number">2.</span> \u7EC4\u4EF6\u4E2D\u8BFB\u53D6vuex\u4E2D\u7684\u6570\u636E\uFF1A$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>sum

<span class="token number">3.</span> \u7EC4\u4EF6\u4E2D\u4FEE\u6539vuex\u4E2D\u7684\u6570\u636E\uFF1A$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;action\u4E2D\u7684\u65B9\u6CD5\u540D&#39;</span><span class="token punctuation">,</span>\u6570\u636E<span class="token punctuation">)</span> \u6216 $store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;mutations\u4E2D\u7684\u65B9\u6CD5\u540D&#39;</span><span class="token punctuation">,</span>\u6570\u636E<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-getters\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-getters\u7684\u4F7F\u7528" aria-hidden="true">#</a> 5. getters\u7684\u4F7F\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> \u6982\u5FF5\uFF1A\u5F53state\u4E2D\u7684\u6570\u636E\u9700\u8981\u7ECF\u8FC7\u52A0\u5DE5\u540E\u518D\u4F7F\u7528\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528getters\u52A0\u5DE5\u3002

<span class="token number">2.</span> \u5728store<span class="token punctuation">.</span>js\u4E2D\u8FFD\u52A0getters\u914D\u7F6E

<span class="token operator">...</span><span class="token operator">...</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token function">bigSum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> state<span class="token punctuation">.</span>sum <span class="token operator">*</span> <span class="token number">10</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u521B\u5EFA\u5E76\u66B4\u9732store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token operator">...</span><span class="token operator">...</span>
 getters
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token number">3.</span> \u7EC4\u4EF6\u4E2D\u8BFB\u53D6\u6570\u636E\uFF1A$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>bigSum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u56DB\u4E2Amap\u65B9\u6CD5\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_6-\u56DB\u4E2Amap\u65B9\u6CD5\u7684\u4F7F\u7528" aria-hidden="true">#</a> 6. \u56DB\u4E2Amap\u65B9\u6CD5\u7684\u4F7F\u7528</h2><ol><li>mapState\u65B9\u6CD5\uFF1A\u7528\u4E8E\u5E2E\u52A9\u6211\u4EEC\u6620\u5C04state\u4E2D\u7684\u6570\u636E\u4E3A\u8BA1\u7B97\u5C5E\u6027</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u501F\u52A9mapState\u751F\u6210\u8BA1\u7B97\u5C5E\u6027\uFF1Asum\u3001school\u3001subject\uFF08\u5BF9\u8C61\u5199\u6CD5\uFF09</span>
     <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">sum</span><span class="token operator">:</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">school</span><span class="token operator">:</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">subject</span><span class="token operator">:</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         
    <span class="token comment">//\u501F\u52A9mapState\u751F\u6210\u8BA1\u7B97\u5C5E\u6027\uFF1Asum\u3001school\u3001subject\uFF08\u6570\u7EC4\u5199\u6CD5\uFF09</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>mapGetters\u65B9\u6CD5\uFF1A\u7528\u4E8E\u5E2E\u52A9\u6211\u4EEC\u6620\u5C04getters\u4E2D\u7684\u6570\u636E\u4E3A\u8BA1\u7B97\u5C5E\u6027</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u501F\u52A9mapGetters\u751F\u6210\u8BA1\u7B97\u5C5E\u6027\uFF1AbigSum\uFF08\u5BF9\u8C61\u5199\u6CD5\uFF09</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">bigSum</span><span class="token operator">:</span><span class="token string">&#39;bigSum&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//\u501F\u52A9mapGetters\u751F\u6210\u8BA1\u7B97\u5C5E\u6027\uFF1AbigSum\uFF08\u6570\u7EC4\u5199\u6CD5\uFF09</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bigSum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>mapActions\u65B9\u6CD5\uFF1A\u7528\u4E8E\u5E2E\u52A9\u6211\u4EEC\u751F\u6210\u4E0Eactions\u5BF9\u8BDD\u7684\u65B9\u6CD5\uFF0C\u5373\uFF1A\u5305\u542B$store.dispatch(xxx)\u7684\u51FD\u6570</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//\u9760mapActions\u751F\u6210\uFF1AincrementOdd\u3001incrementWait\uFF08\u5BF9\u8C61\u5F62\u5F0F\uFF09</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">incrementWait</span><span class="token operator">:</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//\u9760mapActions\u751F\u6210\uFF1AincrementOdd\u3001incrementWait\uFF08\u6570\u7EC4\u5F62\u5F0F\uFF09</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>mapMutations\u65B9\u6CD5\uFF1A\u7528\u4E8E\u5E2E\u52A9\u6211\u4EEC\u751F\u6210\u4E0Emutations\u5BF9\u8BDD\u7684\u65B9\u6CD5\uFF0C\u5373\uFF1A\u5305\u542B$store.commit(xxx)\u7684\u51FD\u6570</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//\u9760mapActions\u751F\u6210\uFF1Aincrement\u3001decrement\uFF08\u5BF9\u8C61\u5F62\u5F0F\uFF09</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">increment</span><span class="token operator">:</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">decrement</span><span class="token operator">:</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">//\u9760mapMutations\u751F\u6210\uFF1AJIA\u3001JIAN\uFF08\u5BF9\u8C61\u5F62\u5F0F\uFF09</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>mapActions\u4E0EmapMutations\u4F7F\u7528\u65F6\uFF0C\u82E5\u9700\u8981\u4F20\u9012\u53C2\u6570\u9700\u8981\uFF1A\u5728\u6A21\u677F\u4E2D\u7ED1\u5B9A\u4E8B\u4EF6\u65F6\u4F20\u9012\u597D\u53C2\u6570\uFF0C\u5426\u5219\u53C2\u6570\u662F\u4E8B\u4EF6\u5BF9\u8C61\u3002</p></blockquote>`,22),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","Vuex.html.vue"]]);export{d as default};