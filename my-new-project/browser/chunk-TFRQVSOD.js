import{b as D,c as A,g as w,h as j,i as O,l as P,m as G,o as T,r as Y,s as N,t as I,v as q}from"./chunk-BA3GETR7.js";import{$ as _,Ga as l,Na as h,Pb as f,Qb as F,S as s,Sa as t,Ta as e,Ua as i,Ub as y,W as g,X as k,Ya as C,aa as S,db as d,ec as M,fb as v,kb as n,lb as B,mb as E,va as u}from"./chunk-FMEZNCYJ.js";function $(m,r){if(m&1&&(t(0,"option",223),n(1),e()),m&2){let b=r.$implicit;l("value",b),u(),E(" ",b," ")}}function R(m,r){if(m&1&&(t(0,"option",223),n(1),e()),m&2){let b=r.$implicit;l("value",b),u(),E(" ",b," ")}}function H(m,r){if(m&1&&(t(0,"option",223),n(1),e()),m&2){let b=r.$implicit;l("value",b),u(),B(b)}}function L(m,r){if(m&1&&(t(0,"option",223),n(1),e()),m&2){let b=r.$implicit;l("value",b),u(),E(" ",b," ")}}function Q(m,r){if(m&1&&(t(0,"option",223),n(1),e()),m&2){let b=r.$implicit;l("value",b),u(),E(" ",b," ")}}function J(m,r){if(m&1){let b=C();t(0,"div",224)(1,"div",225)(2,"h2"),n(3,'\u8ACB\u52FE\u9078"\u5DF2\u78BA\u8A8D\u4EE5\u4E0A\u6AA2\u67E5\u78BA\u8A8D\u4E8B\u9805\u8CC7\u6599\u7121\u8AA4"'),e(),t(4,"button",221),d("click",function(){_(b);let c=v();return S(c.closeDialog())}),n(5,"\u95DC\u9589"),e()()()}}var V=(()=>{let r=class r{constructor(){this.years=[],this.months=[],this.days=[],this.smokingStatusGroup1="never",this.smokingStatusGroup2="never",this.smokingStatusGroup3="never",this.isDialogOpen=!1,this.isCheckAll=!1,this.selectedYear=new Date().getFullYear()-1911,this.selectedMonth=1,this.selectedDay=1,this.selectedYear1=new Date().getFullYear()-1911,this.selectedMonth1=1,this.selectedDay1=1}ngOnInit(){let x=new Date().getFullYear();for(let c=x;c>=x-60;c--){let o=c-1911;this.years.push(o)}for(let c=1;c<=12;c++)this.months.push(c);for(let c=1;c<=31;c++)this.days.push(c);this.selectedYear=x-1911,this.selectedYear1=x-1911}openDialog(){this.isCheckAll||(this.isDialogOpen=!0,console.log(this.isDialogOpen))}closeDialog(){this.isDialogOpen=!1,console.log(this.isDialogOpen)}};r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=g({type:r,selectors:[["survey_pb"]],decls:527,vars:37,consts:[[1,"title-pic"],[1,"title-pic-text-box","d-flex","flex-column","justify-content-center","align-items-center"],[1,"title-pic-text-box-CH"],[1,"d-flex","flex-column","justify-content-center","flex-sm-row"],[1,"title-pic-text-box-EN"],[1,"container"],[1,"title",2,"margin","30px 0"],["src","../../assets/images/Line 11.png","alt","",1,"w-100"],["action",""],[1,"section1"],[1,"main-title"],[1,"d-flex","justify-content-start","align-items-sm-center","box-label-input"],["for","input1"],["type","text","id","input1",1,"form-control","input-text"],["for","input2"],[1,"d-flex","justify-content-start","align-items-center"],["id","year",1,"form-select",2,"width","100px",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["id","month",1,"form-select",3,"ngModel","ngModelChange"],["id","day",1,"form-select",3,"ngModel","ngModelChange"],["for","job-now"],["id","job-now",1,"form-select",2,"width","300px"],["value","1","id","job_now_1","name","job_now"],["value","2","id","job_now_2","name","job_now"],["value","3","id","job_now_3","name","job_now"],["value","4","id","job_now_4","name","job_now"],["value","5","id","job_now_5","name","job_now"],["value","6","id","job_now_6","name","job_now"],["value","7","id","job_now_7","name","job_now"],["value","8","id","job_now_8","name","job_now"],["value","9","id","job_now_9","name","job_now"],["value","10","id","job_now_10","name","job_now"],["value","11","id","job_now_11","name","job_now"],["value","12","id","job_now_12","name","job_now"],["value","13","id","job_now_13","name","job_now"],["value","14","id","job_now_14","name","job_now"],["value","15","id","job_now_15","name","job_now"],["value","16","id","job_now_16","name","job_now"],["value","17","id","job_now_17","name","job_now"],["value","18","id","job_now_18","name","job_now"],["value","19","id","job_now_19","name","job_now"],["value","20","id","job_now_20","name","job_now"],["value","21","id","job_now_21","name","job_now"],["value","22","id","job_now_22","name","job_now"],["value","23","id","job_now_23","name","job_now"],["value","24","id","job_now_24","name","job_now"],["value","25","id","job_now_25","name","job_now"],["value","26","id","job_now_26","name","job_now"],["value","27","id","job_now_27","name","job_now"],["value","28","id","job_now_28","name","job_now"],["value","29","id","job_now_29","name","job_now"],["value","30","id","job_now_30","name","job_now"],["value","31","id","job_now_31","name","job_now"],["value","32","id","job_now_32","name","job_now"],["value","33","id","job_now_33","name","job_now"],["value","34","id","job_now_34","name","job_now"],["value","35","id","job_now_35","name","job_now"],["for","input4"],[2,"display","flex","justify-content","left","align-items","center"],[1,"d-flex","justify-content-start","align-items-center","box-label-inline"],["for","input5",2,"white-space","nowrap"],["name","hour","id","hour",1,"form-select",2,"width","85px"],["value","0"],["value","0.5"],["value","1"],["value","1.5"],[1,"section2"],[1,"s2title"],[1,"row"],["id","h-1-1"],[1,"col-md-4"],["for","checkbox1-1-1"],["type","checkbox","name","checkbox1-1-1","id","checkbox1-1-1",1,"input-checkbox"],["for","checkbox1-1-2"],["type","checkbox","name","checkbox1-1-2","id","checkbox1-1-2",1,"input-checkbox"],["for","checkbox1-1-3"],["type","checkbox","name","checkbox1-1-3","id","checkbox1-1-3",1,"input-checkbox"],["for","checkbox1-1-4"],["type","checkbox","name","checkbox1-1-4","id","checkbox1-1-4",1,"input-checkbox"],["for","checkbox1-1-5"],["type","checkbox","name","checkbox1-1-5","id","checkbox1-1-5",1,"input-checkbox"],["for","checkbox1-1-6"],["type","checkbox","name","checkbox1-1-6","id","checkbox1-1-6",1,"input-checkbox"],["for","checkbox1-1-7"],["type","checkbox","name","checkbox1-1-7","id","checkbox1-1-7",1,"input-checkbox"],["id","h-1-2"],["for","checkbox1-2-1"],["type","checkbox","name","checkbox1-2-1","id","checkbox1-2-1",1,"input-checkbox"],["for","checkbox1-2-2"],["type","checkbox","name","checkbox1-2-2","id","checkbox1-2-2",1,"input-checkbox"],["for","checkbox1-2-3"],["type","checkbox","name","checkbox1-2-3","id","checkbox1-2-3",1,"input-checkbox"],["for","checkbox1-2-4"],["type","checkbox","name","checkbox1-2-4","id","checkbox1-2-4",1,"input-checkbox"],["for","checkbox1-2-5"],["type","checkbox","name","checkbox1-2-5","id","checkbox1-2-5",1,"input-checkbox"],["for","checkbox1-2-6"],["type","checkbox","name","checkbox1-2-6","id","checkbox1-2-6",1,"input-checkbox"],["for","checkbox1-2-7"],["type","checkbox","name","checkbox1-2-7","id","checkbox1-2-7",1,"input-checkbox"],["id","h-1-3"],["for","checkbox1-3-1"],["type","checkbox","name","checkbox1-3-1","id","checkbox1-3-1",1,"input-checkbox"],["for","checkbox1-3-2"],["type","checkbox","name","checkbox1-3-2","id","checkbox1-3-2",1,"input-checkbox"],["for","checkbox1-3-3"],["type","checkbox","name","checkbox1-3-3","id","checkbox1-3-3",1,"input-checkbox"],["for","checkbox1-3-4"],["type","checkbox","name","checkbox1-3-4","id","checkbox1-3-4",1,"input-checkbox"],["id","h-1-4"],["for","checkbox1-4-1"],["type","checkbox","name","checkbox1-4-1","id","checkbox1-4-1",1,"input-checkbox"],["for","checkbox1-4-2"],["type","checkbox","name","checkbox1-4-2","id","checkbox1-4-2",1,"input-checkbox"],["for","checkbox1-4-3"],["type","checkbox","name","checkbox1-4-3","id","checkbox1-4-3",1,"input-checkbox"],["id","h-1-5"],["for","checkbox1-5-1"],["type","checkbox","name","checkbox1-5-1","id","checkbox1-5-1",1,"input-checkbox"],["for","checkbox1-5-2"],["type","checkbox","name","checkbox1-5-2","id","checkbox1-5-2",1,"input-checkbox"],["for","checkbox1-5-3"],["type","checkbox","name","checkbox1-5-3","id","checkbox1-5-3",1,"input-checkbox"],["for","checkbox1-5-4"],["type","checkbox","name","checkbox1-5-4","id","checkbox1-5-4",1,"input-checkbox"],["for","checkbox1-5-5"],["type","checkbox","name","checkbox1-5-5","id","checkbox1-5-5",1,"input-checkbox"],["id","h-1-6"],["for","checkbox1-6-1"],["type","checkbox","name","checkbox1-6-1","id","checkbox1-6-1",1,"input-checkbox"],["for","checkbox1-6-2"],["type","checkbox","name","checkbox1-6-2","id","checkbox1-6-2",1,"input-checkbox"],["for","checkbox1-6-3"],["type","checkbox","name","checkbox1-6-3","id","checkbox1-6-3",1,"input-checkbox"],["type","text","placeholder","\u5176\u4ED6",1,"form-control","form-input-checkbox"],["for","checkbox1-6-4"],["type","checkbox","name","checkbox1-6-4","id","checkbox1-6-4",1,"input-checkbox"],[1,"section3"],[2,"padding-left","0"],["id","h-2-1"],["type","radio","name","smokingStatus","id","radio1","value","never",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio1",1,"input-radio-label"],["type","radio","name","smokingStatus","id","radio2","value","occasional",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio2",1,"input-radio-label"],[1,"long-inline"],["type","radio","name","smokingStatus","id","radio3","value","daily",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio3",1,"input-radio-label"],["type","number","step","1","min","1","max","200",1,"form-control","form-control-sm","input-number",3,"disabled"],["type","radio","name","smokingStatus","id","radio4","value","quit",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio4",1,"input-radio-label"],["id","h-2-2"],["type","radio","name","smokingStatus2","id","radio5","value","never",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio5",1,"input-radio-label"],["type","radio","name","smokingStatus2","id","radio6","value","occasional",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio6",1,"input-radio-label"],["type","radio","name","smokingStatus2","id","radio7","value","daily",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio7",1,"input-radio-label"],["type","radio","name","smokingStatus2","id","radio8","value","quit",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio8",1,"input-radio-label"],["id","h-2-3"],["type","radio","name","smokingStatus3","id","radio9","value","never",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio9",1,"input-radio-label"],["type","radio","name","smokingStatus3","id","radio10","value","occasional",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio10",1,"input-radio-label"],["type","radio","name","smokingStatus3","id","radio11","value","drink",1,"input-radio",2,"display","inline-block",3,"ngModel","ngModelChange"],["for","radio11",1,"input-radio-label",2,"white-space","wrap"],["type","text","placeholder","",1,"form-control",2,"width","100px","display","inline-block",3,"disabled"],["type","radio","name","smokingStatus3","id","radio12","value","quit",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio12",1,"input-radio-label"],[1,"section4"],["id","h-3-1"],["for","checkbox2-1-1",1,"input-radio-label"],["type","checkbox","name","checkbox2-1-1","id","checkbox2-1-1",1,"input-checkbox"],["for","checkbox2-1-2",1,"input-radio-label"],["type","checkbox","name","checkbox2-1-2","id","checkbox2-1-2",1,"input-checkbox"],["for","checkbox2-1-3",1,"input-radio-label"],["type","checkbox","name","checkbox2-1-3","id","checkbox2-1-3",1,"input-checkbox"],["for","checkbox2-1-4",1,"input-radio-label"],["type","checkbox","name","checkbox2-1-4","id","checkbox2-1-4",1,"input-checkbox"],["id","h-3-2"],[1,"col-md-12","mb-1"],["for","checkbox2-2-1",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-1","id","checkbox2-2-1",1,"input-checkbox"],["for","checkbox2-2-2",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-2","id","checkbox2-2-2",1,"input-checkbox"],["for","checkbox2-2-3",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-3","id","checkbox2-2-3",1,"input-checkbox"],["for","checkbox2-2-4",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-4","id","checkbox2-2-4",1,"input-checkbox"],["for","checkbox2-2-5",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-5","id","checkbox2-2-5",1,"input-checkbox"],[1,"col-md-12"],["for","checkbox2-2-6",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-6","id","checkbox2-2-6",1,"input-checkbox"],["id","h-3-3"],["for","checkbox2-3-1",1,"input-radio-label"],["type","checkbox","name","checkbox2-3-1","id","checkbox2-3-1",1,"input-checkbox"],["for","checkbox2-3-2",1,"input-radio-label"],["type","checkbox","name","checkbox2-3-2","id","checkbox2-3-2",1,"input-checkbox"],["id","h-3-4"],["for","checkbox2-4-1",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-1","id","checkbox2-4-1",1,"input-checkbox"],["for","checkbox2-4-2",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-2","id","checkbox2-4-2",1,"input-checkbox"],["for","checkbox2-4-3",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-3","id","checkbox2-4-3",1,"input-checkbox"],["for","checkbox2-4-4",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-4","id","checkbox2-4-4",1,"input-checkbox"],["for","checkbox2-4-5",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-5","id","checkbox2-4-5",1,"input-checkbox"],["for","checkbox2-4-6",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-6","id","checkbox2-4-6",1,"input-checkbox"],["id","h-3-5"],["name","","id","",1,"form-select",2,"width","200px"],["value","2"],["value","3"],["id","h-3-6"],["type","text","placeholder","\u82E5\u7121\u75C7\u72C0\u8ACB\u7559\u7A7A",1,"form-control","input-text"],[1,"submit",2,"text-align","center","margin","30px 0"],["type","checkbox","name","","id","submit",1,"input-checkbox",3,"ngModel","ngModelChange"],["for","submit"],["type","button",1,"btn","btn-primary","main-button",3,"click"],["class","dialog",4,"ngIf"],[3,"value"],[1,"dialog"],[1,"dialog-content"]],template:function(c,o){c&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),n(5,"\u54E1\u5DE5\u554F\u5377"),e()()(),t(6,"div",4),n(7,"Employee Questionnaire"),e()()(),t(8,"div",5)(9,"div",6)(10,"h3"),n(11,"\u925B\u4F5C\u696D\u554F\u5377"),e(),i(12,"img",7),e(),t(13,"form",8)(14,"div",9)(15,"h3",10),n(16,"\u500B\u4EBA\u4F5C\u696D\u7D93\u6B77"),e(),t(17,"div",11)(18,"label",12),n(19,"1.\u8EAB\u5206\u8B49\u5B57\u865F(\u8B77\u7167\u865F\u78BC)"),e(),i(20,"input",13),e(),t(21,"div",11)(22,"label",14),n(23,"2.\u53D7\u50F1\u65E5\u671F(\u6C11\u570B)"),e(),t(24,"div",15)(25,"select",16),d("ngModelChange",function(a){return o.selectedYear=a}),h(26,$,2,2,"option",17),e(),t(27,"select",18),d("ngModelChange",function(a){return o.selectedMonth=a}),h(28,R,2,2,"option",17),e(),t(29,"select",19),d("ngModelChange",function(a){return o.selectedDay=a}),h(30,H,2,2,"option",17),e()()(),t(31,"div",11)(32,"label",20),n(33,"3.\u76EE\u524D\u5F9E\u4E8B"),e(),t(34,"select",21)(35,"option",22),n(36,"061001|\u91AB\u5E2B"),e(),t(37,"option",23),n(38,"061002|\u7259\u91AB\u5E2B"),e(),t(39,"option",24),n(40,"061003|\u4E2D\u91AB\u5E2B"),e(),t(41,"option",25),n(42," 061004|\u91AB\u5B78\u7F8E\u5BB9\uFF0F\u6574\u578B "),e(),t(43,"option",26),n(44," 061005|\u9EBB\u9189\u91AB\u5E2B "),e(),t(45,"option",27),n(46," 061006|\u81E8\u5E8A\uFF0F\u8AEE\u5546\u5FC3\u7406\u5E2B "),e(),t(47,"option",28),n(48," 061007|\u8077\u80FD\u6CBB\u7642\u5E2B "),e(),t(49,"option",29),n(50," 061008|\u7269\u7406\u6CBB\u7642\u5E2B "),e(),t(51,"option",30),n(52," 061009|\u8A9E\u8A00\u6CBB\u7642\u5E2B "),e(),t(53,"option",31),n(54," 061010|\u547C\u5438\u6CBB\u7642\u5E2B "),e(),t(55,"option",32),n(56," 061011|\u7378\u91AB\uFF0F\u7378\u91AB\u4F50 "),e(),t(57,"option",33),n(58," 061012|\u5176\u5B83\u91AB\u7642\u5F9E\u696D\u4EBA\u54E1 "),e(),t(59,"option",34),n(60," 061101|\u8B77\u7406\u9577 "),e(),t(61,"option",35),n(62," 061102|\u8B77\u58EB\uFF0F\u8B77\u7406\u5E2B "),e(),t(63,"option",36),n(64," 061103|\u5C08\u79D1\u8B77\u7406\u5E2B "),e(),t(65,"option",37),n(66," 061104|\u7167\u9867\u670D\u52D9\u54E1 "),e(),t(67,"option",38),n(68," 061105|\u52DE\u5DE5\u5065\u5EB7\u670D\u52D9\u8B77\u7406\u4EBA\u54E1\uFF0F\u5EE0\u8B77 "),e(),t(69,"option",39),n(70," 061201|\u85E5\u5E2B\u52A9\u7406 "),e(),t(71,"option",40),n(72," 061202|\u8A3A\u6240\u52A9\u7406 "),e(),t(73,"option",41),n(74," 061203|\u7259\u91AB\u52A9\u7406 "),e(),t(75,"option",42),n(76," 061204|\u91AB\u9662\u884C\u653F\u7BA1\u7406\u4EBA\u54E1 "),e(),t(77,"option",43),n(78,"061301|\u85E5\u5E2B"),e(),t(79,"option",44),n(80," 061302|\u71DF\u990A\u5E2B "),e(),t(81,"option",45),n(82," 061303|\u91AB\u4E8B\u6AA2\u9A57\u5E2B "),e(),t(83,"option",46),n(84," 061304|\u5FA9\u5065\u6280\u8853\u5E2B "),e(),t(85,"option",47),n(86," 061305|\u91AB\u4E8B\u653E\u5C04\u5E2B "),e(),t(87,"option",48),n(88," 061306|\u9A57\u5149\u5E2B "),e(),t(89,"option",49),n(90," 061307|\u7259\u9AD4\u6280\u8853\u4EBA\u54E1 "),e(),t(91,"option",50),n(92," 061308|\u63A8\u62FF\uFF0F\u6309\u6469\u5E2B "),e(),t(93,"option",51),n(94," 061309|\u653E\u5C04\u6027\u8A2D\u5099\u4F7F\u7528\u6280\u8853\u54E1 "),e(),t(95,"option",52),n(96," 061401|\u751F\u6280\u4E3B\u7BA1 "),e(),t(97,"option",53),n(98," 061402|\u91AB\u85E5\u7814\u767C\u4EBA\u54E1 "),e(),t(99,"option",54),n(100," 061403|\u75C5\u7406\u85E5\u7406\u7814\u7A76\u4EBA\u54E1 "),e(),t(101,"option",55),n(102," 061404|\u751F\u7269\u79D1\u6280\u7814\u767C\u4EBA\u54E1 "),e(),t(103,"option",56),n(104," 061405|\u91AB\u7642\u5668\u6750\u7814\u767C\u5DE5\u7A0B\u5E2B "),e()()(),t(105,"div",11)(106,"label",57),n(107,"4.\u8D77\u59CB\u65E5\u671F(\u6C11\u570B)"),e(),t(108,"div",58)(109,"select",16),d("ngModelChange",function(a){return o.selectedYear1=a}),h(110,L,2,2,"option",17),e(),t(111,"select",18),d("ngModelChange",function(a){return o.selectedMonth1=a}),h(112,Q,2,2,"option",17),e()()(),t(113,"div",59)(114,"label",60),n(115,"5.\u5F9E\u4E8B\u925B\u4F5C\u696D\u5E73\u5747\u6BCF\u65E5\u5DE5\u6642\u70BA"),e(),t(116,"select",61)(117,"option",62),n(118,"0"),e(),t(119,"option",63),n(120,"0.5"),e(),t(121,"option",64),n(122,"1"),e(),t(123,"option",65),n(124,"1.5"),e(),t(125,"option",64),n(126,"2"),e(),t(127,"option",65),n(128,"2.5"),e(),t(129,"option",64),n(130,"3"),e(),t(131,"option",65),n(132,"3.5"),e(),t(133,"option",64),n(134,"4"),e(),t(135,"option",65),n(136,"4.5"),e(),t(137,"option",64),n(138,"5"),e(),t(139,"option",65),n(140,"5.5"),e(),t(141,"option",64),n(142,"6"),e(),t(143,"option",65),n(144,"6.5"),e(),t(145,"option",64),n(146,"7"),e(),t(147,"option",65),n(148,"7.5"),e(),t(149,"option",64),n(150,"8"),e(),t(151,"option",65),n(152,"8.5"),e(),t(153,"option",64),n(154,"9"),e(),t(155,"option",65),n(156,"9.5"),e(),t(157,"option",64),n(158,"10"),e(),t(159,"option",65),n(160,"10.5"),e(),t(161,"option",64),n(162,"11"),e(),t(163,"option",65),n(164,"11.5"),e(),t(165,"option",64),n(166,"12"),e()(),t(167,"span"),n(168,"\u5C0F\u6642"),e()()(),t(169,"div",66)(170,"div",67)(171,"h3",10),n(172,"\u65E2\u5F80\u75C5\u53F2 \u60A8\u662F\u5426\u66FE\u60A3\u6709\u6709\u4E0B\u5217\u6162\u6027\u75C5"),e()(),t(173,"div",68)(174,"h4",69),n(175,"1.\u5FC3\u81DF\u8840\u7BA1"),e(),t(176,"div",70)(177,"label",71),i(178,"input",72),n(179,"\u7F3A\u8840\u6027\u5FC3\u81DF\u75C5 "),e()(),t(180,"div",70)(181,"label",73),i(182,"input",74),n(183,"\u5FC3\u7D5E\u75DB "),e()()(),t(184,"div",68)(185,"div",70)(186,"label",75),i(187,"input",76),n(188,"\u5FC3\u808C\u6897\u585E "),e()(),t(189,"div",70)(190,"label",77),i(191,"input",78),n(192,"\u5FC3\u5F8B\u4E0D\u6574 "),e()()(),t(193,"div",68)(194,"div",70)(195,"label",79),i(196,"input",80),n(197,"\u8CA7\u8840 "),e()(),t(198,"div",70)(199,"label",81),i(200,"input",82),n(201,"\u9AD8\u8840\u58D3 "),e()()(),t(202,"div",68)(203,"div",70)(204,"label",83),i(205,"input",84),n(206,"\u7121 "),e()()(),t(207,"div",68)(208,"h4",85),n(209,"2.\u795E\u7D93\u7CFB\u7D71"),e(),t(210,"div",70)(211,"label",86),i(212,"input",87),n(213,"\u624B\u90E8\u904B\u52D5\u795E\u7D93\u75C5\u8B8A "),e()(),t(214,"div",70)(215,"label",88),i(216,"input",89),n(217,"\u8173\u8E1D\u4EE5\u4E0B\u904B\u52D5\u795E\u7D93\u75C5\u8B8A "),e()()(),t(218,"div",68)(219,"div",70)(220,"label",90),i(221,"input",91),n(222,"\u81EA\u4E3B\u795E\u7D93\u5931\u8ABF "),e()(),t(223,"div",70)(224,"label",92),i(225,"input",93),n(226,"\u8A8D\u77E5\u529F\u80FD\u7570\u5E38 "),e()()(),t(227,"div",68)(228,"div",70)(229,"label",94),i(230,"input",95),n(231,"\u807D\u529B\u969C\u7919 "),e()(),t(232,"div",70)(233,"label",96),i(234,"input",97),n(235,"\u8996\u529B\u969C\u7919 "),e()()(),t(236,"div",68)(237,"div",70)(238,"label",98),i(239,"input",99),n(240,"\u7121 "),e()()(),t(241,"div",68)(242,"h4",100),n(243,"3.\u6D88\u5316\u7CFB\u7D71"),e(),t(244,"div",70)(245,"label",101),i(246,"input",102),n(247,"\u9006\u6D41\u6027\u98DF\u9053\u708E "),e()(),t(248,"div",70)(249,"label",103),i(250,"input",104),n(251,"\u6D88\u5316\u6027\u6F70\u760D\u3001\u80C3\u708E "),e()()(),t(252,"div",68)(253,"div",70)(254,"label",105),i(255,"input",106),n(256,"\u9593\u6B47\u6027\u8179\u75DB "),e()(),t(257,"div",70)(258,"label",107),i(259,"input",108),n(260,"\u7121 "),e()()(),t(261,"div",68)(262,"h4",109),n(263,"4.\u751F\u6B96\u7CFB\u7D71_\u7537"),e(),t(264,"div",70)(265,"label",110),i(266,"input",111),n(267,"\u4E0D\u5B55 "),e()(),t(268,"div",70)(269,"label",112),i(270,"input",113),n(271,"\u6027\u529F\u80FD\u969C\u7919 "),e()()(),t(272,"div",68)(273,"div",70)(274,"label",114),i(275,"input",115),n(276,"\u7121 "),e()()(),t(277,"div",68)(278,"h4",116),n(279,"5.\u751F\u6B96\u7CFB\u7D71_\u5973"),e(),t(280,"div",70)(281,"label",117),i(282,"input",118),n(283,"\u4E0D\u5B55 "),e()(),t(284,"div",70)(285,"label",119),i(286,"input",120),n(287,"\u6D41\u7522 "),e()()(),t(288,"div",68)(289,"div",70)(290,"label",121),i(291,"input",122),n(292,"\u65E9\u7522 "),e()(),t(293,"div",70)(294,"label",123),i(295,"input",124),n(296,"\u80CE\u5152\u795E\u7D93\u7CFB\u7D71\u6216\u767C\u80B2\u554F\u984C "),e()()(),t(297,"div",68)(298,"div",70)(299,"label",125),i(300,"input",126),n(301,"\u7121 "),e()()(),t(302,"div",68)(303,"h4",127),n(304,"6.\u5176\u4ED6"),e(),t(305,"div",70)(306,"label",128),i(307,"input",129),n(308,"\u7CD6\u5C3F\u75C5 "),e()(),t(309,"div",70)(310,"label",130),i(311,"input",131),n(312,"\u814E\u81DF\u75BE\u75C5 "),e()()(),t(313,"div",68)(314,"div",70)(315,"label",132),i(316,"input",133),n(317,"\u5176\u4ED6 "),e(),i(318,"input",134),e(),t(319,"div",70)(320,"label",135),i(321,"input",136),n(322,"\u7121 "),e()()()(),t(323,"div",137)(324,"h3",10),n(325,"\u751F\u6D3B\u7FD2\u6163"),e(),t(326,"ul",138)(327,"li")(328,"h5",139),n(329,"1.\u8ACB\u554F\u60A8\u904E\u53BB\u4E00\u500B\u6708\u5167\u662F\u5426\u6709\u5438\u83F8?"),e(),t(330,"input",140),d("ngModelChange",function(a){return o.smokingStatusGroup1=a}),e(),t(331,"label",141),n(332,"\u5F9E\u672A\u5438\u83F8"),e()(),t(333,"li")(334,"input",142),d("ngModelChange",function(a){return o.smokingStatusGroup1=a}),e(),t(335,"label",143),n(336,"\u5076\u723E\u5438(\u4E0D\u662F\u5929\u5929)"),e()(),t(337,"li",144)(338,"input",145),d("ngModelChange",function(a){return o.smokingStatusGroup1=a}),e(),t(339,"label",146),n(340,"(\u5E7E\u4E4E)\u6BCF\u5929\u5438\uFF0C\u5E73\u5747\u6BCF\u5929\u5438 "),i(341,"input",147),n(342," \uFF0C\u5DF2\u5438 "),i(343,"input",147),n(344," \u5E74 "),e()(),t(345,"li",144)(346,"input",148),d("ngModelChange",function(a){return o.smokingStatusGroup1=a}),e(),t(347,"label",149),n(348,"\u5DF2\u7D93\u6212\u83F8\uFF0C\u6212\u4E86 "),i(349,"input",147),n(350," \u5E74 "),i(351,"input",147),n(352," \u500B\u6708 "),e()()(),t(353,"ul",138)(354,"li")(355,"h5",150),n(356,"2.\u8ACB\u554F\u60A8\u6700\u8FD1\u516D\u500B\u6708\u5167\u662F\u5426\u6709\u56BC\u98DF\u6AB3\u6994?"),e(),t(357,"input",151),d("ngModelChange",function(a){return o.smokingStatusGroup2=a}),e(),t(358,"label",152),n(359,"\u5F9E\u672A\u56BC\u98DF\u6AB3\u6994"),e()(),t(360,"li")(361,"input",153),d("ngModelChange",function(a){return o.smokingStatusGroup2=a}),e(),t(362,"label",154),n(363,"\u5076\u723E\u56BC(\u4E0D\u662F\u5929\u5929)"),e()(),t(364,"li",144)(365,"input",155),d("ngModelChange",function(a){return o.smokingStatusGroup2=a}),e(),t(366,"label",156),n(367,"(\u5E7E\u4E4E)\u6BCF\u5929\u56BC\uFF0C\u5E73\u5747\u6BCF\u5929\u56BC "),i(368,"input",147),n(369," \u9846,\u5DF2\u56BC "),i(370,"input",147),n(371," \u5E74 "),e()(),t(372,"li",144)(373,"input",157),d("ngModelChange",function(a){return o.smokingStatusGroup2=a}),e(),t(374,"label",158),n(375,"\u5DF2\u7D93\u6212\u83F8\uFF0C\u6212\u4E86 "),i(376,"input",147),n(377," \u5E74 "),i(378,"input",147),n(379," \u500B\u6708 "),e()()(),t(380,"ul",138)(381,"li")(382,"h5",159),n(383,"3.\u8ACB\u554F\u60A8\u904E\u53BB\u4E00\u500B\u6708\u5167\u662F\u5426\u6709\u559D\u9152?"),e(),t(384,"input",160),d("ngModelChange",function(a){return o.smokingStatusGroup3=a}),e(),t(385,"label",161),n(386,"\u5F9E\u672A\u559D\u9152"),e()(),t(387,"li")(388,"input",162),d("ngModelChange",function(a){return o.smokingStatusGroup3=a}),e(),t(389,"label",163),n(390,"\u5076\u723E\u559D(\u4E0D\u662F\u5929\u5929)"),e()(),t(391,"li",144)(392,"input",164),d("ngModelChange",function(a){return o.smokingStatusGroup3=a}),e(),t(393,"label",165),n(394,"\uFF08\u5E7E\u4E4E\uFF09\u6BCF\u5929\u559D\uFF0C\u5E73\u5747\u6BCF\u9031\u559D"),e(),i(395,"input",147),t(396,"label",165),n(397,"\u6B21,\u6700\u5E38\u559D"),e(),i(398,"input",166),t(399,"label",165),n(400,"\u9152\uFF0C\u6BCF\u6B21"),e(),i(401,"input",147),t(402,"label",165),n(403,"\u74F6"),e()(),t(404,"li",144)(405,"input",167),d("ngModelChange",function(a){return o.smokingStatusGroup3=a}),e(),t(406,"label",168),n(407,"\u5DF2\u7D93\u6212\u9152\uFF0C\u6212\u4E86 "),i(408,"input",147),n(409," \u5E74 "),i(410,"input",147),n(411," \u500B\u6708 "),e()()()(),t(412,"div",169)(413,"div",67)(414,"h3",10),n(415,"\u81EA\u89BA\u75C7\u72C0"),e()(),t(416,"div",68)(417,"h4",170),n(418,"1.\u5FC3\u81DF\u8840\u7BA1"),e(),t(419,"div",70)(420,"label",171),i(421,"input",172),n(422,"\u904B\u52D5\u6642\u80F8\u60B6\u3001\u80F8\u75DB "),e()(),t(423,"div",70)(424,"label",173),i(425,"input",174),n(426,"\u982D\u6688(\u5C24\u5176\u662F\u4E45\u7AD9\u6216\u5750\u3001\u8E72\u59FF\u52E2\u6539\u70BA\u7AD9\u7ACB\u6642) "),e()()(),t(427,"div",68)(428,"div",70)(429,"label",175),i(430,"input",176),n(431,"\u8F15\u5EA6\u6D3B\u52D5\u4ECD\u5BB9\u6613\u5598 "),e()(),t(432,"div",70)(433,"label",177),i(434,"input",178),n(435,"\u5FC3\u60B8 "),e()()(),t(436,"div",68)(437,"h4",179),n(438,"2.\u795E\u7D93\u7CFB\u7D71"),e(),t(439,"div",180)(440,"label",181),i(441,"input",182),n(442,"\u624B\u8155\u4EE5\u4E0B\u808C\u8089\u7121\u529B\uFF0C\u6263\u9215\u91E6\u611F\u89BA\u5403\u529B "),e()(),t(443,"div",180)(444,"label",183),i(445,"input",184),n(446,"\u8173\u8E1D\u4EE5\u4E0B\u808C\u8089\u7121\u529B\uFF0C\u7A7F\u62D6\u978B\u5BB9\u6613\u6389\u843D "),e()(),t(447,"div",180)(448,"label",185),i(449,"input",186),n(450,"\u56DB\u80A2\u672B\u68A2\u75BC\u75DB\u6216\u9EBB\u75C7\u72C0 "),e()(),t(451,"div",180)(452,"label",187),i(453,"input",188),n(454,"\u8A00\u8A9E\u3001\u8A18\u61B6\u3001\u6CE8\u610F\u529B\u548C\u57F7\u884C\u529B\u529F\u80FD\u4E0B\u964D "),e()(),t(455,"div",180)(456,"label",189),i(457,"input",190),n(458,"\u8996\u529B\u554F\u984C\uFF0C\u5728\u660F\u6697\u8655\u770B\u4E0D\u6E05\u695A\u3001\u8996\u529B\u6A21\u7CCA "),e()(),t(459,"div",191)(460,"label",192),i(461,"input",193),n(462,"\u807D\u529B\u7570\u5E38 "),e()()(),t(463,"div",68)(464,"h4",194),n(465,"3.\u6CCC\u5C3F\u7CFB\u7D71"),e(),t(466,"div",70)(467,"label",195),i(468,"input",196),n(469,"\u5C3F\u91CF\u6E1B\u5C11 "),e()(),t(470,"div",70)(471,"label",197),i(472,"input",198),n(473,"\u6C34\u816B "),e()()(),t(474,"div",68)(475,"h4",199),n(476,"4.\u6D88\u5316\u7CFB\u7D71"),e(),t(477,"div",70)(478,"label",200),i(479,"input",201),n(480,"\u8179\u75DB "),e()(),t(481,"div",70)(482,"label",202),i(483,"input",203),n(484,"\u4FBF\u7955 "),e()()(),t(485,"div",68)(486,"div",70)(487,"label",204),i(488,"input",205),n(489,"\u8179\u7009 "),e()(),t(490,"div",70)(491,"label",206),i(492,"input",207),n(493,"\u5641\u5FC3 "),e()()(),t(494,"div",68)(495,"div",70)(496,"label",208),i(497,"input",209),n(498,"\u5614\u5410 "),e()(),t(499,"div",70)(500,"label",210),i(501,"input",211),n(502,"\u98DF\u617E\u4E0D\u632F "),e()()(),t(503,"div",68)(504,"h4",212),n(505,"5.\u751F\u6B96\u7CFB\u7D71"),e(),t(506,"div",191)(507,"select",213)(508,"option",64),n(509,"\u7121"),e(),t(510,"option",214),n(511,"\u7537:\u6027\u529F\u80FD\u969C\u7919"),e(),t(512,"option",215),n(513,"\u5973:\u7D93\u671F\u4E0D\u898F\u5247"),e()()()(),t(514,"div",68)(515,"h5",216),n(516,"6.\u5176\u4ED6"),e(),t(517,"div",191),i(518,"input",217),e()()(),t(519,"div",218)(520,"input",219),d("ngModelChange",function(a){return o.isCheckAll=a}),e(),t(521,"label",220),n(522,"\u5DF2\u78BA\u8A8D\u4EE5\u4E0A\u6AA2\u67E5\u78BA\u8A8D\u4E8B\u9805\u8CC7\u6599\u7121\u8AA4"),e(),i(523,"br"),t(524,"button",221),d("click",function(){return o.openDialog()}),n(525," \u9001\u51FA\u554F\u5377 "),e()(),h(526,J,6,0,"div",222),e()()),c&2&&(u(25),l("ngModel",o.selectedYear),u(),l("ngForOf",o.years),u(),l("ngModel",o.selectedMonth),u(),l("ngForOf",o.months),u(),l("ngModel",o.selectedDay),u(),l("ngForOf",o.days),u(79),l("ngModel",o.selectedYear1),u(),l("ngForOf",o.years),u(),l("ngModel",o.selectedMonth1),u(),l("ngForOf",o.months),u(218),l("ngModel",o.smokingStatusGroup1),u(4),l("ngModel",o.smokingStatusGroup1),u(4),l("ngModel",o.smokingStatusGroup1),u(3),l("disabled",o.smokingStatusGroup1!=="daily"),u(2),l("disabled",o.smokingStatusGroup1!=="daily"),u(3),l("ngModel",o.smokingStatusGroup1),u(3),l("disabled",o.smokingStatusGroup1!=="quit"),u(2),l("disabled",o.smokingStatusGroup1!=="quit"),u(6),l("ngModel",o.smokingStatusGroup2),u(4),l("ngModel",o.smokingStatusGroup2),u(4),l("ngModel",o.smokingStatusGroup2),u(3),l("disabled",o.smokingStatusGroup2!=="daily"),u(2),l("disabled",o.smokingStatusGroup2!=="daily"),u(3),l("ngModel",o.smokingStatusGroup2),u(3),l("disabled",o.smokingStatusGroup2!=="quit"),u(2),l("disabled",o.smokingStatusGroup2!=="quit"),u(6),l("ngModel",o.smokingStatusGroup3),u(4),l("ngModel",o.smokingStatusGroup3),u(4),l("ngModel",o.smokingStatusGroup3),u(3),l("disabled",o.smokingStatusGroup3!=="drink"),u(3),l("disabled",o.smokingStatusGroup3!=="drink"),u(3),l("disabled",o.smokingStatusGroup3!=="drink"),u(4),l("ngModel",o.smokingStatusGroup3),u(3),l("disabled",o.smokingStatusGroup3!=="quit"),u(2),l("disabled",o.smokingStatusGroup3!=="quit"),u(110),l("ngModel",o.isCheckAll),u(6),l("ngIf",o.isDialogOpen))},dependencies:[f,F,G,N,I,A,D,Y,T,w,j,P,O],styles:["form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{white-space:nowrap;font-size:1.1rem}.box-label-input[_ngcontent-%COMP%]   .box-label-inline[_ngcontent-%COMP%]{margin-bottom:10px}.input-text[_ngcontent-%COMP%]{width:280px}.title[_ngcontent-%COMP%]{text-align:center}.main-title[_ngcontent-%COMP%]{font-weight:900;color:var(--main-color);margin-top:.5rem}#year[_ngcontent-%COMP%], #month[_ngcontent-%COMP%], #day[_ngcontent-%COMP%], #job-now[_ngcontent-%COMP%], #hour[_ngcontent-%COMP%]{color:var(--main-color)}h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{font-size:1.3rem;margin:.5rem 0 .25rem;font-weight:700}.main-button[_ngcontent-%COMP%]{margin:30px 0;background-color:var(--secondary-color);border-color:transparent;width:150px;font-size:1.2rem}.type[_ngcontent-%COMP%]{width:50%}.col-md-4[_ngcontent-%COMP%]{font-weight:900;margin-bottom:.25rem}.input-checkbox[_ngcontent-%COMP%], .input-radio[_ngcontent-%COMP%]{transform:scale(1.5) translateY(1px);margin-right:5px}.input-radio-label[_ngcontent-%COMP%]{font-weight:700}.input-number[_ngcontent-%COMP%]{display:inline-block;width:50px}.form-input-checkbox[_ngcontent-%COMP%]{width:200px;display:inline-block;margin-left:5px}.dialog[_ngcontent-%COMP%]{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#0006}.dialog-content[_ngcontent-%COMP%]{background-color:#fefefe;margin:15% auto;padding:30px 0 10px;border:1px solid #888;width:80%;text-align:center}.dialog-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 0;border:none;border-radius:4px;cursor:pointer}@media only screen and (max-width:575.9px){.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:.82rem}.long-inline[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:.6rem}#h-1-1[_ngcontent-%COMP%], #h-1-2[_ngcontent-%COMP%], #h-1-3[_ngcontent-%COMP%], #h-1-4[_ngcontent-%COMP%], #h-1-5[_ngcontent-%COMP%], #h-1-6[_ngcontent-%COMP%], #h-2-1[_ngcontent-%COMP%], #h-2-2[_ngcontent-%COMP%], #h-2-3[_ngcontent-%COMP%], #h-3-1[_ngcontent-%COMP%], #h-3-2[_ngcontent-%COMP%], #h-3-3[_ngcontent-%COMP%], #h-3-4[_ngcontent-%COMP%], #h-3-5[_ngcontent-%COMP%], #h-3-6[_ngcontent-%COMP%]{font-size:1rem;margin:.5rem 0 .25rem}.box-label-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}}"]});let m=r;return m})();var ne=(()=>{let r=class r{};r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=k({type:r}),r.\u0275inj=s({imports:[y,q,M.forChild([{path:"",component:V}])]});let m=r;return m})();export{ne as Survey_pbModule};
