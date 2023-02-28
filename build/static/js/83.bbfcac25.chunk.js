(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[83],{2145:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(14),l=a(15),o=a(16),i=a(0),c=a.n(i),s=a(100),m=a(103),d=a(522),u=a(521),v=a(566),b=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={},e.variantList=["primary","success","info","warning"],e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(s.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Tooltip"}]}),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-md-12 mb-4"},c.a.createElement(m.a,{title:"Basic Tooltips"},c.a.createElement("p",{className:"pt-0 mt-0"},"Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left."),c.a.createElement("div",{className:"row"},["top","right","bottom","left"].map((function(t,a){return c.a.createElement("div",{className:"col-md-3",key:t},c.a.createElement(d.a,{placement:t,overlay:c.a.createElement(u.a,{id:"tooltip-".concat(t)},"Tooltip on ",c.a.createElement("strong",null,t),".")},c.a.createElement(v.a,{variant:e.variantList[a]},"Tooltip on ",t)))})))))),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-md-12 mb-4"},c.a.createElement(m.a,{title:"Tooltips Trigger"},c.a.createElement("p",{className:"pt-0 mt-0"},"Click to show tooltip"),c.a.createElement("div",{className:"row"},["top","right","bottom","left"].map((function(t,a){return c.a.createElement("div",{className:"col-md-3",key:t},c.a.createElement(d.a,{trigger:"click",placement:t,overlay:c.a.createElement(u.a,{id:"tooltip-".concat(t)},"Tooltip on ",c.a.createElement("strong",null,t),".")},c.a.createElement(v.a,{variant:e.variantList[a]},"Tooltip on ",t)))})))))),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-md-12 mb-4"},c.a.createElement(m.a,{title:"Tooltip Options"},c.a.createElement("div",{className:"row"},["top","right","bottom","left"].map((function(t,a){return c.a.createElement("div",{className:"col-md-3",key:t},c.a.createElement(d.a,{placement:t,delay:{show:250,hide:400},overlay:c.a.createElement(u.a,{id:"tooltip-".concat(t)},"Tooltip on ",c.a.createElement("strong",null,t),".")},c.a.createElement(v.a,{variant:e.variantList[a]},"Tooltip on ",t)))})))))))}}]),a}(i.Component);t.default=b},530:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(10),r=a(0),l=a(5),o=["as","disabled"];function i(e){var t=e.tagName,a=e.disabled,n=e.href,r=e.target,l=e.rel,o=e.onClick,i=e.tabIndex,c=void 0===i?0:i,s=e.type;t||(t=null!=n||null!=r||null!=l?"a":"button");var m={tagName:t};if("button"===t)return[{type:s||"button",disabled:a},m];var d=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==o||o(e)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:c,href:"a"===t&&a?void 0:n,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?l:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},m]}var c=r.forwardRef((function(e,t){var a=e.as,r=e.disabled,c=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o),s=i(Object.assign({tagName:a,disabled:r},c)),m=Object(n.a)(s,2),d=m[0],u=m[1].tagName;return Object(l.jsx)(u,Object.assign({},c,d,{ref:t}))}));c.displayName="Button",t.a=c},566:function(e,t,a){"use strict";var n=a(1),r=a(10),l=a(9),o=a(11),i=a.n(o),c=a(0),s=a(530),m=a(18),d=a(5),u=["as","bsPrefix","variant","size","active","className"],v=c.forwardRef((function(e,t){var a=e.as,o=e.bsPrefix,c=e.variant,v=e.size,b=e.active,p=e.className,f=Object(l.a)(e,u),E=Object(m.a)(o,"btn"),g=Object(s.b)(Object(n.a)({tagName:a},f)),N=Object(r.a)(g,2),h=N[0],j=N[1].tagName;return Object(d.jsx)(j,Object(n.a)(Object(n.a)(Object(n.a)({},f),h),{},{ref:t,className:i()(p,E,b&&"active",c&&"".concat(E,"-").concat(c),v&&"".concat(E,"-").concat(v),f.href&&f.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=v}}]);
//# sourceMappingURL=83.bbfcac25.chunk.js.map