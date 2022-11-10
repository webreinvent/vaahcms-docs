import{_ as r,r as n,o as s,c,a,d as e,b as t,w as i,e as o}from"./app.1098ac2d.js";const h={},u=o('<h1 id="develop-module" tabindex="-1"><a class="header-anchor" href="#develop-module" aria-hidden="true">#</a> Develop Module</h1><h5 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h5><p>The purpose of this tutorial is to develop a VaahCMS Module for the management of articles with CRUD operations in the backend of the VaahCMS.</p><h5 id="step-1-install-vaahcms" tabindex="-1"><a class="header-anchor" href="#step-1-install-vaahcms" aria-hidden="true">#</a> Step 1: Install VaahCMS</h5>',4),p=a("h5",{id:"step-2-install-vaahcli",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#step-2-install-vaahcli","aria-hidden":"true"},"#"),e(" Step 2: Install VaahCLI")],-1),m=a("code",null,"VaahCLI",-1),v={href:"https://www.npmjs.com/package/vaah",target:"_blank",rel:"noopener noreferrer"},g=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i vaah <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VaahCLI will help you to quickly generate <code>Module</code> &amp; <code>Theme</code> scaffolding.</p>`,2),f=a("code",null,"Command Generator",-1),_=o(`<h5 id="step-3-generate-module" tabindex="-1"><a class="header-anchor" href="#step-3-generate-module" aria-hidden="true">#</a> Step 3: Generate Module</h5><p>Lets call the module as <code>Articles</code>. Open the command line tool &amp; navigate to the project root folder or in PHPStorm open <code>Terminal</code> and to generate scaffolding for the module, use following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vaah cms:m or npx vaah cms:m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will ask you following questions, answers also mentioned in <code>red</code> color:</p><ul><li>Enter your module name: <code>Articles</code></li><li>Enter meaningful title for your module: <code>Module for Articles Management</code></li><li>Enter your module description: <code>Manage Articles</code></li><li>Enter Author name: <code>Vaah</code></li><li>Enter Author email: <code>support@vaah.dev</code></li><li>Enter author website: <code>https://vaah.dev</code></li><li>Enter download URL: (don&#39;t enter anything, just press enter)</li><li>Do you want to run migration when activated (true/false): <code>true</code></li><li>Will your module contains sample data (true/false): <code>true</code></li></ul><p>Once this step is complete, it will generate a new folder at <code>VaahCMS &gt; Articles</code> or visit following url you will see the module:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>`,8);function b(x,w){const l=n("RouterLink"),d=n("ExternalLinkIcon");return s(),c("div",null,[u,a("p",null,[e("Steps to install VaahCMS is available at "),t(l,{to:"/vaahcms/installation.html"},{default:i(()=>[e("Getting Started > Installation")]),_:1})]),p,a("p",null,[e("Install NodeJs package "),m,e(" globally, instructions are available at "),a("a",v,[e("VaahCLI"),t(d)]),e(".")]),g,a("p",null,[e("You can effectively use the tool with "),f,e(" at "),t(l,{to:"/vaahcms/generators.html"},{default:i(()=>[e("Generators")]),_:1}),e(".")]),_])}const V=r(h,[["render",b],["__file","develop-module.html.vue"]]);export{V as default};
