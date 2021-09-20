(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{124:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"metadata",(function(){return c})),n.d(a,"toc",(function(){return o})),n.d(a,"default",(function(){return d}));var t=n(3),i=n(7),r=(n(0),n(245)),s=(n(247),n(250),n(251),n(246),{id:"index-lesson_9",title:"Caching REST Services with Redis",sidebar_label:"Caching w/ Redis",slug:"/develop/java/redis-and-spring-course/lesson_9"}),c={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9",id:"develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9",isDocsHomePage:!1,title:"Caching REST Services with Redis",description:"Objectives",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9.mdx",slug:"/develop/java/redis-and-spring-course/lesson_9",permalink:"/develop/java/redis-and-spring-course/lesson_9",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9.mdx",version:"current",sidebar_label:"Caching w/ Redis",sidebar:"docs",previous:{title:"Recommendations with RedisGraph",permalink:"/develop/java/redis-and-spring-course/lesson_8"},next:{title:"Rate Limiting with Spring and Redis",permalink:"/develop/java/spring/rate-limiting"}},o=[{value:"Objectives",id:"objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"Spring-Redis Caching Recipe",id:"spring-redis-caching-recipe",children:[]},{value:"Using the @Cacheable annotation",id:"using-the-cacheable-annotation",children:[]}],l={toc:o};function d(e){var a=e.components,s=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},l,s,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"objectives"},"Objectives"),Object(r.b)("p",null,"Learn how easy it is to use Redis as a cache in your Spring applications"),Object(r.b)("h3",{id:"agenda"},"Agenda"),Object(r.b)("p",null,"In this lesson, students will learn:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The basics of Caching RESTful Services"),Object(r.b)("li",{parentName:"ul"},"How to configure the Spring Data Redis ",Object(r.b)("inlineCode",{parentName:"li"},"RedisCacheManager")," using ",Object(r.b)("inlineCode",{parentName:"li"},"RedisCacheConfiguration")),Object(r.b)("li",{parentName:"ul"},"How to use the ",Object(r.b)("inlineCode",{parentName:"li"},"@Cacheable")," annotation to mark a REST controller response as cacheable\nIf you get stuck:"),Object(r.b)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/redis-developer/redi2read/tree/course/milestone-9"}),"https://github.com/redis-developer/redi2read/tree/course/milestone-9"))),Object(r.b)("h3",{id:"spring-redis-caching-recipe"},"Spring-Redis Caching Recipe"),Object(r.b)("p",null,"To implement caching in our Spring Boot application:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Configure the Redis cache manager"),Object(r.b)("li",{parentName:"ul"},"Enable application-wide caching with the ",Object(r.b)("inlineCode",{parentName:"li"},"@EnableCaching")," annotation")),Object(r.b)("p",null,"In the main application file (",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/Redi2readApplication.java"),"), add the ",Object(r.b)("inlineCode",{parentName:"p"},"cacheManager")," method as shown:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@SpringBootApplication\n@EnableCaching\npublic class Redi2readApplication {\n\n  // ...\n\n  @Bean\n  public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {\n    RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig() //\n        .prefixCacheNameWith(this.getClass().getPackageName() + ".") //\n        .entryTtl(Duration.ofHours(1)) //\n        .disableCachingNullValues();\n\n    return RedisCacheManager.builder(connectionFactory) //\n        .cacheDefaults(config) //\n        .build();\n  }\n\n  // ...\n}\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"cacheManager")," method takes an instance of the ",Object(r.b)("inlineCode",{parentName:"p"},"RedisConnectionFactory"),". In it we will configure our cache to use a Redis\nkey prefix equals to our application\u2019s main package plus a period, that is ",Object(r.b)("inlineCode",{parentName:"p"},"com.redislabs.edu.redi2read."),"\nWe also set the TTL or \u201cTime to Live\u201d of our cache entries to 1 hour and make sure that we don\u2019t cache nulls.\nAt the class level, we also use the annotation ",Object(r.b)("inlineCode",{parentName:"p"},"@EnableCaching "),"to globally enable caching for our applications.\nThe changes above will need the import statements shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"import org.springframework.cache.annotation.EnableCaching;\nimport org.springframework.data.redis.cache.RedisCacheConfiguration;\nimport org.springframework.data.redis.cache.RedisCacheManager;\nimport java.time.Duration;\n")),Object(r.b)("h3",{id:"using-the-cacheable-annotation"},"Using the @Cacheable annotation"),Object(r.b)("p",null,"In the context of a RESTful service, caching makes sense at the handoff between the application and the HTTP protocol.\nIt seems almost silly to think about caching anything in an application powered by Redis, but complex business logic\ntouching many data repositories and performing intense calculations can add to your response\u2019s latency.\nThe ideal place to perform this caching is at the controller level. For example, let\u2019s say that we wanted to cache\nthe responses of our book searches in the ",Object(r.b)("inlineCode",{parentName:"p"},"BookController"),". We could simple add the ",Object(r.b)("inlineCode",{parentName:"p"},"@Cacheable")," annotation as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'@GetMapping("/search")\n@Cacheable("book-search")\npublic SearchResults<String,String> search(@RequestParam(name="q")String query) {\n  RediSearchCommands<String, String> commands = searchConnection.sync();\n  SearchResults<String, String> results = commands.search(searchIndexName, query);\n  return results;\n}\n')),Object(r.b)("p",null,"Spring will now use Redis to create keys under the ",Object(r.b)("inlineCode",{parentName:"p"},"com.redislabs.edu.redi2read.book-search")," prefix to store cache entries for the search method.\nThere is no need to perform cache maintenance yourself. Spring will intercept the request and check the cache;\nin the case of a cache hit, it will return its value. Otherwise, in case of a miss, it will store the cache\u2019s search method\u2019s return value,\nallowing the method to execute as if there was no cache at all.\nIf we try the request ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8080/api/books/search?q=java"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/books/search?q=java'\n")),Object(r.b)("p",null,"On the first request we get a 28 ms response time:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"PostMan Request 1",src:n(497).default})),Object(r.b)("p",null,"Subsequent responses return in the range of 8 ms to 10 ms consistently:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"PostMan Request 2",src:n(498).default})))}d.isMDXComponent=!0},247:function(e,a,n){"use strict";var t=n(0),i=n.n(t),r=n(245),s=n(253);n(246),n(55);a.a=function(e){var a=i.a.useState(!1),n=a[0],t=a[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return t(!n)}})))),n&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(r.a,{components:s.a},e.children)))}},248:function(e,a,n){"use strict";var t=n(0),i=n(249);a.a=function(){var e=Object(t.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,a,n){"use strict";var t=n(0),i=Object(t.createContext)(void 0);a.a=i},250:function(e,a,n){"use strict";var t=n(0),i=n.n(t),r=n(248),s=n(252),c=n(56),o=n.n(c),l=37,d=39;a.a=function(e){var a=e.lazy,n=e.block,c=e.defaultValue,u=e.values,p=e.groupId,b=e.className,h=Object(r.a)(),m=h.tabGroupChoices,g=h.setTabGroupChoices,f=Object(t.useState)(c),v=f[0],j=f[1],O=t.Children.toArray(e.children);if(null!=p){var C=m[p];null!=C&&C!==v&&u.some((function(e){return e.value===C}))&&j(C)}var w=function(e){j(e),null!=p&&g(p,e)},N=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var a=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===a,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":v===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,a,n){switch(n.keyCode){case d:!function(e,a){var n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()}(e,a);break;case l:!function(e,a){var n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,a)}}(N,e.target,e)},onFocus:function(){return w(a)},onClick:function(){w(a)}},n)}))),a?Object(t.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,a){return Object(t.cloneElement)(e,{key:a,hidden:e.props.value!==v})}))))}},251:function(e,a,n){"use strict";var t=n(3),i=n(0),r=n.n(i);a.a=function(e){var a=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(t.a)({role:"tabpanel"},{hidden:n,className:i}),a)}},497:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/image1-b14ce854155fedafbf2e5e2ae72c476c.png"},498:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/image2-96a417f52c38a686e5b194570d9db8dc.png"}}]);