<template>
	<div class="header" id="header">
		<div class="header_list">
    		<ul class="ul">
    			<router-link v-for="(item,index) in rules.itemsd" tag="li" to="Index" :class="{back:changback==index}" @click.native="changebgc(index)">
    				<a>{{item}}</a>
    			</router-link>
    			<span class="span1"></span>
    			<span class="span2">王小妹</span>
    			<span class="span3">退出</span>
    		</ul>	
    	</div>
	</div>
</template>

<script>
export default {
  data () {
  	return {
	    rules:{
	    	itemsd:['主页','老师任务','学霸闯关','优选课程','乐学商城']
	    },
	    changback:0
  	}
  },
  mounted(){
  	this.changebgc(0)
  },
  methods:{
  	changebgc:function(index){
  			this.changback=index;
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
   	background: url(../assets/student/student/logo.png) no-repeat center center;
	background-size:80px 53px;
   	.ul{
   		width: 100%;
   		height: 100%;
   		padding-left:80px;
   		position: relative;
   		li{
   		width:81px;
   		height: 32px;
   		float: left;
   		font-size: 16px;
   		cursor: pointer;
	   	position: relative;
	   	margin-right:45px;	
	   	line-height: 32px;
	   	margin-top: 25px;
   		}
   		li:nth-child(3){
   			margin-right:195px;
   		}
   		.span1{
	   		width:34px;
		   	height: 34px;
		   	display: inline-block;
		   	border-radius: 24px;
		   	background: #778585;
   			position: absolute;
   			top: 22px;
   			right:94px;
   			cursor: pointer;
   		}
   		.span2{
   			position: absolute;
   			top: 30px;
   			right:40px;
   			cursor: pointer;
   		}
   		.span3{
   			position: absolute;
   			top:30px;
   			right: 0px;
   			cursor: pointer;
   		}
   	}
   	.back{
	      	width: 84px;
	    	height: 32px;
	    	position: absolute;
	    	left: 0;
	    	top: 0px;
	    	background: #00bdb7;
	    	border-radius: 20px;
	    	a{
	    		color:#fff;
	    	}
	    }
    }
</style>