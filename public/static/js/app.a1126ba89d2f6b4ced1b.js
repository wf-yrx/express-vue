webpackJsonp([1],{AG2A:function(t,s,e){t.exports=e.p+"static/img/4.4f27c0b.jpeg"},EDgR:function(t,s){function e(t,s){var e=document.getElementsByTagName("html")[0],a=document.body.clientWidth||document.documentElement.clientWidth;e.style.fontSize=a/t*s+"px"}t.exports=function(){window.onload=function(){e(1920,80)},e(1920,80)},window.onresize=function(){e(1920,80)}},KhYh:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App"},i,!1,function(t){e("ymcE")},null,null).exports,n=e("/ocq"),r={name:"xrr",data:function(){return{db:[],adress:"",addAdress:"",addStory:"",addWho:"",adressAll:"",id:"",modifyAdress:"",modifyStory:"",modifyPerson:"",detailAdress:"",detailStory:"",detailPerson:"",isShow:!1,detailisShow:!1}},created:function(){var t=e("fxnj");t.config({debug:!1,appId:data.appid,timestamp:data.timestamp,nonceStr:data.noncestr,signature:data.signature,jsApiList:[]}),t.ready(function(){document.getElementById("musicAudio").setAttribute("src","http://www.170mv.com/kw/other.web.nf01.sycdn.kuwo.cn/resource/n3/61/60/2914044483.mp3"),document.getElementById("musicAudio").play()}),this.searchAll()},methods:{detail:function(t,s,e,a){this.detailisShow=!0,this.detailAdress=s,this.detailPerson=e,this.detailStory=a},close:function(){this.detailisShow=!1},modify:function(t,s,e,a){this.modifyAdress=t,this.modifyStory=s,this.modifyPerson=a,this.id=e,this.isShow=!0},confirmModify:function(){var t=this;this.$axios.get("/mongodb/updateOne",{params:{id:this.id,adress:this.modifyAdress,story:this.modifyStory,person:this.modifyPerson}}).then(function(s){1===s.data.n&&t.db.forEach(function(s){s._id===t.id&&(s.adress=t.modifyAdress,s.story=t.modifyStory,s.person=t.modifyPerson)})}).catch(function(t){console.log(t)}),this.isShow=!1},searchAll:function(){var t=this;this.$axios.get("/mongodb/find",{}).then(function(s){t.db=s.data}).catch(function(t){console.log(t)})},sure1:function(){var t=this;this.$axios.get("/mongodb/findAccess",{params:{adress:this.adressAll}}).then(function(s){t.db=s.data,t.adressAll=""}).catch(function(t){console.log(t)})},sure2:function(){var t=this;this.$axios.get("/mongodb/findOne",{params:{adress:this.adress}}).then(function(s){t.db=[],s.data&&(t.db.push(s.data),t.adress="")}).catch(function(t){console.log(t)})},add:function(){var t=this;this.$axios.get("/mongodb/insertOne",{params:{adress:this.addAdress,story:this.addStory,person:this.addWho}}).then(function(s){console.log(s),1===s.data.n&&(t.searchAll(),t.addAdress="",t.addStory="",t.addWho="")}).catch(function(t){console.log(t)})},deleteOne:function(t,s){var e=this;this.$axios.get("/mongodb/deleteOne",{params:{id:t}}).then(function(s){console.log(s),1===s.data.n&&(e.db=e.db.filter(function(s){return s._id!==t}))}).catch(function(t){console.log(t)})},remove:function(){var t=this;this.$axios.get("/mongodb/remove",{}).then(function(s){console.log(s),1===s.data.ok&&(t.db=[])}).catch(function(t){console.log(t)})}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"xrr"},[a("audio",{attrs:{src:" http://www.170mv.com/kw/other.web.nf01.sycdn.kuwo.cn/resource/n3/61/60/2914044483.mp3",loop:"loop",autoplay:"autoplay"}},[t._v("\n        Your browser does not support the audio element.\n    ")]),t._v(" "),a("p",{staticClass:"x0"},[t._v("你一定很好奇这是什么吧？")]),t._v(" "),a("p",{staticClass:"x1"},[t._v("请往下看...")]),t._v(" "),a("img",{attrs:{src:e("oRdj"),alt:""}}),t._v(" "),a("img",{staticClass:"dinner",attrs:{src:e("j0/j"),alt:""}}),t._v(" "),a("p",{staticClass:"x2"},[t._v("我们在一起的日子...")]),t._v(" "),a("img",{staticClass:"inter",attrs:{src:e("taH4"),alt:""}}),t._v(" "),a("p",{staticClass:"who"},[t._v("很怀念....")]),t._v(" "),a("p",{staticClass:"other"},[t._v("\n        啦啦啦...\n    ")]),t._v(" "),a("img",{staticClass:"dinner",attrs:{src:e("x0PV"),alt:""}}),t._v(" "),a("img",{staticClass:"dinner",attrs:{src:e("PvLr"),alt:""}}),t._v(" "),a("img",{staticClass:"dinner",attrs:{src:e("AG2A"),alt:""}}),t._v(" "),a("img",{staticClass:"dinner",attrs:{src:e("ZhP3"),alt:""}}),t._v(" "),a("img",{staticClass:"dinner last",attrs:{src:e("kwBH"),alt:""}}),t._v(" "),a("p",{staticClass:"x10"},[t._v("哈哈.....认识你很幸运，OY！！")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"former"},[t._v("\n        曾经的点滴...\n    ")]),t._v(" "),a("div",{staticClass:"addArea"},[t._v("\n        地点"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addAdress,expression:"addAdress"}],staticClass:"addAdress",attrs:{type:"text"},domProps:{value:t.addAdress},on:{input:function(s){s.target.composing||(t.addAdress=s.target.value)}}}),t._v(" "),a("br"),a("br"),t._v("\n        人物"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addWho,expression:"addWho"}],staticClass:"addWho",attrs:{type:"text"},domProps:{value:t.addWho},on:{input:function(s){s.target.composing||(t.addWho=s.target.value)}}}),t._v(" "),a("br"),a("br"),t._v("\n        故事"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addStory,expression:"addStory"}],staticClass:"addStory",attrs:{type:"text"},domProps:{value:t.addStory},on:{input:function(s){s.target.composing||(t.addStory=s.target.value)}}}),t._v(" "),a("br"),a("br"),t._v(" "),a("span",{staticClass:"sure3",on:{click:t.add}},[t._v("添加")])]),t._v(" "),a("table",{staticClass:"table"},[t._m(1),t._v(" "),t._l(t.db,function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(s.adress))]),t._v(" "),a("td",[t._v(t._s(s.story))]),t._v(" "),a("td",{staticClass:"operator"},[a("span",{on:{click:function(e){t.detail(s._id,s.adress,s.person,s.story)}}},[t._v("详情")]),t._v(" "),a("span",{on:{click:function(e){t.modify(s.adress,s.story,s._id,s.person)}}},[t._v("修改")]),t._v(" "),a("span",{on:{click:function(e){t.deleteOne(s._id)}}},[t._v("删除")])])])})],2),t._v(" "),0===t.db.length?a("div",{staticClass:"remind"},[t._v("暂无数据")]):t._e(),t._v(" "),a("div",{staticClass:"sure1",on:{click:t.searchAll}},[t._v("显示所有数据")]),a("br"),t._v(" "),a("div",{staticClass:"remove",on:{click:t.remove}},[t._v("删除所有数据")]),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.adress,expression:"adress"}],staticClass:"searchOne",attrs:{type:"text"},domProps:{value:t.adress},on:{input:function(s){s.target.composing||(t.adress=s.target.value)}}}),a("label",{staticClass:"personFirst"},[t._v("   按地点查询首条数据")]),a("span",{staticClass:"sure2",on:{click:t.sure2}},[t._v("确定")]),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.adressAll,expression:"adressAll"}],staticClass:"searchAll",attrs:{type:"text"},domProps:{value:t.adressAll},on:{input:function(s){s.target.composing||(t.adressAll=s.target.value)}}}),a("label",{staticClass:"personFirst"},[t._v("   按地点查询所有数据")]),a("span",{staticClass:"sure2",on:{click:t.sure1}},[t._v("确定")]),a("br"),a("br"),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"modifyTable"},[t._v("\n        地点"),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.modifyAdress,expression:"modifyAdress"}],staticClass:"addAdress",attrs:{type:"text"},domProps:{value:t.modifyAdress},on:{input:function(s){s.target.composing||(t.modifyAdress=s.target.value)}}}),t._v(" "),a("br"),a("br"),t._v("\n        人物"),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.modifyPerson,expression:"modifyPerson"}],staticClass:"addWho",attrs:{type:"text"},domProps:{value:t.modifyPerson},on:{input:function(s){s.target.composing||(t.modifyPerson=s.target.value)}}}),t._v(" "),a("br"),a("br"),t._v("\n        故事"),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.modifyStory,expression:"modifyStory"}],staticClass:"addStory",attrs:{type:"text"},domProps:{value:t.modifyStory},on:{input:function(s){s.target.composing||(t.modifyStory=s.target.value)}}}),t._v(" "),a("br"),a("br"),t._v(" "),a("p",{staticClass:"confirmModify",on:{click:t.confirmModify}},[t._v("修改")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.detailisShow,expression:"detailisShow"}],staticClass:"detail clearfix"},[a("p",[t._v("地点")]),t._v(" "),a("p",[t._v(t._s(t.detailAdress))]),a("br"),a("br"),t._v(" "),a("p",[t._v("人物")]),t._v(" "),a("p",[t._v(t._s(t.detailPerson))]),a("br"),a("br"),t._v(" "),a("p",[t._v("故事")]),t._v(" "),a("p",[t._v(t._s(t.detailStory))]),a("br"),a("br"),t._v(" "),a("span",{staticClass:"fr",on:{click:t.close}},[t._v("关闭")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"textArea"},[s("p",{staticClass:"extra"},[this._v("附:")]),this._v(" "),s("p",{staticClass:"homework"},[this._v("\n            希望你的每一天都快乐，要幸福\n        ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("th",{staticStyle:{width:"35%"}},[this._v("地点")]),this._v(" "),s("th",{staticStyle:{width:"35%"}},[this._v("故事")]),this._v(" "),s("th",{staticStyle:{width:"30%"}},[this._v("操作")])])}]};var c=e("VU/8")(r,d,!1,function(t){e("uL9S")},"data-v-520fcd8c",null).exports,l={name:"init",data:function(){return{person:""}},methods:{sure:function(){"万峰"===this.person?this.$router.push({path:"/zff"}):alert("输入错误")}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"init"},[e("div",{staticClass:"content"},[e("p",[t._v("我是谁?")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.person,expression:"person"}],attrs:{type:"text"},domProps:{value:t.person},on:{input:function(s){s.target.composing||(t.person=s.target.value)}}}),e("br"),t._v(" "),e("span",{on:{click:t.sure}},[t._v("确定")])])])},staticRenderFns:[]};var u=e("VU/8")(l,v,!1,function(t){e("VOuH")},"data-v-4b971414",null).exports;a.a.use(n.a);var p=new n.a({mode:"history",routes:[{path:"/",name:"init",component:u},{path:"/zff",name:"xrr",component:c}]}),m=e("mtWM"),f=e.n(m),h=e("EDgR"),_=e.n(h);e("Za00"),e("KhYh");a.a.config.productionTip=!1,a.a.prototype.$axios=f.a,_()(),new a.a({el:"#app",router:p,components:{App:o},template:"<App/>"})},PvLr:function(t,s,e){t.exports=e.p+"static/img/3.eb76ca8.jpeg"},VOuH:function(t,s){},Za00:function(t,s){},ZhP3:function(t,s,e){t.exports=e.p+"static/img/5.b529cce.jpeg"},"j0/j":function(t,s,e){t.exports=e.p+"static/img/1.70b2d96.jpeg"},kwBH:function(t,s,e){t.exports=e.p+"static/img/6.09d3aac.jpeg"},oRdj:function(t,s,e){t.exports=e.p+"static/img/pointer.f88c117.gif"},taH4:function(t,s,e){t.exports=e.p+"static/img/inter.00cd296.gif"},uL9S:function(t,s){},x0PV:function(t,s,e){t.exports=e.p+"static/img/2.6532a03.jpeg"},ymcE:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.a1126ba89d2f6b4ced1b.js.map