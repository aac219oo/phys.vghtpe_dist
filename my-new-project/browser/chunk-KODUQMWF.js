import{d as Xe,e as Ue,g as $e}from"./chunk-KFERRTTP.js";import{c as Ie,d as xe,g as Ae,n as Te}from"./chunk-EJQMEEQK.js";import{$ as Ge,B as Ve,F as We,J as Z,K as J,L as A,M as je,O as T,P as Be,Q as Ke,R as ee,S as qe,Y as Ne,_ as He,aa as Qe,ba as ze,ca as Ye,da as te,f as Ee,g as De,i as Re,j as Fe,p as z,t as Y,u as X,v as U,w as Pe,y as Le,z as $}from"./chunk-ZX3E2E3R.js";import{$ as de,Aa as _e,Ca as ge,Cb as v,Da as w,Db as Q,E as P,Ea as K,G as re,Ga as fe,Ja as ye,Jb as we,K as L,L as V,La as k,M as m,Ma as q,Pb as ke,Qa as h,Ra as _,Sa as ve,T as se,Ta as be,U as O,W as oe,X as le,Y as ce,_a as b,aa as W,ab as g,ba as j,bb as Ce,ca as B,cb as N,da as he,eb as Me,fa as pe,fb as H,gb as G,h as C,kb as Oe,lb as Se,o as R,r as ne,ra as me,ua as u,v as M,va as l,vb as f,wb as I,x as F,xa as ue,xb as x,yb as y,za as S}from"./chunk-PDCXLAN3.js";var pt=["trigger"],mt=["panel"];function ut(n,r){if(n&1&&(h(0,"span",9),H(1),_()),n&2){let o=g();u(),G(o.placeholder)}}function _t(n,r){n&1&&N(0)}function gt(n,r){if(n&1&&(h(0,"span",11),H(1),_()),n&2){let o=g(2);u(),G(o.triggerValue)}}function ft(n,r){if(n&1&&(h(0,"span",10),k(1,_t,1,0)(2,gt,2,1),_()),n&2){let o=g();u(),q(1,o.customTrigger?1:2)}}function yt(n,r){if(n&1){let o=be();B(),he(),h(0,"div",12,13),b("@transformPanel.done",function(t){W(o);let i=g();return j(i._panelDoneAnimatingStream.next(t.toState))})("keydown",function(t){W(o);let i=g();return j(i._handleKeydown(t))}),N(2,1),_()}if(n&2){let o=g();ye("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",o._getPanelTheme(),""),K("ngClass",o.panelClass)("@transformPanel","showing"),w("id",o.id+"-panel")("aria-multiselectable",o.multiple)("aria-label",o.ariaLabel||null)("aria-labelledby",o._getPanelAriaLabelledby())}}var vt=[[["mat-select-trigger"]],"*"],bt=["mat-select-trigger","*"],Ct={transformPanelWrap:Z("transformPanelWrap",[T("* => void",Ke("@transformPanel",[Be()],{optional:!0}))]),transformPanel:Z("transformPanel",[je("void",A({opacity:0,transform:"scale(1, 0.8)"})),T("void => showing",J("120ms cubic-bezier(0, 0, 0.2, 1)",A({opacity:1,transform:"scale(1, 1)"}))),T("* => void",J("100ms linear",A({opacity:0})))])};var it=0,at=new O("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=oe(Y);return()=>n.scrollStrategies.reposition()}});function Mt(n){return()=>n.scrollStrategies.reposition()}var Ot=new O("MAT_SELECT_CONFIG"),St={provide:at,deps:[Y],useFactory:Mt},wt=new O("MatSelectTrigger"),ie=class{constructor(r,o){this.source=r,this.value=o}},si=(()=>{let r=class r{_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=ze(e,this.options,this.optionGroups),s=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Ye(s.offsetTop,s.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ie(this,e)}get focused(){return this._focused||this._panelOpen}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(Ie.required)??!1}set required(e){this._required=e,this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,a,s,p,c,nt,rt,ae,st,ot,lt,E){this._viewportRuler=e,this._changeDetectorRef=t,this._ngZone=i,this._elementRef=s,this._dir=p,this._parentFormField=rt,this.ngControl=ae,this._liveAnnouncer=lt,this._defaultOptions=E,this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._panelOpen=!1,this._compareWith=(d,D)=>d===D,this._uid=`mat-select-${it++}`,this._triggerAriaLabelledBy=null,this._destroy=new C,this.stateChanges=new C,this._onChange=()=>{},this._onTouched=()=>{},this._valueId=`mat-select-value-${it++}`,this._panelDoneAnimatingStream=new C,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this.disabled=!1,this.disableRipple=!1,this.tabIndex=0,this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this._multiple=!1,this.disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto",this.optionSelectionChanges=ne(()=>{let d=this.options;return d?d.changes.pipe(L(d),V(()=>M(...d.map(D=>D.onSelectionChange)))):this._ngZone.onStable.pipe(P(1),V(()=>this.optionSelectionChanges))}),this.openedChange=new S,this._openedStream=this.openedChange.pipe(F(d=>d),R(()=>{})),this._closedStream=this.openedChange.pipe(F(d=>!d),R(()=>{})),this.selectionChange=new S,this.valueChange=new S,this._trackedModal=null,this._skipPredicate=d=>this.panelOpen?!1:d.disabled,this.ngControl&&(this.ngControl.valueAccessor=this),E?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=E.typeaheadDebounceInterval),this._errorStateTracker=new qe(a,ae,nt,c,this.stateChanges),this._scrollStrategyFactory=ot,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(st)||0,this.id=this.id}ngOnInit(){this._selectionModel=new De(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(re(),m(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen)),this._viewportRuler.change().pipe(m(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe(m(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(L(null),m(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&$(this._trackedModal,"aria-owns",t),Le(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;$(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,s=this._keyManager;if(!s.isTyping()&&a&&!z(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let p=this.selected;s.onKeydown(e);let c=this.selected;c&&p!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,s=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!s&&(i===13||i===32)&&t.activeItem&&!z(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!s&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let p=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(p?c.select():c.deselect())})}else{let p=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==p&&t.activeItem._selectViaInteraction()}}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe(P(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return i.value!=null&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof X?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ve(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=M(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(m(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),M(...this.options.map(t=>t._stateChanges)).pipe(m(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}};r.\u0275fac=function(t){return new(t||r)(l(Re),l(ue),l(_e),l(Ne),l(me),l(Ee,8),l(Ae,8),l(Te,8),l(Ue,8),l(xe,10),pe("tabindex"),l(at),l(We),l(Ot,8))},r.\u0275cmp=le({type:r,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&(x(a,wt,5),x(a,Qe,5),x(a,Ge,5)),t&2){let s;f(s=y())&&(i.customTrigger=s.first),f(s=y())&&(i.options=s),f(s=y())&&(i.optionGroups=s)}},viewQuery:function(t,i){if(t&1&&(I(pt,5),I(mt,5),I(U,5)),t&2){let a;f(a=y())&&(i.trigger=a.first),f(a=y())&&(i.panel=a.first),f(a=y())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,i){t&1&&b("keydown",function(s){return i._handleKeydown(s)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(w("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),fe("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:["disabled","disabled",v],disableRipple:["disableRipple","disableRipple",v],tabIndex:["tabIndex","tabIndex",e=>e==null?0:Q(e)],hideSingleSelectionIndicator:["hideSingleSelectionIndicator","hideSingleSelectionIndicator",v],placeholder:"placeholder",required:["required","required",v],multiple:["multiple","multiple",v],disableOptionCentering:["disableOptionCentering","disableOptionCentering",v],compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:["typeaheadDebounceInterval","typeaheadDebounceInterval",Q],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],standalone:!0,features:[Oe([{provide:Xe,useExisting:r},{provide:He,useExisting:r}]),ge,de,Se],ngContentSelectors:bt,decls:11,vars:8,consts:[["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],[1,"mat-mdc-select-value"],["class","mat-mdc-select-placeholder mat-mdc-select-min-line"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","attach","detach"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(t,i){if(t&1&&(Ce(vt),h(0,"div",0,1),b("click",function(){return i.open()}),h(3,"div",2),k(4,ut,2,1,"span",3)(5,ft,3,1),_(),h(6,"div",4)(7,"div",5),B(),h(8,"svg",6),ve(9,"path",7),_()()()(),k(10,yt,3,9,"ng-template",8),b("backdropClick",function(){return i.close()})("attach",function(){return i._onAttached()})("detach",function(){return i.close()})),t&2){let a=Me(1);u(3),w("id",i._valueId),u(),q(4,i.empty?4:5),u(6),K("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[X,U,we],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[Ct.transformPanel]},changeDetection:0});let n=r;return n})();var oi=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=ce({type:r}),r.\u0275inj=se({providers:[St],imports:[ke,Pe,te,ee,Fe,$e,te,ee]});let n=r;return n})();export{si as a,oi as b};
