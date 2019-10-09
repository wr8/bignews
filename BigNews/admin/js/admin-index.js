$(function () {
  'use strict'
  // console.log(BigNew);
  $.ajax({
    url: BigNew.user_info,
    type: 'get',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      $('.user_info>img').attr('src', data.data.userPic);
      $('.user_center_link>img').attr('src', data.data.userPic);
      $('.user_info>span').text('欢迎  ' + data.data.nickname);
    }
  });
//一级列表操作
  $('.level01').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    // console.log($(this).next());

    // 如果点击是文章管理,滑出ul,并进行初始化操作
    if($(this).next().hasClass('level02')){
      $(this).next().slideToggle();
      $(this).find('b').toggleClass('rotate0');
      $('.level02>li>a').first()[0].click();
    } else $('.level02>li').removeClass('active');
    
  })

  //二级列表
  $('.level02').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })


})