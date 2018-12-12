<template>
	<div class="shopping-cart">
		<top-bar>购物车</top-bar>

		<div class="shopping-list">

			<div class="item weui-flex" v-for="(item,index) in products">
				<!--选中框 -->
				<div class="select">
					<span class="check-box " :class="{checked:item.select}" @click="select(index)"></span>
				</div>
				<!-- 商品图片-->
				<div class="product-image">
					<router-link :to="'/product/'+item.id"><img :src="item.image"></router-link>
				</div>

				<div class="product-content weui-flex__item">
					<!--标题-->
					<router-link :to="'/product/'+item.id">
						<div class="title" v-text="item.title"></div>
					</router-link>
					<div class="product-line weui-flex">
						<!--价格-->
						<div class="price weui-flex__item">￥<span v-text="item.price"></span></div>
						<!-- 数量 -->
						<div class="num">
							<span class="fa fa-minus" @click="item.count>1?--item.count:1"></span>
							<span class="count" v-text="item.count"></span>
							<span class="fa fa-plus" @click="item.count++"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fixbar weui-flex">
			<div class="select-all" @click="selectAll">
				<span class="check-box" :class="{checked:all}"></span>
				<span class="all">全选</span>
			</div>

			<div class="total weui-flex__item">
				总计:<span class="total-price">￥<span v-text="sum"></span></span>
			</div>
			<a href="#" class="buy">去结算 <span class="total-count">(<span v-text="total"></span>件)</span>
			</a>
		</div>

	</div>
</template>

<script>
	import TopBar from "@/components/TopBar"
	export default {
		name: 'cart',
	data() {
		return {
			products: [{
				title: '丸美（MARUBI） 丸美多肽蛋白提拉紧致化妆品套装旗舰店 滋润淡纹弹力修护 五件套（洁面乳+润养露+紧致乳+精华乳+眼精华）',
				price: 1088,
				count: 1,
				id: 1,
				select: false,
				image: require('../assets/images/product-1.png')
			}, {
				title: 'HR赫莲娜绿宝瓶修护睡眠晚霜50ml(补水保湿 弹润 舒缓滋润肌肤 面霜 晚霜) 绿宝瓶晚霜50ml',
				price: 5999,
				count: 1,
				id: 2,
				select: 1580,
				image: require('../assets/images/product-2.png')
			}, {
				title: 'HR赫莲娜澄光肌活精华乳液50ml（光感透亮 保湿滋润 改善黯沉 亮肌美肌 精华液） 精华乳液50ml',
				price: 1380,
				count: 1,
				id: 3,
				select: false,
				image: require('../assets/images/product-3.png')
			}, {
				title: 'HR赫莲娜绿宝瓶明眸焕颜精华礼盒（明星同款精华礼盒 护肤套装 修护眼周 补水保湿  ） 绿宝瓶精华眼霜套装',
				price: 1700,
				count: 1,
				id: 4,
				select: false,
				image: require('../assets/images/product-4.png')
			}],
			selects: [],
			all: false
		};
	},
		methods: {
			select(index) {
				this.products[index].select = !this.products[index].select;
				if(this.products[index].select) {
					let flag = false;
					for(let i = 0; i < this.selects.length; i++) {
						if(this.selects[i].id == this.products[index].id) {
							flag = true;
						}
					}
					if(!flag) {
						this.selects.push(this.products[index]);
					}
				} else {
					for(let i = 0; i < this.selects.length; i++) {
						if(this.selects[i].id == this.products[index].id) {
							this.selects.splice(i, 1);
						}
					}
				}

				if(this.selects.length != this.products.length) {
					this.all = false;
				} else {
					this.all = true;
				}

				console.log(this.selects);
			},
			selectAll() {
				this.all = !this.all;
				if(this.all) {
					for(let i = 0; i < this.products.length; i++) {
						this.products[i].select = true;
						this.selects.push(this.products[i]);
					}

				} else {
					for(let i = 0; i < this.products.length; i++) {
						this.products[i].select = false;
					}
					this.selects = [];
				}
			}
		},
		computed: {
			// 总数量
			total() {
				let n = 0;
				for(let i = 0; i < this.selects.length; i++) {
					n += this.selects[i].count;
				}
				return n;
			},
			// 总价
			sum() {
				let n = 0;
				for(let i = 0; i < this.selects.length; i++) {
					n += this.selects[i].count * this.selects[i].price;
				}
				return n;
			}

		},
		components: {
			TopBar
		}
	}
