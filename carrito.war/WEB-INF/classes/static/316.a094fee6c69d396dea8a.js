"use strict";(self.webpackChunkpruebas=self.webpackChunkpruebas||[]).push([[316],{316:(k,u,i)=>{i.r(u),i.d(u,{CategoriaModule:()=>L});var l=i(8583),f=i(4655),s=i(2789),d=i(4457),r=i(3679),h=i(5385),p=i(5868),t=i(7716),A=i(6223),N=i(9866),y=i(9344),S=i(6095),U=i(5540),C=i(5618),m=i(8295),Z=i(9983),v=i(7441),T=i(1095),E=i(2458),b=i(6627);function Y(e,n){if(1&e&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.Q6J("value",o.codigo),t.xp6(1),t.hij(" ",o.nombre," ")}}function J(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){return t.CHM(o),t.oxw().onEliminar()}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA(),t.qZA()}}function j(e,n){1&e&&(t.TgZ(0,"th",25),t._uU(1," Codigo "),t.qZA())}function D(e,n){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.codigo," ")}}function Q(e,n){1&e&&(t.TgZ(0,"th",25),t._uU(1," Categoria "),t.qZA())}function w(e,n){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.nombre," ")}}function M(e,n){1&e&&(t.TgZ(0,"th",25),t._uU(1," Estado "),t.qZA())}function F(e,n){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.estado.nombre," ")}}function q(e,n){1&e&&(t.TgZ(0,"th",25),t._uU(1," Editar "),t.qZA())}function z(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",26),t.TgZ(1,"div",27),t.TgZ(2,"button",28),t.NdJ("click",function(){const g=t.CHM(o).$implicit;return t.oxw().onEditarClick(g)}),t.TgZ(3,"mat-icon"),t._uU(4,"edit"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}function B(e,n){1&e&&t._UZ(0,"tr",29)}function I(e,n){1&e&&t._UZ(0,"tr",30)}const R=function(){return[5,10,20]},H=[{path:"",component:(()=>{class e{constructor(o,a,c,g,x,_){this.fb=o,this.categoriaService=a,this.spinner=c,this.toastr=g,this.estadoService=x,this.rutaService=_,this.editar=!1,this.mensajeSatisfactorio="Satisfactorio",this.displayedColumns=["codigo","categoria","estado","editar"],this.dataSource=new s.by([]),this.rutaService.banner.emit(!1)}ngOnInit(){this.initForm(),this.buscar(),this.listarEstado()}initForm(){this.form=this.fb.group({nombre:new r.NI("",r.kI.required),estado:new r.NI("",r.kI.required),codigo:new r.NI("")})}clickEnviar(){let o=new h.E,a=new p.G;this.spinner.show(),o.codigo=this.form.get("codigo").value,o.nombre=this.form.get("nombre").value,a.codigo=this.form.get("estado").value,o.estado=a,console.log(o),this.editar?this.actualizar(o):this.registrar(o)}onCancelar(){this.form.reset(),this.editar=!1}onEliminar(){let o=new h.E,a=new p.G;this.spinner.show(),o.codigo=this.form.get("codigo").value,o.nombre=this.form.get("nombre").value,a.codigo=this.form.get("estado").value,o.estado=a,this.spinner.show(),this.categoriaService.eliminar(o).subscribe(c=>{this.spinner.hide(),this.toastr.success(this.mensajeSatisfactorio),this.form.reset(),this.editar=!1,this.buscar()},c=>this.mensajeError(c))}registrar(o){this.categoriaService.crear(o).subscribe(a=>{this.spinner.hide(),this.toastr.success(this.mensajeSatisfactorio),this.form.reset(),this.buscar()},a=>this.mensajeError(a))}actualizar(o){this.categoriaService.editar(o).subscribe(a=>{this.spinner.hide(),this.toastr.success(this.mensajeSatisfactorio),this.form.reset(),this.buscar()},a=>this.mensajeError(a))}buscar(){this.categoriaService.buscarAdmin().subscribe(o=>{this.dataSource=new s.by(o),this.paginator.firstPage(),this.dataSource.paginator=this.paginator})}mensajeError(o){this.spinner.hide(),console.log(o),this.toastr.error("Ha ocurrido un problema ")}listarEstado(){this.estadoService.buscarTodo().subscribe(o=>{this.lstEstCodigo=o})}onEditarClick(o){this.editar=!0,this.form.get("codigo").setValue(o.codigo),this.form.get("estado").setValue(o.estado.codigo),this.form.get("nombre").setValue(o.nombre),this.estudiante=o.codigo}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(A.n),t.Y36(N.t2),t.Y36(y._W),t.Y36(S.s),t.Y36(U.z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-categoria"]],viewQuery:function(o,a){if(1&o&&t.Gf(d.NW,5),2&o){let c;t.iGM(c=t.CRH())&&(a.paginator=c.first)}},decls:42,vars:10,consts:[[2,"margin-top","10%"],[3,"formGroup"],["fxLayout","row","fxLayoutAlign","space-evenly center"],["matInput","","formControlName","nombre","maxlength","45","placeholder","Name"],["message",""],["align","end"],["formControlName","estado"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","center center"],["mat-raised-button","",3,"disabled","click"],["mat-raised-button","",3,"click"],["class","boton",3,"click",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","codigo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","categoria"],["matColumnDef","estado"],["matColumnDef","editar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],[3,"value"],[1,"boton",3,"click"],["mat-header-cell",""],["mat-cell",""],[1,"example-button-container"],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,a){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div"),t.TgZ(2,"form",1),t._UZ(3,"br"),t.TgZ(4,"div",2),t.TgZ(5,"mat-form-field"),t.TgZ(6,"mat-label"),t._uU(7,"Nombre"),t.qZA(),t._UZ(8,"input",3,4),t.TgZ(10,"mat-hint",5),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"mat-form-field"),t.TgZ(13,"mat-label"),t._uU(14,"Estado"),t.qZA(),t.TgZ(15,"mat-select",6),t.YNc(16,Y,2,2,"mat-option",7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",8),t.TgZ(18,"button",9),t.NdJ("click",function(){return a.clickEnviar()}),t._uU(19," Enviar "),t.qZA(),t.TgZ(20,"button",10),t.NdJ("click",function(){return a.onCancelar()}),t._uU(21," Cancelar "),t.qZA(),t.YNc(22,J,3,0,"button",11),t.qZA(),t.qZA(),t._UZ(23,"br"),t._UZ(24,"br"),t.qZA(),t.TgZ(25,"div",12),t.TgZ(26,"table",13),t.ynx(27,14),t.YNc(28,j,2,0,"th",15),t.YNc(29,D,2,1,"td",16),t.BQk(),t.ynx(30,17),t.YNc(31,Q,2,0,"th",15),t.YNc(32,w,2,1,"td",16),t.BQk(),t.ynx(33,18),t.YNc(34,M,2,0,"th",15),t.YNc(35,F,2,1,"td",16),t.BQk(),t.ynx(36,19),t.YNc(37,q,2,0,"th",15),t.YNc(38,z,5,0,"td",16),t.BQk(),t.YNc(39,B,1,0,"tr",20),t.YNc(40,I,1,0,"tr",21),t.qZA(),t._UZ(41,"mat-paginator",22),t.qZA(),t.qZA()),2&o){const c=t.MAs(9);t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(9),t.hij("",c.value.length," / 45"),t.xp6(5),t.Q6J("ngForOf",a.lstEstCodigo),t.xp6(2),t.Q6J("disabled",!a.form.valid),t.xp6(4),t.Q6J("ngIf",a.editar),t.xp6(4),t.Q6J("dataSource",a.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,R))}},directives:[r._Y,r.JL,r.sg,C.xw,C.Wh,m.KE,m.hX,Z.Nt,r.Fj,r.JJ,r.u,r.nD,m.bx,v.gD,l.sg,T.lW,l.O5,s.BZ,s.w1,s.fO,s.Dz,s.as,s.nj,d.NW,E.ey,b.Hw,s.ge,s.ev,s.XQ,s.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[f.Bz.forChild(H)],f.Bz]}),e})();var G=i(3356);let L=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,O,G.o9,r.UX,Z.c,m.lN,T.ot,b.Ps,v.LD,s.p0,d.TU]]}),e})()}}]);