(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[81],{2142:function(e,a,t){"use strict";t.r(a);var r=t(8),n=t(14),i=t(15),c=t(16),l=t(0),o=t.n(l),s=t(100),m=t(168),u=t(522),d=t(566),b=t(103),v=function(e){return o.a.createElement(m.a,Object.assign({id:"popover-basic"},e),o.a.createElement(m.a.Header,{as:"h3"},"Popover right"),o.a.createElement(m.a.Body,null,"And here's some ",o.a.createElement("strong",null,"amazing")," content. It's very engaging. right?"))},f=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={},e}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(s.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Popover"}]}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(b.a,{title:"example",className:"mb-4"},o.a.createElement(u.a,{trigger:"click",placement:"right",overlay:v},o.a.createElement(d.a,{className:"text-white",variant:"danger"},"Click to toggle popover")))),o.a.createElement("div",{className:"col-md-12"},o.a.createElement(b.a,{title:"four directions",className:"mb-4"},o.a.createElement("p",null,"Four options are available: top, right, bottom, and left aligned."),["top","right","bottom","left","auto"].map((function(e){return o.a.createElement(u.a,{key:e,trigger:"click",placement:e,overlay:v},o.a.createElement(d.a,{className:"me-2"},"Popover on ",e))})))),o.a.createElement("div",{className:"col-md-12"},o.a.createElement(b.a,{title:"hover with auto dismiss",className:"mb-4"},o.a.createElement(u.a,{trigger:"hover",placement:"right",overlay:v,delay:{show:250,hide:400}},o.a.createElement(d.a,{className:"text-white",variant:"danger"},"Dismissible popover"))))))}}]),t}(l.Component);a.default=f},530:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var r=t(10),n=t(0),i=t(5),c=["as","disabled"];function l(e){var a=e.tagName,t=e.disabled,r=e.href,n=e.target,i=e.rel,c=e.onClick,l=e.tabIndex,o=void 0===l?0:l,s=e.type;a||(a=null!=r||null!=n||null!=i?"a":"button");var m={tagName:a};if("button"===a)return[{type:s||"button",disabled:t},m];var u=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==c||c(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:o,href:"a"===a&&t?void 0:r,target:"a"===a?n:void 0,"aria-disabled":t||void 0,rel:"a"===a?i:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},m]}var o=n.forwardRef((function(e,a){var t=e.as,n=e.disabled,o=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,c),s=l(Object.assign({tagName:t,disabled:n},o)),m=Object(r.a)(s,2),u=m[0],d=m[1].tagName;return Object(i.jsx)(d,Object.assign({},o,u,{ref:a}))}));o.displayName="Button",a.a=o},566:function(e,a,t){"use strict";var r=t(1),n=t(10),i=t(9),c=t(11),l=t.n(c),o=t(0),s=t(530),m=t(18),u=t(5),d=["as","bsPrefix","variant","size","active","className"],b=o.forwardRef((function(e,a){var t=e.as,c=e.bsPrefix,o=e.variant,b=e.size,v=e.active,f=e.className,g=Object(i.a)(e,d),p=Object(m.a)(c,"btn"),h=Object(s.b)(Object(r.a)({tagName:t},g)),j=Object(n.a)(h,2),N=j[0],E=j[1].tagName;return Object(u.jsx)(E,Object(r.a)(Object(r.a)(Object(r.a)({},g),N),{},{ref:a,className:l()(f,p,v&&"active",o&&"".concat(p,"-").concat(o),b&&"".concat(p,"-").concat(b),g.href&&g.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=b}}]);
//# sourceMappingURL=81.10503e60.chunk.js.map