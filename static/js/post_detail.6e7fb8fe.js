(function(){"use strict";var e={8068:function(e,t,o){var s=o(144),r=o(1096),a=o(3584),n=o(3551),l=function(){var e=this,t=e._self._c,o=e._self._setupProxy;return t(r.Z,{attrs:{id:"inspire"}},[t(o.MainMenu),t(n.Z,[t(o.PostDetail)],1),t(a.Z,{attrs:{app:""}},[t("span",[e._v("© 2023")])])],1)},i=[],c=o(5378),g=o(8983),d=o(1828),p=o(3058),u=o(5223),f=o(9789),h=o(6904),m=o(5057),v=o(248),Z=o(1908),w=o(2755),_=o(7679),C=o(1495),y=o(7135),k=o(5234),b=o(5251),x=o(5838),P=o(2370),O=function(){var e=this,t=e._self._c;return t("div",[t(y.Z,{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(v.Z,{attrs:{dense:""}},[t(Z.Z,{attrs:{link:""}},[t(w.Z,[t(m.Z,[e._v("mdi-view-dashboard")])],1),t(_.km,[t(_.V9,[e._v("Dashboard")])],1)],1),t(Z.Z,{attrs:{link:""}},[t(w.Z,[t(m.Z,[e._v("mdi-cog")])],1),t(_.km,[t(_.V9,[e._v("Settings")])],1)],1)],1)],1),t(c.Z,{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[t(g.Z,{on:{click:function(t){e.drawer=!e.drawer}}}),t(P.qW,[e._v("Vue.js - Django Web Blog")]),t(k.Z),t(d.Z,{attrs:{text:"",href:"/"}},[e._v("Home")]),t(d.Z,{attrs:{text:"",href:"/blog/post/list/"}},[e._v("Blog")]),t(d.Z,{attrs:{text:"",href:"/admin/"}},[e._v("Admin")]),t(d.Z,{attrs:{text:""}},[e._v("/")]),t(d.Z,{attrs:{text:"",href:"/post_list.html"}},[e._v("POSTLIST")]),t(d.Z,{attrs:{text:"",href:"/post_detail.html"}},[e._v("POSTDETAIL")]),t(k.Z),t(C.Z,{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:o,attrs:s}){return[t(d.Z,e._g(e._b({attrs:{text:""}},"v-btn",s,!1),o),[t(m.Z,{staticClass:"mr-2"},[e._v("mdi-account")]),e._v(e._s(e.me.username)+" "),t(m.Z,{staticClass:"ml-1"},[e._v("mdi-dots-vertical")])],1)]}}])},[t(v.Z,["Anonymous"===e.me.username?[t(Z.Z,{on:{click:function(t){return e.dialogOpen("login")}}},[t(_.V9,[e._v("Login")])],1),t(Z.Z,{on:{click:function(t){return e.dialogOpen("register")}}},[t(_.V9,[e._v("Register")])],1)]:[t(Z.Z,{on:{click:e.logout}},[t(_.V9,[e._v("Logout")])],1),t(Z.Z,{on:{click:function(t){return e.dialogOpen("passwordChange")}}},[t(_.V9,[e._v("Password Change")])],1)]],2)],1)],1),t(f.Z,{attrs:{"max-width":"600"},model:{value:e.dialog.login,callback:function(t){e.$set(e.dialog,"login",t)},expression:"dialog.login"}},[t(p.Z,{staticClass:"elevation-12"},[t(x.Z,{attrs:{color:"primary",dark:"",flat:""}},[t(P.qW,[e._v("Login")])],1),t(u.ZB,[t(h.Z,{ref:"loginForm",attrs:{id:"login-form"}},[t(b.Z,{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),t(b.Z,{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1)],1),t(u.h7,[t(k.Z),t(d.Z,{attrs:{text:"",color:"grey"},on:{click:function(t){return e.cancel("login")}}},[e._v("Cancel")]),t(d.Z,{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(t){return e.save("login")}}},[e._v("Login")])],1)],1)],1),t(f.Z,{attrs:{"max-width":"600"},model:{value:e.dialog.register,callback:function(t){e.$set(e.dialog,"register",t)},expression:"dialog.register"}},[t(p.Z,{staticClass:"elevation-12"},[t(x.Z,{attrs:{color:"success",dark:"",flat:""}},[t(P.qW,[e._v("Register")])],1),t(u.ZB,[t(h.Z,{ref:"registerForm",attrs:{id:"register-form"}},[t(b.Z,{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),t(b.Z,{attrs:{label:"Password",name:"password1","prepend-icon":"mdi-lock",type:"password"}}),t(b.Z,{attrs:{label:"Password Confirm",name:"password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),t(u.h7,[t(k.Z),t(d.Z,{attrs:{text:"",color:"grey"},on:{click:function(t){return e.cancel("register")}}},[e._v("Cancel")]),t(d.Z,{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(t){return e.save("register")}}},[e._v("Register")])],1)],1)],1),t(f.Z,{attrs:{"max-width":"600"},model:{value:e.dialog.passwordChange,callback:function(t){e.$set(e.dialog,"passwordChange",t)},expression:"dialog.passwordChange"}},[t(p.Z,{staticClass:"elevation-12"},[t(x.Z,{attrs:{color:"warning",dark:"",flat:""}},[t(P.qW,[e._v("Password Change")])],1),t(u.ZB,[t(h.Z,{ref:"passwordChangeForm",attrs:{id:"passwordChange-form"}},[t(b.Z,{attrs:{label:"Old Password",name:"old_password","prepend-icon":"mdi-lock",type:"password"}}),t(b.Z,{attrs:{label:"New Password",name:"new_password1","prepend-icon":"mdi-lock",type:"password"}}),t(b.Z,{attrs:{label:"New Password Confirm",name:"new_password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),t(u.h7,[t(k.Z),t(d.Z,{attrs:{text:"",color:"grey"},on:{click:function(t){return e.cancel("passwordChange")}}},[e._v("Cancel")]),t(d.Z,{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(t){return e.save("passwordChange")}}},[e._v("Change")])],1)],1)],1)],1)},T=[],$=o(6154);const D=new s.ZP;var F=D;$.Z.defaults.xsrfCookieName="csrftoken",$.Z.defaults.xsrfHeaderName="X-CSRFToken";var j={data:()=>({drawer:null,dialog:{login:!1,register:!1,passwordChange:!1},me:{username:"Anonymous"}}),watch:{me(e){console.log("watch me..",e),F.$emit("me_change",e)}},created(){this.getUserInfo()},methods:{dialogOpen(e){console.log("dialogOpen..",e),"login"===e?this.dialog.login=!0:"register"===e?this.dialog.register=!0:"passwordChange"===e&&(this.dialog.passwordChange=!0)},cancel(e){console.log("cancel..",e),"login"===e?(this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===e?(this.dialog.register=!1,this.$refs.registerForm.reset()):"passwordChange"===e&&(this.dialog.passwordChange=!1,this.$refs.passwordChangeForm.reset())},save(e){console.log("save..",e),"login"===e?(this.login(),this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===e?(this.register(),this.dialog.register=!1,this.$refs.registerForm.reset()):"passwordChange"===e&&(this.passwordChange(),this.dialog.passwordChange=!1,this.$refs.passwordChangeForm.reset())},login(){console.log("login..");const e=document.getElementById("login-form"),t=new FormData(e);$.Z.post("/api/login/",t).then((e=>{console.log("Login post res:",e),this.me=e.data})).catch((e=>{console.log("login post err:",e),alert(e.message)}))},register(){console.log("register");const e=document.getElementById("register-form"),t=new FormData(e);$.Z.post("/api/register/",t).then((e=>{console.log("register post res:",e),alert(`User ${e.data.username} created OK`)})).catch((e=>{console.log("register post err:",e),alert(e.message)}))},logout(){console.log("logout"),$.Z.get("/api/logout/").then((e=>{console.log("logout get res:",e),alert(`User ${this.me.username} logout OK`),this.me={username:"Anonymous"}})).catch((e=>{console.log("logout get err:",e),alert(e.message)}))},passwordChange(){console.log("password change");const e=document.getElementById("passwordChange-form"),t=new FormData(e);$.Z.post("/api/pwdchg/",t).then((e=>{console.log("password change post res:",e),alert(`User ${this.me.username} password change OK`)})).catch((e=>{console.log("password change err:",e),alert(e.message)}))},getUserInfo(){console.log("getUserInfo"),$.Z.get("/api/me/").then((e=>{this.me=e.data})).catch((e=>{console.log("get user info err:",e)}))}}},S=j,M=o(1001),B=(0,M.Z)(S,O,T,!1,null,null,null),I=B.exports,U=o(8819),A=o(4944),L=o(4437),V=o(6035),E=o(5294),W=function(){var e=this,t=e._self._c;return t(V.Z,{attrs:{fluid:""}},[t(E.Z,{attrs:{align:"center",justify:"center"}},[t(L.Z,{attrs:{cols:"12",lg:"10"}},[t("h1",[e._v(e._s(e.post.title))]),t("p",[e._v(e._s(e.post.modify_dt)+", written by "+e._s(e.post.owner))])])],1),t(E.Z,{attrs:{align:"start",justify:"center"}},[t(L.Z,{attrs:{cols:"12",sm:"8",lg:"7"}},[t(p.Z,{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t("p",{staticStyle:{"white-space":"pre-wrap"}},[e._v(" "+e._s(e.post.content)+" ")]),t("div",[t("strong",[e._v("TAGS:")]),e._l(e.post.tags,(function(o,s){return t(A.Z,{key:s,staticClass:"ma-2 my-hover",attrs:{outlined:""},on:{click:function(t){return e.serverPage(o)}}},[e._v(" "+e._s(o)+" ")])}))],2)])],1),t(L.Z,{attrs:{cols:"12",sm:"4",lg:"3"}},[t(p.Z,{staticClass:"pa-2 mb-5",attrs:{tile:""}},[t("p",[e._v("prev post")]),e.post.prev?t("h2",{staticClass:"my-hover",on:{click:function(t){return e.fetchPostDetail(e.post.prev.id)}}},[e._v(e._s(e.post.prev.title))]):e._e()]),t(p.Z,{staticClass:"pa-2 mb-5",attrs:{tile:""}},[t("p",[e._v("next post")]),e.post.next?t("h2",{staticClass:"my-hover",on:{click:function(t){return e.fetchPostDetail(e.post.next.id)}}},[e._v(e._s(e.post.next.title))]):e._e()]),t(p.Z,{staticClass:"pa-2",attrs:{tile:""}},[t("h2",[e._v("Tag cloud")]),e._l(e.tagCloud,(function(o,s){return t(A.Z,{key:s,staticClass:"ma-2 my-hover",attrs:{color:o.color,"text-color":"white"},on:{click:function(t){return e.serverPage(o.name)}}},[t(U.Z,{class:o.color+" darken-4",attrs:{left:""}},[e._v(e._s(o.count))]),e._v(" "+e._s(o.name)+" ")],1)}))],2)],1)],1)],1)},q=[],N={data:()=>({post:{},tagCloud:[]}),created(){console.log("created");const e=location.pathname.split("/")[3]||2;this.fetchPostDetail(e),this.fetchTagCloud()},methods:{fetchPostDetail(e){console.log("fetchPostDetail"),$.Z.get(`/api/post/${e}/`).then((e=>{console.log("Post detail get res",e),this.post=e.data})).catch((e=>{console.log("error",e.response),alert(e.response.status+" "+e.response.statusText)}))},fetchTagCloud(){console.log("fetchTagCloud"),$.Z.get("/api/tag/cloud/").then((e=>{console.log("Post tagcloud res",e),this.tagCloud=e.data,this.tagCloud.forEach((e=>{3==e.weight?e.color="green":2==e.weight?e.color="blue-grey":1==e.weight&&(e.color="grey")}))})).catch((e=>{console.log("error",e.response),alert(e.response.status+" "+e.response.statusText)}))},serverPage(e){console.log("serverPage"),location.href=`/blog/post/list/?tagname=${e}`}}},R=N,K=(0,M.Z)(R,W,q,!1,null,"7f579434",null),H=K.exports;const G={components:{PostDetail:H,MainMenu:I},data:()=>({})};var X=Object.assign(G,{__name:"AppPostDetail",setup(e){return{__sfc:!0,MainMenu:I,PostDetail:H}}}),z=X,J=(0,M.Z)(z,l,i,!1,null,null,null),Q=J.exports,Y=o(2250);s.ZP.use(Y.Z);var ee=new Y.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:ee,render:e=>e(Q)}).$mount("#app")}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,s,r,a){if(!s){var n=1/0;for(g=0;g<e.length;g++){s=e[g][0],r=e[g][1],a=e[g][2];for(var l=!0,i=0;i<s.length;i++)(!1&a||n>=a)&&Object.keys(o.O).every((function(e){return o.O[e](s[i])}))?s.splice(i--,1):(l=!1,a<n&&(n=a));if(l){e.splice(g--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var g=e.length;g>0&&e[g-1][2]>a;g--)e[g]=e[g-1];e[g]=[s,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={33:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,a,n=s[0],l=s[1],i=s[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(i)var g=i(o)}for(t&&t(s);c<n.length;c++)a=n[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(g)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(8068)}));s=o.O(s)})();
//# sourceMappingURL=post_detail.6e7fb8fe.js.map