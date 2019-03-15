<template>
  <div>
     <!--F404-->
    <el-container>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content"></div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple " style="padding:30px 50px;">
          <div class="block">
            <div  class="radio">
             <h1>Exdoc简介</h1>

              Exdoc是款简洁的文档管理工具，Exdoc采用前后端分离方式开发。<br><br>

              当前版本：V1.0.0<br>

              项目前端：Vue2.0+Vuex+VueRouter+Vue-resource+ElementUI<br>

              项目后端：Codeigniter+Codeigniter-restserver<br><br>

              使用Exdoc，你可以很方便的记录工作笔记，书写项目文档，还可以收集整理一些实用的工具库。同样Exdoc是一款开源工具，它拥有比较详细的使用和开发手册，你可以很容易进行修改和二次开发来满足你日常工作需求。<br><br>

              麻雀虽小，五脏俱全，Exdoc也是一个非常不做的学习项目，它能让你快速了解vue的使用与前后端分离模式的开发。<br>
            </div>
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
export default {

}
</script>

<style scoped>
.el-main{background:#f6f6f6;}
.el-col {border-radius: 4px;}
.bg-purple {background: #fff;box-shadow: 0 1px 3px 0 rgba(37, 37, 37, 0.1);}
.grid-content {border-radius: 4px;min-height: 36px;}
.row-bg {padding: 10px 0;background-color: #f9fafc;}

</style>
