(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{299:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1VVsi",dialogsItems:"Dialogs_dialogsItems__20laH",active:"Dialogs_active__qizMt",messages:"Dialogs_messages__2miXN",message:"Dialogs_message__3MR4j"}},310:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(90),i=a(299),c=a.n(i),o=a(313),l=function(e){var t="/dialogs/"+e.id;return s.a.createElement("div",{className:c.a.dialog+" "+c.a.active},s.a.createElement(o.a,{to:t},e.name))},u=function(e){return s.a.createElement("div",{className:c.a.dialog},e.message)},m=a(311),d=a(105),g=a(109),f=a(59),b=a(58),p=Object(f.a)(50),v=Object(g.a)({form:"dialog-add-message-form"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{component:b.b,name:"newMessageBody",placeholder:"Enter your message",validate:[f.b,p]})),s.a.createElement("div",null,s.a.createElement("button",null,"Send")))}),E=function(e){var t=e.dialogsPage,a=t.dialogs.map(function(e){return s.a.createElement(l,{name:e.name,key:e.id,id:e.id})}),n=t.messages.map(function(e){return s.a.createElement(u,{message:e.message,key:e.id})});t.newMessageBody;return e.isAuth?s.a.createElement("div",{className:c.a.dialogs},s.a.createElement("div",{className:c.a.dialogsItems},a),s.a.createElement("div",{className:c.a.messages},s.a.createElement("div",null,n)),s.a.createElement(v,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})):s.a.createElement(m.a,{to:"/login"})},h=a(10),_=a(30),y=a(31),j=a(33),O=a(32),w=a(21);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(w.a)(e);if(t){var s=Object(w.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(O.a)(this,a)}}var N=function(e){return{isAuth:e.auth.isAuth}},R=a(6);t.default=Object(R.d)(Object(h.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(t){e(Object(r.b)(t))}}}),function(e){var t=function(t){Object(j.a)(n,t);var a=M(n);function n(){return Object(_.a)(this,n),a.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(m.a,{to:"/Login"})}}]),n}(s.a.Component);return Object(h.b)(N)(t)})(E)}}]);
//# sourceMappingURL=1.80eb4986.chunk.js.map