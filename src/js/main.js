$(".dropbar-header").css("top", "-300px");

$('ul#list_navbar li').click(function(){
    if(!$(this).hasClass("list-active")){
        $(".list-active").removeClass("list-active");
        $(this).addClass("list-active");

        var param_dropbar = document.querySelectorAll(".dropbar-header").length;
        each_param_dropbar = "drop_header_"+$( "li" ).index( this );

        for (var i = 0; i < param_dropbar; i++)
        {
            each_param = "drop_header_"+i;
            if(each_param_dropbar == each_param){
                $("#"+each_param).css("top", "");
                $("#"+each_param).css("transition", "all 0.3s");
            }else{
                $("#"+each_param).css("top", "-300px");
                $("#"+each_param).css("transition", "all 0.3s");
            }
        }

    }else{
        $(".list-active").removeClass("list-active");
        each_param_dropbar = "drop_header_"+$( "li" ).index( this );
        $("#"+each_param_dropbar).css("top", "-300px");
        $("#"+each_param_dropbar).css("transition", "all 0.3s");
    }
});

function open_side_menu() {
    document.getElementById('side_menu_mobile').style.right = "0";
    document.getElementById('side_menu_mobile').style.transition = "all 0.3s";
}

function close_side_menu() {
    document.getElementById('side_menu_mobile').style.right = "-300px";
    document.getElementById('side_menu_mobile').style.transition = "all 0.3s";
}