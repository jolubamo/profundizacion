"use strict";(self.webpackChunkpruebas=self.webpackChunkpruebas||[]).push([[60],{4073:(E,f,r)=>{r.d(f,{m:()=>w});var i=r(2340),e=r(7716);const s=new e.OlP("JWT_OPTIONS");let h=(()=>{class c{constructor(t=null){this.tokenGetter=t&&t.tokenGetter||function(){}}urlBase64Decode(t){let o=t.replace(/-/g,"+").replace(/_/g,"/");switch(o.length%4){case 0:break;case 2:o+="==";break;case 3:o+="=";break;default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(o)}b64decode(t){let l="";if((t=String(t).replace(/=+$/,"")).length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let a,u,m=0,n=0;u=t.charAt(n++);~u&&(a=m%4?64*a+u:u,m++%4)?l+=String.fromCharCode(255&a>>(-2*m&6)):0)u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(u);return l}b64DecodeUnicode(t){return decodeURIComponent(Array.prototype.map.call(this.b64decode(t),o=>"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(t=this.tokenGetter()){if(!t||""===t)return null;const o=t.split(".");if(3!==o.length)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");const l=this.urlBase64Decode(o[1]);if(!l)throw new Error("Cannot decode the token.");return JSON.parse(l)}getTokenExpirationDate(t=this.tokenGetter()){let o;if(o=this.decodeToken(t),!o||!o.hasOwnProperty("exp"))return null;const l=new Date(0);return l.setUTCSeconds(o.exp),l}isTokenExpired(t=this.tokenGetter(),o){if(!t||""===t)return!0;const l=this.getTokenExpirationDate(t);return o=o||0,null!==l&&!(l.valueOf()>(new Date).valueOf()+1e3*o)}getAuthScheme(t,o){return"function"==typeof t?t(o):t}}return c.\u0275fac=function(t){return new(t||c)(e.LFG(s))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c})();var _=r(5508),d=r(4655);let w=(()=>{class c{constructor(t){this._router=t}permisosNav(t){let o=sessionStorage.getItem(i.N.tokenName);if(o)return this.validarToken(o,t)}validarToken(t,o){return this.isTokenExpired(t)?this.enviarAlLogin():this.analizarRoles(o)}isTokenExpired(t){let l=(new h).getTokenExpirationDate(t);if((new Date).getTime()<=l.getTime())return!1}enviarAlLogin(){return sessionStorage.clear(),localStorage.clear(),this._router.navigate(["/login"]),!1}analizarRoles(t){let m=(new h).decodeToken(sessionStorage.getItem(i.N.tokenName)).authorities;for(let a=0;a<m.length;a++){let u=m[a];for(let n=0;n<t.length;n++){let p=t[n];if(u==p||p==_.r.authenticated)return localStorage.setItem("role",u),!0}}return this._router.navigate(["/home"]),!1}}return c.\u0275fac=function(t){return new(t||c)(e.LFG(d.F0))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},1384:(E,f,r)=>{r.d(f,{G:()=>m});var i=r(5508),e=r(7716),s=r(4655),h=r(5540),g=r(6223),Z=r(568),_=r(4073),d=r(9344),w=r(8583);function c(a,u){1&a&&e._UZ(0,"span",21)}function v(a,u){1&a&&e._UZ(0,"span",22)}function t(a,u){if(1&a){const n=e.EpF();e.TgZ(0,"li",25),e.TgZ(1,"a",7),e.NdJ("click",function(){const A=e.CHM(n).$implicit;return e.oxw(2).listarProductosPorCategoria(A)}),e._uU(2),e.qZA(),e.qZA()}if(2&a){const n=u.$implicit;e.xp6(2),e.Oqu(n.nombre)}}function o(a,u){if(1&a){const n=e.EpF();e.TgZ(0,"li",23),e.TgZ(1,"a"),e._uU(2,"Categorias"),e.qZA(),e.TgZ(3,"ul",24),e.TgZ(4,"li",25),e.TgZ(5,"a",7),e.NdJ("click",function(){return e.CHM(n),e.oxw().todosLosProductos()}),e._uU(6,"Todos los Productos"),e.qZA(),e.qZA(),e.YNc(7,t,3,1,"li",26),e.qZA(),e.qZA()}if(2&a){const n=e.oxw();e.xp6(7),e.Q6J("ngForOf",n.lstCategoria)}}function l(a,u){if(1&a){const n=e.EpF();e.TgZ(0,"li",23),e.TgZ(1,"a"),e._uU(2,"Administracion"),e.qZA(),e.TgZ(3,"ul",24),e.TgZ(4,"li",25),e.TgZ(5,"a",7),e.NdJ("click",function(){return e.CHM(n),e.oxw().pagina("categoria")}),e._uU(6,"Categorias"),e.qZA(),e.qZA(),e.TgZ(7,"li",25),e.TgZ(8,"a",7),e.NdJ("click",function(){return e.CHM(n),e.oxw().pagina("producto")}),e._uU(9,"Productos"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}}let m=(()=>{class a{constructor(n,p,T,A,k,C){this.router=n,this.rutaService=p,this.categoriaService=T,this.navService=A,this.logicaGuardNav=k,this.toastr=C,this.categoria=!0,this.admin=!1,this.sesion=!1,this.title="pruebas"}ngOnInit(){this.navService.navAdmin.subscribe(n=>{this.admin=n}),this.navService.navLogin.subscribe(n=>{this.sesion=n}),this.sesionActivate(),this.canActivate(),this.listarCategoria()}pagina(n){this.router.navigateByUrl(n)}listarProductosPorCategoria(n){this.rutaService.titulo.emit(n.nombre),this.rutaService.lstProduct.emit(n.codigo)}listarCategoria(){this.categoriaService.buscarTodo().subscribe(n=>{this.lstCategoria=n,console.log(this.lstCategoria)})}canActivate(){this.admin=this.logicaGuardNav.permisosNav([i.r.administrador])}sesionActivate(){null==sessionStorage.getItem("token")&&(this.sesion=!this.sesion)}closeS(){this.toastr.success("Sesion Cerrada"),this.sesion=!this.sesion,this.admin=!1,this.router.navigateByUrl("home"),sessionStorage.clear(),localStorage.clear()}todosLosProductos(){this.rutaService.todo.emit(!0),this.rutaService.titulo.emit("Todos los Productos")}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(s.F0),e.Y36(h.z),e.Y36(g.n),e.Y36(Z.t),e.Y36(_.m),e.Y36(d._W))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-header"]],decls:32,vars:4,consts:[["id","home",1,"welcome-hero"],[1,"top-area"],[1,"header-area"],["data-minus-value-desktop","70","data-minus-value-mobile","55","data-speed","1000",1,"navbar","navbar-default","bootsnav","navbar-sticky","navbar-scrollspy"],[1,"container"],[1,"attr-nav"],[1,"search"],[3,"click"],["class","lnr lnr-user",4,"ngIf"],["class","lnr lnr-power-switch",4,"ngIf"],["data-toggle","dropdown",1,"dropdown-toggle"],[1,"lnr","lnr-cart"],[1,"navbar-header"],["type","button","data-toggle","collapse","data-target","#navbar-menu",1,"navbar-toggle"],[1,"fa","fa-bars"],[1,"navbar-brand"],["id","navbar-menu",1,"collapse","navbar-collapse","menu-ui-design"],["data-in","fadeInDown","data-out","fadeOutUp",1,"nav","navbar-nav","navbar-center"],[1,"scroll"],["class","dropdown",4,"ngIf"],[1,"clearfix"],[1,"lnr","lnr-user"],[1,"lnr","lnr-power-switch"],[1,"dropdown"],[1,"dropdown-menu","cart-list","s-cate"],[1,"single-cart-list"],["class","single-cart-list",4,"ngFor","ngForOf"]],template:function(n,p){1&n&&(e.TgZ(0,"header",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"nav",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"ul"),e.TgZ(7,"li",6),e.TgZ(8,"a",7),e.NdJ("click",function(){return p.pagina("login")}),e.YNc(9,c,1,0,"span",8),e.qZA(),e.qZA(),e.TgZ(10,"li",6),e.TgZ(11,"a",7),e.NdJ("click",function(){return p.closeS()}),e.YNc(12,v,1,0,"span",9),e.qZA(),e.qZA(),e.TgZ(13,"li",6),e.TgZ(14,"a",10),e._UZ(15,"span",11),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",12),e.TgZ(17,"button",13),e._UZ(18,"i",14),e.qZA(),e.TgZ(19,"a",15),e._uU(20,"The Deep Web"),e.qZA(),e.qZA(),e.TgZ(21,"div",16),e.TgZ(22,"ul",17),e.TgZ(23,"li",18),e.TgZ(24,"a",7),e.NdJ("click",function(){return p.pagina("home")}),e._uU(25,"Inicio"),e.qZA(),e.qZA(),e.YNc(26,o,8,1,"li",19),e.TgZ(27,"li",18),e.TgZ(28,"a",7),e.NdJ("click",function(){return p.pagina("sobre-nosotros")}),e._uU(29,"Sobre Nosotros"),e.qZA(),e.qZA(),e.YNc(30,l,10,0,"li",19),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(31,"div",20),e.qZA(),e.qZA()),2&n&&(e.xp6(9),e.Q6J("ngIf",p.sesion),e.xp6(3),e.Q6J("ngIf",!p.sesion),e.xp6(14),e.Q6J("ngIf",p.categoria),e.xp6(4),e.Q6J("ngIf",p.admin))},directives:[w.O5,w.sg],styles:[""]}),a})()},5060:(E,f,r)=>{r.r(f),r.d(f,{HeaderModule:()=>_});var i=r(8583),e=r(4655),s=r(1384),h=r(7716);const g=[{path:"",component:s.G}];let Z=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275mod=h.oAB({type:d}),d.\u0275inj=h.cJS({imports:[[e.Bz.forChild(g)],e.Bz]}),d})(),_=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275mod=h.oAB({type:d}),d.\u0275inj=h.cJS({imports:[[i.ez,Z]]}),d})()},6223:(E,f,r)=>{r.d(f,{n:()=>h});var i=r(2340),e=r(7716),s=r(1841);let h=(()=>{class g{constructor(_){this.http=_,this.url=`${i.N.apiUrl}/categoria`}buscarTodo(){return this.http.get(`${this.url}/listar`)}crear(_){return this.http.post(`${this.url}/insertar`,_)}editar(_){return this.http.put(`${this.url}/actualizar`,_)}eliminar(_){return this.http.put(`${this.url}/eliminar`,_)}buscarAdmin(){return this.http.get(`${this.url}/listar-admin`)}}return g.\u0275fac=function(_){return new(_||g)(e.LFG(s.eN))},g.\u0275prov=e.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},568:(E,f,r)=>{r.d(f,{t:()=>e});var i=r(7716);let e=(()=>{class s{constructor(){this.navAdmin=new i.vpe,this.navLogin=new i.vpe}}return s.\u0275fac=function(g){return new(g||s)},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},5540:(E,f,r)=>{r.d(f,{z:()=>e});var i=r(7716);let e=(()=>{class s{constructor(){this.banner=new i.vpe,this.lstProduct=new i.vpe,this.todo=new i.vpe,this.titulo=new i.vpe,this.categoria=new i.vpe}}return s.\u0275fac=function(g){return new(g||s)},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},5508:(E,f,r)=>{r.d(f,{r:()=>i});const i={estudiante:"ROLE_ESTUDIANTE",administrador:"ROLE_ADMIN",profesor:"ROLE_PROFESOR",authenticated:"AUTHENTICATED"}}}]);