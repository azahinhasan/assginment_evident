(this.webpackJsonpassginment_evident=this.webpackJsonpassginment_evident||[]).push([[0],{23:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(17),a=n.n(r),i=(n(23),n(2)),o=(n(5),n(4)),l=n.n(o),j=n(18),b=n.n(j),d=n(8),u=n(0),h=function(){var e=Object(c.useState)([""]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)("2000-01-01 00:00:00"),a=Object(i.a)(r,2),o=a[0],j=a[1],b=Object(c.useState)("3000-01-01 00:00:00"),h=Object(i.a)(b,2),O=h[0],x=h[1],p=function(){l.a.get("https://ami-coding-pari-na-default-rtdb.asia-southeast1.firebasedatabase.app/Userdata.json").then((function(e){var t=[];for(var n in e.data)e.data[n].user_id==localStorage.getItem("userID")&&t.push(Object(d.a)(Object(d.a)({},e.data[n]),{},{id:n}));g(t)})).catch((function(e){console.log(e)}))},g=function(e){var t=new Date(o),n=new Date(O),c=[];e.map((function(e){var s=new Date(e.timestamp);s>=t&&s<=n&&c.push(e)})),s(c)};return Object(c.useEffect)((function(){p(),p()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("br",{}),Object(u.jsx)("h2",{children:"Previous Values (Section 3: API Endpoints)"}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("table",{style:{width:"480px",fontWeight:"bold"},children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Start Datetime"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"date",placeholder:"start_datetime",onChange:function(e){return j(e.target.value)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"End Datetime"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"date",placeholder:"end_datetime",onChange:function(e){return x(e.target.value)}})})]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){return p()},style:{width:"480px"},children:"Filter"}),Object(u.jsx)("br",{})]}),Object(u.jsx)("br",{}),""!=n?Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{style:{color:"blue"},children:" [P.S. Without Filter table will show all previous input values of User(who logged in)]"}),Object(u.jsx)("br",{}),Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Input Values"}),Object(u.jsx)("th",{children:"Timestamp"})]}),n.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.input_values}),Object(u.jsx)("td",{children:e.timestamp})]},e.id)}))]})]}):Object(u.jsx)("h3",{children:"You donn't have any previous data or in the given timestamp range!"})]})},O=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),o=a[0],j=a[1],d=Object(c.useState)(!0),O=Object(i.a)(d,2),x=O[0],p=O[1],g=Object(c.useState)(""),f=Object(i.a)(g,2),m=f[0],v=f[1],S=Object(c.useState)(""),I=Object(i.a)(S,2),w=I[0],y=I[1],D=function(e){var t=e.filter((function(e){return parseInt(e)==e})).sort((function(e,t){return t-e}));!function(e){""!=e&&""!=o?(v("Input Values stored in DB"),l.a.post("https://ami-coding-pari-na-default-rtdb.asia-southeast1.firebasedatabase.app/Userdata.json",{input_values:e.toString(),timestamp:b()().format("YYYY-MM-DD hh:mm:ss"),user_id:localStorage.getItem("userID")}).then((function(e){console.log(e.data," post")})).catch((function(e){console.log(e)}))):(v("Failed!! Textbox is Emply or given invalid data!!"),y(""))}(t),console.log(t," sending to DB")};Object(c.useEffect)((function(){v(""),y("")}),[]);var k=Object(u.jsxs)("div",{className:"instructions",children:[Object(u.jsx)("h3",{children:"Instructions "}),Object(u.jsxs)("div",{children:["1. In Input Values user can input like 1, 2 or 1,2 or 1.2 or 1 2 etc.",Object(u.jsx)("br",{}),"2. If you give Alphabet or any thing which is not Integer in input it will not store in DB. Such as:",Object(u.jsx)("br",{}),"\xa0\xa0 Input Given: 1, -A, 4, 9,  -2, 7, b ,*,=,99",Object(u.jsx)("br",{}),"\xa0\xa0 Will store in DB: 99, 9, 7, 4, 1, -2",Object(u.jsx)("br",{}),"3. Search from above Input Values:",Object(u.jsx)("br",{}),"\xa0\xa0 Search value: 9",Object(u.jsx)("br",{}),"\xa0\xa0 Result: True",Object(u.jsx)("br",{}),"\xa0\xa0 Search value: 50",Object(u.jsx)("br",{}),"\xa0\xa0 Result: False",Object(u.jsx)("br",{}),"\xa0\xa0 Search value: -2",Object(u.jsx)("br",{}),"\xa0\xa0 Result: True",Object(u.jsx)("br",{}),"4. If Search Values or Input values textbox are empty,values will not store in DB",Object(u.jsx)("br",{}),"5. In Previous Values page it will show by defult all previous input values of that user.",Object(u.jsx)("br",{}),"6. User can filter by Start Datetime and End Datetime"]})]}),C="";return C=x?Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Khoj the search Page"}),Object(u.jsxs)("table",{style:{fontWeight:"bold",width:"80%"},children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Input values: "}),Object(u.jsxs)("td",{children:[Object(u.jsx)("input",{onChange:function(e){return s(e.target.value)},value:n})," "]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Search values: "}),Object(u.jsxs)("td",{children:[Object(u.jsx)("input",{onChange:function(e){return j(e.target.value)},type:"number",value:o})," "]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{style:{color:"#9A00FF"},children:[m," "]}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return function(){if(console.log(n," inputValue"),console.log(o," search"),""!=n){var e=n.split(/[a-zA-Z]+|[\s., ]/),t=e.find((function(e){return e==o}));y(void 0!=t?"True":"False"),console.log(t," found"),D(e)}else v("Failed!! Input Value text box is Empty!!"),y("")}()},children:"Khoj"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Result "}),Object(u.jsx)("td",{style:{color:"False"==w?"red":"green",fontWeight:"bold"},children:w})]})]}),k]}):Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h2",{children:["Welcome ",localStorage.getItem("email")]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){return p(!0)},children:"Search Page"}),Object(u.jsx)("button",{onClick:function(){return p(!1)},children:"Previous Values"}),Object(u.jsx)("button",{onClick:function(){return localStorage.clear(),void window.location.reload()},style:{backgroundColor:"red",borderColor:"red"},children:"LogOut"}),Object(u.jsx)("br",{}),C]})},x=function(e){var t=e.setShowLoginPage,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(""),j=Object(i.a)(o,2),b=j[0],d=j[1],h=Object(c.useState)(""),O=Object(i.a)(h,2),x=O[0],p=O[1],g=Object(c.useState)(""),f=Object(i.a)(g,2),m=f[0],v=f[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h2",{children:"SignUp Page"}),Object(u.jsxs)("table",{style:{width:"600px"},children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Email"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{placeholder:"exp@exemple.com",type:"email",onChange:function(e){return a(e.target.value)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Password"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{placeholder:"at least 6 characters",type:"password",onChange:function(e){return d(e.target.value)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Re-Type Password"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{placeholder:"at least 6 characters",type:"password",onChange:function(e){return p(e.target.value)}})})]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{style:{color:"red",fontWeight:"bold"},children:m}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{style:{width:"600px"},onClick:function(){return function(){if(x==b){v("");var e={email:r,password:b,returnSecureToken:!0};l.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDaMLRpxmGQ6asNZYY0_m1Y8UMxKelLKcw",e).then((function(e){v(""),console.log(e.data," post"),localStorage.setItem("userID",e.data.localId),localStorage.setItem("email",e.data.email),localStorage.setItem("idToken",e.data.idToken),localStorage.setItem("userVerified",!0),window.location.reload()})).catch((function(e){console.log(e.response.data.error),v("FAILED!! "+e.response.data.error.message)}))}else v("Re-Type Password and Password are not match!")}()},children:"SignUp"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{style:{width:"600px"},onClick:function(){return t(!0)},children:"Go to LogIn"})]})},p=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),o=a[0],j=a[1],b=Object(c.useState)(!0),d=Object(i.a)(b,2),h=d[0],O=d[1],p=Object(c.useState)(""),g=Object(i.a)(p,2),f=g[0],m=g[1],v=function(){var e={email:n,password:o,returnSecureToken:!0};l.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaMLRpxmGQ6asNZYY0_m1Y8UMxKelLKcw",e).then((function(e){m(""),console.log(e.data," post"),localStorage.setItem("userID",e.data.localId),localStorage.setItem("email",e.data.email),localStorage.setItem("idToken",e.data.idToken),localStorage.setItem("userVerified",!0),window.location.reload()})).catch((function(e){m("FAILED!! "+e.response.data.error.message)}))},S=function(e){"Enter"===e.key&&v()};Object(c.useEffect)((function(){}),[]);var I="";return I=h?Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"LogIn Page"}),Object(u.jsxs)("table",{style:{width:"600px"},children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Email"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"email",onChange:function(e){return s(e.target.value)},onKeyDown:function(e){return S(e)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Password"}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"password",onChange:function(e){return j(e.target.value)},onKeyDown:function(e){return S(e)}})})]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{style:{color:"red",fontWeight:"bold"},children:f}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{style:{width:"600px"},onClick:function(){return v()},children:"LogIn"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{style:{width:"600px"},onClick:function(){return O(!1)},children:"Go to SignUp"})]}):Object(u.jsx)(x,{setShowLoginPage:O}),Object(u.jsx)("div",{className:"App",children:I})},g=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){localStorage.getItem("userVerified")&&""!=localStorage.getItem("userID")&&""!=localStorage.getItem("email")&&s(!0)}),[]),Object(u.jsx)("div",{className:"App",children:n?Object(u.jsx)(O,{}):Object(u.jsx)(p,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),f()},5:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.b817cc71.chunk.js.map