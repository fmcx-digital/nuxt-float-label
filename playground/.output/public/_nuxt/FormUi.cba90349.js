import{_ as p}from"./NuxtFloatLabel.vue_vue_type_script_setup_true_lang.bcecc92b.js";import{_ as d}from"./Prism.vue_vue_type_script_setup_true_lang.c6a6a72c.js";import{_ as i}from"./Card.vue_vue_type_script_setup_true_lang.d0268465.js";import"./client-only.ae871214.js";import{L as _,o as u,F as r,K as t,O as e,N as l,P as x,Q as m}from"./entry.79c4baf7.js";const f={},o=s=>(x("data-v-39c6b8ce"),s=s(),m(),s),b={class:"bg-white p-5 rounded shadow-md"},h=o(()=>t("input",{type:"text",placeholder:"Name"},null,-1)),N=o(()=>t("input",{type:"text",placeholder:"Text"},null,-1)),y={class:"select"},F=o(()=>t("select",null,[t("option",{disabled:"",selected:""},"Do you enjoy coding?"),t("option",null,"Yes"),t("option",null,"No")],-1)),L=o(()=>t("i",{class:"far fa-angle-down"},null,-1)),g=o(()=>t("textarea",{type:"text",placeholder:"Description"},null,-1)),w=o(()=>t("input",{type:"text",placeholder:"Name"},null,-1));function D(s,S){const a=p,n=d,c=i;return u(),r("form",b,[t("div",null,[e(c,{title:"Default input label"},{default:l(()=>[e(a,null,{default:l(()=>[h]),_:1}),e(n,{code:`<NuxtFloatLabel>
    <input type="text" placeholder="Name" />
</NuxtFloatLabel>`})]),_:1}),e(c,{title:"Using a different label from placeholder"},{default:l(()=>[e(a,{label:"A more complex text"},{default:l(()=>[N]),_:1}),e(n,{code:`<NuxtFloatLabel label="A more complex text">
    <input type="text" placeholder="Text" />
</NuxtFloatLabel>`})]),_:1}),e(c,{title:"Select input"},{default:l(()=>[t("div",y,[e(a,null,{default:l(()=>[F,L]),_:1})]),e(n,{code:`<NuxtFloatLabel>
  <select>
    <option disabled selected>Do you enjoy coding?</option>
    <option>Yes</option>
    <option>No</option>
  </select>
</NuxtFloatLabel>`})]),_:1}),e(c,{title:"Textarea input"},{default:l(()=>[e(a,null,{default:l(()=>[g]),_:1}),e(n,{code:`<NuxtFloatLabel>
  <textarea type="text" placeholder="Description" />
</NuxtFloatLabel>`})]),_:1}),e(c,{title:"Set custom label class"},{default:l(()=>[e(a,{labelClass:"text-purple-700"},{default:l(()=>[w]),_:1}),e(n,{code:`<NuxtFloatLabel labelClass="text-purple-700">
    <input type="text" placeholder="Name" />
</NuxtFloatLabel>`})]),_:1})])])}const $=_(f,[["render",D],["__scopeId","data-v-39c6b8ce"]]);export{$ as default};
