"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[347],{656:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var i=n(885),r=n(791),o=n(871),s=n(501),c="MovieDetails_img__D3WH9",a="MovieDetails_info__0TKY1",h="MovieDetails_textInfo__vEi6B",d="MovieDetails_title__RBndM",l="MovieDetails_link__wf74g",v="MovieDetails_backLink__haiys",u=n(184),f=function(e){var t,n,i=e.movie,f=(0,o.TH)(),m=(0,r.useRef)(null!==f&&void 0!==f&&null!==(t=f.state)&&void 0!==t&&t.from?null===(n=f.state)||void 0===n?void 0:n.from:"/movies"),_=i.original_title,j=i.genres,p=i.vote_average,g=i.overview,x=i.poster_path,b=i.release_date;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{children:[(0,u.jsx)(s.rU,{className:v,to:m.current,children:"\xab Go back"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("section",{className:a,children:[(0,u.jsx)("div",{className:c,children:(0,u.jsx)("img",{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/".concat(x),alt:_})}),(0,u.jsxs)("div",{className:h,children:[(0,u.jsxs)("h2",{children:[_," (",new Date(b).getFullYear(),")"]}),(0,u.jsxs)("p",{children:["User Score: ",p,"% "]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:g}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:j.map((function(e){return e.name})).join(", ")})]})]}),(0,u.jsxs)("section",{children:[(0,u.jsx)("h2",{className:d,children:"Additional information"}),(0,u.jsx)(s.rU,{className:l,to:"cast",state:{from:f.pathname},children:"Cast"}),(0,u.jsx)(s.rU,{className:l,to:"reviews",children:"Reviews"})]})]}),(0,u.jsx)(o.j3,{})]})})},m=n(171),_=function(){var e=m.Z.fetchMoviesInfo,t=(0,r.useState)(null),n=(0,i.Z)(t,2),s=n[0],c=n[1],a=(0,o.UO)().movieId;return(0,r.useEffect)((function(){a&&e(a).then((function(e){c(e)}))}),[a,e]),(0,u.jsx)("section",{children:s&&(0,u.jsx)(f,{movie:s})})}},171:function(e,t){var n={fetchTrending:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=d3e8a787d9b4dc35185152e0bafc0774").then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchSearchMovies:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US&query=".concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchMoviesInfo:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchMoviesCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))},fetchMoviesReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No Movie"))}))}};t.Z=n}}]);
//# sourceMappingURL=movie-details-page.90deb66c.chunk.js.map