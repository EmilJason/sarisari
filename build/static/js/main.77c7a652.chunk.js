(this.webpackJsonpsarisari=this.webpackJsonpsarisari||[]).push([[0],{91:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),i=a(11),o=a.n(i),l=a(9),s=a(123),d=a(117),u=a(121),j=a(122),b=a(37),h=a(18);h.a.initializeApp({apiKey:"AIzaSyAp_4WwsvxP7dZxsRelZIlXCWvRmRlOGdY",authDomain:"inventory-77285.firebaseapp.com",projectId:"inventory-77285",storageBucket:"inventory-77285.appspot.com",messagingSenderId:"442277202150",appId:"1:442277202150:web:08c758ad5fa35fa209d327"});a(32);function x(e){var t=e.user,a=function(){h.a.auth().signOut().then((function(){return console.log("you have been signout")}))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(u.a,{position:"static",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{variant:"h6",style:{flexGrow:1},children:"SariSari"}),""===t?null:Object(n.jsx)(d.a,{variant:"text",color:"inherit",onClick:a,children:t})]})})})}var p=a(129),g={txt:{margin:"1rem"},btn:{margin:"1rem",background:"#646f58",color:"#fff"},btnRegister:{margin:"1rem"}};function m(e){var t=e.register,a=Object(r.useState)(""),c=Object(l.a)(a,2),i=c[0],o=c[1],u=Object(r.useState)(""),j=Object(l.a)(u,2),x=j[0],m=j[1],v=Object(r.useState)(""),O=Object(l.a)(v,2),f=O[0],y=O[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(s.a,{maxWidth:"xs",children:[Object(n.jsx)(b.a,{variant:"h6",style:{textAlign:"center"},children:"Login"}),Object(n.jsx)(p.a,{variant:"outlined",label:"Email",type:"email",placeholder:"Enter your Email Address",style:g.txt,value:i,onChange:function(e){return o(e.target.value)},fullWidth:!0}),Object(n.jsx)(p.a,{variant:"outlined",label:"Password",type:"password",placeholder:"Your password",style:g.txt,value:x,onChange:function(e){return m(e.target.value)},fullWidth:!0}),Object(n.jsx)(d.a,{variant:"contained",fullWidth:!0,style:g.btn,onClick:function(){""===i||""===x?(y("Please fill up all the fields"),console.log(f)):h.a.auth().signInWithEmailAndPassword(i,x).then((function(e){return console.log(e.user.email)}))},children:"Login"}),Object(n.jsx)(d.a,{variant:"text",fullWidth:!0,style:g.btnRegister,onClick:t,children:"Register"})]})})}var v={bg:{position:"fixed",width:"100vw",height:"100vh",left:0,top:0,background:"rgba(255,255,255,.8)",zIndex:1},registerForm:{background:"#fff",marginTop:"3rem",padding:"1.5rem",borderRadius:".5rem",boxShadow:"2px 0 10px 0 rgba(0,0,0,0.5)"},txt:{margin:".5rem"},btn:{background:"#00efff",color:"#220022",margin:".5rem"},btnCancel:{margin:".5rem"}};function O(e){var t=e.cancel,a=Object(r.useState)(""),c=Object(l.a)(a,2),i=c[0],o=c[1],u=Object(r.useState)(""),j=Object(l.a)(u,2),x=j[0],g=j[1],m=Object(r.useState)(""),O=Object(l.a)(m,2),f=O[0],y=O[1],S=Object(r.useState)(""),k=Object(l.a)(S,2),C=k[0],w=k[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{style:v.bg,children:Object(n.jsxs)(s.a,{maxWidth:"xs",style:v.registerForm,children:[Object(n.jsx)(b.a,{variant:"h6",children:"Register"}),Object(n.jsx)(p.a,{variant:"outlined",label:"Email",type:"email",placeholder:"Enter your Email Address",style:v.txt,onChange:function(e){return o(e.target.value)},value:i,fullWidth:!0}),Object(n.jsx)(p.a,{variant:"outlined",label:"Password",type:"password",placeholder:"Your password",style:v.txt,onChange:function(e){return g(e.target.value)},value:x,fullWidth:!0}),Object(n.jsx)(p.a,{variant:"outlined",label:"Re-type Password",type:"password",placeholder:"Retype password",style:v.txt,onChange:function(e){return y(e.target.value)},value:f,fullWidth:!0}),Object(n.jsx)(d.a,{variant:"contained",fullWidth:!0,onClick:function(){""===i||""===x||""===f?(w("Please fill all the necessary fields"),console.log(C)):(h.a.auth().createUserWithEmailAndPassword(i,x).then((function(e){return console.log(e.user)})),o(""),g(""),y(""),t())},style:v.btn,children:"Register"}),Object(n.jsx)(d.a,{variant:"text",fullWidth:!0,onClick:t,style:v.btnCancel,children:"Cancel"})]})})})}var f=a(20),y=a.n(f),S=a(128),k={bg:{position:"fixed",width:"100vw",height:"100vh",top:0,left:0,background:"rgba(255,255,255,0.8)",zIndex:1},content:{padding:"1.5rem",marginTop:"1.5rem",borderRadius:".5rem",background:"#fff"},txt:{margin:".5rem"},btn:{margin:".5rem"}};function C(e){var t=e.close,a=Object(r.useState)(""),c=Object(l.a)(a,2),i=c[0],o=c[1],u=Object(r.useState)(0),j=Object(l.a)(u,2),h=j[0],x=j[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{style:k.bg,children:Object(n.jsxs)(s.a,{maxWidth:"xs",style:k.content,children:[Object(n.jsx)(b.a,{variant:"h6",children:"New Stock"}),Object(n.jsx)(p.a,{variant:"outlined",type:"text",name:"description",label:"Description",placeholder:"Enter the Product name",style:k.txt,value:i,onChange:function(e){return o(e.target.value)},fullWidth:!0}),Object(n.jsx)(p.a,{variant:"outlined",type:"number",name:"price",label:"Price",placeholder:"Enter the Product price",style:k.txt,value:h,onChange:function(e){return x(e.target.value)},fullWidth:!0}),Object(n.jsx)(d.a,{variant:"contained",color:"primary",style:k.btn,onClick:function(){y.a.post("".concat("https://aqueous-everglades-23747.herokuapp.com/api","/product/add"),{description:i,price:h}).then((function(){return console.log("Product saved")})),t()},children:"Save"}),Object(n.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:t,children:"Cancel"})]})})})}var w=a(124),W=a(125),E=a(126),P=a(127),R={modalBg:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(255,255,255,0.5)",backdropFilter:"blur(3px)",zIndex:1},modalContent:{marginTop:"2rem",padding:"1rem",borderRadius:"1rem",backgroundColor:"#fff",display:"flex",flexDirection:"column",gap:"1rem",boxShadow:"2px 0 12px rgba(0,0,0,0.5)"},"@media (max-width: 1200px)":{modalContent:{marginTop:0}}};function A(e){var t=e.close,a=e.value,c=a._id,i=a.description,o=a.price,u=Object(r.useState)(i),j=Object(l.a)(u,2),h=j[0],x=j[1],g=Object(r.useState)(o),m=Object(l.a)(g,2),v=m[0],O=m[1];return Object(n.jsx)("div",{style:R.modalBg,children:Object(n.jsxs)(s.a,{maxWidth:"xs",style:R.modalContent,children:[Object(n.jsx)(b.a,{variant:"h4",component:"h1",children:"Edit Form"}),Object(n.jsx)(p.a,{variant:"outlined",type:"text",label:"Description",name:"description",value:h,onChange:function(e){return x(e.target.value)}}),Object(n.jsx)(p.a,{variant:"outlined",type:"number",label:"Price",name:"price",value:v,onChange:function(e){return O(e.target.value)}}),Object(n.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){y.a.put("".concat("https://aqueous-everglades-23747.herokuapp.com/api","/product/").concat(c,"/edit"),{description:h,price:v}).then((function(){return console.log("Successfully Edited")})).catch((function(e){return console.log(e.message)}))},children:"Save"}),Object(n.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:t,children:"Cancel"})]})})}var F={modalBG:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(255,255,255,0.5)",backdropFilter:"blur(3px)",zIndex:1},modal:{padding:"2rem",marginTop:"2rem",borderRadius:"1rem",display:"flex",flexDirection:"column",gap:"0.5rem",background:"#fff",boxShadow:"1px 0 12px 0 rgba(0,0,0,0.5)"}};function I(e){var t=e.close,a=e.value,c=a._id,i=a.description,o=a.price,u=Object(r.useState)(0),j=Object(l.a)(u,2),h=j[0],x=j[1];return Object(n.jsx)("div",{style:F.modalBG,children:Object(n.jsxs)(s.a,{maxWidth:"xs",style:F.modal,children:[Object(n.jsx)(b.a,{variant:"h4",component:"h4",children:"Add Stock"}),Object(n.jsx)(b.a,{variant:"body1",children:i}),Object(n.jsxs)(b.a,{variant:"body2",children:[o," pesos"]}),Object(n.jsx)(p.a,{variant:"outlined",name:"quantity",label:"Quantity",type:"number",placeholder:"Enter the number of stock",value:h,onChange:function(e){return x(e.target.value)}}),Object(n.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){y.a.put("".concat("https://aqueous-everglades-23747.herokuapp.com/api","/stock/new/").concat(c),{quantity:h}).then((function(){return console.log("data added")})).catch((function(e){return console.log(e.message)}))},children:"Save"}),Object(n.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:t,children:"Cancel"})]})})}var q={card:{margin:"1rem"}};function z(e){var t=e.value,a=Object(r.useState)(!1),c=Object(l.a)(a,2),i=c[0],o=c[1],u=Object(r.useState)(!1),j=Object(l.a)(u,2),h=j[0],x=j[1],p=(t._id,t.description),g=t.price;return Object(n.jsx)("div",{children:Object(n.jsxs)(s.a,{children:[Object(n.jsxs)(w.a,{style:q.card,variant:"outlined",children:[Object(n.jsx)(W.a,{title:p}),Object(n.jsx)(E.a,{children:Object(n.jsxs)(b.a,{variant:"body2",children:[g," pesos"]})}),Object(n.jsxs)(P.a,{children:[Object(n.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return x(!0)},children:"Add Stock"}),Object(n.jsx)(d.a,{variant:"contained",color:"secondary",onClick:function(){return o(!0)},children:"Edit"})]})]}),!0===i?Object(n.jsx)(A,{value:t,close:function(){return o(!1)}}):null,!0===h?Object(n.jsx)(I,{value:t,close:function(){return x(!1)}}):null]})})}var B="https://aqueous-everglades-23747.herokuapp.com/api",D={btn:{position:"fixed",bottom:3,right:3},textSearch:{display:"flex",width:"100%",justifyContent:"center"}};function T(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)(!1),o=Object(l.a)(i,2),d=o[0],u=o[1],j=Object(r.useState)(""),h=Object(l.a)(j,2),x=h[0],g=h[1];Object(r.useEffect)((function(){!function(){if(""===x)try{y.a.get("".concat(B,"/product")).then((function(e){return c(e.data)})).catch((function(e){return console.log(e.message)}))}catch(e){console.log(e.message)}else try{m()}catch(e){console.log(e.message)}}()}),[a]);var m=function(){y.a.get("".concat(B,"/product/").concat(x)).then((function(e){return c(e.data)}))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(s.a,{maxWidth:"xs",children:[Object(n.jsx)(b.a,{variant:"h6",children:"Available Stocks"}),Object(n.jsx)("div",{style:D.textSearch,children:Object(n.jsx)(p.a,{variant:"outlined",name:"search",type:"text",label:"Search",placeholder:"Search Product Description",value:x,onChange:function(e){return g(e.target.value)}})}),Object(n.jsx)(S.a,{variant:"extended",color:"primary",style:D.btn,onClick:function(){return u(!0)},children:"New"}),!0===d?Object(n.jsx)(C,{close:function(){return u(!1)}}):null,a.map((function(e){return Object(n.jsx)(z,{value:e},e._id)}))]})})}var _=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)(!1),o=Object(l.a)(i,2),d=o[0],u=o[1],j=function(){u(!0)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{user:a}),Object(n.jsxs)(s.a,{maxWidth:"sm",children:[(h.a.auth().onAuthStateChanged((function(e){c(e?e.email:"")})),""===a?Object(n.jsx)(m,{register:j}):Object(n.jsx)(T,{})),!0===d?Object(n.jsx)(O,{cancel:function(){return u(!1)}}):null]})]})};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.77c7a652.chunk.js.map