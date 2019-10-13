$(function () {
  


  $.ajax({
      url: BigNew.category_list,
      type: 'get',
      dataType: 'json',
      success: function (backData) {
          $('#selCategory').html(template('opt', backData));
      }
  });

  
  $('#btnSearch').click(function (e) {
      e.preventDefault();
      getArticleList(1);
  });
  $('#btnSearch').trigger('click');

  //请求文章列表
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
              $('.table>tbody').html(template('art_list', backData));
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
      $('#pagination').twbsPagination('destroy');
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

  /*
  设置父窗口 发表文章高亮
   */
   $('#release_btn').click(function(){
      //$() :第一个参数：选择器  第二个参数：document，默认是当前窗口document
      $('.level02>li:eq(1)',window.parent.document).addClass('active').siblings().removeClass('active');
  });
});