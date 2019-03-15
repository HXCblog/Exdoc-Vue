<template>
  <div>
    <div class="ListBox">
        <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple ListLeft">
                <ul>
                  <li class="PageTitle">{{Title}}</li>
                  <li v-for="(item,id) in items" :key="id" @click="selectItems(id)"
                  :class="itemsIndex===id?'ListLeft ListLeft-active':'ListLeft a'">
                    <router-link :to="'/Page/Content?id='+item.id" >{{item.title}}</router-link>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="grid-content bg-purple ListRight"> 
                <router-view  v-if="isRouterAlive"></router-view>
                <div class="content" v-html="content"></div>
              </div>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import Api_ from '../ApiConfig'//引用API模块
export default {
  data () {
    return {
      items:[],
      itemsIndex:0,
      FirstData:1,
      content:'',
      Title:'',
      isRouterAlive: true,
      BaseUrl:Api_.BaseUrl,
      PageCateUrl:Api_.PageCateUrl,
      PageListUrl:Api_.PageListUrl,
      PageContentUrl:Api_.PageContentUrl,

    }
  },
  //组键加载执行
  mounted(){
    this.requestDate();
    this.Titlename(this.$route.query.aid);
  },
  methods:{
    //路由变化重新加载子组键
     reload(){
      this.content='',//清空首篇文档内容
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
     },
    //文档列表数据请求
    requestDate(){
      //测试数据接口请求 后台支持jsonp
      var mid=this.$route.query.aid;
      var api=this.BaseUrl+this.PageListUrl+mid
      this.$http.jsonp(api).then((response)=>{
        //console.log(response);
        //注意this的指向
        this.items=response.body;
        //获取第一个栏目首篇文档id
        this.FirstData=response.body[0].id;
      },function(err){
        console.log(err);
      }).then(()=>{
          //获取首篇文章
          this.firstData(this.FirstData);
      })
    },
    //切换选项卡
    selectItems(id) {
      this.itemsIndex = id;
    },
    //栏目标题
    Titlename(cid){
        //API地址
        var api=this.BaseUrl+this.PageCateUrl+'?cid='+cid
        this.$http.jsonp(api).then((response)=>{
          //注意this的指向
          this.Title=response.body.catename;
        },function(err){
          console.log(err);
        })
    },
    //首次加载第一个栏目aid的数据
    firstData(id){
       //测试数据接口请求 后台支持jsonp
      var api=this.BaseUrl+this.PageContentUrl+id
      this.$http.get(api).then((response)=>{
        //注意this的指向
        this.content=response.body[0].content;
      })
    },
  },
  //监听路由变化，变化执行reload函数
  watch:{
    "$route":"reload"
  },
  
  
}
</script>

<style lang="scss" scoped>
li{list-style:none;}
.ListBox{padding: 10px 50px;}
.ListLeft{float: left;width: 100%;font-size:0.9em;color: #555;}
.ListLeft ul{padding:0px 20px;}
.ListLeft li{line-height: 30px;border-bottom: 1px dotted #eee;}
.ListLeft a{text-decoration: none;color: #555; text-align: left;list-style:none}
.ListLeft .ListLeft-active a{color: #228f20;font-weight: bold;}
.ListLeft a:hover{color: #228f20;}
.ListRight{float: left;width: 100%;font-size:0.9em;color: #555;}
.PageTitle{font-weight: bold;font-size: 14px;line-height: 40px;height: 40px;}
.content{padding: 20px 30px;}
.el-row{margin-bottom: 20px;}
.el-col {border-radius: 4px;}
.bg-purple-dark {background: #99a9bf;}
.bg-purple {background: #fff;box-shadow: 0 1px 3px 0 rgba(37, 37, 37, 0.1)}
.bg-purple-light {background: #e5e9f2;}
.grid-content {border-radius: 4px;min-height: 36px;}
.row-bg {padding: 10px 0;background-color: #f9fafc;}

</style>
