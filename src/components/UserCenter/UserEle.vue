<template>
	<div class="userele">
		<div class="user-item">
			<div class="image">
				<img src="../../../public/images/user.jpg" />
			</div>
			<div class="user-person">
				<div class="person-me">
					<span class="user">user-infor</span>
					<span><i class="fa fa-pencil"></i></span>
					<div class="my-head-name">
						<i class="fa fa-clock-o"></i>
						<span>银牌</span>
					</div>
					<div class="user-name">
						<span>用户名&nbsp;:</span>
						<span>&nbsp;fsdhfsffdsfas</span>
					</div>
				</div>
				<div class="jd-in">
					<span class="jdx">
						<a href="#"><span>京享值1111></span></a>
					</span>
					<span class="xiaobai">
						<a href="#"><span>小白信用1111></span></a>
					</span>
				</div>
			</div>
			<div class="user-jd-infor">
				<a href="#">
					<i class="fa fa-gear"></i>
					<span>账号管理</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.userele {
		margin-top: 20px;
		box-sizing: border-box;
		padding: 0px 10px;
		margin-top:40px ;
		background-color: #fff;
		box-sizing: border-box;
		position:relative;
		/*background-color: #9ED99D;*/
	}
	
	.user-item {
		width: 100%;
		height: 120px;
		background-image: linear-gradient(to right, #ec3e3d, #fe7258);
		border-radius: 5px;
		box-sizing: border-box;
		display: flex;
		display: -webkit-flex;
	}
	
	.user-item .image {
		width: 60px;
		height: 60px;
		line-height: 120px;
		margin:30px 20px;
		/*background-color: skyblue;*/
	}
	
	.user-item .image img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	
	.user-person {
		flex: 1;
		width: 100%;
		height: 100%;
		font-size: 14px;
		/*background-color: silver;*/
	}
	
	.user-person .person-me {
		color: #fff;
		font-size: 12px;
	}
	
	.user-person .person-me span.user {
		margin-left: 40px;
	}
	
	.user-person .person-me span i {
		width: 75px;
		height: 75px;
		text-align: center;
		color: #ec3e3d;
		background-color: #fff;
		border-radius: 50%;
		margin-left: 40px;
	}
	
	.user-person .person-me .my-head-name {
		border-radius: 40px;
		font-size: 14px;
		display: inline-block;
		background-color: #4392bf;
		margin-left: 40px;
	}
	
	.user-person .person-me .my-head-name i {
		margin: 0px 2px;
		color: #fff;
	}
	
	.user-person .person-me .my-head-name span {
		padding: 0px 5px 0px 2px;
	}
	
	.user-person .user-name {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.7);
	}
	
	.user-person .jd-in {
		font-size: 12px;
	}
	
	.user-person .jd-in a {
		text-decoration: none;
		color: #fff;
	}
	
	.user-person .jd-in .jdx,
	.user-person .jd-in .xiaobai {
		background-color: #c8483f;
		border-radius: 40px;
		padding: 2px 10px;
		text-align: center;
	}
	
	.user-person .jd-in .jdx {
	}
	
	.user-person .jd-in .xiaobai {}
	
	.user-jd-infor {
		position:absolute;
		top:10px;
		right:20px;
		font-size:16px;
	}
	.user-jd-infor a{
		text-decoration: none;
		color: rgba(76,0,0,.7);
	}
	
</style>