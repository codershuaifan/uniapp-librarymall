(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{"040a":function(e,c,i){var t=i("61b0");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var n=i("4f06").default;n("18070320",t,!0,{sourceMap:!1,shadowMode:!1})},"0726":function(e,c,i){var t=i("24fb");c=t(!1),c.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-search[data-v-13f672b9]{\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;flex:1}.u-content[data-v-13f672b9]{\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;padding:0 %?18?%;flex:1}.u-clear-icon[data-v-13f672b9]{\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center}.u-input[data-v-13f672b9]{flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-13f672b9]{width:%?40?%;height:100%;\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-13f672b9]{color:#909399}.u-action[data-v-13f672b9]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-13f672b9]{width:%?80?%;margin-left:%?10?%}',""]),e.exports=c},"0cf3":function(e,c,i){"use strict";i.d(c,"b",(function(){return n})),i.d(c,"c",(function(){return o})),i.d(c,"a",(function(){return t}));var t={uIcon:i("b3fc").default},n=function(){var e=this,c=e.$createElement,i=e._self._c||c;return i("v-uni-view",{staticClass:"u-search",style:{margin:e.margin},on:{click:function(c){arguments[0]=c=e.$handleEvent(c),e.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-content",style:{backgroundColor:e.bgColor,borderRadius:"round"==e.shape?"100rpx":"10rpx",border:e.borderStyle,height:e.height+"rpx"}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:e.searchIcon,color:e.searchIconColor?e.searchIconColor:e.color}})],1),i("v-uni-input",{staticClass:"u-input",style:[{textAlign:e.inputAlign,color:e.color,backgroundColor:e.bgColor},e.inputStyle],attrs:{"confirm-type":"search",value:e.value,disabled:e.disabled,focus:e.focus,maxlength:e.maxlength,"placeholder-class":"u-placeholder-class",placeholder:e.placeholder,"placeholder-style":"color: "+e.placeholderColor,type:"text"},on:{blur:function(c){arguments[0]=c=e.$handleEvent(c),e.blur.apply(void 0,arguments)},confirm:function(c){arguments[0]=c=e.$handleEvent(c),e.search.apply(void 0,arguments)},input:function(c){arguments[0]=c=e.$handleEvent(c),e.inputChange.apply(void 0,arguments)},focus:function(c){arguments[0]=c=e.$handleEvent(c),e.getFocus.apply(void 0,arguments)}}}),e.keyword&&e.clearabled&&e.focused?i("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(c){arguments[0]=c=e.$handleEvent(c),e.clear.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):e._e()],1),i("v-uni-view",{staticClass:"u-action",class:[e.showActionBtn||e.show?"u-action-active":""],style:[e.actionStyle],on:{click:function(c){c.stopPropagation(),c.preventDefault(),arguments[0]=c=e.$handleEvent(c),e.custom.apply(void 0,arguments)}}},[e._v(e._s(e.actionText))])],1)},o=[]},"15d3":function(e,c,i){"use strict";i.d(c,"b",(function(){return n})),i.d(c,"c",(function(){return o})),i.d(c,"a",(function(){return t}));var t={uIcon:i("b3fc").default},n=function(){var e=this,c=e.$createElement,i=e._self._c||c;return e.show?i("v-uni-view",{staticClass:"u-empty",style:{marginTop:e.marginTop+"rpx"}},[i("u-icon",{attrs:{name:e.src?e.src:"empty-"+e.mode,"custom-style":e.iconStyle,label:e.text?e.text:e.icons[e.mode],"label-pos":"bottom","label-color":e.color,"label-size":e.fontSize,size:e.iconSize,color:e.iconColor,"margin-top":"14"}}),i("v-uni-view",{staticClass:"u-slot-wrap"},[e._t("bottom")],2)],1):e._e()},o=[]},3619:function(e,c,i){var t=i("3875");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var n=i("4f06").default;n("d6ae6076",t,!0,{sourceMap:!1,shadowMode:!1})},3875:function(e,c,i){var t=i("24fb");c=t(!1),c.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-empty[data-v-27d61a1e]{\r\ndisplay:flex;flex-direction:row;\r\nflex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-27d61a1e]{margin-bottom:%?20?%}.u-slot-wrap[data-v-27d61a1e]{\r\ndisplay:flex;flex-direction:row;\r\njustify-content:center;align-items:center;margin-top:%?20?%}',""]),e.exports=c},"3a38":function(e,c,i){"use strict";i("a9e3"),Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var t={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(e){this.$emit("input",e),this.$emit("change",e)},value:{immediate:!0,handler:function(e){this.keyword=e}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(e){this.keyword=e.detail.value},clear:function(){var e=this;this.keyword="",this.$nextTick((function(){e.$emit("clear")}))},search:function(e){this.$emit("search",e.detail.value);try{uni.hideKeyboard()}catch(e){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(e){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var e=this;setTimeout((function(){e.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};c.default=t},4290:function(e,c,i){"use strict";i("a9e3"),Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var t={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};c.default=t},"61b0":function(e,c,i){var t=i("24fb");c=t(!1),c.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-wrap[data-v-1c769884]{height:calc(100vh);height:calc(100vh - var(--window-top));display:flex;flex-direction:column}.u-search-box[data-v-1c769884]{padding:%?18?% %?30?%}.u-menu-wrap[data-v-1c769884]{flex:1;display:flex;overflow:hidden}.u-search-text[data-v-1c769884]{font-size:%?26?%;color:#909399;margin-left:%?10?%}.u-tab-view[data-v-1c769884]{width:%?200?%;height:100%}.u-tab-item[data-v-1c769884]{height:%?110?%;background:#f6f6f6;box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-size:%?26?%;color:#444;font-weight:400;line-height:1}.u-tab-item-active[data-v-1c769884]{position:relative;color:#000;font-size:%?30?%;font-weight:600;background:#fff}.u-tab-item-active[data-v-1c769884]::before{content:"";position:absolute;border-left:4px solid #2979ff;height:%?32?%;left:0;top:%?39?%}.u-tab-view[data-v-1c769884]{height:100%}.right-box[data-v-1c769884]{background-color:#fafafa}.page-view[data-v-1c769884]{padding:%?16?%}.class-item[data-v-1c769884]{margin-bottom:%?30?%;background-color:#fff;padding:%?16?%;border-radius:%?8?%}.item-title[data-v-1c769884]{font-size:%?26?%;color:#303133;font-weight:700}.item-menu-name[data-v-1c769884]{font-weight:400;font-size:%?24?%;color:#303133}.item-container[data-v-1c769884]{display:flex;flex-wrap:wrap}.thumb-box[data-v-1c769884]{width:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:%?20?%}.item-menu-image[data-v-1c769884]{width:%?200?%;height:%?200?%}',""]),e.exports=c},6264:function(e,c,i){"use strict";var t=i("3619"),n=i.n(t);n.a},"65b8":function(e,c,i){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var t=[{name:"女装",foods:[{name:"A字裙",key:"A字裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/1.jpg",cat:10},{name:"T恤",key:"T恤",icon:"https://cdn.uviewui.com/uview/common/classify/1/2.jpg",cat:10},{name:"半身裙",key:"半身裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/3.jpg",cat:10},{name:"衬衫",key:"衬衫",icon:"https://cdn.uviewui.com/uview/common/classify/1/4.jpg",cat:10},{name:"短裙",key:"短裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/5.jpg",cat:10},{name:"阔腿裤",key:"阔腿裤",icon:"https://cdn.uviewui.com/uview/common/classify/1/6.jpg",cat:10},{name:"连衣裙",key:"连衣裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/7.jpg",cat:10},{name:"妈妈装",key:"妈妈装",icon:"https://cdn.uviewui.com/uview/common/classify/1/8.jpg",cat:10},{name:"牛仔裤",key:"牛仔裤",icon:"https://cdn.uviewui.com/uview/common/classify/1/9.jpg",cat:10},{name:"情侣装",key:"情侣装",icon:"https://cdn.uviewui.com/uview/common/classify/1/10.jpg",cat:10},{name:"休闲裤",key:"休闲裤",icon:"https://cdn.uviewui.com/uview/common/classify/1/11.jpg",cat:10},{name:"雪纺衫",key:"雪纺衫",icon:"https://cdn.uviewui.com/uview/common/classify/1/12.jpg",cat:10},{name:"防晒衣",key:"防晒衣",icon:"https://cdn.uviewui.com/uview/common/classify/1/13.jpg",cat:10},{name:"礼服/婚纱",key:"礼服婚纱",icon:"https://cdn.uviewui.com/uview/common/classify/1/14.jpg",cat:10}]},{name:"美食",foods:[{name:"火锅",key:"火锅",icon:"https://cdn.uviewui.com/uview/common/classify/2/1.jpg",cat:6},{name:"糕点饼干",key:"糕点饼干",icon:"https://cdn.uviewui.com/uview/common/classify/2/2.jpg",cat:6},{name:"坚果果干",key:"坚果果干",icon:"https://cdn.uviewui.com/uview/common/classify/2/3.jpg",cat:6},{name:"酒类",key:"酒类",icon:"https://cdn.uviewui.com/uview/common/classify/2/4.jpg",cat:6},{name:"辣条",key:"辣条",icon:"https://cdn.uviewui.com/uview/common/classify/2/5.jpg",cat:6},{name:"大礼包",key:"大礼包",icon:"https://cdn.uviewui.com/uview/common/classify/2/6.jpg",cat:6},{name:"精品茗茶",key:"茶",icon:"https://cdn.uviewui.com/uview/common/classify/2/7.jpg",cat:6},{name:"休闲食品",key:"休闲食品",icon:"https://cdn.uviewui.com/uview/common/classify/2/8.jpg",cat:6},{name:"糖果巧克力",key:"糖果巧克力",icon:"https://cdn.uviewui.com/uview/common/classify/2/9.jpg",cat:6},{name:"方便速食",key:"方便速食",icon:"https://cdn.uviewui.com/uview/common/classify/2/10.jpg",cat:6},{name:"营养代餐",key:"营养代餐",icon:"https://cdn.uviewui.com/uview/common/classify/2/11.jpg",cat:6},{name:"粮油副食",key:"粮油",icon:"https://cdn.uviewui.com/uview/common/classify/2/12.jpg",cat:6},{name:"生鲜水果",key:"水果",icon:"https://cdn.uviewui.com/uview/common/classify/2/13.jpg",cat:6},{name:"饮品",key:"饮品",icon:"https://cdn.uviewui.com/uview/common/classify/2/14.jpg",cat:6}]},{name:"美妆",foods:[{name:"化妆刷",key:"化妆刷",icon:"https://cdn.uviewui.com/uview/common/classify/3/1.jpg",cat:3},{name:"粉底",key:"粉底",icon:"https://cdn.uviewui.com/uview/common/classify/3/2.jpg",cat:3},{name:"洗发护发",key:"洗发护发",icon:"https://cdn.uviewui.com/uview/common/classify/3/3.jpg",cat:3},{name:"美容工具",key:"美容工具",icon:"https://cdn.uviewui.com/uview/common/classify/3/4.jpg",cat:3},{name:"眼部护理",key:"眼部护理",icon:"https://cdn.uviewui.com/uview/common/classify/3/5.jpg",cat:3},{name:"眉妆",key:"眉妆",icon:"https://cdn.uviewui.com/uview/common/classify/3/6.jpg",cat:3},{name:"卸妆品",key:"卸妆品",icon:"https://cdn.uviewui.com/uview/common/classify/3/7.jpg",cat:3},{name:"基础护肤",key:"基础护肤",icon:"https://cdn.uviewui.com/uview/common/classify/3/8.jpg",cat:3},{name:"眼妆",key:"眼妆",icon:"https://cdn.uviewui.com/uview/common/classify/3/9.jpg",cat:3},{name:"唇妆",key:"唇妆",icon:"https://cdn.uviewui.com/uview/common/classify/3/10.jpg",cat:3},{name:"面膜",key:"面膜",icon:"https://cdn.uviewui.com/uview/common/classify/3/11.jpg",cat:3},{name:"沐浴用品",key:"沐浴用品",icon:"https://cdn.uviewui.com/uview/common/classify/3/12.jpg",cat:3},{name:"护肤套装",key:"护肤套装",icon:"https://cdn.uviewui.com/uview/common/classify/3/13.jpg",cat:3},{name:"防晒品",key:"防晒品",icon:"https://cdn.uviewui.com/uview/common/classify/3/14.jpg",cat:3},{name:"美甲",key:"美甲",icon:"https://cdn.uviewui.com/uview/common/classify/3/15.jpg",cat:3}]},{name:"居家日用",foods:[{name:"垃圾袋",key:"垃圾袋",icon:"https://cdn.uviewui.com/uview/common/classify/4/1.jpg",cat:4},{name:"纸巾",key:"纸巾",icon:"https://cdn.uviewui.com/uview/common/classify/4/2.jpg",cat:4},{name:"驱蚊用品",key:"驱蚊用品",icon:"https://cdn.uviewui.com/uview/common/classify/4/3.jpg",cat:4},{name:"收纳神器",key:"收纳神器",icon:"https://cdn.uviewui.com/uview/common/classify/4/4.jpg",cat:4},{name:"厨房用品",key:"厨房用品",icon:"https://cdn.uviewui.com/uview/common/classify/4/5.jpg",cat:4},{name:"厨房烹饪",key:"烹饪",icon:"https://cdn.uviewui.com/uview/common/classify/4/6.jpg",cat:4},{name:"衣物晾晒",key:"衣物晾晒",icon:"https://cdn.uviewui.com/uview/common/classify/4/7.jpg",cat:4},{name:"衣物护理",key:"衣物护理",icon:"https://cdn.uviewui.com/uview/common/classify/4/8.jpg",cat:4},{name:"宠物用品",key:"宠物用品",icon:"https://cdn.uviewui.com/uview/common/classify/4/9.jpg",cat:4},{name:"医药保健",key:"医药",icon:"https://cdn.uviewui.com/uview/common/classify/4/10.jpg",cat:4},{name:"日用百货",key:"百货",icon:"https://cdn.uviewui.com/uview/common/classify/4/11.jpg",cat:4},{name:"清洁用品",key:"清洁",icon:"https://cdn.uviewui.com/uview/common/classify/4/12.jpg",cat:4},{name:"绿植园艺",key:"绿植",icon:"https://cdn.uviewui.com/uview/common/classify/4/13.jpg",cat:4}]},{name:"男装",foods:[{name:"爸爸装",key:"爸爸装",icon:"https://cdn.uviewui.com/uview/common/classify/5/1.jpg",cat:12},{name:"牛仔裤",key:"牛仔裤",icon:"https://cdn.uviewui.com/uview/common/classify/5/2.jpg",cat:12},{name:"衬衫",key:"衬衫",icon:"https://cdn.uviewui.com/uview/common/classify/5/3.jpg",cat:12},{name:"休闲裤",key:"休闲裤",icon:"https://cdn.uviewui.com/uview/common/classify/5/4.jpg",cat:12},{name:"外套",key:"外套",icon:"https://cdn.uviewui.com/uview/common/classify/5/5.jpg",cat:12},{name:"T恤",key:"T恤",icon:"https://cdn.uviewui.com/uview/common/classify/5/6.jpg",cat:12},{name:"套装",key:"套装",icon:"https://cdn.uviewui.com/uview/common/classify/5/7.jpg",cat:12},{name:"运动裤",key:"运动裤",icon:"https://cdn.uviewui.com/uview/common/classify/5/8.jpg",cat:12},{name:"马甲/背心",key:"马甲背心",icon:"https://cdn.uviewui.com/uview/common/classify/5/9.jpg",cat:12},{name:"POLO衫",key:"POLO衫",icon:"https://cdn.uviewui.com/uview/common/classify/5/10.jpg",cat:12},{name:"商务装",key:"商务装",icon:"https://cdn.uviewui.com/uview/common/classify/5/11.jpg",cat:12}]},{name:"鞋品",foods:[{name:"单鞋",key:"单鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/1.jpg",cat:5},{name:"皮鞋",key:"皮鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/2.jpg",cat:5},{name:"帆布鞋",key:"帆布鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/3.jpg",cat:5},{name:"北京老布鞋",key:"北京老布鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/4.jpg",cat:5},{name:"运动鞋",key:"运动鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/5.jpg",cat:5},{name:"拖鞋",key:"拖鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/6.jpg",cat:5},{name:"凉鞋",key:"凉鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/7.jpg",cat:5},{name:"休闲鞋",key:"休闲鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/8.jpg",cat:5},{name:"高跟鞋",key:"高跟鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/9.jpg",cat:5},{name:"老人鞋",key:"老人鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/10.jpg",cat:5},{name:"懒人鞋",key:"懒人鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/11.jpg",cat:5}]},{name:"数码家电",foods:[{name:"数据线",key:"数据线",icon:"https://cdn.uviewui.com/uview/common/classify/7/1.jpg",cat:8},{name:"耳机",key:"耳机",icon:"https://cdn.uviewui.com/uview/common/classify/7/2.jpg",cat:8},{name:"生活家电",key:"家电",icon:"https://cdn.uviewui.com/uview/common/classify/7/3.jpg",cat:8},{name:"电风扇",key:"电风扇",icon:"https://cdn.uviewui.com/uview/common/classify/7/4.jpg",cat:8},{name:"电吹风",key:"电吹风",icon:"https://cdn.uviewui.com/uview/common/classify/7/5.jpg",cat:8},{name:"手机壳",key:"手机壳",icon:"https://cdn.uviewui.com/uview/common/classify/7/6.jpg",cat:8},{name:"榨汁机",key:"榨汁机",icon:"https://cdn.uviewui.com/uview/common/classify/7/7.jpg",cat:8},{name:"小家电",key:"小家电",icon:"https://cdn.uviewui.com/uview/common/classify/7/8.jpg",cat:8},{name:"数码电子",key:"数码",icon:"https://cdn.uviewui.com/uview/common/classify/7/9.jpg",cat:8},{name:"电饭锅",key:"电饭锅",icon:"https://cdn.uviewui.com/uview/common/classify/7/10.jpg",cat:8},{name:"手机支架",key:"手机支架",icon:"https://cdn.uviewui.com/uview/common/classify/7/11.jpg",cat:8},{name:"剃须刀",key:"剃须刀",icon:"https://cdn.uviewui.com/uview/common/classify/7/12.jpg",cat:8},{name:"充电宝",key:"充电宝",icon:"https://cdn.uviewui.com/uview/common/classify/7/13.jpg",cat:8},{name:"手机配件",key:"手机配件",icon:"https://cdn.uviewui.com/uview/common/classify/7/14.jpg",cat:8}]},{name:"母婴",foods:[{name:"婴童服饰",key:"衣服",icon:"https://cdn.uviewui.com/uview/common/classify/8/1.jpg",cat:2},{name:"玩具乐器",key:"玩具乐器",icon:"https://cdn.uviewui.com/uview/common/classify/8/2.jpg",cat:2},{name:"尿不湿",key:"尿不湿",icon:"https://cdn.uviewui.com/uview/common/classify/8/3.jpg",cat:2},{name:"安抚牙胶",key:"安抚牙胶",icon:"https://cdn.uviewui.com/uview/common/classify/8/4.jpg",cat:2},{name:"奶瓶奶嘴",key:"奶瓶奶嘴",icon:"https://cdn.uviewui.com/uview/common/classify/8/5.jpg",cat:2},{name:"孕妈用品",key:"孕妈用品",icon:"https://cdn.uviewui.com/uview/common/classify/8/6.jpg",cat:2},{name:"宝宝用品",key:"宝宝用品",icon:"https://cdn.uviewui.com/uview/common/classify/8/7.jpg",cat:2},{name:"婴童湿巾",key:"湿巾",icon:"https://cdn.uviewui.com/uview/common/classify/8/8.jpg",cat:2},{name:"喂养洗护",key:"洗护",icon:"https://cdn.uviewui.com/uview/common/classify/8/9.jpg",cat:2},{name:"婴童鞋靴",key:"童鞋",icon:"https://cdn.uviewui.com/uview/common/classify/8/10.jpg",cat:2},{name:"口水巾",key:"口水巾",icon:"https://cdn.uviewui.com/uview/common/classify/8/11.jpg",cat:2},{name:"营养辅食",key:"营养",icon:"https://cdn.uviewui.com/uview/common/classify/8/12.jpg",cat:2},{name:"婴幼书籍",key:"书籍",icon:"https://cdn.uviewui.com/uview/common/classify/8/13.jpg",cat:2},{name:"婴儿车",key:"婴儿车",icon:"https://cdn.uviewui.com/uview/common/classify/8/14.jpg",cat:2}]},{name:"箱包",foods:[{name:"单肩包",key:"单肩包",icon:"https://cdn.uviewui.com/uview/common/classify/9/1.jpg",cat:0},{name:"斜挎包",key:"斜挎包",icon:"https://cdn.uviewui.com/uview/common/classify/9/2.jpg",cat:0},{name:"女包",key:"女包",icon:"https://cdn.uviewui.com/uview/common/classify/9/3.jpg",cat:0},{name:"男包",key:"男包",icon:"https://cdn.uviewui.com/uview/common/classify/9/4.jpg",cat:0},{name:"双肩包",key:"双肩包",icon:"https://cdn.uviewui.com/uview/common/classify/9/5.jpg",cat:0},{name:"小方包",key:"小方包",icon:"https://cdn.uviewui.com/uview/common/classify/9/6.jpg",cat:0},{name:"钱包",key:"钱包",icon:"https://cdn.uviewui.com/uview/common/classify/9/7.jpg",cat:0},{name:"旅行箱包",key:"旅行箱包",icon:"https://cdn.uviewui.com/uview/common/classify/9/8.jpg",cat:0},{name:"零钱包",key:"零钱包",icon:"https://cdn.uviewui.com/uview/common/classify/9/9.jpg",cat:0},{name:"手提包",key:"手提包",icon:"https://cdn.uviewui.com/uview/common/classify/9/10.jpg",cat:0},{name:"胸包",key:"胸包",icon:"https://cdn.uviewui.com/uview/common/classify/9/11.jpg",cat:0}]},{name:"内衣",foods:[{name:"袜子",key:"袜子",icon:"https://cdn.uviewui.com/uview/common/classify/10/1.jpg",cat:11},{name:"吊带背心",key:"吊带背心",icon:"https://cdn.uviewui.com/uview/common/classify/10/2.jpg",cat:11},{name:"抹胸",key:"抹胸",icon:"https://cdn.uviewui.com/uview/common/classify/10/3.jpg",cat:11},{name:"内裤",key:"内裤",icon:"https://cdn.uviewui.com/uview/common/classify/10/4.jpg",cat:11},{name:"文胸",key:"文胸",icon:"https://cdn.uviewui.com/uview/common/classify/10/5.jpg",cat:11},{name:"文胸套装",key:"文胸套装",icon:"https://cdn.uviewui.com/uview/common/classify/10/6.jpg",cat:11},{name:"打底塑身",key:"打底塑身",icon:"https://cdn.uviewui.com/uview/common/classify/10/7.jpg",cat:11},{name:"家居服",key:"家居服",icon:"https://cdn.uviewui.com/uview/common/classify/10/8.jpg",cat:11},{name:"船袜",key:"船袜",icon:"https://cdn.uviewui.com/uview/common/classify/10/9.jpg",cat:11},{name:"情侣睡衣",key:"情侣睡衣",icon:"https://cdn.uviewui.com/uview/common/classify/10/10.jpg",cat:11},{name:"丝袜",key:"丝袜",icon:"https://cdn.uviewui.com/uview/common/classify/10/11.jpg",cat:11}]},{name:"文娱车品",foods:[{name:"车市车品",key:"车市车品",icon:"https://cdn.uviewui.com/uview/common/classify/11/1.jpg",cat:7},{name:"办公文具",key:"办公文具",icon:"https://cdn.uviewui.com/uview/common/classify/11/2.jpg",cat:7},{name:"考试必备",key:"考试必备",icon:"https://cdn.uviewui.com/uview/common/classify/11/3.jpg",cat:7},{name:"笔记本",key:"笔记本",icon:"https://cdn.uviewui.com/uview/common/classify/11/4.jpg",cat:7},{name:"艺术礼品",key:"礼品",icon:"https://cdn.uviewui.com/uview/common/classify/11/5.jpg",cat:7},{name:"书写工具",key:"书写工具",icon:"https://cdn.uviewui.com/uview/common/classify/11/6.jpg",cat:7},{name:"车载电器",key:"车载电器",icon:"https://cdn.uviewui.com/uview/common/classify/11/7.jpg",cat:7},{name:"图书音像",key:"图书音像",icon:"https://cdn.uviewui.com/uview/common/classify/11/8.jpg",cat:7},{name:"画具画材",key:"画具画材",icon:"https://cdn.uviewui.com/uview/common/classify/11/9.jpg",cat:7}]},{name:"配饰",foods:[{name:"太阳镜",key:"太阳镜",icon:"https://cdn.uviewui.com/uview/common/classify/12/1.jpg",cat:0},{name:"皮带",key:"皮带",icon:"https://cdn.uviewui.com/uview/common/classify/12/2.jpg",cat:0},{name:"棒球帽",key:"棒球帽",icon:"https://cdn.uviewui.com/uview/common/classify/12/3.jpg",cat:0},{name:"手表",key:"手表",icon:"https://cdn.uviewui.com/uview/common/classify/12/4.jpg",cat:0},{name:"发饰",key:"发饰",icon:"https://cdn.uviewui.com/uview/common/classify/12/5.jpg",cat:0},{name:"项链",key:"项链",icon:"https://cdn.uviewui.com/uview/common/classify/12/6.jpg",cat:0},{name:"手饰",key:"手饰",icon:"https://cdn.uviewui.com/uview/common/classify/12/7.jpg",cat:0},{name:"耳环",key:"耳环",icon:"https://cdn.uviewui.com/uview/common/classify/12/8.jpg",cat:0},{name:"帽子丝巾",key:"帽子丝巾",icon:"https://cdn.uviewui.com/uview/common/classify/12/9.jpg",cat:0},{name:"眼镜墨镜",key:"眼镜墨镜",icon:"https://cdn.uviewui.com/uview/common/classify/12/10.jpg",cat:0},{name:"发带发箍",key:"发带发箍",icon:"https://cdn.uviewui.com/uview/common/classify/12/11.jpg",cat:0}]},{name:"家装家纺",foods:[{name:"家居饰品",key:"家居饰品",icon:"https://cdn.uviewui.com/uview/common/classify/13/1.jpg",cat:0},{name:"凉席",key:"凉席",icon:"https://cdn.uviewui.com/uview/common/classify/13/2.jpg",cat:0},{name:"背枕靠枕",key:"靠枕",icon:"https://cdn.uviewui.com/uview/common/classify/13/3.jpg",cat:0},{name:"床上用品",key:"床上用品",icon:"https://cdn.uviewui.com/uview/common/classify/13/4.jpg",cat:0},{name:"摆件",key:"摆件",icon:"https://cdn.uviewui.com/uview/common/classify/13/5.jpg",cat:0},{name:"四件套",key:"四件套",icon:"https://cdn.uviewui.com/uview/common/classify/13/6.jpg",cat:0},{name:"装饰品",key:"装饰品",icon:"https://cdn.uviewui.com/uview/common/classify/13/7.jpg",cat:0},{name:"卫浴用品",key:"卫浴",icon:"https://cdn.uviewui.com/uview/common/classify/13/8.jpg",cat:0},{name:"家居家装",key:"家具",icon:"https://cdn.uviewui.com/uview/common/classify/13/9.jpg",cat:0},{name:"蚊帐",key:"蚊帐",icon:"https://cdn.uviewui.com/uview/common/classify/13/10.jpg",cat:0},{name:"墙纸贴纸",key:"墙纸",icon:"https://cdn.uviewui.com/uview/common/classify/13/11.jpg",cat:0},{name:"空调被",key:"空调被",icon:"https://cdn.uviewui.com/uview/common/classify/13/12.jpg",cat:0}]},{name:"户外运动",foods:[{name:"游泳装备",key:"游泳",icon:"https://cdn.uviewui.com/uview/common/classify/14/1.jpg",cat:0},{name:"泳镜",key:"泳镜",icon:"https://cdn.uviewui.com/uview/common/classify/14/2.jpg",cat:0},{name:"户外装备",key:"户外",icon:"https://cdn.uviewui.com/uview/common/classify/14/3.jpg",cat:0},{name:"健身服饰",key:"健身",icon:"https://cdn.uviewui.com/uview/common/classify/14/4.jpg",cat:0},{name:"泳衣",key:"泳衣",icon:"https://cdn.uviewui.com/uview/common/classify/14/5.jpg",cat:0},{name:"瑜伽垫",key:"瑜伽垫",icon:"https://cdn.uviewui.com/uview/common/classify/14/6.jpg",cat:0},{name:"瑜伽用品",key:"瑜伽",icon:"https://cdn.uviewui.com/uview/common/classify/14/7.jpg",cat:0},{name:"健身装备",key:"健身",icon:"https://cdn.uviewui.com/uview/common/classify/14/8.jpg",cat:0},{name:"球迷用品",key:"球迷",icon:"https://cdn.uviewui.com/uview/common/classify/14/9.jpg",cat:0}]}];c.default=t},"6e61":function(e,c,i){"use strict";var t=i("040a"),n=i.n(t);n.a},"73e8":function(e,c,i){"use strict";i.r(c);var t=i("15d3"),n=i("b60c");for(var o in n)"default"!==o&&function(e){i.d(c,e,(function(){return n[e]}))}(o);i("6264");var a,s=i("f0c5"),u=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"27d61a1e",null,!1,t["a"],a);c["default"]=u.exports},"781c":function(e,c,i){"use strict";var t=i("98b9"),n=i.n(t);n.a},"98b9":function(e,c,i){var t=i("0726");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var n=i("4f06").default;n("2530ce07",t,!0,{sourceMap:!1,shadowMode:!1})},a4e3:function(e,c,i){"use strict";i.r(c);var t=i("3a38"),n=i.n(t);for(var o in t)"default"!==o&&function(e){i.d(c,e,(function(){return t[e]}))}(o);c["default"]=n.a},a7a1:function(e,c,i){"use strict";var t=i("4ea4");i("99af"),i("4160"),i("a434"),i("d3b7"),i("ac1f"),i("159b"),Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var n=t(i("2909"));i("96cf");var o=t(i("1da1")),a=t(i("65b8")),s={data:function(){return{tabbar:a.default,scrollTop:0,current:0,menuHeight:0,menuItemHeight:0,catelist:[],keyword:"",goods:[],goodsfake:[],currentindex:0}},onLoad:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function c(){var i,t,o,a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,e.$u.api.getcartgoods();case 2:for(t=c.sent,o=0;o<5;o++)e.catelist=e.catelist.concat(t.categories[o].children);e.catelist.forEach((function(c,i){"678"===c.name&&e.catelist.splice(i,1)})),a={name:"全部"},e.catelist.unshift(a),e.catelist.forEach((function(e){return e.page=2})),(i=e.goods).push.apply(i,(0,n.default)(t.goods.data)),e.goodsfake=e.goods;case 10:case"end":return c.stop()}}),c)})))()},methods:{getImg:function(){return Math.floor(35*Math.random())},swichMenu:function(e){var c=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var t,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(c.currentindex=e,0!==e){i.next=5;break}c.goods=c.goodsfake,i.next=10;break;case 5:return t={title:c.catelist[e].name},i.next=8,c.$u.api.getcartgoods(t);case 8:n=i.sent,c.goods=n.goods.data;case 10:if(e!=c.current){i.next=12;break}return i.abrupt("return");case 12:if(c.current=e,0!=c.menuHeight&&0!=c.menuItemHeight){i.next=18;break}return i.next=16,c.getElRect("menu-scroll-view","menuHeight");case 16:return i.next=18,c.getElRect("u-tab-item","menuItemHeight");case 18:c.scrollTop=e*c.menuItemHeight+c.menuItemHeight/2-c.menuHeight/2;case 19:case"end":return i.stop()}}),i)})))()},getElRect:function(e,c){var i=this;new Promise((function(t,n){var o=uni.createSelectorQuery().in(i);o.select("."+e).fields({size:!0},(function(t){t?i[c]=t.height:setTimeout((function(){i.getElRect(e)}),10)})).exec()}))},search:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function c(){var i,t;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return i={title:e.keyword},c.next=3,e.$u.api.getcartgoods(i);case 3:t=c.sent,e.currentindex=3,e.$u.toast("搜索成功"),e.goods=t.goods.data;case 7:case"end":return c.stop()}}),c)})))()},refresh:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function c(){var i,t,o,a,s,u;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(0!==e.currentindex){c.next=7;break}return t={page:e.catelist[e.currentindex].page},c.next=4,e.$u.api.getcartgoods(t);case 4:o=c.sent,(i=e.goods).push.apply(i,(0,n.default)(o.goods.data)),e.catelist[e.currentindex].page++;case 7:if(3!==e.currentindex){c.next=10;break}c.next=16;break;case 10:return s={title:e.catelist[e.currentindex].name,page:e.catelist[e.currentindex].page},c.next=13,e.$u.api.getcartgoods(s);case 13:u=c.sent,(a=e.goods).push.apply(a,(0,n.default)(u.goods.data)),e.catelist[e.currentindex].page++;case 16:case"end":return c.stop()}}),c)})))()}}};c.default=s},aa1f:function(e,c,i){"use strict";i.r(c);var t=i("a7a1"),n=i.n(t);for(var o in t)"default"!==o&&function(e){i.d(c,e,(function(){return t[e]}))}(o);c["default"]=n.a},b60c:function(e,c,i){"use strict";i.r(c);var t=i("4290"),n=i.n(t);for(var o in t)"default"!==o&&function(e){i.d(c,e,(function(){return t[e]}))}(o);c["default"]=n.a},ddea:function(e,c,i){"use strict";i.d(c,"b",(function(){return n})),i.d(c,"c",(function(){return o})),i.d(c,"a",(function(){return t}));var t={uSearch:i("e849").default,uEmpty:i("73e8").default},n=function(){var e=this,c=e.$createElement,i=e._self._c||c;return i("v-uni-view",{staticClass:"u-wrap"},[i("v-uni-view",{staticClass:"u-search-box"},[i("v-uni-view",[i("u-search",{attrs:{placeholder:"搜索想要的图书"},on:{custom:function(c){arguments[0]=c=e.$handleEvent(c),e.search.apply(void 0,arguments)}},model:{value:e.keyword,callback:function(c){e.keyword=c},expression:"keyword"}})],1)],1),i("v-uni-view",{staticClass:"u-menu-wrap"},[i("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":e.scrollTop}},e._l(e.catelist,(function(c,t){return i("v-uni-view",{key:t,staticClass:"u-tab-item",class:[e.current==t?"u-tab-item-active":""],attrs:{"data-current":t},on:{click:function(c){c.stopPropagation(),arguments[0]=c=e.$handleEvent(c),e.swichMenu(t)}}},[i("v-uni-text",{staticClass:"u-line-1"},[e._v(e._s(c.name))])],1)})),1),e._l(e.tabbar,(function(c,t){return[e.current==t?i("v-uni-scroll-view",{key:t+"_0",staticClass:"right-box",attrs:{"scroll-y":!0},on:{scrolltolower:function(c){arguments[0]=c=e.$handleEvent(c),e.refresh.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"page-view"},[i("v-uni-view",{staticClass:"class-item"},[i("v-uni-view",{staticClass:"item-container"},[e._l(e.goods,(function(c,t){return i("v-uni-navigator",{key:t,staticClass:"thumb-box",attrs:{url:"/pages/detail/detail?id="+c.id}},[i("v-uni-image",{staticClass:"item-menu-image",attrs:{src:c.cover_url,mode:""}}),i("v-uni-view",{staticClass:"item-menu-name"},[e._v(e._s(c.title))])],1)})),i("v-uni-view",{staticClass:"u-flex-1 u-p-b-80 u-p-t-80"},[0===e.goods.length?i("u-empty",{attrs:{text:"本分类无结果",mode:"list"}}):e._e()],1)],2)],1)],1)],1):e._e()]}))],2)],1)},o=[]},e76a:function(e,c,i){"use strict";i.r(c);var t=i("ddea"),n=i("aa1f");for(var o in n)"default"!==o&&function(e){i.d(c,e,(function(){return n[e]}))}(o);i("6e61");var a,s=i("f0c5"),u=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"1c769884",null,!1,t["a"],a);c["default"]=u.exports},e849:function(e,c,i){"use strict";i.r(c);var t=i("0cf3"),n=i("a4e3");for(var o in n)"default"!==o&&function(e){i.d(c,e,(function(){return n[e]}))}(o);i("781c");var a,s=i("f0c5"),u=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"13f672b9",null,!1,t["a"],a);c["default"]=u.exports}}]);