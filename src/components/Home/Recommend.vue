<template>
	<div class="product-list clear">

		<div class='product' v-for="(item,index) in products">
			<a :href='item.id'>
				<div class='product-image'>
					<img :src='item.image'>
				</div>
				<div class='product-title' v-text='item.title'></div>
				<div class='product-info'>
					<div class='product-price'>￥<span v-text='item.price'></span></div>
					<div class='product-similar'></div>
				</div>
				<div class='similar-info'></div>
			</a>
		</div>
		<div class="load"><img src="../../assets/images/load2.gif" /></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				products: [{
						title: '丸美（MARUBI）眼霜去细纹 提拉紧致淡化黑眼圈眼袋淡纹眼部精华 （提眼袋 紧眼角）多肽眼精华20ml+5ml*2',
						price: 538,
						image: require('../../assets/images/recommend-1.jpg')
					},
					{
						title: '美度(MIDO)瑞士手表 Baroncelli 贝伦赛丽系列 全自动机械女士腕表 M007.207.36.291.00',
						price: 7301,
						image: require('../../assets/images/recommend-2.jpg')
					},
					{
						title: '水星家纺磨毛四件套加厚床单被套床上用品 希尔海岸 1.5M(5英尺)床',
						price: 1209,
						image: require('../../assets/images/recommend-3.jpg')
					},
					{
						title: '中超联赛 足金999奖杯颁奖金杯 中超冠军奖杯火神杯珍藏版 足球奖杯纪念品定制款',
						price: 1180000,
						image: require('../../assets/images/recommend-4.jpg')
					},
					{
						title: '戴森Dyson Airwrap 多功能美发造型器 卷发器 Airwrap美发棒',
						price: 4998,
						image: require('../../assets/images/recommend-5.jpg')
					},
					{
						title: 'HR赫莲娜绿宝瓶精华露 30ml（明星 精华 修护新生 补水保湿 防护 悦活 滋润）',
						price: 980,
						image: require('../../assets/images/recommend-6.jpg')
					},
					{
						title: '欧莱雅(LOREAL)复颜玻尿酸水光充盈导入眼霜15ml(女士眼霜 高浓度易吸收 填充细纹 减轻眼袋黑眼圈 紧致眼周)',
						price: 280,
						image: require('../../assets/images/recommend-7.jpg')
					},
					{
						title: '瑞士浪琴(Longines)手表 名匠系列男士自动机械表皮带女表情侣一对表 L2.793/128.4.78.3',
						price: 22638,
						image: require('../../assets/images/recommend-8.jpg')
					}
				]

			};
		}
	}
</script>

<style scoped>
	.product-list {
		background-color: #ccc;
		/*margin-top: 20px;*/
		margin-bottom: 206px;
	}
	
	img {
		border: 0 none;
		vertical-align: top;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.product {
		width: 50%;
		float: left;
		padding-right: 2px;
		padding-bottom: 4px;
		box-sizing: border-box;
	}
	
	.product a {
		background-color: #FFFFFF;
		display: block;
		text-decoration: none;
	}
	
	.product:nth-child(2n) {
		padding-right: 0px;
		padding-left: 2px;
	}
	
	.product-image img {
		width: 100%;
	}
	
	.product-title {
		box-sizing: border-box;
		height: 31px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-word;
		color: #232326;
		margin-top: 5px;
		line-height: 16px;
		margin-bottom: 3px;
		padding: 0 4px;
		background-color: #fff;
	}
	
	.product-price {
		color: #f23030;
		display: inline-block;
		padding: 0 5px 0 4px;
		position: relative;
		top: 1px;
		height: 25px;
		line-height: 25px;
	}
	
	.similar-info {
		height: 26px;
	}
	
	.product-list .load {
		width: 100%;
		height: 100px;
		text-align: center;
		background-color: white;
	}
	
	.product-list .load img {
		width: 100px;
		height: 100px;
	}
</style>