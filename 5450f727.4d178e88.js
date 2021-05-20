(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var s=a(3),n=a(7),i=(a(0),a(175)),r=(a(180),a(181),a(176),a(177),{id:"index-chatapp",title:"How to build a Chat application using Redis",sidebar_label:"How to build a Chat application using Redis",slug:"/howtos/chatapp"}),o={unversionedId:"howtos/chatapp/index-chatapp",id:"howtos/chatapp/index-chatapp",isDocsHomePage:!1,title:"How to build a Chat application using Redis",description:"Real-time chat is an online communication channel that allows you to conduct real-time conversations. More and more developers are tapping into the power of Redis as it is extremely fast & due to its support for variety of rich data structure such as Lists, Sets, Sorted Sets, Hashes etc.",source:"@site/docs/howtos/chatapp/index-chatapp.mdx",slug:"/howtos/chatapp",permalink:"/howtos/chatapp",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/chatapp/index-chatapp.mdx",version:"current",sidebar_label:"How to build a Chat application using Redis",sidebar:"docs",previous:{title:"10. Sample Application",permalink:"/howtos/moviesdatabase/sampleapp"},next:{title:"How to build a Fraud Detection System using RedisGears and RedisBloom",permalink:"/howtos/frauddetection"}},c=[{value:"Step 1. Prerequisite",id:"step-1-prerequisite",children:[]},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",children:[]},{value:"Step 3. Installing the requred packages",id:"step-3-installing-the-requred-packages",children:[]},{value:"Step 4. Starting the frontend",id:"step-4-starting-the-frontend",children:[]},{value:"Step 4. Installing the required Python modules",id:"step-4-installing-the-required-python-modules",children:[]},{value:"Step 5: Running  Backend",id:"step-5-running--backend",children:[]},{value:"How it works?",id:"how-it-works",children:[]},{value:"How the data is stored?",id:"how-the-data-is-stored",children:[]},{value:"How the data is accessed?",id:"how-the-data-is-accessed",children:[]},{value:"Further References",id:"further-references",children:[]}],l={toc:c};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Real-time chat is an online communication channel that allows you to conduct real-time conversations. More and more developers are tapping into the power of Redis as it is extremely fast & due to its support for variety of rich data structure such as Lists, Sets, Sorted Sets, Hashes etc.\nRedis comes along with a Pub/Sub messaging functionality that allows developers to scale the backend by spawning multiple server instances"),Object(i.b)("p",null,"In this tutorial, we will see how to build a basic chat application built with Flask, Socket.IO and Redis.\nThis example uses pub/sub feature combined with web-sockets for implementing the message communication between client and server."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Chatapp",src:a(236).default})),Object(i.b)("h3",{id:"step-1-prerequisite"},"Step 1. Prerequisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Python 3.6+")),Object(i.b)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"git clone https://github.com/redis-developer/basic-redis-chat-app-demo-python\n")),Object(i.b)("h3",{id:"step-3-installing-the-requred-packages"},"Step 3. Installing the requred packages"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"cd client\nyarn install\n")),Object(i.b)("h3",{id:"step-4-starting-the-frontend"},"Step 4. Starting the frontend"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"yarn start\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"You can now view client in the browser.\n\n  Local:            http://localhost:3000\n  On Your Network:  http://192.168.1.9:3000\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"chatapp",src:a(378).default})),Object(i.b)("h3",{id:"step-4-installing-the-required-python-modules"},"Step 4. Installing the required Python modules"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"cd ..\npip3 install -r requirements.txt\n")),Object(i.b)("h3",{id:"step-5-running--backend"},"Step 5: Running  Backend"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"python3 -m venv venv/\nsource venv/bin/activate\npython3 app.py\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"python3 app.py                  \n * Restarting with stat\n * Debugger is active!\n * Debugger PIN: 220-696-610\n(8122) wsgi starting up on http://127.0.0.1:5000\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Chatapp",src:a(236).default})),Object(i.b)("h3",{id:"how-it-works"},"How it works?"),Object(i.b)("p",null,"The chat server works as a basic REST API which involves keeping the session and handling the user state in the chat rooms (besides the WebSocket/real-time part).\nWhen the server starts, the initialization step occurs. At first, a new Redis connection is established and it's checked whether it's needed to load the demo data."),Object(i.b)("h4",{id:"initialization"},"Initialization"),Object(i.b)("p",null,"For simplicity, a key with total_users value is checked: if it does not exist, we fill the Redis database with initial data. EXISTS total_users (checks if the key exists)\nThe demo data initialization is handled in multiple steps:"),Object(i.b)("h4",{id:"creating-of-demo-users"},"Creating of demo users"),Object(i.b)("p",null,"We create a new user id: INCR total_users. Then we set a user ID lookup key by user name: e.g. "),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"SET username:nick user:1\n")),Object(i.b)("p",null,"And finally, the rest of the data is written to the hash set: "),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),'  HSET user:1 username "nick" password "bcrypt_hashed_password".\n')),Object(i.b)("p",null,'Additionally, each user is added to the default "General" room.\nFor handling rooms for each user, we have a set that holds the room ids. Here\'s an example command of how to add the room: '),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),' SADD user:1:rooms "0"\n')),Object(i.b)("p",null,"Populate private messages between users. At first, private rooms are created: if a private room needs to be established, for each user a room id: room:1:2 is generated, where numbers correspond to the user ids in ascending order."),Object(i.b)("p",null,"E.g. Create a private room between 2 users: "),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," SADD user:1:rooms 1:2 and SADD user:2:rooms 1:2\n")),Object(i.b)("p",null,"Then we add messages to this room by writing to a sorted set: "),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," ZADD room:1:2 1615480369 \"{'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}\"\n")),Object(i.b)("p",null,"We use a stringified JSON for keeping the message structure and simplify the implementation details for this demo-app."),Object(i.b)("p",null,'Populate the "General" room with messages. Messages are added to the sorted set with id of the "General" room: room:0'),Object(i.b)("h4",{id:"pubsub"},"Pub/sub"),Object(i.b)("p",null,"After initialization, a pub/sub subscription is created: SUBSCRIBE MESSAGES. At the same time, each server instance will run a listener on a message on this channel to receive real-time updates."),Object(i.b)("p",null,"Again, for simplicity, each message is serialized to JSON, which we parse and then handle in the same manner, as WebSocket messages."),Object(i.b)("p",null,"Pub/sub allows connecting multiple servers written in different platforms without taking into consideration the implementation detail of each server."),Object(i.b)("h4",{id:"real-time-chat-and-session-handling"},"Real-time chat and session handling"),Object(i.b)("p",null,"When a WebSocket/real-time server is instantiated, which listens for the next events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Connection. A new user is connected. At this point, a user ID is captured and saved to the session (which is cached in Redis). Note, that session caching is language/library-specific and it's used here purely for persistence and maintaining the state between server reloads.")),Object(i.b)("p",null,"A global set with online_users key is used for keeping the online state for each user. So on a new connection, a user ID is written to that set:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," SADD online_users 1\n")),Object(i.b)("p",null,"Here we  have added user with id 1 to the set online_users"),Object(i.b)("p",null,"After that, a message is broadcasted to the clients to notify them that a new user is joined the chat."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Disconnect. It works similarly to the connection event, except we need to remove the user for online_users set and notify the clients: SREM online_users 1 (makes user with id 1 offline).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Message. A user sends a message, and it needs to be broadcasted to the other clients. The pub/sub allows us also to broadcast this message to all server instances which are connected to this Redis:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{})," PUBLISH message \"{'serverId': 4132, 'type':'message', 'data': {'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}}\"\n")))),Object(i.b)("p",null,"Note we send additional data related to the type of the message and the server id. Server id is used to discard the messages by the server instance which sends them since it is connected to the same MESSAGES channel."),Object(i.b)("p",null,"The type field of the serialized JSON corresponds to the real-time method we use for real-time communication (connect/disconnect/message)."),Object(i.b)("p",null,"The data is method-specific information. In the example above it's related to the new message."),Object(i.b)("h3",{id:"how-the-data-is-stored"},"How the data is stored?"),Object(i.b)("p",null,"Redis is used mainly as a database to keep the user/messages data and for sending messages between connected servers."),Object(i.b)("p",null,"The real-time functionality is handled by Socket.IO for server-client messaging. Additionally each server instance subscribes to the MESSAGES channel of pub/sub and dispatches messages once they arrive. Note that, the server transports pub/sub messages with a separate event stream (handled by Server Sent Events), this is due to the need of running pub/sub message loop apart from socket.io signals."),Object(i.b)("p",null,"The chat data is stored in various keys and various data types.\nUser data is stored in a hash set where each user entry contains the next values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"username: unique user name;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"password: hashed password")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Additionally a set of rooms is associated with user")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rooms are sorted sets which contains messages where score is the timestamp for each message")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Each room has a name associated with it")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Online set is global for all users is used for keeping track on which user is online.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"User hash set is accessed by key user:{userId}. The data for it stored with HSET key field data. User id is calculated by incrementing the total_users key (INCR total_users)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Username is stored as a separate key (username:{username}) which returns the userId for quicker access and stored with SET username:{username} {userId}.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rooms which user belongs too are stored at user:{userId}:rooms as a set of room ids. A room is added by SADD user:{userId}:rooms {roomId} command.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Messages are stored at room:{roomId} key in a sorted set (as mentioned above). They are added with ZADD room:{roomId} {timestamp} {message} command. Message is serialized to an app-specific JSON string."))),Object(i.b)("h3",{id:"how-the-data-is-accessed"},"How the data is accessed?"),Object(i.b)("p",null,"Get User HGETALL user:{id}. "),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," HGETALL user:2\n")),Object(i.b)("p",null,"where we get data for the user with id: 2."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Online users: SMEMBERS online_users. This will return ids of users which are online")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get room ids of a user: SMEMBERS user:{id}:rooms.\nExample: "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{})," SMEMBERS user:2:rooms\n")))),Object(i.b)("p",null,"This will return IDs of rooms for user with ID: 2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get list of messages ZREVRANGE room:{roomId} {offset_start} {offset_end}.\nExample: "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{})," ZREVRANGE room:1:2 0 50\n")),Object(i.b)("p",{parentName:"li"},"It will return 50 messages with 0 offsets for the private room between users with IDs 1 and 2."))),Object(i.b)("h2",{id:"further-references"},"Further References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-app-demo-dotnet"}),"Building a sample Redis Chat application demo in .Net")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-app-demo-java"}),"Building a Sample Redis Chat application demo in Java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-app-demo-nodejs"}),"Building a Sample Redis Chat application demo in NodeJS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-demo-go"}),"Building a Sample Redis Chat application demo in Go")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"https://github.com/redis-developer/basic-redis-chat-demo-ruby"}),"Building a Sample Redis Chat application demo in Ruby"))))}d.isMDXComponent=!0},177:function(e,t,a){"use strict";var s=a(0),n=a.n(s),i=a(175),r=a(183);a(176),a(55);t.a=function(e){var t=n.a.useState(!1),a=t[0],s=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return s(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(i.a,{components:r.a},e.children)))}},178:function(e,t,a){"use strict";var s=a(0),n=a(179);t.a=function(){var e=Object(s.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},179:function(e,t,a){"use strict";var s=a(0),n=Object(s.createContext)(void 0);t.a=n},180:function(e,t,a){"use strict";var s=a(0),n=a.n(s),i=a(178),r=a(182),o=a(56),c=a.n(o),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,p=e.groupId,u=e.className,h=Object(i.a)(),m=h.tabGroupChoices,O=h.setTabGroupChoices,j=Object(s.useState)(o),f=j[0],g=j[1],w=s.Children.toArray(e.children);if(null!=p){var v=m[p];null!=v&&v!==f&&b.some((function(e){return e.value===v}))&&g(v)}var N=function(e){g(e),null!=p&&O(p,e)},y=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},u)},b.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(s.cloneElement)(w.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(s.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},181:function(e,t,a){"use strict";var s=a(3),n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",Object(s.a)({role:"tabpanel"},{hidden:a,className:n}),t)}},236:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatapp_homepage-e18893a7fe583a1dbda4c15347ee9d52.png"},378:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/chatapp_server-5bee233da218811142ccb0a536639640.png"}}]);