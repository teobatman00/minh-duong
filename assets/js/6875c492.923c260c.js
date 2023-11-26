"use strict";(self.webpackChunkminh_duong=self.webpackChunkminh_duong||[]).push([[8610],{9703:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(5999),a=n(2244),o=n(5893);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,o.jsx)(a.Z,{permalink:n,title:(0,o.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,o.jsx)(a.Z,{permalink:r,title:(0,o.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(9460),a=n(5978),o=n(5893);function r(e){let{items:t,component:n=a.Z}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(s.n,{content:t,children:(0,o.jsx)(n,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})}},1714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(7294);var s=n(6010),a=n(5999),o=n(8824),r=n(833),i=n(5281),l=n(9960),c=n(1460),d=n(9703),m=n(197),u=n(9985),g=n(2212),h=n(2503),p=n(5893);function x(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.d,{title:n}),(0,p.jsx)(m.Z,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:n,sidebar:s,listMetadata:o}=e;const r=x(t);return(0,p.jsxs)(c.Z,{sidebar:s,children:[t.unlisted&&(0,p.jsx)(g.Z,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.Z,{as:"h1",children:r}),(0,p.jsx)(l.Z,{href:t.allTagsPath,children:(0,p.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.Z,{items:n}),(0,p.jsx)(d.Z,{metadata:o})]})}function b(e){return(0,p.jsxs)(r.FG,{className:(0,s.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage),children:[(0,p.jsx)(j,{...e}),(0,p.jsx)(f,{...e})]})}},2212:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var s=n(6010),a=n(5999),o=n(5742),r=n(5893);function i(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5281),m=n(9047);function u(e){let{className:t}=e;return(0,r.jsx)(m.Z,{type:"caution",title:(0,r.jsx)(i,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},5978:(e,t,n)=>{n.d(t,{Z:()=>X});var s=n(7294),a=n(6010),o=n(9460),r=n(4996),i=n(5893);function l(e){let{children:t,className:n}=e;const{frontMatter:s,assets:a,metadata:{description:l}}=(0,o.C)(),{withBaseUrl:c}=(0,r.C)(),d=a.image??s.image,m=s.keywords??[];return(0,i.jsxs)("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[l&&(0,i.jsx)("meta",{itemProp:"description",content:l}),d&&(0,i.jsx)("link",{itemProp:"image",href:c(d,{absolute:!0})}),m.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:m.join(",")}),t]})}var c=n(9960);const d={title:"title_xvU1"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,o.C)(),{permalink:r,title:l}=n,m=s?"h1":"h2";return(0,i.jsx)(m,{className:(0,a.Z)(d.title,t),itemProp:"headline",children:s?l:(0,i.jsx)(c.Z,{itemProp:"url",to:r,className:"text-4xl",children:l})})}var u=n(5999),g=n(8824);const h={container:"container_iJTo"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,g.c)();return t=>{const n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function j(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:n}=(0,o.C)(),{date:s,formattedDate:r,readingTime:l}=n;return(0,i.jsxs)("div",{className:(0,a.Z)(h.container,"margin-vert--md",t),children:[(0,i.jsx)(x,{date:s,formattedDate:r}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{}),(0,i.jsx)(p,{readingTime:l})]})]})}function b(e){return e.href?(0,i.jsx)(c.Z,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function v(e){let{author:t,className:n}=e;const{name:s,title:o,url:r,imageURL:l,email:c}=t,d=r||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,a.Z)("avatar margin-bottom--sm",n),children:[l&&(0,i.jsx)(b,{href:d,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:l,alt:s,itemProp:"image"})}),s&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(b,{href:d,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:s})})}),o&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:o})]})]})}const P={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function Z(e){let{className:t}=e;const{metadata:{authors:n},assets:s}=(0,o.C)();if(0===n.length)return null;const r=n.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",r?P.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.Z)(!r&&"col col--6",r?P.imageOnlyAuthorCol:P.authorCol),children:(0,i.jsx)(v,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(f,{}),(0,i.jsx)(Z,{})]})}var y=n(8780),k=n(2459),w=n(9861),C=n(2949);function T(e){let{children:t,className:n}=e;const{isBlogPostPage:r}=(0,o.C)(),{colorMode:l}=(0,C.I)(),c=(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)("hr",{}),(0,i.jsx)("br",{}),(0,i.jsx)(w.Z,{id:"comments",repo:"teobatman00/minh-duong",repoId:"R_kgDOKwcmDg",category:"General",categoryId:"DIC_kwDOKwcmDs4CbMcj",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:l,lang:"en",loading:"lazy"})]});return(0,i.jsxs)("div",{id:r?y.blogPostContainerID:void 0,className:(0,a.Z)("markdown",n),itemProp:"articleBody",children:[(0,i.jsx)(k.Z,{children:t}),r&&c]})}var _=n(4881),I=n(1526);function O(){return(0,i.jsx)("b",{children:(0,i.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function F(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(c.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(O,{})})}const B={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};var M=n(1262),R=n(3977),S=n(6100);(0,R.ZF)({apiKey:"AIzaSyCCRZ0QFiM4dMqvIwPR_UXHEYf5rAK03CY",authDomain:"minh-duong-blog.firebaseapp.com",projectId:"minh-duong-blog",storageBucket:"minh-duong-blog.appspot.com",messagingSenderId:"57726436896",appId:"1:57726436896:web:f487394fb11f300fc15e45",measurementId:"G-2FK9T0HCS9"});const D=(0,S.ad)(),A="reactions";function U(e,t){const n=(0,S.JU)(D,A,e);(0,S.pl)(n,t).catch((e=>{console.log(e)}))}const E=e=>"@ovisly-blog-reactions-"+e;function J(e,t,n){const s=E(e),a=localStorage.getItem(s),o=JSON.parse(a);o[t]=n,localStorage.setItem(s,JSON.stringify(o))}const L={activeButton:"activeButton_WPXj",inactiveButton:"inactiveButton_NIG8"};function z(e){let{slug:t,title:n,reaction:s,reactionCounts:a,setReactionCounts:o}=e;const r=function(e,t){const n=E(e),s=localStorage.getItem(n);if(null===s){const e={};return e[t]=!1,localStorage.setItem(n,JSON.stringify(e)),!1}{const e=JSON.parse(s);return Object.keys(e).includes(t)?e[t]:(e[t]=!1,localStorage.setItem(n,JSON.stringify(e)),!1)}}(t,s);return(0,i.jsx)("button",{title:n,className:r?L.activeButton:L.inactiveButton,onClick:()=>{const e={...a};r?(e[s]=e[s]-1,J(t,s,!1)):(e[s]=e[s]+1,J(t,s,!0)),o((()=>e)),U(t,e)},type:"button",children:`${s} ${a[s]}`})}function K(e){let{reactions:t,slug:n}=e;const[a,o]=(0,s.useState)(function(e){const t={};return e.forEach((e=>t[e]=0)),t}(Object.keys(t)));return(0,s.useEffect)((()=>{!function(e,t,n){(0,S.QT)((0,S.JU)(D,A,e)).then((s=>{if(s.exists()){const e=s.data();Object.keys(t).forEach((t=>{Object.keys(e).includes(t)||(e[t]=0)})),n(e)}else U(e,t)})).catch((e=>{console.log("[initializeReactionCountsFromDB] error:",e)}))}(n,a,o)}),[]),(0,i.jsx)("footer",{className:"row",children:(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("b",{children:Object.keys(t).length>0?"Reactions:  ":""}),Object.keys(t).map((e=>(0,i.jsx)(z,{slug:n,reaction:e,title:t[e],reactionCounts:a,setReactionCounts:o},e)))]})})}function G(){const{metadata:e,isBlogPostPage:t}=(0,o.C)(),{tags:n,title:s,editUrl:r,hasTruncateMarker:l}=e,c=!t&&l,d=n.length>0,m=d||c||r,u=Object.keys(e.frontMatter).includes("reactions")?e.frontMatter.reactions:[],g=e.frontMatter.slug;return m?(0,i.jsxs)("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&B.blogPostFooterDetailsFull),children:[d&&(0,i.jsx)("div",{className:(0,a.Z)("col",{"col--9":c}),children:(0,i.jsx)(I.Z,{tags:n})}),(0,i.jsx)(M.Z,{children:()=>(0,i.jsx)("div",{className:(0,a.Z)("col",{"col--9 ":c}),children:(0,i.jsx)(K,{reactions:u,slug:g})})}),t&&r&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(_.Z,{editUrl:r})}),c&&(0,i.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":d}),children:(0,i.jsx)(F,{blogPostTitle:s,to:e.permalink})})]}):null}function X(e){let{children:t,className:n}=e;const s=function(){const{isBlogPostPage:e}=(0,o.C)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(l,{className:(0,a.Z)(s,n),children:[(0,i.jsx)(N,{}),(0,i.jsx)(T,{children:t}),(0,i.jsx)(G,{})]})}}}]);