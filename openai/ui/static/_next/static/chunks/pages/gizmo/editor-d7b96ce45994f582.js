(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9698,8107,2864],{15773:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gizmo/editor",function(){return n(82007)}])},82007:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return f},default:function(){return g}});var o=n(35250),r=n(75641),i=n(20522),a=n(48861),c=n(32877),s=n(78931),u=n(77010),d=n(60554),l=n(70079),f=!0;function g(){var e=(0,d.useRouter)(),t=e.query,n=t.id,f=t.remixFrom,g=(0,s.$T)(),p=(0,s.ec)(function(e){return e.currentWorkspace}),h=(0,s.hz)(),b=h.has(c.PL),v=(0,i.Ml)();return((0,l.useEffect)(function(){b&&u.Z.gatherData()},[b]),(0,l.useEffect)(function(){g||(null==p?void 0:p.structure)===r.CZ.WORKSPACE&&h.has(c.L0.WorkspaceConversationTemplates)&&v||e.push("/")},[g,p,h,e,v]),null!==p&&h.has(c.L0.WorkspaceConversationTemplates)&&v)?(0,o.jsx)(a.V,{workspaceId:p.id,conversationTemplateId:n,remixSourceTemplateId:f}):null}},50744:function(e,t,n){"use strict";var o=n(35250),r=n(55344),i=n.n(r);n(70079);var a=function(e){var t=e.children;return(0,o.jsx)(o.Fragment,{children:t})};t.Z=i()(function(){return Promise.resolve(a)},{ssr:!1})},53776:function(e,t,n){"use strict";n.d(t,{W:function(){return r},x:function(){return i}});var o=n(42569),r={id:void 0,name:"",owner_id:"",author_name:void 0,description:null,published_at:void 0,icon:void 0,color:void 0,updated_at:void 0,profile_pic_id:void 0,profile_pic_permalink:void 0,config:{context_message:"",model_slug:o.S0,assistant_welcome_message:void 0,enabled_tools:void 0}},i={id:void 0,name:"",owner_id:"",author_name:void 0,description:null,published_at:void 0,icon:void 0,color:void 0,updated_at:void 0,profile_pic_id:void 0,profile_pic_permalink:void 0,config:{context_message:"",model_slug:o.dO,assistant_welcome_message:void 0,enabled_tools:void 0}}},42271:function(e,t,n){"use strict";n.d(t,{O:function(){return c},h:function(){return s}});var o=n(4337),r=n(21389);function i(){var e=(0,o._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);return i=function(){return e},e}function a(){var e=(0,o._)(["h-11 w-11"]);return a=function(){return e},e}var c=r.Z.button(i()),s=r.Z.div(a())},98107:function(e,t,n){"use strict";n.d(t,{YM:function(){return i},ZV:function(){return o},bS:function(){return r}});var o={DALLE:"agent_29JBwwyz190ozAiiBooVxhZv",CODE_COMPANION:"agent_ZoPQJdWw03N9pxDeEiMPuub4",BROWSER:"agent_yDXVMn2KwpAqRfaR4tIY50n2",NEW_GPT:"8b251995-a2cf-49cf-b383-6424267676f7",LACROIX_GENERATOR:"64018dfa-1c06-4667-a32d-3035a5e74ad1",PNG_PANTHER:"2f38f2b8-e925-4f26-9770-b9dace18b5be",LANGUAGE_PRACTICE:"86eff182-d5d4-4391-aa60-0c0c54df8060",DALLE_NAVIGATOR:"0b1a5d0f-4a99-4421-a02c-cce08b7897c6",COPY_PROOFREADER:"4ea96bef-bb1c-483e-81f7-77949de1a37f",DALLE_8BIT:"495fb028-c966-4a53-8b0a-8cbc91739b04",DUNGEON_MASTER:"4559c961-8a15-49b6-bc3e-586f105c010c",SLIDEMASTER:"4f55d33f-3cec-442b-909e-a70f5c938767",POSTERIZER:"9cb8c072-dc05-4288-92a8-c59a27e59e74",ASTROLOGY:"f450b8e4-2baa-4c81-9f1a-ddfd0f1ef1ac",FANTASY_FOOTBALL:"37fb82bd-b9b5-4244-9c01-2b5d6916473f",JEOPARDY:"ee8fddfc-52b2-484d-839b-288f4bf2f7e2"},r=[o.DALLE,o.CODE_COMPANION,o.BROWSER],i=[o.LACROIX_GENERATOR,o.PNG_PANTHER,o.LANGUAGE_PRACTICE,o.DALLE_NAVIGATOR,o.COPY_PROOFREADER,o.DALLE_8BIT,o.DUNGEON_MASTER,o.SLIDEMASTER,o.POSTERIZER,o.ASTROLOGY,o.FANTASY_FOOTBALL,o.JEOPARDY]},58659:function(e,t,n){"use strict";n.d(t,{O:function(){return _}});var o=n(39324),r=n(71209),i=n(22830),a=n(35250),c=n(75641),s=n(70079),u=n(76483),d=n(70671),l=n(6038),f=n(67273),g=n(56309),p=n(47044),h=n(65261),b=n(98439),v=n(77224),m=n(89314),y=n(63031);function _(e){var t=e.conversationTemplate,n=e.onFileChange,_=(0,d.Z)(),k=(0,i._)((0,s.useState)(void 0),2),A=k[0],C=k[1],E=(0,s.useRef)(n);(0,s.useEffect)(function(){E.current=n});var T=(0,u.uI)((0,o._)({disabled:!1,noClick:!0,onDropAccepted:function(e){if(e.length>0){var t=e[0],n=(0,m.W7)(t);C({tempId:n,type:v.A.ProfilePicture,file:t,status:v.X.Uploading,progress:1,fileId:null,cdnUrl:null}),E.current("uploading"),(0,m.lU)(n,t,_,c.Ei.ProfilePicture,{onFileCreated:function(e,t,n){C(function(i){return"initial"!==i&&(null==i?void 0:i.tempId)===e&&i.status===v.X.Uploading?(0,r._)((0,o._)({},i),{progress:10,fileId:t,cdnUrl:n}):i})},onFileUploadProgress:function(e,t){C(function(n){return"initial"!==n&&(null==n?void 0:n.tempId)===e&&n.status===v.X.Uploading?(0,r._)((0,o._)({},n),{progress:t}):n})},onFileUploaded:function(e,t){C(function(n){return"initial"!==n&&(null==n?void 0:n.tempId)===e?(E.current(n),(0,r._)((0,o._)({},n),{status:v.X.Ready,progress:100,fileSpec:(0,o._)({name:n.file.name,id:n.fileId,size:n.file.size},null!=t?t:{})})):n})},onError:function(e){C(function(t){return"initial"!==t&&(null==t?void 0:t.tempId)===e?void 0:t})}})}},onDropRejected:function(e){return(0,h.UJ)(e,_,v.A.ProfilePicture)},multiple:!0,maxSize:p.xC},(0,y.Z8)(y.KL))).open;return(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"h-20 w-20",children:"initial"===A?(0,a.jsx)(l.Py,{conversationTemplate:t,className:"!h-full !w-full !rounded-2xl"}):null!=A?(0,a.jsxs)("div",{className:"relative h-full w-full overflow-hidden rounded-2xl",children:[(0,a.jsx)(b.l,{file:A.file}),A.status===v.X.Uploading&&A.progress<90?(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black/5 text-white",children:(0,a.jsx)(g.Z,{percentage:A.progress,className:"h-6 w-6"})}):null]}):(0,a.jsx)("div",{className:"h-full w-full rounded-2xl border border-token-border-medium"})}),(0,a.jsxs)("div",{className:"space-x-2",children:[(0,a.jsx)(f.z,{color:"neutral",type:"button",onClick:function(){T()},children:"Upload"}),(0,a.jsx)(f.z,{color:"neutral",type:"button",onClick:function(){n(void 0),C(void 0)},children:"Remove"})]})]})}},67:function(e,t,n){"use strict";n.d(t,{X:function(){return s},m:function(){return u}});var o=n(4337),r=n(35250),i=n(9181),a=n.n(i);function c(){var e=(0,o._)(["rounded-full bg-black dark:bg-gray-100"]);return c=function(){return e},e}var s=n(21389).Z.div(c());function u(){return(0,r.jsx)(a(),{href:"/",shallow:!0,className:"block h-8 w-8",children:(0,r.jsx)(s,{className:"h-full w-full"})})}},15329:function(e,t,n){"use strict";n.d(t,{R:function(){return b},Vq:function(){return v},ZB:function(){return p},ZP:function(){return g},zV:function(){return h}});var o=n(4337),r=n(35250),i=n(7813),a=n(19841),c=n(21389);function s(){var e=(0,o._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);return s=function(){return e},e}function u(){var e=(0,o._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);return u=function(){return e},e}function d(){var e=(0,o._)(["rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)]"]);return d=function(){return e},e}function l(){var e=(0,o._)(["my-1.5 h-px dark:bg-white/20 bg-black/20"]);return l=function(){return e},e}function f(){var e=(0,o._)(["",""]);return f=function(){return e},e}function g(e){var t=e.onClick,n=e.href,o=e.target,c=e.children;return(0,r.jsx)(i.v.Item,{children:function(e){var i=e.active;return(0,r.jsx)(p,{as:void 0!==n?"a":"button",onClick:t,href:n,target:o,className:(0,a.default)(i?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-100 dark:hover:bg-gray-800"),children:c})}})}c.Z.a(s());var p=c.Z.a(u()),h=(0,c.Z)(p)(d()),b=c.Z.div(l()),v=(0,c.Z)(p)(f(),function(e){return e.$active?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-100 dark:hover:bg-gray-800"})},2864:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});var o=n(39324),r=n(95137),i=n(5268);function a(e){var t,n=(0,i.a)(["template-plugins",(0,o._)({},e)],function(){return r.ZP.publicGetPluginsById({ids:e})},{onError:function(e){console.error(e)}}),a=n.data,c=n.isLoading;return{plugins:null!==(t=null==a?void 0:a.items)&&void 0!==t?t:[],isLoading:c}}},10664:function(e,t,n){"use strict";n.d(t,{n:function(){return O},A3:function(){return S},yx:function(){return B},JS:function(){return D}});var o,r,i,a=n(96237),c=n(39324),s=n(81949),u=n(15858),d=n(11084),l=n(82534),f=n(90408),g=n(82081),p=n(61888),h=n(70079),b=n(94968),v=n(95954),m=n(50253),y=n(88798),_=n(32877),k=n(37469),A=n(46020),C=n(78931),E=n(640),T=n(52787),R=n(45248),x=h.useLayoutEffect,w=RegExp("```.*?\\n([\\s\\S]+?)\\n?```[^`]*$","gms");(o=r||(r={})).Core="Core",o.Chat="Chat",o.Settings="Settings";var L=(0,c._)({Mod:"mod",Comma:","},u.s),P=(i={},(0,a._)(i,L.Mod,/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"⌘":"Ctrl"),(0,a._)(i,L.Comma,","),(0,a._)(i,L.Enter,"⏎"),(0,a._)(i,L.Escape,"Esc"),(0,a._)(i,L.ArrowUp,"↑"),(0,a._)(i,L.ArrowDown,"↓"),(0,a._)(i,L.ArrowLeft,"←"),(0,a._)(i,L.ArrowRight,"→"),(0,a._)(i,L.Backspace,"⌫"),(0,a._)(i,L.Delete,"⌦"),(0,a._)(i,L.Tab,"⇥"),(0,a._)(i,L.Control,"Ctrl"),(0,a._)(i,L.Shift,"Shift"),i),S=function(e){var t;return e.map(function(e){return null!==(t=P[e])&&void 0!==t?t:e})},M=(0,b.vU)({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat",description:"Keyboard shortcut to open a new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input",description:"Keyboard shortcut to focus the chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block",description:"Keyboard shortcut to copy the last code block in the chat"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response",description:"Keyboard shortcut to copy the last response in the chat"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions",description:"Keyboard shortcut to toggle custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar",description:"Keyboard shortcut to toggle navigation"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat",description:"Keyboard shortcut to delete chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts",description:"Keyboard shortcut to toggle keyboard actions"}}),O=new E.V,N=function(e){var t=e.resetThreadAction,n=e.clientThreadId,o=e.features;return[{key:"newChat",action:t||p.noop,actionMessageDescriptor:M.newChat,group:r.Core,keyboardBinding:[L.Mod,L.Shift,"o"],altKeyboardBindings:[[L.Mod,"k"]]},{key:"focusPromptTextarea",action:m.go,actionMessageDescriptor:M.focusPromptTextarea,group:r.Chat,keyboardBinding:[L.Shift,L.Escape]},{key:"copyLastCodeBlock",action:function(){if(null!=n)for(var e=k.tQ.getThreadCurrentLeafId(n),t=k.tQ.getThreadConversationTurns(n,e),o=t.length-1;o>=0;o--){var r=t[o].messages.reduce(function(e,t){return null==t.err&&t.message.author.role===v.uU.Assistant&&"all"===t.message.recipient?e+(e?"\n\n":"")+(0,T.RR)(t.message):e},""),i=(0,s._)(r.matchAll(w)),a=i.length?i[i.length-1][1]:null;if(null!=a){(0,d.S)(a).then(function(){y.m.success("Copied code block to clipboard")});break}}},actionMessageDescriptor:M.copyLastCodeBlock,group:r.Chat,keyboardBinding:[L.Mod,L.Shift,";"],altKeyboardBindings:[[L.Mod,L.Shift,":"]]},{key:"copyLastResponse",action:function(){null!=n&&k.tQ.copyLastMessageToClipboard(n,"keyboard").then(function(){y.m.success("Last response copied to clipboard")})},actionMessageDescriptor:M.copyLastResponse,group:r.Chat,keyboardBinding:[L.Mod,L.Shift,"c"]},{key:"toggleCustomInstructions",action:function(){return A.vm.toggleModal(A.B.UserContext)},actionMessageDescriptor:M.toggleCustomInstructions,group:r.Settings,keyboardBinding:[L.Mod,L.Shift,"i"],enabled:o.has(_.Rw)||o.has(_.uo)},{key:"navigationToggle",action:function(){return A.vm.toggleDesktopNavCollapsed()},actionMessageDescriptor:M.navigationToggle,group:r.Core,keyboardBinding:[L.Mod,L.Shift,"s"]},{key:"deleteChat",action:function(){O.publish({kind:"deleteChat"})},actionMessageDescriptor:M.deleteChat,group:r.Chat,keyboardBinding:[L.Mod,L.Shift,L.Backspace],altKeyboardBindings:[[L.Mod,L.Shift,L.Delete]]},{key:"toggleKeyboardActions",action:function(){return A.vm.toggleModal(A.B.KeyboardActions)},actionMessageDescriptor:M.toggleKeyboardActions,group:r.Settings,keyboardBinding:[L.Mod,"/"]}]},I=function(e){var t,n,o,r=(0,C.hz)().has(_.rk);return t=function(e){f.o.logEvent(g.a.keyboardShortcut,{keyboardActionKey:e.key}),l.U.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:e.key})},n={enabled:r},o=e.map(function(e){var t=e.keyboardBinding.join("+");if(e.altKeyboardBindings){t=[t];var n=e.altKeyboardBindings.map(function(e){return e.join("+")});t=t.concat(n)}return(0,R.ZP)(t,{byKey:!0})}),void x(function(){if((null==n?void 0:n.enabled)!==!1){var r=function(n){if(!n.repeat)for(var r=0;r<o.length;r++)o[r](n)&&(void 0===e[r].enabled||e[r].enabled)&&(n.preventDefault(),t(e[r]),e[r].action())},i=function(e){void 0!==e.key&&r(e)},a=document;return a.addEventListener("keydown",i),function(){a.removeEventListener("keydown",i)}}},[e,n])},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resetThreadAction,n=e.clientThreadId,o=(0,C.hz)();return(0,h.useMemo)(function(){return N({features:o,resetThreadAction:t,clientThreadId:n}).filter(function(e){var t=e.enabled;return void 0===t||t})},[n,o,t])},B=function(e){I(D({resetThreadAction:e.resetThreadAction,clientThreadId:e.clientThreadId}))}}},function(e){e.O(0,[8682,6786,3656,5960,2104,1438,7985,4137,5427,8937,5342,9774,2888,179],function(){return e(e.s=15773)}),_N_E=e.O()}]);