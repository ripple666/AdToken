<template>
	<div class="main">
        <div id="container" class="container">
            <div>
                <div class="sign-btn">
                     <router-link :to="{path:'login'}" class="sign-up">Sign into AdToken</router-link>
                </div>
            </div>
            <div class="pic-container">
                 <img class="firstpage-bg" :src="topbg" alt="">
                 <div class="three-png">
                     <img :src="topimg_1" alt="">
                     <img :src="topimg_2" alt="">
                     <img :src="topimg_3" alt="">
                 </div>
            </div>
        </div>
	</div>
</template>
<script>
export	default{
	components:{
		
	},
	data(){
		return {
            logo:require('../assets/images/AdToken.png'),
			topbg:require('../assets/images/firstpage-bg.png'),
            topimg_1:require('../assets/images/firstpage-earn.png'),
            topimg_2:require('../assets/images/firstpage-more.png'),
            topimg_3:require('../assets/images/firstpage-socala.png'),
		}
	},
	created(){

	}
}
</script>
<style  lang="scss" scope>
.main{
    .container{
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left:0;
        z-index: -1;
        padding-top: 9.4vh;
    }
    a{
        text-decoration: none;
    }
    .head a:hover{
         text-decoration: underline;
    }
    img{
        vertical-align: middle;
    }
    .container{
        text-align: center;
    }
    .sign-btn{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
    }
    .container .sign-up {
        background: #4167B2;
        border-radius: 4px;
        display: inline-block;
        padding: 12px 17px;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        margin-top: 7vh;
    }
    .container .firstpage-bg{
        height:59vh;
    }
    .pic-container{
        position: relative;
        width: 100%;
        padding-top: 80px;
    }
    .three-png{
        position: absolute;
        bottom: -100px;
        width: 100%;
    }
    .three-png img{
        height: 37vh;
    }
    .three-png img:nth-child(2){
        margin:0 40px;
    }
}
    
</style>