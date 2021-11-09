<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">注册个人账号</view>
			<input class="u-border-bottom" type="text" v-model="name" placeholder="请输入昵称" />
			<input class="u-border-bottom" type="text" v-model="email" placeholder="请输入邮箱" />
			<input class="u-border-bottom" type="password" v-model="password" placeholder="请输入密码" />
			<input class="u-border-bottom" type="password" v-model="password_confirmation" placeholder="请再次输入密码" />
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">注册账号</button>
		</view>
		<view class="buttom">
			<view class="hint">
				注册代表同意
				<text class="link">图书商城用户协议、隐私政策，</text>
				并授权使用您的账号信息（如昵称、头像、收获地址）以便您统一管理
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				email:'',
				password:'',
				password_confirmation:'',
				isconfirm:false
			}
		},
		methods: {
			submit(){
				if(this.isconfirm){
					const params={
						name:this.name,
						email:this.email,
						password:this.password,
						password_confirmation:this.password_confirmation
					}
					this.$u.api.userregister(params)
					this.$u.toast('注册成功')
					setTimeout(()=>{
						this.$u.route({
							type:'redirect',
							url:'pages/auth/login'
						})
					},1500)
				}
			}
		},
		computed:{
			inputStyle() {
				let style = {};
				if(this.$u.test.email(this.email) && !this.$u.test.isEmpty(this.name) && !this.$u.test.isEmpty(this.password) && this.password_confirmation===this.password) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
					this.isconfirm=true
				}
				return style;
			}
		}
	}
</script>

<style lang="scss" scoped>
.u-border-bottom{
	margin-bottom: 40rpx!important;
}
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 200rpx auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $u-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
			position: fixed;
			bottom: 20rpx;
			.link {
				color: $u-type-warning;
			}
		}
	}
}
</style>
