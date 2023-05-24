import{_ as o,r as p,o as i,c as l,a as n,b as e,w as t,d as a,e as c}from"./app.62b9cc5c.js";const r={},u=n("h1",{id:"nuxt",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nuxt","aria-hidden":"true"},"#"),a(" Nuxt")],-1),d={class:"table-of-contents"},v=c(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>This is a guide to maintain a consistent and industry stand code in Laravel.</p><h2 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions" aria-hidden="true">#</a> Naming conventions</h2><h3 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h3><ul><li>Components names should be <code>short</code>, describes what it&#39;s intended use is and is in <code>PascalCase</code></li></ul><p><strong>Bad Examples</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fileUpload.vue
file_upload.vue
FileUploadComponent.vue
file-upload.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Example</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FileUpload.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3><ul><li>Variable names must be <code>short</code>, <code>descriptive</code> and in <code>snake_case</code>. <strong>Bad Examples</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> selectedVariables
<span class="token keyword">let</span> sItem 
<span class="token keyword">let</span> item1
<span class="token keyword">let</span> SelectedItem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Example</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> selected_item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>For boolean variables names should be in passive voice verb question forms</li></ul><p><strong>Bad Examples</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> pageLoading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> loaded <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> loadingFlag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> loading_flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Good Example</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> is_loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="use-kebab-case-for-events" tabindex="-1"><a class="header-anchor" href="#use-kebab-case-for-events" aria-hidden="true">#</a> Use <code>kebab-case</code> for events</h3><p>When it comes to emitting custom events, it’s always best to use kebab-case. This is because in the parent component, that’s the same syntax we use to listen to that event. So for consistency across our components, and to make your code more readable, stick to using kebab-case in both places.</p><p><strong>Example</strong></p><p><code>PopupWindoe.vue</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;close-window&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ParentComponet.vue</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>popup-window</span> <span class="token attr-name">@close-window</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>handleEvent()<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="declare-props-with-camelcase-and-use-kebab-case-in-templates" tabindex="-1"><a class="header-anchor" href="#declare-props-with-camelcase-and-use-kebab-case-in-templates" aria-hidden="true">#</a> Declare props with camelCase and use kebab-case in templates</h3><p>This best practice simply just follows the conventions for each language. In JavaScript, camelCase is the standard and in HTML, it’s kebab-case Therefore, we use them accordingly. Luckily for us, VueJS converts between kebab-case and camelCase for us so we don’t have to worry about anything besides actually declaring them. In JavaScript, camelCase is the standard and in HTML, it’s kebab-case Therefore, we use them accordingly.</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopupWindow</span> <span class="token attr-name">title-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello world<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">titleText</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="components-folder" tabindex="-1"><a class="header-anchor" href="#components-folder" aria-hidden="true">#</a> Components folder</h2><ul><li>All page related exclusive components should be in the page&#39;s <code>component</code> folder</li><li>Any component that can be reused should be in the <code>Vue</code> folder&#39;s <code>component</code> directory.</li></ul><h2 id="prefer-using-composition-api" tabindex="-1"><a class="header-anchor" href="#prefer-using-composition-api" aria-hidden="true">#</a> Prefer using Composition API</h2><ul><li>Vue 3 and Nuxt 3 major development moving forward will be using Composition API, so it is recommended to prefer using Composition over Options API</li></ul><h2 id="always-key-use-inside-v-for" tabindex="-1"><a class="header-anchor" href="#always-key-use-inside-v-for" aria-hidden="true">#</a> Always <code>key</code> use inside <code>v-for</code></h2><p>Using the key attribute with the v-for directive helps your application be constant and predictable whenever you want to manipulate the data. This is necessary so that Vue can track your component state as well as have a constant reference to your different elements. An example where keys are extremely useful is when using animations or Vue transitions. Without keys, Vue will just try to make the DOM has efficient as possible. This may mean elements in the v-for may appear out of order or their behavior will be less predictable. If we have a <em>unique</em> key reference to each element, then we can better predict how exactly our Vue application will handle DOM manipulation.</p><p><strong>Bad Example</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>product in products<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ product }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*<strong>Good Example</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>product in products<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>product.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ product }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="don-t-use-v-if-with-v-for-elements" tabindex="-1"><a class="header-anchor" href="#don-t-use-v-if-with-v-for-elements" aria-hidden="true">#</a> Don’t use <code>v-if</code> with <code>v-for</code> elements</h2><p>It’s super tempting to want to use <code>v-if</code> with <code>v-for</code> in order to filter elements of an array. The problem with this is that VueJS prioritizes the <code>v-for</code> directive over the <code>v-if</code> directive. So under the hood, it loops through every element and THEN checks the v-if conditional. This means that even if we only want to render a few elements from a list, we’ll have to loop through the entire array. This is no good.</p><p>A smarter solution would be to iterate over a computed property. The above example would look something like this. This means that even if we only want to render a few elements from a list, we’ll have to loop through the entire array.</p><p><strong>Bad Example</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
   <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>product in store.products<span class="token punctuation">&#39;</span></span>
   <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>product.price &lt; 500<span class="token punctuation">&#39;</span></span>
<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Good Example</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>product in store.products<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ product }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> cheap_products <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span>products<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">product</span> <span class="token operator">=&gt;</span> product<span class="token punctuation">.</span>price <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="validate-your-props-with-good-definitions" tabindex="-1"><a class="header-anchor" href="#validate-your-props-with-good-definitions" aria-hidden="true">#</a> Validate your <code>props</code> with good definitions</h2><p>It basically saves future you from current you. When designing a large scale project, it’s easy to forget exactly the exact format, type, and other conventions you used for a prop. And if you’re in a larger dev team, your coworkers aren’t mind-readers so make it clear to them how to use your components! So save everyone the hassle of having to painstakingly trace your component to determine a prop’s formatting and please just write prop validations.</p><p><strong>Bad Example</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;status&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Good Example</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token punctuation">[</span><span class="token string">&#39;syncing&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;synced&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;version-conflict&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span>
                <span class="token operator">-</span><span class="token number">1</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53);function k(m,g){const s=p("router-link");return i(),l("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[e(s,{to:"#introduction"},{default:t(()=>[a("Introduction")]),_:1})]),n("li",null,[e(s,{to:"#naming-conventions"},{default:t(()=>[a("Naming conventions")]),_:1}),n("ul",null,[n("li",null,[e(s,{to:"#components"},{default:t(()=>[a("Components")]),_:1})]),n("li",null,[e(s,{to:"#variables"},{default:t(()=>[a("Variables")]),_:1})]),n("li",null,[e(s,{to:"#use-kebab-case-for-events"},{default:t(()=>[a("Use kebab-case for events")]),_:1})]),n("li",null,[e(s,{to:"#declare-props-with-camelcase-and-use-kebab-case-in-templates"},{default:t(()=>[a("Declare props with camelCase and use kebab-case in templates")]),_:1})])])]),n("li",null,[e(s,{to:"#components-folder"},{default:t(()=>[a("Components folder")]),_:1})]),n("li",null,[e(s,{to:"#prefer-using-composition-api"},{default:t(()=>[a("Prefer using Composition API")]),_:1})]),n("li",null,[e(s,{to:"#always-key-use-inside-v-for"},{default:t(()=>[a("Always key use inside v-for")]),_:1})]),n("li",null,[e(s,{to:"#don-t-use-v-if-with-v-for-elements"},{default:t(()=>[a("Don’t use v-if with v-for elements")]),_:1})]),n("li",null,[e(s,{to:"#validate-your-props-with-good-definitions"},{default:t(()=>[a("Validate your props with good definitions")]),_:1})])])]),v])}const b=o(r,[["render",k],["__file","nuxt.html.vue"]]);export{b as default};
