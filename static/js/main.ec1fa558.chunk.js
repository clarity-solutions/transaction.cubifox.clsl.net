(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){},114:function(e,t){},154:function(e,t){},162:function(e,t){},163:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),c=n(86),u=n.n(c),s=(n(106),n(55)),i=n(4),l=(n(108),n(87)),o=n.n(l),p=n(1),m=n.n(p),f=n(11),b=n(16),d=function(e){var t=e.ipfsURI;return t.startsWith("https")?t:"https://nftstorage.link/ipfs/"+t.replace("ipfs://","")},v=function(){var e=Object(i.e)().search,t=Object(r.useMemo)(function(){return new URLSearchParams(e)},[e]);return{tradeID:parseInt(t.get("tradeID")),poster:t.get("poster"),itemID:parseInt(t.get("itemID")),price:parseInt(t.get("price"))}},g=n(27),C=Object(g.a)(function(){var e=v().itemID,t=Object(r.useState)("init"),n=Object(b.a)(t,2),a=n[0],c=n[1],u=Object(r.useState)(null),s=Object(b.a)(u,2),i=s[0],l=s[1],o=Object(r.useState)(),p=Object(b.a)(o,2),g=p[0],C=p[1];return{metadata:g,fetchMetadata:Object(r.useCallback)(function(){var t=Object(f.a)(m.a.mark(function t(n){var r,a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l(null),c("requesting"),t.prev=2,t.next=5,n.tokenURI(e);case 5:return r=t.sent,t.next=8,fetch(d({ipfsURI:r}));case 8:if(!(a=t.sent).ok){t.next=17;break}return t.t0=C,t.next=13,a.json();case 13:t.t1=t.sent,(0,t.t0)(t.t1),t.next=22;break;case 17:return t.t2=l,t.next=20,a.text();case 20:t.t3=t.sent,(0,t.t2)(t.t3);case 22:t.next=28;break;case 24:t.prev=24,t.t4=t.catch(2),console.log("err",t.t4),l(t.t4.message);case 28:return t.prev=28,c("done"),t.finish(28);case 31:case"end":return t.stop()}},t,null,[[2,24,28,31]])}));return function(e){return t.apply(this,arguments)}}(),[e]),status:a,error:i}}),E=n(98),w="0xa55E0A9F4DB29c03EfAb9D063B03309b73Cf32AA",O=["function tradeIdCounter() view returns (uint256)","function openTrade(uint256 _itemId, uint256 _price)","function executeTrade(uint256 _tradeId) payable"],h=["function approve(address to, uint256 tokenId)","function getApproved(uint256 tokenId) view returns (address operator)","function tokenURI(uint256 tokenId) public view returns (string memory)","function ownerOf(uint256 tokenId) public view returns (address)"],j=Object(g.a)(function(){var e=Object(r.useState)(),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),u=Object(b.a)(c,2),s=u[0],i=u[1],l=Object(r.useCallback)(Object(f.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new E.a({rpc:{80001:"https://polygon-mumbai.infura.io/v3/1622077723654f928aaae17148265be5"}}),e.next=3,t.enable();case 3:return i(t),e.abrupt("return",s);case 5:case"end":return e.stop()}},e)})),[]),o=Object(r.useCallback)(function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getNetwork();case 2:return n=e.sent,e.abrupt("return",80001==n.chainId);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),p=Object(r.useCallback)(function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_requestAccounts"});case 2:n=e.sent,a(n[0]);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[a]);return{currentUserAddress:n,wcProvider:s,setWCProvider:i,setupWCProvider:l,checkNetworkIsCorrect:o,getCurrentUser:p}}),k=n(30),S=Object(g.a)(function(){var e=Object(r.useState)(),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),u=Object(b.a)(c,2),s=u[0],i=u[1];return{marketContract:n,tokenContract:s,linkMarketContract:Object(r.useCallback)(function(e){try{var t=e.getSigner(),n=new k.a.Contract(w,O,e);a(n.connect(t))}catch(r){throw r}},[a]),linkTokenContract:Object(r.useCallback)(function(e){try{var t=e.getSigner(),n=new k.a.Contract("0x9967a309fce3De66A70704431338a3d086509732",h,e).connect(t);return i(n),n}catch(r){throw r}},[i])}}),x=Object(g.a)(function(){var e=Object(r.useState)("setupProvider"),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),u=Object(b.a)(c,2),s=u[0],i=u[1],l=Object(r.useState)(),o=Object(b.a)(l,2),p=o[0],m=o[1],f=Object(r.useState)(),d=Object(b.a)(f,2);return{preparingState:n,setPreparingState:a,userType:s,setUserType:i,sellingState:p,setSellingState:m,buyingState:d[0],setBuyingState:d[1]}}),I=n(12),y=Object(g.a)(function(){var e=v(),t=e.poster,n=e.itemID,a=x.useContainer(),c=a.buyingState,u=a.sellingState,s=S.useContainer().tokenContract,i=Object(r.useState)(),l=Object(b.a)(i,2),o=l[0],p=l[1];return{itemOwnerAddress:o,resolveCurrentOwner:Object(r.useCallback)(Object(f.a)(m.a.mark(function e(){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:return r="",e.prev=3,e.next=6,s.ownerOf(n);case 6:r=e.sent,p(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("err",e.t0);case 13:r.toUpperCase()==w.toUpperCase()&&void 0!=c&&p(t),r.toUpperCase()==w.toUpperCase()&&void 0!=u&&p("Cubifox Market (".concat(w,")"));case 15:case"end":return e.stop()}},e,null,[[3,10]])})),[n,s,u,c])}}),U=function(e){var t=e.buyingState,n=e.sellingState,c=e.itemBelongsCurrentUser,u=v().price,s=j.useContainer().currentUserAddress,i=C.useContainer().metadata,l=y.useContainer(),o=l.itemOwnerAddress,p=l.resolveCurrentOwner;return Object(r.useEffect)(function(){Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:case"end":return e.stop()}},e)}))()},[t,n,o]),i?a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Your Address"),a.a.createElement("td",null,s)),a.a.createElement("tr",null,a.a.createElement("th",null,"Item Name"),a.a.createElement("td",null,i.name)),a.a.createElement("tr",null,a.a.createElement("th",null,"Item Description"),a.a.createElement("td",null,i.description)),a.a.createElement("tr",null,a.a.createElement("th",null,"Item Image"),a.a.createElement("td",null,a.a.createElement("img",{style:{maxWidth:"50vw"},src:d({ipfsURI:i.image})}))),a.a.createElement("tr",null,a.a.createElement("th",null,"Current Owner"),a.a.createElement("td",null,o)),u&&!c?a.a.createElement("tr",null,a.a.createElement("th",null,"Price"),a.a.createElement("td",null,u," Wei MATIC")):a.a.createElement(a.a.Fragment,null))):null},P=n(97),A=function(e){var t=e.itemBelongsCurrentUser,n=v(),c=n.tradeID,u=n.price,s=x.useContainer(),i=s.setBuyingState,l=s.buyingState,o=S.useContainer().marketContract,p=Object(r.useCallback)(function(){var e=Object(f.a)(m.a.mark(function e(t){var n,r,a,c,u;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.tradeID,r=t.price,i("executing"),e.prev=2,a=k.a.utils.parseUnits(r.toString(),"wei"),console.log("price: ",a),e.next=7,o.executeTrade(n,{value:a});case 7:return c=e.sent,e.next=10,c.wait();case 10:1==(u=e.sent).status?i("success"):(console.log("failure [result]:",u),i("failure")),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),i("failure");case 18:case"end":return e.stop()}},e,null,[[2,14]])}));return function(t){return e.apply(this,arguments)}}(),[]);return t||"success"==l?null:"executing"==l?a.a.createElement("p",{className:"message"},"Buy item request was sended. Please open your wallet app and approve the transaction. It'll take few hours to finish transact."):"failure"==l?a.a.createElement("p",{className:"message"},"Error is occurred."):a.a.createElement("button",{onClick:function(){return p(Object(P.a)({},{tradeID:c,price:u}))}},"Buy Item")},D=function(){var e=x.useContainer(),t=e.buyingState,n=e.setBuyingState,c=y.useContainer().itemOwnerAddress,u=j.useContainer().currentUserAddress,s=Object(r.useState)(!1),i=Object(b.a)(s,2),l=i[0],o=i[1];return Object(r.useEffect)(function(){n("init")},[]),Object(r.useEffect)(function(){u&&c&&u.toUpperCase()==c.toUpperCase()&&o(!0)},[c,u]),a.a.createElement(a.a.Fragment,null,l?a.a.createElement("p",null,"This item is already in your collection."):a.a.createElement("p",null,"Buy a collectible"),a.a.createElement(U,{buyingState:t,itemBelongsCurrentUser:l}),a.a.createElement(A,{itemBelongsCurrentUser:l}))},M=function(){var e=v().itemID,t=S.useContainer().tokenContract,n=x.useContainer().setSellingState,c=Object(r.useCallback)(function(){var e=Object(f.a)(m.a.mark(function e(r){var a,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.itemID,n("givingPermission"),e.prev=2,e.next=5,t.approve(w,a);case 5:return c=e.sent,e.next=8,c.wait();case 8:1==e.sent.status?n("permitted"):n("failure"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[2,12]])}));return function(t){return e.apply(this,arguments)}}(),[t]);return a.a.createElement("button",{onClick:function(){return c({itemID:e})}},"Give Permission")},B=function(e){var t=e.price,n=e.unit,r=e.setPrice,c=e.setUnit;return a.a.createElement("span",null,a.a.createElement("label",null,"price"),a.a.createElement("input",{type:"number",min:"0",value:t,onChange:function(e){r(parseInt(e.target.value))}}),a.a.createElement("select",{value:n,onChange:function(e){c(e.target.value)}},a.a.createElement("option",{value:"weiMatic"},"wei MATIC"),a.a.createElement("option",{value:"gweiMatic"},"gwei MATIC"),a.a.createElement("option",{value:"matic"},"MATIC")))},T=function(e){var t=e.price,n=e.unit;return"weiMatic"==n?BigInt(t):"gweiMatic"==n?BigInt(t*Math.pow(10,9)):BigInt(t*Math.pow(10,18))},F=function(e){var t=e.price,n=e.unit,c=v().itemID,u=S.useContainer().marketContract,s=x.useContainer().setSellingState,i=Object(r.useCallback)(Object(f.a)(m.a.mark(function e(){var r,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s("executing"),r=k.a.utils.parseUnits(T({price:t,unit:n}).toString(),"wei"),e.next=5,u.openTrade(c,r);case 5:return a=e.sent,e.next=8,a.wait();case 8:1==e.sent.status?s("success"):s("failure"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),s("failure");case 16:case"end":return e.stop()}},e,null,[[0,12]])})),[u,t]);return t>=0?a.a.createElement("button",{onClick:i},"Sell"):a.a.createElement("button",{disabled:!0},"Sell")},N=function(e){var t=e.itemBelongsCurrentUser,n=Object(r.useState)(0),c=Object(b.a)(n,2),u=c[0],s=c[1],i=Object(r.useState)("weiMatic"),l=Object(b.a)(i,2),o=l[0],p=l[1],m=x.useContainer().sellingState;return t&&"success"!=m?"init"==m?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"description"},"CubifoxMarket needs a permission of keeping your collectible.",a.a.createElement("br",null),"Until the item sold, you can cancel listing the item anytime and then the item will be returned to you."),a.a.createElement(M,null)):"givingPermission"==m||"executing"==m?a.a.createElement("p",{className:"message"},"Request was sended. Please open your wallet app and approve the transaction. It'll take few hours to finish transact."):"permitted"==m?a.a.createElement(a.a.Fragment,null,a.a.createElement(B,{price:u,unit:o,setPrice:s,setUnit:p}),a.a.createElement(F,{price:u,unit:o})):"failure"==m?a.a.createElement("p",{className:"message"},"Error is occurred."):null:null},R=function(){var e=v().itemID,t=S.useContainer().tokenContract,n=x.useContainer(),c=n.sellingState,u=n.setSellingState,s=y.useContainer(),i=s.itemOwnerAddress,l=s.resolveCurrentOwner,o=j.useContainer().currentUserAddress;Object(r.useEffect)(function(){u("init")},[]),Object(r.useEffect)(function(){"success"!=c&&"init"!=c||Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l();case 1:case"end":return e.stop()}},e)}))()},[c]),Object(r.useEffect)(function(){if(t&&"givingPermission"==c){var n=setInterval(Object(f.a)(m.a.mark(function n(){return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.getApproved(e);case 3:n.sent==w&&u("permitted"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}},n,null,[[0,7]])})),3e3);return function(){clearInterval(n)}}},[t,c]);var p=Object(r.useCallback)(function(){return!(!o||!i)&&o.toUpperCase()===i.toUpperCase()},[o,i]);return a.a.createElement(a.a.Fragment,null,i&&i.includes(w)&&a.a.createElement("p",null,"This item is already listed on sale."),p()&&a.a.createElement("p",null,"List your collectible"),a.a.createElement(U,{sellingState:c}),a.a.createElement(N,{itemBelongsCurrentUser:p()}))},W=(n(163),function(){var e=v().tradeID,t=x.useContainer(),n=t.userType,c=t.setUserType,u=t.preparingState,s=t.buyingState,i=t.sellingState,l=t.setPreparingState,o=j.useContainer(),p=o.wcProvider,b=o.setWCProvider,d=o.setupWCProvider,g=o.getCurrentUser,E=S.useContainer(),w=E.linkMarketContract,O=E.linkTokenContract,h=C.useContainer(),k=h.fetchMetadata,y=h.metadata;Object(r.useEffect)(function(){console.log({preparingState:u,buyingState:s,sellingState:i,metadata:y})},[u,s,i]),Object(r.useEffect)(function(){p||(l("setupProvider"),Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:case"end":return e.stop()}},e)}))())},[p]),Object(r.useEffect)(function(){if(p){g(p);var e=new I.providers.Web3Provider(p);w(e);var t=O(e);l("gettingMetadata"),k(t).then(function(){l("ready")})}},[p]),Object(r.useEffect)(function(){c(e?"buyer":"seller")},[e]);var U=Object(r.useCallback)(Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,p.disconnect();case 4:window.localStorage.removeItem("walletconnect"),b(void 0);case 6:case"end":return e.stop()}},e)})),[p]);return p?"ready"!=u?a.a.createElement(a.a.Fragment,null):a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:U},"disconnect"),"buyer"==n&&a.a.createElement(D,null),"seller"==n&&a.a.createElement(R,null)):a.a.createElement("h2",null,"Needed to reaload this window.")});var q=function(){return a.a.createElement(s.a,null,a.a.createElement(x.Provider,null,a.a.createElement(j.Provider,null,a.a.createElement(S.Provider,null,a.a.createElement(C.Provider,null,a.a.createElement(y.Provider,null,a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/",element:a.a.createElement(W,null)}))))))))))},L=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,167)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),c(e),u(e)})};u.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(q,null))),L()},87:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},99:function(e,t,n){e.exports=n(165)}},[[99,3,2]]]);
//# sourceMappingURL=main.ec1fa558.chunk.js.map