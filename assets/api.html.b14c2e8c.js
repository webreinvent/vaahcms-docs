import{_ as l,r as o,o as i,c as r,a as n,d as s,b as a,w as u,e}from"./app.62b9cc5c.js";const c={},d=n("h1",{id:"api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),s(" API")],-1),v={href:"https://laravel.com/docs/8.x/eloquent-resources#introduction",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>Of course, you may always convert Eloquent models or collections to JSON using their toJson methods; however, Eloquent resources provide more granular and robust control over the JSON serialization of your models and their relationships.</p><h3 id="sign-in" tabindex="-1"><a class="header-anchor" href="#sign-in" aria-hidden="true">#</a> Sign In</h3><p>To get authorization token you need to <code>sign in</code> first. after the successfully <code>sign in</code>, an <code>api_token</code> in the response will be there which you can use as authorization token.</p><p>For <code>sign in</code> follow below link :</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>signin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples" tabindex="-1"><a class="header-anchor" href="#request-samples" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params  = {
    email:&quot;&quot;,                    
    password:&quot;&quot;,                 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples" tabindex="-1"><a class="header-anchor" href="#response-samples" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............

            <span class="token property">&quot;api_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3EsIxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdyN9&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sign-up" tabindex="-1"><a class="header-anchor" href="#sign-up" aria-hidden="true">#</a> Sign Up</h3><p>If you don&#39;t have an account by using sign up you can create account</p><p>For <code>sign up</code> follow below link :</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>signup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-1" tabindex="-1"><a class="header-anchor" href="#request-samples-1" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {
    first_name:&quot;&quot;,               
    email:&quot;&quot;,                    
    password:&quot;&quot;,                 
    password_confirmation:&quot;&quot;,    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-1" tabindex="-1"><a class="header-anchor" href="#response-samples-1" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved successfully&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h3>`,18),m={href:"https://laravel.com/docs/5.8/api-authentication",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"API Token",-1),q=e(`<p>The most common way of accessing OAuth 2.0 APIs is using a “Bearer Token”. This is a single string which acts as the authentication of the API request, sent in an HTTP “Authorization” header. The string is meaningless to clients using it, and may be of varying lengths.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Authorization: Bearer &lt;api-token&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can ask to Admin for assigning you a <code>API Token</code>.</p><p>The following is a curl example using the HTTP Authorization header using the Bearer schema with a line break and spaces for readability.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -H &#39;Authorization: Bearer &lt;api-token&gt;&#39; \\
     &lt;public-url&gt;/api/users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="registration" tabindex="-1"><a class="header-anchor" href="#registration" aria-hidden="true">#</a> Registration : -</h3><h4 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> Create</h4><p>Create new registration with HTTP request. During the creation you can set up attributes.</p><h5 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-2" tabindex="-1"><a class="header-anchor" href="#request-samples-2" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&#39;&#39;                 
    email:&quot;&quot;,                    
    username:&quot;&quot;,
    password:&quot;&quot;,                 
    display_name:&quot;&quot;,
    title:&quot;&quot;,
    designation:&quot;&quot;,
    first_name:&quot;&quot;,              
    middle_name:&quot;&quot;,
    last_name:&quot;&quot;,
    gender:&quot;&quot;,                    
    country_calling_code:&quot;&quot;,
    phone:&quot;&quot;, 
    bio:&quot;&quot;,
    timezone:&quot;&quot;,
    alternate_email:&quot;&quot;,
    avatar_url:&quot;&quot;,
    birth:&quot;&quot;, 
    country:&quot;&quot;,
    country_code:&quot;&quot;,
    status:&quot;&quot;,                  
    activation_code:&quot;&quot;,
    activation_code_sent_at:&quot;&quot;,
    activated_ip:&quot;&quot;,
    invited_by:&quot;&quot;,
    invited_at:&quot;&quot;,
    invited_for_key:&quot;&quot;, 
    invited_for_value:&quot;&quot;, 
    user_id:&quot;&quot;,
    user_created_at:&quot;&quot;, 
    created_ip:&quot;&quot;,
    registration_id:&quot;&quot;, 
    meta:&quot;&quot;                     
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-2" tabindex="-1"><a class="header-anchor" href="#response-samples-2" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved successfully.&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list" tabindex="-1"><a class="header-anchor" href="#get-a-list" aria-hidden="true">#</a> Get a List</h4><p>Get a list of the Registration objects and their properties in a list with Pagination.</p><p>This method supports some of the query parameters to help customize the response.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>q</td><td>Value to be search in <code>first_name</code>, <code>middle_name</code>, <code>last_name</code>, <code>display_name</code>, <code>email</code> and <code>id</code> Column</td><td>String</td><td></td></tr><tr><td>per_page</td><td><code>N</code> Item Per Page</td><td>Number</td><td>20</td></tr><tr><td>from</td><td>Initial Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>to</td><td>Final Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>status</td><td>Status of Registration and may be either <code>email-verification-vending</code>, <code>email-verified</code> or <code>user-created</code></td><td>String</td><td></td></tr><tr><td>trashed</td><td>Set true to show <code>Trashed (Soft Delete)</code> data</td><td>Boolean</td><td>false</td></tr></tbody></table><h5 id="url-1" tabindex="-1"><a class="header-anchor" href="#url-1" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>registrations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-3" tabindex="-1"><a class="header-anchor" href="#request-samples-3" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,
    q:&quot;&quot;,
    from:&quot;&quot;,
    to:&quot;&quot;,
    status:&quot;&quot;,
    per_page:&quot;&quot;,
    trashed:&quot;&quot;     
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-3" tabindex="-1"><a class="header-anchor" href="#response-samples-3" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/registrations?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/registrations?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/registrations?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/registrations&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item" tabindex="-1"><a class="header-anchor" href="#get-item" aria-hidden="true">#</a> Get Item</h4><p>Get a Item of the Registration objects. This will retrieves a User by their custom attributes, and returns all the properties of Registration.</p><p>Column can be id, uuid, email, username or Registration&#39;s attribute and their value.</p><h5 id="url-2" tabindex="-1"><a class="header-anchor" href="#url-2" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-4" tabindex="-1"><a class="header-anchor" href="#request-samples-4" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {
   api_token:&quot;&quot;,
   trashed:&quot;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-4" tabindex="-1"><a class="header-anchor" href="#response-samples-4" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h4><p>Simple HTTP request to Registrations API and you can update standard attributes for a user within few seconds!</p><p>Column can be id, uuid, email, username or Registration&#39;s attribute and their value.</p><h5 id="url-3" tabindex="-1"><a class="header-anchor" href="#url-3" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-5" tabindex="-1"><a class="header-anchor" href="#request-samples-5" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&#39;&#39;                 
    email:&quot;&quot;,                    
    username:&quot;&quot;,
    password:&quot;&quot;,                
    display_name:&quot;&quot;,
    title:&quot;&quot;,
    designation:&quot;&quot;,
    first_name:&quot;&quot;,               
    middle_name:&quot;&quot;,
    last_name:&quot;&quot;,
    gender:&quot;&quot;,                   
    country_calling_code:&quot;&quot;,
    phone:&quot;&quot;, 
    bio:&quot;&quot;,
    timezone:&quot;&quot;,
    alternate_email:&quot;&quot;,
    avatar_url:&quot;&quot;,
    birth:&quot;&quot;, 
    country:&quot;&quot;,
    country_code:&quot;&quot;,
    status:&quot;&quot;,                  
    activation_code:&quot;&quot;,
    activation_code_sent_at:&quot;&quot;,
    activated_ip:&quot;&quot;,
    invited_by:&quot;&quot;,
    invited_at:&quot;&quot;,
    invited_for_key:&quot;&quot;, 
    invited_for_value:&quot;&quot;, 
    user_id:&quot;&quot;,
    user_created_at:&quot;&quot;, 
    created_ip:&quot;&quot;,
    registration_id:&quot;&quot;, 
    meta:&quot;&quot;                     
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-5" tabindex="-1"><a class="header-anchor" href="#response-samples-5" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h4><p>Simple HTTP request to Registration API to delete registration.</p><p>Column can be id, uuid, email, username or Registration&#39;s attribute and their value.</p><h5 id="url-4" tabindex="-1"><a class="header-anchor" href="#url-4" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-6" tabindex="-1"><a class="header-anchor" href="#response-samples-6" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Action was successful&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="create-user" tabindex="-1"><a class="header-anchor" href="#create-user" aria-hidden="true">#</a> Create User</h4><p>Simple HTTP request to Registration API to create User.</p><h5 id="url-5" tabindex="-1"><a class="header-anchor" href="#url-5" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>create<span class="token operator">-</span>user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-7" tabindex="-1"><a class="header-anchor" href="#response-samples-7" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            ...........
            ...........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;User is created.&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="users" tabindex="-1"><a class="header-anchor" href="#users" aria-hidden="true">#</a> Users</h3>`,56),h=e(`<h4 id="create-user-1" tabindex="-1"><a class="header-anchor" href="#create-user-1" aria-hidden="true">#</a> Create user</h4><p>Create new user with HTTP request. During the creation you can set up attributes.</p><h5 id="url-6" tabindex="-1"><a class="header-anchor" href="#url-6" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span>create<span class="token operator">?</span>api_token<span class="token operator">=</span>xxxxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-6" tabindex="-1"><a class="header-anchor" href="#request-samples-6" aria-hidden="true">#</a> Request samples</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {
      api_token:&quot;&quot;,
      email:&quot;&quot;,
      username:&quot;&quot;,
      password:&quot;&quot;,
      display_name:&quot;&quot;,
      title:&quot;&quot;,
      designation:&quot;&quot;,
      first_name:&quot;&quot;,
      middle_name:&quot;&quot;,
      last_name:&quot;&quot;,
      gender:&quot;&quot;,
      country_calling_code:&quot;&quot;,
      phone:&quot;&quot;,
      bio:&quot;&quot;,
      timezone:&quot;&quot;,
      alternate_email:&quot;&quot;,
      avatar_url:&quot;&quot;,
      birth:&quot;&quot;,
      country:&quot;&quot;,
      country_code:&quot;&quot;,
      is_active:&quot;&quot;,
      status:&quot;&quot;,
      activation_code:&quot;&quot;,
      activation_code_sent_at:&quot;&quot;,
      activated_ip:&quot;&quot;,
      invited_by:&quot;&quot;,
      invited_at:&quot;&quot;,
      invited_for_key:&quot;&quot;,
      invited_for_value:&quot;&quot;,
      user_id:&quot;&quot;,
      user_created_at:&quot;&quot;,
      created_ip:&quot;&quot;,
      registration_id:&quot;&quot;,
      meta:&quot;&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-8" tabindex="-1"><a class="header-anchor" href="#response-samples-8" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           ..........
           ..........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved successfully.&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list-of-users" tabindex="-1"><a class="header-anchor" href="#get-a-list-of-users" aria-hidden="true">#</a> Get a List of Users</h4><p>Get a list of the <code>User</code> objects and their properties in a list with <code>Pagination</code>.</p><p>This method supports some of the query parameters to help customize the response.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>q</td><td>Value to be search in <code>first_name</code>, <code>middle_name</code>, <code>last_name</code>, <code>display_name</code>, <code>email</code> and <code>id</code> Column</td><td>String</td><td></td></tr><tr><td>per_page</td><td><code>N</code> Item Per Page</td><td>Number</td><td>20</td></tr><tr><td>from</td><td>Initial Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>to</td><td>Final Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>status</td><td>Status of User and may be either <code>active</code> or <code>inactive</code></td><td>String</td><td></td></tr><tr><td>trashed</td><td>Set true to show <code>Trashed (Soft Delete)</code> data</td><td>Boolean</td><td>false</td></tr></tbody></table><h5 id="url-7" tabindex="-1"><a class="header-anchor" href="#url-7" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">?</span>api_token<span class="token operator">=</span>xxxxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-7" tabindex="-1"><a class="header-anchor" href="#request-samples-7" aria-hidden="true">#</a> Request samples</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {
     api_token:&quot;&quot;,
     q:&quot;&quot;,
     from:&quot;&quot;,
     to:&quot;&quot;,
     status:&quot;&quot;,
     per_page:&quot;&quot;,
     trashed:&quot;&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-9" tabindex="-1"><a class="header-anchor" href="#response-samples-9" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/users?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/users?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/users?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/users&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-user-item" tabindex="-1"><a class="header-anchor" href="#get-user-item" aria-hidden="true">#</a> Get User Item</h4><p>Get a Item of the <code>User</code> objects . This will retrieves a <code>User</code> by their <code>custom attributes</code>, and returns all the properties of User.</p><p>Column can be <code>id</code>, <code>uuid</code>, <code>email</code>, <code>username</code> or User&#39;s attribute and their value.</p><h5 id="url-8" tabindex="-1"><a class="header-anchor" href="#url-8" aria-hidden="true">#</a> URL</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;public-url&gt;/api/cms/users/{column}/{value}\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-8" tabindex="-1"><a class="header-anchor" href="#request-samples-8" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

   trashed:&quot;&quot;                  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-10" tabindex="-1"><a class="header-anchor" href="#response-samples-10" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update-1" tabindex="-1"><a class="header-anchor" href="#update-1" aria-hidden="true">#</a> Update</h4><p>Simple HTTP request to Users API and you can update standard attributes for a user within few seconds!</p><p>Column can be <code>id</code>, <code>uuid</code>, <code>email</code>, <code>username</code> or User&#39;s attribute and their value.</p><h5 id="url-9" tabindex="-1"><a class="header-anchor" href="#url-9" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-9" tabindex="-1"><a class="header-anchor" href="#request-samples-9" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {
         api_token:&#39;&#39;                 
         email:&quot;&quot;,                    
         username:&quot;&quot;,
         password:&quot;&quot;,                 
         display_name:&quot;&quot;,
         title:&quot;&quot;,
         designation:&quot;&quot;,
         first_name:&quot;&quot;,               
         middle_name:&quot;&quot;,
         last_name:&quot;&quot;,
         gender:&quot;&quot;,                  
         country_calling_code:&quot;&quot;,
         phone:&quot;&quot;, 
         bio:&quot;&quot;,
         website:&quot;&quot;,
         timezone:&quot;&quot;,
         alternate_email:&quot;&quot;,
         avatar_url:&quot;&quot;,
         birth:&quot;&quot;, 
         country:&quot;&quot;,
         country_code:&quot;&quot;,
         last_login_at:&quot;&quot;,
         last_login_ip:&quot;&quot;,
         remember_token:&quot;&quot;,
         login_otp:&quot;&quot;,
         api_token:&quot;&quot;,
         api_token_used_at:&quot;&quot;,
         api_token_used_ip:&quot;&quot;,
         is_active:&quot;&quot;,
         activated_at:&quot;&quot;,
         status:&quot;&quot;,                  
         affiliate_code:&quot;&quot;,
         affiliate_code_used_at:&quot;&quot;,
         reset_password_code:&quot;&quot;,
         reset_password_code_sent_at:&quot;&quot;,
         reset_password_code_used_at:&quot;&quot;,
         foreign_user_id:&quot;&quot;,
         meta:&quot;&quot;                     
         created_ip:&quot;&quot;    api_token:&#39;&#39;                 
         email:&quot;&quot;,                    
         username:&quot;&quot;,
         password:&quot;&quot;,                 
         display_name:&quot;&quot;,
         title:&quot;&quot;,
         designation:&quot;&quot;,
         first_name:&quot;&quot;,               
         middle_name:&quot;&quot;,
         last_name:&quot;&quot;,
         gender:&quot;&quot;,                  
         country_calling_code:&quot;&quot;,
         phone:&quot;&quot;, 
         bio:&quot;&quot;,
         website:&quot;&quot;,
         timezone:&quot;&quot;,
         alternate_email:&quot;&quot;,
         avatar_url:&quot;&quot;,
         birth:&quot;&quot;, 
         country:&quot;&quot;,
         country_code:&quot;&quot;,
         last_login_at:&quot;&quot;,
         last_login_ip:&quot;&quot;,
         remember_token:&quot;&quot;,
         login_otp:&quot;&quot;,
         api_token:&quot;&quot;,
         api_token_used_at:&quot;&quot;,
         api_token_used_ip:&quot;&quot;,
         is_active:&quot;&quot;,
         activated_at:&quot;&quot;,
         status:&quot;&quot;,                  
         affiliate_code:&quot;&quot;,
         affiliate_code_used_at:&quot;&quot;,
         reset_password_code:&quot;&quot;,
         reset_password_code_sent_at:&quot;&quot;,
         reset_password_code_used_at:&quot;&quot;,
         foreign_user_id:&quot;&quot;,
         meta:&quot;&quot;                     
         created_ip:&quot;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-11" tabindex="-1"><a class="header-anchor" href="#response-samples-11" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-1" tabindex="-1"><a class="header-anchor" href="#delete-1" aria-hidden="true">#</a> Delete</h4><p>Simple HTTP request to Users API to delete user.</p><p>Column can be <code>id</code>, <code>uuid</code>, <code>email</code>, <code>username</code> or User&#39;s attribute and their value.</p><h5 id="url-10" tabindex="-1"><a class="header-anchor" href="#url-10" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-12" tabindex="-1"><a class="header-anchor" href="#response-samples-12" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Action was successful&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-user-s-roles" tabindex="-1"><a class="header-anchor" href="#get-user-s-roles" aria-hidden="true">#</a> Get User&#39;s Roles</h4><p>Get <code>user&#39;s roles</code> via GET/POST request.</p><p>Column can be <code>id</code>, <code>uuid</code>, <code>email</code>, <code>username</code> or User&#39;s attribute and their value.</p><h5 id="url-11" tabindex="-1"><a class="header-anchor" href="#url-11" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>roles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-10" tabindex="-1"><a class="header-anchor" href="#request-samples-10" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                
    q:&quot;&quot;,                         
    per_page:&quot;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-13" tabindex="-1"><a class="header-anchor" href="#response-samples-13" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="user-has-role" tabindex="-1"><a class="header-anchor" href="#user-has-role" aria-hidden="true">#</a> User has Role</h4><p>API to check if an user has a specific role.</p><p>Column can be <code>id</code>, <code>uuid</code>, <code>email</code>, <code>username</code> or User&#39;s attribute and their value.</p><h5 id="url-12" tabindex="-1"><a class="header-anchor" href="#url-12" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>role_slug<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-14" tabindex="-1"><a class="header-anchor" href="#response-samples-14" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>/<span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-user-s-permissions" tabindex="-1"><a class="header-anchor" href="#get-user-s-permissions" aria-hidden="true">#</a> Get User&#39;s Permissions</h4><p>Get <code>user&#39;s permissions</code> via GET/POST request.</p><p>Column can be <code>id</code>, <code>uuid</code>, <code>email</code>, <code>username</code> or User&#39;s attribute and their value.</p><h5 id="url-13" tabindex="-1"><a class="header-anchor" href="#url-13" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>permissions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-11" tabindex="-1"><a class="header-anchor" href="#request-samples-11" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                
    q:&quot;&quot;,                         
    per_page:&quot;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-15" tabindex="-1"><a class="header-anchor" href="#response-samples-15" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="user-has-permission" tabindex="-1"><a class="header-anchor" href="#user-has-permission" aria-hidden="true">#</a> User has Permission</h4><p>API to check if an user has a specific permission.</p><p>Column can be <code>id</code>, <code>uuid</code>, <code>email</code>, <code>username</code> or User&#39;s attribute and their value.</p><h5 id="url-14" tabindex="-1"><a class="header-anchor" href="#url-14" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>permissions<span class="token operator">/</span><span class="token punctuation">{</span>permission_slug<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-16" tabindex="-1"><a class="header-anchor" href="#response-samples-16" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>/<span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles : -</h3><h4 id="create-1" tabindex="-1"><a class="header-anchor" href="#create-1" aria-hidden="true">#</a> Create</h4><p>Create new role with HTTP request. During the creation you can set up attributes.</p><h5 id="url-15" tabindex="-1"><a class="header-anchor" href="#url-15" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-12" tabindex="-1"><a class="header-anchor" href="#request-samples-12" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;                 
    name:&quot;&quot;,                     
    slug:&quot;&quot;,                     
    details:&quot;&quot;,                  
    is_active:&quot;&quot;,                
    type:&quot;&quot;,                     
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-17" tabindex="-1"><a class="header-anchor" href="#response-samples-17" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           ..........
           ..........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved successfully.&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list-1" tabindex="-1"><a class="header-anchor" href="#get-a-list-1" aria-hidden="true">#</a> Get a List</h4><p>Get a list of the Role objects and their properties in a list with Pagination.</p><p>This method supports some of the query parameters to help customize the response.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>q</td><td>Value to be search in <code>name</code> and <code>slug</code> Column</td><td>String</td><td></td></tr><tr><td>per_page</td><td><code>N</code> Item Per Page</td><td>Number</td><td>20</td></tr><tr><td>from</td><td>Initial Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>to</td><td>Final Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>filter</td><td>Status of Role and may be either <code>active</code>, <code>inactive</code>, <code>frontend</code> or <code>backend</code></td><td>String</td><td></td></tr><tr><td>trashed</td><td>Set true to show <code>Trashed (Soft Delete)</code> data</td><td>Boolean</td><td>false</td></tr></tbody></table><h5 id="url-16" tabindex="-1"><a class="header-anchor" href="#url-16" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>roles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-13" tabindex="-1"><a class="header-anchor" href="#request-samples-13" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                 
    q:&quot;&quot;,                         
    from:&quot;&quot;,                      
    to:&quot;&quot;,                        
    filter:&quot;&quot;,                    
    per_page:&quot;&quot;,                 
    trashed:&quot;&quot;                         
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-18" tabindex="-1"><a class="header-anchor" href="#response-samples-18" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/roles?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/roles?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/roles?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/roles&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item-1" tabindex="-1"><a class="header-anchor" href="#get-item-1" aria-hidden="true">#</a> Get Item</h4><p>Get a Item of the Role objects . This will retrieves a Role by their custom attributes, and returns all the properties of Role.</p><p>Column can be id, uuid, email, username or Role&#39;s attribute and their value.</p><h5 id="url-17" tabindex="-1"><a class="header-anchor" href="#url-17" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-14" tabindex="-1"><a class="header-anchor" href="#request-samples-14" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

   api_tokenapi_token:&quot;&quot;,                 
   trashedtrashed:&quot;&quot;                     
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-19" tabindex="-1"><a class="header-anchor" href="#response-samples-19" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update-2" tabindex="-1"><a class="header-anchor" href="#update-2" aria-hidden="true">#</a> Update</h4><p>Simple HTTP request to Role API and you can update standard attributes for a role within few seconds!</p><p>Column can be id, uuid, email, username or Role&#39;s attribute and their value.</p><h5 id="url-18" tabindex="-1"><a class="header-anchor" href="#url-18" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-15" tabindex="-1"><a class="header-anchor" href="#request-samples-15" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&#39;&#39;,                 
    name:&quot;&quot;,                     
    slug:&quot;&quot;,                     
    details:&quot;&quot;,                  
    is_active:&quot;&quot;,                
    type:&quot;&quot;,                     
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-20" tabindex="-1"><a class="header-anchor" href="#response-samples-20" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-2" tabindex="-1"><a class="header-anchor" href="#delete-2" aria-hidden="true">#</a> Delete</h4><p>Simple HTTP request to Role API to delete user.</p><p>Column can be id, uuid, email, username or Role&#39;s attribute and their value.</p><h5 id="url-19" tabindex="-1"><a class="header-anchor" href="#url-19" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-21" tabindex="-1"><a class="header-anchor" href="#response-samples-21" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Action was successful&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-role-s-users" tabindex="-1"><a class="header-anchor" href="#get-role-s-users" aria-hidden="true">#</a> Get Role&#39;s Users</h4><p>Get role&#39;s users via GET/POST request.</p><p>Column can be id, uuid, email, username or Role&#39;s attribute and their value.</p><h5 id="url-20" tabindex="-1"><a class="header-anchor" href="#url-20" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-16" tabindex="-1"><a class="header-anchor" href="#request-samples-16" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                 
    q:&quot;&quot;,                         
    per_page:&quot;&quot;              
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-22" tabindex="-1"><a class="header-anchor" href="#response-samples-22" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-role-s-permissions" tabindex="-1"><a class="header-anchor" href="#get-role-s-permissions" aria-hidden="true">#</a> Get Role&#39;s Permissions</h4><p>Get role&#39;s permissions via GET/POST request.</p><p>Column can be id, uuid, email, username or Role&#39;s attribute and their value.</p><h5 id="url-21" tabindex="-1"><a class="header-anchor" href="#url-21" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>permissions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-17" tabindex="-1"><a class="header-anchor" href="#request-samples-17" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                 
    q:&quot;&quot;,                         
    per_page:&quot;&quot;      
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-23" tabindex="-1"><a class="header-anchor" href="#response-samples-23" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="permission" tabindex="-1"><a class="header-anchor" href="#permission" aria-hidden="true">#</a> Permission : -</h3><h4 id="get-a-list-2" tabindex="-1"><a class="header-anchor" href="#get-a-list-2" aria-hidden="true">#</a> Get a List</h4><p>Get a list of the Permission objects and their properties in a list with Pagination.</p><p>This method supports some of the query parameters to help customize the response.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>q</td><td>Value to be search in <code>name</code> and <code>slug</code> Column</td><td>String</td><td></td></tr><tr><td>per_page</td><td><code>N</code> Item Per Page</td><td>Number</td><td>20</td></tr><tr><td>from</td><td>Initial Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>to</td><td>Final Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>filter</td><td>Status of Permission and may be either <code>active</code>, <code>inactive</code> or <code>{module_name}</code></td><td>String</td><td></td></tr><tr><td>section</td><td>if filter = {module_name}</td><td>String</td><td></td></tr><tr><td>trashed</td><td>Set true to show <code>Trashed (Soft Delete)</code> data</td><td>Boolean</td><td>false</td></tr></tbody></table><h5 id="url-22" tabindex="-1"><a class="header-anchor" href="#url-22" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>permissions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-18" tabindex="-1"><a class="header-anchor" href="#request-samples-18" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                 
    q:&quot;&quot;,                         
    from:&quot;&quot;,                     
    to:&quot;&quot;,                        
    filter:&quot;&quot;,                    
    section:&quot;&quot;,                   
    per_page:&quot;&quot;,                  
    trashed:&quot;&quot;                     
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-24" tabindex="-1"><a class="header-anchor" href="#response-samples-24" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/permissions?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/permissions?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/permissions?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/permissions&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item-2" tabindex="-1"><a class="header-anchor" href="#get-item-2" aria-hidden="true">#</a> Get Item</h4><p>Get a Item of the Permission objects . This will retrieves a User by their custom attributes, and returns all the properties of Permission.</p><p>Column can be id, uuid, email, username or Permission&#39;s attribute and their value.</p><h5 id="url-23" tabindex="-1"><a class="header-anchor" href="#url-23" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>permissions<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-19" tabindex="-1"><a class="header-anchor" href="#request-samples-19" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

   api_token:&quot;&quot;,
   trashed:&quot;&quot; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-25" tabindex="-1"><a class="header-anchor" href="#response-samples-25" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-3" tabindex="-1"><a class="header-anchor" href="#delete-3" aria-hidden="true">#</a> Delete</h4><p>Simple HTTP request to Users API to delete permission.</p><p>Column can be id, uuid, email, username or Permission&#39;s attribute and their value.</p><h5 id="url-24" tabindex="-1"><a class="header-anchor" href="#url-24" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-26" tabindex="-1"><a class="header-anchor" href="#response-samples-26" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Action was successful&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-permission-s-users" tabindex="-1"><a class="header-anchor" href="#get-permission-s-users" aria-hidden="true">#</a> Get Permission&#39;s Users</h4><p>Get permission&#39;s users via GET/POST request.</p><p>Column can be id, uuid, email, username or Role&#39;s attribute and their value.</p><h5 id="url-25" tabindex="-1"><a class="header-anchor" href="#url-25" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>permissions<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-20" tabindex="-1"><a class="header-anchor" href="#request-samples-20" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                 
    q:&quot;&quot;,                         
    per_page:&quot;&quot;      
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-27" tabindex="-1"><a class="header-anchor" href="#response-samples-27" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-permission-s-roles" tabindex="-1"><a class="header-anchor" href="#get-permission-s-roles" aria-hidden="true">#</a> Get Permission&#39;s Roles</h4><p>Get permission&#39;s roles via GET/POST request.</p><h5 id="url-26" tabindex="-1"><a class="header-anchor" href="#url-26" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>permissions<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>roles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-21" tabindex="-1"><a class="header-anchor" href="#request-samples-21" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                 
    q:&quot;&quot;,                         
    per_page:&quot;&quot;      
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-28" tabindex="-1"><a class="header-anchor" href="#response-samples-28" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="taxonomy" tabindex="-1"><a class="header-anchor" href="#taxonomy" aria-hidden="true">#</a> Taxonomy : -</h3><h4 id="create-2" tabindex="-1"><a class="header-anchor" href="#create-2" aria-hidden="true">#</a> Create</h4><p>Create new Create with HTTP request. During the creation you can set up attributes.</p><h5 id="url-27" tabindex="-1"><a class="header-anchor" href="#url-27" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-22" tabindex="-1"><a class="header-anchor" href="#request-samples-22" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&#39;&#39;,                
    name:&quot;&quot;,                     
    slug:&quot;&quot;,                     
    type:&quot;&quot;,                    
    parent:&quot;&quot;,                   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-29" tabindex="-1"><a class="header-anchor" href="#response-samples-29" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           ..........
           ..........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved successfully.&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list-3" tabindex="-1"><a class="header-anchor" href="#get-a-list-3" aria-hidden="true">#</a> Get a List</h4><p>Get a list of the Taxonomy objects and their properties in a list with Pagination.</p><p>This method supports some of the query parameters to help customize the response.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>q</td><td>Value to be search in <code>name</code> and <code>slug</code> Column</td><td>String</td><td></td></tr><tr><td>per_page</td><td><code>N</code> Item Per Page</td><td>Number</td><td>20</td></tr><tr><td>from</td><td>Initial Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>to</td><td>Final Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>status</td><td>Status of taxonomy and may be either <code>active</code> or <code>inactive</code></td><td>String</td><td></td></tr><tr><td>trashed</td><td>Set true to show <code>Trashed (Soft Delete)</code> data</td><td>Boolean</td><td>false</td></tr></tbody></table><h5 id="url-28" tabindex="-1"><a class="header-anchor" href="#url-28" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-23" tabindex="-1"><a class="header-anchor" href="#request-samples-23" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                 
    q:&quot;&quot;,                         
    from:&quot;&quot;,                     
    to:&quot;&quot;,                        
    status:&quot;&quot;,                    
    types:&quot;&quot;,                   
    per_page:&quot;&quot;,                  
    trashed:&quot;&quot;                     
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-30" tabindex="-1"><a class="header-anchor" href="#response-samples-30" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/taxonomies?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/taxonomies?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/taxonomies?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/taxonomies&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item-3" tabindex="-1"><a class="header-anchor" href="#get-item-3" aria-hidden="true">#</a> Get Item</h4><p>Get a Item of the Taxonomy objects . This will retrieves a User by their custom attributes, and returns all the properties of Taxonomy.</p><p>Column can be id, uuid, email, username or Taxonomy&#39;s attribute and their value.</p><h5 id="url-29" tabindex="-1"><a class="header-anchor" href="#url-29" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-24" tabindex="-1"><a class="header-anchor" href="#request-samples-24" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

   api_token:&quot;&quot;,
   trashed:&quot;&quot; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-31" tabindex="-1"><a class="header-anchor" href="#response-samples-31" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update-3" tabindex="-1"><a class="header-anchor" href="#update-3" aria-hidden="true">#</a> Update</h4><p>Simple HTTP request to Taxonomy API and you can update standard attributes for a user within few seconds!</p><p>Column can be id, uuid, email, username or Taxonomy&#39;s attribute and their value.</p><h5 id="url-30" tabindex="-1"><a class="header-anchor" href="#url-30" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-25" tabindex="-1"><a class="header-anchor" href="#request-samples-25" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&#39;&#39;,                 
    name:&quot;&quot;,                     
    slug:&quot;&quot;,                     
    type:&quot;&quot;,                     
    parent:&quot;&quot;,                   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-32" tabindex="-1"><a class="header-anchor" href="#response-samples-32" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-4" tabindex="-1"><a class="header-anchor" href="#delete-4" aria-hidden="true">#</a> Delete</h4><p>Simple HTTP request to Users API to delete taxonomy.</p><p>Column can be id, uuid, email, username or Taxonomy&#39;s attribute and their value.</p><h5 id="url-31" tabindex="-1"><a class="header-anchor" href="#url-31" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-33" tabindex="-1"><a class="header-anchor" href="#response-samples-33" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Action was successful&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="taxonomy-type" tabindex="-1"><a class="header-anchor" href="#taxonomy-type" aria-hidden="true">#</a> Taxonomy Type : -</h3><h4 id="create-3" tabindex="-1"><a class="header-anchor" href="#create-3" aria-hidden="true">#</a> Create</h4><p>Create new Taxonomy Type with HTTP request. During the creation you can set up attributes.</p><h5 id="url-32" tabindex="-1"><a class="header-anchor" href="#url-32" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-26" tabindex="-1"><a class="header-anchor" href="#request-samples-26" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&#39;&#39;,                 
    name:&quot;&quot;,                     
    slug:&quot;&quot;,                     
    parent:&quot;&quot;,                   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-34" tabindex="-1"><a class="header-anchor" href="#response-samples-34" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           ..........
           ..........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved successfully.&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list-4" tabindex="-1"><a class="header-anchor" href="#get-a-list-4" aria-hidden="true">#</a> Get a List</h4><p>Get a list of the Taxonomy Type objects and their properties in a list with Pagination.</p><p>This method supports some of the query parameters to help customize the response.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>q</td><td>Value to be search in <code>name</code> and <code>slug</code> Column</td><td>String</td><td></td></tr><tr><td>per_page</td><td><code>N</code> Item Per Page</td><td>Number</td><td>20</td></tr><tr><td>from</td><td>Initial Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>to</td><td>Final Date</td><td>String<br>(Y-m-d)</td><td></td></tr><tr><td>with_children</td><td>When true, get Response with children attribute</td><td>Boolean</td><td>false</td></tr><tr><td>trashed</td><td>Set true to show <code>Trashed (Soft Delete)</code> data</td><td>Boolean</td><td>false</td></tr></tbody></table><h5 id="url-33" tabindex="-1"><a class="header-anchor" href="#url-33" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-27" tabindex="-1"><a class="header-anchor" href="#request-samples-27" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&quot;&quot;,                 
    q:&quot;&quot;,                         
    from:&quot;&quot;,                     
    to:&quot;&quot;,                        
    per_page:&quot;&quot;,                  
    trashed:&quot;&quot;,                         
    with_children:&quot;&quot;        
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-35" tabindex="-1"><a class="header-anchor" href="#response-samples-35" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;first_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/taxonomy-types?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;last_page_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/taxonomy-types?page=1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&amp;laquo; Previous&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/taxonomy-types?page=1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next &amp;raquo;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;next_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;public-url&gt;/api/taxonomy-types&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;prev_page_url&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item-4" tabindex="-1"><a class="header-anchor" href="#get-item-4" aria-hidden="true">#</a> Get Item</h4><p>Get a Item of the Taxonomy Type objects . This will retrieves a User by their custom attributes, and returns all the properties of Taxonomy Type.</p><p>Column can be id, uuid, email, username or Taxonomy Type&#39;s attribute and their value.</p><h5 id="url-34" tabindex="-1"><a class="header-anchor" href="#url-34" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-28" tabindex="-1"><a class="header-anchor" href="#request-samples-28" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

   api_token:&#39;&#39;                 
   trashed:&#39;&#39;                    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-36" tabindex="-1"><a class="header-anchor" href="#response-samples-36" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update-4" tabindex="-1"><a class="header-anchor" href="#update-4" aria-hidden="true">#</a> Update</h4><p>Simple HTTP request to Taxonomy type API and you can update standard attributes for a user within few seconds!</p><p>Column can be id, uuid, email, username or Taxonomy type&#39;s attribute and their value.</p><h5 id="url-35" tabindex="-1"><a class="header-anchor" href="#url-35" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-29" tabindex="-1"><a class="header-anchor" href="#request-samples-29" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let params = {

    api_token:&#39;&#39;            
    name:&quot;&quot;,                    
    slug:&quot;&quot;,                     
    parent:&quot;&quot;,                   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-37" tabindex="-1"><a class="header-anchor" href="#response-samples-37" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Saved&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-5" tabindex="-1"><a class="header-anchor" href="#delete-5" aria-hidden="true">#</a> Delete</h4><p>Simple HTTP request to Users API to delete taxonomy type.</p><p>Column can be id, uuid, email, username or Taxonomy type&#39;s attribute and their value.</p><h5 id="url-36" tabindex="-1"><a class="header-anchor" href="#url-36" aria-hidden="true">#</a> URL</h5><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">&gt;</span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-38" tabindex="-1"><a class="header-anchor" href="#response-samples-38" aria-hidden="true">#</a> Response samples</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Action was successful&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,272);function g(y,x){const t=o("ExternalLinkIcon"),p=o("RouterLink");return i(),r("div",null,[d,n("p",null,[s("When building an "),n("a",v,[s("API"),a(t)]),s(", you may need a transformation layer that sits between your Eloquent models and the JSON responses that are actually returned to your application's users. For example, you may wish to display certain attributes for a subset of users and not others, or you may wish to always include certain relationships in the JSON representation of your models. Eloquent's resource classes allow you to expressively and easily transform your models and model collections into JSON.")]),k,n("p",null,[s("VaahCms supports "),n("a",m,[s("API authentication"),a(t)]),s(". This allows you to protect the URLs on your web server so that only you can access them. In order to authenticate with HTTP, you may provide a "),b,s(" in Header.")]),q,n("p",null,[s("The "),a(p,{to:"/vaahcms/basic/users.html"},{default:u(()=>[s("User")]),_:1}),s(" API provides operations to manage users in your organization.")]),h])}const f=l(c,[["render",g],["__file","api.html.vue"]]);export{f as default};
