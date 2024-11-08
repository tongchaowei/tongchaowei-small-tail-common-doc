import{B as F}from"./chunks/theme.DwObyZ02.js";import{d as v,t as h,w as b,o as f,c as B,aT as y,a as t,y as i,z as e,I as E,b as C,U as p}from"./chunks/framework.Sc01t92m.js";const x={style:{height:"300px","border-radius":"1rem",overflow:"hidden"}},D={style:{height:"100%",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},S=JSON.parse('{"title":"StGradientBg1 组件","description":"","frontmatter":{},"headers":[],"relativePath":"ui-vue3/gradient-bg-1/index.md","filePath":"ui-vue3/gradient-bg-1/index.md"}'),_={name:"ui-vue3/gradient-bg-1/index.md"},V=v({..._,setup(A){const o=["#43CBFF","#9708CC"],k=h(JSON.stringify(o)),d=h(o),l=h("500%"),n=h(2e4);return b(k,g=>{try{d.value=JSON.parse(g)}catch(s){console.error(s)}},{deep:!0}),(g,s)=>{const c=p("el-input"),r=p("el-form-item"),u=p("el-input-number"),m=p("el-form");return f(),B("div",null,[s[3]||(s[3]=y('<h1 id="stgradientbg1-组件" tabindex="-1">StGradientBg1 组件 <a class="header-anchor" href="#stgradientbg1-组件" aria-label="Permalink to &quot;StGradientBg1 组件&quot;">​</a></h1><p>具有渐变过渡动画的背景组件 1</p><div class="info custom-block"><p class="custom-block-title">组件样式来源</p><p><a href="https://www.bilibili.com/video/BV1vS4y1j7Yo/" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1vS4y1j7Yo/</a></p></div><div class="tip custom-block"><p class="custom-block-title">组件源码地址</p><p><a href="https://gitee.com/tongchaowei/small-tail-admin/tree/dev/front-end/monorepo-vite-vue3-ts/small-tail-common/ui-vue3/src/components/StGradientBg1" target="_blank" rel="noreferrer">https://gitee.com/tongchaowei/small-tail-admin/tree/dev/front-end/monorepo-vite-vue3-ts/small-tail-common/ui-vue3/src/components/StGradientBg1</a></p></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2>',5)),t("div",x,[i(C(F),{colors:d.value,size:l.value,speed:n.value},{default:e(()=>[t("div",D,[t("div",null,"colors: "+E(d.value),1),t("div",null,"size: "+E(l.value),1),t("div",null,"speed: "+E(n.value),1)])]),_:1},8,["colors","size","speed"])]),i(m,{"label-width":"auto",style:{"margin-top":"20px"}},{default:e(()=>[i(r,{label:"colors"},{default:e(()=>[i(c,{modelValue:k.value,"onUpdate:modelValue":s[0]||(s[0]=a=>k.value=a),clearable:""},null,8,["modelValue"])]),_:1}),i(r,{label:"size"},{default:e(()=>[i(c,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=a=>l.value=a),clearable:""},null,8,["modelValue"])]),_:1}),i(r,{label:"speed"},{default:e(()=>[i(u,{modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=a=>n.value=a),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),s[4]||(s[4]=y(`<details class="details custom-block"><summary>示例代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {ref} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> colors</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#43CBFF&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#9708CC&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;500%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> speed</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height: 300px; border-radius: 1rem; overflow: hidden;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">StGradientBg1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      :colors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;colors&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      :size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;size&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      :speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;speed&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;colors: {{ colors }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;size: {{ size }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;speed: {{ speed }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">StGradientBg1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="组件参数" tabindex="-1">组件参数 <a class="header-anchor" href="#组件参数" aria-label="Permalink to &quot;组件参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数名</th><th style="text-align:left;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td>colors</td><td style="text-align:left;">背景渐变颜色，如果传递的值为空或者不为数组或者数组长度小于2，则会使用该参数的默认值</td><td style="text-align:center;"><code>Array&lt;string&gt;</code></td><td style="text-align:center;"><code>[&#39;#2c3e50&#39;, &#39;#27ae60&#39;, &#39;#2980b9&#39;, &#39;#e74c3c&#39;, &#39;#8e44ad&#39;]</code></td></tr><tr><td>size</td><td style="text-align:left;">背景的大小，该参数用于设置组件根元素的 <code>background-size</code> css 属性，如果传递的值为数字，则其单位默认为 px</td><td style="text-align:center;"><code>string | number</code></td><td style="text-align:center;"><code>&#39;500%&#39;</code></td></tr><tr><td>speed</td><td style="text-align:left;">背景过渡动画执行速度，也可以说是背景过渡动画执行一次所需的时间，该参数用于设置组件根元素的 <code>background-duration</code> css 属性，单位为秒，如果传递的值为数字，则其单位默认为 ms</td><td style="text-align:center;"><code>string | number</code></td><td style="text-align:center;">2000</td></tr></tbody></table>`,3))])}}});export{S as __pageData,V as default};