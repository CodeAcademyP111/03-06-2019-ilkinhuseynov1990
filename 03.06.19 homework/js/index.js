$(document).ready(function () {

    $(window).scroll(function () {


        var y = $(".scrolling").position();

        

        if (window.pageYOffset != y.top) {
            $(".scrolling").css({
                "width": "100%",
                "height": "50px",
                "background-color": "#212529",
                "margin":"0"
            })

            $(".scrolling").parent().removeClass("container");
            $(".scrolling").removeClass("mt-4");

        }else{
            $(".scrolling").parent().addClass("container");
            $(".scrolling").addClass("mt-4");
            $(".scrolling").css({
                "background-color": ""
            })
               

           
        }




    })

})