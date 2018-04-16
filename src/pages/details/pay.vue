<template>
	<div class="pay">
		<div class="session_1">
			<div class="tit">
				付款
			</div>
			<div class="content">
				<div class="name">
					<label>充值帐户：</label>
					<span>jduncan@youopia.name</span>
				</div>
				<div class="balance">
					<label>账户余额：</label>
					<span>0（可用：0）</span>
				</div>
				<div class="money">
					<label>充值金额：</label>
					<input type="" name="" placeholder="请输入金额数量">
					<span>元</span>
				</div>
				<div class="types">
					<label>广告格式：</label>
					<span class="type" @click="chooseChargeType(index)" v-for="(chargeType,index) in chargeTypes">
						<img :src="chargeType.imgsrc">
						<span>
							{{chargeType.name}}
						</span>
					</span>
				</div>
				<div class="pay-btn">
					<span>立即支付</span>
				</div>
			</div>
		</div>
		<div class="session_2">
			<div class="tit">
				充值记录
			</div>
			<div class="option">
				<span class="label">充值记录查询</span>
				<vue-datepicker-local :local="dateData"   v-model="chargeTimeStart"></vue-datepicker-local>
				<span class="zhi">至</span>
				<vue-datepicker-local :local="dateData"   v-model="chargeTimeStart"></vue-datepicker-local>
				<span class="info">
					<span>充值</span>
					<span>0</span>
					<span>次</span>
					<span>共计</span>
					<span>0</span>
					<span>元</span>
				</span>
			</div>
			<div class="content">
				<my-table :tableData="tableData"></my-table>
			</div>
		</div>
	</div>
</template>
<script>
import vueDatepickerLocal from 'vue-datepicker-local'
import {mapState} from 'vuex'
import myTable from '@/components/pices/my-table'
	export default{
		components:{
			vueDatepickerLocal,myTable
		},
		data(){
			return{
				chargeTimeStart:new Date(),
				chargeTimeEnd:new Date(),
				chargeTypes:[
					{
						name:'支付宝',
						imgsrc:require('../../assets/images/payment-choose.png')
					},
					{
						name:'微信',
						imgsrc:require('../../assets/images/campaign-off.png')
					},
					{
						name:'BTC',
						imgsrc:require('../../assets/images/campaign-off.png')
					},
					{
						name:'ETC',
						imgsrc:require('../../assets/images/campaign-off.png')
					}
				],
				tableData:{
					ispage:true,
					thead:[
						{name:'日期'},
						{name:'充值金额'}
				    ],
					tbody:[
						{
							tds:[
								{num:'0.00'},
								{num:'0.00'}
							]
						}
					]
				}
			}
		},
        computed:mapState({
        	dateData(state){
        		return state.dateData
        	}
        }),
        watch:{

        },
        methods:{
        	chooseChargeType(index){
        		this.chargeTypes.map((v,i)=>{
        			v.imgsrc = require('../../assets/images/campaign-off.png')
        		})
        		this.chargeTypes[index].imgsrc = require('../../assets/images/payment-choose.png')
        	}
        },
		created(){
		}
	}
</script>
<style lang="scss">
.pay{
	
	.tit{
		line-height: 55px;
		font-size: 18px;
		border-bottom:  1px solid #EEEEEE;
	}
	.session_1,.session_2{
		border: 1px solid #EEEEEE;
		padding: 0 30px;
		padding-bottom: 30px;
	}
	.session_1{
		margin-bottom: 10px;
		.content{
			padding-left: 122px;
			padding-top: 20px;
			&>div{
				line-height: 55px;
				font-size: 14px;
			}
			.name{

			}
			.balance{

			}
			.money{
				input{
					line-height: 30px;
					width: 150px;
					border-radius: 0;
					margin-right: 10px;
				}
			}
			.types{
				.type{
					margin-right: 20px;
					cursor: pointer;
				}
			}
			.pay-btn{
				padding-left: 72px;
				span{
					display: inline-block;
					background: #568CDC;
					border-radius: 4px;
					height: 30px;
					line-height: 30px;
					padding: 0 20px;
					color: #fff;
					font-size: 14px;
					cursor: pointer;

				}
			}
		}
	}
	.session_2{
		.option,.content{
			padding: 0 122px;
		}
		.option{
			height: 70px;
			margin-top: 30px;
			font-size: 14px;
			.label{
				margin-right: 10px;
			}
			.zhi{
				margin: 0 8px;
			}
			.info{
				margin-left: 10px;
			}
		}
	}
}
</style>