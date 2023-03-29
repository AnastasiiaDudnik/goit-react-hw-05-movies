"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{8006:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(9439),a=n(1087),c=n(7689),u=n(2791),s=n(9818),i=n(3521),o=n(2007),p=n.n(o),l=n(2134),d=n(184),v=function(e){var r=e.to,n=e.children;return(0,d.jsxs)(a.rU,{to:r,children:[(0,d.jsx)(l.kyg,{}),n]})};v.PropType={to:p().string.isRequired,children:p().node};var h=function(){var e,r,n=(0,c.UO)().movieId,o=(0,c.TH)(),p=(0,u.useRef)(null!==(e=null===(r=o.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies"),l=(0,u.useState)(""),h=(0,t.Z)(l,2),f=h[0],x=h[1],m=(0,u.useState)(null),j=(0,t.Z)(m,2),g=j[0],w=j[1];(0,u.useEffect)((function(){(0,s.HI)(n).then((function(e){var r=e.data;return x(r)})).catch((function(e){return w(e)}))}),[n]);var k=f.title,b=f.release_date,y=f.poster_path,Z=f.overview,_=f.genres,U=f.vote_average,S=Number.parseInt(10*U);return(0,d.jsxs)(d.Fragment,{children:[g&&(0,d.jsx)("h1",{children:g.message}),(0,d.jsx)(v,{to:p,children:"Go back"}),f&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:[k," (",b.slice(0,4),")"]}),(0,d.jsxs)("p",{children:["User Score: ",S,"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:Z}),(0,d.jsx)("h3",{children:"Genres"}),_.map((function(e){var r=e.name,n=e.id;return(0,d.jsx)("p",{children:r},n)}))]}),(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(y),alt:k})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"review",children:"Review"})})]})]}),(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(i.a,{}),children:(0,d.jsx)(c.j3,{})})]})}},9818:function(e,r,n){n.d(r,{HI:function(){return p},IQ:function(){return l},It:function(){return i},Tn:function(){return d},q:function(){return o}});var t=n(5861),a=n(7757),c=n.n(a),u=n(1243),s="7113ba9605fd4f5593de8c8922948eb6";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/movie/day?api_key=".concat(s));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=6.33c83bbf.chunk.js.map