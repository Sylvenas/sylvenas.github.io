(self.webpackChunkgatsby_example_using_markdown_pages=self.webpackChunkgatsby_example_using_markdown_pages||[]).push([[637],{3349:function(e,t,n){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return i}})},278:function(e,t,n){"use strict";n(7294);var i=n(6556),r=n(8468);t.Z=function(e){var t,n=e.children;return r.createElement("div",{css:(t={marginLeft:"auto",marginRight:"auto"},t[i.BC.greaterThan("medium")]={width:"90%"},t[i.BC.size("xxlarge")]={maxWidth:900},t)},n)}},972:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var i=n(18),r=n(7294),o=n(278);var a=n(8468),l=["basis","children","direction","grow","halign","shrink","type","valign"],s=function(e){var t=e.basis,n=void 0===t?"auto":t,i=e.children,r=e.direction,o=void 0===r?"row":r,s=e.grow,c=void 0===s?0:s,d=e.halign,u=void 0===d?"flex-start":d,m=e.shrink,p=void 0===m?1:m,f=e.type,h=void 0===f?"div":f,g=e.valign,b=void 0===g?"flex-start":g,v=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);return(0,a.createElement)(h,Object.assign({css:{display:"flex",flexDirection:o,flexGrow:c,flexShrink:p,flexBasis:n,justifyContent:"row"===o?u:b,alignItems:"row"===o?b:u}},v),i)},c=n(6556),d=n(8468),u=function(e){var t,n=e.title,i=e.authors,r=e.date;return d.createElement(s,{type:"header",halign:"space-between",valign:"baseline"},d.createElement("div",{css:{position:"relative",textAlign:"center",width:"100%",height:200,overflow:"hidden",background:"#323a45"}},d.createElement("h1",{css:Object.assign({color:"#fff",marginBottom:0,marginTop:40,fontSize:30,lineHeight:"40px",letterSpacing:".08em",fontWeight:400,fontFamily:'"brandon-grotesque", sans-serif',textTransform:"uppercase"},c.Rq.header,(t={},t[c.BC.size("medium")]={marginTop:60},t[c.BC.greaterThan("large")]={marginTop:80},t))},n),d.createElement("div",{css:{marginTop:15,color:"#abb0b7",fontStyle:"italic",letterSpacing:".005em",fontSize:12,fontWeight:300}},r," ",d.createElement("span",null,"by"," ",i[0]?i[0]:""))))},m=n(8468),p=function(e){var t=e.slug;return m.createElement("div",{css:{marginTop:80,borderTop:"1px solid #abb0b7",paddingTop:"20px"}},m.createElement("p",{css:{fontSize:".8rem",marginBottom:20}},"SHARE ON:"),m.createElement("ul",{css:{margin:0,padding:0}},m.createElement("li",{css:{display:"inline-block",marginRight:"0.5em"}},m.createElement("a",{css:{padding:"8px 17px",border:"1px solid #abb0b7",borderRadius:3,fontSize:14,fontWeight:400,color:"#333",transition:"all .2s",":hover":{backgroundColor:"#55acee",color:"#fff"}},target:"_blank",href:"https://twitter.com/intent/tweet?text=http://lit-forest.github.io"+t},m.createElement("i",{className:"icon-twitter"}),m.createElement("span",{css:{display:"none"},className:"share"},"Twitter"))),m.createElement("li",{css:{display:"inline-block",marginRight:"0.5em"}},m.createElement("a",{css:{padding:"8px 17px",border:"1px solid #abb0b7",borderRadius:3,fontSize:14,fontWeight:400,color:"#333",transition:"all .2s",":hover":{backgroundColor:"#3b5998",color:"#fff"}},target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=http://lit-forest.github.io"+t},m.createElement("i",{className:"icon-facebook"}),m.createElement("span",{css:{display:"none"},className:"share"},"Facebook"))),m.createElement("li",{css:{display:"inline-block",marginRight:"0.5em"}},m.createElement("a",{css:{padding:"8px 17px",border:"1px solid #abb0b7",borderRadius:3,fontSize:14,fontWeight:400,color:"#333",transition:"all .2s",":hover":{backgroundColor:"#dd4b39",color:"#fff"}},target:"_blank",href:"https://plus.google.com/share?url=http://lit-forest.github.io"+t},m.createElement("i",{className:"icon-google-plus"}),m.createElement("span",{css:{display:"none"},className:"share"},"Google+"))),m.createElement("li",{css:{display:"inline-block",marginRight:"0.5em"}},m.createElement("a",{css:{padding:"8px 17px",border:"1px solid #abb0b7",borderRadius:3,fontSize:14,fontWeight:400,color:"#333",transition:"all .2s",":hover":{backgroundColor:"#0976b4",color:"#fff"}},target:"_blank",href:"https://www.reddit.com/submit?url=http://lit-forest.github.io"+t},m.createElement("i",{className:"icon-reddit"}),m.createElement("span",{css:{display:"none"},className:"share"},"Reddit")))))},f=n(2122),h=n(3349),g=n(3552),b=n(8468),v={color:c.O9.text,display:"inline-block",transition:"border 0.2s ease",marginTop:3,paddingBottom:2,borderBottom:"1px dotted transparent","&:hover":{color:c.O9.subtle,borderBottom:"1px dotted rgba(64, 153, 255, .6)"}},w=function(e){e.createLink;var t,n=e.location,i=e.onLinkClick,r=e.section;return b.createElement("div",{css:(t={marginBottom:3},t[c.BC.greaterThan("small")]={display:"block"},t)},b.createElement("span",null,"- "),function(e){e.isActive,e.item;var t=e.section;return b.createElement("a",{css:[v],href:"#"+t.replace(/\s/g,"-").toLowerCase()},t)}({section:r,location:n,onLinkClick:i}))},E=n(8468),x=function(e){function t(t,n){var i;return(i=e.call(this,t,n)||this).state={activeItemId:"",itemTopOffsets:[]},i.calculateItemTopOffsets=i.calculateItemTopOffsets.bind((0,h.Z)(i)),i.handleResize=i.handleResize.bind((0,h.Z)(i)),i.handleScroll=i.handleScroll.bind((0,h.Z)(i)),i}(0,g.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.calculateItemTopOffsets(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},n.calculateItemTopOffsets=function(){var e=this.props.section,t=k(e.items);this.setState({itemTopOffsets:y(t)})},n.handleResize=function(){this.calculateItemTopOffsets(),this.handleScroll()},n.handleScroll=function(){var e=this.state.itemTopOffsets,t=e.find((function(t,n){var i=e[n+1];return i?window.scrollY>=t.offsetTop&&window.scrollY<i.offsetTop:window.scrollY>=t.offsetTop}));this.setState({activeItemId:t?t.id:""})},n.render=function(){var e=this.state.activeItemId;return E.createElement(w,(0,f.Z)({isScrollSync:!0,activeItemId:e},this.props))},t}(r.Component),k=function(e){return e.map((function(e){var t=[];return e.subitems&&(t=e.subitems.map((function(e){return e.id}))),[e.id].concat((0,i.Z)(t))})).reduce((function(e,t){return e.concat(t)}))},y=function(e){return e.map((function(e){var t=document.getElementById(e);return t?{id:e,offsetTop:t.offsetTop}:null})).filter((function(e){return e}))},S=x,C=n(8468),T=function(e){function t(){return e.apply(this,arguments)||this}(0,g.Z)(t,e);var n=t.prototype;return n.render=function(){var e,t=this,n=this.props,i=n.closeParentMenu,r=n.createLink,o=n.enableScrollSync,a=n.location,l=n.sectionList,d=o?S:w;return C.createElement(s,{type:"nav",direction:"column",halign:"stretch",css:(e={width:"100%",paddingLeft:20,position:"relative",fontSize:13},e[c.BC.greaterThan("largerSidebar")]={paddingLeft:40},e[c.BC.lessThan("small")]={paddingBottom:100},e)},l.map((function(e,n){return C.createElement(d,{createLink:r,key:n,location:a,onLinkClick:i,onSectionTitleClick:function(){return t._toggleSection(e)},section:e})})))},n._toggleSection=function(e){this.setState((function(t){return{activeSection:t.activeSection===e?null:e}}))},t}(r.Component),B=n(8468),L=function(e){function t(t,n){var i;return(i=e.call(this,t,n)||this).state={open:!1},i._openNavMenu=i._openNavMenu.bind((0,h.Z)(i)),i._closeNavMenu=i._closeNavMenu.bind((0,h.Z)(i)),i}(0,g.Z)(t,e);var n=t.prototype;return n._openNavMenu=function(){this.setState({open:!this.state.open})},n._closeNavMenu=function(){this.setState({open:!1})},n.render=function(){var e,t,n=this.state.open,i={top:0,left:0,bottom:0,right:0,position:"fixed",backgroundColor:c.O9.white,zIndex:2,height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",pointerEvents:n?"auto":"none"},r=n?1:0,o=n?0:40;return B.createElement("div",{style:{opacity:r,transition:"opacity 0.5s ease"},css:(e={},e[c.BC.lessThan("small")]=i,e[c.BC.greaterThan("medium")]={marginRight:-999,paddingRight:999},e[c.BC.between("medium","sidebarFixed",!0)]={position:"fixed",zIndex:2,height:"100%"},e[c.BC.greaterThan("small")]={position:"fixed",zIndex:2,height:"calc(100vh - 60px)",overflowY:"auto",WebkitOverflowScrolling:"touch",marginRight:-999,paddingRight:999,opacity:"1 !important"},e[c.BC.size("small")]={height:"calc(100vh - 40px)"},e[c.BC.between("medium","large")]={height:"calc(100vh - 50px)"},e[c.BC.greaterThan("sidebarFixed")]={},e)},B.createElement("div",{style:{transform:"translate(0px, "+o+"px)",transition:"transform 0.5s ease"},css:(t={},t[c.BC.size("xsmall")]={marginTop:40},t[c.BC.between("small","medium")]={marginTop:0},t[c.BC.between("medium","large")]={marginTop:50},t[c.BC.greaterThan("small")]={transform:"none !important"},t)},B.createElement(T,(0,f.Z)({closeParentMenu:this._closeNavMenu},this.props))))},t}(r.Component),R=n(5904),z=n(3725),_=n(8468),I=function(e){var t,n=e.authors,i=void 0===n?[]:n,r=e.createLink,a=e.date,l=e.enableScrollSync,d=e.ogDescription,m=e.location,f=e.markdownRemark,h=e.sectionList,g=e.titlePostfix,b=void 0===g?"":g,v=f.frontmatter.title||"";return _.createElement(s,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0}},_.createElement(R.Z,{ogDescription:d,ogUrl:(t=f.fields.slug,null==t?null:z.ny+"/"+t.replace(/^\//,"")),title:""+v+b}),_.createElement("div",{css:{flex:"1 0 auto"}},_.createElement(u,{title:v,authors:i,date:a}),_.createElement(o.Z,null,_.createElement("div",{css:c.FG.articleLayout.container},_.createElement(s,{type:"article",direction:"column",grow:"1",halign:"stretch"},_.createElement("div",{css:c.FG.articleLayout.content},_.createElement("div",{css:[c.FG.markdown],dangerouslySetInnerHTML:{__html:f.html}}),_.createElement(p,{slug:f.fields.slug}))),_.createElement("div",{css:c.FG.articleLayout.sidebar},_.createElement(L,{enableScrollSync:l,createLink:r,location:m,sectionList:h}))))))},O=n(1438),Z=n(8468);function N(e){var t=e.location,n=e.data.markdownRemark,o=n.frontmatter,a=n.excerpt,l=n.fields,s=(0,r.useState)([]),c=s[0],d=s[1];return(0,r.useEffect)((function(){var e=(0,i.Z)(document.querySelectorAll("h2"));if(e.length)d(e.map((function(e){var t=e.textContent.replaceAll(" ","-").toLowerCase();return e.id=t,t})));else{var t=(0,i.Z)(document.querySelectorAll("h3"));d(t.map((function(e){var t=e.textContent.replaceAll(" ","-").toLowerCase();return e.id=t,t})))}}),[]),Z.createElement(O.Z,{location:t},Z.createElement(I,{authors:o.author,date:l.date,location:t,ogDescription:a,markdownRemark:n,sectionList:c,titlePostfix:" - little forest"}))}}}]);