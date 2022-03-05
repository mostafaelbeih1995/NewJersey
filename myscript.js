/**
 * Created by mostafa on 12/30/2016.
 */

var navigation_toggle = function() {
    $("#navigation-toggle").click(function() {

        if($("#newNavigation").css('display') == 'none'){
            $("#newNavigation").slideDown();
            // $("#newNavigation").css("display", "block");
        }
        else{
            $("#newNavigation").slideUp();
            // $("#newNavigation").css("display", "none");
        }
    });
};

jQuery(document).ready(function() {
    navigation_toggle();

    // var top_offset = $("#navigate").offset().top;
    // // jQuery("#navigate").wrap('div class = "nav-placeholder"></div>');
    // // jQuery(".nav-placeholder").height(jQuery("#navigate").outerHeight);
    // $(window).scroll(function () {
    //
    //         var window_offset = $(window).scrollTop();
    //         if(window_offset >= top_offset){
    //             /* $("#navigate").css("position","fixed");
    //              $("#navigate").css("backgroundColor","white");
    //              $("#navigate").css("width","100%");
    //              $("#navigate").css("top","0%");
    //              $("#navigate").css("z-index","12"); */
    //
    //
    //             $("#navigate").addClass('fixedheader');
    //
    //         }
    //         else{
    //
    //             $("#navigate").removeClass('fixedheader');
    //         }
    //
    // });
    $(window).scroll(function () {

        var scroll_top = $(window).scrollTop();
        var navigation_top = $("#navigate").offset().top;
        var header_bottom = parseInt($("header").offset().top + $("header").outerHeight());

        if(navigation_top <= scroll_top) {
            $('#navigate').addClass('fixedheader');
            $('#firstPicture').addClass('firstPicture');
        }

        // if top(A) < top(B) => A is above B
        if(navigation_top < header_bottom) {
            if($('#navigate').hasClass("fixedheader")) {
                $('#navigate').removeClass('fixedheader');
                $('#firstPicture').removeClass('firstPicture');
            }
        }
        // else {
            // $('#navigate').removeClass('fixedheader');
        // }
    });

});


