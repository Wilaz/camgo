import{a as p,t as n}from"../chunks/disclose-version.CUCr9ozn.js";import{x as i,y as c,z as u,A as m,C as g}from"../chunks/runtime.CAitAahF.js";import{a as b}from"../chunks/render.L7_Att8F.js";import{s as f,a as $}from"../chunks/store.DIpZXdVm.js";import{s as d}from"../chunks/entry.DLuNMXeD.js";const h=()=>{const s=d;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},v={subscribe(s){return h().page.subscribe(s)}};var _=n("<h1> </h1>");function z(s,r){u(r,!0);const a=f(),e=()=>$(v,"$page",a);var t=_(),o=m(t);g(t),i(()=>b(o,`${e().status??""}: ${(e().error?e().error.message:"unknown")??""}`)),p(s,t),c()}export{z as component};