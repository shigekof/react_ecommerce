(this.webpackJsonpe_commerce=this.webpackJsonpe_commerce||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(14),c=n.n(r),i=n(7),s=n.n(i),o=n(13),u=n(10),l=n(71),j=new(n.n(l).a)("pk_test_37007ffcc15eca982502fea0a237777d96024e26fb571",!0),d=n(18),b=n(11),p=n(171),m=n(164),h=n(166),x=n(167),O=n(51),f=n(168),g=n(169),v=n(170),y=n(161),k=Object(y.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),C=n(2);var w=function(e){var t,n=e.product,a=e.onAddToCart,r=k();return Object(C.jsx)("div",{children:Object(C.jsxs)(m.a,{className:r.root,children:[Object(C.jsx)(h.a,{className:r.media,image:n.image.url,title:n.name}),Object(C.jsxs)(x.a,{children:[Object(C.jsx)(O.a,{variant:"subtitle1",gutterBottom:!0,children:n.name}),Object(C.jsx)(O.a,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:(t=n.description,null!==t&&""!==t&&(t=t.toString()).replace(/(<([^>]+)>)/gi,""))}),Object(C.jsxs)("div",{className:r.cardContent,children:[Object(C.jsx)(O.a,{variant:"h5",children:n.price.formatted_with_symbol}),Object(C.jsx)(f.a,{disableSpacing:!0,className:r.cardActions,children:Object(C.jsx)(g.a,{"aria-label":"Add to Cart",onClick:function(){return a(n.id,1)},children:Object(C.jsx)(v.a,{})})})]})]})]})})},S=Object(y.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),_=function(e){var t=e.products,n=e.onAddToCart,a=S();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(p.a,{container:!0,justifyContent:"center",spacing:4,children:t.map((function(e){return Object(C.jsx)(p.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(w,{product:e,onAddToCart:n})},e.id)}))})]})},N=n(172),T=n(173),B=n(174),E=n(175),q=n.p+"static/media/shopLogo.738ae8ae.png",L=n(9),R=n(17),A=Object(y.a)((function(e){return{appBar:Object(L.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(L.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(L.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(R.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(R.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(L.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),F=function(e){var t=e.totalItems,n=A(),a=Object(b.e)();return Object(C.jsx)("div",{children:Object(C.jsx)(N.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(C.jsxs)(T.a,{children:[Object(C.jsxs)(O.a,{component:d.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(C.jsx)("img",{src:q,alt:"React E-commerce Shop",height:"25px",className:n.img}),"React E-commerce Shop"]}),Object(C.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(g.a,{component:d.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(B.a,{badgeContent:t,color:"secondary",children:Object(C.jsx)(E.a,{})})})})]})})})},z=n(176),I=n(177),P=Object(y.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%",marginBottom:"5%",textAlign:"center"},emptyButton:(t={minWidth:"150px"},Object(L.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(L.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cartDetails:{display:"flex",marginTop:"10%",marginBottom:"5%",width:"100%",justifyContent:"space-between",textAlign:"right"}}})),W=Object(y.a)((function(){return{media:{height:160,width:"33%",margin:"auto"},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),D=function(e){var t=e.item,n=e.onUpdateCartQty,a=e.onRemoveFromCart,r=W();return Object(C.jsxs)(m.a,{children:[Object(C.jsx)(h.a,{image:t.image.url,alt:t.name,className:r.media}),Object(C.jsxs)(x.a,{className:r.cardContent,children:[Object(C.jsx)(O.a,{variant:"h6",children:t.name}),Object(C.jsx)(O.a,{variant:"h6",children:t.line_total.formatted_with_symbol})]}),Object(C.jsxs)(f.a,{className:r.cartActions,children:[Object(C.jsxs)("div",{className:r.buttons,children:[Object(C.jsx)(z.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity-1)},children:"-"}),Object(C.jsx)(O.a,{children:t.quantity}),Object(C.jsx)(z.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity+1)},children:"+"})]}),Object(C.jsx)(z.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(t.id)},children:"Remove"})]})]})},H=function(e){var t=e.cart,n=e.handleUpdateCartQty,a=e.handleRemoveFromCart,r=e.handleEmptyCart,c=P(),i=function(){return Object(C.jsxs)(O.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(C.jsx)(d.b,{to:"/",className:c.link,children:"start adding some"}),"!"]})},s=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{container:!0,spacing:3,children:t.line_items.map((function(e){return Object(C.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(D,{item:e,onUpdateCartQty:n,onRemoveFromCart:a})},e.id)}))}),Object(C.jsxs)("div",{className:c.cartDetails,children:[Object(C.jsxs)(O.a,{variant:"h4",children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(z.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(C.jsx)(z.a,{component:d.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return t.line_items?Object(C.jsxs)(I.a,{children:[Object(C.jsx)("div",{className:c.toolbar}),Object(C.jsx)(O.a,{className:c.title,variant:"h4",gutterBottom:!0,children:"Your Shopping Cart"}),t.line_items.length?Object(C.jsx)(s,{}):Object(C.jsx)(i,{})]}):"loading..."},Q=n(183),G=n(184),U=n(185),J=n(77),M=n(192),Y=n(186),Z=n(188),V=Object(y.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(L.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(L.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(L.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),K=n(31),X=n(191),$=n(187),ee=n(181),te=n(26),ne=n(189),ae=n(74),re=function(e){var t=e.name,n=e.label,a=e.error,r=e.rules,c=Object(te.e)(),i=c.control,s=c.formState.errors;return Object(C.jsxs)(p.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(te.a,{defaultValue:"",name:t,control:i,fullWidth:!0,rules:r,render:function(e){var t=Object.assign({},e.field);return Object(C.jsx)(ne.a,Object(K.a)(Object(K.a)({},t),{},{label:n,error:a}))}}),Object(C.jsx)(ae.a,{as:"p",errors:s,name:t,message:"".concat(n," is too long"),style:{color:"red"}})]})},ce=function(e){var t=e.checkoutToken,n=e.next,r=Object(a.useState)([]),c=Object(u.a)(r,2),i=c[0],l=c[1],b=Object(a.useState)(""),m=Object(u.a)(b,2),h=m[0],x=m[1],f=Object(a.useState)([]),g=Object(u.a)(f,2),v=g[0],y=g[1],k=Object(a.useState)(""),w=Object(u.a)(k,2),S=w[0],_=w[1],N=Object(a.useState)([]),T=Object(u.a)(N,2),B=T[0],E=T[1],q=Object(a.useState)(""),L=Object(u.a)(q,2),R=L[0],A=L[1],F=Object(te.d)(),I=Object.entries(i).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),P=Object.entries(v).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),W=B.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),D=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,l(a),x(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,y(a),_(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,j.checkout.getShippingOptions(t,{country:n,region:a});case 3:r=e.sent,E(r),A(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){D(t.id)}),[]),Object(a.useEffect)((function(){h&&H(h)}),[h]),Object(a.useEffect)((function(){v&&Q(t.id,h,S)}),[S]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(O.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(C.jsx)(te.b,Object(K.a)(Object(K.a)({},F),{},{children:Object(C.jsxs)("form",{onSubmit:F.handleSubmit((function(e){return n(Object(K.a)(Object(K.a)({},e),{},{shippingCountry:h,shippingSubdivision:S,shippingOption:R}))})),children:[Object(C.jsxs)(p.a,{container:!0,spacing:3,children:[Object(C.jsx)(re,{name:"firstName",label:"First name",rules:{required:"This field is required",maxLength:20},error:F.formState.errors.firstName}),Object(C.jsx)(re,{name:"lastName",label:"Last name",rules:{required:"This field is required",maxLength:20},error:F.formState.errors.lastName}),Object(C.jsx)(re,{name:"address1",label:"Address",rules:{required:"This field is required",maxLength:30},error:F.formState.errors.address1}),Object(C.jsx)(re,{name:"email",label:"Email",rules:{required:"This field is required",pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format"}},error:F.formState.errors.email}),Object(C.jsx)(re,{name:"city",label:"City",rules:{required:"This field is required",maxLength:15},error:F.formState.errors.city}),Object(C.jsx)(re,{name:"zip",label:"ZIP / Postal code",rules:{required:"This field is required",maxLength:10},error:F.formState.errors.zip}),Object(C.jsxs)(p.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(X.a,{children:"Shipping Country"}),Object(C.jsx)($.a,{value:h,fullWidth:!0,onChange:function(e){return x(e.target.value)},children:I.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(p.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(X.a,{children:"Shipping Subdivision"}),Object(C.jsx)($.a,{value:S,fullWidth:!0,onChange:function(e){return _(e.target.value)},children:P.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(p.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(X.a,{children:"Shipping Option"}),Object(C.jsx)($.a,{value:R,fullWidth:!0,onChange:function(e){return A(e.target.value)},children:W.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(z.a,{component:d.b,to:"/cart",variant:"outlined",children:"Back to Cart"}),Object(C.jsx)(z.a,{type:"submit",variant:"contained",children:"Next"})]})]})}))]})},ie=n(46),se=n(75),oe=n(180),ue=n(131),le=n(182),je=function(e){var t=e.checkoutToken;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(O.a,{variant:"h6",gutterBottom:!0,children:"Order summery"}),Object(C.jsxs)(oe.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(C.jsxs)(ue.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(le.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(C.jsx)(O.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(C.jsxs)(ue.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(le.a,{primary:"Total"}),Object(C.jsx)(O.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},de=Object(se.a)("pk_test_4ABWaf4iCZPH6LlkzzDf3z0T"),be=function(e){var t=e.checkoutToken,n=e.shippingData,a=e.backStep,r=e.onCaptureCheckout,c=e.nextStep,i=e.timeout,u=e.onHandleEmptyCart,l=function(){var e=Object(o.a)(s.a.mark((function e(a,o,l){var j,d,b,p,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l&&o){e.next=3;break}return e.abrupt("return");case 3:return j=o.getElement(ie.CardElement),e.next=6,l.createPaymentMethod({type:"card",card:j});case 6:d=e.sent,b=d.error,p=d.paymentMethod,b?console.log(b):(m={line_items:t.live.line_item,customer:{firstname:n.firstName,lastname:n.lastName,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,county_state:n.shippingSubdivision,potal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:p.id}}},r(t.id,m),u(),i(),c());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(je,{checkoutToken:t}),Object(C.jsx)(Q.a,{}),Object(C.jsx)(O.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(C.jsx)(ie.Elements,{stripe:de,children:Object(C.jsx)(ie.ElementsConsumer,{children:function(e){var n=e.elements,r=e.stripe;return Object(C.jsxs)("form",{onSubmit:function(e){return l(e,n,r)},children:[Object(C.jsx)(ie.CardElement,{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(z.a,{variant:"outlined",onClick:a,children:"Back"}),Object(C.jsxs)(z.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},pe=["Shipping address","Payment details"],me=function(e){var t=e.cart,n=e.order,r=e.onCaptureCheckout,c=e.error,i=e.onHandleEmptyCart,l=Object(a.useState)(0),p=Object(u.a)(l,2),m=p[0],h=p[1],x=Object(a.useState)(null),f=Object(u.a)(x,2),g=f[0],v=f[1],y=Object(a.useState)({}),k=Object(u.a)(y,2),w=k[0],S=k[1],_=Object(a.useState)(!1),N=Object(u.a)(_,2),T=N[0],B=N[1],E=V(),q=Object(b.f)();Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,v(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m!==pe.length&&q("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var L=function(){return h((function(e){return e+1}))},R=function(){return h((function(e){return e-1}))},A=function(e){S(e),L()},F=function(){setTimeout((function(){B(!0)}),3e3)},I=function(){return n.customer?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(O.a,{variant:"h5",children:["Thank you for your purchase ",n.cutomer.firstname," ",n.cutomer.lastname]}),Object(C.jsx)(Q.a,{className:E.divider}),Object(C.jsxs)(O.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(C.jsx)("br",{}),Object(C.jsx)(z.a,{component:d.b,to:"/",variant:"outlined",type:"button",children:"Back to home"})]}):T?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{children:Object(C.jsx)(O.a,{variant:"h5",children:"Thank you for your purchase."})}),Object(C.jsx)("br",{}),Object(C.jsx)(z.a,{component:d.b,to:"/",variant:"outlined",type:"button",children:"Back to home"})]}):Object(C.jsx)("div",{className:E.spinner,children:Object(C.jsx)(G.a,{})})};c&&(C.Fragment,O.a,z.a,d.b);var P=function(){return 0===m?Object(C.jsx)(ce,{checkoutToken:g,next:A}):Object(C.jsx)(be,{shippingData:w,checkoutToken:g,backStep:R,nextStep:L,onCaptureCheckout:r,timeout:F,onHandleEmptyCart:i})};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(U.a,{}),Object(C.jsx)("div",{className:E.toolbar}),Object(C.jsx)("main",{className:E.layout,children:Object(C.jsxs)(J.a,{className:E.paper,children:[Object(C.jsx)(O.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)(M.a,{activeStep:m,className:E.stepper,children:pe.map((function(e){return Object(C.jsx)(Y.a,{children:Object(C.jsx)(Z.a,{children:e})},e)}))}),m===pe.length?Object(C.jsx)(I,{}):g&&Object(C.jsx)(P,{})]})})]})},he=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),i=Object(u.a)(c,2),l=i[0],p=i[1],m=Object(a.useState)({}),h=Object(u.a)(m,2),x=h[0],O=h[1],f=Object(a.useState)(""),g=Object(u.a)(f,2),v=g[0],y=g[1],k=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.products.list();case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,j.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.add(t,n);case 2:a=e.sent,r=a.cart,p(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.update(t,{quantity:n});case 2:a=e.sent,r=a.cart,p(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.remove(t);case 2:n=e.sent,a=n.cart,p(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.empty();case 2:t=e.sent,n=t.cart,p(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.refresh();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.checkout.capture(t,n);case 3:a=e.sent,O(a),E(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(),w()}),[]),Object(C.jsx)(d.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(F,{totalItems:l.total_items}),Object(C.jsxs)(b.c,{children:[Object(C.jsx)(b.a,{path:"/",element:Object(C.jsx)(_,{products:n,onAddToCart:S})}),Object(C.jsx)(b.a,{path:"/cart",element:Object(C.jsx)(H,{cart:l,handleUpdateCartQty:N,handleRemoveFromCart:T,handleEmptyCart:B})}),Object(C.jsx)(b.a,{path:"/checkout",element:Object(C.jsx)(me,{cart:l,order:x,onCaptureCheckout:q,error:v,onHandleEmptyCart:B})})]})]})})};c.a.render(Object(C.jsx)(he,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.8c4ccaab.chunk.js.map