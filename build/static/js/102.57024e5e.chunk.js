(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[102],{2180:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(14),i=t(15),l=t(16),s=t(0),c=t.n(s),o=t(100),d=t(890),m=t.n(d),g=t(892),p=t.n(g),u=t(955),h=t.n(u),b=t(6),x=t.n(b),F=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={userList:[]},e.defaultSorted=[{dataField:"name",order:"asc"}],e.columns=[{dataField:"index",text:"No"},{dataField:"name",text:"User Name"},{dataField:"email",text:"User Email"},{dataField:"company",text:"Company"},{dataField:"balance",text:"Balance",align:"center",headerAlign:"center"},{dataField:"age",text:"Age",align:"center",headerAlign:"center"}],e.sortableColumn=[{dataField:"index",text:"No",sort:!0},{dataField:"name",text:"User Name",sort:!0},{dataField:"email",text:"User Email",sort:!0},{dataField:"company",text:"Company",sort:!0},{dataField:"balance",text:"Balance",sort:!0,align:"center",headerAlign:"center"},{dataField:"age",text:"Age",sort:!0,align:"center",headerAlign:"center"}],e.paginationOptions={paginationSize:5,pageStartIndex:1,firstPageText:"First",prePageText:"Back",nextPageText:"Next",lastPageText:"Last",nextPageTitle:"First page",prePageTitle:"Pre page",firstPageTitle:"Next page",lastPageTitle:"Last page",showTotal:!0,totalSize:e.state.userList.length},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get("/api/user/all").then((function(a){var t=a.data.map((function(e,a){var t=e.id,n=e.name,r=e.email,i=e.age,l=e.company;return{id:t,name:n,email:r,age:i,balance:e.balance,company:l,index:a+1}}));e.setState({userList:t})}))}},{key:"render",value:function(){var e=this,a=this.state.userList,t=u.Search.SearchBar;return c.a.createElement("div",null,c.a.createElement(o.a,{routeSegments:[{name:"Dashboard",path:"/"},{name:"Data Table",path:"data-table"},{name:"Searchable Data Table"}]}),c.a.createElement(o.h,{title:"Searchable Data Table"},c.a.createElement(h.a,{striped:!0,keyField:"id",data:a,columns:this.sortableColumn,search:!0},(function(a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},c.a.createElement("span",{className:"mb-2 me-1"},"Search:"),c.a.createElement(t,Object.assign({},a.searchProps,{className:"mb-2"}))),c.a.createElement(m.a,Object.assign({},a.baseProps,{bootstrap4:!0,pagination:p()(e.paginationOptions),noDataIndication:"Table is empty"})))}))))}}]),t}(s.Component);a.default=F}}]);
//# sourceMappingURL=102.57024e5e.chunk.js.map