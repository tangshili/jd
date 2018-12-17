<template>
	<div class="categorys">
		<div class="pagination">
			<div class="pagination-aside clear">
				<ul>
					<li class="red">热门推荐</li>
					<li>手机数码</li>
					<li>家用电器</li>
					<li>电脑办公</li>
					<li>计生情趣</li>
					<li>美妆护肤</li>
					<li>个护清洁</li>
					<li>汽车用品</li>
					<li>京东超市</li>
					<li>男装</li>
					<li>男鞋</li>
					<li>女装</li>
					<li>女鞋</li>
					<li>母婴童装</li>
					<li>图书音像</li>
					<li>运动户外</li>
					<li>内衣配饰</li>
					<li>内衣配饰</li>
					<li>食品生鲜</li>
					<li>酒水饮料</li>
					<li>家具家装</li>
					<li>家居厨具</li>
					<li>箱包手袋</li>
					<li>钟表珠宝</li>
					<li>玩具乐器</li>
					<li>医药保健</li>
					<li>宠物生活</li>
					<li>礼品鲜花</li>
					<li>农资绿植</li>
					<li>生活旅行</li>
					<li>奢侈品</li>
					<li>全球购</li>
					<li>艺术邮币</li>
					<li>二手商品</li>
					<li>特产馆</li>
					<li>京东金融</li>
					<li>国际名牌</li>
					<li>拍卖</li>
					<li>房产</li>

				</ul>
			</div>
			<div class="pagination-main">
				<div class="category-img">
					<img src="../../assets/images/f-banner1.png" />
				</div>
				<div class="list-hot ">
					<h4>热门分类</h4><small><img src="../../assets/images/xiaotubiao.png"  />排行榜&nbsp;></small>
				</div>
				<ul class="pagination-main-ul">
					<li>
						<img src="../../assets/images/f-1.jpg" />
						<a href="#">手机</a>
					</li>
					<li>
						<img src="../../assets/images/f-2.jpg" />
						<a href="#">耳机</a>
					</li>
					<li>
						<img src="../../assets/images/f-3.png" />
						<a href="#">剃须刀</a>
					</li>
					<li>
						<img src="../../assets/images/f-4.png" />
						<a href="#">路由</a>
					</li>
					<li>
						<img src="../../assets/images/f-5.png" />
						<a href="#">华为</a>
					</li>
					<li>
						<img src="../../assets/images/f-6.png" />
						<a href="#">袜子</a>
					</li>
					<li>
						<img src="../../assets/images/f-7.jpg" />
						<a href="#">短裤</a>
					</li>
					<li>
						<img src="../../assets/images/f-8.png" />
						<a href="#">吹风机</a>
					</li>
					<li>
						<img src="../../assets/images/f-9.png" />
						<a href="#">洗衣液</a>
					</li>
					<li>
						<img src="../../assets/images/f-10.png" />
						<a href="#">鼠标</a>
					</li>
					<li>
						<img src="../../assets/images/f-11.png" />
						<a href="#">秋衣</a>
					</li>
					<li>
						<img src="../../assets/images/f-12.png" />
						<a href="#">oppo</a>
					</li>
					<li>
						<img src="../../assets/images/f-13.png" />
						<a href="#">充电宝</a>
					</li>
					<li>
						<img src="../../assets/images/f-14.png" />
						<a href="#">U盘</a>
					</li>
					<li>
						<img src="../../assets/images/f-15.jpg" />
						<a href="#">牛奶</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.pagination {
		padding: 45px 0px 60px;
		box-sizing: border-box;
		height: 100%;
		position: relative;
		background-color:white;
	}
	
	.pagination-aside {
		position: fixed;
		left: 0;
		top: 58px;
		width: 86px;
		min-height: 100%;
		float: left;
		background-color: white;
		overflow: hidden;
		
	}
	
	.pagination-aside ul {
		width: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.pagination-aside ul li {
		font-size: 14px;
		line-height: 46px;
		text-align: center;
	}
	
	.pagination-aside ul li:hover {
		cursor: pointer;
	}
	
	.pagination-aside ul li:hover {
		color: red;
		width: 86px;
		height: 46px;
		background-color: white;
	}
	
	.pagination-main {
		min-height: 100%;
		width: 100%;
		padding-left: 86px;
		box-sizing: border-box;
	}
	
	.pagination-main {
		width: 100%;
		height: auto;
	}
	/*//*/
	/*//*/
	
	.pagination-main {
		width: 100%;
		margin: 12px;
		overflow: hidden;
		padding-right: 10px;
	}
	
	.pagination-main .swiper-container {
		width: 100%;
	}
	
	.pagination-main .swiper-container img {
		width: 100%;
	}
	
	.pagination-main .list-hot {
		width: 100%;
		height: 50px;
		padding-top: 10px;
	}
	
	.pagination-main h4 {
		float: left;
		font-size: 14px;
	}
	
	.pagination-main .list-hot small {
		font-size: 12px;
		float: right;
		display: block;
		padding-right: 30px;
	}
	
	.pagination-main .list-hot small img {
		width: 17px;
		margin-bottom: -4px;
	}
	
	.pagination-main-ul {
		width: 100%;
	}
	
	.pagination-main-ul li {
		margin-bottom: 20px;
		float: left;
		width: 30%;
		text-align: center;
	}
	
	.pagination-main-ul li img {
		width: 100px;
		height: 100px;
	}
	
	.pagination-main-ul li a {
		display: block;
		color: #333;
		text-align: center;
	}
	
	.category-img {
		width: 100%;
		padding: 10px 10px 0px 0px;
		box-sizing: border-box;
	}
	
	.category-img img {
		width: 100%;
		height: 100%;
	}
	
	
	/*/头部/*/
.categorys .top {
	width: 100%;
	height: 45px;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 9999;
	border-bottom:1px solid #ccc;
	background-color:white;
}
.categorys .search{
	text-align: center;
	width:100%;
}
.categorys .search .kuohao{
	width:24px;
	height:24px;
	position:absolute;
	top:10px;
	left:10px;
}

.categorys .search input{
	width:300px;
	height:24px;
	background-color:#ddd;
	border-radius:12px;
	border:0px;
	margin-top:10px;
	padding-left:32px;
	z-index: -1;
	margin-right:20px;
	position:relative;
	left:2px;
	
}
.categorys .search i{
	position:absolute;
	top:15px;
	left:46px;
}

.categorys .search  a{
	color:white;
	width:36px;
	height:24px;
	background-color:#E93B3D;
	display:inline-block;
	border-radius:5px;
	text-align: center;
	line-height:24px;
	font-size:14px;
	position: absolute;
    top: 10px;
    right: 10px;
}
</style>