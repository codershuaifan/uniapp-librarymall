<template>
	<view>
		<view class="u-flex user-box u-p-l-30 u-p-t-30 u-p-r-20 u-p-b-30">
			<view class="u-m-r-10 imagearea">
				<image-upload></image-upload>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{vuex_user.name}}</view>
				<view class="u-font-14 u-tips-color">邮箱:{{vuex_user.email}}</view>
			</view>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="个人信息" @click="baseinfo"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="所有订单"></u-cell-item>
				<u-cell-item icon="star" title="商品收藏"></u-cell-item>
				<u-cell-item icon="map" title="收货地址"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="reload" title="退出登录" @click="loginout"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:true
			}
		},
		onLoad() {
			if(!this.$u.utils.jumplogin()) return
		},
		methods: {
			baseinfo(){
				this.$u.route({
					url:'pages/user/baseinfo'
				})
			},
			loginout(){
				this.$u.api.userout()
				this.$u.toast('退出成功')
				
				this.$u.vuex('vuex_token',null)
				this.$u.vuex('vuex_user',{})
				
				setTimeout(()=>{
					this.$u.route({
						type:'reLaunch',
						url:'pages/user/user'
					})
				},1500)
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
.imagearea{
	height: 70px;
	width:70px;
}
</style>
