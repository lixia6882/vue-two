<template>
  <div class="hello" id="hello">
    <div class="header">
    	<div class="header_list">
    		<ul class="ul">
    			<router-link v-for="item in rules.items" tag="li" to="">
    				{{item}}
    			</router-link>
    		</ul>
    	</div>
    </div>
    <div class="main">
    	<div class="main_left">
    		<div class="left_title">
    			 <div class="touxiang"></div>
    			 <h1>王小妹</h1>
    			 <p>三年级二班</p>
    			 <p>北京市海定区星火小学</p>
    		</div>
    		<ol class="left_ol">
    			<li>
    				<img src="../assets/student/student/lxb.png"/>
    				<span>1111</span>
    			</li>
    			<li>
    				<img src="../assets/student/student/sign.png"/>
    				<span>打卡</span>
    			</li>
    		</ol>
    		<div class="clearfix"></div>
    	  <ul class="left_ul">
    	  	<li>
    	  		<img src="../assets/student/student/img1.png" style="padding-left: 33px;"/>
    	  		<span style="padding-right: 10px;">排名：13</span>
    	  		<img src="../assets/student/student/up.png"/>
    	  		<img src="../assets/student/student/down.png"/>
    	  	</li>
    	  	<li>
    	  		<img src="../assets/student/student/img2.png"/>
    	  		<span>我的报告</span>
    	  	</li>
    	  	<li>
    	  		<img src="../assets/student/student/img3.png"/>
    	  		<span>我的课程</span>
    	  	</li>
    	  	<li>
    	  		<img src="../assets/student/student/img4.png"/>
    	  		<span>我的奖品</span>
    	  	</li>
    	  	<li>
    	  		<img src="../assets/student/student/img5.png"/>
    	  		<span>我的错题</span>
    	  	</li>
    	  </ul>
    	</div>
    	<div class="main_right">
    		<div class="right_title">
    			<img src="../assets/student/student/li1.png" />
    			<h1>老师任务</h1>
    			<p>查看任务</p>
    			<span>一个新任务</span>
    		</div>
    		<div class="right_title">
    			<img src="../assets/student/student/li2.png" />
    			<h1>每日限时任务</h1>
    			<p>查看任务</p>
    			<label>今天你领乐学币了吗？</label>
    		</div>
    		<div class="right_title">
    			<img src="../assets/student/student/li3.png" />
    			<h1>学霸闯关</h1>
    			<p>去闯关</p>
    			<label>资金币，赢大奖，变学霸</label>
    		</div>
    		<div class="right_title">
    			<img src="../assets/student/student/li4.png" />
    			<h1>优选课程</h1>
    			<label>学霸变学神的修炼之路</label>
    		</div>
    	</div>
    </div>
    <div class="footer">
    	<nav class="footer_nav">
    		<div class="footer_number">
    			<img src="../assets/student/student/tel.png" />
    		</div>
    		<div class="footer_number">
    			<ul>
    				<li v-for="name in rules.names">
    					{{name}}
    				</li>
    			</ul>
    			<div class="clearfix"></div>
    			<p>唯开乐学（北京）教育科技有限公司 版权所有</p>
    			<p>WeikaiLeXue(Beijing)Educatio Technology Company,Ltd.All Rights</p>
    		</div>
    		<div class="footer_number footer_last">
    			<p>关注我们</p>
    				<img src="../assets/common/erweima.png" />
    		</div>
    	</nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  	return {
	    rules:{
	    	items: ['主页','老师任务','学霸闯关','','优选课程','乐学商城','','王小妹','退出'], 
	      names:["联系我们",'加入我们','线下学校']
	    }
  	}
  }
}
</script>


