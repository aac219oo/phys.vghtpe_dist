"use strict";(self.webpackChunkmy_new_project=self.webpackChunkmy_new_project||[]).push([[461],{2260:()=>{const ce=globalThis;function le(t){return(ce.__Zone_symbol_prefix||"__zone_symbol__")+t}const Ee=Object.getOwnPropertyDescriptor,Fe=Object.defineProperty,We=Object.getPrototypeOf,kt=Object.create,ft=Array.prototype.slice,Xe="addEventListener",qe="removeEventListener",Ye=le(Xe),Ke=le(qe),pe="true",fe="false",Se=le("");function $e(t,r){return Zone.current.wrap(t,r)}function He(t,r,l,n,a){return Zone.current.scheduleMacroTask(t,r,l,n,a)}const z=le,Ne=typeof window<"u",ve=Ne?window:void 0,X=Ne&&ve||globalThis,ht="removeAttribute";function Oe(t,r){for(let l=t.length-1;l>=0;l--)"function"==typeof t[l]&&(t[l]=$e(t[l],r+"_"+l));return t}function Je(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const rt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Be=!("nw"in X)&&typeof X.process<"u"&&"[object process]"===X.process.toString(),Qe=!Be&&!rt&&!(!Ne||!ve.HTMLElement),ot=typeof X.process<"u"&&"[object process]"===X.process.toString()&&!rt&&!(!Ne||!ve.HTMLElement),De={},st=function(t){if(!(t=t||X.event))return;let r=De[t.type];r||(r=De[t.type]=z("ON_PROPERTY"+t.type));const l=this||t.target||X,n=l[r];let a;return Qe&&l===ve&&"error"===t.type?(a=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===a&&t.preventDefault()):(a=n&&n.apply(this,arguments),null!=a&&!a&&t.preventDefault()),a};function et(t,r,l){let n=Ee(t,r);if(!n&&l&&Ee(l,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const a=z("on"+r+"patched");if(t.hasOwnProperty(a)&&t[a])return;delete n.writable,delete n.value;const d=n.get,p=n.set,y=r.slice(2);let w=De[y];w||(w=De[y]=z("ON_PROPERTY"+y)),n.set=function(M){let k=this;!k&&t===X&&(k=X),k&&("function"==typeof k[w]&&k.removeEventListener(y,st),p&&p.call(k,null),k[w]=M,"function"==typeof M&&k.addEventListener(y,st,!1))},n.get=function(){let M=this;if(!M&&t===X&&(M=X),!M)return null;const k=M[w];if(k)return k;if(d){let H=d.call(this);if(H)return n.set.call(this,H),"function"==typeof M[ht]&&M.removeAttribute(r),H}return null},Fe(t,r,n),t[a]=!0}function it(t,r,l){if(r)for(let n=0;n<r.length;n++)et(t,"on"+r[n],l);else{const n=[];for(const a in t)"on"==a.slice(0,2)&&n.push(a);for(let a=0;a<n.length;a++)et(t,n[a],l)}}const ge=z("originalInstance");function Me(t){const r=X[t];if(!r)return;X[z(t)]=r,X[t]=function(){const a=Oe(arguments,t);switch(a.length){case 0:this[ge]=new r;break;case 1:this[ge]=new r(a[0]);break;case 2:this[ge]=new r(a[0],a[1]);break;case 3:this[ge]=new r(a[0],a[1],a[2]);break;case 4:this[ge]=new r(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},me(X[t],r);const l=new r(function(){});let n;for(n in l)"XMLHttpRequest"===t&&"responseBlob"===n||function(a){"function"==typeof l[a]?X[t].prototype[a]=function(){return this[ge][a].apply(this[ge],arguments)}:Fe(X[t].prototype,a,{set:function(d){"function"==typeof d?(this[ge][a]=$e(d,t+"."+a),me(this[ge][a],d)):this[ge][a]=d},get:function(){return this[ge][a]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&(X[t][n]=r[n])}function ye(t,r,l){let n=t;for(;n&&!n.hasOwnProperty(r);)n=We(n);!n&&t[r]&&(n=t);const a=z(r);let d=null;if(n&&(!(d=n[a])||!n.hasOwnProperty(a))&&(d=n[a]=n[r],Je(n&&Ee(n,r)))){const y=l(d,a,r);n[r]=function(){return y(this,arguments)},me(n[r],d)}return d}function vt(t,r,l){let n=null;function a(d){const p=d.data;return p.args[p.cbIdx]=function(){d.invoke.apply(this,arguments)},n.apply(p.target,p.args),d}n=ye(t,r,d=>function(p,y){const w=l(p,y);return w.cbIdx>=0&&"function"==typeof y[w.cbIdx]?He(w.name,y[w.cbIdx],w,a):d.apply(p,y)})}function me(t,r){t[z("OriginalDelegate")]=r}let tt=!1,ct=!1;function _t(){if(tt)return ct;tt=!0;try{const t=ve.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(ct=!0)}catch{}return ct}let be=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){be=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{be=!1}const Tt={useG:!0},he={},o={},c=new RegExp("^"+Se+"(\\w+)(true|false)$"),u=z("propagationStopped");function h(t,r){const l=(r?r(t):t)+fe,n=(r?r(t):t)+pe,a=Se+l,d=Se+n;he[t]={},he[t][fe]=a,he[t][pe]=d}function g(t,r,l,n){const a=n&&n.add||Xe,d=n&&n.rm||qe,p=n&&n.listeners||"eventListeners",y=n&&n.rmAll||"removeAllListeners",w=z(a),M="."+a+":",k="prependListener",H="."+k+":",O=function(C,E,q){if(C.isRemoved)return;const te=C.callback;let se;"object"==typeof te&&te.handleEvent&&(C.callback=v=>te.handleEvent(v),C.originalDelegate=te);try{C.invoke(C,E,[q])}catch(v){se=v}const Y=C.options;return Y&&"object"==typeof Y&&Y.once&&E[d].call(E,q.type,C.originalDelegate?C.originalDelegate:C.callback,Y),se};function V(C,E,q){if(!(E=E||t.event))return;const te=C||E.target||t,se=te[he[E.type][q?pe:fe]];if(se){const Y=[];if(1===se.length){const v=O(se[0],te,E);v&&Y.push(v)}else{const v=se.slice();for(let K=0;K<v.length&&(!E||!0!==E[u]);K++){const $=O(v[K],te,E);$&&Y.push($)}}if(1===Y.length)throw Y[0];for(let v=0;v<Y.length;v++){const K=Y[v];r.nativeScheduleMicroTask(()=>{throw K})}}}const ee=function(C){return V(this,C,!1)},F=function(C){return V(this,C,!0)};function ke(C,E){if(!C)return!1;let q=!0;E&&void 0!==E.useG&&(q=E.useG);const te=E&&E.vh;let se=!0;E&&void 0!==E.chkDup&&(se=E.chkDup);let Y=!1;E&&void 0!==E.rt&&(Y=E.rt);let v=C;for(;v&&!v.hasOwnProperty(a);)v=We(v);if(!v&&C[a]&&(v=C),!v||v[w])return!1;const K=E&&E.eventNameToString,$={},D=v[w]=v[a],I=v[z(d)]=v[d],j=v[z(p)]=v[p],de=v[z(y)]=v[y];let ne;E&&E.prepend&&(ne=v[z(E.prepend)]=v[E.prepend]);const ie=q?function(i){if(!$.isExisting)return D.call($.target,$.eventName,$.capture?F:ee,$.options)}:function(i){return D.call($.target,$.eventName,i.invoke,$.options)},B=q?function(i){if(!i.isRemoved){const f=he[i.eventName];let T;f&&(T=f[i.capture?pe:fe]);const S=T&&i.target[T];if(S)for(let L=0;L<S.length;L++)if(S[L]===i){S.splice(L,1),i.isRemoved=!0,0===S.length&&(i.allRemoved=!0,i.target[T]=null);break}}if(i.allRemoved)return I.call(i.target,i.eventName,i.capture?F:ee,i.options)}:function(i){return I.call(i.target,i.eventName,i.invoke,i.options)},nt=E&&E.diff?E.diff:function(i,f){const T=typeof f;return"function"===T&&i.callback===f||"object"===T&&i.originalDelegate===f},je=Zone[z("UNPATCHED_EVENTS")],lt=t[z("PASSIVE_EVENTS")],_=function(i,f,T,S,L=!1,R=!1){return function(){const N=this||t;let A=arguments[0];E&&E.transferEventName&&(A=E.transferEventName(A));let U=arguments[1];if(!U)return i.apply(this,arguments);if(Be&&"uncaughtException"===A)return i.apply(this,arguments);let J=!1;if("function"!=typeof U){if(!U.handleEvent)return i.apply(this,arguments);J=!0}if(te&&!te(i,U,N,arguments))return;const ae=be&&!!lt&&-1!==lt.indexOf(A),Te=function Z(i,f){return!be&&"object"==typeof i&&i?!!i.capture:be&&f?"boolean"==typeof i?{capture:i,passive:!0}:i?"object"==typeof i&&!1!==i.passive?{...i,passive:!0}:i:{passive:!0}:i}(arguments[2],ae),Ve=Te?.signal;if(Ve?.aborted)return;if(je)for(let Pe=0;Pe<je.length;Pe++)if(A===je[Pe])return ae?i.call(N,A,U,Te):i.apply(this,arguments);const pt=!!Te&&("boolean"==typeof Te||Te.capture),Pt=!(!Te||"object"!=typeof Te)&&Te.once,Dt=Zone.current;let yt=he[A];yt||(h(A,K),yt=he[A]);const Rt=yt[pt?pe:fe];let ut,Ge=N[Rt],It=!1;if(Ge){if(It=!0,se)for(let Pe=0;Pe<Ge.length;Pe++)if(nt(Ge[Pe],U))return}else Ge=N[Rt]=[];const Ct=N.constructor.name,St=o[Ct];St&&(ut=St[A]),ut||(ut=Ct+f+(K?K(A):A)),$.options=Te,Pt&&($.options.once=!1),$.target=N,$.capture=pt,$.eventName=A,$.isExisting=It;const xe=q?Tt:void 0;xe&&(xe.taskData=$),Ve&&($.options.signal=void 0);const we=Dt.scheduleEventTask(ut,U,xe,T,S);if(Ve){$.options.signal=Ve;const Pe=()=>we.zone.cancelTask(we);i.call(Ve,"abort",Pe,{once:!0}),xe&&(xe.removeAbortListener=()=>Ve.removeEventListener("abort",Pe))}return $.target=null,xe&&(xe.taskData=null),Pt&&(Te.once=!0),!be&&"boolean"==typeof we.options||(we.options=Te),we.target=N,we.capture=pt,we.eventName=A,J&&(we.originalDelegate=U),R?Ge.unshift(we):Ge.push(we),L?N:void 0}};return v[a]=_(D,M,ie,B,Y),ne&&(v[k]=_(ne,H,function(i){return ne.call($.target,$.eventName,i.invoke,$.options)},B,Y,!0)),v[d]=function(){const i=this||t;let f=arguments[0];E&&E.transferEventName&&(f=E.transferEventName(f));const T=arguments[2],S=!!T&&("boolean"==typeof T||T.capture),L=arguments[1];if(!L)return I.apply(this,arguments);if(te&&!te(I,L,i,arguments))return;const R=he[f];let N;R&&(N=R[S?pe:fe]);const A=N&&i[N];if(A)for(let U=0;U<A.length;U++){const J=A[U];if(nt(J,L)){A.splice(U,1),J.isRemoved=!0,0!==A.length||(J.allRemoved=!0,i[N]=null,S||"string"!=typeof f)||(i[Se+"ON_PROPERTY"+f]=null);const ae=J.data;return ae?.removeAbortListener&&(ae.removeAbortListener(),ae.removeAbortListener=null),J.zone.cancelTask(J),Y?i:void 0}}return I.apply(this,arguments)},v[p]=function(){const i=this||t;let f=arguments[0];E&&E.transferEventName&&(f=E.transferEventName(f));const T=[],S=b(i,K?K(f):f);for(let L=0;L<S.length;L++){const R=S[L];T.push(R.originalDelegate?R.originalDelegate:R.callback)}return T},v[y]=function(){const i=this||t;let f=arguments[0];if(f){E&&E.transferEventName&&(f=E.transferEventName(f));const T=he[f];if(T){const R=i[T[fe]],N=i[T[pe]];if(R){const A=R.slice();for(let U=0;U<A.length;U++){const J=A[U];this[d].call(this,f,J.originalDelegate?J.originalDelegate:J.callback,J.options)}}if(N){const A=N.slice();for(let U=0;U<A.length;U++){const J=A[U];this[d].call(this,f,J.originalDelegate?J.originalDelegate:J.callback,J.options)}}}}else{const T=Object.keys(i);for(let S=0;S<T.length;S++){const R=c.exec(T[S]);let N=R&&R[1];N&&"removeListener"!==N&&this[y].call(this,N)}this[y].call(this,"removeListener")}if(Y)return this},me(v[a],D),me(v[d],I),de&&me(v[y],de),j&&me(v[p],j),!0}let oe=[];for(let C=0;C<l.length;C++)oe[C]=ke(l[C],n);return oe}function b(t,r){if(!r){const d=[];for(let p in t){const y=c.exec(p);let w=y&&y[1];if(w&&(!r||w===r)){const M=t[p];if(M)for(let k=0;k<M.length;k++)d.push(M[k])}}return d}let l=he[r];l||(h(r),l=he[r]);const n=t[l[fe]],a=t[l[pe]];return n?a?n.concat(a):n.slice():a?a.slice():[]}function ue(t,r){const l=t.Event;l&&l.prototype&&r.patchMethod(l.prototype,"stopImmediatePropagation",n=>function(a,d){a[u]=!0,n&&n.apply(a,d)})}const G=z("zoneTask");function Q(t,r,l,n){let a=null,d=null;l+=n;const p={};function y(M){const k=M.data;return k.args[0]=function(){return M.invoke.apply(this,arguments)},k.handleId=a.apply(t,k.args),M}function w(M){return d.call(t,M.data.handleId)}a=ye(t,r+=n,M=>function(k,H){if("function"==typeof H[0]){const O={isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?H[1]||0:void 0,args:H},V=H[0];H[0]=function(){try{return V.apply(this,arguments)}finally{O.isPeriodic||("number"==typeof O.handleId?delete p[O.handleId]:O.handleId&&(O.handleId[G]=null))}};const ee=He(r,H[0],O,y,w);if(!ee)return ee;const F=ee.data.handleId;return"number"==typeof F?p[F]=ee:F&&(F[G]=ee),F&&F.ref&&F.unref&&"function"==typeof F.ref&&"function"==typeof F.unref&&(ee.ref=F.ref.bind(F),ee.unref=F.unref.bind(F)),"number"==typeof F||F?F:ee}return M.apply(t,H)}),d=ye(t,l,M=>function(k,H){const O=H[0];let V;"number"==typeof O?V=p[O]:(V=O&&O[G],V||(V=O)),V&&"string"==typeof V.type?"notScheduled"!==V.state&&(V.cancelFn&&V.data.isPeriodic||0===V.runCount)&&("number"==typeof O?delete p[O]:O&&(O[G]=null),V.zone.cancelTask(V)):M.apply(t,H)})}function ze(t,r,l){if(!l||0===l.length)return r;const n=l.filter(d=>d.target===t);if(!n||0===n.length)return r;const a=n[0].ignoreProperties;return r.filter(d=>-1===a.indexOf(d))}function _e(t,r,l,n){t&&it(t,ze(t,r,l),n)}function Ce(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function mt(t,r,l,n,a){const d=Zone.__symbol__(n);if(r[d])return;const p=r[d]=r[n];r[n]=function(y,w,M){return w&&w.prototype&&a.forEach(function(k){const H=`${l}.${n}::`+k,O=w.prototype;try{if(O.hasOwnProperty(k)){const V=t.ObjectGetOwnPropertyDescriptor(O,k);V&&V.value?(V.value=t.wrapWithCurrentZone(V.value,H),t._redefineProperty(w.prototype,k,V)):O[k]&&(O[k]=t.wrapWithCurrentZone(O[k],H))}else O[k]&&(O[k]=t.wrapWithCurrentZone(O[k],H))}catch{}}),p.call(r,y,w,M)},t.attachOriginToPatched(r[n],p)}const wt=function Ze(){const t=globalThis,r=!0===t[le("forceDuplicateZoneCheck")];if(t.Zone&&(r||"function"!=typeof t.Zone.__symbol__))throw new Error("Zone already loaded.");return t.Zone??=function Re(){const t=ce.performance;function r(Z){t&&t.mark&&t.mark(Z)}function l(Z,m){t&&t.measure&&t.measure(Z,m)}r("Zone");let n=(()=>{class Z{static#e=this.__symbol__=le;static assertZonePatched(){if(ce.Promise!==$.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=Z.current;for(;e.parent;)e=e.parent;return e}static get current(){return I.zone}static get currentTask(){return j}static __load_patch(e,s,P=!1){if($.hasOwnProperty(e)){const x=!0===ce[le("forceDuplicateZoneCheck")];if(!P&&x)throw Error("Already loaded patch: "+e)}else if(!ce["__Zone_disable_"+e]){const x="Zone:"+e;r(x),$[e]=s(ce,Z,D),l(x,x)}}get parent(){return this._parent}get name(){return this._name}constructor(e,s){this._parent=e,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new d(this,this._parent&&this._parent._zoneDelegate,s)}get(e){const s=this.getZoneWith(e);if(s)return s._properties[e]}getZoneWith(e){let s=this;for(;s;){if(s._properties.hasOwnProperty(e))return s;s=s._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,s){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const P=this._zoneDelegate.intercept(this,e,s),x=this;return function(){return x.runGuarded(P,this,arguments,s)}}run(e,s,P,x){I={parent:I,zone:this};try{return this._zoneDelegate.invoke(this,e,s,P,x)}finally{I=I.parent}}runGuarded(e,s=null,P,x){I={parent:I,zone:this};try{try{return this._zoneDelegate.invoke(this,e,s,P,x)}catch(ie){if(this._zoneDelegate.handleError(this,ie))throw ie}}finally{I=I.parent}}runTask(e,s,P){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||ke).name+"; Execution: "+this.name+")");if(e.state===oe&&(e.type===K||e.type===v))return;const x=e.state!=q;x&&e._transitionTo(q,E),e.runCount++;const ie=j;j=e,I={parent:I,zone:this};try{e.type==v&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,s,P)}catch(B){if(this._zoneDelegate.handleError(this,B))throw B}}finally{e.state!==oe&&e.state!==se&&(e.type==K||e.data&&e.data.isPeriodic?x&&e._transitionTo(E,q):(e.runCount=0,this._updateTaskCount(e,-1),x&&e._transitionTo(oe,q,oe))),I=I.parent,j=ie}}scheduleTask(e){if(e.zone&&e.zone!==this){let P=this;for(;P;){if(P===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);P=P.parent}}e._transitionTo(C,oe);const s=[];e._zoneDelegates=s,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(P){throw e._transitionTo(se,C,oe),this._zoneDelegate.handleError(this,P),P}return e._zoneDelegates===s&&this._updateTaskCount(e,1),e.state==C&&e._transitionTo(E,C),e}scheduleMicroTask(e,s,P,x){return this.scheduleTask(new p(Y,e,s,P,x,void 0))}scheduleMacroTask(e,s,P,x,ie){return this.scheduleTask(new p(v,e,s,P,x,ie))}scheduleEventTask(e,s,P,x,ie){return this.scheduleTask(new p(K,e,s,P,x,ie))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||ke).name+"; Execution: "+this.name+")");if(e.state===E||e.state===q){e._transitionTo(te,E,q);try{this._zoneDelegate.cancelTask(this,e)}catch(s){throw e._transitionTo(se,te),this._zoneDelegate.handleError(this,s),s}return this._updateTaskCount(e,-1),e._transitionTo(oe,te),e.runCount=0,e}}_updateTaskCount(e,s){const P=e._zoneDelegates;-1==s&&(e._zoneDelegates=null);for(let x=0;x<P.length;x++)P[x]._updateTaskCount(e.type,s)}}return Z})();const a={name:"",onHasTask:(Z,m,e,s)=>Z.hasTask(e,s),onScheduleTask:(Z,m,e,s)=>Z.scheduleTask(e,s),onInvokeTask:(Z,m,e,s,P,x)=>Z.invokeTask(e,s,P,x),onCancelTask:(Z,m,e,s)=>Z.cancelTask(e,s)};class d{get zone(){return this._zone}constructor(m,e,s){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=m,this._parentDelegate=e,this._forkZS=s&&(s&&s.onFork?s:e._forkZS),this._forkDlgt=s&&(s.onFork?e:e._forkDlgt),this._forkCurrZone=s&&(s.onFork?this._zone:e._forkCurrZone),this._interceptZS=s&&(s.onIntercept?s:e._interceptZS),this._interceptDlgt=s&&(s.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=s&&(s.onIntercept?this._zone:e._interceptCurrZone),this._invokeZS=s&&(s.onInvoke?s:e._invokeZS),this._invokeDlgt=s&&(s.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=s&&(s.onInvoke?this._zone:e._invokeCurrZone),this._handleErrorZS=s&&(s.onHandleError?s:e._handleErrorZS),this._handleErrorDlgt=s&&(s.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=s&&(s.onHandleError?this._zone:e._handleErrorCurrZone),this._scheduleTaskZS=s&&(s.onScheduleTask?s:e._scheduleTaskZS),this._scheduleTaskDlgt=s&&(s.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=s&&(s.onScheduleTask?this._zone:e._scheduleTaskCurrZone),this._invokeTaskZS=s&&(s.onInvokeTask?s:e._invokeTaskZS),this._invokeTaskDlgt=s&&(s.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=s&&(s.onInvokeTask?this._zone:e._invokeTaskCurrZone),this._cancelTaskZS=s&&(s.onCancelTask?s:e._cancelTaskZS),this._cancelTaskDlgt=s&&(s.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=s&&(s.onCancelTask?this._zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const P=s&&s.onHasTask;(P||e&&e._hasTaskZS)&&(this._hasTaskZS=P?s:a,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,s.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this._zone),s.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this._zone),s.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this._zone))}fork(m,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,e):new n(m,e)}intercept(m,e,s){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,e,s):e}invoke(m,e,s,P,x){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,e,s,P,x):e.apply(s,P)}handleError(m,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,e)}scheduleTask(m,e){let s=e;if(this._scheduleTaskZS)this._hasTaskZS&&s._zoneDelegates.push(this._hasTaskDlgtOwner),s=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,e),s||(s=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=Y)throw new Error("Task is missing scheduleFn.");ee(e)}return s}invokeTask(m,e,s,P){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,e,s,P):e.callback.apply(s,P)}cancelTask(m,e){let s;if(this._cancelTaskZS)s=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");s=e.cancelFn(e)}return s}hasTask(m,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,e)}catch(s){this.handleError(m,s)}}_updateTaskCount(m,e){const s=this._taskCounts,P=s[m],x=s[m]=P+e;if(x<0)throw new Error("More tasks executed then were scheduled.");0!=P&&0!=x||this.hasTask(this._zone,{microTask:s.microTask>0,macroTask:s.macroTask>0,eventTask:s.eventTask>0,change:m})}}class p{constructor(m,e,s,P,x,ie){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=m,this.source=e,this.data=P,this.scheduleFn=x,this.cancelFn=ie,!s)throw new Error("callback is not defined");this.callback=s;const B=this;this.invoke=m===K&&P&&P.useG?p.invokeTask:function(){return p.invokeTask.call(ce,B,this,arguments)}}static invokeTask(m,e,s){m||(m=this),de++;try{return m.runCount++,m.zone.runTask(m,e,s)}finally{1==de&&F(),de--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(oe,C)}_transitionTo(m,e,s){if(this._state!==e&&this._state!==s)throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${e}'${s?" or '"+s+"'":""}, was '${this._state}'.`);this._state=m,m==oe&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const y=le("setTimeout"),w=le("Promise"),M=le("then");let O,k=[],H=!1;function V(Z){if(O||ce[w]&&(O=ce[w].resolve(0)),O){let m=O[M];m||(m=O.then),m.call(O,Z)}else ce[y](Z,0)}function ee(Z){0===de&&0===k.length&&V(F),Z&&k.push(Z)}function F(){if(!H){for(H=!0;k.length;){const Z=k;k=[];for(let m=0;m<Z.length;m++){const e=Z[m];try{e.zone.runTask(e,null,null)}catch(s){D.onUnhandledError(s)}}}D.microtaskDrainDone(),H=!1}}const ke={name:"NO ZONE"},oe="notScheduled",C="scheduling",E="scheduled",q="running",te="canceling",se="unknown",Y="microTask",v="macroTask",K="eventTask",$={},D={symbol:le,currentZoneFrame:()=>I,onUnhandledError:ne,microtaskDrainDone:ne,scheduleMicroTask:ee,showUncaughtError:()=>!n[le("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:ne,patchMethod:()=>ne,bindArguments:()=>[],patchThen:()=>ne,patchMacroTask:()=>ne,patchEventPrototype:()=>ne,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>ne,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>ne,wrapWithCurrentZone:()=>ne,filterProperties:()=>[],attachOriginToPatched:()=>ne,_redefineProperty:()=>ne,patchCallbacks:()=>ne,nativeScheduleMicroTask:V};let I={parent:null,zone:new n(null,null)},j=null,de=0;function ne(){}return l("Zone","Zone"),n}(),t.Zone}();(function Ot(t){(function Et(t){t.__load_patch("ZoneAwarePromise",(r,l,n)=>{const a=Object.getOwnPropertyDescriptor,d=Object.defineProperty,y=n.symbol,w=[],M=!1!==r[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],k=y("Promise"),H=y("then"),O="__creationTrace__";n.onUnhandledError=_=>{if(n.showUncaughtError()){const i=_&&_.rejection;i?console.error("Unhandled Promise rejection:",i instanceof Error?i.message:i,"; Zone:",_.zone.name,"; Task:",_.task&&_.task.source,"; Value:",i,i instanceof Error?i.stack:void 0):console.error(_)}},n.microtaskDrainDone=()=>{for(;w.length;){const _=w.shift();try{_.zone.runGuarded(()=>{throw _.throwOriginal?_.rejection:_})}catch(i){ee(i)}}};const V=y("unhandledPromiseRejectionHandler");function ee(_){n.onUnhandledError(_);try{const i=l[V];"function"==typeof i&&i.call(this,_)}catch{}}function F(_){return _&&_.then}function ke(_){return _}function oe(_){return B.reject(_)}const C=y("state"),E=y("value"),q=y("finally"),te=y("parentPromiseValue"),se=y("parentPromiseState"),Y="Promise.then",v=null,K=!0,$=!1,D=0;function I(_,i){return f=>{try{Z(_,i,f)}catch(T){Z(_,!1,T)}}}const j=function(){let _=!1;return function(f){return function(){_||(_=!0,f.apply(null,arguments))}}},de="Promise resolved with itself",ne=y("currentTaskTrace");function Z(_,i,f){const T=j();if(_===f)throw new TypeError(de);if(_[C]===v){let S=null;try{("object"==typeof f||"function"==typeof f)&&(S=f&&f.then)}catch(L){return T(()=>{Z(_,!1,L)})(),_}if(i!==$&&f instanceof B&&f.hasOwnProperty(C)&&f.hasOwnProperty(E)&&f[C]!==v)e(f),Z(_,f[C],f[E]);else if(i!==$&&"function"==typeof S)try{S.call(f,T(I(_,i)),T(I(_,!1)))}catch(L){T(()=>{Z(_,!1,L)})()}else{_[C]=i;const L=_[E];if(_[E]=f,_[q]===q&&i===K&&(_[C]=_[se],_[E]=_[te]),i===$&&f instanceof Error){const R=l.currentTask&&l.currentTask.data&&l.currentTask.data[O];R&&d(f,ne,{configurable:!0,enumerable:!1,writable:!0,value:R})}for(let R=0;R<L.length;)s(_,L[R++],L[R++],L[R++],L[R++]);if(0==L.length&&i==$){_[C]=D;let R=f;try{throw new Error("Uncaught (in promise): "+function p(_){return _&&_.toString===Object.prototype.toString?(_.constructor&&_.constructor.name||"")+": "+JSON.stringify(_):_?_.toString():Object.prototype.toString.call(_)}(f)+(f&&f.stack?"\n"+f.stack:""))}catch(N){R=N}M&&(R.throwOriginal=!0),R.rejection=f,R.promise=_,R.zone=l.current,R.task=l.currentTask,w.push(R),n.scheduleMicroTask()}}}return _}const m=y("rejectionHandledHandler");function e(_){if(_[C]===D){try{const i=l[m];i&&"function"==typeof i&&i.call(this,{rejection:_[E],promise:_})}catch{}_[C]=$;for(let i=0;i<w.length;i++)_===w[i].promise&&w.splice(i,1)}}function s(_,i,f,T,S){e(_);const L=_[C],R=L?"function"==typeof T?T:ke:"function"==typeof S?S:oe;i.scheduleMicroTask(Y,()=>{try{const N=_[E],A=!!f&&q===f[q];A&&(f[te]=N,f[se]=L);const U=i.run(R,void 0,A&&R!==oe&&R!==ke?[]:[N]);Z(f,!0,U)}catch(N){Z(f,!1,N)}},f)}const x=function(){},ie=r.AggregateError;class B{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(i){return i instanceof B?i:Z(new this(null),K,i)}static reject(i){return Z(new this(null),$,i)}static withResolvers(){const i={};return i.promise=new B((f,T)=>{i.resolve=f,i.reject=T}),i}static any(i){if(!i||"function"!=typeof i[Symbol.iterator])return Promise.reject(new ie([],"All promises were rejected"));const f=[];let T=0;try{for(let R of i)T++,f.push(B.resolve(R))}catch{return Promise.reject(new ie([],"All promises were rejected"))}if(0===T)return Promise.reject(new ie([],"All promises were rejected"));let S=!1;const L=[];return new B((R,N)=>{for(let A=0;A<f.length;A++)f[A].then(U=>{S||(S=!0,R(U))},U=>{L.push(U),T--,0===T&&(S=!0,N(new ie(L,"All promises were rejected")))})})}static race(i){let f,T,S=new this((N,A)=>{f=N,T=A});function L(N){f(N)}function R(N){T(N)}for(let N of i)F(N)||(N=this.resolve(N)),N.then(L,R);return S}static all(i){return B.allWithCallback(i)}static allSettled(i){return(this&&this.prototype instanceof B?this:B).allWithCallback(i,{thenCallback:T=>({status:"fulfilled",value:T}),errorCallback:T=>({status:"rejected",reason:T})})}static allWithCallback(i,f){let T,S,L=new this((U,J)=>{T=U,S=J}),R=2,N=0;const A=[];for(let U of i){F(U)||(U=this.resolve(U));const J=N;try{U.then(ae=>{A[J]=f?f.thenCallback(ae):ae,R--,0===R&&T(A)},ae=>{f?(A[J]=f.errorCallback(ae),R--,0===R&&T(A)):S(ae)})}catch(ae){S(ae)}R++,N++}return R-=2,0===R&&T(A),L}constructor(i){const f=this;if(!(f instanceof B))throw new Error("Must be an instanceof Promise.");f[C]=v,f[E]=[];try{const T=j();i&&i(T(I(f,K)),T(I(f,$)))}catch(T){Z(f,!1,T)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return B}then(i,f){let T=this.constructor?.[Symbol.species];(!T||"function"!=typeof T)&&(T=this.constructor||B);const S=new T(x),L=l.current;return this[C]==v?this[E].push(L,S,i,f):s(this,L,S,i,f),S}catch(i){return this.then(null,i)}finally(i){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=B);const T=new f(x);T[q]=q;const S=l.current;return this[C]==v?this[E].push(S,T,i,i):s(this,S,T,i,i),T}}B.resolve=B.resolve,B.reject=B.reject,B.race=B.race,B.all=B.all;const at=r[k]=r.Promise;r.Promise=B;const nt=y("thenPatched");function je(_){const i=_.prototype,f=a(i,"then");if(f&&(!1===f.writable||!f.configurable))return;const T=i.then;i[H]=T,_.prototype.then=function(S,L){return new B((N,A)=>{T.call(this,N,A)}).then(S,L)},_[nt]=!0}return n.patchThen=je,at&&(je(at),ye(r,"fetch",_=>function lt(_){return function(i,f){let T=_.apply(i,f);if(T instanceof B)return T;let S=T.constructor;return S[nt]||je(S),T}}(_))),Promise[l.__symbol__("uncaughtPromiseErrors")]=w,B})})(t),function gt(t){t.__load_patch("toString",r=>{const l=Function.prototype.toString,n=z("OriginalDelegate"),a=z("Promise"),d=z("Error"),p=function(){if("function"==typeof this){const k=this[n];if(k)return"function"==typeof k?l.call(k):Object.prototype.toString.call(k);if(this===Promise){const H=r[a];if(H)return l.call(H)}if(this===Error){const H=r[d];if(H)return l.call(H)}}return l.call(this)};p[n]=l,Function.prototype.toString=p;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}})}(t),function Nt(t){t.__load_patch("util",(r,l,n)=>{const a=Ce(r);n.patchOnProperties=it,n.patchMethod=ye,n.bindArguments=Oe,n.patchMacroTask=vt;const d=l.__symbol__("BLACK_LISTED_EVENTS"),p=l.__symbol__("UNPATCHED_EVENTS");r[p]&&(r[d]=r[p]),r[d]&&(l[d]=l[p]=r[d]),n.patchEventPrototype=ue,n.patchEventTarget=g,n.isIEOrEdge=_t,n.ObjectDefineProperty=Fe,n.ObjectGetOwnPropertyDescriptor=Ee,n.ObjectCreate=kt,n.ArraySlice=ft,n.patchClass=Me,n.wrapWithCurrentZone=$e,n.filterProperties=ze,n.attachOriginToPatched=me,n._redefineProperty=Object.defineProperty,n.patchCallbacks=mt,n.getGlobalObjects=()=>({globalSources:o,zoneSymbolEventNames:he,eventNames:a,isBrowser:Qe,isMix:ot,isNode:Be,TRUE_STR:pe,FALSE_STR:fe,ZONE_SYMBOL_PREFIX:Se,ADD_EVENT_LISTENER_STR:Xe,REMOVE_EVENT_LISTENER_STR:qe})})}(t)})(wt),function Ae(t){t.__load_patch("legacy",r=>{const l=r[t.__symbol__("legacyPatch")];l&&l()}),t.__load_patch("timers",r=>{const l="set",n="clear";Q(r,l,n,"Timeout"),Q(r,l,n,"Interval"),Q(r,l,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{Q(r,"request","cancel","AnimationFrame"),Q(r,"mozRequest","mozCancel","AnimationFrame"),Q(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,l)=>{const n=["alert","prompt","confirm"];for(let a=0;a<n.length;a++)ye(r,n[a],(p,y,w)=>function(M,k){return l.current.run(p,r,k,w)})}),t.__load_patch("EventTarget",(r,l,n)=>{(function Ue(t,r){r.patchEventPrototype(t,r)})(r,n),function Le(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:l,zoneSymbolEventNames:n,TRUE_STR:a,FALSE_STR:d,ZONE_SYMBOL_PREFIX:p}=r.getGlobalObjects();for(let w=0;w<l.length;w++){const M=l[w],O=p+(M+d),V=p+(M+a);n[M]={},n[M][d]=O,n[M][a]=V}const y=t.EventTarget;y&&y.prototype&&r.patchEventTarget(t,r,[y&&y.prototype])}(r,n);const a=r.XMLHttpRequestEventTarget;a&&a.prototype&&n.patchEventTarget(r,n,[a.prototype])}),t.__load_patch("MutationObserver",(r,l,n)=>{Me("MutationObserver"),Me("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,l,n)=>{Me("IntersectionObserver")}),t.__load_patch("FileReader",(r,l,n)=>{Me("FileReader")}),t.__load_patch("on_property",(r,l,n)=>{!function re(t,r){if(Be&&!ot||Zone[t.symbol("patchEvents")])return;const l=r.__Zone_ignore_on_properties;let n=[];if(Qe){const a=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const d=function bt(){try{const t=ve.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];_e(a,Ce(a),l&&l.concat(d),We(a))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<n.length;a++){const d=r[n[a]];d&&d.prototype&&_e(d.prototype,Ce(d.prototype),l)}}(n,r)}),t.__load_patch("customElements",(r,l,n)=>{!function Ie(t,r){const{isBrowser:l,isMix:n}=r.getGlobalObjects();(l||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,l)=>{!function M(k){const H=k.XMLHttpRequest;if(!H)return;const O=H.prototype;let ee=O[Ye],F=O[Ke];if(!ee){const D=k.XMLHttpRequestEventTarget;if(D){const I=D.prototype;ee=I[Ye],F=I[Ke]}}const ke="readystatechange",oe="scheduled";function C(D){const I=D.data,j=I.target;j[p]=!1,j[w]=!1;const de=j[d];ee||(ee=j[Ye],F=j[Ke]),de&&F.call(j,ke,de);const ne=j[d]=()=>{if(j.readyState===j.DONE)if(!I.aborted&&j[p]&&D.state===oe){const m=j[l.__symbol__("loadfalse")];if(0!==j.status&&m&&m.length>0){const e=D.invoke;D.invoke=function(){const s=j[l.__symbol__("loadfalse")];for(let P=0;P<s.length;P++)s[P]===D&&s.splice(P,1);!I.aborted&&D.state===oe&&e.call(D)},m.push(D)}else D.invoke()}else!I.aborted&&!1===j[p]&&(j[w]=!0)};return ee.call(j,ke,ne),j[n]||(j[n]=D),K.apply(j,I.args),j[p]=!0,D}function E(){}function q(D){const I=D.data;return I.aborted=!0,$.apply(I.target,I.args)}const te=ye(O,"open",()=>function(D,I){return D[a]=0==I[2],D[y]=I[1],te.apply(D,I)}),Y=z("fetchTaskAborting"),v=z("fetchTaskScheduling"),K=ye(O,"send",()=>function(D,I){if(!0===l.current[v]||D[a])return K.apply(D,I);{const j={target:D,url:D[y],isPeriodic:!1,args:I,aborted:!1},de=He("XMLHttpRequest.send",E,j,C,q);D&&!0===D[w]&&!j.aborted&&de.state===oe&&de.invoke()}}),$=ye(O,"abort",()=>function(D,I){const j=function V(D){return D[n]}(D);if(j&&"string"==typeof j.type){if(null==j.cancelFn||j.data&&j.data.aborted)return;j.zone.cancelTask(j)}else if(!0===l.current[Y])return $.apply(D,I)})}(r);const n=z("xhrTask"),a=z("xhrSync"),d=z("xhrListener"),p=z("xhrScheduled"),y=z("xhrURL"),w=z("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function dt(t,r){const l=t.constructor.name;for(let n=0;n<r.length;n++){const a=r[n],d=t[a];if(d){if(!Je(Ee(t,a)))continue;t[a]=(y=>{const w=function(){return y.apply(this,Oe(arguments,l+"."+a))};return me(w,y),w})(d)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,l)=>{function n(a){return function(d){b(r,a).forEach(y=>{const w=r.PromiseRejectionEvent;if(w){const M=new w(a,{promise:d.promise,reason:d.rejection});y.invoke(M)}})}}r.PromiseRejectionEvent&&(l[z("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),l[z("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,l,n)=>{!function W(t,r){r.patchMethod(t,"queueMicrotask",l=>function(n,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}(r,n)})}(wt)},4050:(ce,le,Re)=>{Re(7617),Re(2260)},7617:()=>{const ce=":";Error;const be=function(o,...c){if(be.translate){const h=be.translate(o,c);o=h[0],c=h[1]}let u=he(o[0],o.raw[0]);for(let h=1;h<o.length;h++)u+=c[h-1]+he(o[h],o.raw[h]);return u},Tt=":";function he(o,c){return c.charAt(0)===Tt?o.substring(function et(o,c){for(let u=1,h=1;u<o.length;u++,h++)if("\\"===c[h])h++;else if(o[u]===ce)return u;throw new Error(`Unterminated $localize metadata block in "${c}".`)}(o,c)+1):o}globalThis.$localize=be}},ce=>{ce(ce.s=4050)}]);