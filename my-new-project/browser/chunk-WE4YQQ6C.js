import{b as A,c as D,g as w,h as j,i as O,l as P,m as G,o as H,r as T,s as N,t as Y,v as I}from"./chunk-BA3GETR7.js";import{$ as k,Ga as l,Na as x,Pb as y,Qb as B,S as E,Sa as t,Ta as e,Ua as o,Ub as F,W as g,X as _,Ya as C,aa as S,db as m,ec as M,fb as v,kb as n,lb as f,mb as s,va as u}from"./chunk-FMEZNCYJ.js";function V(d,r){if(d&1&&(t(0,"option",200),n(1),e()),d&2){let b=r.$implicit;l("value",b),u(),s(" ",b," ")}}function $(d,r){if(d&1&&(t(0,"option",200),n(1),e()),d&2){let b=r.$implicit;l("value",b),u(),s(" ",b," ")}}function R(d,r){if(d&1&&(t(0,"option",200),n(1),e()),d&2){let b=r.$implicit;l("value",b),u(),f(b)}}function L(d,r){if(d&1&&(t(0,"option",200),n(1),e()),d&2){let b=r.$implicit;l("value",b),u(),s(" ",b," ")}}function Q(d,r){if(d&1&&(t(0,"option",200),n(1),e()),d&2){let b=r.$implicit;l("value",b),u(),s(" ",b," ")}}function J(d,r){if(d&1){let b=C();t(0,"div",201)(1,"div",202)(2,"h2"),n(3,'\u8ACB\u52FE\u9078"\u5DF2\u78BA\u8A8D\u4EE5\u4E0A\u6AA2\u67E5\u78BA\u8A8D\u4E8B\u9805\u8CC7\u6599\u7121\u8AA4"'),e(),t(4,"button",198),m("click",function(){k(b);let c=v();return S(c.closeDialog())}),n(5,"\u95DC\u9589"),e()()()}}var q=(()=>{let r=class r{constructor(){this.years=[],this.months=[],this.days=[],this.smokingStatusGroup1="never",this.smokingStatusGroup2="never",this.smokingStatusGroup3="never",this.isDialogOpen=!1,this.isCheckAll=!1,this.selectedYear=new Date().getFullYear(),this.selectedMonth=1,this.selectedDay=1,this.selectedYear1=new Date().getFullYear(),this.selectedMonth1=1,this.selectedDay1=1}ngOnInit(){let h=new Date().getFullYear();for(let c=h;c>=h-60;c--){let i=c-1911;this.years.push(i)}for(let c=1;c<=12;c++)this.months.push(c);for(let c=1;c<=31;c++)this.days.push(c);this.selectedYear=h-1911}openDialog(){this.isCheckAll||(this.isDialogOpen=!0,console.log(this.isDialogOpen))}closeDialog(){this.isDialogOpen=!1,console.log(this.isDialogOpen)}};r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=g({type:r,selectors:[["survey_Hoco"]],decls:472,vars:37,consts:[[1,"headerbf"],[1,"title-pic"],[1,"title-pic-text-box"],[1,"title-pic-text-box-CH"],[1,"d-flex","flex-column","justify-content-center","flex-sm-row"],[1,"title-pic-text-box-EN"],[1,"container"],[1,"title",2,"margin","30px 0"],["src","../../assets/images/Line 11.png","alt","",1,"w-100"],["action",""],[1,"section1"],[1,"main-title"],[1,"d-flex","justify-content-start","align-items-sm-center","box-label-input"],["for","input1"],["type","text","id","input1",1,"form-control","input-text"],["for","input2"],[1,"d-flex","justify-content-start","align-items-center"],["id","year",1,"form-select",2,"width","100px",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["id","month",1,"form-select",3,"ngModel","ngModelChange"],["id","day",1,"form-select",3,"ngModel","ngModelChange"],["for","input3"],["id","job-now",1,"form-select",2,"width","300px"],["value","1","id","job_now_1","name","job_now"],["value","2","id","job_now_2","name","job_now"],["value","3","id","job_now_3","name","job_now"],["value","4","id","job_now_4","name","job_now"],["value","5","id","job_now_5","name","job_now"],["value","6","id","job_now_6","name","job_now"],["value","7","id","job_now_7","name","job_now"],["value","8","id","job_now_8","name","job_now"],["value","9","id","job_now_9","name","job_now"],["value","10","id","job_now_10","name","job_now"],["value","11","id","job_now_11","name","job_now"],["value","12","id","job_now_12","name","job_now"],["value","13","id","job_now_13","name","job_now"],["value","14","id","job_now_14","name","job_now"],["value","15","id","job_now_15","name","job_now"],["value","16","id","job_now_16","name","job_now"],["value","17","id","job_now_17","name","job_now"],["value","18","id","job_now_18","name","job_now"],["value","19","id","job_now_19","name","job_now"],["value","20","id","job_now_20","name","job_now"],["value","21","id","job_now_21","name","job_now"],["value","22","id","job_now_22","name","job_now"],["value","23","id","job_now_23","name","job_now"],["value","24","id","job_now_24","name","job_now"],["value","25","id","job_now_25","name","job_now"],["value","26","id","job_now_26","name","job_now"],["value","27","id","job_now_27","name","job_now"],["value","28","id","job_now_28","name","job_now"],["value","29","id","job_now_29","name","job_now"],["value","30","id","job_now_30","name","job_now"],["value","31","id","job_now_31","name","job_now"],["value","32","id","job_now_32","name","job_now"],["value","33","id","job_now_33","name","job_now"],["value","34","id","job_now_34","name","job_now"],["value","35","id","job_now_35","name","job_now"],["for","input4"],[2,"display","flex","justify-content","left","align-items","center"],[1,"d-flex","justify-content-start","align-items-center","box-label-inline"],["for","input5",2,"white-space","nowrap"],["name","hour","id","hour",1,"form-select",2,"width","85px"],["value","0"],["value","0.5"],["value","1"],["value","1.5"],[1,"section2"],[1,"s2title"],[1,"row"],["id","h-1-1"],[1,"col-md-4"],["for","checkbox1-1-1"],["type","checkbox","name","checkbox1-1-1","id","checkbox1-1-1",1,"input-checkbox"],["for","checkbox1-1-2"],["type","checkbox","name","checkbox1-1-2","id","checkbox1-1-2",1,"input-checkbox"],["for","checkbox1-1-3"],["type","checkbox","name","checkbox1-1-3","id","checkbox1-1-3",1,"input-checkbox"],["for","checkbox1-1-4"],["type","checkbox","name","checkbox1-1-4","id","checkbox1-1-4",1,"input-checkbox"],["for","checkbox1-1-5"],["type","checkbox","name","checkbox1-1-5","id","checkbox1-1-5",1,"input-checkbox"],["id","h-1-2"],["for","checkbox1-2-1"],["type","checkbox","name","checkbox1-2-1","id","checkbox1-2-1",1,"input-checkbox"],["for","checkbox1-2-2"],["type","checkbox","name","checkbox1-2-2","id","checkbox1-2-2",1,"input-checkbox"],["for","checkbox1-2-3"],["type","checkbox","name","checkbox1-2-3","id","checkbox1-2-3",1,"input-checkbox"],["for","checkbox1-2-4"],["type","checkbox","name","checkbox1-2-4","id","checkbox1-2-4",1,"input-checkbox"],["id","h-1-3"],["for","checkbox1-3-1"],["type","checkbox","name","checkbox1-3-1","id","checkbox1-3-1",1,"input-checkbox"],["for","checkbox1-3-2"],["type","checkbox","name","checkbox1-3-2","id","checkbox1-3-2",1,"input-checkbox"],["for","checkbox1-3-4"],["type","checkbox","name","checkbox1-3-4","id","checkbox1-3-4",1,"input-checkbox"],["id","h-1-4"],["for","checkbox1-4-1"],["type","checkbox","name","checkbox1-4-1","id","checkbox1-4-1",1,"input-checkbox"],["for","checkbox1-4-2"],["type","checkbox","name","checkbox1-4-2","id","checkbox1-4-2",1,"input-checkbox"],["id","h-1-5"],["for","checkbox1-5-1"],["type","checkbox","name","checkbox1-5-1","id","checkbox1-5-1",1,"input-checkbox"],["for","checkbox1-5-2"],["type","checkbox","name","checkbox1-5-2","id","checkbox1-5-2",1,"input-checkbox"],["for","checkbox1-5-3"],["type","checkbox","name","checkbox1-5-3","id","checkbox1-5-3",1,"input-checkbox"],["for","checkbox1-5-4"],["type","checkbox","name","checkbox1-5-4","id","checkbox1-5-4",1,"input-checkbox"],[1,"section3"],[2,"padding-left","0"],["id","h-2-1"],["type","radio","name","smokingStatus","id","radio1","value","never",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio1",1,"input-radio-label"],["type","radio","name","smokingStatus","id","radio2","value","occasional",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio2",1,"input-radio-label"],[1,"long-inline"],["type","radio","name","smokingStatus","id","radio3","value","daily",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio3",1,"input-radio-label"],["type","number","step","1","min","1","max","200",1,"form-control","form-control-sm","input-number",3,"disabled"],["type","radio","name","smokingStatus","id","radio4","value","quit",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio4",1,"input-radio-label"],["id","h-2-2"],["type","radio","name","smokingStatus2","id","radio5","value","never",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio5",1,"input-radio-label"],["type","radio","name","smokingStatus2","id","radio6","value","occasional",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio6",1,"input-radio-label"],["type","radio","name","smokingStatus2","id","radio7","value","daily",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio7",1,"input-radio-label","long-inline"],["type","radio","name","smokingStatus2","id","radio8","value","quit",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio8",1,"input-radio-label"],["id","h-2-3"],["type","radio","name","smokingStatus3","id","radio9","value","never",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio9",1,"input-radio-label"],["type","radio","name","smokingStatus3","id","radio10","value","occasional",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio10",1,"input-radio-label"],["type","radio","name","smokingStatus3","id","radio11","value","drink",1,"input-radio",2,"display","inline-block",3,"ngModel","ngModelChange"],["for","radio11",1,"input-radio-label",2,"white-space","wrap"],["type","text","placeholder","",1,"form-control",2,"width","100px","display","inline-block",3,"disabled"],["type","radio","name","smokingStatus3","id","radio12","value","quit",1,"input-radio",3,"ngModel","ngModelChange"],["for","radio12",1,"input-radio-label"],[1,"section4"],["id","h-3-1"],["for","checkbox2-1-1",1,"input-radio-label"],["type","checkbox","name","checkbox2-1-1","id","checkbox2-1-1",1,"input-checkbox"],["for","checkbox2-1-2",1,"input-radio-label"],["type","checkbox","name","checkbox2-1-2","id","checkbox2-1-2",1,"input-checkbox"],["for","checkbox2-1-3",1,"input-radio-label"],["type","checkbox","name","checkbox2-1-3","id","checkbox2-1-3",1,"input-checkbox"],["for","checkbox2-1-4",1,"input-radio-label"],["type","checkbox","name","checkbox2-1-4","id","checkbox2-1-4",1,"input-checkbox"],["id","h-3-2"],[1,"col-md-12","mb-1"],["for","checkbox2-2-1",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-1","id","checkbox2-2-1",1,"input-checkbox"],["for","checkbox2-2-2",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-2","id","checkbox2-2-2",1,"input-checkbox"],["for","checkbox2-2-3",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-3","id","checkbox2-2-3",1,"input-checkbox"],["for","checkbox2-2-4",1,"input-radio-label"],["type","checkbox","name","checkbox2-2-4","id","checkbox2-2-4",1,"input-checkbox"],["id","h-3-3"],["for","checkbox2-3-1",1,"input-radio-label"],["type","checkbox","name","checkbox2-3-1","id","checkbox2-3-1",1,"input-checkbox"],["for","checkbox2-3-2",1,"input-radio-label"],["type","checkbox","name","checkbox2-3-2","id","checkbox2-3-2",1,"input-checkbox"],["for","checkbox2-3-3",1,"input-radio-label"],["type","checkbox","name","checkbox2-3-3","id","checkbox2-3-3",1,"input-checkbox"],["for","checkbox2-3-4",1,"input-radio-label"],["type","checkbox","name","checkbox2-3-4","id","checkbox2-3-4",1,"input-checkbox"],["id","h-3-4"],["for","checkbox2-4-1",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-1","id","checkbox2-4-1",1,"input-checkbox"],["for","checkbox2-4-2",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-2","id","checkbox2-4-2",1,"input-checkbox"],["for","checkbox2-4-3",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-3","id","checkbox2-4-3",1,"input-checkbox"],["for","checkbox2-4-4",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-4","id","checkbox2-4-4",1,"input-checkbox"],[1,"col-md-12"],["for","checkbox2-4-5",1,"input-radio-label"],["type","checkbox","name","checkbox2-4-5","id","checkbox2-4-5",1,"input-checkbox"],["id","h-3-5"],["for","checkbox2-5-1",1,"input-radio-label"],["type","checkbox","name","checkbox2-5-1","id","checkbox2-5-1",1,"input-checkbox"],["for","checkbox2-5-2",1,"input-radio-label"],["type","checkbox","name","checkbox2-5-2","id","checkbox2-5-2",1,"input-checkbox"],["for","checkbox2-5-3",1,"input-radio-label"],["type","checkbox","name","checkbox2-5-3","id","checkbox2-5-3",1,"input-checkbox"],["type","text","placeholder","\u5176\u4ED6",1,"form-control","form-input-checkbox-long"],["for","checkbox2-5-4",1,"input-radio-label"],["type","checkbox","name","checkbox2-5-4","id","checkbox2-5-4",1,"input-checkbox"],[1,"submit",2,"text-align","center","margin","30px 0"],["type","checkbox","name","","id","submit",1,"input-checkbox",3,"ngModel","ngModelChange"],["for","submit"],["type","button",1,"btn","btn-primary","main-button",3,"click"],["class","dialog",4,"ngIf"],[3,"value"],[1,"dialog"],[1,"dialog-content"]],template:function(c,i){c&1&&(o(0,"div",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div"),n(6,"\u54E1\u5DE5\u554F\u5377"),e()()(),t(7,"div",5),n(8,"Employee Questionnaire"),e()()(),t(9,"div",6)(10,"div",7)(11,"h3"),n(12,"\u7532\u919B\u4F5C\u696D\u554F\u5377"),e(),o(13,"img",8),e(),t(14,"form",9)(15,"div",10)(16,"h3",11),n(17,"\u500B\u4EBA\u4F5C\u696D\u7D93\u6B77"),e(),t(18,"div",12)(19,"label",13),n(20,"1.\u8EAB\u5206\u8B49\u5B57\u865F(\u8B77\u7167\u865F\u78BC)"),e(),o(21,"input",14),e(),t(22,"div",12)(23,"label",15),n(24,"2.\u53D7\u50F1\u65E5\u671F(\u6C11\u570B)"),e(),t(25,"div",16)(26,"select",17),m("ngModelChange",function(a){return i.selectedYear=a}),x(27,V,2,2,"option",18),e(),t(28,"select",19),m("ngModelChange",function(a){return i.selectedMonth=a}),x(29,$,2,2,"option",18),e(),t(30,"select",20),m("ngModelChange",function(a){return i.selectedDay=a}),x(31,R,2,2,"option",18),e()()(),t(32,"div",12)(33,"label",21),n(34,"3.\u76EE\u524D\u5F9E\u4E8B"),e(),t(35,"select",22)(36,"option",23),n(37,"061001|\u91AB\u5E2B"),e(),t(38,"option",24),n(39,"061002|\u7259\u91AB\u5E2B"),e(),t(40,"option",25),n(41,"061003|\u4E2D\u91AB\u5E2B"),e(),t(42,"option",26),n(43," 061004|\u91AB\u5B78\u7F8E\u5BB9\uFF0F\u6574\u578B "),e(),t(44,"option",27),n(45," 061005|\u9EBB\u9189\u91AB\u5E2B "),e(),t(46,"option",28),n(47," 061006|\u81E8\u5E8A\uFF0F\u8AEE\u5546\u5FC3\u7406\u5E2B "),e(),t(48,"option",29),n(49," 061007|\u8077\u80FD\u6CBB\u7642\u5E2B "),e(),t(50,"option",30),n(51," 061008|\u7269\u7406\u6CBB\u7642\u5E2B "),e(),t(52,"option",31),n(53," 061009|\u8A9E\u8A00\u6CBB\u7642\u5E2B "),e(),t(54,"option",32),n(55," 061010|\u547C\u5438\u6CBB\u7642\u5E2B "),e(),t(56,"option",33),n(57," 061011|\u7378\u91AB\uFF0F\u7378\u91AB\u4F50 "),e(),t(58,"option",34),n(59," 061012|\u5176\u5B83\u91AB\u7642\u5F9E\u696D\u4EBA\u54E1 "),e(),t(60,"option",35),n(61," 061101|\u8B77\u7406\u9577 "),e(),t(62,"option",36),n(63," 061102|\u8B77\u58EB\uFF0F\u8B77\u7406\u5E2B "),e(),t(64,"option",37),n(65," 061103|\u5C08\u79D1\u8B77\u7406\u5E2B "),e(),t(66,"option",38),n(67," 061104|\u7167\u9867\u670D\u52D9\u54E1 "),e(),t(68,"option",39),n(69," 061105|\u52DE\u5DE5\u5065\u5EB7\u670D\u52D9\u8B77\u7406\u4EBA\u54E1\uFF0F\u5EE0\u8B77 "),e(),t(70,"option",40),n(71," 061201|\u85E5\u5E2B\u52A9\u7406 "),e(),t(72,"option",41),n(73," 061202|\u8A3A\u6240\u52A9\u7406 "),e(),t(74,"option",42),n(75," 061203|\u7259\u91AB\u52A9\u7406 "),e(),t(76,"option",43),n(77," 061204|\u91AB\u9662\u884C\u653F\u7BA1\u7406\u4EBA\u54E1 "),e(),t(78,"option",44),n(79,"061301|\u85E5\u5E2B"),e(),t(80,"option",45),n(81," 061302|\u71DF\u990A\u5E2B "),e(),t(82,"option",46),n(83," 061303|\u91AB\u4E8B\u6AA2\u9A57\u5E2B "),e(),t(84,"option",47),n(85," 061304|\u5FA9\u5065\u6280\u8853\u5E2B "),e(),t(86,"option",48),n(87," 061305|\u91AB\u4E8B\u653E\u5C04\u5E2B "),e(),t(88,"option",49),n(89," 061306|\u9A57\u5149\u5E2B "),e(),t(90,"option",50),n(91," 061307|\u7259\u9AD4\u6280\u8853\u4EBA\u54E1 "),e(),t(92,"option",51),n(93," 061308|\u63A8\u62FF\uFF0F\u6309\u6469\u5E2B "),e(),t(94,"option",52),n(95," 061309|\u653E\u5C04\u6027\u8A2D\u5099\u4F7F\u7528\u6280\u8853\u54E1 "),e(),t(96,"option",53),n(97," 061401|\u751F\u6280\u4E3B\u7BA1 "),e(),t(98,"option",54),n(99," 061402|\u91AB\u85E5\u7814\u767C\u4EBA\u54E1 "),e(),t(100,"option",55),n(101," 061403|\u75C5\u7406\u85E5\u7406\u7814\u7A76\u4EBA\u54E1 "),e(),t(102,"option",56),n(103," 061404|\u751F\u7269\u79D1\u6280\u7814\u767C\u4EBA\u54E1 "),e(),t(104,"option",57),n(105," 061405|\u91AB\u7642\u5668\u6750\u7814\u767C\u5DE5\u7A0B\u5E2B "),e()()(),t(106,"div",12)(107,"label",58),n(108,"4.\u8D77\u59CB\u65E5\u671F(\u6C11\u570B)"),e(),t(109,"div",59)(110,"select",17),m("ngModelChange",function(a){return i.selectedYear1=a}),x(111,L,2,2,"option",18),e(),t(112,"select",19),m("ngModelChange",function(a){return i.selectedMonth1=a}),x(113,Q,2,2,"option",18),e()()(),t(114,"div",60)(115,"label",61),n(116,"5.\u5F9E\u4E8B\u925B\u4F5C\u696D\u5E73\u5747\u6BCF\u65E5\u5DE5\u6642\u70BA"),e(),t(117,"select",62)(118,"option",63),n(119,"0"),e(),t(120,"option",64),n(121,"0.5"),e(),t(122,"option",65),n(123,"1"),e(),t(124,"option",66),n(125,"1.5"),e(),t(126,"option",65),n(127,"2"),e(),t(128,"option",66),n(129,"2.5"),e(),t(130,"option",65),n(131,"3"),e(),t(132,"option",66),n(133,"3.5"),e(),t(134,"option",65),n(135,"4"),e(),t(136,"option",66),n(137,"4.5"),e(),t(138,"option",65),n(139,"5"),e(),t(140,"option",66),n(141,"5.5"),e(),t(142,"option",65),n(143,"6"),e(),t(144,"option",66),n(145,"6.5"),e(),t(146,"option",65),n(147,"7"),e(),t(148,"option",66),n(149,"7.5"),e(),t(150,"option",65),n(151,"8"),e(),t(152,"option",66),n(153,"8.5"),e(),t(154,"option",65),n(155,"9"),e(),t(156,"option",66),n(157,"9.5"),e(),t(158,"option",65),n(159,"10"),e(),t(160,"option",66),n(161,"10.5"),e(),t(162,"option",65),n(163,"11"),e(),t(164,"option",66),n(165,"11.5"),e(),t(166,"option",65),n(167,"12"),e()(),t(168,"span"),n(169,"\u5C0F\u6642"),e()()(),t(170,"div",67)(171,"div",68)(172,"h3",11),n(173,"\u65E2\u5F80\u75C5\u53F2 \u60A8\u662F\u5426\u66FE\u60A3\u6709\u6709\u4E0B\u5217\u6162\u6027\u75C5"),e()(),t(174,"div",69)(175,"h4",70),n(176,"1.\u547C\u5438\u7CFB\u7D71"),e(),t(177,"div",71)(178,"label",72),o(179,"input",73),n(180,"\u6C23\u5598 "),e()(),t(181,"div",71)(182,"label",74),o(183,"input",75),n(184,"\u904E\u654F\u6027\u9F3B\u708E "),e()()(),t(185,"div",69)(186,"div",71)(187,"label",76),o(188,"input",77),n(189,"\u6162\u6027\u6C23\u7BA1\u708E\u3001\u80BA\u6C23\u816B "),e()(),t(190,"div",71)(191,"label",78),o(192,"input",79),n(193,"\u9F3B\u54BD\u764C "),e()()(),t(194,"div",69)(195,"div",71)(196,"label",80),o(197,"input",81),n(198,"\u7121 "),e()()(),t(199,"div",69)(200,"h4",82),n(201,"2.\u76AE\u819A\u7CFB\u7D71"),e(),t(202,"div",71)(203,"label",83),o(204,"input",84),n(205,"\u523A\u6FC0\u6027\u76AE\u819A\u708E "),e()(),t(206,"div",71)(207,"label",85),o(208,"input",86),n(209,"\u904E\u654F\u6027\u76AE\u819A\u708E "),e()()(),t(210,"div",69)(211,"div",71)(212,"label",87),o(213,"input",88),n(214,"\u5316\u5B78\u6027\u707C\u50B7 "),e()(),t(215,"div",71)(216,"label",89),o(217,"input",90),n(218,"\u7121 "),e()()(),t(219,"div",69)(220,"h4",91),n(221,"3.\u9020\u8840\u7CFB\u7D71"),e(),t(222,"div",71)(223,"label",92),o(224,"input",93),n(225,"\u767D\u8840\u75C5 "),e()(),t(226,"div",71)(227,"label",94),o(228,"input",95),n(229,"\u9AA8\u9AD3\u5206\u5316\u4E0D\u826F "),e()()(),t(230,"div",69)(231,"div",71)(232,"label",96),o(233,"input",97),n(234,"\u7121 "),e()()(),t(235,"div",69)(236,"h4",98),n(237,"4.\u50B3\u67D3\u6027\u75BE\u75C5"),e(),t(238,"div",71)(239,"label",99),o(240,"input",100),n(241,"EB\u75C5\u6BD2\u611F\u67D3 "),e()(),t(242,"div",71)(243,"label",101),o(244,"input",102),n(245,"\u7121 "),e()()(),t(246,"div",69)(247,"h4",103),n(248,"5.\u5176\u4ED6"),e(),t(249,"div",71)(250,"label",104),o(251,"input",105),n(252,"\u88AB\u8A3A\u65B7\u5C0D\u7532\u919B\u904E\u654F "),e()(),t(253,"div",71)(254,"label",106),o(255,"input",107),n(256,"\u4F7F\u7528\u6212\u9152\u85E5 "),e()()(),t(257,"div",69)(258,"div",71)(259,"label",108),o(260,"input",109),n(261,"\u5176\u4ED6 "),e()(),t(262,"div",71)(263,"label",110),o(264,"input",111),n(265,"\u7121 "),e()()()(),t(266,"div",112)(267,"h3",11),n(268,"\u751F\u6D3B\u7FD2\u6163"),e(),t(269,"ul",113)(270,"li")(271,"h5",114),n(272,"1.\u8ACB\u554F\u60A8\u904E\u53BB\u4E00\u500B\u6708\u5167\u662F\u5426\u6709\u5438\u83F8?"),e(),t(273,"input",115),m("ngModelChange",function(a){return i.smokingStatusGroup1=a}),e(),t(274,"label",116),n(275,"\u5F9E\u672A\u5438\u83F8"),e()(),t(276,"li")(277,"input",117),m("ngModelChange",function(a){return i.smokingStatusGroup1=a}),e(),t(278,"label",118),n(279,"\u5076\u723E\u5438(\u4E0D\u662F\u5929\u5929)"),e()(),t(280,"li",119)(281,"input",120),m("ngModelChange",function(a){return i.smokingStatusGroup1=a}),e(),t(282,"label",121),n(283,"(\u5E7E\u4E4E)\u6BCF\u5929\u5438\uFF0C\u5E73\u5747\u6BCF\u5929\u5438 "),o(284,"input",122),n(285," \uFF0C\u5DF2\u5438 "),o(286,"input",122),n(287," \u5E74 "),e()(),t(288,"li",119)(289,"input",123),m("ngModelChange",function(a){return i.smokingStatusGroup1=a}),e(),t(290,"label",124),n(291,"\u5DF2\u7D93\u6212\u83F8\uFF0C\u6212\u4E86 "),o(292,"input",122),n(293," \u5E74 "),o(294,"input",122),n(295," \u500B\u6708 "),e()()(),t(296,"ul",113)(297,"li")(298,"h5",125),n(299,"2.\u8ACB\u554F\u60A8\u6700\u8FD1\u516D\u500B\u6708\u5167\u662F\u5426\u6709\u56BC\u98DF\u6AB3\u6994?"),e(),t(300,"input",126),m("ngModelChange",function(a){return i.smokingStatusGroup2=a}),e(),t(301,"label",127),n(302,"\u5F9E\u672A\u56BC\u98DF\u6AB3\u6994"),e()(),t(303,"li")(304,"input",128),m("ngModelChange",function(a){return i.smokingStatusGroup2=a}),e(),t(305,"label",129),n(306,"\u5076\u723E\u56BC(\u4E0D\u662F\u5929\u5929)"),e()(),t(307,"li",119)(308,"input",130),m("ngModelChange",function(a){return i.smokingStatusGroup2=a}),e(),t(309,"label",131),n(310,"(\u5E7E\u4E4E)\u6BCF\u5929\u56BC\uFF0C\u5E73\u5747\u6BCF\u5929\u56BC "),o(311,"input",122),n(312," \u9846,\u5DF2\u56BC "),o(313,"input",122),n(314," \u5E74 "),e()(),t(315,"li",119)(316,"input",132),m("ngModelChange",function(a){return i.smokingStatusGroup2=a}),e(),t(317,"label",133),n(318,"\u5DF2\u7D93\u6212\u83F8\uFF0C\u6212\u4E86 "),o(319,"input",122),n(320," \u5E74 "),o(321,"input",122),n(322," \u500B\u6708 "),e()()(),t(323,"ul",113)(324,"li")(325,"h5",134),n(326,"3.\u8ACB\u554F\u60A8\u904E\u53BB\u4E00\u500B\u6708\u5167\u662F\u5426\u6709\u559D\u9152?"),e(),t(327,"input",135),m("ngModelChange",function(a){return i.smokingStatusGroup3=a}),e(),t(328,"label",136),n(329,"\u5F9E\u672A\u559D\u9152"),e()(),t(330,"li")(331,"input",137),m("ngModelChange",function(a){return i.smokingStatusGroup3=a}),e(),t(332,"label",138),n(333,"\u5076\u723E\u559D(\u4E0D\u662F\u5929\u5929)"),e()(),t(334,"li",119)(335,"input",139),m("ngModelChange",function(a){return i.smokingStatusGroup3=a}),e(),t(336,"label",140),n(337,"\uFF08\u5E7E\u4E4E\uFF09\u6BCF\u5929\u559D\uFF0C\u5E73\u5747\u6BCF\u9031\u559D"),e(),o(338,"input",122),t(339,"label",140),n(340,"\u6B21,\u6700\u5E38\u559D"),e(),o(341,"input",141),t(342,"label",140),n(343,"\u9152\uFF0C\u6BCF\u6B21"),e(),o(344,"input",122),t(345,"label",140),n(346,"\u74F6"),e()(),t(347,"li",119)(348,"input",142),m("ngModelChange",function(a){return i.smokingStatusGroup3=a}),e(),t(349,"label",143),n(350,"\u5DF2\u7D93\u6212\u9152\uFF0C\u6212\u4E86 "),o(351,"input",122),n(352," \u5E74 "),o(353,"input",122),n(354," \u500B\u6708 "),e()()()(),t(355,"div",144)(356,"div",68)(357,"h3",11),n(358,"\u81EA\u89BA\u75C7\u72C0"),e()(),t(359,"div",69)(360,"h4",145),n(361,"1.\u547C\u5438\u7CFB\u7D71"),e(),t(362,"div",71)(363,"label",146),o(364,"input",147),n(365,"\u54B3\u55FD "),e()(),t(366,"div",71)(367,"label",148),o(368,"input",149),n(369,"\u547C\u5438\u6025\u4FC3 "),e()()(),t(370,"div",69)(371,"div",71)(372,"label",150),o(373,"input",151),n(374,"\u80F8\u60B6 "),e()(),t(375,"div",71)(376,"label",152),o(377,"input",153),n(378,"\u6C23\u5598 "),e()()(),t(379,"div",69)(380,"h4",154),n(381,"2.\u76AE\u819A\u7CFB\u7D71"),e(),t(382,"div",155)(383,"label",156),o(384,"input",157),n(385,"\u66B4\u9732\u90E8\u4F4D\u76AE\u819A\u7D05\u816B\u3001\u6C34\u6CE1\u3001\u4E7E\u71E5\u3001\u523A\u75DB\u3001\u812B\u76AE "),e()(),t(386,"div",155)(387,"label",158),o(388,"input",159),n(389,"\u773C\u775B\u523A\u6FC0\u611F "),e()(),t(390,"div",155)(391,"label",160),o(392,"input",161),n(393,"\u5589\u56A8\u523A\u6FC0\u611F "),e()(),t(394,"div",155)(395,"label",162),o(396,"input",163),n(397,"\u773C\u775B\u6216\u5589\u56A8\u4E7E\u71E5\u4E0D\u8212\u670D "),e()()(),t(398,"div",69)(399,"h4",164),n(400,"3.\u8033\u9F3B\u5589"),e(),t(401,"div",71)(402,"label",165),o(403,"input",166),n(404,"\u9F3B\u585E "),e()(),t(405,"div",71)(406,"label",167),o(407,"input",168),n(408,"\u9838\u90E8\u816B\u584A "),e()()(),t(409,"div",69)(410,"div",71)(411,"label",169),o(412,"input",170),n(413,"\u55AE\u5074\u4E2D\u8033\u7A4D\u6C34 "),e()(),t(414,"div",71)(415,"label",171),o(416,"input",172),n(417,"\u55AE\u5074\u807D\u529B\u7570\u5E38 "),e()()(),t(418,"div",69)(419,"h4",173),n(420,"4.\u8840\u6DB2\u7CFB\u7D71"),e(),t(421,"div",71)(422,"label",174),o(423,"input",175),n(424,"\u50B7\u53E3\u4E0D\u6613\u6B62\u8840 "),e()(),t(425,"div",71)(426,"label",176),o(427,"input",177),n(428,"\u6708\u7D93\u91CF\u904E\u591A "),e()()(),t(429,"div",69)(430,"div",71)(431,"label",178),o(432,"input",179),n(433,"\u7600\u6591 "),e()(),t(434,"div",71)(435,"label",180),o(436,"input",181),n(437,"\u9F52\u9F66\u51FA\u8840 "),e()()(),t(438,"div",69)(439,"div",182)(440,"label",183),o(441,"input",184),n(442,"\u9AA8\u982D\u75BC\u75DB "),e()()(),t(443,"div",69)(444,"h4",185),n(445,"5.\u5176\u4ED6"),e(),t(446,"div",71)(447,"label",186),o(448,"input",187),n(449,"\u8907\u8996 "),e()(),t(450,"div",71)(451,"label",188),o(452,"input",189),n(453,"\u9AD4\u91CD\u6E1B\u8F15 "),e()()(),t(454,"div",69)(455,"div",71)(456,"label",190),o(457,"input",191),n(458,"\u5176\u4ED6 "),e(),o(459,"input",192),e(),t(460,"div",71)(461,"label",193),o(462,"input",194),n(463,"\u7121 "),e()()()(),t(464,"div",195)(465,"input",196),m("ngModelChange",function(a){return i.isCheckAll=a}),e(),t(466,"label",197),n(467,"\u5DF2\u78BA\u8A8D\u4EE5\u4E0A\u6AA2\u67E5\u78BA\u8A8D\u4E8B\u9805\u8CC7\u6599\u7121\u8AA4"),e(),o(468,"br"),t(469,"button",198),m("click",function(){return i.openDialog()}),n(470," \u9001\u51FA\u554F\u5377 "),e()(),x(471,J,6,0,"div",199),e()()),c&2&&(u(26),l("ngModel",i.selectedYear),u(),l("ngForOf",i.years),u(),l("ngModel",i.selectedMonth),u(),l("ngForOf",i.months),u(),l("ngModel",i.selectedDay),u(),l("ngForOf",i.days),u(79),l("ngModel",i.selectedYear1),u(),l("ngForOf",i.years),u(),l("ngModel",i.selectedMonth1),u(),l("ngForOf",i.months),u(160),l("ngModel",i.smokingStatusGroup1),u(4),l("ngModel",i.smokingStatusGroup1),u(4),l("ngModel",i.smokingStatusGroup1),u(3),l("disabled",i.smokingStatusGroup1!=="daily"),u(2),l("disabled",i.smokingStatusGroup1!=="daily"),u(3),l("ngModel",i.smokingStatusGroup1),u(3),l("disabled",i.smokingStatusGroup1!=="quit"),u(2),l("disabled",i.smokingStatusGroup1!=="quit"),u(6),l("ngModel",i.smokingStatusGroup2),u(4),l("ngModel",i.smokingStatusGroup2),u(4),l("ngModel",i.smokingStatusGroup2),u(3),l("disabled",i.smokingStatusGroup2!=="daily"),u(2),l("disabled",i.smokingStatusGroup2!=="daily"),u(3),l("ngModel",i.smokingStatusGroup2),u(3),l("disabled",i.smokingStatusGroup2!=="quit"),u(2),l("disabled",i.smokingStatusGroup2!=="quit"),u(6),l("ngModel",i.smokingStatusGroup3),u(4),l("ngModel",i.smokingStatusGroup3),u(4),l("ngModel",i.smokingStatusGroup3),u(3),l("disabled",i.smokingStatusGroup3!=="drink"),u(3),l("disabled",i.smokingStatusGroup3!=="drink"),u(3),l("disabled",i.smokingStatusGroup3!=="drink"),u(4),l("ngModel",i.smokingStatusGroup3),u(3),l("disabled",i.smokingStatusGroup3!=="quit"),u(2),l("disabled",i.smokingStatusGroup3!=="quit"),u(112),l("ngModel",i.isCheckAll),u(6),l("ngIf",i.isDialogOpen))},dependencies:[y,B,G,N,Y,D,A,T,H,w,j,P,O],styles:[".overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:none;justify-content:center;align-items:center;z-index:9999}.dialog[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:5px;text-align:center}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{white-space:nowrap;font-size:1.1rem}.box-label-input[_ngcontent-%COMP%]   .box-label-inline[_ngcontent-%COMP%]{margin-bottom:10px}.input-text[_ngcontent-%COMP%]{width:280px}.title[_ngcontent-%COMP%]{text-align:center}.main-title[_ngcontent-%COMP%]{font-weight:900;color:var(--main-color);margin-top:.5rem}#year[_ngcontent-%COMP%], #month[_ngcontent-%COMP%], #day[_ngcontent-%COMP%], #job-now[_ngcontent-%COMP%], #hour[_ngcontent-%COMP%]{color:var(--main-color)}h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{font-size:1.3rem;margin:.5rem 0 .25rem;font-weight:700}.main-button[_ngcontent-%COMP%]{margin:30px 0;background-color:var(--secondary-color);border-color:transparent;width:150px;font-size:1.2rem}.type[_ngcontent-%COMP%]{width:50%}.col-md-4[_ngcontent-%COMP%]{font-weight:900;margin-bottom:.25rem}.input-checkbox[_ngcontent-%COMP%], .input-radio[_ngcontent-%COMP%]{transform:scale(1.5) translateY(1px);margin-right:5px}.input-radio-label[_ngcontent-%COMP%]{font-weight:700}.input-number[_ngcontent-%COMP%]{display:inline-block;width:50px}.form-input-checkbox-long[_ngcontent-%COMP%]{width:150px;display:inline-block;margin-left:5px}.form-input-checkbox[_ngcontent-%COMP%]{width:200px;display:inline-block;margin-left:5px}.dialog[_ngcontent-%COMP%]{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#0006}.dialog-content[_ngcontent-%COMP%]{background-color:#fefefe;margin:15% auto;padding:30px 0 10px;border:1px solid #888;width:80%;text-align:center}.dialog-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 0;border:none;border-radius:4px;cursor:pointer}@media only screen and (max-width:575.9px){.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:.82rem}.long-inline[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:.58rem}#h-1-1[_ngcontent-%COMP%], #h-1-2[_ngcontent-%COMP%], #h-1-3[_ngcontent-%COMP%], #h-1-4[_ngcontent-%COMP%], #h-1-5[_ngcontent-%COMP%], #h-1-6[_ngcontent-%COMP%], #h-2-1[_ngcontent-%COMP%], #h-2-2[_ngcontent-%COMP%], #h-2-3[_ngcontent-%COMP%], #h-3-1[_ngcontent-%COMP%], #h-3-2[_ngcontent-%COMP%], #h-3-3[_ngcontent-%COMP%], #h-3-4[_ngcontent-%COMP%], #h-3-5[_ngcontent-%COMP%], #h-3-6[_ngcontent-%COMP%]{font-size:1rem;margin:.5rem 0 .25rem}.box-label-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}}"]});let d=r;return d})();var ne=(()=>{let r=class r{};r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=_({type:r}),r.\u0275inj=E({imports:[F,I,M.forChild([{path:"",component:q}])]});let d=r;return d})();export{ne as Survey_HocoModule};
