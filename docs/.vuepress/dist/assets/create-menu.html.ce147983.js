import{_ as i,r as l,o,c,a as n,d as e,b as d,w as p,e as a}from"./app.4c6f355c.js";const u={},r=n("h1",{id:"create-menu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-menu","aria-hidden":"true"},"#"),e(" Create Menu")],-1),v=n("hr",null,null,-1),m=a(`<p>For creating menu, you need to follow some steps:</p><p><strong>1. Create Location through seeds.</strong></p><p>Create a json file of name <code>theme_locations.json</code> at <code>VaahCms/Themes/BlogTheme/Database/Seeds/json/</code> this directory.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;menu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Top&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;excerpt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Top of every page&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
      ├── BlogTheme
          ├── Database/
              ├── Seeds/
                  ├── DatabaseTableSeeder.php
                  ├── SampleDataTableSeeder.php
                  ├── json/
                      ├── theme_locations.json


      
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to add some code in <code>DatabaseTableSeeder.php</code> file.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\\</span>Themes<span class="token punctuation">\\</span>BlogTheme<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeds</span><span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">VaahCms<span class="token punctuation">\\</span>Modules<span class="token punctuation">\\</span>Cms<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>CmsSeeder</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">DatabaseTableSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$theme_slug</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;blogtheme&#39;</span><span class="token punctuation">;</span>


        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/json/theme_locations.json&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">themeLocations</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>


<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you just need to reactivate the theme by visiting this url:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once, the theme is activated, Location will also be created.</p><p><strong>2. Create a Menu.</strong></p><p>To create Menu, visit this url:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project-url&gt;/backend/cms#/menus/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),b=["src"],g=n("ul",null,[n("li",null,"Select Theme"),n("li",null,"Select Location"),n("li",null,"Create Menu Or Select existing Menu")],-1),k=["src"],h=a(`<div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre class="language-php+HTML"><code>{!! vh_location(&#39;top&#39;, true) !!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, you can copy this code and paste it in home blade file. Remove hard code of menu.</p><div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre class="language-php+HTML"><code>&lt;div class=&quot;tabs is-right&quot;&gt;
                                {{--&lt;ul&gt;
                                    &lt;li class=&quot;is-active&quot;&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Examples&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Features&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Team&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Help&lt;/a&gt;&lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;span class=&quot;navbar-item&quot;&gt;
                                        &lt;a class=&quot;button is-white is-outlined&quot;
                                           href=&quot;https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html&quot;&gt;
                                            &lt;span class=&quot;icon&quot;&gt;
                                                &lt;i class=&quot;fa fa-github&quot;&gt;&lt;/i&gt;
                                            &lt;/span&gt;
                                            &lt;span title=&quot;Hello from the other side&quot;&gt;View Source&lt;/span&gt;
                                        &lt;/a&gt;
                                    &lt;/span&gt;--}}




                                {!! vh_location(&#39;top&#39;, true) !!}
                            &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, You can see the CMS menu.</p>`,4),_=["src"];function q(s,f){const t=l("RouterLink");return o(),c("div",null,[r,v,n("p",null,[e("Menus are a collection of links (menu items) used to navigate a website. For more details, see CMS Menus's "),d(t,{to:"/vaahcms/cms/menus.html"},{default:p(()=>[e("documentation")]),_:1})]),m,n("img",{src:s.$withBase("/images/create-menu-1.png"),alt:"create-menu-1"},null,8,b),g,n("img",{src:s.$withBase("/images/create-menu-2.png"),alt:"create-menu-2"},null,8,k),h,n("img",{src:s.$withBase("/images/create-menu-3.png"),alt:"create-menu-3"},null,8,_)])}const y=i(u,[["render",q],["__file","create-menu.html.vue"]]);export{y as default};
