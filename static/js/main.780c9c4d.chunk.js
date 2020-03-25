(this["webpackJsonpReact-Redux-Saga"]=this["webpackJsonpReact-Redux-Saga"]||[]).push([[0],{39:function(e,t,a){e.exports=a(68)},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(17),c=a(15),o=a(13);const l={customerList:[],customerAddress:{}};var u=function(e=l,t){return"CUSTOMER_ADDRESS_LOADED"===t.type?(console.log("rootReducer",t.payload),Object.assign({},e,{customerAddress:t.payload})):"CUSTOMER_LIST_LOADED"===t.type?Object.assign({},e,{customerList:t.payload}):e},m=a(38),d=a(10),i=a.n(d),p=a(6),E=a(22),O=a.n(E),b=i.a.mark(h),v=i.a.mark(D),R=i.a.mark(j),S=i.a.mark(x),f=i.a.mark(_);function h(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)("GET_CUSTOMER_LIST",j);case 2:case"end":return e.stop()}}),b)}function D(e){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)("GET_CUSTOMER_ADDRESS",x);case 2:case"end":return e.stop()}}),v)}function j(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p.b)(A);case 3:return e=t.sent,t.next=6,Object(p.d)({type:"CUSTOMER_LIST_LOADED",payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(p.d)({type:"CUSTOMER_LIST_LOAD_ERROR",payload:t.t0});case 12:case"end":return t.stop()}}),R,null,[[0,8]])}function x(e){var t,a;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e&&e.payload?e.payload.selectedCustomer:-1,r.prev=1,r.next=4,Object(p.b)(g,t);case 4:return a=r.sent,r.next=7,Object(p.d)({type:"CUSTOMER_ADDRESS_LOADED",payload:a});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(p.d)({type:"CUSTOMER_ADDRESS_LOAD_ERROR",payload:r.t0});case 13:case"end":return r.stop()}}),S,null,[[1,9]])}function g(e){if(-1!==e)return O.a.get("assets/samplejson/customer"+e+".json").then(e=>e.data);throw new Error("CUSTOMER_INVALID_ID_ERROR")}function A(){return O.a.get("assets/samplejson/customerlist.json").then(e=>e.data)}function _(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.c)(h),Object(p.c)(D),Object(p.c)(j),Object(p.c)(x)]);case 2:case"end":return e.stop()}}),f)}const L=Object(m.a)(),y=Object(o.d)(u,Object(o.a)(L));L.run(_);var C=y;var T=function(e){let t=1,a=e.addressList.map(e=>(t+=1,n.a.createElement("li",{key:t+e.address},e.address,", ",e.city,", ",e.state,", ",e.country)));return n.a.createElement("ul",{className:"numbering"},a)};var w=Object(c.b)((function(e){return{customerAddressDetail:e.customerAddress}}))(({customerAddressDetail:e})=>e&&e.addressDetail?n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"header"},"Address"),n.a.createElement("div",{className:"title"},e.name),n.a.createElement("div",null,n.a.createElement(T,{addressList:e.addressDetail}))):n.a.createElement("div",null));class N extends r.Component{constructor(e){super(e)}componentDidMount(){this.props.getCustomerList()}render(){return console.log("customer.js",this.props.customerList),this.props.customerList.length?n.a.createElement("div",{className:"addmargin"},n.a.createElement("div",{className:"col-1"},this.props.customerList.map(e=>n.a.createElement("div",{className:"card",key:e.id+e.name,onClick:()=>this.props.getCustomerAddress({selectedCustomer:e.id})},n.a.createElement("div",{className:"header"},e.name),n.a.createElement("div",null,n.a.createElement("p",null,"Email: ",e.email,", mobile: ",e.phone,", Age: ",e.age,", Sex: ",e.sex," "))))),n.a.createElement("div",{className:"col-2"},n.a.createElement(w,null))):n.a.createElement("p",null,"Loading data")}}var k=Object(c.b)((function(e){return{customerList:e.customerList}}),{getCustomerList:function(){return{type:"GET_CUSTOMER_LIST"}},getCustomerAddress:function(e){return{type:"GET_CUSTOMER_ADDRESS",payload:e}}})(N),M=a(36),U=a(12);a(66);class I extends r.Component{render(){return n.a.createElement(M.a,{basename:"/React-Redux-Saga"},n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:"./assets/images/conviva.png",className:"App-logo",alt:"logo"}),n.a.createElement("h1",{className:"App-title"},"ConViva Customer Portal ")),n.a.createElement(U.d,null,n.a.createElement(U.b,{exact:!0,path:"/",render:()=>n.a.createElement(U.a,{to:"/customerlist"})}),n.a.createElement(U.b,{exact:!0,path:"/customerlist",component:k}))))}}var G=I;Object(s.render)(n.a.createElement(c.a,{store:C},n.a.createElement(G,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.780c9c4d.chunk.js.map