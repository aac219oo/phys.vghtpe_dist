"use strict";(self.webpackChunkmy_new_project=self.webpackChunkmy_new_project||[]).push([[556],{556:(nt,_,a)=>{a.r(_),a.d(_,{TeamModule:()=>q});var s=a(6610),c=a(6482),l=a(7415),d=a(8503),h=a(6340),v=a(6104),t=a(3279),u=a(5312),p=a(6409);let g=(()=>{class n{constructor(e){this.http=e,this.apiUrl=u.c.ApiUrl+"API/team.aspx",this.fakeAPI="../../assets/json/team-fakeData.json"}getTeamMembers(){return this.http.get(this.apiUrl)}getTeamMemberById(e){return this.http.get(`${this.apiUrl}?id=${e}`)}static#t=this.\u0275fac=function(i){return new(i||n)(t.KVO(p.Qq))};static#n=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var f=a(8756);function C(n,o){if(1&n&&(t.j41(0,"h5"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.name)}}function x(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.division)}}function T(n,o){if(1&n&&(t.j41(0,"h5"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.en_name)}}function R(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.en_division)}}function F(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.edu)}}function $(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.en_edu)}}function M(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.exp)}}function O(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.en_exp)}}function P(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.spec)}}function G(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.JRh(e.member.en_spec)}}function b(n,o){if(1&n){const e=t.RV6();t.j41(0,"div",1)(1,"a",2),t.bIt("click",function(){t.eBV(e);const m=t.XpG();return t.Njj(m.closeDialog())}),t.EFF(2,"X"),t.k0s(),t.j41(3,"div",3)(4,"div",4),t.nrm(5,"img",5),t.k0s(),t.j41(6,"div",6)(7,"h4"),t.EFF(8),t.k0s(),t.j41(9,"div",7),t.DNE(10,C,2,1,"h5",8)(11,x,2,1,"p",8)(12,T,2,1,"h5",8)(13,R,2,1,"p",8),t.k0s(),t.j41(14,"div",9),t.EFF(15," \u5b78\u6b77\uff1a "),t.j41(16,"ul")(17,"li"),t.DNE(18,F,2,1,"p",8)(19,$,2,1,"p",8),t.k0s()(),t.EFF(20," \u7d93\u6b77\uff1a "),t.j41(21,"ul")(22,"li"),t.DNE(23,M,2,1,"p",8)(24,O,2,1,"p",8),t.k0s()(),t.EFF(25," \u5c08\u9577\uff1a "),t.j41(26,"ul")(27,"li"),t.DNE(28,P,2,1,"p",8)(29,G,2,1,"p",8),t.k0s()()()()()()}if(2&n){const e=t.XpG();t.R7$(5),t.FS9("alt",e.member.name),t.Y8G("src",e.member.filename,t.B4B),t.R7$(3),t.JRh(null==e.member?null:e.member.team_category),t.R7$(2),t.Y8G("ngIf","zh-TW"===e.las.lang),t.R7$(),t.Y8G("ngIf","zh-TW"===e.las.lang),t.R7$(),t.Y8G("ngIf","en"===e.las.lang),t.R7$(),t.Y8G("ngIf","en"===e.las.lang),t.R7$(5),t.Y8G("ngIf","zh-TW"===e.las.lang),t.R7$(),t.Y8G("ngIf","en"===e.las.lang),t.R7$(4),t.Y8G("ngIf","zh-TW"===e.las.lang),t.R7$(),t.Y8G("ngIf","en"===e.las.lang),t.R7$(4),t.Y8G("ngIf","zh-TW"===e.las.lang),t.R7$(),t.Y8G("ngIf","en"===e.las.lang)}}let j=(()=>{class n{constructor(e,i,m,r,tt){this.tms=e,this.dialogRef=i,this.las=m,this.router=r,this.data=tt,this.member=null,this.destroy$=new v.B,this.hasError=!1}ngOnInit(){this.getTeamMemberById(this.data.id),this.router.events.pipe((0,d.p)(e=>e instanceof l.Z),(0,h.Q)(this.destroy$)).subscribe(()=>{this.closeDialog()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getTeamMemberById(e){this.tms.getTeamMemberById(e).subscribe({next:i=>{this.member=i[0].members[0],console.log(i),console.log(this.member)},error:i=>{console.error("Error fetching data from ASPX:",i),this.hasError=!0}})}closeDialog(){this.dialogRef.close()}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(g),t.rXU(c.CP),t.rXU(f.g),t.rXU(l.Ix),t.rXU(c.Vh))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-team-dialog"]],decls:1,vars:1,consts:[["class","personal",4,"ngIf"],[1,"personal"],["href","/team","routerLink","/team",3,"click"],[1,"personal-header"],[1,"personal-img"],[3,"src","alt"],[1,"personal-title"],[1,"personal-title1"],[4,"ngIf"],[1,"main-text"]],template:function(i,m){1&i&&t.DNE(0,b,30,13,"div",0),2&i&&t.Y8G("ngIf",m.member)},dependencies:[s.bT,l.Wk],styles:[".personal[_ngcontent-%COMP%]{max-width:100%;background:linear-gradient(to bottom,#80b0ce 50%,#fff 50%)!important;padding:10px}.personal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:3.125rem;text-decoration:none;position:absolute;right:1%}.personal-header[_ngcontent-%COMP%]{display:flex}.personal-img[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.personal-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:360px;max-width:100%}.personal-title[_ngcontent-%COMP%]{margin:0 30px}.personal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:2rem}.personal-title1[_ngcontent-%COMP%]{display:flex;justify-content:left;align-items:center}.personal-title1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:3rem}.personal-title1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;margin:0 10px}.main-text[_ngcontent-%COMP%]{position:relative;top:6em;max-width:80%;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;font-size:1.125rem;font-weight:500}@media (max-width: 768px){.personal-img[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;width:100%;flex-direction:column}.personal-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto}.personal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.5rem}.personal-title[_ngcontent-%COMP%]{justify-content:left}.personal-title1[_ngcontent-%COMP%]{justify-content:left;flex-direction:column;text-wrap:nowrap}.personal-title1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:2rem}.personal-title1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem}}"]})}return n})();var E=a(27);function I(n,o){if(1&n&&(t.j41(0,"h5"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(4).$implicit;t.R7$(),t.JRh(e.team_category_title)}}function k(n,o){if(1&n&&(t.j41(0,"h5"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(4).$implicit;t.R7$(),t.JRh(e.team_category_en_title)}}function y(n,o){if(1&n&&(t.j41(0,"h4"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).$implicit;t.R7$(),t.JRh(e.name)}}function D(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).$implicit;t.R7$(),t.JRh(e.division)}}function X(n,o){if(1&n&&(t.j41(0,"h4"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).$implicit;t.R7$(),t.JRh(e.en_name)}}function Y(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).$implicit;t.R7$(),t.JRh(e.en_division)}}function w(n,o){if(1&n){const e=t.RV6();t.qex(0),t.j41(1,"button",17),t.bIt("click",function(){t.eBV(e);const m=t.XpG().$implicit,r=t.XpG(3);return t.Njj(r.openDialog(m.id))}),t.nrm(2,"img",18),t.DNE(3,I,2,1,"h5",19)(4,k,2,1,"h5",19)(5,y,2,1,"h4",19)(6,D,2,1,"p",19)(7,X,2,1,"h4",19)(8,Y,2,1,"p",19),t.k0s(),t.bVm()}if(2&n){const e=t.XpG().$implicit,i=t.XpG(3);t.R7$(2),t.FS9("alt",e.name),t.Y8G("src",e.filename,t.B4B),t.R7$(),t.Y8G("ngIf","zh-TW"===i.las.lang),t.R7$(),t.Y8G("ngIf","en"===i.las.lang),t.R7$(),t.Y8G("ngIf","zh-TW"===i.las.lang),t.R7$(),t.Y8G("ngIf","zh-TW"===i.las.lang),t.R7$(),t.Y8G("ngIf","en"===i.las.lang),t.R7$(),t.Y8G("ngIf","en"===i.las.lang)}}function z(n,o){if(1&n&&(t.j41(0,"h5"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(4).$implicit;t.R7$(),t.JRh(e.team_category_title)}}function J(n,o){if(1&n&&(t.j41(0,"h5"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(4).$implicit;t.R7$(),t.JRh(e.team_category_en_title)}}function B(n,o){if(1&n&&(t.j41(0,"h4"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).$implicit;t.R7$(),t.JRh(e.name)}}function U(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).$implicit;t.R7$(),t.JRh(e.division)}}function N(n,o){if(1&n&&(t.j41(0,"h4"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).$implicit;t.R7$(),t.JRh(e.en_name)}}function W(n,o){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).$implicit;t.R7$(),t.JRh(e.en_division)}}function V(n,o){if(1&n&&(t.j41(0,"a",20),t.nrm(1,"img",18),t.DNE(2,z,2,1,"h5",19)(3,J,2,1,"h5",19)(4,B,2,1,"h4",19)(5,U,2,1,"p",19)(6,N,2,1,"h4",19)(7,W,2,1,"p",19),t.k0s()),2&n){const e=t.XpG().$implicit,i=t.XpG(3);t.Y8G("href",e.url,t.B4B),t.R7$(),t.FS9("alt",e.name),t.Y8G("src",e.filename,t.B4B),t.R7$(),t.Y8G("ngIf","zh-TW"===i.las.lang),t.R7$(),t.Y8G("ngIf","en"===i.las.lang),t.R7$(),t.Y8G("ngIf","zh-TW"===i.las.lang),t.R7$(),t.Y8G("ngIf","zh-TW"===i.las.lang),t.R7$(),t.Y8G("ngIf","en"===i.las.lang),t.R7$(),t.Y8G("ngIf","en"===i.las.lang)}}function A(n,o){if(1&n&&(t.j41(0,"div",15),t.DNE(1,w,9,8,"ng-container",16)(2,V,8,9,"ng-template",null,0,t.C5r),t.k0s()),2&n){const e=o.$implicit,i=t.sdS(3);t.R7$(),t.Y8G("ngIf",!e.url)("ngIfElse",i)}}function S(n,o){if(1&n&&(t.j41(0,"div",13),t.DNE(1,A,4,2,"div",14),t.k0s()),2&n){const e=t.XpG().$implicit;t.R7$(),t.Y8G("ngForOf",e.members)}}function H(n,o){if(1&n&&(t.j41(0,"div",8)(1,"div",9)(2,"div",10)(3,"h2"),t.EFF(4),t.j41(5,"span"),t.EFF(6),t.k0s()(),t.nrm(7,"div",11),t.k0s(),t.DNE(8,S,2,1,"div",12),t.k0s()()),2&n){const e=o.$implicit;t.R7$(4),t.SpI("",e.team_category_title," "),t.R7$(2),t.JRh(e.team_category_detail),t.R7$(2),t.Y8G("ngIf",e.members&&e.members.length>0)}}function L(n,o){1&n&&t.nrm(0,"app-error-msg",21),2&n&&t.Y8G("errorCode","databaseError")}let Q=(()=>{class n{constructor(e,i,m){this.dialog=e,this.tms=i,this.las=m,this.teamData=[],this.selectedLanguage="",this.hasError=!1}ngOnInit(){this.fetchData()}fetchData(){this.tms.getTeamMembers().subscribe({next:e=>{this.teamData=e},error:e=>{console.error("Error fetching data from ASPX:",e),this.hasError=!0}})}openDialog(e){this.dialog.open(j,{data:{id:e}}).afterClosed().subscribe(m=>{m&&console.log(m)})}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(c.bZ),t.rXU(g),t.rXU(f.g))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["team"]],decls:10,vars:2,consts:[["isUrl",""],[1,"title-pic",2,"color","white"],[1,"title-pic-text-box"],[1,"title-pic-text-box-CH"],[1,"d-flex","flex-column","justify-content-center","flex-sm-row"],[1,"title-pic-text-box-EN"],["class","content",4,"ngFor","ngForOf"],[3,"errorCode",4,"ngIf"],[1,"content"],[1,"container-fluid"],[1,"title1"],[1,"gradient-line"],["class","main",4,"ngIf"],[1,"main"],["class","main-item1",4,"ngFor","ngForOf"],[1,"main-item1"],[4,"ngIf","ngIfElse"],[1,"btn","p-0","text-start",3,"click"],[3,"src","alt"],[4,"ngIf"],["target","_blank",1,"btn","p-0","text-start",3,"href"],[3,"errorCode"]],template:function(i,m){1&i&&(t.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div"),t.EFF(5,"\u670d\u52d9\u5718\u968a"),t.k0s()()(),t.j41(6,"div",5),t.EFF(7,"service team"),t.k0s()()(),t.DNE(8,H,9,3,"div",6)(9,L,1,1,"app-error-msg",7)),2&i&&(t.R7$(8),t.Y8G("ngForOf",m.teamData),t.R7$(),t.Y8G("ngIf",m.hasError))},dependencies:[s.Sq,s.bT,E.V],styles:[".container[_ngcontent-%COMP%]{margin-left:300px}.team[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:absolute;top:35%;left:50%;font-size:3.125rem;color:#fff;transform:translate(-50%);font-weight:900}.team[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;top:65%;left:50%;font-size:1.5625rem;color:#fff;transform:translate(-50%)}.main[_ngcontent-%COMP%]{margin-bottom:4%;display:grid;grid-template-columns:repeat(5,1fr);gap:40px;width:100%;max-width:100%}.main-item1[_ngcontent-%COMP%]{margin-bottom:30px}.main-item1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}h5[_ngcontent-%COMP%]{font-weight:900}h4[_ngcontent-%COMP%]{font-weight:900;color:#1486cf}p[_ngcontent-%COMP%]{font-weight:900;color:#3eb121}h2[_ngcontent-%COMP%]{text-wrap:nowrap;font-size:1.875rem}.title1[_ngcontent-%COMP%]{margin:30px 0;display:flex;align-items:center}.title1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;font-size:2rem;word-wrap:break-word;white-space:pre-wrap}.title1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#da8d36}.title1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:0 10px}.gradient-line[_ngcontent-%COMP%]{width:50%;height:5px;margin-left:1%;background:linear-gradient(to right,#80b0ce,transparent)}@media only screen and (max-width: 1024px){.container[_ngcontent-%COMP%]{margin:0}.team[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{top:20%;font-size:1.25rem}.team[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9375rem}.main[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}.title1[_ngcontent-%COMP%]{flex-wrap:wrap}.title1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{overflow-x:hidden}.title1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.625rem}.gradient-line[_ngcontent-%COMP%]{width:100%;margin-left:0}}@media screen and (max-width: 768px){.main[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width: 540px){.main[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}"]})}return n})();var Z=a(2882),K=a(4479);let q=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[s.MD,p.q1,Z.h,c.hM,K.G,l.iI.forChild([{path:"",component:Q}])]})}return n})()}}]);