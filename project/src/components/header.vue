<template>
	<div class="header" id="header">
		<div class="header_list">
    		<ul class="ul">
    			<router-link v-for="item in rules.items" tag="li" to="/hello">
    				{{item}}
    			</router-link>
    		</ul>
    	</div>
	</div>
</template>

<script>
export default {
  data () {
  	return {
	    rules:{
	    	items: ['主页','老师任务','学霸闯关','','优选课程','乐学商城','','王小妹','退出']
	    }
  	}
  }
}
</script>

<style lang="scss">
   .header{
   	width: 100%;
   	height: 110px;
   	background:url(../assets/student/common/header_bg.png) no-repeat;
   	background-size: 100% 100%;
   }
   .header_list{
   	width: 1003px;
   	height:110px;
   	margin: 0 auto;
	   	.ul li{
	   	float: left;
	   	font-size: 16px;
	   	margin-right: 60px;
	   	margin-top:32px;
	   	cursor: pointer;
	    }
	   .ul li:first-child{
	   	margin-left:83px;
	   	margin-right: 47px;
	   	background: #00bdb7;
	   	color: #fff;
	   	padding:8px 26px;
	   	border-radius: 20px;
	   	margin-top:24px;
     }
     .ul li:nth-child(7){
	   	margin-right: 0;
	   	width:34px;
	   	height: 34px;
	   	border-radius: 24px;
	   	background: #393737;
	   	margin-right: 10px;
	   	margin-top: 22px;
    }
    .ul li:nth-child(8){
	   	margin-right: 22px;
	   	color: #bdbdbd;
	   	font-size:14px; 	
   	}
   	.ul li:nth-child(4){
	   	width: 81px;
	   	height: 54px;
	   	background: url(../assets/student/student/logo.png) no-repeat;
	   	background-size: contain;
	   	margin-top: 27px;
	    cursor: default;
   	}
   	.ul li:last-child{
	   	margin-right: 0;
	   	color: #bdbdbd;
	   	font-size:14px;
   	}
  }
</style>