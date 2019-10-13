$(function() {
  'use strict'
  
  // 加载分类列表
  $.ajax({
    type: 'get',
    url: BigNew.category_list,
    dataType: 'json',
    success: function (backData) {
      // console.log(backData);
      $('.level_two,.left_menu').html(template('cat_list', backData));
    }
  });

  //热门排行
  $.ajax({
    url: BigNew.index_rank,
    type: 'get',
    dataType: 'json',
    success: function (backData) {
      // console.log(backData);
      $('.hotrank_list').html(template('rank', backData));
    }
  });

  //最新评论
  $.ajax({
    url: BigNew.index_latest_comment,
    type: 'get',
    dataType: 'json',
    success: function (backData) {
      console.log(backData);
      $('.comment_list').html(template('comment_Now', backData));
    }
  });

  //焦点关注
  $.ajax({
    url: BigNew.index_attention,
    type: 'get',
    dataType: 'json',
    success: function (backData) {
      // console.log(backData);
      $('.guanzhu_list').html(template('guanzhu', backData));
    }
  });

  $('.search_button').click(function () {
    var text = $('.search_txt').val();
    location.href='./search.html?search='+text;
  })
})