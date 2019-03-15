<template>
  <div class="PageList">
        <div v-html="list.content"></div>
  </div>
</template>
<!--百度UEditor代码高亮编辑器-->

<script>
import Api_ from '../ApiConfig'//引用API模块


export default {
  data () {
    return {
      mes:this.$route.query.id,
      list:[],
      BaseUrl:Api_.BaseUrl,
      PageContentUrl:Api_.PageContentUrl,
    }
  },
  mounted(){
    var aid=this.$route.query.id;
    //调用数据请求方法
    this.requestDate(aid);
  },
  methods:{
    //数据请求
    requestDate(aid){
      //测试数据接口请求 后台支持jsonp
      var api=this.BaseUrl+this.PageContentUrl+aid
      this.$http.get(api).then((response)=>{
        //console.log(response);
        //注意this的指向
        this.list=response.data[0];
      },function(err){
        console.log(err);
      })
    },

  },

}
</script>


<style scoped>
div >>> pre{background:#fcf6e5;padding: 20px; border-radius: 20px; color:#333;font-family:Arial,Verdana,Sans-serif;}
.PageList{padding: 20px 30px;}
</style>
