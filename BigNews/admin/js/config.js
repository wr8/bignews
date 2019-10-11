$(function () {
  'use strict'
  //类别初始化
  $.ajax({
    url: BigNew.category_list,
    type: 'get',
    dataType: 'json',
    // data:'',
    success: function (data) {
      // console.log(data);
      if (data.code == 200)
        $('select.category').html(template('opt', data));
    }
  });

  //文件预览
  $('#inputCover').change(function () {
    let file = this.files[0];
    let url = URL.createObjectURL(file);
    $('.article_cover').attr('src', url);
  });

  //日期初始化
  jeDate('#testico', {
    trigger: 'click',
    theme: { bgcolor: "#00A680", pnColor: "#00DDAA" },//绿色主题
    format: "YYYY-MM-DD",
    isinitVal: true,
  });

  // 富文本插件初始化
  tinymce.init({
    selector: '#mytextarea',
    height: '350px',
    language: 'zh_CN',
    directionality: 'ltl',
    browser_spellcheck: true,
    contextmenu: false,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table contextmenu paste imagetools wordcount",
      "code"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
  });
})

