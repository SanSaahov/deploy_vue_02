import{a as f,r as v,c,u as r,b as t,t as u,e,f as p,l as _,m as b,j as I,p as k,h as g,o as a,_ as x}from"./index-CXEXkZ63.js";const o=s=>(k("data-v-8de73bbb"),s=s(),g(),s),P={class:"container"},V={key:0},N=o(()=>t("div",null,[t("small",{class:"small"},"Здесь использую ссылку на нужный компанент")],-1)),S=o(()=>t("div",null,[t("small",{class:"small"},"Во Vue-Компаненте в бд ищу по параметру из route нужный объект")],-1)),y=o(()=>t("div",null,[t("small",{class:"small"},[e("Чтобы использовать Vue-Компанент и PROP "),t("br"),e(', нужен тег "< component >"')])],-1)),B={key:1},C=o(()=>t("h1",null,"Продукт не найден!",-1)),w=[C],R={name:"Product"},j=f({...R,props:{id:Number},setup(s){const m=b(),h=[{id:1,title:"Заголовок №01",description:"Соображения высшего порядка №01!",img:"Картинка №01"},{id:2,title:"Заголовок №02",description:"Соображения высшего порядка №02!",img:"Картинка №02"}],l=s;m.params.id;let n=v(null);return(()=>{n.value=h.find(i=>i.id===parseInt(l.id))})(),(i,E)=>{const d=I("router-link");return a(),c("div",P,[r(n)?(a(),c("div",V,[t("h1",null,"Product :: "+u(l.id),1),t("p",null,u(r(n).title),1),N,S,y,t("p",null,[e(" Описание Элемента :: "),p(d,{to:{name:"product_description"},class:"",description:"...description"},{default:_(()=>[e("more... ")]),_:1})]),t("p",null,[e(" Изображение Элемента :: "),p(d,{to:{name:"product_image"},class:"",description:"elem.img"},{default:_(()=>[e("more... ")]),_:1})])])):(a(),c("div",B,w))])}}}),T=x(j,[["__scopeId","data-v-8de73bbb"]]);export{T as default};
