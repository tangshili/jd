<template>

	<div class="shopping-cart">
		<ul id="product">
			<li class="flex" v-for="(item,index) in goods">
				<div class="" style="width: 20px;">
					<div class="check-box" :class="{'selected':item.selected}" @click="select(index)"></div>
				</div>
				<div class="flex-item ">
					<div class="flex content">
						<div class="flex-item" @click="gotoProduct(item.id)">
							<div class="image">
								<img v-bind:src="item.image" />
							</div>
						</div>
						<div class="flex-item inner" >
							<div class="text"  @click="gotoProduct(item.id)">
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
					image: require('../assets/images/product-2.png'),
					selected: false,
				}, {
					id: 3,
					title: 'HR赫莲娜澄光肌活精华乳液50ml（光感透亮 保湿滋润 改善黯沉 亮肌美肌 精华液） 精华乳液50ml',
					price: 1380,
					count: 1,
					image: require('../assets/images/product-3.png'),
					selected: false,
				}, {
					id: 3,
					title: 'HR赫莲娜绿宝瓶明眸焕颜精华礼盒（明星同款精华礼盒 护肤套装 修护眼周 补水保湿  ） 绿宝瓶精华眼霜套装',
					price: 1700,
					count: 1,
					image: require('../assets/images/product-4.png'),
					selected: false,
				}, {
					id: 3,
					title: '【国内专柜秒发】娇兰水合青春保湿精华露 保湿滋润补水 光滑紧致 50ml',
					price: 1489,
					count: 1,
					image: require('../assets/images/product-5.png'),
					selected: false,
				}, {
					id: 3,
					title: '丸美tokyo日本酒御龄冰肌套装 酒粕补水保湿抗皱提亮肤色收缩毛孔提拉紧致官方旗舰店女 洁面+水+乳+精华液+霜+眼部组合',
					price: 3678,
					count: 1,
					image: require('../assets/images/product-6.png'),
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
			},gotoProduct(id){
				this.$router.push({path:'/product',query:{id:id}});
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
		margin: 0px;
		padding: 0px;
	}
	
	html {
		font-size: calc(100vw/7.5);
	}
	
	body {
		font-size: 16px;
	}
	
	.left {
		float: left;
	}
	
	.shopping-cart ul li {
		list-style: none;
		margin-bottom: 3px;
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
		width: 15px;
		height: 15px;
		background-image: url(../assets/images/select.png);
		background-size: contain;
		margin-top: 30px;
		position: relative;
		right: 5px;
		top: 6px;
	}
	
	.check-box.selected {
		background-image: url(../assets/images/selected.png);
	}
	
	.shopping-cart ul {
		margin: 0px auto;
		box-sizing: border-box;
	}
	
	#product li {
		box-sizing: border-box;
		padding: 10px 12px;
		background-color: #fff;
	}
	
	.left {
		width: 2px;
		height: auto;
		box-sizing: border-box;
		position: relative;
	}
	
	.left .image01 {
		margin-top: 15px;
	}
	
	.left .image01 img {
		width: 15px;
		height: 15px;
	}
	/*right*/
	
	.right {
		box-shadow: 0px 0px 15px #ddd;
		margin-left: -30px;
		width: 240px;
	}
	
	.right .content {
		margin: 20px 0px 7px;
	}
	
	.right .content .inner {
		box-sizing: border-box;
		padding: 0px 10px;
	}
	
	.image {
		width: 75px;
		height: 75px;
		box-sizing: border-box;
		display: inline-block;
		margin-left: 10px;
		padding-top: 20px;
	}
	
	.image img {
		width: 75px;
		height: 75px;
	}
	/*text*/
	
	.text {
		margin-left: -70px;
		box-sizing: border-box;
		line-height: 1.5em;
	}
	
	.text h4 {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		font-size: 12px;
		color: black;
		font-weight: normal;
	}
	
	.text p {
		font-size: 8px;
		color: #D67F8D;
	}
	
	.text p .bai {
		font-size: 10px;
	}
	/*bot*/
	
	.bot {
		margin-left: -70px;
		line-height: 20px;
	}
	
	.money {
		font-size: 12px;
		color: #F62F33;
	}	
	.money #num {
		font-weight: bold;
		font-size: 16px;
	}	
	.choose {
		display: inline-block;
		box-sizing: border-box;
		font-size: 15px;
		font-weight: bold;
		text-align: right;
		padding-right: 15px;
		position: relative;
	}	
	.choose #minus {
		position: absolute;
		right: 60px;
		border: 1px solid #ddd;
	}	
	.choose #num1 {
		position: absolute;
		right: 25px;
		width: 30px;
		height: 100%;
		font-size: 12px;
		font-weight: normal;
		text-align: center;
		border: 1px solid #ddd;
	}	
	.choose #add {
		position: absolute;
		right: 0px;
		border: 1px solid #ddd;
	}	
	.choose #add,
	.choose #minus {		
		width: 20px;
		text-align: center;
		cursor: pointer;
	}
	/*下拉*/	
	.crx {
		line-height: 40px;
		text-align: center;
		background-color: #F5F5F5;
		height: 40px;
		width: 100%;
		font-size: 14px;
	}	
	.crx p {
		padding-top: 2px;
	}
	/*num*/
	/*结算*/	
	.jie {
		padding: 0px 12px;
		font-size: 15px;
		line-height: 50px;
		position: fixed;
		bottom: 45px;
		width: 100%;
		box-shadow: 0px 0px 7px #ddd;
		background-color: white;
		z-index: 9999;
	}	
	.jie .all {}	
	.jie .all img {
		width: 15px;
		height: 15px;
	}	
	.jie .all #ch {
		margin-left: -4px;
		font-size: 12px;
	}	
	.jie .he {
		margin-left: -50px;
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
		margin-left: 50px;
		text-align: center;
		color: #F8ECEB;
		height: 50px;
		background-color: #FB321E;
	}
</style>