(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/l31":function(t,e,n){"use strict";n.r(e);var i=n("Valr"),c=n("DUip"),r=n("ZZ88"),o=n("5A/x"),b=n("TYT/");function s(t,e){if(1&t&&(b.Vb(0,"tr"),b.Vb(1,"th",6),b.Jc(2),b.Ub(),b.Vb(3,"td"),b.Jc(4),b.Ub(),b.Vb(5,"td"),b.Jc(6),b.Ub(),b.Ub()),2&t){var n=e.$implicit,i=e.index;b.Cb(2),b.Kc(i+1),b.Cb(2),b.Kc(n.payload.doc.data().Username),b.Cb(2),b.Kc(n.payload.doc.data().email)}}function a(t,e){if(1&t&&(b.Vb(0,"tr"),b.Vb(1,"th",6),b.Jc(2),b.Ub(),b.Vb(3,"td"),b.Jc(4),b.Ub(),b.Vb(5,"td"),b.Jc(6),b.Ub(),b.Ub()),2&t){var n=e.$implicit,i=e.index;b.Cb(2),b.Kc(i+1),b.Cb(2),b.Kc(n.payload.doc.data().Username),b.Cb(2),b.Kc(n.payload.doc.data().email)}}var d=[{path:"",component:function(){function t(t){this.firebaseService=t}return t.prototype.ngOnInit=function(){this.sectionDisplay(),this.getUsers()},t.prototype.sectionDisplay=function(){var t=this;this.item=localStorage.getItem("UserDetails"),this.item_sec=JSON.parse(this.item),this.firebaseService.searchUsersSection(this.item_sec.Section).subscribe((function(e){t.section=e,console.log("fghdjksnmbcvsghj",t.section)}))},t.prototype.getUsers=function(){var t=this;this.firebaseService.getUsers().subscribe((function(e){t.Users=e,console.log("fghdjksnmbcvsghj",t.Users)}))},t.\u0275fac=function(e){return new(e||t)(b.Qb(o.a))},t.\u0275cmp=b.Kb({type:t,selectors:[["app-tables"]],decls:33,vars:3,consts:[[1,"row","text_center"],[1,"col-xl-12","col-lg-12","col-md-6"],[1,"card","lg-12","mb-6"],[1,"card-header","text_bold"],[1,"card-body","table","table-hover"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(t,e){1&t&&(b.Vb(0,"div"),b.Vb(1,"div",0),b.Vb(2,"div",1),b.Vb(3,"div",2),b.Vb(4,"div",3),b.Jc(5,"People in the section"),b.Ub(),b.Vb(6,"table",4),b.Vb(7,"thead"),b.Vb(8,"tr"),b.Vb(9,"th"),b.Jc(10,"#"),b.Ub(),b.Vb(11,"th"),b.Jc(12,"Username"),b.Ub(),b.Vb(13,"th"),b.Jc(14,"Email"),b.Ub(),b.Ub(),b.Ub(),b.Vb(15,"tbody"),b.Hc(16,s,7,3,"tr",5),b.Ub(),b.Ub(),b.Ub(),b.Rb(17,"br"),b.Rb(18,"br"),b.Vb(19,"div",2),b.Vb(20,"div",3),b.Jc(21,"All People"),b.Ub(),b.Vb(22,"table",4),b.Vb(23,"thead"),b.Vb(24,"tr"),b.Vb(25,"th"),b.Jc(26,"#"),b.Ub(),b.Vb(27,"th"),b.Jc(28,"Username"),b.Ub(),b.Vb(29,"th"),b.Jc(30,"Email"),b.Ub(),b.Ub(),b.Ub(),b.Vb(31,"tbody"),b.Hc(32,a,7,3,"tr",5),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.qc("@routerTransition",void 0),b.Cb(16),b.qc("ngForOf",e.section),b.Cb(16),b.qc("ngForOf",e.Users))},directives:[i.j],styles:[".text_center[_ngcontent-%COMP%]{text-align:center}.text_bold[_ngcontent-%COMP%]{font-weight:700}"],data:{animation:[Object(r.a)()]}}),t}()}],u=function(){function t(){}return t.\u0275mod=b.Ob({type:t}),t.\u0275inj=b.Nb({factory:function(e){return new(e||t)},imports:[[c.g.forChild(d)],c.g]}),t}(),f=n("vH0B");n.d(e,"TablesModule",(function(){return l}));var l=function(){function t(){}return t.\u0275mod=b.Ob({type:t}),t.\u0275inj=b.Nb({factory:function(e){return new(e||t)},imports:[[i.b,u,f.a]]}),t}()},ZZ88:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("2WDa");function c(){return Object(i.j)("routerTransition",[])}},vH0B:function(t,e,n){"use strict";var i=n("Valr"),c=n("DUip"),r=n("TYT/"),o=function(){function t(){}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[i.b,c.g]]}),t}(),b=function(){function t(){}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[i.b]]}),t}();n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return b}))}}]);