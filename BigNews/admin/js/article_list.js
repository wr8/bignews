$(function () {
  'use strict'
  
  //下拉框 
  $.ajax({
    url: BigNew.category_list,
    type: 'get',
    dataType: 'json',
    success: function (backData) {
      console.log(backData);
      //模板引擎渲染页面 
      $('#selCategory').html(template('opt', backData));
    }
  });

  //文章列表
  $('#btnSearch').click(e => {
      e.preventDefault();
      $.ajax({
      url:'',
      type:'get',
      dataType:'json',
      data:'',
      success: function(data){
      }
      });
      
  })

})