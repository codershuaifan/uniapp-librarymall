<template>
	<view>
		<u-row gutter="16">
			<u-col span="12">
				
				<!-- #ifndef MP-WEIXIN -->
				<u-image height="400rpx" width="400rpx" :src="goodsitem.cover_url"></u-image>
				<!-- #endif -->
				
				<!-- #ifdef MP-WEIXIN -->
				<img :src="goodsitem.cover_url" class="image" alt="">		
				<!-- #endif -->
				
				<view class="title u-skeleton-fillet">{{goodsitem.title}}</view>
				<view class="u-flex u-row-between">
					<view class="price u-skeleton-fillet">￥{{goodsitem.price}}</view>
					<view class="sale u-skeleton-fillet">销量:{{goodsitem.sales}}</view>
				</view>
			</u-col>
		</u-row>
		<u-tabs class="tabs u-m-t-40" bar-width="140" :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		
		<!-- #ifdef H5 -->
		<view class="bottom">
			<view class="collect" @click="collect">
				<img src="~static/icon/collect.png" alt="" v-show="iscollect===false">
				<img src="~static/icon/collect(1).png" alt="" v-show="iscollect===true">
				<view :class="{active:iscollect}">收藏</view>
			</view>
			<view @click="navtiao">
				<u-badge type="error" :count="cartlist" style="right: 480rpx;top:4rpx"></u-badge>
				<img src="~static/icon/shopping(1).png" alt="">
				<view>购物车</view>
			</view>
			<view class="circlefirst" @click="entercart">加入购物车</view>
			<view class="circletwo">立即购买</view>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		<view class="bottom">
			<view class="collect" @click="collect">
				<img src="static/icon/collect.png" alt="" v-show="iscollect===false">
				<img src="static/icon/collect(1).png" alt="" v-show="iscollect===true">
				<view :class="{active:iscollect}">收藏</view>
			</view>
			<view @click="navtiao">
				<u-badge type="error" :count="cartlist" style="right: 480rpx;top:4rpx"></u-badge>
				<img src="static/icon/shopping(1).png" alt="">
				<view>购物车</view>
			</view>
			<view class="circlefirst" @click="entercart">加入购物车</view>
			<view class="circletwo">立即购买</view>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
		<view class="bottom">
			<view class="collect" @click="collect">
				<img src="~static/icon/collect.png" alt="" v-show="iscollect===false" class="icon">
				<img src="~static/icon/collect(1).png" alt="" v-show="iscollect===true" class="icon">
				<view :class="{active:iscollect}">收藏</view>
			</view>
			<view @click="navtiao">
				<u-badge type="error" :count="cartlist" style="right: 460rpx;bottom:120rpx;position: fixed;"></u-badge>
				<img src="~static/icon/shopping(1).png" alt="" class="icon">
				<view>购物车</view>
			</view>
			<view class="circlefirst" @click="entercart">加入购物车</view>
			<view class="circletwo">立即购买</view>
		</view>
		<!-- #endif -->
		
		<u-parse :html="content" v-if="current===0" class="parse"></u-parse>
		<comment v-if="current===1"></comment>
		
		<u-row gutter="16" class="u-skeleton" v-if="current===2">
			<u-col span="6" v-for="item in likegoods">
				<goods :goodsitem="item"></goods>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsitem: {},
				list: [{
					name: '商品详情'
				}, {
					name: '商品评论'
				}, {
					name: '推荐商品',
				}],
				current: 0,
				goodsitemid:null,
				content:null,
				likegoods:[],
				iscollect:false,
				cartlist:0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			async collect(){
				if(!this.iscollect){
					await this.$u.api.collect(this.goodsitemid)
					this.iscollect=!this.iscollect
					this.$u.toast('收藏成功')
				}
				else{
					await this.$u.api.collect(this.goodsitemid)
					this.iscollect=!this.iscollect
					this.$u.toast('已取消收藏')
				}
			},
			async entercart(){
				const params={goods_id:this.goodsitemid}
				await this.$u.api.entercart(params)
				const res=await this.$u.api.getcart()
				this.$u.toast('加入购物车成功')
				this.cartlist=res.data.length
				this.$bus.$emit('entercart')
			},
			navtiao(){
				this.$u.route({
					type:'switchTab',
					url:'pages/cart/cart'
				})
			}
		},
		async onLoad(option){
			this.goodsitemid=option.id
			const res=await this.$u.api.goodsdetail(this.goodsitemid)
			this.goodsitem=res.goods
			this.content=this.goodsitem.details
			this.likegoods=res.like_goods
			const rescart=await this.$u.api.getcart()
			this.cartlist=rescart.data.length
		},
	}
