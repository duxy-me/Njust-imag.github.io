(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(e,t,a){"use strict";var n=a(15),c=a.n(n),i=a(0),r=a.n(i),l=a(355);a(179);t.a=Object(l.trackWindowScroll)((function(e){var t=Object(i.useState)(e.image),a=c()(t,2),n=a[0],o=a[1];return r.a.createElement(l.LazyLoadImage,{alt:n,effect:"blur",src:n,scrollPosition:e.scrollPosition,width:e.width,height:e.height,threshold:1,onError:function(){o("../static/avatar/default_avatar.jpg")}})}))},86:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(191),r=a(24),l=a(195),o=(a(179),a(208),a(181),a(390)),m=a(393),p=a(387),s=a(389),g=a(391),u=a(392),d=a(372),E=Object(i.a)((function(){return{root:{width:"1140px",margin:"0 auto"},title:{padding:"20px"},content:{width:"25%",float:"left",marginTop:"50px",alignItems:"center",height:"200px"},pic:{display:"flex",justifyContent:"center",paddingBottom:"20px","& img":{height:"100px",padding:"0 20px",margin:"0 auto"}}}}));t.default=function(){var e=Object(r.useRouteData)().competition;console.log(e.data[0]);var t=E();return c.a.createElement("div",{className:t.root},c.a.createElement(l.a,{variant:"h4",style:{paddingTop:"30px",paddingBottom:"50px"},align:"center"},"Competitions"),c.a.createElement(s.a,null,c.a.createElement(o.a,null,c.a.createElement(g.a,null,c.a.createElement(u.a,null,c.a.createElement(p.a,null,"序号"),c.a.createElement(p.a,{align:"center"},"获奖名称"),c.a.createElement(p.a,{align:"center"},"获奖时间"),c.a.createElement(p.a,{align:"center"},"获奖人员"),c.a.createElement(p.a,{align:"center"},"获奖等级"),c.a.createElement(p.a,{align:"center"},"指导教师"),c.a.createElement(p.a,{align:"center"},"奖状"))),c.a.createElement(m.a,null,e.data.map((function(e,t){return c.a.createElement(u.a,{key:t},c.a.createElement(p.a,null,t+1),c.a.createElement(p.a,{align:"center"},e.name),c.a.createElement(p.a,{align:"center"},e.year),c.a.createElement(p.a,{align:"center"},e.participant),c.a.createElement(p.a,{align:"center"},e.ranking),c.a.createElement(p.a,{align:"center"},e.teachers),c.a.createElement(p.a,{align:"center"},c.a.createElement(d.a,{maskOpacity:.5,bannerVisible:!1},c.a.createElement(d.b,{src:"../static/competition_encd/".concat(e.id,"/").concat(e.pic.split("/").slice(-1)[0])},c.a.createElement("img",{style:{height:"50px"},src:"../static/competition_encd/".concat(e.id,"/tiny_").concat(e.pic.split("/").slice(-1)[0])})))))}))))))}}}]);