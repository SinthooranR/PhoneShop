(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{11:function(e,t,n){e.exports={CartPage:"Cart_CartPage__3JWWb",CartContainer:"Cart_CartContainer__1TZPY",UpdateBtn:"Cart_UpdateBtn__1vnMR",RemoveBtn:"Cart_RemoveBtn__1KLgu",CartItem:"Cart_CartItem__39ni-",ItemContainer:"Cart_ItemContainer__1Kgts",InfoDiv:"Cart_InfoDiv__y7ktO",QuantityDiv:"Cart_QuantityDiv__1QiCR"}},13:function(e,t,n){e.exports={FormInput:"Form_FormInput__HbA8_",Error:"Form_Error__b8Zsg"}},16:function(e,t,n){e.exports={ProductPage:"ProductInfo_ProductPage__3Ccv8",PageContainer:"ProductInfo_PageContainer__1Zk2s",Info:"ProductInfo_Info__1UgIr",InfoGrid:"ProductInfo_InfoGrid__2K50R",Details:"ProductInfo_Details__3dizq",Specifications:"ProductInfo_Specifications__1eBX6",ButtonArea:"ProductInfo_ButtonArea__15eCO"}},17:function(e,t,n){e.exports={Home:"Home_Home__3bY0z",Reminder:"Home_Reminder__lRF38",ProductContainer:"Home_ProductContainer__XEZVH",ProductGrid:"Home_ProductGrid__108YI",Product:"Home_Product__1wqLx"}},26:function(e,t,n){e.exports={ProfilePage:"Profile_ProfilePage__26e5s",ShippingInfo:"Profile_ShippingInfo__3Kkvs",ShippingForm:"Profile_ShippingForm__1dU-o"}},45:function(e,t,n){e.exports={Navbar:"Navbar_Navbar__JA-Nq"}},54:function(e,t,n){},6:function(e,t,n){e.exports={Login:"Login_Login__1ZEFZ",MainPanel:"Login_MainPanel__10ReW",fadein:"Login_fadein__2rFbv",Grid:"Login_Grid__1sTTh",LoginForm:"Login_LoginForm__1slto",FormComponent:"Login_FormComponent__Jz0kD",ButtonArea:"Login_ButtonArea__298ii",LoginHeader:"Login_LoginHeader__iaXjS",RegisterHeader:"Login_RegisterHeader__NQf7B",Redirect:"Login_Redirect__1N0li",Card:"Login_Card__3Hwg2"}},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r,c=n(2),i=n.n(c),a=n(29),o=n.n(a),s=(n(54),n(3)),l=n(4),d=n.n(l),u=n(7),j=n(15),h=n(19),b=n(20),p=n(42);r="https://ecommerce-phone-app.herokuapp.com/api";var v=n.n(p).a.create({baseURL:r}),m=new(function(){function e(){Object(h.a)(this,e)}return Object(b.a)(e,[{key:"register",value:function(e,t,n){return v.post("/register",{name:e,email:t,password:n})}},{key:"login",value:function(e,t){return v.post("/login",{email:e,password:t}).then((function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user"),window.location.assign("/")}},{key:"getUser",value:function(){var e=localStorage.getItem("user");return JSON.parse(e)}}]),e}()),O=m.getUser(),x=new(function(){function e(){Object(h.a)(this,e)}return Object(b.a)(e,[{key:"getUser",value:function(e){return v.get("/user/".concat(e),{headers:{Authorization:null===O||void 0===O?void 0:O.token}}).then((function(e){if(e.data)return e.data}))}},{key:"updateBilling",value:function(e,t){return v.put("/user/billing",{userId:e,data:t},{headers:{Authorization:null===O||void 0===O?void 0:O.token}}).then((function(e){if(e.data)return e.data}))}}]),e}()),g=m.getUser(),f=new(function(){function e(){Object(h.a)(this,e)}return Object(b.a)(e,[{key:"getAllProducts",value:function(){return v.get("/products",{headers:{Authorization:null===g||void 0===g?void 0:g.token}}).then((function(e){if(e.data)return e.data}))}},{key:"addProductToCart",value:function(e,t,n){return v.post("/cart",{quantity:e,userId:t,productId:n},{headers:{Authorization:null===g||void 0===g?void 0:g.token}}).then((function(e){if(e.data)return e.data}))}},{key:"updateProductInCart",value:function(e,t,n){return v.put("/cart",{quantity:e,cartId:t,productId:n},{headers:{Authorization:null===g||void 0===g?void 0:g.token}}).then((function(e){if(e.data)return e.data}))}},{key:"getCart",value:function(e){return v.get("/cart/".concat(e),{headers:{Authorization:null===g||void 0===g?void 0:g.token}}).then((function(e){if(e.data)return e.data}))}},{key:"purchaseCart",value:function(e){return v.post("/cart/purchase",{userId:e},{headers:{Authorization:null===g||void 0===g?void 0:g.token}}).then((function(e){if(e.data)return e.data}))}}]),e}()),y=m.getUser(),C=Object(j.b)("shop/products",function(){var e=Object(u.a)(d.a.mark((function e(t,n){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch,r=n.rejectWithValue,e.prev=1,e.next=4,f.getAllProducts();case 4:return c=e.sent,e.next=7,c;case 7:return e.abrupt("return",e.sent);case 10:if(e.prev=10,e.t0=e.catch(1),e.t0.response){e.next=14;break}throw e.t0;case 14:return e.abrupt("return",r(e.t0.response));case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),_=Object(j.b)("shop/cart",function(){var e=Object(u.a)(d.a.mark((function e(t,n){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch,r=n.rejectWithValue,e.prev=1,e.next=4,f.getCart(null===y||void 0===y?void 0:y._id);case 4:return c=e.sent,console.log(c),e.next=8,c;case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(1),e.t0.response){e.next=15;break}throw e.t0;case 15:return e.abrupt("return",r(e.t0.response));case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),N=Object(j.c)({name:"shop",initialState:{cart:[],products:[],isFetching:!1,isError:!1,errorMessage:"",totalSum:null},reducers:{},extraReducers:function(e){e.addCase(C.fulfilled,(function(e,t){var n=t.payload;return e.isFetching=!1,e.products=n.products,e})),e.addCase(C.pending,(function(e,t){t.payload;e.isFetching=!0})),e.addCase(C.rejected,(function(e,t){t.payload;e.isError=!0,e.isFetching=!1})),e.addCase(_.fulfilled,(function(e,t){var n=t.payload;return e.isFetching=!1,e.cart=n.cart,e.totalSum=n.totalSum,e})),e.addCase(_.pending,(function(e,t){t.payload;e.isFetching=!0})),e.addCase(_.rejected,(function(e,t){t.payload;e.isError=!0,e.isFetching=!1}))}}),P=function(e){return e.shop},k=N.reducer,w=m.getUser(),S=Object(j.b)("user/getAccount",function(){var e=Object(u.a)(d.a.mark((function e(t,n){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch,r=n.rejectWithValue,e.prev=1,e.next=4,x.getUser(null===w||void 0===w?void 0:w._id);case 4:return c=e.sent,e.next=7,c;case 7:return e.abrupt("return",e.sent);case 10:if(e.prev=10,e.t0=e.catch(1),e.t0.response){e.next=14;break}throw e.t0;case 14:return e.abrupt("return",r(e.t0.response));case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),I=Object(j.c)({name:"account",initialState:{account:{},isFetching:!1,isError:!1,errorMessage:""},reducers:{},extraReducers:function(e){e.addCase(S.fulfilled,(function(e,t){var n=t.payload;return e.isFetching=!1,e.account=n.users,e})),e.addCase(S.pending,(function(e,t){t.payload;e.isFetching=!0})),e.addCase(S.rejected,(function(e,t){t.payload;e.isError=!0,e.isFetching=!1}))}}),F=function(e){return e.account},L=I.reducer,E=n(22),R=n(5),A=n.p+"static/media/LoginImage.9e288df3.jpg",B=n(14),V=n(13),U=n.n(V),T=n(1),H=function(e){var t,n,r,c,i,a,o=e.register,s=e.inputValue,l=e.label,d=e.minLength,u=e.pattern,j=e.maxLength,h=e.validate,b=e.min,p=e.placeholder,v=e.type,m=e.errors,O=e.required,x=(e.autoComplete,e.defaultValue),g=e.setNewValue;return Object(T.jsxs)("div",{className:U.a.FormInput,children:[l&&Object(T.jsx)("label",{children:l}),Object(T.jsx)("div",{children:Object(T.jsx)("input",Object(B.a)(Object(B.a)({autoComplete:x&&"new-input",name:s,id:s,type:v,placeholder:p},o(s,{required:O,minLength:d,pattern:u,maxLength:j,validate:h,min:b,onChange:function(){return g}})),{},{defaultValue:x}))}),"required"===(null===(t=m[s])||void 0===t?void 0:t.type)&&Object(T.jsxs)("div",{className:U.a.Error,children:[l?l+" ":"This field","is required!"]}),"pattern"===(null===(n=m[s])||void 0===n?void 0:n.type)&&Object(T.jsxs)("div",{className:U.a.Error,children:[l?l+" must ":"Must"," be in the Correct Format"]}),"minLength"===(null===(r=m[s])||void 0===r?void 0:r.type)&&Object(T.jsxs)("div",{className:U.a.Error,children:[l?l+" must ":"Must"," be at least ",d," Characters"]}),"maxLength"===(null===(c=m[s])||void 0===c?void 0:c.type)&&Object(T.jsxs)("div",{className:U.a.Error,children:[l?l+" cannot ":"Cust"," exceed ",j," characters!"]}),"min"===(null===(i=m[s])||void 0===i?void 0:i.type)&&Object(T.jsxs)("div",{className:U.a.Error,children:[l?l+" cannot ":"Cannot"," be less than ",b]}),"confirmPassword"===s&&"validate"===(null===(a=m[s])||void 0===a?void 0:a.type)&&Object(T.jsx)("div",{className:U.a.Error,children:"Passwords do not Match"})]})},q=function(e){var t=e.message;return Object(T.jsx)(T.Fragment,{children:t&&Object(T.jsx)("div",{style:{textAlign:"center"},className:U.a.Error,children:t})})},M=n(23),D=n(6),z=n.n(D),G=function(e){var t=e.loginCallback,n=Object(M.a)(),r=n.register,i=n.handleSubmit,a=n.formState.errors,o=n.setValue,s=Object(c.useState)(!1),l=Object(R.a)(s,2),d=l[0],u=l[1],j=Object(c.useState)(""),h=Object(R.a)(j,2),b=h[0],p=h[1],v=i((function(e){o("password",""),u(!0)})),O=i((function(e){m.login(e.email,e.password).then((function(e){window.location.reload()})).catch((function(e){var t,n,r,c,i;e.response.data.msg?p(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.msg):p(null===e||void 0===e||null===(r=e.response)||void 0===r||null===(c=r.data)||void 0===c||null===(i=c.errors[0])||void 0===i?void 0:i.msg)}))}));return Object(T.jsxs)("div",{className:z.a.LoginForm,children:[Object(T.jsx)("h2",{className:z.a.LoginHeader,children:"Login"}),Object(T.jsx)("div",{className:z.a.FormComponent,children:Object(T.jsxs)("form",{onSubmit:O,onReset:function(){p(""),u(!1)},children:[d?Object(T.jsx)(H,{required:!0,inputValue:"password",placeholder:"Enter Password",label:"Password",type:"password",register:r,autoComplete:"new-password",errors:a}):Object(T.jsx)(H,{register:r,required:!0,inputValue:"email",placeholder:"Enter Email",label:"Email",type:"email",autoComplete:"new-email",errors:a}),Object(T.jsx)("div",{className:z.a.ButtonArea,children:d?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("button",{type:"reset",style:{marginRight:"0.5rem"},children:"Cancel"}),Object(T.jsx)("button",{type:"submit",style:{marginLeft:"0.5rem",backgroundColor:"#0275d8",color:"white"},children:"Submit"})]}):Object(T.jsx)("button",{onClick:v,children:"Continue"})}),Object(T.jsx)("div",{children:Object(T.jsx)(q,{message:b})}),Object(T.jsx)("hr",{style:{color:"white",marginTop:"2.5rem"}}),Object(T.jsx)("p",{style:{textAlign:"center",cursor:"pointer"},onClick:function(){t(!0)},children:"Dont have an Account? Please Register."})]})})]})},Q=function(e){var t=e.registerCallback,n=Object(M.a)(),r=n.register,i=n.handleSubmit,a=n.formState.errors,o=n.setValue,l=n.watch,d=Object(s.g)(),u=Object(c.useRef)({});u.current=l("password","");var j=Object(c.useState)(""),h=Object(R.a)(j,2),b=h[0],p=h[1],v=Object(c.useState)(!1),O=Object(R.a)(v,2),x=O[0],g=O[1],f=i((function(e){o("password",""),o("confirmPassword",""),g(!0)})),y=i((function(e){m.register(e.name,e.email,e.password).then((function(e){d.push("/redirect")})).catch((function(e){var t,n,r,c,i;e.response.data.msg?p(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.msg):p(null===e||void 0===e||null===(r=e.response)||void 0===r||null===(c=r.data)||void 0===c||null===(i=c.errors[0])||void 0===i?void 0:i.msg)}))}));return Object(T.jsxs)("div",{className:z.a.LoginForm,children:[Object(T.jsx)("h2",{className:z.a.RegisterHeader,children:"Register"}),Object(T.jsx)("div",{className:z.a.FormComponent,children:Object(T.jsxs)("form",{onSubmit:y,onReset:function(){p(""),g(!1)},children:[x?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(H,{register:r,required:!0,inputValue:"password",placeholder:"Enter Password",label:"Password",type:"password",errors:a}),Object(T.jsx)(H,{register:r,required:!0,inputValue:"confirmPassword",placeholder:"Confirm Password",label:"Confirm Password",type:"password",errors:a,validate:function(e){return e===u.current||"The passwords do not match"}})]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(H,{register:r,required:!0,inputValue:"name",placeholder:"Enter Name",label:"Your Name",type:"text",errors:a}),Object(T.jsx)(H,{register:r,required:!0,inputValue:"email",placeholder:"Enter Email",label:"Email",type:"email",errors:a})]}),Object(T.jsx)("div",{className:z.a.ButtonArea,children:x?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("button",{type:"reset",style:{marginRight:"0.5rem"},children:"Cancel"}),Object(T.jsx)("button",{type:"submit",style:{marginLeft:"0.5rem",backgroundColor:"#0275d8",color:"white"},children:"Submit"})]}):Object(T.jsx)("button",{onClick:f,children:"Continue"})}),Object(T.jsx)("div",{children:Object(T.jsx)(q,{message:b})}),Object(T.jsx)("hr",{style:{color:"white",marginTop:"2.5rem"}}),Object(T.jsx)("p",{style:{textAlign:"center",cursor:"pointer"},onClick:function(){t(!1)},children:"Have an Account? Please Login."})]})})]})},J=function(){var e=m.getUser(),t=Object(c.useState)(!1),n=Object(R.a)(t,2),r=n[0],i=n[1];return Object(T.jsx)(T.Fragment,{children:e?Object(T.jsx)(s.a,{to:"/products"}):Object(T.jsx)("div",{className:z.a.Login,children:Object(T.jsx)("div",{className:z.a.MainPanel,children:Object(T.jsxs)("div",{className:z.a.Grid,children:[Object(T.jsx)("img",{src:A,alt:"brand"}),r?Object(T.jsx)(Q,{registerCallback:function(e){return i(Boolean(e))}}):Object(T.jsx)(G,{loginCallback:function(e){return i(Boolean(e))}})]})})})})},W=function(){var e=Object(c.useState)(!1),t=Object(R.a)(e,2),n=t[0],r=t[1],i=Object(s.g)(),a=m.getUser();return Object(c.useEffect)((function(){setTimeout((function(){return r(!0)}),3500)}),[]),Object(T.jsx)(T.Fragment,{children:a?Object(T.jsx)(s.a,{to:"/products"}):Object(T.jsxs)("div",{className:z.a.Redirect,children:[Object(T.jsx)("div",{className:z.a.Card,children:Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Successfully Registered"}),Object(T.jsx)("p",{style:{marginTop:"1rem"},children:"Will be Redirected automatically"}),Object(T.jsx)("hr",{style:{color:"white",marginTop:"1.5rem"}}),Object(T.jsx)("p",{style:{textAlign:"center",cursor:"pointer"},onClick:function(){return i.push("/login")},children:"Click here to Redirect to Login."})]})}),n&&Object(T.jsx)(s.a,{to:"/login"})]})})},Y=function(){var e=Object(s.g)();return Object(T.jsx)("div",{className:z.a.Redirect,children:Object(T.jsx)("div",{className:z.a.Card,children:Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Purchase Successful"}),Object(T.jsx)("p",{style:{marginTop:"1rem"},children:"Enjoy the Free Money on the Test Run!"}),Object(T.jsx)("hr",{style:{color:"white",marginTop:"1.5rem"}}),Object(T.jsx)("p",{style:{textAlign:"center",cursor:"pointer"},onClick:function(){e.push("/cart"),window.location.reload()},children:"Click here to Return to Cart"})]})})})},Z=n(46),$=n(47),K=n(48),X=n(45),ee=n.n(X),te=function(){var e=m.getUser(),t=Object(s.g)();return Object(T.jsxs)("nav",{className:ee.a.Navbar,children:[Object(T.jsx)("h2",{style:{cursor:"pointer"},onClick:function(){return t.push("/products")},children:e?null===e||void 0===e?void 0:e.name:"Home"}),Object(T.jsxs)("div",{children:[Object(T.jsx)(Z.a,{onClick:function(){return t.push("/cart")}}),Object(T.jsx)($.a,{onClick:function(){return t.push("/account")}}),Object(T.jsx)(K.a,{onClick:function(){m.logout()}})]})]})},ne=Object(j.a)({reducer:{shop:k,account:L}}),re=E.c,ce=n(17),ie=n.n(ce),ae=function(){var e=re(F).account;return Object(T.jsx)(T.Fragment,{children:1e5===(null===e||void 0===e?void 0:e.balance)?Object(T.jsx)("div",{className:ie.a.Reminder,children:Object(T.jsx)("div",{children:Object(T.jsx)("p",{children:"Im feeling generous, so heres $100,000, Buy a Phone to get rid of this Message."})})}):null})},oe=function(e){var t=e.productName,n=e.productBrand,r=e.price,c=e.stock,i=e.productImage,a=e.viewProduct;return Object(T.jsxs)("div",{className:ie.a.Product,children:[Object(T.jsx)("img",{src:i||"",alt:"product"}),Object(T.jsx)("h4",{children:t}),Object(T.jsx)("h4",{children:n}),Object(T.jsxs)("p",{children:["$",r]}),Object(T.jsxs)("p",{children:[c," Remaining"]}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:a,children:"Learn More"})})]})},se=function(){var e=m.getUser(),t=Object(s.g)(),n=re(P),r=n.products,i=n.cart;console.log(i),localStorage.removeItem("productInfo");return Object(T.jsx)(T.Fragment,{children:e?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(te,{}),Object(T.jsxs)("div",{className:ie.a.Home,children:[Object(T.jsx)(ae,{}),Object(T.jsx)("div",{className:ie.a.ProductContainer,children:r&&r.length>0?Object(T.jsx)("div",{className:ie.a.ProductGrid,children:r.map((function(e){return Object(T.jsx)(c.Fragment,{children:Object(T.jsx)(oe,Object(B.a)(Object(B.a)({},e),{},{viewProduct:function(){return function(e){localStorage.setItem("productInfo",JSON.stringify(e)),t.push({pathname:"/products/".concat(e._id)})}(e)}}))},e._id)}))}):Object(T.jsx)("h1",{style:{textAlign:"center",paddingTop:"15rem"},children:"No Products Available at the Moment"})})]})]}):Object(T.jsx)(s.a,{to:"/"})})},le=n(16),de=n.n(le),ue=function(e){var t,n,r,c,i,a,o=e.productInfo,l=e.quantity,d=e.removeQuantity,u=e.addQuantity,j=e.addToCartHandler,h=Object(s.g)();return Object(T.jsxs)("div",{className:de.a.PageContainer,children:[Object(T.jsx)("h1",{children:null===o||void 0===o?void 0:o.productName}),Object(T.jsx)("div",{className:de.a.Info,children:Object(T.jsxs)("div",{className:de.a.InfoGrid,children:[Object(T.jsxs)("div",{className:de.a.Details,children:[Object(T.jsx)("img",{src:null===o||void 0===o?void 0:o.productImage,alt:"brand"}),Object(T.jsxs)("h3",{children:["Manufacturer: ",null===o||void 0===o?void 0:o.productBrand]}),Object(T.jsxs)("h3",{children:["Price: ",null===o||void 0===o?void 0:o.price]}),Object(T.jsxs)("h3",{children:[null===o||void 0===o?void 0:o.stock," Remaining"]})]}),Object(T.jsxs)("div",{className:de.a.Specifications,children:[Object(T.jsx)("h2",{children:"Specifications"}),Object(T.jsxs)("h4",{children:["OS: ",null===o||void 0===o||null===(t=o.specifications)||void 0===t?void 0:t.os]}),Object(T.jsx)("hr",{}),Object(T.jsxs)("h4",{children:["Storage: ",null===o||void 0===o||null===(n=o.specifications)||void 0===n?void 0:n.storage,"GB"]}),Object(T.jsx)("hr",{}),Object(T.jsxs)("h4",{children:["RAM: ",null===o||void 0===o||null===(r=o.specifications)||void 0===r?void 0:r.ram,"GB"]}),Object(T.jsx)("hr",{}),Object(T.jsxs)("h4",{children:["Screen Size: ",null===o||void 0===o||null===(c=o.specifications)||void 0===c?void 0:c.size," inches"]}),Object(T.jsx)("hr",{}),Object(T.jsxs)("h4",{children:["Resolution: ",null===o||void 0===o||null===(i=o.specifications)||void 0===i?void 0:i.resolution," Pixels"]}),Object(T.jsx)("hr",{}),Object(T.jsxs)("h4",{children:["Battery: ",null===o||void 0===o||null===(a=o.specifications)||void 0===a?void 0:a.battery]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{style:{marginBottom:"0.5rem"},children:"Quantity"}),Object(T.jsxs)("span",{children:[Object(T.jsx)("button",{onClick:d,disabled:1===l,children:"-"})," ",l," ",Object(T.jsx)("button",{onClick:u,disabled:l===(null===o||void 0===o?void 0:o.stock),children:"+"})]})]}),Object(T.jsxs)("div",{className:de.a.ButtonArea,children:[Object(T.jsx)("button",{onClick:function(){return h.push("/products")},children:"Go Back"}),Object(T.jsx)("button",{onClick:j,style:{backgroundColor:(null===o||void 0===o?void 0:o.stock)>0?"#0275d8":"#C9D6FF",color:(null===o||void 0===o?void 0:o.stock)>0?"white":"black",cursor:(null===o||void 0===o?void 0:o.stock)>0?"pointer":"unset"},disabled:0===(null===o||void 0===o?void 0:o.stock),children:"Add to Cart"})]})]})]})})]})},je=function(){var e=Object(s.g)(),t=localStorage.getItem("productInfo"),n=Object(c.useState)(),r=Object(R.a)(n,2),i=r[0],a=r[1],o=Object(c.useState)(1),l=Object(R.a)(o,2),d=l[0],u=l[1],j=m.getUser();Object(c.useEffect)((function(){if(t){var n=JSON.parse(t);a(n)}else e.push("/products")}),[e,t]);var h=function(e){switch(e){case"inc":u(d+1);break;case"dec":u(d-1)}};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(te,{}),Object(T.jsx)("div",{className:de.a.ProductPage,children:Object(T.jsx)(ue,{productInfo:i,quantity:d,addQuantity:function(){return h("inc")},removeQuantity:function(){return h("dec")},addToCartHandler:function(){return function(t,n,r){f.addProductToCart(r,t,n).then((function(){e.push("/cart"),window.location.reload()})).catch((function(e){return console.log(e)}))}(j._id,i._id,d)}})})]})},he=function(e){var t=e.account,n=Math.round(100*(Number(null===t||void 0===t?void 0:t.balance)+Number.EPSILON))/100;return Object(T.jsxs)("div",{style:{textAlign:"center"},children:[Object(T.jsxs)("h2",{children:["Full Name: ",null===t||void 0===t?void 0:t.name]}),Object(T.jsxs)("h3",{children:["Email: ",null===t||void 0===t?void 0:t.email]}),Object(T.jsxs)("h3",{children:["Balance: $",n]})]})},be=n(26),pe=n.n(be),ve=function(e){var t=e.shipInfo,n=Object(M.a)(),r=n.register,c=n.handleSubmit,i=n.formState.errors,a=m.getUser(),o=c((function(e){var n={phone:e.phone?e.phone:t.phone,address:e.address?e.address:t.address,postalCode:e.postalCode?e.postalCode:t.postalCode,country:e.country?e.country:t.country,city:e.city?e.city:t.city,province:e.province?e.province:t.province};x.updateBilling(a._id,n).then((function(){return window.location.reload()})).catch((function(e){return console.log(e)}))}));return Object(T.jsx)("div",{className:pe.a.ShippingInfo,children:Object(T.jsxs)("div",{className:pe.a.ShippingForm,children:[Object(T.jsx)("h4",{children:"Shipping Information"}),Object(T.jsxs)("form",{children:[Object(T.jsx)(H,{register:r,inputValue:"phone",placeholder:"Enter Phone Number",label:"Phone",type:"text",minLength:10,maxLength:14,errors:i,defaultValue:null===t||void 0===t?void 0:t.phone}),Object(T.jsx)(H,{register:r,inputValue:"address",placeholder:"Enter Address for Billing/Shipping",label:"Address",type:"text",minLength:4,errors:i,defaultValue:null===t||void 0===t?void 0:t.address}),Object(T.jsx)(H,{register:r,inputValue:"postalCode",placeholder:"Enter Postal Code",label:"Postal Code",type:"text",minLength:5,maxLength:6,errors:i,defaultValue:null===t||void 0===t?void 0:t.postalCode}),Object(T.jsx)(H,{register:r,inputValue:"country",placeholder:"Enter Country",label:"Country",type:"text",minLength:4,errors:i,defaultValue:null===t||void 0===t?void 0:t.country}),Object(T.jsx)(H,{register:r,inputValue:"city",placeholder:"Enter City",label:"City",type:"text",minLength:3,errors:i,defaultValue:null===t||void 0===t?void 0:t.city}),Object(T.jsx)(H,{register:r,inputValue:"province",placeholder:"Enter Province/State",label:"Province/State",type:"text",minLength:3,errors:i,defaultValue:null===t||void 0===t?void 0:t.province})]}),Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(T.jsx)("button",{onClick:o,children:"Update Information"})})]})})},me=function(){var e=re(F).account,t=e,n=m.getUser();return Object(T.jsx)(T.Fragment,{children:n?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(te,{}),Object(T.jsxs)("div",{className:pe.a.ProfilePage,children:[Object(T.jsx)(he,{account:e}),Object(T.jsx)(ve,{shipInfo:null===t||void 0===t?void 0:t.shipping})]})]}):Object(T.jsx)(s.a,{to:"/"})})},Oe=n(11),xe=n.n(Oe),ge=function(e){var t=e.cart,n=Object(c.useState)(""),r=Object(R.a)(n,2),i=r[0],a=r[1],o=Object(c.useState)(null===t||void 0===t?void 0:t.quantity),s=Object(R.a)(o,2),l=s[0],d=s[1];return Object(T.jsx)(T.Fragment,{children:0!==(null===t||void 0===t?void 0:t.quantity)?Object(T.jsx)("div",{className:xe.a.CartItem,children:Object(T.jsxs)("div",{className:xe.a.ItemContainer,children:[Object(T.jsx)("img",{src:null===t||void 0===t?void 0:t.productImage,alt:"product"}),Object(T.jsxs)("div",{className:xe.a.InfoDiv,children:[Object(T.jsx)("h3",{children:null===t||void 0===t?void 0:t.productName}),Object(T.jsx)("h4",{children:null===t||void 0===t?void 0:t.productBrand}),Object(T.jsxs)("h4",{children:["Current Total: $",null===t||void 0===t?void 0:t.totalPrice]}),Object(T.jsxs)("h4",{children:["Current Quantity: ",null===t||void 0===t?void 0:t.quantity]})]}),Object(T.jsxs)("div",{className:xe.a.QuantityDiv,children:[Object(T.jsxs)("span",{children:[Object(T.jsx)("button",{onClick:function(){d(l-1)},disabled:0===l,children:"-"}),Object(T.jsx)("h3",{style:{display:"inline-block",margin:"0 0.5rem"},children:l}),Object(T.jsx)("button",{onClick:function(){d(l+1)},children:"+"})]}),Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"1rem"},children:Object(T.jsx)("button",{onClick:function(){f.updateProductInCart(Number(l),null===t||void 0===t?void 0:t._id,null===t||void 0===t?void 0:t.productId).then((function(){return window.location.reload()})).catch((function(e){var t,n;e.response.data.msg&&a(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.msg)}))},className:0===l?xe.a.RemoveBtn:xe.a.UpdateBtn,children:0===l?"Remove":"Update"})}),Object(T.jsx)("div",{style:{padding:"0 2.5rem",display:"flex",justifyContent:"center"},children:Object(T.jsx)(q,{message:i})})]})]})}):null})},fe=function(){var e=m.getUser(),t=re(P),n=t.cart,r=t.totalSum,i=Math.round(100*(Number(r)+Number.EPSILON))/100,a=Object(c.useState)(!1),o=Object(R.a)(a,2),l=o[0],d=o[1],u=Object(c.useState)(""),j=Object(R.a)(u,2),h=j[0],b=j[1],p=Object(s.g)();return Object(T.jsx)(T.Fragment,{children:e?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(te,{}),Object(T.jsxs)("div",{className:xe.a.CartPage,children:[Object(T.jsx)("h2",{children:"Your Cart"}),Object(T.jsx)("div",{className:xe.a.CartContainer,children:n&&n.length>0?n.map((function(e,t){return Object(T.jsx)(c.Fragment,{children:Object(T.jsx)(ge,{cart:e})},t)})):Object(T.jsx)("h3",{style:{textAlign:"center"},children:"Nothing Available in Cart"})}),n&&n.length>0&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("h2",{children:["Total Sum: $",i]}),Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"1rem 0 2rem 0"},children:l?Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{style:{textAlign:"center",marginTop:"0"},children:"Are you Sure?"}),Object(T.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(T.jsx)("button",{onClick:function(){d(!1),b("")},className:xe.a.RemoveBtn,style:{margin:"0 0.5rem"},children:"No"}),Object(T.jsx)("button",{onClick:function(){f.purchaseCart(e._id).then((function(){return p.push("/purchased")})).catch((function(e){var t,n;e.response.data.msg&&b(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.msg)}))},className:xe.a.UpdateBtn,style:{margin:"0 0.5rem"},children:"Yes"})]}),Object(T.jsx)("div",{children:Object(T.jsx)(q,{message:h})})]}):Object(T.jsx)("button",{onClick:function(){return d(!0)},className:xe.a.UpdateBtn,children:"Purchase"})})]})]})]}):Object(T.jsx)(s.a,{to:"/"})})};n(84);var ye=function(){var e=m.getUser(),t=Object(E.b)();return Object(c.useEffect)((function(){e&&(t(C()),t(_()),t(S()))}),[t,e]),Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)(s.d,{children:[Object(T.jsx)(s.b,{exact:!0,path:["/","/login"],component:J}),Object(T.jsx)(s.b,{exact:!0,path:"/redirect",component:W}),Object(T.jsx)(s.b,{exact:!0,path:"/products",component:se}),Object(T.jsx)(s.b,{exact:!0,path:"/products/:id",component:je}),Object(T.jsx)(s.b,{exact:!0,path:"/cart",component:fe}),Object(T.jsx)(s.b,{exact:!0,path:"/account",component:me}),Object(T.jsx)(s.b,{exact:!0,path:"/purchased",component:Y})]})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},_e=n(49);o.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(E.a,{store:ne,children:Object(T.jsx)(_e.a,{children:Object(T.jsx)(ye,{})})})}),document.getElementById("root")),Ce()}},[[85,1,2]]]);
//# sourceMappingURL=main.8d9e1b37.chunk.js.map