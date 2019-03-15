<template>
    <div class="Links">
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content">
                <div class="Linkleft">
                  <li v-for="(item,index) in items" :key="index" @click="requestLinks(item.aid);selectItems(index)"
                  :class="itemsIndex===index?'Linkleft libox-active':'Linkleft libox'" >
                   {{item.linkcate}}
                  </li>
                </div>    
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple"> 
                <div class="LinkRight">
                  <li class="libox" v-for="(list,id) in lists" :key="id" >
                      <a :href="list.link">{{list.name}}</a>
                  </li>
                </div>
            </div>
            </el-col>
            <el-col :span="4"><div class="grid-content"></div></el-col>
        </el-row>
    </div>
</template>

<script>
import Api_ from '../ApiConfig'//引用API模块
export default {
  data () {
    return {
      itemsIndex:0,
      item:'',
      items:[],
      list:'',
      lists:[],
      firstlink:1,
      BaseUrl:Api_.BaseUrl,
      LinkCateUrl:Api_.LinkCateUrl,
      LinksUrl:Api_.LinksUrl,

    }
  },
 
  mounted(){
    //调用数据请求方法
    this.requestDate();
  },

  methods:{

    requestDate(){
      //测试数据接口请求 后台支持jsonp
      var api=this.BaseUrl+this.LinkCateUrl;
      this.$http.get(api).then((response)=>{
        //栏目数组
        this.items=response.body;
        //栏目aid
        this.firstid=response.body[0].aid;
      },function(err){
        console.log(err);
      }).then(()=>{this.firstData(this.firstid);})//获取第一个栏目aid

    },
    //数据请求
    requestLinks(aid){
      //测试数据接口请求 后台支持jsonp
      var api=this.BaseUrl+this.LinksUrl+aid
      this.$http.get(api).then((response)=>{
        //console.log(response);
        //注意this的指向
        this.lists=response.body;
      },function(err){
        console.log(err);
      })
    },
    //首次加载第一个栏目aid的数据
    firstData(firstid){
       //测试数据接口请求 后台支持jsonp
      var api=this.BaseUrl+this.LinksUrl+firstid
      this.$http.get(api).then((response)=>{
        //注意this的指向
        this.lists=response.body;
      })
    },
    //切换选项卡
    selectItems(index) {
      this.itemsIndex = index;
    },

  },

}
</script>

<style scoped>
a{text-decoration: none;color: #333;}
.Links{padding: 20px;}
.Linkleft{width: 90%;color: #fff; display: inline-block;}
.LinkRight{display: inline-block;padding: 15px;min-height: 200px;}
.Linkleft .libox{background:rgb(156, 156, 156);padding:8px 10px;font-size: 0.9em; border-radius: 5px; margin-bottom: 20px;}
.Linkleft .libox:hover{background: darkgrey;cursor: pointer;}
.LinkRight .libox{display: inline;;font-size: 0.8em;margin:5px;padding: 10px 5px;}
.LinkRight .libox a{border:1px solid #eee;border-radius: 3px;padding: 2px 4px;}
.LinkRight .libox a:hover{color: rgb(66, 114, 18);}
.Linkleft .libox-active{
  background:rgb(100, 171, 72);padding:8px 10px;font-size: 0.9em; border-radius: 5px; margin-bottom: 20px;
}

.el-col {border-radius: 4px;}
.bg-purple-dark {background: #99a9bf;}
.bg-purple {background: #ffffff;box-shadow: 0 1px 3px 0 rgba(37, 37, 37, 0.1);}
.bg-purple-light {background: #e5e9f2;}
.grid-content {border-radius: 4px;min-height: 36px;}
.row-bg {padding: 10px 0;background-color: #f9fafc;}
</style>
