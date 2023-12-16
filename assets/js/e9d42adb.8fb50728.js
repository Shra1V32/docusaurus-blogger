"use strict";(self.webpackChunktataplay_autoupdater=self.webpackChunktataplay_autoupdater||[]).push([[316],{7009:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(5893),s=t(1151);const o={},a="Authentication",r={id:"Tata Play Playlist Generator - ForceGT/How It works/working",title:"Authentication",description:"The above diagram explains how things work in the case of authentication in the portal",source:"@site/docs/Tata Play Playlist Generator - ForceGT/How It works/working.md",sourceDirName:"Tata Play Playlist Generator - ForceGT/How It works",slug:"/Tata Play Playlist Generator - ForceGT/How It works/working",permalink:"/docusaurus-blogger/docs/Tata Play Playlist Generator - ForceGT/How It works/working",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tata Play Playlist Generator - ForceGT/How It works/working.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Documentation",permalink:"/docusaurus-blogger/docs/Tata Play Playlist Generator - ForceGT/How It works/apidoc"},next:{title:"Welcome to the Project!",permalink:"/docusaurus-blogger/docs/intro/"}},l={},c=[{value:"Explanation of different files used in the code_samples directory",id:"explanation-of-different-files-used-in-the-code_samples-directory",level:2},{value:"How the DASH with DRM protocol works:",id:"how-the-dash-with-drm-protocol-works",level:2},{value:"Miscellaneous Info",id:"miscellaneous-info",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(7446).Z+"",width:"721",height:"551"})}),"\n",(0,i.jsx)(n.p,{children:"The above diagram explains how things work in the case of authentication in the portal"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"As you can see there are two ways of logging in:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"By Password (Deprecated after rebranding)"}),"\n",(0,i.jsx)(n.li,{children:"By OTP"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RMN"})," and ",(0,i.jsx)(n.code,{children:"SID"})," both are required as far as the login endpoint is concerned"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After all the required parameters are sent to the API and you are successfully authenticated, you will receive a ",(0,i.jsx)(n.a,{href:"https://jwt.io/",children:"JWT"}),". We make use of this JWT. This is the ",(0,i.jsx)(n.strong,{children:"Access Token"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This access token identifies you as a unique user, and you can use this to get a valid license for each stream. This is supplied as ",(0,i.jsx)(n.code,{children:"ls_session"})," in the Miscellaneous Section below"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"explanation-of-different-files-used-in-the-code_samples-directory",children:"Explanation of different files used in the code_samples directory"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"allChannels.py"})," - This generates a file allChannels.json containing all the channels available on the TataSky platform irrespective of whether the user has subscribed or not. The file has already been included in the repository"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"constants.py"})," - This is a list of urls, headers, payloads that might be used anywhere in the other files"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"jwttoken.py"})," -"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This contains the logic need for generation of the jwt . This is different from the user access Token generated by the backend upon user login. This is needed to get a license to play each channel url / mpeg dash stream /mpd file\nThe token generated here is appended to the license_url of each channel using ls_session key\nYou can find how it is done in the detailed manner in the file itself"}),"\n",(0,i.jsx)(n.li,{children:"This can be used independently , just specify the channelId for which you need to get the token and you are good to go\nThe script calls this repeatedly for all channels in the user subscribed/entitlement list"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"main.py"})," - This contains the logic for the menu generation for the user. It might be updated constantly\n",(0,i.jsx)(n.code,{children:"utils.py"})," - This contains the logic for the m3u generation. This will be integrated soon in the main file"]}),"\n",(0,i.jsx)(n.h2,{id:"how-the-dash-with-drm-protocol-works",children:"How the DASH with DRM protocol works:"}),"\n",(0,i.jsx)(n.p,{children:"I know you don't want to get into the details of how dash/hls works but this is important to know if you get lost somewhere"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"dash files or mpd files have segments which are a list of chunks and not the entire file since these are updated on the go while a live stream is on"}),"\n",(0,i.jsx)(n.li,{children:"After every x seconds dash players fetch a new segment which in turn has new chunk links"}),"\n",(0,i.jsx)(n.li,{children:"According to the DRM widewine policy, before fetching each chunk,\nthe player has to verify if the right person gets the chunk and thus a license url is always needed to verify the same"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"miscellaneous-info",children:"Miscellaneous Info"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To get a valid license take the ",(0,i.jsx)(n.code,{children:"dashWidewineLicenseUrl"})," value and append to it ",(0,i.jsx)(n.code,{children:"ls_session"})," where ",(0,i.jsx)(n.code,{children:"ls_session"})," will be the token generated in Authentication Step 2"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For example :"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    dashWidewineLicenseUrl: "https://tatasky.live.ott.irdeto.com/Widevine/getlicense?CrmId=tatasky&AccountId=tatasky&ContentId=400000077"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["and your jwt token generated in authentication endpoint number 2 is\n",(0,i.jsx)(n.code,{children:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNvbnRyb2xfc2lnbmluZ19rZXlfcHJvZHVjdGlvbl8xNTk5MTYxMzc0NzY0In0.eyJzdWIiOiIxMjY3Nzg0MTM4IiwiaXNlIjp0cnVlLCJqdGkiOiJlNWJmMTVhZi0xNWM2LTQzNWUtYTU5MS04YjkzZjlkZmY5YmIiLCJhaWQiOiJ0Y"}),"\nThen your valid license url becomes\n",(0,i.jsx)(n.code,{children:"https://tatasky.live.ott.irdeto.com/Widevine/getlicense?CrmId=tatasky&AccountId=tatasky&ContentId=400000077&ls_session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNvbnRyb2xfc2lnbmluZ19rZXlfcHJvZHVjdGlvbl8xNTk5MTYxMzc0NzY0In0.eyJzdWIiOiIxMjY3Nzg0MTM4IiwiaXNlIjp0cnVlLCJqdGkiOiJlNWJmMTVhZi0xNWM2LTQzNWUtYTU5MS04YjkzZjlkZmY5YmIiLCJhaWQiOiJ0Y"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7446:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tsky-8c7662d42b88c6d151ca63a5b4822d34.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);