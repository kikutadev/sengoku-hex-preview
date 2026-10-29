// Generated from the exact production build, not from a manually maintained list.
const CACHE="sengoku-hex-f404f4a65c82";
const PREFIX="sengoku-hex-";
const FILES=["./assets/audio/battle.mp3","./assets/audio/battleDefeat.mp3","./assets/audio/battleVictory.mp3","./assets/audio/cancel.mp3","./assets/audio/castleFall.mp3","./assets/audio/cavalry.mp3","./assets/audio/confirm.mp3","./assets/audio/defeat.mp3","./assets/audio/deploy.mp3","./assets/audio/diplomacySuccess.mp3","./assets/audio/endingConfirm.mp3","./assets/audio/monthAdvance.mp3","./assets/audio/recruitSuccess.mp3","./assets/audio/select.mp3","./assets/audio/strategy.mp3","./assets/audio/title.mp3","./assets/audio/unify.mp3","./assets/audio/victory.mp3","./assets/BitmapFont-NARd7sJD.js","./assets/browserAll-BjeLJjWm.js","./assets/CanvasRenderer-C35Y6RIz.js","./assets/Filter-CsWS7sEa.js","./assets/getTexelRangeRects-B8VEAzZr.js","./assets/images/f1/portraits/honda.webp","./assets/images/f1/portraits/matsudaira.webp","./assets/images/f1/portraits/oda.webp","./assets/images/f1/portraits/shibata.webp","./assets/images/f1/portraits/takeda.webp","./assets/images/f1/title.webp","./assets/images/f2/archer-four-direction-56.webp","./assets/images/f2/castle-keep.webp","./assets/images/f2/castle-mountain.webp","./assets/images/f2/castle-riverside.webp","./assets/images/f2/cavalry-four-direction-56.webp","./assets/images/f2/forest.webp","./assets/images/f2/matchlock-four-direction-56.webp","./assets/images/f2/mountain.webp","./assets/images/f2/plain.webp","./assets/images/f2/settlement-pixelorama.webp","./assets/images/f2/spearman-four-direction-56.webp","./assets/images/f2/terrain-pixelorama.webp","./assets/images/f2/timber-bridge.webp","./assets/images/f3/castle-fall.webp","./assets/images/f3/departure.webp","./assets/images/f3/diplomacy.webp","./assets/images/f3/recruitment.webp","./assets/images/f3/retreat.webp","./assets/images/f3/siege-defense.webp","./assets/images/f3/submission.webp","./assets/images/f3/unify.webp","./assets/images/strategy/central-honshu-relief.webp","./assets/images/strategy/settlements/farm-1.webp","./assets/images/strategy/settlements/farm-2.webp","./assets/images/strategy/settlements/farm-3.webp","./assets/images/strategy/settlements/farm-4.webp","./assets/images/strategy/settlements/farm-5.webp","./assets/images/strategy/settlements/market-1.webp","./assets/images/strategy/settlements/market-2.webp","./assets/images/strategy/settlements/market-3.webp","./assets/images/strategy/settlements/market-4.webp","./assets/images/strategy/settlements/market-5.webp","./assets/index-2LecLZ0E.js","./assets/index-BTrSeuNL.css","./assets/RenderTargetSystem-BZerVFVB.js","./assets/war-display-bold-2riStNe4.woff2","./assets/war-ui-400-4dGCN58M.woff2","./assets/war-ui-700-C3wh_X9J.woff2","./assets/WebGLRenderer-BYxMi8-D.js","./assets/WebGPURenderer-BOS_abf-.js","./assets/webworkerAll-CP3banpI.js","./icons/sengoku-192.png","./icons/sengoku-512.png","./index.html","./manifest.webmanifest"];
self.addEventListener("install",event=>{event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(FILES);
})());});
self.addEventListener("activate",event=>{event.waitUntil((async()=>{
 for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);
 await self.clients.claim();
})());});
self.addEventListener("fetch",event=>{
 const req=event.request;
 if(req.method!=="GET"||new URL(req.url).origin!==self.location.origin)return;
 if(req.mode==="navigate"){
  event.respondWith(fetch(req).catch(async()=>{
   const cache=await caches.open(CACHE);
   return (await cache.match("./index.html"))||Response.error();
  }));
  return;
 }
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  const saved=await cache.match(req);
  if(saved)return saved;
  return fetch(req);
 })());
});
