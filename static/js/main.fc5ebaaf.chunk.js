(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),u=n(6),i=n(1),p=n.n(i),d=n(0),l=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressButton:0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",(function(t){e.setState({pressButton:t.key})}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keyup",(function(t){e.setState({pressButton:t.key})}))}},{key:"render",value:function(){var e=this.state.pressButton,t=0===e?"Nothing was pressed yet":"The last pressed key is [".concat(e,"]");return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:t})})}}]),n}(p.a.Component);n(13);a.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fc5ebaaf.chunk.js.map