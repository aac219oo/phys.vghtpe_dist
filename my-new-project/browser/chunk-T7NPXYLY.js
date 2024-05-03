import{a as z}from"./chunk-DTWWXHZH.js";import{a as J}from"./chunk-HNWTJ3EE.js";import{C as H,E as w,I as _,L as x,Rb as S,S as o,T as B,U as D,V as l,Y as $,_ as Y,a as I,ea as y,h as A,l as u,n as h,o as V,q as P,r as F,s as G,va as M,xa as q,za as p}from"./chunk-PDCXLAN3.js";var v=class{},W=(()=>{class n extends v{getTranslation(t){return u({})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(n)))(i||n)}})();static \u0275prov=o({token:n,factory:n.\u0275fac})}return n})(),T=class{},X=(()=>{class n{handle(t){return t.key}static \u0275fac=function(e){return new(e||n)};static \u0275prov=o({token:n,factory:n.\u0275fac})}return n})();function j(n,a){if(n===a)return!0;if(n===null||a===null)return!1;if(n!==n&&a!==a)return!0;let t=typeof n,e=typeof a,i,s,r;if(t==e&&t=="object")if(Array.isArray(n)){if(!Array.isArray(a))return!1;if((i=n.length)==a.length){for(s=0;s<i;s++)if(!j(n[s],a[s]))return!1;return!0}}else{if(Array.isArray(a))return!1;r=Object.create(null);for(s in n){if(!j(n[s],a[s]))return!1;r[s]=!0}for(s in a)if(!(s in r)&&typeof a[s]<"u")return!1;return!0}return!1}function f(n){return typeof n<"u"&&n!==null}function N(n){return n&&typeof n=="object"&&!Array.isArray(n)}function tt(n,a){let t=Object.assign({},n);return N(n)&&N(a)&&Object.keys(a).forEach(e=>{N(a[e])?e in n?t[e]=tt(n[e],a[e]):Object.assign(t,{[e]:a[e]}):Object.assign(t,{[e]:a[e]})}),t}var b=class{},Z=(()=>{class n extends b{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,e){let i;return typeof t=="string"?i=this.interpolateString(t,e):typeof t=="function"?i=this.interpolateFunction(t,e):i=t,i}getValue(t,e){let i=typeof e=="string"?e.split("."):[e];e="";do e+=i.shift(),f(t)&&f(t[e])&&(typeof t[e]=="object"||!i.length)?(t=t[e],e=""):i.length?e+=".":t=void 0;while(i.length);return t}interpolateFunction(t,e){return t(e)}interpolateString(t,e){return e?t.replace(this.templateMatcher,(i,s)=>{let r=this.getValue(e,s);return f(r)?r:i}):t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(n)))(i||n)}})();static \u0275prov=o({token:n,factory:n.\u0275fac})}return n})(),C=class{},Q=(()=>{class n extends C{compile(t,e){return t}compileTranslations(t,e){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(n)))(i||n)}})();static \u0275prov=o({token:n,factory:n.\u0275fac})}return n})(),E=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new p;onLangChange=new p;onDefaultLangChange=new p},R=new D("USE_STORE"),O=new D("USE_DEFAULT_LANG"),K=new D("DEFAULT_LANGUAGE"),U=new D("USE_EXTEND"),L=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new p;_onLangChange=new p;_onDefaultLangChange=new p;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(t){this.isolate?this._defaultLang=t:this.store.defaultLang=t}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(t){this.isolate?this._currentLang=t:this.store.currentLang=t}get langs(){return this.isolate?this._langs:this.store.langs}set langs(t){this.isolate?this._langs=t:this.store.langs=t}get translations(){return this.isolate?this._translations:this.store.translations}set translations(t){this.isolate?this._translations=t:this.store.translations=t}constructor(t,e,i,s,r,g=!0,c=!1,d=!1,m){this.store=t,this.currentLoader=e,this.compiler=i,this.parser=s,this.missingTranslationHandler=r,this.useDefaultLang=g,this.isolate=c,this.extend=d,m&&this.setDefaultLang(m)}setDefaultLang(t){if(t===this.defaultLang)return;let e=this.retrieveTranslations(t);typeof e<"u"?(this.defaultLang==null&&(this.defaultLang=t),e.pipe(w(1)).subscribe(i=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(t===this.currentLang)return u(this.translations[t]);let e=this.retrieveTranslations(t);return typeof e<"u"?(this.currentLang||(this.currentLang=t),e.pipe(w(1)).subscribe(i=>{this.changeLang(t)}),e):(this.changeLang(t),u(this.translations[t]))}retrieveTranslations(t){let e;return(typeof this.translations[t]>"u"||this.extend)&&(this._translationRequests[t]=this._translationRequests[t]||this.getTranslation(t),e=this._translationRequests[t]),e}getTranslation(t){this.pending=!0;let e=this.currentLoader.getTranslation(t).pipe(_(1),w(1));return this.loadingTranslations=e.pipe(V(i=>this.compiler.compileTranslations(i,t)),_(1),w(1)),this.loadingTranslations.subscribe({next:i=>{this.translations[t]=this.extend&&this.translations[t]?I(I({},i),this.translations[t]):i,this.updateLangs(),this.pending=!1},error:i=>{this.pending=!1}}),e}setTranslation(t,e,i=!1){e=this.compiler.compileTranslations(e,t),(i||this.extend)&&this.translations[t]?this.translations[t]=tt(this.translations[t],e):this.translations[t]=e,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){t.forEach(e=>{this.langs.indexOf(e)===-1&&this.langs.push(e)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(t,e,i){let s;if(e instanceof Array){let r={},g=!1;for(let c of e)r[c]=this.getParsedResult(t,c,i),h(r[c])&&(g=!0);if(g){let c=e.map(d=>h(r[d])?r[d]:u(r[d]));return G(c).pipe(V(d=>{let m={};return d.forEach((it,st)=>{m[e[st]]=it}),m}))}return r}if(t&&(s=this.parser.interpolate(this.parser.getValue(t,e),i)),typeof s>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],e),i)),typeof s>"u"){let r={key:e,translateService:this};typeof i<"u"&&(r.interpolateParams=i),s=this.missingTranslationHandler.handle(r)}return typeof s<"u"?s:e}get(t,e){if(!f(t)||!t.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(H(i=>(i=this.getParsedResult(i,t,e),h(i)?i:u(i))));{let i=this.getParsedResult(this.translations[this.currentLang],t,e);return h(i)?i:u(i)}}getStreamOnTranslationChange(t,e){if(!f(t)||!t.length)throw new Error('Parameter "key" required');return P(F(()=>this.get(t,e)),this.onTranslationChange.pipe(x(i=>{let s=this.getParsedResult(i.translations,t,e);return typeof s.subscribe=="function"?s:u(s)})))}stream(t,e){if(!f(t)||!t.length)throw new Error('Parameter "key" required');return P(F(()=>this.get(t,e)),this.onLangChange.pipe(x(i=>{let s=this.getParsedResult(i.translations,t,e);return h(s)?s:u(s)})))}instant(t,e){if(!f(t)||!t.length)throw new Error('Parameter "key" required');let i=this.getParsedResult(this.translations[this.currentLang],t,e);if(h(i)){if(t instanceof Array){let s={};return t.forEach((r,g)=>{s[t[g]]=t[g]}),s}return t}else return i}set(t,e,i=this.currentLang){this.translations[i][t]=this.compiler.compile(e,i),this.updateLangs(),this.onTranslationChange.emit({lang:i,translations:this.translations[i]})}changeLang(t){this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),this.defaultLang==null&&this.changeDefaultLang(t)}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.getTranslation(t)}resetLang(t){this._translationRequests[t]=void 0,this.translations[t]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;if(t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof t>"u"))return t.indexOf("-")!==-1&&(t=t.split("-")[0]),t.indexOf("_")!==-1&&(t=t.split("_")[0]),t}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;return t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,t}static \u0275fac=function(e){return new(e||n)(l(E),l(v),l(C),l(b),l(T),l(O),l(R),l(U),l(K))};static \u0275prov=o({token:n,factory:n.\u0275fac})}return n})();var bt=(()=>{class n{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(t,e){this.translate=t,this._ref=e}updateValue(t,e,i){let s=r=>{this.value=r!==void 0?r:t,this.lastKey=t,this._ref.markForCheck()};if(i){let r=this.translate.getParsedResult(i,t,e);h(r.subscribe)?r.subscribe(s):s(r)}this.translate.get(t,e).subscribe(s)}transform(t,...e){if(!t||!t.length)return t;if(j(t,this.lastKey)&&j(e,this.lastParams))return this.value;let i;if(f(e[0])&&e.length)if(typeof e[0]=="string"&&e[0].length){let s=e[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{i=JSON.parse(s)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${e[0]}`)}}else typeof e[0]=="object"&&!Array.isArray(e[0])&&(i=e[0]);return this.lastKey=t,this.lastParams=e,this.updateValue(t,i),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(s=>{this.lastKey&&s.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(t,i,s.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(s=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,i,s.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,i))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(e){return new(e||n)(M(L,16),M(q,16))};static \u0275pipe=Y({name:"translate",type:n,pure:!1});static \u0275prov=o({token:n,factory:n.\u0275fac})}return n})(),Ct=(()=>{class n{static forRoot(t={}){return{ngModule:n,providers:[t.loader||{provide:v,useClass:W},t.compiler||{provide:C,useClass:Q},t.parser||{provide:b,useClass:Z},t.missingTranslationHandler||{provide:T,useClass:X},E,{provide:R,useValue:t.isolate},{provide:O,useValue:t.useDefaultLang},{provide:U,useValue:t.extend},{provide:K,useValue:t.defaultLanguage},L]}}static forChild(t={}){return{ngModule:n,providers:[t.loader||{provide:v,useClass:W},t.compiler||{provide:C,useClass:Q},t.parser||{provide:b,useClass:Z},t.missingTranslationHandler||{provide:T,useClass:X},{provide:R,useValue:t.isolate},{provide:O,useValue:t.useDefaultLang},{provide:U,useValue:t.extend},{provide:K,useValue:t.defaultLanguage},L]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=$({type:n});static \u0275inj=B({})}return n})();var nt=(()=>{let a=class a{constructor(e,i,s){this.http=e,this.translateService=i,this.ls=s,this.langs=["zh-TW","en-US"],this.langsTrans=["\u4E2D\u6587","English"],this.LANG_KEY="language_id",this.getDefaultLangSource=new A,this.switchLangSource=new A,this.getDefaultLang$=this.getDefaultLangSource.asObservable(),this.switchLang$=this.switchLangSource.asObservable(),this.setSubscribe(),i.addLangs(this.langs),this.lang=this.langs[0],i.setDefaultLang(this.langs[0]),setTimeout(()=>this.setDefaultLang(),100)}setSubscribe(){this.translateService.onLangChange.subscribe(e=>{this.lang=e.lang,this.switchLangSource.next(this.lang)})}setDefaultLang(){let e=this.ls.getItem(this.LANG_KEY);e=e||this.langs[0],this.checkLocaleIsValid(e)&&(this.translateService.setDefaultLang(e),this.switchLanguage(e))}getLang(){return this.lang}getZhLang(){return this.langs[0]}switchLanguage(e){this.checkLocaleIsValid(e)&&(this.ls.setItem(this.LANG_KEY,e),this.translateService.use(e))}checkLocaleIsValid(e){return this.langs.indexOf(e)>-1}};a.\u0275fac=function(i){return new(i||a)(l(S),l(L),l(J))},a.\u0275prov=o({token:a,factory:a.\u0275fac,providedIn:"root"});let n=a;return n})();var yt=(()=>{let a=class a{constructor(e,i,s){this.http=e,this.ls=i,this.newsAPI=z.ApiUrl+"api/News.aspx"}getNews(){let e=new URL(this.newsAPI);return this.http.get(e.href)}};a.\u0275fac=function(i){return new(i||a)(l(S),l(nt),l(L))},a.\u0275prov=o({token:a,factory:a.\u0275fac,providedIn:"root"});let n=a;return n})();export{v as a,L as b,bt as c,Ct as d,nt as e,yt as f};
