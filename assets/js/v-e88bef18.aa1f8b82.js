"use strict";(self.webpackChunkvuepress=self.webpackChunkvuepress||[]).push([[5744],{5353:(e,t,o)=>{o.r(t),o.d(t,{data:()=>n});const n={key:"v-e88bef18",path:"/vaahcms/configuration.html",title:"Configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Introduction",slug:"introduction",children:[]},{level:2,title:"Environment Configuration",slug:"environment-configuration",children:[]}],filePathRelative:"vaahcms/configuration.md",git:{updatedTime:1627122338e3}}},2074:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var n=o(6252);const i=(0,n.Wm)("h1",{id:"configuration",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),(0,n.Uk)(" Configuration")],-1),a={class:"table-of-contents"},r=(0,n.Uk)("Introduction"),d=(0,n.Uk)("Environment Configuration"),c=(0,n.uE)('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>It is often found that applications are required to be configured for multiple environments and VaahCMS makes it easy to keep the configures for all the environments. By default, VaahCMS inspires from <code>gitflow</code> naming convention for the environments. During the setup of VaahCMS you need to choose the <code>Env</code> which represent environment for which you&#39;re setting up the application. It has following options:</p><ol><li><code>Custom (Features branch)</code>: If multiple developer are developing features, in that case they can have their own <code>.env</code> file.</li><li><code>Local (Features branch)</code>: This is when you&#39;re setting up the application on your local computer.</li><li><code>Develop (Develop branch)</code>: This is when you&#39;re setting up the application on your development server.</li><li><code>Staging (Release or Hotfix branch)</code>: When you want release certain feature or want to do hotfix before deploying the code to production.</li><li><code>Production (Master branch)</code>: Live/Production application.</li></ol><h2 id="environment-configuration" tabindex="-1"><a class="header-anchor" href="#environment-configuration" aria-hidden="true">#</a> Environment Configuration</h2><p>Once the VaahCMS setup is complete, it generates a <code>vaahcms.json</code> file on the root of the project folder. <code>vaahcms.json</code> file contains the <code>APP_URL</code> of different environments and respective <code>env</code> files.</p><table><thead><tr><th>Environment</th><th><code>env</code> File</th></tr></thead><tbody><tr><td>Local</td><td>.env.local</td></tr><tr><td>Develop</td><td>.env.develop</td></tr><tr><td>Release or Hotfix</td><td>.env.staging</td></tr><tr><td>Production</td><td>.env.production</td></tr></tbody></table><p>You can manage the <code>.env</code> variable from the <code>backend</code> control panel from <code>Settings &gt; Env Variables</code>.</p>',7),l={render:function(e,t){const o=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[i,(0,n.Wm)("nav",a,[(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)(o,{to:"#introduction"},{default:(0,n.w5)((()=>[r])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(o,{to:"#environment-configuration"},{default:(0,n.w5)((()=>[d])),_:1})])])]),c],64)}}}}]);