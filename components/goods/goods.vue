<template>
	<navigator class="light" :url="'/pages/detail/detail?id='+goodsitem.id">
		
		<!-- #ifndef MP-WEIXIN -->
		<u-image class="u-skeleton-fillet" height="70%" width="70%" :src="goodsitem.cover_url"></u-image>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
		<img :src="goodsitem.cover_url" class="image" alt="">		
		<!-- #endif -->
		
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

<style scoped>
	.light{
		height: 400rpx;
		box-shadow: 0 12rpx 20rpx rgba(0,0,0,.1);
		/* #ifdef MP-WEIXIN */
		text-align: center;
		/* #endif */
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
	/* #ifndef MP-WEIXIN */
	.u-image{
		margin: 0 auto;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	.image{
	height: 60%;
	width: 70%;
	margin: 0rpx auto;
	padding-top: 40rpx;
	}
	/* #endif */
	
</style>
