$(function () {
  'use strict'
  //init初始化页面
  $.ajax({
    url: BigNew.user_detail,
    type: 'get',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      for (let key in data.data) {
        $('input.' + key).val(data.data[key]);
      }
      $('img.user_pic').attr('src', data.data.userPic);
    }
  });

  // 文件预览
  $('#exampleInputFile').change(function () {
    let file = this.files[0];
    $('.user_pic').attr('src', URL.createObjectURL(file));
  })
  //修改用户信息
  $('#form').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        url: BigNew.user_edit,
        type: 'post',
        dataType: 'json',
        data: new FormData(this),
        contentType: false,
        processData: false,
        success: function (backData) {
            console.log(backData);
            if (backData.code == 200) {
                alert(backData.msg);
                parent.window.location.reload()
            }
        }
    });
});
})