</script>

<style>
	.shopping-list {}
	.shopping-list .item {
		display:flex;
		min-height: 75px;
		padding: 5px 10px 15px 0px;
		background: #fff;
		border-bottom: solid 1px #E5E5E5;
	}
	
	.shopping-list .select {
		height: 75px;
		line-height: 75px;
		width: 42px;
		text-align: center;

	}
	/* 单选样式 */
	
	.check-box {
		display: inline-block;
		width: 20px;
		height: 20px;
		background-size: contain;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTJqampmZmZmZmZubm5ubm6KiopeXl5mZmZmZmaKiopmZmVmXLrgAAAALdFJOUwBD8KiAagslwtYWexMYygAAAOVJREFUKM9jYICAUotJms3hDMiAy3M3GExZgBBjc9qtHFiWLmq0WyUBLii02xDCEN6tCBNj2d0IY0rsdoBqtt6KMCl6M8QA5k0CCEFGbQMw7a2O7JCiLWC53QLIghBu0lYUJzNEq4F0N6AKcgD1c2kLoAoyblrAwLKZAQ1YOzBwbkQXlJ7AUK2ALsi0nSHaAF2QeSuDdQC6IOtmhm4BdEHGHQyzC9AF2XcyaCegC7Jtwi6IVTtWi7A6CavjsXoTa4BgDTqsgYw1OrBHHNYoxpoYsCcbrAkMa1LEnmixJ2+sGQE9ywAARBBNCX4Tud8AAAAASUVORK5CYII=);
	}
	/* 选中样式 */
	
	.checked {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAANlBMVEUAAADpPD3tO0HrPD7qPD7qOz7qPD3pOz7qPD3qPD3pPD7rPD/pQkLzRkbqQEDpPUH/VVXpOz3Rbw31AAAAEXRSTlMA6iuA81DZ07+rpXIjFgw7CVCvuuwAAADZSURBVDjLjdVbrsMgDATQoThAeYTO/jd7fy6ioU7wfCXKEY4lMLimlpyCSEi5VNym+civRN9UdnrhEvHnrzsclbhjdZ438Rf2efM27w9mptOkUndT/eAm/x2dbgfdOQsbijfZQ2lzwf2S8eHf+ugzAvXBvdDHc0V5ci83XgqyyTEjmRwTgskxQEyOAjE5yix9dHfvGGYzfXzUHBPysozumFG4SNWxoC4t6I4ViFepuzi22ZSqo183rutdc9LMR8F+uOzH1T4A9iPFPqTsY88+SO2j2T7szdfHHy1xS+1j0wOxAAAAAElFTkSuQmCC);
	}
	
	.shopping-list .product-image {
		width: 75px;
		height: 75px;
	}
	
	.shopping-list .product-image img {
		width: 75px;
		height: 75px;
	}
	
	.shopping-list .product-content {
		padding-left: 10px;
		min-height: 75px;
		
	}
	.shopping-list .product-content a{
		text-decoration:none;
	}
	
	.shopping-list .title {
		font-size: 14px;		
		margin-bottom: 5px;
		color: #333333;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.product-content .price {
		line-height: 30px;
		color: #e4393c;
		font-size: 16px;
	}
	
	.product-content .num span {
		position: relative;
		float: right;
		font-size: 13px;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: #f7f7f7;
		font-weight: 100;
		color: #999;
	}
	
	.product-content .count {
		font-size: 16px;
		color: #333;
	}
	
	.fixbar {
		width: 100%;
		background-color: #fff;
		height: 50px;
		position: fixed;
		bottom: 30px;
		left: 0px;
		border-top: solid 1px #E5E5E5;
	}
	
	.fixbar .select-all {
		padding-top: 5px;
		width: 40px;
		font-size: 10px;
		text-align: center;
		height: 15px;
		color: #999;
	}
	
	.fixbar .select-all .all {
		display: block;
	}
	
	.fixbar .total {
		font-size: 16px;
		font-weight: bold;
		line-height: 50px;
		text-align: right;
	}
	
	.fixbar .total-price {
		color: #e4393c;
	}
	
	.fixbar a.buy {
		display: block;
		width: 110px;
		height: 50px;
		margin-left: 10px;
		line-height: 50px;
		font-size: 16px;
		text-align: center;
		font-weight: 700;
		background: #e4393c;
		color: #fff;
	}
	
	a.buy .total-count {
		font-weight: 400;
		font-size: 12px;
	}
</style>