<template>
	<div class="my-select">
		<div @click='showOptions'>{{ defaultOption || this.selectData.options[0].name }}</div>
		<ul v-show="isShowOptions">
			<li @click="optionClick(index)" v-for="(item,index) in selectData.options">{{item.name}}</li>
		</ul>
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
				defaultOption:''
			}
		},
        computed:{
        },
        watch:{

        },
        methods:{
        	showOptions(){
        		this.isShowOptions = true
        	},
        	optionClick(index){  //
        		this.isShowOptions = false
        		this.defaultOption = this.selectData.options[index].name
        		this.$emit('on-option-click',index)
        	}
        },
		created(){

		}
	}
</script>
<style lang=scss>
	
</style>