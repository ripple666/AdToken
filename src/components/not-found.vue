<template>
	<div id="not-found">
		<h1 class="tit">
			404 not found
		</h1>
		<p class="cont">The requested URL /404/ was not found on this server.</p>
	</div>
</template>
<script>
import {mapState} from 'vuex'
	export default{
		data(){
			return{
				
			}
		},
        computed:mapState({
        	
        }),
        watch:{
        	
        },
        methods:{
        	
        },
		created(){
		
		}
	}
</script>
<style lang="scss">
	#not-found{
		padding:40px 0 0 50px;
		.tit{
			    display: block;
			    font-size: 2em;
			    -webkit-margin-before: 0.67em;
			    -webkit-margin-after: 0.67em;
			    -webkit-margin-start: 0px;
			    -webkit-margin-end: 0px;
			    font-weight: bold;
		}
		.cont{
			display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
		}
	}
</style>