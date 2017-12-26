<template>
  <div class="hello" id="hello">
  	<Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  data () {
  	return {
	    
  	}
  },
  mounted:function(){
  	this.cartView();
  },
  methods:{
  	cartView:function(){
  		this.$http.get("src/data/hello.json").then(res=>{
  			console.log(res.data);
  		});
  	}
  },
  components: {
  	Header,
  	Footer,
  }
}
</script>

<style lang="scss">
	 .hello{
	 	width: 100%;
	 	background: #f0f1f3;
	 } 
</style>
