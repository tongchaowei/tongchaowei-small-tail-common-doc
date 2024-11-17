import{q as v}from"./chunks/theme.I1p5uG3t.js";import{d as f,t as e,w as B,o as D,c as x,aT as c,a as t,y as i,z as l,I as d,b as A,U as n}from"./chunks/framework.Sc01t92m.js";const _={style:{height:"300px","border-radius":"1rem",overflow:"hidden"}},q={style:{height:"100%",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},N=JSON.parse('{"title":"StGradientBg2 组件","description":"","frontmatter":{},"headers":[],"relativePath":"ui-vue3/gradient-bg-2/index.md","filePath":"ui-vue3/gradient-bg-2/index.md"}'),w={name:"ui-vue3/gradient-bg-2/index.md"},P=f({...w,setup(S){const h=e("#e493d0"),g=["#43CBFF","#9708CC","red","orange","yellow","skyblue"],E=e(JSON.stringify(g)),o=e(g),k=e(15e3),p=e(!0);return B(E,y=>{try{o.value=JSON.parse(y)}catch(s){console.error(s)}},{deep:!0}),(y,s)=>{const u=n("el-color-picker"),r=n("el-form-item"),F=n("el-input"),C=n("el-input-number"),m=n("el-switch"),b=n("el-form");return D(),x("div",null,[s[4]||(s[4]=c('<h1 id="stgradientbg2-组件" tabindex="-1">StGradientBg2 组件 <a class="header-anchor" href="#stgradientbg2-组件" aria-label="Permalink to &quot;StGradientBg2 组件&quot;">​</a></h1><p>具有渐变过渡动画的背景组件 2</p><div class="info custom-block"><p class="custom-block-title">组件样式来源</p><p><a href="https://www.bilibili.com/video/BV1b44y1e7Wx/" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1b44y1e7Wx/</a></p></div><div class="tip custom-block"><p class="custom-block-title">组件源码地址</p><p><a href="https://gitee.com/tongchaowei/small-tail-admin/tree/dev/front-end/monorepo-vite-vue3-ts/small-tail-common/ui-vue3/src/components/StGradientBg2" target="_blank" rel="noreferrer">https://gitee.com/tongchaowei/small-tail-admin/tree/dev/front-end/monorepo-vite-vue3-ts/small-tail-common/ui-vue3/src/components/StGradientBg2</a></p></div><div class="warning custom-block"><p class="custom-block-title">注意事项</p><ol><li>组件中的背景渐变过渡效果是通过 CSS 属性 <code>背景图片</code> 中多个圆形径向渐变背景图片的移动实现的，其中，圆形径向渐变背景图片的半径长度以及中心点位置( 包括初始中心点位置和过渡中心点位置)都是随机生成的；</li><li>所有的圆形径向渐变背景图片都是从中心点开始由指定的颜色向外透明渐变；</li><li>圆形径向渐变背景图片半径长度的随机生成范围为 <code>[50vmax, 100vmax]</code>；</li><li>圆形径向渐变背景图片的中心点位置的随机生成范围为 <code>[-50vmax, 50vmax]</code>；</li></ol></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2>',6)),t("div",_,[i(A(v),{bgColor:h.value,gradientColors:o.value,speed:k.value,blur:p.value},{default:l(()=>[t("div",q,[t("div",null,"bgColor: "+d(h.value),1),t("div",null,"gradientColors: "+d(o.value),1),t("div",null,"speed: "+d(k.value),1),t("div",null,"blur: "+d(p.value),1)])]),_:1},8,["bgColor","gradientColors","speed","blur"])]),i(b,{"label-width":"auto",style:{"margin-top":"20px"}},{default:l(()=>[i(r,{label:"bgColor"},{default:l(()=>[i(u,{modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=a=>h.value=a),clearable:""},null,8,["modelValue"])]),_:1}),i(r,{label:"gradientColors"},{default:l(()=>[i(F,{modelValue:E.value,"onUpdate:modelValue":s[1]||(s[1]=a=>E.value=a),clearable:""},null,8,["modelValue"])]),_:1}),i(r,{label:"speed"},{default:l(()=>[i(C,{modelValue:k.value,"onUpdate:modelValue":s[2]||(s[2]=a=>k.value=a),clearable:""},null,8,["modelValue"])]),_:1}),i(r,{label:"blur"},{default:l(()=>[i(m,{modelValue:p.value,"onUpdate:modelValue":s[3]||(s[3]=a=>p.value=a)},null,8,["modelValue"])]),_:1})]),_:1}),s[5]||(s[5]=c(`<details class="details custom-block"><summary>示例代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {StGradientBg2} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;st-common-ui-vue3&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {ref, watch} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bgColor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#e493d0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gradientColorsDefault</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#43CBFF&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#9708CC&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;red&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;orange&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;yellow&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;skyblue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gradientColorsInput</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gradientColorsDefault))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gradientColors</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gradientColorsDefault)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> speed</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> blur</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  watch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gradientColorsInput, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      gradientColors.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(val)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, {deep: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height: 300px; border-radius: 1rem; overflow: hidden;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">StGradientBg2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      :bgColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bgColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      :gradientColors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gradientColors&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      :speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;speed&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      :blur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blur&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;bgColor: {{ bgColor }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;gradientColors: {{ gradientColors }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;speed: {{ speed }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;blur: {{ blur }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">StGradientBg2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="组件参数" tabindex="-1">组件参数 <a class="header-anchor" href="#组件参数" aria-label="Permalink to &quot;组件参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数名</th><th style="text-align:left;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td>bgColor</td><td style="text-align:left;">背景颜色</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>&#39;#e493d0&#39;</code></td></tr><tr><td>gradientColors</td><td style="text-align:left;">组件中的圆形径向渐变背景图片的颜色列表</td><td style="text-align:center;"><code>string[]</code></td><td style="text-align:center;"><code>[&#39;rgb(235, 105, 78)&#39;,&#39;rgb(243, 11, 164)&#39;,&#39;rgb(254, 234, 131)&#39;,&#39;rgb(170, 142, 245)&#39;,&#39;rgb(248, 192, 147)&#39;]</code></td></tr><tr><td>speed</td><td style="text-align:left;">过渡动画执行速度，即过渡动画执行一次所需的时间，如果传递的参数值为数字，则其单位默认为 ms</td><td style="text-align:center;"><code>number | string</code></td><td style="text-align:center;"><code>&#39;15s&#39;</code></td></tr><tr><td>blur</td><td style="text-align:left;">是否开启对背景的模糊效果</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td></tr></tbody></table><h2 id="组件插槽" tabindex="-1">组件插槽 <a class="header-anchor" href="#组件插槽" aria-label="Permalink to &quot;组件插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th>插槽名</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td>default</td><td style="text-align:left;">组件内容区域</td></tr></tbody></table>`,5))])}}});export{N as __pageData,P as default};
