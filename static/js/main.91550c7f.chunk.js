(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(1),s=a.n(c),r=a(3),i=a.n(r),o=(a(13),a(14),a(4)),l=a(5),u=a(7),h=a(6),b=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={time:0,isStarted:!1,onWait:!1},t.tick=function(){t.setState((function(t){return{time:t.time+1}}))},t.toggle=function(){t.state.isStarted?t.stop():t.start(),t.setState((function(t){return{isStarted:!t.isStarted}}))},t.start=function(){var e=t.state,a=e.isStarted;!0===e.onWait?t.setState((function(t){return{onWait:!t.onWait}})):a||t.setState({time:0}),t.myInterval=setInterval(t.tick,1e3)},t.stop=function(){t.setState({isStarted:!0}),clearInterval(t.myInterval)},t.wait=function(){clearInterval(t.myInterval),t.setState((function(t){return{onWait:!t.onWait,isStarted:!1}}))},t.reset=function(){clearInterval(t.myInterval),t.setState({isStarted:!0,onWait:!1,time:0}),t.start()},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.time,a=t.isStarted,c=Math.floor(e/3600),s=Math.floor(e%3600/60),r=Math.floor(e%3600%60);return Object(n.jsxs)("div",{className:"stopwatch",children:[Object(n.jsxs)("h1",{className:"stopwatch__watch",children:[c<10?"0".concat(c):c,":",s<10?"0".concat(s):s,":",r<10?"0".concat(r):r]}),Object(n.jsxs)("div",{className:"stopwatch__buttons",children:[Object(n.jsx)("button",{className:"stopwatch__button",type:"button",onClick:this.toggle,children:a?"Stop":"Start"}),Object(n.jsx)("button",{className:"stopwatch__button",type:"button",onClick:this.wait,children:"Wait"}),Object(n.jsx)("button",{className:"stopwatch__button",type:"button",onClick:this.reset,children:"Reset"})]})]})}}]),a}(s.a.Component),d=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(b,{})})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.91550c7f.chunk.js.map