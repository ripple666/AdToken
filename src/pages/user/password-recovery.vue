<template>
	<div class="recovery-box-container">
		<div class="mask-content recovery-box">
			<div class="top">
				找回密码
			</div>
			<div class="body">
				<div class="more">
					请输入您登陆 AdToken 时要使用的电子邮件地址或电话号码。
				</div>
				<div>	
					<input type="text" placeholder="电子邮箱或手机号">
				</div>
				<div>
					
					<span class="recovery">下一步</span>
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
.recovery-box-container{
	background: #FFFFFF;
	.recovery-box{
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
			.more{
				display: inline-block;
				width: 300px;
				font-size: 12px;
				color: #999999;
				text-align: justify;
				margin: 30px 0 20px;
			}
			div{
				input,span{
					width: 300px;
					height: 36px;
					margin-bottom: 20px;
				}
				span{
					background: #335FA0;
					border-radius: 4px;
					width: 300px;
					height: 36px;
					display: inline-block;
					color: #fff;
					line-height: 36px;
					cursor: pointer; 
				}
			}
			
		}
	}
}
</style>