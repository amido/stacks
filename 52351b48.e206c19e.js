(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=s(n),j=a,O=u["".concat(l,".").concat(j)]||u[j]||p[j]||b;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),b=(n(0),n(168)),l={id:"cli_testing_frameworks",title:"Stacks Testing Frameworks",sidebar_label:"Stacks Testing Frameworks"},c={unversionedId:"testing/cli_testing_frameworks",id:"testing/cli_testing_frameworks",isDocsHomePage:!1,title:"Stacks Testing Frameworks",description:"Building a testing frameworks from scratch requires a lot of boilerplate code. It is also hard to know how to get started without examples.",source:"@site/docs/testing/cli_testing_frameworks.md",slug:"/testing/cli_testing_frameworks",permalink:"/stacks/docs/testing/cli_testing_frameworks",version:"current",sidebar_label:"Stacks Testing Frameworks",sidebar:"docs",previous:{title:"Testing and Quality",permalink:"/stacks/docs/testing/testing"},next:{title:"UI Browser Automation with Serenity BDD and Java",permalink:"/stacks/docs/testing/testing_java_serenity_bdd"}},i=[{value:"Bootstrap your framework",id:"bootstrap-your-framework",children:[{value:"Interactive questions",id:"interactive-questions",children:[]},{value:"Framework types",id:"framework-types",children:[]},{value:"Get testing in just five questions",id:"get-testing-in-just-five-questions",children:[]}]},{value:"Get testing",id:"get-testing",children:[]},{value:"Customising",id:"customising",children:[]},{value:"Feedback",id:"feedback",children:[]}],o={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Building a testing frameworks from scratch requires a lot of boilerplate code. It is also hard to know how to get started without examples."),Object(b.b)("p",null,"As part of Amido Stacks projects, we have developed a range of Javascript Front End focused, opinionated, boilerplate testing frameworks that can be bootstrapped and tailored to your current project with just one command."),Object(b.b)("p",null,"By default, Amido Stacks build a range of testing solutions into the projects. However, we understand that users require tests to be separate from the code. For more testing options and examples, see the other ",Object(b.b)("inlineCode",{parentName:"p"},"[project types](./scaffolding_cli.md)"),"."),Object(b.b)("p",null,"Get testing!"),Object(b.b)("h2",{id:"bootstrap-your-framework"},"Bootstrap your framework"),Object(b.b)("p",null,"The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answer 5 questions to get a bespoke framework, ready to go with an example test."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"npx @amidostacks/scaffolding-cli test -i")),Object(b.b)("h3",{id:"interactive-questions"},"Interactive questions"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),"\u2714 Please provide the company name to test for\n\u2714 Please provide the project name to be tested\n\u2714 Select test framework\n\u2714 Please provide test scope (domain)\n\u2714 Select Pipeline Tool\n")),Object(b.b)("h3",{id:"framework-types"},"Framework types"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"cypress*")),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"TestCafe framework with Typescript")),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Selenium framework with .NET")),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"jest-sonar*")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Framework Type"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Acceptance",Object(b.b)("br",null),"Functional E2E",Object(b.b)("br",null),"Functional API",Object(b.b)("br",null),"Component",Object(b.b)("br",null),"Accessibility",Object(b.b)("br",null),"Visual Regression"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Acceptance",Object(b.b)("br",null),"Functional E2E",Object(b.b)("br",null),"Accessibility"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Acceptance",Object(b.b)("br",null),"Functional E2E",Object(b.b)("br",null),"Functional API"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unit",Object(b.b)("br",null),"Component",Object(b.b)("br",null),"Integration")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Language"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Typescript",Object(b.b)("br",null),"Optional: Javascript"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Typescript",Object(b.b)("br",null),"Optional: Javascript"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"C#"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Typescript",Object(b.b)("br",null),"Optional: Javascript")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Framework"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cypress"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TestCafe"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bespoke"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Jest")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Libraries and Tools"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mocha",Object(b.b)("br",null),"Chai",Object(b.b)("br",null),"Chai-jQuery",Object(b.b)("br",null),"Sinon.JS",Object(b.b)("br",null),"Sinon-Chai",Object(b.b)("br",null),"Lodash",Object(b.b)("br",null),"Minimatch",Object(b.b)("br",null),"Moment",Object(b.b)("br",null),"Blob",Object(b.b)("br",null),"Promise"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Axios",Object(b.b)("br",null),"TestCafe Assertions",Object(b.b)("br",null),"TestCafe API"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Microsoft Test SDK",Object(b.b)("br",null),"Selenium WebDriver",Object(b.b)("br",null),"WebDriver ChromeDriver",Object(b.b)("br",null),"Shouldly",Object(b.b)("br",null),"BDDfy",Object(b.b)("br",null),"xUnit"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Jest Snapshot",Object(b.b)("br",null),"@testing-library/react")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Integrations"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Axe",Object(b.b)("br",null),"Applitools"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Axe",Object(b.b)("br",null),"LambdaTest"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sonar Scanner")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Report(s)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"jUnit/xUnit",Object(b.b)("br",null),"xunit-viewer (single page HTML)",Object(b.b)("br",null),"Mochawesome (rich HTML results with screenshots)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"xUnit"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BDDfy",Object(b.b)("br",null),"xUnit"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"jUnit/xUnit",Object(b.b)("br",null),"Cobertura, lcov (code coverage)",Object(b.b)("br",null),"Sonar reporter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Browsers"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Used:",Object(b.b)("br",null),"Google Chrome",Object(b.b)("br",null),Object(b.b)("br",null),"Supported:",Object(b.b)("br",null),"Mozilla Firefox",Object(b.b)("br",null),"Microsoft Edge",Object(b.b)("br",null),"Electron",Object(b.b)("br",null),"Brave"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Used:",Object(b.b)("br",null),"LambdaTest",Object(b.b)("br",null),"Google Chrome",Object(b.b)("br",null),Object(b.b)("br",null),"Supports:",Object(b.b)("br",null),"Internet Explorer (11+)",Object(b.b)("br",null),"Microsoft Edge (legacy and Chromium-based)",Object(b.b)("br",null),"Mozilla Firefox",Object(b.b)("br",null),"Safari"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Used:",Object(b.b)("br",null),"Google Chrome",Object(b.b)("br",null),Object(b.b)("br",null),"Supports:",Object(b.b)("br",null),"LambdaTest",Object(b.b)("br",null),"Internet Explorer (11+)",Object(b.b)("br",null),"Microsoft Edge (legacy and Chromium-based)",Object(b.b)("br",null),"Mozilla Firefox",Object(b.b)("br",null),"Safari"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pipeline"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AzureDevops"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AzureDevops"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Example Test(s)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Example Data Teardown"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A (stubbed request)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BDD"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mocha"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BDDfy"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Jasmine")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Features"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Automatic waiting",Object(b.b)("br",null),"In browser",Object(b.b)("br",null),"Element selector tool",Object(b.b)("br",null),"Spies, stubs , clocks",Object(b.b)("br",null),"Real time reloads",Object(b.b)("br",null),"Can use the same environment variables as the webapp"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cross browser",Object(b.b)("br",null),"Script injection"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WebDriver"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Render")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Screenshots +/- Videos"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"*"," Currently cannot be bootstrapped from ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://www.npmjs.com/package/@amidostacks/scaffolding-cli"}),"@amidostacks/scaffolding-cli"),", but is available to clone from the ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/amido/stacks-webapp-template"}),"amido/stacks-webapp-template")," repository.")),Object(b.b)("h3",{id:"get-testing-in-just-five-questions"},"Get testing in just five questions"),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://asciinema.org/a/mpqq9MGhE2TsSXtLDhmjZfaDq"}),Object(b.b)("img",Object(a.a)({parentName:"a"},{src:"https://asciinema.org/a/mpqq9MGhE2TsSXtLDhmjZfaDq.svg?t=7",alt:"asciicast"})))),Object(b.b)("h2",{id:"get-testing"},"Get testing"),Object(b.b)("p",null,"At the end of bootstrapping your example framework, you will have an output that will contain all the:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Dependencies"),Object(b.b)("li",{parentName:"ul"},"Scripts"),Object(b.b)("li",{parentName:"ul"},"Example tests"),Object(b.b)("li",{parentName:"ul"},"Pipelines"),Object(b.b)("li",{parentName:"ul"},"Environment variables"),Object(b.b)("li",{parentName:"ul"},"...and information to start testing immediately")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500\u2500 Api\n\u2502\xa0\xa0 \u2514\u2500\u2500 Builders\n\u2502\xa0\xa0     \u2514\u2500\u2500 Http\n\u2502\xa0\xa0         \u251c\u2500\u2500 HttpRequestBuilder.cs\n\u2502\xa0\xa0         \u2514\u2500\u2500 HttpRequestFactory.cs\n\u251c\u2500\u2500 Company.Project.E2E.Selenium.csproj\n\u251c\u2500\u2500 Company.Project.E2E.Selenium.sln\n\u251c\u2500\u2500 Configuration\n\u2502\xa0\xa0 \u251c\u2500\u2500 ConfigAccessor.cs\n\u2502\xa0\xa0 \u2514\u2500\u2500 ConfigModel.cs\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 Selenium\n\u2502\xa0\xa0 \u251c\u2500\u2500 Components\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 CreateForm.cs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Header.cs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 MenuList.cs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Notifier.cs\n\u2502\xa0\xa0 \u251c\u2500\u2500 Factory\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 WebDriverFactory.cs\n\u2502\xa0\xa0 \u251c\u2500\u2500 Pages\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 PageObject.cs\n\u2502\xa0\xa0 \u2514\u2500\u2500 SeleniumWrapper.cs\n\u251c\u2500\u2500 Tests\n\u2502\xa0\xa0 \u251c\u2500\u2500 Fixtures\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 BaseSetup.cs\n\u2502\xa0\xa0 \u251c\u2500\u2500 Steps\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CreateMenu.cs\n\u2502\xa0\xa0 \u2514\u2500\u2500 Stories\n\u2502\xa0\xa0     \u2514\u2500\u2500 GetMenuExampleTests.cs\n\u2514\u2500\u2500 appsettings.json\n")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"_[Above: Example output from Selenium framework with .NET output folder structure](./testing_selenium.md#folder-structure)_")),Object(b.b)("p",null,"You are ready to follow the frameworks README.md and run your first test!"),Object(b.b)("h2",{id:"customising"},"Customising"),Object(b.b)("p",null,"Since the frameworks provide real examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test."),Object(b.b)("h2",{id:"feedback"},"Feedback"),Object(b.b)("p",null,"As always, we only improve from the incredible feedback and contributions from people like you. To help us improve, see our contribution guide for more information."))}s.isMDXComponent=!0}}]);