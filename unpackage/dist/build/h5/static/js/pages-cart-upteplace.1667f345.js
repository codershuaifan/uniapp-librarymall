(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cart-upteplace"],{3435:function(a,t,e){"use strict";e.r(t);var i=e("789b"),n=e("8970");for(var c in n)"default"!==c&&function(a){e.d(t,a,(function(){return n[a]}))}(c);e("ad4d");var s,r=e("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"c87fcd7a",null,!1,i["a"],s);t["default"]=o.exports},"5fcd":function(a,t,e){var i=e("c440");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("4dcf6b92",i,!0,{sourceMap:!1,shadowMode:!1})},"789b":function(a,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return i}));var i={uSwitch:e("527a").default,uIcon:e("b3fc").default,uPicker:e("5eea").default},n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[a._v("收货人")]),e("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写收货人姓名"},model:{value:a.name,callback:function(t){a.name=t},expression:"name"}})],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"left"},[a._v("手机号码")]),e("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写收货人手机号"},model:{value:a.number,callback:function(t){a.number=t},expression:"number"}})],1),e("v-uni-view",{staticClass:"item",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showRegionPicker.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"left"},[a._v("所在地区")]),e("v-uni-input",{attrs:{disabled:!0,type:"text","placeholder-class":"line",placeholder:"省市区县、乡镇等"},model:{value:a.area,callback:function(t){a.area=t},expression:"area"}})],1),e("v-uni-view",{staticClass:"item address"},[e("v-uni-view",{staticClass:"left"},[a._v("详细地址")]),e("v-uni-textarea",{attrs:{type:"text","placeholder-class":"line",placeholder:"街道、楼牌等"},model:{value:a.detail,callback:function(t){a.detail=t},expression:"detail"}})],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"default"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"set"},[a._v("设置默认地址")]),e("v-uni-view",{staticClass:"tips"},[a._v("提醒：每次下单会默认推荐该地址")])],1),e("v-uni-view",{staticClass:"right"},[e("u-switch",{attrs:{color:"red"},model:{value:a.checked,callback:function(t){a.checked=t},expression:"checked"}})],1)],1)],1),e("v-uni-view",{staticClass:"addSite",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.uptedata.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"add"},[e("u-icon",{staticClass:"icon",attrs:{name:"plus",color:"#ffffff",size:30}}),a._v("更新地址")],1)],1),e("u-picker",{ref:"uPicker",attrs:{mode:"region",params:a.params},on:{confirm:function(t){arguments[0]=t=a.$handleEvent(t),a.confirm.apply(void 0,arguments)}},model:{value:a.show,callback:function(t){a.show=t},expression:"show"}})],1)},c=[]},8970:function(a,t,e){"use strict";e.r(t);var i=e("9e94"),n=e.n(i);for(var c in i)"default"!==c&&function(a){e.d(t,a,(function(){return i[a]}))}(c);t["default"]=n.a},"9e94":function(a,t,e){"use strict";(function(a){var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("96cf");var n=i(e("1da1")),c={data:function(){return{name:"",number:null,detail:"",checked:!1,area:"",show:!1,params:{province:!0,city:!0,area:!0},paramsres:{},past:{}}},methods:{setDefault:function(){},showRegionPicker:function(){this.show=!0},confirm:function(t){this.area="",this.paramsres=t,this.area=this.paramsres.province.label+this.paramsres.city.label+this.paramsres.area.label,a.log(this.paramsres)},uptedata:function(){var a=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={name:a.name,phone:a.number,address:a.detail,province:a.paramsres.province.label,city:a.paramsres.city.label,county:a.paramsres.area.label},!0===a.checked?e.is_default=1:e.is_default=0,t.next=4,a.$u.api.upteplace(a.past.id,e);case 4:a.$u.route({type:"reLaunch",url:"pages/cart/place"}),a.$u.toast("更新地址成功");case 6:case"end":return t.stop()}}),t)})))()}},onLoad:function(){var t=uni.getStorageSync("pastdata");t&&(this.past=t),this.name=this.past.name,this.number=this.past.phone,this.detail=this.past.address,1===this.past.is_default&&(this.checked=!0),a.log(this.past)}};t.default=c}).call(this,e("5a52")["default"])},ad4d:function(a,t,e){"use strict";var i=e("5fcd"),n=e.n(i);n.a},c440:function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */[data-v-c87fcd7a] .line{color:#c0c4cc;font-size:%?28?%}.wrap[data-v-c87fcd7a]{background-color:#f2f2f2}.wrap .top[data-v-c87fcd7a]{background-color:#fff;border-top:solid %?2?% #e4e7ed;padding:%?22?%}.wrap .top .item[data-v-c87fcd7a]{display:flex;font-size:%?32?%;line-height:%?100?%;align-items:center;border-bottom:solid %?2?% #e4e7ed}.wrap .top .item .left[data-v-c87fcd7a]{width:%?180?%}.wrap .top .item uni-input[data-v-c87fcd7a]{text-align:left}.wrap .top .address[data-v-c87fcd7a]{padding:%?20?% 0}.wrap .top .address uni-textarea[data-v-c87fcd7a]{height:%?150?%;background-color:#f7f7f7;line-height:%?60?%;margin:%?40?% auto;padding:%?20?%}.wrap .top .site-clipboard[data-v-c87fcd7a]{padding-right:%?40?%}.wrap .top .site-clipboard uni-textarea[data-v-c87fcd7a]{height:%?150?%;background-color:#f7f7f7;line-height:%?60?%;margin:%?40?% auto;padding:%?20?%}.wrap .top .site-clipboard .clipboard[data-v-c87fcd7a]{display:flex;justify-content:center;align-items:center;font-size:%?26?%;color:#909399;height:%?80?%}.wrap .top .site-clipboard .clipboard .icon[data-v-c87fcd7a]{margin-top:%?6?%;margin-left:%?10?%}.wrap .bottom[data-v-c87fcd7a]{margin-top:%?20?%;padding:%?40?%;padding-right:0;background-color:#fff;font-size:%?28?%}.wrap .bottom .tag[data-v-c87fcd7a]{display:flex}.wrap .bottom .tag .left[data-v-c87fcd7a]{width:%?160?%}.wrap .bottom .tag .right[data-v-c87fcd7a]{display:flex;flex-wrap:wrap}.wrap .bottom .tag .right .tags[data-v-c87fcd7a]{width:%?140?%;padding:%?16?% %?8?%;border:solid %?2?% #e4e7ed;text-align:center;border-radius:%?50?%;margin:0 %?10?% %?20?%;display:flex;font-size:%?28?%;align-items:center;justify-content:center;color:#606266;line-height:1}.wrap .bottom .default[data-v-c87fcd7a]{margin-top:%?50?%;display:flex;justify-content:space-between;border-bottom:solid %?2?% #e4e7ed;line-height:%?64?%}.wrap .bottom .default .tips[data-v-c87fcd7a]{font-size:%?24?%}.addSite[data-v-c87fcd7a]{display:flex;justify-content:space-around;width:%?600?%;line-height:%?100?%;position:absolute;bottom:%?30?%;left:%?80?%;background-color:orange;border-radius:%?60?%;font-size:%?30?%}.addSite .add[data-v-c87fcd7a]{display:flex;align-items:center;color:#fff}.addSite .add .icon[data-v-c87fcd7a]{margin-right:%?10?%}',""]),a.exports=t}}]);