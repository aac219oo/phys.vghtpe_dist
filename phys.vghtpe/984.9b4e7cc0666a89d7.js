"use strict";(self.webpackChunkmy_new_project=self.webpackChunkmy_new_project||[]).push([[984],{9984:(X,w,c)=>{c.d(w,{Hw:()=>k,Ps:()=>Q});var i=c(4966),C=c(4220),S=c(6733),u=c(1209),O=c(1960),P=c(319),D=c(902),E=c(1570),g=c(2425),N=c(7560),U=c(6293),x=c(8557),B=c(1813),F=c(1314),M=c(3232);const W=["*"];let m;function d(r){return function b(){if(void 0===m&&(m=null,typeof window<"u")){const r=window;void 0!==r.trustedTypes&&(m=r.trustedTypes.createPolicy("angular#components",{createHTML:l=>l}))}return m}()?.createHTML(r)||r}function R(r){return Error(`Unable to find icon with the name "${r}"`)}function A(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function L(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}class h{constructor(l,t,e){this.url=l,this.svgText=t,this.options=e}}let v=(()=>{class r{constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new h(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){const s=this._sanitizer.sanitize(i.q3G.HTML,n);if(!s)throw L(n);const a=d(s);return this._addSvgIconConfig(t,e,new h("",a,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new h(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const o=this._sanitizer.sanitize(i.q3G.HTML,e);if(!o)throw L(e);const s=d(o);return this._addSvgIconSetConfig(t,new h("",s,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,t);if(!e)throw A(t);const n=this._cachedIconsByUrl.get(e);return n?(0,u.of)(I(n)):this._loadSvgIconFromConfig(new h(t,null)).pipe((0,E.b)(o=>this._cachedIconsByUrl.set(e,o)),(0,g.U)(o=>I(o)))}getNamedSvgIcon(t,e=""){const n=T(e,t);let o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);const s=this._iconSetConfigs.get(e);return s?this._getSvgFromIconSetConfigs(t,s):(0,O._)(R(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,u.of)(I(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,g.U)(e=>I(e)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,u.of)(n);const o=e.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe((0,N.K)(a=>{const _=`Loading icon set URL: ${this._sanitizer.sanitize(i.q3G.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(_)),(0,u.of)(null)})));return(0,P.D)(o).pipe((0,g.U)(()=>{const s=this._extractIconWithNameFromAnySet(t,e);if(!s)throw R(t);return s}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){const s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,t,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,E.b)(e=>t.svgText=e),(0,g.U)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,u.of)(null):this._fetchIcon(t).pipe((0,E.b)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const o=t.querySelector(`[id="${e}"]`);if(!o)return null;const s=o.cloneNode(!0);if(s.removeAttribute("id"),"svg"===s.nodeName.toLowerCase())return this._setSvgAttributes(s,n);if("symbol"===s.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(s),n);const a=this._svgElementFromString(d("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString(d("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){const{name:s,value:a}=n[o];"id"!==s&&e.setAttribute(s,a)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){const{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw function K(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==e)throw Error(`Cannot fetch icon from URL "${e}".`);const s=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,e);if(!s)throw A(e);const a=this._inProgressUrlFetches.get(s);if(a)return a;const f=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe((0,g.U)(_=>d(_)),(0,U.x)(()=>this._inProgressUrlFetches.delete(s)),(0,x.B)());return this._inProgressUrlFetches.set(s,f),f}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(T(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){const o=this._resolvers[n](e,t);if(o)return H(o)?new h(o.url,null,o.options):new h(o,null)}}static#t=this.\u0275fac=function(e){return new(e||r)(i.LFG(F.eN,8),i.LFG(M.H7),i.LFG(S.K0,8),i.LFG(i.qLn))};static#e=this.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function I(r){return r.cloneNode(!0)}function T(r,l){return r+":"+l}function H(r){return!(!r.url||!r.options)}const $=new i.OlP("MAT_ICON_DEFAULT_OPTIONS"),j=new i.OlP("mat-icon-location",{providedIn:"root",factory:function Y(){const r=(0,i.f3M)(S.K0),l=r?r.location:null;return{getPathname:()=>l?l.pathname+l.search:""}}}),y=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],G=y.map(r=>`[${r}]`).join(", "),V=/^url\(['"]?#(.*?)['"]?\)$/;let k=(()=>{class r{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,o,s,a){this._elementRef=t,this._iconRegistry=e,this._location=o,this._errorHandler=s,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=D.w0.EMPTY,a&&(a.color&&(this.color=this._defaultColor=a.color),a.fontSet&&(this.fontSet=a.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];(1!==n.nodeType||"svg"===n.nodeName.toLowerCase())&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(s=>{o.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(G),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)y.forEach(s=>{const a=e[o],f=a.getAttribute(s),_=f?f.match(V):null;if(_){let p=n.get(a);p||(p=[],n.set(a,p)),p.push({name:s,value:_[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,B.q)(1)).subscribe(o=>this._setSvgElement(o),o=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${o.message}`))})}}static#t=this.\u0275fac=function(e){return new(e||r)(i.Y36(i.SBq),i.Y36(v),i.$8M("aria-hidden"),i.Y36(j),i.Y36(i.qLn),i.Y36($,8))};static#e=this.\u0275cmp=i.Xpm({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){2&e&&(i.uIk("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),i.Tol(n.color?"mat-"+n.color:""),i.ekj("mat-icon-inline",n.inline)("mat-icon-no-color","primary"!==n.color&&"accent"!==n.color&&"warn"!==n.color))},inputs:{color:"color",inline:["inline","inline",i.VuI],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[i.Xq5,i.jDz],ngContentSelectors:W,decls:1,vars:0,template:function(e,n){1&e&&(i.F$t(),i.Hsn(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}return r})(),Q=(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#e=this.\u0275mod=i.oAB({type:r});static#n=this.\u0275inj=i.cJS({imports:[C.BQ,C.BQ]})}return r})()}}]);