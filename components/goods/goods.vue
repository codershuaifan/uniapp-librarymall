<template>
	<navigator class="light">
		<u-image class="u-skeleton-fillet" height="70%" width="70%" :src="goodsitem.cover_url"></u-image>
		<view class="title u-skeleton-fillet">{{goodsitem.title?goodsitem.title:'人工智能'}}</view>
		<view class="u-flex u-row-between">
			<view class="price u-skeleton-fillet">￥{{goodsitem.price?goodsitem.price:50}}</view>
			<view class="sale u-skeleton-fillet">销量:{{goodsitem.sales?goodsitem.sales:0}}</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		name:"goods",
		props:{
			goodsitem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.light{
		height: 400rpx;
		box-shadow: 0 12rpx 20rpx rgba(0,0,0,.1);
	}
	.price{
		color: red;
		margin-left: 20rpx;
		margin-top: 10rpx;
		font-size: 22rpx;
	}
	.title{
		margin-top:20rpx;
		margin-left: 20rpx;
		font-weight: 1000;
		font-size: 26rpx;
		z-index: 10;
		position: relative;
	}
	.sale{
		margin-right: 20rpx;
		color:#888;
		font-size: 22rpx;
	}
	.u-image{
		margin: 0 auto;
	}
</style>
