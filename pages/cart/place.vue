<template>
	<view>
		<u-modal v-model="show" :content='content' :showCancelButton='true' confirmColor="red" @confirm="confirm"></u-modal>
		<view class="item" v-for="(res, index) in siteList" :key="res.id" @click="setonly(res)">			
			<view class="top">
				<view class="name">{{ res.name }}</view>
				<view class="phone">{{ res.phone }}</view>
				<view class="tag">
					<text v-if="res.is_default==1" :class="{red:res.is_default==1}">默认</text>
				</view>
			</view>
			<view class="bottom">
				{{res.province+res.city+res.county}} {{res.address}}
				<u-icon name="trash" color="red" size="40" class="icon" @click.native.stop="delplace(res)"></u-icon>
				<u-icon name="edit-pen" :size="40" color="#999999" @click.native.stop="upteplace(res)"></u-icon>
			</view>
		</view>
		<!-- #ifndef APP-PLUS -->
		<img src="~static/返回.svg" alt="" class="backicon" @click="back">
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		<img src="static/返回.svg" alt="" class="backicon" @click="back">
		<!-- #endif -->
		
		<view class="addSite" @click="addplace">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			siteList: [],
			show:false,
			content:'是否删除该条地址',
			confirmdata:{}
		};
	},
	async onLoad() {
		const res=await this.$u.api.getplacelist()
		// console.log(res)
		this.siteList.push(...res.data)
	},
	methods: {
		addplace(){
			this.$u.route({
				type:'navigateTo',
				url:'pages/cart/addplace'
			})
		},
		delplace(res){
			this.show=true
			this.confirmdata=res
		},
		async confirm(){
			await this.$u.api.delplace(this.confirmdata.id)
			/* #ifndef MP-WEIXIN */
			location.reload()
			/* #endif */
			
			/* #ifdef MP-WEIXIN */
			this.$u.route({
				type:'reLaunch',
				url:'pages/cart/above'
			})
			/* #endif */
			this.$u.toast('删除成功')
		},
		back(){
			this.$u.route({
				type:'reLaunch',
				url:'pages/cart/above'
			})
		},
		upteplace(res){
			uni.setStorage({
				key: 'pastdata',
				data: res
			})
			this.$u.route({
				type:'navigateTo',
				url:'pages/cart/upteplace'
			})
		},
		async setonly(res){
			await this.$u.api.onlyplace(res.id)
			this.$u.route({
				type:'reLaunch',
				url:'pages/cart/above'
			})
		},
	}
};
</script>

<style lang="scss" scoped>
.item {
	padding: 40rpx 20rpx;
	.top {
		display: flex;
		font-weight: bold;
		font-size: 34rpx;
		.phone {
			margin-left: 60rpx;
		}
		.tag {
			display: flex;
			font-weight: normal;
			align-items: center;
			text {
				display: block;
				width: 60rpx;
				height: 34rpx;
				line-height: 34rpx;
				color: #ffffff;
				font-size: 20rpx;
				border-radius: 6rpx;
				text-align: center;
				margin-left: 30rpx;
				background-color:rgb(49, 145, 253);
			}
			.red{
				background-color:red
			}
		}
	}
	.bottom {
		display: flex;
		margin-top: 20rpx;
		font-size: 28rpx;
		justify-content: space-between;
		color: #999999;
	}
}
.addSite {
	display: flex;
	justify-content: space-around;
	width: 600rpx;
	line-height: 100rpx;
	position: absolute;
	bottom: 30rpx;
	left: 80rpx;
	background-color: red;
	border-radius: 60rpx;
	font-size: 30rpx;
	.add{
		display: flex;
		align-items: center;
		color: #ffffff;
		.icon{
			margin-right: 10rpx;
		}
	}
}
.icon{
	position: fixed;
	right: 100rpx;
}
.backicon{
	width: 140rpx;
	height: 140rpx;
	position: fixed;
	bottom: 150rpx;
	left: calc(50% - 70rpx);
	z-index: 10;
}
</style>
