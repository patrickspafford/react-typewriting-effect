(this["webpackJsonpreact-typewriter-effect-example"]=this["webpackJsonpreact-typewriter-effect-example"]||[]).push([[0],[,,function(e,t,n){e.exports=n(11)},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(3);var a=n(0),c=n.n(a),r=n(1),s=n.n(r);function i(e){var t=e.string,n=e.speed,r=void 0===n?100:n,s=e.stopBlinkinOnComplete,i=void 0!==s&&s,o=e.className,u=e.onComplete,l=void 0===u?function(){return null}:u,p=Object(a.useState)(""),f=p[0],m=p[1],d=Object(a.useState)(-1),b=d[0],g=d[1],h=Object(a.useState)(!0),v=h[0],E=h[1];return Object(a.useEffect)((function(){b<t.length?setTimeout((function(){m(f+t.charAt(b)),g(b+1)}),r):(i&&E(!1),l())}),[b]),c.a.createElement("span",{className:o},f,v?c.a.createElement("span",{className:"blinking-cursor"},"|"):null)}n(10);var o=function(){return c.a.createElement(i,{string:"This is an example of typewriting \ud83d\ude04",speed:80})};s.a.render(c.a.createElement(o,null),document.getElementById("root"))}],[[2,1,2]]]);
//# sourceMappingURL=main.6878c7e7.chunk.js.map