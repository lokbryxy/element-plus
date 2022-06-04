import{c as e,b as s,a as t,d as n,e as p,o,y as c}from"./app.b8bfab5b.js";const l={id:"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4",tabindex:"-1"},i=n("\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4 "),r=n(),u=s("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4","aria-hidden":"true"},"#",-1),d=p(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We provide a example in <a href="https://github.com/element-plus/element-plus-vite-starter" target="_blank" rel="noopener noreferrer">element-plus-vite-starter</a>. Just check it.</p></div><p>Default namespace is <code>el</code>. In special cases, we may need to customize its namespace.</p><p>Since we use sass to write styles, if you want to customize all namespaces. We have to assume that you already use sass.</p><p>You must set <code>ElConfigProvider</code> and scss <code>$namespace</code> at the same time.</p><h3 id="\u8BBE\u7F6E-elconfigprovider" tabindex="-1">\u8BBE\u7F6E <code>ElConfigProvider</code> <a class="header-anchor" href="#\u8BBE\u7F6E-elconfigprovider" aria-hidden="true">#</a></h3><p>Use <code>ElConfigProvider</code> wrap your root component.</p><div class="language-vue"><pre><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ep<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ... --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u8BBE\u7F6E-scss-\u548C-css-\u53D8\u91CF" tabindex="-1">\u8BBE\u7F6E SCSS \u548C CSS \u53D8\u91CF <a class="header-anchor" href="#\u8BBE\u7F6E-scss-\u548C-css-\u53D8\u91CF" aria-hidden="true">#</a></h3><p>Create <code>styles/element/index.scss</code>:</p><div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">// we can add this to custom namespace, default is &#39;el&#39;</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;element-plus/theme-chalk/src/mixins/config.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$namespace</span></span><span class="token punctuation">:</span> <span class="token string">&#39;ep&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre></div><p>Import <code>styles/element/index.scss</code> in <code>vite.config.ts</code>:</p><blockquote><p>Webpack\u4E5F\u662F\u5982\u6B64\uFF0C\u5B83\u9700\u8981\u5728 <code>preprocessorOptions</code> \u4E2D\u8BBE\u7F6E\u3002</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>That&#39;s all.</p>`,14),f='{"title":"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4","description":"","frontmatter":{"title":"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4","lang":"zh-CN"},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4","slug":"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4"},{"level":3,"title":"\u8BBE\u7F6E ElConfigProvider","slug":"\u8BBE\u7F6E-elconfigprovider"},{"level":3,"title":"\u8BBE\u7F6E SCSS \u548C CSS \u53D8\u91CF","slug":"\u8BBE\u7F6E-scss-\u548C-css-\u53D8\u91CF"}],"relativePath":"zh-CN/guide/namespace.md","lastUpdated":null}',k={},v=Object.assign(k,{setup(m){return(g,h)=>{const a=c;return o(),e("div",null,[s("h2",l,[i,t(a,{version:"2.2.0"}),r,u]),d])}}});export{f as __pageData,v as default};
