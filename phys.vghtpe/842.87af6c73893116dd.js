(self.webpackChunkmy_new_project=self.webpackChunkmy_new_project||[]).push([[842],{8232:function(R,j,u){var y,L,d,p;typeof window<"u"&&window,p=function(e){var E=/tYY|YY(YY)?|Q|MM?|MMMM?|DD?|Do|DDDD?|X|x|gg(gg)?|ww?|e|dddd?|GG(GG)?|WW?|E|HH?|hh?|a|A|mm?|ss?|SS?S?S?|ZZ?|./g,M=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,x=/\d\d?/,T=/\d{1,3}/,V=/\d{3}/,F=/\d{1,4}/,J=/[+\-]?\d{1,6}/,W=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,U=/Z|[\+\-]\d\d:?\d\d/i,B=/T/i,z=/[\+\-]?\d+(\.\d{1,3})?/,I={},w={tYY:function(){return this.twYear()+""}},S=function(n,i){var a;for(a in i)i.hasOwnProperty(a)&&(n[a]=i[a]);return n},N=function(n){function i(){}return i.prototype=n,new i},$=function(n,i){switch(n){case"tYY":case"S":case"SS":case"SSS":case"DDD":return T;case"DDDD":return V;case"YYYY":return F;case"YYYYY":return J;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return W;case"a":case"A":return e.localeData(i.lang)._meridiemParse;case"X":return z;case"Z":case"ZZ":return U;case"T":return B;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return x;default:return new RegExp(n.replace("\\",""))}},C=function(n,i,a,r,c){"boolean"==typeof a&&(c=r,r=a,a=void 0);var t,m={input:n,format:i,lang:a,strict:r,utc:c},_=n,v=i;if(i){if(Array.isArray(i))return function(n,i){if(0===n.format.length)return C(new Date(NaN));var a=n.format.map(function(r){var c=0,m=C(n.input,r,n.lang,n.strict,i);return m.isValid()&&m._tw_leftLength&&(c+=m._tw_leftLength.length),{score:c,moment:m}});return a.sort(function(r,c){return r.score-c.score}),a[0].moment}(m,c);var s=function(n){var i=n.format.match(E),a=n.input+"";return n._a=[],i.forEach(function(r){var c=($(r,n).exec(a)||[])[0];c&&(a=a.slice(a.indexOf(c)+c.length)),w[r]&&function(n,i,a){"tYY"===n&&(a._twYear=~~i),null==i&&(a._isValid=!1)}(r,c,n)}),a&&(n._tw_leftLength=a),function(n){return n._twYear}(n)}(m),f=function(n){var i=n.input+"",a="",r="";n.format.match(E).forEach(function(_){var v=($(_,n).exec(i)||[])[0];v&&(i=i.slice(i.indexOf(v)+v.length)),w[_]instanceof Function||(r+=_,v&&(a+=v))}),n.input=a;var m=n.format;return n.format=r,m!=r}(m);f?(i="YYYY-"+m.format,n=typeof s>"u"?"ABCD-"+m.input:function(i){return 0==i?1912:i>0?i+1911:i+1912}(s)+"-"+m.input):(i=v,n=_)}t=c?e.utc(n,i,a,r):e(n,i,a,r),!1===m._isValid&&(t._isValid=!1);var o=N(g.fn);return S(o,t),r&&o.isValid()&&(o._isValid=o.format(v)===_),o},g=function(n,i,a,r){return C(n,i,a,r,!1)};S(g,e),g.fn=N(e.fn),g.utc=function(n,i,a,r){return C(n,i,a,r,!0)},g.unix=function(n){return C(1e3*n)},g.fn.format=function(n){var i,a,r=this;if(n){for(i=5,a=function(c){return r.localeData().longDateFormat(c)||c};i>0&&M.test(n);)i-=1,n=n.replace(M,a);I[n]||(I[n]=function(n){var r,i=n.match(E),a=i.length;return i.forEach(function(c,m){w[c]&&(i[m]=w[c])}),function(c){var m="";for(r=0;r<a;r+=1)m+=i[r]instanceof Function?"["+i[r].call(c,n)+"]":i[r];return m}}(n)),n=I[n](this)}return e.fn.format.call(this,n)},g.fn.twYear=function(n){var i,a,r;return"number"==typeof n?(a=k(this.year(),this.month(),this.date()),i=Math.min(a.year,g.twDaysInMonth(n,a.month)),function(n,i,a,r){var c=n._d;n._d=n._isUTC?new Date(Date.UTC(i,a,r,c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds())):new Date(i,a,r,c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds())}(this,(r=G(n,a.month,i)).year,r.month,r.day),e.updateOffset(this),this):k(this.year(),this.month(),this.date()).year},g.fn.clone=function(){return g(this)},g.twDaysInMonth=function(n,i){return n+=K(i,12),(i=Q(i,12))<0&&(i+=12,n-=1),function(n,i){switch(i){case 4:case 6:case 9:case 11:return 30;case 2:return utils.isLeapYear(utils.calYear(n))?29:28;default:return 31}}(n,i)},g.twIsLeapYear=function(i){return i%4==0&&i%100!=0||i%400==0},g.twConvert={toTaiwan:k,toGregorian:G};var k=function(n,i,a){var r=function(n,i,a){return{year:n<=1911?n-1912:n-1911,month:i,day:a}}(n,i+1,a);return r.month-=1,r},G=function(n,i,a){var r=function(n,i,a){return{year:utils.calYear(n),month:i,day:a}}(n,i+1,a);return r.month-=1,r},K=function(n,i){return~~(n/i)},Q=function(n,i){return n-~~(n/i)*i};return g},"object"==typeof R.exports?R.exports=p(u(5025)):(L=[u(5025)],void 0!==(d="function"==typeof(y=p)?y.apply(j,L):y)&&(R.exports=d))},5461:(R,j,u)=>{"use strict";u.r(j),u.d(j,{LoginModule:()=>v});var y=u(6610),L=u(7415),d=u(7222),e=u(3279),p=u(1681),E=u(8230),M=u(8278),x=u(2882),T=u(5468),V=u(4587),F=u(2839),J=u(4547);const W=["audioElement"];function U(s,f){1&s&&(e.nrm(0,"input",45),e.nI1(1,"translate")),2&s&&e.FS9("placeholder",e.bMT(1,1,"login.enter_mobile_number"))}function B(s,f){1&s&&(e.nrm(0,"input",46),e.nI1(1,"translate")),2&s&&e.FS9("placeholder",e.bMT(1,1,"login.enter_email"))}function z(s,f){1&s&&(e.qex(0),e.EFF(1),e.nI1(2,"translate"),e.bVm()),2&s&&(e.R7$(),e.JRh(e.bMT(2,1,"login.send_verification_code")))}function I(s,f){if(1&s&&(e.qex(0),e.EFF(1),e.nI1(2,"translate"),e.nI1(3,"translate"),e.bVm()),2&s){const t=e.XpG();e.R7$(),e.E5c("",e.bMT(2,3,"login.resend_verification_code"),"",t.countdown,"",e.bMT(3,5,"login.seconds"),"")}}function w(s,f){if(1&s&&(e.j41(0,"div",47),e.EFF(1),e.nI1(2,"translate"),e.nI1(3,"translate"),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.E5c(" ",e.bMT(2,3,"login.no_verification_code_received"),"",t.countdown,"",e.bMT(3,5,"login.seconds"),"\u3002 ")}}function S(s,f){1&s&&(e.j41(0,"div",27),e.nrm(1,"div",48),e.k0s())}function X(s,f){1&s&&(e.j41(0,"div",49),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&s&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"login.verification_code_error")," "))}let N=(()=>{class s{constructor(t,o,l,h,D){this.fb=t,this.us=o,this.ut=l,this.dateAdapter=h,this.trs=D,this.alertMessages=[],this.processing=!1,this.account="",this.selectedYear=0,this.selectedMonth=0,this.selectedDay=0,this.verificationCode="",this.codeSent=!1,this.initialCountdown=60,this.countdown=this.initialCountdown,this.select_mobile=!0,this.verifyError=!1,this.cursor="",this.cursors=["not-allowed","initial"],this.verificationCodeSent=!1,this.selectedYear=(new Date).getFullYear(),this.selectedMonth=1,this.selectedDay=1,this.maxDate=new Date}ngOnInit(){this.form=this.fb.group({account:["",d.k0.required],idendity:["1",d.k0.required],his:[""],other:[""],birthday:["",d.k0.required],select_mobile:["1"],select_email:[""],mobile:[""],email:[""],verificationCode:["",d.k0.required]}),this.updateValidators(this.select_mobile),this.form.get("select_mobile")?.valueChanges.subscribe(t=>{this.select_mobile="1"===t,this.updateValidators(this.select_mobile)})}updateValidators(t){t?(this.form.get("mobile")?.setValidators([d.k0.required,d.k0.pattern(/^\d{10}$/)]),this.form.get("email")?.clearValidators(),this.form.get("email")?.updateValueAndValidity(),this.form.get("email")?.reset()):(this.form.get("email")?.setValidators([d.k0.required,d.k0.email]),this.form.get("mobile")?.clearValidators(),this.form.get("mobile")?.updateValueAndValidity(),this.form.get("mobile")?.reset()),this.form.get("mobile")?.updateValueAndValidity(),this.form.get("email")?.updateValueAndValidity()}toggleSelection(t){this.select_mobile=t,this.updateValidators(this.select_mobile)}addAlertMessage(t){const o=this.trs.instant(`login.${t}`);this.alertMessages.push(o)}checkFormValidity(t){this.alertMessages=[],Object.keys(this.form.controls).forEach(O=>{this.form.get(O)?.invalid&&(t||"verificationCode"!==O)&&this.addAlertMessage(O+"_required")});const o=this.form.get("mobile"),l=this.form.get("email"),h=o?.value&&null===d.k0.required(o)&&null===d.k0.pattern(/^\d{10}$/)(o),D=l?.value&&null===d.k0.required(l)&&null===d.k0.email(l);if(this.verificationCodeSent)return this.form.valid;{const O=this.form.get("account")?.valid,q=this.form.get("birthday")?.valid;return O&&q&&(h||D)}}sendOrResendVerificationCode(){if(this.checkFormValidity(!1)){const t=this.form.value;this.codeSent&&0!==this.countdown?(console.log("Resending verification code..."),this.countdown=this.initialCountdown,clearInterval(this.countdownTimer),this.startCountdown()):(console.log("Sending verification code..."),t.birthday=new Date(t.birthday).toLocaleDateString(),this.us.sendVerificationCode(t.account,t.idendity,t.select_mobile,t.mobile,t.email).subscribe({next:o=>{console.log(o),this.verificationCodeSent=!0},error:o=>{console.log("Verification code send failed",o),this.verificationCodeSent=!1}}),setTimeout(()=>{this.codeSent=!0,this.startCountdown()},500))}}startCountdown(){this.countdown=this.initialCountdown,this.countdownTimer=setInterval(()=>{this.countdown>0?this.countdown--:clearInterval(this.countdownTimer)},1e3)}login(){if(this.checkFormValidity(!0))if(this.verificationCodeSent){const t=this.form.value;this.form.disable(),console.log(t.verificationCode),t.birthday=new Date(t.birthday).toLocaleDateString(),this.processing=!0,this.us.login(t.account,t.idendity,t.birthday,t.select_mobile,t.mobile,t.email,t.verificationCode).subscribe({next:o=>{console.log(o,"1"),this.processing=!1,this.form.enable(),this.us.userValidated&&o&&(history.length>1?window.history.back():this.ut.navigate("/index"))},error:o=>{this.form.enable(),this.processing=!1,this.verifyError=!0,this.addAlertMessage("verificationCode_not_sent"),console.log("\u4f3a\u670d\u5668\u932f\u8aa4")}})}else this.addAlertMessage("verificationCode_not_sent"),this.form.enable()}static#e=this.\u0275fac=function(o){return new(o||s)(e.rXU(d.ok),e.rXU(p.D),e.rXU(E.Y),e.rXU(M.MJ),e.rXU(x.c$))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["login"]],viewQuery:function(o,l){if(1&o&&e.GBs(W,5),2&o){let h;e.mGM(h=e.lsd())&&(l.audioElement=h.first)}},decls:103,vars:60,consts:[["dp",""],["id","login"],[1,"title-pic"],[1,"title-pic-text-box"],[1,"title-pic-text-box-CH"],[1,"d-flex","flex-column","justify-content-center","flex-sm-row"],[1,"title-pic-text-box-EN"],[1,"content"],[1,"login-title"],["src","../../assets/images/Line 11.png","alt","",1,"w-100"],[1,"text-center","justify-content-center","fw-bold",3,"ngSubmit","formGroup"],[1,"form-box"],["for","account",1,"d-flex"],[1,"need"],["id","account","type","text","formControlName","account","maxlength","10",1,"form-control","input-text"],[1,"form-box","d-flex"],[1,"text-start","ratio-box"],[1,"form-check"],["id","idendity","type","radio","formControlName","idendity","value","1",1,"form-check-input"],["for","idendity"],["id","his","type","radio","formControlName","idendity","value","2",1,"form-check-input"],["for","his"],["id","other","type","radio","formControlName","idendity","value","3",1,"form-check-input"],["for","other"],[1,"full-clickable"],["matInput","","formControlName","birthday",3,"matDatepicker","max"],["matIconSuffix","",3,"for"],[1,"d-flex","justify-content-center"],["for","select_mobile",1,"d-flex"],["id","select_mobile","type","radio","formControlName","select_mobile","value","1",1,"form-check-input",3,"change"],["for","select_email",1,"d-flex"],["id","select_email","type","radio","formControlName","select_mobile","value","2",1,"form-check-input",3,"change"],["type","tel","name","mobile","id","mobile","class","form-control input-text","formControlName","mobile","maxlength","10",3,"placeholder",4,"ngIf"],["type","email","name","email","id","email","class","form-control input-text","formControlName","email","maxlength","255",3,"placeholder",4,"ngIf"],["type","button",1,"submit",3,"click","disabled"],[4,"ngIf"],["class","d-flex justify-content-center fs-5 alert alert-warning mt-2",4,"ngIf"],[1,"form-box","d-flex","justify-content-center"],[1,"d-flex"],[1,"",2,"width","-webkit-fill-available"],["type","text","formControlName","verificationCode","minlength","6","maxlength","6",1,"form-control","input-text"],["type","submit",1,"submit",3,"click"],["class","d-flex justify-content-center",4,"ngIf"],["class","d-flex justify-content-center fs-5 alert alert-danger mt-2","style","color: red",4,"ngIf"],[3,"alertMessages"],["type","tel","name","mobile","id","mobile","formControlName","mobile","maxlength","10",1,"form-control","input-text",3,"placeholder"],["type","email","name","email","id","email","formControlName","email","maxlength","255",1,"form-control","input-text",3,"placeholder"],[1,"d-flex","justify-content-center","fs-5","alert","alert-warning","mt-2"],["role","status",1,"spinner-border","text-info"],[1,"d-flex","justify-content-center","fs-5","alert","alert-danger","mt-2",2,"color","red"]],template:function(o,l){if(1&o){const h=e.RV6();e.j41(0,"section",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),e.nrm(5,"div"),e.k0s()(),e.nrm(6,"div",6),e.k0s()(),e.j41(7,"div",7)(8,"div",8)(9,"div")(10,"span"),e.EFF(11),e.nI1(12,"translate"),e.k0s(),e.EFF(13),e.nI1(14,"translate"),e.k0s(),e.j41(15,"div"),e.nrm(16,"img",9),e.k0s(),e.j41(17,"div"),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.j41(20,"form",10),e.bIt("ngSubmit",function(){return e.eBV(h),e.Njj(l.login())}),e.j41(21,"div",11)(22,"label",12)(23,"div"),e.EFF(24),e.nI1(25,"translate"),e.j41(26,"span",13),e.EFF(27,"*"),e.k0s(),e.EFF(28,":"),e.k0s(),e.nrm(29,"input",14),e.k0s()(),e.j41(30,"div",15)(31,"div"),e.EFF(32),e.nI1(33,"translate"),e.j41(34,"span",13),e.EFF(35,"*"),e.k0s(),e.EFF(36,":"),e.k0s(),e.j41(37,"div",16)(38,"div",17),e.nrm(39,"input",18),e.j41(40,"label",19),e.EFF(41),e.nI1(42,"translate"),e.k0s()(),e.j41(43,"div",17),e.nrm(44,"input",20),e.j41(45,"label",21),e.EFF(46),e.nI1(47,"translate"),e.k0s()(),e.j41(48,"div",17),e.nrm(49,"input",22),e.j41(50,"label",23),e.EFF(51),e.nI1(52,"translate"),e.k0s()()()(),e.j41(53,"div",11)(54,"label"),e.EFF(55),e.nI1(56,"translate"),e.j41(57,"span",13),e.EFF(58,"*"),e.k0s(),e.EFF(59,":"),e.k0s(),e.j41(60,"mat-form-field",24)(61,"mat-label"),e.EFF(62),e.nI1(63,"translate"),e.k0s(),e.nrm(64,"input",25)(65,"mat-datepicker-toggle",26)(66,"mat-datepicker",null,0),e.k0s()(),e.j41(68,"div",11)(69,"div"),e.EFF(70),e.nI1(71,"translate"),e.k0s(),e.j41(72,"div",27)(73,"label",28)(74,"input",29),e.bIt("change",function(){return e.eBV(h),e.Njj(l.toggleSelection(!0))}),e.k0s(),e.EFF(75),e.nI1(76,"translate"),e.k0s(),e.j41(77,"label",30)(78,"input",31),e.bIt("change",function(){return e.eBV(h),e.Njj(l.toggleSelection(!1))}),e.k0s(),e.EFF(79),e.nI1(80,"translate"),e.k0s()(),e.j41(81,"div",27),e.DNE(82,U,2,3,"input",32)(83,B,2,3,"input",33),e.j41(84,"button",34),e.bIt("click",function(){return e.eBV(h),e.Njj(l.sendOrResendVerificationCode())}),e.DNE(85,z,3,3,"ng-container",35)(86,I,4,7,"ng-container",35),e.k0s()(),e.DNE(87,w,4,7,"div",36),e.k0s(),e.j41(88,"div",37)(89,"label",38)(90,"div",39),e.EFF(91),e.nI1(92,"translate"),e.j41(93,"span",13),e.EFF(94,"*"),e.k0s(),e.EFF(95,": "),e.k0s(),e.nrm(96,"input",40),e.k0s()(),e.j41(97,"button",41),e.bIt("click",function(){return e.eBV(h),e.Njj(l.login())}),e.EFF(98),e.nI1(99,"translate"),e.k0s(),e.DNE(100,S,2,0,"div",42)(101,X,3,3,"div",43),e.k0s()()(),e.nrm(102,"app-alert",44)}if(2&o){const h=e.sdS(67);e.R7$(11),e.SpI(" ",e.bMT(12,30,"login.member_exclusive"),""),e.R7$(2),e.JRh(e.bMT(14,32,"login.past_appointments_and_risk_changes")),e.R7$(5),e.JRh(e.bMT(19,34,"login.login_to_inquire")),e.R7$(2),e.Y8G("formGroup",l.form),e.R7$(4),e.JRh(e.bMT(25,36,"login.id_number")),e.R7$(8),e.JRh(e.bMT(33,38,"login.enter_id_number_as")),e.R7$(9),e.JRh(e.bMT(42,40,"login.id_card_number")),e.R7$(5),e.JRh(e.bMT(47,42,"login.medical_record_number")),e.R7$(5),e.JRh(e.bMT(52,44,"login.other_id_types")),e.R7$(4),e.JRh(e.bMT(56,46,"login.date_of_birth")),e.R7$(7),e.JRh(e.bMT(63,48,"login.date_format")),e.R7$(2),e.Y8G("matDatepicker",h)("max",l.maxDate),e.R7$(),e.Y8G("for",h),e.R7$(5),e.JRh(e.bMT(71,50,"login.send_otp")),e.R7$(5),e.JRh(e.bMT(76,52,"login.mobile_verification")),e.R7$(4),e.JRh(e.bMT(80,54,"login.email_verification")),e.R7$(3),e.Y8G("ngIf",l.select_mobile),e.R7$(),e.Y8G("ngIf",!l.select_mobile),e.R7$(),e.xc7("cursor",l.cursor),e.Y8G("disabled",l.codeSent&&l.countdown>0),e.R7$(),e.Y8G("ngIf",!l.codeSent||0===l.countdown),e.R7$(),e.Y8G("ngIf",l.codeSent&&l.countdown>0),e.R7$(),e.Y8G("ngIf",l.codeSent&&l.countdown>0),e.R7$(4),e.SpI(" ",e.bMT(92,56,"login.verification_code"),""),e.R7$(7),e.JRh(e.bMT(99,58,"login.login")),e.R7$(2),e.Y8G("ngIf",l.processing),e.R7$(),e.Y8G("ngIf",l.verifyError),e.R7$(),e.Y8G("alertMessages",l.alertMessages)}},dependencies:[y.bT,d.qT,d.me,d.Fm,d.BC,d.cb,d.xh,d.tU,d.j4,d.JD,T.rl,T.nJ,T.yw,V.fg,F.Vh,F.bZ,F.bU,J.C,x.D9],styles:["#login[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:980px;margin:0 auto}.login-title[_ngcontent-%COMP%]{text-align:center;font-weight:900;padding:25px 0;font-size:1.875rem}.login-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d8a51f;font-size:1.875rem;padding-right:20px}#login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:30px}.form-box[_ngcontent-%COMP%]{margin-bottom:1.5rem}#login[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;border-radius:0}#login[_ngcontent-%COMP%]   .need[_ngcontent-%COMP%]{color:red}#login[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{border:none;border-bottom:2px solid rgba(128,128,128,.473);max-width:360px}.ratio-box[_ngcontent-%COMP%]{padding-left:10px}#login[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:30px}#login[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{word-wrap:normal;border-bottom:2px solid}#login[_ngcontent-%COMP%]{border:none}#login[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{border:none;background-color:#90bdde;color:#fff;font-size:1.5625rem;font-weight:bolder;padding:5px 20px;border-radius:30px}"]})}return s})();var H=u(4602),$=u(6182),A=u(5025),Z=u.t(A,2),P=u.n(A);const b=A||Z,Y=new e.nKC("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function C(){return{useUtc:!1}}});function g(s,f){const t=Array(s);for(let o=0;o<s;o++)t[o]=f(o);return t}let k=(()=>{class s extends M.MJ{constructor(t,o){super(),this._options=o,this.setLocale(t||b.locale())}setLocale(t){super.setLocale(t);let o=b.localeData(t);this._localeData={firstDayOfWeek:o.firstDayOfWeek(),longMonths:o.months(),shortMonths:o.monthsShort(),dates:g(31,l=>this.createDate(2017,0,l+1).format("D")),longDaysOfWeek:o.weekdays(),shortDaysOfWeek:o.weekdaysShort(),narrowDaysOfWeek:o.weekdaysMin()}}getYear(t){return this.clone(t).year()}getMonth(t){return this.clone(t).month()}getDate(t){return this.clone(t).date()}getDayOfWeek(t){return this.clone(t).day()}getMonthNames(t){return"long"==t?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(t){return"long"==t?this._localeData.longDaysOfWeek:"short"==t?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(t){return this.clone(t).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(t){return this.clone(t).daysInMonth()}clone(t){return t.clone().locale(this.locale)}createDate(t,o,l){const h=this._createMoment({year:t,month:o,date:l}).locale(this.locale);return h.isValid(),h}today(){return this._createMoment().locale(this.locale)}parse(t,o){return t&&"string"==typeof t?this._createMoment(t,o,this.locale):t?this._createMoment(t).locale(this.locale):null}format(t,o){return t=this.clone(t),this.isValid(t),t.format(o)}addCalendarYears(t,o){return this.clone(t).add({years:o})}addCalendarMonths(t,o){return this.clone(t).add({months:o})}addCalendarDays(t,o){return this.clone(t).add({days:o})}toIso8601(t){return this.clone(t).format()}deserialize(t){let o;if(t instanceof Date)o=this._createMoment(t).locale(this.locale);else if(this.isDateInstance(t))return this.clone(t);if("string"==typeof t){if(!t)return null;o=this._createMoment(t,b.ISO_8601).locale(this.locale)}return o&&this.isValid(o)?this._createMoment(o).locale(this.locale):super.deserialize(t)}isDateInstance(t){return b.isMoment(t)}isValid(t){return this.clone(t).isValid()}invalid(){return b.invalid()}_createMoment(t,o,l){const{strict:h,useUtc:D}=this._options||{};return D?b.utc(t,o,l,h):b(t,o,l,h)}static#e=this.\u0275fac=function(o){return new(o||s)(e.KVO(M.Ju,8),e.KVO(Y,8))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac})}return s})();u(5580);var a=u(8232),r=u.n(a);const c={parse:{dateInput:"tYY-MM-DD"},display:{dateInput:"tYY-MM-DD",monthYearLabel:"\u6c11\u570btYY MMM",dateA11yLabel:"LL",monthYearA11yLabel:"tYY MMMM"}};class m extends k{constructor(f,t){super(f,t),P().locale(f)}parse(f,t){return P()(r()(f).format(t))}format(f,t){return r()(f).format(t)}getYearName(f){const t=r()(f).twYear();return t>0?`${t}`:""}}var _=u(4479);let v=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275mod=e.$C({type:s});static#n=this.\u0275inj=e.G2t({providers:[{provide:M.Ju,useValue:"zh-TW"},{provide:M.MJ,useClass:m,deps:[M.Ju,Y]},{provide:M.de,useValue:c}],imports:[y.MD,d.YN,d.X1,T.RG,V.fS,F.X6,H.Hl,$.m_,_.G,x.h,L.iI.forChild([{path:"",component:N}])]})}return s})()}}]);