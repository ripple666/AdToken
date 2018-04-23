<template>
	<div>
		<div id="head" class="head">
            <div class="main">
            	<router-link :to="{path:'/'}" >
                	<img :src="logo"  height="57" width="110" alt="">
                </router-link>
                <span v-show="!isLogin" class="sign-in">
                    <router-link :to="{path:'/login'}" >Sign into AdToken</router-link>
                </span>
                <span v-show="isLogin" class="sign-in">
                    <span>{{userInfo.name}}</span>
                </span>
            </div>
        </div>
		<router-view/>
	</div>
</template>
<script>
import {mapState} from 'vuex'
	export default{
		data(){
			return{
            	logo:require('../assets/images/AdToken.png'),
                userInfo:{
                    name:'jduncan@youopia.name'
                }
			}
		},
        computed:mapState({
            isLogin:'isLogin'
        }),
		created(){
		}
	}
</script>
<style>
	.main{
        margin:0 auto;
        width: 94%;
    }

	.head{

        height: 9.4vh;
        padding-bottom: 3px;
        box-shadow: 0 1px 0 0 #E4E4E4;
    }
    .head img{
        height: 28px;
        width: 108px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .head .main{
        height: 9.4vh;
        line-height: 9.4vh;
        position: relative;
    }
    .head span{
         float: right;
    }
    .head .sign-in{
        font-size: 13px;
        color: #335FA0;
        cursor: pointer;
        margin-right: 80px;
    }
</style>