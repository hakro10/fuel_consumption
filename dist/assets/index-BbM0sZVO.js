var Yi=Object.defineProperty;var Ki=(a,t,e)=>t in a?Yi(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var w=(a,t,e)=>Ki(a,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=(a,t,e=[])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",a);return Object.keys(t).forEach(i=>{s.setAttribute(i,String(t[i]))}),e.length&&e.forEach(i=>{const n=Js(...i);s.appendChild(n)}),s};var Ji=([a,t,e])=>Js(a,t,e);/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=a=>Array.from(a.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),tn=a=>typeof a=="string"?a:!a||!a.class?"":a.class&&typeof a.class=="string"?a.class.split(" "):a.class&&Array.isArray(a.class)?a.class:"",en=a=>a.flatMap(tn).map(e=>e.trim()).filter(Boolean).filter((e,s,i)=>i.indexOf(e)===s).join(" "),an=a=>a.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,s)=>e.toUpperCase()+s.toLowerCase()),g2=(a,{nameAttr:t,icons:e,attrs:s})=>{var M;const i=a.getAttribute(t);if(i==null)return;const n=an(i),o=e[n];if(!o)return console.warn(`${a.outerHTML} icon name was not found in the provided icons object.`);const r=Qi(a),[c,d,l]=o,p={...d,"data-lucide":i,...s,...r},g=en(["lucide",`lucide-${i}`,r,s]);g&&Object.assign(p,{class:g});const u=Ji([c,p,l]);return(M=a.parentNode)==null?void 0:M.replaceChild(u,a)};/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",h,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",h,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",h,[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",h,[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",h,[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",h,[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",h,[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["polygon",{points:"12 15 17 21 7 21 12 15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=["svg",h,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=["svg",h,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",h,[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=["svg",h,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",h,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",h,[["path",{d:"M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z"}],["path",{d:"m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",h,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",h,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",h,[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",h,[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",h,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",h,[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",h,[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",h,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",h,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",h,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",h,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",h,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",h,[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",h,[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",h,[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",h,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",h,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",h,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",h,[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",h,[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",h,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M22 7h-5"}],["path",{d:"M7 7H1"}],["path",{d:"M22 17h-3"}],["path",{d:"M5 17H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",h,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",h,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",h,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=["svg",h,[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",h,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",h,[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=["svg",h,[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=["svg",h,[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",h,[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=["svg",h,[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=["svg",h,[["path",{d:"M12 22V8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}],["circle",{cx:"12",cy:"5",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h0"}],["path",{d:"M15 10h0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=["svg",h,[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=["svg",h,[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=["svg",h,[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=["svg",h,[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=["svg",h,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=["svg",h,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=["svg",h,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=["svg",h,[["path",{d:"M3 3v18h18"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=["svg",h,[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=["svg",h,[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=["svg",h,[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=["svg",h,[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=["svg",h,[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=["svg",h,[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=["svg",h,[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=["svg",h,[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=["svg",h,[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=["svg",h,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=["svg",h,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=["svg",h,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=["svg",h,[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=["svg",h,[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=["svg",h,[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=["svg",h,[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=["svg",h,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=["svg",h,[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=["svg",h,[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=["svg",h,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=["svg",h,[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=["svg",h,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=["svg",h,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=["svg",h,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=["svg",h,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=["svg",h,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=["svg",h,[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=["svg",h,[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=["svg",h,[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=["svg",h,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=["svg",h,[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=["svg",h,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=["svg",h,[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=["svg",h,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=["svg",h,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=["svg",h,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=["svg",h,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=["svg",h,[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=["svg",h,[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=["svg",h,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=["svg",h,[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=["svg",h,[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=["svg",h,[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=["svg",h,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=["svg",h,[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=["svg",h,[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=["svg",h,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=["svg",h,[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=["svg",h,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=["svg",h,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=["svg",h,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=["svg",h,[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=["svg",h,[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=["svg",h,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=["svg",h,[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=["svg",h,[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=["svg",h,[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=["svg",h,[["circle",{cx:"12",cy:"8",r:"6"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=["svg",h,[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=["svg",h,[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=["svg",h,[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=["svg",h,[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=["svg",h,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=["svg",h,[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=["svg",h,[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=["svg",h,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=["svg",h,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=["svg",h,[["path",{d:"M3 3v18h18"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=["svg",h,[["path",{d:"M3 3v18h18"}],["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=["svg",h,[["path",{d:"M3 3v18h18"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=["svg",h,[["path",{d:"M3 3v18h18"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=["svg",h,[["path",{d:"M3 3v18h18"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=["svg",h,[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=["svg",h,[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=["svg",h,[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=["svg",h,[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=["svg",h,[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=["svg",h,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=["svg",h,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=["svg",h,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=["svg",h,[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=["svg",h,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=["svg",h,[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=["svg",h,[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=["svg",h,[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=["svg",h,[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=["svg",h,[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=["svg",h,[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=["svg",h,[["circle",{cx:"12.5",cy:"8.5",r:"2.5"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=["svg",h,[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=["svg",h,[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["circle",{cx:"18",cy:"8",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=["svg",h,[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6"}],["circle",{cx:"20",cy:"16",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=["svg",h,[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=["svg",h,[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=["svg",h,[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=["svg",h,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=["svg",h,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=["svg",h,[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=["svg",h,[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=["svg",h,[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=["svg",h,[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=["svg",h,[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=["svg",h,[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=["svg",h,[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=["svg",h,[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=["svg",h,[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=["svg",h,[["circle",{cx:"9",cy:"9",r:"7"}],["circle",{cx:"15",cy:"15",r:"7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=["svg",h,[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=["svg",h,[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=["svg",h,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=["svg",h,[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=["svg",h,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=["svg",h,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=["svg",h,[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=["svg",h,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=["svg",h,[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=["svg",h,[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=["svg",h,[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=["svg",h,[["path",{d:"M20 22h-2"}],["path",{d:"M20 15v2h-2"}],["path",{d:"M4 19.5V15"}],["path",{d:"M20 8v3"}],["path",{d:"M18 2h2v2"}],["path",{d:"M4 11V9"}],["path",{d:"M12 2h2"}],["path",{d:"M12 22h2"}],["path",{d:"M12 17h2"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3 3 3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"9",cy:"12",r:"1"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"14",cy:"8",r:"2"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"m19 3 1 1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=["svg",h,[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=["svg",h,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}],["path",{d:"M6 8h2"}],["path",{d:"M6 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M16 12h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=["svg",h,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M8 7h6"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M12 6v7"}],["path",{d:"M10 13h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"M12 13V7"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M15 13a3 3 0 1 0-6 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}],["path",{d:"m14.5 7-5 5"}],["path",{d:"m9.5 7 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=["svg",h,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=["svg",h,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=["svg",h,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=["svg",h,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=["svg",h,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=["svg",h,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=["svg",h,[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=["svg",h,[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=["svg",h,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=["svg",h,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=["svg",h,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=["svg",h,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=["svg",h,[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=["svg",h,[["path",{d:"M16 3h3v18h-3"}],["path",{d:"M8 21H5V3h3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=["svg",h,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=["svg",h,[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=["svg",h,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=["svg",h,[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=["svg",h,[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=["svg",h,[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=["svg",h,[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=["svg",h,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m12 12 8 5-8 5Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=["svg",h,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=["svg",h,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=["svg",h,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=["svg",h,[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=["svg",h,[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=["svg",h,[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=["svg",h,[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"}],["path",{d:"M3 5V3"}],["path",{d:"M7 5V3"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"}],["path",{d:"M17 21v-2"}],["path",{d:"M21 21v-2"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=["svg",h,[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=["svg",h,[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h0.01"}],["path",{d:"M12 4h0.01"}],["path",{d:"M17 4h0.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=["svg",h,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m9 16 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=["svg",h,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}],["path",{d:"M3 10h18"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=["svg",h,[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=["svg",h,[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}],["path",{d:"M12 14v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=["svg",h,[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h18"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m17 22 5-5"}],["path",{d:"m17 17 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m14 14-4 4"}],["path",{d:"m10 14 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=["svg",h,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=["svg",h,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=["svg",h,[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v18h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=["svg",h,[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=["svg",h,[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"}],["path",{d:"M14 16.5V14"}],["path",{d:"M14 6.5v1.843"}],["path",{d:"M10 10v7.5"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=["svg",h,[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}],["path",{d:"M14 6.5v10"}],["path",{d:"M10 7.5v10"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=["svg",h,[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=["svg",h,[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=["svg",h,[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=["svg",h,[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=["svg",h,[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=["svg",h,[["rect",{width:"4",height:"4",x:"2",y:"9"}],["rect",{width:"4",height:"10",x:"10",y:"9"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["circle",{cx:"8",cy:"19",r:"2"}],["path",{d:"M10 19h12v-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=["svg",h,[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=["svg",h,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=["svg",h,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=["svg",h,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=["svg",h,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=["svg",h,[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=["svg",h,[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=["svg",h,[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=["svg",h,[["path",{d:"M7 9h.01"}],["path",{d:"M16.75 12H22l-3.5 7-3.09-4.32"}],["path",{d:"M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=["svg",h,[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=["svg",h,[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=["svg",h,[["path",{d:"m9 11 3 3L22 4"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=["svg",h,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=["svg",h,[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=["svg",h,[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=["svg",h,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=["svg",h,[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=["svg",h,[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=["svg",h,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=["svg",h,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=["svg",h,[["path",{d:"m18 15-6-6-6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=["svg",h,[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=["svg",h,[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=["svg",h,[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=["svg",h,[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=["svg",h,[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=["svg",h,[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=["svg",h,[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=["svg",h,[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=["svg",h,[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"}],["path",{d:"M18 22V5l-6-3-6 3v17"}],["path",{d:"M12 7v5"}],["path",{d:"M10 9h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=["svg",h,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M12 12H2v4h14"}],["path",{d:"M22 12v4"}],["path",{d:"M18 12h-.5"}],["path",{d:"M7 12v4"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=["svg",h,[["path",{d:"M18 12H2v4h16"}],["path",{d:"M22 12v4"}],["path",{d:"M7 12v4"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=["svg",h,[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=["svg",h,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=["svg",h,[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=["svg",h,[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=["svg",h,[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=["svg",h,[["line",{x1:"9",x2:"15",y1:"15",y2:"9"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=["svg",h,[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=["svg",h,[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=["svg",h,[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=["svg",h,[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=["svg",h,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=["svg",h,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=["svg",h,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=["svg",h,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=["svg",h,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=["svg",h,[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=["svg",h,[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=["svg",h,[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=["svg",h,[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=["svg",h,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=["svg",h,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=["svg",h,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=["svg",h,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=["svg",h,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=["svg",h,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=["svg",h,[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=["svg",h,[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=["svg",h,[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=["svg",h,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 14 2-2-2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=["svg",h,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=["svg",h,[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=["svg",h,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=["svg",h,[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=["svg",h,[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=["svg",h,[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=["svg",h,[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1"}],["polyline",{points:"7 21 10 18 7 15"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=["svg",h,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=["svg",h,[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=["svg",h,[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=["svg",h,[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=["svg",h,[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=["svg",h,[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=["svg",h,[["path",{d:"M16 18a4 4 0 0 0-8 0"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=["svg",h,[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["circle",{cx:"12",cy:"10",r:"2"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=["svg",h,[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=["svg",h,[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=["svg",h,[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=["svg",h,[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=["svg",h,[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=["svg",h,[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=["svg",h,[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=["svg",h,[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=["svg",h,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=["svg",h,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=["svg",h,[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=["svg",h,[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=["svg",h,[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=["svg",h,[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=["svg",h,[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=["svg",h,[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=["svg",h,[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",h,[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"9",y:"9",width:"6",height:"6"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=["svg",h,[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=["svg",h,[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=["svg",h,[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=["svg",h,[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=["svg",h,[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=["svg",h,[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=["svg",h,[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=["svg",h,[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=["svg",h,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=["svg",h,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=["svg",h,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=["svg",h,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=["svg",h,[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=["svg",h,[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=["svg",h,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=["svg",h,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=["svg",h,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=["svg",h,[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=["svg",h,[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=["svg",h,[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=["svg",h,[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5"}],["path",{d:"m17 6-2.5-2.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"m7 18 2.5 2.5"}],["path",{d:"m3.5 14.5.5.5"}],["path",{d:"m20 9 .5.5"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m10 16 1.5 1.5"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=["svg",h,[["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m17 6-2.5-2.5"}],["path",{d:"m14 8-1-1"}],["path",{d:"m7 18 2.5 2.5"}],["path",{d:"m3.5 14.5.5.5"}],["path",{d:"m20 9 .5.5"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m10 16 1.5 1.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=["svg",h,[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=["svg",h,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=["svg",h,[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=["svg",h,[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=["svg",h,[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=["svg",h,[["circle",{cx:"12.1",cy:"12.1",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=["svg",h,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M12 12v9"}],["path",{d:"m8 17 4 4 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=["svg",h,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=["svg",h,[["circle",{cx:"12",cy:"5",r:"2"}],["path",{d:"m3 21 8.02-14.26"}],["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0"}],["path",{d:"m21 21-2.16-3.84"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=["svg",h,[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=["svg",h,[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z"}],["path",{d:"M18 6h4"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"m5 10-2 8"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8"}],["path",{d:"m7 18 2-8"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=["svg",h,[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=["svg",h,[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=["svg",h,[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=["svg",h,[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=["svg",h,[["path",{d:"m6.5 6.5 11 11"}],["path",{d:"m21 21-1-1"}],["path",{d:"m3 3 1 1"}],["path",{d:"m18 22 4-4"}],["path",{d:"m2 6 4-4"}],["path",{d:"m3 10 7-7"}],["path",{d:"m14 21 7-7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=["svg",h,[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=["svg",h,[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=["svg",h,[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=["svg",h,[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=["svg",h,[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=["svg",h,[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=["svg",h,[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=["svg",h,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=["svg",h,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=["svg",h,[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=["svg",h,[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=["svg",h,[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=["svg",h,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=["svg",h,[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=["svg",h,[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=["svg",h,[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=["svg",h,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=["svg",h,[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=["svg",h,[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=["svg",h,[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=["svg",h,[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=["svg",h,[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=["svg",h,[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=["svg",h,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"20",r:"2"}],["path",{d:"M10 7V6"}],["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"3",cy:"17",r:"1"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=["svg",h,[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=["svg",h,[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=["svg",h,[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"}],["path",{d:"M7 17v5"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=["svg",h,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 13-2 2 2 2"}],["path",{d:"m14 17 2-2-2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"6",cy:"14",r:"3"}],["path",{d:"M6 10v1"}],["path",{d:"M6 17v1"}],["path",{d:"M10 14H9"}],["path",{d:"M3 14H2"}],["path",{d:"m9 11-.88.88"}],["path",{d:"M3.88 16.12 3 17"}],["path",{d:"m9 17-.88-.88"}],["path",{d:"M3.88 11.88 3 11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=["svg",h,[["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5"}],["path",{d:"M8 18v-7.7L16 9v7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=["svg",h,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=["svg",h,[["path",{d:"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}],["path",{d:"M8 18h1"}],["path",{d:"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=["svg",h,[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=["svg",h,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11.5a6.02 6.02 0 1 0 8.5 8.5"}],["path",{d:"M14 16c0-3.3-2.7-6-6-6v6Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=["svg",h,[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"5",cy:"14",r:"3"}],["path",{d:"m9 18-1.5-1.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=["svg",h,[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=["svg",h,[["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M5 12v6"}],["path",{d:"M4 18h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M12 12v6"}],["path",{d:"M11 18h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m7 10-3 2H2v4h2l3 2Z"}],["path",{d:"M11 11a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=["svg",h,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 12.5-5 5"}],["path",{d:"m3 12.5 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=["svg",h,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=["svg",h,[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=["svg",h,[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=["svg",h,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=["svg",h,[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=["svg",h,[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=["svg",h,[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=["svg",h,[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=["svg",h,[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=["svg",h,[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=["svg",h,[["path",{d:"M17 22V2L7 7l10 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=["svg",h,[["path",{d:"M7 22V2l10 5-10 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=["svg",h,[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=["svg",h,[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=["svg",h,[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=["svg",h,[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=["svg",h,[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=["svg",h,[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"}],["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h9"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=["svg",h,[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=["svg",h,[["path",{d:"M10 2v7.31"}],["path",{d:"M14 9.3V1.99"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0"}],["path",{d:"M5.52 16h12.96"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=["svg",h,[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=["svg",h,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=["svg",h,[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=["svg",h,[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=["svg",h,[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=["svg",h,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=["svg",h,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=["svg",h,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=["svg",h,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=["svg",h,[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=["svg",h,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=["svg",h,[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=["svg",h,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=["svg",h,[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=["svg",h,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=["svg",h,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=["svg",h,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=["svg",h,[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=["svg",h,[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=["svg",h,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=["svg",h,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=["svg",h,[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=["svg",h,[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=["svg",h,[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=["svg",h,[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=["svg",h,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=["svg",h,[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=["svg",h,[["path",{d:"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=["svg",h,[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=["svg",h,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=["svg",h,[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=["svg",h,[["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.5-1.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=["svg",h,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=["svg",h,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=["svg",h,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=["svg",h,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=["svg",h,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=["svg",h,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=["svg",h,[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=["svg",h,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=["svg",h,[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=["svg",h,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=["svg",h,[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=["svg",h,[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=["svg",h,[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=["svg",h,[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=["svg",h,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=["svg",h,[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=["svg",h,[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=["svg",h,[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=["svg",h,[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=["svg",h,[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=["svg",h,[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=["svg",h,[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=["svg",h,[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=["svg",h,[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=["svg",h,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=["svg",h,[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=["svg",h,[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=["svg",h,[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=["svg",h,[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=["svg",h,[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=["svg",h,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=["svg",h,[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=["svg",h,[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=["svg",h,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=["svg",h,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=["svg",h,[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=["svg",h,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=["svg",h,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=["svg",h,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=["svg",h,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=["svg",h,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=["svg",h,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=["svg",h,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=["svg",h,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=["svg",h,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=["svg",h,[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=["svg",h,[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=["svg",h,[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=["svg",h,[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=["svg",h,[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=["svg",h,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=["svg",h,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=["svg",h,[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=["svg",h,[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=["svg",h,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=["svg",h,[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=["svg",h,[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=["svg",h,[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z"}],["path",{d:"m17 7-5.1 5.1"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4"}],["path",{d:"m6 16 2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=["svg",h,[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=["svg",h,[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=["svg",h,[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 15 6 6"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=["svg",h,[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=["svg",h,[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=["svg",h,[["path",{d:"M12 3V2"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0"}],["path",{d:"M4 10h16"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18"}],["path",{d:"M5 14v7H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=["svg",h,[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=["svg",h,[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=["svg",h,[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=["svg",h,[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=["svg",h,[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=["svg",h,[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=["svg",h,[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=["svg",h,[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=["svg",h,[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=["svg",h,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=["svg",h,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=["svg",h,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=["svg",h,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 10v4h4"}],["path",{d:"M21 10v8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=["svg",h,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=["svg",h,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=["svg",h,[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=["svg",h,[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=["svg",h,[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=["svg",h,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=["svg",h,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=["svg",h,[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=["svg",h,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=["svg",h,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=["svg",h,[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=["svg",h,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=["svg",h,[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=["svg",h,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=["svg",h,[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["polyline",{points:"9 22 9 12 15 12 15 22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=["svg",h,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=["svg",h,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=["svg",h,[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"}],["path",{d:"M8 7h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M12 11h.01"}],["path",{d:"M16 11h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M10 22v-6.5m4 0V22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=["svg",h,[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=["svg",h,[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=["svg",h,[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=["svg",h,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=["svg",h,[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=["svg",h,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=["svg",h,[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=["svg",h,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=["svg",h,[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"}],["circle",{cx:"12",cy:"8",r:"2"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=["svg",h,[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=["svg",h,[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=["svg",h,[["polyline",{points:"3 8 7 12 3 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=["svg",h,[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",h,[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",h,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",h,[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",h,[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=["svg",h,[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",h,[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",h,[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=["svg",h,[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=["svg",h,[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=["svg",h,[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",h,[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"}],["path",{d:"m14 7 3 3"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=["svg",h,[["circle",{cx:"7.5",cy:"15.5",r:"5.5"}],["path",{d:"m21 2-9.6 9.6"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=["svg",h,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=["svg",h,[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=["svg",h,[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=["svg",h,[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=["svg",h,[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=["svg",h,[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=["svg",h,[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",h,[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",h,[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=["svg",h,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",h,[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",h,[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",h,[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=["svg",h,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",h,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=["svg",h,[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=["svg",h,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",h,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=["svg",h,[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",h,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",h,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=["svg",h,[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=["svg",h,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=["svg",h,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",h,[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=["svg",h,[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=["svg",h,[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=["svg",h,[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=["svg",h,[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=["svg",h,[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=["svg",h,[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=["svg",h,[["path",{d:"M3 3v18h18"}],["path",{d:"m19 9-5 5-4-4-3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=["svg",h,[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=["svg",h,[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=["svg",h,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=["svg",h,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=["svg",h,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=["svg",h,[["path",{d:"m3 10 2.5-2.5L3 5"}],["path",{d:"m3 19 2.5-2.5L3 14"}],["path",{d:"M10 6h11"}],["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=["svg",h,[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=["svg",h,[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=["svg",h,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=["svg",h,[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=["svg",h,[["line",{x1:"10",x2:"21",y1:"6",y2:"6"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18"}],["path",{d:"M4 6h1v4"}],["path",{d:"M4 10h2"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=["svg",h,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=["svg",h,[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=["svg",h,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=["svg",h,[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=["svg",h,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=["svg",h,[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=["svg",h,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=["svg",h,[["line",{x1:"8",x2:"21",y1:"6",y2:"6"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=["svg",h,[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=["svg",h,[["line",{x1:"12",x2:"12",y1:"2",y2:"6"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=["svg",h,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=["svg",h,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=["svg",h,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=["svg",h,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=["svg",h,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=["svg",h,[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=["svg",h,[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=["svg",h,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=["svg",h,[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=["svg",h,[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=["svg",h,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=["svg",h,[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=["svg",h,[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=["svg",h,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=["svg",h,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=["svg",h,[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=["svg",h,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=["svg",h,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=["svg",h,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=["svg",h,[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=["svg",h,[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=["svg",h,[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=["svg",h,[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=["svg",h,[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=["svg",h,[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=["svg",h,[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=["svg",h,[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=["svg",h,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=["svg",h,[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=["svg",h,[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=["svg",h,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=["svg",h,[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=["svg",h,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=["svg",h,[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 10 2 2-2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=["svg",h,[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=["svg",h,[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 8-2 2 2 2"}],["path",{d:"m14 8 2 2-2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=["svg",h,[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2"}],["path",{d:"M11 3h3"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2"}],["path",{d:"M21 9v2"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1"}],["path",{d:"M14 17h-3"}],["path",{d:"m7 17-4 4v-5"}],["path",{d:"M3 12v-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=["svg",h,[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=["svg",h,[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=["svg",h,[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=["svg",h,[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=["svg",h,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=["svg",h,[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=["svg",h,[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"}],["circle",{cx:"17",cy:"7",r:"5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=["svg",h,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=["svg",h,[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=["svg",h,[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=["svg",h,[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=["svg",h,[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"}],["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=["svg",h,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=["svg",h,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=["svg",h,[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=["svg",h,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=["svg",h,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=["svg",h,[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=["svg",h,[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=["svg",h,[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=["svg",h,[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=["svg",h,[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=["svg",h,[["path",{d:"m10 7 5 3-5 3Z"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=["svg",h,[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=["svg",h,[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=["svg",h,[["rect",{x:"9",y:"7",width:"6",height:"6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=["svg",h,[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=["svg",h,[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=["svg",h,[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=["svg",h,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}],["path",{d:"M19 3v4"}],["path",{d:"M21 5h-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=["svg",h,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=["svg",h,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=["svg",h,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=["svg",h,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=["svg",h,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=["svg",h,[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=["svg",h,[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"M14 4.1 12 6"}],["path",{d:"m6 12-1.9 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=["svg",h,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=["svg",h,[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=["svg",h,[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}],["path",{d:"m13 13 6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=["svg",h,[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=["svg",h,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=["svg",h,[["polyline",{points:"5 11 5 5 11 5"}],["polyline",{points:"19 13 19 19 13 19"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=["svg",h,[["polyline",{points:"13 5 19 5 19 11"}],["polyline",{points:"11 19 5 19 5 13"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=["svg",h,[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=["svg",h,[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=["svg",h,[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=["svg",h,[["polyline",{points:"18 8 22 12 18 16"}],["polyline",{points:"6 8 2 12 6 16"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=["svg",h,[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=["svg",h,[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=["svg",h,[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=["svg",h,[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=["svg",h,[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=["svg",h,[["polyline",{points:"8 18 12 22 16 18"}],["polyline",{points:"8 6 12 2 16 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=["svg",h,[["polyline",{points:"5 9 2 12 5 15"}],["polyline",{points:"9 5 12 2 15 5"}],["polyline",{points:"15 19 12 22 9 19"}],["polyline",{points:"19 9 22 12 19 15"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=["svg",h,[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=["svg",h,[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=["svg",h,[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=["svg",h,[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=["svg",h,[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=["svg",h,[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=["svg",h,[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=["svg",h,[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=["svg",h,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=["svg",h,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=["svg",h,[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=["svg",h,[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=["svg",h,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=["svg",h,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=["svg",h,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=["svg",h,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=["svg",h,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=["svg",h,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=["svg",h,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=["svg",h,[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=["svg",h,[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=["svg",h,[["polyline",{points:"7 8 3 12 7 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=["svg",h,[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=["svg",h,[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=["svg",h,[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=["svg",h,[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=["svg",h,[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=["svg",h,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=["svg",h,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=["svg",h,[["path",{d:"m7.5 4.27 9 5.15"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=["svg",h,[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=["svg",h,[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=["svg",h,[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"}],["path",{d:"M6 12V2h12v10"}],["path",{d:"M14 2v4"}],["path",{d:"M10 2v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=["svg",h,[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"}],["path",{d:"M14.5 17.5 4.5 15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=["svg",h,[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=["svg",h,[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=["svg",h,[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=["svg",h,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=["svg",h,[["path",{d:"M9 9a3 3 0 1 1 6 0"}],["path",{d:"M12 12v3"}],["path",{d:"M11 15h2"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=["svg",h,[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=["svg",h,[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=["svg",h,[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=["svg",h,[["rect",{width:"4",height:"16",x:"6",y:"4"}],["rect",{width:"4",height:"16",x:"14",y:"4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=["svg",h,[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=["svg",h,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=["svg",h,[["path",{d:"M12 20h9"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=["svg",h,[["path",{d:"m12 19 7-7 3 3-7 7-3-3z"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}],["path",{d:"m2 2 7.586 7.586"}],["circle",{cx:"11",cy:"11",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=["svg",h,[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=["svg",h,[["path",{d:"M12 20h9"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"}],["path",{d:"m15 5 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=["svg",h,[["path",{d:"m15 5 4 4"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=["svg",h,[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=["svg",h,[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=["svg",h,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=["svg",h,[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=["svg",h,[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=["svg",h,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=["svg",h,[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=["svg",h,[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=["svg",h,[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=["svg",h,[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=["svg",h,[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=["svg",h,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=["svg",h,[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=["svg",h,[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=["svg",h,[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=["svg",h,[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=["svg",h,[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=["svg",h,[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=["svg",h,[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=["svg",h,[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=["svg",h,[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=["svg",h,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=["svg",h,[["line",{x1:"12",x2:"12",y1:"17",y2:"22"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=["svg",h,[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=["svg",h,[["path",{d:"M15 11h.01"}],["path",{d:"M11 15h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=["svg",h,[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=["svg",h,[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=["svg",h,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=["svg",h,[["polygon",{points:"5 3 19 12 5 21 5 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=["svg",h,[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=["svg",h,[["path",{d:"m13 2-2 2.5h3L12 7"}],["path",{d:"M10 14v-3"}],["path",{d:"M14 14v-3"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=["svg",h,[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=["svg",h,[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=["svg",h,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=["svg",h,[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=["svg",h,[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=["svg",h,[["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=["svg",h,[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=["svg",h,[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=["svg",h,[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=["svg",h,[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=["svg",h,[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 12V6"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=["svg",h,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 7v5"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=["svg",h,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=["svg",h,[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=["svg",h,[["polyline",{points:"6 9 6 2 18 2 18 9"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["rect",{width:"12",height:"8",x:"6",y:"14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=["svg",h,[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=["svg",h,[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=["svg",h,[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=["svg",h,[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=["svg",h,[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=["svg",h,[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=["svg",h,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=["svg",h,[["path",{d:"M12 12h0.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=["svg",h,[["path",{d:"M3 12h4l3 9 4-17h7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=["svg",h,[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=["svg",h,[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=["svg",h,[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=["svg",h,[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=["svg",h,[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=["svg",h,[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=["svg",h,[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M16 9h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=["svg",h,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=["svg",h,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M12 6.5v11"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=["svg",h,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 12h5"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=["svg",h,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 7h8"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=["svg",h,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"m12 10 3-3"}],["path",{d:"m9 7 3 3v7.5"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=["svg",h,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 13h5"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 17h7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=["svg",h,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 15h5"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=["svg",h,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M10 17V7h5"}],["path",{d:"M10 11h4"}],["path",{d:"M8 15h5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=["svg",h,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=["svg",h,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=["svg",h,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=["svg",h,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=["svg",h,[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=["svg",h,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=["svg",h,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=["svg",h,[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=["svg",h,[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=["svg",h,[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=["svg",h,[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=["svg",h,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=["svg",h,[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=["svg",h,[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=["svg",h,[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=["svg",h,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=["svg",h,[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=["svg",h,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=["svg",h,[["path",{d:"M14 4c0-1.1.9-2 2-2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2"}],["path",{d:"M22 8c0 1.1-.9 2-2 2"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=["svg",h,[["path",{d:"M14 4c0-1.1.9-2 2-2"}],["path",{d:"M20 2c1.1 0 2 .9 2 2"}],["path",{d:"M22 8c0 1.1-.9 2-2 2"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=["svg",h,[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=["svg",h,[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=["svg",h,[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=["svg",h,[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z"}],["path",{d:"m9.35 14.53 2.64-3.31"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=["svg",h,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=["svg",h,[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=["svg",h,[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=["svg",h,[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=["svg",h,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=["svg",h,[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=["svg",h,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=["svg",h,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=["svg",h,[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=["svg",h,[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=["svg",h,[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=["svg",h,[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=["svg",h,[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=["svg",h,[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=["svg",h,[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=["svg",h,[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=["svg",h,[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=["svg",h,[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"}],["path",{d:"M10 2v4h6"}],["path",{d:"M18 18v-7h-8v7"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=["svg",h,[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}],["polyline",{points:"17 21 17 13 7 13 7 21"}],["polyline",{points:"7 3 7 8 15 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=["svg",h,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M5 7v12h12"}],["path",{d:"m5 19 6-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=["svg",h,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=["svg",h,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=["svg",h,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=["svg",h,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=["svg",h,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=["svg",h,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=["svg",h,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=["svg",h,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=["svg",h,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=["svg",h,[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v18h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=["svg",h,[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=["svg",h,[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 8-4 8 4"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=["svg",h,[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=["svg",h,[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=["svg",h,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=["svg",h,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=["svg",h,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=["svg",h,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=["svg",h,[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M15 8h-5"}],["path",{d:"M15 12h-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=["svg",h,[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=["svg",h,[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=["svg",h,[["path",{d:"m9 9-2 2 2 2"}],["path",{d:"m13 13 2-2-2-2"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=["svg",h,[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=["svg",h,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=["svg",h,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=["svg",h,[["path",{d:"m3 3 3 9-3 9 19-9Z"}],["path",{d:"M6 12h16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=["svg",h,[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=["svg",h,[["path",{d:"m22 2-7 20-4-9-9-4Z"}],["path",{d:"M22 2 11 13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=["svg",h,[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=["svg",h,[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=["svg",h,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=["svg",h,[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=["svg",h,[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=["svg",h,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=["svg",h,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=["svg",h,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=["svg",h,[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=["svg",h,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=["svg",h,[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=["svg",h,[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=["svg",h,[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=["svg",h,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=["svg",h,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=["svg",h,[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M12 10v4"}],["path",{d:"M12 2v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=["svg",h,[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=["svg",h,[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=["svg",h,[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=["svg",h,[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=["svg",h,[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=["svg",h,[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=["svg",h,[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=["svg",h,[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=["svg",h,[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"}],["path",{d:"m18 14 4 4-4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=["svg",h,[["path",{d:"M18 7V4H6l6 8-6 8h12v-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=["svg",h,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=["svg",h,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=["svg",h,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=["svg",h,[["path",{d:"M2 20h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=["svg",h,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=["svg",h,[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=["svg",h,[["path",{d:"M12 3v3"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z"}],["path",{d:"M12 13v8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=["svg",h,[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=["svg",h,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=["svg",h,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=["svg",h,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["path",{d:"M8 20v2h8v-2"}],["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=["svg",h,[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=["svg",h,[["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=["svg",h,[["path",{d:"m8 14-6 6h9v-3"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=["svg",h,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=["svg",h,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=["svg",h,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=["svg",h,[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=["svg",h,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=["svg",h,[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=["svg",h,[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=["svg",h,[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=["svg",h,[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=["svg",h,[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=["svg",h,[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=["svg",h,[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=["svg",h,[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=["svg",h,[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}],["path",{d:"M5 3v4"}],["path",{d:"M19 17v4"}],["path",{d:"M3 5h4"}],["path",{d:"M17 19h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=["svg",h,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=["svg",h,[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=["svg",h,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=["svg",h,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=["svg",h,[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=["svg",h,[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=["svg",h,[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=["svg",h,[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=["svg",h,[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=["svg",h,[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=["svg",h,[["path",{d:"m10 10-2 2 2 2"}],["path",{d:"m14 14 2-2-2-2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=["svg",h,[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=["svg",h,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=["svg",h,[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=["svg",h,[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=["svg",h,[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=["svg",h,[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=["svg",h,[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=["svg",h,[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=["svg",h,[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=["svg",h,[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=["svg",h,[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=["svg",h,[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=["svg",h,[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=["svg",h,[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"}],["circle",{cx:"20",cy:"10",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=["svg",h,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h0"}],["path",{d:"M16 13h0"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=["svg",h,[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{width:"6",height:"6",x:"9",y:"9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=["svg",h,[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=["svg",h,[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=["svg",h,[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=["svg",h,[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=["svg",h,[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=["svg",h,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=["svg",h,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=["svg",h,[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=["svg",h,[["path",{d:"M10 9a3 3 0 1 0 0 6"}],["path",{d:"M2 12h1"}],["path",{d:"M14 21V3"}],["path",{d:"M10 4V3"}],["path",{d:"M10 21v-1"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}],["path",{d:"M14 12h8"}],["path",{d:"m17 4-3 3"}],["path",{d:"m14 17 3 3"}],["path",{d:"m21 15-3-3 3-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=["svg",h,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=["svg",h,[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=["svg",h,[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=["svg",h,[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=["svg",h,[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h0.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=["svg",h,[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=["svg",h,[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=["svg",h,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=["svg",h,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=["svg",h,[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=["svg",h,[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=["svg",h,[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=["svg",h,[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=["svg",h,[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=["svg",h,[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=["svg",h,[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=["svg",h,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=["svg",h,[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=["svg",h,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=["svg",h,[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=["svg",h,[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=["svg",h,[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=["svg",h,[["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=["svg",h,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=["svg",h,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=["svg",h,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=["svg",h,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=["svg",h,[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=["svg",h,[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=["svg",h,[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=["svg",h,[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=["svg",h,[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=["svg",h,[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=["svg",h,[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=["svg",h,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=["svg",h,[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=["svg",h,[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=["svg",h,[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=["svg",h,[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=["svg",h,[["path",{d:"M21 6H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 18H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=["svg",h,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=["svg",h,[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=["svg",h,[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=["svg",h,[["path",{d:"M2 12h10"}],["path",{d:"M9 4v16"}],["path",{d:"m3 9 3 3-3 3"}],["path",{d:"M12 6 9 9 6 6"}],["path",{d:"m6 18 3-3 1.5 1.5"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=["svg",h,[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=["svg",h,[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=["svg",h,[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=["svg",h,[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=["svg",h,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=["svg",h,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=["svg",h,[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=["svg",h,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=["svg",h,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=["svg",h,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=["svg",h,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=["svg",h,[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=["svg",h,[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=["svg",h,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=["svg",h,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=["svg",h,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=["svg",h,[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=["svg",h,[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=["svg",h,[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=["svg",h,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=["svg",h,[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=["svg",h,[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=["svg",h,[["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h9l1 7.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=["svg",h,[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=["svg",h,[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=["svg",h,[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=["svg",h,[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=["svg",h,[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h0"}],["path",{d:"M16 15h0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=["svg",h,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=["svg",h,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=["svg",h,[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=["svg",h,[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=["svg",h,[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=["svg",h,[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=["svg",h,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=["svg",h,[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=["svg",h,[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=["svg",h,[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=["svg",h,[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=["svg",h,[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=["svg",h,[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=["svg",h,[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=["svg",h,[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=["svg",h,[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=["svg",h,[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=["svg",h,[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=["svg",h,[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=["svg",h,[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=["svg",h,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=["svg",h,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=["svg",h,[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=["svg",h,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=["svg",h,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=["svg",h,[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=["svg",h,[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=["svg",h,[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=["svg",h,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=["svg",h,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=["svg",h,[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=["svg",h,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M12 12v9"}],["path",{d:"m16 16-4-4-4 4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=["svg",h,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=["svg",h,[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=["svg",h,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=["svg",h,[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=["svg",h,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=["svg",h,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=["svg",h,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=["svg",h,[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=["svg",h,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=["svg",h,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=["svg",h,[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=["svg",h,[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=["svg",h,[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=["svg",h,[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=["svg",h,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=["svg",h,[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=["svg",h,[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=["svg",h,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=["svg",h,[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=["svg",h,[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=["svg",h,[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=["svg",h,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=["svg",h,[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=["svg",h,[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=["svg",h,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=["svg",h,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=["svg",h,[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=["svg",h,[["path",{d:"m22 8-6 4 6 4V8Z"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=["svg",h,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=["svg",h,[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=["svg",h,[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=["svg",h,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=["svg",h,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=["svg",h,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=["svg",h,[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=["svg",h,[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=["svg",h,[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=["svg",h,[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=["svg",h,[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=["svg",h,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=["svg",h,[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h0"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=["svg",h,[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=["svg",h,[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=["svg",h,[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=["svg",h,[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=["svg",h,[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=["svg",h,[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=["svg",h,[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=["svg",h,[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=["svg",h,[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=["svg",h,[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=["svg",h,[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=["svg",h,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=["svg",h,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=["svg",h,[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=["svg",h,[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=["svg",h,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=["svg",h,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=["svg",h,[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=["svg",h,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=["svg",h,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=["svg",h,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=["svg",h,[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=["svg",h,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=["svg",h,[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=["svg",h,[["polyline",{points:"12.41 6.75 13 2 10.57 4.92"}],["polyline",{points:"18.57 12.91 21 10 15.66 10"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=["svg",h,[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=["svg",h,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=["svg",h,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:sn,AArrowUp:nn,ALargeSmall:hn,Accessibility:on,Activity:cn,ActivitySquare:rn,AirVent:dn,Airplay:ln,AlarmCheck:u2,AlarmClock:gn,AlarmClockCheck:u2,AlarmClockMinus:M2,AlarmClockOff:pn,AlarmClockPlus:f2,AlarmMinus:M2,AlarmPlus:f2,AlarmSmoke:un,Album:Mn,AlertCircle:fn,AlertOctagon:vn,AlertTriangle:mn,AlignCenter:bn,AlignCenterHorizontal:xn,AlignCenterVertical:yn,AlignEndHorizontal:_n,AlignEndVertical:wn,AlignHorizontalDistributeCenter:Sn,AlignHorizontalDistributeEnd:Cn,AlignHorizontalDistributeStart:Vn,AlignHorizontalJustifyCenter:An,AlignHorizontalJustifyEnd:Ln,AlignHorizontalJustifyStart:Hn,AlignHorizontalSpaceAround:kn,AlignHorizontalSpaceBetween:Pn,AlignJustify:Dn,AlignLeft:Tn,AlignRight:En,AlignStartHorizontal:On,AlignStartVertical:In,AlignVerticalDistributeCenter:Fn,AlignVerticalDistributeEnd:Rn,AlignVerticalDistributeStart:Bn,AlignVerticalJustifyCenter:zn,AlignVerticalJustifyEnd:Zn,AlignVerticalJustifyStart:Nn,AlignVerticalSpaceAround:Wn,AlignVerticalSpaceBetween:Un,Ambulance:jn,Ampersand:$n,Ampersands:qn,Anchor:Gn,Angry:Xn,Annoyed:Yn,Antenna:Kn,Anvil:Jn,Aperture:Qn,AppWindow:t0,Apple:e0,Archive:i0,ArchiveRestore:a0,ArchiveX:s0,AreaChart:n0,Armchair:h0,ArrowBigDown:r0,ArrowBigDownDash:o0,ArrowBigLeft:d0,ArrowBigLeftDash:c0,ArrowBigRight:p0,ArrowBigRightDash:l0,ArrowBigUp:u0,ArrowBigUpDash:g0,ArrowDown:D0,ArrowDown01:M0,ArrowDown10:f0,ArrowDownAZ:v2,ArrowDownAz:v2,ArrowDownCircle:v0,ArrowDownFromLine:m0,ArrowDownLeft:_0,ArrowDownLeftFromCircle:x0,ArrowDownLeftFromSquare:y0,ArrowDownLeftSquare:b0,ArrowDownNarrowWide:w0,ArrowDownRight:A0,ArrowDownRightFromCircle:S0,ArrowDownRightFromSquare:C0,ArrowDownRightSquare:V0,ArrowDownSquare:L0,ArrowDownToDot:H0,ArrowDownToLine:k0,ArrowDownUp:P0,ArrowDownWideNarrow:m2,ArrowDownZA:x2,ArrowDownZa:x2,ArrowLeft:R0,ArrowLeftCircle:T0,ArrowLeftFromLine:E0,ArrowLeftRight:O0,ArrowLeftSquare:I0,ArrowLeftToLine:F0,ArrowRight:U0,ArrowRightCircle:B0,ArrowRightFromLine:z0,ArrowRightLeft:Z0,ArrowRightSquare:N0,ArrowRightToLine:W0,ArrowUp:rh,ArrowUp01:j0,ArrowUp10:$0,ArrowUpAZ:y2,ArrowUpAz:y2,ArrowUpCircle:q0,ArrowUpDown:G0,ArrowUpFromDot:X0,ArrowUpFromLine:Y0,ArrowUpLeft:th,ArrowUpLeftFromCircle:K0,ArrowUpLeftFromSquare:J0,ArrowUpLeftSquare:Q0,ArrowUpNarrowWide:b2,ArrowUpRight:ih,ArrowUpRightFromCircle:eh,ArrowUpRightFromSquare:ah,ArrowUpRightSquare:sh,ArrowUpSquare:nh,ArrowUpToLine:hh,ArrowUpWideNarrow:oh,ArrowUpZA:_2,ArrowUpZa:_2,ArrowsUpFromLine:ch,Asterisk:dh,AsteriskSquare:w2,AtSign:lh,Atom:ph,AudioLines:gh,AudioWaveform:uh,Award:Mh,Axe:fh,Axis3D:S2,Axis3d:S2,Baby:vh,Backpack:mh,Badge:Eh,BadgeAlert:xh,BadgeCent:yh,BadgeCheck:C2,BadgeDollarSign:bh,BadgeEuro:_h,BadgeHelp:wh,BadgeIndianRupee:Sh,BadgeInfo:Ch,BadgeJapaneseYen:Vh,BadgeMinus:Ah,BadgePercent:Lh,BadgePlus:Hh,BadgePoundSterling:kh,BadgeRussianRuble:Ph,BadgeSwissFranc:Dh,BadgeX:Th,BaggageClaim:Oh,Ban:Ih,Banana:Fh,Banknote:Rh,BarChart:jh,BarChart2:Bh,BarChart3:zh,BarChart4:Zh,BarChartBig:Nh,BarChartHorizontal:Uh,BarChartHorizontalBig:Wh,Barcode:$h,Baseline:qh,Bath:Gh,Battery:to,BatteryCharging:Xh,BatteryFull:Yh,BatteryLow:Kh,BatteryMedium:Jh,BatteryWarning:Qh,Beaker:eo,Bean:so,BeanOff:ao,Bed:ho,BedDouble:io,BedSingle:no,Beef:oo,Beer:ro,Bell:fo,BellDot:co,BellElectric:lo,BellMinus:po,BellOff:go,BellPlus:uo,BellRing:Mo,BetweenHorizonalEnd:V2,BetweenHorizonalStart:A2,BetweenHorizontalEnd:V2,BetweenHorizontalStart:A2,BetweenVerticalEnd:vo,BetweenVerticalStart:mo,Bike:xo,Binary:yo,Biohazard:bo,Bird:_o,Bitcoin:wo,Blend:So,Blinds:Co,Blocks:Vo,Bluetooth:ko,BluetoothConnected:Ao,BluetoothOff:Lo,BluetoothSearching:Ho,Bold:Po,Bolt:Do,Bomb:To,Bone:Eo,Book:sr,BookA:Oo,BookAudio:Io,BookCheck:Fo,BookCopy:Ro,BookDashed:L2,BookDown:Bo,BookHeadphones:zo,BookHeart:Zo,BookImage:No,BookKey:Wo,BookLock:Uo,BookMarked:jo,BookMinus:$o,BookOpen:Xo,BookOpenCheck:qo,BookOpenText:Go,BookPlus:Yo,BookTemplate:L2,BookText:Ko,BookType:Jo,BookUp:tr,BookUp2:Qo,BookUser:er,BookX:ar,Bookmark:rr,BookmarkCheck:ir,BookmarkMinus:nr,BookmarkPlus:hr,BookmarkX:or,BoomBox:cr,Bot:lr,BotMessageSquare:dr,Box:gr,BoxSelect:pr,Boxes:ur,Braces:H2,Brackets:Mr,Brain:mr,BrainCircuit:fr,BrainCog:vr,BrickWall:xr,Briefcase:yr,BringToFront:br,Brush:_r,Bug:Cr,BugOff:wr,BugPlay:Sr,Building:Ar,Building2:Vr,Bus:Hr,BusFront:Lr,Cable:Pr,CableCar:kr,Cake:Tr,CakeSlice:Dr,Calculator:Er,Calendar:Yr,CalendarCheck:Ir,CalendarCheck2:Or,CalendarClock:Fr,CalendarDays:Rr,CalendarFold:Br,CalendarHeart:zr,CalendarMinus:Nr,CalendarMinus2:Zr,CalendarOff:Wr,CalendarPlus:jr,CalendarPlus2:Ur,CalendarRange:$r,CalendarSearch:qr,CalendarX:Xr,CalendarX2:Gr,Camera:Jr,CameraOff:Kr,CandlestickChart:Qr,Candy:ac,CandyCane:tc,CandyOff:ec,Captions:k2,CaptionsOff:sc,Car:hc,CarFront:ic,CarTaxiFront:nc,Caravan:oc,Carrot:rc,CaseLower:cc,CaseSensitive:dc,CaseUpper:lc,CassetteTape:pc,Cast:gc,Castle:uc,Cat:Mc,Cctv:fc,Check:_c,CheckCheck:vc,CheckCircle:xc,CheckCircle2:mc,CheckSquare:bc,CheckSquare2:yc,ChefHat:wc,Cherry:Sc,ChevronDown:Ac,ChevronDownCircle:Cc,ChevronDownSquare:Vc,ChevronFirst:Lc,ChevronLast:Hc,ChevronLeft:Dc,ChevronLeftCircle:kc,ChevronLeftSquare:Pc,ChevronRight:Oc,ChevronRightCircle:Tc,ChevronRightSquare:Ec,ChevronUp:Rc,ChevronUpCircle:Ic,ChevronUpSquare:Fc,ChevronsDown:zc,ChevronsDownUp:Bc,ChevronsLeft:Nc,ChevronsLeftRight:Zc,ChevronsRight:Uc,ChevronsRightLeft:Wc,ChevronsUp:$c,ChevronsUpDown:jc,Chrome:qc,Church:Gc,Cigarette:Yc,CigaretteOff:Xc,Circle:hd,CircleDashed:Kc,CircleDollarSign:Jc,CircleDot:td,CircleDotDashed:Qc,CircleEllipsis:ed,CircleEqual:ad,CircleFadingPlus:sd,CircleOff:id,CircleSlash:nd,CircleSlash2:P2,CircleSlashed:P2,CircleUser:T2,CircleUserRound:D2,CircuitBoard:od,Citrus:rd,Clapperboard:cd,Clipboard:md,ClipboardCheck:dd,ClipboardCopy:ld,ClipboardEdit:O2,ClipboardList:pd,ClipboardMinus:gd,ClipboardPaste:ud,ClipboardPen:O2,ClipboardPenLine:E2,ClipboardPlus:Md,ClipboardSignature:E2,ClipboardType:fd,ClipboardX:vd,Clock:Pd,Clock1:xd,Clock10:yd,Clock11:bd,Clock12:_d,Clock2:wd,Clock3:Sd,Clock4:Cd,Clock5:Vd,Clock6:Ad,Clock7:Ld,Clock8:Hd,Clock9:kd,Cloud:jd,CloudCog:Dd,CloudDrizzle:Td,CloudFog:Ed,CloudHail:Od,CloudLightning:Id,CloudMoon:Rd,CloudMoonRain:Fd,CloudOff:Bd,CloudRain:Zd,CloudRainWind:zd,CloudSnow:Nd,CloudSun:Ud,CloudSunRain:Wd,Cloudy:$d,Clover:qd,Club:Gd,Code:Yd,Code2:Xd,CodeSquare:I2,Codepen:Kd,Codesandbox:Jd,Coffee:Qd,Cog:tl,Coins:el,Columns:F2,Columns2:F2,Columns3:R2,Columns4:al,Combine:sl,Command:il,Compass:nl,Component:hl,Computer:ol,ConciergeBell:rl,Cone:cl,Construction:dl,Contact:pl,Contact2:ll,Container:gl,Contrast:ul,Cookie:Ml,CookingPot:fl,Copy:_l,CopyCheck:vl,CopyMinus:ml,CopyPlus:xl,CopySlash:yl,CopyX:bl,Copyleft:wl,Copyright:Sl,CornerDownLeft:Cl,CornerDownRight:Vl,CornerLeftDown:Al,CornerLeftUp:Ll,CornerRightDown:Hl,CornerRightUp:kl,CornerUpLeft:Pl,CornerUpRight:Dl,Cpu:Tl,CreativeCommons:El,CreditCard:Ol,Croissant:Il,Crop:Fl,Cross:Rl,Crosshair:Bl,Crown:zl,Cuboid:Zl,CupSoda:Nl,CurlyBraces:H2,Currency:Wl,Cylinder:Ul,Database:ql,DatabaseBackup:jl,DatabaseZap:$l,Delete:Gl,Dessert:Xl,Diameter:Yl,Diamond:Kl,Dice1:Jl,Dice2:Ql,Dice3:tp,Dice4:ep,Dice5:ap,Dice6:sp,Dices:ip,Diff:np,Disc:cp,Disc2:hp,Disc3:op,DiscAlbum:rp,Divide:pp,DivideCircle:dp,DivideSquare:lp,Dna:up,DnaOff:gp,Dog:Mp,DollarSign:fp,Donut:vp,DoorClosed:mp,DoorOpen:xp,Dot:yp,DotSquare:B2,Download:_p,DownloadCloud:bp,DraftingCompass:wp,Drama:Sp,Dribbble:Cp,Drill:Vp,Droplet:Ap,Droplets:Lp,Drum:Hp,Drumstick:kp,Dumbbell:Pp,Ear:Tp,EarOff:Dp,Earth:z2,EarthLock:Ep,Eclipse:Op,Edit:He,Edit2:da,Edit3:ca,Egg:Rp,EggFried:Ip,EggOff:Fp,Equal:zp,EqualNot:Bp,EqualSquare:Z2,Eraser:Zp,Euro:Np,Expand:Wp,ExternalLink:Up,Eye:$p,EyeOff:jp,Facebook:qp,Factory:Gp,Fan:Xp,FastForward:Yp,Feather:Kp,Fence:Jp,FerrisWheel:Qp,Figma:t4,File:t5,FileArchive:e4,FileAudio:s4,FileAudio2:a4,FileAxis3D:N2,FileAxis3d:N2,FileBadge:n4,FileBadge2:i4,FileBarChart:o4,FileBarChart2:h4,FileBox:r4,FileCheck:d4,FileCheck2:c4,FileClock:l4,FileCode:g4,FileCode2:p4,FileCog:W2,FileCog2:W2,FileDiff:u4,FileDigit:M4,FileDown:f4,FileEdit:j2,FileHeart:v4,FileImage:m4,FileInput:x4,FileJson:b4,FileJson2:y4,FileKey:w4,FileKey2:_4,FileLineChart:S4,FileLock:V4,FileLock2:C4,FileMinus:L4,FileMinus2:A4,FileMusic:H4,FileOutput:k4,FilePen:j2,FilePenLine:U2,FilePieChart:P4,FilePlus:T4,FilePlus2:D4,FileQuestion:E4,FileScan:O4,FileSearch:F4,FileSearch2:I4,FileSignature:U2,FileSliders:R4,FileSpreadsheet:B4,FileStack:z4,FileSymlink:Z4,FileTerminal:N4,FileText:W4,FileType:j4,FileType2:U4,FileUp:$4,FileVideo:G4,FileVideo2:q4,FileVolume:Y4,FileVolume2:X4,FileWarning:K4,FileX:Q4,FileX2:J4,Files:e5,Film:a5,Filter:i5,FilterX:s5,Fingerprint:n5,FireExtinguisher:h5,Fish:c5,FishOff:o5,FishSymbol:r5,Flag:g5,FlagOff:d5,FlagTriangleLeft:l5,FlagTriangleRight:p5,Flame:M5,FlameKindling:u5,Flashlight:v5,FlashlightOff:f5,FlaskConical:x5,FlaskConicalOff:m5,FlaskRound:y5,FlipHorizontal:_5,FlipHorizontal2:b5,FlipVertical:S5,FlipVertical2:w5,Flower:V5,Flower2:C5,Focus:A5,FoldHorizontal:L5,FoldVertical:H5,Folder:a3,FolderArchive:k5,FolderCheck:P5,FolderClock:D5,FolderClosed:T5,FolderCog:$2,FolderCog2:$2,FolderDot:E5,FolderDown:O5,FolderEdit:q2,FolderGit:F5,FolderGit2:I5,FolderHeart:R5,FolderInput:B5,FolderKanban:z5,FolderKey:Z5,FolderLock:N5,FolderMinus:W5,FolderOpen:j5,FolderOpenDot:U5,FolderOutput:$5,FolderPen:q2,FolderPlus:q5,FolderRoot:G5,FolderSearch:Y5,FolderSearch2:X5,FolderSymlink:K5,FolderSync:J5,FolderTree:Q5,FolderUp:t3,FolderX:e3,Folders:s3,Footprints:i3,Forklift:n3,FormInput:h3,Forward:o3,Frame:r3,Framer:c3,Frown:d3,Fuel:l3,Fullscreen:p3,FunctionSquare:g3,GalleryHorizontal:M3,GalleryHorizontalEnd:u3,GalleryThumbnails:f3,GalleryVertical:m3,GalleryVerticalEnd:v3,Gamepad:y3,Gamepad2:x3,GanttChart:b3,GanttChartSquare:u1,GanttSquare:u1,Gauge:w3,GaugeCircle:_3,Gavel:S3,Gem:C3,Ghost:V3,Gift:A3,GitBranch:H3,GitBranchPlus:L3,GitCommit:G2,GitCommitHorizontal:G2,GitCommitVertical:k3,GitCompare:D3,GitCompareArrows:P3,GitFork:T3,GitGraph:E3,GitMerge:O3,GitPullRequest:Z3,GitPullRequestArrow:I3,GitPullRequestClosed:F3,GitPullRequestCreate:B3,GitPullRequestCreateArrow:R3,GitPullRequestDraft:z3,Github:N3,Gitlab:W3,GlassWater:U3,Glasses:j3,Globe:q3,Globe2:z2,GlobeLock:$3,Goal:G3,Grab:X3,GraduationCap:Y3,Grape:K3,Grid:M1,Grid2X2:X2,Grid2x2:X2,Grid3X3:M1,Grid3x3:M1,Grip:tg,GripHorizontal:J3,GripVertical:Q3,Group:eg,Guitar:ag,Hammer:sg,Hand:rg,HandCoins:ig,HandHeart:ng,HandHelping:Y2,HandMetal:hg,HandPlatter:og,Handshake:cg,HardDrive:pg,HardDriveDownload:dg,HardDriveUpload:lg,HardHat:gg,Hash:ug,Haze:Mg,HdmiPort:fg,Heading:wg,Heading1:vg,Heading2:mg,Heading3:xg,Heading4:yg,Heading5:bg,Heading6:_g,Headphones:Sg,Headset:Cg,Heart:kg,HeartCrack:Vg,HeartHandshake:Ag,HeartOff:Lg,HeartPulse:Hg,Heater:Pg,HelpCircle:Dg,HelpingHand:Y2,Hexagon:Tg,Highlighter:Eg,History:Og,Home:Ig,Hop:Rg,HopOff:Fg,Hotel:Bg,Hourglass:zg,IceCream:Ng,IceCream2:Zg,Image:Gg,ImageDown:Wg,ImageMinus:Ug,ImageOff:jg,ImagePlus:$g,ImageUp:qg,Images:Xg,Import:Yg,Inbox:Kg,Indent:Jg,IndianRupee:Qg,Infinity:tu,Info:eu,Inspect:Q2,InspectionPanel:au,Instagram:su,Italic:iu,IterationCcw:nu,IterationCw:hu,JapaneseYen:ou,Joystick:ru,Kanban:cu,KanbanSquare:J2,KanbanSquareDashed:K2,Key:pu,KeyRound:du,KeySquare:lu,Keyboard:uu,KeyboardMusic:gu,Lamp:yu,LampCeiling:Mu,LampDesk:fu,LampFloor:vu,LampWallDown:mu,LampWallUp:xu,LandPlot:bu,Landmark:_u,Languages:wu,Laptop:Cu,Laptop2:Su,Lasso:Au,LassoSelect:Vu,Laugh:Lu,Layers:Pu,Layers2:Hu,Layers3:ku,Layout:ra,LayoutDashboard:Du,LayoutGrid:Tu,LayoutList:Eu,LayoutPanelLeft:Ou,LayoutPanelTop:Iu,LayoutTemplate:Fu,Leaf:Ru,LeafyGreen:Bu,Library:Nu,LibraryBig:zu,LibrarySquare:Zu,LifeBuoy:Wu,Ligature:Uu,Lightbulb:$u,LightbulbOff:ju,LineChart:qu,Link:Yu,Link2:Xu,Link2Off:Gu,Linkedin:Ku,List:p6,ListChecks:Ju,ListCollapse:Qu,ListEnd:t6,ListFilter:e6,ListMinus:a6,ListMusic:s6,ListOrdered:i6,ListPlus:n6,ListRestart:h6,ListStart:o6,ListTodo:r6,ListTree:c6,ListVideo:d6,ListX:l6,Loader:u6,Loader2:g6,Locate:v6,LocateFixed:M6,LocateOff:f6,Lock:x6,LockKeyhole:m6,LogIn:y6,LogOut:b6,Lollipop:_6,Luggage:w6,MSquare:S6,Magnet:C6,Mail:E6,MailCheck:V6,MailMinus:A6,MailOpen:L6,MailPlus:H6,MailQuestion:k6,MailSearch:P6,MailWarning:D6,MailX:T6,Mailbox:O6,Mails:I6,Map:z6,MapPin:R6,MapPinOff:F6,MapPinned:B6,Martini:Z6,Maximize:W6,Maximize2:N6,Medal:U6,Megaphone:$6,MegaphoneOff:j6,Meh:q6,MemoryStick:G6,Menu:Y6,MenuSquare:X6,Merge:K6,MessageCircle:r8,MessageCircleCode:J6,MessageCircleDashed:Q6,MessageCircleHeart:t8,MessageCircleMore:e8,MessageCircleOff:a8,MessageCirclePlus:s8,MessageCircleQuestion:i8,MessageCircleReply:n8,MessageCircleWarning:h8,MessageCircleX:o8,MessageSquare:w8,MessageSquareCode:c8,MessageSquareDashed:d8,MessageSquareDiff:l8,MessageSquareDot:p8,MessageSquareHeart:g8,MessageSquareMore:u8,MessageSquareOff:M8,MessageSquarePlus:f8,MessageSquareQuote:v8,MessageSquareReply:m8,MessageSquareShare:x8,MessageSquareText:y8,MessageSquareWarning:b8,MessageSquareX:_8,MessagesSquare:S8,Mic:A8,Mic2:C8,MicOff:V8,Microscope:L8,Microwave:H8,Milestone:k8,Milk:D8,MilkOff:P8,Minimize:E8,Minimize2:T8,Minus:F8,MinusCircle:O8,MinusSquare:I8,Monitor:X8,MonitorCheck:R8,MonitorDot:B8,MonitorDown:z8,MonitorOff:Z8,MonitorPause:N8,MonitorPlay:W8,MonitorSmartphone:U8,MonitorSpeaker:j8,MonitorStop:$8,MonitorUp:q8,MonitorX:G8,Moon:K8,MoonStar:Y8,MoreHorizontal:J8,MoreVertical:Q8,Mountain:eM,MountainSnow:tM,Mouse:hM,MousePointer:nM,MousePointer2:aM,MousePointerClick:sM,MousePointerSquare:Q2,MousePointerSquareDashed:iM,Move:xM,Move3D:ta,Move3d:ta,MoveDiagonal:rM,MoveDiagonal2:oM,MoveDown:lM,MoveDownLeft:cM,MoveDownRight:dM,MoveHorizontal:pM,MoveLeft:gM,MoveRight:uM,MoveUp:vM,MoveUpLeft:MM,MoveUpRight:fM,MoveVertical:mM,Music:wM,Music2:yM,Music3:bM,Music4:_M,Navigation:AM,Navigation2:CM,Navigation2Off:SM,NavigationOff:VM,Network:LM,Newspaper:HM,Nfc:kM,Notebook:EM,NotebookPen:PM,NotebookTabs:DM,NotebookText:TM,NotepadText:IM,NotepadTextDashed:OM,Nut:RM,NutOff:FM,Octagon:BM,Option:zM,Orbit:ZM,Outdent:NM,Package:YM,Package2:WM,PackageCheck:UM,PackageMinus:jM,PackageOpen:$M,PackagePlus:qM,PackageSearch:GM,PackageX:XM,PaintBucket:KM,PaintRoller:JM,Paintbrush:tf,Paintbrush2:QM,Palette:ef,Palmtree:af,PanelBottom:hf,PanelBottomClose:sf,PanelBottomDashed:ea,PanelBottomInactive:ea,PanelBottomOpen:nf,PanelLeft:na,PanelLeftClose:aa,PanelLeftDashed:sa,PanelLeftInactive:sa,PanelLeftOpen:ia,PanelRight:cf,PanelRightClose:of,PanelRightDashed:ha,PanelRightInactive:ha,PanelRightOpen:rf,PanelTop:pf,PanelTopClose:df,PanelTopDashed:oa,PanelTopInactive:oa,PanelTopOpen:lf,PanelsLeftBottom:gf,PanelsLeftRight:R2,PanelsRightBottom:uf,PanelsTopBottom:ga,PanelsTopLeft:ra,Paperclip:Mf,Parentheses:ff,ParkingCircle:mf,ParkingCircleOff:vf,ParkingMeter:xf,ParkingSquare:bf,ParkingSquareOff:yf,PartyPopper:_f,Pause:Cf,PauseCircle:wf,PauseOctagon:Sf,PawPrint:Vf,PcCase:Af,Pen:da,PenBox:He,PenLine:ca,PenSquare:He,PenTool:Lf,Pencil:Pf,PencilLine:Hf,PencilRuler:kf,Pentagon:Df,Percent:If,PercentCircle:Tf,PercentDiamond:Ef,PercentSquare:Of,PersonStanding:Ff,Phone:Uf,PhoneCall:Rf,PhoneForwarded:Bf,PhoneIncoming:zf,PhoneMissed:Zf,PhoneOff:Nf,PhoneOutgoing:Wf,Pi:$f,PiSquare:jf,Piano:qf,Pickaxe:Gf,PictureInPicture:Yf,PictureInPicture2:Xf,PieChart:Kf,PiggyBank:Jf,Pilcrow:t7,PilcrowSquare:Qf,Pill:e7,Pin:s7,PinOff:a7,Pipette:i7,Pizza:n7,Plane:r7,PlaneLanding:h7,PlaneTakeoff:o7,Play:l7,PlayCircle:c7,PlaySquare:d7,Plug:M7,Plug2:p7,PlugZap:u7,PlugZap2:g7,Plus:m7,PlusCircle:f7,PlusSquare:v7,Pocket:y7,PocketKnife:x7,Podcast:b7,Pointer:w7,PointerOff:_7,Popcorn:S7,Popsicle:C7,PoundSterling:V7,Power:k7,PowerCircle:A7,PowerOff:L7,PowerSquare:H7,Presentation:P7,Printer:D7,Projector:T7,Puzzle:E7,Pyramid:O7,QrCode:I7,Quote:F7,Rabbit:R7,Radar:B7,Radiation:z7,Radical:Z7,Radio:U7,RadioReceiver:N7,RadioTower:W7,Radius:j7,RailSymbol:$7,Rainbow:q7,Rat:G7,Ratio:X7,Receipt:iv,ReceiptCent:Y7,ReceiptEuro:K7,ReceiptIndianRupee:J7,ReceiptJapaneseYen:Q7,ReceiptPoundSterling:tv,ReceiptRussianRuble:ev,ReceiptSwissFranc:av,ReceiptText:sv,RectangleHorizontal:nv,RectangleVertical:hv,Recycle:ov,Redo:dv,Redo2:rv,RedoDot:cv,RefreshCcw:pv,RefreshCcwDot:lv,RefreshCw:uv,RefreshCwOff:gv,Refrigerator:Mv,Regex:fv,RemoveFormatting:vv,Repeat:yv,Repeat1:mv,Repeat2:xv,Replace:_v,ReplaceAll:bv,Reply:Sv,ReplyAll:wv,Rewind:Cv,Ribbon:Vv,Rocket:Av,RockingChair:Lv,RollerCoaster:Hv,Rotate3D:la,Rotate3d:la,RotateCcw:kv,RotateCw:Pv,Route:Tv,RouteOff:Dv,Router:Ev,Rows:pa,Rows2:pa,Rows3:ga,Rows4:Ov,Rss:Iv,Ruler:Fv,RussianRuble:Rv,Sailboat:Bv,Salad:zv,Sandwich:Zv,Satellite:Wv,SatelliteDish:Nv,Save:jv,SaveAll:Uv,Scale:$v,Scale3D:ua,Scale3d:ua,Scaling:qv,Scan:tm,ScanBarcode:Gv,ScanEye:Xv,ScanFace:Yv,ScanLine:Kv,ScanSearch:Jv,ScanText:Qv,ScatterChart:em,School:sm,School2:am,Scissors:om,ScissorsLineDashed:im,ScissorsSquare:hm,ScissorsSquareDashedBottom:nm,ScreenShare:cm,ScreenShareOff:rm,Scroll:lm,ScrollText:dm,Search:fm,SearchCheck:pm,SearchCode:gm,SearchSlash:um,SearchX:Mm,Send:mm,SendHorizonal:Ma,SendHorizontal:Ma,SendToBack:vm,SeparatorHorizontal:xm,SeparatorVertical:ym,Server:Sm,ServerCog:bm,ServerCrash:_m,ServerOff:wm,Settings:Vm,Settings2:Cm,Shapes:Am,Share:Hm,Share2:Lm,Sheet:km,Shell:Pm,Shield:Zm,ShieldAlert:Dm,ShieldBan:Tm,ShieldCheck:Em,ShieldClose:fa,ShieldEllipsis:Om,ShieldHalf:Im,ShieldMinus:Fm,ShieldOff:Rm,ShieldPlus:Bm,ShieldQuestion:zm,ShieldX:fa,Ship:Wm,ShipWheel:Nm,Shirt:Um,ShoppingBag:jm,ShoppingBasket:$m,ShoppingCart:qm,Shovel:Gm,ShowerHead:Xm,Shrink:Ym,Shrub:Km,Shuffle:Jm,Sidebar:na,SidebarClose:aa,SidebarOpen:ia,Sigma:t9,SigmaSquare:Qm,Signal:n9,SignalHigh:e9,SignalLow:a9,SignalMedium:s9,SignalZero:i9,Signpost:o9,SignpostBig:h9,Siren:r9,SkipBack:c9,SkipForward:d9,Skull:l9,Slack:p9,Slash:g9,SlashSquare:va,Slice:u9,Sliders:f9,SlidersHorizontal:M9,Smartphone:x9,SmartphoneCharging:v9,SmartphoneNfc:m9,Smile:b9,SmilePlus:y9,Snail:_9,Snowflake:w9,Sofa:S9,SortAsc:b2,SortDesc:m2,Soup:C9,Space:V9,Spade:A9,Sparkle:L9,Sparkles:ma,Speaker:H9,Speech:k9,SpellCheck:D9,SpellCheck2:P9,Spline:T9,Split:I9,SplitSquareHorizontal:E9,SplitSquareVertical:O9,SprayCan:F9,Sprout:R9,Square:W9,SquareAsterisk:w2,SquareCode:I2,SquareDashedBottom:z9,SquareDashedBottomCode:B9,SquareDot:B2,SquareEqual:Z2,SquareGantt:u1,SquareKanban:J2,SquareKanbanDashed:K2,SquarePen:He,SquareRadical:Z9,SquareSlash:va,SquareStack:N9,SquareUser:ya,SquareUserRound:xa,Squircle:U9,Squirrel:j9,Stamp:$9,Star:X9,StarHalf:q9,StarOff:G9,Stars:ma,StepBack:Y9,StepForward:K9,Stethoscope:J9,Sticker:Q9,StickyNote:tx,StopCircle:ex,Store:ax,StretchHorizontal:sx,StretchVertical:ix,Strikethrough:nx,Subscript:hx,Subtitles:k2,Sun:lx,SunDim:ox,SunMedium:rx,SunMoon:cx,SunSnow:dx,Sunrise:px,Sunset:gx,Superscript:ux,SwatchBook:Mx,SwissFranc:fx,SwitchCamera:vx,Sword:mx,Swords:xx,Syringe:yx,Table:Ax,Table2:bx,TableCellsMerge:_x,TableCellsSplit:wx,TableColumnsSplit:Sx,TableProperties:Cx,TableRowsSplit:Vx,Tablet:Hx,TabletSmartphone:Lx,Tablets:kx,Tag:Px,Tags:Dx,Tally1:Tx,Tally2:Ex,Tally3:Ox,Tally4:Ix,Tally5:Fx,Tangent:Rx,Target:Bx,Telescope:zx,Tent:Nx,TentTree:Zx,Terminal:Ux,TerminalSquare:Wx,TestTube:$x,TestTube2:jx,TestTubes:qx,Text:Jx,TextCursor:Xx,TextCursorInput:Gx,TextQuote:Yx,TextSearch:Kx,TextSelect:ba,TextSelection:ba,Theater:Qx,Thermometer:ay,ThermometerSnowflake:ty,ThermometerSun:ey,ThumbsDown:sy,ThumbsUp:iy,Ticket:ly,TicketCheck:ny,TicketMinus:hy,TicketPercent:oy,TicketPlus:ry,TicketSlash:cy,TicketX:dy,Timer:uy,TimerOff:py,TimerReset:gy,ToggleLeft:My,ToggleRight:fy,Tornado:vy,Torus:my,Touchpad:yy,TouchpadOff:xy,TowerControl:by,ToyBrick:_y,Tractor:wy,TrafficCone:Sy,Train:_a,TrainFront:Vy,TrainFrontTunnel:Cy,TrainTrack:Ay,TramFront:_a,Trash:Hy,Trash2:Ly,TreeDeciduous:ky,TreePine:Py,Trees:Dy,Trello:Ty,TrendingDown:Ey,TrendingUp:Oy,Triangle:Fy,TriangleRight:Iy,Trophy:Ry,Truck:By,Turtle:zy,Tv:Ny,Tv2:Zy,Twitch:Wy,Twitter:Uy,Type:jy,Umbrella:qy,UmbrellaOff:$y,Underline:Gy,Undo:Ky,Undo2:Xy,UndoDot:Yy,UnfoldHorizontal:Jy,UnfoldVertical:Qy,Ungroup:tb,Unlink:ab,Unlink2:eb,Unlock:ib,UnlockKeyhole:sb,Unplug:nb,Upload:ob,UploadCloud:hb,Usb:rb,User:fb,User2:La,UserCheck:cb,UserCheck2:wa,UserCircle:T2,UserCircle2:D2,UserCog:db,UserCog2:Sa,UserMinus:lb,UserMinus2:Ca,UserPlus:pb,UserPlus2:Va,UserRound:La,UserRoundCheck:wa,UserRoundCog:Sa,UserRoundMinus:Ca,UserRoundPlus:Va,UserRoundSearch:gb,UserRoundX:Aa,UserSearch:ub,UserSquare:ya,UserSquare2:xa,UserX:Mb,UserX2:Aa,Users:vb,Users2:Ha,UsersRound:Ha,Utensils:xb,UtensilsCrossed:mb,UtilityPole:yb,Variable:bb,Vault:_b,Vegan:wb,VenetianMask:Sb,Verified:C2,Vibrate:Vb,VibrateOff:Cb,Video:Lb,VideoOff:Ab,Videotape:Hb,View:kb,Voicemail:Pb,Volume:Ob,Volume1:Db,Volume2:Tb,VolumeX:Eb,Vote:Ib,Wallet:Bb,Wallet2:Fb,WalletCards:Rb,Wallpaper:zb,Wand:Nb,Wand2:Zb,Warehouse:Wb,WashingMachine:Ub,Watch:jb,Waves:$b,Waypoints:qb,Webcam:Gb,Webhook:Yb,WebhookOff:Xb,Weight:Kb,Wheat:Qb,WheatOff:Jb,WholeWord:t_,Wifi:a_,WifiOff:e_,Wind:s_,Wine:n_,WineOff:i_,Workflow:h_,WrapText:o_,Wrench:r_,X:p_,XCircle:c_,XOctagon:d_,XSquare:l_,Youtube:g_,Zap:M_,ZapOff:u_,ZoomIn:f_,ZoomOut:v_},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=({icons:a={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(a).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const s=document.querySelectorAll(`[${t}]`);if(Array.from(s).forEach(i=>g2(i,{nameAttr:t,icons:a,attrs:e})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(n=>g2(n,{nameAttr:"icon-name",icons:a,attrs:e})))}},tt={VEHICLES:"fuel_counter_vehicles",LOGS:"fuel_counter_logs",SETTINGS:"fuel_counter_settings",ACTIVE_VEHICLE_ID:"fuel_counter_active_vehicle_id"},f1={currency:"$",distanceUnit:"km",volumeUnit:"L",consumptionUnit:"l_100km",theme:"dark"},ke=[{id:"v-1",name:"Passat B8 2.0 TDI",make:"Volkswagen",model:"Passat",year:2019,fuelType:"Diesel",tankCapacity:66,targetConsumption:5.5,initialOdometer:142e3},{id:"v-2",name:"Civic 1.5 Turbo",make:"Honda",model:"Civic",year:2021,fuelType:"Gasoline 95",tankCapacity:47,targetConsumption:6.8,initialOdometer:38500}],v1=[{id:"log-1",vehicleId:"v-1",date:"2026-06-01",odometer:142e3,fuelVolume:55,pricePerUnit:1.65,totalCost:90.75,fuelType:"Diesel",isFullTank:!0,station:"Shell Premium",notes:"Initial full tank refuel"},{id:"log-2",vehicleId:"v-1",date:"2026-06-12",odometer:142850,fuelVolume:49.3,pricePerUnit:1.68,totalCost:82.82,fuelType:"Diesel",isFullTank:!0,station:"BP Express",notes:"Highway trip to Munich",calculatedL100km:5.8},{id:"log-3",vehicleId:"v-1",date:"2026-06-25",odometer:143770,fuelVolume:51.6,pricePerUnit:1.64,totalCost:84.62,fuelType:"Diesel",isFullTank:!0,station:"Shell Premium",notes:"Mixed city & highway",calculatedL100km:5.61},{id:"log-4",vehicleId:"v-1",date:"2026-07-08",odometer:144710,fuelVolume:50.8,pricePerUnit:1.62,totalCost:82.3,fuelType:"Diesel",isFullTank:!0,station:"Circle K",notes:"Commute and weekend trip",calculatedL100km:5.4},{id:"log-5",vehicleId:"v-1",date:"2026-07-20",odometer:145630,fuelVolume:52.4,pricePerUnit:1.67,totalCost:87.51,fuelType:"Diesel",isFullTank:!0,station:"Shell Premium",notes:"Full tank refuel before vacation",calculatedL100km:5.7}];class F{static getSettings(){try{const t=localStorage.getItem(tt.SETTINGS);return t?{...f1,...JSON.parse(t)}:{...f1}}catch{return{...f1}}}static saveSettings(t){localStorage.setItem(tt.SETTINGS,JSON.stringify(t))}static getVehicles(){try{const t=localStorage.getItem(tt.VEHICLES);return t?JSON.parse(t):(this.saveVehicles(ke),ke)}catch{return ke}}static saveVehicles(t){localStorage.setItem(tt.VEHICLES,JSON.stringify(t))}static getActiveVehicleId(){var s;let t=localStorage.getItem(tt.ACTIVE_VEHICLE_ID);const e=this.getVehicles();return(!t||!e.some(i=>i.id===t))&&(t=((s=e[0])==null?void 0:s.id)||"v-1",this.setActiveVehicleId(t)),t}static setActiveVehicleId(t){localStorage.setItem(tt.ACTIVE_VEHICLE_ID,t)}static getLogs(t=null){try{const e=localStorage.getItem(tt.LOGS),s=e?JSON.parse(e):(this.seedSampleLogs(),v1);return t?s.filter(i=>i.vehicleId===t).sort((i,n)=>new Date(n.date)-new Date(i.date)):s.sort((i,n)=>new Date(n.date)-new Date(i.date))}catch{return v1}}static seedSampleLogs(){localStorage.setItem(tt.LOGS,JSON.stringify(v1))}static saveLog(t){const e=this.getLogs(),s=e.findIndex(n=>n.id===t.id);s>=0?e[s]={...e[s],...t}:e.push({id:"log-"+Date.now(),...t});const i=e.filter(n=>n.vehicleId===t.vehicleId).sort((n,o)=>n.odometer-o.odometer);for(let n=1;n<i.length;n++){const o=i[n-1],r=i[n];if(r.isFullTank&&o.odometer<r.odometer){const c=r.odometer-o.odometer;r.calculatedL100km=Number((r.fuelVolume/c*100).toFixed(2))}}localStorage.setItem(tt.LOGS,JSON.stringify(e))}static deleteLog(t){const e=this.getLogs().filter(s=>s.id!==t);localStorage.setItem(tt.LOGS,JSON.stringify(e))}static saveVehicle(t){const e=this.getVehicles(),s=e.findIndex(i=>i.id===t.id);s>=0?e[s]={...e[s],...t}:e.push({id:"v-"+Date.now(),...t}),this.saveVehicles(e)}static deleteVehicle(t){let e=this.getVehicles().filter(s=>s.id!==t);e.length===0&&(e=ke),this.saveVehicles(e),this.getActiveVehicleId()===t&&this.setActiveVehicleId(e[0].id)}static exportData(){return JSON.stringify({version:"1.0",timestamp:new Date().toISOString(),vehicles:this.getVehicles(),logs:this.getLogs(),settings:this.getSettings()},null,2)}static importData(t){const e=JSON.parse(t);e.vehicles&&Array.isArray(e.vehicles)&&this.saveVehicles(e.vehicles),e.logs&&Array.isArray(e.logs)&&localStorage.setItem(tt.LOGS,JSON.stringify(e.logs)),e.settings&&this.saveSettings(e.settings)}static resetToDefault(){localStorage.removeItem(tt.LOGS),localStorage.removeItem(tt.VEHICLES),localStorage.removeItem(tt.SETTINGS),localStorage.removeItem(tt.ACTIVE_VEHICLE_ID),this.getVehicles(),this.seedSampleLogs()}}const te={DISTANCE:{MILES:"mi"},VOLUME:{LITERS:"L",GALLONS_US:"gal_us",GALLONS_UK:"gal_uk"}};function y_({distance:a,volume:t,pricePerUnit:e=0,distanceUnit:s="km",volumeUnit:i="L"}){if(!a||a<=0||!t||t<=0)return{l100km:0,kmL:0,mpgUs:0,mpgUk:0,totalCost:0,costPerDist:0,costFor100:0};const n=s===te.DISTANCE.MILES?a/.621371:a,o=i===te.VOLUME.GALLONS_US?t*3.78541:i===te.VOLUME.GALLONS_UK?t*4.54609:t,r=o/n*100,c=n/o,d=235.215/r,l=282.481/r,p=t*e,g=p/a,u=r/100*100*(e/(i===te.VOLUME.LITERS?1:i===te.VOLUME.GALLONS_US?3.78541:4.54609));return{l100km:Number(r.toFixed(2)),kmL:Number(c.toFixed(2)),mpgUs:Number(d.toFixed(2)),mpgUk:Number(l.toFixed(2)),totalCost:Number(p.toFixed(2)),costPerDist:Number(g.toFixed(3)),costFor100:Number(u.toFixed(2))}}function b_({tripDistance:a,avgConsumption:t,fuelPrice:e,conditionMultiplier:s=1,distanceUnit:i="km",volumeUnit:n="L"}){if(!a||!t||!e)return{fuelNeeded:0,totalCost:0,effectiveConsumption:0};const o=t*s,r=a/100*o,c=r*e;return{fuelNeeded:Number(r.toFixed(2)),totalCost:Number(c.toFixed(2)),effectiveConsumption:Number(o.toFixed(2))}}function ee(a,t="$"){return`${t}${Number(a).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Ve(a){return a+.5|0}const bt=(a,t,e)=>Math.max(Math.min(a,e),t);function oe(a){return bt(Ve(a*2.55),0,255)}function Vt(a){return bt(Ve(a*255),0,255)}function vt(a){return bt(Ve(a/2.55)/100,0,1)}function ka(a){return bt(Ve(a*100),0,100)}const nt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},O1=[..."0123456789ABCDEF"],__=a=>O1[a&15],w_=a=>O1[(a&240)>>4]+O1[a&15],Pe=a=>(a&240)>>4===(a&15),S_=a=>Pe(a.r)&&Pe(a.g)&&Pe(a.b)&&Pe(a.a);function C_(a){var t=a.length,e;return a[0]==="#"&&(t===4||t===5?e={r:255&nt[a[1]]*17,g:255&nt[a[2]]*17,b:255&nt[a[3]]*17,a:t===5?nt[a[4]]*17:255}:(t===7||t===9)&&(e={r:nt[a[1]]<<4|nt[a[2]],g:nt[a[3]]<<4|nt[a[4]],b:nt[a[5]]<<4|nt[a[6]],a:t===9?nt[a[7]]<<4|nt[a[8]]:255})),e}const V_=(a,t)=>a<255?t(a):"";function A_(a){var t=S_(a)?__:w_;return a?"#"+t(a.r)+t(a.g)+t(a.b)+V_(a.a,t):void 0}const L_=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Qs(a,t,e){const s=t*Math.min(e,1-e),i=(n,o=(n+a/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function H_(a,t,e){const s=(i,n=(i+a/60)%6)=>e-e*t*Math.max(Math.min(n,4-n,1),0);return[s(5),s(3),s(1)]}function k_(a,t,e){const s=Qs(a,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function P_(a,t,e,s,i){return a===i?(t-e)/s+(t<e?6:0):t===i?(e-a)/s+2:(a-t)/s+4}function K1(a){const e=a.r/255,s=a.g/255,i=a.b/255,n=Math.max(e,s,i),o=Math.min(e,s,i),r=(n+o)/2;let c,d,l;return n!==o&&(l=n-o,d=r>.5?l/(2-n-o):l/(n+o),c=P_(e,s,i,l,n),c=c*60+.5),[c|0,d||0,r]}function J1(a,t,e,s){return(Array.isArray(t)?a(t[0],t[1],t[2]):a(t,e,s)).map(Vt)}function Q1(a,t,e){return J1(Qs,a,t,e)}function D_(a,t,e){return J1(k_,a,t,e)}function T_(a,t,e){return J1(H_,a,t,e)}function ti(a){return(a%360+360)%360}function E_(a){const t=L_.exec(a);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?oe(+t[5]):Vt(+t[5]));const i=ti(+t[2]),n=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=D_(i,n,o):t[1]==="hsv"?s=T_(i,n,o):s=Q1(i,n,o),{r:s[0],g:s[1],b:s[2],a:e}}function O_(a,t){var e=K1(a);e[0]=ti(e[0]+t),e=Q1(e),a.r=e[0],a.g=e[1],a.b=e[2]}function I_(a){if(!a)return;const t=K1(a),e=t[0],s=ka(t[1]),i=ka(t[2]);return a.a<255?`hsla(${e}, ${s}%, ${i}%, ${vt(a.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const Pa={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Da={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function F_(){const a={},t=Object.keys(Da),e=Object.keys(Pa);let s,i,n,o,r;for(s=0;s<t.length;s++){for(o=r=t[s],i=0;i<e.length;i++)n=e[i],r=r.replace(n,Pa[n]);n=parseInt(Da[o],16),a[r]=[n>>16&255,n>>8&255,n&255]}return a}let De;function R_(a){De||(De=F_(),De.transparent=[0,0,0,0]);const t=De[a.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const B_=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function z_(a){const t=B_.exec(a);let e=255,s,i,n;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?oe(o):bt(o*255,0,255)}return s=+t[1],i=+t[3],n=+t[5],s=255&(t[2]?oe(s):bt(s,0,255)),i=255&(t[4]?oe(i):bt(i,0,255)),n=255&(t[6]?oe(n):bt(n,0,255)),{r:s,g:i,b:n,a:e}}}function Z_(a){return a&&(a.a<255?`rgba(${a.r}, ${a.g}, ${a.b}, ${vt(a.a)})`:`rgb(${a.r}, ${a.g}, ${a.b})`)}const m1=a=>a<=.0031308?a*12.92:Math.pow(a,1/2.4)*1.055-.055,$t=a=>a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4);function N_(a,t,e){const s=$t(vt(a.r)),i=$t(vt(a.g)),n=$t(vt(a.b));return{r:Vt(m1(s+e*($t(vt(t.r))-s))),g:Vt(m1(i+e*($t(vt(t.g))-i))),b:Vt(m1(n+e*($t(vt(t.b))-n))),a:a.a+e*(t.a-a.a)}}function Te(a,t,e){if(a){let s=K1(a);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Q1(s),a.r=s[0],a.g=s[1],a.b=s[2]}}function ei(a,t){return a&&Object.assign(t||{},a)}function Ta(a){var t={r:0,g:0,b:0,a:255};return Array.isArray(a)?a.length>=3&&(t={r:a[0],g:a[1],b:a[2],a:255},a.length>3&&(t.a=Vt(a[3]))):(t=ei(a,{r:0,g:0,b:0,a:1}),t.a=Vt(t.a)),t}function W_(a){return a.charAt(0)==="r"?z_(a):E_(a)}class me{constructor(t){if(t instanceof me)return t;const e=typeof t;let s;e==="object"?s=Ta(t):e==="string"&&(s=C_(t)||R_(t)||W_(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=ei(this._rgb);return t&&(t.a=vt(t.a)),t}set rgb(t){this._rgb=Ta(t)}rgbString(){return this._valid?Z_(this._rgb):void 0}hexString(){return this._valid?A_(this._rgb):void 0}hslString(){return this._valid?I_(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let n;const o=e===n?.5:e,r=2*o-1,c=s.a-i.a,d=((r*c===-1?r:(r+c)/(1+r*c))+1)/2;n=1-d,s.r=255&d*s.r+n*i.r+.5,s.g=255&d*s.g+n*i.g+.5,s.b=255&d*s.b+n*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=N_(this._rgb,t._rgb,e)),this}clone(){return new me(this.rgb)}alpha(t){return this._rgb.a=Vt(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Ve(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Te(this._rgb,2,t),this}darken(t){return Te(this._rgb,2,-t),this}saturate(t){return Te(this._rgb,1,t),this}desaturate(t){return Te(this._rgb,1,-t),this}rotate(t){return O_(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function ut(){}const U_=(()=>{let a=0;return()=>a++})();function P(a){return a==null}function Z(a){if(Array.isArray&&Array.isArray(a))return!0;const t=Object.prototype.toString.call(a);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function D(a){return a!==null&&Object.prototype.toString.call(a)==="[object Object]"}function W(a){return(typeof a=="number"||a instanceof Number)&&isFinite(+a)}function it(a,t){return W(a)?a:t}function L(a,t){return typeof a>"u"?t:a}const j_=(a,t)=>typeof a=="string"&&a.endsWith("%")?parseFloat(a)/100:+a/t,ai=(a,t)=>typeof a=="string"&&a.endsWith("%")?parseFloat(a)/100*t:+a;function R(a,t,e){if(a&&typeof a.call=="function")return a.apply(e,t)}function O(a,t,e,s){let i,n,o;if(Z(a))for(n=a.length,i=0;i<n;i++)t.call(e,a[i],i);else if(D(a))for(o=Object.keys(a),n=o.length,i=0;i<n;i++)t.call(e,a[o[i]],o[i])}function Qe(a,t){let e,s,i,n;if(!a||!t||a.length!==t.length)return!1;for(e=0,s=a.length;e<s;++e)if(i=a[e],n=t[e],i.datasetIndex!==n.datasetIndex||i.index!==n.index)return!1;return!0}function t1(a){if(Z(a))return a.map(t1);if(D(a)){const t=Object.create(null),e=Object.keys(a),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=t1(a[e[i]]);return t}return a}function si(a){return["__proto__","prototype","constructor"].indexOf(a)===-1}function $_(a,t,e,s){if(!si(a))return;const i=t[a],n=e[a];D(i)&&D(n)?xe(i,n,s):t[a]=t1(n)}function xe(a,t,e){const s=Z(t)?t:[t],i=s.length;if(!D(a))return a;e=e||{};const n=e.merger||$_;let o;for(let r=0;r<i;++r){if(o=s[r],!D(o))continue;const c=Object.keys(o);for(let d=0,l=c.length;d<l;++d)n(c[d],a,o,e)}return a}function ge(a,t){return xe(a,t,{merger:q_})}function q_(a,t,e){if(!si(a))return;const s=t[a],i=e[a];D(s)&&D(i)?ge(s,i):Object.prototype.hasOwnProperty.call(t,a)||(t[a]=t1(i))}const Ea={"":a=>a,x:a=>a.x,y:a=>a.y};function G_(a){const t=a.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function X_(a){const t=G_(a);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function At(a,t){return(Ea[t]||(Ea[t]=X_(t)))(a)}function t2(a){return a.charAt(0).toUpperCase()+a.slice(1)}const ye=a=>typeof a<"u",Lt=a=>typeof a=="function",Oa=(a,t)=>{if(a.size!==t.size)return!1;for(const e of a)if(!t.has(e))return!1;return!0};function Y_(a){return a.type==="mouseup"||a.type==="click"||a.type==="contextmenu"}const E=Math.PI,B=2*E,K_=B+E,e1=Number.POSITIVE_INFINITY,J_=E/180,j=E/2,Dt=E/4,Ia=E*2/3,_t=Math.log10,gt=Math.sign;function ue(a,t,e){return Math.abs(a-t)<e}function Fa(a){const t=Math.round(a);a=ue(a,t,a/1e3)?t:a;const e=Math.pow(10,Math.floor(_t(a))),s=a/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function Q_(a){const t=[],e=Math.sqrt(a);let s;for(s=1;s<e;s++)a%s===0&&(t.push(s),t.push(a/s));return e===(e|0)&&t.push(e),t.sort((i,n)=>i-n).pop(),t}function tw(a){return typeof a=="symbol"||typeof a=="object"&&a!==null&&!(Symbol.toPrimitive in a||"toString"in a||"valueOf"in a)}function Xt(a){return!tw(a)&&!isNaN(parseFloat(a))&&isFinite(a)}function ew(a,t){const e=Math.round(a);return e-t<=a&&e+t>=a}function ii(a,t,e){let s,i,n;for(s=0,i=a.length;s<i;s++)n=a[s][e],isNaN(n)||(t.min=Math.min(t.min,n),t.max=Math.max(t.max,n))}function rt(a){return a*(E/180)}function e2(a){return a*(180/E)}function Ra(a){if(!W(a))return;let t=1,e=0;for(;Math.round(a*t)/t!==a;)t*=10,e++;return e}function ni(a,t){const e=t.x-a.x,s=t.y-a.y,i=Math.sqrt(e*e+s*s);let n=Math.atan2(s,e);return n<-.5*E&&(n+=B),{angle:n,distance:i}}function I1(a,t){return Math.sqrt(Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2))}function aw(a,t){return(a-t+K_)%B-E}function K(a){return(a%B+B)%B}function be(a,t,e,s){const i=K(a),n=K(t),o=K(e),r=K(n-i),c=K(o-i),d=K(i-n),l=K(i-o);return i===n||i===o||s&&n===o||r>c&&d<l}function q(a,t,e){return Math.max(t,Math.min(e,a))}function sw(a){return q(a,-32768,32767)}function mt(a,t,e,s=1e-6){return a>=Math.min(t,e)-s&&a<=Math.max(t,e)+s}function a2(a,t,e){e=e||(o=>a[o]<t);let s=a.length-1,i=0,n;for(;s-i>1;)n=i+s>>1,e(n)?i=n:s=n;return{lo:i,hi:s}}const xt=(a,t,e,s)=>a2(a,e,s?i=>{const n=a[i][t];return n<e||n===e&&a[i+1][t]===e}:i=>a[i][t]<e),iw=(a,t,e)=>a2(a,e,s=>a[s][t]>=e);function nw(a,t,e){let s=0,i=a.length;for(;s<i&&a[s]<t;)s++;for(;i>s&&a[i-1]>e;)i--;return s>0||i<a.length?a.slice(s,i):a}const hi=["push","pop","shift","splice","unshift"];function hw(a,t){if(a._chartjs){a._chartjs.listeners.push(t);return}Object.defineProperty(a,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),hi.forEach(e=>{const s="_onData"+t2(e),i=a[e];Object.defineProperty(a,e,{configurable:!0,enumerable:!1,value(...n){const o=i.apply(this,n);return a._chartjs.listeners.forEach(r=>{typeof r[s]=="function"&&r[s](...n)}),o}})})}function Ba(a,t){const e=a._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(hi.forEach(n=>{delete a[n]}),delete a._chartjs)}function oi(a){const t=new Set(a);return t.size===a.length?a:Array.from(t)}const ri=function(){return typeof window>"u"?function(a){return a()}:window.requestAnimationFrame}();function ci(a,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,ri.call(window,()=>{s=!1,a.apply(t,e)}))}}function ow(a,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(a,t,s)):a.apply(this,s),t}}const s2=a=>a==="start"?"left":a==="end"?"right":"center",Y=(a,t,e)=>a==="start"?t:a==="end"?e:(t+e)/2,rw=(a,t,e,s)=>a===(s?"left":"right")?e:a==="center"?(t+e)/2:t;function di(a,t,e){const s=t.length;let i=0,n=s;if(a._sorted){const{iScale:o,vScale:r,_parsed:c}=a,d=a.dataset&&a.dataset.options?a.dataset.options.spanGaps:null,l=o.axis,{min:p,max:g,minDefined:u,maxDefined:M}=o.getUserBounds();if(u){if(i=Math.min(xt(c,l,p).lo,e?s:xt(t,l,o.getPixelForValue(p)).lo),d){const f=c.slice(0,i+1).reverse().findIndex(v=>!P(v[r.axis]));i-=Math.max(0,f)}i=q(i,0,s-1)}if(M){let f=Math.max(xt(c,o.axis,g,!0).hi+1,e?0:xt(t,l,o.getPixelForValue(g),!0).hi+1);if(d){const v=c.slice(f-1).findIndex(m=>!P(m[r.axis]));f+=Math.max(0,v)}n=q(f,i,s)-i}else n=s-i}return{start:i,count:n}}function li(a){const{xScale:t,yScale:e,_scaleRanges:s}=a,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return a._scaleRanges=i,!0;const n=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),n}const Ee=a=>a===0||a===1,za=(a,t,e)=>-(Math.pow(2,10*(a-=1))*Math.sin((a-t)*B/e)),Za=(a,t,e)=>Math.pow(2,-10*a)*Math.sin((a-t)*B/e)+1,Me={linear:a=>a,easeInQuad:a=>a*a,easeOutQuad:a=>-a*(a-2),easeInOutQuad:a=>(a/=.5)<1?.5*a*a:-.5*(--a*(a-2)-1),easeInCubic:a=>a*a*a,easeOutCubic:a=>(a-=1)*a*a+1,easeInOutCubic:a=>(a/=.5)<1?.5*a*a*a:.5*((a-=2)*a*a+2),easeInQuart:a=>a*a*a*a,easeOutQuart:a=>-((a-=1)*a*a*a-1),easeInOutQuart:a=>(a/=.5)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2),easeInQuint:a=>a*a*a*a*a,easeOutQuint:a=>(a-=1)*a*a*a*a+1,easeInOutQuint:a=>(a/=.5)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2),easeInSine:a=>-Math.cos(a*j)+1,easeOutSine:a=>Math.sin(a*j),easeInOutSine:a=>-.5*(Math.cos(E*a)-1),easeInExpo:a=>a===0?0:Math.pow(2,10*(a-1)),easeOutExpo:a=>a===1?1:-Math.pow(2,-10*a)+1,easeInOutExpo:a=>Ee(a)?a:a<.5?.5*Math.pow(2,10*(a*2-1)):.5*(-Math.pow(2,-10*(a*2-1))+2),easeInCirc:a=>a>=1?a:-(Math.sqrt(1-a*a)-1),easeOutCirc:a=>Math.sqrt(1-(a-=1)*a),easeInOutCirc:a=>(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1),easeInElastic:a=>Ee(a)?a:za(a,.075,.3),easeOutElastic:a=>Ee(a)?a:Za(a,.075,.3),easeInOutElastic(a){return Ee(a)?a:a<.5?.5*za(a*2,.1125,.45):.5+.5*Za(a*2-1,.1125,.45)},easeInBack(a){return a*a*((1.70158+1)*a-1.70158)},easeOutBack(a){return(a-=1)*a*((1.70158+1)*a+1.70158)+1},easeInOutBack(a){let t=1.70158;return(a/=.5)<1?.5*(a*a*(((t*=1.525)+1)*a-t)):.5*((a-=2)*a*(((t*=1.525)+1)*a+t)+2)},easeInBounce:a=>1-Me.easeOutBounce(1-a),easeOutBounce(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},easeInOutBounce:a=>a<.5?Me.easeInBounce(a*2)*.5:Me.easeOutBounce(a*2-1)*.5+.5};function i2(a){if(a&&typeof a=="object"){const t=a.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Na(a){return i2(a)?a:new me(a)}function x1(a){return i2(a)?a:new me(a).saturate(.5).darken(.1).hexString()}const cw=["x","y","borderWidth","radius","tension"],dw=["color","borderColor","backgroundColor"];function lw(a){a.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),a.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),a.set("animations",{colors:{type:"color",properties:dw},numbers:{type:"number",properties:cw}}),a.describe("animations",{_fallback:"animation"}),a.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function pw(a){a.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Wa=new Map;function gw(a,t){t=t||{};const e=a+JSON.stringify(t);let s=Wa.get(e);return s||(s=new Intl.NumberFormat(a,t),Wa.set(e,s)),s}function Ae(a,t,e){return gw(t,e).format(a)}const pi={values(a){return Z(a)?a:""+a},numeric(a,t,e){if(a===0)return"0";const s=this.chart.options.locale;let i,n=a;if(e.length>1){const d=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(d<1e-4||d>1e15)&&(i="scientific"),n=uw(a,e)}const o=_t(Math.abs(n)),r=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(c,this.options.ticks.format),Ae(a,s,c)},logarithmic(a,t,e){if(a===0)return"0";const s=e[t].significand||a/Math.pow(10,Math.floor(_t(a)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?pi.numeric.call(this,a,t,e):""}};function uw(a,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&a!==Math.floor(a)&&(e=a-Math.floor(a)),e}var o1={formatters:pi};function Mw(a){a.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:o1.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),a.route("scale.ticks","color","","color"),a.route("scale.grid","color","","borderColor"),a.route("scale.border","color","","borderColor"),a.route("scale.title","color","","color"),a.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),a.describe("scales",{_fallback:"scale"}),a.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Zt=Object.create(null),F1=Object.create(null);function fe(a,t){if(!t)return a;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const n=e[s];a=a[n]||(a[n]=Object.create(null))}return a}function y1(a,t,e){return typeof t=="string"?xe(fe(a,t),e):xe(fe(a,""),t)}class fw{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>x1(i.backgroundColor),this.hoverBorderColor=(s,i)=>x1(i.borderColor),this.hoverColor=(s,i)=>x1(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return y1(this,t,e)}get(t){return fe(this,t)}describe(t,e){return y1(F1,t,e)}override(t,e){return y1(Zt,t,e)}route(t,e,s,i){const n=fe(this,t),o=fe(this,s),r="_"+e;Object.defineProperties(n,{[r]:{value:n[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[r],d=o[i];return D(c)?Object.assign({},d,c):L(c,d)},set(c){this[r]=c}}})}apply(t){t.forEach(e=>e(this))}}var N=new fw({_scriptable:a=>!a.startsWith("on"),_indexable:a=>a!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[lw,pw,Mw]);function vw(a){return!a||P(a.size)||P(a.family)?null:(a.style?a.style+" ":"")+(a.weight?a.weight+" ":"")+a.size+"px "+a.family}function a1(a,t,e,s,i){let n=t[i];return n||(n=t[i]=a.measureText(i).width,e.push(i)),n>s&&(s=n),s}function mw(a,t,e,s){s=s||{};let i=s.data=s.data||{},n=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},n=s.garbageCollect=[],s.font=t),a.save(),a.font=t;let o=0;const r=e.length;let c,d,l,p,g;for(c=0;c<r;c++)if(p=e[c],p!=null&&!Z(p))o=a1(a,i,n,o,p);else if(Z(p))for(d=0,l=p.length;d<l;d++)g=p[d],g!=null&&!Z(g)&&(o=a1(a,i,n,o,g));a.restore();const u=n.length/2;if(u>e.length){for(c=0;c<u;c++)delete i[n[c]];n.splice(0,u)}return o}function Tt(a,t,e){const s=a.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function Ua(a,t){!t&&!a||(t=t||a.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,a.width,a.height),t.restore())}function R1(a,t,e,s){gi(a,t,e,s,null)}function gi(a,t,e,s,i){let n,o,r,c,d,l,p,g;const u=t.pointStyle,M=t.rotation,f=t.radius;let v=(M||0)*J_;if(u&&typeof u=="object"&&(n=u.toString(),n==="[object HTMLImageElement]"||n==="[object HTMLCanvasElement]")){a.save(),a.translate(e,s),a.rotate(v),a.drawImage(u,-u.width/2,-u.height/2,u.width,u.height),a.restore();return}if(!(isNaN(f)||f<=0)){switch(a.beginPath(),u){default:i?a.ellipse(e,s,i/2,f,0,0,B):a.arc(e,s,f,0,B),a.closePath();break;case"triangle":l=i?i/2:f,a.moveTo(e+Math.sin(v)*l,s-Math.cos(v)*f),v+=Ia,a.lineTo(e+Math.sin(v)*l,s-Math.cos(v)*f),v+=Ia,a.lineTo(e+Math.sin(v)*l,s-Math.cos(v)*f),a.closePath();break;case"rectRounded":d=f*.516,c=f-d,o=Math.cos(v+Dt)*c,p=Math.cos(v+Dt)*(i?i/2-d:c),r=Math.sin(v+Dt)*c,g=Math.sin(v+Dt)*(i?i/2-d:c),a.arc(e-p,s-r,d,v-E,v-j),a.arc(e+g,s-o,d,v-j,v),a.arc(e+p,s+r,d,v,v+j),a.arc(e-g,s+o,d,v+j,v+E),a.closePath();break;case"rect":if(!M){c=Math.SQRT1_2*f,l=i?i/2:c,a.rect(e-l,s-c,2*l,2*c);break}v+=Dt;case"rectRot":p=Math.cos(v)*(i?i/2:f),o=Math.cos(v)*f,r=Math.sin(v)*f,g=Math.sin(v)*(i?i/2:f),a.moveTo(e-p,s-r),a.lineTo(e+g,s-o),a.lineTo(e+p,s+r),a.lineTo(e-g,s+o),a.closePath();break;case"crossRot":v+=Dt;case"cross":p=Math.cos(v)*(i?i/2:f),o=Math.cos(v)*f,r=Math.sin(v)*f,g=Math.sin(v)*(i?i/2:f),a.moveTo(e-p,s-r),a.lineTo(e+p,s+r),a.moveTo(e+g,s-o),a.lineTo(e-g,s+o);break;case"star":p=Math.cos(v)*(i?i/2:f),o=Math.cos(v)*f,r=Math.sin(v)*f,g=Math.sin(v)*(i?i/2:f),a.moveTo(e-p,s-r),a.lineTo(e+p,s+r),a.moveTo(e+g,s-o),a.lineTo(e-g,s+o),v+=Dt,p=Math.cos(v)*(i?i/2:f),o=Math.cos(v)*f,r=Math.sin(v)*f,g=Math.sin(v)*(i?i/2:f),a.moveTo(e-p,s-r),a.lineTo(e+p,s+r),a.moveTo(e+g,s-o),a.lineTo(e-g,s+o);break;case"line":o=i?i/2:Math.cos(v)*f,r=Math.sin(v)*f,a.moveTo(e-o,s-r),a.lineTo(e+o,s+r);break;case"dash":a.moveTo(e,s),a.lineTo(e+Math.cos(v)*(i?i/2:f),s+Math.sin(v)*f);break;case!1:a.closePath();break}a.fill(),t.borderWidth>0&&a.stroke()}}function yt(a,t,e){return e=e||.5,!t||a&&a.x>t.left-e&&a.x<t.right+e&&a.y>t.top-e&&a.y<t.bottom+e}function r1(a,t){a.save(),a.beginPath(),a.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),a.clip()}function c1(a){a.restore()}function xw(a,t,e,s,i){if(!t)return a.lineTo(e.x,e.y);if(i==="middle"){const n=(t.x+e.x)/2;a.lineTo(n,t.y),a.lineTo(n,e.y)}else i==="after"!=!!s?a.lineTo(t.x,e.y):a.lineTo(e.x,t.y);a.lineTo(e.x,e.y)}function yw(a,t,e,s){if(!t)return a.lineTo(e.x,e.y);a.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function bw(a,t){t.translation&&a.translate(t.translation[0],t.translation[1]),P(t.rotation)||a.rotate(t.rotation),t.color&&(a.fillStyle=t.color),t.textAlign&&(a.textAlign=t.textAlign),t.textBaseline&&(a.textBaseline=t.textBaseline)}function _w(a,t,e,s,i){if(i.strikethrough||i.underline){const n=a.measureText(s),o=t-n.actualBoundingBoxLeft,r=t+n.actualBoundingBoxRight,c=e-n.actualBoundingBoxAscent,d=e+n.actualBoundingBoxDescent,l=i.strikethrough?(c+d)/2:d;a.strokeStyle=a.fillStyle,a.beginPath(),a.lineWidth=i.decorationWidth||2,a.moveTo(o,l),a.lineTo(r,l),a.stroke()}}function ww(a,t){const e=a.fillStyle;a.fillStyle=t.color,a.fillRect(t.left,t.top,t.width,t.height),a.fillStyle=e}function Nt(a,t,e,s,i,n={}){const o=Z(t)?t:[t],r=n.strokeWidth>0&&n.strokeColor!=="";let c,d;for(a.save(),a.font=i.string,bw(a,n),c=0;c<o.length;++c)d=o[c],n.backdrop&&ww(a,n.backdrop),r&&(n.strokeColor&&(a.strokeStyle=n.strokeColor),P(n.strokeWidth)||(a.lineWidth=n.strokeWidth),a.strokeText(d,e,s,n.maxWidth)),a.fillText(d,e,s,n.maxWidth),_w(a,e,s,d,n),s+=Number(i.lineHeight);a.restore()}function _e(a,t){const{x:e,y:s,w:i,h:n,radius:o}=t;a.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*E,E,!0),a.lineTo(e,s+n-o.bottomLeft),a.arc(e+o.bottomLeft,s+n-o.bottomLeft,o.bottomLeft,E,j,!0),a.lineTo(e+i-o.bottomRight,s+n),a.arc(e+i-o.bottomRight,s+n-o.bottomRight,o.bottomRight,j,0,!0),a.lineTo(e+i,s+o.topRight),a.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-j,!0),a.lineTo(e+o.topLeft,s)}const Sw=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Cw=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Vw(a,t){const e=(""+a).match(Sw);if(!e||e[1]==="normal")return t*1.2;switch(a=+e[2],e[3]){case"px":return a;case"%":a/=100;break}return t*a}const Aw=a=>+a||0;function n2(a,t){const e={},s=D(t),i=s?Object.keys(t):t,n=D(a)?s?o=>L(a[o],a[t[o]]):o=>a[o]:()=>a;for(const o of i)e[o]=Aw(n(o));return e}function ui(a){return n2(a,{top:"y",right:"x",bottom:"y",left:"x"})}function Bt(a){return n2(a,["topLeft","topRight","bottomLeft","bottomRight"])}function Q(a){const t=ui(a);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function $(a,t){a=a||{},t=t||N.font;let e=L(a.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=L(a.style,t.style);s&&!(""+s).match(Cw)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:L(a.family,t.family),lineHeight:Vw(L(a.lineHeight,t.lineHeight),e),size:e,style:s,weight:L(a.weight,t.weight),string:""};return i.string=vw(i),i}function re(a,t,e,s){let i,n,o;for(i=0,n=a.length;i<n;++i)if(o=a[i],o!==void 0&&o!==void 0)return o}function Lw(a,t,e){const{min:s,max:i}=a,n=ai(t,(i-s)/2),o=(r,c)=>e&&r===0?0:r+c;return{min:o(s,-Math.abs(n)),max:o(i,n)}}function Ht(a,t){return Object.assign(Object.create(a),t)}function h2(a,t=[""],e,s,i=()=>a[0]){const n=e||a;typeof s>"u"&&(s=mi("_fallback",a));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:a,_rootScopes:n,_fallback:s,_getTarget:i,override:r=>h2([r,...a],t,n,s)};return new Proxy(o,{deleteProperty(r,c){return delete r[c],delete r._keys,delete a[0][c],!0},get(r,c){return fi(r,c,()=>Iw(c,t,a,r))},getOwnPropertyDescriptor(r,c){return Reflect.getOwnPropertyDescriptor(r._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(a[0])},has(r,c){return $a(r).includes(c)},ownKeys(r){return $a(r)},set(r,c,d){const l=r._storage||(r._storage=i());return r[c]=l[c]=d,delete r._keys,!0}})}function Yt(a,t,e,s){const i={_cacheable:!1,_proxy:a,_context:t,_subProxy:e,_stack:new Set,_descriptors:Mi(a,s),setContext:n=>Yt(a,n,e,s),override:n=>Yt(a.override(n),t,e,s)};return new Proxy(i,{deleteProperty(n,o){return delete n[o],delete a[o],!0},get(n,o,r){return fi(n,o,()=>kw(n,o,r))},getOwnPropertyDescriptor(n,o){return n._descriptors.allKeys?Reflect.has(a,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(a,o)},getPrototypeOf(){return Reflect.getPrototypeOf(a)},has(n,o){return Reflect.has(a,o)},ownKeys(){return Reflect.ownKeys(a)},set(n,o,r){return a[o]=r,delete n[o],!0}})}function Mi(a,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=a;return{allKeys:i,scriptable:e,indexable:s,isScriptable:Lt(e)?e:()=>e,isIndexable:Lt(s)?s:()=>s}}const Hw=(a,t)=>a?a+t2(t):t,o2=(a,t)=>D(t)&&a!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function fi(a,t,e){if(Object.prototype.hasOwnProperty.call(a,t)||t==="constructor")return a[t];const s=e();return a[t]=s,s}function kw(a,t,e){const{_proxy:s,_context:i,_subProxy:n,_descriptors:o}=a;let r=s[t];return Lt(r)&&o.isScriptable(t)&&(r=Pw(t,r,a,e)),Z(r)&&r.length&&(r=Dw(t,r,a,o.isIndexable)),o2(t,r)&&(r=Yt(r,i,n&&n[t],o)),r}function Pw(a,t,e,s){const{_proxy:i,_context:n,_subProxy:o,_stack:r}=e;if(r.has(a))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+a);r.add(a);let c=t(n,o||s);return r.delete(a),o2(a,c)&&(c=r2(i._scopes,i,a,c)),c}function Dw(a,t,e,s){const{_proxy:i,_context:n,_subProxy:o,_descriptors:r}=e;if(typeof n.index<"u"&&s(a))return t[n.index%t.length];if(D(t[0])){const c=t,d=i._scopes.filter(l=>l!==c);t=[];for(const l of c){const p=r2(d,i,a,l);t.push(Yt(p,n,o&&o[a],r))}}return t}function vi(a,t,e){return Lt(a)?a(t,e):a}const Tw=(a,t)=>a===!0?t:typeof a=="string"?At(t,a):void 0;function Ew(a,t,e,s,i){for(const n of t){const o=Tw(e,n);if(o){a.add(o);const r=vi(o._fallback,e,i);if(typeof r<"u"&&r!==e&&r!==s)return r}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function r2(a,t,e,s){const i=t._rootScopes,n=vi(t._fallback,e,s),o=[...a,...i],r=new Set;r.add(s);let c=ja(r,o,e,n||e,s);return c===null||typeof n<"u"&&n!==e&&(c=ja(r,o,n,c,s),c===null)?!1:h2(Array.from(r),[""],i,n,()=>Ow(t,e,s))}function ja(a,t,e,s,i){for(;e;)e=Ew(a,t,e,s,i);return e}function Ow(a,t,e){const s=a._getTarget();t in s||(s[t]={});const i=s[t];return Z(i)&&D(e)?e:i||{}}function Iw(a,t,e,s){let i;for(const n of t)if(i=mi(Hw(n,a),e),typeof i<"u")return o2(a,i)?r2(e,s,a,i):i}function mi(a,t){for(const e of t){if(!e)continue;const s=e[a];if(typeof s<"u")return s}}function $a(a){let t=a._keys;return t||(t=a._keys=Fw(a._scopes)),t}function Fw(a){const t=new Set;for(const e of a)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function xi(a,t,e,s){const{iScale:i}=a,{key:n="r"}=this._parsing,o=new Array(s);let r,c,d,l;for(r=0,c=s;r<c;++r)d=r+e,l=t[d],o[r]={r:i.parse(At(l,n),d)};return o}const Rw=Number.EPSILON||1e-14,Kt=(a,t)=>t<a.length&&!a[t].skip&&a[t],yi=a=>a==="x"?"y":"x";function Bw(a,t,e,s){const i=a.skip?t:a,n=t,o=e.skip?t:e,r=I1(n,i),c=I1(o,n);let d=r/(r+c),l=c/(r+c);d=isNaN(d)?0:d,l=isNaN(l)?0:l;const p=s*d,g=s*l;return{previous:{x:n.x-p*(o.x-i.x),y:n.y-p*(o.y-i.y)},next:{x:n.x+g*(o.x-i.x),y:n.y+g*(o.y-i.y)}}}function zw(a,t,e){const s=a.length;let i,n,o,r,c,d=Kt(a,0);for(let l=0;l<s-1;++l)if(c=d,d=Kt(a,l+1),!(!c||!d)){if(ue(t[l],0,Rw)){e[l]=e[l+1]=0;continue}i=e[l]/t[l],n=e[l+1]/t[l],r=Math.pow(i,2)+Math.pow(n,2),!(r<=9)&&(o=3/Math.sqrt(r),e[l]=i*o*t[l],e[l+1]=n*o*t[l])}}function Zw(a,t,e="x"){const s=yi(e),i=a.length;let n,o,r,c=Kt(a,0);for(let d=0;d<i;++d){if(o=r,r=c,c=Kt(a,d+1),!r)continue;const l=r[e],p=r[s];o&&(n=(l-o[e])/3,r[`cp1${e}`]=l-n,r[`cp1${s}`]=p-n*t[d]),c&&(n=(c[e]-l)/3,r[`cp2${e}`]=l+n,r[`cp2${s}`]=p+n*t[d])}}function Nw(a,t="x"){const e=yi(t),s=a.length,i=Array(s).fill(0),n=Array(s);let o,r,c,d=Kt(a,0);for(o=0;o<s;++o)if(r=c,c=d,d=Kt(a,o+1),!!c){if(d){const l=d[t]-c[t];i[o]=l!==0?(d[e]-c[e])/l:0}n[o]=r?d?gt(i[o-1])!==gt(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}zw(a,i,n),Zw(a,n,t)}function Oe(a,t,e){return Math.max(Math.min(a,e),t)}function Ww(a,t){let e,s,i,n,o,r=yt(a[0],t);for(e=0,s=a.length;e<s;++e)o=n,n=r,r=e<s-1&&yt(a[e+1],t),n&&(i=a[e],o&&(i.cp1x=Oe(i.cp1x,t.left,t.right),i.cp1y=Oe(i.cp1y,t.top,t.bottom)),r&&(i.cp2x=Oe(i.cp2x,t.left,t.right),i.cp2y=Oe(i.cp2y,t.top,t.bottom)))}function Uw(a,t,e,s,i){let n,o,r,c;if(t.spanGaps&&(a=a.filter(d=>!d.skip)),t.cubicInterpolationMode==="monotone")Nw(a,i);else{let d=s?a[a.length-1]:a[0];for(n=0,o=a.length;n<o;++n)r=a[n],c=Bw(d,r,a[Math.min(n+1,o-(s?0:1))%o],t.tension),r.cp1x=c.previous.x,r.cp1y=c.previous.y,r.cp2x=c.next.x,r.cp2y=c.next.y,d=r}t.capBezierPoints&&Ww(a,e)}function c2(){return typeof window<"u"&&typeof document<"u"}function d2(a){let t=a.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function s1(a,t,e){let s;return typeof a=="string"?(s=parseInt(a,10),a.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=a,s}const d1=a=>a.ownerDocument.defaultView.getComputedStyle(a,null);function jw(a,t){return d1(a).getPropertyValue(t)}const $w=["top","right","bottom","left"];function zt(a,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const n=$w[i];s[n]=parseFloat(a[t+"-"+n+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const qw=(a,t,e)=>(a>0||t>0)&&(!e||!e.shadowRoot);function Gw(a,t){const e=a.touches,s=e&&e.length?e[0]:a,{offsetX:i,offsetY:n}=s;let o=!1,r,c;if(qw(i,n,a.target))r=i,c=n;else{const d=t.getBoundingClientRect();r=s.clientX-d.left,c=s.clientY-d.top,o=!0}return{x:r,y:c,box:o}}function It(a,t){if("native"in a)return a;const{canvas:e,currentDevicePixelRatio:s}=t,i=d1(e),n=i.boxSizing==="border-box",o=zt(i,"padding"),r=zt(i,"border","width"),{x:c,y:d,box:l}=Gw(a,e),p=o.left+(l&&r.left),g=o.top+(l&&r.top);let{width:u,height:M}=t;return n&&(u-=o.width+r.width,M-=o.height+r.height),{x:Math.round((c-p)/u*e.width/s),y:Math.round((d-g)/M*e.height/s)}}function Xw(a,t,e){let s,i;if(t===void 0||e===void 0){const n=a&&d2(a);if(!n)t=a.clientWidth,e=a.clientHeight;else{const o=n.getBoundingClientRect(),r=d1(n),c=zt(r,"border","width"),d=zt(r,"padding");t=o.width-d.width-c.width,e=o.height-d.height-c.height,s=s1(r.maxWidth,n,"clientWidth"),i=s1(r.maxHeight,n,"clientHeight")}}return{width:t,height:e,maxWidth:s||e1,maxHeight:i||e1}}const wt=a=>Math.round(a*10)/10;function Yw(a,t,e,s){const i=d1(a),n=zt(i,"margin"),o=s1(i.maxWidth,a,"clientWidth")||e1,r=s1(i.maxHeight,a,"clientHeight")||e1,c=Xw(a,t,e);let{width:d,height:l}=c;if(i.boxSizing==="content-box"){const g=zt(i,"border","width"),u=zt(i,"padding");d-=u.width+g.width,l-=u.height+g.height}return d=Math.max(0,d-n.width),l=Math.max(0,s?d/s:l-n.height),d=wt(Math.min(d,o,c.maxWidth)),l=wt(Math.min(l,r,c.maxHeight)),d&&!l&&(l=wt(d/2)),(t!==void 0||e!==void 0)&&s&&c.height&&l>c.height&&(l=c.height,d=wt(Math.floor(l*s))),{width:d,height:l}}function qa(a,t,e){const s=t||1,i=wt(a.height*s),n=wt(a.width*s);a.height=wt(a.height),a.width=wt(a.width);const o=a.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${a.height}px`,o.style.width=`${a.width}px`),a.currentDevicePixelRatio!==s||o.height!==i||o.width!==n?(a.currentDevicePixelRatio=s,o.height=i,o.width=n,a.ctx.setTransform(s,0,0,s,0,0),!0):!1}const Kw=function(){let a=!1;try{const t={get passive(){return a=!0,!1}};c2()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return a}();function Ga(a,t){const e=jw(a,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Ft(a,t,e,s){return{x:a.x+e*(t.x-a.x),y:a.y+e*(t.y-a.y)}}function Jw(a,t,e,s){return{x:a.x+e*(t.x-a.x),y:s==="middle"?e<.5?a.y:t.y:s==="after"?e<1?a.y:t.y:e>0?t.y:a.y}}function Qw(a,t,e,s){const i={x:a.cp2x,y:a.cp2y},n={x:t.cp1x,y:t.cp1y},o=Ft(a,i,e),r=Ft(i,n,e),c=Ft(n,t,e),d=Ft(o,r,e),l=Ft(r,c,e);return Ft(d,l,e)}const tS=function(a,t){return{x(e){return a+a+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},eS=function(){return{x(a){return a},setWidth(a){},textAlign(a){return a},xPlus(a,t){return a+t},leftForLtr(a,t){return a}}};function Gt(a,t,e){return a?tS(t,e):eS()}function bi(a,t){let e,s;(t==="ltr"||t==="rtl")&&(e=a.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),a.prevTextDirection=s)}function _i(a,t){t!==void 0&&(delete a.prevTextDirection,a.canvas.style.setProperty("direction",t[0],t[1]))}function wi(a){return a==="angle"?{between:be,compare:aw,normalize:K}:{between:mt,compare:(t,e)=>t-e,normalize:t=>t}}function Xa({start:a,end:t,count:e,loop:s,style:i}){return{start:a%e,end:t%e,loop:s&&(t-a+1)%e===0,style:i}}function aS(a,t,e){const{property:s,start:i,end:n}=e,{between:o,normalize:r}=wi(s),c=t.length;let{start:d,end:l,loop:p}=a,g,u;if(p){for(d+=c,l+=c,g=0,u=c;g<u&&o(r(t[d%c][s]),i,n);++g)d--,l--;d%=c,l%=c}return l<d&&(l+=c),{start:d,end:l,loop:p,style:a.style}}function Si(a,t,e){if(!e)return[a];const{property:s,start:i,end:n}=e,o=t.length,{compare:r,between:c,normalize:d}=wi(s),{start:l,end:p,loop:g,style:u}=aS(a,t,e),M=[];let f=!1,v=null,m,x,b;const _=()=>c(i,b,m)&&r(i,b)!==0,y=()=>r(n,m)===0||c(n,b,m),S=()=>f||_(),C=()=>!f||y();for(let V=l,A=l;V<=p;++V)x=t[V%o],!x.skip&&(m=d(x[s]),m!==b&&(f=c(m,i,n),v===null&&S()&&(v=r(m,i)===0?V:A),v!==null&&C()&&(M.push(Xa({start:v,end:V,loop:g,count:o,style:u})),v=null),A=V,b=m));return v!==null&&M.push(Xa({start:v,end:p,loop:g,count:o,style:u})),M}function Ci(a,t){const e=[],s=a.segments;for(let i=0;i<s.length;i++){const n=Si(s[i],a.points,t);n.length&&e.push(...n)}return e}function sS(a,t,e,s){let i=0,n=t-1;if(e&&!s)for(;i<t&&!a[i].skip;)i++;for(;i<t&&a[i].skip;)i++;for(i%=t,e&&(n+=i);n>i&&a[n%t].skip;)n--;return n%=t,{start:i,end:n}}function iS(a,t,e,s){const i=a.length,n=[];let o=t,r=a[t],c;for(c=t+1;c<=e;++c){const d=a[c%i];d.skip||d.stop?r.skip||(s=!1,n.push({start:t%i,end:(c-1)%i,loop:s}),t=o=d.stop?c:null):(o=c,r.skip&&(t=c)),r=d}return o!==null&&n.push({start:t%i,end:o%i,loop:s}),n}function nS(a,t){const e=a.points,s=a.options.spanGaps,i=e.length;if(!i)return[];const n=!!a._loop,{start:o,end:r}=sS(e,i,n,s);if(s===!0)return Ya(a,[{start:o,end:r,loop:n}],e,t);const c=r<o?r+i:r,d=!!a._fullLoop&&o===0&&r===i-1;return Ya(a,iS(e,o,c,d),e,t)}function Ya(a,t,e,s){return!s||!s.setContext||!e?t:hS(a,t,e,s)}function hS(a,t,e,s){const i=a._chart.getContext(),n=Ka(a.options),{_datasetIndex:o,options:{spanGaps:r}}=a,c=e.length,d=[];let l=n,p=t[0].start,g=p;function u(M,f,v,m){const x=r?-1:1;if(M!==f){for(M+=c;e[M%c].skip;)M-=x;for(;e[f%c].skip;)f+=x;M%c!==f%c&&(d.push({start:M%c,end:f%c,loop:v,style:m}),l=m,p=f%c)}}for(const M of t){p=r?p:M.start;let f=e[p%c],v;for(g=p+1;g<=M.end;g++){const m=e[g%c];v=Ka(s.setContext(Ht(i,{type:"segment",p0:f,p1:m,p0DataIndex:(g-1)%c,p1DataIndex:g%c,datasetIndex:o}))),oS(v,l)&&u(p,g-1,M.loop,l),f=m,l=v}p<g-1&&u(p,g-1,M.loop,l)}return d}function Ka(a){return{backgroundColor:a.backgroundColor,borderCapStyle:a.borderCapStyle,borderDash:a.borderDash,borderDashOffset:a.borderDashOffset,borderJoinStyle:a.borderJoinStyle,borderWidth:a.borderWidth,borderColor:a.borderColor}}function oS(a,t){if(!t)return!1;const e=[],s=function(i,n){return i2(n)?(e.includes(n)||e.push(n),e.indexOf(n)):n};return JSON.stringify(a,s)!==JSON.stringify(t,s)}function Ie(a,t,e){return a.options.clip?a[e]:t[e]}function rS(a,t){const{xScale:e,yScale:s}=a;return e&&s?{left:Ie(e,t,"left"),right:Ie(e,t,"right"),top:Ie(s,t,"top"),bottom:Ie(s,t,"bottom")}:t}function Vi(a,t){const e=t._clip;if(e.disabled)return!1;const s=rS(t,a.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?a.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?a.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class cS{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const n=e.listeners[i],o=e.duration;n.forEach(r=>r({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=ri.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const n=s.items;let o=n.length-1,r=!1,c;for(;o>=0;--o)c=n[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),r=!0):(n[o]=n[n.length-1],n.pop());r&&(i.draw(),this._notify(i,s,t,"progress")),n.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=n.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Mt=new cS;const Ja="transparent",dS={boolean(a,t,e){return e>.5?t:a},color(a,t,e){const s=Na(a||Ja),i=s.valid&&Na(t||Ja);return i&&i.valid?i.mix(s,e).hexString():t},number(a,t,e){return a+(t-a)*e}};class lS{constructor(t,e,s,i){const n=e[s];i=re([t.to,i,n,t.from]);const o=re([t.from,n,i]);this._active=!0,this._fn=t.fn||dS[t.type||typeof o],this._easing=Me[t.easing]||Me.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],n=s-this._start,o=this._duration-n;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=re([t.to,e,i,t.from]),this._from=re([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,n=this._from,o=this._loop,r=this._to;let c;if(this._active=n!==r&&(o||e<s),!this._active){this._target[i]=r,this._notify(!0);return}if(e<0){this._target[i]=n;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(n,r,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class Ai{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!D(t))return;const e=Object.keys(N.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const n=t[i];if(!D(n))return;const o={};for(const r of e)o[r]=n[r];(Z(n.properties)&&n.properties||[i]).forEach(r=>{(r===i||!s.has(r))&&s.set(r,o)})})}_animateOptions(t,e){const s=e.options,i=gS(t,s);if(!i)return[];const n=this._createAnimations(i,s);return s.$shared&&pS(t.options.$animations,s).then(()=>{t.options=s},()=>{}),n}_createAnimations(t,e){const s=this._properties,i=[],n=t.$animations||(t.$animations={}),o=Object.keys(e),r=Date.now();let c;for(c=o.length-1;c>=0;--c){const d=o[c];if(d.charAt(0)==="$")continue;if(d==="options"){i.push(...this._animateOptions(t,e));continue}const l=e[d];let p=n[d];const g=s.get(d);if(p)if(g&&p.active()){p.update(g,l,r);continue}else p.cancel();if(!g||!g.duration){t[d]=l;continue}n[d]=p=new lS(g,t,d,l),i.push(p)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return Mt.add(this._chart,s),!0}}function pS(a,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const n=a[s[i]];n&&n.active()&&e.push(n.wait())}return Promise.all(e)}function gS(a,t){if(!t)return;let e=a.options;if(!e){a.options=t;return}return e.$shared&&(a.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Qa(a,t){const e=a&&a.options||{},s=e.reverse,i=e.min===void 0?t:0,n=e.max===void 0?t:0;return{start:s?n:i,end:s?i:n}}function uS(a,t,e){if(e===!1)return!1;const s=Qa(a,e),i=Qa(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function MS(a){let t,e,s,i;return D(a)?(t=a.top,e=a.right,s=a.bottom,i=a.left):t=e=s=i=a,{top:t,right:e,bottom:s,left:i,disabled:a===!1}}function Li(a,t){const e=[],s=a._getSortedDatasetMetas(t);let i,n;for(i=0,n=s.length;i<n;++i)e.push(s[i].index);return e}function ts(a,t,e,s={}){const i=a.keys,n=s.mode==="single";let o,r,c,d;if(t===null)return;let l=!1;for(o=0,r=i.length;o<r;++o){if(c=+i[o],c===e){if(l=!0,s.all)continue;break}d=a.values[c],W(d)&&(n||t===0||gt(t)===gt(d))&&(t+=d)}return!l&&!s.all?0:t}function fS(a,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",n=s.axis==="x"?"x":"y",o=Object.keys(a),r=new Array(o.length);let c,d,l;for(c=0,d=o.length;c<d;++c)l=o[c],r[c]={[i]:l,[n]:a[l]};return r}function b1(a,t){const e=a&&a.options.stacked;return e||e===void 0&&t.stack!==void 0}function vS(a,t,e){return`${a.id}.${t.id}.${e.stack||e.type}`}function mS(a){const{min:t,max:e,minDefined:s,maxDefined:i}=a.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function xS(a,t,e){const s=a[t]||(a[t]={});return s[e]||(s[e]={})}function es(a,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const n=a[i.index];if(e&&n>0||!e&&n<0)return i.index}return null}function as(a,t){const{chart:e,_cachedMeta:s}=a,i=e._stacks||(e._stacks={}),{iScale:n,vScale:o,index:r}=s,c=n.axis,d=o.axis,l=vS(n,o,s),p=t.length;let g;for(let u=0;u<p;++u){const M=t[u],{[c]:f,[d]:v}=M,m=M._stacks||(M._stacks={});g=m[d]=xS(i,l,f),g[r]=v,g._top=es(g,o,!0,s.type),g._bottom=es(g,o,!1,s.type);const x=g._visualValues||(g._visualValues={});x[r]=v}}function _1(a,t){const e=a.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function yS(a,t){return Ht(a,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function bS(a,t,e){return Ht(a,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function ae(a,t){const e=a.controller.index,s=a.vScale&&a.vScale.axis;if(s){t=t||a._parsed;for(const i of t){const n=i._stacks;if(!n||n[s]===void 0||n[s][e]===void 0)return;delete n[s][e],n[s]._visualValues!==void 0&&n[s]._visualValues[e]!==void 0&&delete n[s]._visualValues[e]}}}const w1=a=>a==="reset"||a==="none",ss=(a,t)=>t?a:Object.assign({},a),_S=(a,t,e)=>a&&!t.hidden&&t._stacked&&{keys:Li(e,!0),values:null};class ct{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=b1(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ae(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(p,g,u,M)=>p==="x"?g:p==="r"?M:u,n=e.xAxisID=L(s.xAxisID,_1(t,"x")),o=e.yAxisID=L(s.yAxisID,_1(t,"y")),r=e.rAxisID=L(s.rAxisID,_1(t,"r")),c=e.indexAxis,d=e.iAxisID=i(c,n,o,r),l=e.vAxisID=i(c,o,n,r);e.xScale=this.getScaleForId(n),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(r),e.iScale=this.getScaleForId(d),e.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Ba(this._data,this),t._stacked&&ae(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(D(e)){const i=this._cachedMeta;this._data=fS(e,i)}else if(s!==e){if(s){Ba(s,this);const i=this._cachedMeta;ae(i),i._parsed=[]}e&&Object.isExtensible(e)&&hw(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const n=e._stacked;e._stacked=b1(e.vScale,e),e.stack!==s.stack&&(i=!0,ae(e),e.stack=s.stack),this._resyncElements(t),(i||n!==e._stacked)&&(as(this,e._parsed),e._stacked=b1(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:n,_stacked:o}=s,r=n.axis;let c=t===0&&e===i.length?!0:s._sorted,d=t>0&&s._parsed[t-1],l,p,g;if(this._parsing===!1)s._parsed=i,s._sorted=!0,g=i;else{Z(i[t])?g=this.parseArrayData(s,i,t,e):D(i[t])?g=this.parseObjectData(s,i,t,e):g=this.parsePrimitiveData(s,i,t,e);const u=()=>p[r]===null||d&&p[r]<d[r];for(l=0;l<e;++l)s._parsed[l+t]=p=g[l],c&&(u()&&(c=!1),d=p);s._sorted=c}o&&as(this,g)}parsePrimitiveData(t,e,s,i){const{iScale:n,vScale:o}=t,r=n.axis,c=o.axis,d=n.getLabels(),l=n===o,p=new Array(i);let g,u,M;for(g=0,u=i;g<u;++g)M=g+s,p[g]={[r]:l||n.parse(d[M],M),[c]:o.parse(e[M],M)};return p}parseArrayData(t,e,s,i){const{xScale:n,yScale:o}=t,r=new Array(i);let c,d,l,p;for(c=0,d=i;c<d;++c)l=c+s,p=e[l],r[c]={x:n.parse(p[0],l),y:o.parse(p[1],l)};return r}parseObjectData(t,e,s,i){const{xScale:n,yScale:o}=t,{xAxisKey:r="x",yAxisKey:c="y"}=this._parsing,d=new Array(i);let l,p,g,u;for(l=0,p=i;l<p;++l)g=l+s,u=e[g],d[l]={x:n.parse(At(u,r),g),y:o.parse(At(u,c),g)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,n=this._cachedMeta,o=e[t.axis],r={keys:Li(i,!0),values:e._stacks[t.axis]._visualValues};return ts(r,o,n.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const n=s[e.axis];let o=n===null?NaN:n;const r=i&&s._stacks[e.axis];i&&r&&(i.values=r,o=ts(i,n,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,n=s._sorted&&t===s.iScale,o=i.length,r=this._getOtherScale(t),c=_S(e,s,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:l,max:p}=mS(r);let g,u;function M(){u=i[g];const f=u[r.axis];return!W(u[t.axis])||l>f||p<f}for(g=0;g<o&&!(!M()&&(this.updateRangeFromParsed(d,t,u,c),n));++g);if(n){for(g=o-1;g>=0;--g)if(!M()){this.updateRangeFromParsed(d,t,u,c);break}}return d}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,n,o;for(i=0,n=e.length;i<n;++i)o=e[i][t.axis],W(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,n=this.getParsed(t);return{label:s?""+s.getLabelForValue(n[s.axis]):"",value:i?""+i.getLabelForValue(n[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=MS(L(this.options.clip,uS(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],n=e.chartArea,o=[],r=this._drawStart||0,c=this._drawCount||i.length-r,d=this.options.drawActiveElementsOnTop;let l;for(s.dataset&&s.dataset.draw(t,n,r,c),l=r;l<r+c;++l){const p=i[l];p.hidden||(p.active&&d?o.push(p):p.draw(t,n))}for(l=0;l<o.length;++l)o[l].draw(t,n)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let n;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];n=o.$context||(o.$context=bS(this.getContext(),t,o)),n.parsed=this.getParsed(t),n.raw=i.data[t],n.index=n.dataIndex=t}else n=this.$context||(this.$context=yS(this.chart.getContext(),this.index)),n.dataset=i,n.index=n.datasetIndex=this.index;return n.active=!!e,n.mode=s,n}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",n=this._cachedDataOpts,o=t+"-"+e,r=n[o],c=this.enableOptionSharing&&ye(s);if(r)return ss(r,c);const d=this.chart.config,l=d.datasetElementScopeKeys(this._type,t),p=i?[`${t}Hover`,"hover",t,""]:[t,""],g=d.getOptionScopes(this.getDataset(),l),u=Object.keys(N.elements[t]),M=()=>this.getContext(s,i,e),f=d.resolveNamedOptions(g,u,M,p);return f.$shared&&(f.$shared=c,n[o]=Object.freeze(ss(f,c))),f}_resolveAnimations(t,e,s){const i=this.chart,n=this._cachedDataOpts,o=`animation-${e}`,r=n[o];if(r)return r;let c;if(i.options.animation!==!1){const l=this.chart.config,p=l.datasetAnimationScopeKeys(this._type,e),g=l.getOptionScopes(this.getDataset(),p);c=l.createResolver(g,this.getContext(t,s,e))}const d=new Ai(i,c&&c.animations);return c&&c._cacheable&&(n[o]=Object.freeze(d)),d}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||w1(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,n=this.getSharedOptions(s),o=this.includeOptions(e,n)||n!==i;return this.updateSharedOptions(n,e,s),{sharedOptions:n,includeOptions:o}}updateElement(t,e,s,i){w1(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!w1(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const n=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(n)||n})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[r,c,d]of this._syncList)this[r](c,d);this._syncList=[];const i=s.length,n=e.length,o=Math.min(n,i);o&&this.parse(0,o),n>i?this._insertElements(i,n-i,t):n<i&&this._removeElements(n,i-n)}_insertElements(t,e,s=!0){const i=this._cachedMeta,n=i.data,o=t+e;let r;const c=d=>{for(d.length+=e,r=d.length-1;r>=o;r--)d[r]=d[r-e]};for(c(n),r=t;r<o;++r)n[r]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,e),s&&this.updateElements(n,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&ae(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}w(ct,"defaults",{}),w(ct,"datasetElementType",null),w(ct,"dataElementType",null);function wS(a,t){if(!a._cache.$bar){const e=a.getMatchingVisibleMetas(t);let s=[];for(let i=0,n=e.length;i<n;i++)s=s.concat(e[i].controller.getAllParsedValues(a));a._cache.$bar=oi(s.sort((i,n)=>i-n))}return a._cache.$bar}function SS(a){const t=a.iScale,e=wS(t,a.type);let s=t._length,i,n,o,r;const c=()=>{o===32767||o===-32768||(ye(r)&&(s=Math.min(s,Math.abs(o-r)||s)),r=o)};for(i=0,n=e.length;i<n;++i)o=t.getPixelForValue(e[i]),c();for(r=void 0,i=0,n=t.ticks.length;i<n;++i)o=t.getPixelForTick(i),c();return s}function CS(a,t,e,s){const i=e.barThickness;let n,o;return P(i)?(n=t.min*e.categoryPercentage,o=e.barPercentage):(n=i*s,o=1),{chunk:n/s,ratio:o,start:t.pixels[a]-n/2}}function VS(a,t,e,s){const i=t.pixels,n=i[a];let o=a>0?i[a-1]:null,r=a<i.length-1?i[a+1]:null;const c=e.categoryPercentage;o===null&&(o=n-(r===null?t.end-t.start:r-n)),r===null&&(r=n+n-o);const d=n-(n-Math.min(o,r))/2*c;return{chunk:Math.abs(r-o)/2*c/s,ratio:e.barPercentage,start:d}}function AS(a,t,e,s){const i=e.parse(a[0],s),n=e.parse(a[1],s),o=Math.min(i,n),r=Math.max(i,n);let c=o,d=r;Math.abs(o)>Math.abs(r)&&(c=r,d=o),t[e.axis]=d,t._custom={barStart:c,barEnd:d,start:i,end:n,min:o,max:r}}function Hi(a,t,e,s){return Z(a)?AS(a,t,e,s):t[e.axis]=e.parse(a,s),t}function is(a,t,e,s){const i=a.iScale,n=a.vScale,o=i.getLabels(),r=i===n,c=[];let d,l,p,g;for(d=e,l=e+s;d<l;++d)g=t[d],p={},p[i.axis]=r||i.parse(o[d],d),c.push(Hi(g,p,n,d));return c}function S1(a){return a&&a.barStart!==void 0&&a.barEnd!==void 0}function LS(a,t,e){return a!==0?gt(a):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function HS(a){let t,e,s,i,n;return a.horizontal?(t=a.base>a.x,e="left",s="right"):(t=a.base<a.y,e="bottom",s="top"),t?(i="end",n="start"):(i="start",n="end"),{start:e,end:s,reverse:t,top:i,bottom:n}}function kS(a,t,e,s){let i=t.borderSkipped;const n={};if(!i){a.borderSkipped=n;return}if(i===!0){a.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:r,reverse:c,top:d,bottom:l}=HS(a);i==="middle"&&e&&(a.enableBorderRadius=!0,(e._top||0)===s?i=d:(e._bottom||0)===s?i=l:(n[ns(l,o,r,c)]=!0,i=d)),n[ns(i,o,r,c)]=!0,a.borderSkipped=n}function ns(a,t,e,s){return s?(a=PS(a,t,e),a=hs(a,e,t)):a=hs(a,t,e),a}function PS(a,t,e){return a===t?e:a===e?t:a}function hs(a,t,e){return a==="start"?t:a==="end"?e:a}function DS(a,{inflateAmount:t},e){a.inflateAmount=t==="auto"?e===1?.33:0:t}class Ue extends ct{parsePrimitiveData(t,e,s,i){return is(t,e,s,i)}parseArrayData(t,e,s,i){return is(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:n,vScale:o}=t,{xAxisKey:r="x",yAxisKey:c="y"}=this._parsing,d=n.axis==="x"?r:c,l=o.axis==="x"?r:c,p=[];let g,u,M,f;for(g=s,u=s+i;g<u;++g)f=e[g],M={},M[n.axis]=n.parse(At(f,d),g),p.push(Hi(At(f,l),M,o,g));return p}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const n=s._custom;n&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,n.min),t.max=Math.max(t.max,n.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,n=this.getParsed(t),o=n._custom,r=S1(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(n[i.axis]);return{label:""+s.getLabelForValue(n[s.axis]),value:r}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const n=i==="reset",{index:o,_cachedMeta:{vScale:r}}=this,c=r.getBasePixel(),d=r.isHorizontal(),l=this._getRuler(),{sharedOptions:p,includeOptions:g}=this._getSharedOptions(e,i);for(let u=e;u<e+s;u++){const M=this.getParsed(u),f=n||P(M[r.axis])?{base:c,head:c}:this._calculateBarValuePixels(u),v=this._calculateBarIndexPixels(u,l),m=(M._stacks||{})[r.axis],x={horizontal:d,base:f.base,enableBorderRadius:!m||S1(M._custom)||o===m._top||o===m._bottom,x:d?f.head:v.center,y:d?v.center:f.head,height:d?v.size:Math.abs(f.size),width:d?Math.abs(f.size):v.size};g&&(x.options=p||this.resolveDataElementOptions(u,t[u].active?"active":i));const b=x.options||t[u].options;kS(x,b,m,o),DS(x,b,l.ratio),this.updateElement(t[u],u,x,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),n=s.options.stacked,o=[],r=this._cachedMeta.controller.getParsed(e),c=r&&r[s.axis],d=l=>{const p=l._parsed.find(u=>u[s.axis]===c),g=p&&p[l.vScale.axis];if(P(g)||isNaN(g))return!0};for(const l of i)if(!(e!==void 0&&d(l))&&((n===!1||o.indexOf(l.stack)===-1||n===void 0&&l.stack===void 0)&&o.push(l.stack),l.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[L(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),n=e!==void 0?i.indexOf(e):-1;return n===-1?i.length-1:n}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let n,o;for(n=0,o=e.data.length;n<o;++n)i.push(s.getPixelForValue(this.getParsed(n)[s.axis],n));const r=t.barThickness;return{min:r||SS(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:r?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:n,minBarLength:o}}=this,r=n||0,c=this.getParsed(t),d=c._custom,l=S1(d);let p=c[e.axis],g=0,u=s?this.applyStack(e,c,s):p,M,f;u!==p&&(g=u-p,u=p),l&&(p=d.barStart,u=d.barEnd-d.barStart,p!==0&&gt(p)!==gt(d.barEnd)&&(g=0),g+=p);const v=!P(n)&&!l?n:g;let m=e.getPixelForValue(v);if(this.chart.getDataVisibility(t)?M=e.getPixelForValue(g+u):M=m,f=M-m,Math.abs(f)<o){f=LS(f,e,r)*o,p===r&&(m-=f/2);const x=e.getPixelForDecimal(0),b=e.getPixelForDecimal(1),_=Math.min(x,b),y=Math.max(x,b);m=Math.max(Math.min(m,y),_),M=m+f,s&&!l&&(c._stacks[e.axis]._visualValues[i]=e.getValueForPixel(M)-e.getValueForPixel(m))}if(m===e.getPixelForValue(r)){const x=gt(f)*e.getLineWidthForValue(r)/2;m+=x,f-=x}return{size:f,base:m,head:M,center:M+f/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,n=i.skipNull,o=L(i.maxBarThickness,1/0);let r,c;const d=this._getAxisCount();if(e.grouped){const l=n?this._getStackCount(t):e.stackCount,p=i.barThickness==="flex"?VS(t,e,i,l*d):CS(t,e,i,l*d),g=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,u=this._getAxis().indexOf(L(g,this.getFirstScaleIdForIndexAxis())),M=this._getStackIndex(this.index,this._cachedMeta.stack,n?t:void 0)+u;r=p.start+p.chunk*M+p.chunk/2,c=Math.min(o,p.chunk*p.ratio)}else r=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:r-c/2,head:r+c/2,center:r,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let n=0;for(;n<i;++n)this.getParsed(n)[e.axis]!==null&&!s[n].hidden&&s[n].draw(this._ctx)}}w(Ue,"id","bar"),w(Ue,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),w(Ue,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class je extends ct{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const n=super.parsePrimitiveData(t,e,s,i);for(let o=0;o<n.length;o++)n[o]._custom=this.resolveDataElementOptions(o+s).radius;return n}parseArrayData(t,e,s,i){const n=super.parseArrayData(t,e,s,i);for(let o=0;o<n.length;o++){const r=e[s+o];n[o]._custom=L(r[2],this.resolveDataElementOptions(o+s).radius)}return n}parseObjectData(t,e,s,i){const n=super.parseObjectData(t,e,s,i);for(let o=0;o<n.length;o++){const r=e[s+o];n[o]._custom=L(r&&r.r&&+r.r,this.resolveDataElementOptions(o+s).radius)}return n}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:n}=e,o=this.getParsed(t),r=i.getLabelForValue(o.x),c=n.getLabelForValue(o.y),d=o._custom;return{label:s[t]||"",value:"("+r+", "+c+(d?", "+d:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const n=i==="reset",{iScale:o,vScale:r}=this._cachedMeta,{sharedOptions:c,includeOptions:d}=this._getSharedOptions(e,i),l=o.axis,p=r.axis;for(let g=e;g<e+s;g++){const u=t[g],M=!n&&this.getParsed(g),f={},v=f[l]=n?o.getPixelForDecimal(.5):o.getPixelForValue(M[l]),m=f[p]=n?r.getBasePixel():r.getPixelForValue(M[p]);f.skip=isNaN(v)||isNaN(m),d&&(f.options=c||this.resolveDataElementOptions(g,u.active?"active":i),n&&(f.options.radius=0)),this.updateElement(u,g,f,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const n=i.radius;return e!=="active"&&(i.radius=0),i.radius+=L(s&&s._custom,n),i}}w(je,"id","bubble"),w(je,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),w(je,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function TS(a,t,e){let s=1,i=1,n=0,o=0;if(t<B){const r=a,c=r+t,d=Math.cos(r),l=Math.sin(r),p=Math.cos(c),g=Math.sin(c),u=(b,_,y)=>be(b,r,c,!0)?1:Math.max(_,_*e,y,y*e),M=(b,_,y)=>be(b,r,c,!0)?-1:Math.min(_,_*e,y,y*e),f=u(0,d,p),v=u(j,l,g),m=M(E,d,p),x=M(E+j,l,g);s=(f-m)/2,i=(v-x)/2,n=-(f+m)/2,o=-(v+x)/2}return{ratioX:s,ratioY:i,offsetX:n,offsetY:o}}class Rt extends ct{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let n=c=>+s[c];if(D(s[t])){const{key:c="value"}=this._parsing;n=d=>+At(s[d],c)}let o,r;for(o=t,r=t+e;o<r;++o)i._parsed[o]=n(o)}}_getRotation(){return rt(this.options.rotation-90)}_getCircumference(){return rt(this.options.circumference)}_getRotationExtents(){let t=B,e=-B;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,n=i._getRotation(),o=i._getCircumference();t=Math.min(t,n),e=Math.max(e,n+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,n=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(n)+this.options.spacing,r=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(j_(this.options.cutout,r),1),d=this._getRingWeight(this.index),{circumference:l,rotation:p}=this._getRotationExtents(),{ratioX:g,ratioY:u,offsetX:M,offsetY:f}=TS(p,l,c),v=(s.width-o)/g,m=(s.height-o)/u,x=Math.max(Math.min(v,m)/2,0),b=ai(this.options.radius,x),_=Math.max(b*c,0),y=(b-_)/this._getVisibleDatasetWeightTotal();this.offsetX=M*b,this.offsetY=f*b,i.total=this.calculateTotal(),this.outerRadius=b-y*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-y*d,0),this.updateElements(n,0,n.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,n=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*n/B)}updateElements(t,e,s,i){const n=i==="reset",o=this.chart,r=o.chartArea,d=o.options.animation,l=(r.left+r.right)/2,p=(r.top+r.bottom)/2,g=n&&d.animateScale,u=g?0:this.innerRadius,M=g?0:this.outerRadius,{sharedOptions:f,includeOptions:v}=this._getSharedOptions(e,i);let m=this._getRotation(),x;for(x=0;x<e;++x)m+=this._circumference(x,n);for(x=e;x<e+s;++x){const b=this._circumference(x,n),_=t[x],y={x:l+this.offsetX,y:p+this.offsetY,startAngle:m,endAngle:m+b,circumference:b,outerRadius:M,innerRadius:u};v&&(y.options=f||this.resolveDataElementOptions(x,_.active?"active":i)),m+=b,this.updateElement(_,x,y,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const n=t._parsed[i];n!==null&&!isNaN(n)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(n))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?B*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],n=Ae(e._parsed[t],s.options.locale);return{label:i[t]||"",value:n}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,n,o,r,c;if(!t){for(i=0,n=s.data.datasets.length;i<n;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,r=o.controller;break}}if(!t)return 0;for(i=0,n=t.length;i<n;++i)c=r.resolveDataElementOptions(i),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const n=this.resolveDataElementOptions(s);e=Math.max(e,n.offset||0,n.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(L(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}w(Rt,"id","doughnut"),w(Rt,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),w(Rt,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),w(Rt,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:n,useBorderRadius:o,borderRadius:r}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,d)=>{const p=t.getDatasetMeta(0).controller.getStyle(d);return{text:c,fillStyle:p.backgroundColor,fontColor:n,hidden:!t.getDataVisibility(d),lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:p.borderWidth,strokeStyle:p.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(r||p.borderRadius),index:d}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class $e extends ct{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:n}=e,o=this.chart._animationsDisabled;let{start:r,count:c}=di(e,i,o);this._drawStart=r,this._drawCount=c,li(e)&&(r=0,c=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!n._decimated,s.points=i;const d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:d},t),this.updateElements(i,r,c,t)}updateElements(t,e,s,i){const n=i==="reset",{iScale:o,vScale:r,_stacked:c,_dataset:d}=this._cachedMeta,{sharedOptions:l,includeOptions:p}=this._getSharedOptions(e,i),g=o.axis,u=r.axis,{spanGaps:M,segment:f}=this.options,v=Xt(M)?M:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||n||i==="none",x=e+s,b=t.length;let _=e>0&&this.getParsed(e-1);for(let y=0;y<b;++y){const S=t[y],C=m?S:{};if(y<e||y>=x){C.skip=!0;continue}const V=this.getParsed(y),A=P(V[u]),H=C[g]=o.getPixelForValue(V[g],y),k=C[u]=n||A?r.getBasePixel():r.getPixelForValue(c?this.applyStack(r,V,c):V[u],y);C.skip=isNaN(H)||isNaN(k)||A,C.stop=y>0&&Math.abs(V[g]-_[g])>v,f&&(C.parsed=V,C.raw=d.data[y]),p&&(C.options=l||this.resolveDataElementOptions(y,S.active?"active":i)),m||this.updateElement(S,y,C,i),_=V}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const n=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,n,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}w($e,"id","line"),w($e,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),w($e,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ve extends ct{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],n=Ae(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:n}}parseObjectData(t,e,s,i){return xi.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const n=this.getParsed(i).r;!isNaN(n)&&this.chart.getDataVisibility(i)&&(n<e.min&&(e.min=n),n>e.max&&(e.max=n))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),n=Math.max(i/2,0),o=Math.max(s.cutoutPercentage?n/100*s.cutoutPercentage:1,0),r=(n-o)/t.getVisibleDatasetCount();this.outerRadius=n-r*this.index,this.innerRadius=this.outerRadius-r}updateElements(t,e,s,i){const n=i==="reset",o=this.chart,c=o.options.animation,d=this._cachedMeta.rScale,l=d.xCenter,p=d.yCenter,g=d.getIndexAngle(0)-.5*E;let u=g,M;const f=360/this.countVisibleElements();for(M=0;M<e;++M)u+=this._computeAngle(M,i,f);for(M=e;M<e+s;M++){const v=t[M];let m=u,x=u+this._computeAngle(M,i,f),b=o.getDataVisibility(M)?d.getDistanceFromCenterForValue(this.getParsed(M).r):0;u=x,n&&(c.animateScale&&(b=0),c.animateRotate&&(m=x=g));const _={x:l,y:p,innerRadius:0,outerRadius:b,startAngle:m,endAngle:x,options:this.resolveDataElementOptions(M,v.active?"active":i)};this.updateElement(v,M,_,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?rt(this.resolveDataElementOptions(t,e).angle||s):0}}w(ve,"id","polarArea"),w(ve,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),w(ve,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((n,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:n,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:i,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class B1 extends Rt{}w(B1,"id","pie"),w(B1,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class qe extends ct{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return xi.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],n=e.iScale.getLabels();if(s.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const r={_loop:!0,_fullLoop:n.length===i.length,options:o};this.updateElement(s,void 0,r,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const n=this._cachedMeta.rScale,o=i==="reset";for(let r=e;r<e+s;r++){const c=t[r],d=this.resolveDataElementOptions(r,c.active?"active":i),l=n.getPointPositionForValue(r,this.getParsed(r).r),p=o?n.xCenter:l.x,g=o?n.yCenter:l.y,u={x:p,y:g,angle:l.angle,skip:isNaN(p)||isNaN(g),options:d};this.updateElement(c,r,u,i)}}}w(qe,"id","radar"),w(qe,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),w(qe,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ge extends ct{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:n}=e,o=this.getParsed(t),r=i.getLabelForValue(o.x),c=n.getLabelForValue(o.y);return{label:s[t]||"",value:"("+r+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:n,count:o}=di(e,s,i);if(this._drawStart=n,this._drawCount=o,li(e)&&(n=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:r,_dataset:c}=e;r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!c._decimated,r.points=s;const d=this.resolveDatasetElementOptions(t);d.segment=this.options.segment,this.updateElement(r,void 0,{animated:!i,options:d},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,n,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const n=i==="reset",{iScale:o,vScale:r,_stacked:c,_dataset:d}=this._cachedMeta,l=this.resolveDataElementOptions(e,i),p=this.getSharedOptions(l),g=this.includeOptions(i,p),u=o.axis,M=r.axis,{spanGaps:f,segment:v}=this.options,m=Xt(f)?f:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||n||i==="none";let b=e>0&&this.getParsed(e-1);for(let _=e;_<e+s;++_){const y=t[_],S=this.getParsed(_),C=x?y:{},V=P(S[M]),A=C[u]=o.getPixelForValue(S[u],_),H=C[M]=n||V?r.getBasePixel():r.getPixelForValue(c?this.applyStack(r,S,c):S[M],_);C.skip=isNaN(A)||isNaN(H)||V,C.stop=_>0&&Math.abs(S[u]-b[u])>m,v&&(C.parsed=S,C.raw=d.data[_]),g&&(C.options=p||this.resolveDataElementOptions(_,y.active?"active":i)),x||this.updateElement(y,_,C,i),b=S}this.updateSharedOptions(p,i,l)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let r=0;for(let c=e.length-1;c>=0;--c)r=Math.max(r,e[c].size(this.resolveDataElementOptions(c))/2);return r>0&&r}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const n=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,n,o)/2}}w(Ge,"id","scatter"),w(Ge,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),w(Ge,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var ES=Object.freeze({__proto__:null,BarController:Ue,BubbleController:je,DoughnutController:Rt,LineController:$e,PieController:B1,PolarAreaController:ve,RadarController:qe,ScatterController:Ge});function Et(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class l2{constructor(t){w(this,"options");this.options=t||{}}static override(t){Object.assign(l2.prototype,t)}init(){}formats(){return Et()}parse(){return Et()}format(){return Et()}add(){return Et()}diff(){return Et()}startOf(){return Et()}endOf(){return Et()}}var OS={_date:l2};function IS(a,t,e,s){const{controller:i,data:n,_sorted:o}=a,r=i._cachedMeta.iScale,c=a.dataset&&a.dataset.options?a.dataset.options.spanGaps:null;if(r&&t===r.axis&&t!=="r"&&o&&n.length){const d=r._reversePixels?iw:xt;if(s){if(i._sharedOptions){const l=n[0],p=typeof l.getRange=="function"&&l.getRange(t);if(p){const g=d(n,t,e-p),u=d(n,t,e+p);return{lo:g.lo,hi:u.hi}}}}else{const l=d(n,t,e);if(c){const{vScale:p}=i._cachedMeta,{_parsed:g}=a,u=g.slice(0,l.lo+1).reverse().findIndex(f=>!P(f[p.axis]));l.lo-=Math.max(0,u);const M=g.slice(l.hi).findIndex(f=>!P(f[p.axis]));l.hi+=Math.max(0,M)}return l}}return{lo:0,hi:n.length-1}}function l1(a,t,e,s,i){const n=a.getSortedVisibleDatasetMetas(),o=e[t];for(let r=0,c=n.length;r<c;++r){const{index:d,data:l}=n[r],{lo:p,hi:g}=IS(n[r],t,o,i);for(let u=p;u<=g;++u){const M=l[u];M.skip||s(M,d,u)}}}function FS(a){const t=a.indexOf("x")!==-1,e=a.indexOf("y")!==-1;return function(s,i){const n=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))}}function C1(a,t,e,s,i){const n=[];return!i&&!a.isPointInArea(t)||l1(a,e,t,function(r,c,d){!i&&!yt(r,a.chartArea,0)||r.inRange(t.x,t.y,s)&&n.push({element:r,datasetIndex:c,index:d})},!0),n}function RS(a,t,e,s){let i=[];function n(o,r,c){const{startAngle:d,endAngle:l}=o.getProps(["startAngle","endAngle"],s),{angle:p}=ni(o,{x:t.x,y:t.y});be(p,d,l)&&i.push({element:o,datasetIndex:r,index:c})}return l1(a,e,t,n),i}function BS(a,t,e,s,i,n){let o=[];const r=FS(e);let c=Number.POSITIVE_INFINITY;function d(l,p,g){const u=l.inRange(t.x,t.y,i);if(s&&!u)return;const M=l.getCenterPoint(i);if(!(!!n||a.isPointInArea(M))&&!u)return;const v=r(t,M);v<c?(o=[{element:l,datasetIndex:p,index:g}],c=v):v===c&&o.push({element:l,datasetIndex:p,index:g})}return l1(a,e,t,d),o}function V1(a,t,e,s,i,n){return!n&&!a.isPointInArea(t)?[]:e==="r"&&!s?RS(a,t,e,i):BS(a,t,e,s,i,n)}function os(a,t,e,s,i){const n=[],o=e==="x"?"inXRange":"inYRange";let r=!1;return l1(a,e,t,(c,d,l)=>{c[o]&&c[o](t[e],i)&&(n.push({element:c,datasetIndex:d,index:l}),r=r||c.inRange(t.x,t.y,i))}),s&&!r?[]:n}var zS={modes:{index(a,t,e,s){const i=It(t,a),n=e.axis||"x",o=e.includeInvisible||!1,r=e.intersect?C1(a,i,n,s,o):V1(a,i,n,!1,s,o),c=[];return r.length?(a.getSortedVisibleDatasetMetas().forEach(d=>{const l=r[0].index,p=d.data[l];p&&!p.skip&&c.push({element:p,datasetIndex:d.index,index:l})}),c):[]},dataset(a,t,e,s){const i=It(t,a),n=e.axis||"xy",o=e.includeInvisible||!1;let r=e.intersect?C1(a,i,n,s,o):V1(a,i,n,!1,s,o);if(r.length>0){const c=r[0].datasetIndex,d=a.getDatasetMeta(c).data;r=[];for(let l=0;l<d.length;++l)r.push({element:d[l],datasetIndex:c,index:l})}return r},point(a,t,e,s){const i=It(t,a),n=e.axis||"xy",o=e.includeInvisible||!1;return C1(a,i,n,s,o)},nearest(a,t,e,s){const i=It(t,a),n=e.axis||"xy",o=e.includeInvisible||!1;return V1(a,i,n,e.intersect,s,o)},x(a,t,e,s){const i=It(t,a);return os(a,i,"x",e.intersect,s)},y(a,t,e,s){const i=It(t,a);return os(a,i,"y",e.intersect,s)}}};const ki=["left","top","right","bottom"];function se(a,t){return a.filter(e=>e.pos===t)}function rs(a,t){return a.filter(e=>ki.indexOf(e.pos)===-1&&e.box.axis===t)}function ie(a,t){return a.sort((e,s)=>{const i=t?s:e,n=t?e:s;return i.weight===n.weight?i.index-n.index:i.weight-n.weight})}function ZS(a){const t=[];let e,s,i,n,o,r;for(e=0,s=(a||[]).length;e<s;++e)i=a[e],{position:n,options:{stack:o,stackWeight:r=1}}=i,t.push({index:e,box:i,pos:n,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&n+o,stackWeight:r});return t}function NS(a){const t={};for(const e of a){const{stack:s,pos:i,stackWeight:n}=e;if(!s||!ki.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=n}return t}function WS(a,t){const e=NS(a),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let n,o,r;for(n=0,o=a.length;n<o;++n){r=a[n];const{fullSize:c}=r.box,d=e[r.stack],l=d&&r.stackWeight/d.weight;r.horizontal?(r.width=l?l*s:c&&t.availableWidth,r.height=i):(r.width=s,r.height=l?l*i:c&&t.availableHeight)}return e}function US(a){const t=ZS(a),e=ie(t.filter(d=>d.box.fullSize),!0),s=ie(se(t,"left"),!0),i=ie(se(t,"right")),n=ie(se(t,"top"),!0),o=ie(se(t,"bottom")),r=rs(t,"x"),c=rs(t,"y");return{fullSize:e,leftAndTop:s.concat(n),rightAndBottom:i.concat(c).concat(o).concat(r),chartArea:se(t,"chartArea"),vertical:s.concat(i).concat(c),horizontal:n.concat(o).concat(r)}}function cs(a,t,e,s){return Math.max(a[e],t[e])+Math.max(a[s],t[s])}function Pi(a,t){a.top=Math.max(a.top,t.top),a.left=Math.max(a.left,t.left),a.bottom=Math.max(a.bottom,t.bottom),a.right=Math.max(a.right,t.right)}function jS(a,t,e,s){const{pos:i,box:n}=e,o=a.maxPadding;if(!D(i)){e.size&&(a[i]-=e.size);const p=s[e.stack]||{size:0,count:1};p.size=Math.max(p.size,e.horizontal?n.height:n.width),e.size=p.size/p.count,a[i]+=e.size}n.getPadding&&Pi(o,n.getPadding());const r=Math.max(0,t.outerWidth-cs(o,a,"left","right")),c=Math.max(0,t.outerHeight-cs(o,a,"top","bottom")),d=r!==a.w,l=c!==a.h;return a.w=r,a.h=c,e.horizontal?{same:d,other:l}:{same:l,other:d}}function $S(a){const t=a.maxPadding;function e(s){const i=Math.max(t[s]-a[s],0);return a[s]+=i,i}a.y+=e("top"),a.x+=e("left"),e("right"),e("bottom")}function qS(a,t){const e=t.maxPadding;function s(i){const n={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{n[o]=Math.max(t[o],e[o])}),n}return s(a?["left","right"]:["top","bottom"])}function ce(a,t,e,s){const i=[];let n,o,r,c,d,l;for(n=0,o=a.length,d=0;n<o;++n){r=a[n],c=r.box,c.update(r.width||t.w,r.height||t.h,qS(r.horizontal,t));const{same:p,other:g}=jS(t,e,r,s);d|=p&&i.length,l=l||g,c.fullSize||i.push(r)}return d&&ce(i,t,e,s)||l}function Fe(a,t,e,s,i){a.top=e,a.left=t,a.right=t+s,a.bottom=e+i,a.width=s,a.height=i}function ds(a,t,e,s){const i=e.padding;let{x:n,y:o}=t;for(const r of a){const c=r.box,d=s[r.stack]||{placed:0,weight:1},l=r.stackWeight/d.weight||1;if(r.horizontal){const p=t.w*l,g=d.size||c.height;ye(d.start)&&(o=d.start),c.fullSize?Fe(c,i.left,o,e.outerWidth-i.right-i.left,g):Fe(c,t.left+d.placed,o,p,g),d.start=o,d.placed+=p,o=c.bottom}else{const p=t.h*l,g=d.size||c.width;ye(d.start)&&(n=d.start),c.fullSize?Fe(c,n,i.top,g,e.outerHeight-i.bottom-i.top):Fe(c,n,t.top+d.placed,g,p),d.start=n,d.placed+=p,n=c.right}}t.x=n,t.y=o}var J={addBox(a,t){a.boxes||(a.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},a.boxes.push(t)},removeBox(a,t){const e=a.boxes?a.boxes.indexOf(t):-1;e!==-1&&a.boxes.splice(e,1)},configure(a,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(a,t,e,s){if(!a)return;const i=Q(a.options.layout.padding),n=Math.max(t-i.width,0),o=Math.max(e-i.height,0),r=US(a.boxes),c=r.vertical,d=r.horizontal;O(a.boxes,f=>{typeof f.beforeLayout=="function"&&f.beforeLayout()});const l=c.reduce((f,v)=>v.box.options&&v.box.options.display===!1?f:f+1,0)||1,p=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:n,availableHeight:o,vBoxMaxWidth:n/2/l,hBoxMaxHeight:o/2}),g=Object.assign({},i);Pi(g,Q(s));const u=Object.assign({maxPadding:g,w:n,h:o,x:i.left,y:i.top},i),M=WS(c.concat(d),p);ce(r.fullSize,u,p,M),ce(c,u,p,M),ce(d,u,p,M)&&ce(c,u,p,M),$S(u),ds(r.leftAndTop,u,p,M),u.x+=u.w,u.y+=u.h,ds(r.rightAndBottom,u,p,M),a.chartArea={left:u.left,top:u.top,right:u.left+u.w,bottom:u.top+u.h,height:u.h,width:u.w},O(r.chartArea,f=>{const v=f.box;Object.assign(v,a.chartArea),v.update(u.w,u.h,{left:0,top:0,right:0,bottom:0})})}};class Di{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class GS extends Di{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Xe="$chartjs",XS={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ls=a=>a===null||a==="";function YS(a,t){const e=a.style,s=a.getAttribute("height"),i=a.getAttribute("width");if(a[Xe]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",ls(i)){const n=Ga(a,"width");n!==void 0&&(a.width=n)}if(ls(s))if(a.style.height==="")a.height=a.width/(t||2);else{const n=Ga(a,"height");n!==void 0&&(a.height=n)}return a}const Ti=Kw?{passive:!0}:!1;function KS(a,t,e){a&&a.addEventListener(t,e,Ti)}function JS(a,t,e){a&&a.canvas&&a.canvas.removeEventListener(t,e,Ti)}function QS(a,t){const e=XS[a.type]||a.type,{x:s,y:i}=It(a,t);return{type:e,chart:t,native:a,x:s!==void 0?s:null,y:i!==void 0?i:null}}function i1(a,t){for(const e of a)if(e===t||e.contains(t))return!0}function tC(a,t,e){const s=a.canvas,i=new MutationObserver(n=>{let o=!1;for(const r of n)o=o||i1(r.addedNodes,s),o=o&&!i1(r.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function eC(a,t,e){const s=a.canvas,i=new MutationObserver(n=>{let o=!1;for(const r of n)o=o||i1(r.removedNodes,s),o=o&&!i1(r.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const we=new Map;let ps=0;function Ei(){const a=window.devicePixelRatio;a!==ps&&(ps=a,we.forEach((t,e)=>{e.currentDevicePixelRatio!==a&&t()}))}function aC(a,t){we.size||window.addEventListener("resize",Ei),we.set(a,t)}function sC(a){we.delete(a),we.size||window.removeEventListener("resize",Ei)}function iC(a,t,e){const s=a.canvas,i=s&&d2(s);if(!i)return;const n=ci((r,c)=>{const d=i.clientWidth;e(r,c),d<i.clientWidth&&e()},window),o=new ResizeObserver(r=>{const c=r[0],d=c.contentRect.width,l=c.contentRect.height;d===0&&l===0||n(d,l)});return o.observe(i),aC(a,n),o}function A1(a,t,e){e&&e.disconnect(),t==="resize"&&sC(a)}function nC(a,t,e){const s=a.canvas,i=ci(n=>{a.ctx!==null&&e(QS(n,a))},a);return KS(s,t,i),i}class hC extends Di{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(YS(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Xe])return!1;const s=e[Xe].initial;["height","width"].forEach(n=>{const o=s[n];P(o)?e.removeAttribute(n):e.setAttribute(n,o)});const i=s.style||{};return Object.keys(i).forEach(n=>{e.style[n]=i[n]}),e.width=e.width,delete e[Xe],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:tC,detach:eC,resize:iC}[e]||nC;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:A1,detach:A1,resize:A1}[e]||JS)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return Yw(t,e,s,i)}isAttached(t){const e=t&&d2(t);return!!(e&&e.isConnected)}}function oC(a){return!c2()||typeof OffscreenCanvas<"u"&&a instanceof OffscreenCanvas?GS:hC}class dt{constructor(){w(this,"x");w(this,"y");w(this,"active",!1);w(this,"options");w(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Xt(this.x)&&Xt(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(n=>{i[n]=s[n]&&s[n].active()?s[n]._to:this[n]}),i}}w(dt,"defaults",{}),w(dt,"defaultRoutes");function rC(a,t){const e=a.options.ticks,s=cC(a),i=Math.min(e.maxTicksLimit||s,s),n=e.major.enabled?lC(t):[],o=n.length,r=n[0],c=n[o-1],d=[];if(o>i)return pC(t,d,n,o/i),d;const l=dC(n,t,i);if(o>0){let p,g;const u=o>1?Math.round((c-r)/(o-1)):null;for(Re(t,d,l,P(u)?0:r-u,r),p=0,g=o-1;p<g;p++)Re(t,d,l,n[p],n[p+1]);return Re(t,d,l,c,P(u)?t.length:c+u),d}return Re(t,d,l),d}function cC(a){const t=a.options.offset,e=a._tickSize(),s=a._length/e+(t?0:1),i=a._maxLength/e;return Math.floor(Math.min(s,i))}function dC(a,t,e){const s=gC(a),i=t.length/e;if(!s)return Math.max(i,1);const n=Q_(s);for(let o=0,r=n.length-1;o<r;o++){const c=n[o];if(c>i)return c}return Math.max(i,1)}function lC(a){const t=[];let e,s;for(e=0,s=a.length;e<s;e++)a[e].major&&t.push(e);return t}function pC(a,t,e,s){let i=0,n=e[0],o;for(s=Math.ceil(s),o=0;o<a.length;o++)o===n&&(t.push(a[o]),i++,n=e[i*s])}function Re(a,t,e,s,i){const n=L(s,0),o=Math.min(L(i,a.length),a.length);let r=0,c,d,l;for(e=Math.ceil(e),i&&(c=i-s,e=c/Math.floor(c/e)),l=n;l<0;)r++,l=Math.round(n+r*e);for(d=Math.max(n,0);d<o;d++)d===l&&(t.push(a[d]),r++,l=Math.round(n+r*e))}function gC(a){const t=a.length;let e,s;if(t<2)return!1;for(s=a[0],e=1;e<t;++e)if(a[e]-a[e-1]!==s)return!1;return s}const uC=a=>a==="left"?"right":a==="right"?"left":a,gs=(a,t,e)=>t==="top"||t==="left"?a[t]+e:a[t]-e,us=(a,t)=>Math.min(t||a,a);function Ms(a,t){const e=[],s=a.length/t,i=a.length;let n=0;for(;n<i;n+=s)e.push(a[Math.floor(n)]);return e}function MC(a,t,e){const s=a.ticks.length,i=Math.min(t,s-1),n=a._startPixel,o=a._endPixel,r=1e-6;let c=a.getPixelForTick(i),d;if(!(e&&(s===1?d=Math.max(c-n,o-c):t===0?d=(a.getPixelForTick(1)-c)/2:d=(c-a.getPixelForTick(i-1))/2,c+=i<t?d:-d,c<n-r||c>o+r)))return c}function fC(a,t){O(a,e=>{const s=e.gc,i=s.length/2;let n;if(i>t){for(n=0;n<i;++n)delete e.data[s[n]];s.splice(0,i)}})}function ne(a){return a.drawTicks?a.tickLength:0}function fs(a,t){if(!a.display)return 0;const e=$(a.font,t),s=Q(a.padding);return(Z(a.text)?a.text.length:1)*e.lineHeight+s.height}function vC(a,t){return Ht(a,{scale:t,type:"scale"})}function mC(a,t,e){return Ht(a,{tick:e,index:t,type:"tick"})}function xC(a,t,e){let s=s2(a);return(e&&t!=="right"||!e&&t==="right")&&(s=uC(s)),s}function yC(a,t,e,s){const{top:i,left:n,bottom:o,right:r,chart:c}=a,{chartArea:d,scales:l}=c;let p=0,g,u,M;const f=o-i,v=r-n;if(a.isHorizontal()){if(u=Y(s,n,r),D(e)){const m=Object.keys(e)[0],x=e[m];M=l[m].getPixelForValue(x)+f-t}else e==="center"?M=(d.bottom+d.top)/2+f-t:M=gs(a,e,t);g=r-n}else{if(D(e)){const m=Object.keys(e)[0],x=e[m];u=l[m].getPixelForValue(x)-v+t}else e==="center"?u=(d.left+d.right)/2-v+t:u=gs(a,e,t);M=Y(s,o,i),p=e==="left"?-j:j}return{titleX:u,titleY:M,maxWidth:g,rotation:p}}class Wt extends dt{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=it(t,Number.POSITIVE_INFINITY),e=it(e,Number.NEGATIVE_INFINITY),s=it(s,Number.POSITIVE_INFINITY),i=it(i,Number.NEGATIVE_INFINITY),{min:it(t,s),max:it(e,i),minDefined:W(t),maxDefined:W(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:n}=this.getUserBounds(),o;if(i&&n)return{min:e,max:s};const r=this.getMatchingVisibleMetas();for(let c=0,d=r.length;c<d;++c)o=r[c].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),n||(s=Math.max(s,o.max));return e=n&&e>s?s:e,s=i&&e>s?e:s,{min:it(e,it(s,e)),max:it(s,it(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){R(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:n,ticks:o}=this.options,r=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Lw(this,n,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=r<this.ticks.length;this._convertTicksToLabels(c?Ms(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=rC(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){R(this.options.afterUpdate,[this])}beforeSetDimensions(){R(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){R(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),R(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){R(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,n;for(s=0,i=t.length;s<i;s++)n=t[s],n.label=R(e.callback,[n.value,s,t],this)}afterTickToLabelConversion(){R(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){R(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=us(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,n=e.maxRotation;let o=i,r,c,d;if(!this._isVisible()||!e.display||i>=n||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const l=this._getLabelSizes(),p=l.widest.width,g=l.highest.height,u=q(this.chart.width-p,0,this.maxWidth);r=t.offset?this.maxWidth/s:u/(s-1),p+6>r&&(r=u/(s-(t.offset?.5:1)),c=this.maxHeight-ne(t.grid)-e.padding-fs(t.title,this.chart.options.font),d=Math.sqrt(p*p+g*g),o=e2(Math.min(Math.asin(q((l.highest.height+6)/r,-1,1)),Math.asin(q(c/d,-1,1))-Math.asin(q(g/d,-1,1)))),o=Math.max(i,Math.min(n,o))),this.labelRotation=o}afterCalculateLabelRotation(){R(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){R(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:n}}=this,o=this._isVisible(),r=this.isHorizontal();if(o){const c=fs(i,e.options.font);if(r?(t.width=this.maxWidth,t.height=ne(n)+c):(t.height=this.maxHeight,t.width=ne(n)+c),s.display&&this.ticks.length){const{first:d,last:l,widest:p,highest:g}=this._getLabelSizes(),u=s.padding*2,M=rt(this.labelRotation),f=Math.cos(M),v=Math.sin(M);if(r){const m=s.mirror?0:v*p.width+f*g.height;t.height=Math.min(this.maxHeight,t.height+m+u)}else{const m=s.mirror?0:f*p.width+v*g.height;t.width=Math.min(this.maxWidth,t.width+m+u)}this._calculatePadding(d,l,v,f)}}this._handleMargins(),r?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:n,padding:o},position:r}=this.options,c=this.labelRotation!==0,d=r!=="top"&&this.axis==="x";if(this.isHorizontal()){const l=this.getPixelForTick(0)-this.left,p=this.right-this.getPixelForTick(this.ticks.length-1);let g=0,u=0;c?d?(g=i*t.width,u=s*e.height):(g=s*t.height,u=i*e.width):n==="start"?u=e.width:n==="end"?g=t.width:n!=="inner"&&(g=t.width/2,u=e.width/2),this.paddingLeft=Math.max((g-l+o)*this.width/(this.width-l),0),this.paddingRight=Math.max((u-p+o)*this.width/(this.width-p),0)}else{let l=e.height/2,p=t.height/2;n==="start"?(l=0,p=t.height):n==="end"&&(l=e.height,p=0),this.paddingTop=l+o,this.paddingBottom=p+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){R(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)P(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=Ms(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:n}=this,o=[],r=[],c=Math.floor(e/us(e,s));let d=0,l=0,p,g,u,M,f,v,m,x,b,_,y;for(p=0;p<e;p+=c){if(M=t[p].label,f=this._resolveTickFontOptions(p),i.font=v=f.string,m=n[v]=n[v]||{data:{},gc:[]},x=f.lineHeight,b=_=0,!P(M)&&!Z(M))b=a1(i,m.data,m.gc,b,M),_=x;else if(Z(M))for(g=0,u=M.length;g<u;++g)y=M[g],!P(y)&&!Z(y)&&(b=a1(i,m.data,m.gc,b,y),_+=x);o.push(b),r.push(_),d=Math.max(b,d),l=Math.max(_,l)}fC(n,e);const S=o.indexOf(d),C=r.indexOf(l),V=A=>({width:o[A]||0,height:r[A]||0});return{first:V(0),last:V(e-1),widest:V(S),highest:V(C),widths:o,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return sw(this._alignToPixels?Tt(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=mC(this.getContext(),t,s))}return this.$context||(this.$context=vC(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=rt(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),n=this._getLabelSizes(),o=t.autoSkipPadding||0,r=n?n.widest.width+o:0,c=n?n.highest.height+o:0;return this.isHorizontal()?c*s>r*i?r/s:c/i:c*i<r*s?c/s:r/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:n,position:o,border:r}=i,c=n.offset,d=this.isHorizontal(),p=this.ticks.length+(c?1:0),g=ne(n),u=[],M=r.setContext(this.getContext()),f=M.display?M.width:0,v=f/2,m=function(z){return Tt(s,z,f)};let x,b,_,y,S,C,V,A,H,k,T,G;if(o==="top")x=m(this.bottom),C=this.bottom-g,A=x-v,k=m(t.top)+v,G=t.bottom;else if(o==="bottom")x=m(this.top),k=t.top,G=m(t.bottom)-v,C=x+v,A=this.top+g;else if(o==="left")x=m(this.right),S=this.right-g,V=x-v,H=m(t.left)+v,T=t.right;else if(o==="right")x=m(this.left),H=t.left,T=m(t.right)-v,S=x+v,V=this.left+g;else if(e==="x"){if(o==="center")x=m((t.top+t.bottom)/2+.5);else if(D(o)){const z=Object.keys(o)[0],U=o[z];x=m(this.chart.scales[z].getPixelForValue(U))}k=t.top,G=t.bottom,C=x+v,A=C+g}else if(e==="y"){if(o==="center")x=m((t.left+t.right)/2);else if(D(o)){const z=Object.keys(o)[0],U=o[z];x=m(this.chart.scales[z].getPixelForValue(U))}S=x-v,V=S-g,H=t.left,T=t.right}const st=L(i.ticks.maxTicksLimit,p),I=Math.max(1,Math.ceil(p/st));for(b=0;b<p;b+=I){const z=this.getContext(b),U=n.setContext(z),ht=r.setContext(z),X=U.lineWidth,Ut=U.color,Le=ht.dash||[],jt=ht.dashOffset,Jt=U.tickWidth,kt=U.tickColor,Qt=U.tickBorderDash||[],Pt=U.tickBorderDashOffset;_=MC(this,b,c),_!==void 0&&(y=Tt(s,_,X),d?S=V=H=T=y:C=A=k=G=y,u.push({tx1:S,ty1:C,tx2:V,ty2:A,x1:H,y1:k,x2:T,y2:G,width:X,color:Ut,borderDash:Le,borderDashOffset:jt,tickWidth:Jt,tickColor:kt,tickBorderDash:Qt,tickBorderDashOffset:Pt}))}return this._ticksLength=p,this._borderValue=x,u}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:n}=s,o=this.isHorizontal(),r=this.ticks,{align:c,crossAlign:d,padding:l,mirror:p}=n,g=ne(s.grid),u=g+l,M=p?-l:u,f=-rt(this.labelRotation),v=[];let m,x,b,_,y,S,C,V,A,H,k,T,G="middle";if(i==="top")S=this.bottom-M,C=this._getXAxisLabelAlignment();else if(i==="bottom")S=this.top+M,C=this._getXAxisLabelAlignment();else if(i==="left"){const I=this._getYAxisLabelAlignment(g);C=I.textAlign,y=I.x}else if(i==="right"){const I=this._getYAxisLabelAlignment(g);C=I.textAlign,y=I.x}else if(e==="x"){if(i==="center")S=(t.top+t.bottom)/2+u;else if(D(i)){const I=Object.keys(i)[0],z=i[I];S=this.chart.scales[I].getPixelForValue(z)+u}C=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")y=(t.left+t.right)/2-u;else if(D(i)){const I=Object.keys(i)[0],z=i[I];y=this.chart.scales[I].getPixelForValue(z)}C=this._getYAxisLabelAlignment(g).textAlign}e==="y"&&(c==="start"?G="top":c==="end"&&(G="bottom"));const st=this._getLabelSizes();for(m=0,x=r.length;m<x;++m){b=r[m],_=b.label;const I=n.setContext(this.getContext(m));V=this.getPixelForTick(m)+n.labelOffset,A=this._resolveTickFontOptions(m),H=A.lineHeight,k=Z(_)?_.length:1;const z=k/2,U=I.color,ht=I.textStrokeColor,X=I.textStrokeWidth;let Ut=C;o?(y=V,C==="inner"&&(m===x-1?Ut=this.options.reverse?"left":"right":m===0?Ut=this.options.reverse?"right":"left":Ut="center"),i==="top"?d==="near"||f!==0?T=-k*H+H/2:d==="center"?T=-st.highest.height/2-z*H+H:T=-st.highest.height+H/2:d==="near"||f!==0?T=H/2:d==="center"?T=st.highest.height/2-z*H:T=st.highest.height-k*H,p&&(T*=-1),f!==0&&!I.showLabelBackdrop&&(y+=H/2*Math.sin(f))):(S=V,T=(1-k)*H/2);let Le;if(I.showLabelBackdrop){const jt=Q(I.backdropPadding),Jt=st.heights[m],kt=st.widths[m];let Qt=T-jt.top,Pt=0-jt.left;switch(G){case"middle":Qt-=Jt/2;break;case"bottom":Qt-=Jt;break}switch(C){case"center":Pt-=kt/2;break;case"right":Pt-=kt;break;case"inner":m===x-1?Pt-=kt:m>0&&(Pt-=kt/2);break}Le={left:Pt,top:Qt,width:kt+jt.width,height:Jt+jt.height,color:I.backdropColor}}v.push({label:_,font:A,textOffset:T,options:{rotation:f,color:U,strokeColor:ht,strokeWidth:X,textAlign:Ut,textBaseline:G,translation:[y,S],backdrop:Le}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-rt(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:n}}=this.options,o=this._getLabelSizes(),r=t+n,c=o.widest.width;let d,l;return e==="left"?i?(l=this.right+n,s==="near"?d="left":s==="center"?(d="center",l+=c/2):(d="right",l+=c)):(l=this.right-r,s==="near"?d="right":s==="center"?(d="center",l-=c/2):(d="left",l=this.left)):e==="right"?i?(l=this.left+n,s==="near"?d="right":s==="center"?(d="center",l-=c/2):(d="left",l-=c)):(l=this.left+r,s==="near"?d="left":s==="center"?(d="center",l+=c/2):(d="right",l=this.right)):d="right",{textAlign:d,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:n,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,n,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(n=>n.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let n,o;const r=(c,d,l)=>{!l.width||!l.color||(s.save(),s.lineWidth=l.width,s.strokeStyle=l.color,s.setLineDash(l.borderDash||[]),s.lineDashOffset=l.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(d.x,d.y),s.stroke(),s.restore())};if(e.display)for(n=0,o=i.length;n<o;++n){const c=i[n];e.drawOnChartArea&&r({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&r({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,n=s.setContext(this.getContext()),o=s.display?n.width:0;if(!o)return;const r=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let d,l,p,g;this.isHorizontal()?(d=Tt(t,this.left,o)-o/2,l=Tt(t,this.right,r)+r/2,p=g=c):(p=Tt(t,this.top,o)-o/2,g=Tt(t,this.bottom,r)+r/2,d=l=c),e.save(),e.lineWidth=n.width,e.strokeStyle=n.color,e.beginPath(),e.moveTo(d,p),e.lineTo(l,g),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&r1(s,i);const n=this.getLabelItems(t);for(const o of n){const r=o.options,c=o.font,d=o.label,l=o.textOffset;Nt(s,d,0,l,c,r)}i&&c1(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const n=$(s.font),o=Q(s.padding),r=s.align;let c=n.lineHeight/2;e==="bottom"||e==="center"||D(e)?(c+=o.bottom,Z(s.text)&&(c+=n.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:d,titleY:l,maxWidth:p,rotation:g}=yC(this,c,e,r);Nt(t,s.text,0,0,n,{color:s.color,maxWidth:p,rotation:g,textAlign:xC(r,e,i),textBaseline:"middle",translation:[d,l]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=L(t.grid&&t.grid.z,-1),i=L(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Wt.prototype.draw?[{z:e,draw:n=>{this.draw(n)}}]:[{z:s,draw:n=>{this.drawBackground(),this.drawGrid(n),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:n=>{this.drawLabels(n)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let n,o;for(n=0,o=e.length;n<o;++n){const r=e[n];r[s]===this.id&&(!t||r.type===t)&&i.push(r)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return $(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Be{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;wC(e)&&(s=this.register(e));const i=this.items,n=t.id,o=this.scope+"."+n;if(!n)throw new Error("class does not have id: "+t);return n in i||(i[n]=t,bC(t,o,s),this.override&&N.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in N[i]&&(delete N[i][s],this.override&&delete Zt[s])}}function bC(a,t,e){const s=xe(Object.create(null),[e?N.get(e):{},N.get(t),a.defaults]);N.set(t,s),a.defaultRoutes&&_C(t,a.defaultRoutes),a.descriptors&&N.describe(t,a.descriptors)}function _C(a,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),n=[a].concat(s).join("."),o=t[e].split("."),r=o.pop(),c=o.join(".");N.route(n,i,c,r)})}function wC(a){return"id"in a&&"defaults"in a}class SC{constructor(){this.controllers=new Be(ct,"datasets",!0),this.elements=new Be(dt,"elements"),this.plugins=new Be(Object,"plugins"),this.scales=new Be(Wt,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const n=s||this._getRegistryForType(i);s||n.isForType(i)||n===this.plugins&&i.id?this._exec(t,n,i):O(i,o=>{const r=s||this._getRegistryForType(o);this._exec(t,r,o)})})}_exec(t,e,s){const i=t2(t);R(s["before"+i],[],s),e[t](s),R(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var pt=new SC;class CC{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const n=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(n,t,e,s);return e==="afterDestroy"&&(this._notify(n,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const n of t){const o=n.plugin,r=o[s],c=[e,i,n.options];if(R(r,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){P(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=L(s.options&&s.options.plugins,{}),n=VC(s);return i===!1&&!e?[]:LC(t,n,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(n,o)=>n.filter(r=>!o.some(c=>r.plugin.id===c.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function VC(a){const t={},e=[],s=Object.keys(pt.plugins.items);for(let n=0;n<s.length;n++)e.push(pt.getPlugin(s[n]));const i=a.plugins||[];for(let n=0;n<i.length;n++){const o=i[n];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function AC(a,t){return!t&&a===!1?null:a===!0?{}:a}function LC(a,{plugins:t,localIds:e},s,i){const n=[],o=a.getContext();for(const r of t){const c=r.id,d=AC(s[c],i);d!==null&&n.push({plugin:r,options:HC(a.config,{plugin:r,local:e[c]},d,o)})}return n}function HC(a,{plugin:t,local:e},s,i){const n=a.pluginScopeKeys(t),o=a.getOptionScopes(s,n);return e&&t.defaults&&o.push(t.defaults),a.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function z1(a,t){const e=N.datasets[a]||{};return((t.datasets||{})[a]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function kC(a,t){let e=a;return a==="_index_"?e=t:a==="_value_"&&(e=t==="x"?"y":"x"),e}function PC(a,t){return a===t?"_index_":"_value_"}function vs(a){if(a==="x"||a==="y"||a==="r")return a}function DC(a){if(a==="top"||a==="bottom")return"x";if(a==="left"||a==="right")return"y"}function Z1(a,...t){if(vs(a))return a;for(const e of t){const s=e.axis||DC(e.position)||a.length>1&&vs(a[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${a}' axis. Please provide 'axis' or 'position' option.`)}function ms(a,t,e){if(e[t+"AxisID"]===a)return{axis:t}}function TC(a,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===a||s.yAxisID===a);if(e.length)return ms(a,"x",e[0])||ms(a,"y",e[0])}return{}}function EC(a,t){const e=Zt[a.type]||{scales:{}},s=t.scales||{},i=z1(a.type,t),n=Object.create(null);return Object.keys(s).forEach(o=>{const r=s[o];if(!D(r))return console.error(`Invalid scale configuration for scale: ${o}`);if(r._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Z1(o,r,TC(o,a),N.scales[r.type]),d=PC(c,i),l=e.scales||{};n[o]=ge(Object.create(null),[{axis:c},r,l[c],l[d]])}),a.data.datasets.forEach(o=>{const r=o.type||a.type,c=o.indexAxis||z1(r,t),l=(Zt[r]||{}).scales||{};Object.keys(l).forEach(p=>{const g=kC(p,c),u=o[g+"AxisID"]||g;n[u]=n[u]||Object.create(null),ge(n[u],[{axis:g},s[u],l[p]])})}),Object.keys(n).forEach(o=>{const r=n[o];ge(r,[N.scales[r.type],N.scale])}),n}function Oi(a){const t=a.options||(a.options={});t.plugins=L(t.plugins,{}),t.scales=EC(a,t)}function Ii(a){return a=a||{},a.datasets=a.datasets||[],a.labels=a.labels||[],a}function OC(a){return a=a||{},a.data=Ii(a.data),Oi(a),a}const xs=new Map,Fi=new Set;function ze(a,t){let e=xs.get(a);return e||(e=t(),xs.set(a,e),Fi.add(e)),e}const he=(a,t,e)=>{const s=At(t,e);s!==void 0&&a.add(s)};class IC{constructor(t){this._config=OC(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Ii(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Oi(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ze(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return ze(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return ze(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return ze(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:n}=this,o=this._cachedScopes(t,s),r=o.get(e);if(r)return r;const c=new Set;e.forEach(l=>{t&&(c.add(t),l.forEach(p=>he(c,t,p))),l.forEach(p=>he(c,i,p)),l.forEach(p=>he(c,Zt[n]||{},p)),l.forEach(p=>he(c,N,p)),l.forEach(p=>he(c,F1,p))});const d=Array.from(c);return d.length===0&&d.push(Object.create(null)),Fi.has(e)&&o.set(e,d),d}chartOptionScopes(){const{options:t,type:e}=this;return[t,Zt[e]||{},N.datasets[e]||{},{type:e},N,F1]}resolveNamedOptions(t,e,s,i=[""]){const n={$shared:!0},{resolver:o,subPrefixes:r}=ys(this._resolverCache,t,i);let c=o;if(RC(o,e)){n.$shared=!1,s=Lt(s)?s():s;const d=this.createResolver(t,s,r);c=Yt(o,s,d)}for(const d of e)n[d]=c[d];return n}createResolver(t,e,s=[""],i){const{resolver:n}=ys(this._resolverCache,t,s);return D(e)?Yt(n,e,void 0,i):n}}function ys(a,t,e){let s=a.get(t);s||(s=new Map,a.set(t,s));const i=e.join();let n=s.get(i);return n||(n={resolver:h2(t,e),subPrefixes:e.filter(r=>!r.toLowerCase().includes("hover"))},s.set(i,n)),n}const FC=a=>D(a)&&Object.getOwnPropertyNames(a).some(t=>Lt(a[t]));function RC(a,t){const{isScriptable:e,isIndexable:s}=Mi(a);for(const i of t){const n=e(i),o=s(i),r=(o||n)&&a[i];if(n&&(Lt(r)||FC(r))||o&&Z(r))return!0}return!1}var BC="4.5.1";const zC=["top","bottom","left","right","chartArea"];function bs(a,t){return a==="top"||a==="bottom"||zC.indexOf(a)===-1&&t==="x"}function _s(a,t){return function(e,s){return e[a]===s[a]?e[t]-s[t]:e[a]-s[a]}}function ws(a){const t=a.chart,e=t.options.animation;t.notifyPlugins("afterRender"),R(e&&e.onComplete,[a],t)}function ZC(a){const t=a.chart,e=t.options.animation;R(e&&e.onProgress,[a],t)}function Ri(a){return c2()&&typeof a=="string"?a=document.getElementById(a):a&&a.length&&(a=a[0]),a&&a.canvas&&(a=a.canvas),a}const Ye={},Ss=a=>{const t=Ri(a);return Object.values(Ye).filter(e=>e.canvas===t).pop()};function NC(a,t,e){const s=Object.keys(a);for(const i of s){const n=+i;if(n>=t){const o=a[i];delete a[i],(e>0||n>t)&&(a[n+e]=o)}}}function WC(a,t,e,s){return!e||a.type==="mouseout"?null:s?t:a}class ot{static register(...t){pt.add(...t),Cs()}static unregister(...t){pt.remove(...t),Cs()}constructor(t,e){const s=this.config=new IC(e),i=Ri(t),n=Ss(i);if(n)throw new Error("Canvas is already in use. Chart with ID '"+n.id+"' must be destroyed before the canvas with ID '"+n.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||oC(i)),this.platform.updateConfig(s);const r=this.platform.acquireContext(i,o.aspectRatio),c=r&&r.canvas,d=c&&c.height,l=c&&c.width;if(this.id=U_(),this.ctx=r,this.canvas=c,this.width=l,this.height=d,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new CC,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=ow(p=>this.update(p),o.resizeDelay||0),this._dataChanges=[],Ye[this.id]=this,!r||!c){console.error("Failed to create chart: can't acquire context from the given item");return}Mt.listen(this,"complete",ws),Mt.listen(this,"progress",ZC),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:n}=this;return P(t)?e&&n?n:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return pt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():qa(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Ua(this.canvas,this.ctx),this}stop(){return Mt.stop(this),this}resize(t,e){Mt.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,n=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,n),r=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,qa(this,r,!0)&&(this.notifyPlugins("resize",{size:o}),R(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};O(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,r)=>(o[r]=!1,o),{});let n=[];e&&(n=n.concat(Object.keys(e).map(o=>{const r=e[o],c=Z1(o,r),d=c==="r",l=c==="x";return{options:r,dposition:d?"chartArea":l?"bottom":"left",dtype:d?"radialLinear":l?"category":"linear"}}))),O(n,o=>{const r=o.options,c=r.id,d=Z1(c,r),l=L(r.type,o.dtype);(r.position===void 0||bs(r.position,d)!==bs(o.dposition))&&(r.position=o.dposition),i[c]=!0;let p=null;if(c in s&&s[c].type===l)p=s[c];else{const g=pt.getScale(l);p=new g({id:c,type:l,ctx:this.ctx,chart:this}),s[p.id]=p}p.init(r,t)}),O(i,(o,r)=>{o||delete s[r]}),O(s,o=>{J.configure(this,o,o.options),J.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,n)=>i.index-n.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(_s("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(n=>n===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const n=e[s];let o=this.getDatasetMeta(s);const r=n.type||this.config.type;if(o.type&&o.type!==r&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=r,o.indexAxis=n.indexAxis||z1(r,this.options),o.order=n.order||0,o.index=s,o.label=""+n.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=pt.getController(r),{datasetElementType:d,dataElementType:l}=N.datasets[r];Object.assign(c,{dataElementType:pt.getElement(l),datasetElementType:d&&pt.getElement(d)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){O(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let d=0,l=this.data.datasets.length;d<l;d++){const{controller:p}=this.getDatasetMeta(d),g=!i&&n.indexOf(p)===-1;p.buildOrUpdateElements(g),o=Math.max(+p.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||O(n,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(_s("z","_idx"));const{_active:r,_lastEvent:c}=this;c?this._eventHandler(c,!0):r.length&&this._updateHoverStyles(r,r,!0),this.render()}_updateScales(){O(this.scales,t=>{J.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Oa(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:n}of e){const o=s==="_removeElements"?-n:n;NC(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=n=>new Set(t.filter(o=>o[0]===n).map((o,r)=>r+","+o.splice(1).join(","))),i=s(0);for(let n=1;n<e;n++)if(!Oa(i,s(n)))return;return Array.from(i).map(n=>n.split(",")).map(n=>({method:n[1],start:+n[2],count:+n[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;J.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],O(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,n)=>{i._idx=n}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,Lt(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Mt.has(this)?this.attached&&!Mt.running(this)&&Mt.start(this):(this.draw(),ws({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,n;for(i=0,n=e.length;i<n;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=Vi(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&r1(e,i),t.controller.draw(),i&&c1(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return yt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const n=zS.modes[e];return typeof n=="function"?n(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(n=>n&&n._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=Ht(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",n=this.getDatasetMeta(t),o=n.controller._resolveAnimations(void 0,i);ye(e)?(n.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(n,{visible:s}),this.update(r=>r.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Mt.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Ua(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ye[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(n,o)=>{e.addEventListener(this,n,o),t[n]=o},i=(n,o,r)=>{n.offsetX=o,n.offsetY=r,this._eventHandler(n)};O(this.options.events,n=>s(n,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,d)=>{e.addEventListener(this,c,d),t[c]=d},i=(c,d)=>{t[c]&&(e.removeEventListener(this,c,d),delete t[c])},n=(c,d)=>{this.canvas&&this.resize(c,d)};let o;const r=()=>{i("attach",r),this.attached=!0,this.resize(),s("resize",n),s("detach",o)};o=()=>{this.attached=!1,i("resize",n),this._stop(),this._resize(0,0),s("attach",r)},e.isAttached(this.canvas)?r():o()}unbindEvents(){O(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},O(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let n,o,r,c;for(e==="dataset"&&(n=this.getDatasetMeta(t[0].datasetIndex),n.controller["_"+i+"DatasetHoverStyle"]()),r=0,c=t.length;r<c;++r){o=t[r];const d=o&&this.getDatasetMeta(o.datasetIndex).controller;d&&d[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:n,index:o})=>{const r=this.getDatasetMeta(n);if(!r)throw new Error("No dataset found at index "+n);return{datasetIndex:n,element:r.data[o],index:o}});!Qe(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,n=(c,d)=>c.filter(l=>!d.some(p=>l.datasetIndex===p.datasetIndex&&l.index===p.index)),o=n(e,t),r=s?t:n(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),r.length&&i.mode&&this.updateHoverStyle(r,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const n=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(n||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:n}=this,o=e,r=this._getActiveElements(t,i,s,o),c=Y_(t),d=WC(t,this._lastEvent,s,c);s&&(this._lastEvent=null,R(n.onHover,[t,r,this],this),c&&R(n.onClick,[t,r,this],this));const l=!Qe(r,i);return(l||e)&&(this._active=r,this._updateHoverStyles(r,i,e)),this._lastEvent=d,l}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,i)}}w(ot,"defaults",N),w(ot,"instances",Ye),w(ot,"overrides",Zt),w(ot,"registry",pt),w(ot,"version",BC),w(ot,"getChart",Ss);function Cs(){return O(ot.instances,a=>a._plugins.invalidate())}function UC(a,t,e){const{startAngle:s,x:i,y:n,outerRadius:o,innerRadius:r,options:c}=t,{borderWidth:d,borderJoinStyle:l}=c,p=Math.min(d/o,K(s-e));if(a.beginPath(),a.arc(i,n,o-d/2,s+p/2,e-p/2),r>0){const g=Math.min(d/r,K(s-e));a.arc(i,n,r+d/2,e-g/2,s+g/2,!0)}else{const g=Math.min(d/2,o*K(s-e));if(l==="round")a.arc(i,n,g,e-E/2,s+E/2,!0);else if(l==="bevel"){const u=2*g*g,M=-u*Math.cos(e+E/2)+i,f=-u*Math.sin(e+E/2)+n,v=u*Math.cos(s+E/2)+i,m=u*Math.sin(s+E/2)+n;a.lineTo(M,f),a.lineTo(v,m)}}a.closePath(),a.moveTo(0,0),a.rect(0,0,a.canvas.width,a.canvas.height),a.clip("evenodd")}function jC(a,t,e){const{startAngle:s,pixelMargin:i,x:n,y:o,outerRadius:r,innerRadius:c}=t;let d=i/r;a.beginPath(),a.arc(n,o,r,s-d,e+d),c>i?(d=i/c,a.arc(n,o,c,e+d,s-d,!0)):a.arc(n,o,i,e+j,s-j),a.closePath(),a.clip()}function $C(a){return n2(a,["outerStart","outerEnd","innerStart","innerEnd"])}function qC(a,t,e,s){const i=$C(a.options.borderRadius),n=(e-t)/2,o=Math.min(n,s*t/2),r=c=>{const d=(e-Math.min(n,c))*s/2;return q(c,0,Math.min(n,d))};return{outerStart:r(i.outerStart),outerEnd:r(i.outerEnd),innerStart:q(i.innerStart,0,o),innerEnd:q(i.innerEnd,0,o)}}function qt(a,t,e,s){return{x:e+a*Math.cos(t),y:s+a*Math.sin(t)}}function n1(a,t,e,s,i,n){const{x:o,y:r,startAngle:c,pixelMargin:d,innerRadius:l}=t,p=Math.max(t.outerRadius+s+e-d,0),g=l>0?l+s+e+d:0;let u=0;const M=i-c;if(s){const I=l>0?l-s:0,z=p>0?p-s:0,U=(I+z)/2,ht=U!==0?M*U/(U+s):M;u=(M-ht)/2}const f=Math.max(.001,M*p-e/E)/p,v=(M-f)/2,m=c+v+u,x=i-v-u,{outerStart:b,outerEnd:_,innerStart:y,innerEnd:S}=qC(t,g,p,x-m),C=p-b,V=p-_,A=m+b/C,H=x-_/V,k=g+y,T=g+S,G=m+y/k,st=x-S/T;if(a.beginPath(),n){const I=(A+H)/2;if(a.arc(o,r,p,A,I),a.arc(o,r,p,I,H),_>0){const X=qt(V,H,o,r);a.arc(X.x,X.y,_,H,x+j)}const z=qt(T,x,o,r);if(a.lineTo(z.x,z.y),S>0){const X=qt(T,st,o,r);a.arc(X.x,X.y,S,x+j,st+Math.PI)}const U=(x-S/g+(m+y/g))/2;if(a.arc(o,r,g,x-S/g,U,!0),a.arc(o,r,g,U,m+y/g,!0),y>0){const X=qt(k,G,o,r);a.arc(X.x,X.y,y,G+Math.PI,m-j)}const ht=qt(C,m,o,r);if(a.lineTo(ht.x,ht.y),b>0){const X=qt(C,A,o,r);a.arc(X.x,X.y,b,m-j,A)}}else{a.moveTo(o,r);const I=Math.cos(A)*p+o,z=Math.sin(A)*p+r;a.lineTo(I,z);const U=Math.cos(H)*p+o,ht=Math.sin(H)*p+r;a.lineTo(U,ht)}a.closePath()}function GC(a,t,e,s,i){const{fullCircles:n,startAngle:o,circumference:r}=t;let c=t.endAngle;if(n){n1(a,t,e,s,c,i);for(let d=0;d<n;++d)a.fill();isNaN(r)||(c=o+(r%B||B))}return n1(a,t,e,s,c,i),a.fill(),c}function XC(a,t,e,s,i){const{fullCircles:n,startAngle:o,circumference:r,options:c}=t,{borderWidth:d,borderJoinStyle:l,borderDash:p,borderDashOffset:g,borderRadius:u}=c,M=c.borderAlign==="inner";if(!d)return;a.setLineDash(p||[]),a.lineDashOffset=g,M?(a.lineWidth=d*2,a.lineJoin=l||"round"):(a.lineWidth=d,a.lineJoin=l||"bevel");let f=t.endAngle;if(n){n1(a,t,e,s,f,i);for(let v=0;v<n;++v)a.stroke();isNaN(r)||(f=o+(r%B||B))}M&&jC(a,t,f),c.selfJoin&&f-o>=E&&u===0&&l!=="miter"&&UC(a,t,f),n||(n1(a,t,e,s,f,i),a.stroke())}class de extends dt{constructor(e){super();w(this,"circumference");w(this,"endAngle");w(this,"fullCircles");w(this,"innerRadius");w(this,"outerRadius");w(this,"pixelMargin");w(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const n=this.getProps(["x","y"],i),{angle:o,distance:r}=ni(n,{x:e,y:s}),{startAngle:c,endAngle:d,innerRadius:l,outerRadius:p,circumference:g}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),u=(this.options.spacing+this.options.borderWidth)/2,M=L(g,d-c),f=be(o,c,d)&&c!==d,v=M>=B||f,m=mt(r,l+u,p+u);return v&&m}getCenterPoint(e){const{x:s,y:i,startAngle:n,endAngle:o,innerRadius:r,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:d,spacing:l}=this.options,p=(n+o)/2,g=(r+c+l+d)/2;return{x:s+Math.cos(p)*g,y:i+Math.sin(p)*g}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,n=(s.offset||0)/4,o=(s.spacing||0)/2,r=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>B?Math.floor(i/B):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*n,Math.sin(c)*n);const d=1-Math.sin(Math.min(E,i||0)),l=n*d;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,GC(e,this,l,o,r),XC(e,this,l,o,r),e.restore()}}w(de,"id","arc"),w(de,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),w(de,"defaultRoutes",{backgroundColor:"backgroundColor"}),w(de,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Bi(a,t,e=t){a.lineCap=L(e.borderCapStyle,t.borderCapStyle),a.setLineDash(L(e.borderDash,t.borderDash)),a.lineDashOffset=L(e.borderDashOffset,t.borderDashOffset),a.lineJoin=L(e.borderJoinStyle,t.borderJoinStyle),a.lineWidth=L(e.borderWidth,t.borderWidth),a.strokeStyle=L(e.borderColor,t.borderColor)}function YC(a,t,e){a.lineTo(e.x,e.y)}function KC(a){return a.stepped?xw:a.tension||a.cubicInterpolationMode==="monotone"?yw:YC}function zi(a,t,e={}){const s=a.length,{start:i=0,end:n=s-1}=e,{start:o,end:r}=t,c=Math.max(i,o),d=Math.min(n,r),l=i<o&&n<o||i>r&&n>r;return{count:s,start:c,loop:t.loop,ilen:d<c&&!l?s+d-c:d-c}}function JC(a,t,e,s){const{points:i,options:n}=t,{count:o,start:r,loop:c,ilen:d}=zi(i,e,s),l=KC(n);let{move:p=!0,reverse:g}=s||{},u,M,f;for(u=0;u<=d;++u)M=i[(r+(g?d-u:u))%o],!M.skip&&(p?(a.moveTo(M.x,M.y),p=!1):l(a,f,M,g,n.stepped),f=M);return c&&(M=i[(r+(g?d:0))%o],l(a,f,M,g,n.stepped)),!!c}function QC(a,t,e,s){const i=t.points,{count:n,start:o,ilen:r}=zi(i,e,s),{move:c=!0,reverse:d}=s||{};let l=0,p=0,g,u,M,f,v,m;const x=_=>(o+(d?r-_:_))%n,b=()=>{f!==v&&(a.lineTo(l,v),a.lineTo(l,f),a.lineTo(l,m))};for(c&&(u=i[x(0)],a.moveTo(u.x,u.y)),g=0;g<=r;++g){if(u=i[x(g)],u.skip)continue;const _=u.x,y=u.y,S=_|0;S===M?(y<f?f=y:y>v&&(v=y),l=(p*l+_)/++p):(b(),a.lineTo(_,y),M=S,p=0,f=v=y),m=y}b()}function N1(a){const t=a.options,e=t.borderDash&&t.borderDash.length;return!a._decimated&&!a._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?QC:JC}function tV(a){return a.stepped?Jw:a.tension||a.cubicInterpolationMode==="monotone"?Qw:Ft}function eV(a,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),Bi(a,t.options),a.stroke(i)}function aV(a,t,e,s){const{segments:i,options:n}=t,o=N1(t);for(const r of i)Bi(a,n,r.style),a.beginPath(),o(a,t,r,{start:e,end:e+s-1})&&a.closePath(),a.stroke()}const sV=typeof Path2D=="function";function iV(a,t,e,s){sV&&!t.options.segment?eV(a,t,e,s):aV(a,t,e,s)}class St extends dt{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;Uw(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=nS(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],n=this.points,o=Ci(this,{property:e,start:i,end:i});if(!o.length)return;const r=[],c=tV(s);let d,l;for(d=0,l=o.length;d<l;++d){const{start:p,end:g}=o[d],u=n[p],M=n[g];if(u===M){r.push(u);continue}const f=Math.abs((i-u[e])/(M[e]-u[e])),v=c(u,M,f,s.stepped);v[e]=t[e],r.push(v)}return r.length===1?r[0]:r}pathSegment(t,e,s){return N1(this)(t,this,e,s)}path(t,e,s){const i=this.segments,n=N1(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const r of i)o&=n(t,this,r,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const n=this.options||{};(this.points||[]).length&&n.borderWidth&&(t.save(),iV(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}w(St,"id","line"),w(St,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),w(St,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),w(St,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Vs(a,t,e,s){const i=a.options,{[e]:n}=a.getProps([e],s);return Math.abs(t-n)<i.radius+i.hitRadius}class Ke extends dt{constructor(e){super();w(this,"parsed");w(this,"skip");w(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const n=this.options,{x:o,y:r}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-r,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(e,s){return Vs(this,e,"x",s)}inYRange(e,s){return Vs(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!yt(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,R1(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}w(Ke,"id","point"),w(Ke,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),w(Ke,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Zi(a,t){const{x:e,y:s,base:i,width:n,height:o}=a.getProps(["x","y","base","width","height"],t);let r,c,d,l,p;return a.horizontal?(p=o/2,r=Math.min(e,i),c=Math.max(e,i),d=s-p,l=s+p):(p=n/2,r=e-p,c=e+p,d=Math.min(s,i),l=Math.max(s,i)),{left:r,top:d,right:c,bottom:l}}function Ct(a,t,e,s){return a?0:q(t,e,s)}function nV(a,t,e){const s=a.options.borderWidth,i=a.borderSkipped,n=ui(s);return{t:Ct(i.top,n.top,0,e),r:Ct(i.right,n.right,0,t),b:Ct(i.bottom,n.bottom,0,e),l:Ct(i.left,n.left,0,t)}}function hV(a,t,e){const{enableBorderRadius:s}=a.getProps(["enableBorderRadius"]),i=a.options.borderRadius,n=Bt(i),o=Math.min(t,e),r=a.borderSkipped,c=s||D(i);return{topLeft:Ct(!c||r.top||r.left,n.topLeft,0,o),topRight:Ct(!c||r.top||r.right,n.topRight,0,o),bottomLeft:Ct(!c||r.bottom||r.left,n.bottomLeft,0,o),bottomRight:Ct(!c||r.bottom||r.right,n.bottomRight,0,o)}}function oV(a){const t=Zi(a),e=t.right-t.left,s=t.bottom-t.top,i=nV(a,e/2,s/2),n=hV(a,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:n},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,n.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,n.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,n.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,n.bottomRight-Math.max(i.b,i.r))}}}}function L1(a,t,e,s){const i=t===null,n=e===null,r=a&&!(i&&n)&&Zi(a,s);return r&&(i||mt(t,r.left,r.right))&&(n||mt(e,r.top,r.bottom))}function rV(a){return a.topLeft||a.topRight||a.bottomLeft||a.bottomRight}function cV(a,t){a.rect(t.x,t.y,t.w,t.h)}function H1(a,t,e={}){const s=a.x!==e.x?-t:0,i=a.y!==e.y?-t:0,n=(a.x+a.w!==e.x+e.w?t:0)-s,o=(a.y+a.h!==e.y+e.h?t:0)-i;return{x:a.x+s,y:a.y+i,w:a.w+n,h:a.h+o,radius:a.radius}}class Je extends dt{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:n,outer:o}=oV(this),r=rV(o.radius)?_e:cV;t.save(),(o.w!==n.w||o.h!==n.h)&&(t.beginPath(),r(t,H1(o,e,n)),t.clip(),r(t,H1(n,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),r(t,H1(n,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return L1(this,t,e,s)}inXRange(t,e){return L1(this,t,null,e)}inYRange(t,e){return L1(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:n}=this.getProps(["x","y","base","horizontal"],t);return{x:n?(e+i)/2:e,y:n?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}w(Je,"id","bar"),w(Je,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),w(Je,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var dV=Object.freeze({__proto__:null,ArcElement:de,BarElement:Je,LineElement:St,PointElement:Ke});const W1=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],As=W1.map(a=>a.replace("rgb(","rgba(").replace(")",", 0.5)"));function Ni(a){return W1[a%W1.length]}function Wi(a){return As[a%As.length]}function lV(a,t){return a.borderColor=Ni(t),a.backgroundColor=Wi(t),++t}function pV(a,t){return a.backgroundColor=a.data.map(()=>Ni(t++)),t}function gV(a,t){return a.backgroundColor=a.data.map(()=>Wi(t++)),t}function uV(a){let t=0;return(e,s)=>{const i=a.getDatasetMeta(s).controller;i instanceof Rt?t=pV(e,t):i instanceof ve?t=gV(e,t):i&&(t=lV(e,t))}}function Ls(a){let t;for(t in a)if(a[t].borderColor||a[t].backgroundColor)return!0;return!1}function MV(a){return a&&(a.borderColor||a.backgroundColor)}function fV(){return N.borderColor!=="rgba(0,0,0,0.1)"||N.backgroundColor!=="rgba(0,0,0,0.1)"}var vV={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(a,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=a.config,{elements:n}=i,o=Ls(s)||MV(i)||n&&Ls(n)||fV();if(!e.forceOverride&&o)return;const r=uV(a);s.forEach(r)}};function mV(a,t,e,s,i){const n=i.samples||s;if(n>=e)return a.slice(t,t+e);const o=[],r=(e-2)/(n-2);let c=0;const d=t+e-1;let l=t,p,g,u,M,f;for(o[c++]=a[l],p=0;p<n-2;p++){let v=0,m=0,x;const b=Math.floor((p+1)*r)+1+t,_=Math.min(Math.floor((p+2)*r)+1,e)+t,y=_-b;for(x=b;x<_;x++)v+=a[x].x,m+=a[x].y;v/=y,m/=y;const S=Math.floor(p*r)+1+t,C=Math.min(Math.floor((p+1)*r)+1,e)+t,{x:V,y:A}=a[l];for(u=M=-1,x=S;x<C;x++)M=.5*Math.abs((V-v)*(a[x].y-A)-(V-a[x].x)*(m-A)),M>u&&(u=M,g=a[x],f=x);o[c++]=g,l=f}return o[c++]=a[d],o}function xV(a,t,e,s){let i=0,n=0,o,r,c,d,l,p,g,u,M,f;const v=[],m=t+e-1,x=a[t].x,_=a[m].x-x;for(o=t;o<t+e;++o){r=a[o],c=(r.x-x)/_*s,d=r.y;const y=c|0;if(y===l)d<M?(M=d,p=o):d>f&&(f=d,g=o),i=(n*i+r.x)/++n;else{const S=o-1;if(!P(p)&&!P(g)){const C=Math.min(p,g),V=Math.max(p,g);C!==u&&C!==S&&v.push({...a[C],x:i}),V!==u&&V!==S&&v.push({...a[V],x:i})}o>0&&S!==u&&v.push(a[S]),v.push(r),l=y,n=0,M=f=d,p=g=u=o}}return v}function Ui(a){if(a._decimated){const t=a._data;delete a._decimated,delete a._data,Object.defineProperty(a,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Hs(a){a.data.datasets.forEach(t=>{Ui(t)})}function yV(a,t){const e=t.length;let s=0,i;const{iScale:n}=a,{min:o,max:r,minDefined:c,maxDefined:d}=n.getUserBounds();return c&&(s=q(xt(t,n.axis,o).lo,0,e-1)),d?i=q(xt(t,n.axis,r).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var bV={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(a,t,e)=>{if(!e.enabled){Hs(a);return}const s=a.width;a.data.datasets.forEach((i,n)=>{const{_data:o,indexAxis:r}=i,c=a.getDatasetMeta(n),d=o||i.data;if(re([r,a.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const l=a.scales[c.xAxisID];if(l.type!=="linear"&&l.type!=="time"||a.options.parsing)return;let{start:p,count:g}=yV(c,d);const u=e.threshold||4*s;if(g<=u){Ui(i);return}P(o)&&(i._data=d,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(f){this._data=f}}));let M;switch(e.algorithm){case"lttb":M=mV(d,p,g,s,e);break;case"min-max":M=xV(d,p,g,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=M})},destroy(a){Hs(a)}};function _V(a,t,e){const s=a.segments,i=a.points,n=t.points,o=[];for(const r of s){let{start:c,end:d}=r;d=p1(c,d,i);const l=U1(e,i[c],i[d],r.loop);if(!t.segments){o.push({source:r,target:l,start:i[c],end:i[d]});continue}const p=Ci(t,l);for(const g of p){const u=U1(e,n[g.start],n[g.end],g.loop),M=Si(r,i,u);for(const f of M)o.push({source:f,target:g,start:{[e]:ks(l,u,"start",Math.max)},end:{[e]:ks(l,u,"end",Math.min)}})}}return o}function U1(a,t,e,s){if(s)return;let i=t[a],n=e[a];return a==="angle"&&(i=K(i),n=K(n)),{property:a,start:i,end:n}}function wV(a,t){const{x:e=null,y:s=null}=a||{},i=t.points,n=[];return t.segments.forEach(({start:o,end:r})=>{r=p1(o,r,i);const c=i[o],d=i[r];s!==null?(n.push({x:c.x,y:s}),n.push({x:d.x,y:s})):e!==null&&(n.push({x:e,y:c.y}),n.push({x:e,y:d.y}))}),n}function p1(a,t,e){for(;t>a;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function ks(a,t,e,s){return a&&t?s(a[e],t[e]):a?a[e]:t?t[e]:0}function ji(a,t){let e=[],s=!1;return Z(a)?(s=!0,e=a):e=wV(a,t),e.length?new St({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Ps(a){return a&&a.fill!==!1}function SV(a,t,e){let i=a[t].fill;const n=[t];let o;if(!e)return i;for(;i!==!1&&n.indexOf(i)===-1;){if(!W(i))return i;if(o=a[i],!o)return!1;if(o.visible)return i;n.push(i),i=o.fill}return!1}function CV(a,t,e){const s=HV(a);if(D(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return W(i)&&Math.floor(i)===i?VV(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function VV(a,t,e,s){return(a==="-"||a==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function AV(a,t){let e=null;return a==="start"?e=t.bottom:a==="end"?e=t.top:D(a)?e=t.getPixelForValue(a.value):t.getBasePixel&&(e=t.getBasePixel()),e}function LV(a,t,e){let s;return a==="start"?s=e:a==="end"?s=t.options.reverse?t.min:t.max:D(a)?s=a.value:s=t.getBaseValue(),s}function HV(a){const t=a.options,e=t.fill;let s=L(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function kV(a){const{scale:t,index:e,line:s}=a,i=[],n=s.segments,o=s.points,r=PV(t,e);r.push(ji({x:null,y:t.bottom},s));for(let c=0;c<n.length;c++){const d=n[c];for(let l=d.start;l<=d.end;l++)DV(i,o[l],r)}return new St({points:i,options:{}})}function PV(a,t){const e=[],s=a.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const n=s[i];if(n.index===t)break;n.hidden||e.unshift(n.dataset)}return e}function DV(a,t,e){const s=[];for(let i=0;i<e.length;i++){const n=e[i],{first:o,last:r,point:c}=TV(n,t,"x");if(!(!c||o&&r)){if(o)s.unshift(c);else if(a.push(c),!r)break}}a.push(...s)}function TV(a,t,e){const s=a.interpolate(t,e);if(!s)return{};const i=s[e],n=a.segments,o=a.points;let r=!1,c=!1;for(let d=0;d<n.length;d++){const l=n[d],p=o[l.start][e],g=o[l.end][e];if(mt(i,p,g)){r=i===p,c=i===g;break}}return{first:r,last:c,point:s}}class $i{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:n,radius:o}=this;return e=e||{start:0,end:B},t.arc(i,n,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,n=t.angle;return{x:e+Math.cos(n)*i,y:s+Math.sin(n)*i,angle:n}}}function EV(a){const{chart:t,fill:e,line:s}=a;if(W(e))return OV(t,e);if(e==="stack")return kV(a);if(e==="shape")return!0;const i=IV(a);return i instanceof $i?i:ji(i,s)}function OV(a,t){const e=a.getDatasetMeta(t);return e&&a.isDatasetVisible(t)?e.dataset:null}function IV(a){return(a.scale||{}).getPointPositionForValue?RV(a):FV(a)}function FV(a){const{scale:t={},fill:e}=a,s=AV(e,t);if(W(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function RV(a){const{scale:t,fill:e}=a,s=t.options,i=t.getLabels().length,n=s.reverse?t.max:t.min,o=LV(e,t,n),r=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,n);return new $i({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<i;++c)r.push(t.getPointPositionForValue(c,o));return r}function k1(a,t,e){const s=EV(t),{chart:i,index:n,line:o,scale:r,axis:c}=t,d=o.options,l=d.fill,p=d.backgroundColor,{above:g=p,below:u=p}=l||{},M=i.getDatasetMeta(n),f=Vi(i,M);s&&o.points.length&&(r1(a,e),BV(a,{line:o,target:s,above:g,below:u,area:e,scale:r,axis:c,clip:f}),c1(a))}function BV(a,t){const{line:e,target:s,above:i,below:n,area:o,scale:r,clip:c}=t,d=e._loop?"angle":t.axis;a.save();let l=n;n!==i&&(d==="x"?(Ds(a,s,o.top),P1(a,{line:e,target:s,color:i,scale:r,property:d,clip:c}),a.restore(),a.save(),Ds(a,s,o.bottom)):d==="y"&&(Ts(a,s,o.left),P1(a,{line:e,target:s,color:n,scale:r,property:d,clip:c}),a.restore(),a.save(),Ts(a,s,o.right),l=i)),P1(a,{line:e,target:s,color:l,scale:r,property:d,clip:c}),a.restore()}function Ds(a,t,e){const{segments:s,points:i}=t;let n=!0,o=!1;a.beginPath();for(const r of s){const{start:c,end:d}=r,l=i[c],p=i[p1(c,d,i)];n?(a.moveTo(l.x,l.y),n=!1):(a.lineTo(l.x,e),a.lineTo(l.x,l.y)),o=!!t.pathSegment(a,r,{move:o}),o?a.closePath():a.lineTo(p.x,e)}a.lineTo(t.first().x,e),a.closePath(),a.clip()}function Ts(a,t,e){const{segments:s,points:i}=t;let n=!0,o=!1;a.beginPath();for(const r of s){const{start:c,end:d}=r,l=i[c],p=i[p1(c,d,i)];n?(a.moveTo(l.x,l.y),n=!1):(a.lineTo(e,l.y),a.lineTo(l.x,l.y)),o=!!t.pathSegment(a,r,{move:o}),o?a.closePath():a.lineTo(e,p.y)}a.lineTo(e,t.first().y),a.closePath(),a.clip()}function P1(a,t){const{line:e,target:s,property:i,color:n,scale:o,clip:r}=t,c=_V(e,s,i);for(const{source:d,target:l,start:p,end:g}of c){const{style:{backgroundColor:u=n}={}}=d,M=s!==!0;a.save(),a.fillStyle=u,zV(a,o,r,M&&U1(i,p,g)),a.beginPath();const f=!!e.pathSegment(a,d);let v;if(M){f?a.closePath():Es(a,s,g,i);const m=!!s.pathSegment(a,l,{move:f,reverse:!0});v=f&&m,v||Es(a,s,p,i)}a.closePath(),a.fill(v?"evenodd":"nonzero"),a.restore()}}function zV(a,t,e,s){const i=t.chart.chartArea,{property:n,start:o,end:r}=s||{};if(n==="x"||n==="y"){let c,d,l,p;n==="x"?(c=o,d=i.top,l=r,p=i.bottom):(c=i.left,d=o,l=i.right,p=r),a.beginPath(),e&&(c=Math.max(c,e.left),l=Math.min(l,e.right),d=Math.max(d,e.top),p=Math.min(p,e.bottom)),a.rect(c,d,l-c,p-d),a.clip()}}function Es(a,t,e,s){const i=t.interpolate(e,s);i&&a.lineTo(i.x,i.y)}var ZV={id:"filler",afterDatasetsUpdate(a,t,e){const s=(a.data.datasets||[]).length,i=[];let n,o,r,c;for(o=0;o<s;++o)n=a.getDatasetMeta(o),r=n.dataset,c=null,r&&r.options&&r instanceof St&&(c={visible:a.isDatasetVisible(o),index:o,fill:CV(r,o,s),chart:a,axis:n.controller.options.indexAxis,scale:n.vScale,line:r}),n.$filler=c,i.push(c);for(o=0;o<s;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=SV(i,o,e.propagate))},beforeDraw(a,t,e){const s=e.drawTime==="beforeDraw",i=a.getSortedVisibleDatasetMetas(),n=a.chartArea;for(let o=i.length-1;o>=0;--o){const r=i[o].$filler;r&&(r.line.updateControlPoints(n,r.axis),s&&r.fill&&k1(a.ctx,r,n))}},beforeDatasetsDraw(a,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=a.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const n=s[i].$filler;Ps(n)&&k1(a.ctx,n,a.chartArea)}},beforeDatasetDraw(a,t,e){const s=t.meta.$filler;!Ps(s)||e.drawTime!=="beforeDatasetDraw"||k1(a.ctx,s,a.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Os=(a,t)=>{let{boxHeight:e=t,boxWidth:s=t}=a;return a.usePointStyle&&(e=Math.min(e,t),s=a.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},NV=(a,t)=>a!==null&&t!==null&&a.datasetIndex===t.datasetIndex&&a.index===t.index;class Is extends dt{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=R(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=$(s.font),n=i.size,o=this._computeTitleHeight(),{boxWidth:r,itemHeight:c}=Os(s,n);let d,l;e.font=i.string,this.isHorizontal()?(d=this.maxWidth,l=this._fitRows(o,n,r,c)+10):(l=this.maxHeight,d=this._fitCols(o,i,r,c)+10),this.width=Math.min(d,t.maxWidth||this.maxWidth),this.height=Math.min(l,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:n,maxWidth:o,options:{labels:{padding:r}}}=this,c=this.legendHitBoxes=[],d=this.lineWidths=[0],l=i+r;let p=t;n.textAlign="left",n.textBaseline="middle";let g=-1,u=-l;return this.legendItems.forEach((M,f)=>{const v=s+e/2+n.measureText(M.text).width;(f===0||d[d.length-1]+v+2*r>o)&&(p+=l,d[d.length-(f>0?0:1)]=0,u+=l,g++),c[f]={left:0,top:u,row:g,width:v,height:i},d[d.length-1]+=v+r}),p}_fitCols(t,e,s,i){const{ctx:n,maxHeight:o,options:{labels:{padding:r}}}=this,c=this.legendHitBoxes=[],d=this.columnSizes=[],l=o-t;let p=r,g=0,u=0,M=0,f=0;return this.legendItems.forEach((v,m)=>{const{itemWidth:x,itemHeight:b}=WV(s,e,n,v,i);m>0&&u+b+2*r>l&&(p+=g+r,d.push({width:g,height:u}),M+=g+r,f++,g=u=0),c[m]={left:M,top:u,col:f,width:x,height:b},g=Math.max(g,x),u+=b+r}),p+=g,d.push({width:g,height:u}),p}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:n}}=this,o=Gt(n,this.left,this.width);if(this.isHorizontal()){let r=0,c=Y(s,this.left+i,this.right-this.lineWidths[r]);for(const d of e)r!==d.row&&(r=d.row,c=Y(s,this.left+i,this.right-this.lineWidths[r])),d.top+=this.top+t+i,d.left=o.leftForLtr(o.x(c),d.width),c+=d.width+i}else{let r=0,c=Y(s,this.top+t+i,this.bottom-this.columnSizes[r].height);for(const d of e)d.col!==r&&(r=d.col,c=Y(s,this.top+t+i,this.bottom-this.columnSizes[r].height)),d.top=c,d.left+=this.left+i,d.left=o.leftForLtr(o.x(d.left),d.width),c+=d.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;r1(t,this),this._draw(),c1(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:n,labels:o}=t,r=N.color,c=Gt(t.rtl,this.left,this.width),d=$(o.font),{padding:l}=o,p=d.size,g=p/2;let u;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=d.string;const{boxWidth:M,boxHeight:f,itemHeight:v}=Os(o,p),m=function(S,C,V){if(isNaN(M)||M<=0||isNaN(f)||f<0)return;i.save();const A=L(V.lineWidth,1);if(i.fillStyle=L(V.fillStyle,r),i.lineCap=L(V.lineCap,"butt"),i.lineDashOffset=L(V.lineDashOffset,0),i.lineJoin=L(V.lineJoin,"miter"),i.lineWidth=A,i.strokeStyle=L(V.strokeStyle,r),i.setLineDash(L(V.lineDash,[])),o.usePointStyle){const H={radius:f*Math.SQRT2/2,pointStyle:V.pointStyle,rotation:V.rotation,borderWidth:A},k=c.xPlus(S,M/2),T=C+g;gi(i,H,k,T,o.pointStyleWidth&&M)}else{const H=C+Math.max((p-f)/2,0),k=c.leftForLtr(S,M),T=Bt(V.borderRadius);i.beginPath(),Object.values(T).some(G=>G!==0)?_e(i,{x:k,y:H,w:M,h:f,radius:T}):i.rect(k,H,M,f),i.fill(),A!==0&&i.stroke()}i.restore()},x=function(S,C,V){Nt(i,V.text,S,C+v/2,d,{strikethrough:V.hidden,textAlign:c.textAlign(V.textAlign)})},b=this.isHorizontal(),_=this._computeTitleHeight();b?u={x:Y(n,this.left+l,this.right-s[0]),y:this.top+l+_,line:0}:u={x:this.left+l,y:Y(n,this.top+_+l,this.bottom-e[0].height),line:0},bi(this.ctx,t.textDirection);const y=v+l;this.legendItems.forEach((S,C)=>{i.strokeStyle=S.fontColor,i.fillStyle=S.fontColor;const V=i.measureText(S.text).width,A=c.textAlign(S.textAlign||(S.textAlign=o.textAlign)),H=M+g+V;let k=u.x,T=u.y;c.setWidth(this.width),b?C>0&&k+H+l>this.right&&(T=u.y+=y,u.line++,k=u.x=Y(n,this.left+l,this.right-s[u.line])):C>0&&T+y>this.bottom&&(k=u.x=k+e[u.line].width+l,u.line++,T=u.y=Y(n,this.top+_+l,this.bottom-e[u.line].height));const G=c.x(k);if(m(G,T,S),k=rw(A,k+M+g,b?k+H:this.right,t.rtl),x(c.x(k),T,S),b)u.x+=H+l;else if(typeof S.text!="string"){const st=d.lineHeight;u.y+=qi(S,st)+l}else u.y+=y}),_i(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=$(e.font),i=Q(e.padding);if(!e.display)return;const n=Gt(t.rtl,this.left,this.width),o=this.ctx,r=e.position,c=s.size/2,d=i.top+c;let l,p=this.left,g=this.width;if(this.isHorizontal())g=Math.max(...this.lineWidths),l=this.top+d,p=Y(t.align,p,this.right-g);else{const M=this.columnSizes.reduce((f,v)=>Math.max(f,v.height),0);l=d+Y(t.align,this.top,this.bottom-M-t.labels.padding-this._computeTitleHeight())}const u=Y(r,p,p+g);o.textAlign=n.textAlign(s2(r)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,Nt(o,e.text,u,l,s)}_computeTitleHeight(){const t=this.options.title,e=$(t.font),s=Q(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,n;if(mt(t,this.left,this.right)&&mt(e,this.top,this.bottom)){for(n=this.legendHitBoxes,s=0;s<n.length;++s)if(i=n[s],mt(t,i.left,i.left+i.width)&&mt(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!$V(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,n=NV(i,s);i&&!n&&R(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!n&&R(e.onHover,[t,s,this],this)}else s&&R(e.onClick,[t,s,this],this)}}function WV(a,t,e,s,i){const n=UV(s,a,t,e),o=jV(i,s,t.lineHeight);return{itemWidth:n,itemHeight:o}}function UV(a,t,e,s){let i=a.text;return i&&typeof i!="string"&&(i=i.reduce((n,o)=>n.length>o.length?n:o)),t+e.size/2+s.measureText(i).width}function jV(a,t,e){let s=a;return typeof t.text!="string"&&(s=qi(t,e)),s}function qi(a,t){const e=a.text?a.text.length:0;return t*e}function $V(a,t){return!!((a==="mousemove"||a==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(a==="click"||a==="mouseup"))}var qV={id:"legend",_element:Is,start(a,t,e){const s=a.legend=new Is({ctx:a.ctx,options:e,chart:a});J.configure(a,s,e),J.addBox(a,s)},stop(a){J.removeBox(a,a.legend),delete a.legend},beforeUpdate(a,t,e){const s=a.legend;J.configure(a,s,e),s.options=e},afterUpdate(a){const t=a.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(a,t){t.replay||a.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(a,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:a=>a.chart.options.color,boxWidth:40,padding:10,generateLabels(a){const t=a.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:n,useBorderRadius:o,borderRadius:r}}=a.legend.options;return a._getSortedDatasetMetas().map(c=>{const d=c.controller.getStyle(e?0:void 0),l=Q(d.borderWidth);return{text:t[c.index].label,fillStyle:d.backgroundColor,fontColor:n,hidden:!c.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:d.borderColor,pointStyle:s||d.pointStyle,rotation:d.rotation,textAlign:i||d.textAlign,borderRadius:o&&(r||d.borderRadius),datasetIndex:c.index}},this)}},title:{color:a=>a.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:a=>!a.startsWith("on"),labels:{_scriptable:a=>!["generateLabels","filter","sort"].includes(a)}}};class p2 extends dt{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=Z(s.text)?s.text.length:1;this._padding=Q(s.padding);const n=i*$(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=n:this.width=n}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:n,options:o}=this,r=o.align;let c=0,d,l,p;return this.isHorizontal()?(l=Y(r,s,n),p=e+t,d=n-s):(o.position==="left"?(l=s+t,p=Y(r,i,e),c=E*-.5):(l=n-t,p=Y(r,e,i),c=E*.5),d=i-e),{titleX:l,titleY:p,maxWidth:d,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=$(e.font),n=s.lineHeight/2+this._padding.top,{titleX:o,titleY:r,maxWidth:c,rotation:d}=this._drawArgs(n);Nt(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:d,textAlign:s2(e.align),textBaseline:"middle",translation:[o,r]})}}function GV(a,t){const e=new p2({ctx:a.ctx,options:t,chart:a});J.configure(a,e,t),J.addBox(a,e),a.titleBlock=e}var XV={id:"title",_element:p2,start(a,t,e){GV(a,e)},stop(a){const t=a.titleBlock;J.removeBox(a,t),delete a.titleBlock},beforeUpdate(a,t,e){const s=a.titleBlock;J.configure(a,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ze=new WeakMap;var YV={id:"subtitle",start(a,t,e){const s=new p2({ctx:a.ctx,options:e,chart:a});J.configure(a,s,e),J.addBox(a,s),Ze.set(a,s)},stop(a){J.removeBox(a,Ze.get(a)),Ze.delete(a)},beforeUpdate(a,t,e){const s=Ze.get(a);J.configure(a,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const le={average(a){if(!a.length)return!1;let t,e,s=new Set,i=0,n=0;for(t=0,e=a.length;t<e;++t){const r=a[t].element;if(r&&r.hasValue()){const c=r.tooltipPosition();s.add(c.x),i+=c.y,++n}}return n===0||s.size===0?!1:{x:[...s].reduce((r,c)=>r+c)/s.size,y:i/n}},nearest(a,t){if(!a.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,n,o,r;for(n=0,o=a.length;n<o;++n){const c=a[n].element;if(c&&c.hasValue()){const d=c.getCenterPoint(),l=I1(t,d);l<i&&(i=l,r=c)}}if(r){const c=r.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function lt(a,t){return t&&(Z(t)?Array.prototype.push.apply(a,t):a.push(t)),a}function ft(a){return(typeof a=="string"||a instanceof String)&&a.indexOf(`
`)>-1?a.split(`
`):a}function KV(a,t){const{element:e,datasetIndex:s,index:i}=t,n=a.getDatasetMeta(s).controller,{label:o,value:r}=n.getLabelAndValue(i);return{chart:a,label:o,parsed:n.getParsed(i),raw:a.data.datasets[s].data[i],formattedValue:r,dataset:n.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Fs(a,t){const e=a.chart.ctx,{body:s,footer:i,title:n}=a,{boxWidth:o,boxHeight:r}=t,c=$(t.bodyFont),d=$(t.titleFont),l=$(t.footerFont),p=n.length,g=i.length,u=s.length,M=Q(t.padding);let f=M.height,v=0,m=s.reduce((_,y)=>_+y.before.length+y.lines.length+y.after.length,0);if(m+=a.beforeBody.length+a.afterBody.length,p&&(f+=p*d.lineHeight+(p-1)*t.titleSpacing+t.titleMarginBottom),m){const _=t.displayColors?Math.max(r,c.lineHeight):c.lineHeight;f+=u*_+(m-u)*c.lineHeight+(m-1)*t.bodySpacing}g&&(f+=t.footerMarginTop+g*l.lineHeight+(g-1)*t.footerSpacing);let x=0;const b=function(_){v=Math.max(v,e.measureText(_).width+x)};return e.save(),e.font=d.string,O(a.title,b),e.font=c.string,O(a.beforeBody.concat(a.afterBody),b),x=t.displayColors?o+2+t.boxPadding:0,O(s,_=>{O(_.before,b),O(_.lines,b),O(_.after,b)}),x=0,e.font=l.string,O(a.footer,b),e.restore(),v+=M.width,{width:v,height:f}}function JV(a,t){const{y:e,height:s}=t;return e<s/2?"top":e>a.height-s/2?"bottom":"center"}function QV(a,t,e,s){const{x:i,width:n}=s,o=e.caretSize+e.caretPadding;if(a==="left"&&i+n+o>t.width||a==="right"&&i-n-o<0)return!0}function tA(a,t,e,s){const{x:i,width:n}=e,{width:o,chartArea:{left:r,right:c}}=a;let d="center";return s==="center"?d=i<=(r+c)/2?"left":"right":i<=n/2?d="left":i>=o-n/2&&(d="right"),QV(d,a,t,e)&&(d="center"),d}function Rs(a,t,e){const s=e.yAlign||t.yAlign||JV(a,e);return{xAlign:e.xAlign||t.xAlign||tA(a,t,e,s),yAlign:s}}function eA(a,t){let{x:e,width:s}=a;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function aA(a,t,e){let{y:s,height:i}=a;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Bs(a,t,e,s){const{caretSize:i,caretPadding:n,cornerRadius:o}=a,{xAlign:r,yAlign:c}=e,d=i+n,{topLeft:l,topRight:p,bottomLeft:g,bottomRight:u}=Bt(o);let M=eA(t,r);const f=aA(t,c,d);return c==="center"?r==="left"?M+=d:r==="right"&&(M-=d):r==="left"?M-=Math.max(l,g)+i:r==="right"&&(M+=Math.max(p,u)+i),{x:q(M,0,s.width-t.width),y:q(f,0,s.height-t.height)}}function Ne(a,t,e){const s=Q(e.padding);return t==="center"?a.x+a.width/2:t==="right"?a.x+a.width-s.right:a.x+s.left}function zs(a){return lt([],ft(a))}function sA(a,t,e){return Ht(a,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Zs(a,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?a.override(e):a}const Gi={beforeTitle:ut,title(a){if(a.length>0){const t=a[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:ut,beforeBody:ut,beforeLabel:ut,label(a){if(this&&this.options&&this.options.mode==="dataset")return a.label+": "+a.formattedValue||a.formattedValue;let t=a.dataset.label||"";t&&(t+=": ");const e=a.formattedValue;return P(e)||(t+=e),t},labelColor(a){const e=a.chart.getDatasetMeta(a.datasetIndex).controller.getStyle(a.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(a){const e=a.chart.getDatasetMeta(a.datasetIndex).controller.getStyle(a.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:ut,afterBody:ut,beforeFooter:ut,footer:ut,afterFooter:ut};function et(a,t,e,s){const i=a[t].call(e,s);return typeof i>"u"?Gi[t].call(e,s):i}class j1 extends dt{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,n=new Ai(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=sA(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=et(s,"beforeTitle",this,t),n=et(s,"title",this,t),o=et(s,"afterTitle",this,t);let r=[];return r=lt(r,ft(i)),r=lt(r,ft(n)),r=lt(r,ft(o)),r}getBeforeBody(t,e){return zs(et(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return O(t,n=>{const o={before:[],lines:[],after:[]},r=Zs(s,n);lt(o.before,ft(et(r,"beforeLabel",this,n))),lt(o.lines,et(r,"label",this,n)),lt(o.after,ft(et(r,"afterLabel",this,n))),i.push(o)}),i}getAfterBody(t,e){return zs(et(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=et(s,"beforeFooter",this,t),n=et(s,"footer",this,t),o=et(s,"afterFooter",this,t);let r=[];return r=lt(r,ft(i)),r=lt(r,ft(n)),r=lt(r,ft(o)),r}_createItems(t){const e=this._active,s=this.chart.data,i=[],n=[],o=[];let r=[],c,d;for(c=0,d=e.length;c<d;++c)r.push(KV(this.chart,e[c]));return t.filter&&(r=r.filter((l,p,g)=>t.filter(l,p,g,s))),t.itemSort&&(r=r.sort((l,p)=>t.itemSort(l,p,s))),O(r,l=>{const p=Zs(t.callbacks,l);i.push(et(p,"labelColor",this,l)),n.push(et(p,"labelPointStyle",this,l)),o.push(et(p,"labelTextColor",this,l))}),this.labelColors=i,this.labelPointStyles=n,this.labelTextColors=o,this.dataPoints=r,r}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let n,o=[];if(!i.length)this.opacity!==0&&(n={opacity:0});else{const r=le[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Fs(this,s),d=Object.assign({},r,c),l=Rs(this.chart,s,d),p=Bs(s,d,l,this.chart);this.xAlign=l.xAlign,this.yAlign=l.yAlign,n={opacity:1,x:p.x,y:p.y,width:c.width,height:c.height,caretX:r.x,caretY:r.y}}this._tooltipItems=o,this.$context=void 0,n&&this._resolveAnimations().update(this,n),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const n=this.getCaretPosition(t,s,i);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:n}=this,{caretSize:o,cornerRadius:r}=s,{topLeft:c,topRight:d,bottomLeft:l,bottomRight:p}=Bt(r),{x:g,y:u}=t,{width:M,height:f}=e;let v,m,x,b,_,y;return n==="center"?(_=u+f/2,i==="left"?(v=g,m=v-o,b=_+o,y=_-o):(v=g+M,m=v+o,b=_-o,y=_+o),x=v):(i==="left"?m=g+Math.max(c,l)+o:i==="right"?m=g+M-Math.max(d,p)-o:m=this.caretX,n==="top"?(b=u,_=b-o,v=m-o,x=m+o):(b=u+f,_=b+o,v=m+o,x=m-o),y=b),{x1:v,x2:m,x3:x,y1:b,y2:_,y3:y}}drawTitle(t,e,s){const i=this.title,n=i.length;let o,r,c;if(n){const d=Gt(s.rtl,this.x,this.width);for(t.x=Ne(this,s.titleAlign,s),e.textAlign=d.textAlign(s.titleAlign),e.textBaseline="middle",o=$(s.titleFont),r=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<n;++c)e.fillText(i[c],d.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+r,c+1===n&&(t.y+=s.titleMarginBottom-r)}}_drawColorBox(t,e,s,i,n){const o=this.labelColors[s],r=this.labelPointStyles[s],{boxHeight:c,boxWidth:d}=n,l=$(n.bodyFont),p=Ne(this,"left",n),g=i.x(p),u=c<l.lineHeight?(l.lineHeight-c)/2:0,M=e.y+u;if(n.usePointStyle){const f={radius:Math.min(d,c)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},v=i.leftForLtr(g,d)+d/2,m=M+c/2;t.strokeStyle=n.multiKeyBackground,t.fillStyle=n.multiKeyBackground,R1(t,f,v,m),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,R1(t,f,v,m)}else{t.lineWidth=D(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const f=i.leftForLtr(g,d),v=i.leftForLtr(i.xPlus(g,1),d-2),m=Bt(o.borderRadius);Object.values(m).some(x=>x!==0)?(t.beginPath(),t.fillStyle=n.multiKeyBackground,_e(t,{x:f,y:M,w:d,h:c,radius:m}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),_e(t,{x:v,y:M+1,w:d-2,h:c-2,radius:m}),t.fill()):(t.fillStyle=n.multiKeyBackground,t.fillRect(f,M,d,c),t.strokeRect(f,M,d,c),t.fillStyle=o.backgroundColor,t.fillRect(v,M+1,d-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:n,bodyAlign:o,displayColors:r,boxHeight:c,boxWidth:d,boxPadding:l}=s,p=$(s.bodyFont);let g=p.lineHeight,u=0;const M=Gt(s.rtl,this.x,this.width),f=function(V){e.fillText(V,M.x(t.x+u),t.y+g/2),t.y+=g+n},v=M.textAlign(o);let m,x,b,_,y,S,C;for(e.textAlign=o,e.textBaseline="middle",e.font=p.string,t.x=Ne(this,v,s),e.fillStyle=s.bodyColor,O(this.beforeBody,f),u=r&&v!=="right"?o==="center"?d/2+l:d+2+l:0,_=0,S=i.length;_<S;++_){for(m=i[_],x=this.labelTextColors[_],e.fillStyle=x,O(m.before,f),b=m.lines,r&&b.length&&(this._drawColorBox(e,t,_,M,s),g=Math.max(p.lineHeight,c)),y=0,C=b.length;y<C;++y)f(b[y]),g=p.lineHeight;O(m.after,f)}u=0,g=p.lineHeight,O(this.afterBody,f),t.y-=n}drawFooter(t,e,s){const i=this.footer,n=i.length;let o,r;if(n){const c=Gt(s.rtl,this.x,this.width);for(t.x=Ne(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=$(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,r=0;r<n;++r)e.fillText(i[r],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:n,yAlign:o}=this,{x:r,y:c}=t,{width:d,height:l}=s,{topLeft:p,topRight:g,bottomLeft:u,bottomRight:M}=Bt(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(r+p,c),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(r+d-g,c),e.quadraticCurveTo(r+d,c,r+d,c+g),o==="center"&&n==="right"&&this.drawCaret(t,e,s,i),e.lineTo(r+d,c+l-M),e.quadraticCurveTo(r+d,c+l,r+d-M,c+l),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(r+u,c+l),e.quadraticCurveTo(r,c+l,r,c+l-u),o==="center"&&n==="left"&&this.drawCaret(t,e,s,i),e.lineTo(r,c+p),e.quadraticCurveTo(r,c,r+p,c),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,n=s&&s.y;if(i||n){const o=le[t.position].call(this,this._active,this._eventPosition);if(!o)return;const r=this._size=Fs(this,t),c=Object.assign({},o,this._size),d=Rs(e,t,c),l=Bs(t,c,d,e);(i._to!==l.x||n._to!==l.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=r.width,this.height=r.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},n={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=Q(e.padding),r=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&r&&(t.save(),t.globalAlpha=s,this.drawBackground(n,t,i,e),bi(t,e.textDirection),n.y+=o.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),_i(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:r,index:c})=>{const d=this.chart.getDatasetMeta(r);if(!d)throw new Error("Cannot find a dataset at index "+r);return{datasetIndex:r,element:d.data[c],index:c}}),n=!Qe(s,i),o=this._positionChanged(i,e);(n||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,n=this._active||[],o=this._getActiveElements(t,n,e,s),r=this._positionChanged(o,t),c=e||!Qe(o,n)||r;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,i){const n=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(r=>this.chart.data.datasets[r.datasetIndex]&&this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,n.mode,n,s);return n.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:n}=this,o=le[n.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}w(j1,"positioners",le);var iA={id:"tooltip",_element:j1,positioners:le,afterInit(a,t,e){e&&(a.tooltip=new j1({chart:a,options:e}))},beforeUpdate(a,t,e){a.tooltip&&a.tooltip.initialize(e)},reset(a,t,e){a.tooltip&&a.tooltip.initialize(e)},afterDraw(a){const t=a.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(a.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(a.ctx),a.notifyPlugins("afterTooltipDraw",e)}},afterEvent(a,t){if(a.tooltip){const e=t.replay;a.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(a,t)=>t.bodyFont.size,boxWidth:(a,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Gi},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:a=>a!=="filter"&&a!=="itemSort"&&a!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},nA=Object.freeze({__proto__:null,Colors:vV,Decimation:bV,Filler:ZV,Legend:qV,SubTitle:YV,Title:XV,Tooltip:iA});const hA=(a,t,e,s)=>(typeof t=="string"?(e=a.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function oA(a,t,e,s){const i=a.indexOf(t);if(i===-1)return hA(a,t,e,s);const n=a.lastIndexOf(t);return i!==n?e:i}const rA=(a,t)=>a===null?null:q(Math.round(a),0,t);function Ns(a){const t=this.getLabels();return a>=0&&a<t.length?t[a]:a}class $1 extends Wt{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:n}of e)s[i]===n&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(P(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:oA(s,t,L(e,t),this._addedLabels),rA(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let n=this.getLabels();n=t===0&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return Ns.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}w($1,"id","category"),w($1,"defaults",{ticks:{callback:Ns}});function cA(a,t){const e=[],{bounds:i,step:n,min:o,max:r,precision:c,count:d,maxTicks:l,maxDigits:p,includeBounds:g}=a,u=n||1,M=l-1,{min:f,max:v}=t,m=!P(o),x=!P(r),b=!P(d),_=(v-f)/(p+1);let y=Fa((v-f)/M/u)*u,S,C,V,A;if(y<1e-14&&!m&&!x)return[{value:f},{value:v}];A=Math.ceil(v/y)-Math.floor(f/y),A>M&&(y=Fa(A*y/M/u)*u),P(c)||(S=Math.pow(10,c),y=Math.ceil(y*S)/S),i==="ticks"?(C=Math.floor(f/y)*y,V=Math.ceil(v/y)*y):(C=f,V=v),m&&x&&n&&ew((r-o)/n,y/1e3)?(A=Math.round(Math.min((r-o)/y,l)),y=(r-o)/A,C=o,V=r):b?(C=m?o:C,V=x?r:V,A=d-1,y=(V-C)/A):(A=(V-C)/y,ue(A,Math.round(A),y/1e3)?A=Math.round(A):A=Math.ceil(A));const H=Math.max(Ra(y),Ra(C));S=Math.pow(10,P(c)?H:c),C=Math.round(C*S)/S,V=Math.round(V*S)/S;let k=0;for(m&&(g&&C!==o?(e.push({value:o}),C<o&&k++,ue(Math.round((C+k*y)*S)/S,o,Ws(o,_,a))&&k++):C<o&&k++);k<A;++k){const T=Math.round((C+k*y)*S)/S;if(x&&T>r)break;e.push({value:T})}return x&&g&&V!==r?e.length&&ue(e[e.length-1].value,r,Ws(r,_,a))?e[e.length-1].value=r:e.push({value:r}):(!x||V===r)&&e.push({value:V}),e}function Ws(a,t,{horizontal:e,minRotation:s}){const i=rt(s),n=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+a).length;return Math.min(t/n,o)}class h1 extends Wt{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return P(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:n}=this;const o=c=>i=e?i:c,r=c=>n=s?n:c;if(t){const c=gt(i),d=gt(n);c<0&&d<0?r(0):c>0&&d>0&&o(0)}if(i===n){let c=n===0?1:Math.abs(n*.05);r(n+c),t||o(i-c)}this.min=i,this.max=n}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},n=this._range||this,o=cA(i,n);return t.bounds==="ticks"&&ii(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Ae(t,this.chart.options.locale,this.options.ticks.format)}}class q1 extends h1{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=W(t)?t:0,this.max=W(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=rt(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}w(q1,"id","linear"),w(q1,"defaults",{ticks:{callback:o1.formatters.numeric}});const Se=a=>Math.floor(_t(a)),Ot=(a,t)=>Math.pow(10,Se(a)+t);function Us(a){return a/Math.pow(10,Se(a))===1}function js(a,t,e){const s=Math.pow(10,e),i=Math.floor(a/s);return Math.ceil(t/s)-i}function dA(a,t){const e=t-a;let s=Se(e);for(;js(a,t,s)>10;)s++;for(;js(a,t,s)<10;)s--;return Math.min(s,Se(a))}function lA(a,{min:t,max:e}){t=it(a.min,t);const s=[],i=Se(t);let n=dA(t,e),o=n<0?Math.pow(10,Math.abs(n)):1;const r=Math.pow(10,n),c=i>n?Math.pow(10,i):0,d=Math.round((t-c)*o)/o,l=Math.floor((t-c)/r/10)*r*10;let p=Math.floor((d-l)/Math.pow(10,n)),g=it(a.min,Math.round((c+l+p*Math.pow(10,n))*o)/o);for(;g<e;)s.push({value:g,major:Us(g),significand:p}),p>=10?p=p<15?15:20:p++,p>=20&&(n++,p=2,o=n>=0?1:o),g=Math.round((c+l+p*Math.pow(10,n))*o)/o;const u=it(a.max,g);return s.push({value:u,major:Us(u),significand:p}),s}class G1 extends Wt{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=h1.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return W(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=W(t)?Math.max(0,t):null,this.max=W(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!W(this._userMin)&&(this.min=t===Ot(this.min,0)?Ot(this.min,-1):Ot(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const n=r=>s=t?s:r,o=r=>i=e?i:r;s===i&&(s<=0?(n(1),o(10)):(n(Ot(s,-1)),o(Ot(i,1)))),s<=0&&n(Ot(i,-1)),i<=0&&o(Ot(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=lA(e,this);return t.bounds==="ticks"&&ii(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Ae(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=_t(t),this._valueRange=_t(this.max)-_t(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(_t(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}w(G1,"id","logarithmic"),w(G1,"defaults",{ticks:{callback:o1.formatters.logarithmic,major:{enabled:!0}}});function X1(a){const t=a.ticks;if(t.display&&a.display){const e=Q(t.backdropPadding);return L(t.font&&t.font.size,N.font.size)+e.height}return 0}function pA(a,t,e){return e=Z(e)?e:[e],{w:mw(a,t.string,e),h:e.length*t.lineHeight}}function $s(a,t,e,s,i){return a===s||a===i?{start:t-e/2,end:t+e/2}:a<s||a>i?{start:t-e,end:t}:{start:t,end:t+e}}function gA(a){const t={l:a.left+a._padding.left,r:a.right-a._padding.right,t:a.top+a._padding.top,b:a.bottom-a._padding.bottom},e=Object.assign({},t),s=[],i=[],n=a._pointLabels.length,o=a.options.pointLabels,r=o.centerPointLabels?E/n:0;for(let c=0;c<n;c++){const d=o.setContext(a.getPointLabelContext(c));i[c]=d.padding;const l=a.getPointPosition(c,a.drawingArea+i[c],r),p=$(d.font),g=pA(a.ctx,p,a._pointLabels[c]);s[c]=g;const u=K(a.getIndexAngle(c)+r),M=Math.round(e2(u)),f=$s(M,l.x,g.w,0,180),v=$s(M,l.y,g.h,90,270);uA(e,t,u,f,v)}a.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),a._pointLabelItems=vA(a,s,i)}function uA(a,t,e,s,i){const n=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let r=0,c=0;s.start<t.l?(r=(t.l-s.start)/n,a.l=Math.min(a.l,t.l-r)):s.end>t.r&&(r=(s.end-t.r)/n,a.r=Math.max(a.r,t.r+r)),i.start<t.t?(c=(t.t-i.start)/o,a.t=Math.min(a.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,a.b=Math.max(a.b,t.b+c))}function MA(a,t,e){const s=a.drawingArea,{extra:i,additionalAngle:n,padding:o,size:r}=e,c=a.getPointPosition(t,s+i+o,n),d=Math.round(e2(K(c.angle+j))),l=yA(c.y,r.h,d),p=mA(d),g=xA(c.x,r.w,p);return{visible:!0,x:c.x,y:l,textAlign:p,left:g,top:l,right:g+r.w,bottom:l+r.h}}function fA(a,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:n}=a;return!(yt({x:e,y:s},t)||yt({x:e,y:n},t)||yt({x:i,y:s},t)||yt({x:i,y:n},t))}function vA(a,t,e){const s=[],i=a._pointLabels.length,n=a.options,{centerPointLabels:o,display:r}=n.pointLabels,c={extra:X1(n)/2,additionalAngle:o?E/i:0};let d;for(let l=0;l<i;l++){c.padding=e[l],c.size=t[l];const p=MA(a,l,c);s.push(p),r==="auto"&&(p.visible=fA(p,d),p.visible&&(d=p))}return s}function mA(a){return a===0||a===180?"center":a<180?"left":"right"}function xA(a,t,e){return e==="right"?a-=t:e==="center"&&(a-=t/2),a}function yA(a,t,e){return e===90||e===270?a-=t/2:(e>270||e<90)&&(a-=t),a}function bA(a,t,e){const{left:s,top:i,right:n,bottom:o}=e,{backdropColor:r}=t;if(!P(r)){const c=Bt(t.borderRadius),d=Q(t.backdropPadding);a.fillStyle=r;const l=s-d.left,p=i-d.top,g=n-s+d.width,u=o-i+d.height;Object.values(c).some(M=>M!==0)?(a.beginPath(),_e(a,{x:l,y:p,w:g,h:u,radius:c}),a.fill()):a.fillRect(l,p,g,u)}}function _A(a,t){const{ctx:e,options:{pointLabels:s}}=a;for(let i=t-1;i>=0;i--){const n=a._pointLabelItems[i];if(!n.visible)continue;const o=s.setContext(a.getPointLabelContext(i));bA(e,o,n);const r=$(o.font),{x:c,y:d,textAlign:l}=n;Nt(e,a._pointLabels[i],c,d+r.lineHeight/2,r,{color:o.color,textAlign:l,textBaseline:"middle"})}}function Xi(a,t,e,s){const{ctx:i}=a;if(e)i.arc(a.xCenter,a.yCenter,t,0,B);else{let n=a.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let o=1;o<s;o++)n=a.getPointPosition(o,t),i.lineTo(n.x,n.y)}}function wA(a,t,e,s,i){const n=a.ctx,o=t.circular,{color:r,lineWidth:c}=t;!o&&!s||!r||!c||e<0||(n.save(),n.strokeStyle=r,n.lineWidth=c,n.setLineDash(i.dash||[]),n.lineDashOffset=i.dashOffset,n.beginPath(),Xi(a,e,o,s),n.closePath(),n.stroke(),n.restore())}function SA(a,t,e){return Ht(a,{label:e,index:t,type:"pointLabel"})}class pe extends h1{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Q(X1(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=W(t)&&!isNaN(t)?t:0,this.max=W(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/X1(this.options))}generateTickLabels(t){h1.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=R(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?gA(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=B/(this._pointLabels.length||1),s=this.options.startAngle||0;return K(t*e+rt(s))}getDistanceFromCenterForValue(t){if(P(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(P(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return SA(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-j+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:n}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:n}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Xi(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:n}=e,o=this._pointLabels.length;let r,c,d;if(e.pointLabels.display&&_A(this,o),i.display&&this.ticks.forEach((l,p)=>{if(p!==0||p===0&&this.min<0){c=this.getDistanceFromCenterForValue(l.value);const g=this.getContext(p),u=i.setContext(g),M=n.setContext(g);wA(this,u,c,o,M)}}),s.display){for(t.save(),r=o-1;r>=0;r--){const l=s.setContext(this.getPointLabelContext(r)),{color:p,lineWidth:g}=l;!g||!p||(t.lineWidth=g,t.strokeStyle=p,t.setLineDash(l.borderDash),t.lineDashOffset=l.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),d=this.getPointPosition(r,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(d.x,d.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let n,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((r,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const d=s.setContext(this.getContext(c)),l=$(d.font);if(n=this.getDistanceFromCenterForValue(this.ticks[c].value),d.showLabelBackdrop){t.font=l.string,o=t.measureText(r.label).width,t.fillStyle=d.backdropColor;const p=Q(d.backdropPadding);t.fillRect(-o/2-p.left,-n-l.size/2-p.top,o+p.width,l.size+p.height)}Nt(t,r.label,0,-n,l,{color:d.color,strokeColor:d.textStrokeColor,strokeWidth:d.textStrokeWidth})}),t.restore()}drawTitle(){}}w(pe,"id","radialLinear"),w(pe,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:o1.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),w(pe,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),w(pe,"descriptors",{angleLines:{_fallback:"grid"}});const g1={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},at=Object.keys(g1);function qs(a,t){return a-t}function Gs(a,t){if(P(t))return null;const e=a._adapter,{parser:s,round:i,isoWeekday:n}=a._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),W(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(Xt(n)||n===!0)?e.startOf(o,"isoWeek",n):e.startOf(o,i)),+o)}function Xs(a,t,e,s){const i=at.length;for(let n=at.indexOf(a);n<i-1;++n){const o=g1[at[n]],r=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(r*o.size))<=s)return at[n]}return at[i-1]}function CA(a,t,e,s,i){for(let n=at.length-1;n>=at.indexOf(e);n--){const o=at[n];if(g1[o].common&&a._adapter.diff(i,s,o)>=t-1)return o}return at[e?at.indexOf(e):0]}function VA(a){for(let t=at.indexOf(a)+1,e=at.length;t<e;++t)if(g1[at[t]].common)return at[t]}function Ys(a,t,e){if(!e)a[t]=!0;else if(e.length){const{lo:s,hi:i}=a2(e,t),n=e[s]>=t?e[s]:e[i];a[n]=!0}}function AA(a,t,e,s){const i=a._adapter,n=+i.startOf(t[0].value,s),o=t[t.length-1].value;let r,c;for(r=n;r<=o;r=+i.add(r,1,s))c=e[r],c>=0&&(t[c].major=!0);return t}function Ks(a,t,e){const s=[],i={},n=t.length;let o,r;for(o=0;o<n;++o)r=t[o],i[r]=o,s.push({value:r,major:!1});return n===0||!e?s:AA(a,s,i,e)}class Ce extends Wt{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new OS._date(t.adapters.date);i.init(e),ge(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Gs(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:n,minDefined:o,maxDefined:r}=this.getUserBounds();function c(d){!o&&!isNaN(d.min)&&(i=Math.min(i,d.min)),!r&&!isNaN(d.max)&&(n=Math.max(n,d.max))}(!o||!r)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=W(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),n=W(n)&&!isNaN(n)?n:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,n-1),this.max=Math.max(i+1,n)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const n=this.min,o=this.max,r=nw(i,n,o);return this._unit=e.unit||(s.autoSkip?Xs(e.minUnit,this.min,this.max,this._getLabelCapacity(n)):CA(this,r.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:VA(this._unit),this.initOffsets(i),t.reverse&&r.reverse(),Ks(this,r,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,n;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,n=this.getDecimalForValue(t[t.length-1]),t.length===1?s=n:s=(n-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=q(e,0,o),s=q(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,n=i.time,o=n.unit||Xs(n.minUnit,e,s,this._getLabelCapacity(e)),r=L(i.ticks.stepSize,1),c=o==="week"?n.isoWeekday:!1,d=Xt(c)||c===!0,l={};let p=e,g,u;if(d&&(p=+t.startOf(p,"isoWeek",c)),p=+t.startOf(p,d?"day":o),t.diff(s,e,o)>1e5*r)throw new Error(e+" and "+s+" are too far apart with stepSize of "+r+" "+o);const M=i.ticks.source==="data"&&this.getDataTimestamps();for(g=p,u=0;g<s;g=+t.add(g,r,o),u++)Ys(l,g,M);return(g===s||i.bounds==="ticks"||u===1)&&Ys(l,g,M),Object.keys(l).sort(qs).map(f=>+f)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,n=this._unit,o=e||i[n];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const n=this.options,o=n.ticks.callback;if(o)return R(o,[t,e,s],this);const r=n.time.displayFormats,c=this._unit,d=this._majorUnit,l=c&&r[c],p=d&&r[d],g=s[e],u=d&&p&&g&&g.major;return this._adapter.format(t,i||(u?p:l))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=rt(this.isHorizontal()?e.maxRotation:e.minRotation),n=Math.cos(i),o=Math.sin(i),r=this._resolveTickFontOptions(0).size;return{w:s*n+r*o,h:s*o+r*n}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,n=this._tickFormatFunction(t,0,Ks(this,[t],this._majorUnit),i),o=this._getLabelSize(n),r=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return r>0?r:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(Gs(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return oi(t.sort(qs))}}w(Ce,"id","time"),w(Ce,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function We(a,t,e){let s=0,i=a.length-1,n,o,r,c;e?(t>=a[s].pos&&t<=a[i].pos&&({lo:s,hi:i}=xt(a,"pos",t)),{pos:n,time:r}=a[s],{pos:o,time:c}=a[i]):(t>=a[s].time&&t<=a[i].time&&({lo:s,hi:i}=xt(a,"time",t)),{time:n,pos:r}=a[s],{time:o,pos:c}=a[i]);const d=o-n;return d?r+(c-r)*(t-n)/d:r}class Y1 extends Ce{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=We(e,this.min),this._tableRange=We(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],n=[];let o,r,c,d,l;for(o=0,r=t.length;o<r;++o)d=t[o],d>=e&&d<=s&&i.push(d);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,r=i.length;o<r;++o)l=i[o+1],c=i[o-1],d=i[o],Math.round((l+c)/2)!==d&&n.push({time:d,pos:o/(r-1)});return n}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,n)=>i-n)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(We(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return We(this._table,s*this._tableRange+this._minPos,!0)}}w(Y1,"id","timeseries"),w(Y1,"defaults",Ce.defaults);var LA=Object.freeze({__proto__:null,CategoryScale:$1,LinearScale:q1,LogarithmicScale:G1,RadialLinearScale:pe,TimeScale:Ce,TimeSeriesScale:Y1});const HA=[ES,dV,nA,LA];ot.register(...HA);let D1=null,T1=null,E1=null;function kA(a,t,e=5.5){const s=document.getElementById(a);if(!s)return;D1&&D1.destroy();const i=[...t].filter(r=>r.calculatedL100km||r.isFullTank).sort((r,c)=>new Date(r.date)-new Date(c.date)),n=i.map(r=>{const c=new Date(r.date);return`${c.getMonth()+1}/${c.getDate()}`}),o=i.map(r=>r.calculatedL100km||null);D1=new ot(s,{type:"line",data:{labels:n,datasets:[{label:"Consumption (L/100km)",data:o,borderColor:"#6366f1",backgroundColor:"rgba(99, 102, 241, 0.15)",fill:!0,tension:.35,pointBackgroundColor:"#818cf8",pointRadius:5,pointHoverRadius:7},{label:`Target (${e} L/100km)`,data:n.map(()=>e),borderColor:"rgba(239, 68, 68, 0.6)",borderDash:[5,5],pointRadius:0,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:"#94a3b8",font:{family:"Outfit, sans-serif"}}},tooltip:{backgroundColor:"#1e293b",titleColor:"#f8fafc",bodyColor:"#cbd5e1",padding:12,borderColor:"rgba(255,255,255,0.1)",borderWidth:1}},scales:{x:{grid:{color:"rgba(255, 255, 255, 0.05)"},ticks:{color:"#94a3b8"}},y:{grid:{color:"rgba(255, 255, 255, 0.05)"},ticks:{color:"#94a3b8"},title:{display:!0,text:"L/100km",color:"#94a3b8"}}}}})}function PA(a,t,e="$"){const s=document.getElementById(a);if(!s)return;T1&&T1.destroy();const i={};t.forEach(r=>{if(!r.date||!r.totalCost)return;const d=new Date(r.date).toLocaleString("default",{month:"short",year:"2-digit"});i[d]=(i[d]||0)+Number(r.totalCost)});const n=Object.keys(i),o=Object.values(i);T1=new ot(s,{type:"bar",data:{labels:n,datasets:[{label:`Monthly Fuel Spend (${e})`,data:o,backgroundColor:"rgba(16, 185, 129, 0.7)",hoverBackgroundColor:"#10b981",borderRadius:8,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:"#94a3b8",font:{family:"Outfit, sans-serif"}}},tooltip:{backgroundColor:"#1e293b",callbacks:{label:r=>` Total Spent: ${e}${r.parsed.y.toFixed(2)}`}}},scales:{x:{grid:{display:!1},ticks:{color:"#94a3b8"}},y:{grid:{color:"rgba(255, 255, 255, 0.05)"},ticks:{color:"#94a3b8"},title:{display:!0,text:`Amount (${e})`,color:"#94a3b8"}}}}})}function DA(a,t){const e=document.getElementById(a);if(!e)return;E1&&E1.destroy();const s={};t.forEach(r=>{var d;const c=((d=r.station)==null?void 0:d.trim())||"Other / Unknown";s[c]=(s[c]||0)+1});const i=Object.keys(s),n=Object.values(s),o=["#6366f1","#10b981","#f59e0b","#ec4899","#8b5cf6","#3b82f6","#06b6d4","#14b8a6","#f97316"];E1=new ot(e,{type:"doughnut",data:{labels:i,datasets:[{data:n,backgroundColor:o.slice(0,i.length),borderWidth:2,borderColor:"#1e293b"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#94a3b8",font:{family:"Outfit, sans-serif"}}}},cutout:"70%"}})}class TA{constructor(){this.activeTab="calculator",this.settings=F.getSettings()}init(){this.applyTheme(this.settings.theme),this.updateUnitLabels(),this.populateVehicleDropdown(),this.bindTabEvents(),this.bindCalculatorEvents(),this.bindRefuelModalEvents(),this.bindVehicleModalEvents(),this.bindPlannerEvents(),this.bindSettingsEvents(),this.bindThemeToggle(),this.renderCalculator(),this.renderLogsTable(),this.renderPlanner(),this.renderVehiclesGarage()}showToast(t,e="success"){const s=document.getElementById("toastContainer");if(!s)return;const i=document.createElement("div");i.className=`toast ${e}`,i.innerHTML=`<span>${t}</span>`,s.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transition="opacity 0.3s ease",setTimeout(()=>i.remove(),300)},3e3)}applyTheme(t){document.documentElement.setAttribute("data-theme",t),this.settings.theme=t,F.saveSettings(this.settings)}bindThemeToggle(){const t=document.getElementById("btnThemeToggle");t&&t.addEventListener("click",()=>{const e=this.settings.theme==="dark"?"light":"dark";this.applyTheme(e)})}updateUnitLabels(){document.querySelectorAll(".unit-dist-label").forEach(t=>{t.textContent=this.settings.distanceUnit}),document.querySelectorAll(".unit-vol-label").forEach(t=>{t.textContent=this.settings.volumeUnit}),document.querySelectorAll(".currency-label").forEach(t=>{t.textContent=this.settings.currency})}populateVehicleDropdown(){const t=document.getElementById("activeVehicleSelect");if(!t)return;const e=F.getVehicles(),s=F.getActiveVehicleId();t.innerHTML=e.map(i=>`
      <option value="${i.id}" ${i.id===s?"selected":""}>
        🚗 ${i.name} (${i.fuelType})
      </option>
    `).join(""),t.onchange=i=>{F.setActiveVehicleId(i.target.value),this.refreshActiveView(),this.showToast(`Switched active vehicle to ${t.options[t.selectedIndex].text}`)}}bindTabEvents(){var t,e,s,i;document.querySelectorAll(".nav-tab").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-tab");this.switchTab(o)})}),(t=document.getElementById("btnQuickAddRefuel"))==null||t.addEventListener("click",()=>{this.openRefuelModal()}),(e=document.getElementById("btnAddLogTab"))==null||e.addEventListener("click",()=>{this.openRefuelModal()}),(s=document.getElementById("btnEmptyAddLog"))==null||s.addEventListener("click",()=>{this.openRefuelModal()}),(i=document.getElementById("btnAddVehicleModal"))==null||i.addEventListener("click",()=>{this.openVehicleModal()})}switchTab(t){this.activeTab=t,document.querySelectorAll(".nav-tab").forEach(e=>{e.classList.toggle("active",e.getAttribute("data-tab")===t)}),document.querySelectorAll(".tab-view").forEach(e=>{e.classList.toggle("active",e.id===`tab-${t}`)}),this.refreshActiveView()}refreshActiveView(){this.activeTab==="calculator"&&this.renderCalculator(),this.activeTab==="logs"&&this.renderLogsTable(),this.activeTab==="planner"&&this.renderPlanner(),this.activeTab==="analytics"&&this.renderAnalytics(),this.activeTab==="vehicles"&&this.renderVehiclesGarage()}bindCalculatorEvents(){const t=document.getElementById("calcDistance"),e=document.getElementById("calcDistanceRange"),s=document.getElementById("calcVolume"),i=document.getElementById("calcVolumeRange"),n=document.getElementById("calcPrice"),o=()=>{this.renderCalculator()};t==null||t.addEventListener("input",()=>{e&&(e.value=t.value),o()}),e==null||e.addEventListener("input",()=>{t&&(t.value=e.value),o()}),s==null||s.addEventListener("input",()=>{i&&(i.value=s.value),o()}),i==null||i.addEventListener("input",()=>{s&&(s.value=i.value),o()}),n==null||n.addEventListener("input",o)}renderCalculator(){var M,f,v;const t=parseFloat((M=document.getElementById("calcDistance"))==null?void 0:M.value)||0,e=parseFloat((f=document.getElementById("calcVolume"))==null?void 0:f.value)||0,s=parseFloat((v=document.getElementById("calcPrice"))==null?void 0:v.value)||0,i=y_({distance:t,volume:e,pricePerUnit:s,distanceUnit:this.settings.distanceUnit,volumeUnit:this.settings.volumeUnit}),n=document.getElementById("resL100km"),o=document.getElementById("resKmL"),r=document.getElementById("resMpgUs"),c=document.getElementById("resMpgUk"),d=document.getElementById("resTotalCost"),l=document.getElementById("resCostPerKm"),p=document.getElementById("resCostFor100"),g=document.getElementById("resEfficiencyRating");n&&(n.textContent=i.l100km),o&&(o.textContent=i.kmL),r&&(r.textContent=i.mpgUs),c&&(c.textContent=i.mpgUk);const u=this.settings.currency;d&&(d.textContent=ee(i.totalCost,u)),l&&(l.textContent=`${u}${i.costPerDist}`),p&&(p.textContent=ee(i.costFor100,u)),g&&(i.l100km<=0?(g.textContent="Enter values above",g.style.borderColor="var(--border-card)",g.style.color="var(--text-muted)"):i.l100km<6?(g.innerHTML="✨ Excellent Efficiency",g.style.borderColor="var(--accent-green-border)",g.style.color="var(--accent-green)"):i.l100km<=8.5?(g.innerHTML="👍 Good Economy",g.style.borderColor="rgba(99, 102, 241, 0.4)",g.style.color="var(--accent-primary)"):(g.innerHTML="⚡ High Fuel Usage",g.style.borderColor="rgba(245, 158, 11, 0.4)",g.style.color="var(--accent-amber)"))}renderLogsTable(){var l,p,g,u,M,f,v;const t=document.getElementById("logsTableBody"),e=document.getElementById("logsEmptyState");if(!t)return;const s=F.getActiveVehicleId(),i=F.getLogs(s),n=((l=document.getElementById("logSearchInput"))==null?void 0:l.value.toLowerCase())||"",o=((p=document.getElementById("logFilterTank"))==null?void 0:p.value)||"all",r=i.filter(m=>{const x=(m.station||"").toLowerCase().includes(n)||(m.fuelType||"").toLowerCase().includes(n)||(m.notes||"").toLowerCase().includes(n),b=o==="all"?!0:o==="full"?m.isFullTank:!m.isFullTank;return x&&b});if(r.length===0){t.innerHTML="",e==null||e.classList.remove("hidden");return}e==null||e.classList.add("hidden");const c=this.settings.currency,d=[...r].sort((m,x)=>m.odometer-x.odometer);t.innerHTML=r.map(m=>{const x=d.findIndex(y=>y.id===m.id),b=x>0?d[x-1]:null,_=b?m.odometer-b.odometer:"-";return`
        <tr>
          <td><strong>${m.date}</strong></td>
          <td>${m.odometer.toLocaleString()} ${this.settings.distanceUnit}</td>
          <td>${_!=="-"?`+${_} ${this.settings.distanceUnit}`:"-"}</td>
          <td>${m.fuelVolume} ${this.settings.volumeUnit}</td>
          <td>${c}${m.pricePerUnit}</td>
          <td><strong style="color: var(--accent-green);">${ee(m.totalCost,c)}</strong></td>
          <td>
            ${m.calculatedL100km?`<span class="badge-tag">${m.calculatedL100km} L/100km</span>`:'<span style="color: var(--text-dark);">-</span>'}
          </td>
          <td>${m.station||"-"}</td>
          <td>
            <div style="display: flex; gap: 6px;">
              <button class="btn-icon small edit-log-btn" data-id="${m.id}" title="Edit"><i data-lucide="pencil"></i></button>
              <button class="btn-icon small delete-log-btn" data-id="${m.id}" title="Delete" style="color: var(--accent-red);"><i data-lucide="trash-2"></i></button>
            </div>
          </td>
        </tr>
      `}).join(""),window.lucide&&window.lucide.createIcons(),t.querySelectorAll(".edit-log-btn").forEach(m=>{m.addEventListener("click",()=>this.openRefuelModal(m.getAttribute("data-id")))}),t.querySelectorAll(".delete-log-btn").forEach(m=>{m.addEventListener("click",()=>{const x=m.getAttribute("data-id");confirm("Are you sure you want to delete this refueling log entry?")&&(F.deleteLog(x),this.renderLogsTable(),this.showToast("Refuel log deleted","error"))})}),(g=document.getElementById("logSearchInput"))==null||g.removeEventListener("input",this._logSearchHandler),this._logSearchHandler=()=>this.renderLogsTable(),(u=document.getElementById("logSearchInput"))==null||u.addEventListener("input",this._logSearchHandler),(M=document.getElementById("logFilterTank"))==null||M.removeEventListener("change",this._logFilterHandler),this._logFilterHandler=()=>this.renderLogsTable(),(f=document.getElementById("logFilterTank"))==null||f.addEventListener("change",this._logFilterHandler),(v=document.getElementById("btnExportCSV"))==null||v.addEventListener("click",()=>this.exportLogsCSV(i))}exportLogsCSV(t){if(!t||t.length===0){this.showToast("No logs to export","error");return}const e=["Date","Odometer","FuelVolume","PricePerUnit","TotalCost","FuelType","IsFullTank","CalculatedL100km","Station","Notes"],s=t.map(r=>[r.date,r.odometer,r.fuelVolume,r.pricePerUnit,r.totalCost,r.fuelType,r.isFullTank,r.calculatedL100km||"",`"${r.station||""}"`,`"${r.notes||""}"`]),i="data:text/csv;charset=utf-8,"+[e.join(","),...s.map(r=>r.join(","))].join(`
`),n=encodeURI(i),o=document.createElement("a");o.setAttribute("href",n),o.setAttribute("download",`fuel_logs_${Date.now()}.csv`),document.body.appendChild(o),o.click(),o.remove(),this.showToast("CSV export downloaded")}openRefuelModal(t=null){const e=document.getElementById("modalRefuel"),s=document.getElementById("modalRefuelTitle"),i=document.getElementById("formRefuel");if(!(!e||!i)){if(i.reset(),document.getElementById("logId").value="",document.getElementById("logDate").value=new Date().toISOString().split("T")[0],t){const o=F.getLogs().find(r=>r.id===t);o&&(s.textContent="Edit Refuel Entry",document.getElementById("logId").value=o.id,document.getElementById("logDate").value=o.date,document.getElementById("logOdometer").value=o.odometer,document.getElementById("logVolume").value=o.fuelVolume,document.getElementById("logPrice").value=o.pricePerUnit,document.getElementById("logFuelType").value=o.fuelType||"Gasoline 95",document.getElementById("logStation").value=o.station||"",document.getElementById("logIsFullTank").checked=o.isFullTank!==!1,document.getElementById("logNotes").value=o.notes||"")}else{s.textContent="Add Refuel Entry";const n=F.getActiveVehicleId(),o=F.getLogs(n);if(o.length>0){const r=Math.max(...o.map(c=>c.odometer));document.getElementById("logOdometer").value=r+750}}e.classList.remove("hidden")}}closeRefuelModal(){var t;(t=document.getElementById("modalRefuel"))==null||t.classList.add("hidden")}bindRefuelModalEvents(){var t,e,s;(t=document.getElementById("btnCloseRefuelModal"))==null||t.addEventListener("click",()=>this.closeRefuelModal()),(e=document.getElementById("btnCancelRefuelModal"))==null||e.addEventListener("click",()=>this.closeRefuelModal()),(s=document.getElementById("formRefuel"))==null||s.addEventListener("submit",i=>{i.preventDefault();const n=document.getElementById("logId").value,o=F.getActiveVehicleId(),r=parseFloat(document.getElementById("logVolume").value),c=parseFloat(document.getElementById("logPrice").value),d={id:n||void 0,vehicleId:o,date:document.getElementById("logDate").value,odometer:parseInt(document.getElementById("logOdometer").value,10),fuelVolume:r,pricePerUnit:c,totalCost:Number((r*c).toFixed(2)),fuelType:document.getElementById("logFuelType").value,station:document.getElementById("logStation").value,isFullTank:document.getElementById("logIsFullTank").checked,notes:document.getElementById("logNotes").value};F.saveLog(d),this.closeRefuelModal(),this.renderLogsTable(),this.showToast(n?"Refuel log updated":"New refuel log added successfully!")})}bindPlannerEvents(){const t=document.getElementById("tripDistance"),e=document.getElementById("tripConsumption"),s=document.getElementById("tripPrice"),i=document.getElementById("tripConditions"),n=()=>this.renderPlanner();t==null||t.addEventListener("input",n),e==null||e.addEventListener("input",n),s==null||s.addEventListener("input",n),i==null||i.addEventListener("change",n)}renderPlanner(){var d,l,p,g;const t=parseFloat((d=document.getElementById("tripDistance"))==null?void 0:d.value)||0,e=parseFloat((l=document.getElementById("tripConsumption"))==null?void 0:l.value)||0,s=parseFloat((p=document.getElementById("tripPrice"))==null?void 0:p.value)||0,i=parseFloat((g=document.getElementById("tripConditions"))==null?void 0:g.value)||1,n=b_({tripDistance:t,avgConsumption:e,fuelPrice:s,conditionMultiplier:i,distanceUnit:this.settings.distanceUnit,volumeUnit:this.settings.volumeUnit}),o=document.getElementById("tripFuelNeeded"),r=document.getElementById("tripTotalCost"),c=document.getElementById("tripEffectiveRate");o&&(o.textContent=`${n.fuelNeeded} ${this.settings.volumeUnit}`),r&&(r.textContent=ee(n.totalCost,this.settings.currency)),c&&(c.textContent=`${n.effectiveConsumption} L/100km`)}renderAnalytics(){const t=F.getActiveVehicleId(),e=F.getLogs(t),s=F.getVehicles(),i=s.find(u=>u.id===t)||s[0];let n=0,o=0,r=0;if(e.length>0){const u=[...e].sort((M,f)=>M.odometer-f.odometer);n=u[u.length-1].odometer-u[0].odometer,o=e.reduce((M,f)=>M+f.fuelVolume,0),r=e.reduce((M,f)=>M+f.totalCost,0)}const c=n>0?(o/n*100).toFixed(2):"0.00",d=document.getElementById("kpiTotalDist"),l=document.getElementById("kpiTotalFuel"),p=document.getElementById("kpiTotalSpend"),g=document.getElementById("kpiAvgConsumption");d&&(d.textContent=`${n.toLocaleString()} ${this.settings.distanceUnit}`),l&&(l.textContent=`${o.toFixed(1)} ${this.settings.volumeUnit}`),p&&(p.textContent=ee(r,this.settings.currency)),g&&(g.textContent=`${c} L/100km`),kA("efficiencyTrendChart",e,i.targetConsumption||5.5),PA("monthlyExpenseChart",e,this.settings.currency),DA("stationShareChart",e)}renderVehiclesGarage(){const t=document.getElementById("vehiclesGrid");if(!t)return;const e=F.getVehicles(),s=F.getActiveVehicleId();t.innerHTML=e.map(i=>{const n=i.id===s;return`
        <div class="glass-card vehicle-card ${n?"active-card":""}">
          ${n?'<div class="active-pill">Active Vehicle</div>':""}
          <div>
            <h3>🚗 ${i.name}</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem;">${i.make} ${i.model} (${i.year})</p>
          </div>

          <div class="vehicle-card-specs">
            <div class="spec-item">
              <span>Fuel Type</span>
              <strong>${i.fuelType}</strong>
            </div>
            <div class="spec-item">
              <span>Tank Size</span>
              <strong>${i.tankCapacity} L</strong>
            </div>
            <div class="spec-item">
              <span>Target L/100km</span>
              <strong>${i.targetConsumption} L</strong>
            </div>
            <div class="spec-item">
              <span>Init Odometer</span>
              <strong>${i.initialOdometer.toLocaleString()} km</strong>
            </div>
          </div>

          <div class="vehicle-card-actions">
            ${n?"":`<button class="btn btn-secondary small select-vehicle-btn" data-id="${i.id}">Set Active</button>`}
            <button class="btn btn-secondary small edit-vehicle-btn" data-id="${i.id}">Edit</button>
            ${e.length>1?`<button class="btn btn-danger small delete-vehicle-btn" data-id="${i.id}">Delete</button>`:""}
          </div>
        </div>
      `}).join(""),t.querySelectorAll(".select-vehicle-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.getAttribute("data-id");F.setActiveVehicleId(n),this.populateVehicleDropdown(),this.renderVehiclesGarage(),this.showToast("Active vehicle updated")})}),t.querySelectorAll(".edit-vehicle-btn").forEach(i=>{i.addEventListener("click",()=>this.openVehicleModal(i.getAttribute("data-id")))}),t.querySelectorAll(".delete-vehicle-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.getAttribute("data-id");confirm("Delete this vehicle and switch active profile?")&&(F.deleteVehicle(n),this.populateVehicleDropdown(),this.renderVehiclesGarage(),this.showToast("Vehicle deleted","error"))})})}openVehicleModal(t=null){const e=document.getElementById("modalVehicle"),s=document.getElementById("modalVehicleTitle"),i=document.getElementById("formVehicle");if(!(!e||!i)){if(i.reset(),document.getElementById("vehicleId").value="",t){const o=F.getVehicles().find(r=>r.id===t);o&&(s.textContent="Edit Vehicle Profile",document.getElementById("vehicleId").value=o.id,document.getElementById("vehName").value=o.name,document.getElementById("vehMake").value=o.make,document.getElementById("vehModel").value=o.model,document.getElementById("vehYear").value=o.year,document.getElementById("vehFuelType").value=o.fuelType,document.getElementById("vehTank").value=o.tankCapacity,document.getElementById("vehTarget").value=o.targetConsumption,document.getElementById("vehOdometer").value=o.initialOdometer)}else s.textContent="Add New Vehicle";e.classList.remove("hidden")}}closeVehicleModal(){var t;(t=document.getElementById("modalVehicle"))==null||t.classList.add("hidden")}bindVehicleModalEvents(){var t,e,s;(t=document.getElementById("btnCloseVehicleModal"))==null||t.addEventListener("click",()=>this.closeVehicleModal()),(e=document.getElementById("btnCancelVehicleModal"))==null||e.addEventListener("click",()=>this.closeVehicleModal()),(s=document.getElementById("formVehicle"))==null||s.addEventListener("submit",i=>{i.preventDefault();const n=document.getElementById("vehicleId").value,o={id:n||void 0,name:document.getElementById("vehName").value,make:document.getElementById("vehMake").value,model:document.getElementById("vehModel").value,year:parseInt(document.getElementById("vehYear").value,10),fuelType:document.getElementById("vehFuelType").value,tankCapacity:parseFloat(document.getElementById("vehTank").value),targetConsumption:parseFloat(document.getElementById("vehTarget").value),initialOdometer:parseInt(document.getElementById("vehOdometer").value,10)};F.saveVehicle(o),this.closeVehicleModal(),this.populateVehicleDropdown(),this.renderVehiclesGarage(),this.showToast(n?"Vehicle profile updated":"New vehicle created!")})}bindSettingsEvents(){var o,r,c;const t=document.getElementById("setCurrency"),e=document.getElementById("setDistanceUnit"),s=document.getElementById("setVolumeUnit");t&&(t.value=this.settings.currency),e&&(e.value=this.settings.distanceUnit),s&&(s.value=this.settings.volumeUnit),(o=document.getElementById("btnSaveSettings"))==null||o.addEventListener("click",()=>{this.settings.currency=t.value,this.settings.distanceUnit=e.value,this.settings.volumeUnit=s.value,F.saveSettings(this.settings),this.updateUnitLabels(),this.renderCalculator(),this.renderLogsTable(),this.renderPlanner(),this.showToast("Settings saved successfully!")}),(r=document.getElementById("btnExportJSON"))==null||r.addEventListener("click",()=>{const d=F.exportData(),l=new Blob([d],{type:"application/json"}),p=URL.createObjectURL(l),g=document.createElement("a");g.href=p,g.download=`fuel_pulse_backup_${Date.now()}.json`,g.click(),URL.revokeObjectURL(p),this.showToast("Full backup JSON file downloaded")});const i=document.getElementById("btnImportJSONTrigger"),n=document.getElementById("importJSONFile");i==null||i.addEventListener("click",()=>n.click()),n==null||n.addEventListener("change",d=>{const l=d.target.files[0];if(!l)return;const p=new FileReader;p.onload=g=>{try{F.importData(g.target.result),this.settings=F.getSettings(),this.updateUnitLabels(),this.populateVehicleDropdown(),this.refreshActiveView(),this.showToast("Data imported successfully!")}catch{this.showToast("Failed to parse backup JSON file","error")}},p.readAsText(l)}),(c=document.getElementById("btnResetSampleData"))==null||c.addEventListener("click",()=>{confirm("Are you sure you want to reset all vehicles and logs to default sample data?")&&(F.resetToDefault(),this.settings=F.getSettings(),this.updateUnitLabels(),this.populateVehicleDropdown(),this.refreshActiveView(),this.showToast("Reset to sample data completed","error"))})}}document.addEventListener("DOMContentLoaded",()=>{x_({icons:m_}),new TA().init()});
