"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(689),u=n(818),s=n(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),i=n[0],o=n[1],p=(0,a.useState)(null),f=(0,r.Z)(p,2),h=f[0],l=f[1];return(0,a.useEffect)((function(){(0,u.IQ)(e).then((function(e){var t=e.cast;return o(t)})).catch((function(e){return l(e)}))}),[e]),(0,s.jsxs)(s.Fragment,{children:[h&&(0,s.jsx)("h1",{children:h.message}),(0,s.jsx)("ul",{children:i&&i.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:n,width:100,height:150}),(0,s.jsx)("p",{children:n}),(0,s.jsxs)("p",{children:["Character: ",r]})]},t)}))})]})}},818:function(e,t,n){n.d(t,{HI:function(){return p},IQ:function(){return f},It:function(){return i},Tn:function(){return h},q:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="7113ba9605fd4f5593de8c8922948eb6";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/movie/day?api_key=".concat(s));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"?api_key=").concat(s));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.f4d70cad.chunk.js.map