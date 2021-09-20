(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),s=(r(0),r(245)),i=(r(246),{id:"index-whatisredis",title:"What is Redis?: An Overview",sidebar_label:"What is Redis?",slug:"/develop/node/nodecrashcourse/whatisredis"}),o={unversionedId:"develop/node/node-crash-course/whatisredis/index-whatisredis",id:"develop/node/node-crash-course/whatisredis/index-whatisredis",isDocsHomePage:!1,title:"What is Redis?: An Overview",description:"Redis is an open source data structure server.  It belongs to the class of NoSQL databases known as key/value stores.  Keys are unique identifiers, whose value can be one of the data types that Redis supports.  These data types range from simple Strings, to Linked Lists, Sets and even Streams.  Each data type has its own set of behaviours and commands associated with it.",source:"@site/docs/develop/node/node-crash-course/whatisredis/index-whatisredis.mdx",slug:"/develop/node/nodecrashcourse/whatisredis",permalink:"/develop/node/nodecrashcourse/whatisredis",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/whatisredis/index-whatisredis.mdx",version:"current",sidebar_label:"What is Redis?",sidebar:"docs",previous:{title:"Welcome to the Node.js Crash Course",permalink:"/develop/node/nodecrashcourse/welcome"},next:{title:"Using Redis from Node.js",permalink:"/develop/node/nodecrashcourse/redisandnodejs"}},c=[{value:"External Resources",id:"external-resources",children:[]}],d={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{class:"text--center"},Object(s.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3P2FDZVKqsA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(s.b)("p",null,"Redis is an open source data structure server.  It belongs to the class of NoSQL databases known as key/value stores.  Keys are unique identifiers, whose value can be one of the data types that Redis supports.  These data types range from simple Strings, to Linked Lists, Sets and even Streams.  Each data type has its own set of behaviours and commands associated with it."),Object(s.b)("p",null,'For example, I can store my name in a Redis String and associate it with the key "myname" using a Redis ',Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/set"}),"SET command"),".  I can then retrieve the value using a Redis ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/get"}),"GET command"),".  Here's how that looks using redis-cli, a command line interface to Redis:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> set myname "Simon Prickett"\nOK\n127.0.0.1:6379> get myname\n"Simon Prickett"\n')),Object(s.b)("p",null,"Keys in a Redis database are distributed in a flat keyspace. Redis does not enforce a schema or naming policy for keys. This provides great flexibility, with the organization of the keyspace being the responsibility of the developer.  We'll look at ways of managing this later in the course."),Object(s.b)("p",null,"Redis is famous for being an extremely fast database.  This speed comes from the fact that it stores and serves all data from memory rather than disk.  Redis is durable, so your data will be persisted, but all reads will be from a copy of the data held in memory. This makes Redis an excellent choice for applications that require real time data access."),Object(s.b)("p",null,"Redis is also often used as a cache, and has specific functionality to support this.  Redis can be extended with new functionality using plugin modules.  We'll see how to use some of these as we make our way through the course."),Object(s.b)("h2",{id:"external-resources"},"External Resources"),Object(s.b)("p",null,"Here's some resources that we think will be useful to you as you discover Redis:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.io/"}),"redis.io")," - the official website of open source Redis."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise-cloud/overview/"}),"Redis Enterprise Cloud")," - a fully managed cloud service from Redis Labs - you can try it out using the full featured free tier."),Object(s.b)("li",{parentName:"ul"},"The official ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://hub.docker.com/_/redis/"}),"Redis Docker image"),"."),Object(s.b)("li",{parentName:"ul"},"For a comprehensive introduction to Redis, we recommend taking a look at the ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://university.redis.com/courses/ru101/"}),"RU101, Introduction to Redis Data Structures")," course at Redis University. In this free online course, you\u2019ll learn about the data structures in Redis, and you\u2019ll see how to practically apply them in the real world.")))}u.isMDXComponent=!0},245:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(r),h=n,b=l["".concat(i,".").concat(h)]||l[h]||p[h]||s;return r?a.a.createElement(b,o(o({ref:t},d),{},{components:r})):a.a.createElement(b,o({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},246:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i}));var n=r(21),a=r(254);function s(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var s=void 0===n?{}:n,i=s.forcePrependBaseUrl,o=void 0!==i&&i,c=s.absolute,d=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(o)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return d?e+u:u}(s,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},254:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);