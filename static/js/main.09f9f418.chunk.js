(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(177)},113:function(e,t,n){},115:function(e,t,n){},121:function(e,t){},161:function(e,t){},169:function(e,t){},175:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),c=n(90),u=n.n(c),s=(n(113),n(58)),i=n(3),l=(n(115),n(91)),o=n.n(l),p=n(0),m=n.n(p),f=n(10),b=n(16),g=function(e){var t=e.ipfsURI;return t.startsWith("https")?t:"https://nftstorage.link/ipfs/"+t.replace("ipfs://","")},d=function(){var e=Object(i.e)().search,t=Object(a.useMemo)(function(){return new URLSearchParams(e)},[e]);return{tradeID:parseInt(t.get("tradeID")),poster:t.get("poster"),itemID:parseInt(t.get("itemID")),price:parseInt(t.get("price"))}},w=n(28),v=Object(w.a)(function(){var e=d().itemID,t=Object(a.useState)(null),n=Object(b.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(),s=Object(b.a)(u,2),i=s[0],l=s[1];return{metadata:i,fetchMetadata:Object(a.useCallback)(function(){var t=Object(f.a)(m.a.mark(function t(n){var a,r,u;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c(null),e){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,n.tokenURI(e);case 6:return r=t.sent,t.next=9,fetch(g({ipfsURI:r}));case 9:if(!(u=t.sent).ok){t.next=18;break}return t.t0=l,t.next=14,u.json();case 14:t.t1=t.sent,(0,t.t0)(t.t1),t.next=23;break;case 18:return t.t2=Error,t.next=21,u.text();case 21:return t.t3=t.sent,t.abrupt("return",(0,t.t2)(t.t3));case 23:t.next=31;break;case 25:return t.prev=25,t.t4=t.catch(3),console.log("err",t.t4),a=t.t4,c(a.message),t.abrupt("return",a);case 31:return t.abrupt("return");case 32:case"end":return t.stop()}},t,null,[[3,25]])}));return function(e){return t.apply(this,arguments)}}(),[e]),error:r}}),C=n(105),O="0x9967152563b08006413FB04eCa485D27c445afD2",E=["function tradeIdCounter() view returns (uint256)","function openTrade(uint256 _itemId, uint256 _price)","function executeTrade(uint256 _tradeId) payable","function cancelTrade(uint256 _tradeId)"],j=["function approve(address to, uint256 tokenId)","function getApproved(uint256 tokenId) view returns (address operator)","function tokenURI(uint256 tokenId) public view returns (string memory)","function ownerOf(uint256 tokenId) public view returns (address)"],k=Object(w.a)(function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),u=Object(b.a)(c,2),s=u[0],i=u[1],l=Object(a.useCallback)(Object(f.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new C.a({rpc:{80001:"https://polygon-mumbai.infura.io/v3/1622077723654f928aaae17148265be5"},infuraId:"1622077723654f928aaae17148265be5"}),e.next=3,t.enable();case 3:return i(t),e.abrupt("return",t);case 5:case"end":return e.stop()}},e)})),[]),o=Object(a.useCallback)(function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getNetwork();case 2:return n=e.sent,e.abrupt("return",80001==n.chainId);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),p=Object(a.useCallback)(function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_requestAccounts"});case 2:n=e.sent,r(n[0]);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[r]);return{currentUserAddress:n,wcProvider:s,setWCProvider:i,setupWCProvider:l,checkNetworkIsCorrect:o,getCurrentUser:p}}),x=n(31),S=Object(w.a)(function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),u=Object(b.a)(c,2),s=u[0],i=u[1];return{marketContract:n,tokenContract:s,linkMarketContract:Object(a.useCallback)(function(e){try{var t=e.getSigner(),n=new x.a.Contract(O,E,e);r(n.connect(t))}catch(a){throw a}},[r]),linkTokenContract:Object(a.useCallback)(function(e){try{var t=e.getSigner(),n=new x.a.Contract("0xF97Bd91B2399d4b45232717f1288C0f1dC9eEe09",j,e).connect(t);return i(n),n}catch(a){throw a}},[i])}}),h=Object(w.a)(function(){var e=Object(a.useState)("setupProvider"),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),u=Object(b.a)(c,2),s=u[0],i=u[1],l=Object(a.useState)(),o=Object(b.a)(l,2),p=o[0],m=o[1],f=Object(a.useState)(),g=Object(b.a)(f,2),d=g[0],w=g[1],v=Object(a.useState)(),C=Object(b.a)(v,2);return{preparingState:n,setPreparingState:r,userType:s,setUserType:i,sellingState:p,setSellingState:m,buyingState:d,setBuyingState:w,cancelingState:C[0],setCancelingState:C[1]}}),I=n(12),y=Object(w.a)(function(){var e=d(),t=e.poster,n=e.itemID,r=h.useContainer(),c=r.buyingState,u=r.sellingState,s=S.useContainer().tokenContract,i=Object(a.useState)(),l=Object(b.a)(i,2),o=l[0],p=l[1];return{itemOwnerAddress:o,resolveCurrentOwner:Object(a.useCallback)(Object(f.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s&&n){e.next=2;break}return e.abrupt("return");case 2:return a="",e.prev=3,e.next=6,s.ownerOf(n);case 6:a=e.sent,p(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("err",e.t0);case 13:a.toUpperCase()==O.toUpperCase()&&void 0!=c&&p(t),a.toUpperCase()==O.toUpperCase()&&void 0!=u&&p("Cubifox Market (".concat(O,")"));case 15:case"end":return e.stop()}},e,null,[[3,10]])})),[n,s,u,c])}}),U=n(181),T=n(104),A=n(62),P=n(179),D={ja:{wcp:A},en:{wcp:A}};T.a.use(P.e).init({lng:"ja",ns:["wcp"],interpolation:{escapeValue:!1},resources:D,debug:!1});var B=function(e){var t=e.buyingState,n=e.sellingState,c=e.cancelingState,u=e.itemBelongsCurrentUser,s=Object(U.a)(["wcp"]).t,i=d().price,l=k.useContainer().currentUserAddress,o=v.useContainer().metadata,p=y.useContainer(),b=p.itemOwnerAddress,w=p.resolveCurrentOwner;return Object(a.useEffect)(function(){Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:case"end":return e.stop()}},e)}))()},[t,n,c,b]),o?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,s("wcp:itemInfo:yourAddress")),r.a.createElement("td",null,l)),r.a.createElement("tr",null,r.a.createElement("th",null,s("wcp:itemInfo:itemName")),r.a.createElement("td",null,o.name)),r.a.createElement("tr",null,r.a.createElement("th",null,s("wcp:itemInfo:itemDescription")),r.a.createElement("td",null,o.description)),r.a.createElement("tr",null,r.a.createElement("th",null,s("wcp:itemInfo:itemImage")),r.a.createElement("td",null,r.a.createElement("img",{style:{maxWidth:"50vw"},src:g({ipfsURI:o.image})}))),r.a.createElement("tr",null,r.a.createElement("th",null,s("wcp:itemInfo:currentOwner")),r.a.createElement("td",null,b)),i&&!u?r.a.createElement("tr",null,r.a.createElement("th",null,s("wcp:itemInfo:price")),r.a.createElement("td",null,i," Wei MATIC")):r.a.createElement(r.a.Fragment,null))):null},M=n(50),F=function(e){var t=e.itemBelongsCurrentUser,n=Object(U.a)(["wcp"]).t,c=d(),u=c.tradeID,s=c.price,i=h.useContainer(),l=i.setBuyingState,o=i.buyingState,p=S.useContainer().marketContract,b=Object(a.useCallback)(function(){var e=Object(f.a)(m.a.mark(function e(t){var n,a,r,c,u;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.tradeID,a=t.price,l("executing"),e.prev=2,r=x.a.utils.parseUnits(a.toString(),"wei"),console.log("price: ",r),e.next=7,p.executeTrade(n,{value:r});case 7:return c=e.sent,e.next=10,c.wait();case 10:1==(u=e.sent).status?l("success"):(console.log("failure [result]:",u),l("failure")),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),l("failure");case 18:case"end":return e.stop()}},e,null,[[2,14]])}));return function(t){return e.apply(this,arguments)}}(),[]);return t||"success"==o?null:"executing"==o?r.a.createElement("p",{className:"message"},n("wcp:buyer:action:message:executing")):"failure"==o?r.a.createElement("p",{className:"message"},n("wcp:buyer:action:message:failure")):r.a.createElement("button",{onClick:function(){return b(Object(M.a)({},{tradeID:u,price:s}))}},n("wcp:buyer:action:button:buy"))},N=function(){var e=Object(U.a)(["wcp"]).t,t=h.useContainer(),n=t.buyingState,c=t.setBuyingState,u=y.useContainer().itemOwnerAddress,s=k.useContainer().currentUserAddress,i=Object(a.useState)(!1),l=Object(b.a)(i,2),o=l[0],p=l[1];return Object(a.useEffect)(function(){c("init")},[]),Object(a.useEffect)(function(){s&&u&&s.toUpperCase()==u.toUpperCase()&&p(!0)},[u,s]),r.a.createElement(r.a.Fragment,null,o?r.a.createElement("p",null,e("wcp:buyer:successTitle")):r.a.createElement("p",null,e("wcp:buyer:title")),r.a.createElement(B,{buyingState:n,itemBelongsCurrentUser:o}),r.a.createElement(F,{itemBelongsCurrentUser:o}))},W=function(){var e=Object(U.a)(["wcp"]).t,t=d().itemID,n=S.useContainer().tokenContract,c=h.useContainer().setSellingState,u=Object(a.useCallback)(function(){var e=Object(f.a)(m.a.mark(function e(t){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.itemID,c("givingPermission"),e.prev=2,e.next=5,n.approve(O,a);case 5:return r=e.sent,e.next=8,r.wait();case 8:1==e.sent.status?c("permitted"):c("failure"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[2,12]])}));return function(t){return e.apply(this,arguments)}}(),[n]);return r.a.createElement("button",{onClick:function(){return u({itemID:t})}},e("wcp:seller:action:button:approve"))},R=function(e){var t=e.price,n=e.unit,a=e.setPrice,c=e.setUnit,u=Object(U.a)(["wcp"]).t;return r.a.createElement("span",null,r.a.createElement("label",null,u("wcp:seller:action:label:price")),r.a.createElement("input",{type:"number",min:"0",value:t,onChange:function(e){a(parseInt(e.target.value))}}),r.a.createElement("select",{value:n,onChange:function(e){c(e.target.value)}},r.a.createElement("option",{value:"weiMatic"},"wei MATIC"),r.a.createElement("option",{value:"gweiMatic"},"gwei MATIC"),r.a.createElement("option",{value:"matic"},"MATIC")))},_=function(e){var t=e.price,n=e.unit;return"weiMatic"==n?BigInt(t):"gweiMatic"==n?BigInt(t*Math.pow(10,9)):BigInt(t*Math.pow(10,18))},L=function(e){var t=e.price,n=e.unit,c=Object(U.a)(["wcp"]).t,u=d().itemID,s=S.useContainer().marketContract,i=h.useContainer().setSellingState,l=Object(a.useCallback)(Object(f.a)(m.a.mark(function e(){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i("executing"),a=x.a.utils.parseUnits(_({price:t,unit:n}).toString(),"wei"),e.next=5,s.openTrade(u,a);case 5:return r=e.sent,e.next=8,r.wait();case 8:1==e.sent.status?i("success"):i("failure"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),i("failure");case 16:case"end":return e.stop()}},e,null,[[0,12]])})),[s,t]);return t>=0?r.a.createElement("button",{onClick:l},c("wcp:seller:action:button:sell")):r.a.createElement("button",{disabled:!0},c("wcp:seller:action:button:sell"))},q=function(e){var t=e.itemBelongsCurrentUser,n=Object(U.a)(["wcp"]).t,c=Object(a.useState)(0),u=Object(b.a)(c,2),s=u[0],i=u[1],l=Object(a.useState)("weiMatic"),o=Object(b.a)(l,2),p=o[0],m=o[1],f=h.useContainer().sellingState;return t&&"success"!=f?"init"==f?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"description"},n("wcp:seller:action:message:description")),r.a.createElement(W,null)):"givingPermission"==f||"executing"==f?r.a.createElement("p",{className:"message"},n("wcp:seller:action:message:executing")):"permitted"==f?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{price:s,unit:p,setPrice:i,setUnit:m}),r.a.createElement(L,{price:s,unit:p})):"failure"==f?r.a.createElement("p",{className:"message"},n("wcp:seller:action:message:failure")):null:null},J=function(){var e=Object(U.a)(["wcp"]).t,t=d().itemID,n=S.useContainer().tokenContract,c=h.useContainer(),u=c.sellingState,s=c.setSellingState,i=y.useContainer(),l=i.itemOwnerAddress,o=i.resolveCurrentOwner,p=k.useContainer().currentUserAddress;Object(a.useEffect)(function(){s("init")},[]),Object(a.useEffect)(function(){"success"!=u&&"init"!=u||Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o();case 1:case"end":return e.stop()}},e)}))()},[u]),Object(a.useEffect)(function(){if(n&&"givingPermission"==u){var e=setInterval(Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getApproved(t);case 3:e.sent==O&&s("permitted"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),3e3);return function(){clearInterval(e)}}},[n,u]);var b=Object(a.useCallback)(function(){return!(!p||!l)&&p.toUpperCase()===l.toUpperCase()},[p,l]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,b()?e("wcp:seller:title"):l&&l.includes(O)?e("wcp:seller:successTitle"):l!=p?e("wcp:seller:wrongAccountTitle"):""),r.a.createElement(B,{sellingState:u}),r.a.createElement(q,{itemBelongsCurrentUser:b()}))},V=(n(175),function(e){var t=e.itemBelongsCurrentUser,n=Object(U.a)(["wcp"]).t,c=d(),u=c.tradeID,s=c.poster,i=k.useContainer().currentUserAddress,l=h.useContainer(),o=l.setCancelingState,p=l.cancelingState,b=S.useContainer().marketContract,g=Object(a.useCallback)(function(){var e=Object(f.a)(m.a.mark(function e(t){var n,a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.tradeID,o("executing"),e.prev=2,e.next=5,b.cancelTrade(n);case 5:return a=e.sent,e.next=8,a.wait();case 8:1==(r=e.sent).status?o("success"):(console.log("failure [result]:",r),o("failure")),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),o("failure");case 16:case"end":return e.stop()}},e,null,[[2,12]])}));return function(t){return e.apply(this,arguments)}}(),[]);return s==i||t?t||"success"==p?null:"executing"==p?r.a.createElement("p",{className:"message"},n("wcp:canceler:action:message:executing")):"failure"==p?r.a.createElement("p",{className:"message"},n("wcp:canceler:action:message:failure")):r.a.createElement("button",{onClick:function(){return g(Object(M.a)({},{tradeID:u}))}},n("wcp:canceler:action:button:cancel")):r.a.createElement("p",{className:"message"},n("wcp:canceler:action:message:wrongAccount"))}),z=function(){var e=Object(U.a)(["wcp"]).t,t=h.useContainer(),n=t.cancelingState,c=t.setCancelingState,u=y.useContainer().itemOwnerAddress,s=k.useContainer().currentUserAddress,i=Object(a.useState)(!1),l=Object(b.a)(i,2),o=l[0],p=l[1];return Object(a.useEffect)(function(){c("init")},[]),Object(a.useEffect)(function(){s&&u&&s.toUpperCase()==u.toUpperCase()&&p(!0)},[u,s]),r.a.createElement(r.a.Fragment,null,o?r.a.createElement("p",null,e("wcp:canceler:successTitle")):r.a.createElement("p",null,e("wcp:canceler:title")),r.a.createElement(B,{cancelingState:n,itemBelongsCurrentUser:o}),r.a.createElement(V,{itemBelongsCurrentUser:o}))},G=function(){var e=Object(U.a)(["wcp"]).t,t=d(),n=t.tradeID,c=t.price,u=h.useContainer(),s=u.userType,i=u.setUserType,l=u.preparingState,o=u.buyingState,p=u.sellingState,b=u.cancelingState,g=u.setPreparingState,w=k.useContainer(),C=w.wcProvider,O=w.setWCProvider,E=w.setupWCProvider,j=w.getCurrentUser,x=S.useContainer(),y=x.linkMarketContract,T=x.linkTokenContract,A=x.tokenContract,P=v.useContainer(),D=P.fetchMetadata,B=P.metadata;Object(a.useEffect)(function(){console.log({wcProvider:C,preparingState:l,buyingState:o,sellingState:p,cancelingState:b,metadata:B})},[C,l,o,p,b]),Object(a.useEffect)(function(){C||(g("setupProvider"),Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:case"end":return e.stop()}},e)}))())},[C]),Object(a.useEffect)(function(){if(C){j(C);var e=new I.providers.Web3Provider(C);Object(f.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCode("0xF97Bd91B2399d4b45232717f1288C0f1dC9eEe09");case 2:if(t.t0=t.sent,"0x"!=t.t0){t.next=5;break}window.location.reload();case 5:case"end":return t.stop()}},t)}))(),y(e),T(e)}},[C]),Object(a.useEffect)(function(){A&&!B&&(g("gettingMetadata"),D(A).then(function(e){e||g("ready")}))},[A]),Object(a.useEffect)(function(){i(n?c?"buyer":"canceler":"seller")},[n]);var M=Object(a.useCallback)(Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,C.disconnect();case 4:window.localStorage.removeItem("walletconnect"),O(void 0);case 6:case"end":return e.stop()}},e)})),[C]);return C?"ready"!=l?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:M},e("wcp:preparing:disconnect")),"buyer"==s&&r.a.createElement(N,null),"seller"==s&&r.a.createElement(J,null),"canceler"==s&&r.a.createElement(z,null)):r.a.createElement("h2",null,e("wcp:preparing:needWindowReload"))};var H=function(){return r.a.createElement(s.a,null,r.a.createElement(h.Provider,null,r.a.createElement(k.Provider,null,r.a.createElement(S.Provider,null,r.a.createElement(v.Provider,null,r.a.createElement(y.Provider,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(G,null)}))))))))))},K=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,180)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),c(e),u(e)})};u.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null))),K()},62:function(e){e.exports={preparing:{disconnect:"\u30a6\u30a9\u30ec\u30c3\u30c8\u63a5\u7d9a\u89e3\u9664",needWindowReload:"\u753b\u9762\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044"},seller:{title:"NFT\u3092\u58f2\u5374",successTitle:"\u3053\u306e\u5546\u54c1\u306f\u51fa\u54c1\u6e08\u3067\u3059",wrongAccountTitle:"\u3053\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u30a2\u30a4\u30c6\u30e0\u306e\u6240\u6709\u8005\u3067\u306f\u3042\u308a\u307e\u305b\u3093",action:{label:{price:"\u4fa1\u683c"},message:{description:"CubifoxMarket\u306f\u3001\u3042\u306a\u305f\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u4fdd\u7ba1\u3059\u308b\u8a31\u53ef\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u3002\u5546\u54c1\u304c\u58f2\u308c\u308b\u307e\u3067\u306f\u3044\u3064\u3067\u3082\u51fa\u54c1\u3092\u53d6\u308a\u6d88\u3059\u3053\u3068\u304c\u3067\u304d\u3001\u305d\u306e\u5834\u5408\u30a2\u30a4\u30c6\u30e0\u306f\u8fd4\u5374\u3055\u308c\u307e\u3059\u3002",executing:"\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f\u3002\u30a6\u30a9\u30ec\u30c3\u30c8\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u3001\u53d6\u5f15\u3092\u627f\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u53d6\u5f15\u5b8c\u4e86\u307e\u3067\u6570\u6642\u9593\u307b\u3069\u304b\u304b\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",failure:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u3066\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044"},button:{approve:"\u8a31\u53ef\u3059\u308b",sell:"\u58f2\u5374\u3059\u308b"}}},buyer:{title:"NFT\u3092\u8cfc\u5165",successTitle:"\u3053\u306e\u30a2\u30a4\u30c6\u30e0\u306f\u3042\u306a\u305f\u306e\u3082\u306e\u3067\u3059",action:{message:{executing:"\u30a2\u30a4\u30c6\u30e0\u8cfc\u5165\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f\u3002\u30a6\u30a9\u30ec\u30c3\u30c8\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u3001\u53d6\u5f15\u3092\u627f\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u53d6\u5f15\u306e\u5b8c\u4e86\u306b\u306f\u6570\u6642\u9593\u304b\u304b\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",failure:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u3066\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044"},button:{buy:"\u8cfc\u5165\u3059\u308b"}}},canceler:{title:"NFT\u306e\u58f2\u5374\u30ad\u30e3\u30f3\u30bb\u30eb",successTitle:"\u58f2\u5374\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f",action:{message:{wrongAccount:"\u3053\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u30a2\u30a4\u30c6\u30e0\u306e\u6240\u6709\u8005\u3067\u306f\u3042\u308a\u307e\u305b\u3093",executing:"\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f\u3002\u30a6\u30a9\u30ec\u30c3\u30c8\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u3001\u53d6\u5f15\u3092\u627f\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u53d6\u5f15\u5b8c\u4e86\u307e\u3067\u6570\u6642\u9593\u307b\u3069\u304b\u304b\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",failure:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u3066\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044"},button:{cancel:"\u58f2\u5374\u30ad\u30e3\u30f3\u30bb\u30eb"}}},itemInfo:{yourAddress:"\u3042\u306a\u305f\u306e\u30a2\u30c9\u30ec\u30b9",itemName:"\u30a2\u30a4\u30c6\u30e0\u540d",itemDescription:"\u30a2\u30a4\u30c6\u30e0\u306e\u8a73\u7d30",itemImage:"3D\u30a4\u30e1\u30fc\u30b8\u753b\u50cf",currentOwner:"\u73fe\u5728\u306e\u6240\u6709\u8005",price:"\u4fa1\u683c"}}},91:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"}},[[106,3,2]]]);
//# sourceMappingURL=main.09f9f418.chunk.js.map