webpackJsonp([0x79b368d8f70d],{177:function(e,t,a){(function(e){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=a(13),n=l(s),r=a(2),c=(l(r),function(t){var a,l=t.data,s={},r=l.allMarkdownRemark.edges;return r.forEach(function(e){var t={},a=e.node.frontmatter.categories;t.date=e.node.fields.date,t.title=e.node.frontmatter.title,t.slug=e.node.fields.slug,s[a]?s[a].push(t):(s[a]=[],s[a].push(t))}),a=Object.keys(s),e.createElement(n.default,{css:{position:"relative"}},e.createElement("div",{className:"timeline"},a.map(function(t){return e.createElement("div",{key:t,className:"title"},e.createElement("h2",{className:"year",id:t},t),e.createElement("ul",{className:"posts-ul"},s[t].map(function(t){return e.createElement("li",{key:t.title,className:"post-li"},e.createElement("p",{css:{display:"none"},className:"post-date-cat"},e.createElement("a",{href:"/archive.html#"+t.date.split(",")[1]},t.date.substr(0,3)+" "+t.date.split(",")[0].split(" ")[1]+","+t.date.split(",")[1])),e.createElement("a",{className:"post-title-cat",href:t.slug},t.title))})))})))});t.pageQuery="** extracted graphql fragment **";t.default=c}).call(t,a(3))}});