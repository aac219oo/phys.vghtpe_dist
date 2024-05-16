import{A as H,G as $,H as q,K as W,M as At,N as J,b as Z,e as yt,h as z,i as K,n as X,o as Ct,p as xt,q as x,r as D,s as V,t as Dt,u as G,v as b,x as _}from"./chunk-NCJ5SWAR.js";import{Ab as pt,Ba as ct,Bb as ft,Ca as S,D as T,Da as j,Db as vt,Fa as P,Ia as mt,J as I,Lb as N,Mb as bt,Na as M,R as E,S as k,Sa as ht,T as u,Ta as gt,U as c,V as v,W as R,X as L,Za as ut,a as h,b as st,h as g,ja as p,m as rt,ma as U,qb as B,r as O,ra as F,v as lt,wa as d,x as C,ya as dt,zb as _t}from"./chunk-FMEZNCYJ.js";function St(o,i){}var f=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var it=(()=>{let i=class i extends xt{constructor(t,e,a,n,r,s,m,y){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=n,this._interactivityChecker=r,this._ngZone=s,this._overlayRef=m,this._focusMonitor=y,this._platform=v(yt),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=v(dt),this.attachDomPortal=Q=>{this._portalOutlet.hasAttached();let kt=this._portalOutlet.attachDomPortal(Q);return this._contentAttached(),kt},this._document=a,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{t.removeEventListener("blur",a),t.removeEventListener("mousedown",a),t.removeAttribute("tabindex")};t.addEventListener("blur",a),t.addEventListener("mousedown",a)})),t.focus(e)}_focusByCssSelector(t,e){let a=this._elementRef.nativeElement.querySelector(t);a&&this._forceFocus(a,e)}_trapFocus(){let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let a=z(),n=this._elementRef.nativeElement;(!a||a===this._document.body||a===n||n.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let t=this._elementRef.nativeElement,e=z();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=z()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}};i.\u0275fac=function(e){return new(e||i)(d(F),d(q),d(N,8),d(f),d($),d(S),d(b),d(W))},i.\u0275cmp=R({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,a){if(e&1&&ft(x,7),e&2){let n;pt(n=vt())&&(a._portalOutlet=n.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,a){e&2&&P("id",a._config.id||null)("role",a._config.role)("aria-modal",a._config.ariaModal)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null)},standalone:!0,features:[j,B],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,a){e&1&&M(0,St,0,0,"ng-template",0)},dependencies:[x],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2});let o=i;return o})(),A=class{constructor(i,l){this.overlayRef=i,this.config=l,this.closed=new g,this.disableClose=l.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=l.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!V(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=i.detachments().subscribe(()=>{l.closeOnOverlayDetachments!==!1&&this.close()})}close(i,l){if(this.containerInstance){let t=this.closed;this.containerInstance._closeInteractionType=l?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",l=""){return this.overlayRef.updateSize({width:i,height:l}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}},jt=new u("DialogScrollStrategy",{providedIn:"root",factory:()=>{let o=v(_);return()=>o.scrollStrategies.block()}}),Pt=new u("DialogData"),Mt=new u("DefaultDialogConfig");var Bt=0,at=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,a,n,r,s){this._overlay=t,this._injector=e,this._defaultOptions=a,this._parentDialog=n,this._overlayContainer=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new g,this._afterOpenedAtThisLevel=new g,this._ariaHiddenElements=new Map,this.afterAllClosed=O(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(I(void 0))),this._scrollStrategy=s}open(t,e){let a=this._defaultOptions||new f;e=h(h({},a),e),e.id=e.id||`cdk-dialog-${Bt++}`,e.id&&this.getDialogById(e.id);let n=this._getOverlayConfig(e),r=this._overlay.create(n),s=new A(r,e),m=this._attachContainer(r,s,e);return s.containerInstance=m,this._attachDialogContent(t,s,m,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){tt(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){tt(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),tt(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Dt({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,a){let n=a.injector||a.viewContainerRef?.injector,r=[{provide:f,useValue:a},{provide:A,useValue:e},{provide:b,useValue:t}],s;a.container?typeof a.container=="function"?s=a.container:(s=a.container.type,r.push(...a.container.providers(a))):s=it;let m=new X(s,a.viewContainerRef,p.create({parent:n||this._injector,providers:r}),a.componentFactoryResolver);return t.attach(m).instance}_attachDialogContent(t,e,a,n){if(t instanceof _t){let r=this._createInjector(n,e,a,void 0),s={$implicit:n.data,dialogRef:e};n.templateContext&&(s=h(h({},s),typeof n.templateContext=="function"?n.templateContext():n.templateContext)),a.attachTemplatePortal(new Ct(t,null,s,r))}else{let r=this._createInjector(n,e,a,this._injector),s=a.attachComponentPortal(new X(t,n.viewContainerRef,r,n.componentFactoryResolver));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,a,n){let r=t.injector||t.viewContainerRef?.injector,s=[{provide:Pt,useValue:t.data},{provide:A,useValue:e}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(e,t,a)):s.push(...t.providers)),t.direction&&(!r||!r.get(K,null,{optional:!0}))&&s.push({provide:K,useValue:{value:t.direction,change:rt()}}),p.create({parent:r||n,providers:s})}_removeOpenDialog(t,e){let a=this.openDialogs.indexOf(t);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((n,r)=>{n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let t=this._overlayContainer.getContainerElement();if(t.parentElement){let e=t.parentElement.children;for(let a=e.length-1;a>-1;a--){let n=e[a];n!==t&&n.nodeName!=="SCRIPT"&&n.nodeName!=="STYLE"&&!n.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}};i.\u0275fac=function(e){return new(e||i)(c(_),c(p),c(Mt,8),c(i,12),c(G),c(jt))},i.\u0275prov=E({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();function tt(o,i){let l=o.length;for(;l--;)i(o[l])}var wt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=L({type:i}),i.\u0275inj=k({providers:[at],imports:[H,D,At,D]});let o=i;return o})();function Nt(o,i){}var w=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},ot="mdc-dialog--open",Ot="mdc-dialog--opening",Tt="mdc-dialog--closing",zt=150,Vt=75,Gt=(()=>{let i=class i extends it{constructor(t,e,a,n,r,s,m,y,Q){super(t,e,a,n,r,s,m,Q),this._animationMode=y,this._animationStateChanged=new ct,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?Et(this._config.enterAnimationDuration)??zt:0,this._exitAnimationDuration=this._animationsEnabled?Et(this._config.exitAnimationDuration)??Vt:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(It,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ot,ot)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ot),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ot),this._animationsEnabled?(this._hostElement.style.setProperty(It,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Tt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(Ot,Tt)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}};i.\u0275fac=function(e){return new(e||i)(d(F),d(q),d(N,8),d(w),d($),d(S),d(b),d(U,8),d(W))},i.\u0275cmp=R({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,a){e&2&&(ut("id",a._config.id),P("aria-modal",a._config.ariaModal)("role",a._config.role)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null),mt("_mat-animation-noopable",!a._animationsEnabled)("mat-mdc-dialog-container-with-actions",a._actionSectionCount>0))},standalone:!0,features:[j,B],decls:3,vars:0,consts:[[1,"mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,a){e&1&&(ht(0,"div",0)(1,"div",1),M(2,Nt,0,0,"ng-template",2),gt()())},dependencies:[x],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2});let o=i;return o})(),It="--mat-dialog-transition-duration";function Et(o){return o==null?null:typeof o=="number"?o:o.endsWith("ms")?Z(o.substring(0,o.length-2)):o.endsWith("s")?Z(o.substring(0,o.length-1))*1e3:o==="0"?0:null}var Y=function(o){return o[o.OPEN=0]="OPEN",o[o.CLOSING=1]="CLOSING",o[o.CLOSED=2]="CLOSED",o}(Y||{}),nt=class{constructor(i,l,t){this._ref=i,this._containerInstance=t,this._afterOpened=new g,this._beforeClosed=new g,this._state=Y.OPEN,this.disableClose=l.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(C(e=>e.state==="opened"),T(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(C(e=>e.state==="closed"),T(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),lt(this.backdropClick(),this.keydownEvents().pipe(C(e=>e.keyCode===27&&!this.disableClose&&!V(e)))).subscribe(e=>{this.disableClose||(e.preventDefault(),Ht(this,e.type==="keydown"?"keyboard":"mouse"))})}close(i){this._result=i,this._containerInstance._animationStateChanged.pipe(C(l=>l.state==="closing"),T(1)).subscribe(l=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),l.totalTime+100)}),this._state=Y.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let l=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?l.left(i.left):l.right(i.right):l.centerHorizontally(),i&&(i.top||i.bottom)?i.top?l.top(i.top):l.bottom(i.bottom):l.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",l=""){return this._ref.updateSize(i,l),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Y.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Ht(o,i,l){return o._closeInteractionType=i,o.close(l)}var $t=new u("MatMdcDialogData"),qt=new u("mat-mdc-dialog-default-options"),Wt=new u("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let o=v(_);return()=>o.scrollStrategies.block()}});var Yt=0,Qt=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,a,n,r,s,m,y){this._overlay=t,this._defaultOptions=n,this._scrollStrategy=r,this._parentDialog=s,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new g,this._afterOpenedAtThisLevel=new g,this.dialogConfigClass=w,this.afterAllClosed=O(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(I(void 0))),this._dialog=e.get(at),this._dialogRefConstructor=nt,this._dialogContainerType=Gt,this._dialogDataToken=$t}open(t,e){let a;e=h(h({},this._defaultOptions||new w),e),e.id=e.id||`mat-mdc-dialog-${Yt++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let n=this._dialog.open(t,st(h({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:f,useValue:e}]},templateContext:()=>({dialogRef:a}),providers:(r,s,m)=>(a=new this._dialogRefConstructor(r,e,m),a.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:m},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:a}])}));return a.componentRef=n.componentRef,a.componentInstance=n.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(a);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}};i.\u0275fac=function(e){return new(e||i)(c(_),c(p),c(bt,8),c(qt,8),c(Wt),c(i,12),c(G),c(U,8))},i.\u0275prov=E({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();var Ve=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=L({type:i}),i.\u0275inj=k({providers:[Qt],imports:[wt,H,D,J,J]});let o=i;return o})();export{nt as a,$t as b,Qt as c,Ve as d};
