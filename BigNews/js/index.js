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

  //最新咨询
  $.ajax({
    url: BigNew.index_latest,
    type: 'get',
    dataType: 'json',
    success: function (backData) {
      // console.log("新闻列表");
      // console.log(backData);
      $('.common_news').html(template('news', backData));
    }
  });
})