<template>
	<view class="total">
		<!-- #ifndef APP-PLUS -->
		<img src="~static/icon/未选中.svg" alt="" @click="changestatus" v-show="totalshow===false">
		<img src="~static/icon/选中.svg" alt="" @click="changestatus" v-show="totalshow===true">
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		<img src="static/icon/未选中.svg" alt="" @click="changestatus" v-show="totalshow===false">
		<img src="static/icon/选中.svg" alt="" @click="changestatus" v-show="totalshow===true">
		<!-- #endif -->
		
		<view class="second">全选</view>
		<view class="third">合计：</view>
		<view class="four">￥{{totalprice}}</view>
		<view class="five" @click="tiaozhuan">去结算</view>
	</view>
</template>

<script>
	export default {
		name:"total",
		props:{
			totalshow:{
				type:Boolean
			},
			totalprice:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
			}
		},
		methods:{
			changestatus(){
				this.$emit('changetotal')
			},
			tiaozhuan(){
				this.$emit('tiaoabove')
			}
		}
	}
</script>

<style scoped>
.total{
	display: flex;
	align-items: center;
	height: 100rpx;
	background-color: #F4F4F5;
	position: fixed;
	
	/* #ifdef H5 */
	bottom:100rpx;
	/* #endif */
	
	width: 100%;
	
	/* #ifndef H5 */
	bottom:0;
	/* #endif */
}
img{
	height: 50rpx;
	width: 50rpx;
	margin-left: 50rpx;
}
.five{
	height: 80rpx;
	width: 200rpx;
	background-color: red;
	color: #FFFFFF;
	border-radius: 50rpx;
	line-height: 80rpx;
	text-align: center;
	margin-left: 40rpx;
}
.second{
	margin-left: 4rpx;
}
.third{
	margin-left: 120rpx;
	margin-bottom: 6rpx;
}
.four{
	color: red;
	font-weight: 1000;
	width: 80rpx;
}
</style>
