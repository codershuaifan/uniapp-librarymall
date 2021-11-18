<template>
	<view class="above">
		<scroll-view scroll-y="true" class="scroll">
			<view class="first" @click="place">
				<view class="u-flex">
					<view class="firstone u-line-1">{{defaultplace.province+defaultplace.city+defaultplace.county}} {{defaultplace.address}}</view>
					<view class="tag" v-if="defaultplace.city !== ''">
						<text class="red">默认</text>
					</view>
				</view>
				<view class="firsttwo">{{defaultplace.phone}} {{defaultplace.name}}</view>
				<u-icon name="arrow-right" class="firstthree" size="40"></u-icon>
			</view>
			<aboveitem v-for="item in abovelist" :aboveitem="item"></aboveitem>
			
			<!-- #ifndef APP-PLUS -->
			<view v-show="isshow===true">
				<img src="~static/shuma.jpg" alt="">
			</view>
			<!-- #endif -->
			
			<!-- #ifdef APP-PLUS -->
			<view v-show="isshow===true">
				<img src="static/shuma.jpg" alt="">
			</view>
			<!-- #endif -->
			
			<view class="total">
				<view class="third">合计：</view>
				<view class="four">￥{{totalprice}}</view>
				<view class="six" @click="back">返回</view>
				<!-- #ifdef H5 -->
				<view class="five" @click="tiaozhuan">提交订单并支付</view>
				<!-- #endif -->
				
				<!-- #ifndef H5 -->
				<view class="five" @click="tiaozhuanwx">提交订单并支付</view>
				<u-popup v-model="twoshow">
					<view class="u-popup-slot" style="width: 300rpx;display: flex;align-items: center;justify-content: center;height: 100%;">
						<button @click="buttonvx" class="button">返回</button>
					</view>
				</u-popup>
				<!-- #endif -->
				
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				abovelist:[],
				isshow:false,
				twoshow:false,
				placelist:[],
				defaultplace:{
					province:'请点击新建地址',
					city:'',
					county:'',
					address:'',
					phone:'',
					name:''
				}
			}
		},
		methods: {
			finish(){
				this.isshow=false
				this.$u.route({
					type:'reLaunch',
					url:'pages/cart/cart'
				})
			},
			tiaozhuan(){
				this.isshow=true
				uni.showModal({
				    title: '提示',
						confirmText:'已经支付',
						confirmColor:'red',
						cancelText:'取消支付',
				    content: `
						
						
						
						
						
						
						
						
						
						
						`,
				    success: function (res) {
				        if (res.confirm) {
				            // console.log('用户点击确定');
										uni.showToast({
										    title: '标题',
										    duration: 2000
										});
										uni.switchTab({
											url:'/pages/index/index'
										})
				        } else if (res.cancel) {
										uni.switchTab({
											url:'/pages/cart/cart'
										})
				            // console.log('用户点击取消');
				        }
				    },
				})
			},
			place(){
				this.$u.route({
					type:'navigateTo',
					url:'pages/cart/place'
				})
			},
			back(){
				this.$u.route({
					type:'reLaunch',
					url:'pages/cart/cart'
				})
			},
			//#ifndef H5
			tiaozhuanwx(){
				this.isshow=true
				this.twoshow=true
			},
			buttonvx(){
				this.isshow=false
				this.twoshow=false
				uni.switchTab({
					url:'/pages/cart/cart'
				})
			},
			//#endif
		},
		computed:{
			totalprice(){
				var b=0
				for(var a of this.abovelist){
					b+=a.price*a.itemnumber
				}
				return b
			}
		},
		async onLoad(){
			const restwo=uni.getStorageSync('abovecartlist');
			if(restwo){
				this.abovelist=restwo
			}
			const res=await this.$u.api.getplacelist()
			this.placelist.push(...res.data)
			// console.log(this.placelist)
			this.placelist.find(item=>{
				if(item.is_default===1){
					this.defaultplace=item
				}
			})
		}
	}
</script>

<style scoped lang="scss">
.first{
	height: 200rpx;
	background-color: #F3F4F6;
}
.firstone{
	font-weight: 1000;
	font-size: 34rpx;
	padding-top: 40rpx;
	margin-left: 20rpx;
	width: 500rpx;
}
.firsttwo{
	color: #606266;
	margin-left: 20rpx;
	margin-top: 20rpx;
}
.firstthree{
	/* #ifdef H5 */
	position: fixed;
	right: 0;
	top:168rpx;
	/* #endif */
	
	
	/* #ifndef H5 */
	position: fixed;
	right: 0;
	top:80rpx;
	/* #endif */
}
.total{
	display: flex;
	align-items: center;
	height: 100rpx;
	background-color: #F4F4F5;
	position: fixed;
	bottom:0;
	width: 100%;
}
.five{
	height: 80rpx;
	width: 300rpx;
	background-color: red;
	color: #FFFFFF;
	border-radius: 50rpx;
	line-height: 80rpx;
	text-align: center;
	margin-left: 10rpx;
}
.six{
	height: 80rpx;
	width: 140rpx;
	background-color: orange;
	color: #FFFFFF;
	border-radius: 50rpx;
	line-height: 80rpx;
	text-align: center;
	margin-left: 40rpx;
}
.third{
	margin-left: 40rpx;
	margin-bottom: 6rpx;
	font-size: 34rpx;
	font-weight: 1000;
}
.four{
	color: red;
	font-weight: 1000;
	width: 80rpx;
	font-size: 34rpx;
}
.above{
	height: 100vh;
}
.scroll{
	height: calc(100% - 88rpx - 100rpx);
}
/* #ifdef H5 */
img{
	height: 540rpx;
	width: 540rpx;
	position: fixed;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
	z-index: 9999999;
}
/* #endif */

.tag {
			font-weight: normal;
			text {
				display: block;
				width: 60rpx;
				height: 34rpx;
				line-height: 34rpx;
				color: #ffffff;
				font-size: 20rpx;
				border-radius: 6rpx;
				text-align: center;
				background-color:rgb(49, 145, 253);
				margin-top: 40rpx;
			}
			.red{
				background-color:red
			}
		}
		
/* #ifndef H5 */
	img{
		height: 400rpx;
		width: 400rpx;
		position: fixed;
		top:calc(50% - 200rpx);
		right: 0;
		z-index: 100000;
	}
/* #endif */
</style>
