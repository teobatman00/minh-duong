"use strict";(self.webpackChunkminh_duong=self.webpackChunkminh_duong||[]).push([[13],{1460:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(7294),i=s(6010),r=s(7961),n=s(7524),l=s(9960),c=s(5999),o=s(6550),m=s(8596);function d(e){const{pathname:t}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=s(5893);function h(e){let{sidebar:t}=e;const s=d(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=s(3102);function p(e){let{sidebar:t}=e;const s=d(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(b.Zo,{component:p,props:e})}function x(e){let{sidebar:t}=e;const s=(0,n.i)();return t?.items.length?"mobile"===s?(0,g.jsx)(j,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...n}=e,l=t&&t.items.length>0;return(0,g.jsx)(r.Z,{...n,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,g.jsx)("div",{className:"col col--2",children:s})]})})})}},4524:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});s(7294);var a=s(6010),i=s(5155),r=s(1944),n=s(5281),l=s(1460),c=s(6090),o=s(197),m=s(2503),d=s(5893);function u(e){let{tags:t,sidebar:s}=e;const u=(0,i.M)();return(0,d.jsxs)(r.FG,{className:(0,a.Z)(n.k.wrapper.blogPages,n.k.page.blogTagsListPage),children:[(0,d.jsx)(r.d,{title:u}),(0,d.jsx)(o.Z,{tag:"blog_tags_list"}),(0,d.jsxs)(l.Z,{sidebar:s,children:[(0,d.jsx)(m.Z,{as:"h1",children:u}),(0,d.jsx)(c.Z,{tags:t})]})]})}},3008:(e,t,s)=>{s.d(t,{Z:()=>l});s(7294);var a=s(6010),i=s(9960);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=s(5893);function l(e){let{permalink:t,label:s,count:l}=e;return(0,n.jsxs)(i.Z,{href:t,className:(0,a.Z)(r.tag,l?r.tagWithCount:r.tagRegular),children:[s,l&&(0,n.jsx)("span",{children:l})]})}},6090:(e,t,s)=>{s.d(t,{Z:()=>o});s(7294);var a=s(5155),i=s(3008),r=s(2503);const n={tag:"tag_Nnez"};var l=s(5893);function c(e){let{letterEntry:t}=e;return(0,l.jsxs)("article",{children:[(0,l.jsx)(r.Z,{as:"h2",id:t.letter,children:t.letter}),(0,l.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,l.jsx)("li",{className:n.tag,children:(0,l.jsx)(i.Z,{...e})},e.permalink)))}),(0,l.jsx)("hr",{})]})}function o(e){let{tags:t}=e;const s=(0,a.P)(t);return(0,l.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,l.jsx)(c,{letterEntry:e},e.letter)))})}},5155:(e,t,s)=>{s.d(t,{M:()=>i,P:()=>r});var a=s(5999);const i=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);