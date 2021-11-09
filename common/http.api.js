// /common/http.api.js

// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数
	let getIndex = (params={}) => vm.$u.get('/api/index',params);
	
	let authlogin = params => vm.$u.post('/api/auth/login',params);
	
	let userinfo = () => vm.$u.get('/api/user');
	
	let userregister = params => vm.$u.post('/api/auth/register',params);
	
	let userinfoupte = params => vm.$u.put('/api/user',params);
	
	//退出登录
	let userout = () => vm.$u.post('/api/auth/logout');
	
	//上传头像到阿里云
	let imageupload = () => vm.$u.get('/api/auth/oss/token');
	
	//更新服务器头像
	let imagesave = params => vm.$u.patch('/api/user/avatar',params);
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {getIndex,authlogin,userinfo,userregister,userinfoupte,userout,imageupload,imagesave};
}

export default {
	install
}