</script>

<style scoped>
	.u-row{
		height: 570rpx;
		padding: 40rpx;
	}
	.u-col {
		height: 570rpx;
		margin-top: 10rpx;
	}
	.price {
		color: red;
		margin-top: 10rpx;
		font-size: 34rpx;
		font-weight: 1000;
		/* #ifdef MP-WEIXIN */
		margin-left: 40rpx;
		/* #endif */
	}
	.title {
		margin-top: 40rpx;
		font-weight: 1000;
		font-size: 34rpx;
		/* #ifdef MP-WEIXIN */
		margin-left: 40rpx;
		/* #endif */
	}
	.sale {
		color: #888;
		font-size: 26rpx;
		/* #ifdef MP-WEIXIN */
		margin-right: 40rpx;
		/* #endif */
	}
	
	/* #ifdef APP-PLUS */
	.u-image {
		margin: 0 auto;
		margin-top: 10rpx;
	}
	.bottom{
		display: flex;
		justify-content: space-around;
		height: 100rpx;
		background-color: #F4F4F5;
		align-items: center;
		position: fixed;
		bottom: 0;
		width: 100%;
		font-size: 24rpx;
		z-index: 10;
	}
	.collect{
		margin-left: 40rpx;
	}
	img{
		height: 45rpx;
		margin-bottom: -6rpx;
	}
	.circlefirst{
		background-color: red;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
		border-radius: 30rpx;
		width: 180rpx;
		text-align: center;
		margin-left: 20rpx;
		margin-right: -40rpx;
	}
	.circletwo{
		background-color: orange;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
		border-radius: 30rpx;
		width: 150rpx;
		text-align: center;
	}
	/* #endif */
	
	/* #ifdef H5 */
	.u-image {
		margin: 0 auto;
		margin-top: 10rpx;
	}
	.bottom{
		display: flex;
		justify-content: space-around;
		height: 100rpx;
		background-color: #F4F4F5;
		align-items: center;
		position: fixed;
		bottom: 0;
		width: 100%;
		font-size: 12rpx;
		z-index: 10;
	}
	.collect{
		margin-left: 40rpx;
	}
	img{
		height: 45rpx;
		margin-bottom: -6rpx;
	}
	.circlefirst{
		background-color: red;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
		border-radius: 30rpx;
		width: 180rpx;
		text-align: center;
		margin-left: 20rpx;
		margin-right: -40rpx;
	}
	.circletwo{
		background-color: orange;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
		border-radius: 30rpx;
		width: 150rpx;
		text-align: center;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	.image{
		width: 400rpx;
		height: 400rpx;
		margin-left: 180rpx;
		padding-top: 80rpx;
	}
	.bottom{
		display: flex;
		justify-content: space-around;
		height: 100rpx;
		background-color: #F4F4F5;
		align-items: center;
		position: fixed;
		bottom: 0;
		width: 100%;
		font-size: 24rpx;
		z-index: 10;
	}
	.collect{
		margin-left: 40rpx;
	}
	.icon{
		height: 45rpx;
		width: 45rpx;
	}
	.circlefirst{
		background-color: red;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
		border-radius: 30rpx;
		width: 180rpx;
		text-align: center;
		margin-left: 20rpx;
		margin-right: -40rpx;
	}
	.circletwo{
		background-color: orange;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
		border-radius: 30rpx;
		width: 150rpx;
		text-align: center;
	}
	/* #endif */
	
	.parse{
		/* #ifndef MP-WEIXIN */
		padding-bottom: 80rpx;
		/* #endif */
	}
	.active{
		color: #d81e06;
	}
</style>
