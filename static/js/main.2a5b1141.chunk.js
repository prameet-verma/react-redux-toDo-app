(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{10:function(t,e,c){},18:function(t,e,c){},26:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),i=c(5),r=c.n(i),s=(c(18),c(12)),d=(c(10),c(4)),j=c(1);var l=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),c=e[0],a=e[1],i=Object(d.b)(),r=Object(d.c)((function(t){return t.toDoReducer.list}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsx)("figure",{children:Object(j.jsx)("figcaption",{children:" Add Your LIST Here\u270c\ufe0f "})}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",placeholder:"Add items..\u270d\ud83c\udffb",value:c,onChange:function(t){return a(t.target.value)}}),Object(j.jsx)("i",{className:"fa fa-plus add-btn",onClick:function(){return i((t=c,{type:"ADD-ITEM",payload:{id:(new Date).getTime().toString(),data:t}}),a(""));var t}})]}),Object(j.jsx)("div",{className:"showItems",children:r.map((function(t){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:t.data}),Object(j.jsx)("i",{className:"far fa-trash-alt add-btn",title:"Delete Item",onClick:function(){return i({type:"DELETE-ITEM",id:t.id})}})]},t.id)}))})]})})})};var o=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l,{})})},u=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),i(t),r(t)}))},b=c(7),O=c(13),h=c(2),f={list:[]},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-ITEM":var c=e.payload,n=c.id,a=c.data;return Object(h.a)(Object(h.a)({},t),{},{list:[].concat(Object(O.a)(t.list),[{id:n,data:a}])});case"DELETE-ITEM":var i=t.list.filter((function(t){return t.id!==e.id}));return Object(h.a)(Object(h.a)({},t),{},{list:i});default:return t}},v=Object(b.a)({toDoReducer:p}),m=Object(b.b)(v);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d.a,{store:m,children:Object(j.jsx)(o,{})})}),document.getElementById("root")),u()}},[[26,1,2]]]);
//# sourceMappingURL=main.2a5b1141.chunk.js.map