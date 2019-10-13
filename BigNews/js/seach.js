
$(function () {
    if(location.href.indexOf('='));
    let search = decodeURI(location.href.split('=')[1]);
    $('.search_txt').val(search);
    
    $('.search_btn').click(function() {
        var text = $('.search_txt').val();
        $.ajax({
            url: 'http://localhost:8080/api/v1/index/search',
            type: 'get',
            dataType: 'json',
            data: {
                page: 1,
                perpage: 10,
                key: text
            },
            success: function (backData) {
                console.log(backData);
                $('.setfr').html(template('news', backData.data));
            }
        });
    });

    $('.search_btn').trigger('click');
});