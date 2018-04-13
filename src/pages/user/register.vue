<template>
	<div class="register-box-container">
		<div class="mask-content register-box">
			<div class="top">
				创建新的AdToken账户
			</div>
			<div class="body">
				<div class="username">
					<input type="text" placeholder="姓">
					<input type="text" placeholder="名字">
				</div>
					<input type="text" placeholder="电子邮箱或手机号">
					<input type="text" placeholder="设置密码">
					<input type="text" placeholder="确认密码">
					<input type="text" placeholder="位置">
				<div class="more">
					点击创建帐户，代表你同意我们的<span>条款</span>，并已阅读了我们的<span>数据使用政策</span>，包括 <span>Cookie 使用政策</span>。你可能会收到 AdToken 的短信通知，并可以随时退订。
				</div>
				<div>
					<span class="register">创建账户</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
        computed:{

        },
        watch:{

        },
        methods:{
            
        },
		created(){
		}
	}
</script>
<style lang="scss">
.register-box-container{
	background: #FFFFFF;
	.register-box{
		border: 1px solid #DDDDDD;
		box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.15);
		border-radius: 4px;
		width:640px;
		height:520px;
		.top{
			width:580px;
			line-height: 58px;
			border-bottom: 1px solid #D9D9D9; 
			text-align: left;
			margin-left: 30px;
			font-size: 24px;
		}
		.body{
			input{
				border-radius: 4px;
				height:36px;
			}
			div.username{
				input{
					width: 180px;
					&:nth-child(1){
						margin-right: 16px;
					}
				}
				margin-top: 30px;
			}
			input{
				width: 380px;
				margin-bottom: 20px;
			}
			.more{
				display: inline-block;
				width: 380px;
				font-size: 10px;
				color: #999999;
				text-align: justify;
				span{
					color: #8FBCFF;
					cursor: pointer;
				}
			}
			.register{
				display: inline-block;
				background: #335FA0;
				border-radius: 4px;
				font-size: 14px;
				color: #FFFFFF;
				width: 140px;
				height: 40px;
				margin-top: 22px;
				line-height: 40px;
				cursor: pointer;
			}
		}
	}
}
</style>