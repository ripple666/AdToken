
// import $ from 'jquery'

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
	inArray (arr,value){
        var str = arr.join(',')
        var reg = new RegExp(value,'ig')
        return (reg.test(str));
    }
}
for(var key in obj){
	validate.prototype[key] = obj[key]
}
var validate = new validate()
export { //很关键
  validate
}




