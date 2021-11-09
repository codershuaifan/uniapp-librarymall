<template>
	<u-upload 
	:action="action" 
	:max-size="5 * 1024 * 1024" 
	max-count="1"
	:multiple="false"
	:before-upload="beforeUpload"
	:custom-btn="true"
	:show-progress="false"
	:form-data="formData"
	:deletable="false"
	@on-success="success"
	ref="upload"
	:show-upload-list="false">
		<u-avatar :src="this.vuex_user.avatar_url" size="140" slot="addBtn"></u-avatar>
	</u-upload>
</template>

<script>
	let _this={}
	export default {
		name: "image-upload",
		data() {
			return {
				action: '',
				formData:{},
				upFileName:'',
			};
		},
		created(){
			_this=this
		},
		methods: {
			async beforeUpload(index, list) {
				
				//处理图片名
				const {file}=list[0]
				
				// #ifdef H5
				const fileName = file.name
				// #endif
				
				// #ifndef H5
				const fileName = file.path
				// #endif
				
				const osstoken=await _this.$u.api.imageupload()
				
				_this.action=osstoken.host
				
				const suffix= fileName.slice(fileName.lastIndexOf('.'))
				const upFileName=_this.$u.guid(20)+suffix
				
				_this.upFileName=upFileName
				
				_this.formData={
					'key' : upFileName,
					'policy': osstoken.policy,
					'OSSAccessKeyId': osstoken.accessid, 
					'success_action_status' : '200',
					'signature': osstoken.signature,
				}
				return true
			},
			async success(){
				
				this.$refs.upload.remove(0)
				await this.$u.api.imagesave({avatar:this.upFileName})
				
				this.$u.utils.upteinfo()
				
				this.$u.toast('更新成功')
			}
		}
	}
</script>

<style>

</style>
