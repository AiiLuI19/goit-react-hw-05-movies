"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{602:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(885),o=r(791),c=r(871),i=r(171),a=r(184);var h=function(e){var t=e.name,n=e.character,o=e.profile;return(0,a.jsxs)(a.Fragment,{children:[o?(0,a.jsx)("img",{src:"https://www.themoviedb.org/t/p/w185/".concat(o),alt:t}):(0,a.jsx)("img",{src:r(395),alt:"404",width:"185px",height:"278px"}),(0,a.jsx)("h2",{children:t}),(0,a.jsxs)("p",{children:["Character: ",n]})]})},s=function(){var e=i.Z.fetchMoviesCredits,t=(0,o.useState)(null),r=(0,n.Z)(t,2),s=r[0],u=r[1],f=(0,c.UO)().movieId;return(0,o.useEffect)((function(){f&&e(f).then((function(e){u(e.cast)}))}),[f,e]),(0,a.jsx)("ul",{children:s&&s.map((function(e){var t=e.id,r=e.name,n=e.character,o=e.profile_path;return(0,a.jsx)("li",{children:(0,a.jsx)(h,{name:r,character:n,profile:o})},t)}))})}},171:function(e,t){var r={fetchTrending:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=d3e8a787d9b4dc35185152e0bafc0774").then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchSearchMovies:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US&query=".concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchMoviesInfo:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchMoviesCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchMoviesReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))}};t.Z=r},395:function(e,t,r){e.exports=r.p+"static/media/Z2000128425.09ea9f6b1352b3452d9d.jpg"}}]);
//# sourceMappingURL=cast.cb732bad.chunk.js.map