<template>
	<view class="u-wrap">
		<view class="u-search-box">
			<view>
				<u-search placeholder="搜索想要的图书" v-model="keyword" @custom="search"></u-search>
			</view>
		</view>
		<view class="u-menu-wrap">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
				<view v-for="(item,index) in catelist" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']"
				 :data-current="index" @tap.stop="swichMenu(index)">
					<text class="u-line-1">{{item.name}}</text>
				</view>
			</scroll-view>
			<block v-for="(item,index) in tabbar" :key="index">
				<scroll-view scroll-y class="right-box" v-if="current==index" @scrolltolower="refresh">
					<view class="page-view">
						<view class="class-item">
							<view class="item-container">
								<navigator class="thumb-box" v-for="(item1, index1) in goods" :key="index1" :url="'/pages/detail/detail?id='+item1.id">
									<image class="item-menu-image" :src="item1.cover_url" mode=""></image>
									<view class="item-menu-name">{{item1.title}}</view>
								</navigator>
								<view class="u-flex-1 u-p-b-80 u-p-t-80">
									<u-empty text="本分类无结果" mode="list" v-if="goods.length===0"></u-empty>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</block>
		</view>
	</view>
</template>

<script>
	import classifyData from "@/common/classify.data.js";
	export default {
		data() {
			return {
				tabbar: classifyData,
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				catelist:[],
				keyword:'',
				goods:[],
				goodsfake:[],
				currentindex:0,
			}
		},
		async onLoad(){
			const res=await this.$u.api.getcartgoods()
			
			//分栏名
			for(var i =0;i<5;i++){
				this.catelist=this.catelist.concat(res.categories[i].children)
			}
			this.catelist.forEach((item,index)=>{
				if(item.name==="678"){
					this.catelist.splice(index,1)
				}
			})
			const first={name:'全部'}
			this.catelist.unshift(first)
			this.catelist.forEach(item=>item.page=2)
			
			//分栏数据
			this.goods.push(...res.goods.data)
			this.goodsfake=this.goods
			// for(var j=0;j<10;j++){
			// 	let params={page:j}
			// 	const resgoods=await this.$u.api.getcartgoods(params)
			// 	this.goods.push(...resgoods.goods.data)
			// }
		},
		methods: {
			getImg() {
				return Math.floor(Math.random() * 35);
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				this.currentindex=index
				//获取分栏数据
				if(index===0){
					this.goods=this.goodsfake
				}
				else{
					const params={title:this.catelist[index].name}
					const res=await this.$u.api.getcartgoods(params)
					this.goods=res.goods.data
				}
				
				// if(this.goods.length===0){
				// 	this.isshow=!this.isshow
				// }
				// else{this.isshow=!this.isshow}
				
				if(index == this.current) return ;
				this.current = index;
				// 如果为0，意味着尚未初始化
				if(this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({size: true},res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if(!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return ;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			},
			async search(){
				const params={
					title:this.keyword
				}
				const res=await this.$u.api.getcartgoods(params)
				this.currentindex=3
				this.$u.toast('搜索成功')
				this.goods=res.goods.data
			},
			async refresh(){
				if(this.currentindex===0){
					const params={page:this.catelist[this.currentindex].page}
					const res=await this.$u.api.getcartgoods(params)
					this.goods.push(...res.goods.data)
					this.catelist[this.currentindex].page++
				}
				if(this.currentindex===3){
				}
				else{
					const params={title:this.catelist[this.currentindex].name,page:this.catelist[this.currentindex].page}
					const res=await this.$u.api.getcartgoods(params)
					this.goods.push(...res.goods.data)
					this.catelist[this.currentindex].page++
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}
	
	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}
	
	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.u-tab-view {
		height: 100%;
	}
	
	.right-box {
		background-color: rgb(250, 250, 250);
	}
	
	.page-view {
		padding: 16rpx;
	}
	
	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}
	
	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}
	
	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}
	
	.item-container {
		display: flex;
		flex-wrap: wrap;
	}
	
	.thumb-box {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}
	
	.item-menu-image {
		width: 200rpx;
		height: 200rpx;
	}
</style>
