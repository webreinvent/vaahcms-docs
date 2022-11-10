import{_ as d,r as l,o as r,c,a,d as e,b as t,w as i,e as o}from"./app.1098ac2d.js";const h={},u=o('<h1 id="develop-theme" tabindex="-1"><a class="header-anchor" href="#develop-theme" aria-hidden="true">#</a> Develop Theme</h1><hr><h5 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h5><p>The purpose of this tutorial is to develop a VaahCMS Theme for the management of blog with CMS Module.</p><h5 id="step-1-install-vaahcms" tabindex="-1"><a class="header-anchor" href="#step-1-install-vaahcms" aria-hidden="true">#</a> Step 1: Install VaahCMS</h5>',5),p=a("h5",{id:"step-2-install-vaahcli",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#step-2-install-vaahcli","aria-hidden":"true"},"#"),e(" Step 2: Install VaahCLI")],-1),m=a("code",null,"VaahCLI",-1),v={href:"https://www.npmjs.com/package/vaah",target:"_blank",rel:"noopener noreferrer"},g=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i vaah <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VaahCLI will help you to quickly generate <code>Module</code> &amp; <code>Theme</code> scaffolding.</p>`,2),f=a("code",null,"Command Generator",-1),b=o(`<h5 id="step-3-generate-theme" tabindex="-1"><a class="header-anchor" href="#step-3-generate-theme" aria-hidden="true">#</a> Step 3: Generate Theme</h5><p>Lets call the theme as <code>BlogTheme</code>. Open the command line tool &amp; navigate to the project root folder or in PHPStorm open <code>Terminal</code> and to generate scaffolding for the theme, use following command:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>vaah cms<span class="token punctuation">:</span>t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will ask you following questions, answers also mentioned in <code>red</code> color:</p><ul><li>Enter your theme name: <code>BlogTheme</code></li><li>Enter meaningful title for your theme: <code>Theme for Blog</code></li><li>Enter your theme description: <code>Blog</code></li><li>Enter Author name: <code>Vaah</code></li><li>Enter Author email: <code>support@vaah.dev</code></li><li>Enter author website: <code>https://vaah.dev</code></li><li>Enter download URL: (don&#39;t enter anything, just press enter)</li><li>Do you want to run migration when activated (true/false): <code>true</code></li><li>Will your theme contains sample data (true/false): <code>true</code></li></ul><p>Once this step is complete, it will generate a new folder at <code>VaahCMS &gt; Themes &gt; BlogTheme</code>.</p><p>Now, you actually activate the theme by visiting following URL:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once, the theme is activated, you will be able to see the &quot;BlogTheme&quot; on Public url.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project-url&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will see the view generated from the following blade file</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VaahCms/Themes/BlogTheme/Resources/views/frontend/pages/index.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12);function _(x,w){const n=l("RouterLink"),s=l("ExternalLinkIcon");return r(),c("div",null,[u,a("p",null,[e("Steps to install VaahCMS is available at "),t(n,{to:"/vaahcms/installation.html"},{default:i(()=>[e("Getting Started > Installation")]),_:1})]),p,a("p",null,[e("Install NodeJs package "),m,e(" globally, instructions are available at "),a("a",v,[e("VaahCLI"),t(s)]),e(".")]),g,a("p",null,[e("You can effectively use the tool with "),f,e(" at "),t(n,{to:"/vaahcms/generators.html"},{default:i(()=>[e("Generators")]),_:1}),e(".")]),b])}const y=d(h,[["render",_],["__file","develop-theme.html.vue"]]);export{y as default};
