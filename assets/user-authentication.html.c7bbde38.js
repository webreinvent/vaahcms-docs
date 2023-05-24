import{_ as i,r as d,o as l,c as o,a as e,d as n,b as r,e as s}from"./app.62b9cc5c.js";const c={},u=e("h1",{id:"vaahcms",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vaahcms","aria-hidden":"true"},"#"),n(" Vaahcms")],-1),p=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),h={href:"https://github.com/webreinvent/vaahcli",target:"_blank",rel:"noopener noreferrer"},m=s(`<h2 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> Step-1</h2><p>Firstly need to update VaahCms self update Use below command for that :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vaah <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then install theme using below command :</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx vaah cms:t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),v=["src"],g=s(`<h2 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> Step-2</h2><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>After completing theme setup and activation we will generate authentication : Use below command for that :</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx vaah cms:auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> Step-3</h2><p>After run this command it will ask a question :</p><ul><li>? Enter the Theme folder name: MyTheme <code>Answer will be the name of the theme where auth will run.</code></li></ul><p><code>This video will help you to understand how to run auth.</code></p>`,7),b=e("figure",null,[e("iframe",{src:"https://img-v4.getdemo.dev/screenshot/chrome_j3WEb0p0h0.mp4",frameborder:"0",allowfullscreen:"true",style:{width:"100%","aspect-ratio":"16/9"}}," ")],-1),f=s(`<h2 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4" aria-hidden="true">#</a> Step-4</h2><p>Now in terminal it will show some procedure which we have to follow them.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Following steps:
1) Include Routes/frontend/routes-auth.php in Routes/frontend.php of the theme
2) Include VueScripts.js in webpack.mix.js, sample code is below:
    //To js minification
    let jses = [
        &#39;./Resources/assets/js/VueScripts.js&#39;,
    ];

    mix.js(jses,  output_folder+&#39;/build/script.js&#39;);
3) Include the CSS in &lt;head&gt; tag of master/default blade layout of the theme if not included:
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/buefy/dist/buefy.min.css&quot;&gt;

4) Include the JS script before &lt;/body&gt; tag of master/default blade layout of the theme if not included:
    &lt;script src=&quot;https://unpkg.com/jquery@3.6.0/dist/jquery.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://unpkg.com/axios@0.21.1/dist/axios.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://unpkg.com/vue@2.6.14/dist/vue.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://unpkg.com/buefy/dist/buefy.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;{{vh_theme_assets_url(&quot;MyTheme&quot;, &quot;build/script.js&quot;)}}&quot;&gt;&lt;/script&gt;
5) Run npm run dev in the root folder of the theme
6) Now, following routes will be available:
a) &lt;public-url&gt;/signin
b) &lt;public-url&gt;/signup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_=["src"],w=s(`<h2 id="step-5" tabindex="-1"><a class="header-anchor" href="#step-5" aria-hidden="true">#</a> Step-5</h2><p>Include route auth file</p><p><code>VaahCms/Themes/MyTheme/Routes/frontend.php</code></p><p>Add this code in above path</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">include</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;frontend/routes-auth.php&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),k=["src"],q=s(`<h2 id="step-6" tabindex="-1"><a class="header-anchor" href="#step-6" aria-hidden="true">#</a> Step-6</h2><p>Include VueScripts</p><p><code>VaahCms/Themes/MyTheme/webpack.mix.js</code></p><p>Add this code in above path</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> jses <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;./Resources/assets/js/VueScripts.js&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    mix<span class="token punctuation">.</span><span class="token function">js</span><span class="token punctuation">(</span>jses<span class="token punctuation">,</span>  output_folder<span class="token operator">+</span><span class="token string">&#39;/build/script.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),x=["src"],j=s(`<h2 id="step-7" tabindex="-1"><a class="header-anchor" href="#step-7" aria-hidden="true">#</a> Step-7</h2><p>Include the vue router file</p><p><code>VaahCms/Themes/MyTheme/Resources/views/frontend/layouts/default.blade.php</code></p><p>Add this code in above path</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;{{vh_theme_assets_url(&quot;MyTheme&quot;, &quot;build/script.js&quot;)}}&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),y=["src"],T=s(`<h2 id="step-8" tabindex="-1"><a class="header-anchor" href="#step-8" aria-hidden="true">#</a> Step-8</h2><p>Then add <code>/signup</code> ahead of your URL to display sign in page</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>&lt;public-url&gt;/signup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),S=["src"],V=e("p",null,[e("code",null,"In this video the process of signup where data stored after signin, data flow after activation through link explained.")],-1),I=e("figure",null,[e("iframe",{src:"https://img-v4.getdemo.dev/screenshot/chrome_vU88cIvMDV.mp4",frameborder:"0",allowfullscreen:"true",style:{width:"100%","aspect-ratio":"16/9"}}," ")],-1),B=s(`<h2 id="step-9" tabindex="-1"><a class="header-anchor" href="#step-9" aria-hidden="true">#</a> Step-9</h2><p>Then add <code>/signin</code> ahead of your URL to display sign in page</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>&lt;public-url&gt;/signin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),R=["src"];function A(t,M){const a=d("ExternalLinkIcon");return l(),o("div",null,[u,p,e("p",null,[n("This is a guide to use user auth in vaahcms. Before using auth we need to install module and theme For the module and theme set up follow below link:- "),e("a",h,[n("https://github.com/webreinvent/vaahcli"),r(a)])]),m,e("img",{src:t.$withBase("/images/user-auth-1.png")},null,8,v),g,b,f,e("img",{src:t.$withBase("/images/user-auth-4.png")},null,8,_),w,e("img",{src:t.$withBase("/images/user-auth-5.png")},null,8,k),q,e("img",{src:t.$withBase("/images/user-auth-6.png")},null,8,x),j,e("img",{src:t.$withBase("/images/user-auth-7.png")},null,8,y),T,e("img",{src:t.$withBase("/images/user-auth-8.png")},null,8,S),V,I,B,e("img",{src:t.$withBase("/images/user-auth-9.png")},null,8,R)])}const $=i(c,[["render",A],["__file","user-authentication.html.vue"]]);export{$ as default};
