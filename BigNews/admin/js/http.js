/*实际开发中哪些js文件需要使用沙箱 
不需要使用： 这个js只需要导入一次   前端三层js
需要使用： 这个js需要多次导入  http.js 网络请求层
*/

/* 沙箱模式 */
(function (w) {
  var baseURL = 'http://localhost:8080/api/v1'
  var BigNew = {
    baseURL: baseURL,//基地址
    user_login: baseURL + '/admin/user/login',//用户登录
    user_info: baseURL + '/admin/user/info',//用户信息
    user_detail: baseURL + '/admin/user/detail',//用户详情
    user_edit: baseURL + '/admin/user/edit',//用户编辑
    category_list: baseURL + '/admin/category/list',//文章类别查询
    category_add: baseURL + '/admin/category/add',//文章类别新增
    category_search: baseURL + '/admin/category/search',//文章类别搜索
    category_edit: baseURL + '/admin/category/edit',//文章类别编辑
    category_delete: baseURL + '/admin/category/delete',//文章类别删除
    article_query: baseURL + '/admin/article/query',//文章搜索
    article_publish: baseURL + '/admin/article/publish',//文章发布
    article_search: baseURL + '/admin/article/search',//文章信息查询
    article_edit: baseURL + '/admin/article/edit',//文章编辑
    article_delete: baseURL + '/admin/article/delete',//文章删除
    comment_list: baseURL + '/admin/comment/search',//文章评论列表
    comment_pass: baseURL + '/admin/comment/pass',//文章评论通过
    comment_reject: baseURL + '/admin/comment/reject',//文章评论不通过
    comment_delete: baseURL + '/admin/comment/delete',//文章评论删除

    index_hotpic: baseURL + "/index/hotpic",//获取焦点图
    index_category: baseURL + "/index/category",//获取文章类型
    index_latest: baseURL + "/index/latest",//获取最新资讯
    index_rank: baseURL + "/index/rank",//获取热门排行
    index_attention: baseURL + "/index/attention",//获取焦点评论
    index_artitle: baseURL + "/index/artitle",//获取文章详情
    index_get_comment: baseURL + "/index/get_comment",//获取评论列表
    index_post_comment: baseURL + "/index/post_comment",//发表评论列表
    index_search: baseURL + "/index/search",//获取文章搜索
  };

  //暴露接口
  w.BigNew = BigNew;
})(window);