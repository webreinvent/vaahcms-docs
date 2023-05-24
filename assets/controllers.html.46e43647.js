import{_ as r,r as a,o as i,c as l,a as e,b as o,w as c,d as t,e as p}from"./app.62b9cc5c.js";const h={},d=e("h1",{id:"controllers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#controllers","aria-hidden":"true"},"#"),t(" Controllers")],-1),u={class:"table-of-contents"},m=p('<p>This directory is mostly specific to project.</p><p>The controller layer is high-level functions that perform a specific type of task. They typically fetch from services and inject them into models and that way they control and update app state.</p><p>State management logic goes in here. You may place your logic for providers, blocs, or any other state management logic into this folder. You may even rename this as your state management architecture like providers, blocs, etc.</p><p>The controller layer is represented by various controllers which contain the Application Logic of the app. controllers are used to complete any significant action within your app.</p><p>Controllers remove the business logic from the Model. Models can get huge when just managing data (+ an API to work on that data). From our experience, it never scales well trying to have application logic and state combined in one class, you always need to split these up one way or another as things scale.</p><p>Controllers are totally encapsulated. Because each controller is its own little object, they completely protect their own state and never collide with other Controllers. As opposed to a static function, or a Model method, you can run any number of concurrent Controllers, and they will never collide.</p><p>Controllers provide a clean API for Application Logic. Because each Controller is isolated in its own file, they can grow quite complex and still be easy to work on and debug.</p><p>Working with multiple data sets is easy. Controllers can access any combination of models and services to do what they need to do. This removes most dependencies between models, and creates a clear domain layer where these types of high level actions should exist.</p><p>The code is easy to maintain. This is probably the biggest win for controllers. When returning to a project weeks or months later, it’s extremely easy to jump in and find what you need to work on, as all the high-level business logic is wrapped in these dedicated class files with very clear names. The value of this can not be overstated.</p><h3 id="state-management-using-controllers" tabindex="-1"><a class="header-anchor" href="#state-management-using-controllers" aria-hidden="true">#</a> State Management using <code>Controllers</code></h3><p>State management is essential in Flutter app development because it allows us to centralize every UI state and control data flow in the application.</p><p>App state is shared across different widgets of your app and is present across complete user sessions. For example, app state appears in the form of login info, user preferences, social app notifications, e-commerce app shopping cart, articles state (read/unread) in a news app, etc.</p><p>If you look at it, then there is no one rule here to use ephemeral or App state. One can change one state to another based on the requirement. You have the power to use both setState() and App State to handle every state of your app.</p><p>When you are handling a global state which is across the App, setState() is not the right type. If you end up using setState() across the entire app, you may face a maintenance glitch, as your state will be everywhere.</p><p>You have to use setState() in the UI code’s class only. This means you can end up mixing business logic and UI, which hampers code quality.</p><h5 id="we-prefer-using-getx-because" tabindex="-1"><a class="header-anchor" href="#we-prefer-using-getx-because" aria-hidden="true">#</a> We prefer using GetX because</h5><p>GetX is a fast, stable, and light state management library in flutter. There are so many State Management libraries in flutter like MobX, BLoC, Redux, Provider, etc. GetX is also a powerful micro framework and using this, we can manage states, make routing, and can perform dependency injection.</p><p>Performance: As compared to other state management libraries, GetX is best because it consumes minimum resources and provides better performance.</p><p>Productivity: GetX’s syntax is easy so it is productive. It saves a lot of time for the developers and increases the speed of the app because it does not use extra resources. It uses only those resources which are currently needed and after its work is done, the resources will free automatically. If all the resources are loaded into the memory then it will not be that productive. So better to use GetX for this.</p><p>Organization: GetX code is organized as View, Logic, navigation, and dependency injection. So we don’t need any more context to navigate to other screen. We can navigate to screen without using the context so we are not dependent on widget tree.</p>',20),g={href:"https://pub.dev/packages/get",target:"_blank",rel:"noopener noreferrer"};function f(y,w){const n=a("router-link"),s=a("ExternalLinkIcon");return i(),l("div",null,[d,e("nav",u,[e("ul",null,[e("li",null,[o(n,{to:"#state-management-using-controllers"},{default:c(()=>[t("State Management using Controllers")]),_:1})])])]),m,e("p",null,[e("a",g,[t("Official GetX Documentation"),o(s)])])])}const v=r(h,[["render",f],["__file","controllers.html.vue"]]);export{v as default};
