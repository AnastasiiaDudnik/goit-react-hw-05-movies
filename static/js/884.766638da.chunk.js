"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,r,n){n.r(r);var t=n(439),a=n(689),c=n(87),u=n(791),s=n(818),i=n(521),o=n(184);r.default=function(){var e,r,n=(0,a.UO)().movieId,p=(0,a.TH)(),l=(0,u.useRef)(null!==(e=null===(r=p.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies"),v=(0,u.useState)(""),d=(0,t.Z)(v,2),f=d[0],h=d[1],x=(0,u.useState)(null),m=(0,t.Z)(x,2),j=m[0],g=m[1];(0,u.useEffect)((function(){(0,s.HI)(n).then((function(e){var r=e.data;return h(r)})).catch((function(e){return g(e)}))}),[n]);var w=f.title,k=f.release_date,b=f.poster_path,Z=f.overview,_=f.genres,y=f.vote_average,U=Number.parseInt(10*y);return(0,o.jsxs)(o.Fragment,{children:[j&&(0,o.jsx)("h1",{children:j.message}),(0,o.jsx)(c.rU,{to:l,children:"Go back"}),f&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("h1",{children:[w," (",k.slice(0,4),")"]}),(0,o.jsxs)("p",{children:["User Score: ",U,"%"]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:Z}),(0,o.jsx)("h3",{children:"Genres"}),_.map((function(e){var r=e.name,n=e.id;return(0,o.jsx)("p",{children:r},n)}))]}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(b),alt:w})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"review",children:"Review"})})]})]}),(0,o.jsx)(u.Suspense,{fallback:(0,o.jsx)(i.a,{}),children:(0,o.jsx)(a.j3,{})})]})}},818:function(e,r,n){n.d(r,{HI:function(){return p},IQ:function(){return l},It:function(){return i},Tn:function(){return v},q:function(){return o}});var t=n(861),a=n(757),c=n.n(a),u=n(243),s="7113ba9605fd4f5593de8c8922948eb6";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/movie/day?api_key=".concat(s));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=884.766638da.chunk.js.map