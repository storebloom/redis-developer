(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{175:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(r),b=a,m=l["".concat(s,".").concat(b)]||l[b]||d[b]||o;return r?n.a.createElement(m,i(i({ref:t},c),{},{components:r})):n.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},322:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/popupstore-6a650c06aa4302de52a3e1ae6af34cbc.gif"},323:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/grafana1-b08366933d2c05d9168f48e51ec8b361.png"},324:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/popup-79f8148368b0467472d512af0313cec0.png"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(175)),s={id:"index-popupstore",title:"Building a Popup Store  application using Redis",sidebar_label:"Building a Popup Store application using Redis",slug:"/howtos/popupstore"},i={unversionedId:"howtos/popupstore/index-popupstore",id:"howtos/popupstore/index-popupstore",isDocsHomePage:!1,title:"Building a Popup Store  application using Redis",description:"Pop-up stores are becoming a popular channel for retailers to create a new revenue stream, generate buzz with customers, test product concepts, or unload excess inventory. Since the idea is to spin up the store quickly and then close it shortly thereafter, it doesn\u2019t make sense to spend a lot of time on development. With the right Redis modules, you can create a robust customer experience without a lot of development effort.",source:"@site/docs/howtos/popupstore/index-popupstore.mdx",slug:"/howtos/popupstore",permalink:"/howtos/popupstore",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/popupstore/index-popupstore.mdx",version:"current",sidebar_label:"Building a Popup Store application using Redis",sidebar:"docs",previous:{title:"Building an Analytics dashboard app using Redis",permalink:"/howtos/analytics"}},p=[{value:"Step 1. Cloning the repository",id:"step-1-cloning-the-repository",children:[]},{value:"Step 2. Running the application",id:"step-2-running-the-application",children:[]},{value:"Step 3. Accessing Grafana dashboard",id:"step-3-accessing-grafana-dashboard",children:[]},{value:"How it works",id:"how-it-works",children:[{value:"Addition Resources",id:"addition-resources",children:[]}]}],c={toc:p};function u(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Pop-up stores are becoming a popular channel for retailers to create a new revenue stream, generate buzz with customers, test product concepts, or unload excess inventory. Since the idea is to spin up the store quickly and then close it shortly thereafter, it doesn\u2019t make sense to spend a lot of time on development. With the right Redis modules, you can create a robust customer experience without a lot of development effort."),Object(o.b)("p",null,"This pop-up store demo illustrates a company that sells a single product and has 10,000 units available for purchase. Each customer can purchase one unit and the sale lasts only 10 minutes, so order processing must be instantaneous. The demo shows how to visualize data pipeline in real-time using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/topics/streams-intro"}),"Redis Streams"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.redislabs.com/howtos/redistimeseries"}),"RedisTimeSeries"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.redislabs.com/howtos/redisgears"}),"RedisGears")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.redislabs.com/explore/redisdatasource"}),"Redis Datasource with Grafana"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Pop-up",src:r(322).default})),Object(o.b)("h3",{id:"step-1-cloning-the-repository"},"Step 1. Cloning the repository"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone https://github.com/redis-developer/redis-pop-up-store/\n")),Object(o.b)("h3",{id:"step-2-running-the-application"},"Step 2. Running the application"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"docker-compose up -d\n")),Object(o.b)("h3",{id:"step-3-accessing-grafana-dashboard"},"Step 3. Accessing Grafana dashboard"),Object(o.b)("p",null,"Open http://IPAddress:3000 to access the grafana dashboard"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Grafana",src:r(323).default})),Object(o.b)("p",null,"Grafana query streams and Time-Series keys every 5 seconds to display samples using Grafana Redis Datasource.This Grafana dashboard displays:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Product Available: the value of product key, which decreases as orders complete"),Object(o.b)("li",{parentName:"ul"},"Customers Ordering, Orders Processing, and Orders Completed: the length of queue:customers, queue:orders, and queue:complete streams"),Object(o.b)("li",{parentName:"ul"},"Customers Overflow: the difference between customer-submitted orders and orders completed"),Object(o.b)("li",{parentName:"ul"},"Customers Ordering: orders created in 5 seconds"),Object(o.b)("li",{parentName:"ul"},"Orders In Queue: orders waiting to be processed"),Object(o.b)("li",{parentName:"ul"},"Completed Flow: orders completed in 5 seconds")),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Diagram",src:r(324).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Node.js script adds random data to Customers and Orders streams"),Object(o.b)("li",{parentName:"ul"},"RedisGears is using ",Object(o.b)("inlineCode",{parentName:"li"},"StreamReader")," to watch all ",Object(o.b)("inlineCode",{parentName:"li"},"queue:")," keys and adding Time-Series samples")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"# Add Time-Series\ndef tsAdd(x):\n   xlen = execute('XLEN', x['key'])\n   execute('TS.ADD', 'ts:len:'+x['key'], '*', xlen)\n   execute('TS.ADD', 'ts:enqueue:' + x['key'], '*', x['value'])\n\n\n# Stream Reader for any Queue\ngb = GearsBuilder('StreamReader')\ngb.countby(lambda x: x['key']).map(tsAdd)\ngb.register(prefix='queue:*', duration=5000, batch=10000, trimStream=False)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Another RedisGears script completes orders",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"adding data to ",Object(o.b)("inlineCode",{parentName:"li"},"queue:complete")," stream"),Object(o.b)("li",{parentName:"ul"},"deleting client's ordering"),Object(o.b)("li",{parentName:"ul"},"decreasing product amount"),Object(o.b)("li",{parentName:"ul"},"trimming Orders queue")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"# Complete order\ndef complete(x):\n    execute('XADD', 'queue:complete', '*', 'order', x['id'],\n            'customer', x['value']['customer'])\n    execute('XDEL', 'queue:customers', x['value']['customer'])\n    execute('DECR', 'product')\n\n\n# Stream Reader for Orders queue\ngb = GearsBuilder('StreamReader')\ngb.map(complete)\ngb.register(prefix='queue:orders', batch=3, trimStream=True)\n")),Object(o.b)("h3",{id:"addition-resources"},"Addition Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/redis-developer/redis-pop-up-store"}),"Redis Popup Store GitHub Repository")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://redislabs.com/blog/3-real-life-apps-built-with-redis-data-source-for-grafana/"}),"3 Real-Life Apps Built with Redis Data Source for Grafana"))))}u.isMDXComponent=!0}}]);