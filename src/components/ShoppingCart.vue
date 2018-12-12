<template>

	<div class="shopping-cart">
		<ul id="product">
			<li class="flex" v-for="(item,index) in goods">
				<div class="" style="width: 20px;">
					<div class="check-box" :class="{'selected':item.selected}" @click="select(index)"></div>
				</div>
				<div class="flex-item ">
					<div class="flex content">
						<div class="flex-item">
							<div class="image">
								<img v-bind:src="item.image" />
							</div>
						</div>
						<div class="flex-item inner">
							<div class="text">
								<h4 v-text="item.title"></h4>

								<p>
									<span class="bai">→成为店铺会员可享受VIP价，上不封顶，进入主会场</span>
								</p>
							</div>
							<div class="flex bot">
								<div class="money flex-item">
									￥<span id="num" v-text="item.price"></span>.00
								</div>
								<div class="choose flex-item">
									<span id="minus" @click="item.count = item.count>1?--item.count:item.count;">-</span>
									<span id="num1" v-text="item.count"></span>
									<span id="add" @click="item.count++">+</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>

		</ul>

		<!--下拉-->
		<div class="crx">
			<p>——————⊰&nbsp;&nbsp;可能您还想要&nbsp;&nbsp;⊰——————</p>
		</div>
		<!--结算-->
		<div class="flex jie">
			<div class="flex-item all">
				<div class="check-box " :class="{'selected':all}" @click="selectAll" style="margin: 0.1rem;display: inline-block;"></div>
				<span id="ch">
						全选
					</span>
			</div>
			<div class="flex-item he">合计:<span class="qian">￥</span>
				<span id="yu" v-text="money">0</span>
				<span id="jiao">.00</span>
			</div>
			<div class="flex-item go">去结算（<span v-text="total"></span>）</div>
		</div>
		<!--end-->
		

	</div>
</template>

<script>
	export default {
		data() {
			return {
				all: false,
				goods: [{
					id: 1,
					title: '丸美（MARUBI） 丸美多肽蛋白提拉紧致化妆品套装旗舰店 滋润淡纹弹力修护 五件套（洁面乳+润养露+紧致乳+精华乳+眼精华）',
					price: 1088,
					count: 1,
					image: require('../assets/images/product-1.png'),
					selected: false,
				}, {
					id: 2,
					title: 'HR赫莲娜绿宝瓶修护睡眠晚霜50ml(补水保湿 弹润 舒缓滋润肌肤 面霜 晚霜) 绿宝瓶晚霜50ml',
					price: 1580,
					count: 1,
					image:  require('../assets/images/product-2.png'),
					selected: false,
				}, {
					id: 3,
					title: 'HR赫莲娜澄光肌活精华乳液50ml（光感透亮 保湿滋润 改善黯沉 亮肌美肌 精华液） 精华乳液50ml',
					price: 1380,
					count: 1,
					image:  require('../assets/images/product-3.png'),
					selected: false,
				}, {
					id: 3,
					title: 'HR赫莲娜绿宝瓶明眸焕颜精华礼盒（明星同款精华礼盒 护肤套装 修护眼周 补水保湿  ） 绿宝瓶精华眼霜套装',
					price: 1700,
					count: 1,
					image:  require('../assets/images/product-4.png'),
					selected: false,
				}, {
					id: 3,
					title: '【国内专柜秒发】娇兰水合青春保湿精华露 保湿滋润补水 光滑紧致 50ml',
					price: 1489,
					count: 1,
					image:  require('../assets/images/product-5.png'),
					selected: false,
				}, {
					id: 3,
					title: '丸美tokyo日本酒御龄冰肌套装 酒粕补水保湿抗皱提亮肤色收缩毛孔提拉紧致官方旗舰店女 洁面+水+乳+精华液+霜+眼部组合',
					price: 3678,
					count: 1,
					image:  require('../assets/images/product-6.png'),
					selected: false,
				}],
				selected: []
			}
		},
		methods: {
			select: function(index) {
				this.goods[index].selected = !this.goods[index].selected;

				if(this.goods[index].selected) {
					var flag = false;
					for(var i = 0; i < this.selected.length; i++) {
						if(this.selected[i].id == this.goods[index].id) {
							flag = true;
						}
					}

					if(!flag)
						this.selected.push(this.goods[index]);

				} else {

					for(var i = 0; i < this.selected.length; i++) {
						if(this.selected[i].id == this.goods[index].id) {
							this.selected.splice(i, 1);
						}
					}
				}

				if(this.goods.length == this.selected.length) {
					this.all = true;
				} else {
					this.all = false;
				}
				console.log(this.selected);
			},
			selectAll: function() {
				this.all = !this.all;
				this.selected = [];

				if(this.all) {
					for(var i = 0; i < this.goods.length; i++) {
						this.selected.push(this.goods[i]);
						this.goods[i].selected = true;
					}
				} else {
					this.selected = [];
					for(var i = 0; i < this.goods.length; i++) {
						this.goods[i].selected = false;
					}
				}
				console.log(this.selected);
			}
		},
		computed: {
			total: function() {
				var sum = 0;
				for(var i = 0; i < this.selected.length; i++) {
					sum += this.selected[i].count;
				}
				return sum;
			},
			money: function() {
				var sum = 0;
				for(var i = 0; i < this.selected.length; i++) {
					sum += this.selected[i].count * this.selected[i].price;
				}
				return sum;
			}
		}
	}
