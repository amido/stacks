(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{149:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),h=n,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(149)),o={id:"quickstart_java",title:"Getting started with the Java Rest API application",sidebar_label:"Getting started with the Java Rest API application"},c={unversionedId:"workloads/java/quickstart_java",id:"workloads/java/quickstart_java",isDocsHomePage:!1,title:"Getting started with the Java Rest API application",description:"Using the repository to build the Java Spring Boot Rest API application",source:"@site/docs/workloads/java/quickstart_java.md",slug:"/workloads/java/quickstart_java",permalink:"/stacks/docs/workloads/java/quickstart_java",editUrl:"https://github.com/amido/stacks/docs/workloads/java/quickstart_java.md",version:"current",sidebar_label:"Getting started with the Java Rest API application",sidebar:"docs",previous:{title:"Introduction to the Java REST API application",permalink:"/stacks/docs/workloads/java/intro_java"},next:{title:"Using the Scaffolding CLI to create the Java Rest API project template",permalink:"/stacks/docs/workloads/java/scaffolding_java"}},l=[{value:"Using the repository to build the Java Spring Boot Rest API application",id:"using-the-repository-to-build-the-java-spring-boot-rest-api-application",children:[{value:"Versioning",id:"versioning",children:[]},{value:"Running the application locally",id:"running-the-application-locally",children:[]},{value:"Authorization",id:"authorization",children:[]}]},{value:"Using a Docker image",id:"using-a-docker-image",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"using-the-repository-to-build-the-java-spring-boot-rest-api-application"},"Using the repository to build the Java Spring Boot Rest API application"),Object(i.b)("h3",{id:"versioning"},"Versioning"),Object(i.b)("p",null,"This is version ",Object(i.b)("inlineCode",{parentName:"p"},"1.0.0")," of the ",Object(i.b)("inlineCode",{parentName:"p"},"java-stacks")," project."),Object(i.b)("h3",{id:"running-the-application-locally"},"Running the application locally"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Clone the Java project to your local machine from here: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amido/stacks-java"}),"stacks-java repository"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Configure required environment variables"),Object(i.b)("p",{parentName:"li"},"The application is currently configured to work with the Azure environment."),Object(i.b)("p",{parentName:"li"},"It uses an Azure ",Object(i.b)("strong",{parentName:"p"},"CosmosDB")," database to store the example application data. So you should have access to an instance to use with the application.\nNote: For running on a local Windows environment you can use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21"}),"Cosmos DB emulator")," (CosmosDB Emulator has a known fixed key)."),Object(i.b)("p",{parentName:"li"},"In addition, Azure ",Object(i.b)("strong",{parentName:"p"},"ApplicationInsights")," is used for logging purposes. If this is unavailable, modify the application so that it doesn't fail to startup if it can't access ApplicationInsights, and simply log to the terminal instead."),Object(i.b)("p",{parentName:"li"},"There are two corresponding environment variables that need to be set to interact with these systems:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"AZURE_COSMOSDB_KEY\nAZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY\n")),Object(i.b)("p",{parentName:"li"},"For Unix systems, set them as additional variables within e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"~/.profile")," or ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/profile"),"."),Object(i.b)("p",{parentName:"li"},"For Windows, open System Properties then select the Advanced tab, then click on the Environment Variables button and add the new parameters.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Build and run the application"),Object(i.b)("p",{parentName:"li"},"Note that at a minimum Java 11 should be installed."),Object(i.b)("p",{parentName:"li"}," Move to the ",Object(i.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder, then"),Object(i.b)("p",{parentName:"li"}," Unix:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"./mvnw spring-boot:run\n")),Object(i.b)("p",{parentName:"li"}," Windows:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"mvnw.cmd spring-boot:run\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify that the application has started"),Object(i.b)("p",{parentName:"li"},"Browse to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:9000/v1/menu"}),"http://localhost:9000/v1/menu"),". This should return a valid JSON response."),Object(i.b)("p",{parentName:"li"},"The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your\nbrowser to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:9000/swagger/index.html"}),"http://localhost:9000/swagger/index.html"),"."))),Object(i.b)("h3",{id:"authorization"},"Authorization"),Object(i.b)("p",null,"All API endpoints are (optionally) protected using ",Object(i.b)("strong",{parentName:"p"},"Auth0"),". There is an ",Object(i.b)("inlineCode",{parentName:"p"},"auth.properties")," file within the project codebase.\nIf the following property within this file is set:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"auth.isEnabled=true\n")),Object(i.b)("p",null,"then clients will need to pass an ",Object(i.b)("inlineCode",{parentName:"p"},"Authorization")," header containing the Bearer token generated from Auth0 as part of the endpoint request. If the value\nis set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," then no authorization is required."),Object(i.b)("h4",{id:"auth0-configuration-properties"},"Auth0 configuration properties"),Object(i.b)("p",null,"If using Auth0 for authorization, Auth0 itself will need to be configured with both an API definition and an associated Application.\nThere are corresponding configuration values required for the Stacks application, within the ",Object(i.b)("inlineCode",{parentName:"p"},"auth.properties")," file, e.g."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"auth0.issuer=https://amidostacks.eu.auth0.com/\nauth0.apiAudience=https://amidostacks.eu.auth0.com/api/v2/\n")),Object(i.b)("p",null,"These parameters are used to verify that the JWT supplied in the Authorization header of a request is valid."),Object(i.b)("h4",{id:"swaggeroas"},"Swagger/OAS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Automatically generated for the project. Go to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:9000/swagger/index.html"}),"Swagger Index")," to view."),Object(i.b)("li",{parentName:"ul"},"Swagger Json is here: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:9000/swagger/oas.json"}),"Swagger Json"))),Object(i.b)("h4",{id:"health-check"},"Health check"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Available at: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:9000/health"}),"health check"),"\n(This can also be configured to run on another port)")),Object(i.b)("h2",{id:"using-a-docker-image"},"Using a Docker image"),Object(i.b)("p",null,"From the ",Object(i.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder, build a Docker image using e.g. the command below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"docker build --tag stacks:1.0 .\n")),Object(i.b)("p",null,"This uses the ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," in this folder to generate the Docker image."),Object(i.b)("p",null,"If you have an ",Object(i.b)("inlineCode",{parentName:"p"},".m2")," directory in the ",Object(i.b)("inlineCode",{parentName:"p"},"java/")," folder, the Docker build will attempt to copy the files inside the container and use the cached versions."),Object(i.b)("p",null,"Once the Docker image is created, you can then run a Docker container based on this image using e.g."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"docker run -p 9000:9000 -e AZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY -e AZURE_COSMOSDB_KEY stacks:1.0\n")),Object(i.b)("p",null,"which passes in the two required environment variables from your own environment."))}p.isMDXComponent=!0}}]);