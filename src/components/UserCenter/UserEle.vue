<template>
	<div class="userele">
		<div class="user-item">
			<div class="image">
				<img src="../../../public/images/user.jpg" />
			</div>
			<div class="user-person">
				<div class="person-me">
					<span class="user">女人如烟</span>
					<span><i class="fa fa-pencil"></i></span>
					<div class="my-head-name">
						<i class="fa fa-clock-o"></i>
						<span>金牌</span>
					</div>
					<div class="user-name">
						<span>用户名&nbsp;:</span>
						<span>jd_621e833232afb</span>
					</div>
				</div>
				<div class="jd-in">
					<span class="jdx">
						<a href="#"><span>京享值23325</span></a>
					</span>
					<span class="xiaobai">
						<a href="#"><span>小白信用73.0</span></a>
					</span>
				</div>
				<div class="plus_account">
					<div class="plus_account_text">升级10大特权</div>
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
	export default {}
</script>
<style scoped="scoped">
	.userele {
		margin-top: 20px;
		box-sizing: border-box;
		padding: 0px 10px;
		margin-top: 40px;
		background-color: #fff;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
	}
	
	.user-item {
		width: 100%;
		height: 120px;
		background-image: linear-gradient(to right, #ec3e3d, #fe7258);
		border-radius: 5px;
		box-sizing: border-box;
		display: flex;
		display: -webkit-flex;
		overflow: hidden;
	}
	
	.user-item .image {
		width: 60px;
		height: 60px;
		line-height: 120px;
		margin: 20px 10px 0px 20px;
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
		font-size: 12px;
		position: relative;
		/*background-color: silver;*/
	}
	
	.user-person .person-me {
		color: #fff;
		font-size: 12px;
	}
	
	.user-person .person-me span.user {
		position: absolute;
		top: 25px;
		left: 0px;
		font-size: 14px;
	}
	
	.user-person .person-me span i {
		width: 14px;
		height: 14px;
		text-align: center;
		color: #ec3e3d;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 25px;
		left: 71px;
	}
	
	.user-person .person-me .my-head-name {
		border-radius: 40px;
		font-size: 14px;
		display: inline-block;
		background-color: #F2DF60;
		margin-left: 40px;
		position: absolute;
		top: 25px;
		left: 50px;
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
		position: absolute;
		top: 50px;
		left: 0px;
	}
	
	.user-person .jd-in {
		font-size: 12px;
		position: absolute;
		top: 85px;
		left: 0px;
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
	
	.user-person .jd-in .jdx {}
	
	.user-person .jd-in .xiaobai {}
	
	.user-jd-infor {
		position: absolute;
		top: 10px;
		right: 20px;
		font-size: 12px;
	}
	
	.user-jd-infor a {
		text-decoration: none;
		color: rgba(76, 0, 0, .7);
	}
	
	.plus_account {
		-webkit-transform: rotate(11deg);
		background: url(https://img11.360buyimg.com/jdphoto/s100x18_jfs/t20647/287/1260001649/632/de55fa7f/5b235f3cNbe6fe972.png) 8px 4px/50px 10px no-repeat #333;
		border-top-left-radius: 1px;
		bottom: 0px;
		box-shadow: -2.5px -2.5px 15px #c6934d;
		padding: 14px 15px 7px 15px;
		position: absolute;
		right: -10px;
		transform: rotate(11deg);
	}
	
	.plus_account_text {
		background-color: hsla(0, 0%, 85.1%, .1);
		border-radius: 30px;
		color: #cead68;
		font-size: 10px;
		height: 18px;
		line-height: 18px;
		padding: 0 10px 0 5px;
		position: relative;
	}
</style>