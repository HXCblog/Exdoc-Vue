<template>
  <div>
    <!--navbar-->
    <el-container>
    <div class="logo"><img src="./assets/logo.png"></div>
      <el-header>
        <router-link class="HomeLink" to="/">文档</router-link>
        <router-link class="HomeLink" to="/Links">链接</router-link>
      </el-header>
    </el-container>
    <router-view></router-view>
    <router-view class="StyHome" name="Vhome"></router-view>
    <router-view class="Styfooter" name="Vfooter"></router-view>
  </div>
</template>


<style lang="scss">
body{font-size: 1.2em;background:#f6f6f6;}
.HomeLink{text-decoration: none;color: #555;background:#eee;border-radius: 3px;padding: 5px 15px;font-weight:500;}
.HomeLink:hover{background: #fff;transition: 0.4s;}
.logo{margin:0 auto;}
.el-header, .el-footer {color: #333;text-align: center;line-height: 60px;}
.el-aside {background-color: #D3DCE6;color: #333;text-align: center;line-height: 200px;}
.el-main {background-color: #E9EEF3;color: #333;}
body > .el-container {margin-bottom: 40px;} 
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {line-height: 260px;}
.el-container:nth-child(7) .el-aside {line-height: 320px;}
.el-radio__inner{background: #4CAF50;}
.el-radio__label{color:  #4CAF50;}
.el-radio__input.is-checked .el-radio__inner{border-color:#4CAF50;background: #4CAF50; }
.el-radio__input.is-checked+.el-radio__label{color: #5f9a47;}
.el-radio__inner:hover{border-color:#5f9a47}
</style>
