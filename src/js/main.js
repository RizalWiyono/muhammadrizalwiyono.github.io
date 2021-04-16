$(window).on("load", function(){
    $(".load-page").fadeOut("slow");
});

$(".dropbar-header").css("top", "-3000px").css("position", "absolute");

$('div#list_navbar li').click(function(){
    if(!$(this).hasClass("list-active")){
        $(".list-active").removeClass("list-active");
        $(".chevron-rotate").removeClass("chevron-rotate");
        $(this).addClass("list-active");
        var tag_a = this.querySelectorAll("a");
        $(tag_a).addClass("list-active");
        
        var tag_chevron = this.querySelectorAll("img");
        $(tag_chevron).addClass("chevron-rotate");

        var param_dropbar = document.querySelectorAll(".dropbar-header").length;
        each_param_dropbar = "drop_header_"+$( "li" ).index( this );

        for (var i = 0; i < param_dropbar; i++)
        {
            each_param = "drop_header_"+i;
            if(each_param_dropbar == each_param){
                $("#"+each_param).css("position", "relative").css("top", "0").css("transition", "all 0.3s");
            }else{
                $("#"+each_param).css("position", "absolute").css("top", "-3000px");
            }
        }

    }else{
        $(".list-active").removeClass("list-active");
        $(".chevron-rotate").removeClass("chevron-rotate");
        each_param_dropbar = "drop_header_"+$( "li" ).index( this );
        $("#"+each_param_dropbar).css("position", "absolute").css("top", "-3000px");
}
});

$('#show_menu_mobile').click(function(){
    $("body").css("overflow", "hidden");
    $("#menu_mobile").css("left", "0").css("transition", "all 0.3s");
    $("#show_menu_mobile img").removeClass("chevron-rotate");
    $(".close-area").css("display", "flex");
});

$('.close-area').click(function(){
    $("#menu_mobile").css("left", "-300px").css("transition", "all 0.3s");
    $(".close-area").css("display", "none");
    $("body").css("overflow", "");
    $("#menu_mobile_main").css("margin-left", "0px").css("transition", "all 0.3s");
});

$('#close_section').click(function(){
    $("#menu_mobile").css("left", "-300px").css("transition", "all 0.3s");
    $(".close-area").css("display", "none");
    $("body").css("overflow", "");
    $("#menu_mobile_main").css("margin-left", "0px").css("transition", "all 0.3s");
});

$('#library_section').click(function(){
    $("#menu_mobile_main").css("margin-left", "-200px").css("transition", "all 0.3s");
});

$('#back_section_to_main').click(function(){
    $("#menu_mobile_main").css("margin-left", "0px").css("transition", "all 0.3s");
});
