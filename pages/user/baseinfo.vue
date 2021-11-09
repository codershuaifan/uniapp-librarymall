<template>
	<view class="u-p-l-40 u-p-r-40">
		<u-form :model="form" ref="uForm" :error-type="errorType">
			<u-form-item label="昵称" prop="name" required>
				<u-input v-model="form.name" />
			</u-form-item>
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorType:['message'],
				form: {
					name: ''
				},
				rules: {
					name: [{
						required: true,
						message: '请输入昵称',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
				}
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(async (valid) => {
					if (valid) {
						
						await this.$u.api.userinfoupte(this.form)
						
						this.$u.utils.upteinfo()
						
						this.$u.toast('更新成功')
					}
				});
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style>

</style>
