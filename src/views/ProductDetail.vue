<!--<template>

	<div class="product-detail">
		<top-bar>
			<tab></tab>
		</top-bar>
		<div class="banners" style="margin-top: 50px;">
			<product-swiper></product-swiper>
		</div>
		<product-info></product-info>
		<white-strip></white-strip>
		<suit></suit>
		<committed-to></committed-to>
		<shop></shop>
		<like></like>
		<introduction></introduction>
		<below></below>
	</div>

</template>

<script>
	import TopBar from "@/components/TopBar"
	import Tab from "@/components/ProductDetail/TopNav"
	import WhiteStrip from "@/components/ProductDetail/WhiteStrip"
	import ProductInfo from "@/components/ProductDetail/ProductInfo"
	import ProductSwiper from "@/components/ProductDetail/ProductSwiper"
	import Suit from "@/components/ProductDetail/Suit"
	import CommittedTo from "@/components/ProductDetail/CommittedTo"
	import Shop from "@/components/ProductDetail/Shop"
	import Like from "@/components/ProductDetail/Like"
	import Introduction from "@/components/ProductDetail/Introduction"
	import Below from "@/components/ProductDetail/Below"
	
	export default {
		data() {
			return {};
		},
		methods: {},
		mounted() {},
		components: {
			TopBar,
			Tab,
			WhiteStrip,
			ProductInfo,
			ProductSwiper,
			Suit,
			CommittedTo,
			Shop,
			Like,
			Introduction,
			Below
		}
	}
</script>

<style>
	@import url("../assets/css/swiper.css");
	@import url("../assets/css/weui.css");
	.banners {
		width: 100%;
	}
	
	.product-detail .swiper-wrapper {
		width: 100%;
	}
	
	.product-detail .swiper-wrapper img {
		width: 100%;
	}
</style>-->

<template>

	<div class="productDetail">

		<top-bar>

			<ol>
				<li :class="{active:navIndex==index}" v-for="(item,index) in nav" @click="navIndex=index;scroll(item.ref)"> <span v-text="item.title"></span> </li>
			</ol>

		</top-bar>

		<div id="product" ref="product">
			<product-swiper></product-swiper>
			<product-info></product-info>
			<white-strip></white-strip>
			<suit></suit>
			<committed-to></committed-to>
			<shop></shop>
			<below></below>
		</div>
		<div id="comment" ref="comment">
			<evaluation></evaluation>
		</div>
		<div id="detail" ref="detail">
			<like></like>
		</div>
		<div id="recommend" ref="recommend">
			
			<introduction></introduction>
		</div>

	</div>

</template>

<script>
	import TopBar from "@/components/TopBar";
	import ProductSwiper from "@/components/ProductDetail/ProductSwiper";
	import ProductInfo from "@/components/ProductDetail/ProductInfo";
	import Suit from "@/components/ProductDetail/Suit";
	import CommittedTo from "@/components/ProductDetail/CommittedTo";
	import Shop from "@/components/ProductDetail/Shop";
	import Like from "@/components/ProductDetail/Like"
	import Introduction from "@/components/ProductDetail/Introduction";
	import Evaluation from "@/components/ProductDetail/Evaluation";
	import Below from "@/components/ProductDetail/Below";
	export default {
		data() {
			return {
				nav: [{
					ref: 'product',
					title: '商品'
				}, {
					ref: 'comment',
					title: '评价'
				}, {
					ref: 'detail',
					title: '推荐'
				}, {
					ref: 'recommend',
					title: '详情'
				}],
				navIndex: 0,
			};
		},

		methods: {
			scroll(ref) {

				console.log(this.$refs[ref]);
				var top = this.$refs[ref].offsetTop;
				//				var tmp = document.documentElement.scrollTop;
				//				var count = 20;
				//				var step = (top-tmp)/count;
				//				var t = setInterval(()=>{
				//					
				//					tmp += step;
				//					document.documentElement.scrollTop = tmp;
				//					count--;
				//					
				//					if(count<=0){
				//						clearInterval(t);
				//					}
				//					
				//				},50);

				document.documentElement.scrollTop = top-44;
				//				document.body.scrollTop = top;
			}
		},
		mounted() {

			console.log(document.body.scrollTop);

		},
		components: {
			TopBar,
			ProductSwiper,
			ProductInfo,
			ProductSwiper,
			Suit,
			CommittedTo,
			Shop,
			Like,
			Introduction,
			Evaluation,
			Below
		}
	}
</script>

<style>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	.productDetail {
		width: 100%;
	}
	
	.productDetail .top-bar {
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
	}
	
	.productDetail .top-bar ol {
		margin: 0;
		padding: 0;
		text-align: center;
		list-style: none;
		padding: 0px 40px;
	}
	
	.productDetail .top-bar ol li {
		float: left;
		width: 25%;
	}
	
	.productDetail .top-bar ol li.active span {
		color: #e4393c;
		font-weight: bold;
		padding-left: 13px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 8px;
	}
	
	.productDetail .product {
		width: 100%;
	}
	
	.productDetail .product-swiper {
		width: 100%;
	}
</style>