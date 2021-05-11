(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={filterstyle:"Filter_filterstyle__m3qV-",inputstyle:"Filter_inputstyle__fLYBN"}},28:function(t,e,n){t.exports={container:"Container_container__2nxVi"}},42:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(11),r=n.n(a),o=n(6),s=(n(42),n(9)),u=n.n(s),i=n(3),b={addContactRequest:Object(i.b)("contacts/addRequest"),addContactSuccess:Object(i.b)("contacts/addSuccess"),addContactError:Object(i.b)("contacts/addError"),fetchContactRequest:Object(i.b)("contacts/fetchRequest"),fetchContactSuccess:Object(i.b)("contacts/fetchSuccess"),fetchContactError:Object(i.b)("contacts/fetchError"),removeContactRequest:Object(i.b)("contacts/removeRequest"),removeContactSuccess:Object(i.b)("contacts/removeSuccess"),removeContactError:Object(i.b)("contacts/removeError"),changeFilter:Object(i.b)("contacts/changeFilter")},l=n(1),d=Object(o.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(c.toLowerCase())}))}}),(function(t){return{onRemove:function(e){return t(b.removeContacts(e))}}}))((function(t){var e=t.contacts,n=t.onRemove;return Object(l.jsx)("ul",{className:u.a.TaskList,children:e.map((function(t){return Object(l.jsxs)("li",{className:u.a.TaskList_item,children:[t.name+": "+t.number,Object(l.jsx)("span",{className:u.a.buttonstyle,children:Object(l.jsx)("button",{className:u.a.TaskList_button,type:"button",name:"delete",onClick:function(){return n(t.id)}})})]},t.id)}))})})),f=n(16),j=n.n(f),h={onChangeFilter:b.changeFilter},O=Object(o.b)((function(t){return{value:t.contacts.filter}}),h)((function(t){var e=t.value,n=t.onChangeFilter;return Object(l.jsxs)("div",{className:j.a.filterstyle,children:["Find contacts by name",Object(l.jsx)("input",{className:j.a.inputstyle,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})),m=n(2),_=n(26),C=n(27),p=n(31),v=n(30),k=n(7),x=n.n(k),E=n(10),T=n.n(E);T.a.defaults.baseURL="http://localhost:4040";var L,y,g,S={addContact:function(t,e){return function(n){n(b.addContactRequest()),T.a.post("/contacts",{name:t,number:e}).then((function(t){var e=t.data;return n(b.addContactSuccess(e))})).catch((function(t){return n(b.addContactError(t))}))}},fetchContacts:function(){return function(t){t(b.fetchContactRequest()),T.a.get("/contacts").then((function(e){var n=e.data;return t(b.fetchContactSuccess(n))})).catch((function(e){return t(b.fetchContactError(e))}))}},deleteContact:function(t){return function(e){e(b.deleteContactRequest()),T.a.delete("/contacts/".concat(t)).then((function(){return e(b.deleteContactSuccess(t))})).catch((function(t){return e(b.deleteContactError(t))}))}}},N=function(t){Object(p.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(_.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(m.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;t.props.onAddContact(c,a),t.setState({name:"",number:""})},t}return Object(C.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("form",{className:x.a.TaskEditor,onSubmit:this.handleSubmit,children:[Object(l.jsxs)("label",{className:x.a.TaskEditor_label,children:["Name:",Object(l.jsx)("input",{className:x.a.TaskEditor_input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:this.state.name,onChange:this.handleChange})]}),Object(l.jsxs)("label",{className:x.a.TaskEditor_label,children:["Number:",Object(l.jsx)("input",{className:x.a.TaskEditor_input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(l.jsx)("button",{className:x.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),R={onAddContact:S.addContact},q=Object(o.b)(null,R)(N),F=n(28),w=n.n(F),A=function(t){var e=t.children;return Object(l.jsx)("div",{className:w.a.container,children:e})},z=n(12),B=function(t){return t.contacts.filter},V=(Object(z.a)([function(t){return t.contacts.items},B],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),function(t){return t.contacts.loading}),Y=function(t){return t.contacts.error},X=Object(o.b)((function(t){return{isLoading:V(t),isError:Y(t)}}),(function(t){return{fetchContacts:function(){return t(S.fetchContacts())}}}))((function(t){var e=t.fetchContacts;return Object(c.useEffect)((function(){return e()}),[]),Object(l.jsx)(A,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(q,{}),Object(l.jsx)(O,{}),Object(l.jsx)(d,{})]})})})),Z=n(13),I=n(4),J=b.fetchContactRequest,D=b.fetchContactSuccess,K=b.fetchContactError,P=b.addContactRequest,U=b.addContactSuccess,$=b.addContactError,G=b.deleteContactRequest,H=b.deleteContactSuccess,M=b.deleteContactError,Q=b.changeFilter,W=Object(i.c)([],(L={},Object(m.a)(L,D,(function(t,e){return e.payload})),Object(m.a)(L,U,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),Object(m.a)(L,H,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),L)),tt=Object(i.c)("",Object(m.a)({},Q,(function(t,e){return e.payload}))),et=Object(i.c)(!1,(y={},Object(m.a)(y,P,(function(){return!0})),Object(m.a)(y,U,(function(){return!1})),Object(m.a)(y,$,(function(){return!1})),Object(m.a)(y,G,(function(){return!0})),Object(m.a)(y,H,(function(){return!1})),Object(m.a)(y,M,(function(){return!1})),Object(m.a)(y,J,(function(){return!0})),Object(m.a)(y,D,(function(){return!1})),Object(m.a)(y,K,(function(){return!1})),y)),nt=Object(i.c)(!1,(g={},Object(m.a)(g,P,(function(){return!1})),Object(m.a)(g,U,(function(){return!1})),Object(m.a)(g,$,(function(){return!0})),Object(m.a)(g,G,(function(){return!1})),Object(m.a)(g,H,(function(){return!1})),Object(m.a)(g,M,(function(){return!0})),Object(m.a)(g,J,(function(){return!1})),Object(m.a)(g,D,(function(){return!1})),Object(m.a)(g,K,(function(){return!0})),g)),ct=Object(I.b)({items:W,filter:tt,loading:et,error:nt}),at=n(8),rt=n(29),ot=n.n(rt),st=[].concat(Object(Z.a)(Object(i.d)({serializableCheck:{ignoredActions:[at.a,at.f,at.b,at.c,at.d,at.e]}})),[ot.a]),ut=Object(i.a)({reducer:{contacts:ct},middleware:st,devTools:!1});r.a.render(Object(l.jsx)(o.a,{store:ut,children:Object(l.jsx)(X,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={TaskEditor:"ContactForm_TaskEditor__1Xh9I",TaskEditor_label:"ContactForm_TaskEditor_label__zV_-B",TaskEditor_input:"ContactForm_TaskEditor_input__1y811",TaskEditorinput:"ContactForm_TaskEditorinput__2qrre",TaskEditor_button:"ContactForm_TaskEditor_button__28K68"}},9:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__xyjBb",TaskList_item:"ContactList_TaskList_item__1tsYN",completed:"ContactList_completed__3ovXY",TaskList_text:"ContactList_TaskList_text__3bmaX",TaskList_actions:"ContactList_TaskList_actions__omA3Y",TaskList_button:"ContactList_TaskList_button__1lVzC",buttonstyle:"ContactList_buttonstyle__Sid76"}}},[[63,1,2]]]);
//# sourceMappingURL=main.037215df.chunk.js.map