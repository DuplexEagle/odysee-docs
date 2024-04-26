"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[7426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,g=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return n?o.createElement(g,l(l({ref:t},m),{},{components:n})):o.createElement(g,l({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:4,description:"Blocking/Muting users and removing comments.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:6,thumbnailLocation:"left",tileColor:"blue"}},l="Comment Moderation",i={unversionedId:"category-moderation/commentmoderation",id:"category-moderation/commentmoderation",title:"Comment Moderation",description:"Blocking/Muting users and removing comments.",source:"@site/docs/category-moderation/commentmoderation.mdx",sourceDirName:"category-moderation",slug:"/category-moderation/commentmoderation",permalink:"/category-moderation/commentmoderation",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/docs/category-moderation/commentmoderation.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Blocking/Muting users and removing comments.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:6,thumbnailLocation:"left",tileColor:"blue"}},sidebar:"helphub",previous:{title:"Creator Settings",permalink:"/category-moderation/creatorsettings"},next:{title:"Content Discovery",permalink:"/category-contentdiscovery/"}},c={},s=[{value:"Blocking",id:"blocking",level:2},{value:"Muting",id:"muting",level:2},{value:"Comment removal",id:"comment-removal",level:2},{value:"Viewing Blocked and/or Muted Users/Channels (Unblocking and/or Unmuting)",id:"viewing-blocked-andor-muted-userschannels-unblocking-andor-unmuting",level:2},{value:"Multiple channels",id:"multiple-channels",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"comment-moderation"},"Comment Moderation"),(0,r.kt)("h2",{id:"blocking"},"Blocking"),(0,r.kt)("p",null,"When you block a user, the blocked user can no longer comment on any of your content, channel, or comment threads."),(0,r.kt)("p",null,"In addition to this, all comments and reactions left by the blocked user on your content, channel, or in the comments section, ",(0,r.kt)("strong",{parentName:"p"},"will be filtered for everyone"),". If you unblock the channel, they will be restored. "),(0,r.kt)("p",null,"Essentially, when you block a user, they're completely removed from your experience on Odysee and cannot engage with you, but can still view your content. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: currently, blocked channels can still react to content, but we'll be limiting this soon as well.")),(0,r.kt)("p",null,"You can block a user by clicking the three dots on a comment:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(43717).Z,width:"1842",height:"606"})),(0,r.kt)("p",null,"If you are a delegated mod blocking on behalf of another channel, you will be able to choose if it is a personal block or moderator block."),(0,r.kt)("h2",{id:"muting"},"Muting"),(0,r.kt)("p",null,"When you mute a user, you will no longer see them in any comment sections, replies, search results, homepage, related content, or anywhere else. They're hidden from your experience on Odysee."),(0,r.kt)("p",null,"The user will still be able to interact with your channel and content and won't know they are muted."),(0,r.kt)("h2",{id:"comment-removal"},"Comment removal"),(0,r.kt)("p",null,"You can delete any comment on your channel and/or content by clicking the 3 dots on the right hand side and selecting ",(0,r.kt)("strong",{parentName:"p"},"Remove"),"."),(0,r.kt)("h2",{id:"viewing-blocked-andor-muted-userschannels-unblocking-andor-unmuting"},"Viewing Blocked and/or Muted Users/Channels (Unblocking and/or Unmuting)"),(0,r.kt)("p",null,"Click the profile picture icon on the top right corner, and select *",(0,r.kt)("em",{parentName:"p"},"Settings"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(66554).Z,width:"1897",height:"975"})),(0,r.kt)("p",null,"From the settings menu, scroll to the ",(0,r.kt)("strong",{parentName:"p"},"Content settings")," section and select ",(0,r.kt)("strong",{parentName:"p"},"Blocked and muted channels"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62989).Z,width:"1898",height:"820"})),(0,r.kt)("p",null,"Here, you can unmute / unblock users, or change a user's status from blocked to muted, or vice versa. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(10447).Z,width:"1612",height:"692"})),(0,r.kt)("p",null,"Refresh the page for changes to take effect."),(0,r.kt)("h2",{id:"multiple-channels"},"Multiple channels"),(0,r.kt)("p",null,"Moderation actions affect a user on the account level; so even if a user has multiple channels, blocking or muting any one of them will apply to all of their channels."),(0,r.kt)("p",null,"Any new channels created by them will also be affected by your moderation actions."))}u.isMDXComponent=!0},66554:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/category-moderation10-a2ff7919911c6006a6dcbba9499b4172.png"},43717:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/category-moderation7-a22a30283b01a2f5fd2cf87347178e69.png"},10447:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/category-moderation8-8e24f57b019a4f20d5a99944b68569ca.png"},62989:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/category-moderation9-bb540ee5105649d173896b99b3d1e228.png"}}]);