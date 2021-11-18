<template>
	<view class="cart">
		<scroll-view scroll-y="true" class="scroll">
			<cartitem v-for="(item,index) in cartlist" :cartitem="item"
			 @deleteitem="deleteitem" :ref="'item'+index" @additem="additem"
			 @continueadd="continueadd" @continuejian="continuejian"
			 @itemjian="itemjian">
			 </cartitem>
			<total class="total" :totalshow="totalshow" @changetotal="changetotal"
			 :totalprice="totalprice" @tiaoabove="tiaoabove">
			 </total>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cartlist:[],
				totalshow:false,
				number:0,
				totalprice:0,
				fakecartlist:[],
			}
		},
		methods: {
			async deleteitem(id){
				await this.$u.api.delegoods(id)
				this.$u.toast('删除成功')
				this.uptecart()
				this.totalprice=0
				this.totalshow=false
			},
			async uptecartsecond(){
				this.cartlist=[]
				const res=await this.$u.api.getcart()
				for(var i of res.data){
					i.goods.cateid=i.id
					this.cartlist.push(i.goods)
				}
				location.reload()
			},
			async uptecart(){
				this.cartlist=[]
				const res=await this.$u.api.getcart()
				for(var i of res.data){
					i.goods.cateid=i.id
					this.cartlist.push(i.goods)
				}
			},
			changetotal(){
				this.totalshow=!this.totalshow
				if(this.totalshow===true){
					for(var i=0;i<this.cartlist.length;i++){
						var name=eval('this.$refs.item'+i+'[0]')
						name.itemshow=true
						name.parentstatus()
					}
					this.number=this.cartlist.length
				}
				else{
					for(var i=0;i<this.cartlist.length;i++){
						var name=eval('this.$refs.item'+i+'[0]')
						name.itemshow=false
						name.parentstatus()
					}
					this.number=0
				}
			},
			additem(params){
				this.totalprice+=params.price*params.count
			},
			continueadd(price){
				this.totalprice+=price
			},
			continuejian(price){
				this.totalprice-=price
			},
			itemjian(params){
				this.totalprice-=params.price*params.count
			},
			tiaoabove(){
				this.fakecartlist=[]
				for(var i=0;i<this.cartlist.length;i++){
					var name=eval('this.$refs.item'+i+'[0]')
					if(name.itemshow===true && name.itemnumber>0){
						name._props.cartitem.itemnumber=name.itemnumber
						this.fakecartlist.push(name._props.cartitem)
						
					}
				}
				uni.setStorage({
					key: 'abovecartlist',
					data: this.fakecartlist
				})
				this.$u.route({
					type:'navigateTo',
					url:'pages/cart/above'
				})
			}
		},
		async onLoad(){
			const res=await this.$u.api.getcart()
			// console.log(res)
			for(var i of res.data){
				i.goods.cateid=i.id
				i.goods.checked=i.is_checked
				this.cartlist.push(i.goods)
			}
		},
		watch:{
			number(newValue,oldValue){
				if(newValue===this.cartlist.length){
					this.totalshow=true
				}
			}
		},
		async onShow(){
			this.$bus.$on('entercart',this.uptecartsecond)
		}
	}
</script>

<style scoped>
	.total{
		z-index: 10;
	}
	.cart{
		height: 100vh;
	}
	.scroll{
		/* #ifdef H5 */
		height: calc(100% - 200rpx - 88rpx);
		/* #endif */
		/* #ifndef H5 */
		height: calc(100% - 88rpx);
		/* #endif */
	}
</style>
