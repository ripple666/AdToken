<template>
	<div class="index">
		<div class="top">
			<div class="tit">
				我的帐户
			</div>
			<div class="info">
				<span>
					<span>今日帐户消耗：</span>
					<span class="num">0.00</span>
					<span>元</span>
				</span>
				<span class="fenge">|</span>
				<span>
					<span>帐户余额：</span>
					<span  class="num">0.00</span>
					<span>元</span>
					<i class="icon-bg charge-info"></i>
				</span>
				<span>
					<span class="charge">充值</span>
				</span>
			</div>
		</div>
		<div class="mid">
			<div class="tit">
				<span>帐户消耗</span>

				<select class="select" name="" id="">
					<option value="1">过去7天</option>
					<option value="2">今天</option>
					<option value="3">昨天</option>
					<option value="4">过去30天</option>
				</select>
			</div>
			<my-table :tableData="tableData"></my-table>
			<div class="chart">
				<div class="tips">
					<span @click="changetype(index)" :style="nowtips[0]===index||nowtips[1]===index?{backgroundColor:'#568CDC',color:'#fff'}:''" class="tip" v-for="(item,index) in tips">{{item.name}}</span>
				</div>
				<div class="content" id="chart-container">
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import myTable from '@/components/pices/my-table'


import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

export default{
		components:{
			myTable
		},
		data(){
			return{
				tableData:{
					thead:[{name:'总花费(元)'},{name:'展位数'},{name:'点击数'},{name:'点击率'},{name:'平均点击单价(元)'},{name:'平均千次展现费用(元)'}],
					tbody:[
						{
							tds:[
								{num:'0'},{num:'0'},{num:'0'},{num:'0.00%'},{num:'0.00'},{num:'0.00'}
							]
						}
					]
				},
				nowtips:[0,1],
				tips:[
					{
						name:'展示数'
					},
					{
						name:'点击数'
					},
					{
						name:'点击率'
					},
					{
						name:'平均点击单价(元)'
					},
					{
						name:'平均千次展现费用(元)'
					},
					{
						name:'总花费(元)'
					}
				],
				options:{   //hchart的参数
			        chart: {
			            zoomType: 'xy'
			        },
			        title: {
			            text: ''
			        },
			        subtitle: {
			            text: ''
			        },
			        xAxis: [{
			            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			            crosshair: true
			        }],
			        yAxis: [
				        { // Primary yAxis
				            labels: {
				                format: '{value}',
				                style: {
				                    color: Highcharts.getOptions().colors[1]
				                }
				            },
				            title: {
				                text: '点击数',
				                style: {
				                    color: Highcharts.getOptions().colors[1]
				                }
				            }
				        },
				        { // Secondary yAxis
				            title: {
				                text: '展示数',
				                style: {
				                    color: Highcharts.getOptions().colors[0]
				                }
				            },
				            labels: {
				                format: '{value}',
				                style: {
				                    color: Highcharts.getOptions().colors[0]
				                }
				            },
				            opposite: true
				        }
			        ],
			        tooltip: {
			            shared: true
			        },
			        legend: {
			            layout: 'vertical',
			            align: 'left',
			            x: 120,
			            verticalAlign: 'top',
			            y: 100,
			            floating: true,
			            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
			        },
			        series: [{  
			            name: '展示数',
			            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
			            type: 'spline',
			            yAxis: 1,
			            tooltip: {
			                valueSuffix: ' mm'
			            }
			        }, {
			            name: '点击数',
			            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
			            type: 'spline',
			            tooltip: {
			                valueSuffix: '°C'
			            }
			        }]
			    }
			}
		},
        computed:{

        },
        watch:{
        	nowtips:{
        		handler(val){
        			let index_0 = val[0]
        			let index_1 = val[1]
        			console.log(index_1);
        			let name_0 = this.tips[index_0].name
        			let name_1= this.tips[index_1].name

        			this.options.series = [{  
			            name: name_0,
			            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
			            type: 'spline',
			            yAxis: 1,
			            tooltip: {
			                valueSuffix: ' mm'
			            }
			        }, {
			            name: name_1,
			            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
			            type: 'spline',
			            tooltip: {
			                valueSuffix: '°C'
			            }
			        }]
			        this.options.yAxis = [
			        { // Primary yAxis
			            labels: {
			                format: '{value}',
			                style: {
			                    color: Highcharts.getOptions().colors[1]
			                }
			            },
			            title: {
			                text: name_1,
			                style: {
			                    color: Highcharts.getOptions().colors[1]
			                }
			            }
			        },
			        { // Secondary yAxis
			            title: {
			                text: name_0,
			                style: {
			                    color: Highcharts.getOptions().colors[0]
			                }
			            },
			            labels: {
			                format: '{value}',
			                style: {
			                    color: Highcharts.getOptions().colors[0]
			                }
			            },
			            opposite: true
			        }]
			        this.initChart()
        		},
        		deep:true
        	}
        },
        methods:{
        	initChart() {
		      var chartContainer = document.getElementById('chart-container')
		      this.chart = new Highcharts.Chart(chartContainer, this.options);
		    },
		    changetype(index){
		    	this.nowtips = [index,this.nowtips[0]]
		    }
        },
		created(){

		},
		mounted(){
			this.initChart()
		}
	}
</script>
<style lang="scss">


.index{
	.top{
		background-color: #fff;
		border: 1px solid #EEEEEE;
		padding-left: 30px;
		margin-bottom: 10px;
		.tit{
			line-height: 55px;
			font-size: 18px;
			margin-right: 30px;
			border-bottom:1px solid #D9D9D9;
		}
		.info{
			line-height: 90px;
			font-size: 14px;
			.num{
				color: #F87486;
			}
			.fenge{
				margin:0 20px;
				color: #D9D9D9;
			}
			.charge-info{
				width: 16px;
				height: 16px;
				background-image: url('../../assets/images/help.png');
				margin-left: 4px;
				margin-bottom: 3px;
				cursor: pointer;
			}
			.charge{
				display: inline-block;
				border: 1px solid #F87486;
				border-radius: 4px;
				color: #F87486;
				line-height: 28px;
				padding:0 16px;
				margin-left: 14px;
				cursor: pointer;
			}
		}
	}
	.mid{
		background-color: #fff;
		border: 1px solid #EEEEEE;
		padding-left: 30px;
		padding-bottom: 80px;
		padding-right: 30px;
		.tit{
			font-size: 18px;
			line-height: 55px;
			border-bottom:1px solid #D9D9D9;
			margin-bottom: 20px;
			.select{
				font-size: 12px;
				color: #333333;
				line-height: 30px;
				float: right;
				height:30px;
				margin-top: 10px;
			}
		}
		.chart{
			margin-top: 20px;
			border: 1px solid #EEEEEE;
			padding: 20px 0 16px;
			.tips{
				text-align: center;
				margin-bottom: 30px;
				.tip{
					display: inline-block;
					padding:0 12px;
					line-height: 30px;
					font-size: 13px;
					color: #999999;
					border: 1px solid #E7E7E7;
					margin-right: 1px;
					cursor: pointer;
				}
			}
			.content{
				margin-right: 30px;
				min-height: 402px;
			}
		}
	}
}
</style>