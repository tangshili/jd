<template>
	<div class="mainLogin">
		<header :class="{fixed:isFixed}">
			<a hret="#" @click.prevent="goBack" class="category"><i class="fa fa-angle-left"></i></a>
			<div class="jd-login">京东登录</div>
		</header>
		<div class="input-container-text">
			<input type="text" name="text" value="" placeholder="用户名/邮箱/已验证手机" />
		</div>
		<div class="input-container-pass weui-flex">
			<input style="flex:3;" type="password" name="password" value="" placeholder="请输入密码" />
			<div class="forget-password" style="flex: 1;">忘记密码</div>
		</div>
		<div class="loginBtn"  @click="login">
			<a href="#">登 录</a>
		</div>
		<div class="quick-nav">
			<a href="#" style="display:inline-block; float:left;">
				<span class="txt-planBLogin">短信验证码登录</span>
			</a>
			<a style="display:inline-block; float:right;" href="#">
				<span class="txt-quickReg">手机快速注册</span>
			</a>
		</div>
		<div class="login-type">
			<div class="quick-login">
				<h4 class="txt-otherLogin">其他登录方式</h4>
				<div class="other">
					<a href="#" class="other-qq">
						<img src="../../assets/images/QQ.png" /><br>
						<span>QQ</span>
					</a>
				</div>
			</div>
			<div class="agreement-tips">
				<p>登录即代表您已同意
					<a href="//in.m.jd.com/help/app/private_policy.html">京东隐私政策</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isFixed: false
			};
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},
			login() {
				console.log('login')
				this.$store.commit('login', true);
				this.$router.push('/');
			}
		}
	}
</script>

<style>
	.mainLogin {
		background-color: #fff;
		/*height: 100%;*/
	}
	
	.login header {
		width: 100%;
		height: 50px;
		z-index: 9999;
		display: flex;
		display: -webkit-flex;
		display: flex;
	}
	
	.login header .jd-login {
		height: 50px;
		flex: 1;
		-webkit-flex: 1;
		box-sizing: border-box;
		position: relative;
		flex: 1;
		text-align: center;
		line-height: 50px;
	}
	
	.login header .category {
		width: 35px;
	}
	
	.login header .category .fa {
		position: absolute;
		color: #333;
		font-size: 30px;
		top: 8px;
		left: 20px;
	}
	
	.input-container-text {
		width: 100%;
		height: 45px;
		box-sizing: border-box;
		margin: 30px 0px;
		padding: 0px 20px;
		border-bottom: 1px solid #ddd;
	}
	
	.input-container-text input {
		width: 100%;
		height: 44px;
		border: 0px;
		font-size: 16px;
		outline: none;
	}
	
	.input-container-pass {
		height: 45px;
		box-sizing: border-box;
		margin: 30px 0px;
		padding: 0px 20px;
		border-bottom: 1px solid #ddd;
	}
	
	.input-container-pass input {
		height: 44px;
		border: 0px;
		font-size: 16px;
		outline: none;
	}
	
	.forget-password {
		height: 45px;
		font-size: 16px;
		padding-left: 10px;
		position: relative;
	}
	
	.forget-password:after {
		display: block;
		content: "";
		clear: both;
		width: 1px;
		height: 30px;
		position: absolute;
		top: 0px;
		left: 0px;
		border-left: 1px solid #ddd;
	}
	
	.loginBtn {
		width: 90%;
		height: 45px;
		box-sizing: border-box;
		line-height: 45px;
		display: block;
		background-color: #efefef;
		border-radius: 20px;
		font-size: 20px;
		text-align: center;
		color: #fff;
		margin: 0px 20px;
		background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
	}
	
	.loginBtn a {
		color: white;
	}
	
	.quick-nav {
		width: 100%;
		height: 45px;
		box-sizing: border-box;
		margin: 30px 0px;
		padding: 0px 20px;
	}
	
	.quick-nav a {
		color: #7D7D7D;
	}
	
	.login-type {
		margin-top: 44px;
	}
	
	.quick-login {
		height: 40px;
		position: relative;
		padding: 12px 0 0;
		border-top: 1px solid #efefef;
		text-align: center;
	}
	
	.txt-otherLogin {
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		top: -10px;
		left: 50%;
		background-color: #fff;
		padding: 0px 7px;
		color: #ccc;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		margin-bottom: 20px;
	}
	
	.quick-login {
		height: 85px;
	}
	
	.agreement-tips {
		text-align: center;
	}
	
	.agreement-tips a {
		width: auto;
		margin: 0;
		color: #409eff;
		font-size: 14px;
	}
	
	.agreement-tips p {
		font-size: 14px;
		color: #ccc;
		padding-top: 50px;
	}
	
	.quick-login .other a {
		width: 24px;
		color: #616161;
		font-size: 12px;
		margin-top: 20px;
	}
	
	.quick-login .other {
		margin-top: 20px;
	}
	
	.quick-login .other .other-qq {
		text-align: center;
		font-size: 12px;
		color: #ccc;
	}
	
	.quick-login .other .other-qq img {
		width: 60px;
		height: 60px;
	}
</style>