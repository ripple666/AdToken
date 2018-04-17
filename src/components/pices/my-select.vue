<template>
	<div class="my-select">
		<div class="current-option option" :style="{height:selectData.optionHeight,lineHeight:selectData.optionHeight}" @click='showOptions'>{{ currentOption || this.selectData.options[0].name }}</div>
		<transition 
			:duration="50"
			enter-active-class="animated fadeInDown"
    		leave-active-class="animated fadeOut"
    	>
			<ul class="option-ul" v-show="isShowOptions">
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
		  	 default:{}
		  }
		},
		data(){
			return{
				isShowOptions:false,
				currentOption:''
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
        	optionClick(index){  //
        		this.isShowOptions = false
        		this.currentOption = this.selectData.options[index].name
        		this.$emit('on-option-click',index)
        	}
        },
		created(){

		}
	}
</script>
<style lang=scss>
	.my-select{
		display: inline-block;
		position: relative;
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