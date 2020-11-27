(window.webpackJsonp=window.webpackJsonp||[]).push([[125,91,130],{195:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),o=(t(0),t(222)),i=t(51),c=t(53),s={id:"intro_java_cqrs",title:"Introduction to the Java REST API application",sidebar_label:"Introduction",hide_table_of_contents:!0,description:"Introduction to the Java REST API application",keywords:["java","rest","api","cqrs","introduction","spring boot"]},l={unversionedId:"workloads/azure/backend/java_cqrs/intro_java_cqrs",id:"workloads/azure/backend/java_cqrs/intro_java_cqrs",isDocsHomePage:!1,title:"Introduction to the Java REST API application",description:"Introduction to the Java REST API application",source:"@site/docs/workloads/azure/backend/java_cqrs/intro_java_cqrs.md",slug:"/workloads/azure/backend/java_cqrs/intro_java_cqrs",permalink:"/docs/workloads/azure/backend/java_cqrs/intro_java_cqrs",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Running API tests with Karate",permalink:"/docs/workloads/azure/backend/java/execute_karate_api_tests"},next:{title:"Requirements",permalink:"/docs/workloads/azure/backend/java_cqrs/requirements_java_cqrs"}},u=[{value:"Stacks Java Spring Boot REST API Application",id:"stacks-java-spring-boot-rest-api-application",children:[{value:"Overview",id:"overview",children:[]}]}],p={rightToc:u};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"stacks-java-spring-boot-rest-api-application"},"Stacks Java Spring Boot REST API Application"),Object(o.b)("h3",{id:"overview"},"Overview"),Object(o.b)("p",null,"This is a sample Java REST API application with CQRS, showcasing best coding practices and integrating with Azure\nand scaffolding for Amido Stacks."),Object(o.b)("p",null,"The application implements Application Insights for performance management,\nand Cosmos DB is used for cloud persistence."),Object(o.b)("p",null,"The application is designed as a restaurant menu application. Users can create a Menu.\nMenus can hold one or more Categories, and a Category holds menu Items.\nThe API provides an interface for clients to create/update and delete any or all of the menu components."),Object(o.b)(c.default,{url:"https://youtu.be/kiHOEV1RSmM",mdxType:"ResponsivePlayer"}),Object(o.b)("p",null,"As an example below is a Json response to illustrate the structure defined by the model."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id" : "296b3d1e-c8f0-4958-8138-bf191f633cbc",\n  "restaurantId" : "a6f6a3e0-7a4c-4c0a-b7cf-6115b624c2e7",\n  "name" : "Restaurant Menu",\n  "description" : "Restaurant Menu Description",\n  "categories" : [ {\n    "id" : "ab6df204-572b-46ef-b5b5-75a6a6b47882",\n    "name" : "Main Menus",\n    "description" : "Main meals",\n    "items" : [ {\n      "id" : "5a63d477-11a6-454b-902e-f3794b723f0e",\n      "name" : "Lasagna",\n      "description" : "Pasta Item",\n      "price" : 13.56,\n      "available" : true\n    } ]\n  } ],\n  "enabled" : true\n}\n')),Object(o.b)(i.default,{prev:!0,mdxType:"HideNavigation"}))}d.isMDXComponent=!0},222:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?r.a.createElement(f,c(c({ref:n},l),{},{components:t})):r.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},51:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a);n.default=function(e){var n=e.next,t=e.prev;return r.a.useEffect((function(){if(n){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(t){var a=document.querySelector("div.pagination-nav__item>a");a&&a.style&&(a.style.display="none")}})),r.a.createElement("div",null)}},53:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(233),i=t.n(o),c=t(54),s=t.n(c);n.default=function(e){var n=e.url;return r.a.createElement("div",{className:s.a.playerSection},r.a.createElement("div",{className:s.a.playerWrapper},r.a.createElement(i.a,{className:s.a.player,url:n,controls:!0,width:"100%",height:"100%",config:{youtube:{playerVars:{modestbranding:1,controlsList:"nodownload"}}}})))}}}]);