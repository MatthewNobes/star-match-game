(this["webpackJsonpstar-match-game"]=this["webpackJsonpstar-match-game"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),u=(n(9),n(2)),i=(n(10),n(0)),o=function(e){return Object(i.jsx)("button",{className:"number",style:{backgroundColor:b[e.status]},onClick:function(){return e.onClick(e.number,e.status)},children:e.number})},l=function(e){return j.range(1,e.count).map((function(e){return Object(i.jsx)("div",{className:"star"},e)}))},m=function(e){return Object(i.jsxs)("div",{className:"game-done",children:[Object(i.jsx)("div",{className:"message",style:{color:"lost"===e.gameStatus?"Red":"Green"},children:"lost"===e.gameStatus?"Game Over":"Nice! You won."}),Object(i.jsx)("button",{onClick:e.onClick,children:"Play Again"})]})},d=function(e){var t=function(){var e=Object(a.useState)(j.random(1,9)),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(j.range(1,9)),m=Object(u.a)(l,2),d=m[0],b=m[1],f=Object(a.useState)(10),g=Object(u.a)(f,2),h=g[0],v=g[1];return Object(a.useEffect)((function(){if(h>0&&d.length>0){var e=setTimeout((function(){v(h-1)}),1e3);return function(){return clearTimeout(e)}}})),{stars:n,availableNums:d,candidateNums:i,secondLeft:h,setGameState:function(e){if(j.sum(e)!==n)o(e);else{var t=d.filter((function(t){return!e.includes(t)}));b(t),o([]),c(j.randomSumIn(t,9))}}}}(),n=t.stars,c=t.availableNums,r=t.candidateNums,s=t.secondLeft,d=t.setGameState,b=j.sum(r)>n,f=0===c.length?"won":0===s?"lost":"active",g=function(e){return c.includes(e)?r.includes(e)?b?"wrong":"candidate":"available":"used"},h=function(e,t){if("active"===f&&"used"!==t){var n="available"===t?r.concat(e):r.filter((function(t){return t!==e}));d(n)}};return Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)("div",{className:"help",children:"Pick 1 or more numbers that sum to the number of stars"}),Object(i.jsxs)("div",{className:"body",children:[Object(i.jsx)("div",{className:"left",children:"active"!==f?Object(i.jsx)(m,{onClick:e.startNewGame,gameStatus:f}):Object(i.jsx)(l,{count:n})}),Object(i.jsx)("div",{className:"right",children:j.range(1,9).map((function(e){return Object(i.jsx)(o,{status:g(e),number:e,onClick:h},e)}))})]}),Object(i.jsxs)("div",{className:"timer",children:["Time Remaining: ",s]})]})},b={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},j={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,n){return e+n}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var n=[[]],a=[],c=0;c<e.length;c++)for(var r=0,s=n.length;r<s;r++){var u=n[r].concat(e[c]),i=j.sum(u);i<=t&&(n.push(u),a.push(i))}return a[j.random(0,a.length-1)]}},f=function(){var e=Object(a.useState)(1),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(i.jsx)(d,{startNewGame:function(){return c(n+1)}},n)};function g(){return Object(i.jsx)(f,{})}var h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.80f28e5f.chunk.js.map