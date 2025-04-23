// 토글
$(function(){
    $(".toggle").click(function(){
        $(".right_header > nav").toggleClass('active')
    });
});

$(function(){
    $(".toggle2").click(function(){
        $(".mobile_menu > nav").toggleClass('active')
    });
});
