<template>
	<div id="detail">
		<div class="left">
			<ul>
				<li class="first-li" v-for="(firstList,firstIndex) in firstLists">
					<span noselect @click="changeFirstShow(firstIndex)" :style="nowFirstIndex===firstIndex?{color:'#000'}:''"><i class="first-icon" :style="nowFirstIndex===firstIndex?{backgroundColor:'#000'}:''"></i>{{firstList.pagename}}</span>
					<ul v-show="nowFirstIndex===firstIndex">
						<li class="secont-li" :style="nowFirstIndex===firstIndex&&nowSconIndex===sconIndex?{backgroundColor:'#699BE4',color:'#fff'}:''"  @click="changeScondShow(firstIndex,sconIndex)" v-for="(sconList,sconIndex) in firstList.sconLists">
							<span noselect>{{sconList.pagename}}</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="right">
			<router-view/>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
	export default{
		data(){
			return{
				nowFirstIndex:0,
				nowSconIndex:0,
				firstLists:[
					{
						pagename:'首页',
						path:'/index',
						sconLists:[]
					},
					{
						pagename:'广告管理',
						path:'/advertise-campaign',
						sconLists:[
							{
								pagename:'广告策略列表',
								path:'/advertise-campaign'
							},
							{
								pagename:'广告列表',
								path:'/advertise-banner'
							}
						]
					},
					{
						pagename:'数据报表',
						path:'/datacount',
						sconLists:[]
					},
					{
						pagename:'付款',
						path:'/pay',
						sconLists:[]
					},
					{
						pagename:'帐户设置',
						path: '/account',
						sconLists:[]
					}
				]
			}
		},
        computed:mapState({
		    // 箭头函数可使代码更简练
		    // islogin: state => state.islogin,

		    // 传字符串参数 'islogin' 等同于 `state => state.islogin`
		    // islogin: 'islogin',

		    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
		    islogin (state) {
		      return state.islogin 
		    }
		}),
        watch:{

        },
        methods:{
        	changeFirstShow(firstIndex){
        		this.$router.push({path:this.firstLists[firstIndex].path})
        		this.nowFirstIndex = firstIndex
        		this.nowSconIndex = 0
        		this.storageIndex(firstIndex,0)
        	},
        	changeScondShow(firstIndex,sconIndex){
        		this.nowFirstIndex = firstIndex
        		this.nowSconIndex = sconIndex
        		this.$router.push({path:this.firstLists[firstIndex].sconLists[sconIndex].path})
        		this.storageIndex(firstIndex,sconIndex)
        	},
        	storageIndex(firstIndex,sconIndex){ //储存当前页面的位置
        		sessionStorage.setItem('nowFirstIndex',firstIndex)
        		sessionStorage.setItem('nowSconIndex',sconIndex)
        	}
        },
		created(){
		    if(!this.islogin){  //检测是否是登陆状态，如果没有登陆就跳到首页
		       this.$router.push({path:'/main'});
		    }

		    //刷新页面监听页面路由位置
		    this.nowFirstIndex = parseInt(sessionStorage.getItem('nowFirstIndex')) || this.nowFirstIndex
        	this.nowSconIndex = parseInt(sessionStorage.getItem('nowSconIndex')) || this.nowSconIndex
		}
	}
</script>
<style lang="scss">
#detail{
	margin-top: 20px;
	position: relative;
	.left{
		border: 1px solid #EEEEEE;
		width: 200px;
		left: 20px;
		top: 0px;
		background-color: #fff;
		position: absolute;
		padding-top: 24px;
		min-height:600px;
		height: 100%;
		font-size: 16px;
		color: #999999;
		ul{
			li{

				span{
					display: inline-block;
					line-height: 64px;
					cursor: pointer;
					width: 100%;
					.first-icon{
						display: inline-block;
						background: #999999;
						border-radius: 4px;
						width: 24px;
						height: 24px;
						margin-right: 10px;
						margin-left: 20px;
					}
				}
				ul{
					li{
						cursor: pointer;
						span{
							display: inline-block;
							line-height:34px;
							font-size: 12px;
							margin-left:53px;
						}
					}
				}
			}
		}
	}
	.right{
		padding-left: 240px;
		padding-right: 20px;
		background-clip:content-box;
	}
}
</style>