import{_ as r,r as l,o as u,c as d,a as n,d as a,b as s,w as t,e as c}from"./app.62b9cc5c.js";const g={},k=n("h1",{id:"logs-and-performance-monitoring",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#logs-and-performance-monitoring","aria-hidden":"true"},"#"),a(" Logs and Performance Monitoring")],-1),h={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"Documentation",-1),m={class:"table-of-contents"},f=n("h2",{id:"about-logging",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#about-logging","aria-hidden":"true"},"#"),a(" About Logging")],-1),b=n("p",null,"Logging library which handles cloud (e.g. sentry, crashanalytics) and local (e.g. Console/Terminal and Local Files For Device) Logs.",-1),_={class:"custom-container tip"},y=n("p",{class:"custom-container-title"},"Cloud logging services",-1),x=n("code",null,"sentryConfig",-1),w=n("ul",null,[n("li",null,"So developer should never use individual service in their application, they should always use Logging library for logging any kind of content.")],-1),L=["src"],T=c(`<h3 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use cases</h3><div class="custom-container tip"><p class="custom-container-title">use cases</p><ul><li>To easily log content on cloud</li><li>To easily add another cloud logging service</li><li>To log transactions. e.g. I want to measure and log time of an api call</li><li>To see formatted (prettier) objects in the console easily readable by the human eye</li><li>To easily differentiate between different kinds of events.</li></ul></div><h3 id="log-types" tabindex="-1"><a class="header-anchor" href="#log-types" aria-hidden="true">#</a> Log types</h3><p>Currently, our logs are of six types.</p><ol><li>log</li><li>info</li><li>success</li><li>warning</li><li>exception</li><li>transaction</li></ol><p>For Local Logs: Different types will print logs in different colors. the log will be in grey, info in blue, success in green, warning in yellow, and exception will be in red.</p><h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h3><h4 id="call-static-methods-of-the-log-class-to-log-the-events" tabindex="-1"><a class="header-anchor" href="#call-static-methods-of-the-log-class-to-log-the-events" aria-hidden="true">#</a> Call static methods of the Log class to log the events.</h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Log&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;info&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;success&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;warning&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// code snippet</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="log-transactions" tabindex="-1"><a class="header-anchor" href="#log-transactions" aria-hidden="true">#</a> Log Transactions</h4><p>When developer wants to measure performance of different operations they can use <code>logTransaction</code> funtion. Where developer will have to pass operation for which they wants to log as <code>execute</code> argument. e.g. API send receive requests, getting a file from local storage and parsing data, processing huge data, search queries, etc.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">logTransaction</span><span class="token punctuation">(</span>
  execute<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  details<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">TransactionDetails</span><span class="token punctuation">(</span>
    name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;idle transaction&#39;</span></span><span class="token punctuation">,</span>
    operation<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;idle&#39;</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">logTransaction</span><span class="token punctuation">(</span>
  execute<span class="token punctuation">:</span> <span class="token class-name">Api</span><span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;api.vaah.dev&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  details<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">TransactionDetails</span><span class="token punctuation">(</span>
    name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;get root route of vaah api&#39;</span></span><span class="token punctuation">,</span>
    operation<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;read&#39;</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="to-print-data-as-argument-pass-the-data" tabindex="-1"><a class="header-anchor" href="#to-print-data-as-argument-pass-the-data" aria-hidden="true">#</a> To print data, as argument pass the data</h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-literal"><span class="token string">&quot;first_key&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;value&quot;</span></span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">&quot;second_key&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">&quot;key&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;value&quot;</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">&quot;key&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;updated_value&quot;</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;data&#39;</span></span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>`,16),q=["src"],A=c(`<h4 id="you-can-disable-local-and-cloud-logging-for-specific-log" tabindex="-1"><a class="header-anchor" href="#you-can-disable-local-and-cloud-logging-for-specific-log" aria-hidden="true">#</a> You can disable local and cloud logging for specific log</h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;exception&#39;</span></span><span class="token punctuation">,</span> disableLocalLogging<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;log&#39;</span></span><span class="token punctuation">,</span> disableCloudLogging<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="for-exception-you-can-pass-two-extra-parameters-stacktrace-and-hint" tabindex="-1"><a class="header-anchor" href="#for-exception-you-can-pass-two-extra-parameters-stacktrace-and-hint" aria-hidden="true">#</a> For exception you can pass two extra parameters: <code>stackTrace</code> and <code>hint</code></h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>
        error<span class="token punctuation">,</span>
        stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
        hint<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;The exception is caught in ---&#39;</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="about-performance" tabindex="-1"><a class="header-anchor" href="#about-performance" aria-hidden="true">#</a> About Performance</h2><h3 id="use-cases-1" tabindex="-1"><a class="header-anchor" href="#use-cases-1" aria-hidden="true">#</a> Use cases</h3><ul><li><p>To enable/ disable all kind of tracking, switch <code>enableAutoPerformanceTracking</code></p></li><li><p>Record cold startup time and warm startup time</p></li><li><p>Observe Navigation</p></li><li><p>Capture User Interactions</p></li><li><p>Capture Assets Performance</p></li><li><p>Observe transactions</p></li><li><p>Record Slow and Frozen frames (Yet to implement)</p></li></ul><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3>`,9),C={href:"https://youtu.be/LWc67Vja5YA",target:"_blank",rel:"noopener noreferrer"},S=n("li",null,[n("p",null,[a("To disable all kind of tracing set "),n("code",null,"enableAutoPerformanceTracking"),a(" to "),n("code",null,"false"),a(".")])],-1),I=n("code",null,"autoAppStart",-1),P=n("code",null,"true",-1),U=n("code",null,"enableUserInteractionTracing",-1),F=n("code",null,"true",-1),j=n("li",null,[n("p",null,[a("To enable assets instrumentation set "),n("code",null,"enableAssetsInstrumentation"),a(" to "),n("code",null,"true"),a(".")])],-1),B=n("h3",{id:"how-to-use-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-use-1","aria-hidden":"true"},"#"),a(" How to use")],-1),D=n("p",null,"Just toogle environment flags (mentioned above) to enable/ disable monitoring.",-1);function N(i,V){const e=l("RouterLink"),o=l("router-link"),p=l("ExternalLinkIcon");return u(),d("div",null,[k,n("div",h,[v,n("p",null,[a("For detailed documentation, check this: "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.html"},{default:t(()=>[a("logging_library")]),_:1}),a(" and "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html"},{default:t(()=>[a("performance_monitoring")]),_:1})])]),n("nav",m,[n("ul",null,[n("li",null,[s(o,{to:"#about-logging"},{default:t(()=>[a("About Logging")]),_:1}),n("ul",null,[n("li",null,[s(o,{to:"#use-cases"},{default:t(()=>[a("Use cases")]),_:1})]),n("li",null,[s(o,{to:"#log-types"},{default:t(()=>[a("Log types")]),_:1})]),n("li",null,[s(o,{to:"#how-to-use"},{default:t(()=>[a("How to use")]),_:1})])])]),n("li",null,[s(o,{to:"#about-performance"},{default:t(()=>[a("About Performance")]),_:1}),n("ul",null,[n("li",null,[s(o,{to:"#use-cases-1"},{default:t(()=>[a("Use cases")]),_:1})]),n("li",null,[s(o,{to:"#configuration"},{default:t(()=>[a("Configuration")]),_:1})]),n("li",null,[s(o,{to:"#how-to-use-1"},{default:t(()=>[a("How to use")]),_:1})])])])])]),f,b,n("div",_,[y,n("ul",null,[n("li",null,[n("p",null,[a("As of now we have implemented "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html"},{default:t(()=>[a("Sentry")]),_:1}),a(" to log and measure performance. Any other service is not available yet. To setup Sentry please check "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html#configuration"},{default:t(()=>[a("this")]),_:1}),a(".")])]),n("li",null,[n("p",null,[a("You can check out more details about it here: "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html"},{default:t(()=>[a("Sentry")]),_:1}),a(" and "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html"},{default:t(()=>[a("Performance")]),_:1})])]),n("li",null,[n("p",null,[a("Also to enable sentry; developer will have to pass "),x,a(" in "),s(e,{to:"/vaahflutter/essentials/environments.html"},{default:t(()=>[a("environment")]),_:1}),a(".")])])])]),w,n("img",{src:i.$withBase("/images/flutter/components/log/hierarchy.png"),alt:"hierarchy"},null,8,L),n("ul",null,[n("li",null,[a("To setup Sentry please check "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html#configuration"},{default:t(()=>[a("this")]),_:1}),a(".")])]),T,n("img",{src:i.$withBase("/images/flutter/components/log/prettier-log.png"),alt:"Output"},null,8,q),A,n("ul",null,[n("li",null,[n("p",null,[a("To configure sentry for your project you just have to pass sentryConfig in "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/env.html"},{default:t(()=>[a("environment config")]),_:1}),a(".")])]),n("li",null,[n("p",null,[a("Check "),n("a",C,[a("this"),s(p)]),a(" video for, how to get config values.")])]),S,n("li",null,[n("p",null,[a("To record cold startup time and warm startup time set "),I,a(" to "),P,a(", check "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html#startup-time"},{default:t(()=>[a("this")]),_:1}),a(" section.")])]),n("li",null,[n("p",null,[a("To record User Interaction set "),U,a(" to "),F,a(", check "),s(e,{to:"/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html#capture-user-interactions"},{default:t(()=>[a("this")]),_:1}),a(" section.")])]),j]),B,D])}const O=r(g,[["render",N],["__file","logs_and_performance.html.vue"]]);export{O as default};
