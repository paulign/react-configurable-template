(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){e.exports=n(214)},202:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);n(128),n(163),n(202);var a=n(1),r=n.n(a),c=n(25),s=n.n(c),o=n(4),i=n(5),l=n(7),u=n(6),p=n(8),m=n(24),d=n(123),h=n(14),b=n(13),E={isLoading:!1,templates:[],selectedIndex:0},O={isLoading:!1,houses:[]},f=Object(m.c)({templates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TEMPLATES":return Object(b.a)({},e,{isLoading:!0});case"GET_TEMPLATES_SUCCESS":return Object(b.a)({},e,{isLoading:!1,templates:t.payload||[],selectedIndex:0});case"GET_TEMPLATES_ERROR":return Object(b.a)({},e,{isLoading:!1});case"ON_CHANGE_TEMPLATE":return Object(b.a)({},e,{selectedIndex:t.payload||0});default:return e}},houses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HOUSES":return Object(b.a)({},e,{isLoading:!0});case"GET_HOUSES_SUCCESS":return Object(b.a)({},e,{isLoading:!1,houses:t.payload||[],selectedIndex:0});case"GET_HOUSES_ERROR":return Object(b.a)({},e,{isLoading:!1});default:return e}}}),j=n(3),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.value;return r.a.createElement("img",{src:e[0],alt:""})}}]),t}(a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.value;return r.a.createElement(j.c,{className:"item-address"},e)}}]),t}(a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.value;return r.a.createElement(j.e,{className:"item-price"},"$",e)}}]),t}(a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.value;return e?r.a.createElement(j.d,{className:"item-area"},e," sq. ft."):null}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).components={IMAGE:v,ADDRESS:g,PRICE:y,AREA:T},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.component,n=e.field,a=this.components[t]||null;return a?r.a.createElement(j.b,{className:"field-template ".concat(n,"-component")},this.props.children,r.a.createElement(a,this.props)):null}}]),t}(a.Component),k=void 0,x=function e(t){var n=t.template,a=t.house;return n&&a?n.map(function(t,n){return t.children?r.a.createElement(S,Object.assign({},t,{key:n,value:a[t.field]}),k.buildCard(t.children),r.a.createElement(e,{template:t.children,house:a})):r.a.createElement(S,Object.assign({},t,{key:n,value:a[t.field]}))}):null},C=[{component:"IMAGE",field:"images"},{component:"ADDRESS",field:"full_address"},{component:"PRICE",field:"price"},{component:"AREA",field:"area"}],_=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.templates,n=e.selectedIndex,a=e.house,c=Object(b.a)({},C);return t&&t.length&&(c=t[n].template),r.a.createElement(j.a,{className:"item-card"},r.a.createElement(x,{template:c,house:a}))}}]),t}(a.Component),w=Object(h.b)(function(e){return{templates:e.templates.templates,selectedIndex:e.templates.selectedIndex||0}})(_),L=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.houses;return r.a.createElement(j.h,{className:"py-3"},!!e&&!!e.length&&r.a.createElement(j.p,{className:"align-items-stretch"},e.map(function(e){return r.a.createElement(j.f,{key:e.id,xs:12,sm:6,md:4,lg:3},r.a.createElement(w,{house:e}))})),(!e||!e.length)&&r.a.createElement("div",{className:"p-5 text-center"},r.a.createElement("h1",null,"Nothing to display...")))}}]),t}(a.Component),A=Object(h.b)(function(e){return{houses:e.houses.houses}})(L),R=n(43),G=n(19),N=n.n(G),I=n(35),P="https://demo4452328.mockable.io/",H=function(){var e=Object(I.a)(N.a.mark(function e(t){var n,a,r,c,s,o,i,l,u;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,r=void 0===a?"GET":a,c=t.body,s=void 0===c?null:c,e.prev=1,o=P,(i=new Headers).append("Content-Type","application/json"),e.next=7,fetch("".concat(o).concat(n),{method:r,headers:i,body:s});case 7:return l=e.sent,e.next=10,l.json();case 10:if(u=e.sent,!l.ok){e.next=15;break}return e.abrupt("return",u);case 15:return e.abrupt("return",Promise.reject(u||{error:!0,message:"Something went wrong..."}));case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 22:case"end":return e.stop()}},e,this,[[1,18]])}));return function(t){return e.apply(this,arguments)}}(),M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=n.toggle.bind(Object(R.a)(Object(R.a)(n))),n.state={isOpen:!1},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.props,t=e.templates,n=e.selectedIndex,a=e.changeTemplate;return r.a.createElement("div",null,r.a.createElement(j.m,{color:"dark",dark:!0,fixed:"top",expand:"md"},r.a.createElement(j.h,null,r.a.createElement(j.n,{href:"/"},"Test Task"),r.a.createElement(j.o,{onClick:this.toggle}),r.a.createElement(j.g,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(j.l,{className:"ml-auto",navbar:!0},!!t&&!!t.length&&r.a.createElement(j.q,{nav:!0,inNavbar:!0},r.a.createElement(j.k,{nav:!0,caret:!0},"Template ",t[n].id),r.a.createElement(j.j,{right:!0},t.map(function(e,t){return r.a.createElement(j.i,{onClick:function(){return a(t)},key:e.id,active:t===n},"Template ",e.id)}))))))))}}]),t}(a.Component),U=Object(h.b)(function(e){return{templates:e.templates.templates,selectedIndex:e.templates.selectedIndex||0}},{changeTemplate:function(e){return{type:"ON_CHANGE_TEMPLATE",payload:e}}})(M),D=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getTemplates(),this.props.getHouses()}},{key:"render",value:function(){var e=this.props,t=e.templatesLoading,n=e.itemsLoading;return t||n?r.a.createElement("h1",{className:"p-5 text-center"},"Loading..."):r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(U,null)),r.a.createElement("div",{className:"main"},r.a.createElement(A,null)))}}]),t}(a.Component),q=Object(h.b)(function(e){return{templatesLoading:e.templates.isLoading,itemsLoading:e.houses.isLoading}},{getTemplates:function(){return function(){var e=Object(I.a)(N.a.mark(function e(t){var n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_TEMPLATES"}),e.next=4,H({url:"templates"});case 4:n=e.sent,t({type:"GET_TEMPLATES_SUCCESS",payload:n||[]}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t({type:"GET_TEMPLATES_ERROR"});case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},getHouses:function(){return function(){var e=Object(I.a)(N.a.mark(function e(t){var n,a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_HOUSES"}),e.next=4,H({url:"properties"});case 4:n=e.sent,a=n?n.data:[],t({type:"GET_HOUSES_SUCCESS",payload:a||[]}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t({type:"GET_HOUSES_ERROR"});case 13:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()}})(D),B=Object(m.e)(f,Object(m.d)(Object(m.a)(d.a))),J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{store:B},r.a.createElement(q,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[127,2,1]]]);
//# sourceMappingURL=main.94f60bee.chunk.js.map