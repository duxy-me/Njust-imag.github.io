(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(e,s,a){"use strict";var t=a(15),n=a.n(t),r=a(0),o=a.n(r),l=a(355);a(179);s.a=Object(l.trackWindowScroll)((function(e){var s=Object(r.useState)(e.image),a=n()(s,2),t=a[0],i=a[1];return o.a.createElement(l.LazyLoadImage,{alt:t,effect:"blur",src:t,scrollPosition:e.scrollPosition,width:e.width,height:e.height,threshold:1,onError:function(){i("../static/avatar/default_avatar.jpg")}})}))},369:function(e,s,a){var t={"./af":216,"./af.js":216,"./ar":217,"./ar-dz":218,"./ar-dz.js":218,"./ar-kw":219,"./ar-kw.js":219,"./ar-ly":220,"./ar-ly.js":220,"./ar-ma":221,"./ar-ma.js":221,"./ar-ps":222,"./ar-ps.js":222,"./ar-sa":223,"./ar-sa.js":223,"./ar-tn":224,"./ar-tn.js":224,"./ar.js":217,"./az":225,"./az.js":225,"./be":226,"./be.js":226,"./bg":227,"./bg.js":227,"./bm":228,"./bm.js":228,"./bn":229,"./bn-bd":230,"./bn-bd.js":230,"./bn.js":229,"./bo":231,"./bo.js":231,"./br":232,"./br.js":232,"./bs":233,"./bs.js":233,"./ca":234,"./ca.js":234,"./cs":235,"./cs.js":235,"./cv":236,"./cv.js":236,"./cy":237,"./cy.js":237,"./da":238,"./da.js":238,"./de":239,"./de-at":240,"./de-at.js":240,"./de-ch":241,"./de-ch.js":241,"./de.js":239,"./dv":242,"./dv.js":242,"./el":243,"./el.js":243,"./en-au":244,"./en-au.js":244,"./en-ca":245,"./en-ca.js":245,"./en-gb":246,"./en-gb.js":246,"./en-ie":247,"./en-ie.js":247,"./en-il":248,"./en-il.js":248,"./en-in":249,"./en-in.js":249,"./en-nz":250,"./en-nz.js":250,"./en-sg":251,"./en-sg.js":251,"./eo":252,"./eo.js":252,"./es":253,"./es-do":254,"./es-do.js":254,"./es-mx":255,"./es-mx.js":255,"./es-us":256,"./es-us.js":256,"./es.js":253,"./et":257,"./et.js":257,"./eu":258,"./eu.js":258,"./fa":259,"./fa.js":259,"./fi":260,"./fi.js":260,"./fil":261,"./fil.js":261,"./fo":262,"./fo.js":262,"./fr":263,"./fr-ca":264,"./fr-ca.js":264,"./fr-ch":265,"./fr-ch.js":265,"./fr.js":263,"./fy":266,"./fy.js":266,"./ga":267,"./ga.js":267,"./gd":268,"./gd.js":268,"./gl":269,"./gl.js":269,"./gom-deva":270,"./gom-deva.js":270,"./gom-latn":271,"./gom-latn.js":271,"./gu":272,"./gu.js":272,"./he":273,"./he.js":273,"./hi":274,"./hi.js":274,"./hr":275,"./hr.js":275,"./hu":276,"./hu.js":276,"./hy-am":277,"./hy-am.js":277,"./id":278,"./id.js":278,"./is":279,"./is.js":279,"./it":280,"./it-ch":281,"./it-ch.js":281,"./it.js":280,"./ja":282,"./ja.js":282,"./jv":283,"./jv.js":283,"./ka":284,"./ka.js":284,"./kk":285,"./kk.js":285,"./km":286,"./km.js":286,"./kn":287,"./kn.js":287,"./ko":288,"./ko.js":288,"./ku":289,"./ku-kmr":290,"./ku-kmr.js":290,"./ku.js":289,"./ky":291,"./ky.js":291,"./lb":292,"./lb.js":292,"./lo":293,"./lo.js":293,"./lt":294,"./lt.js":294,"./lv":295,"./lv.js":295,"./me":296,"./me.js":296,"./mi":297,"./mi.js":297,"./mk":298,"./mk.js":298,"./ml":299,"./ml.js":299,"./mn":300,"./mn.js":300,"./mr":301,"./mr.js":301,"./ms":302,"./ms-my":303,"./ms-my.js":303,"./ms.js":302,"./mt":304,"./mt.js":304,"./my":305,"./my.js":305,"./nb":306,"./nb.js":306,"./ne":307,"./ne.js":307,"./nl":308,"./nl-be":309,"./nl-be.js":309,"./nl.js":308,"./nn":310,"./nn.js":310,"./oc-lnc":311,"./oc-lnc.js":311,"./pa-in":312,"./pa-in.js":312,"./pl":313,"./pl.js":313,"./pt":314,"./pt-br":315,"./pt-br.js":315,"./pt.js":314,"./ro":316,"./ro.js":316,"./ru":317,"./ru.js":317,"./sd":318,"./sd.js":318,"./se":319,"./se.js":319,"./si":320,"./si.js":320,"./sk":321,"./sk.js":321,"./sl":322,"./sl.js":322,"./sq":323,"./sq.js":323,"./sr":324,"./sr-cyrl":325,"./sr-cyrl.js":325,"./sr.js":324,"./ss":326,"./ss.js":326,"./sv":327,"./sv.js":327,"./sw":328,"./sw.js":328,"./ta":329,"./ta.js":329,"./te":330,"./te.js":330,"./tet":331,"./tet.js":331,"./tg":332,"./tg.js":332,"./th":333,"./th.js":333,"./tk":334,"./tk.js":334,"./tl-ph":335,"./tl-ph.js":335,"./tlh":336,"./tlh.js":336,"./tr":337,"./tr.js":337,"./tzl":338,"./tzl.js":338,"./tzm":339,"./tzm-latn":340,"./tzm-latn.js":340,"./tzm.js":339,"./ug-cn":341,"./ug-cn.js":341,"./uk":342,"./uk.js":342,"./ur":343,"./ur.js":343,"./uz":344,"./uz-latn":345,"./uz-latn.js":345,"./uz.js":344,"./vi":346,"./vi.js":346,"./x-pseudo":347,"./x-pseudo.js":347,"./yo":348,"./yo.js":348,"./zh-cn":349,"./zh-cn.js":349,"./zh-hk":350,"./zh-hk.js":350,"./zh-mo":351,"./zh-mo.js":351,"./zh-tw":352,"./zh-tw.js":352};function n(e){var s=r(e);return a(s)}function r(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=r,e.exports=n,n.id=369},375:function(e,s,a){"use strict";var t=a(1),n=a(7),r=a(0),o=a(18),l=a(176),i=a(20),c=r.forwardRef((function(e,s){var a=e.classes,i=e.className,c=e.raised,j=void 0!==c&&c,m=Object(n.a)(e,["classes","className","raised"]);return r.createElement(l.a,Object(t.a)({className:Object(o.a)(a.root,i),elevation:j?8:1,ref:s},m))}));s.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(c)},376:function(e,s,a){"use strict";var t=a(1),n=a(7),r=a(0),o=a(18),l=a(20),i=r.forwardRef((function(e,s){var a=e.classes,l=e.className,i=e.component,c=void 0===i?"div":i,j=Object(n.a)(e,["classes","className","component"]);return r.createElement(c,Object(t.a)({className:Object(o.a)(a.root,l),ref:s},j))}));s.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},96:function(e,s,a){"use strict";a.r(s);var t=a(15),n=a.n(t),r=a(0),o=a.n(r),l=a(191),i=a(195),c=a(375),j=a(376),m=a(24),d=a(208),u=a(8),f=a(197),p=a.n(f),h=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",width:"1140px",margin:"0 auto"},facultyItemItem:{display:"inline-block"},card_root:{width:"900px",minHeight:"240px",alignItems:"center",verticalAlign:"top",display:"inline-block"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto",alignItems:"space-between"},cover:{width:240},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},avatar:{paddingLeft:"5px",display:"inline-block"}}}));s.default=function(){var e=h(),s=Object(m.useRouteData)().userInfo,a=Object(u.l)(),t=null!=a.state?a.state.type:"cn",l=s,f=s.info;console.log(f);for(var g=f.info.profile,v=f.info.profile_c,b=[],k=s.info.journal,y=0;y<k.length;++y)"conf_name"in k[y]?b[y]=k[y].name+". "+k[y].author+". ("+k[y].conf_name+") ."+k[y].authors:b[y]=k[y].name+". "+k[y].author+". ("+k[y].jn_name+") ."+k[y].authors;console.log(b);var w=s.info.project;console.log(w);for(var z,x=[],E=0;E<w.length;++E)z=w[E].pro_source+' "'+w[E].name+'", ',""!=w[E].prog_num&&(z+="(No."+w[E].prog_num+"), "),z+=p()(w[E].start_time).format("YYYY")+"-"+p()(w[E].deadline).format("YYYY")+", ",w[E].principal==f.info.name?z+=w[E].role:z+="参与",x[E]=z;l.info.honor;var O=Object(r.useState)("cn"==t?"true":"false"),N=n()(O,2),_=N[0],I=N[1];return o.a.createElement("div",{className:e.root},o.a.createElement(i.a,{component:"h1",variant:"h5",align:"center",style:{paddingBottom:"20px",paddingTop:"20px"}},"true"==_?f.info.name:f.info.Eng_name),o.a.createElement("div",{className:e.facultyItemItem},o.a.createElement("div",{className:e.avatar},o.a.createElement(d.a,{image:"../../../static/avatar/".concat(s.id,".jpg"),width:200,height:240})),o.a.createElement(c.a,{className:e.card_root},o.a.createElement("div",{className:e.details},o.a.createElement(j.a,{className:e.content},o.a.createElement(i.a,{variant:"subtitle1",color:"textSecondary",style:{}},"true"==_?v:g,o.a.createElement("a",{href:"javascript:void(0)",onClick:function(){I("true"==_?"false":"true")}},"false"==_?"中文版":"English Version"))),o.a.createElement("div",{className:e.controls})))),o.a.createElement("div",{className:e.table_container},b&&b.length>0?o.a.createElement(i.a,{component:"h1",variant:"h5",align:"left",style:{paddingBottom:"20px",paddingTop:"20px"}},"论文"):"",b&&b.length>0?b.map((function(e,s){return o.a.createElement("li",{key:s,style:{padding:"10px",color:"#000000"}},e)})):"",x&&x.length>0?o.a.createElement(i.a,{component:"h1",variant:"h5",align:"left",style:{paddingBottom:"20px",paddingTop:"20px"}},"项目"):"",x&&x.length>0?x.map((function(e,s){return o.a.createElement("li",{key:s,style:{padding:"10px",color:"#000000"}},e)})):""))}}}]);