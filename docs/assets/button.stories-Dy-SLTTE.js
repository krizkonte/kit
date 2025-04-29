import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{S as k,c as y,a as z}from"./utils-p2OTJl_T.js";import"./index-D4lIrffr.js";const w=z("select-none inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 active:bg-primary/70",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function g({className:m,variant:v,size:f,asChild:h=!1,...b}){const x=h?k:"button";return p.jsx(x,{"data-slot":"button",className:y(w({variant:v,size:f,className:m})),...b})}g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const C={title:"Components/UI/Button",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{options:["default","destructive","outline","secondary","ghost","link"],control:{type:"select"}},size:{options:["sm","default","lg","icon"],control:{type:"select"}}},args:{children:"Default"}},e={args:{variant:"default",size:"sm",disabled:!1,children:"Default"}},a={args:{variant:"link",size:"lg",disabled:!1,children:"Link"}},r={args:{asChild:!0,children:p.jsx("a",{href:"/link",children:"Link estilizado como botão"}),disabled:!1}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,c,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <a href="/link">Link estilizado como botão</a>,
    disabled: false
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const D=["Default","Link","Fake"];export{e as Default,r as Fake,a as Link,D as __namedExportsOrder,C as default};
