let e=!1;const t=e=>"object"==(e=typeof e)||"function"===e,n=(e,n,...s)=>{let o=null,r=!1,c=!1;const i=[],u=n=>{for(let s=0;s<n.length;s++)o=n[s],Array.isArray(o)?u(o):null!=o&&"boolean"!=typeof o&&((r="function"!=typeof e&&!t(o))&&(o+=""),r&&c?i[i.length-1].t+=o:i.push(r?l(null,o):o),c=r)};u(s);const a=l(e,null);return a.l=n,i.length>0&&(a.o=i),a},l=(e,t)=>({i:0,u:e,t,$:null,o:null}),s={},o=(e,t,n)=>{const l=t.o[n];let s,r,c=0;if(null!==l.t)s=l.$=N.createTextNode(l.t);else if(s=l.$=N.createElement(l.u),l.o)for(c=0;c<l.o.length;++c)r=o(e,l,c),r&&s.appendChild(r);return s},r=(e,t,n,l,s,r)=>{let c,i=e;for(;s<=r;++s)l[s]&&(c=o(null,n,s),c&&(l[s].$=c,i.insertBefore(c,t)))},c=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.$.remove()},i=(e,t)=>e.u===t.u,u=(e,t)=>{const n=t.$=e.$,l=e.o,s=t.o,a=t.t;null===a?null!==l&&null!==s?((e,t,n,l)=>{let s,a=0,f=0,$=t.length-1,m=t[0],d=t[$],h=l.length-1,p=l[0],b=l[h];for(;a<=$&&f<=h;)null==m?m=t[++a]:null==d?d=t[--$]:null==p?p=l[++f]:null==b?b=l[--h]:i(m,p)?(u(m,p),m=t[++a],p=l[++f]):i(d,b)?(u(d,b),d=t[--$],b=l[--h]):i(m,b)?(u(m,b),e.insertBefore(m.$,d.$.nextSibling),m=t[++a],b=l[--h]):i(d,p)?(u(d,p),e.insertBefore(d.$,m.$),d=t[--$],p=l[++f]):(s=o(t&&t[f],n,f),p=l[++f],s&&m.$.parentNode.insertBefore(s,m.$));a>$?r(e,null==l[h+1]?null:l[h+1].$,n,l,f,h):f>h&&c(t,a,$)})(n,l,t,s):null!==s?(null!==e.t&&(n.textContent=""),r(n,null,t,s,0,s.length-1)):null!==l&&c(l,0,l.length-1):e.t!==a&&(n.data=a)},a=(e,t)=>{t&&!e.m&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.m=t)))},f=e=>{if(e.i|=16,!(4&e.i))return a(e,e.h),W((()=>$(e)));e.i|=512},$=e=>{const t=e.p;return b(void 0,(()=>m(e,t)))},m=async(e,t)=>{const n=e.g,l=n["s-rc"];d(e,t),l&&(l.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>h(e);0===t.length?l():(Promise.all(t).then(l),e.i|=4,t.length=0)}},d=(e,t)=>{try{t=t.render(),e.i&=-17,e.i|=2,((e,t)=>{const o=e.g,r=e.j||l(null,null),c=(e=>e&&e.u===s)(t)?t:n(null,null,t);c.u=null,c.i|=4,e.j=c,c.$=r.$=o,u(r,c)})(e,t)}catch(t){P(t,e.g)}return null},h=e=>{const t=e.g,n=e.h;64&e.i||(e.i|=64,y(t),e.v(t),n||p()),e.m&&(e.m(),e.m=void 0),512&e.i&&V((()=>f(e))),e.i&=-517},p=()=>{y(N.documentElement),V((()=>(e=>{const t=A.ce("appload",{detail:{namespace:"web-components"}});return e.dispatchEvent(t),t})(E)))},b=(e,t)=>e&&e.then?e.then(t):t(),y=e=>e.classList.add("hydrated"),w=(e,n,l)=>{if(n.M){const s=Object.entries(n.M),o=e.prototype;if(s.map((([e,[s]])=>{(31&s||2&l&&32&s)&&Object.defineProperty(o,e,{get(){return((e,t)=>M(this).O.get(t))(0,e)},set(l){((e,n,l,s)=>{const o=M(e),r=o.O.get(n),c=o.i,i=o.p;l=((e,n)=>null==e||t(e)?e:1&n?e+"":e)(l,s.M[n][0]),8&c&&void 0!==r||l===r||Number.isNaN(r)&&Number.isNaN(l)||(o.O.set(n,l),i&&2==(18&c)&&f(o))})(this,e,l,n)},configurable:!0,enumerable:!0})})),1&l){const t=new Map;o.attributeChangedCallback=function(e,n,l){A.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=s.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},g=e=>{const t=e.cloneNode;e.cloneNode=function(){return t.call(this,!1)}},j=(e,t={})=>{const n=[],l=t.exclude||[],s=E.customElements,o=N.head,r=o.querySelector("meta[charset]"),c=N.createElement("style"),i=[];let u,$=!0;Object.assign(A,t),A.k=new URL(t.resourcesUrl||"./",N.baseURI).href,e.map((e=>{e[1].map((t=>{const o={i:t[0],P:t[1],M:t[2],C:t[3]};o.M=t[2];const r=o.P,c=class extends HTMLElement{constructor(e){super(e),k(e=this,o)}connectedCallback(){u&&(clearTimeout(u),u=null),$?i.push(this):A.jmp((()=>(e=>{if(0==(1&A.i)){const t=M(e),n=t.N,l=()=>{};if(!(1&t.i)){t.i|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){a(t,t.h=n);break}}n.M&&Object.entries(n.M).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.i)){if(t.i|=32,(s=C(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(w(s,n,2),s.isProxied=!0);const e=()=>{};t.i|=8;try{new s(t)}catch(e){P(e)}t.i&=-9,e()}const o=t.h,r=()=>f(t);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){A.jmp((()=>{}))}componentOnReady(){return M(this).T}};g(c.prototype),o.A=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,w(c,o,1)))}))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,r?r.nextSibling:o.firstChild),$=!1,i.length?i.map((e=>e.connectedCallback())):A.jmp((()=>u=setTimeout(p,30)))},v=new WeakMap,M=e=>v.get(e),O=(e,t)=>v.set(t.p=e,t),k=(e,t)=>{const n={i:0,g:e,N:t,O:new Map};return n.T=new Promise((e=>n.v=e)),e["s-p"]=[],e["s-rc"]=[],v.set(e,n)},P=(e,t)=>(0,console.error)(e,t),x=new Map,C=e=>{const t=e.P.replace(/-/g,"_"),n=e.A,l=x.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(x.set(n,e),e[t])),P)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},E="undefined"!=typeof window?window:{},N=E.document||{head:{}},T=E.HTMLElement||class{},A={i:0,k:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},L=e=>Promise.resolve(e),R=[],U=[],q=(t,n)=>l=>{t.push(l),e||(e=!0,n&&4&A.i?V(H):A.raf(H))},F=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){P(e)}e.length=0},H=()=>{F(R),F(U),(e=R.length>0)&&A.raf(H)},V=e=>L().then(e),W=q(U,!0);export{T as H,j as b,n as h,L as p,O as r}