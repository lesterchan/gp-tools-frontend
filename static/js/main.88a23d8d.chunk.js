(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(30),o=a.n(n),c=(a(39),a(22)),m=a(9),s=a(7),u=a(17),i=a(31),d=a(25),p=a(15),h=a.n(p),E=function(){var e=Object(s.c)({contentType:s.b,headerDate:s.b,method:s.b,partnerSecret:s.b,requestBody:s.b,requestUrl:s.b}),t=Object(d.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(""),c=Object(d.a)(o,2),m=c[0],p=c[1];Object(r.useEffect)(function(){n({contentType:a.contentType||"application/json",headerDate:a.headerDate||(new Date).toUTCString(),method:a.method||"POST",partnerSecret:a.partnerSecret||"",requestBody:a.requestBody||'{"foo":"bar","baz":"lol","kek":168}',requestUrl:a.requestUrl||"/relative-path"})},[]);var E=function(e){n(Object(i.a)({},a,Object(u.a)({},e.target.name,e.target.value)),"push"),b()},b=function(){console.log(a),p(function(e,t,a,r,l,n){if(!n)return"";"GET"!==e&&l||(l="");var o=[[e,t,a,r,l?h.a.enc.Base64.stringify(h.a.SHA256(l)):""].join("\n"),"\n"].join("");return h.a.enc.Base64.stringify(h.a.HmacSHA256(o,n))}(a.method,a.contentType,a.headerDate,a.requestUrl,a.requestBody,a.partnerSecret))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"HMAC Calculator"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"partner-secret"},"Secret"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"partner-secret",name:"partnerSecret",onChange:E,required:!0,type:"text",value:a.partnerSecret}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"method"},"Method"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("select",{className:"custom-select",id:"method",name:"method",onChange:E,value:a.method},l.a.createElement("option",{value:"POST"},"POST"),l.a.createElement("option",{value:"GET"},"GET")))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"content-type"},"Header Content Type"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"content-type",name:"contentType",onChange:E,type:"text",value:a.contentType}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"header-date"},"Header Date"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"header-date",name:"headerDate",onChange:E,type:"text",value:a.headerDate}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"request-url"},"Request URL"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"request-url",name:"requestUrl",onChange:E,type:"text",placeholder:"/relative-path",value:a.requestUrl}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"request-body"},"Request Body",l.a.createElement("br",null),"(JSON stringified)"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("textarea",{className:"form-control monospace",id:"request-body",name:"requestBody",onChange:E,rows:3,value:a.requestBody}))),l.a.createElement("button",{className:"btn btn-primary",id:"submit-btn",onClick:b,type:"button"},"Calculate HMAC"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Result"),l.a.createElement("pre",null,l.a.createElement("code",null,m))))},b=function(){return l.a.createElement(c.a,null,l.a.createElement(s.a,{ReactRouterRoute:m.a},l.a.createElement(c.b,{to:"/hmac"},"HMAC Calculator")," | Pop Signature Calculator",l.a.createElement(m.a,{path:"/hmac",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.88a23d8d.chunk.js.map