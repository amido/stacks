(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=r.a.createContext({}),c=function(e){var t=r.a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(g.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,f=p["".concat(a,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(f,l(l({ref:t},g),{},{components:n})):r.a.createElement(f,l({ref:t},g))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var g=2;g<o;g++)a[g]=n[g];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var i=n(2),r=n(6),o=(n(0),n(149)),a={id:"logging_netcore",title:"Logging with Serilog and Application Insights",sidebar_label:"Logging"},l={unversionedId:"workloads/netcore/logging_netcore",id:"workloads/netcore/logging_netcore",isDocsHomePage:!1,title:"Logging with Serilog and Application Insights",description:"Dot Net Core provides a simple logging abstraction with most of required logging features used by an application. Everywhere in the application, when logging is required, the Classes generating logs should receive via dependency injection an instance of ILogger to use as the logger object. The ILogger instances are created by Logging Factory registered by each application and will abstract the logging library from the application logging.",source:"@site/docs/workloads/netcore/logging_netcore.md",slug:"/workloads/netcore/logging_netcore",permalink:"/stacks/docs/workloads/netcore/logging_netcore",editUrl:"https://github.com/amido/stacks/docs/workloads/netcore/logging_netcore.md",version:"current",sidebar_label:"Logging",sidebar:"docs",previous:{title:"Configure Swagger UI",permalink:"/stacks/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore"},next:{title:"Application Security",permalink:"/stacks/docs/workloads/netcore/security_netcore"}},s=[{value:"Sinks",id:"sinks",children:[]},{value:"Serilog Configuration",id:"serilog-configuration",children:[]}],g={rightToc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Dot Net Core provides a simple logging abstraction with most of required logging features used by an application. Everywhere in the application, when logging is required, the Classes generating logs should receive via dependency injection an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"ILogger<>")," to use as the logger object. The ",Object(o.b)("inlineCode",{parentName:"p"},"ILogger<>")," instances are created by Logging Factory registered by each application and will abstract the logging library from the application logging."),Object(o.b)("p",null,"Unfortunately, the standard library is very limited on log forwarding and requires additional packages to add proper filtering, enrichment and forwarding. For this reason the use of Serilog is required to extend the default logging features."),Object(o.b)("p",null,"Serilog integrates with the logger abstraction provided by DotNet Core. It will provide additional Sink(outputs), Filter capabilities and Log Enrichment features to complete the limited set of features in dotnet core default loggers. Every services implemented using DotNet Core should make use of Serilog library to standardize the logging approach described in the Application Logging Guidelines  ."),Object(o.b)("h2",{id:"sinks"},"Sinks"),Object(o.b)("p",null,"By default, the ",Object(o.b)("strong",{parentName:"p"},"Console")," and ",Object(o.b)("strong",{parentName:"p"},"ApplicationInsights")," sinks should be used."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"console sink")," will output all logging generated by the service to the runtime console, and will make the logs available via command line tools like kubectl (kubectl get logs) providing a quick and straight forward way of getting the logs for a particular instance."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Application Insights")," sink will make sure all logs generated(and filtered) are forwarded for the logging platform for correlation and future investigations."),Object(o.b)("p",null,"Application Insights sink is a must have sink, Application Insights is the chosen logging platform and will aggregated all logs generated by all services. Console sink is an useful secondary output in order to facilitate investigation of issues with particular service that are failing. Having both setup, will make very straightforward to identify issues in real time or delayed investigation."),Object(o.b)("h2",{id:"serilog-configuration"},"Serilog Configuration"),Object(o.b)("p",null,"The following is a sample ",Object(o.b)("inlineCode",{parentName:"p"},"appsettings.json")," file with annotations about logging configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Serilog": {    // Logging configuration for Serilog\n    "Using": [\n      "Serilog.Sinks.Console",              // Import console sink package\n      "Serilog.Sinks.ApplicationInsights"   // Import ai sink package\n    ],\n    "MinimumLevel": {\n      "Default": "Information", // minimal log level for everything\n      "Override": {}            // Override for indivisual log sources\n    },\n    "WriteTo": [\n      { "Name": "Console" },    // Write Logs to console\n      {\n        "Name": "ApplicationInsights",  // Write Logs to App Insights\n        "Args": {\n          "telemetryConverter": "Serilog.Sinks.ApplicationInsights.Sinks.ApplicationInsights.TelemetryConverters.TraceTelemetryConverter, Serilog.Sinks.ApplicationInsights"\n        }\n      }\n    ],\n    "Enrich": [ "FromLogContext", "WithMachineName", "WithThreadId" ], // Add custom attributes to the logs, Hostname and the ThreadId\n    "Destructure": [],\n    "Properties": {             // fixed attributes added to every log for filtering purposes\n      "Domain": "identity",     // domain name added to every log\n      "Service": "identityapi", // service generating the logs\n      "Environment": "dev",     // environment this instance belongs to\n    },\n    "Filter": [                 // Ignore logs that macthes the following filters\n      {\n        "Name": "ByExcluding",\n        "Args": {\n          "expression": "EndsWith(RequestPath, \'/health\')" // Filter out health requests to reduce useless log information. Not required for non api services.\n        }\n      }\n    ]\n  }\n}\n')))}c.isMDXComponent=!0}}]);