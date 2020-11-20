(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),s=(n(0),n(218)),i=n(225),c=n(226),o={id:"testcafe_functional_testing",title:"Functional Testing with TestCafe",sidebar_label:"TestCafe - Functional Testing",description:"How to create functional tests with TestCafe",keywords:["TestCafe","tests","testing","functional","template","example","run TestCafe tests","TestCafe report"]},l={unversionedId:"testing/testcafe_functional_testing",id:"testing/testcafe_functional_testing",isDocsHomePage:!1,title:"Functional Testing with TestCafe",description:"How to create functional tests with TestCafe",source:"@site/docs/testing/testcafe_functional_testing.md",slug:"/testing/testcafe_functional_testing",permalink:"/stacks/docs/testing/testcafe_functional_testing",version:"current",sidebar_label:"TestCafe - Functional Testing",sidebar:"docs",previous:{title:"Functional Testing with Cypress",permalink:"/stacks/docs/testing/cypress_functional_testing"},next:{title:"Testing - Static Code Analysis",permalink:"/stacks/docs/testing/testing_static_analysis"}},u=[{value:"TestCafe: Functional tests",id:"testcafe-functional-tests",children:[{value:"Running tests locally",id:"running-tests-locally",children:[]},{value:"Run Tests",id:"run-tests",children:[]}]},{value:"Running tests in Docker",id:"running-tests-in-docker",children:[{value:"Build",id:"build",children:[]},{value:"Run",id:"run",children:[]}]},{value:"Optional: Running tests with Lambdatest",id:"optional-running-tests-with-lambdatest",children:[{value:"Dependencies",id:"dependencies",children:[]},{value:"Settings",id:"settings",children:[]},{value:"Running E2E tests with LambdaTest",id:"running-e2e-tests-with-lambdatest",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://devexpress.github.io/testcafe/"}),"TestCafe")," is a Node.js end-to-end open source automation tool that is used to test web applications. It can run your tests on any browser without having to download separate drivers for each browser.\nIt is easy to install, configure and get started without any external libraries or plugins required."),Object(s.b)("h2",{id:"testcafe-functional-tests"},"TestCafe: Functional tests"),Object(s.b)("p",null,"Templated sample TestCafe automation framework for PROJECT_NAME, bootstrapped using ",Object(s.b)("inlineCode",{parentName:"p"},"@amidostacks/scaffolding-cli"),"."),Object(s.b)("h3",{id:"running-tests-locally"},"Running tests locally"),Object(s.b)("h4",{id:"prerequisites"},"Prerequisites"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Ensure that ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/"}),"Node.js")," and ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/"}),"npm")," are installed with the versions specified in ",Object(s.b)("inlineCode",{parentName:"li"},"./package.json")," file."),Object(s.b)("li",{parentName:"ul"},"Execute the following command to install all dependencies:")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Configure your browser:"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Ensure you have at least one browser installed on your operating system e.g. Chrome."),Object(s.b)("li",{parentName:"ul"},"Include the browser name  in  the ",Object(s.b)("inlineCode",{parentName:"li"},"./.testcaferc.json")," file. e.g.:")))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'  "browsers": [\n    "chrome:headless",\n    "firefox:headless"\n  ]\n')),Object(s.b)("p",null,"At the moment, Chrome is set as the default web browser."),Object(s.b)("p",null,"To bypass the browser config in the ",Object(s.b)("inlineCode",{parentName:"p"},"./.testcaferc.json")," config file, simply run passing in the browser arg:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run test:e2e --chrome\n")),Object(s.b)("p",null,"See ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/"}),"browsers")," for more information."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Configure Environment Variables")),Object(s.b)("p",null,"TestCafe functional tests are configured to run after successful deployment, so environment variables need to be set."),Object(s.b)("p",null,"Export the following environment variables."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"- NODE_ENV, \n- APP_BASE_URL: base url to the environment where the web app is deployed,\n- APP_BASE_PATH: path to main page, \n- MENU_API_URL: base url to rest api.\n")),Object(s.b)("h4",{id:"example"},"Example"),Object(s.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"unix",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export APP_BASE_PATH=/web/stacks\n"))),Object(s.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"set APP_BASE_PATH=/web/stacks\n")))),"or use the `./.env` file to specify the default values instead of exporting them locally.",Object(s.b)("h3",{id:"run-tests"},"Run Tests"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run test:e2e\n")),Object(s.b)("p",null,"Run tests in a specific browser:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run test:e2e --chrome\n")),Object(s.b)("p",null,"This should launch TestCafe and run the tests in the browsers specified in ",Object(s.b)("inlineCode",{parentName:"p"},"./.testcaferc.json")," in the headless mode."),Object(s.b)("h2",{id:"running-tests-in-docker"},"Running tests in Docker"),Object(s.b)("p",null,"In order to be able to run these tests across environments and as part of CI, we need to use Docker to run them."),Object(s.b)("h3",{id:"build"},"Build"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(s.b)("h3",{id:"run"},"Run"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker pull testcafe/testcafe:latest\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -e APP_BASE_URL=$APP_BASE_URL -e APP_BASE_PATH=$APP_BASE_PATH -e MENU_API_URL=$MENU_API_URL -e NODE_ENV=$NODE_ENV -it -v $(pwd):/tests testcafe/testcafe chromium /**/*.test.cf.ts   \n")),Object(s.b)("h2",{id:"optional-running-tests-with-lambdatest"},"Optional: Running tests with Lambdatest"),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.lambdatest.com"}),"Lambdatest")," is a cloud-based cross browser testing tool that allows to check the web application functionality and other dependencies across various browsers over the internet."),Object(s.b)("h3",{id:"dependencies"},"Dependencies"),Object(s.b)("p",null,"An active ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://accounts.lambdatest.com/dashboard"}),"Lambdatest")," Account"),Object(s.b)("h3",{id:"settings"},"Settings"),Object(s.b)("p",null,"Export ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.lambdatest.com/support/docs/npm-plugin-for-testcafe-integration-with-lambdatest/"}),"Lambdatest Credentials")," as following: "),Object(s.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"unix",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export LT_USERNAME= {your lambdatest username}\nexport LT_ACCESS_KEY= {your lambdatest access_key}\n"))),Object(s.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"set LT_USERNAME= {your lambdatest username}\nset LT_ACCESS_KEY= {your lambdatest access_key}\n")))),Object(s.b)("h3",{id:"running-e2e-tests-with-lambdatest"},"Running E2E tests with LambdaTest"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'npm run test:e2e -- "lambdatest:IE@11.0:Windows 10"\n')),Object(s.b)("p",null,"Lambdatest will create a tunnel to run the tests and automatically record videos."),Object(s.b)("br",null),"The full list of browser configuration available can be found by running the following in the root:",Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node_modules/.bin/testcafe -b lambdatest\n")))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||s;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},221:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},223:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},224:function(e,t,n){"use strict";var a=n(0),r=n(223);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},225:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(224),i=n(221),c=n(51),o=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,p=e.groupId,d=Object(s.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,O=Object(a.useState)(c),j=O[0],h=O[1],g=Object(a.useState)(!1),w=g[0],v=g[1];if(null!=p){var y=f[p];null!=y&&y!==j&&b.some((function(e){return e.value===y}))&&h(y)}var N=function(e){h(e),null!=p&&m(p,e)},T=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},_=function(){v(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",_)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),E(e)},onFocus:function(){return N(t)},onClick:function(){N(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},226:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);