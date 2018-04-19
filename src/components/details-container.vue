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
        computed:{

        },
        watch:{

        },
        methods:{
        	changeFirstShow(firstIndex){ //点击导航栏一级导航触发事件
        		this.$router.push({path:this.firstLists[firstIndex].path})
        		this.nowFirstIndex = firstIndex
        		this.nowSconIndex = 0
        		this.storageIndex(firstIndex,0)
        	},
        	changeScondShow(firstIndex,sconIndex){//点击导航栏二级导航触发事件
        		this.nowFirstIndex = firstIndex
        		this.nowSconIndex = sconIndex
        		this.$router.push({path:this.firstLists[firstIndex].sconLists[sconIndex].path})
        		this.storageIndex(firstIndex,sconIndex)
        	},
        	storageIndex(firstIndex,sconIndex){ //每次点击导航栏储存当前页面的位置
        		sessionStorage.setItem('nowFirstIndex',firstIndex)
        		sessionStorage.setItem('nowSconIndex',sconIndex)
        	}
        },
		created(){
			console.log('details-container.vue is loaded')

			//用来刷新页面，保留之前的导航栏的样式
		    const path = this.$route.path
		    switch(path){
		    	case '/index':
		    		this.nowFirstIndex = 0
		    		this.nowSconIndex = 0
		    		break;
		    	case '/advertise-campaign':
		    		this.nowFirstIndex = 1
		    		this.nowSconIndex = 0
		    		break;
		    	case '/advertise-banner':
		    		this.nowFirstIndex = 1
		    		this.nowSconIndex = 1
		    		break;
		    	case '/datacount':
		    		this.nowFirstIndex = 2
		    		this.nowSconIndex = 0
		    		break;
		    	case '/pay':
		    		this.nowFirstIndex = 3
		    		this.nowSconIndex = 0
		    		break;
		    	case '/account':
		    		this.nowFirstIndex = 4
		    		this.nowSconIndex = 0
		    		break;
		    }
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