<style lang="scss">
	 .hello{
	 	width: 100%;
	 	background: #f0f1f3;
	 }
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
 
   .main{
   	width:1003px;
   	height:560px;
   	margin: 23px auto;
   	display: -webkit-flex;
   }
   .main_left{
   	width: 211px;
   	height: 100%;
   	background: #fff;
   	border-radius:5px;
   	margin-right: 20px;
   }
   .main_right{
   	-webkit-flex: 1;
   }
   .left_title{
   	width: 100%;
   	height: 182px;
   	border-bottom: 1px solid #f5f4f9;
   	background: #fbfbfb;
   	border-top-left-radius: 5px;
   	border-top-right-radius: 5px;
   	padding-top: 20px;
   }
   .touxiang{
   	width: 76px;
   	height: 76px;
   	border-radius: 100%;
   	background: red;
   	margin:0 auto;
   }
   .left_title{
	   	h1{
	   		font-size: 14px;
		   	color: #00bcb8;
		   	line-height: 25px;
	   	}
	   	p{
		   	line-height: 22px;
		   	color: #666666;
		   	font-size: 12px;
   		}	
   }
   .left_ol{
	   	width: 100%;
	   	height:65px;
	   	border-bottom: 1px solid #f5f4f9;
	   	background: #fff;
	    line-height:46px;
	   	padding: 10px 0;
	   	li{
		   	display: inline-block;
		   	padding-right: 10px;
		   	img{
		   		padding: 10px 3px 0px 10px;	
		   	}
	    }
	    li:first-child{
   			border-right: 1px solid #f5f4f9;
   		}
   }
   .left_ul{
	   	li{
	   	height: 64px;
	   	line-height: 64px;
	   	border-bottom: 1px solid #f5f4f9;
	   	cursor: pointer;
	   }
	   li:first-child{
   		cursor: default;
   	 }
	   li:last-child{
   		border: none;
   	 }
   	 li img{
     	vertical-align: middle;
   	 }
   }
   .main_right{
	   	.right_title{
	   	width: 382px;
	   	height: 270px;
	   	border-radius:5px;
	   	background: #fff;
	   	padding-top: 11px;
	   	position: relative;
	   }
	   .right_title:first-child{
	   	float: left;
	   	margin-bottom: 20px;
	   }
	   .right_title:nth-child(2){
	   	float: right;
	   	margin-bottom: 20px;
   	 }
	   .right_title:nth-child(3){
	   	float: left;
	   }
	   .right_title:nth-child(4){
	   	float: right;
	   }
	   h1{
	   	position: absolute;
	   	left: 28px;
	   	top: 38px;
	   	font-size: 22px;
   	 }
   	 p{
	   	position: absolute;
	   	left: 38px;
	   	bottom:44px;
	   	color: #f98168;
	   	border:1px solid #f98168;
	   	line-height: 39px;
	   	padding:0 27px;
	   	border-radius: 20px;
	   	font-size: 14px;
	   	cursor: pointer;
     }
     span{
	   	position:absolute;
	   	top: 20px;
	   	right:-12px;
	   	line-height: 41px;
	   	color: #fff;
	   	display: block;
	   	width:119px;
	   	height: 50px;
	   	background: url(../assets/student/student/mission.png) no-repeat;
	   	background-size: contain;
     }
     label{
	   	position:absolute;
	   	top: 73px;
	   	left:28px;
	   	font-size: 14px;
     } 
   }
  /*页脚*/
  .footer{
  	width: 100%;
  	height: 170px;
  	background: #4a4e4d;
  	.footer_nav{
	  	width: 1003px;
	  	margin: 0 auto;
	  	padding-top: 40px;
  	}
  	.footer_number{
			width: 257px;
			height: 88px;
			border-right: 1px solid #5a5e5d;
			float: left;
			color: #fff;
		}
		.footer_number:nth-child(2){
			width: 495px;
			ul{
					margin-left:106px;
					li{
						float: left;
						border-right: 1px solid #5a5e5d;
						padding:0 20px;
						color: #848887;
						cursor: pointer;
						}
					li:last-child{
						border: none;
						}
				}
			p{
				padding-top: 9px;
				color: #dcdcdc;
			 }	
		}
		.footer_last{
			border: none;
			width: 190px;
		}
		.footer_number:last-child {
			img{
				width: 67px;
				height: 67px;
				margin-top: 10px;
			}
	}
	.footer_number:first-child {
		img{
			width: 190px;
			height: 70px;
		}
	}
  }
</style>
