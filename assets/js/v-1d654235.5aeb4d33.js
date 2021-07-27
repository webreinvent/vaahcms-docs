(self.webpackChunkvuepress=self.webpackChunkvuepress||[]).push([[8354],{1001:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>t});const t={key:"v-1d654235",path:"/vaahcms/module/configuration.html",title:"Configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"vaahcms/module/configuration.md",git:{updatedTime:1627366396e3}}},5154:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><ul><li><a href="#introduction"># Introduction</a></li></ul><h4 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h4><p>All of the configuration/Information of Vaahcms&#39;s <code>Modules</code> are stored in the <code>config.php</code> file, which is in the <code>VaahCms\\Modules\\Articles\\Config\\</code> directory.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">[</span>\n    <span class="token string double-quoted-string">&quot;name&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;Articles&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;title&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;Module for Articles Management&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;slug&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;articles&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;thumbnail&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;https://img.site/p/300/160&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;excerpt&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;Manage Articles&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;description&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;Manage Articles&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;download_link&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;author_name&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;articles&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;author_website&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;https://vaah.dev&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;version&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;is_migratable&quot;</span><span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;is_sample_data_available&quot;</span><span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;db_table_prefix&quot;</span><span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;vh_articles_&quot;</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;providers&quot;</span><span class="token operator">=&gt;</span> <span class="token punctuation">[</span>\n        <span class="token string double-quoted-string">&quot;\\\\VaahCms\\\\Modules\\\\Articles\\\\Providers\\\\ArticlesServiceProvider&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string double-quoted-string">&quot;aside-menu-order&quot;</span><span class="token operator">=&gt;</span> <span class="token constant">null</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>Allow them to update their Name, Title, Slug, Description.</li><li>Allow them to update their version.</li><li>Allow them to upload their own logo.</li><li>Allow them to enable or disable the <code>is_migratable</code> features.</li><li>Allow them to enable or disable the <code>is_sample_data_available</code> features. This features allows you to import sample data through seeds.</li></ul><hr>',7),e={render:function(s,n){return t}}}}]);