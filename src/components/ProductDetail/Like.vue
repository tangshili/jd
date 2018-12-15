<template>
	<div class="like">
		<div class="like-title">
			<h1 class="like-h1">猜你喜欢</h1>
		</div>
		<div class="like-productOne weui-flex">
			<div class="like-productOne-1" style="flex: 1;">
				<img src="../../assets/images/like-1.png" />
				<p class="like-p">
					丸美套装弹力蛋白凝时提拉紧致抗皱补水保湿淡化细纹化妆品眼霜护肤品套装官方旗舰店女 保养液+紧致乳+紧致霜+眼精华
				</p>
				<span class="like-price">¥<b class="like-b">1106</b>.00</p></span>
				</div>
				<div class="like-productOne-2" style="flex: 1;">
					<img src="../../assets/images/like-2.png" />
					<p class="like-p">
						丸美化妆品套装女多肽蛋白紧致提拉官方旗舰店 洁面+水+乳+日霜+晚霜+精华+眼精华
					</p>
					<span class="like-price">¥<b class="like-b">1656</b>.00</p></span>
				</div>
				<div class="like-productOne-3" style="flex: 1;">
					<img src="../../assets/images/like-3.png" />
					<p class="like-p">
						丸美 白色之恋套装(洁面120g+露120ml+乳液100g+眼霜20g+卸妆水200ml+3件套+眼霜3g*3+面膜*3)
					</p>
					<span class="like-price">¥<b class="like-b">800</b>.00</p></span>
				</div>
			</div>
			<div class="like-productOne weui-flex">
				<div class="like-productOne-1" style="flex: 1;">
					<img src="../../assets/images/like-4.png" />
					<p class="like-p">
						丸美（MARUBI） 丸美眼霜 丸美多肽蛋白提拉眼袋精华液20ml  提拉紧致
					</p>
					<span class="like-price">¥<b class="like-b">538</b>.00</p></span>
				</div>
				<div class="like-productOne-2" style="flex: 1;">
					<img src="../../assets/images/like-5.png" />
					<p class="like-p">
						丸美（MARUBI） 丸美套装弹力蛋白凝时紧致化妆品补水保湿护肤品套装 凝时紧致七件套
					</p>
					<span class="like-price">¥<b class="like-b">1268</b>.00</p></span>
				</div>
				<div class="like-productOne-3" style="flex: 1;">
					<img src="../../assets/images/like-6.png" />
					<p class="like-p">
						丸美多肽蛋白明星礼盒多肽三件套温和清洁紧致轻盈润养紧致
					</p>
					<span class="like-price">¥<b class="like-b">899</b>.00</p></span>
				</div>
			</div>
			<div class="bg">········</div>
		</div>
</template>

<script>
	
</script>

<style>
	
	* {
		margin: 0px;
		padding: 0px;
	}
	.like{
		background-color:white;
	}
	
	.like .like-title {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: #ffffff;
	}
	
	.like .like-title .like-h1 {
		font-size: 14px;
		font-weight: normal;
		padding-left: 10px;
	}
	
	.like .like-productOne {
		width: 100%;
	}
	
	.like .like-productOne .like-productOne-1,
	.like .like-productOne .like-productOne-2,
	.like .like-productOne .like-productOne-3 {
		width: 100%;
		border: 1px solid #F6F6F6;
		padding:10px;
		height:204px;
	}
	.like img {
		max-width: 100%;
		max-height: 100%;
	}
	
	.like .like-p {
		padding-top: 5px;
		height: 3em;
		line-height: 1.5em;
		text-align: center;
		color: #333;
		font-size: 12px;
		height: 3em;
		line-height: 1.5em;
		font-weight: 400;
		white-space: normal;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.like .like-price {
		height: 26px;
		line-height: 26px;
		color: #e4393c;
		font-size: 10px;
	}
	
	.like .like-b {
		font-size: 12px;
	}
	.like .bg{
		width:100%;
		height:30px;
		text-align: center;
		line-height: 30px;
		font-size:30px;
		border-bottom:5px solid #E8E8ED;
	}	
</style>