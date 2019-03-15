
<script>
const BaseUrl='http://192.168.0.50/index.php'; //网址
const PageCateUrl='/Api'; //http://192.168.0.50/index.php/Api
const PageListUrl='/api/list?id='; //http://192.168.0.50/index.php/api/list?id=
const PageContentUrl='/api/content?id='; //http://192.168.0.50/index.php/api/content?id=
const LinkCateUrl='/api/linkcate';
const LinksUrl='/api/links?aid=';
export default
{
  BaseUrl,//服务器地址
  PageCateUrl, //文档分类(主页)API地址
  PageListUrl,  //文档列表API地址
  PageContentUrl,//文档详细内容API地址
  LinkCateUrl, //链接分类API地址
  LinksUrl,    //链接详情API地址

}
</script>