<template>
	<div class="user-center">
		<h1>个人中心</h1>
		<bottom></bottom>
		<tops></tops>
		<user-coupon></user-coupon>
		<user-ele></user-ele>
		<user-foots></user-foots>
		<user-pay></user-pay>
		<user-serve></user-serve>
		<user-tools></user-tools>
		
	</div>
</template>

<script>
	import Bottom from "@/components/Footer"
	import Tops from "@/components/UserCenter/Tops"
	import UserCoupon from "@/components/UserCenter/UserCoupon"
	import UserEle from "@/components/UserCenter/UserEle"
	import UserFoots from "@/components/UserCenter/UserFoots"
	import UserPay from "@/components/UserCenter/UserPay"
	import UserServe from "@/components/UserCenter/UserServe"
	import UserTools from "@/components/UserCenter/UserTools"
	export default {
		name: 'user',
		components: {
			Bottom,
			Tops,
			UserCoupon,
			UserEle,
			UserFoots,
			UserPay,
			UserServe,
			UserTools
		}
	}
</script>

<style>

</style>