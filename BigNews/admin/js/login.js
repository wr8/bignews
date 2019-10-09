$(function() {
  'use strict'
  $(".input_sub").click((e)=>{
      e.preventDefault();
      let username = $(".input_txt").val();
      let password = $(".input_pass").val();
      if(username.trim().length==0 || password.trim().length==0){
        $('.model-body>p').text('请输入用户名和密码');
        $('#myModal').modal();
          return;
      }
      $.ajax({
      url: BigNew.user_login,
      type:'post',
      dataType:'json',
      data:{
        username:username,
        password:password,
      },
      success: function(data){
        if(data.code == 200){
          // alert("登录成功");
          localStorage.setItem('token',data.token);
          $('.modal-body>P').text(data.msg);
          $('#myModal').modal();
          $('#myModal').on('hidden.bs.modal', function (e) {
            // do something...
            //跳转首页
            window.location.href = './index.html';
          });
        } else {
          $('.modal-body>p').text(data.msg);
          $('#myModal').modal();
          $(".input_pass").val('');
        }
      }
      });
  })
  
})