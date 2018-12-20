<template>
	<div class="login">
		<login></login>
	</div>
</template>

<script>
	import Login from "@/components/Login/Login"
	export default {
		data() {
			return {
				isFixed: false
			};
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		},
		components: {
			Login
		}
	}
</script>

<style>
	@import url("../assets/css/weui.css" );
	@import url("../assets/css/font-awesome.min.css" );
	.login{
		height:100%;
	}
</style>