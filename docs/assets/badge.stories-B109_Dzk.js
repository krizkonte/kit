import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{S as x,c as k,a as y}from"./utils-p2OTJl_T.js";import"./index-D4lIrffr.js";const z=y("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function g({className:f,variant:m,asChild:v=!1,...b}){const h=v?x:"span";return p.jsx(h,{"data-slot":"badge",className:k(z({variant:m}),f),...b})}g.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const C={title:"Components/UI/Badge",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{},args:{}},e={args:{variant:"default",size:"sm",disabled:!1,children:"Default"}},a={args:{variant:"link",size:"lg",disabled:!1,children:"Link"}},r={args:{asChild:!0,children:p.jsx("a",{href:"/link",children:"Link estilizado como botão"}),disabled:!1}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    children: "Default"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,o,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "link",
    size: "lg",
    disabled: false,
    children: "Link"
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,l,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <a href="/link">Link estilizado como botão</a>,
    disabled: false
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const S=["Default","Link","Fake"];export{e as Default,r as Fake,a as Link,S as __namedExportsOrder,C as default};
