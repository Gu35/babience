$ (function() {
    //햄버거 버튼
    $('.hamburger_button').click(function() {
        $('.allmenu_box, .search_form').show();
        $('html, body').css({'overflow-y' : 'hidden'});
        $('.allmenu_wrap').addClass('on');
    });
    //close_btn
    $('.allmenu_wrap .close_btn').click(function() {
        $('.allmenu_box, .search_form').hide();
        $('html, body').css({'overflow-y' : 'visible'})
        $('.allmenu_wrap').removeClass('on');
    });
    //.a1 클릭시 .a2 보여짐
    $('.allmenu_box .a1>li>a').click(function() {
        $('.allmenu_box .a1>li>a').not(this).next().slideUp()
        $(this).next().slideToggle();
    });
    //.a2 클릭시 .a3 보여짐
    $('.allmenu_box .a2>li>a').click(function() {
        $('.allmenu_box .a2>li>a').not(this).next().slideUp()
        $(this).next().slideToggle();
    });



 


}) //ready