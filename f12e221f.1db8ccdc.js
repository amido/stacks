(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(6),r=(t(0),t(173)),o={id:"api_definition",title:"Api Definition",sidebar_label:"Api Definition"},s={unversionedId:"workloads/azure/frontend/api_definition",id:"workloads/azure/frontend/api_definition",isDocsHomePage:!1,title:"Api Definition",description:"The generated scaffolding can be quickly used make calls to external APIs",source:"@site/docs/workloads/azure/frontend/Api.md",slug:"/workloads/azure/frontend/api_definition",permalink:"/stacks/docs/workloads/azure/frontend/api_definition",version:"current",sidebar_label:"Api Definition",sidebar:"docs",previous:{title:"Identity using Auth0",permalink:"/stacks/docs/workloads/azure/frontend/identity"},next:{title:"Logging and Instrumentation",permalink:"/stacks/docs/workloads/azure/frontend/logging_node_js"}},l=[{value:"Internal APIs",id:"internal-apis",children:[]},{value:"External APIs",id:"external-apis",children:[]}],c={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The generated scaffolding can be quickly used make calls to external APIs\nmeaning another endpoint either within your system developed by another team or\na public endpoint of 3rd party provider e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"hotels.com")," etc..."),Object(r.b)("p",null,"The backend (and frontend) uses the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/axios/axios"}),"axios"),"\nlibrary as the HTTPclient."),Object(r.b)("p",null,"It is on purpose left as a thin wrapper implementation so that the user can\nextend with additional parameters on top of the mandated ones; ",Object(r.b)("inlineCode",{parentName:"p"},"url"),", ",Object(r.b)("inlineCode",{parentName:"p"},"method")," -\ne.g. a header for authentication. As such it only returns an unopinionated axios\nInstance and not a method initialized implementation. the method paratemer is\nmainly used as a type guard."),Object(r.b)("p",null,"Sample implementation of an entire API can be found in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../src/ssr/constants/apis/menu.ts"}),"menu api"),", this demonstrates a business\nspecific implementation of talking to a data provider from node and exposing an\ninternal route within express for the FE to use for proxy."),Object(r.b)("p",null,"The base implemenation shouldn't be need to touch and it can be found in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../src/ssr/constants/apis/index.ts"}),"here"),"."),Object(r.b)("p",null,"To extend and add more of your own custom implementation use menu as an example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * base interface used by all implementations e.g. `menu`\n */\nexport interface Api {\n  /**\n   *\n   * this is the external url - can be in the form of https://api.hotels.com/foo or when used inside a Kubernetes cluster\n   * talking to another service within the same namespace it can take the form of `http://service_name` or\n   * `http://service_name.namespace`\n   * NB: do not omit the protocol `http` or `https` otherwise axios will default to localhost:80 as it will not recognise it as a valid TLD.\n   *\n   */\n  baseURL: string;\n  /**\n   * this is the version that\'s appended to the baseUrl e.g. a value of `v2` => `https://api.hotels.com/foo/v2` || `http://service_name.namespace/v2`\n   */\n  version: string;\n  /**\n   * this is the internal base path for the application\n   * can be left empty in localhost but should be set at deploy time if your application is not run under the root of your domain\n   * e.g. https://app.example.com/web/ui\n   * you would set this value to `/web/ui`\n   */\n  internalBasePath: string;\n  endpoints: Endpoint;\n}\n\n/**\n * key map denifinition for endpoints\n */\nexport interface Endpoint {\n  [key: string]: {\n    /**\n     * internal route used by express i.e. relative to localhost:${PORT}/myroute\n     */\n    routeDefinition: string,\n    /**\n     * returns the built external URL for this endpoint\n     */\n\n    getExternalURL: (...params) => string,\n    /**\n     * returns the method for the endpoint called by NodeJS httpclient(axios)\n     * NB: should be done on a 1-2-1 parity with internal/external\n     * i.e. if an external method is a GET the internal proxy route shoudl also be a GET\n     */\n\n    method: HTTPMethod,\n    /**\n     * returns the built internalUrl called by the clientside code (axios) a.k.a BFF\n     * NB: when deployed under a CDN or proxied path within an K8s cluster this will be included\n     * e.g. /web/ui/myroute => when called from client it should look like this https://app.example.com/web/ui/myroute\n     * NB2: leave out the preceeding slash => getInternalURL: (id: string) => `deletemenu/${id}`,\n     * that will be added in via the builder process which invokes a "private" method within the Api base class.\n     */\n\n    getInternalURL: (...params) => string,\n  };\n}\n')),Object(r.b)("p",null,"baseURL and internalBasePath are rigged to be populated from the config\nobject see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"####config"}),"below")),Object(r.b)("h2",{id:"internal-apis"},"Internal APIs"),Object(r.b)("p",null,"These are used by the front end hit the relevant proxied endpoint within node\n(behind an express route)."),Object(r.b)("p",null,"An example of how this is implemented can be seen in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../src/ssr/server/index.ts"}),"server.ts")," - again this file can be zero-touch and\nuser should focus only on extending the individual APIs - see\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../src/ssr/server/api/menu/index.ts"}),"menu api"),"."),Object(r.b)("p",null,"Sample implementation from a page can be seen in\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../src/ssr/components/ApiPane/index.tsx"}),"here"),"."),Object(r.b)("p",null,"Key things to note:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'import api from "constants/apis/menu";')),Object(r.b)("li",{parentName:"ul"},"multiple APIs from constants can be instatiated"),Object(r.b)("li",{parentName:"ul"},"e.g. ",Object(r.b)("inlineCode",{parentName:"li"},'import menuApi from "constants/apis/menu";'),Object(r.b)("inlineCode",{parentName:"li"},'import categoryApi from "constants/apis/menu";'))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const menu = menuApi("getMenuList"); // must correspond to a key in the Endpoints for that class\'s Api implementation\n\nconst res = await axios({\n  method: menu.method,\n  url: menu.internalEndpoint(),\n});\n')),Object(r.b)("h2",{id:"external-apis"},"External APIs"),Object(r.b)("p",null,"The application can use a mixture of environment variables and statically\ndefined values. Typically you would define an environment variable for things\nthat are likely to change on stage by stage basis - where stage is Dev, Test,\nProd commonly separated by a namespace in the cluster."),Object(r.b)("p",null,"At application start a config object is created and used at runtime by various\nclasses that need to access it, the app code should not reference the\n",Object(r.b)("inlineCode",{parentName:"p"},"process.env.*")," at any point instead creating a binding of these values in the\n",Object(r.b)("inlineCode",{parentName:"p"},"environment-variables.ts")," which are added into the final config object."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"baseURL")," and ",Object(r.b)("inlineCode",{parentName:"p"},"internalBasePath")," within the ",Object(r.b)("inlineCode",{parentName:"p"},"Api")," subclassing should always\npoint to a config value e.g. see snippet below"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * potential replacement\n * import getConfig from 'next/config'\n * const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()\n */\nimport conf from \"../../config\"; //\nbaseURL = conf.MENU_API_URL;\ninternalBasePath = conf.APP_BASE_PATH;\n")))}p.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return t?i.a.createElement(m,s(s({ref:n},c),{},{components:t})):i.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);