$(function () {
  'use strict'

  let id = window.location.href.split('=')[1].split('&')[0];
  let name = decodeURI(window.location.href.split('=')[2]);

  $(".main_con>.setfr>.list_title>h3").text(name);
  getArticleList(1);
  function getArticleList(page) {
    $.ajax({
      url: BigNew.article_query,
      type: 'get',
      dataType: 'json',
      data: {
        type: id,
        state: "已发布",
        page: page,
        perpage: 6,
      },
      success: function (data) {
        console.log(data);
        $('.main_con>.setfr>.main').html(template('news',data.data));
        loadPagination(data.data.totalPage, page);
      }
    });
  }

  
  function loadPagination(totalPage,startPage){
    $("#pagination").pagination({
      currentPage: startPage,
      totalPage: totalPage,
      callback: function (current) {
        getArticleList(current);
      }
    })
  }

    




})