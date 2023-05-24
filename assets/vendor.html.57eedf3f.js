import{_ as p,r as d,o as l,c as i,a as s,b as e,w as t,d as a,e as r}from"./app.62b9cc5c.js";const c={},u=s("h1",{id:"basics-of-vendor-in-vaahstore",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#basics-of-vendor-in-vaahstore","aria-hidden":"true"},"#"),a(" Basics of Vendor in VaahStore")],-1),h={class:"table-of-contents"},v=r('<h2 id="what-is-vendor" tabindex="-1"><a class="header-anchor" href="#what-is-vendor" aria-hidden="true">#</a> What is Vendor?</h2><p>A vendor is a person or business that purchases goods and services from distributors and resells these items to consumers or other businesses.</p><p>In short, it means that the person or business who sell products to <code>Store</code>.</p><h3 id="how-to-create-a-vendor" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-vendor" aria-hidden="true">#</a> How to create a Vendor?</h3><p>After activating <code>VaahStore</code>, to create a vendor go into <code>VaahCMS &gt; Store &gt; Vendors</code> then click on create button. A form to create Vendor will open.</p><h3 id="requirement-to-create-a-vendor" tabindex="-1"><a class="header-anchor" href="#requirement-to-create-a-vendor" aria-hidden="true">#</a> Requirement to create a Vendor</h3><table><thead><tr><th>Fields</th><th></th><th>Descriptions</th></tr></thead><tbody><tr><td>Name</td><td></td><td>This will contain name of the vendor.</td></tr><tr><td>Store</td><td></td><td>This is to choose Store for the vendor.</td></tr><tr><td>Approve By</td><td></td><td>The user which has approved the vendor. By default it is the current active user.</td></tr><tr><td>Owned By</td><td></td><td>The user who owned the vendor.</td></tr><tr><td>Status</td><td></td><td>This is to set the status of the vendor.</td></tr><tr><td>Status Notes</td><td></td><td>Notes are to describe your decision for any status.</td></tr><tr><td>Is Default</td><td></td><td>This is to make current vendor default option for VaahStore.</td></tr><tr><td>Auto Approve Products</td><td></td><td>To automatically approved product from this vendor.</td></tr><tr><td>Is Active</td><td></td><td>This is to Activate or Deactivate your vendor.</td></tr></tbody></table><h2 id="add-product-to-vendor" tabindex="-1"><a class="header-anchor" href="#add-product-to-vendor" aria-hidden="true">#</a> Add product to vendor</h2><p>After creating a vendor, to add products directly to vendor look into the table where all the listing of vendor is coming.</p><p>Over there under the <code>Product</code> column you will find the total count of the product to their respective vendors along with an option <code>+</code> to add new product, click on that.</p>',10),k=["src"],m=s("p",null,[a("After that a "),s("code",null,"Add Product"),a(" page will open.")],-1),b=s("p",null,[a("Inside the "),s("code",null,"Add Product"),a(" page there is a dropdown to select and add product.")],-1),g=["src"],q=r(`<p>All the added product will be shown in the below table, and some basic changes to the product can be done in the table and then click on above save button, to save the changes.</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h3><h4 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>store<span class="token operator">/</span>vendors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="request-samples" tabindex="-1"><a class="header-anchor" href="#request-samples" aria-hidden="true">#</a> Request samples</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>parameter <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;name&quot;</span><span class="token punctuation">,</span>                             <span class="token comment">// String</span>
    <span class="token string double-quoted-string">&quot;slug&quot;</span><span class="token punctuation">,</span>                             <span class="token comment">// String</span>
    <span class="token string double-quoted-string">&quot;vh_st_store_id&quot;</span><span class="token punctuation">,</span>                   <span class="token comment">// JSON</span>
    <span class="token string double-quoted-string">&quot;approved_by&quot;</span><span class="token punctuation">,</span>                      <span class="token comment">// JSON</span>
    <span class="token string double-quoted-string">&quot;owned_by&quot;</span><span class="token punctuation">,</span>                         <span class="token comment">// JSON</span>
    <span class="token string double-quoted-string">&quot;taxonomy_id_vendor_status&quot;</span><span class="token punctuation">,</span>        <span class="token comment">// JSON</span>
    <span class="token string double-quoted-string">&quot;status_notes&quot;</span><span class="token punctuation">,</span>                     <span class="token comment">// String</span>
    <span class="token string double-quoted-string">&quot;is_default&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// boolean</span>
    <span class="token string double-quoted-string">&quot;auto_approve_products&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// boolean</span>
    <span class="token string double-quoted-string">&quot;is_active&quot;</span><span class="token punctuation">,</span>                        <span class="token comment">// boolean</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="response-sample" tabindex="-1"><a class="header-anchor" href="#response-sample" aria-hidden="true">#</a> Response sample</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;status&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;messages&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">&quot;Saved&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-list" tabindex="-1"><a class="header-anchor" href="#get-list" aria-hidden="true">#</a> Get List</h3><h4 id="url-1" tabindex="-1"><a class="header-anchor" href="#url-1" aria-hidden="true">#</a> URL</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>store<span class="token operator">/</span>vendors<span class="token operator">?</span>rows<span class="token operator">=</span><span class="token punctuation">{</span>number_of_rows<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="response-sample-1" tabindex="-1"><a class="header-anchor" href="#response-sample-1" aria-hidden="true">#</a> Response sample</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;success&quot;</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-record" tabindex="-1"><a class="header-anchor" href="#get-record" aria-hidden="true">#</a> Get Record</h3><h4 id="url-2" tabindex="-1"><a class="header-anchor" href="#url-2" aria-hidden="true">#</a> URL</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>store<span class="token operator">/</span>vendors<span class="token operator">/</span><span class="token punctuation">{</span>record_id<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="response-sample-2" tabindex="-1"><a class="header-anchor" href="#response-sample-2" aria-hidden="true">#</a> Response sample</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;success&quot;</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="save-product" tabindex="-1"><a class="header-anchor" href="#save-product" aria-hidden="true">#</a> Save Product</h3><h4 id="url-3" tabindex="-1"><a class="header-anchor" href="#url-3" aria-hidden="true">#</a> URL</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>store<span class="token operator">/</span>vendors<span class="token operator">/</span>product
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="request-samples-1" tabindex="-1"><a class="header-anchor" href="#request-samples-1" aria-hidden="true">#</a> Request samples</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>parameter <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span>
    <span class="token string single-quoted-string">&#39;same as create&#39;</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span>
    <span class="token string double-quoted-string">&quot;products&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string double-quoted-string">&quot;can_update&quot;</span>                <span class="token comment">// boolean</span>
        <span class="token string double-quoted-string">&quot;id&quot;</span>                <span class="token comment">// product id</span>
        <span class="token string double-quoted-string">&quot;product&quot;</span>                <span class="token comment">// JSON</span>
        <span class="token string double-quoted-string">&quot;status&quot;</span>                <span class="token comment">// JSON</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function _(o,f){const n=d("router-link");return l(),i("div",null,[u,s("nav",h,[s("ul",null,[s("li",null,[e(n,{to:"#what-is-vendor"},{default:t(()=>[a("What is Vendor?")]),_:1}),s("ul",null,[s("li",null,[e(n,{to:"#how-to-create-a-vendor"},{default:t(()=>[a("How to create a Vendor?")]),_:1})]),s("li",null,[e(n,{to:"#requirement-to-create-a-vendor"},{default:t(()=>[a("Requirement to create a Vendor")]),_:1})])])]),s("li",null,[e(n,{to:"#add-product-to-vendor"},{default:t(()=>[a("Add product to vendor")]),_:1})]),s("li",null,[e(n,{to:"#api"},{default:t(()=>[a("API")]),_:1}),s("ul",null,[s("li",null,[e(n,{to:"#create"},{default:t(()=>[a("create")]),_:1})]),s("li",null,[e(n,{to:"#get-list"},{default:t(()=>[a("Get List")]),_:1})]),s("li",null,[e(n,{to:"#get-record"},{default:t(()=>[a("Get Record")]),_:1})]),s("li",null,[e(n,{to:"#save-product"},{default:t(()=>[a("Save Product")]),_:1})])])])])]),v,s("img",{src:o.$withBase("/images/vaahstore/product_link_btn_in_vendor.png"),alt:"product linking from vendor"},null,8,k),m,b,s("img",{src:o.$withBase("/images/vaahstore/dropdown_to_select_add_product_in_vendor.png"),alt:"product linking from vendor"},null,8,g),q])}const x=p(c,[["render",_],["__file","vendor.html.vue"]]);export{x as default};
