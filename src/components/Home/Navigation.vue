<template>
	<div class="navigation clear">
		<div class="navigation-box">
			<div class="navigation-text" v-for="(item,index) in arr">
				<router-link :to="item.to">
					<img :src="item.image" />
					<div v-text="item.title"></div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
					title: '京东超市',
					image: require('../../../public/images/1.png'),
					to: '#'
				}, {
					title: '全球购',
					image: require('../../../public/images/2.png'),
					to: '#'
				}, {
					title: '京东服饰',
					image: require('../../../public/images/3.png'),
					to: '#'
				}, {
					title: '京东生鲜',
					image: require('../../../public/images/4.png'),
					to: '#'
				}, {
					title: '京东到家',
					image: require('../../../public/images/5.png'),
					to: '#'
				}, {
					title: '充值缴费',
					image: require('../../../public/images/6.png'),
					to: '#'
				}, {
					title: '9.9元拼购',
					image: require('../../../public/images/7.png'),
					to: '#'
				}, {
					title: '领券',
					image: require('../../../public/images/8.png'),
					to: '#'
				}, {
					title: '赚钱',
					image: require('../../../public/images/9.png'),
					to: '#'
				}, {
					title: '全部',
					image: require('../../../public/images/10.png'),
					to: '#'
				}]
			};
		}
	}
</script>

<style>
	/*/快速导航 start/*/
	
	.navigation .navigation-box {
		text-align: center;
		margin-top: 20px;
	}
	
	.navigation .navigation-box .navigation-text {
		float: left;
		width: 20%;
		margin-bottom: 15px;
	}
	
	.navigation .navigation-box .navigation-text img {
		width: 50px;
		height: 50px;
		margin-bottom: 5px;
	}
	
	.navigation a {
		display: block;
		text-decoration: none;
		color: #333;
		font-size: 14px;
		display: block;
	}
</style>