import{_ as d,c as o,b as t,F as $,k as b,o as n,f as s,l as c,j as _,e as r,a as h,q as v}from"./index-CXEXkZ63.js";const g={name:"Debug"},N={class:"debugGrid"},k={class:"container"},x={class:"dbrow"},D=t("div",{class:"debugGrid__elem"},null,-1),y=[D];function L(a,i,l,u,m,p){return n(),o("div",N,[t("div",k,[t("div",x,[(n(),o($,null,b(12,e=>t("div",{class:"dbcol-1",key:e},y)),64))])])])}const B=d(g,[["render",L]]),C={name:"Navbar"},V={class:"container"},w={class:"menu__list"};function F(a,i,l,u,m,p){const e=_("router-link");return n(),o("section",V,[t("ul",w,[s(e,{to:{name:"home"},class:""},{default:c(()=>[r("Home")]),_:1}),s(e,{to:{name:"products"},class:""},{default:c(()=>[r("Product List")]),_:1}),s(e,{to:{name:"product_item",params:{id:1}},class:""},{default:c(()=>[r("Product №01")]),_:1})])])}const G=d(C,[["render",F],["__scopeId","data-v-378920cb"]]),P=h({name:"DefaultLayout",components:{Navbar:G,Debug:B}}),j={class:"container-layout"};function q(a,i,l,u,m,p){const e=_("Navbar"),f=_("Debug");return n(),o("div",j,[s(e),t("main",null,[v(a.$slots,"default")]),s(f)])}const H=d(P,[["render",q]]);export{H as default};
