webpackJsonp([0x8eb291567e75],{558:function(e,t,a){e.exports=a.p+"static/1.b0eb1e86.jpeg"},559:function(e,t,a){e.exports=a.p+"static/2.c475874e.jpeg"},560:function(e,t,a){e.exports=a.p+"static/3.75eb0fd1.jpeg"},561:function(e,t,a){e.exports=a.p+"static/4.1a1a3b59.jpeg"},562:function(e,t,a){e.exports=a.p+"static/5.0a24e80f.jpeg"},563:function(e,t,a){e.exports=a.p+"static/6.d40ed4aa.jpeg"},564:function(e,t,a){e.exports=a.p+"static/love.619badc5.png"},178:function(e,t,a){(function(n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),c=r(o),m=a(14),p=r(m),u=a(564),f=(r(u),a(558)),d=r(f),h=a(559),g=r(h),E=a(560),b=r(E),y=a(561),v=r(y),k=a(562),w=r(k),N=a(563),x=r(N),C=function(e){function t(){l(this,t);var a=s(this,e.call(this));return a.state={active:0},a.handleClick=a.handleClick.bind(a),a}return i(t,e),t.prototype.handleClick=function(e){this.setState({active:e})},t.prototype.render=function(){var e=this.state.active;return n.createElement(p.default,{css:{position:"relative"}},n.createElement("div",{css:{margin:"2em auto 1em",width:"100%"}},n.createElement("h2",{className:"resume-title"},"About"),n.createElement("p",{className:"resume-p"},"Mello is a holy buddhist. He lives in HangZhou, ZheJiang. He likes basketball, books, games and travel."),n.createElement("br",null),n.createElement("p",{className:"resume-p"},n.createElement("b",null,"Keywords: "),n.createElement("span",{className:"keywords"},n.createElement("a",{href:"/categories.html#functional"},"Functional Programming")),"、",n.createElement("span",{className:"keywords"},n.createElement("a",{href:"/categories.html#Async"},"Async Programming")),"、",n.createElement("span",{className:"keywords"},n.createElement("a",{href:"/blog/2017/11/20/FP5-closure.html"},"Closure")),"、",n.createElement("span",{className:"keywords"},n.createElement("a",{href:"/blog/2018/09/02/FP14-Monad-1.html"},"Functor/Monad")),"、",n.createElement("span",{className:"keywords"},n.createElement("a",{href:"/categories.html#composing%20software"},"Function Compose")),"、",n.createElement("span",{className:"keywords"},n.createElement("a",{href:"/categories.html#React"},"React/Redux"))),n.createElement(j,null),n.createElement("p",{className:"resume-p"},"Mello is currently a Frontend developer engineer and manager of the Frontend Platform team at",n.createElement("a",{href:"http://netease.com",target:"_blank"}," NetEase"),". He originally joined the Listings team at NetEase in Apr 2017, tasked to revamp the event details pages from an archaic MySpace-style design to a modern, fully responsive layout.")),n.createElement(A,{handleClick:this.handleClick,active:e}),0===e&&n.createElement(_,null),1===e&&n.createElement(T,null),2===e&&n.createElement(F,null))},t}(c.default.Component),j=function(){return n.createElement("div",{className:"love-container"},n.createElement("img",{src:"https://p1.music.126.net/cApgVVmtcKYFyxunEmHCkA==/109951164540902241.jpg",className:"resume-love"}))},A=function(e){var t=e.active,a=e.handleClick;return n.createElement("div",{css:{borderTop:"1px solid #efefef",display:"flex",justifyContent:"center",letterSpacing:"1px",textAlign:"center",fontSize:"12px",fontWeight:600}},n.createElement("a",{css:{cursor:"pointer",lineHeight:"52px",marginRight:60,borderTop:0==t?"1px solid #262626":"none",marginTop:0==t?-1:0,color:0===t?"#262626":"#999"},onClick:a.bind(null,0)},"BIO"),n.createElement("a",{css:{cursor:"pointer",lineHeight:"52px",marginRight:60,borderTop:1==t?"1px solid #262626":"none",marginTop:1==t?-1:0,color:1===t?"#262626":"#999"},onClick:a.bind(null,1)},"PROJECTS"),n.createElement("a",{css:{cursor:"pointer",lineHeight:"52px",marginRight:60,borderTop:2==t?"1px solid #262626":"none",marginTop:2==t?-1:0,color:2===t?"#262626":"#999"},onClick:a.bind(null,2)},"BOOKS"))},_=function(){return n.createElement("div",{css:{margin:"1em auto 5em"}},n.createElement("div",{className:"timeline"},n.createElement("div",{className:"title"},n.createElement("div",{className:"year work"},n.createElement("span",{className:"work-date"},"Apr 2017 - Now")," Fontend Developer @ ",n.createElement("a",{href:"http://netease.com",target:"_blank"},"NetEase")),n.createElement("div",{className:"year work"},n.createElement("span",{className:"work-date"},"May 2013 - Apr 2017")," Web Assistant @ ",n.createElement("a",{href:"https://www.bilibili.com/",target:"_blank"},"Bilibili")))))},T=function(){return n.createElement("div",{css:{margin:"1em auto 1em"}},n.createElement("h2",{className:"resume-title"},"Projects"),n.createElement("span",{className:"resume-sub-title"},"react-magic"),n.createElement("p",{className:"resume-p"},"A collection of magic animations for react components. Although React provides a way to implement arbitrary animations, it is not an easy task to do it, even for simple animations. That's where react-magic package comes in. It supports inline styles work with",n.createElement("a",{href:"https://github.com/Khan/aphrodite",target:"_blank"}," aphrodite"),". Most animations was implemented base on",n.createElement("a",{href:"https://github.com/miniMAC/magic",target:"_blank"}," magic"),"."),n.createElement("span",{className:"resume-sub-title"},"leaflet.migrationLayer"),n.createElement("p",{className:"resume-p"},"leafet.migrationLayer is used to show migration data such as population,flight,vehicle,traffic and so on.Data visualization on map."))},M=[d.default,g.default,b.default,v.default,w.default,x.default],F=function(){return n.createElement("div",{css:{display:"flex",flexWrap:"wrap"}},M.map(function(e,t){return n.createElement("img",{key:t,src:e,css:{height:200,width:150,margin:10}})}))};t.default=C,e.exports=t.default}).call(t,a(3))}});