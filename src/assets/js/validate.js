
import $ from 'jquery'

var validate = function(){

}
var obj = {
	getQueryString:function(name){ 	//截取search
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)",'i');
	    var str = window.location.href
	    var r = str.substr(str.indexOf('?')+1).match(reg);
	    if(r!=null)return  unescape(r[2]); return null;
	},
	setCookie:function(name,value,hours){ //设置cookie
		var exp = new Date();
		exp.setTime(exp.getTime() + hours*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp;
	},
	getCookie:function(name){ //获取cookie
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			return unescape(arr[2]);
		}else{
			return null;
		}
	},
	delCookie:function(name){ //删除cookie
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval=getCookie(name);
		if(cval!=null){
			document.cookie= name + "="+cval+";expires="+exp.toGMTString();
		}

		function getCookie(name){
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg)){
				return unescape(arr[2]);
			}else{
				return null;
			}
		}
	},
	index_cn_init:function(obj){
		window.onresize = ()=> {
			let width = $(window).width()
			let left = (width-362)/2+'px'
			obj.campaignPosition = left
			if(width<720){
				obj.isMobile = true
				console.log(obj)
				
			}else{
				obj.isMobile = false
			}
		}
		obj.isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width()<720 //是否是移动端
		obj.campaignPosition = ($(window).width()-362)/2+'px' //campaign居中
		$(window).on('scroll',function(){
			let scrollHeight = $(window).scrollTop()
			if(scrollHeight<500){
				$('html,body').css('background-color','#fff')
			}else{
				$('html,body').css('background-color','#000')
			}
		})
	}
}
for(var key in obj){
	validate.prototype[key] = obj[key]
}
var validate = new validate()
export { //很关键
  validate
}




