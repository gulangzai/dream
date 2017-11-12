/**
 * Created by maker on 2016/11/5.
 */

$(function () {
    $(".li-in").hover(function(){
        $(this).find(".tubi").stop().toggle(500)

    })
    /*$(".tubi-ul li").bind("click", function () {
        var data_id = $(this).attr("data-id");
        $(".tubi-ul li").removeClass('active');
        $(".tubi-ul li[data-id = '"+data_id+"']").addClass('active');
        $(".main-list").addClass('display-none');
        $(".main-list[data-id = '"+data_id+"']").removeClass('display-none');
    });*/
    $(".portfolio-filter li").bind("click", function () {
        var data_id = $(this).attr("data-id");
        $(".portfolio-filter li").removeClass('selected');
        $(".portfolio-filter li[data-id = '"+data_id+"']").addClass('selected');
        $(".main-list").addClass('display-none');
        $(".main-list[data-id = '"+data_id+"']").removeClass('display-none');
    });
    $(".des-main .main-list .list-top p.one span").bind("click", function () {
        var data_id = $(this).attr("data-id");
        $(".des-main .main-list .list-top p.one span").removeClass('active');
        $(".des-main .main-list .list-top p.one span[data-id = '"+data_id+"']").addClass('active');
        $(".tubi-none").addClass('display-none');
        $(".tubi-none[data-id = '"+data_id+"']").removeClass('display-none');
        $(".tubi-none span").removeClass("active")
    });
    $(".tubi-none span").bind("click", function () {
        if($(this).hasClass("active")){
            $(this).removeClass("active")
        }else{
            if($(".tubi-none").find(".active").length < 3){
                $(this).addClass("active")
            }else{
                alert("最多选择3个")
            }
        }
    });
});