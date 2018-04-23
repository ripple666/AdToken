<template>
	<div class="account">
		<div class="tit">
			我的帐户
		</div>
		<div class="content">
			<div class="name">
				<label>账户名称</label>
				<input type="" name="" placeholder="请输入名称">
			</div>
			<div class="mail">
				<label>邮箱</label>
				<input type="" name="" placeholder="jduncan@youopia.name">
			</div>
			<div class="tel">
				<label>手机号</label>
				<input type="" name="" placeholder="请输入手机号">
			</div>
			<div class="password">
				<label>密码</label>
				<span>修改密码</span>
			</div>
		</div>
		<div class="btm">
			<span class="cancel">取消</span>
			<span class="submit">提交</span>
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
			console.log('account is loaded')
		}
	}
</script>
<style lang="scss">
.account{
	background-color: #fff;
	border: 1px solid #EEEEEE;
	padding-left: 30px;
	padding-bottom: 40px;
	.tit{
		line-height: 55px;
		font-size: 18px;
		margin-right: 30px;
		border-bottom:1px solid #D9D9D9;
	}
	.content{ 
		padding-top: 20px;
		label{
			display: inline-block;
			width: 160px;
			text-align: right;
			margin-right: 10px;
		}
		input{
			line-height: 30px;
			border-radius: 0;
		}
		&>div{
			line-height: 60px;
		}
		.name{

		}
		.mail{

		}
		.tel{

		}
		.password{
			span{
				display: inline-block;
				height: 30px;
				line-height: 30px;
				border: 1px solid #568CDC;
				border-radius: 4px;
				font-size: 14px;
				color: #568CDC;
				padding: 0 16px;
				cursor: pointer;
			}
		}
	}
	.btm{
		padding-left: 192px;
		margin-top: 30px;
		span{
			border: 1px solid #335FA0;
			border-radius: 4px;
			width: 140px;
			height: 36px;
			line-height: 36px;
			display: inline-block;
			text-align: center;
			font-size: 14px;
			cursor: pointer;
		}
		.cancel{
			color: #335FA0;
			margin-right: 20px;
		}
		.submit{
			background: #335FA0;
			color: #fff;
		}
	}
}
</style>