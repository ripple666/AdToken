<template>
	<div class="my-select" >
		<div class="current-option option" :style="{height:selectData.optionHeight,lineHeight:selectData.optionHeight,width:optionWidth}" @click='showOptions'>{{ currentOption || this.selectData.options[0].name }}</div>
		<transition 
			:duration="100"
			enter-active-class="animated fadeIn"
    		leave-active-class="animated fadeOut"
    	>
			<ul ref="ul" class="option-ul" :style="{left:left}"  v-show="isShowOptions">
				<li class="option" :style="{height:selectData.optionHeight,lineHeight:selectData.optionHeight}" @click="optionClick(index)" v-for="(item,index) in selectData.options">
					{{item.name}}
				</li>
			</ul>
		 </transition>
	</div>
</template>
<script>
	export default{
		props:{
		  selectData:{
		  	 type:Object,
		  	 default:{
		  	 }
		  }
		},
		data(){
			return{
				isShowOptions:true,
				left:'9999px' , //让option显示，才能获取到ul的宽度，
				currentOption:'',
				optionWidth:''

			}
		},
        computed:{
        },
        watch:{
        },
        methods:{
        	showOptions(){
        		this.isShowOptions = !this.isShowOptions
        	},
        	optionClick(index){  
        		this.isShowOptions = false
        		this.currentOption = this.selectData.options[index].name
        		this.$emit('on-option-click',index)
        	}
        },
		mounted(){
			this.optionWidth = window.getComputedStyle(this.$refs.ul).width  //获取options列表的真实宽度，使得currentOption的宽度与之保持一致
			this.isShowOptions = false  //然后让option隐藏
			setTimeout(()=>{  //将left的位置放到正常位置
				this.left = 0
			},500)
			
			document.addEventListener('click', (e) => {  //点击其他区域隐藏组件
			    if (!this.$el.contains(e.target)) {
			       	this.isShowOptions = false
			    }
			})
		}
	}
</script>
<style lang=scss>
	.my-select{
		display: inline-block;
		position: relative;
		/*overflow: hidden;*/
		.option{
			padding: 0 25px 0 12px;
			white-space: nowrap;
			cursor: pointer;
		}
		.current-option{
			 background:#fff url("http://ourjs.github.io/static/2015/arrow.png") right center/14px 14px no-repeat border-box;
			 border: solid 1px #D9D9D9;
		}
		.option-ul{
			position: absolute;
			z-index: 1000;
			border: solid 1px #D9D9D9;
			background-color: #fff;
			li{
				&:hover{
					background-color:#5786dd;
					color: #fff;
				}
			}
		}
	}
</style>