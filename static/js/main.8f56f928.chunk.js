(this["webpackJsonpcrud-app-3"]=this["webpackJsonpcrud-app-3"]||[]).push([[0],{37:function(e,a,t){},38:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(29),r=t.n(s),l=(t(37),t(38),t(8)),i=t(0),o=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(l.b,{className:"navbar-brand",to:"/",children:"React User"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)(l.b,{className:"nav-link",to:"/home",children:["Home ",Object(i.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link",to:"/contact",children:"Contact"})})]})}),Object(i.jsx)(l.b,{to:"/users/add",className:"btn btn-outline-light",style:{width:"130px"},children:"Add User"})]})})})},m=t(2),b=function(){return Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("h1",{children:"Abot page"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error temporibus ea facilis odit consequuntur deserunt eaque obcaecati, asperiores sed adipisci optio minus eos quaerat maxime blanditiis magnam exercitationem, impedit ad repellat quod atque unde nihil alias. Optio, atque eum. Laboriosam eum quas at iusto officia quaerat assumenda commodi mollitia, quidem vitae dolorum pariatur dolorem accusantium accusamus sapiente, labore unde quam et facere obcaecati voluptate, voluptatem culpa laudantium. Numquam libero expedita recusandae necessitatibus excepturi at tempora sunt, explicabo eos ut consequatur? Maiores vero placeat non at commodi vel tempora corrupti doloremque ut in dolores consectetur facilis porro, possimus accusantium consequatur?"})]})},j=function(){return Object(i.jsx)("div",{className:"container mt-5",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{class:"mb-3",children:[Object(i.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Email address"}),Object(i.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(i.jsx)("div",{id:"emailHelp",class:"form-text",children:"We'll never share your email with anyone else."})]}),Object(i.jsxs)("div",{class:"mb-3",children:[Object(i.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Password"}),Object(i.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1"})]}),Object(i.jsxs)("div",{class:"mb-3 form-check",children:[Object(i.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(i.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(i.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})})},d=function(){return Object(i.jsx)("div",{className:"container w-50 mx-auto mt-5 text-center",children:Object(i.jsx)("h1",{children:"404 page not found!"})})},u=t(17),p=t.n(u),h=t(31),x=t(12),O=t(32),v=t.n(O),f=function(){var e=Object(c.useState)([]),a=Object(x.a)(e,2),t=a[0],n=a[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(h.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:3001/users");case 2:a=e.sent,console.log(a.data),n(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"container mt-5",children:Object(i.jsxs)("table",{className:"table table-hover",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"table-dark",children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Name"}),Object(i.jsx)("th",{scope:"col",children:"User Name"}),Object(i.jsx)("th",{scope:"col",children:"Email"}),Object(i.jsx)("th",{scope:"col",children:"Action"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e,a){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:a+1}),Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.username}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:Object(i.jsxs)("div",{className:"action-name",children:[Object(i.jsx)("button",{className:"btn btn-primary mr-2",children:"View"}),Object(i.jsx)("button",{className:"btn btn-outline-primary mr-2",children:"Edit"}),Object(i.jsx)("button",{className:"btn btn-danger",children:"Delete"})]})})]},a)}))})]})})},N=t(11),y=t(18),g=function(){var e=Object(c.useState)({name:"",username:"",email:"",phone:"",websitename:""}),a=Object(x.a)(e,2),t=a[0],n=a[1],s=function(e){var a=e.target,t=a.name,c=a.value;n((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(N.a)({},t,c))}))};return Object(i.jsx)("div",{className:"container mt-5 w-50 mx-auto",children:Object(i.jsxs)("form",{className:"border py-4 px-5 rounded",children:[Object(i.jsx)("h2",{className:"text-center mb-4",children:"Add a User"}),Object(i.jsx)("div",{className:"mb-4",children:Object(i.jsx)("input",{type:"text",className:"form-control",onChange:s,value:t.name,name:"name",placeholder:"Enter your name..."})}),Object(i.jsx)("div",{className:"mb-4",children:Object(i.jsx)("input",{type:"text",onChange:s,value:t.username,name:"username",className:"form-control",placeholder:"Enter your username..."})}),Object(i.jsx)("div",{className:"mb-4",children:Object(i.jsx)("input",{type:"email",onChange:s,value:t.email,name:"email",className:"form-control",placeholder:"Enter your email address..."})}),Object(i.jsx)("div",{className:"mb-4",children:Object(i.jsx)("input",{type:"number",onChange:s,value:t.phone,name:"phone",className:"form-control",placeholder:"Enter your phone number..."})}),Object(i.jsx)("div",{className:"mb-4",children:Object(i.jsx)("input",{type:"text",onChange:s,value:t.websitename,name:"websitename",className:"form-control",placeholder:"Enter your website name..."})}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),alert("your data is ".concat(t.name))},className:"btn btn-primary w-100",children:"Add User"})]})})},w=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{path:"/",exact:!0,component:f}),Object(i.jsx)(m.a,{path:"/home",exact:!0,component:f}),Object(i.jsx)(m.a,{path:"/about",exact:!0,component:b}),Object(i.jsx)(m.a,{path:"/contact",exact:!0,component:j}),Object(i.jsx)(m.a,{path:"/users/add",exact:!0,component:g}),Object(i.jsx)(m.a,{component:d})]})})};var k=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(w,{})]})};t(63);r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(l.a,{children:Object(i.jsx)(k,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.8f56f928.chunk.js.map