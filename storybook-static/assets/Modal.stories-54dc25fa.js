import{n as u,j as n,B as f}from"./Button-f24a4c64.js";import{r as l}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function g(){const o="0123456789ABCDEF";let L="#";for(;;){for(let s=0;s<6;s++)L+=o[Math.floor(Math.random()*16)];const e=b(L),t=C(e);if(t.s>20&&t.b>=25&&t.b<=80)break;L="#"}return L}function b(o){const L=parseInt(o.slice(1,3),16),e=parseInt(o.slice(3,5),16),t=parseInt(o.slice(5,7),16);return[L,e,t]}function C(o){const L=o[0]/255,e=o[1]/255,t=o[2]/255,s=Math.max(L,e,t),h=Math.min(L,e,t),a=s-h;let r,i,x=s;return a>0?(i=a/s,s===L?r=(e-t)/a:s===e?r=2+(t-L)/a:r=4+(L-e)/a,r*=60,r<0&&(r+=360)):(i=0,r=0),{h:r,s:i*100,b:x*100}}const j=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;u.img`
  height: 700px;
`;const w=()=>{l.useState(!1);const[o,L]=l.useState("#000000"),e=()=>{const s=g();L(s)},t=n.jsx("svg",{fill:o,width:"800px",height:"800px",viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M9 4L9 21L18 21L18 27L23 27L23 4L9 4 z M 12.859375 8L14.900391 8L14.900391 10.015625L12.859375 10.015625L12.859375 8 z M 16.900391 8L18.859375 8L18.859375 10.015625L16.900391 10.015625L16.900391 8 z M 34 8L34 46L40.039062 46L40.039062 41.992188L42 41.992188L42 46L48 46L48 8L34 8 z M 12.859375 11.984375L14.900391 11.984375L14.900391 14L12.859375 14L12.859375 11.984375 z M 16.900391 11.984375L18.859375 11.984375L18.859375 14L16.900391 14L16.900391 11.984375 z M 42 11.992188L44 11.992188L44 14.007812L42 14.007812L42 11.992188 z M 38 12.007812L40 12.007812L40 14.021484L38 14.021484L38 12.007812 z M 37.960938 16L40 16L40 18.015625L37.960938 18.015625L37.960938 16 z M 42 16L44 16L44 18.015625L42 18.015625L42 16 z M 37.960938 19.984375L40 19.984375L40 22L37.960938 22L37.960938 19.984375 z M 42 19.984375L44 19.984375L44 22L42 22L42 19.984375 z M 2 22.992188L2 46L8 46L8 41.992188L10 42L10 46L16 46L16 22.992188L2 22.992188 z M 37.960938 23.992188L40 23.992188L40 26.007812L37.960938 26.007812L37.960938 23.992188 z M 42 23.992188L44 23.992188L44 26.007812L42 26.007812L42 23.992188 z M 6 25.992188L8.0390625 25.992188L8.0390625 28.007812L6 28.007812L6 25.992188 z M 10 25.992188L12 25.992188L12 28.007812L10 28.007812L10 25.992188 z M 37.960938 27.976562L40 27.976562L40 29.992188L37.960938 29.992188L37.960938 27.976562 z M 42 27.976562L44 27.976562L44 29.992188L42 29.992188L42 27.976562 z M 18 29L18 46L24 46L24.039062 41.992188L26 41.992188L26 46L32 46L32 29L18 29 z M 6 29.976562L8.0390625 29.976562L8.0390625 31.992188L6 31.992188L6 29.976562 z M 10 29.976562L12 29.976562L12 31.992188L10 31.992188L10 29.976562 z M 38 31.984375L40.039062 31.984375L40.039062 34L38 34L38 31.984375 z M 42 31.984375L44 31.984375L44 34L42 34L42 31.984375 z M 22 32L24 32L24 34.015625L22 34.015625L22 32 z M 26.039062 32.007812L28 32.007812L28 34.021484L26.039062 34.021484L26.039062 32.007812 z M 6 33.992188L8.0390625 33.992188L8.0390625 36.007812L6 36.007812L6 33.992188 z M 10 33.992188L12 33.992188L12 36.007812L10 36.007812L10 33.992188 z M 37.960938 35.984375L40 35.984375L40 38L37.960938 38L37.960938 35.984375 z M 42 35.984375L44 35.984375L44 38L42 38L42 35.984375 z M 26.039062 35.992188L28 35.992188L28 38.007812L26.039062 38.007812L26.039062 35.992188 z M 22 36L24 36L24 38.015625L22 38.015625L22 36 z"})});return n.jsx("div",{children:n.jsx("div",{className:"modal",children:n.jsxs(j,{children:[t,n.jsx(f,{variant:"primary",onClick:e})]})})})},D={component:w,title:"Modal",tags:["autodocs"]},c={};var M,d,z,m,p;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(z=(d=c.parameters)==null?void 0:d.docs)==null?void 0:z.source},description:{story:"Documentation of the Modal",...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};const E=["Default"];export{c as Default,E as __namedExportsOrder,D as default};
//# sourceMappingURL=Modal.stories-54dc25fa.js.map
