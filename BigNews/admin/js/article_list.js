$(function () {
  //1.页面一加载：请求分类列表渲染到下拉菜单
  $.ajax({
      url: BigNew.category_list,
      type: 'get',
      dataType: 'json',
      success: function (backData) {
        //   console.log(backData);
          //模板引擎渲染页面 
          $('#selCategory').html(template('opt', backData));
      }
  });

  
  //2.1 按钮点击事件
  $('#btnSearch').click(function (e) {
      //阻止表单默认行为
      e.preventDefault();
      //2.2 ajax请求
      getArticleList(1);
  });
  //2.4 页面一加载请求数据
  $('#btnSearch').trigger('click');

  //根据页数请求文章列表
  function getArticleList(currentPage) {
      $.ajax({
          url: BigNew.article_query,
          type: 'get',
          dataType: 'json',
          data: {
              page: currentPage,
              perpage: 10,//每页返回10条数据
              type: $('#selCategory').val(),
              state: $('#selStatus').val(),
          },
          success: function (backData) {
            //   console.log(backData);
              //2.3 模板引擎渲染页面
              $('.table>tbody').html(template('art_list', backData));
              //加载分页组件
              loadPagination(backData.data.totalPage, currentPage);
          }
      });
  };

  /**
  * @description:加载分页组件 
  * @param {type} totalPages ：总页数
  * @param {type} startPage ：当前页数
  * @return: 
  */
  function loadPagination(totalPages, startPage) {
      //(1)先销毁上一次的分页数据
      $('#pagination').twbsPagination('destroy');
      //(2)加载分页插件
      $('#pagination').twbsPagination({
          totalPages: totalPages,
          startPage: startPage,
          visiblePages: 6,
          first: '首页',
          prev: '上一页',
          next: '下一页',
          last: '尾页',
          onPageClick: function (event, page) {
              //如果点击的页数与当前页数不一致，则发送ajax请求
              if (page != startPage) {
                  getArticleList(page);
              };
          }
      });
  };

  /*3.删除文章：
  3.1 给删除按钮注册委托事件（动态添加的元素需要注册动态事件）
  3.2 获取当前点击按钮自定义属性 data-id
  3.3 ajax发送请求
  3.4 响应之后刷新页面 
   */
   $('table>tbody').on('click','.delete',function(){
      $.ajax({
          url:BigNew.article_delete,
          type:'post',
          dataType:'json',
          data:{
              id:$(this).attr('data-id')
          },
          success: function(backData){
              if(backData.code == 204){
                  alert('删除成功');
                  window.location.reload();
              }else{
                  alert(backData.msg);
              };
          }
      });
  });

  /*4.发表文章
  设置父窗口 发表文章高亮
   */
   $('#release_btn').click(function(){
      //$() :第一个参数：选择器  第二个参数：document，默认是当前窗口document
      $('.level02>li:eq(1)',window.parent.document).addClass('active').siblings().removeClass('active');
  });
});