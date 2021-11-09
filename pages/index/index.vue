<template>
	<view>
		<u-swiper :list="showimage" height="350" :effect3d="true" name="img_url"></u-swiper>
		<u-tabs class="u-m-t-20 tabs" :list="showlist" :is-scroll="false" :current="current" @change="change" bar-width="70"></u-tabs>
		<u-row gutter="16" class="u-skeleton">
			<u-col span="6" v-for="item in goods.length !==0 ?goods:[{},{}]">
				<goods :goodsitem="item"></goods>
			</u-col>
		</u-row>
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showlist:[{name:'默认'},{name:'推荐'},{name:'销量'},{name:'最新'}],
				current:0,
				showimage:[],
				goods:[],
				params:{page:2},
				loading:false,
			}
		},
		async onLoad() {
			this.loading=true
			const res=await this.$u.api.getIndex(this.params)
			console.log(res)
			this.showimage=res.slides
			this.goods=res.goods.data
			this.loading=false
		},
		methods: {
			change(index){
				this.current=index
				if(this.current===0)this.params={}
				if(this.current===1)this.params={recommend:1}
				if(this.current===2)this.params={sales:1}
				if(this.current===3)this.params={new:1}
				this.params.page=2
				this.$u.api.getIndex(this.params).then(res=>{
					this.showimage=res.slides
					this.goods=res.goods.data
				})
			},
		},
		async onReachBottom(){
			this.params.page+=1
			const res=await this.$u.api.getIndex(this.params)
			this.goods=this.goods.concat(res.goods.data)
		}
	}
</script>

<style lang="scss" scoped>
	.tabs{
		margin-bottom: 10rpx;
	}
	
	.u-col{
		margin-top:20rpx;
	}
</style>
