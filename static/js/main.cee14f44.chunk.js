(this["webpackJsonplogan-grp"]=this["webpackJsonplogan-grp"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(24),s=a.n(n),r=(a(38),a(39),a(16)),c=a(25),l=a(33),o=a(32),d=[{title:"Home",link:"/",cName:"nav-links"},{title:"About Us",link:"/about-us",cName:"nav-links"},{title:"Services",link:"/services",cName:"nav-links"},{title:"Contact",link:"/contact",cName:"nav-links"},{title:"Calendar",link:"/calendar",cName:"nav-links"}],h=(a(40),a(11)),u=a(1),j=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("nav",{className:"NavbarItems",children:[Object(u.jsx)("h3",{className:"navbar-logo",children:"The Logan Group Securities"}),Object(u.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(u.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(u.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:d.map((function(t,a){return Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{onClick:e.handleClick,to:t.link,className:t.cName,children:t.title})},a)}))})]})}}]),a}(i.Component),b=j,m=a(13),x=[{title:"Retirement Planning",description1:" Here is where a description will go",tsafaq:"403(b)/TSA FAQ",cName:"service-item",id:"retire"},{title:"CalSTRS/PRS Pension Planning",description2:"Here is where a description will go. The logan group Securities specializes in helping educators make the most of their STRS/PRS pension benefits through a combination of investing strategies. Etc Etc Etc Etc blah blah blah blah",cName:"service-item",id:"pension"},{title:"College Savings Plans (529)",description3:"here is where a description will go",cName:"service-item",id:"college"},{title:"Estate Planning",description4:"here is where a description will go",cName:"service-item",id:"estate"}],p=(a(46),[{Q:"Q: What is a 403(b) savings account?",A:"A: Aso known as a tax sheltered annuity(TSA), a 403b is an automatic savings plan that you can set up through your payroll department and allows you to save for retirement before state or federal taxes (tax deferred). In effect a 403(b) allows you to save for retirement while simultaneously lowering your taxable income."},{Q:"Q: Who is eligible?",A:"A: Employees of religious, charitable, educational, scientific, and literary organizations described in IRC Sec. 501 (c)(3) or public school systems."},{Q:"Q: How much can I contribute yearly?",A:"A: The limit on elective salary deferrals - the most an employee can contribute to a 403(b) account out of salary - is $19,500 in 2020 and 2021. Employees who are age 50 or over at the end of the calendar year can also make catch-up contributions of $6,500 in 2020 and 2021 ($6,000 in 2015 - 2019) beyond the basic limit on elective deferrals."},{Q:"Q: When can I start investing in a 403(b)?",A:"A: At anytime during the year; however, the salary reduction agreement must be submitted to your employer before the retirement savings reductions can go into effect."},{Q:"Q: Which types of investments can I put in my 403(b)?",A:"A: Funds may be invested in either annuities (fixed or variable and individual or group) or custodial accounts invested in mutual funds."},{Q:"Q: Can I borrow from my 403(b) account?",A:"A: Yes, participants can borrow funds from their 403b and later restore them without incurring a tax or penalty, if established conditions are met regarding maximum loan amount, amortization requirements, time period for repayments, etc."},{Q:"Q: What is the penalty for early withdrawls (before age 59 1/2)",A:'A: There is a 10% penalty for early withdrawal of qualified retirement funds prior to age 59 1/2 and all withdrawals are taxed as ordinary income. That is unless the distributions are rolled-over to another qualified retirement plan. Other exceptions include: if the annuitant is totally disabled, separates from service (after age 55), or dies. Also, the salary reduction amounts (but not the earnings) are available for "financial hardship" use e.g., an immediate and heavy financial need which cannot be met with other assets.'}]),f=function(){var e=Object(i.useState)(!1),t=Object(m.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)(!1),r=Object(m.a)(s,2),c=r[0],l=r[1],o=Object(i.useState)(!1),d=Object(m.a)(o,2),h=d[0],j=d[1],b=Object(i.useState)(!1),f=Object(m.a)(b,2),O=f[0],v=f[1],g=Object(i.useState)(!1),y=Object(m.a)(g,2),k=y[0],N=y[1],w=Object(i.useState)(!1),S=Object(m.a)(w,2),C=S[0],A=S[1],q=function(){!1===a?n(!0):!0===a&&n(!1)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{id:"services-header",children:"Services"}),Object(u.jsx)("div",{className:"cards",children:x.map((function(e,t){return Object(u.jsxs)("div",{className:e.cName,children:[Object(u.jsx)("h4",{id:e.id,onClick:function(e){return function(e){console.log(e.target),"retire"===e.target.id&&(l(!0),j(!0)),"retire"===e.target.id&&!0===c&&l(!1),"retire"===e.target.id&&!0===h&&j(!1),"pension"===e.target.id&&v(!0),"pension"===e.target.id&&!0===O&&v(!1),"college"===e.target.id&&N(!0),"college"===e.target.id&&!0===k&&N(!1),"estate"===e.target.id&&A(!0),"estate"===e.target.id&&!0===C&&A(!1)}(e)},children:e.title}),Object(u.jsxs)("div",{className:"description-div",children:[h?Object(u.jsxs)("h5",{className:"descripion",children:[" ",e.description1]}):null,O?Object(u.jsxs)("h5",{className:"descripion",children:[" ",e.description2]}):null,k?Object(u.jsxs)("h5",{className:"descripion",children:[" ",e.description3]}):null,C?Object(u.jsxs)("h5",{className:"descripion",children:[" ",e.description4]}):null]}),e.tsafaq?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"button-div",children:Object(u.jsx)("button",{style:{display:c?"block":"none"},className:"faq-button",onClick:q,children:e.tsafaq})}),a?Object(u.jsx)("h5",{children:p.map((function(e,t){return Object(u.jsxs)("div",{className:"faq",children:[Object(u.jsx)("p",{children:e.Q}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:e.A}),Object(u.jsx)("br",{})]},t)}))}):null]}):null]},t)}))})]})},O=a(31),v=(a(47),a(30)),g=a(29),y=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(g.a,{url:"https://calendly.com/mckendree-strommer"})})},k=a(2),N=function(e){var t={};return e.subject||(t.subject="Required field"),e.name||(t.name=" Required field"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required field",e.message||(t.message="Required field"),t};var w=function(){var e=Object(i.useRef)(),t=Object(v.a)({initialValues:{subject:"",name:"",email:"",message:""},validate:N,onSubmit:function(a){O.a.sendForm("service_666aw17","template_aeup5uq",e.current,"user_3SoMLZGL9ihSylRysiywE").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),t.resetForm(),alert("Thank you, your message has been sent")}});return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"contact-header",children:" Contact Us"}),Object(u.jsx)("form",{className:"form",ref:e,onSubmit:t.handleSubmit,children:Object(u.jsxs)("div",{children:[t.errors.subject?Object(u.jsx)("div",{className:"required-field",children:t.errors.subject}):null,Object(u.jsx)("label",{htmlFor:"subject",children:"Subject "}),Object(u.jsxs)("select",{name:"subject",id:"subject",value:t.values.subject,onChange:t.handleChange,children:[Object(u.jsx)("option",{value:"",children:"--Please choose an option--"}),Object(u.jsx)("option",{value:"Schedule an appointment",children:"Schedule an Appointment"}),Object(u.jsx)("option",{value:"Schedule a phoneReview",children:"Phone Review"}),Object(u.jsx)("option",{value:"Shedule a virtual meeting",children:"Virtual Meeting"}),Object(u.jsx)("option",{value:"info",children:"Request Info"}),Object(u.jsx)("option",{value:"general",children:"General"})]}),t.errors.name?Object(u.jsx)("div",{className:"required-field",children:t.errors.name}):null,Object(u.jsx)("label",{children:"Name "}),Object(u.jsx)("input",{type:"text",id:"name",name:"name",value:t.values.name,onChange:t.handleChange}),t.errors.email?Object(u.jsxs)("div",{className:"required-field",children:[" ",t.errors.email]}):null,Object(u.jsx)("label",{children:"Email "}),Object(u.jsx)("input",{type:"text",id:"email",name:"email",value:t.values.email,onChange:t.handleChange}),Object(u.jsx)("label",{children:"Phone"}),Object(u.jsx)("input",{type:"text",placeholder:"1 (111) 111-1111",id:"phone",name:"phone",value:t.values.phone,onChange:t.handleChange}),t.errors.message?Object(u.jsx)("div",{className:"required-field",children:t.errors.message}):null,Object(u.jsx)("label",{children:"Message "}),Object(u.jsx)("textarea",{type:"text",id:"message",name:"message",value:t.values.message,onChange:t.handleChange}),t.errors.subject||t.errors.name||t.errors.email||t.errors.message?Object(u.jsx)("div",{className:"required-field",children:" All required fields must be entered before submitting"}):null,Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",onclick:t.handleClick})]})}),Object(u.jsxs)(h.a,{children:[Object(u.jsxs)("h5",{children:[" Click ",Object(u.jsx)(h.b,{to:"/calendar",children:" here "})," to schedule an appointment online"]}),Object(u.jsx)(k.c,{children:Object(u.jsx)(k.a,{exact:!0,path:"/calendar",children:Object(u.jsx)(y,{})})})]})]})},S=[{brokerCheck:"https://brokercheck.finra.org/firm/summary/40259",privacyNotice:""}],C=(a(49),function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsxs)("div",{className:"footer-text",children:[Object(u.jsx)("h3",{children:"The Logan Group Securities"}),Object(u.jsx)("h4",{children:"2150 Douglas Blvd, Suite 240"}),Object(u.jsx)("h4",{children:" Roseville, CA 95661-3872"}),Object(u.jsx)("h4",{children:" (916) 791-3200 Fax: (916) 791-6555"}),Object(u.jsx)("h4",{children:" Toll Free: (800) 684-4730"}),Object(u.jsx)("br",{}),S.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{className:"footer-link",href:e.brokerCheck,children:"Broker Check"}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{className:"footer-link",href:e.privacyNotice,children:"We respect your Privacy"})]},t)})),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:" Member FINRA & SIPC"}),Object(u.jsx)("h5",{children:" Through our affiliated company, The Logan Group, we also offer insurance products"})]})})}),A=function(){return Object(u.jsxs)(h.a,{children:[Object(u.jsx)(b,{}),Object(u.jsx)("main",{children:Object(u.jsxs)(k.c,{children:[Object(u.jsx)(k.a,{exact:!0,path:"/services",children:Object(u.jsx)(f,{})}),Object(u.jsx)(k.a,{exact:!0,path:"/contact",children:Object(u.jsx)(w,{})}),Object(u.jsx)(k.a,{exact:!0,path:"/calendar",children:Object(u.jsx)(y,{})})]})}),Object(u.jsx)(C,{})]})};s.a.render(Object(u.jsx)(A,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.cee14f44.chunk.js.map