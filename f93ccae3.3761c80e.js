(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(171)),l=a(176),s=a(177),o={id:"testing_java_cqrs",title:"Testing the application",sidebar_label:"Testing the API"},i={unversionedId:"workloads/azure/backend/java_cqrs/testing_java_cqrs",id:"workloads/azure/backend/java_cqrs/testing_java_cqrs",isDocsHomePage:!1,title:"Testing the application",description:"Testing the API",source:"@site/docs/workloads/azure/backend/java_cqrs/testing_java_cqrs.md",slug:"/workloads/azure/backend/java_cqrs/testing_java_cqrs",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/testing_java_cqrs",version:"current",sidebar_label:"Testing the API",sidebar:"docs",previous:{title:"Pipeline",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/pipeline_java_cqrs"},next:{title:"Introduction to the .Net Core REST API application",permalink:"/stacks/docs/workloads/azure/backend/netcore/introduction_netcore"}},u=[{value:"Testing the API",id:"testing-the-api",children:[{value:"Running the tests",id:"running-the-tests",children:[]},{value:"Reports",id:"reports",children:[]},{value:"Running API tests",id:"running-api-tests",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"testing-the-api"},"Testing the API"),Object(c.b)("h3",{id:"running-the-tests"},"Running the tests"),Object(c.b)("p",null,"Tests within the code are grouped using Tag annotations. There are three groups: 'Unit', 'Component' and 'Integration'. To just run the unit tests, for example, type:"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw test -Dgroups="Unit"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd test -Dgroups="Unit"\n')))),Object(c.b)("p",null,"Similarly, for the Component tests, you should use:"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw test -Dgroups="Component"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd test -Dgroups="Component"\n')))),Object(c.b)("p",null,"and the equivalent for running the Integration tests."),Object(c.b)("h3",{id:"reports"},"Reports"),Object(c.b)("h4",{id:"test-reports"},"Test reports"),Object(c.b)("p",null,"A test report may be created from the ",Object(c.b)("inlineCode",{parentName:"p"},"test")," package in Java using the Surefire Plugin.\nThe report file (as either XML or HTML) generated for each of the test classes can be found under ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/surefire-reports"),"."),Object(c.b)("p",null,"Run the following command to create the report:"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw surefire:test"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd surefire:test"\n')))),Object(c.b)("p",null,"To generate the Serenity report:"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw clean verify"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd clean verify"\n')))),Object(c.b)("p",null,"The report can be viewed under ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/api-tests/target/site/serenity/index.html"),"."),Object(c.b)("h4",{id:"code-coverage"},"Code coverage"),Object(c.b)("p",null,"Run the following command:"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw jacoco:report"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd jacoco:report"\n')))),Object(c.b)("p",null,"The generated report can be viewed under ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/site/jacoco/index.html"),"."),Object(c.b)("h4",{id:"dependency-checker-report"},"Dependency checker report"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw clean install -Powasp-dependency-check"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd clean install -Powasp-dependency-check"\n')))),Object(c.b)("p",null,"The generated report can be viewed under ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/dependency-check.html"),"."),Object(c.b)("h4",{id:"mutation-testing"},"Mutation testing"),Object(c.b)("p",null,"PIT mutation testing is used to generate mutation tests (see ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://pitest.org/"}),"https://pitest.org/")," for details).\nThe mutation coverage goal analyses all classes in the codebase that match the target tests and target class filters.\nTo run it:"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw org.pitest:pitest-maven:mutationCoverage"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd org.pitest:pitest-maven:mutationCoverage"\n')))),Object(c.b)("p",null,"The generated report can be viewed under \u2013 ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/pit-reports/YYYYMMDDHHMI")),Object(c.b)("h3",{id:"running-api-tests"},"Running API tests"),Object(c.b)("p",null,"Set an environment variable ",Object(c.b)("inlineCode",{parentName:"p"},"BASE_URL")," (e.g. if testing locally set it to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000"),")"),Object(c.b)("p",null,"From project path ",Object(c.b)("inlineCode",{parentName:"p"},"<>PROJECT-NAME>/api-tests")," to run all tests, use"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw clean verify"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd clean verify"\n')))),Object(c.b)("p",null,"To run the Smoke tests independently, use"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw clean verify -Dcucumber.options="--tags @Smoke"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd clean verify -Dcucumber.options="--tags @Smoke"\n')))),Object(c.b)("p",null,"and to run the Functional tests independently, use"),Object(c.b)(l.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw clean verify -Dcucumber.options="--tags @Functional"\n'))),Object(c.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd clean verify -Dcucumber.options="--tags @Functional"\n')))))}p.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||c;return a?r.a.createElement(m,s(s({ref:t},i),{},{components:a})):r.a.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<c;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},172:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},174:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},175:function(e,t,a){"use strict";var n=a(0),r=a(174);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(175),l=a(172),s=a(50),o=a.n(s),i=37,u=39;t.a=function(e){var t=e.block,a=e.children,s=e.defaultValue,b=e.values,p=e.groupId,d=Object(c.a)(),m=d.tabGroupChoices,j=d.setTabGroupChoices,O=Object(n.useState)(s),g=O[0],v=O[1],f=Object(n.useState)(!1),h=f[0],w=f[1];if(null!=p){var y=m[p];null!=y&&y!==g&&b.some((function(e){return e.value===y}))&&v(y)}var T=function(e){v(e),null!=p&&j(p,e)},x=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},I=function(){w(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",I)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),N(e)},onFocus:function(){return T(t)},onClick:function(){T(t),w(!1)},onPointerDown:function(){return w(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===g}))[0]))}},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);