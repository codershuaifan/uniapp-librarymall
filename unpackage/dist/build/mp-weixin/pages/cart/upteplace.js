(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/upteplace"],{"32c7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,a,r,u,i){try{var c=e[u](i),s=c.value}catch(o){return void n(o)}c.done?t(s):Promise.resolve(s).then(a,r)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function c(e){u(i,a,r,c,s,"next",e)}function s(e){u(i,a,r,c,s,"throw",e)}c(void 0)}))}}var c={data:function(){return{name:"",number:null,detail:"",checked:!1,area:"",show:!1,params:{province:!0,city:!0,area:!0},paramsres:{},past:{}}},methods:{setDefault:function(){},showRegionPicker:function(){this.show=!0},confirm:function(e){this.area="",this.paramsres=e,this.area=this.paramsres.province.label+this.paramsres.city.label+this.paramsres.area.label,console.log(this.paramsres)},uptedata:function(){var e=this;return i(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={name:e.name,phone:e.number,address:e.detail,province:e.paramsres.province.label,city:e.paramsres.city.label,county:e.paramsres.area.label},!0===e.checked?n.is_default=1:n.is_default=0,t.next=4,e.$u.api.upteplace(e.past.id,n);case 4:e.$u.route({type:"reLaunch",url:"pages/cart/place"}),e.$u.toast("更新地址成功");case 6:case"end":return t.stop()}}),t)})))()}},onLoad:function(){var t=e.getStorageSync("pastdata");t&&(this.past=t),this.name=this.past.name,this.number=this.past.phone,this.detail=this.past.address,1===this.past.is_default&&(this.checked=!0),console.log(this.past)}};t.default=c}).call(this,n("543d")["default"])},3435:function(e,t,n){"use strict";n.r(t);var a=n("adc7"),r=n("8970");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("639b");var i,c=n("f0c5"),s=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"50e358cf",null,!1,a["a"],i);t["default"]=s.exports},"639b":function(e,t,n){"use strict";var a=n("abc3"),r=n.n(a);r.a},8970:function(e,t,n){"use strict";n.r(t);var a=n("32c7"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},a68f:function(e,t,n){"use strict";(function(e){n("2ed8");a(n("66fd"));var t=a(n("3435"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},abc3:function(e,t,n){},adc7:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={uSwitch:function(){return n.e("uview-ui/components/u-switch/u-switch").then(n.bind(null,"527a"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"b3fc"))},uPicker:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-picker/u-picker")]).then(n.bind(null,"5eea"))}},r=function(){var e=this,t=e.$createElement;e._self._c},u=[]}},[["a68f","common/runtime","common/vendor"]]]);