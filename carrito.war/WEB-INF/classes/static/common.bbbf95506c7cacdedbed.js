"use strict";(self.webpackChunkpruebas=self.webpackChunkpruebas||[]).push([[592],{2622:(p,c,e)=>{e.d(c,{c:()=>u});var t=e(7716);let u=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-footer"]],decls:21,vars:0,consts:[["id","footer",1,"footer"],[1,"container"],[1,"hm-footer-copyright","text-center"],[1,"footer-social"],["href","#"],[1,"fa","fa-facebook"],[1,"fa","fa-instagram"],[1,"fa","fa-linkedin"],[1,"fa","fa-pinterest"],[1,"fa","fa-behance"],["href","https://www.therichpost.com/"],["id","scroll-Top"],[1,"return-to-top"],["id","scroll-top","data-toggle","tooltip","data-placement","top","title","","data-original-title","Back to Top","aria-hidden","true",1,"fa","fa-angle-up"]],template:function(a,l){1&a&&(t.TgZ(0,"footer",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"a",4),t._UZ(5,"i",5),t.qZA(),t.TgZ(6,"a",4),t._UZ(7,"i",6),t.qZA(),t.TgZ(8,"a",4),t._UZ(9,"i",7),t.qZA(),t.TgZ(10,"a",4),t._UZ(11,"i",8),t.qZA(),t.TgZ(12,"a",4),t._UZ(13,"i",9),t.qZA(),t.qZA(),t.TgZ(14,"p"),t._uU(15," \xa9copyright. designed and developed by "),t.TgZ(16,"a",10),t._uU(17,"The Deep Web"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",11),t.TgZ(19,"div",12),t._UZ(20,"i",13),t.qZA(),t.qZA(),t.qZA())},styles:[""]}),i})()},8431:(p,c,e)=>{e.r(c),e.d(c,{FooterModule:()=>r});var t=e(8583),u=e(4655),i=e(2622),s=e(7716);const a=[{path:"",component:i.c}];let l=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[u.Bz.forChild(a)],u.Bz]}),o})(),r=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[t.ez,l]]}),o})()},1729:(p,c,e)=>{e.d(c,{U:()=>s});var t=e(2340),u=e(7716),i=e(1841);let s=(()=>{class a{constructor(r){this.http=r,this.url=`${t.N.apiUrl}/producto`}buscarTodo(){return this.http.get(`${this.url}/listar`)}buscarProductosPorCategoria(r){return this.http.get(`${this.url}/listar-por-categoria/${r}`)}crear(r,o){let n=new FormData;return n.set("imagen",r),n.set("json",JSON.stringify(o)),this.http.post(`${this.url}/insertar`,n)}editar(r,o){let n=new FormData;return n.set("imagen",r),n.set("json",JSON.stringify(o)),this.http.put(`${this.url}/actualizar`,n)}editarSinImagen(r){let o=new FormData;return o.set("json",JSON.stringify(r)),this.http.put(`${this.url}/actualizar-sin-imagen`,o)}eliminar(r){return this.http.put(`${this.url}/eliminar`,r)}buscarAdmin(){return this.http.get(`${this.url}/listar-admin`)}}return a.\u0275fac=function(r){return new(r||a)(u.LFG(i.eN))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);