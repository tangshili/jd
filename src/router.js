import Vue from 'vue'
import Router from 'vue-router'

/**
 * 每一个需要路由的页面
 * */
import Home from './views/Home.vue'
import Cart from './views/ShoppingCart.vue'
import User from './views/UserCenter.vue'
import Category from './views/Category.vue'
import Search from './views/Search.vue'
import Product from './views/ProductDetail.vue'
import Login from './views/Login.vue'
import Goods from './components/Goods.vue'
import Comment from './components/Comment.vue'
import Detail from './components/Detail.vue'
import Recommend from './components/Recommend.vue'
//import ProductDetail from './views/ProductDetail.vue'
import Bt from "./views/Bt"
import Admin from "./views/Admin"
import AdminContent from './components/AdminContent.vue'
import AdminHeader from './components/AdminHeader.vue'
import AdminAside from './components/AdminAside.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/cart',
		name: 'cart',
		component: Cart
	}, {
		path: '/user',
		name: 'user',
		component: User
	}, {
		path: '/category',
		name: 'category',
		component: Category
	}, {
		path: '/search',
		name: 'search',
		component: Search
	}, {
		path: '/product',
		name: 'product',
		component: Product
	}, {
		path: '/login',
		name: 'login',
		component: Login
	},{
		path: '/bt',
		name: 'bootstrap',
		component: Bt
	}]
});

/**
 * , {
		path: '/admin',
		name: 'admin',
		component: Admin,
		children:[{
			path:'',
			components:{
				default:AdminContent,
				header:AdminHeader,
				aside:AdminAside
			}
		}]
	}
 *
 *
 */