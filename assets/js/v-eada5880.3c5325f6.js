"use strict";(self.webpackChunkvuepress=self.webpackChunkvuepress||[]).push([[7150],{4744:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-eada5880",path:"/vaahcms/module/configure-vuex-library.html",title:"Configuring Vuex Library",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"vaahcms/module/configure-vuex-library.md",git:{updatedTime:1627055118e3}}},1675:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var p=a(6252);const t=(0,p.Wm)("h1",{id:"configuring-vuex-library",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#configuring-vuex-library","aria-hidden":"true"},"#"),(0,p.Uk)(" Configuring Vuex Library")],-1),e=(0,p.Wm)("hr",null,null,-1),o=(0,p.Wm)("p",null,"Vuex provides that single source of truth for us. As we begin to store state within it, our state becomes a lot cleaner, and a lot easier to reason about. Now, every component that relies on our Global State can have direct access to it.",-1),l=(0,p.Uk)("When one component updates the Vuex State, other components can be listening for when that State changes, then they can reactively respond based off that state-change (and the new State value they receive). For more details, see vuex's "),c={href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("documentation"),r=(0,p.uE)('<p>Now we will configure the Vuex library inside Vue application. So now first of all go to modules folder at <code>VaahCms/Modules/Articles/Vue/store/modules/</code></p><p>Now make another file inside the module folder called as <code>contents.js</code> which will have the getters,actions,mutations as shown below</p><p>Let check the <code>Vue/store/modules/contents.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>VaahHelper <span class="token keyword">as</span> Vaah<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../vaahvue/helpers/VaahHelper&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">//---------Variables</span>\n<span class="token keyword">let</span> base_url <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;base&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> debug <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;debug&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//---------/Variables</span>\n\n<span class="token keyword">let</span> json_url <span class="token operator">=</span> base_url<span class="token operator">+</span><span class="token string">&quot;/backend/articles/json&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> ajax_url <span class="token operator">=</span> base_url<span class="token operator">+</span><span class="token string">&quot;/backend/articles/contents&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    state<span class="token operator">:</span> <span class="token punctuation">{</span>\n        debug<span class="token operator">:</span> debug<span class="token punctuation">,</span>\n        content_slug<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n        base_url<span class="token operator">:</span> base_url<span class="token punctuation">,</span>\n        ajax_url<span class="token operator">:</span> ajax_url<span class="token punctuation">,</span>\n        json_url<span class="token operator">:</span> json_url<span class="token punctuation">,</span>\n        assets<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n        assets_is_fetching<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n        assets_reload<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        list<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n        selected_id<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n        status_list<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n        list_is_empty<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        is_list_loading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        list_view<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        active_item<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n        is_item_loading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        show_filters<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        query_string<span class="token operator">:</span> <span class="token punctuation">{</span>\n            page<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        new_item<span class="token operator">:</span><span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n            content<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n            is_published<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    mutations<span class="token operator">:</span><span class="token punctuation">{</span>\n        <span class="token function-variable function">updateState</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            state<span class="token punctuation">[</span>payload<span class="token punctuation">.</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> payload<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    actions<span class="token operator">:</span><span class="token punctuation">{</span>\n        <span class="token function">updateStore</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> getters <span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> list_view<span class="token punctuation">;</span>\n            <span class="token keyword">let</span> update<span class="token punctuation">;</span>\n\n            <span class="token keyword">if</span><span class="token punctuation">(</span>payload <span class="token operator">&amp;&amp;</span> payload<span class="token punctuation">.</span>name <span class="token operator">&amp;&amp;</span> payload<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&#39;contents.list&#39;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                list_view <span class="token operator">=</span> <span class="token string">&#39;large&#39;</span><span class="token punctuation">;</span>\n\n                update <span class="token operator">=</span> <span class="token punctuation">{</span>\n                    key<span class="token operator">:</span> <span class="token string">&#39;active_item&#39;</span><span class="token punctuation">,</span>\n                    value<span class="token operator">:</span> <span class="token keyword">null</span>\n                <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;updateState&#39;</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token punctuation">}</span>\n\n            <span class="token keyword">if</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&#39;contents.create&#39;</span> <span class="token operator">||</span> payload<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&#39;contents.view&#39;</span> <span class="token operator">||</span> payload<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&#39;contents.edit&#39;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                list_view <span class="token operator">=</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">let</span> view <span class="token operator">=</span> <span class="token punctuation">{</span>\n                key<span class="token operator">:</span> <span class="token string">&#39;list_view&#39;</span><span class="token punctuation">,</span>\n                value<span class="token operator">:</span> list_view\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n            <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;updateState&#39;</span><span class="token punctuation">,</span> view<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    getters<span class="token operator">:</span><span class="token punctuation">{</span>\n        <span class="token function">state</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> state<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function">assets</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> state<span class="token punctuation">.</span>assets<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function">is_logged_in</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> state<span class="token punctuation">.</span>is_logged_in<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div><p>Now this file will be import in <code>Vue/store/store.js</code> which is shown below.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> root <span class="token keyword">from</span> <span class="token string">&#39;./modules/root&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> contents <span class="token keyword">from</span> <span class="token string">&#39;./modules/contents&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    modules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        root<span class="token operator">:</span> root<span class="token punctuation">,</span>\n        contents<span class="token operator">:</span> contents<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',6),i={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,e,o,(0,p.Wm)("p",null,[l,(0,p.Wm)("a",c,[u,(0,p.Wm)(a)])]),r],64)}}}}]);