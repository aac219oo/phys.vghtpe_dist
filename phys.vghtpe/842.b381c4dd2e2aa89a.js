(self.webpackChunkmy_new_project=self.webpackChunkmy_new_project||[]).push([[842],{8232:function(R,j,u){var T,L,d,M;typeof window<"u"&&window,M=function(p){var F=/tYY|YY(YY)?|Q|MM?|MMMM?|DD?|Do|DDDD?|X|x|gg(gg)?|ww?|e|dddd?|GG(GG)?|WW?|E|HH?|hh?|a|A|mm?|ss?|SS?S?S?|ZZ?|./g,e=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,J=/\d\d?/,S=/\d{1,3}/,b=/\d{3}/,I=/\d{1,4}/,Y=/[+\-]?\d{1,6}/,V=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,w=/Z|[\+\-]\d\d:?\d\d/i,W=/T/i,U=/[\+\-]?\d+(\.\d{1,3})?/,A={},E={tYY:function(){return this.twYear()+""}},N=function(n,o){var r;for(r in o)o.hasOwnProperty(r)&&(n[r]=o[r]);return n},$=function(n){function o(){}return o.prototype=n,new o},P=function(n,o){switch(n){case"tYY":case"S":case"SS":case"SSS":case"DDD":return S;case"DDDD":return b;case"YYYY":return I;case"YYYYY":return Y;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return V;case"a":case"A":return p.localeData(o.lang)._meridiemParse;case"X":return U;case"Z":case"ZZ":return w;case"T":return W;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return J;default:return new RegExp(n.replace("\\",""))}},C=function(n,o,r,a,c){"boolean"==typeof r&&(c=a,a=r,r=void 0);var t,m={input:n,format:o,lang:r,strict:a,utc:c},y=n,v=o;if(o){if(Array.isArray(o))return function(n,o){if(0===n.format.length)return C(new Date(NaN));var r=n.format.map(function(a){var c=0,m=C(n.input,a,n.lang,n.strict,o);return m.isValid()&&m._tw_leftLength&&(c+=m._tw_leftLength.length),{score:c,moment:m}});return r.sort(function(a,c){return a.score-c.score}),r[0].moment}(m,c);var s=function(n){var o=n.format.match(F),r=n.input+"";return n._a=[],o.forEach(function(a){var c=(P(a,n).exec(r)||[])[0];c&&(r=r.slice(r.indexOf(c)+c.length)),E[a]&&function(n,o,r){"tYY"===n&&(r._twYear=~~o),null==o&&(r._isValid=!1)}(a,c,n)}),r&&(n._tw_leftLength=r),function(n){return n._twYear}(n)}(m),f=function(n){var o=n.input+"",r="",a="";n.format.match(F).forEach(function(y){var v=(P(y,n).exec(o)||[])[0];v&&(o=o.slice(o.indexOf(v)+v.length)),E[y]instanceof Function||(a+=y,v&&(r+=v))}),n.input=r;var m=n.format;return n.format=a,m!=a}(m);f?(o="YYYY-"+m.format,n=typeof s>"u"?"ABCD-"+m.input:function(o){return 0==o?1912:o>0?o+1911:o+1912}(s)+"-"+m.input):(o=v,n=y)}t=c?p.utc(n,o,r,a):p(n,o,r,a),!1===m._isValid&&(t._isValid=!1);var i=$(g.fn);return N(i,t),a&&i.isValid()&&(i._isValid=i.format(v)===y),i},g=function(n,o,r,a){return C(n,o,r,a,!1)};N(g,p),g.fn=$(p.fn),g.utc=function(n,o,r,a){return C(n,o,r,a,!0)},g.unix=function(n){return C(1e3*n)},g.fn.format=function(n){var o,r,a=this;if(n){for(o=5,r=function(c){return a.localeData().longDateFormat(c)||c};o>0&&e.test(n);)o-=1,n=n.replace(e,r);A[n]||(A[n]=function(n){var a,o=n.match(F),r=o.length;return o.forEach(function(c,m){E[c]&&(o[m]=E[c])}),function(c){var m="";for(a=0;a<r;a+=1)m+=o[a]instanceof Function?"["+o[a].call(c,n)+"]":o[a];return m}}(n)),n=A[n](this)}return p.fn.format.call(this,n)},g.fn.twYear=function(n){var o,r,a;return"number"==typeof n?(r=k(this.year(),this.month(),this.date()),o=Math.min(r.year,g.twDaysInMonth(n,r.month)),function(n,o,r,a){var c=n._d;n._d=n._isUTC?new Date(Date.UTC(o,r,a,c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds())):new Date(o,r,a,c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds())}(this,(a=G(n,r.month,o)).year,a.month,a.day),p.updateOffset(this),this):k(this.year(),this.month(),this.date()).year},g.fn.clone=function(){return g(this)},g.twDaysInMonth=function(n,o){return n+=K(o,12),(o=Q(o,12))<0&&(o+=12,n-=1),function(n,o){switch(o){case 4:case 6:case 9:case 11:return 30;case 2:return utils.isLeapYear(utils.calYear(n))?29:28;default:return 31}}(n,o)},g.twIsLeapYear=function(o){return o%4==0&&o%100!=0||o%400==0},g.twConvert={toTaiwan:k,toGregorian:G};var k=function(n,o,r){var a=function(n,o,r){return{year:n<=1911?n-1912:n-1911,month:o,day:r}}(n,o+1,r);return a.month-=1,a},G=function(n,o,r){var a=function(n,o,r){return{year:utils.calYear(n),month:o,day:r}}(n,o+1,r);return a.month-=1,a},K=function(n,o){return~~(n/o)},Q=function(n,o){return n-~~(n/o)*o};return g},"object"==typeof R.exports?R.exports=M(u(5025)):(L=[u(5025)],void 0!==(d="function"==typeof(T=M)?T.apply(j,L):T)&&(R.exports=d))},5461:(R,j,u)=>{"use strict";u.r(j),u.d(j,{LoginModule:()=>v});var T=u(6610),L=u(7415),d=u(7222),p=u(5025),M=u.t(p,2),F=u.n(p),e=u(3279),J=u(1681),S=u(8230),b=u(8278),I=u(2882),Y=u(5468),V=u(4587),w=u(2839),W=u(4547);const U=["audioElement"];function A(s,f){1&s&&(e.nrm(0,"input",47),e.nI1(1,"translate")),2&s&&e.FS9("placeholder",e.bMT(1,1,"login.enter_mobile_number"))}function E(s,f){1&s&&(e.nrm(0,"input",48),e.nI1(1,"translate")),2&s&&e.FS9("placeholder",e.bMT(1,1,"login.enter_email"))}function N(s,f){1&s&&(e.qex(0),e.EFF(1),e.nI1(2,"translate"),e.bVm()),2&s&&(e.R7$(),e.JRh(e.bMT(2,1,"login.send_verification_code")))}function z(s,f){if(1&s&&(e.qex(0),e.EFF(1),e.nI1(2,"translate"),e.nI1(3,"translate"),e.bVm()),2&s){const t=e.XpG();e.R7$(),e.E5c("",e.bMT(2,3,"login.resend_verification_code"),"",t.countdown,"",e.bMT(3,5,"login.seconds"),"")}}function $(s,f){if(1&s&&(e.j41(0,"div",49),e.EFF(1),e.nI1(2,"translate"),e.nI1(3,"translate"),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.E5c(" ",e.bMT(2,3,"login.no_verification_code_received"),"",t.countdown,"",e.bMT(3,5,"login.seconds"),"\u3002 ")}}function B(s,f){1&s&&(e.j41(0,"div",27),e.nrm(1,"div",50),e.k0s())}function P(s,f){1&s&&(e.j41(0,"div",51)(1,"span"),e.EFF(2),e.nI1(3,"translate"),e.j41(4,"a",52),e.EFF(5),e.nI1(6,"translate"),e.k0s()()()),2&s&&(e.R7$(2),e.SpI("",e.bMT(3,2,"login.verification_code_error")," "),e.R7$(3),e.JRh(e.bMT(6,4,"menu_items.contact")))}let X=(()=>{class s{constructor(t,i,l,h,_){this.fb=t,this.us=i,this.ut=l,this.dateAdapter=h,this.trs=_,this.alertMessages=[],this.processing=!1,this.account="",this.selectedYear=0,this.selectedMonth=0,this.selectedDay=0,this.verificationCode="",this.codeSent=!1,this.initialCountdown=60,this.countdown=this.initialCountdown,this.select_mobile=!0,this.verifyError=!1,this.cursor="",this.cursors=["not-allowed","initial"],this.verificationCodeSent=!1,this.selectedYear=(new Date).getFullYear(),this.selectedMonth=1,this.selectedDay=1,this.maxDate=new Date}ngOnInit(){this.form=this.fb.group({account:["",d.k0.required],idendity:["1",d.k0.required],his:[""],other:[""],birthday:["",d.k0.required],select_mobile:["1"],select_email:[""],mobile:[""],email:[""],verificationCode:["",d.k0.required]}),this.updateValidators(this.select_mobile),this.form.get("select_mobile")?.valueChanges.subscribe(t=>{this.select_mobile="1"===t,this.updateValidators(this.select_mobile)})}updateValidators(t){t?(this.form.get("mobile")?.setValidators([d.k0.required,d.k0.pattern(/^\d{10}$/)]),this.form.get("email")?.clearValidators(),this.form.get("email")?.updateValueAndValidity(),this.form.get("email")?.reset()):(this.form.get("email")?.setValidators([d.k0.required,d.k0.email]),this.form.get("mobile")?.clearValidators(),this.form.get("mobile")?.updateValueAndValidity(),this.form.get("mobile")?.reset()),this.form.get("mobile")?.updateValueAndValidity(),this.form.get("email")?.updateValueAndValidity()}toggleSelection(t){this.select_mobile=t,this.updateValidators(this.select_mobile)}addAlertMessage(t){const i=this.trs.instant(`login.${t}`);this.alertMessages.push(i)}checkFormValidity(t){this.alertMessages=[],Object.keys(this.form.controls).forEach(O=>{this.form.get(O)?.invalid&&(t||"verificationCode"!==O)&&this.addAlertMessage(O+"_required")});const i=this.form.get("mobile"),l=this.form.get("email"),h=i?.value&&null===d.k0.required(i)&&null===d.k0.pattern(/^\d{10}$/)(i),_=l?.value&&null===d.k0.required(l)&&null===d.k0.email(l);if(this.verificationCodeSent)return this.form.valid;{const O=this.form.get("account")?.valid,q=this.form.get("birthday")?.valid;return O&&q&&(h||_)}}sendOrResendVerificationCode(){if(!this.checkFormValidity(!1))return void this.scrollToFirstInvalidControl();const t=this.form.value;this.codeSent&&0!==this.countdown?(console.log("Resending verification code..."),this.countdown=this.initialCountdown,clearInterval(this.countdownTimer),this.startCountdown()):(console.log("Sending verification code...",t.select_mobile),t.birthday=new Date(t.birthday).toLocaleDateString(),this.us.sendVerificationCode(t.account,t.idendity,t.birthday,t.select_mobile,t.mobile,t.email).subscribe({next:i=>{console.log(i),this.verificationCodeSent=!0},error:i=>{console.log("Verification code send failed",i),this.verificationCodeSent=!0,this.verifyError=!0}}),setTimeout(()=>{this.codeSent=!0,this.startCountdown()},500))}startCountdown(){this.countdown=this.initialCountdown,this.countdownTimer=setInterval(()=>{this.countdown>0?this.countdown--:clearInterval(this.countdownTimer)},1e3)}login(){if(this.checkFormValidity(!0))if(this.verificationCodeSent){const t=this.form.value;this.form.disable(),t.birthday=F()(t.birthday).format("YYYYMMDD"),this.processing=!0,this.us.login(t.account,t.idendity,t.birthday,t.select_mobile,t.mobile,t.email,t.verificationCode).subscribe({next:l=>{console.log(l,"1"),this.processing=!1,this.form.enable()},error:l=>{this.form.enable(),this.processing=!1,this.verifyError=!0,this.addAlertMessage("verificationCode_not_sent"),console.log("\u4f3a\u670d\u5668\u932f\u8aa4",l)}});const i=document.referrer;history.length>1&&!i.includes("/login")?window.history.back():this.ut.navigate("/index")}else this.addAlertMessage("verificationCode_not_sent"),this.verifyError=!0,this.form.enable();else this.scrollToFirstInvalidControl()}scrollToFirstInvalidControl(){const t=document.querySelector("form .ng-invalid");this.ut.scrollToElement(t.id)}static#e=this.\u0275fac=function(i){return new(i||s)(e.rXU(d.ok),e.rXU(J.D),e.rXU(S.Y),e.rXU(b.MJ),e.rXU(I.c$))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["login"]],viewQuery:function(i,l){if(1&i&&e.GBs(U,5),2&i){let h;e.mGM(h=e.lsd())&&(l.audioElement=h.first)}},decls:106,vars:63,consts:[["dp",""],["id","login"],[1,"title-pic"],[1,"title-pic-text-box"],[1,"title-pic-text-box-CH"],[1,"d-flex","flex-column","justify-content-center","flex-sm-row"],[1,"title-pic-text-box-EN"],[1,"content"],[1,"login-title"],["src","../../assets/images/Line 11.png","alt","",1,"w-100"],[1,"text-center","justify-content-center","fw-bold",3,"ngSubmit","formGroup"],[1,"form-box"],["for","account",1,"d-flex"],[1,"need"],["id","account","type","text","formControlName","account","maxlength","10",1,"form-control","input-text"],[1,"form-box","d-flex"],[1,"text-start","ratio-box"],[1,"form-check"],["id","idendity","type","radio","formControlName","idendity","value","1",1,"form-check-input"],["for","idendity"],["id","his","type","radio","formControlName","idendity","value","2",1,"form-check-input"],["for","his"],["id","other","type","radio","formControlName","idendity","value","3",1,"form-check-input"],["for","other"],[1,"full-clickable"],["matInput","","formControlName","birthday",3,"matDatepicker","max"],["matIconSuffix","",3,"for"],[1,"d-flex","justify-content-center"],["for","select_mobile",1,"d-flex"],["id","select_mobile","type","radio","formControlName","select_mobile","value","1",1,"form-check-input",3,"change"],["for","select_email",1,"d-flex"],["id","select_email","type","radio","formControlName","select_mobile","value","2",1,"form-check-input",3,"change"],[1,"d-flex","justify-content-center","align-items-center","flex-wrap"],["type","tel","name","mobile","id","mobile","class","form-control input-text mb-2","formControlName","mobile","maxlength","10",3,"placeholder",4,"ngIf"],["type","email","name","email","id","email","class","form-control input-text mb-2","formControlName","email","maxlength","255",3,"placeholder",4,"ngIf"],["type","button",1,"btn","submit",3,"click","disabled"],[4,"ngIf"],["class","d-flex justify-content-center fs-5 alert alert-warning mt-2",4,"ngIf"],[1,"form-box","d-flex","justify-content-center"],[1,"d-flex"],[1,"",2,"width","-webkit-fill-available"],["type","text","formControlName","verificationCode","minlength","6","maxlength","6",1,"form-control","input-text"],["type","submit",1,"btn","submit"],["class","d-flex justify-content-center",4,"ngIf"],["class","d-flex justify-content-center fs-5 alert alert-danger mt-2","style","color: red",4,"ngIf"],["href","/FrontEnd/signup.aspx",1,"btn","btn-link","submit","mx-4"],[3,"alertMessages"],["type","tel","name","mobile","id","mobile","formControlName","mobile","maxlength","10",1,"form-control","input-text","mb-2",3,"placeholder"],["type","email","name","email","id","email","formControlName","email","maxlength","255",1,"form-control","input-text","mb-2",3,"placeholder"],[1,"d-flex","justify-content-center","fs-5","alert","alert-warning","mt-2"],["role","status",1,"spinner-border","text-info"],[1,"d-flex","justify-content-center","fs-5","alert","alert-danger","mt-2",2,"color","red"],["href","/FrontEnd/contact.aspx"]],template:function(i,l){if(1&i){const h=e.RV6();e.j41(0,"section",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),e.nrm(5,"div"),e.k0s()(),e.nrm(6,"div",6),e.k0s()(),e.j41(7,"div",7)(8,"div",8)(9,"div")(10,"span"),e.EFF(11),e.nI1(12,"translate"),e.k0s(),e.EFF(13),e.nI1(14,"translate"),e.k0s(),e.j41(15,"div"),e.nrm(16,"img",9),e.k0s(),e.j41(17,"div"),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.j41(20,"form",10),e.bIt("ngSubmit",function(){return e.eBV(h),e.Njj(l.login())}),e.j41(21,"div",11)(22,"label",12)(23,"div"),e.EFF(24),e.nI1(25,"translate"),e.j41(26,"span",13),e.EFF(27,"*"),e.k0s(),e.EFF(28,":"),e.k0s(),e.nrm(29,"input",14),e.k0s()(),e.j41(30,"div",15)(31,"div"),e.EFF(32),e.nI1(33,"translate"),e.j41(34,"span",13),e.EFF(35,"*"),e.k0s(),e.EFF(36,":"),e.k0s(),e.j41(37,"div",16)(38,"div",17),e.nrm(39,"input",18),e.j41(40,"label",19),e.EFF(41),e.nI1(42,"translate"),e.k0s()(),e.j41(43,"div",17),e.nrm(44,"input",20),e.j41(45,"label",21),e.EFF(46),e.nI1(47,"translate"),e.k0s()(),e.j41(48,"div",17),e.nrm(49,"input",22),e.j41(50,"label",23),e.EFF(51),e.nI1(52,"translate"),e.k0s()()()(),e.j41(53,"div",11)(54,"label"),e.EFF(55),e.nI1(56,"translate"),e.j41(57,"span",13),e.EFF(58,"*"),e.k0s(),e.EFF(59,":"),e.k0s(),e.j41(60,"mat-form-field",24)(61,"mat-label"),e.EFF(62),e.nI1(63,"translate"),e.k0s(),e.nrm(64,"input",25)(65,"mat-datepicker-toggle",26)(66,"mat-datepicker",null,0),e.k0s()(),e.j41(68,"div",11)(69,"div"),e.EFF(70),e.nI1(71,"translate"),e.k0s(),e.j41(72,"div",27)(73,"label",28)(74,"input",29),e.bIt("change",function(){return e.eBV(h),e.Njj(l.toggleSelection(!0))}),e.k0s(),e.EFF(75),e.nI1(76,"translate"),e.k0s(),e.j41(77,"label",30)(78,"input",31),e.bIt("change",function(){return e.eBV(h),e.Njj(l.toggleSelection(!1))}),e.k0s(),e.EFF(79),e.nI1(80,"translate"),e.k0s()(),e.j41(81,"div",32),e.DNE(82,A,2,3,"input",33)(83,E,2,3,"input",34),e.j41(84,"button",35),e.bIt("click",function(){return e.eBV(h),e.Njj(l.sendOrResendVerificationCode())}),e.DNE(85,N,3,3,"ng-container",36)(86,z,4,7,"ng-container",36),e.k0s()(),e.DNE(87,$,4,7,"div",37),e.k0s(),e.j41(88,"div",38)(89,"label",39)(90,"div",40),e.EFF(91),e.nI1(92,"translate"),e.j41(93,"span",13),e.EFF(94,"*"),e.k0s(),e.EFF(95,": "),e.k0s(),e.nrm(96,"input",41),e.k0s()(),e.j41(97,"button",42),e.EFF(98),e.nI1(99,"translate"),e.k0s(),e.DNE(100,B,2,0,"div",43)(101,P,7,6,"div",44),e.j41(102,"a",45),e.EFF(103),e.nI1(104,"translate"),e.k0s()()()(),e.nrm(105,"app-alert",46)}if(2&i){const h=e.sdS(67);e.R7$(11),e.SpI(" ",e.bMT(12,31,"login.member_exclusive"),""),e.R7$(2),e.JRh(e.bMT(14,33,"login.past_appointments_and_risk_changes")),e.R7$(5),e.JRh(e.bMT(19,35,"login.login_to_inquire")),e.R7$(2),e.Y8G("formGroup",l.form),e.R7$(4),e.JRh(e.bMT(25,37,"login.id_number")),e.R7$(8),e.JRh(e.bMT(33,39,"login.enter_id_number_as")),e.R7$(9),e.JRh(e.bMT(42,41,"login.id_card_number")),e.R7$(5),e.JRh(e.bMT(47,43,"login.medical_record_number")),e.R7$(5),e.JRh(e.bMT(52,45,"login.other_id_types")),e.R7$(4),e.JRh(e.bMT(56,47,"login.date_of_birth")),e.R7$(7),e.JRh(e.bMT(63,49,"login.date_format")),e.R7$(2),e.Y8G("matDatepicker",h)("max",l.maxDate),e.R7$(),e.Y8G("for",h),e.R7$(5),e.JRh(e.bMT(71,51,"login.send_otp")),e.R7$(5),e.JRh(e.bMT(76,53,"login.mobile_verification")),e.R7$(4),e.JRh(e.bMT(80,55,"login.email_verification")),e.R7$(3),e.Y8G("ngIf",l.select_mobile),e.R7$(),e.Y8G("ngIf",!l.select_mobile),e.R7$(),e.xc7("cursor",l.cursor),e.Y8G("disabled",l.codeSent&&l.countdown>0),e.R7$(),e.Y8G("ngIf",!l.codeSent||0===l.countdown),e.R7$(),e.Y8G("ngIf",l.codeSent&&l.countdown>0),e.R7$(),e.Y8G("ngIf",l.codeSent&&l.countdown>0),e.R7$(4),e.SpI(" ",e.bMT(92,57,"login.verification_code"),""),e.R7$(7),e.JRh(e.bMT(99,59,"login.login")),e.R7$(2),e.Y8G("ngIf",l.processing),e.R7$(),e.Y8G("ngIf",l.verifyError),e.R7$(2),e.JRh(e.bMT(104,61,"login.signup")),e.R7$(2),e.Y8G("alertMessages",l.alertMessages)}},dependencies:[T.bT,d.qT,d.me,d.Fm,d.BC,d.cb,d.xh,d.tU,d.j4,d.JD,Y.rl,Y.nJ,Y.yw,V.fg,w.Vh,w.bZ,w.bU,W.C,I.D9],styles:["#login[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:980px;margin:0 auto}.login-title[_ngcontent-%COMP%]{text-align:center;font-weight:900;padding:25px 0;font-size:1.875rem}.login-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d8a51f;font-size:1.875rem;padding-right:20px}#login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:30px}.form-box[_ngcontent-%COMP%]{margin-bottom:1.5rem}#login[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;border-radius:0}#login[_ngcontent-%COMP%]   .need[_ngcontent-%COMP%]{color:red}#login[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{border:none;border-bottom:2px solid rgba(128,128,128,.473);max-width:360px}.ratio-box[_ngcontent-%COMP%]{padding-left:10px}#login[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:30px}#login[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{word-wrap:normal;border-bottom:2px solid}#login[_ngcontent-%COMP%]{border:none}#login[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{border:none;background-color:#90bdde;color:#fff;font-size:1.5625rem;font-weight:bolder;padding:5px 20px;border-radius:30px}"]})}return s})();var H=u(4602),Z=u(6182);const D=p||M,x=new e.nKC("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function C(){return{useUtc:!1}}});function g(s,f){const t=Array(s);for(let i=0;i<s;i++)t[i]=f(i);return t}let k=(()=>{class s extends b.MJ{constructor(t,i){super(),this._options=i,this.setLocale(t||D.locale())}setLocale(t){super.setLocale(t);let i=D.localeData(t);this._localeData={firstDayOfWeek:i.firstDayOfWeek(),longMonths:i.months(),shortMonths:i.monthsShort(),dates:g(31,l=>this.createDate(2017,0,l+1).format("D")),longDaysOfWeek:i.weekdays(),shortDaysOfWeek:i.weekdaysShort(),narrowDaysOfWeek:i.weekdaysMin()}}getYear(t){return this.clone(t).year()}getMonth(t){return this.clone(t).month()}getDate(t){return this.clone(t).date()}getDayOfWeek(t){return this.clone(t).day()}getMonthNames(t){return"long"==t?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(t){return"long"==t?this._localeData.longDaysOfWeek:"short"==t?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(t){return this.clone(t).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(t){return this.clone(t).daysInMonth()}clone(t){return t.clone().locale(this.locale)}createDate(t,i,l){const h=this._createMoment({year:t,month:i,date:l}).locale(this.locale);return h.isValid(),h}today(){return this._createMoment().locale(this.locale)}parse(t,i){return t&&"string"==typeof t?this._createMoment(t,i,this.locale):t?this._createMoment(t).locale(this.locale):null}format(t,i){return t=this.clone(t),this.isValid(t),t.format(i)}addCalendarYears(t,i){return this.clone(t).add({years:i})}addCalendarMonths(t,i){return this.clone(t).add({months:i})}addCalendarDays(t,i){return this.clone(t).add({days:i})}toIso8601(t){return this.clone(t).format()}deserialize(t){let i;if(t instanceof Date)i=this._createMoment(t).locale(this.locale);else if(this.isDateInstance(t))return this.clone(t);if("string"==typeof t){if(!t)return null;i=this._createMoment(t,D.ISO_8601).locale(this.locale)}return i&&this.isValid(i)?this._createMoment(i).locale(this.locale):super.deserialize(t)}isDateInstance(t){return D.isMoment(t)}isValid(t){return this.clone(t).isValid()}invalid(){return D.invalid()}_createMoment(t,i,l){const{strict:h,useUtc:_}=this._options||{};return _?D.utc(t,i,l,h):D(t,i,l,h)}static#e=this.\u0275fac=function(i){return new(i||s)(e.KVO(b.Ju,8),e.KVO(x,8))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac})}return s})();u(5580);var r=u(8232),a=u.n(r);const c={parse:{dateInput:"tYY-MM-DD"},display:{dateInput:"tYY-MM-DD",monthYearLabel:"\u6c11\u570btYY MMM",dateA11yLabel:"LL",monthYearA11yLabel:"tYY MMMM"}};class m extends k{constructor(f,t){super(f,t),F().locale(f)}parse(f,t){return F()(a()(f).format(t))}format(f,t){return a()(f).format(t)}getYearName(f){const t=a()(f).twYear();return t>0?`${t}`:""}}var y=u(4479);let v=(()=>{class s{static#e=this.\u0275fac=function(i){return new(i||s)};static#t=this.\u0275mod=e.$C({type:s});static#n=this.\u0275inj=e.G2t({providers:[{provide:b.Ju,useValue:"zh-TW"},{provide:b.MJ,useClass:m,deps:[b.Ju,x]},{provide:b.de,useValue:c}],imports:[T.MD,d.YN,d.X1,Y.RG,V.fS,w.X6,H.Hl,Z.m_,y.G,I.h,L.iI.forChild([{path:"",component:X}])]})}return s})()}}]);