(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo512.cfc2d9d0.png"},function(e,t,n){e.exports=n.p+"static/media/sza.64f7f6c6.mp3"},function(e,t,n){e.exports=n.p+"static/media/music512.f2272a8c.png"},function(e,t,n){e.exports=n.p+"static/media/planet512.b86ce540.png"},function(e,t,n){e.exports=n.p+"static/media/art512.a1274c70.png"},function(e,t,n){e.exports=n.p+"static/media/book512.0b4460dc.png"},function(e,t,n){e.exports=n.p+"static/media/space512.833d18e6.png"},function(e,t,n){e.exports=n.p+"static/media/heart512.1feb2a28.png"},function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),c=(n(20),n(1)),s=n(2),l=n(4),u=n(3),p=n(7),d=n.n(p),m=(n(21),n(22),n(8)),f=n.n(m),g=(n(23),function(e){var t=e.name,n=e.about,a=e.link,i=e.image;return o.a.createElement("div",{className:"tc bg-navy pa1 dib h w br4 ma3 fade-in shadow-5"},o.a.createElement("img",{onClick:function(){return window.open(a,"_blank")},src:i,alt:"",className:"grow pa2 h5 w5"}),o.a.createElement("div",null,o.a.createElement("h1",{className:"b white"},t),o.a.createElement("p",{className:"b white"},n)))}),h=(n(24),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onReturnHome=function(){a.props.onRouteChange("home")},a.state={},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.options;return o.a.createElement("div",{className:"body pad"},e.map((function(t,n){return o.a.createElement(g,{name:e[n].name,about:e[n].about,link:e[n].link,image:e[n].image})})))}}]),n}(o.a.Component)),w=n(9),b=n.n(w),v=n(10),k=n.n(v),y=n(11),E=n.n(y),C=n(12),A=n.n(C),x=n(13),N=n.n(x),W=n(14),j=n.n(W),R=[{id:1,image:b.a,name:"Lo-Fi Beats",about:"Feeling a little stressed? Dive into some music with a hypnotic bass and velvet melodies!",link:"https://www.youtube.com/watch?v=-5KAN9_CzSA"},{id:2,image:k.a,name:"Google Earth",about:"Feeling a little stuck? Why not take a trip around the globe and learn more about the planet!",link:"https://earth.google.com/web/"},{id:3,image:E.a,name:"Art Palette",about:"Feeling a little creative? Take your imagination and this palette to paint whatever you feel like creating!",link:"https://www.youidraw.com/apps/painter/"},{id:4,image:A.a,name:"Wikipedia",about:"Feeling a little curious? Explore the enormous library of Wikipedia and learn about the world around you!",link:"https://en.wikipedia.org/wiki/Main_Page"},{id:5,image:N.a,name:"Alan Watts",about:"Feeling a little dreamy? Here are some words from Alan Watts, a powerful writer and explorer of consciousness!",link:"https://www.youtube.com/watch?v=h7W6fYbmF8U&list=PLDrE8eovyz8DQHrs2BXdVIYgRdRMVsjOb&index=1"},{id:6,image:j.a,name:"Self Care",about:"Feeling a little down? Take some time to analyze how you are feeling, practice mindfulness, or meditate!",link:"https://www.nytimes.com/guides/well/how-to-meditate"}],O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).playAudio=function(){e.state.play?(e.setState({play:!1}),e.audio.play()):(e.setState({play:!0}),e.audio.pause())},e.onClickImage=function(){e.onRouteChange("menu")},e.onRouteChange=function(t){e.setState({route:t})},e.state={play:!0,route:"home"},e.audio=new Audio(f.a),e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},"menu"===this.state.route?o.a.createElement(h,{options:R,onRouteChange:this.onRouteChange}):o.a.createElement("div",{className:"App-header body"},o.a.createElement("p",{onClick:this.onClickImage,className:"fade-in pointer grow"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"})),o.a.createElement("div",{className:"typewriter fade-in"},o.a.createElement("p",{onClick:this.playAudio,className:"typewriter-text pointer"},"Have a good trip!"))))}}]),n}(o.a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/goodtrip",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/goodtrip","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(t,e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.e598a601.chunk.js.map