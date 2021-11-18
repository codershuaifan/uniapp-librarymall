<template>
	<view>
		<view class="cartitem">
			<!-- #ifdef H5 -->
			<img src="~static/icon/unchoose.svg" alt="" class="icon" @click="changestatus" v-show="itemshow===false">
			<img src="~static/icon/choose.svg" alt="" class="icon" @click="changestatus" v-show="itemshow===true">
			<!-- #endif -->
			
			<!-- #ifdef MP-WEIXIN -->
			<img src="~static/icon/unchoose.png" alt="" class="icon" @click="changestatus" v-show="itemshow===false">
			<img src="~static/icon/choose.png" alt="" class="icon" @click="changestatus" v-show="itemshow===true">
			<!-- #endif -->
			
			<!-- #ifdef APP-PLUS -->
			<img src="static/icon/unchoose.png" alt="" class="icon" @click="changestatus" v-show="itemshow===false">
			<img src="static/icon/choose.png" alt="" class="icon" @click="changestatus" v-show="itemshow===true">
			<!-- #endif -->
			
			<img :src='cartitem.cover_url' alt="" class="image">
			<view class="third">
				<view class="firstword">{{cartitem.title}}</view>
				<view class="secondword">{{cartitem.description}}</view>
				<view class="thirdword">
					<view class="firstdiv">￥{{cartitem.price}}</view>
					<view class="seconddiv">
						<u-button size="mini" @click="jian" :disabled="itemnumber===0">-</u-button>
						<u-button size="mini">{{itemnumber}}</u-button>
						<u-button size="mini" @click="add">+</u-button>
					</view>
					<!-- #ifdef H5 -->
					<img src="~static/icon/rubbish.svg" alt="" class="iconsecond" @click="deleteitem">
					<!-- #endif -->
					
					<!-- #ifdef MP-WEIXIN -->
					<img src="~static/icon/rubbish(1).png" alt="" class="iconsecond" @click="deleteitem">
					<!-- #endif -->
					
					<!-- #ifdef APP-PLUS -->
					<img src="static/icon/rubbish.svg" alt="" class="iconsecond" @click="deleteitem">
					<!-- #endif -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"cartitem",
		props:{
			cartitem:{
				type:Object,
				default(){
					return{}
				}
			},
		},
		data() {
			return {
				itemshow:false,
				itemnumber:1
			};
		},
		methods:{
			event(){
				const params={price:this.cartitem.price,count:this.itemnumber}
				this.$emit('additem',params)
			},
			parentstatus(){
				if(this.itemshow===false){
					const params={price:this.cartitem.price,count:this.itemnumber}
					this.$emit('itemjian',params)
				}
				else{
					this.event()
				}
			},
			changestatus(){
				this.itemshow=!this.itemshow
				if(this.itemshow===false){
					const params={price:this.cartitem.price,count:this.itemnumber}
					this.$emit('itemjian',params)
					this.$parent.$parent.totalshow=false
					this.$parent.$parent.number--
				}
				else{
					this.event()
					this.$parent.$parent.number++
				}
			},
			deleteitem(){
				if(this.itemshow===true){
					const params={price:this.cartitem.price,count:this.itemnumber}
					this.$parent.$parent.number--
					this.$parent.$parent.number=0
					this.$emit('itemjian',params)
				}
				this.$emit('deleteitem',this.cartitem.cateid)
			},
			add(){
				if(this.itemshow===true){
					this.$emit("continueadd",this.cartitem.price)
				}
				this.itemnumber++
			},
			jian(){
				if(this.itemshow===true){
					this.$emit("continuejian",this.cartitem.price)
				}
				this.itemnumber--
			}
		},
	}
</script>

<style scoped>
.cartitem{
	display: flex;
	align-items: center;
	height: 200rpx;
	padding-top: 120rpx;
	padding-bottom: 120rpx;
	box-shadow: 0rpx 4rpx 2rpx rgb(0,0,0,0.05);
}
.icon{
	height: 50rpx;
	width: 50rpx;
	padding-right: 30rpx;
	padding-left: 50rpx;
}
.image{
	height: 180rpx;
	width: 180rpx;
}
.third{
	align-self: flex-end;
	margin-left: 40rpx;
}
.firstword{
	font-weight: 1000;
}
.secondword{
	font-size: 6rpx;
	padding-left: 20rpx;
	color: #82848A;
}
.thirdword{
	display: flex;
	padding-top: 40rpx;
	margin-bottom: -80rpx;
	align-items: center;
}
.firstdiv{
	color: red;
	font-weight: 1000;
	width: 70rpx;
}
.seconddiv{
	margin-left: 40rpx;
}
.iconsecond{
	height: 40rpx;
	width: 40rpx;
	margin-left: 40rpx;
}
</style>
