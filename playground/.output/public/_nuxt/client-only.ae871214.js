import{f as o,r as p,J as h,F as _,K as f,i as u}from"./entry.79c4baf7.js";const v=o({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:a,attrs:n}){const s=p(!1);return h(()=>{s.value=!0}),l=>{var r;if(s.value)return(r=a.default)==null?void 0:r.call(a);const e=a.fallback||a.placeholder;if(e)return e();const i=l.fallback||l.placeholder||"",c=l.fallbackTag||l.placeholderTag||"span";return _(c,n,i)}}}),d=new WeakMap;function m(t){if(d.has(t))return d.get(t);const a={...t};return a.render?a.render=(n,...s)=>{var l;if(n.mounted$){const e=t.render(n,...s);return e.children===null||typeof e.children=="string"?f(e.type,e.props,e.children,e.patchFlag,e.dynamicProps,e.shapeFlag):u(e)}else return u("div",(l=n.$attrs)!=null?l:n._.attrs)}:a.template&&(a.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),a.setup=(n,s)=>{var e;const l=p(!1);return h(()=>{l.value=!0}),Promise.resolve(((e=t.setup)==null?void 0:e.call(t,n,s))||{}).then(i=>typeof i!="function"?{...i,mounted$:l}:(...c)=>{if(l.value){const r=i(...c);return r.children===null||typeof r.children=="string"?f(r.type,r.props,r.children,r.patchFlag,r.dynamicProps,r.shapeFlag):u(r)}else return u("div",s.attrs)})},d.set(t,a),a}export{m as createClientOnly,v as default};