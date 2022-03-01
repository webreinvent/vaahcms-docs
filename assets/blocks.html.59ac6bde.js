import{o,c as t,a as e,F as c,d as n,e as a}from"./app.0a60dc8c.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const l={},r=e("h1",{id:"blocks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blocks","aria-hidden":"true"},"#"),n(" Blocks")],-1),d=e("p",null,[n("This section provides information about the "),e("code",null,"Blocks"),n(" in "),e("code",null,"CMS"),n(" modules")],-1),p=e("p",null,"Blocks are the boxes of content that are displayed in Layout Regions (such as footer or sidebar) on your page. Everything on a Web Page (with rare exceptions) is a block. Any block can be placed in any region and can be placed multiple times.",-1),h=e("h5",{id:"block-structure-in-the-cms",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#block-structure-in-the-cms","aria-hidden":"true"},"#"),n(" Block structure in the CMS")],-1),u=e("br",null,null,-1),b=["src"],k=a("<p>Viewed on the front end, blocks are built of the following parts</p><ul><li><strong>Block name</strong> - Block name is very important, It is use as a title in code on the Front-End. Name and slug should be unique.</li><li><strong>Block content</strong> - The main display content of the block. For example, the Main menu block\u2019s content is the menu links.</li><li><strong>Block Theme</strong> - Blocks will visible to the selected Theme.</li><li><strong>Block Location</strong> - Location determine the position of block in Web Pages. Eg:- Header, Sidebar etc.</li><li><strong>Block Sort</strong> - When blocks fetch by location name, it will be in order according to this.</li></ul>",2),g=["src"],m=a(`<p><strong>Content Editor:</strong> This Editor allows for both text and multimedia to be edited and styled within a single area. There is option of <code>change mode</code> in Editor so that You can change into html code editor and add custom <code>classes</code> and <code>css</code>.</p><hr><h5 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h5><p>Blocks will be fetch on frontend by two Codes:</p><h5 id="by-block-slug" tabindex="-1"><a class="header-anchor" href="#by-block-slug" aria-hidden="true">#</a> By Block slug</h5><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span> <span class="token function">vh_block</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;header-button&#39;</span><span class="token punctuation">)</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="by-location-name" tabindex="-1"><a class="header-anchor" href="#by-location-name" aria-hidden="true">#</a> By Location name</h5><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span> <span class="token function">vh_location_blocks</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;top&#39;</span><span class="token punctuation">)</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>You have to paste these codes in Web Pages.</p><hr>`,10);function _(s,f){return o(),t(c,null,[r,d,p,h,u,e("img",{src:s.$withBase("/images/cms-block-1.png"),alt:"cms-block-1"},null,8,b),k,e("img",{src:s.$withBase("/images/cms-block-2.png"),alt:"cms-block-2"},null,8,g),m],64)}var v=i(l,[["render",_]]);export{v as default};
