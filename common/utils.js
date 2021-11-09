const install = (Vue, vm) => {
	
	const jumplogin=()=>{
		const token=vm.vuex_token
		if(!token){
			const currentpage=getCurrentPages().pop()
			
			const {options,route}=currentpage
			
			const optionsKeys=Object.keys(options)
			let params=''
			
			if(optionsKeys.length !==0){
				params=optionsKeys.reduce((pre,current)=>{
					return `${pre}${current}=${options[current]}$`
				},'?').slice(0,-1)
			}
			uni.setStorageSync('backurl',route+params)
			vm.$u.toast('请登录')
			setTimeout(()=>{
				vm.$u.route({
					type:'redirect',
					url:'pages/auth/login'
				})
			},1500)
			return false
		}
		return true
	}
	
	const upteinfo=async ()=>{
		const userinfo=await vm.$u.api.userinfo()
		vm.$u.vuex('vuex_user',userinfo)
	}
	
	vm.$u.utils={jumplogin,upteinfo}
}

export default {
	install
}