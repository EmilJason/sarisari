(this.webpackJsonpsarisari=this.webpackJsonpsarisari||[]).push([[0],{95:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),i=a.n(r),c=a(12),l=a.n(c),s=a(15),o=a(128),u=a(122),d=a(126),j=a(127),b=a(41),h=a(21);h.a.initializeApp({apiKey:"AIzaSyAp_4WwsvxP7dZxsRelZIlXCWvRmRlOGdY",authDomain:"inventory-77285.firebaseapp.com",projectId:"inventory-77285",storageBucket:"inventory-77285.appspot.com",messagingSenderId:"442277202150",appId:"1:442277202150:web:08c758ad5fa35fa209d327"});a(35);function x(e){var t=e.user,a=function(){h.a.auth().signOut().then((function(){return console.log("you have been signout")}))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(d.a,{position:"static",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{variant:"h6",style:{flexGrow:1},children:"SariSari"}),""===t?null:Object(n.jsx)(u.a,{variant:"text",color:"inherit",onClick:a,children:t})]})})})}var g=a(134),O={txt:{margin:"1rem"},btn:{margin:"1rem",background:"#646f58",color:"#fff"},btnRegister:{margin:"1rem"}};function p(e){var t=e.register,a=Object(r.useState)(""),i=Object(s.a)(a,2),c=i[0],l=i[1],d=Object(r.useState)(""),j=Object(s.a)(d,2),x=j[0],p=j[1],v=Object(r.useState)(""),f=Object(s.a)(v,2),m=f[0],y=f[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.a,{maxWidth:"xs",style:{margin:"1rem"},children:[Object(n.jsx)(b.a,{variant:"h6",style:{textAlign:"center"},children:"Login"}),Object(n.jsx)(g.a,{variant:"outlined",label:"Email",type:"email",placeholder:"Enter your Email Address",style:O.txt,value:c,onChange:function(e){return l(e.target.value)},fullWidth:!0}),Object(n.jsx)(g.a,{variant:"outlined",label:"Password",type:"password",placeholder:"Your password",style:O.txt,value:x,onChange:function(e){return p(e.target.value)},fullWidth:!0}),Object(n.jsx)(u.a,{variant:"contained",fullWidth:!0,style:O.btn,onClick:function(){""===c||""===x?(y("Please fill up all the fields"),console.log(m)):h.a.auth().signInWithEmailAndPassword(c,x).then((function(e){return console.log(e.user.email)}))},children:"Login"}),Object(n.jsx)(u.a,{variant:"text",fullWidth:!0,style:O.btnRegister,onClick:t,children:"Register"})]})})}var v={bg:{position:"fixed",width:"100vw",height:"100vh",left:0,top:0,background:"rgba(255,255,255,.8)",zIndex:1},registerForm:{background:"#fff",marginTop:"3rem",padding:"1.5rem",borderRadius:".5rem",boxShadow:"2px 0 10px 0 rgba(0,0,0,0.5)"},txt:{margin:".5rem"},btn:{background:"#00efff",color:"#220022",margin:".5rem"},btnCancel:{margin:".5rem"}};function f(e){var t=e.cancel,a=Object(r.useState)(""),i=Object(s.a)(a,2),c=i[0],l=i[1],d=Object(r.useState)(""),j=Object(s.a)(d,2),x=j[0],O=j[1],p=Object(r.useState)(""),f=Object(s.a)(p,2),m=f[0],y=f[1],S=Object(r.useState)(""),w=Object(s.a)(S,2),k=w[0],W=w[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{style:v.bg,children:Object(n.jsxs)(o.a,{maxWidth:"xs",style:v.registerForm,children:[Object(n.jsx)(b.a,{variant:"h6",children:"Register"}),Object(n.jsx)(g.a,{variant:"outlined",label:"Email",type:"email",placeholder:"Enter your Email Address",style:v.txt,onChange:function(e){return l(e.target.value)},value:c,fullWidth:!0}),Object(n.jsx)(g.a,{variant:"outlined",label:"Password",type:"password",placeholder:"Your password",style:v.txt,onChange:function(e){return O(e.target.value)},value:x,fullWidth:!0}),Object(n.jsx)(g.a,{variant:"outlined",label:"Re-type Password",type:"password",placeholder:"Retype password",style:v.txt,onChange:function(e){return y(e.target.value)},value:m,fullWidth:!0}),Object(n.jsx)(u.a,{variant:"contained",fullWidth:!0,onClick:function(){""===c||""===x||""===m?(W("Please fill all the necessary fields"),console.log(k)):(h.a.auth().createUserWithEmailAndPassword(c,x).then((function(e){return console.log(e.user)})),l(""),O(""),y(""),t())},style:v.btn,children:"Register"}),Object(n.jsx)(u.a,{variant:"text",fullWidth:!0,onClick:t,style:v.btnCancel,children:"Cancel"})]})})})}var m=a(39),y=a.n(m),S=a(133),w={bg:{position:"fixed",width:"100vw",height:"100vh",top:0,left:0,background:"rgba(255,255,255,0.8)",zIndex:1},content:{padding:"1.5rem",marginTop:"1.5rem",borderRadius:".5rem",background:"#fff"},txt:{margin:".5rem"},btn:{margin:".5rem"}};function k(e){var t=e.close,a=Object(r.useState)(""),i=Object(s.a)(a,2),c=i[0],l=i[1],d=Object(r.useState)(0),j=Object(s.a)(d,2),h=j[0],x=j[1],O=Object(r.useState)(0),p=Object(s.a)(O,2),v=p[0],f=p[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{style:w.bg,children:Object(n.jsxs)(o.a,{maxWidth:"xs",style:w.content,children:[Object(n.jsx)(b.a,{variant:"h6",children:"New Stock"}),Object(n.jsx)(g.a,{variant:"outlined",type:"text",name:"description",label:"Description",placeholder:"Enter the Product name",style:w.txt,value:c,onChange:function(e){return l(e.target.value)},fullWidth:!0}),Object(n.jsx)(g.a,{variant:"outlined",type:"number",name:"price",label:"Price",placeholder:"Enter the Product price",style:w.txt,value:h,onChange:function(e){return x(e.target.value)},fullWidth:!0}),Object(n.jsx)(g.a,{variant:"outlined",type:"text",name:"quantity",label:"Quantity",placeholder:"Enter the quantity",style:w.txt,value:v,onChange:function(e){return f(e.target.value)},fullWidth:!0}),Object(n.jsx)(u.a,{variant:"contained",style:w.btn,onClick:function(){y.a.post("".concat("https://aqueous-everglades-23747.herokuapp.com/api","/product/add"),{description:c,price:h}).then((function(){return console.log("Product saved")})),t()},children:"Save"})]})})})}var W=a(129),C=a(130),E=a(131),P=a(132),R={card:{margin:"1rem"}};function A(e){var t=e.value,a=t.description,r=t.price;return Object(n.jsx)("div",{children:Object(n.jsx)(o.a,{children:Object(n.jsxs)(W.a,{style:R.card,variant:"outlined",children:[Object(n.jsx)(C.a,{title:a}),Object(n.jsx)(E.a,{children:Object(n.jsxs)(b.a,{variant:"body2",children:[r," pesos"]})}),Object(n.jsxs)(P.a,{children:[Object(n.jsx)(u.a,{variant:"contained",color:"primary",children:"Add Stock"}),Object(n.jsx)(u.a,{variant:"contained",color:"secondary",children:"Edit"})]})]})})})}a(96);var I={btn:{position:"fixed",bottom:3,right:3}};function F(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(!1),l=Object(s.a)(c,2),u=l[0],d=l[1];Object(r.useEffect)((function(){y.a.get("".concat("https://aqueous-everglades-23747.herokuapp.com/api","/product")).then((function(e){return i(e.data)})).catch((function(e){return console.log(e.message)}))}),[a]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.a,{maxWidth:"xs",children:[Object(n.jsx)(b.a,{variant:"h6",children:"Available Stocks"}),Object(n.jsx)(S.a,{variant:"extended",color:"primary",style:I.btn,onClick:function(){return d(!0)},children:"New"}),!0===u?Object(n.jsx)(k,{close:function(){return d(!1)}}):null,a.map((function(e){return Object(n.jsx)(A,{value:e},e._id)}))]})})}var q=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(!1),l=Object(s.a)(c,2),u=l[0],d=l[1],j=function(){d(!0)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{user:a}),Object(n.jsxs)(o.a,{maxWidth:"sm",children:[(h.a.auth().onAuthStateChanged((function(e){i(e?e.email:"")})),""===a?Object(n.jsx)(p,{register:j}):Object(n.jsx)(F,{})),!0===u?Object(n.jsx)(f,{cancel:function(){return d(!1)}}):null]})]})};l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.3c145483.chunk.js.map