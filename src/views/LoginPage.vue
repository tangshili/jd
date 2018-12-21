<template>
	<div class="login-page">

	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props:{
			abb:{
				type:'',
				default:'',
				required:true
			}
		},
		methods:{
			add(){},
			reduce(){}
		},
		computed:{
			login(){
				return this.$store.state.user.login;
			},
			userName:{
				get(){},
				set(val){}
			}
		},
		watch:{
			login(val){
				console.log(val);
			}
		},
		created(){},
		mounted(){},
		updated(){
			
		}
	}
</script>

<style>

</style>