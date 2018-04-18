<template>
	<div class="datacount">
		<div class="tit">
			数据列表

		</div>
		<div class="mid">
			<span class="tit">时间范围</span>
			<my-select class="select" :selectData="dayRange"></my-select>
			<span>
				<vue-datepicker-local  :local="dateData"   v-model="queryDataTimeStart" />
				<span class="zhi">至</span>
				<vue-datepicker-local  :local="dateData"   v-model="queryDataTimeEnd" />
			</span>
		</div>
		<div class="data-container">
			<div class="table-nav">
				<span class="nav">
					<span :style="index===nowNavIndx?{color:'#000'}:''" @click="changeNav(index)" v-for="(item,index) in tableNavs">{{item.name}}</span>
					<i :style="{left:nowNavIndx*100+'px'}"></i>
				</span>
				<span class="print">
					下载报表
				</span>
			</div>
			<div class="table-container">
				<my-table  @on-td-click="tdClick" :tableData="tableData"></my-table>
			</div>
		</div>
	</div>
</template>
<script>
import myTable from '@/components/pices/my-table'
import vueDatepickerLocal from 'vue-datepicker-local'
import {mapState} from 'vuex'
import mySelect from '@/components/pices/my-select'
	export default{
		components:{
			vueDatepickerLocal,myTable,mySelect
		},
		data(){
			return{
				dayRange:{
					optionHeight:'30px',
					options:[
						{
							name:'今天'
						},
						{
							name:'昨天'
						},
						{
							name:'过去7天'
						},
						{
							name:'所有'
						}
					]
				},
				queryDataTimeStart:new Date(),
				queryDataTimeEnd:new Date(),
				tableNavs:[
					{
						name:'概览'
					},
					{
						name:'campagin'
					},
					{
						name:'advert'
					}
				],
				nowNavIndx:0,
				tableData:{
					ispage:true,
					thead:[
						{name:'时间'},
						{name:'展示数'},
						{name:'点击数'},
						{name:'点击率'},
						{name:'平均点击单价(元)'},
						{name:'平均千次展现费用(元)'},
						{name:'消费元'}
				    ],
					tbody:[
						{
							tds:[
								{num:'2018-03-27'},
								{num:'0'},
								{num:'0'},
								{num:'0.00%'},
								{num:'0.00'},
								{num:'0.00'},
								{num:'0.00'}
							]
						}
					]
				},
			}
		},
        computed:mapState({
        	dateData(state){
        		console.log(state.dateData)
        		return state.dateData
        	}
        }),
        watch:{

        },
        methods:{
        	tdClick(){

        	},
        	changeNav(index){
        		this.nowNavIndx = index
        		switch(index){
        			case 0:
        					this.tableData = {
								ispage:true,
								thead:[
									{name:'时间'},
									{name:'展示数'},
									{name:'点击数'},
									{name:'点击率'},
									{name:'平均点击单价(元)'},
									{name:'平均千次展现费用(元)'},
									{name:'消费元'}
							    ],
								tbody:[
									{
										tds:[
											{num:'2018-03-27'},
											{num:'0'},
											{num:'0'},
											{num:'0.00%'},
											{num:'0.00'},
											{num:'0.00'},
											{num:'0.00'}
										]
									}
								]
							}
        					break;
        			case 1:
        					this.tableData = {
								ispage:true,
								thead:[
									{name:'时间'},
									{name:'广告策略'},
									{name:'展示数'},
									{name:'点击数'},
									{name:'点击率'},
									{name:'平均点击单价(元)'},
									{name:'平均千次展现费用(元)'},
									{name:'总花费(元)'}
							    ],
								tbody:[
									{
										tds:[
											{num:'2018-03-27'},
											{num:'广告策略1'},
											{num:'0'},
											{num:'0'},
											{num:'0.00%'},
											{num:'0.00'},
											{num:'0.00'},
											{num:'0.00'}
										]
									}
								]
							}
        					break;
        			case 2:
        					this.tableData = {
								ispage:true,
								thead:[
									{name:'时间'},
									{name:'广告名称'},
									{name:'广告策略'},
									{name:'展示数'},
									{name:'点击数'},
									{name:'点击率'},
									{name:'平均点击单价(元)'},
									{name:'平均千次展现费用(元)'},
									{name:'总花费(元)'}
							    ],
								tbody:[
									{
										tds:[
											{num:'2018-03-27'},
											{num:'推广广告'},
											{num:'广告策略1'},
											{num:'0'},
											{num:'0'},
											{num:'0.00%'},
											{num:'0.00'},
											{num:'0.00'},
											{num:'0.00'}
										]
									}
								]
							}
        					break;
        		}
        	}
        },
		created(){
		}
	}
</script>
<style lang="scss">
	.datacount{
		padding-right: 30px;
		background-color: #fff;
		border: 1px solid #EEEEEE;
		padding-left: 30px;
		padding-bottom: 40px;
		select{
			line-height: 30px;
			height:30px;
		}
		input{
			line-height: 30px;
		}
		&>.tit{
			line-height: 55px;
			font-size: 18px;
			border-bottom:1px solid #D9D9D9;
		}
		.mid{
			margin-top: 20px;
			.zhi{
				margin: 0 8px;
			}
			.tit{
				font-size: 14px;
			}
			.select{
				margin:0 20px 0 10px;
			}
		}
		.data-container{
			.table-nav{
				margin-top: 20px;
				span{
					display: inline-block;
				}
				.nav{
					font-size: 14px;
					color: #999999;
					text-align: center;
					border-bottom: 1px solid #333;
					position: relative;
					span{
						width: 100px;
						line-height: 30px;
						cursor: pointer;
					}
					i{
						display: inline-block;
						width: 100px;
						position: absolute;
						bottom: -3px;
						height: 3px;
						left: 0;
						background-color: #000;
						transition:all .3s ease-out;
					}

				}
				.print{
					float: right;
					border: 1px solid #4C8BE2;
					border-radius: 4px;
					width: 84px;
					line-height: 30px;
					text-align: center;
					color: #4C8BE2;
					cursor: pointer;
				}
			}
			.table-container{
				margin-top: 22px;
			}
		}
	}
</style>