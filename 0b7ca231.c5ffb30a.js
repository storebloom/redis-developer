(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{237:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=o,h=d["".concat(c,".").concat(b)]||d[b]||u[b]||n;return r?a.a.createElement(h,p(p({ref:t},i),{},{components:r})):a.a.createElement(h,p({ref:t},i))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<n;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},345:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/pycograph1-c613b539a1b9593e890ac48f8327d037.png"},346:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/pycograph2-4d39ddb177262c70e6ed5b457d6c0b92.png"},347:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/pycograph3-82079be3e40ebd99ce870a81dc628071.png"},348:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/pycograph4-f7fe963e1425562926ecff93c68c76e0.png"},349:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/pycograph5-77bc3dc108918d7a4ca8a9e45f83e929.png"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var o=r(3),a=r(7),n=(r(0),r(237)),c={id:"index-explorepythoncode",title:"Explore Python Codebase using RedisGraph",sidebar_label:"Explore Python Codebase using RedisGraph",slug:"/howtos/redisgraph/explore-python-code"},p={unversionedId:"howtos/redisgraph/explore-python-code/index-explorepythoncode",id:"howtos/redisgraph/explore-python-code/index-explorepythoncode",isDocsHomePage:!1,title:"Explore Python Codebase using RedisGraph",description:"Pycograph is an open source tool that creates a RedisGraph model of your Python code. The tool lets you to explore your Python codebase with graph queries. With Pycograph, you can query the python code with Cypher. Additionally, it is possible to visualize the graph model using RedisInsight.",source:"@site/docs/howtos/redisgraph/explore-python-code/index-explorepythoncode.mdx",slug:"/howtos/redisgraph/explore-python-code",permalink:"/howtos/redisgraph/explore-python-code",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/explore-python-code/index-explorepythoncode.mdx",version:"current",sidebar_label:"Explore Python Codebase using RedisGraph",sidebar:"docs",previous:{title:"Getting Started with RedisGraph",permalink:"/howtos/redisgraph/getting-started"},next:{title:"RedisBloom Tutorial",permalink:"/howtos/redisbloom"}},s=[{value:"Step 1. Install Docker",id:"step-1-install-docker",children:[]},{value:"Step 2. Install Pycograph from PyPI",id:"step-2-install-pycograph-from-pypi",children:[]},{value:"Step 3. Start RedisGraph Module",id:"step-3-start-redisgraph-module",children:[]},{value:"Step 4. Run RedisInsight",id:"step-4-run-redisinsight",children:[]},{value:"Step 5. Load a sample Python code",id:"step-5-load-a-sample-python-code",children:[]},{value:"Step 6. Load Python Code",id:"step-6-load-python-code",children:[]},{value:"Step 7. Visualize the project",id:"step-7-visualize-the-project",children:[]},{value:"References:",id:"references",children:[]}],i={toc:s};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},i,c,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Pycograph is an open source tool that creates a RedisGraph model of your Python code. The tool lets you to explore your Python codebase with graph queries. With Pycograph, you can query the python code with Cypher. Additionally, it is possible to visualize the graph model using RedisInsight."),Object(n.b)("p",null,"The project is hosted over ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://pycograph.com/"}),"https://pycograph.com/")," and package is available in ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://pypi.org/project/pycograph/"}),"PyPI repository"),". It was introduced for the first time by ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://pypi.org/user/reka/"}),"Reka Horvath")," during RedisConf 2021."),Object(n.b)("div",{class:"text--center"},Object(n.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pE3cg6jK2Zg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("p",null,"Let us see how to explore Python code using Pycograph and RedisGraph below:"),Object(n.b)("h3",{id:"step-1-install-docker"},"Step 1. Install Docker"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," curl -sSL https://get.docker.com/ | sh\n")),Object(n.b)("h3",{id:"step-2-install-pycograph-from-pypi"},"Step 2. Install Pycograph from PyPI"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," pip install pycograph\n")),Object(n.b)("h3",{id:"step-3-start-redisgraph-module"},"Step 3. Start RedisGraph Module"),Object(n.b)("p",null,"The redislabs/redismod Docker image provides you all the essential Redis modules."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -p 6379:6379 redislabs/redismod\n")),Object(n.b)("h3",{id:"step-4-run-redisinsight"},"Step 4. Run RedisInsight"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),Object(n.b)("h3",{id:"step-5-load-a-sample-python-code"},"Step 5. Load a sample Python code"),Object(n.b)("p",null,"We will be using a popular Docker compose project for our sample python code.\nClone the Docker Compose project repository"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"  git clone https://github.com/docker/compose\n")),Object(n.b)("h3",{id:"step-6-load-python-code"},"Step 6. Load Python Code"),Object(n.b)("p",null,"Load your project's code with the pycograph load command:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," pycograph load --project-dir compose\n")),Object(n.b)("b",null,"Results"),":",Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," Graph successfully updated.\n {'graph name': 'compose', 'nodes added': 2428, 'edges added': 11239}\n")),Object(n.b)("h3",{id:"step-7-visualize-the-project"},"Step 7. Visualize the project"),Object(n.b)("p",null,"Open RedisInsight, select RedisGraph on the left menu and run the below query:"),Object(n.b)("h4",{id:"query-1-return-every-node"},"Query #1: Return every node"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{})," MATCH (n) RETURN n\n")),Object(n.b)("p",null,"You will see the below output:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"My Image",src:r(345).default})),Object(n.b)("h4",{id:"query-2-return-every-non-test-object"},"Query #2: Return every non-test object"),Object(n.b)("p",null,Object(n.b)("img",{alt:"My Image",src:r(346).default}),"  "),Object(n.b)("h4",{id:"query-3--displaying-the-function-behind-the-docker-compose-up-command"},"Query #3.  Displaying the function behind the docker-compose up command"),Object(n.b)("p",null,"A query returning exactly one node using the unique full_name property. Double-click on the node to display all its relationships."),Object(n.b)("p",null,Object(n.b)("img",{alt:"My Image",src:r(347).default})),Object(n.b)("h4",{id:"query-4-displaying-the-docker-compose-up-and-its-calls-relationships"},"Query #4. Displaying the 'docker-compose up' and its calls relationships"),Object(n.b)("p",null,Object(n.b)("img",{alt:"My Image",src:r(348).default})," "),Object(n.b)("h4",{id:"query-5-displaying-the-docker-compose-up-vs-docker-compose-run"},"Query #5. Displaying the 'docker-compose up' vs 'docker-compose run'"),Object(n.b)("p",null,"Functions called by the Docker Compose top level commands up and run"),Object(n.b)("p",null,Object(n.b)("img",{alt:"My Image",src:r(349).default})),Object(n.b)("h3",{id:"references"},"References:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://pycograph.com/"}),"Pycograph Project")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/docker/compose"}),"Docker Compose Source Code"))))}l.isMDXComponent=!0}}]);