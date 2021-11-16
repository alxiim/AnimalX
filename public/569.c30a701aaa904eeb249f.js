"use strict";(self.webpackChunkanimalx=self.webpackChunkanimalx||[]).push([[569],{8569:(v,m,i)=>{i.r(m),i.d(m,{AdminModule:()=>A});var d=i(8583),u=i(1742),s=i(7404),e=i(639),n=i(665),l=i(31),g=i(4242);function p(o,a){if(1&o&&(e.TgZ(0,"option",17),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}const f=[{path:"products",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-manage-products-page"]],decls:2,vars:0,template:function(t,r){1&t&&(e.TgZ(0,"p"),e._uU(1,"manage-products-page works!"),e.qZA())},styles:[""]}),o})()},{path:"products/add",component:(()=>{class o{constructor(t,r,c){this._fb=t,this._productService=r,this._categoryService=c,this.form=this._fb.group({name:[""],categoryId:[""],description:[""],price:[""],country:[""],color:[""]}),this.categories$=this._categoryService.query(),this.image=null}ngOnInit(){}createProduct(){if(!this.form.valid)return void console.log("errors");const t=new FormData;for(const r in this.form.value)t.append((0,s.a)(r),this.form.value[r]);this.image&&t.append("image",this.image,this.image.name),this._productService.create(t).subscribe(r=>{console.log(r)})}createCategory(){const t=prompt("Geef een naam op voor de nieuwe categorie");t&&this._categoryService.create({name:t}).subscribe(()=>{this.categories$=this._categoryService.query()})}handleFileInput(t){this.image=t.target.files.item(0)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(n.qu),e.Y36(l.M),e.Y36(g.H))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-product-page"]],decls:29,vars:5,consts:[[1,"container","my-5"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","formControlName","name","required","",1,"form-control"],["for","categoryId",1,"form-label"],["id","categoryId","formControlName","categoryId","required","",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"text-end"],[1,"link-secondary",3,"click"],["for","description",1,"form-label"],["id","description","formControlName","description","required","",1,"form-control"],["for","price",1,"form-label"],["type","number","id","price","formControlName","price","step","0.01","required","",1,"form-control"],["for","image",1,"form-label"],["type","file","id","image",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"form",1),e.NdJ("ngSubmit",function(){return r.createProduct()}),e.TgZ(2,"div",2),e.TgZ(3,"label",3),e._uU(4," Name "),e.qZA(),e._UZ(5,"input",4),e.qZA(),e.TgZ(6,"div",2),e.TgZ(7,"label",5),e._uU(8," Category "),e.qZA(),e.TgZ(9,"select",6),e.YNc(10,p,2,2,"option",7),e.ALo(11,"async"),e.qZA(),e.TgZ(12,"div",8),e.TgZ(13,"a",9),e.NdJ("click",function(){return r.createCategory()}),e._uU(14,"Nieuwe categorie maken"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"div",2),e.TgZ(16,"label",10),e._uU(17," Description "),e.qZA(),e._UZ(18,"textarea",11),e.qZA(),e.TgZ(19,"div",2),e.TgZ(20,"label",12),e._uU(21," Price "),e.qZA(),e._UZ(22,"input",13),e.qZA(),e.TgZ(23,"div",2),e.TgZ(24,"label",14),e._uU(25," Image "),e.qZA(),e.TgZ(26,"input",15),e.NdJ("change",function(y){return r.handleFileInput(y)}),e.qZA(),e.qZA(),e.TgZ(27,"button",16),e._uU(28,"Add Product"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("formGroup",r.form),e.xp6(9),e.Q6J("ngForOf",e.lcZ(11,3,r.categories$)),e.xp6(17),e.Q6J("disabled",!r.form.valid))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.Q7,n.EJ,d.sg,n.wV,n.YN,n.Kr],pipes:[d.Ov],styles:[""]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(f)],u.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,Z,n.UX]]}),o})()}}]);