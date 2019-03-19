# Exdoc-Vue版
Vue+CodeIgniter前后端分离的文档管理工具

## 项目运行
``` bash
# 克隆到本地
git clone https://github.com/HXCblog/Exdoc-Vue.git

# 进入文件夹
cd Exdoc-Vue

# 安装依赖
npm install 或 yarn

# 开启本地服务器localhost:8080
npm run dev

# 发布环境
1.修改文件./src/ApiConfig.vue的API地址，将 const BaseUrl=''; //修改成API服务器地址 您可以使用http://apiexdoc.huxinchun.com 开放的api进行测试
2.发布
npm run build
```
## 部分开放的API测试接口
1.  http://apiexdoc.huxinchun.com/Api             //所有文档接口
2.  http://apiexdoc.huxinchun.com/api/list?id=    //文档小节目录接口 id后接参数
3.  http://apiexdoc.huxinchun.com/content?id=     //文档详细内容接口 id后需要加文档id
4.  http://apiexdoc.huxinchun.com/api/linkcate    //链接分类接口
5.  http://apiexdoc.huxinchun.com/api/links?aid=  //分类链接详情接口 api需要跟分类链接aid号
