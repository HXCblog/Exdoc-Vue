<template>
  <div>
    <el-container>
        <el-footer><p>{{corpyright}}<router-link class="about" to="About">关于</router-link></p></el-footer>
    </el-container>

      
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      corpyright: 'corpyright © 2018 ExDoc版权所有'
    }
  }
}
</script>


<style lang="scss" scoped>
    p{font-size: 0.8em;color: #555;}
    .about{text-decoration: none;background: #ddd;padding: 0px 6px;border-radius: 3px;color: #238427;}
</style>
