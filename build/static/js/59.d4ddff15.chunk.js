(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[59],{2224:function(a,e,t){"use strict";t.r(e);var n=t(8),c=t(14),i=t(15),l=t(16),s=t(0),r=t.n(s),m=t(100),o=t(554),u=t(535),b=t(566),d=t(1),v=t(9),p=t(11),f=t.n(p),E=t(18),N=t(5),x=["bsPrefix","className"],j=s.forwardRef((function(a,e){var t=a.bsPrefix,n=a.className,c=Object(v.a)(a,x),i=Object(E.a)(t,"btn-toolbar");return Object(N.jsx)("div",Object(d.a)(Object(d.a)({},c),{},{ref:e,className:f()(n,i)}))}));j.displayName="ButtonToolbar",j.defaultProps={role:"toolbar"};var g=j,y=t(103),O=["bsPrefix","variant","animation","size","as","className"],h=s.forwardRef((function(a,e){var t=a.bsPrefix,n=a.variant,c=a.animation,i=a.size,l=a.as,s=void 0===l?"div":l,r=a.className,m=Object(v.a)(a,O);t=Object(E.a)(t,"spinner");var o="".concat(t,"-").concat(c);return Object(N.jsx)(s,Object(d.a)(Object(d.a)({ref:e},m),{},{className:f()(r,o,i&&"".concat(o,"-").concat(i),n&&"text-".concat(n))}))}));h.displayName="Spinner";var z=h,k=function(a){var e=a.variant,t=void 0===e?"primary":e,n=a.loading,c=void 0!==n&&n,i=a.animation,l=a.spinnerSize,s=a.buttonSize,m=a.children,o=a.className;return r.a.createElement(b.a,{variant:t,className:"d-flex flex-row align-items-center ".concat(o),size:s},c&&r.a.createElement(z,{className:"mr-2",animation:i,size:l}),m)},w=function(a){Object(i.a)(t,a);var e=Object(l.a)(t);function t(){var a;Object(n.a)(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(a=e.call.apply(e,[this].concat(i))).variantList=["primary","success","warning","danger","info","light","dark"],a.socialButtonList=[{name:"facebook",icon:"i-Facebook-2"},{name:"google",icon:"i-Google-Plus"},{name:"twitter",icon:"i-Twitter"},{name:"instagram",icon:"i-Instagram"},{name:"linkedin",icon:"i-Linkedin-2"},{name:"dribble",icon:"i-Dribble"},{name:"youtube",icon:"i-Youtube"}],a.state={},a}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Buttons"}]}),r.a.createElement("div",{className:"mb-3"},r.a.createElement(o.a,null,r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"Default Buttons"},this.variantList.map((function(a){return r.a.createElement(b.a,{key:a,variant:a,className:"m-1 text-capitalize"},a)})))),r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"Buttons Rounded"},this.variantList.map((function(a){return r.a.createElement(b.a,{key:a,variant:a,className:"btn-rounded m-1 text-capitalize"},a)})))))),r.a.createElement("div",{className:"mb-3"},r.a.createElement(o.a,null,r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"Buttons Raised"},this.variantList.map((function(a){return r.a.createElement(b.a,{key:a,variant:a,className:"btn-raised btn-raised-".concat(a," m-1 text-capitalize")},a)})))),r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"Buttons outline"},this.variantList.map((function(a){return r.a.createElement(b.a,{key:a,variant:"outline-".concat(a),className:"m-1 text-capitalize"},a)})))))),r.a.createElement("div",{className:"mb-3"},r.a.createElement(o.a,null,r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"Button block"},this.variantList.slice(0,3).map((function(a){return r.a.createElement(b.a,{key:a,variant:a,className:"d-block w-100 my-2 text-capitalize"},a)})))),r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"Buttons outline"},r.a.createElement("div",null,this.variantList.slice(0,3).map((function(a){return r.a.createElement(b.a,{key:a,variant:a,size:"sm",className:"m-1 text-capitalize"},a)}))),r.a.createElement("div",null,this.variantList.slice(0,3).map((function(a){return r.a.createElement(b.a,{key:a,variant:a,className:"m-1 text-capitalize"},a)}))),r.a.createElement("div",null,this.variantList.slice(0,3).map((function(a){return r.a.createElement(b.a,{key:a,variant:a,size:"lg",className:"m-1 text-capitalize"},a)}))))))),r.a.createElement("div",{className:"mb-3"},r.a.createElement(o.a,null,r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"Styles- Button with Icons"},r.a.createElement(b.a,{variant:"primary",className:"btn-icon m-1 text-capitalize"},r.a.createElement("span",{className:"ul-btn__icon"},r.a.createElement("i",{className:"i-Gear-2"})),r.a.createElement("span",{className:"ul-btn__text"},"With Icon")),r.a.createElement(b.a,{variant:"info",className:"btn-icon m-1 text-capitalize"},r.a.createElement("span",{className:"ul-btn__icon"},r.a.createElement("i",{className:"i-RSS"}))),r.a.createElement(b.a,{variant:"success",className:"btn-icon m-1 text-capitalize"},"button"),r.a.createElement(b.a,{variant:"outline-danger",className:"btn-icon m-1 text-capitalize"},r.a.createElement("span",{className:"ul-btn__icon"},r.a.createElement("i",{className:"i-Shutter"}))),r.a.createElement(b.a,{variant:"warning",className:"btn-icon m-1 text-capitalize"},r.a.createElement("span",{className:"ul-btn__icon"},r.a.createElement("i",{className:"i-Atom"})),r.a.createElement("span",{className:"ul-btn__text"},"Atom")))),r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"Buttons Ripple"},this.variantList.map((function(a){return r.a.createElement(b.a,{key:a,variant:a,className:"ripple m-1 text-capitalize"},a)})))))),r.a.createElement("div",{className:"mb-3"},r.a.createElement(o.a,null,r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"social",className:"mb-3"},r.a.createElement("div",{className:"mb-3"},this.socialButtonList.map((function(a){return r.a.createElement(b.a,{key:a.name,variant:"primary",className:"btn-".concat(a.name," btn-icon m-1 text-capitalize")},r.a.createElement("span",{className:"ul-btn__icon"},r.a.createElement("i",{className:a.icon})),r.a.createElement("span",{className:"ul-btn__text text-capitalize"},a.name))}))),r.a.createElement("div",{className:"mb-3"},this.socialButtonList.map((function(a){return r.a.createElement(b.a,{key:a.name,variant:"primary",className:"btn-".concat(a.name," btn-icon m-1 text-capitalize")},r.a.createElement("span",{className:"ul-btn__icon"},r.a.createElement("i",{className:a.icon})))}))),r.a.createElement("div",null,this.socialButtonList.map((function(a){return r.a.createElement(b.a,{key:a.name,variant:"primary",className:"btn-".concat(a.name," rounded-circle btn-icon m-1 text-capitalize")},r.a.createElement("span",{className:"ul-btn__icon"},r.a.createElement("i",{className:a.icon})))})))),r.a.createElement(y.a,{title:"Button Group"},r.a.createElement(g,null,this.variantList.map((function(a){return r.a.createElement(b.a,{key:a,variant:"outline-".concat(a),className:"text-capitalize"},a)}))))),r.a.createElement(u.a,{lg:6,md:6,sm:6,xs:12},r.a.createElement(y.a,{title:"Loading Button"},r.a.createElement("div",{className:"mb-3 d-flex flex-wrap"},this.variantList.slice(0,3).map((function(a,e){return r.a.createElement(k,{key:e,className:"text-capitalize m-1",variant:a,loading:!0,animation:"border",spinnerSize:"sm"},a," loader")}))),r.a.createElement("div",{className:"mb-3 d-flex flex-wrap"},this.variantList.slice(0,3).map((function(a,e){return r.a.createElement(k,{key:e,className:"text-capitalize m-1",variant:a,loading:!0,animation:"grow",spinnerSize:"sm"},a," loader")}))),r.a.createElement("div",{className:"d-flex flex-wrap"},this.variantList.slice(0,3).map((function(a,e){return r.a.createElement(k,{key:e,className:"text-capitalize m-1",variant:a,loading:!0,animation:"border",spinnerSize:"lg",buttonSize:"lg"},a," loader")}))))))))}}]),t}(s.Component);e.default=w},530:function(a,e,t){"use strict";t.d(e,"b",(function(){return s}));var n=t(10),c=t(0),i=t(5),l=["as","disabled"];function s(a){var e=a.tagName,t=a.disabled,n=a.href,c=a.target,i=a.rel,l=a.onClick,s=a.tabIndex,r=void 0===s?0:s,m=a.type;e||(e=null!=n||null!=c||null!=i?"a":"button");var o={tagName:e};if("button"===e)return[{type:m||"button",disabled:t},o];var u=function(a){(t||"a"===e&&function(a){return!a||"#"===a.trim()}(n))&&a.preventDefault(),t?a.stopPropagation():null==l||l(a)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:r,href:"a"===e&&t?void 0:n,target:"a"===e?c:void 0,"aria-disabled":t||void 0,rel:"a"===e?i:void 0,onClick:u,onKeyDown:function(a){" "===a.key&&(a.preventDefault(),u(a))}},o]}var r=c.forwardRef((function(a,e){var t=a.as,c=a.disabled,r=function(a,e){if(null==a)return{};var t,n,c={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(c[t]=a[t]);return c}(a,l),m=s(Object.assign({tagName:t,disabled:c},r)),o=Object(n.a)(m,2),u=o[0],b=o[1].tagName;return Object(i.jsx)(b,Object.assign({},r,u,{ref:e}))}));r.displayName="Button",e.a=r},535:function(a,e,t){"use strict";var n=t(10),c=t(1),i=t(9),l=t(11),s=t.n(l),r=t(0),m=t(18),o=t(5),u=["as","bsPrefix","className"],b=["className"],d=["xxl","xl","lg","md","sm","xs"];var v=r.forwardRef((function(a,e){var t=function(a){var e=a.as,t=a.bsPrefix,n=a.className,l=Object(i.a)(a,u);t=Object(m.a)(t,"col");var r=[],o=[];return d.forEach((function(a){var e,n,c,i=l[a];if(delete l[a],"object"===typeof i&&null!=i){var s=i.span;e=void 0===s||s,n=i.offset,c=i.order}else e=i;var m="xs"!==a?"-".concat(a):"";e&&r.push(!0===e?"".concat(t).concat(m):"".concat(t).concat(m,"-").concat(e)),null!=c&&o.push("order".concat(m,"-").concat(c)),null!=n&&o.push("offset".concat(m,"-").concat(n))})),[Object(c.a)(Object(c.a)({},l),{},{className:s.a.apply(void 0,[n].concat(o,r))}),{as:e,bsPrefix:t,spans:r}]}(a),l=Object(n.a)(t,2),r=l[0],v=r.className,p=Object(i.a)(r,b),f=l[1],E=f.as,N=void 0===E?"div":E,x=f.bsPrefix,j=f.spans;return Object(o.jsx)(N,Object(c.a)(Object(c.a)({},p),{},{ref:e,className:s()(v,!j.length&&x)}))}));v.displayName="Col",e.a=v},554:function(a,e,t){"use strict";var n=t(1),c=t(9),i=t(11),l=t.n(i),s=t(0),r=t(18),m=t(5),o=["bsPrefix","className","as"],u=["xxl","xl","lg","md","sm","xs"],b=s.forwardRef((function(a,e){var t=a.bsPrefix,i=a.className,s=a.as,b=void 0===s?"div":s,d=Object(c.a)(a,o),v=Object(r.a)(t,"row"),p="".concat(v,"-cols"),f=[];return u.forEach((function(a){var e,t=d[a];delete d[a],e=null!=t&&"object"===typeof t?t.cols:t;var n="xs"!==a?"-".concat(a):"";null!=e&&f.push("".concat(p).concat(n,"-").concat(e))})),Object(m.jsx)(b,Object(n.a)(Object(n.a)({ref:e},d),{},{className:l.a.apply(void 0,[i,v].concat(f))}))}));b.displayName="Row",e.a=b},566:function(a,e,t){"use strict";var n=t(1),c=t(10),i=t(9),l=t(11),s=t.n(l),r=t(0),m=t(530),o=t(18),u=t(5),b=["as","bsPrefix","variant","size","active","className"],d=r.forwardRef((function(a,e){var t=a.as,l=a.bsPrefix,r=a.variant,d=a.size,v=a.active,p=a.className,f=Object(i.a)(a,b),E=Object(o.a)(l,"btn"),N=Object(m.b)(Object(n.a)({tagName:t},f)),x=Object(c.a)(N,2),j=x[0],g=x[1].tagName;return Object(u.jsx)(g,Object(n.a)(Object(n.a)(Object(n.a)({},f),j),{},{ref:e,className:s()(p,E,v&&"active",r&&"".concat(E,"-").concat(r),d&&"".concat(E,"-").concat(d),f.href&&f.disabled&&"disabled")}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=d}}]);
//# sourceMappingURL=59.d4ddff15.chunk.js.map