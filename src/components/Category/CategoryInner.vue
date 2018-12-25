<template>

	<div class="category-page">
		<search-bar></search-bar>

		<div class="container weui-flex">

			<div class="aside" ref="aside" @touchstart="asideTouchStart" @touchmove="asideTouchMove" @touchend="asideTouchEnd">

				<ul ref="aside-ul" :style="{top:asideTop+'px'}" :class="{transition:transition}">
					<li :class="{active:navIndex==index}" v-for="(item,index) in nav" v-text="item.title" @click="navIndex=index;getContentList(item.id);"> </li>
				</ul>

			</div>

			<div class="content weui-flex__item"  ref="content" @touchstart="contentTouchStart" @touchmove="contentTouchMove" @touchend="contentTouchEnd">

				<div class="category-list"  ref="category-list" :style="{top:contentTop+'px'}">

					<div class="category-image">
						<img :src="products.image">
					</div>

					<div class="category-jd" v-for="(row,i) in products.category">

						<div class="title" v-text="row.title"></div>
						<ul class="clear">
							<li class="prodcut left" v-for="(col,j) in row.list">
								<img :src="col.image">
								<div class="product-name" v-text="col.name"></div>
							</li>
						</ul>

					</div>

				</div>

			</div>

		</div>

		<bottom></bottom>
	</div>
</template>

