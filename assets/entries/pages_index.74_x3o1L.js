import{j as e,R as p,i as l,a as s,P as c,s as n,p as u,b as m,f as g,c as f}from"../chunks/chunk-CcJfGDRi.js";/* empty css                      */const x=({data:o})=>{const{system:t,resources:i,url:r}=o;return e.jsx(p.Provider,{value:{imageLoader:l,assetBaseUrl:s,resources:i},children:e.jsx(c,{system:t},r)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),y=({data:o})=>{const{pageMeta:t}=o,{origin:i}=new URL(o.url);let r=t.socialImageUrl;return t.socialImageAssetName&&(r=`${i}${l({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),n,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:d})=>e.jsx("meta",{property:a,content:d},a)),e.jsx("link",{rel:"icon",href:l({src:`${s}${g}`,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),u.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a}`,as:"font",crossOrigin:"anonymous"},a)),m.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a}`,as:"image"},a))]})},h=Object.freeze(Object.defineProperty({__proto__:null,Head:y},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}}};export{P as configValuesSerialized};
