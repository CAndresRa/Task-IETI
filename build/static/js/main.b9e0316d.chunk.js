(this["webpackJsonptask-planner-app"]=this["webpackJsonptask-planner-app"]||[]).push([[0],{122:function(e,a,t){e.exports=t(151)},127:function(e,a,t){},128:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},129:function(e,a,t){},130:function(e,a,t){},149:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),i=t.n(r);t(127),t(128),t(129);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(20),o=t(21),c=t(23),m=t(22),d=t(104),u=t(13),h=t(191),p=t(195),E=t(214),b=t(196),g=(t(130),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(s.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"login-form"},l.a.createElement("h1",null,"Login"),l.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(E.a,{htmlFor:"email"},"Email Address"),l.a.createElement(p.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),l.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(E.a,{htmlFor:"password"},"Password"),l.a.createElement(p.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),l.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",lassName:"submit",href:"/mainpage"},"Sign in"))}}]),t}(n.Component)),f=t(106),O=t(10),C=t(197),y=t(48),v=t(198),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(s.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(C.a,null,l.a.createElement(v.a,null,l.a.createElement(y.a,null,this.props.description),l.a.createElement(y.a,null,this.props.status," - ",new Date(this.props.dueDate).toString()),l.a.createElement(y.a,null,this.props.responsible.name+" ",this.props.responsible.email)))}}]),t}(n.Component),j=t(199),w=t(102),S=t.n(w),D=t(200),B=t(206),N=t(202),x=t(203),F=t(201),W=t(213),I=t(205),T=t(105),P=(t(148),t(16)),R=t.n(P),L=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){e.preventDefault();var a={description:n.state.description,responsible:{name:n.state.name,email:n.state.email},status:n.state.status,dueDate:n.state.dueDate};n.props.addTask(a),n.handleClose()},console.log(n.props),n.state={open:!1,status:"",dueDate:R()(),description:"",name:"",email:""},n.setOpen=n.setOpen.bind(Object(O.a)(n)),n.handleClickOpen=n.handleClickOpen.bind(Object(O.a)(n)),n.handleClose=n.handleClose.bind(Object(O.a)(n)),n.setStatus=n.setStatus.bind(Object(O.a)(n)),n.handleChangeStatus=n.handleChangeStatus.bind(Object(O.a)(n)),n.handleDateChange=n.handleDateChange.bind(Object(O.a)(n)),n.handleChangeDescription=n.handleChangeDescription.bind(Object(O.a)(n)),n.handleChangeName=n.handleChangeName.bind(Object(O.a)(n)),n.handleChangeEmail=n.handleChangeEmail.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n.setState=n.setState.bind(Object(O.a)(n)),n}return Object(o.a)(t,[{key:"setOpen",value:function(e){var a=this;console.log(e),this.setState({open:e},(function(){console.log("Open: ",a.state)}))}},{key:"handleClickOpen",value:function(){this.setOpen(!0)}},{key:"handleClose",value:function(){this.setOpen(!1)}},{key:"setStatus",value:function(e){this.setState={status:e}}},{key:"handleChangeStatus",value:function(e){this.setState({status:e.target.value})}},{key:"handleDateChange",value:function(e){console.log(e),this.setState({dueDate:e})}},{key:"handleChangeDescription",value:function(e){e.preventDefault(),this.setState({description:e.target.value})}},{key:"handleChangeName",value:function(e){e.preventDefault(),this.setState({name:e.target.value})}},{key:"handleChangeEmail",value:function(e){console.log("Email "+e.target.value),e.preventDefault(),this.setState({email:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,{color:"primary","aria-label":"add",onClick:this.handleClickOpen},l.a.createElement(S.a,null)),l.a.createElement(D.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},l.a.createElement(F.a,{id:"form-dialog-title"},"New Task"),l.a.createElement(N.a,null,l.a.createElement(x.a,null,"Add New Task."),l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(E.a,{htmlFor:"description"},"Description"),l.a.createElement(p.a,{id:"description",type:"text",name:"description",onChange:this.handleChangeDescription,autoFocus:!0})),l.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(E.a,{htmlFor:"name"},"Name"),l.a.createElement(p.a,{name:"name",type:"text",id:"name",onChange:this.handleChangeName})),l.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(E.a,{htmlFor:"email"},"Email"),l.a.createElement(p.a,{name:"email",type:"text",id:"email",onChange:this.handleChangeEmail})),l.a.createElement(h.a,null,l.a.createElement(E.a,{id:"demo-simple-select-label"},"Status"),l.a.createElement(W.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:this.handleChangeStatus},l.a.createElement(I.a,{value:"Ready"},"Ready"),l.a.createElement(I.a,{value:"InProgress"},"InProgress"),l.a.createElement(I.a,{value:"Done"},"Done"))),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(h.a,null,l.a.createElement(T.a,{id:"due-date",selected:this.state.dueDate,placeholderText:"Due date",onChange:this.handleDateChange}))),l.a.createElement(b.a,{type:"submit",color:"primary"},"Add"))),l.a.createElement(B.a,null,l.a.createElement(b.a,{onClick:this.handleClose,color:"primary"},"Cancel"))))}}]),t}(n.Component),q=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),n=a.call(this,e),console.log(n.props.taksList),n.state={items:n.props.taksList,open:!1,original:n.props.taksList},n.setOpen=n.setOpen.bind(Object(O.a)(n)),n.handleClickOpen=n.handleClickOpen.bind(Object(O.a)(n)),n.handleClose=n.handleClose.bind(Object(O.a)(n)),n.handleChangeOrderByStatus=n.handleChangeOrderByStatus.bind(Object(O.a)(n)),n.handleChangeOrderByUsers=n.handleChangeOrderByUsers.bind(Object(O.a)(n)),n.handleChangeOrderByDate=n.handleChangeOrderByDate.bind(Object(O.a)(n)),n.handleOriginalList=n.handleOriginalList.bind(Object(O.a)(n)),n.addTask=n.addTask.bind(Object(O.a)(n)),n}return Object(o.a)(t,[{key:"addTask",value:function(e){console.log(e),this.setState((function(a){return{items:[].concat(Object(f.a)(a.items),[e])}}))}},{key:"setOpen",value:function(e){var a=this;console.log(e),this.setState({open:e},(function(){console.log("Open: ",a.state)}))}},{key:"handleClickOpen",value:function(){this.setOpen(!0)}},{key:"handleClose",value:function(){this.setOpen(!1)}},{key:"handleChangeOrderByStatus",value:function(e){var a=this;console.log("Click order by Status",e.target.value);var t=this.state.items.filter((function(a){return a.status===e.target.value}));this.setState({items:t},(function(){console.log("ChangeOrderByStatus: ",a.state)})),this.handleClose()}},{key:"handleChangeOrderByUsers",value:function(){var e=this;console.log("Click Order by Names");var a=this.state.items.sort((function(e,a){return e.name>a.name?1:-1}));this.setState({items:a},(function(){console.log("ChangeOrderByUserName: ",e.state)})),this.handleClose()}},{key:"handleChangeOrderByDate",value:function(){var e=this;console.log("Click order by Date");var a=this.state.items.sort((function(e,a){return a.dueDate-e.dueDate}));this.setState({items:a},(function(){console.log("ChangeOrderByDate: ",e.state)})),this.handleClose()}},{key:"handleOriginalList",value:function(){var e=this;this.setState({items:this.state.original},(function(){console.log("Original: ",e.state)}))}},{key:"render",value:function(){var e=this.state.items.map((function(e,a){return l.a.createElement(k,{key:a,description:e.description,dueDate:e.dueDate,responsible:e.responsible,status:e.status})}));return l.a.createElement("div",null,l.a.createElement("div",{style:{margin:"35px"}},l.a.createElement(L,{addTask:this.addTask})),l.a.createElement("div",null,l.a.createElement(D.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},l.a.createElement(F.a,{id:"form-dialog-title"},"Filter By"),l.a.createElement(N.a,null,l.a.createElement(x.a,null,"Select a option to filter in list."),l.a.createElement(h.a,null,l.a.createElement(b.a,{color:"primary","aria-label":"add",onClick:this.handleChangeOrderByUsers},"Ordenar por nombre")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a,null,l.a.createElement("label",null,"Order By Status"),l.a.createElement(E.a,{id:"demo-simple-select-label"}),l.a.createElement(W.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.status,onChange:this.handleChangeOrderByStatus},l.a.createElement(I.a,{value:"ready"},"Ready"),l.a.createElement(I.a,{value:"InProgress"},"InProgress"),l.a.createElement(I.a,{value:"done"},"Done"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a,null,l.a.createElement(b.a,{color:"primary","aria-label":"add",onClick:this.handleChangeOrderByDate},"Order By Date"))))),l.a.createElement("div",{style:{padding:"250px",paddingTop:"35px"}},l.a.createElement(b.a,{color:"primary","aria-label":"add",onClick:this.handleClickOpen},"Filter"),l.a.createElement(b.a,{onClick:this.handleOriginalList,color:"primary"},"Remove Filter"),e))}}]),t}(n.Component),U=t(69),A=t(79),z=t(107),G=t(207),J=t(210),K=t(211),M=t(212),$=t(103),H=t.n($),Q=t(216),V=t(204),X=t(153),Y=t(209),Z=t(208),_=t(215),ee=Object(G.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}));function ae(){var e,a=ee(),t=l.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(z.a)(t,2),r=n[0],i=n[1],s=function(e,a){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(Object(A.a)(Object(A.a)({},r),{},Object(U.a)({},e,a)))}};return l.a.createElement("div",{className:a.root},l.a.createElement(J.a,{position:"static"},l.a.createElement(K.a,null,l.a.createElement(M.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(H.a,{onClick:s("left",!0)}),l.a.createElement(Q.a,{open:r.left,onClose:s("left",!1)},(e="left",l.a.createElement("div",{className:a.list,role:"presentation",onClick:s(e,!1),onKeyDown:s(e,!1)},l.a.createElement(V.a,{className:a.root},l.a.createElement(X.a,{alignItems:"flex-start"},l.a.createElement(Z.a,null,l.a.createElement(_.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"})),l.a.createElement(Y.a,{primary:"Carlos Andr\xe9s Ram\xedrez",secondary:l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},"Ingenier\xeda de sistemas"))}))))))),l.a.createElement(y.a,{variant:"h6",className:a.title},l.a.createElement(b.a,{style:{fontSize:"20px"},color:"inherit",href:"/mainpage"},"Taks")),l.a.createElement(b.a,{color:"inherit",href:"/userprofile"},"Update Profile"),l.a.createElement(b.a,{color:"inherit",href:"/"},"Exit"))))}var te=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),n=a.call(this,e),console.log(n.props.items),n.state={items:n.props.items},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(ae,null),l.a.createElement(q,{taksList:this.state.items}))}}]),t}(n.Component),ne=(t(149),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(s.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(ae,null),l.a.createElement("div",{className:"update-form"},l.a.createElement("h1",null,"Update Profile"),l.a.createElement(_.a,{alt:"Remy Sharp",style:{justifyContent:"center",display:"flex",width:100,height:100},src:"/static/images/avatar/1.jpg"}),l.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(E.a,{htmlFor:"email"},"Email Address"),l.a.createElement(p.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),l.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(E.a,{htmlFor:"password"},"Current Password"),l.a.createElement(p.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),l.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(E.a,{htmlFor:"password"},"New Password"),l.a.createElement(p.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),l.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(E.a,{htmlFor:"password"},"Confirm New Password"),l.a.createElement(p.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),l.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",lassName:"submit",href:"/mainpage"},"Update")))}}]),t}(n.Component)),le=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0,component:g}),l.a.createElement(u.a,{path:"/mainpage",exact:!0,component:function(){return l.a.createElement(te,{items:re})}}),l.a.createElement(u.a,{path:"/userprofile",exact:!0,component:ne})))}}]),t}(n.Component),re=[{description:"Ieti - lab",responsible:{name:"Andres Ramirez",email:"andres@gmail.com"},status:"ready",dueDate:126464645646},{description:"Ieti - lab",responsible:{name:" Carlos Andres Ramirez",email:"andres@gmail.com"},status:"done",dueDate:166484645646},{description:"Ieti - lab",responsible:{name:"Carlos Ramirez",email:"andres@gmail.com"},status:"ready",dueDate:156474645646}];i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.b9e0316d.chunk.js.map