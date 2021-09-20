(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{247:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(245),r=a(253);a(246),a(55);t.a=function(e){var t=i.a.useState(!1),a=t[0],n=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(s.a,{components:r.a},e.children)))}},248:function(e,t,a){"use strict";var n=a(0),i=a(249);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},250:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(248),r=a(252),o=a(56),c=a.n(o),d=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,u=e.groupId,b=e.className,m=Object(s.a)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(n.useState)(o),j=g[0],O=g[1],f=n.Children.toArray(e.children);if(null!=u){var w=v[u];null!=w&&w!==j&&p.some((function(e){return e.value===w}))&&O(w)}var R=function(e){O(e),null!=u&&h(u,e)},C=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},b)},p.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},a)}))),t?Object(n.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},251:function(e,t,a){"use strict";var n=a(3),i=a(0),s=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),s=(a(0),a(245)),r=a(247),o=(a(250),a(251),a(246),{id:"index-redis-and-spring-course",title:"Redis and Spring Course",sidebar_label:"Overview",slug:"/develop/java/redis-and-spring-course"}),c={unversionedId:"develop/java/spring/redis-and-spring-course/index-redis-and-spring-course",id:"develop/java/spring/redis-and-spring-course/index-redis-and-spring-course",isDocsHomePage:!1,title:"Redis and Spring Course",description:"This is a complete online course for Java/Spring developers wanting to learn how",source:"@site/docs/develop/java/spring/redis-and-spring-course/index-redis-and-spring-course.mdx",slug:"/develop/java/redis-and-spring-course",permalink:"/develop/java/redis-and-spring-course",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/index-redis-and-spring-course.mdx",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Spring and Redis",permalink:"/develop/java/spring"},next:{title:"Spring and Redis: Up and Running",permalink:"/develop/java/redis-and-spring-course/lesson_1"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Let&#39;s Learn Together",id:"lets-learn-together",children:[]},{value:"Course Contents",id:"course-contents",children:[]}],l={toc:d};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This is a complete online course for Java/Spring developers wanting to learn how\nRedis can serve as your primary database in Spring Applications and how to leverage the\npower of the many Redis Modules in a traditional Spring Microservices application."),Object(s.b)("p",null,"In this course, you'll learn about building REST Services with Spring and Redis.\nThe course is delivered in a tutorial style, in which you can follow along and\nbuild the course\u2019s sample application."),Object(s.b)("p",null,"...And don\u2019t worry if you get stuck during any lesson. The sample project provides\nmilestones in the form of Git branches that can help you pick up the project at any specific lesson."),Object(s.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(s.b)("p",null,"To get the most from this course, you'll need a machine that can run the application and the Redis server, which is provided as a Docker container.\nYou'll also need the following installed on your machine:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Git"),": See ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/"}),"https://git-scm.com/")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Java 11")," or higher: I recommend SDKMAN to install Java (",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://sdkman.io/"}),"https://sdkman.io/"),")"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Maven 3.2+"),": See ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://sdkman.io/sdks#maven"}),"https://sdkman.io/sdks#maven")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Docker"),": See ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker/"}),"https://docs.docker.com/get-docker/")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Docker Compose"),": See ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"https://docs.docker.com/compose/install/")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Postman or Curl"),": See ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postman.com/"}),"https://www.postman.com/")," / Curl is built-in on most platforms (for Windows see ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://curl.se/windows/"}),"https://curl.se/windows/"),")"),Object(s.b)("li",{parentName:"ul"},"Your favorite IDE or Code Editor (such as VSCode, Eclipse or IntelliJ IDEA)")),Object(s.b)("h3",{id:"lets-learn-together"},"Let's Learn Together"),Object(s.b)("p",null,"We're here to support your learning through a dedicated Discord channel that I'll be monitoring\nalong with other teaching assistants.  Join us on the Redis Discord server."),Object(s.b)("h3",{id:"course-contents"},"Course Contents"),Object(s.b)("div",{class:"row"},Object(s.b)("div",{class:"col"},Object(s.b)(r.a,{title:"1. Spring and Redis: Up and Running",description:"Create the skeleton for the course\u2019s Spring Boot application.",page:"/develop/java/redis-and-spring-course/lesson_1",mdxType:"RedisCard"})),Object(s.b)("div",{class:"col"},Object(s.b)(r.a,{title:"2. Spring Data Redis",description:"Introducing Spring Data Redis.",page:"/develop/java/redis-and-spring-course/lesson_2",mdxType:"RedisCard"})),Object(s.b)("div",{class:"col"},Object(s.b)(r.a,{title:"3. Object Mapping & Redis Repositories",description:"Object Mapping & Redis Repositories.",page:"/develop/java/redis-and-spring-course/lesson_3",mdxType:"RedisCard"}))),Object(s.b)("div",{class:"row"},Object(s.b)("div",{class:"col"},Object(s.b)(r.a,{title:"4. User/Roles & Secondary Indexes",description:"User/Roles & Secondary Indexes.",page:"/develop/java/redis-and-spring-course/lesson_4",mdxType:"RedisCard"})),Object(s.b)("div",{class:"col"},Object(s.b)(r.a,{title:"5. Books, Categories & The Catalog",description:"Books, Categories & The Catalog.",page:"/develop/java/redis-and-spring-course/lesson_5",mdxType:"RedisCard"})),Object(s.b)("div",{class:"col"},Object(s.b)(r.a,{title:"6. Domain Models with RedisJSON",description:"Domain Models with RedisJSON.",page:"/develop/java/redis-and-spring-course/lesson_6",mdxType:"RedisCard"}))),Object(s.b)("div",{class:"row"},Object(s.b)("div",{class:"col"},Object(s.b)(r.a,{title:"7. Search with RediSearch",description:"Search with RediSearch.",page:"/develop/java/redis-and-spring-course/lesson_7",mdxType:"RedisCard"})),Object(s.b)("div",{class:"col"},Object(s.b)(r.a,{title:"8. Recommendations with RedisGraph",description:"Recommendations with RedisGraph.",page:"/develop/java/redis-and-spring-course/lesson_8",mdxType:"RedisCard"})),Object(s.b)("div",{class:"col"},Object(s.b)(r.a,{title:"9. Caching REST Services with Redis",description:"Caching REST Services with Redis.",page:"/develop/java/redis-and-spring-course/lesson_9",mdxType:"RedisCard"}))))}p.isMDXComponent=!0}}]);