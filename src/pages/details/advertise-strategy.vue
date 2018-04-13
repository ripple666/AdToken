<template>
	<div  class="strategy">
		<div class="list" v-show="showList">
			<div class="tit">
				广告策略列表
			</div>
			<div class="operate">
				<span class="add" @click="addNewCampaign">Add new campaign</span>
				<span class="search" @click="search">查询删选</span>
			</div>
			<div class="condition" v-show="showSearchList">
				<span class="dist">
					<span>投放目的：</span>
					<select name="" id="">
						<option v-for="(item,index) in dists" :value="item.id">{{item.name}}</option>
					</select>
				</span>
				<span class="status">
					<span>状态：</span>
					<select name="" id="">
						<option v-for="(item,index) in status" :value="item.id">{{item.name}}</option>
					</select>
				</span>
				<span class="type">
					<span>付费方式：</span>
					<select name="" id="">
						<option v-for="(item,index) in types" :value="item.id">{{item.name}}</option>
					</select>
				</span>
				<span class="keywords">
					<input type="text" placeholder="输入关键字查询">
					<i class="icon-bg"></i>
				</span>
				<span  class="clear">清除</span>
			</div>
			<div class="modify">
				<select name="" id="">
					<option v-for="(item,index) in modifies" :value="item.id">{{item.name}}</option>
				</select>
			</div>
			<my-table @on-td-click="tdClick" :tableData="tableData"></my-table>
		</div>
		<div class="add" v-show="!showList">
			<div class="tit">
				Add new campagin
			</div>
			<div class="dist">
				<div class="tit">选择推广目标</div>
				<div class="cont">
					<div class="session session_1">
						<span class="label">推广目标</span>
						<select  name="" id="">
							<option value="">落地页</option>
							<option value="">应用下载</option>
						</select>
					</div>
					
					<div  class="session session_2">
						<span class="label">广告策略名称</span>
						<input type="text" placeholder="请输入广告名称">
					</div>
				</div>
				
			</div>
			<div class="budget">
				<div class="tit">设置广告预算</div>
				<div class="cont">
					<div class="session session_1">
						<select name="" id="">
							<option value="">单日预算</option>
							<option value="">总预算</option>
						</select>
						<input type="text" placeholder="USD">
					</div>
					<div  class="session session_2" >
						$120.00 USD
					</div>
				</div>
				
			</div>
			<div class="schedule">
				<div class="tit">设置广告排期</div>
				<div class="cont">
					<div class="session session_1">
						<div class="type">
							<span  class="label">投放时间</span>
							<span @click="chooseThrowType(index)" :style="nowThrowTypeIndex===index?{backgroundColor:'#568CDC',color:'#fff'}:''" v-for="(item,index) in throwTypes" class="throw-type">{{item.name}}</span>
						</div>
						<div class="time">
							<vue-datepicker-local  :local="DateCN"   v-model="adTimeStart" />
							<span>至</span>
							<vue-datepicker-local  :local="DateCN"   v-model="adTimeEnd" />
						</div>
					</div>
					<div class="session session_2">
						<span  class="label">付费方式</span>
						<span @click="chooseChargeType(index)" :style="nowChargeTypeIndex===index?{backgroundColor:'#568CDC',color:'#fff'}:''" v-for="(item,index) in chargeTypes">
							{{item}}
						</span>
					</div>
					<div class="session session_3">
						<span  class="label">单价</span>
						<input type="text">
						<select name="" id="">
							<option value="">货币</option>
							<option value="">USD</option>
							<option value="">CNY</option>
							<option value="">EUR</option>
							<option value="">BTC</option>
							<option value="">ETH</option>
						</select>
					</div>
					<div class="session session_3">
						<span  class="label">素材展示</span>
						<input type="text">
						<img src="" alt="">
						<span>无限制</span>
					</div>
				</div>
				
			</div>
			<div class="opeate">
				<span class="cancel" @click="cancelAddCompagin">取消</span>
				<span class="submit" @click="saveAddCompagin">保存并创建广告</span>
			</div>
		</div>
		
	</div>
