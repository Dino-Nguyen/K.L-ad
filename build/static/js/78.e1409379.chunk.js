(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[78],{2154:function(e,a,t){"use strict";t.r(a);var n=t(46),i=t(8),r=t(14),l=t(15),s=t(16),c=t(0),o=t.n(c),m=t(572),u=t(632),d=t(51),b=t(13),g=t.n(b),v=t(28),f=t(32),h=t(566),p=u.object().shape({email:u.string().email("Invalid email").required("email is required")}),N=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={email:"watson@example.com"},e.handleChange=function(a){a.persist(),e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a,t){t.isSubmitting;e.props.loginWithEmailAndPassword(a)},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"auth-layout-wrap",style:{backgroundImage:"url(/assets/images/photo-wide-4.jpg)"}},o.a.createElement("div",{className:"auth-content"},o.a.createElement("div",{className:"card o-hidden"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"p-4"},o.a.createElement("div",{className:"auth-logo text-center mb-4"},o.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),o.a.createElement("h1",{className:"mb-3 text-18"},"Forgot Password"),o.a.createElement(m.b,{initialValues:this.state,validationSchema:p,onSubmit:this.handleSubmit},(function(e){var a=e.values,t=e.errors,n=(e.touched,e.handleChange),i=e.handleBlur,r=e.handleSubmit;e.isSubmitting;return o.a.createElement("form",{onSubmit:r},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email"},"Email address"),o.a.createElement("input",{className:"form-control form-control-rounded position-relative",type:"email",name:"email",onChange:n,onBlur:i,value:a.email}),t.email&&o.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.email)),o.a.createElement("button",{className:"btn btn-rounded btn-primary w-100 mt-2",type:"submit"},"Reset Password"))})),o.a.createElement("div",{className:"mt-3 text-center"},o.a.createElement(f.a,{to:"/session/signin",className:"text-muted"},o.a.createElement("u",null,"Signin"))))),o.a.createElement("div",{className:"col-md-6 text-center ",style:{backgroundSize:"cover",backgroundImage:"url(/assets/images/photo-long-3.jpg)"}},o.a.createElement("div",{className:"pe-3 auth-right"},o.a.createElement(h.a,{className:"btn btn-rounded btn-outline-primary btn-outline-email w-100 my-1 btn-icon-text"},o.a.createElement("i",{className:"i-Mail-with-At-Sign"})," Sign up with Email"),o.a.createElement(h.a,{className:"btn btn-rounded btn-outline-google w-100 my-1 btn-icon-text"},o.a.createElement("i",{className:"i-Google-Plus"})," Sign up with Google"),o.a.createElement(h.a,{className:"btn btn-rounded w-100 my-1 btn-icon-text btn-outline-facebook"},o.a.createElement("i",{className:"i-Facebook-2"})," Sign up with Facebook")))))))}}]),t}(c.Component);a.default=Object(v.b)((function(e){return{loginWithEmailAndPassword:g.a.func.isRequired,user:e.user}}),{loginWithEmailAndPassword:d.e})(N)},530:function(e,a,t){"use strict";t.d(a,"b",(function(){return s}));var n=t(10),i=t(0),r=t(5),l=["as","disabled"];function s(e){var a=e.tagName,t=e.disabled,n=e.href,i=e.target,r=e.rel,l=e.onClick,s=e.tabIndex,c=void 0===s?0:s,o=e.type;a||(a=null!=n||null!=i||null!=r?"a":"button");var m={tagName:a};if("button"===a)return[{type:o||"button",disabled:t},m];var u=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),t?e.stopPropagation():null==l||l(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:c,href:"a"===a&&t?void 0:n,target:"a"===a?i:void 0,"aria-disabled":t||void 0,rel:"a"===a?r:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},m]}var c=i.forwardRef((function(e,a){var t=e.as,i=e.disabled,c=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,l),o=s(Object.assign({tagName:t,disabled:i},c)),m=Object(n.a)(o,2),u=m[0],d=m[1].tagName;return Object(r.jsx)(d,Object.assign({},c,u,{ref:a}))}));c.displayName="Button",a.a=c},566:function(e,a,t){"use strict";var n=t(1),i=t(10),r=t(9),l=t(11),s=t.n(l),c=t(0),o=t(530),m=t(18),u=t(5),d=["as","bsPrefix","variant","size","active","className"],b=c.forwardRef((function(e,a){var t=e.as,l=e.bsPrefix,c=e.variant,b=e.size,g=e.active,v=e.className,f=Object(r.a)(e,d),h=Object(m.a)(l,"btn"),p=Object(o.b)(Object(n.a)({tagName:t},f)),N=Object(i.a)(p,2),E=N[0],j=N[1].tagName;return Object(u.jsx)(j,Object(n.a)(Object(n.a)(Object(n.a)({},f),E),{},{ref:a,className:s()(v,h,g&&"active",c&&"".concat(h,"-").concat(c),b&&"".concat(h,"-").concat(b),f.href&&f.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=b}}]);
//# sourceMappingURL=78.e1409379.chunk.js.map