webpackJsonp([1],{AG2A:function(t,e,a){t.exports=a.p+"static/img/4.4f27c0b.jpeg"},EDgR:function(t,e){function a(t,e){var a=document.getElementsByTagName("html")[0],s=document.body.clientWidth||document.documentElement.clientWidth;a.style.fontSize=s/t*e+"px"}t.exports=function(){window.onload=function(){a(1920,80)},a(1920,80)},window.onresize=function(){a(1920,80)}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("ymcE")},null,null).exports,o=a("/ocq"),c={name:"xrr",data:function(){return{db:[],age:"",addName:"",addAge:"",ageAll:"",id:"",modifyName:"",modifyAge:"",isShow:!1}},created:function(){this.searchAll()},methods:{modify:function(t,e,a){this.modifyName=t,this.modifyAge=e,this.id=a,this.isShow=!0},confirmModify:function(){var t=this;this.$axios.get("/mongodb/updateOne",{params:{id:this.id,name:this.modifyName,age:this.modifyAge}}).then(function(e){1===e.data.n&&t.searchAll()}).catch(function(t){console.log(t)}),this.isShow=!1},searchAll:function(){var t=this;this.$axios.get("/mongodb/find",{}).then(function(e){t.db=e.data,t.age=""}).catch(function(t){console.log(t)})},sure1:function(){var t=this;this.$axios.get("/mongodb/findAccess",{params:{age:this.ageAll}}).then(function(e){t.db=e.data,t.ageAll=""}).catch(function(t){console.log(t)})},sure2:function(){var t=this;this.$axios.get("/mongodb/findOne",{params:{age:this.age}}).then(function(e){t.db=[],e.data&&(t.db.push(e.data),t.age="")}).catch(function(t){console.log(t)})},add:function(){var t=this;this.$axios.get("/mongodb/insertOne",{params:{name:this.addName,age:this.addAge}}).then(function(e){console.log(e),1===e.data.n&&(t.searchAll(),t.addName="",t.addAge="")}).catch(function(t){console.log(t)})},deleteOne:function(t){var e=this;this.$axios.get("/mongodb/deleteOne",{params:{id:t}}).then(function(t){console.log(t),1===t.data.n&&e.searchAll()}).catch(function(t){console.log(t)})},remove:function(){var t=this;this.$axios.get("/mongodb/remove",{}).then(function(e){console.log(e),8===e.data.n&&t.searchAll()}).catch(function(t){console.log(t)})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"xrr"},[s("audio",{attrs:{src:"http://www.ytmp3.cn/down/50494.mp3",loop:"loop",autoplay:"autoplay"}},[t._v("\n        Your browser does not support the audio element.\n    ")]),t._v(" "),s("p",{staticClass:"x0"},[t._v("你一定很好奇这是什么吧？")]),t._v(" "),s("p",{staticClass:"x1"},[t._v("请往下看...")]),t._v(" "),s("img",{attrs:{src:a("oRdj"),alt:""}}),t._v(" "),s("img",{staticClass:"dinner",attrs:{src:a("j0/j"),alt:""}}),t._v(" "),s("p",{staticClass:"x2"},[t._v("我们在一起的日子...")]),t._v(" "),s("img",{staticClass:"inter",attrs:{src:a("taH4"),alt:""}}),t._v(" "),s("p",{staticClass:"who"},[t._v("很怀念....")]),t._v(" "),s("p",{staticClass:"other"},[t._v("\n        啦啦啦...\n    ")]),t._v(" "),s("img",{staticClass:"dinner",attrs:{src:a("x0PV"),alt:""}}),t._v(" "),s("img",{staticClass:"dinner",attrs:{src:a("PvLr"),alt:""}}),t._v(" "),s("img",{staticClass:"dinner",attrs:{src:a("AG2A"),alt:""}}),t._v(" "),s("img",{staticClass:"dinner",attrs:{src:a("ZhP3"),alt:""}}),t._v(" "),s("img",{staticClass:"dinner last",attrs:{src:a("kwBH"),alt:""}}),t._v(" "),s("p",{staticClass:"x10"},[t._v("哈哈.....认识你很幸运，OY！！")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"sure1",on:{click:t.searchAll}},[t._v("显示所有数据")]),s("br"),t._v(" "),s("div",{staticClass:"remove",on:{click:t.remove}},[t._v("删除所有数据")]),s("br"),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],staticClass:"searchOne",attrs:{type:"text"},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}}),s("label",{staticClass:"ageFirst"},[t._v("按年龄查询首条数据")]),s("span",{staticClass:"sure2",on:{click:t.sure2}},[t._v("确定")]),s("br"),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ageAll,expression:"ageAll"}],staticClass:"searchAll",attrs:{type:"text"},domProps:{value:t.ageAll},on:{input:function(e){e.target.composing||(t.ageAll=e.target.value)}}}),s("label",{staticClass:"ageFirst"},[t._v("按年龄查询所有数据")]),s("span",{staticClass:"sure2",on:{click:t.sure1}},[t._v("确定")]),s("br"),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.addName,expression:"addName"}],staticClass:"addName",attrs:{type:"text"},domProps:{value:t.addName},on:{input:function(e){e.target.composing||(t.addName=e.target.value)}}}),t._v("姓名 "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.addAge,expression:"addAge"}],staticClass:"addAge",attrs:{type:"text"},domProps:{value:t.addAge},on:{input:function(e){e.target.composing||(t.addAge=e.target.value)}}}),t._v("年龄  "),s("span",{staticClass:"sure3",on:{click:t.add}},[t._v("添加")]),t._v(" "),s("table",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"modifyTable"},[s("tr",[s("th",[t._v("姓名")]),t._v(" "),s("th",[t._v("年龄")]),t._v(" "),s("th",{attrs:{rowspan:"2"},on:{click:t.confirmModify}},[t._v("修改")])]),t._v(" "),s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.modifyName,expression:"modifyName"}],attrs:{type:"text"},domProps:{value:t.modifyName},on:{input:function(e){e.target.composing||(t.modifyName=e.target.value)}}})]),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.modifyAge,expression:"modifyAge"}],attrs:{type:"text"},domProps:{value:t.modifyAge},on:{input:function(e){e.target.composing||(t.modifyAge=e.target.value)}}})])])]),t._v(" "),s("table",{staticClass:"table"},[t._m(1),t._v(" "),t._l(t.db,function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.age))]),t._v(" "),s("td",{staticClass:"operator"},[s("span",{on:{click:function(a){t.modify(e.name,e.age,e._id)}}},[t._v("修改")]),t._v(" "),s("span",{on:{click:function(a){t.deleteOne(e._id)}}},[t._v("删除")])])])})],2),t._v(" "),0===t.db.length?s("div",{staticClass:"remind"},[t._v("暂无数据")]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"textArea"},[e("p",{staticClass:"extra"},[this._v("附:")]),this._v(" "),e("p",{staticClass:"homework"},[this._v("\n            希望你的每一天都快乐，要幸福\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{staticStyle:{width:"30%"}},[this._v("姓名")]),this._v(" "),e("th",{staticStyle:{width:"30%"}},[this._v("年龄")]),this._v(" "),e("th",{staticStyle:{width:"40%"}},[this._v("操作")])])}]};var l=a("VU/8")(c,r,!1,function(t){a("bwJi")},"data-v-56332986",null).exports;s.a.use(o.a);var d=new o.a({mode:"history",routes:[{path:"/",name:"xrr",component:l}]}),m=a("mtWM"),v=a.n(m),u=a("EDgR"),p=a.n(u);a("Za00");s.a.config.productionTip=!1,s.a.prototype.$axios=v.a,p()(),new s.a({el:"#app",router:d,components:{App:n},template:"<App/>"})},PvLr:function(t,e,a){t.exports=a.p+"static/img/3.eb76ca8.jpeg"},Za00:function(t,e){},ZhP3:function(t,e,a){t.exports=a.p+"static/img/5.b529cce.jpeg"},bwJi:function(t,e){},"j0/j":function(t,e,a){t.exports=a.p+"static/img/1.70b2d96.jpeg"},kwBH:function(t,e,a){t.exports=a.p+"static/img/6.09d3aac.jpeg"},oRdj:function(t,e,a){t.exports=a.p+"static/img/pointer.f88c117.gif"},taH4:function(t,e,a){t.exports=a.p+"static/img/inter.00cd296.gif"},x0PV:function(t,e,a){t.exports=a.p+"static/img/2.6532a03.jpeg"},ymcE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8456b25cdf5913b74df2.js.map