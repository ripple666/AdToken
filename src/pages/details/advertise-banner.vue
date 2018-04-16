<template>
	<div  class="banner">
		<div class="list" v-show="showList">
			<div class="tit">
				广告列表
			</div>
			<div class="operate">
				<span class="add" @click="addNewCampaign">Add new banner</span>
				<span class="search" @click="search">查询删选</span>
			</div>
			<div class="condition"  v-show="showSearchList">
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
					<select>
						<option>广告</option>
						<option>广告策略</option>
					</select>
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
				Add new banner
			</div>
			<div class="campaign">
				<label for="">广告策略：</label>
				<select name="" id="">
					<option value="">
						选择广告策略
					</option>
				</select>
			</div>
			<div class="name">
				<label for="">广告名称：</label>
				<input type="text">
			</div>
			<div class="website">
				<label for="">目标网址：</label>
				<input type="text" placeholder="http://">
			</div>
			<div class="format">
				<label for="">广告格式：</label>
				<span class="file-container">
					<input type="file">
					<span class="file-btn">选择图片</span>
				</span>
				<span  class="file-type">支持的尺寸和格式</span>
			</div>
			<div class="instead-text">
				<label for="">
					图片无法显示时的替换文字：
					
				</label>
				<input type="text">
			</div>
			<div class="info">
				<label for="">状态栏信息：</label>
				<input type="text">
			</div>
			<div class="btm-tex">
				<label for="">图片下方显示文字：</label>
				<input type="text">
			</div>
			<div class="opeate">
				<span class="cancel" @click="cancelAddBanner">取消</span>
				<span class="submit" @click="saveAddBanner">提交</span>
			</div>
		</div>
		
	</div>
</template>
<script>
import myTable from '@/components/pices/my-table'
export default{
		components:{myTable},
		data(){
			return{
				showSearchList:true,
				showList:true,
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
						{name:'广告ID'},
						{name:'广告名称'},
						{name:'广告策略'},
						{name:'状态'},
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
								{num:93631705},
								{num:'广告1'},
								{num:'广告策略1'},
								{num:'新建审核'},
								{num:'0.00'},
								{num:'0'},
								{num:'0'},
								{num:'0.00%'},
								{num:'0.00'},
								{num:'0.00'}
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
        	cancelAddBanner(){
        		this.showList = true
        	},
        	saveAddBanner(){
        		this.showList = true
        	}
        },
		created(){
		}
}
</script>
<style lang="scss">
.banner{
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
				height:24px;
				color: #333333;
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
				border: 1px solid #D9D9D9;
				height:40px;
				line-height:40px;
				padding:0 15px;
				border-radius:10px;
				input{
					background: #FFFFFF;
					border: none;
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
					top:50%;
					right: 10px;
					transform:translateY(-50%);
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
		div{
			margin-bottom: 20px;
		}
		input[type='text']{
			width: 320px;
		}
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
			label{
				width: 190px;
				display: inline-block;
				text-align: right;
				margin-right: 10px;
			}
		}
		.campaign{

		}
		.name{
			input{
				width: 220px;
			}
		}
		.website{

		}
		.format{
			.file-container{
				position: relative;
				display: inline-block;
				width: 160px;
				height: 140px;
				border: 1px solid #D9D9D9;
				line-height: 120px;
				vertical-align: top;
				text-align: center;
				cursor: pointer;
				input{
					opacity: 0;
					position: absolute;
					left:0;
					top: 0;
					width: 160px;
					height: 140px;
					cursor: pointer;
				}
				.file-btn{
					cursor: pointer;
					display: inline-block;
					line-height: 30px;
					width: 84px;
					background: #568CDC;
					border-radius: 4px;
					color: #fff;
					font-size: 14px;
				}
			}
			.file-type{
				font-size: 10px;
				color: #335FA0;
				margin-left: 10px;
				text-decoration: underline;
				cursor: pointer;
			}
		}
		.instead-text{

		}
		.info{

		}
		.btm-tex{

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