<template>
  <div>
  <!--HomeList-->
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content"></div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple " style="padding:30px 50px;">
        <div class="block">
          <div  class="radio">
            文档排序：
            <el-radio-group v-model="reverse">
              <el-radio  :label="false">正序</el-radio>
              <el-radio  :label="true">倒序</el-radio>
            </el-radio-group>
          </div>

          <el-timeline :reverse="reverse">
            <el-timeline-item class="HomeTitle"
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp">
             <router-link :to="'/Page?aid='+activity.cid">{{activity.catename}}</router-link>
             <div class="PageTime">{{activity.createtime}}</div>
            </el-timeline-item>
          </el-timeline>
        </div>  
        </div>
        </el-col>
        <el-col :span="4"><div class="grid-content"></div></el-col>
      </el-row>
    </el-main>
  </el-container>
  </div>
</template>

<script>
  import Api_ from '../ApiConfig'//引用API模块
  export default {
    data() {
      return {
        reverse: false, //时间轴排序方式 false表示正序
        activities: [],
        BaseUrl:Api_.BaseUrl,
        PageCateUrl:Api_.PageCateUrl,
      };
    },
    methods:{
      requestDate(){
        //API地址
        var api=this.BaseUrl+this.PageCateUrl
        this.$http.jsonp(api).then((response)=>{
          //console.log(response.body);
          //注意this的指向
          this.activities=response.body;
        },function(err){
          console.log(err);
        })
      }
    },
    mounted(){
      this.requestDate();
    }
  };
</script>


<style lang="scss" scoped>
.HomeTitle{font-size:1.2em;padding:15px 0px;}
.HomeTitle a{text-decoration:none;font-weight:bold;color: #555;}
.HomeTitle a:hover{color: #186b17;}
.radio{font-size: 1em;padding: 20px;font-weight:bold;border-bottom: 1px solid#e4e7ed;}
.PageTime{color: #999;font-size: 0.9em;line-height: 30px;height: 30px;}
.el-main{background:#f6f6f6;}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple {
    background: #fff;box-shadow: 0 1px 3px 0 rgba(37, 37, 37, 0.1);
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
