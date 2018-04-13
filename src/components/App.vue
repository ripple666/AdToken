<template>
  <div id="app">
        <router-view/>
  </div>
</template>
<script>

export default {
  components:{},
  data(){
    return{
    }
  },
  methods:{
   
  },
  created(){
      if(localStorage.getItem('login')){  //检测是否localStorage,如果有就不用登陆，有过登陆
          this.$store.commit({
            type:'login',
            loginStaus:true
          })
      }
  }
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,input {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
input{
      border: 1px solid #DDDDDD;
      border-radius: 4px;
      outline: none;
      padding-left: 10px;
      box-sizing: border-box;
}
input:focus{
  border: 1px solid #8FBCFF;
}
html,body {
   width: 100%;
   font-family:Helvetica,Arial,sans-serif;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
textarea{
  overflow:hidden;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
/*自定义全局样式*/
body {
  background: #f9f9f9;
  font-size: 12px;
  color: #000;
}
[ellipsis]{
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
[noselect]{
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none; 
        user-select:none;
}
[center]{
  text-align: center !important;
}
[hidden]{
  filter: opacity(0);
  opacity: 0
}
img,i{
    vertical-align: middle;
}
/*清楚浮动*/
.clearfloat{
    zoom:1;
}

.clearfloat:after{
    content: "";
    display:block;
    height: 0;
    clear: both;
    visibility: hidden;
}
/*遮罩层*/
.mask{
    z-index:1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.25);
}
/*遮罩层内容*/
.mask-content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
    background-color: #fff;
    text-align: center;
}
/*全局公共宽度*/
.main{
    width: 1000px;
    margin:0 auto;
}
/*全居中*/
.xy-mid{
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
/*水平居中*/
.x-mid{ 
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
}
/*垂直居中*/
.y-mid{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
}
/*背景图标公共样式*/
.icon-bg{
    display: inline-block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
}
/*改变placeholder的颜色*/
.choose-input::-webkit-input-placeholder {
    color: rgba(0,0,0,0.45)
}
.choose-input::-moz-placeholder {
    color: rgba(0,0,0,0.45)
}
.choose-input::-ms-input-placeholder {
    color: rgba(0,0,0,0.45)
}


/*谷歌wekit内核隐藏滚动条*/
  .noscrollbar::-webkit-scrollbar {
      width:0px;
      height:0px;
  }
  .noscrollbar::-webkit-scrollbar-button    {
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-webkit-scrollbar-track     {
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-webkit-scrollbar-track-piece {
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-webkit-scrollbar-thumb{
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-webkit-scrollbar-corner {
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-webkit-scrollbar-resizer  {
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-webkit-scrollbar {
      width:10px;
      height:10px;
  }
  /*o内核*/
  .noscrollbar .-o-scrollbar{
      -moz-appearance: none !important;   
      background: rgba(0,255,0,0) !important;  
  }
  .noscrollbar::-o-scrollbar-button    {
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-o-scrollbar-track     {
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-o-scrollbar-track-piece {
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-o-scrollbar-thumb{
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-o-scrollbar-corner {
      background-color:rgba(0,0,0,0);
  }
  .noscrollbar::-o-scrollbar-resizer  {
      background-color:rgba(0,0,0,0);
  }
  /*IE10,IE11,IE12 隐藏滚动条*/
  .noscrollbar{
      -ms-scroll-chaining: chained;
      -ms-overflow-style: none;
      -ms-content-zooming: zoom;
      -ms-scroll-rails: none;
      -ms-content-zoom-limit-min: 100%;
      -ms-content-zoom-limit-max: 500%;
      -ms-scroll-snap-type: proximity;
      -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
      -ms-overflow-style: none;
      overflow: auto;
  }


select::-ms-expand{ display: none; }
select {
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  border: solid 1px #D9D9D9;

  /*很关键：将默认的select选择框样式清除*/
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;

  /*在选择框的最右侧中间显示小箭头图片*/
  background:#fff url("http://ourjs.github.io/static/2015/arrow.png") right center/14px 14px no-repeat border-box;

  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 18px;
  padding-left: 10px;
  outline: none;
}
option::-ms-expand{ display: none; }
option{
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari 和 Chrome */
    appearance:none;
}
/* --背景色字体颜色--*/
option:hover{
    color:#fff;
    background-color:#1E90FF;
}

</style>

