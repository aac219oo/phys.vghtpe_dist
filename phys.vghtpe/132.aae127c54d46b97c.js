"use strict";(self.webpackChunkmy_new_project=self.webpackChunkmy_new_project||[]).push([[132],{2132:(w,s,c)=>{c.r(s),c.d(s,{InfoModule:()=>M});var a=c(6733),g=c(553),n=c(4966),f=c(1314),p=c(7705),l=c(4503);function m(t,o){1&t&&(n.TgZ(0,"div",12),n._uU(1,"our feature"),n.qZA())}function d(t,o){1&t&&n._UZ(0,"img",17),2&t&&n.Q6J("src",o.$implicit,n.LSH)}function u(t,o){if(1&t&&(n.ynx(0),n.YNc(1,d,1,1,"img",16),n.BQk()),2&t){const e=n.oxw().$implicit;n.xp6(),n.Q6J("ngForOf",e.imgUrl)}}function _(t,o){if(1&t&&(n.TgZ(0,"div",13)(1,"div",14),n.YNc(2,u,2,1,"ng-container",15),n.qZA()()),2&t){const e=o.$implicit,i=n.oxw();n.xp6(),n.Udp("grid-template-columns",i.isMobileView?"repeat(1, 1fr)":"repeat("+e.gridCount+", 1fr)"),n.xp6(),n.Q6J("ngIf",e.imgUrl)}}function h(t,o){1&t&&n._UZ(0,"img",17),2&t&&n.Q6J("src",o.$implicit,n.LSH)}function x(t,o){if(1&t&&(n.ynx(0),n.YNc(1,h,1,1,"img",16),n.BQk()),2&t){const e=n.oxw().$implicit;n.xp6(),n.Q6J("ngForOf",e.imgUrl)}}function C(t,o){if(1&t&&(n.TgZ(0,"div",13)(1,"div",14),n.YNc(2,x,2,1,"ng-container",15),n.qZA()()),2&t){const e=o.$implicit,i=n.oxw();n.xp6(),n.Udp("grid-template-columns",i.isMobileView?"repeat(1, 1fr)":"repeat("+e.gridCount+", 1fr)"),n.xp6(),n.Q6J("ngIf",e.imgUrl)}}const O=t=>({en:t});let Z=(()=>{class t{onResize(e){this.checkIfMobileView()}constructor(e,i){this.http=e,this.las=i,this.apiUrl=g.N.ApiUrl+"API/about.aspx",this.fakeAPI="../../assets/json/info-fakeData.json",this.infoData={},this.isMobileView=!1,this.hasError=!0}ngOnInit(){this.http.get(this.apiUrl).subscribe({next:e=>{this.infoData=e,console.log(e)},error:e=>{console.error("Error fetching data from ASPX:",e),this.hasError=!0}})}checkIfMobileView(){this.isMobileView=window.innerWidth<560}static#n=this.\u0275fac=function(i){return new(i||t)(n.Y36(f.eN),n.Y36(p.T))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["info"]],hostBindings:function(i,r){1&i&&n.NdJ("resize",function(P){return r.onResize(P)},!1,n.Jf7)},decls:50,vars:27,consts:[[1,"title-pic",2,"color","white"],[1,"title-pic-text-box"],[1,"title-pic-text-box-CH"],[1,"d-flex","flex-column","justify-content-center","flex-sm-row"],["class","title-pic-text-box-EN",4,"ngIf"],[1,"container-fluid","mb-5"],[1,"about","p-0",3,"ngClass"],[1,"container","container-img"],[1,"mb-5"],["class","row",4,"ngFor","ngForOf"],[1,"title"],[1,"gradient-line"],[1,"title-pic-text-box-EN"],[1,"row"],[1,"d-grid","gap-3"],[4,"ngIf"],["alt","","class","img-fluid",3,"src",4,"ngFor","ngForOf"],["alt","",1,"img-fluid",3,"src"]],template:function(i,r){1&i&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),n._uU(5),n.ALo(6,"translate"),n.qZA()()(),n.YNc(7,m,2,0,"div",4),n.qZA()(),n.TgZ(8,"div",5)(9,"ul",6)(10,"li")(11,"h1"),n._uU(12,"1"),n.qZA(),n.TgZ(13,"p"),n._uU(14),n.ALo(15,"translate"),n.qZA()(),n.TgZ(16,"li")(17,"h1"),n._uU(18,"2"),n.qZA(),n.TgZ(19,"p"),n._uU(20),n.ALo(21,"translate"),n.qZA()(),n.TgZ(22,"li")(23,"h1"),n._uU(24,"3"),n.qZA(),n.TgZ(25,"p"),n._uU(26),n.ALo(27,"translate"),n.qZA()(),n.TgZ(28,"li")(29,"h1"),n._uU(30,"4"),n.qZA(),n.TgZ(31,"p"),n._uU(32),n.ALo(33,"translate"),n.qZA()(),n.TgZ(34,"li")(35,"h1"),n._uU(36,"5"),n.qZA(),n.TgZ(37,"p"),n._uU(38),n.ALo(39,"translate"),n.qZA()()()(),n.TgZ(40,"div",7)(41,"div",8),n.YNc(42,_,3,3,"div",9),n.qZA(),n.TgZ(43,"div",8)(44,"div",10)(45,"h1"),n._uU(46),n.ALo(47,"translate"),n.qZA(),n._UZ(48,"div",11),n.qZA(),n.YNc(49,C,3,3,"div",9),n.qZA()()),2&i&&(n.xp6(5),n.Oqu(n.lcZ(6,11,"info.our_features")),n.xp6(2),n.Q6J("ngIf","zh-TW"===r.las.lang),n.xp6(2),n.Q6J("ngClass",n.VKq(25,O,"en"===r.las.lang)),n.xp6(5),n.Oqu(n.lcZ(15,13,"info.first")),n.xp6(6),n.Oqu(n.lcZ(21,15,"info.second")),n.xp6(6),n.Oqu(n.lcZ(27,17,"info.third")),n.xp6(6),n.Oqu(n.lcZ(33,19,"info.fourth")),n.xp6(6),n.Oqu(n.lcZ(39,21,"info.fifth")),n.xp6(4),n.Q6J("ngForOf",r.infoData.feature),n.xp6(4),n.Oqu(n.lcZ(47,23,"info.environment")),n.xp6(3),n.Q6J("ngForOf",r.infoData.environment))},dependencies:[a.mk,a.sg,a.O5,l.X$],styles:[".container[_ngcontent-%COMP%]{width:100%}.about[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center}.about[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 1%;width:100%;max-width:340px;font-weight:900}.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:6.25rem;color:#80b0ce;font-weight:900;padding:0 10px}.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.375rem}.about.en[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;text-align:center}.container-img[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{padding:10px 0}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:900;text-wrap:nowrap;font-size:1.875rem}.title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:10px;height:10px}@media screen and (max-width: 1024px){img[_ngcontent-%COMP%]{margin:10px 0}.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.25rem}.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.125rem}.about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5rem;color:#80b0ce;font-weight:900;padding:0 10px}.about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:900}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}.title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{overflow-x:hidden;width:100%}}@media screen and (max-width: 560px){.about[_ngcontent-%COMP%]{flex-wrap:wrap}}"]})}return t})();var v=c(6646);let M=(()=>{class t{static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[a.ez,l.aw,v.Bz.forChild([{path:"",component:Z}])]})}return t})()}}]);