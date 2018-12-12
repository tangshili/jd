<template>

	<div>
		<top-bar>

			<ul>
				<li v-for="(item,index) in nav" :class="{active:index==navIndex}" @click="navIndex = index">
					<span v-text="item.title"></span>
				</li>
			</ul>

		</top-bar>
		<!--图片-->
		<div class="banner">
			<!--/轮播图/-->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in images">
						<img :src="item"/>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>

		<!--套餐选择-->
		<!--商品详情-->
		<!--商品评论-->
		<!--商品推荐-->
		<!--加入购物车&立即购买-->
	</div>

</template>

<script>
	import TopBar from "@/components/TopBar"
	import Swiper from "swiper"
	export default {
		data() {
			return {
				nav: [{
					title: "商品"
				}, {
					title: "详情"
				}, {
					title: "评价"
				}, {
					title: "推荐"
				}],
				navIndex: 0,
				images: [require('../assets/images/img-1.png'), require('../assets/images/img-2.png'), require('../assets/images/img-3.png'), require('../assets/images/img-4.png'), require('../assets/images/img-5.png'), require('../assets/images/img-6.png')]
			};
		},
		methods: {

		},
		mounted(){
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});
		},
		components: {
			TopBar,

		}
	}
</script>

<style>
	/*@import url("../assets/css/swiper.css");*/
	.top-bar .slot ul {
		height: 44px;
		background-color: #fff;
		border-bottom: solid 1px #ccc;
		margin: 0;
		padding: 0;
		list-style: none;
		line-height: 44px;
	}
	
	.top-bar .slot ul li {
		float: left;
		width: 25%;
		text-align: center;
	}
	
	.top-bar .slot ul li.active span {
		color: #FF0000;
		font-weight: bolder;
		padding-left: 13px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==);
		background-size: 8px;
		background-position: 3px center;
		background-repeat: no-repeat;
	}
	/**/
	
	.banner {
		width: 100%;
	}
	
	.banner .swiper-wrapper {
		display: block;
		width: 100%;
	}
	
	.banner .swiper-wrapper img {
		width: 100%;
	}
</style>