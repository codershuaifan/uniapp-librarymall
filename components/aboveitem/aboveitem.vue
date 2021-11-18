<template>
	<view class="aboveitem">
		<img :src="aboveitem.cover_url" alt="">
		<view class="second">
			<view class="title">{{aboveitem.title}}</view>
			<view class="seconddiv">
				<view class="seconddivone">￥{{aboveitem.price}}</view>
				<view class="seconddivtwo">x{{aboveitem.itemnumber}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"aboveitem",
		props:{
			aboveitem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		created(){
			// console.log(this.aboveitem)
		},
	}
</script>

<style scoped>
.aboveitem{
	display: flex;
	align-items: center;
	text-align: center;
	height: 260rpx;
	box-shadow: 0rpx 4rpx 2rpx rgb(0,0,0,0.05);
}
img{
	width: 200rpx;
	height: 200rpx;
}
.seconddiv{
	padding-top: 80rpx;
	padding-left: 20rpx;
	display: flex;
}
.second{
	display: flex;
	align-items: flex-start;
	height: 180rpx;
	flex-direction: column;
}
.seconddivone{
	color: red;
	font-weight: 1000;
	font-size: 34rpx;
}
.seconddivtwo{
	margin-left: 400rpx;
	margin-top: 10rpx;
}
.title{
	font-size: 36rpx;
	font-weight: 1000;
}
</style>
