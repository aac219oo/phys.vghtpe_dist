"use strict";(self.webpackChunkmy_new_project=self.webpackChunkmy_new_project||[]).push([[459],{2459:(L,d,c)=>{c.r(d),c.d(d,{C01Module:()=>J});var r=c(6610),p=c(6482),t=c(3279);const _=n=>({color:n});function u(n,i){if(1&n&&(t.j41(0,"th"),t.EFF(1),t.k0s()),2&n){const e=i.$implicit;t.R7$(),t.JRh(e.name)}}function C(n,i){if(1&n&&(t.j41(0,"td"),t.EFF(1),t.k0s()),2&n){const e=i.$implicit;t.R7$(),t.JRh(e.price)}}function x(n,i){if(1&n&&(t.j41(0,"td")(1,"span",9),t.EFF(2),t.k0s()()),2&n){const e=i.$implicit,o=t.XpG().$implicit,a=t.XpG();t.R7$(),t.Y8G("ngStyle",t.eq3(2,_,a.checkColor(o.content_id))),t.R7$(),t.SpI(" ",a.containsCheckup(e.content,o.content_id)?"\u25cf":""," ")}}function k(n,i){if(1&n&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.DNE(3,x,3,4,"td",7),t.k0s()),2&n){const e=i.$implicit,o=t.XpG();t.R7$(2),t.JRh(e.name),t.R7$(),t.Y8G("ngForOf",o.comparePackage)}}let b=(()=>{class n{constructor(e,o){this.data=e,this.dialogRef=o,this.checkItems=[],this.comparePackage=[]}ngOnInit(){this.checkItems=this.data.tableContent.items,this.comparePackage=this.data.tableContent.compare}containsCheckup(e,o){return e.some(a=>a.content_id===o)}checkColor(e){const o=this.comparePackage.map(l=>this.containsCheckup(l.content,e)),a=o.every(Boolean),s=o.some(l=>!l);return a?"black":s?"chocolate":"black"}onNoClick(){this.dialogRef.close()}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(p.Vh),t.rXU(p.CP))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-compare-packages"]],decls:19,vars:3,consts:[["type","button"],[1,"list-style"],[1,"close-btn"],["type","button",1,"btn-close",3,"click"],[1,"list-top"],["_ngcontent-ng-c3076233684","","src","assets/images/logo.png","alt","\u81fa\u5317\u69ae\u6c11\u7e3d\u91ab\u9662\u5065\u5eb7\u7ba1\u7406\u4e2d\u5fc3"],["width","50%"],[4,"ngFor","ngForOf"],[1,"priceBg"],[3,"ngStyle"]],template:function(o,a){1&o&&(t.j41(0,"table",0)(1,"div",1)(2,"div",2)(3,"button",3),t.bIt("click",function(){return a.onNoClick()}),t.k0s()(),t.j41(4,"div",4),t.nrm(5,"img",5),t.j41(6,"h4"),t.EFF(7,"\u57fa\u790e\u5065\u6aa2\u7d44\u5957\u6bd4\u8f03\u8868"),t.k0s()(),t.j41(8,"thead")(9,"tr")(10,"th",6),t.EFF(11,"\u6aa2\u67e5\u9805\u76ee"),t.k0s(),t.DNE(12,u,2,1,"th",7),t.k0s()(),t.j41(13,"tbody")(14,"tr",8)(15,"td"),t.EFF(16,"\u8cbb\u7528"),t.k0s(),t.DNE(17,C,2,1,"td",7),t.k0s(),t.DNE(18,k,4,2,"tr",7),t.k0s()()()),2&o&&(t.R7$(12),t.Y8G("ngForOf",a.comparePackage),t.R7$(5),t.Y8G("ngForOf",a.comparePackage),t.R7$(),t.Y8G("ngForOf",a.checkItems))},dependencies:[r.Sq,r.B3],styles:["*[_ngcontent-%COMP%]{letter-spacing:1px}.list-style[_ngcontent-%COMP%]{position:relative;padding:40px 60px 80px;border-top:20px #2786ca solid;background-color:#fff}.close-btn[_ngcontent-%COMP%]{position:absolute;top:12px;right:20px}.close-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-decoration:none;color:#181818;font-size:2rem;cursor:pointer;transition:all .2s}.close-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#cb505c}.list-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 0}.list-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;width:100%}.list-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2786ca;font-weight:600;font-size:2rem}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{background-color:#fff;border:1px solid rgb(15,15,15);border-collapse:collapse;padding:10px 20px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child){text-align:center}.priceBg[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#2786ca;color:#fff;font-weight:600}.priceBg[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #fff}"]})}return n})();var v=c(8756),P=c(8230),g=c(5312),O=c(6409);let M=(()=>{class n{constructor(e){this.http=e,this.apiUrl=g.c.ApiUrl+"API/health_package.aspx",this.CompareApiUrl=g.c.ApiUrl+"API/health_package_compare.aspx",this.fakeData="../../assets/json/compare-fakeData.json",this.fakeData2="../../assets/json/health-packages-fakeData.json",this.colors=["#1486CF","#AD6072","#DAA621"]}getHealthPackages(){return this.http.get(this.apiUrl)}getColor(e){return this.colors[(e-1)%this.colors.length]}getComparePackages(e){const o=e.slice(0,3);return this.http.get(`${this.CompareApiUrl}?compare_id[]=${o.join("&compare_id[]=")}`)}static#t=this.\u0275fac=function(o){return new(o||n)(t.KVO(O.Qq))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var F=c(6022),R=c(245),w=c(9192),h=c(7415),m=c(6182),f=c(2882);const y=n=>({"vertical-layout":n}),j=(n,i)=>({"vertical-text":n,"horizontal-text":i}),$=(n,i)=>({borderColor:n,backgroundColor:i}),E=n=>({selected:n});function T(n,i){1&n&&(t.j41(0,"div",11),t.EFF(1,"Examination items"),t.k0s())}function G(n,i){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit,o=t.XpG();t.R7$(),t.JRh(o.uts.numberToLetter(e.class_sort)+" "+e.class_name)}}function I(n,i){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit,o=t.XpG();t.R7$(),t.JRh(o.uts.numberToLetter(e.class_sort)+" "+e.class_en_name)}}function D(n,i){if(1&n){const e=t.RV6();t.j41(0,"div",12),t.bIt("click",function(){const a=t.eBV(e).$implicit,s=t.XpG();return t.Njj(s.showBox(a.class_id))}),t.j41(1,"button",13),t.DNE(2,G,2,1,"span",14)(3,I,2,1,"span",14),t.nrm(4,"img",15),t.k0s()()}if(2&n){const e=i.$implicit,o=t.XpG();t.R7$(2),t.Y8G("ngIf","zh-TW"===o.las.lang),t.R7$(),t.Y8G("ngIf","en"===o.las.lang),t.R7$(),t.Y8G("src","../../assets/images/Rectangle2"+e.class_sort+".png",t.B4B)}}function B(n,i){if(1&n){const e=t.RV6();t.j41(0,"input",38),t.bIt("change",function(){t.eBV(e);const a=t.XpG(2).$implicit,s=t.XpG(3);return t.Njj(s.onRadioSelect(a.id))}),t.k0s()}if(2&n){const e=t.XpG(2).$implicit;t.Y8G("id","package"+e.id)}}function X(n,i){if(1&n&&(t.j41(0,"div",35),t.DNE(1,B,1,1,"input",36),t.nrm(2,"label",37),t.k0s()),2&n){const e=t.XpG().$implicit,o=t.XpG(3);t.R7$(),t.Y8G("ngIf","zh-TW"===o.las.lang),t.R7$(),t.Y8G("for","package"+e.id)("ngStyle",t.l_i(4,$,o.color,o.isSelected(e.id)?o.color:"transparent"))("ngClass",t.eq3(7,E,o.isSelected(e.id)))}}function A(n,i){if(1&n){const e=t.RV6();t.j41(0,"div")(1,"label",23)(2,"section",24),t.DNE(3,X,3,9,"div",25),t.j41(4,"div",26)(5,"span",27),t.EFF(6),t.k0s()()(),t.j41(7,"section",28)(8,"div",29)(9,"span",30),t.EFF(10),t.k0s(),t.nrm(11,"br"),t.j41(12,"span"),t.EFF(13),t.k0s()(),t.j41(14,"div",29)(15,"span",30),t.EFF(16),t.k0s(),t.nrm(17,"br"),t.j41(18,"span"),t.EFF(19),t.k0s()(),t.j41(20,"div",29)(21,"button",31),t.bIt("click",function(){const a=t.eBV(e).$implicit,s=t.XpG(3);return t.Njj(s.addToCart(a))}),t.EFF(22),t.k0s(),t.j41(23,"button",32),t.bIt("click",function(){const a=t.eBV(e).$implicit,s=t.XpG(3);return t.Njj(s.reservation(a.CodeKey))}),t.EFF(24),t.k0s()(),t.j41(25,"div",29)(26,"a",33),t.nrm(27,"mat-icon",34),t.k0s()()()()()}if(2&n){const e=i.$implicit,o=t.XpG(3);t.R7$(),t.Y8G("for","package"+e.id),t.R7$(2),t.Y8G("ngIf",1===o.selectedBox),t.R7$(3),t.JRh("zh-TW"===o.las.lang?e.name:e.en_name),t.R7$(3),t.xc7("color",o.color),t.R7$(),t.JRh("zh-TW"===o.las.lang?"\u57f7\u884c\u65e5\u671f":"Execution Date"),t.R7$(3),t.JRh("zh-TW"===o.las.lang?e.workday:e.en_workday),t.R7$(2),t.xc7("color",o.color),t.R7$(),t.JRh("zh-TW"===o.las.lang?"\u8cbb\u7528":"Cost"),t.R7$(3),t.JRh(e.price),t.R7$(3),t.JRh("zh-TW"===o.las.lang?"\u653e\u5165\u8cfc\u7269\u8eca":"Add to Cart"),t.R7$(2),t.JRh("zh-TW"===o.las.lang?"\u76f4\u63a5\u8cfc\u8cb7":"Buy Now"),t.R7$(2),t.Y8G("href","/c03.aspx?no="+e.id,t.B4B),t.R7$(),t.xc7("color",o.color)}}function N(n,i){if(1&n){const e=t.RV6();t.j41(0,"div",39)(1,"button",40),t.bIt("click",function(){t.eBV(e);const a=t.XpG(3);return t.Njj(a.openTableDialog())}),t.EFF(2),t.k0s()()}if(2&n){const e=t.XpG(3);t.R7$(2),t.SpI(" ","zh-TW"===e.las.lang?"\u57fa\u790e\u5065\u6aa2\u7d44\u5957\u5c0d\u6bd4":"Basic Health Checkup Package Comparison"," ")}}function z(n,i){if(1&n&&(t.j41(0,"div",17)(1,"div",18)(2,"p",19),t.EFF(3),t.k0s()(),t.j41(4,"div",20)(5,"div",21),t.DNE(6,A,28,16,"div",9),t.k0s(),t.DNE(7,N,3,1,"div",22),t.k0s()()),2&n){const e=t.XpG().$implicit,o=t.XpG();t.Y8G("ngClass",t.eq3(5,y,"en"===o.las.lang)),t.R7$(2),t.Y8G("ngClass",t.l_i(7,j,"zh-TW"===o.las.lang,"en"===o.las.lang)),t.R7$(),t.SpI(" ","zh-TW"===o.las.lang?"NO."+e.class_name:"NO."+e.class_en_name," "),t.R7$(3),t.Y8G("ngForOf",e.packages),t.R7$(),t.Y8G("ngIf",1===o.selectedBox&&"zh-TW"===o.las.lang)}}function Y(n,i){if(1&n&&(t.j41(0,"div"),t.DNE(1,z,8,10,"div",16),t.k0s()),2&n){const e=i.$implicit,o=t.XpG();t.R7$(),t.Y8G("ngIf",o.selectedBox===e.class_id)}}function S(n,i){if(1&n){const e=t.RV6();t.j41(0,"div",41),t.EFF(1),t.j41(2,"button",42),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.alertMessage=null)}),t.k0s()()}if(2&n){const e=t.XpG();t.R7$(),t.SpI(" ",e.alertMessage," ")}}let U=(()=>{class n{constructor(e,o,a,s,l,W,H,K){this.las=e,this.uts=o,this.hps=a,this.modalService=s,this.dialog=l,this.cartService=W,this.localService=H,this.router=K,this.compareData=[],this.healthPackages=[],this.selectedBox=1,this.selectedCheckboxCount=0,this.healthdata=[],this.selectedCheckboxId=null,this.selectedColor="red",this.isTableVisible=!1,this.selectedRadios=[],this.hasError=!1,this.color="#1486CF",this.alertMessage=null,this.colors=["#1486CF","#AD6072","#DAA621"]}ngOnInit(){this.fetchData()}fetchData(){this.hps.getHealthPackages().subscribe({next:e=>{this.healthdata=e},error:e=>{console.error("Error fetching data from ASPX:",e),this.hasError=!0}})}onRadioSelect(e){const o=this.selectedRadios.indexOf(e);o>-1?this.selectedRadios.splice(o,1):(this.selectedRadios.length>=3&&this.selectedRadios.shift(),this.selectedRadios.push(e))}isSelected(e){return this.selectedRadios.includes(e)}showBox(e){this.selectedBox=e,this.color=this.hps.getColor(this.selectedBox)}showComparisonTable(){3===this.selectedCheckboxCount||alert("\u8acb\u9078\u64c7\u4e09\u9805\u9805\u76ee\u518d\u9032\u884c\u6bd4\u8f03")}openTableDialog(){if(0===this.selectedRadios.length)return this.alertMessage="\u8acb\u81f3\u5c11\u9078\u64c7\u4e00\u9805\u9032\u884c\u6bd4\u8f03",void setTimeout(()=>{this.alertMessage=null},5500);this.hps.getComparePackages(this.selectedRadios).subscribe({next:e=>{this.compareData=e,this.dialog.open(b,{width:"auto",height:"80vh",data:{tableContent:this.compareData}}).afterClosed().subscribe(a=>{console.log("The dialog was closed")})},error:e=>{console.error("Error fetching data from ASPX:",e),this.hasError=!0}})}addToCart(e){this.cartService.addToCart(e),this.cartService.updateCart()}reservation(e){window.localStorage.setItem("CodeKey",e),window.location.href="/FrontEnd/reserve.aspx"}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(v.g),t.rXU(P.Y),t.rXU(M),t.rXU(F.Bq),t.rXU(p.bZ),t.rXU(R.mx),t.rXU(w.n),t.rXU(h.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["c01"]],decls:14,vars:9,consts:[[1,"title-pic"],[1,"title-pic-text-box"],[1,"title-pic-text-box-CH"],[1,"d-flex","flex-column","justify-content-center","flex-sm-row"],["class","title-pic-text-box-EN",4,"ngIf"],[1,"new-container",2,"margin","10px auto"],[1,"titles-box"],[3,"click",4,"ngFor","ngForOf"],[1,"packages-container"],[4,"ngFor","ngForOf"],["class","alert alert-warning alert-dismissible fade show fixed-top alert-animation","role","alert",4,"ngIf"],[1,"title-pic-text-box-EN"],[3,"click"],[1,"btn","package-switch"],[4,"ngIf"],[1,"img-fluid",3,"src"],["class","packages-box",3,"ngClass",4,"ngIf"],[1,"packages-box",3,"ngClass"],[1,"packages-title","fs-2","fw-bolder"],[3,"ngClass"],[1,"packages-content"],[1,"packages"],["class","compare-package",4,"ngIf"],[1,"package",3,"for"],[1,"left-text"],["class","main-item item-box",4,"ngIf"],[1,"main-item","packages-item"],[1,"package-name"],[1,"right-text"],[1,"main-item"],[1,"text-blue"],["type","button",1,"btn","btn-style",3,"click"],["type","button",1,"btn","btn-style-line",3,"click"],[1,"btn-link","d-flex","align-content-center",3,"href"],["fontIcon","search"],[1,"main-item","item-box"],["type","checkbox","name","item1","class","package-radio",3,"id","change",4,"ngIf"],[3,"for","ngStyle","ngClass"],["type","checkbox","name","item1",1,"package-radio",3,"change","id"],[1,"compare-package"],[1,"btn","vertical-text",3,"click"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show","fixed-top","alert-animation"],["type","button","aria-label","Close",1,"btn-close",3,"click"]],template:function(o,a){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.DNE(7,T,2,0,"div",4),t.k0s()(),t.j41(8,"div",5)(9,"div",6),t.DNE(10,D,5,3,"div",7),t.k0s(),t.j41(11,"div",8),t.DNE(12,Y,2,1,"div",9),t.k0s()(),t.DNE(13,S,3,1,"div",10)),2&o&&(t.R7$(5),t.JRh(t.bMT(6,7,"menu_items.items")),t.R7$(2),t.Y8G("ngIf","zh-TW"===a.las.lang),t.R7$(3),t.Y8G("ngForOf",null==a.healthdata[0]?null:a.healthdata[0].type),t.R7$(),t.xc7("background-color",a.selectedBox?a.color:"initial"),t.R7$(),t.Y8G("ngForOf",null==a.healthdata[0]?null:a.healthdata[0].type),t.R7$(),t.Y8G("ngIf",a.alertMessage))},dependencies:[r.YU,r.Sq,r.bT,r.B3,m.An,f.D9],styles:['.team[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:absolute;top:35%;left:50%;font-size:3.125rem;color:#fff;transform:translate(-50%);font-weight:900}.team[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;top:65%;left:50%;font-size:1.5rem;color:#fff;transform:translate(-50%)}.titles-box[_ngcontent-%COMP%]{margin-top:30px auto;display:flex;justify-content:center;align-items:center}.title[_ngcontent-%COMP%]{position:relative;margin:0 10px;cursor:pointer}.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:900;color:#fff;font-size:2.5rem;position:absolute;top:40%;left:50%;transform:translate(-50%)}.new-container[_ngcontent-%COMP%]{width:80vw}.package-switch[_ngcontent-%COMP%]{position:relative;width:100%;height:max-content;color:#fff;text-decoration:none;font-size:1.6rem;font-weight:700}.package-switch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);line-height:normal}.packages-container[_ngcontent-%COMP%]{background-color:#1486cf;border-radius:50px;padding:5px;margin-top:2rem}.packages-box[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.packages-box.vertical-layout[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.packages-title[_ngcontent-%COMP%]{padding:20px 10px 15px;border-top-right-radius:45px;border-bottom-right-radius:45px;color:#fff}.vertical-text[_ngcontent-%COMP%]{writing-mode:vertical-rl;text-orientation:upright}.horizontal-text[_ngcontent-%COMP%]{writing-mode:horizontal-tb}.packages-content[_ngcontent-%COMP%]{display:flex;width:100%;background-color:#fff;border-top-right-radius:45px;border-bottom-right-radius:45px}.packages[_ngcontent-%COMP%]{width:100%;margin:1.5%;height:100%;max-height:720px;overflow:auto}.packages[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;background:#fff}.packages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#d9d9d9;border-radius:6px}.packages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#555}.packages[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f1f1f1;border-radius:10px}.packages[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover{background-color:#ddd}.package[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;justify-content:space-between;margin:15px;padding:5px;box-shadow:0 0 10px 1px #999}.item-box[_ngcontent-%COMP%]{display:flex}.main-item[_ngcontent-%COMP%]{display:inline-block}.left-text[_ngcontent-%COMP%]{display:flex;width:42%}.right-text[_ngcontent-%COMP%]{width:55%;padding:10px 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.packages-item[_ngcontent-%COMP%]{padding-left:5px;font-weight:700;font-size:1.1rem}.text-blue[_ngcontent-%COMP%]{color:#1486cf;font-weight:700}.btn-style[_ngcontent-%COMP%]{margin-right:10px;padding:5px 15px;color:#fff;background-color:#1486cf;font-size:.9rem;font-weight:700;border-radius:20px;transition:all .2s}.btn-style-line[_ngcontent-%COMP%]{padding:5px 15px;border:1px solid #1486CF;color:#1486cf;font-size:.9rem;border-radius:20px;font-weight:700;transition:all .2s}.btn-style[_ngcontent-%COMP%]:hover, .btn-style-line[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.package-radio[_ngcontent-%COMP%]{display:none}.package-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{display:inline-block;width:20px;height:20px;border:2px solid #1486CF;border-radius:50%;position:relative;cursor:pointer}.package-radio[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after{content:"";display:block;width:12px;height:12px;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:transparent;transition:background-color .2s}.package-radio[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after, .package-radio[_ngcontent-%COMP%] + label.selected[_ngcontent-%COMP%]:after{width:100%;height:100%;background-color:inherit}.compare-package[_ngcontent-%COMP%]{padding:10px 10px 10px 0;background-color:#fff;border-top-right-radius:45px;border-bottom-right-radius:45px}.compare-package[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding-top:15px;padding-bottom:15px;padding-left:9px;line-height:normal;border-radius:50px;background-color:#1486cf;color:#fff;font-size:1.2rem}.fixed-top[_ngcontent-%COMP%]{position:fixed;top:150px;left:50%;transform:translate(-50%);z-index:1050}.alert-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInDown .5s,fadeOutUp .5s 5s forwards}@keyframes _ngcontent-%COMP%_fadeInDown{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadeOutUp{0%{opacity:1}to{opacity:0}}@media (max-width:1200px){.package[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:center}.left-text[_ngcontent-%COMP%], .right-text[_ngcontent-%COMP%]{width:95%}}@media screen and (max-width: 1024px){.team[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{top:20%}.titles-box[_ngcontent-%COMP%]{flex-wrap:wrap}}@media screen and (max-width: 767px){.package[_ngcontent-%COMP%]{flex-wrap:wrap}.right-text[_ngcontent-%COMP%]{justify-content:flex-start}.right-text[_ngcontent-%COMP%]   .main-item[_ngcontent-%COMP%]{padding:5px}}@media (max-width:500px){.new-container[_ngcontent-%COMP%]{width:95vw}.packages-title[_ngcontent-%COMP%]{padding:35px 10px 15px 2px}}']})}return n})();var V=c(7222);let J=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[r.MD,V.YN,f.h,m.m_,h.iI.forChild([{path:"",component:U}])]})}return n})()}}]);