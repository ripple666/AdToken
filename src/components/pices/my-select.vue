<template>
	<span class="my-select">
		
	</span>
</template>
<script>
	export default{
		props:{
		  selects:{
		  	 type:Array,
		  	 default:[]
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
<style lang=scss>
	
</style>