$(function () {
  'use strict'

  $.ajax({
    url: BigNew.category_list,
    type: 'get',
    dataType: 'json',
    // data:'',
    success: function (data) {
      console.log(data);
      if (data.code == 200)
        $('select.category').html(template('opt',data));
    }
  });

})