<script>
	import SearchBar from "@/components/SearchBar"
	import Bottom from "@/components/Footer"
	export default {
		data() {
			return {
				nav: [{
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '手机数码'
				}, {
					id: 1,
					'title': '家用电器'
				}, {
					id: 1,
					'title': '电脑办公'
				}, {
					id: 1,
					'title': '计生情趣'
				}, {
					id: 1,
					'title': '美妆护肤'
				}, {
					id: 1,
					'title': '个护清洁'
				}, {
					id: 1,
					'title': '汽车用品'
				}, {
					id: 1,
					'title': '京东超市'
				}, {
					id: 1,
					'title': '男装'
				}, {
					id: 1,
					'title': '男鞋'
				}, {
					id: 1,
					'title': '女装'
				}, {
					id: 1,
					'title': '女鞋'
				}, {
					id: 1,
					'title': '母婴童装'
				}, {
					id: 1,
					'title': '图书音像'
				}, {
					id: 1,
					'title': '运动户外'
				}, {
					id: 1,
					'title': '内衣配饰'
				}, {
					id: 1,
					'title': '食品生鲜'
				}, {
					id: 1,
					'title': '酒水饮料'
				}, {
					id: 1,
					'title': '家具家装'
				}, {
					id: 1,
					'title': '家居厨具'
				}, {
					id: 1,
					'title': '箱包手袋'
				}, {
					id: 1,
					'title': '钟表珠宝'
				}, {
					id: 1,
					'title': '玩具乐器'
				}],
				navIndex: 0,
				asideTop: 0,
				asideTopTmp: 0,
				asideStartY: 0,
				minTop: 0,
				transition: false,

				category: [{
					image: require('../../assets/images/xinrenlibao.png'),
					category: [{
						title: '热门分类',
						list: [{
							image: require('../../assets/images/phone-1.jpg'),
							name: '老人机'
						}, {
							image: require('../../assets/images/phone-2.jpg'),
							name: '手机'
						}, {
							image: require('../../assets/images/phone-3.jpg'),
							name: '全面屏手机'
						}, {
							image: require('../../assets/images/phone-4.jpg'),
							name: '游戏手机'
						}, {
							image: require('../../assets/images/phone-5.jpg'),
							name: '拍照手机'
						}, {
							image: require('../../assets/images/phone-6.jpg'),
							name: '对讲机'
						}, {
							image: require('../../assets/images/phone-7.jpg'),
							name: '京东回收'
						}, {
							image: require('../../assets/images/phone-8.jpg'),
							name: '女性手机'
						}, {
							image: require('../../assets/images/phone-9.jpg'),
							name: '京东维修'
						}, {
							image: require('../../assets/images/phone-10.jpg'),
							name: '合约手机'
						}, {
							image: require('../../assets/images/phone-11.jpg'),
							name: '选号卡'
						}, {
							image: require('../../assets/images/phone-12.jpg'),
							name: '办套餐'
						}]
					}, {
						title: '家电搜索',
						list: [{
							image: require('../../assets/images/appliance-1.jpg'),
							name: '电压力锅'
						}, {
							image: require('../../assets/images/appliance-2.jpg'),
							name: '电饭煲'
						}, {
							image: require('../../assets/images/appliance-3.jpg'),
							name: '电磁炉'
						}, {
							image: require('../../assets/images/appliance-4.jpg'),
							name: '微波炉'
						}, {
							image: require('../../assets/images/appliance-5.jpg'),
							name: '电饼铛'
						}, {
							image: require('../../assets/images/appliance-6.jpg'),
							name: '豆浆机'
						}, {
							image: require('../../assets/images/appliance-7.jpg'),
							name: '多用途锅'
						}, {
							image: require('../../assets/images/appliance-8.jpg'),
							name: '料理机'
						}, {
							image: require('../../assets/images/appliance-9.jpg'),
							name: '榨汁机'
						}, {
							image: require('../../assets/images/appliance-10.jpg'),
							name: '电烤箱'
						}, {
							image: require('../../assets/images/appliance-11.jpg'),
							name: '茶壶'
						}, {
							image: require('../../assets/images/appliance-12.jpg'),
							name: '电炖锅'
						}]
					}]
				}, {
					image: require('../../assets/images/xinrenlibao.png'),
					category: [{
						title: '美妆',
						list: [{
							image: require('../../assets/images/makeups-1.jpg'),
							name: '明星同款面膜'
						}, {
							image: require('../../assets/images/makeups-2.jpg'),
							name: '显白口红'
						}, {
							image: require('../../assets/images/makeups-3.jpg'),
							name: '小美盒'
						}, {
							image: require('../../assets/images/makeups-4.jpg'),
							name: '新品速递'
						}, {
							image: require('../../assets/images/makeups-5.jpg'),
							name: '精选礼盒'
						}, {
							image: require('../../assets/images/makeups-6.jpg'),
							name: '潮流风尚'
						}, {
							image: require('../../assets/images/makeups-7.jpg'),
							name: '护肤礼盒'
						}, {
							image: require('../../assets/images/makeups-8.jpg'),
							name: '深层清洁'
						}, {
							image: require('../../assets/images/makeups-9.jpg'),
							name: '敏感肌'
						}, {
							image: require('../../assets/images/makeups-10.jpg'),
							name: '卸妆'
						}, {
							image: require('../../assets/images/makeups-11.jpg'),
							name: '洁面'
						}, {
							image: require('../../assets/images/makeups-12.jpg'),
							name: '爽肤水'
						}]
					}, {
						title: '钟表饰品',
						list: [{
							image: require('../../assets/images/clock-1.jpg'),
							name: '瑞表'
						}, {
							image: require('../../assets/images/clock-2.jpg'),
							name: '国表'
						}, {
							image: require('../../assets/images/clock-3.jpg'),
							name: '德表'
						}, {
							image: require('../../assets/images/clock-4.jpg'),
							name: '日韩表'
						}, {
							image: require('../../assets/images/clock-5.jpg'),
							name: '儿童手表'
						}, {
							image: require('../../assets/images/clock-6.jpg'),
							name: '欧美表'
						}, {
							image: require('../../assets/images/accessories-1.jpg'),
							name: '时尚戒指'
						}, {
							image: require('../../assets/images/accessories-2.jpg'),
							name: '耳饰'
						}, {
							image: require('../../assets/images/accessories-3.jpg'),
							name: '项链'
						}, {
							image: require('../../assets/images/accessories-4.jpg'),
							name: 'chocker'
						}, {
							image: require('../../assets/images/accessories-5.jpg'),
							name: '手链'
						}, {
							image: require('../../assets/images/accessories-6.jpg'),
							name: '发饰'
						}]
					}]
				}],
				products: [],
				contentTop:0,
				contentTopTmp: 0,
				contentStartY: 0,
				contentMinTop: 0,
			};
		},
		methods: {
			asideTouchStart(event) {
				this.transition = false;
				this.asideStartY = event.changedTouches[0].clientY;
			},
			asideTouchMove(event) {
				var y = event.changedTouches[0].clientY;

				var t = this.asideTopTmp + y - this.asideStartY;
				// 限定上拉和下拉的阈值;
				t = t < this.minTop ? this.minTop : t;
				t = t > 150 ? 150 : t;

				this.asideTop = t;
			},
			asideTouchEnd(event) {
				this.transition = true;
				this.asideTop = this.asideTop > 0 ? 0 : this.asideTop;
				this.asideTop = this.asideTop < (this.minTop + 150) ? (this.minTop + 150) : this.asideTop;
				this.asideTopTmp = this.asideTop;
			},
			
			contentTouchStart(event) {
//				this.transition = false;
				this.contentStartY = event.changedTouches[0].clientY;
			},
			contentTouchMove(event) {
				var y = event.changedTouches[0].clientY;

				var t = this.contentTopTmp + y - this.contentStartY;
				// 限定上拉和下拉的阈值;
				t = t < this.contentMinTop ? this.contentMinTop : t;
				t = t > 150 ? 150 : t;

				this.contentTop = t;
			},
			contentTouchEnd(event) {
//				this.transition = true;
				this.contentTop = this.contentTop > 0 ? 0 : this.contentTop;
				this.contentTop = this.contentTop < (this.contentMinTop + 150) ? (this.contentMinTop + 150) : this.contentTop;
				this.contentTopTmp = this.contentTop;
			},
			
			getContentList(id) {
				this.products = { ...this.category[(Math.random() > 0.5 ? 0 : 1)]
				};
				console.log(this.products)
			}
		},
		mounted() {
			console.log(document.querySelector(".category-page .aside").clientHeight);
			console.log(document.querySelector(".category-page .aside ul").clientHeight);

			console.log(this.$refs['aside'].clientHeight);
			console.log(this.$refs['aside-ul'].clientHeight);

			this.minTop = this.$refs['aside'].clientHeight - 150 - this.$refs['aside-ul'].clientHeight;

			console.log(this.minTop);
			
			
			this.contentMinTop = this.$refs['content'].clientHeight - 150 - this.$refs['category-list'].clientHeight;
		},
		created() {
			this.getContentList();
		},
		updated(){
			this.contentMinTop = this.$refs['content'].clientHeight - 150 - this.$refs['category-list'].clientHeight;
		},
		components: {
			Bottom,
			SearchBar,
		}
	}
