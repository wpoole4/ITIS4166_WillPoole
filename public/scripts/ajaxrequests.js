$(document).ready(function() {
    $("#nav_list li").click(function (){
        let name = $(this).children("a").attr("title");
        let fileName = name + ".json";
        $.ajax( {
            type: "get",
            url: fileName,
            dataType: "json",
            success: function(data){

            $("aside > h4").html(data.accessories[0].name);
            $("aside > p").html(data.accessories[0].bio);
        }
        });
    });
    });