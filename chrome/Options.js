(function(){var i=true,j=null,k=false,n,q=this;function r(){}
function s(a){var c=typeof a;if(c=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if(b=="[object Window]")return"object";if(b=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(b=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(c=="function"&&typeof a.call=="undefined")return"object";return c}function t(a){return s(a)=="array"}function aa(a){var c=s(a);return c=="array"||c=="object"&&typeof a.length=="number"}function u(a){return typeof a=="string"}function v(a){return s(a)=="function"}function ba(a){a=s(a);return a=="object"||a=="array"||a=="function"}function x(a){return a[ca]||(a[ca]=++da)}var ca="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),da=0;
function y(a,c){function b(){}b.prototype=c.prototype;a.m=c.prototype;a.prototype=new b};function ea(a,c){for(var b in a)c.call(void 0,a[b],b,a)}var fa=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];function ga(a){for(var c,b,d=1;d<arguments.length;d++){b=arguments[d];for(c in b)a[c]=b[c];for(var f=0;f<fa.length;f++){c=fa[f];if(Object.prototype.hasOwnProperty.call(b,c))a[c]=b[c]}}};function ha(a){if(!ia.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(ja,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(ka,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(la,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(ma,"&quot;");return a}var ja=/&/g,ka=/</g,la=/>/g,ma=/\"/g,ia=/[&<>\"]/;
function na(a,c){for(var b=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=String(c).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(d.length,f.length),g=0;b==0&&g<e;g++){var h=d[g]||"",m=f[g]||"",o=RegExp("(\\d*)(\\D*)","g"),D=RegExp("(\\d*)(\\D*)","g");do{var p=o.exec(h)||["","",""],l=D.exec(m)||["","",""];if(p[0].length==0&&l[0].length==0)break;b=oa(p[1].length==0?0:parseInt(p[1],10),l[1].length==0?0:parseInt(l[1],10))||oa(p[2].length==0,l[2].length==0)||oa(p[2],l[2])}while(b==
0)}return b}function oa(a,c){if(a<c)return-1;else if(a>c)return 1;return 0};var z,pa,A,qa;function ra(){return q.navigator?q.navigator.userAgent:j}qa=A=pa=z=k;var B;if(B=ra()){var sa=q.navigator;z=B.indexOf("Opera")==0;pa=!z&&B.indexOf("MSIE")!=-1;A=!z&&B.indexOf("WebKit")!=-1;qa=!z&&!A&&sa.product=="Gecko"}var C=pa,E=qa,ta=A,ua=q.navigator,va=(ua&&ua.platform||"").indexOf("Mac")!=-1,wa;
a:{var F="",G;if(z&&q.opera){var xa=q.opera.version;F=typeof xa=="function"?xa():xa}else{if(E)G=/rv\:([^\);]+)(\)|;)/;else if(C)G=/MSIE\s+([^\);]+)(\)|;)/;else if(ta)G=/WebKit\/(\S+)/;if(G){var ya=G.exec(ra());F=ya?ya[1]:""}}if(C){var za,Aa=q.document;za=Aa?Aa.documentMode:undefined;if(za>parseFloat(F)){wa=String(za);break a}}wa=F}var Ba={};function H(a){return Ba[a]||(Ba[a]=na(wa,a)>=0)};var I=Array.prototype,J=I.indexOf?function(a,c,b){return I.indexOf.call(a,c,b)}:function(a,c,b){b=b==j?0:b<0?Math.max(0,a.length+b):b;if(u(a)){if(!u(c)||c.length!=1)return-1;return a.indexOf(c,b)}for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},K=I.forEach?function(a,c,b){I.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,f=u(a)?a.split(""):a,e=0;e<d;e++)e in f&&c.call(b,f[e],e,a)},Ca=I.map?function(a,c,b){return I.map.call(a,c,b)}:function(a,c,b){for(var d=a.length,f=Array(d),e=
u(a)?a.split(""):a,g=0;g<d;g++)if(g in e)f[g]=c.call(b,e[g],g,a);return f};function Da(){return I.concat.apply(I,arguments)}function Ea(a){if(t(a))return Da(a);else{for(var c=[],b=0,d=a.length;b<d;b++)c[b]=a[b];return c}}function Fa(a,c,b){return arguments.length<=2?I.slice.call(a,c):I.slice.call(a,c,b)};var Ga;!C||H("9");var Ha=C&&!H("8");function L(){if(Ia)Ja[x(this)]=this}var Ia=k,Ja={};L.prototype.s=k;L.prototype.i=function(){if(!this.s){this.s=i;this.d();if(Ia){var a=x(this);if(!Ja.hasOwnProperty(a))throw Error(this+" did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");delete Ja[a]}}};L.prototype.d=function(){};function M(a,c){L.call(this);this.type=a;this.currentTarget=this.target=c}y(M,L);M.prototype.d=function(){delete this.type;delete this.target;delete this.currentTarget};M.prototype.p=k;M.prototype.A=i;M.prototype.preventDefault=function(){this.A=k};var Ka=new Function("a","return a");function N(a,c){a&&this.j(a,c)}y(N,M);n=N.prototype;n.target=j;n.relatedTarget=j;n.offsetX=0;n.offsetY=0;n.clientX=0;n.clientY=0;n.screenX=0;n.screenY=0;n.button=0;n.keyCode=0;n.charCode=0;n.ctrlKey=k;n.altKey=k;n.shiftKey=k;n.metaKey=k;n.L=k;n.n=j;
n.j=function(a,c){var b=this.type=a.type;M.call(this,b);this.target=a.target||a.srcElement;this.currentTarget=c;var d=a.relatedTarget;if(d){if(E)try{Ka(d.nodeName)}catch(f){d=j}}else if(b=="mouseover")d=a.fromElement;else if(b=="mouseout")d=a.toElement;this.relatedTarget=d;this.offsetX=a.offsetX!==undefined?a.offsetX:a.layerX;this.offsetY=a.offsetY!==undefined?a.offsetY:a.layerY;this.clientX=a.clientX!==undefined?a.clientX:a.pageX;this.clientY=a.clientY!==undefined?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(b=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.L=va?a.metaKey:a.ctrlKey;this.state=a.state;this.n=a;delete this.A;delete this.p};
n.preventDefault=function(){N.m.preventDefault.call(this);var a=this.n;if(a.preventDefault)a.preventDefault();else{a.returnValue=k;if(Ha)try{if(a.ctrlKey||a.keyCode>=112&&a.keyCode<=123)a.keyCode=-1}catch(c){}}};n.d=function(){N.m.d.call(this);this.relatedTarget=this.currentTarget=this.target=this.n=j};function La(){}var Ma=0;n=La.prototype;n.key=0;n.g=k;n.q=k;n.j=function(a,c,b,d,f,e){if(v(a))this.u=i;else if(a&&a.handleEvent&&v(a.handleEvent))this.u=k;else throw Error("Invalid listener argument");this.k=a;this.z=c;this.src=b;this.type=d;this.capture=!!f;this.t=e;this.q=k;this.key=++Ma;this.g=k};n.handleEvent=function(a){if(this.u)return this.k.call(this.t||this.src,a);return this.k.handleEvent.call(this.k,a)};var Na;var Oa=(Na="ScriptEngine"in q&&q.ScriptEngine()=="JScript")?q.ScriptEngineMajorVersion()+"."+q.ScriptEngineMinorVersion()+"."+q.ScriptEngineBuildVersion():"0";function O(a,c){L.call(this);this.v=c;this.e=[];if(a>this.v)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(var b=0;b<a;b++)this.e.push(this.a?this.a():{})}y(O,L);O.prototype.a=j;O.prototype.r=j;function P(a){if(a.e.length)return a.e.pop();return a.a?a.a():{}}function Q(a,c){a.e.length<a.v?a.e.push(c):Pa(a,c)}function Pa(a,c){if(a.r)a.r(c);else if(ba(c))if(v(c.i))c.i();else for(var b in c)delete c[b]}
O.prototype.d=function(){O.m.d.call(this);for(var a=this.e;a.length;)Pa(this,a.pop());delete this.e};var Qa,Ra,R,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za;
(function(){function a(){return{c:0,f:0}}function c(){return[]}function b(){function l(w){return g.call(l.src,l.key,w)}return l}function d(){return new La}function f(){return new N}var e=Na&&!(na(Oa,"5.7")>=0),g;Ua=function(l){g=l};if(e){Qa=function(){return P(h)};Ra=function(l){Q(h,l)};R=function(){return P(m)};Sa=function(l){Q(m,l)};Ta=function(){return P(o)};Va=function(){Q(o,b())};Wa=function(){return P(D)};Xa=function(l){Q(D,l)};Ya=function(){return P(p)};Za=function(l){Q(p,l)};var h=new O(0,
600);h.a=a;var m=new O(0,600);m.a=c;var o=new O(0,600);o.a=b;var D=new O(0,600);D.a=d;var p=new O(0,600);p.a=f}else{Qa=a;Ra=r;R=c;Sa=r;Ta=b;Va=r;Wa=d;Xa=r;Ya=f;Za=r}})();var S={},T={},U={},$a={};
function ab(a,c,b,d,f){if(c)if(t(c)){for(var e=0;e<c.length;e++)ab(a,c[e],b,d,f);return j}else{d=!!d;var g=T;c in g||(g[c]=Qa());g=g[c];if(!(d in g)){g[d]=Qa();g.c++}g=g[d];var h=x(a),m;g.f++;if(g[h]){m=g[h];for(e=0;e<m.length;e++){g=m[e];if(g.k==b&&g.t==f){if(g.g)break;return m[e].key}}}else{m=g[h]=R();g.c++}e=Ta();e.src=a;g=Wa();g.j(b,e,a,c,d,f);b=g.key;e.key=b;m.push(g);S[b]=g;U[h]||(U[h]=R());U[h].push(g);if(a.addEventListener){if(a==q||!a.B)a.addEventListener(c,e,d)}else a.attachEvent(bb(c),e);
return b}else throw Error("Invalid event type");}function cb(a){if(S[a]){var c=S[a];if(!c.g){var b=c.src,d=c.type,f=c.z,e=c.capture;if(b.removeEventListener){if(b==q||!b.B)b.removeEventListener(d,f,e)}else b.detachEvent&&b.detachEvent(bb(d),f);b=x(b);f=T[d][e][b];if(U[b]){var g=U[b],h=J(g,c);h>=0&&I.splice.call(g,h,1);g.length==0&&delete U[b]}c.g=i;f.w=i;db(d,e,b,f);delete S[a]}}}
function db(a,c,b,d){if(!d.l)if(d.w){for(var f=0,e=0;f<d.length;f++)if(d[f].g){var g=d[f].z;g.src=j;Va(g);Xa(d[f])}else{if(f!=e)d[e]=d[f];e++}d.length=e;d.w=k;if(e==0){Sa(d);delete T[a][c][b];T[a][c].c--;if(T[a][c].c==0){Ra(T[a][c]);delete T[a][c];T[a].c--}if(T[a].c==0){Ra(T[a]);delete T[a]}}}}function bb(a){if(a in $a)return $a[a];return $a[a]="on"+a}
function eb(a,c,b,d,f){var e=1;c=x(c);if(a[c]){a.f--;a=a[c];if(a.l)a.l++;else a.l=1;try{for(var g=a.length,h=0;h<g;h++){var m=a[h];if(m&&!m.g)e&=fb(m,f)!==k}}finally{a.l--;db(b,d,c,a)}}return Boolean(e)}function fb(a,c){var b=a.handleEvent(c);a.q&&cb(a.key);return b}
Ua(function(a,c){if(!S[a])return i;var b=S[a],d=b.type,f=T;if(!(d in f))return i;f=f[d];var e,g;if(Ga===undefined)Ga=C&&!q.addEventListener;if(Ga){var h;if(!(h=c))a:{h="window.event".split(".");for(var m=q;e=h.shift();)if(m[e]!=j)m=m[e];else{h=j;break a}h=m}e=h;h=i in f;m=k in f;if(h){if(e.keyCode<0||e.returnValue!=undefined)return i;a:{var o=k;if(e.keyCode==0)try{e.keyCode=-1;break a}catch(D){o=i}if(o||e.returnValue==undefined)e.returnValue=i}}o=Ya();o.j(e,this);e=i;try{if(h){for(var p=R(),l=o.currentTarget;l;l=
l.parentNode)p.push(l);g=f[i];g.f=g.c;for(var w=p.length-1;!o.p&&w>=0&&g.f;w--){o.currentTarget=p[w];e&=eb(g,p[w],d,i,o)}if(m){g=f[k];g.f=g.c;for(w=0;!o.p&&w<p.length&&g.f;w++){o.currentTarget=p[w];e&=eb(g,p[w],d,k,o)}}}else e=fb(b,o)}finally{if(p){p.length=0;Sa(p)}o.i();Za(o)}return e}d=new N(c,this);try{e=fb(b,d)}finally{d.i()}return e});function V(a){L.call(this);this.D=a}y(V,L);var gb=new O(0,100),hb=[];function W(a,c,b,d){if(!t(b)){hb[0]=b;b=hb}for(var f=0;f<b.length;f++){var e=a,g=ab(c,b[f],d||a,k,a.D||a);if(e.b)e.b[g]=i;else if(e.h){e.b=P(gb);e.b[e.h]=i;e.h=j;e.b[g]=i}else e.h=g}return a}V.prototype.d=function(){V.m.d.call(this);if(this.b){for(var a in this.b){cb(a);delete this.b[a]}Q(gb,this.b);this.b=j}else this.h&&cb(this.h)};V.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function ib(a){a=String(a);var c;c=/^\s*$/.test(a)?k:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""));if(c)try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function jb(){}
function kb(a,c,b){switch(typeof c){case "string":lb(c,b);break;case "number":b.push(isFinite(c)&&!isNaN(c)?c:"null");break;case "boolean":b.push(c);break;case "undefined":b.push("null");break;case "object":if(c==j){b.push("null");break}if(t(c)){var d=c.length;b.push("[");for(var f="",e=0;e<d;e++){b.push(f);kb(a,c[e],b);f=","}b.push("]");break}b.push("{");d="";for(f in c)if(Object.prototype.hasOwnProperty.call(c,f)){e=c[f];if(typeof e!="function"){b.push(d);lb(f,b);b.push(":");kb(a,e,b);d=","}}b.push("}");
break;case "function":break;default:throw Error("Unknown type: "+typeof c);}}var mb={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},nb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function lb(a,c){c.push('"',a.replace(nb,function(b){if(b in mb)return mb[b];var d=b.charCodeAt(0),f="\\u";if(d<16)f+="000";else if(d<256)f+="00";else if(d<4096)f+="0";return mb[b]=f+d.toString(16)}),'"')};var ob=[{pattern:"[^#]+",subst:"http://docs.google.com/viewer?url=$0",conditions:[{type:0,regexp:"^https?://"},{type:0,regexp:"\\.(?:pdf|docx?|xlsx?|pptx?|pages|eps|ps|xps)(?:[?#]|$)"}]}],pb=[{pattern:"[^#]+",subst:"http://docs.google.com/viewer?url=$0",conditions:[{type:0,regexp:"^https?://"},{type:0,regexp:"\\.(?:ai|psd|tiff?|dxf|ttf)(?:[?#]|$)"}]}],qb=[{pattern:"([\\?&])hl=\\w+",subst:"$1hl={lang}",conditions:[{type:0,regexp:"^https?://maps.google.[^/]+/maps"},{type:2,regexp:"^https?://www.google.com/calendar"}]}];
function rb(a){var c=[];if(a.documents)c=c.concat(ob);if(a.images)c=c.concat(pb);if(a.maps){var b=qb[0];c.push({pattern:b.pattern,subst:b.subst.replace("{lang}",a.maps_lang||""),conditions:b.conditions})}return c};function sb(a){return(a=a.className)&&typeof a.split=="function"?a.split(/\s+/):[]}function tb(a){var c=sb(a),b;b=Fa(arguments,1);for(var d=0,f=0;f<b.length;f++)if(!(J(c,b[f])>=0)){c.push(b[f]);d++}b=d==b.length;a.className=c.join(" ");return b};var ub=!C||H("9");!E&&!C||C&&H("9")||E&&H("1.9.1");C&&H("9");function X(a){return u(a)?document.getElementById(a):a}function Y(a,c){var b=c||document;if(vb(b))b=b.querySelector("."+a);else{b=c||document;b=vb(b)?b.querySelectorAll("."+a):b.getElementsByClassName?b.getElementsByClassName(a):wb(document,"*",a,c);b=b[0]}return b||j}function vb(a){return a.querySelectorAll&&a.querySelector&&(!ta||document.compatMode=="CSS1Compat"||H("528"))}
function wb(a,c,b,d){a=d||a;c=c&&c!="*"?c.toUpperCase():"";if(vb(a)&&(c||b))return a.querySelectorAll(c+(b?"."+b:""));if(b&&a.getElementsByClassName){a=a.getElementsByClassName(b);if(c){d={};for(var f=0,e=0,g;g=a[e];e++)if(c==g.nodeName)d[f++]=g;d.length=f;return d}else return a}a=a.getElementsByTagName(c||"*");if(b){d={};for(e=f=0;g=a[e];e++){c=g.className;if(typeof c.split=="function"&&J(c.split(/\s+/),b)>=0)d[f++]=g}d.length=f;return d}else return a}
function xb(a,c){ea(c,function(b,d){if(d=="style")a.style.cssText=b;else if(d=="class")a.className=b;else if(d=="for")a.htmlFor=b;else if(d in yb)a.setAttribute(yb[d],b);else a[d]=b})}var yb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};
function Z(){var a=arguments,c=a[0],b=a[1];if(!ub&&b&&(b.name||b.type)){c=["<",c];b.name&&c.push(' name="',ha(b.name),'"');if(b.type){c.push(' type="',ha(b.type),'"');var d={};ga(d,b);b=d;delete b.type}c.push(">");c=c.join("")}c=document.createElement(c);if(b)if(u(b))c.className=b;else t(b)?tb.apply(j,[c].concat(b)):xb(c,b);a.length>2&&zb(document,c,a);return c}
function zb(a,c,b){function d(h){if(h)c.appendChild(u(h)?a.createTextNode(h):h)}for(var f=2;f<b.length;f++){var e=b[f];if(aa(e)&&!(ba(e)&&e.nodeType>0)){var g;a:{if(e&&typeof e.length=="number")if(ba(e)){g=typeof e.item=="function"||typeof e.item=="string";break a}else if(v(e)){g=typeof e.item=="function";break a}g=k}K(g?Ea(e):e,d)}else d(e)}}function Ab(a){for(var c;c=a.firstChild;)a.removeChild(c)}function Bb(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Cb(a,c,b){var d=c?c.toUpperCase():j;return Db(a,function(f){return(!d||f.nodeName==d)&&(!b||J(sb(f),b)>=0)})}function Db(a,c){for(var b=0;a;){if(c(a))return a;a=a.parentNode;b++}return j};function Eb(){var a=j;try{a=ib(localStorage.linktweak_settings)}catch(c){}if(!a)try{var b=ib(localStorage.rewriterules||""),d=[],f;if(aa(b))for(var e=0;e<b.length;++e)if((f=b[e])&&f.cond&&f.from)d[d.length]={pattern:f.from,subst:f.to||"",conditions:[{type:0,regexp:f.cond}]};a={version:1,presets:{},rules:d}}catch(g){}this.o=a||{};a=X("presets");b=X("rewrite-rules");d=X("add-rule");f=X("save");e=X("reset");this.C=new V(this);W(W(W(W(W(W(this.C,a,"change",this.F),b,"click",this.J),b,"change",this.G),
d,"click",this.H),f,"click",this.K),e,"click",this.I);Fb(this)}var Gb=[{label:"Link url is matched with",value:0},{label:"Link url is not matched with",value:1},{label:"Page url is matched with",value:2},{label:"Page url is not matched with",value:3}];n=Eb.prototype;n.F=function(){Hb(this);$(i)};
n.J=function(a){var c=Cb(a.target,j,"rule"),b=Cb(a.target,"a");if(b){var d=(/#(.+)/.exec(b)||[])[1];if(d=="add-condition"){Y("rule-conditions",c).appendChild(Ib(this,k));a.preventDefault()}else if(d=="delete-condition"){c=Cb(b,j,"rule-condition");Bb(c);$(i);a.preventDefault()}else if(d=="delete-rule"){Bb(c);$(i);a.preventDefault()}}};n.G=function(){$(i)};n.H=function(a){a.preventDefault();X("rewrite-rules").appendChild(Jb(this,k))};
n.K=function(){var a={version:1,presets:Kb(),rules:Lb(this)},c=localStorage,b=[];kb(new jb,a,b);c.linktweak_settings=b.join("");this.o=a;$(k)};n.I=function(){Fb(this)};
function Jb(a,c,b){var d=Z("div","rule");b=b||{};if(c)d.className+=" rule-preset";else d.appendChild(Z("div","rule-delete",Z("a",{href:"#delete-rule"},"Delete this rule")));var f=Z("input",{"class":"rule-pattern",value:b.pattern||""}),e=Z("input",{"class":"rule-substitution",value:b.subst||""});d.appendChild(Z("div","rule-replacement",Z("div","rule-label","Rewrite pattern:"),Z("div","rule-value",f),Z("div","rule-label","Substitution:"),Z("div","rule-value",e)));d.appendChild(Z("div","rule-conditions-label",
"Conditions:"));var g=Z("div","rule-conditions");K(b.conditions||[],function(h){g.appendChild(Ib(this,c,h))},a);!c&&g.childNodes.length<=0&&g.appendChild(Ib(a,k));d.appendChild(g);if(c){f.disabled="disabled";e.disabled="disabled"}else d.appendChild(Z("div","rule-add-condition",Z("a",{href:"#add-condition"},"Add condition")));return d}
function Ib(a,c,b){a=Ca(Gb,function(f){return Z("option",{value:f.value},f.label)},a);a=Z("select","rule-condition-type",a);var d=Z("input",{type:"text","class":"rule-condition-regexp"});if(b){a.value=b.type||0;d.value=b.regexp||""}b=Z("div","rule-condition",a,d);if(c){a.disabled="disabled";d.disabled="disabled"}else b.appendChild(Z("a",{href:"#delete-condition","class":"rule-condition-delete"},"\u00d7"));return b}
function Hb(a){var c=wb(document,"div","rule-preset",X("rewrite-rules"));K(c,function(d){Bb(d)},a);c=rb(Kb());var b=document.createDocumentFragment();K(c,function(d){b.appendChild(Jb(this,i,d))},a);a=X("rewrite-rules");a.insertBefore(b,a.firstChild)}
function Fb(a){var c=X("rewrite-rules");Ab(c);var b=a.o.presets||{};X("preset-documents").checked=!!b.documents;X("preset-images").checked=!!b.images;X("preset-maps").checked=!!b.maps;X("preset-maps-lang").value=b.maps_lang||"";Hb(a);b=a.o.rules||[];if(b.length<=0)c.appendChild(Jb(a,k));else{var d=document.createDocumentFragment();K(b,function(f){d.appendChild(Jb(this,k,f))},a);c.appendChild(d)}$(k)}
function Kb(){return{documents:!!X("preset-documents").checked,images:!!X("preset-images").checked,maps:!!X("preset-maps").checked,maps_lang:X("preset-maps-lang").value}}function Lb(a){var c=wb(document,"div","rule",X("rewrite-rules")),b=[];K(c,function(d){if(d.className.indexOf("rule-preset")<0){var f=Y("rule-pattern",d),e=Y("rule-substitution",d);if(f&&f.value&&e&&e.value){var g={};g.pattern=f.value;g.subst=e.value;g.conditions=Mb(this,d);d=g}else d=j;d&&b.push(d)}},a);return b}
function Mb(a,c){var b=wb(document,"div","rule-condition",c),d=[];K(b,function(f){var e=Y("rule-condition-type",f);f=Y("rule-condition-regexp",f);e&&f&&d.push({type:e.value,regexp:f.value})},a);return d}function $(a){a=a?"":"disabled";X("save").disabled=a;X("reset").disabled=a}new Eb;})();