<template>
	<div class="login-box-container">
		<div class="mask-content login-box">
			<div class="top">
				请登陆
			</div>
			<div class="body">
				<div>
					<input type="text"  v-model.trim="username"  placeholder="电子邮箱或手机号">
				</div>
				<div>				
					<input type="password"  v-model.trim="password" placeholder="密码">
				</div>
				<div>
					<span class="login-btn" @click="login">登陆</span>
				</div>
				<div class="register">
					<router-link :to="{path:'password-recovery'}">
						<span>忘记密码？</span>
					</router-link>
				</div>
				<div>
					<router-link :to="{path:'register'}">
						<span class="create-user">创建账号</span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				username:'',
				password:''
			}
		},
        watch:{

        },
		methods:{
			login(){
				localStorage.setItem('login',true)
				this.$router.push({path:'/details'});
				this.$store.commit('login',true)
			}
			// ...mapMutations([
		 //      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
		 //      // `mapMutations` 也支持载荷：
		 //      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
		 //    ]),
		 //    ...mapMutations({
		 //      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
		 //    })
		},
		created(){
		}
	}
</script>
<style lang="scss">
	.login-box-container{
		background: #FFFFFF;
		.login-box{
			border: 1px solid #DDDDDD;
			box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.15);
			border-radius: 4px;
			width:640px;
			height:400px;
			.top{
				width:580px;
				line-height: 58px;
				border-bottom: 1px solid #D9D9D9; 
				text-align: left;
				margin-left: 30px;
				font-size: 24px;
			}
			.body{
				span{
					display: inline-block;
				}
				input{
					box-shadow: inset 2px 2px 3px 0 rgba(0,0,0,0.12);
					width: 300px;
					height: 42px;
		  			margin-bottom: 20px;
				}
				input[type='text']{
					margin-top:30px;
				}
				.login-btn{
					width: 300px;
					height: 42px;
					background: #335FA0;
					border-radius: 4px;
					font-size: 14px;
					color: #FFFFFF;
					line-height:  42px;
					margin-bottom: 8px;
					cursor: pointer;
				}
				.register{
					width: 300px;
					height: 22px;
					display: inline-block;
					text-align: right;
					font-size: 10px;
					color: #335FA0;
					span{
						cursor: pointer;
					}
				}
				.create-user{
					border: 1px solid #335FA0;
					border-radius: 4px;
					width: 140px;
					height: 42px;
					font-size: 14px;
					color: #335FA0;
					line-height: 42px;
					cursor: pointer;
				}
			}
		}
	}
	
	
</style>