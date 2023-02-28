(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[68],{2221:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(8),s=a(14),o=a(15),i=a(16),l=a(0),m=a.n(l),d=a(169),u=a(6),f=a.n(u),p=function(e){return f.a.get("/api/chat/contacts",{data:e})},b=function(e){return f.a.get("/api/chat/contacts/recent",{data:e})},v=function(e,t){return f.a.get("/api/chat/chat-room",{data:{currentUser:e,contactId:t}})},h=function(e){return f.a.post("/api/chat/add",e)},g=a(10),N=a(115),E=a.n(N),x=a(899),w=function(e){var t=e.open,a=(e.currentUser,e.contactList),n=void 0===a?[]:a,c=e.recentContactList,r=void 0===c?[]:c,s=e.handleContactClick,o=e.toggleSidenav,i=Object(l.useState)(""),d=Object(g.a)(i,2),u=d[0],f=d[1];return m.a.createElement("div",{className:"chat-sidebar-wrap sidebar",style:{left:t?0:"-260px"}},m.a.createElement("div",{className:"border-right"},m.a.createElement("div",{className:"pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar"},m.a.createElement("span",{className:"link-icon d-md-none",onClick:o},m.a.createElement("i",{className:"icon-regular ml-0 mr-3 i-Left"})),m.a.createElement("div",{className:"form-group m-0 flex-grow-1"},m.a.createElement("input",{type:"text",className:"form-control form-control-rounded",id:"search",placeholder:"Search contacts",value:u,onChange:function(e){var t=e.target.value;return f(t)}}))),m.a.createElement(E.a,{className:"contacts-scrollable"},m.a.createElement("div",{className:"mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"},"Recent"),r.filter((function(e){return e.name.toLocaleLowerCase().match(u.toLocaleLowerCase())})).map((function(e){return m.a.createElement("div",{key:e.id,onClick:function(){return s(e.id)},className:"p-3 d-flex align-items-center border-bottom contact ".concat(e.status)},m.a.createElement("img",{src:e.avatar,className:"avatar-sm rounded-circle mr-3",alt:""}),m.a.createElement("div",null,m.a.createElement("h6",{className:"m-0"},e.name),m.a.createElement("span",{className:"text-muted text-small"},Object(x.default)(new Date(e.lastChatTime).getTime(),"dd MMM, yyyy"))))})),m.a.createElement("div",{className:"mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"},"Contacts"),n.filter((function(e){return e.name.toLocaleLowerCase().match(u.toLocaleLowerCase())})).map((function(e){return m.a.createElement("div",{key:e.id,onClick:function(){return s(e.id)},className:"p-3 d-flex border-bottom align-items-center contact online"},m.a.createElement("img",{src:e.avatar,className:"avatar-sm rounded-circle mr-3",alt:""}),m.a.createElement("h6",{className:""},e.name))})))))},y=a(566),C=a(26),j=function(){return m.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center h-100"},m.a.createElement("div",{className:"card bg-white d-flex justify-content-center align-items-center",style:{height:"220px",width:"220px",borderRadius:"50%"}},m.a.createElement("i",{className:"i-Mail-Reply text-64 text-primary font-weight-900"}," ")),m.a.createElement("p",{className:"py-3"},"Click on a contact to start chat"))},L=function(e){e.currentUser;var t=e.toggleSidenav,a=(e.currentChatRoom,e.opponentUser),n=void 0===a?{}:a,c=e.messageList,r=void 0===c?[]:c,s=e.setBottomRef,o=e.handleMessageSend,i=e.isMobile,l=m.a.useState(""),d=Object(g.a)(l,2),u=d[0],f=d[1];return m.a.createElement("div",{className:"chat-content-wrap sidebar-content",style:{marginLeft:i?0:"260px"}},m.a.createElement("div",{className:"d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar"},m.a.createElement("span",{className:"link-icon d-md-none",onClick:t},m.a.createElement("i",{className:"icon-regular i-Right ml-0 mr-3"})),n&&m.a.createElement("div",{className:"d-flex align-items-center"},m.a.createElement("img",{src:n.avatar,alt:"",className:"avatar-sm rounded-circle mr-2"}),m.a.createElement("p",{className:"m-0 text-title text-16 flex-grow-1"},n.name))),n?m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{className:"chat-content",containerRef:function(e){s(e)}},r.map((function(e,t){return e.contactId===n.id?m.a.createElement("div",{key:t,className:"d-flex mb-4"},m.a.createElement("div",{className:"message flex-grow-1"},m.a.createElement("div",{className:"d-flex"},m.a.createElement("p",{className:"mb-1 text-title text-16 flex-grow-1"},e.name),m.a.createElement("span",{className:"text-small text-muted"},Object(C.c)(new Date(e.time))," ago")),m.a.createElement("p",{className:"m-0 white-space-pre-line"},e.text)),m.a.createElement("img",{src:e.avatar,alt:"",className:"avatar-sm rounded-circle ml-3"})):m.a.createElement("div",{key:t,className:"d-flex mb-4 user"},m.a.createElement("img",{src:e.avatar,alt:"",className:"avatar-sm rounded-circle ml-3"}),m.a.createElement("div",{className:"message flex-grow-1"},m.a.createElement("div",{className:"d-flex"},m.a.createElement("p",{className:"mb-1 text-title text-16 flex-grow-1"},e.name),m.a.createElement("span",{className:"text-small text-muted"},Object(C.c)(new Date(e.time))," ago")),m.a.createElement("p",{className:"m-0 white-space-pre-line"},e.text)))}))),m.a.createElement("div",{className:"pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area"},m.a.createElement("form",{className:"inputForm"},m.a.createElement("div",{className:"form-group"},m.a.createElement("textarea",{className:"form-control form-control-rounded",placeholder:"Type your message",name:"message",id:"message",cols:"30",rows:"3",onChange:function(e){return f(e.target.value)},onKeyUp:function(e){"Enter"!==e.key||e.shiftKey||(""!==(u=u.trim())&&o(u),f(""))},value:u})),m.a.createElement("div",{className:"d-flex"},m.a.createElement("div",{className:"flex-grow-1"}),m.a.createElement(y.a,{className:"btn btn-icon btn-rounded mr-2",variant:"primary",onClick:function(){""!==u.trim()&&o(u),f("")}},m.a.createElement("i",{className:"i-Paper-Plane"})),m.a.createElement("label",{htmlFor:"attachment",className:"mb-0"},m.a.createElement(y.a,{type:"button",className:"mr-2",as:"span",variant:"outline-primary"},m.a.createElement("i",{className:"i-Add-File"}))),m.a.createElement("input",{onChange:function(e){console.log(e.target.files[0])},className:"d-none",id:"attachment",type:"file"}))))):m.a.createElement(j,null))},O=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={currentUser:{id:"7863a6802ez0e277a0f98534"},contactList:[],recentContactList:[],messageList:[],currentChatRoom:"",opponentUser:null,open:!0,isMobile:!1},e.bottomRef=m.a.createRef(),e.updateRecentContactList=function(){var t=e.state.currentUser.id;b(t).then((function(t){e.setState({recentContactList:Object(c.a)(t.data)})}))},e.scrollToBottom=function(){e.bottomRef.current.scrollIntoView({behavior:"smooth"})},e.handleContactClick=function(t){Object(C.d)()&&e.toggleSidenav(),p(t).then((function(t){var a=t.data;e.setState({opponentUser:Object(n.a)({},a)})})),v(e.state.currentUser.id,t).then((function(t){var a=t.data,n=a.chatId,c=a.messageList,r=a.recentListUpdated;console.log(n),e.setState({currentChatRoom:n,messageList:c},(function(){e.bottomRef.scrollTop=9999999999999})),r&&e.updateRecentContactList()}))},e.handleMessageSend=function(t){var a=e.state.currentUser.id,n=e.state,r=n.currentChatRoom,s=n.opponentUser;""!==r&&h({chatId:r,text:t,contactId:a,time:new Date}).then((function(t){e.setState({messageList:Object(c.a)(t.data)},(function(){e.bottomRef.scrollTop=9999999999999})),setTimeout((function(){h({chatId:r,text:"Hi, I'm ".concat(s.name,". Your imaginary friend."),contactId:s.id,time:new Date}).then((function(t){e.setState({messageList:Object(c.a)(t.data)},(function(){e.bottomRef.scrollTop=9999999999999}))}))}),750)}))},e.setBottomRef=function(t){e.bottomRef=t},e.toggleSidenav=function(){return e.setState({open:!e.state.open})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this.state.currentUser.id;p(a).then((function(e){t.setState({currentUser:Object(n.a)({},e.data)})})),(e=this.state.currentUser.id,f.a.get("/api/chat/contacts/all",{data:e})).then((function(e){return t.setState({contactList:Object(c.a)(e.data)})})),this.updateRecentContactList(),Object(C.d)()&&this.setState({open:!1,isMobile:!0}),window&&(this.windowResizeListener=window.addEventListener("resize",(function(e){Object(C.d)()?t.setState({open:!1,isMobile:!0}):t.setState({open:!0,isMobile:!1})})))}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.windowResizeListener)}},{key:"render",value:function(){var e=this.state,t=e.open,a=e.isMobile,n=e.currentUser,c=e.contactList,r=e.recentContactList,s=e.messageList,o=e.opponentUser,i=e.currentChatRoom;return m.a.createElement(d.a,{className:"chat-sidebar-container sidebar-container"},m.a.createElement(w,{open:t,isMobile:a,toggleSidenav:this.toggleSidenav,contactList:c,recentContactList:r,handleContactClick:this.handleContactClick}),m.a.createElement(L,{open:t,isMobile:a,toggleSidenav:this.toggleSidenav,messageList:s,currentUser:n,opponentUser:o,currentChatRoom:i,setBottomRef:this.setBottomRef,handleMessageSend:this.handleMessageSend}))}}]),a}(l.Component);t.default=O},530:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(10),c=a(0),r=a(5),s=["as","disabled"];function o(e){var t=e.tagName,a=e.disabled,n=e.href,c=e.target,r=e.rel,s=e.onClick,o=e.tabIndex,i=void 0===o?0:o,l=e.type;t||(t=null!=n||null!=c||null!=r?"a":"button");var m={tagName:t};if("button"===t)return[{type:l||"button",disabled:a},m];var d=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==s||s(e)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:i,href:"a"===t&&a?void 0:n,target:"a"===t?c:void 0,"aria-disabled":a||void 0,rel:"a"===t?r:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},m]}var i=c.forwardRef((function(e,t){var a=e.as,c=e.disabled,i=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,s),l=o(Object.assign({tagName:a,disabled:c},i)),m=Object(n.a)(l,2),d=m[0],u=m[1].tagName;return Object(r.jsx)(u,Object.assign({},i,d,{ref:t}))}));i.displayName="Button",t.a=i},566:function(e,t,a){"use strict";var n=a(1),c=a(10),r=a(9),s=a(11),o=a.n(s),i=a(0),l=a(530),m=a(18),d=a(5),u=["as","bsPrefix","variant","size","active","className"],f=i.forwardRef((function(e,t){var a=e.as,s=e.bsPrefix,i=e.variant,f=e.size,p=e.active,b=e.className,v=Object(r.a)(e,u),h=Object(m.a)(s,"btn"),g=Object(l.b)(Object(n.a)({tagName:a},v)),N=Object(c.a)(g,2),E=N[0],x=N[1].tagName;return Object(d.jsx)(x,Object(n.a)(Object(n.a)(Object(n.a)({},v),E),{},{ref:t,className:o()(b,h,p&&"active",i&&"".concat(h,"-").concat(i),f&&"".concat(h,"-").concat(f),v.href&&v.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f}}]);
//# sourceMappingURL=68.fa22db30.chunk.js.map