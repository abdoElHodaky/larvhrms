if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>a(e,n),d={module:{uri:n},exports:r,require:o};s[n]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-88b8e2d9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"build/assets/app-CifqVuM1.js",revision:"592179b54c30a870c1a6ab39dd5c5978"},{url:"build/assets/app-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"build/registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"css/bootstrap.css",revision:"eccbc7c1e07477f78c12b2162e03145f"},{url:"css/moderator-sidebar.css",revision:"92a204a4fdf077a1febee83b5d75a6fb"},{url:"css/sidebar.css",revision:"695aa9f97ac109b3bebc87ef27b1f50f"},{url:"css/support.css",revision:"32e481c49b32a7afeac217af604078f9"},{url:"default_images/user.png",revision:"6f6bbb16aec97391aefe120ec5a4e6a2"},{url:"docs/FormTemplate.txt",revision:"43716e1cf8dc4829358ca67de1d16d74"},{url:"favicon.ico",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/bootstrap.js",revision:"f477aed9420e4591d4ae1c45a8d7b2a9"},{url:"logo.png",revision:"503dd32443f81f7ac67831e7d835e9ec"},{url:"offline.html",revision:"e27621f5c2ed066329626edfe3da9414"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"swicons/100.png",revision:"c6e52e24275ea63c071cd5d128877fd9"},{url:"swicons/1024.png",revision:"e0640b8c7b04d1f1858940f948fc8422"},{url:"swicons/114.png",revision:"1e246b16356cbb0a051928d777ddb7fd"},{url:"swicons/120.png",revision:"5b64c72e3375a1195921dbf2fc3ab302"},{url:"swicons/128.png",revision:"4183c29845433402343d95b973f6c55a"},{url:"swicons/144.png",revision:"4507f8037542d3fe25ef21c51825662a"},{url:"swicons/152.png",revision:"3b642fa9bc3b5c379729f8ceaebb8b80"},{url:"swicons/16.png",revision:"5fd507e353f4c1d08c710381e0fb6cd4"},{url:"swicons/167.png",revision:"fab50df1f2500ce86fa6746dd6fae1d2"},{url:"swicons/180.png",revision:"4939bc4168da929ca92f5a5e798f18a2"},{url:"swicons/192.png",revision:"d95430f4935ed7fd9f89cc4c96d9457e"},{url:"swicons/20.png",revision:"fef210f566b5a63743d5d9ac1a52da95"},{url:"swicons/256.png",revision:"3f11cca42e9bef7710136e7b109d6485"},{url:"swicons/29.png",revision:"809d41c98c6970c90f2abb01ec4b73ac"},{url:"swicons/32.png",revision:"2a194c0f03d8b931f204a7d42be4cd70"},{url:"swicons/40.png",revision:"80490099dd904234aa365a3c6135fdec"},{url:"swicons/50.png",revision:"76f20d696058ae80a1fe0c1f5f0b4fe5"},{url:"swicons/512.png",revision:"8fb674f605f35c09fb208c4eeb4503b4"},{url:"swicons/57.png",revision:"d8c0e6a0f2b98bec4df644e7450c9840"},{url:"swicons/58.png",revision:"9b484444ecd5cbcbc33bf7499bc055c9"},{url:"swicons/60.png",revision:"4b60120b6ae13489cbe2aa568c9e6bb7"},{url:"swicons/64.png",revision:"88bb0919511653bc2abf1eed769be832"},{url:"swicons/72.png",revision:"202b73c6622fb9c611d905ac24bad0a6"},{url:"swicons/76.png",revision:"b3f8146b7cacf97ee8b7298d91fdd574"},{url:"swicons/80.png",revision:"cdf13312e22b1fbd5629cc2d8ab07573"},{url:"swicons/87.png",revision:"ed1b930b2e6a8b3fea2fcde901b59707"},{url:"swicons/android-launchericon-144-144.png",revision:"4507f8037542d3fe25ef21c51825662a"},{url:"swicons/android-launchericon-192-192.png",revision:"d95430f4935ed7fd9f89cc4c96d9457e"},{url:"swicons/android-launchericon-48-48.png",revision:"018fa0aa4c8e08d3bb5eea1a3f73359f"},{url:"swicons/android-launchericon-512-512.png",revision:"8fb674f605f35c09fb208c4eeb4503b4"},{url:"swicons/android-launchericon-72-72.png",revision:"202b73c6622fb9c611d905ac24bad0a6"},{url:"swicons/android-launchericon-96-96.png",revision:"52369ec6817b3b7b8fe1892fc522088a"},{url:"swicons/LargeTile.scale-100.png",revision:"6263c60cf8f6d116b81d04782f0a202b"},{url:"swicons/LargeTile.scale-125.png",revision:"c6a8fa279b6507708aedba1c97f0aef0"},{url:"swicons/LargeTile.scale-150.png",revision:"2ab01c46d066ea9700b90d422e5a7d0c"},{url:"swicons/LargeTile.scale-200.png",revision:"81afb42ffce158638406a5a25842a101"},{url:"swicons/LargeTile.scale-400.png",revision:"aeab30c6193cb0a8905ee2d1d3bd2da0"},{url:"swicons/logo.png",revision:"503dd32443f81f7ac67831e7d835e9ec"},{url:"swicons/SmallTile.scale-100.png",revision:"4f26786ff2a8cccb68717f9dd142b2b0"},{url:"swicons/SmallTile.scale-125.png",revision:"bf067c9fa252cbdbb63b3fd8225e79f5"},{url:"swicons/SmallTile.scale-150.png",revision:"fdb019037cfde98897b72e3723faa327"},{url:"swicons/SmallTile.scale-200.png",revision:"54de29daa97cb46176f979dcd83fa2ea"},{url:"swicons/SmallTile.scale-400.png",revision:"ba9e4911d3f050145c3a623f5af703c0"},{url:"swicons/SplashScreen.scale-100.png",revision:"73e0d325cf05f2c2624b771d0fc7cbec"},{url:"swicons/SplashScreen.scale-125.png",revision:"629e8534cb1e63d74db79e34e9f2cbaf"},{url:"swicons/SplashScreen.scale-150.png",revision:"1a374995ddedfaa00b3013d24b2e1425"},{url:"swicons/SplashScreen.scale-200.png",revision:"5fb75cdd9d9421d76eaaa12a9114ed51"},{url:"swicons/SplashScreen.scale-400.png",revision:"b990f3232825ded042d5915bf4c3c7f9"},{url:"swicons/Square150x150Logo.scale-100.png",revision:"04395a226de82162b4d5e8c20053b1b8"},{url:"swicons/Square150x150Logo.scale-125.png",revision:"3964c6a047b3b4ae0a3734cbc3611821"},{url:"swicons/Square150x150Logo.scale-150.png",revision:"940a63dd872208be9a4ff3592f00f19d"},{url:"swicons/Square150x150Logo.scale-200.png",revision:"2abfeed477fc80c99c3db2d251e91de0"},{url:"swicons/Square150x150Logo.scale-400.png",revision:"44badb5985ca2328c86630a3878af48a"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"65ac9a935d288c203c607decfd1232a9"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"50da5509b14bd4228d8dabfe1e73cb91"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"fad5de49e8a251f0d81e678980ad3bc5"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"fac71cd7675ec3fd3e72936759044e70"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"0da69d22f80c73f7ff9fb2b40c76e1c7"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"29dcae6158064886fd3ed95b15821c2a"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"29e5a163acf8295a52ae3f9c5643dcc2"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"8069be2ff45c32f51a2dd4235e29fa74"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"b5cd6a032e0d772cc977c20b8be66dce"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"4a5fb9de5cc011e4bc40f3e6b507f97e"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"b11a57bc7bd4cf88420f09777d1b880d"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"f13c7465793b8508438b6da6ed870096"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"a59c213ba5a8d0362348011729fbcf10"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"483839877dbef505327a252c164183b7"},{url:"swicons/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"ff395029c5c56199f93d491eb18adafe"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"65ac9a935d288c203c607decfd1232a9"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"50da5509b14bd4228d8dabfe1e73cb91"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"fad5de49e8a251f0d81e678980ad3bc5"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"fac71cd7675ec3fd3e72936759044e70"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"0da69d22f80c73f7ff9fb2b40c76e1c7"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"29dcae6158064886fd3ed95b15821c2a"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"29e5a163acf8295a52ae3f9c5643dcc2"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"8069be2ff45c32f51a2dd4235e29fa74"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"b5cd6a032e0d772cc977c20b8be66dce"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"4a5fb9de5cc011e4bc40f3e6b507f97e"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"b11a57bc7bd4cf88420f09777d1b880d"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"f13c7465793b8508438b6da6ed870096"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"a59c213ba5a8d0362348011729fbcf10"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"483839877dbef505327a252c164183b7"},{url:"swicons/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"ff395029c5c56199f93d491eb18adafe"},{url:"swicons/Square44x44Logo.scale-100.png",revision:"b5cd6a032e0d772cc977c20b8be66dce"},{url:"swicons/Square44x44Logo.scale-125.png",revision:"497bb3f9e7d013046c97500b567bfae5"},{url:"swicons/Square44x44Logo.scale-150.png",revision:"69aaefbfb705d39d2bc8aef44ea42155"},{url:"swicons/Square44x44Logo.scale-200.png",revision:"f829a10ca4dfc83791f0a07f01797c48"},{url:"swicons/Square44x44Logo.scale-400.png",revision:"87e7fbe6f63db03690d8121bd9068fb6"},{url:"swicons/Square44x44Logo.targetsize-16.png",revision:"65ac9a935d288c203c607decfd1232a9"},{url:"swicons/Square44x44Logo.targetsize-20.png",revision:"50da5509b14bd4228d8dabfe1e73cb91"},{url:"swicons/Square44x44Logo.targetsize-24.png",revision:"fad5de49e8a251f0d81e678980ad3bc5"},{url:"swicons/Square44x44Logo.targetsize-256.png",revision:"fac71cd7675ec3fd3e72936759044e70"},{url:"swicons/Square44x44Logo.targetsize-30.png",revision:"0da69d22f80c73f7ff9fb2b40c76e1c7"},{url:"swicons/Square44x44Logo.targetsize-32.png",revision:"29dcae6158064886fd3ed95b15821c2a"},{url:"swicons/Square44x44Logo.targetsize-36.png",revision:"29e5a163acf8295a52ae3f9c5643dcc2"},{url:"swicons/Square44x44Logo.targetsize-40.png",revision:"8069be2ff45c32f51a2dd4235e29fa74"},{url:"swicons/Square44x44Logo.targetsize-44.png",revision:"b5cd6a032e0d772cc977c20b8be66dce"},{url:"swicons/Square44x44Logo.targetsize-48.png",revision:"4a5fb9de5cc011e4bc40f3e6b507f97e"},{url:"swicons/Square44x44Logo.targetsize-60.png",revision:"b11a57bc7bd4cf88420f09777d1b880d"},{url:"swicons/Square44x44Logo.targetsize-64.png",revision:"f13c7465793b8508438b6da6ed870096"},{url:"manifest.webmanifest",revision:"8fc494cee89ea45baf40c16278952177"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/offline.html"))),e.registerRoute((({request:e,url:s})=>1==s.includes("cdn")),new e.NetworkFirst({cacheName:"cdns",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:172800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({request:e,url:s})=>"POST"==e.method),new e.NetworkOnly({cacheName:"apCachePost",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.BackgroundSyncPlugin("Apisync",{maxRetentionTime:2880})]}),"POST"),e.registerRoute((({request:e,url:s})=>1==s.includes("fonts")),new e.NetworkFirst({cacheName:"cdns",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:172800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
