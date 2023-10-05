(function(){"use strict";var t={2006:function(t,e,s){var r=s(144),o=s(1096),n=s(3584),a=s(3551),i=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e(o.Z,{attrs:{id:"inspire"}},[e(s.MainMenu),e(a.Z,[e(s.HelloWorld)],1),e(n.Z,{attrs:{app:""}},[e("span",[t._v("© 2023")])])],1)},l=[],c=s(4437),u=s(6035),d=s(2469),g=s(5294),f=function(){var t=this,e=t._self._c;return e(u.Z,[e(g.Z,{staticClass:"text-center"},[e(c.Z,{attrs:{cols:"12"}},[e(d.Z,{staticClass:"my-3",attrs:{src:s(9574),contain:"",height:"200"}})],1),e(c.Z,{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify (Home)")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(c.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),e(g.Z,{attrs:{justify:"center"}},t._l(t.whatsNext,(function(s,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:s.href,target:"_blank"}},[t._v(" "+t._s(s.text)+" ")])})),0)],1),e(c.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),e(g.Z,{attrs:{justify:"center"}},t._l(t.importantLinks,(function(s,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:s.href,target:"_blank"}},[t._v(" "+t._s(s.text)+" ")])})),0)],1),e(c.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),e(g.Z,{attrs:{justify:"center"}},t._l(t.ecosystem,(function(s,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:s.href,target:"_blank"}},[t._v(" "+t._s(s.text)+" ")])})),0)],1)],1)],1)},p=[],m={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},h=m,v=s(1001),Z=(0,v.Z)(h,f,p,!1,null,null,null),w=Z.exports,y=s(5378),_=s(8983),b=s(1828),C=s(3058),x=s(5223),k=s(9789),j=s(6904),O=s(5057),P=s(248),F=s(1908),S=s(2755),$=s(7679),T=s(1495),W=s(7135),L=s(5234),M=s(5251),V=s(5838),A=s(2370),H=function(){var t=this,e=t._self._c;return e("div",[e(W.Z,{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(P.Z,{attrs:{dense:""}},[e(F.Z,{attrs:{link:""}},[e(S.Z,[e(O.Z,[t._v("mdi-view-dashboard")])],1),e($.km,[e($.V9,[t._v("Dashboard")])],1)],1),e(F.Z,{attrs:{link:""}},[e(S.Z,[e(O.Z,[t._v("mdi-cog")])],1),e($.km,[e($.V9,[t._v("Settings")])],1)],1)],1)],1),e(y.Z,{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[e(_.Z,{on:{click:function(e){t.drawer=!t.drawer}}}),e(A.qW,[t._v("Vue.js - Django Web Blog")]),e(L.Z),e(b.Z,{attrs:{text:"",href:"/"}},[t._v("Home")]),e(b.Z,{attrs:{text:"",href:"/blog/post/list/"}},[t._v("Blog")]),e(b.Z,{attrs:{text:"",href:"/admin/"}},[t._v("Admin")]),e(b.Z,{attrs:{text:""}},[t._v("/")]),e(b.Z,{attrs:{text:"",href:"/post_list.html"}},[t._v("POSTLIST")]),e(b.Z,{attrs:{text:"",href:"/post_detail.html"}},[t._v("POSTDETAIL")]),e(L.Z),e(T.Z,{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:r}){return[e(b.Z,t._g(t._b({attrs:{text:""}},"v-btn",r,!1),s),[e(O.Z,{staticClass:"mr-2"},[t._v("mdi-account")]),t._v(t._s(t.me.username)+" "),e(O.Z,{staticClass:"ml-1"},[t._v("mdi-dots-vertical")])],1)]}}])},[e(P.Z,["Anonymous"===t.me.username?[e(F.Z,{on:{click:function(e){return t.dialogOpen("login")}}},[e($.V9,[t._v("Login")])],1),e(F.Z,{on:{click:function(e){return t.dialogOpen("register")}}},[e($.V9,[t._v("Register")])],1)]:[e(F.Z,{on:{click:t.logout}},[e($.V9,[t._v("Logout")])],1),e(F.Z,{on:{click:function(e){return t.dialogOpen("passwordChange")}}},[e($.V9,[t._v("Password Change")])],1)]],2)],1)],1),e(k.Z,{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[e(C.Z,{staticClass:"elevation-12"},[e(V.Z,{attrs:{color:"primary",dark:"",flat:""}},[e(A.qW,[t._v("Login")])],1),e(x.ZB,[e(j.Z,{ref:"loginForm",attrs:{id:"login-form"}},[e(M.Z,{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),e(M.Z,{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1)],1),e(x.h7,[e(L.Z),e(b.Z,{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("Cancel")]),e(b.Z,{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v("Login")])],1)],1)],1),e(k.Z,{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[e(C.Z,{staticClass:"elevation-12"},[e(V.Z,{attrs:{color:"success",dark:"",flat:""}},[e(A.qW,[t._v("Register")])],1),e(x.ZB,[e(j.Z,{ref:"registerForm",attrs:{id:"register-form"}},[e(M.Z,{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),e(M.Z,{attrs:{label:"Password",name:"password1","prepend-icon":"mdi-lock",type:"password"}}),e(M.Z,{attrs:{label:"Password Confirm",name:"password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),e(x.h7,[e(L.Z),e(b.Z,{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("register")}}},[t._v("Cancel")]),e(b.Z,{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){return t.save("register")}}},[t._v("Register")])],1)],1)],1),e(k.Z,{attrs:{"max-width":"600"},model:{value:t.dialog.passwordChange,callback:function(e){t.$set(t.dialog,"passwordChange",e)},expression:"dialog.passwordChange"}},[e(C.Z,{staticClass:"elevation-12"},[e(V.Z,{attrs:{color:"warning",dark:"",flat:""}},[e(A.qW,[t._v("Password Change")])],1),e(x.ZB,[e(j.Z,{ref:"passwordChangeForm",attrs:{id:"passwordChange-form"}},[e(M.Z,{attrs:{label:"Old Password",name:"old_password","prepend-icon":"mdi-lock",type:"password"}}),e(M.Z,{attrs:{label:"New Password",name:"new_password1","prepend-icon":"mdi-lock",type:"password"}}),e(M.Z,{attrs:{label:"New Password Confirm",name:"new_password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),e(x.h7,[e(L.Z),e(b.Z,{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("passwordChange")}}},[t._v("Cancel")]),e(b.Z,{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){return t.save("passwordChange")}}},[t._v("Change")])],1)],1)],1)],1)},q=[],B=s(6154);B.Z.defaults.xsrfCookieName="csrftoken",B.Z.defaults.xsrfHeaderName="X-CSRFToken";var D={data:()=>({drawer:null,dialog:{login:!1,register:!1,passwordChange:!1},me:{username:"Anonymous"}}),methods:{dialogOpen(t){console.log("dialogOpen..",t),"login"===t?this.dialog.login=!0:"register"===t?this.dialog.register=!0:"passwordChange"===t&&(this.dialog.passwordChange=!0)},cancel(t){console.log("cancel..",t),"login"===t?(this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.dialog.register=!1,this.$refs.registerForm.reset()):"passwordChange"===t&&(this.dialog.passwordChange=!1,this.$refs.passwordChangeForm.reset())},save(t){console.log("save..",t),"login"===t?(this.login(),this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.register(),this.dialog.register=!1,this.$refs.registerForm.reset()):"passwordChange"===t&&(this.passwordChange(),this.dialog.passwordChange=!1,this.$refs.passwordChangeForm.reset())},login(){console.log("login..");const t=document.getElementById("login-form"),e=new FormData(t);B.Z.post("/api/login/",e).then((t=>{console.log("Login post res:",t),this.me=t.data})).catch((t=>{console.log("login post err:",t),alert(t.message)}))},register(){console.log("register");const t=document.getElementById("register-form"),e=new FormData(t);B.Z.post("/api/register/",e).then((t=>{console.log("register post res:",t),alert(`User ${t.data.username} created OK`)})).catch((t=>{console.log("register post err:",t),alert(t.message)}))},logout(){console.log("logout"),B.Z.get("/api/logout/").then((t=>{console.log("logout get res:",t),alert(`User ${this.me.username} logout OK`),this.me={username:"Anonymous"}})).catch((t=>{console.log("logout get err:",t),alert(t.message)}))},passwordChange(){}}},E=D,N=(0,v.Z)(E,H,q,!1,null,null,null),I=N.exports;const R={components:{HelloWorld:w,MainMenu:I},data:()=>({})};var U=Object.assign(R,{__name:"AppHome",setup(t){return{__sfc:!0,HelloWorld:w,MainMenu:I}}}),K=U,Q=(0,v.Z)(K,i,l,!1,null,null,null),X=Q.exports,z=s(2250);r.ZP.use(z.Z);var G=new z.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:G,render:t=>t(X)}).$mount("#app")},9574:function(t,e,s){t.exports=s.p+"static/img/logo.4d6033c9.svg"}},e={};function s(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,r,o,n){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],n=t[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(s.O).every((function(t){return s.O[t](r[l])}))?r.splice(l--,1):(i=!1,n<a&&(a=n));if(i){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,o,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={177:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,n,a=r[0],i=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var u=l(s)}for(e&&e(r);c<a.length;c++)n=a[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(2006)}));r=s.O(r)})();
//# sourceMappingURL=home.49d46136.js.map