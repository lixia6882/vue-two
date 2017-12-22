<template>
	<div class="footer">
    	<nav class="footer_nav">
    		<div class="footer_number">
    			<img src="../assets/student/student/tel.png" />
    		</div>
    		<div class="footer_number">
    			<ul>
	    			<router-link v-for="name in rules.names" tag="li" to="">
	    				{{name}}
	    			</router-link>
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
</template>

<script>
export default {
	  data () {
	  	return {
		    rules:{
		    	names:["联系我们",'加入我们','线下学校']
		    }
	  	}
	  }
}
</script>

<style lang="scss">
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