</template>
<script>
import myTable from '@/components/pices/my-table'
import vueDatepickerLocal from 'vue-datepicker-local'
export default{
		components:{myTable,vueDatepickerLocal},
		data(){
			return{
				DateCN:{  //日期文字
					monthsHead: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
					months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), 
					weeks: '一_二_三_四_五_六_日'.split('_')
				},
				showSearchList:true,
				showList:true,
				adTimeStart:new Date(),//会议开始时间
				adTimeEnd: new Date(),
				chargeTypes:['CPM','CPC','CPA'],
				throwTypes:[
					{
						name:'从今天开始长期投放'
					},
					{
						name:'设置开始和结束日期'
					}
				],
				nowThrowTypeIndex:0,
				nowChargeTypeIndex:0,
				dists:[
					{
						name:'不限',
						id:0
					},
					{
						name:'落地页',
						id:0
					},
					{
						name:'应用加载',
						id:0
					}
				],
				status:[
					{
						name:'不限',
						id:0
					},
					{
						name:'投放中',
						id:0
					},
					{
						name:'审核不通过',
						id:0
					},
					{
						name:'新建审核中',
						id:0
					},
					{
						name:'修改审核中',
						id:0
					},
					{
						name:'已暂停',
						id:0
					},
					{
						name:'广告策略超出预算',
						id:0
					}
				],
				types:[
					{
						name:'CPM',
						id:0
					},
					{
						name:'CPC',
						id:0
					}
				],
				modifies:[
					{
						name:'批量修改',
						id:0
					},
					{
						name:'启用',
						id:0
					},
					{
						name:'暂停',
						id:0
					},
					{
						name:'删除',
						id:0
					}
				],
				tableData:{
					ispage:true,
					thead:[
						{name:'选择'},
						{name:'开关'},
						{name:'广告策略'},
						{name:'状态'},
						{name:'投放时间'},
						{name:'出价(元)'},
						{name:'预算(元)'},
						{name:'总花费(元)'},
						{name:'展示数'},
						{name:'点击数'},
						{name:'点击率'},
						{name:'平均点击单价(元)'},
						{name:'平均千次展现费用(元)'}
				    ],
					tbody:[
						{
							tds:[
								{
									img:require('../../assets/images/campaign-cancel.png'),
									checked:false,
									style:{
										cursor:'pointer'
									}
								},
								{
									img:require('../../assets/images/campaign-on.png'),
									checked:true,
									style:{
										cursor:'pointer'
									}
								},
								{num:'第一个广告策略'},
								{num:'投放中'},
								{num:'2018/04/04-2018/04/08'},
								{num:'1.00CPC'},
								{num:'5000.00'},
								{num:'5000.00'},
								{num:'123456'},
								{num:'654321'},
								{num:'99.99%'},
								{num:'11.11'},
								{num:'11.11'}
							]
						},
						{
							tds:[
								{
									img:require('../../assets/images/campaign-cancel.png'),
									checked:false,
									style:{
										cursor:'pointer'
									}
								},
								{
									img:require('../../assets/images/campaign-on.png'),
									checked:true,
									style:{
										cursor:'pointer'
									}
								},
								{num:'第一个广告策略'},
								{num:'投放中'},
								{num:'2018/04/04-2018/04/08'},
								{num:'1.00CPC'},
								{num:'5000.00'},
								{num:'5000.00'},
								{num:'123456'},
								{num:'654321'},
								{num:'99.99%'},
								{num:'11.11'},
								{num:'11.11'}
							]
						}
					]
				},
			}
		},
        computed:{

        },
        watch:{

        },
        methods:{
        	search(){
        		this.showSearchList = !this.showSearchList
        	},
        	tdClick(res){
        		let trIndex = res[0]
        		let tdIndex = res[1]
        		console.log(res);
        		if(tdIndex===0){ //点的是选择
        			let td = this.tableData.tbody[trIndex].tds[tdIndex]
        			td.checked = !td.checked
        			if(td.checked){
        				td.img = require('../../assets/images/campaign-choose.png')
        			}else{
        				td.img = require('../../assets/images/campaign-cancel.png')
        			}
        			
        		}else if(tdIndex===1){ //点的是开关
        			let td = this.tableData.tbody[trIndex].tds[tdIndex]
        			td.checked = !td.checked
        			if(td.checked){
        				td.img = require('../../assets/images/campaign-on.png')
        			}else{
        				td.img = require('../../assets/images/campaign-off.png')
        			}
        		}
        		 
        	},
        	addNewCampaign(){
        		this.showList = false
        	},
        	chooseThrowType(index){
        		this.nowThrowTypeIndex = index
        	},
        	chooseChargeType(index){
        		this.nowChargeTypeIndex = index
        	},
        	cancelAddCompagin(){
        		console.log('cancel');
        		this.showList = true
        	},
        	saveAddCompagin(){
        		this.showList = true
        	}
        },
		created(){
		}
}
</script>
<style lang="scss">
.strategy{
	font-size: 14px;
	padding:0 30px 60px 30px;
	background: #FFFFFF;
	border: 1px solid #EEEEEE;
	&>div>.tit{
		line-height: 55px;
		font-size: 18px;
		border-bottom:1px solid  #D9D9D9 ;
	}
	.list{
		.operate{
			line-height: 70px;
			font-size: 14px;
			span{
				display: inline-block;
				cursor: pointer;
			}
			.add{
				background: #335FA0;
				border-radius: 4px; 
				line-height: 32px;
				padding: 0 10px;
				color: #fff;
				margin-right: 20px;
			}
			.search{
				border: 1px solid #335FA0;
				border-radius: 4px;
				line-height: 32px;
				padding: 0 10px;
				color: #335FA0;
			}
		}
		.condition{
			select{
				line-height: 24px;
				font-size: 12px;
				color: #333333;
				height:24px;
			}
			&>span{
				margin-right: 20px;
			}
			.dist{
				
			}
			.status{

			}
			.type{

			}
			.keywords{
				height: 18px;
				display: inline-block;
				position: relative;
				input{
					background: #FFFFFF;
					border: 1px solid #D9D9D9;
					line-height: 26px;
					width: 156px;
					border-radius: 0;
					padding-right: 10px;
				}
				i{
					background-image:url("../../assets/images/search.png");
					width: 14px;
					height: 14px;
					position: absolute;
					top: 0px;
					right: 10px;
					margin-top: 6px;
					cursor: pointer;
				}
			}
			.clear{
				display: inline-block;
				background: #FFFFFF;
				border: 1px solid #335FA0;
				line-height: 26px;
				font-size: 12px;
				color: #335FA0;
				padding: 0 13px;
				cursor: pointer;
			}
		}
		.modify{
			margin: 20px 0 20px;

			select{
				line-height: 26px;
				height:26px;
			}
		}
	}
	.add{
		&>div:not(.tit){
			select{
				line-height: 30px;
				height:30px;
			}
			input{
				line-height: 30px;
				border: 1px solid #D9D9D9;
				border-radius: 0;
			}
			.tit{
				font-size: 16px;
				color: #000000;
				line-height: 63px;
			}
			.cont{
				margin-left: 126px;
				.session{
					margin-bottom: 16px;
				}
				.label{
					margin-right: 10px;
					font-size: 14px;
					width: 90px;
					display: inline-block;
					text-align: right;
				}
			}
			
		}
		.dist{
			.session_2{
				input{
					width: 220px;
				}
			}
		}
		.budget{
			select{
				margin-right: 18px;
				margin-left: 1px;
			}
			.session_1{
				margin-bottom: 10px !important;
			}
			.session_2{
				margin-left: 108px;
				font-size: 14px;
				color: #333333;
			}
		}
		.schedule{
			.session_1{
				.throw-type{
					display: inline-block;
					border: 1px solid #E7E7E7;
					line-height: 30px;
					padding: 0 10px;
					cursor: pointer;
					&:nth-child(1){
						margin-right: 1px;
					}
				}
				.type{
					margin-bottom: 10px;
				}
				.time{
					margin-left: 105px;
					span{
						margin: 0 10px;
					}
				}
			}
			.session_2{
				span:not(.label){
					display: inline-block;
					border: 1px solid #E7E7E7;
					width: 100px;
					line-height: 30px;
					text-align: center;
					cursor: pointer;
					margin-right: 1px;
				}
			}
		}
		.opeate{
			margin-top: 40px;
			span{
				line-height: 36px;
				display: inline-block;
				text-align: center;
				border-radius: 4px;
				font-size: 14px;
				width: 140px;
				cursor: pointer;
			}
			.cancel{
				border: 1px solid #335FA0;
				margin-right: 40px;
				margin-left:242px;
			}
			.submit{
				background: #335FA0;
				color: #FFFFFF;
			}
		}
	}
	
}
</style>