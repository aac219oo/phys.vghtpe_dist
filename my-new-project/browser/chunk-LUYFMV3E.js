import{d as H,e as T}from"./chunk-USBDKGM5.js";import"./chunk-44XWPHLD.js";import{a as G,b as q,c as J,d as K}from"./chunk-R6C5M4CG.js";import"./chunk-NCJ5SWAR.js";import{a as X}from"./chunk-DDGGW3FN.js";import{$ as v,$b as L,Ga as c,L as j,Na as _,Pb as R,Qb as P,R as z,S as F,Sa as a,Ta as o,U as k,Ua as x,Ub as W,W as h,Wb as I,X as A,Xb as N,Ya as M,aa as C,cc as V,db as O,dc as B,ec as U,fb as p,h as S,ib as b,kb as m,lb as s,mb as $,pa as u,va as i,wa as g,x as D}from"./chunk-FMEZNCYJ.js";var y=(()=>{let n=class n{constructor(r){this.http=r,this.apiUrl=X.ApiUrl+"API/team.aspx",this.fakeAPI="../../assets/json/team-fakeData.json"}getTeamMembers(){return this.http.get(this.fakeAPI)}};n.\u0275fac=function(l){return new(l||n)(k(I))},n.\u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();function ot(t,n){if(t&1&&(a(0,"h5"),m(1),o()),t&2){let e=p(2);i(),s(e.member.name)}}function at(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p(2);i(),s(e.member.division)}}function rt(t,n){if(t&1&&(a(0,"h5"),m(1),o()),t&2){let e=p(2);i(),s(e.member.en_name)}}function mt(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p(2);i(),s(e.member.en_division)}}function lt(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p(2);i(),s(e.member.edu)}}function ct(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p(2);i(),s(e.member.en_edu)}}function pt(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p(2);i(),s(e.member.exp)}}function st(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p(2);i(),s(e.member.en_exp)}}function dt(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p(2);i(),s(e.member.spec)}}function _t(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p(2);i(),s(e.member.en_spec)}}function gt(t,n){if(t&1){let e=M();a(0,"div",1)(1,"a",2),O("click",function(){v(e);let l=p();return C(l.closeDialog())}),m(2,"X"),o(),a(3,"div",3)(4,"div",4),x(5,"img",5),o(),a(6,"div",6)(7,"h4"),m(8),o(),a(9,"div",7),_(10,ot,2,1,"h5",8)(11,at,2,1,"p",8)(12,rt,2,1,"h5",8)(13,mt,2,1,"p",8),o(),a(14,"div",9),m(15," \u5B78\u6B77\uFF1A "),a(16,"ul")(17,"li"),_(18,lt,2,1,"p",8),o(),a(19,"li"),_(20,ct,2,1,"p",8),o()(),m(21," \u7D93\u6B77\uFF1A "),a(22,"ul")(23,"li"),_(24,pt,2,1,"p",8),o(),a(25,"li"),_(26,st,2,1,"p",8),o()(),m(27," \u5C08\u9577\uFF1A "),a(28,"ul")(29,"li"),_(30,dt,2,1,"p",8),o(),a(31,"li"),_(32,_t,2,1,"p",8),o()()()()()()}if(t&2){let e=p();i(5),b("alt",e.member.Column1),c("src",e.member.Column1,u),i(3),s(e.member==null?null:e.member.team_category),i(2),c("ngIf",e.las.lang==="zh-TW"),i(),c("ngIf",e.las.lang==="zh-TW"),i(),c("ngIf",e.las.lang==="en"),i(),c("ngIf",e.las.lang==="en"),i(5),c("ngIf",e.las.lang==="zh-TW"),i(2),c("ngIf",e.las.lang==="en"),i(4),c("ngIf",e.las.lang==="zh-TW"),i(2),c("ngIf",e.las.lang==="en"),i(4),c("ngIf",e.las.lang==="zh-TW"),i(2),c("ngIf",e.las.lang==="en")}}var Y=(()=>{let n=class n{constructor(r,l,d,f,w){this.tms=r,this.dialogRef=l,this.las=d,this.router=f,this.data=w,this.member=null,this.destroy$=new S,this.hasError=!1}ngOnInit(){this.getTeamMemberById(this.data.id),this.router.events.pipe(D(r=>r instanceof L),j(this.destroy$)).subscribe(()=>{this.closeDialog()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getTeamMemberById(r){this.tms.getTeamMembers().subscribe({next:l=>{let d=l.find(f=>f.members.some(w=>w.id===r));d?(this.member=d.members.find(f=>f.id===r),console.log(this.member)):(console.error("Member not found"),this.hasError=!0)},error:l=>{console.error("Error fetching data from ASPX:",l),this.hasError=!0}})}closeDialog(){this.dialogRef.close()}};n.\u0275fac=function(l){return new(l||n)(g(y),g(G),g(T),g(V),g(q))},n.\u0275cmp=h({type:n,selectors:[["app-team-dialog"]],decls:1,vars:1,consts:[["class","personal",4,"ngIf"],[1,"personal"],["href","/team","routerLink","/team",3,"click"],[1,"personal-header"],[1,"personal-img"],[3,"src","alt"],[1,"personal-title"],[1,"personal-title1"],[4,"ngIf"],[1,"main-text"]],template:function(l,d){l&1&&_(0,gt,33,13,"div",0),l&2&&c("ngIf",d.member)},dependencies:[P,B],styles:[".personal[_ngcontent-%COMP%]{max-width:100%;background:linear-gradient(to bottom,#80b0ce 50%,white 50%)!important;padding:10px}.personal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:50px;text-decoration:none;position:absolute;right:1%}.personal-header[_ngcontent-%COMP%]{display:flex}.personal-img[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.personal-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:360px;max-width:100%}.personal-title[_ngcontent-%COMP%]{margin:0 30px}.personal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:2rem}.personal-title1[_ngcontent-%COMP%]{display:flex;justify-content:left;align-items:center}.personal-title1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:3rem}.personal-title1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;margin:0 10px}.main-text[_ngcontent-%COMP%]{position:relative;top:6em;max-width:80%;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;font-size:18px;font-weight:500}@media (max-width: 768px){.personal-img[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;width:100%;flex-direction:column}.personal-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto}.personal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.5rem}.personal-title[_ngcontent-%COMP%]{justify-content:left}.personal-title1[_ngcontent-%COMP%]{justify-content:left;flex-direction:column;text-wrap:nowrap}.personal-title1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:2rem}.personal-title1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem}}"]});let t=n;return t})();function ft(t,n){if(t&1&&(a(0,"h5"),m(1),o()),t&2){let e=p().$implicit;i(),s(e.team_category)}}function xt(t,n){if(t&1&&(a(0,"h5"),m(1),o()),t&2){let e=p().$implicit;i(),s(e.en_team_category)}}function ht(t,n){if(t&1&&(a(0,"h4"),m(1),o()),t&2){let e=p().$implicit;i(),s(e.name)}}function vt(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p().$implicit;i(),s(e.division)}}function Ct(t,n){if(t&1&&(a(0,"h4"),m(1),o()),t&2){let e=p().$implicit;i(),s(e.en_name)}}function ut(t,n){if(t&1&&(a(0,"p"),m(1),o()),t&2){let e=p().$implicit;i(),s(e.en_division)}}function Mt(t,n){if(t&1){let e=M();a(0,"div",13)(1,"button",14),O("click",function(){let d=v(e).$implicit,f=p(3);return C(f.openDialog(d.id))}),x(2,"img",15),o(),_(3,ft,2,1,"h5",16)(4,xt,2,1,"h5",16)(5,ht,2,1,"h4",16)(6,vt,2,1,"p",16)(7,Ct,2,1,"h4",16)(8,ut,2,1,"p",16),o()}if(t&2){let e=n.$implicit,r=p(3);i(2),b("alt",e.name),c("src",e.Column1,u),i(),c("ngIf",r.las.lang==="zh-TW"),i(),c("ngIf",r.las.lang==="en"),i(),c("ngIf",r.las.lang==="zh-TW"),i(),c("ngIf",r.las.lang==="zh-TW"),i(),c("ngIf",r.las.lang==="en"),i(),c("ngIf",r.las.lang==="en")}}function Ot(t,n){if(t&1&&(a(0,"div",11),_(1,Mt,9,8,"div",12),o()),t&2){let e=p().$implicit;i(),c("ngForOf",e.members)}}function bt(t,n){if(t&1&&(a(0,"div",6)(1,"div",7)(2,"div",8)(3,"h2"),m(4),a(5,"span"),m(6),o()(),x(7,"div",9),o(),_(8,Ot,2,1,"div",10),o()()),t&2){let e=n.$implicit;i(4),$("",e.position," "),i(2),s(e.name),i(2),c("ngIf",e.members&&e.members.length>0)}}var Z=(()=>{let n=class n{constructor(r,l,d,f){this.http=r,this.dialog=l,this.tms=d,this.las=f,this.teamData=[],this.selectedLanguage="",this.hasError=!0}ngOnInit(){this.tms.getTeamMembers().subscribe({next:r=>{this.teamData=r},error:r=>{console.error("Error fetching data from ASPX:",r),this.hasError=!0}})}openDialog(r){this.dialog.open(Y,{data:{id:r}}).afterClosed().subscribe(d=>{d&&console.log(d)})}};n.\u0275fac=function(l){return new(l||n)(g(I),g(J),g(y),g(T))},n.\u0275cmp=h({type:n,selectors:[["team"]],decls:9,vars:1,consts:[[1,"title-pic",2,"color","white"],[1,"title-pic-text-box"],[1,"title-pic-text-box-CH"],[1,"d-flex","flex-column","justify-content-center","flex-sm-row"],[1,"title-pic-text-box-EN"],["class","content",4,"ngFor","ngForOf"],[1,"content"],[1,"container-fluid"],[1,"title1"],[1,"gradient-line"],["class","main",4,"ngIf"],[1,"main"],["class","main-item1",4,"ngFor","ngForOf"],[1,"main-item1"],[1,"btn","p-0",3,"click"],[3,"src","alt"],[4,"ngIf"]],template:function(l,d){l&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),m(5,"\u670D\u52D9\u5718\u968A"),o()()(),a(6,"div",4),m(7,"service team"),o()()(),_(8,bt,9,3,"div",5)),l&2&&(i(8),c("ngForOf",d.teamData))},dependencies:[R,P],styles:[".container[_ngcontent-%COMP%]{margin-left:300px}.team[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:absolute;top:35%;left:50%;font-size:50px;color:#fff;transform:translate(-50%);font-weight:900}.team[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;top:65%;left:50%;font-size:25px;color:#fff;transform:translate(-50%)}.main[_ngcontent-%COMP%]{margin-bottom:4%;display:grid;grid-template-columns:repeat(5,1fr);gap:40px;width:100%;max-width:100%}.main-item1[_ngcontent-%COMP%]{margin-bottom:30px}.main-item1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}h5[_ngcontent-%COMP%]{font-weight:900}h4[_ngcontent-%COMP%]{font-weight:900;color:#1486cf}p[_ngcontent-%COMP%]{font-weight:900;color:#3eb121}h2[_ngcontent-%COMP%]{text-wrap:nowrap;font-size:30px}.title1[_ngcontent-%COMP%]{margin:30px 0;display:flex;align-items:center}.title1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;font-size:32px;word-wrap:break-word;white-space:pre-wrap}.title1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#da8d36}.title1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:0 10px}.gradient-line[_ngcontent-%COMP%]{width:50%;height:5px;margin-left:1%;background:linear-gradient(to right,#80b0ce,transparent)}@media only screen and (max-width: 1024px){.container[_ngcontent-%COMP%]{margin:0}.team[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{top:20%;font-size:20px}.team[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}.main[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}.title1[_ngcontent-%COMP%]{flex-wrap:wrap}.title1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{overflow-x:hidden}.title1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.gradient-line[_ngcontent-%COMP%]{width:100%;margin-left:0}}@media screen and (max-width: 768px){.main[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width: 540px){.main[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}"]});let t=n;return t})();var Lt=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=A({type:n}),n.\u0275inj=F({imports:[W,N,H,K,U.forChild([{path:"",component:Z}])]});let t=n;return t})();export{Lt as TeamModule};
