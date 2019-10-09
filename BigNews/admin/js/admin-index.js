$(function () {
  'use strict'

  $.ajax({
    url: 'http://localhost:8080/api/v1/admin/user/info',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      $('.user_info>img').attr('src', data.data.userPic);
      $('.user_center_link>img').attr('src', data.data.userPic);
      $('.user_info>span').text('欢迎  ' + data.data.nickname);
    }
  });
})