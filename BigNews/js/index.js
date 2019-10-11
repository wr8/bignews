$(function () {
  'use strict'
  //焦点新闻
  $.ajax({
    url: BigNew.index_hotpic,
    type: 'get',
    dataType: 'json',
    success: function (data) {
      // console.log(data);
      $('ul.focus_list').html(template('focus_news', data));
    }
  });

  // 加载分类列表
  $.ajax({
    type: 'get',
    url: BigNew.category_list,
    success: function (backData) {
      console.log(backData);
      $('.level_two').html(template('cat_list', backData));
    }
  });

  //最新咨询
  $.ajax({
    url: BigNew.index_latest,
    type: 'get',
    dataType: 'json',
    success: function (backData) {
      console.log(backData);
      $('.common_news').html(template('news', backData));
    }
  });

  //热门排行
  $.ajax({
    url: BigNew.index_rank,
    type: 'get',
    dataType: 'json',
    success: function (backData) {
      console.log(backData);
      $('.hotrank_list').html(template('rank', backData));
    }
  });

  //最新评论
  $.ajax({
    url: BigNew.get_comment,
    type: 'get',
    dataType: 'json',
    success: function (backData) {
      console.log(backData);
      $('.comment_list').html(template('comment', backData));
    }
  });

  //焦点关注
  $.ajax({
    url: BigNew.index_attention,
    type: 'get',
    dataType: 'json',
    success: function (backData) {
      console.log(backData);
      $('.guanzhu_list').html(template('guanzhu', backData));
    }
  });
})