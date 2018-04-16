<template>
	<div class="my-table">
		<table>
			<thead>
				<tr>
					<th v-for="(item,index) in tableData.thead">
						{{item.name}}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(tr,trIndex) in tableData.tbody">
					<td  v-for="(td,tdIndex) in tr.tds" :style="td.style" @click="tdClick(trIndex,tdIndex)">
						{{td.num}}
						<img v-show="td.img" :src="td.img" alt="" >
					</td>
				</tr>
			</tbody>
		</table>
		<div class="page" v-if="tableData.ispage">
			<span>
				<span class="total-page">
					共{{1}}条记录
				</span>
				<img src="./../../assets/images/campaign-left.png" height="24" width="24" alt="">
				<span class="curpage">{{1}}</span>
				<img src="./../../assets/images/campaign-right.png" height="24" width="24" alt="">
				<input type="text">
				<span class="go-page">跳转</span>
			</span>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			tableData:{
				type:Object,
				default:{}
			}
		},
		data(){
			return{
				
			}
		},
        computed:{

        },
        watch:{

        },
        methods:{
        	tdClick(trIndex,tdIndex){  //
        		this.$emit('on-td-click',[trIndex,tdIndex])
        	}
        },
		created(){
		}
	}
</script>
<style lang="scss">
.my-table{
	table{
		width: 100%;
		thead{
			tr{
				background-color: #eee;
			}
		}
		tbody{
			tr{
				&:nth-child(2n){
					background-color: #F8F8F8;
				}
			}
		}
		th,td{
			border: 1px solid #D9D9D9;
			line-height: 40px;
			font-size: 12px;
			color: #333333;
			text-align: center;

		}
	}
	.page{
		height: 40px;
		&>span{
			.total-page{
				margin-right: 5px;
			}
			span{
				vertical-align: middle;
			}
			float: right;
			margin-top: 22px;
			input{
				border: 1px solid #D9D9D9;
				border-radius: 2px;
				width: 30px;
				line-height: 18px;
				margin: 0 10px;
				padding-left: 3px;
			}
			img{
				cursor: pointer;
			}
			.curpage{
				display: inline-block;
				width: 24px;
				height: 24px;
				background-color:rgb(87,134,221);
				vertical-align: middle;
				text-align: center;
				line-height: 24px;
				border-radius: 2px;
				color: #fff;
				margin: 0 5px;
			}
			.go-page{
				cursor: pointer;
				color: #335FA0;

			}
		}
	}
}
</style>