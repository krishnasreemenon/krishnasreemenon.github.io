
/**
 * Created by rahul on 4/8/16.
 */
$(document).ready(function () {
    var window_height=$(window).height();
    var window_width=$(window).width();
    $('.cards-container').css("top",window_height+600);

    $(window).bind("scroll",function () {
        if ($(window).scrollTop()>100) {
            $('.page-bg').fadeIn(800,function () {

            });
        }
        else if($(window).scrollTop()<100) {
            $('.page-bg').fadeOut(500);
        }


        if ($(window).scrollTop()>200){
            $('.page-title').addClass('fixed-title');
        }
        else {
            $('.page-title').removeClass('fixed-title');
        }

    });
        //Cyclethru text function.
        var j = 0;
        var delay = 2000; //millisecond delay between cycles
        function cycleThru(){
            var jmax = $("ul#cyclelist li").length -1;
            $("ul#cyclelist li:eq(" + j + ")")
                .animate({"opacity" : "1"} ,400)
                .animate({"opacity" : "1"}, delay)
                .animate({"opacity" : "0"}, 400, function(){
                    (j == jmax) ? j=0 : j++;
                    cycleThru();
                });
        };
        cycleThru();
        //End of cyclethruc


    $('.slider').slider({full_width: true, indicators:false, height:window_height-50});


});