</script>

<style>
	html,
	body,
	#app,
	.category-page {
		height: 100%;
		background-color:#ffffff;
	}
	
	.category-page {}
	
	.category-page .search-bar {
		background-color: #e43130;
	}
	
	.category-page .container {
		background-color: #FFFFFF;
		height: 100%;
		padding: 45px 0px 50px;
		box-sizing: border-box;
	}
	
	.category-page .aside {
		height: 100%;
		width: 85px;
		overflow: hidden;
		position: relative;
		background-color: #f8f8f8;
	}
	
	.category-page .aside ul {
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		/*border-right: solid 1px #CCCCCC;
		border-top: solid 1px #CCCCCC;*/
		box-sizing: border-box;
	}
	
	.transition {
		-webkit-transition: top 0.3s linear;
		transition: top 0.3s linear;
	}
	
	.category-page .aside li {
		height: 46px;
		line-height: 46px;
		text-align: center;
		/*border-bottom: solid 1px #CCCCCC;*/
		box-sizing: border-box;
		color: #333;
		font-size: 14px
	}
	
	.category-page .aside li.active {
		color: #f23030;
		background-color:#ffffff;
	}
	
	.category-page .content {
		overflow: hidden;
		position: relative;
	}
	
	.category-list {
		width: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.category-image {
		padding: 7px 7px 0px;
		box-sizing: border-box;
	}
	
	.category-image img {
		width: 100%;
	}
	
	.category-jd {
		padding: 19px 7px 0px;
		box-sizing: border-box;
	}
	
	.category-jd .title {
		font-size: 14px;
		color: #333;
		margin: 0;
		padding: 0;
		line-height: 1em;
		font-weight: 700;
		color: #080808;
	}
	
	.category-jd ul {
		margin: 9px 0px 0px;
		padding: 0px;
	}
	
	.category-jd li {
		width: 33.333%;
		list-style: none;
		text-align: center;
	}
	
	.category-jd li img {
		width: 70px;
		height: 70px;
	}
	
	.category-jd li .product-name {
		color: #333;
		height: 35px;
		margin-top: 2px;
		font-size:12px;
	}
</style>