</script>

<style>
	* {
		margin: 0rem;
		padding: 0rem;
	}
	
	html {
		font-size: calc(100vw/7.5);
	}
	body{
		font-size: 16px;
	}
	
	.left {
		float: left;
	}
	
	.shopping-cart ul li {
		list-style: none;
	}
	
	.flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}
	
	.flex-item {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}
	
	.check-box {
		width: 0.3rem;
		height: 0.3rem;
		background-image: url(../assets/images/select.png);
		background-size: contain;
		margin-top: 0.6rem;
		position: relative;
		right: 0.1rem;
		top: 0.13rem;
	}
	
	.check-box.selected {
		background-image: url(../assets/images/selected.png);
	}
	
	.shopping-cart ul {
		margin: 0rem auto;
		box-sizing: border-box;
		/*background-color: chartreuse;*/
	}
	
	/*#app ul li:first-child {
		margin-top: 1.6rem;
	}*/
	
	/*ul:first-of-type {
		margin-top: 1.4rem;
	}*/
	
	#product  li {
		box-sizing: border-box;
		padding: 0.1rem 0.25rem;
	}
	
	.left {
		width: 0.01rem;
		height: auto;
		box-sizing: border-box;
		position: relative;
	}
	
	.left .image01 {
		margin-top: 0.3rem;
	}
	
	.left .image01 img {
		width: 0.3rem;
		height: 0.3rem;
	}
	/*right*/
	
	.right {
		box-shadow: 0rem 0rem 0.15rem #ddd;
		margin-left: -6rem;
		width: 4.8rem;
		/*	background-color: maroon;*/
	}
	
	.right .content {
		margin: 0.4rem 0rem 0.15rem;
	}
	
	.right .content .inner {
		box-sizing: border-box;
		padding: 0rem 0.2rem;
	}
	
	.image {
		width: 1.5rem;
		height: 1.5rem;
		box-sizing: border-box;
		display: inline-block;
		margin-left: 0.2rem;
		/*background-color: blue;*/
	}
	
	.image img {
		width: 1.5rem;
		height: 1.5rem;
	}
	/*text*/
	
	.text {
		margin-left: -1.4rem;
		box-sizing: border-box;
		/*background-color: violet;*/
	}
	
	.text h4 {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		height: 3em;
		width: 4.2rem;
		/*border: 0.01rem solid saddlebrown;*/
		font-size: 0.25rem;
		color: black;
		font-weight: normal;
	}
	
	.text h5 {
		font-size: 0.22rem;
		color: #666;
		font-weight: normal;
	}
	
	.text p {
		font-size: 0.1rem;
		color: #D67F8D;
		margin: 0.1rem 0rem;
	}
	
	.text p .bai {
		font-size: 0.05rem;
	}
	/*bot*/
	
	.bot {
		margin-left: -1.4rem;
		line-height: 0.4rem;
		/*	background-color: salmon;*/
	}
	
	.money {
		font-size: 0.2rem;
		color: #F62F33;
		/*background-color: khaki;*/
	}
	
	.money #num {
		font-weight: bold;
		font-size: 0.3rem;
	}
	
	.choose {
		display: inline-block;
		box-sizing: border-box;
		font-size: 0.3rem;
		font-weight: bold;
		text-align: right;
		padding-right: 0.3rem;
		position: relative;
		/*background-color: darkorange;*/
	}
	
	.choose #minus {
		position: absolute;
		right: 1.2rem;
		border: 1px solid #ddd;
	}
	
	.choose #num1 {
		position: absolute;
		right: 0.5rem;
		width: 0.6rem;
		height: 100%;
		font-size: 0.24rem;
		font-weight: normal;
		text-align: center;
		border: 1px solid #ddd;
	}
	
	.choose #add {
		position: absolute;
		right: 0rem;
		border: 1px solid #ddd;
	}
	
	.choose #add,
	.choose #minus {
		/*background-color: red;*/
		width: 20px;
		text-align: center;
		cursor: pointer;
	}
	/*下拉*/
	
	.crx p{
		line-height: 0.8rem;
		text-align: center;
		margin-top:10px;
		background-color:#ddd;
		height:0.8rem;
		width:100%;
		font-size:14px;
	}
	/*num*/
	/*结算*/
	
	.jie {
		padding: 0rem 0.25rem;
		font-size: 0.3rem;
		line-height: 1rem;
		position: fixed;
		bottom: 0.9rem;
		width: 100%;
		box-shadow: 0rem 0rem 0.15rem #ddd;
		background-color: white;
		z-index: 9999;
	}
	
	.jie .all {
		/*background-color: red;*/
	}
	
	.jie .all img {
		width: 0.3rem;
		height: 0.3rem;
	}
	
	.jie .all #ch {
		margin-left: -0.08rem;
		font-size:12px;
		
	}
	
	.jie .he {
		margin-left: -1rem;
		/*font-weight: bold;*/
		/*	background-color: blue;*/
	}
	
	.jie .he #yu {
		font-weight: bold;
	}
	
	.jie .he #jiao {
		font-weight: bold;
	}
	.jie .he .qian {
		font-weight: bold;
	}
	
	.jie .go {
		margin-left: 1rem;
		text-align: center;
		color: #F8ECEB;
		height: 1rem;
		background-color: #FB321E;
	}
</style>