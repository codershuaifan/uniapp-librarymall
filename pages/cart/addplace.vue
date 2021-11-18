<template>
	<view class="wrap">
		<view class="top">
			<view class="item">
				<view class="left">收货人</view>
				<input type="text" placeholder-class="line" placeholder="请填写收货人姓名" v-model="name"/>
			</view>
			<view class="item">
				<view class="left">手机号码</view>
				<input type="text" placeholder-class="line" placeholder="请填写收货人手机号" v-model="number"/>
			</view>
			<view class="item" @tap="showRegionPicker">
				<view class="left">所在地区</view>
				<input disabled type="text" placeholder-class="line" v-model="area" placeholder="省市区县、乡镇等" />
			</view>
			<view class="item address">
				<view class="left">详细地址</view>
				<textarea type="text" placeholder-class="line" placeholder="街道、楼牌等" v-model="detail"/>
			</view>
		</view>
		<view class="bottom">
			<view class="default">
				<view class="left">
					<view class="set">设置默认地址</view>
					<view class="tips">提醒：每次下单会默认推荐该地址</view>
				</view>
				<view class="right"><u-switch color="red" v-model="checked" /></view>
			</view>
		</view>
		<view class="addSite" @click="addplace">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>添加地址
			</view>
		</view>
		<u-picker mode="region" ref="uPicker" v-model="show" :params="params" @confirm="confirm"/>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name:'',
			number:null,
			detail:'',
			checked:false,
			area:'',
			show:false,
			params:{
				province: true,
				city: true,
				area: true
			},
			paramsres:{}
		};
	},
	methods: {
		setDefault() {},
		showRegionPicker() {
			this.show = true;
		},
		async addplace(){
			const params={
				name:this.name,
				phone:this.number,
				address:this.detail,
				province:this.paramsres.province.label,
				city:this.paramsres.city.label,
				county:this.paramsres.area.label
			}
			if(this.checked===true){
				params.is_default=1
			}
			await this.$u.api.addplace(params)
			this.$u.route({
				type:'reLaunch',
				url:'pages/cart/place'
			})
			this.$u.toast('添加地址成功')
		},
		confirm(res){
			this.area=''
			this.paramsres=res
			this.area=this.paramsres.province.label+this.paramsres.city.label+this.paramsres.area.label
			console.log(this.paramsres)
		}
	}
};
</script>

<style lang="scss" scoped>
/deep/ .line {
	color: $u-light-color;
	font-size: 28rpx;
}
.wrap {
	background-color: #f2f2f2;
	.top {
		background-color: #ffffff;
		border-top: solid 2rpx $u-border-color;
		padding: 22rpx;
		.item {
			display: flex;
			font-size: 32rpx;
			line-height: 100rpx;
			align-items: center;
			border-bottom: solid 2rpx $u-border-color;
			.left {
				width: 180rpx;
			}
			input {
				text-align: left;
			}
		}
		
		.address {
			padding: 20rpx 0;
			textarea {
				// width: 100%;
				height: 150rpx;
				background-color: #f7f7f7;
				line-height: 60rpx;
				margin: 40rpx auto;
				padding: 20rpx;
			}
		}
		.site-clipboard {
			padding-right: 40rpx;
			textarea {
				// width: 100%;
				height: 150rpx;
				background-color: #f7f7f7;
				line-height: 60rpx;
				margin: 40rpx auto;
				padding: 20rpx;
			}
			.clipboard {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 26rpx;
				color: $u-tips-color;
				height: 80rpx;
				.icon {
					margin-top: 6rpx;
					margin-left: 10rpx;
				}
			}
		}
	}
	.bottom {
		margin-top: 20rpx;
		padding: 40rpx;
		padding-right: 0;
		background-color: #ffffff;
		font-size: 28rpx;
		.tag {
			display: flex;
			.left {
				width: 160rpx;
			}
			.right {
				display: flex;
				flex-wrap: wrap;
				.tags {
					width: 140rpx;
					padding: 16rpx 8rpx;
					border: solid 2rpx $u-border-color;
					text-align: center;
					border-radius: 50rpx;
					margin: 0 10rpx 20rpx;
					display: flex;
					font-size: 28rpx;
					align-items: center;
					justify-content: center;
					color: $u-content-color;
					line-height: 1;
				}
				.plus {
					//padding: 10rpx 0;
				}
			}
		}
		.default {
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: solid 2rpx $u-border-color;
			line-height: 64rpx;
			.tips {
				font-size: 24rpx;
			}
			.right {
			}
		}
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
</style>
