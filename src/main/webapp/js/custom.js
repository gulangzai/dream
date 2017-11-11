jQuery(window).load(function() {

    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.userAgent.match(/ZuneWP7/i)
    ) {
        var text_var = window.location.hash;
        var $hash = text_var.substring(1, text_var.length);

        location.hash = '';
        setTimeout(function(){
            jQuery(window).trigger('resize');
            location.hash = $hash;
        }, 1000);
    }
});

jQuery(document).ready(function() {

    var url= window.location.href;
    jQuery('body').append('<a href="'+url+'" class="hide_flv flv_to_click"></a>');


    jQuery(window).on('orientationchange', function(event) {

        /*
         jQuery(window).trigger('resize');
         var url= window.location.hash;
         location.hash = '';

         setTimeout(function(){
         jQuery(window).trigger('resize');
         // location.href = url;
         }, 1000);
         */
    });

    "use strict";

    // ===== Pre Loader ===== //
    jQuery(window).on("load", function(){

        jQuery('.loader-wrapper').fadeOut(300);
        jQuery('#main-menu').fadeIn(300);

        jQuery('video').each(function(i,n){  
        	if(i==0){
                jQuery(this)[0].play();
                jQuery(this).parents('.section').addClass('flv_video');
        	}
        })
    });





    // ===== jQuery Fullpage Settings ===== //
    var customScroll = false;  // ===== CHANGE THIS VARIABLE TO 'true' IF YOU NEED TO USE AUTO SCROLLING FUNCTION ===== //
    var fitToSection_flv = false;

    if(window.fitToSection_flv=="true"){ fitToSection_flv = window.fitToSection_flv ; customScroll = true; }
    if (customScroll == false ) {		jQuery('#fullpage').addClass("normalScroll");	}

    var sections_perma="panelBlock";if(window.sections){ sections_perma= window.sections ; }



    if(!jQuery('#fullpage').hasClass("fullpageDisable")){
        if(fitToSection_flv == true || fitToSection_flv == "true"){
            jQuery('#fullpage').fullpage({
                fitToSection:fitToSection_flv,
                resize: false,
                anchors: [sections_perma+'1', sections_perma+'2', sections_perma+'3', sections_perma+'4', sections_perma+'5', sections_perma+'6', sections_perma+'7', sections_perma+'8', sections_perma+'9', sections_perma+'10', sections_perma+'11', sections_perma+'12', sections_perma+'13', sections_perma+'14', sections_perma+'15', sections_perma+'16', sections_perma+'17', sections_perma+'18', sections_perma+'19', sections_perma+'20', sections_perma+'21', sections_perma+'22', sections_perma+'23', sections_perma+'24', sections_perma+'25', sections_perma+'26', sections_perma+'27', sections_perma+'28', sections_perma+'29', sections_perma+'30', sections_perma+'55'],
                menu: '.nav-menu',
                navigation: true,
                navigationPosition: 'right',
                slidesNavigation: true,
                loopHorizontal: true,
                afterLoad: function(anchorLink, index){

                    var nr=jQuery('.section.footer-panel').attr("data-anchor").match(/\d+/);
                    jQuery('.section.footer-panel').addClass("panel-"+nr);

                    jQuery(window).trigger('resize')

                    if(index == 2){
                        jQuery('.panel-2 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-2 .animate-fadeInUp, .panel-2 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-2 .animate-fadeInLeft, .panel-2 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 3){
                        jQuery('.panel-3 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-3 .animate-fadeInUp, .panel-3 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-3 .animate-fadeInLeft, .panel-3 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 4){
                        jQuery('.panel-4 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-4 .animate-fadeInUp, .panel-4 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-4 .animate-fadeInLeft, .panel-4 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 5){
                        jQuery('.panel-5 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-5 .animate-fadeInUp, .panel-5 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-5 .animate-fadeInLeft, .panel-5 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 6){
                        jQuery('.panel-6 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-6 .animate-fadeInUp, .panel-6 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-6 .animate-fadeInLeft, .panel-6 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 7){
                        jQuery('.panel-7 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-7 .animate-fadeInUp, .panel-7 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-7 .animate-fadeInLeft, .panel-7 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 8){
                        jQuery('.panel-8 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-8 .animate-fadeInUp, .panel-8 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-8 .animate-fadeInLeft, .panel-8 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 9){
                        jQuery('.panel-9 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-9 .animate-fadeInUp, .panel-9 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-9 .animate-fadeInLeft, .panel-9 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 10){
                        jQuery('.panel-10 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-10 .animate-fadeInUp, .panel-10 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-10 .animate-fadeInLeft, .panel-10 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 11){
                        jQuery('.panel-11 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-11 .animate-fadeInUp, .panel-11 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-11 .animate-fadeInLeft, .panel-11 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 12){
                        jQuery('.panel-12 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-12 .animate-fadeInUp, .panel-12 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-12 .animate-fadeInLeft, .panel-12 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 13){
                        jQuery('.panel-13 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-13 .animate-fadeInUp, .panel-13 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-13 .animate-fadeInLeft, .panel-13 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 14){
                        jQuery('.panel-14 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-14 .animate-fadeInUp, .panel-14 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-14 .animate-fadeInLeft, .panel-14 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 15){
                        jQuery('.panel-15 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-15 .animate-fadeInUp, .panel-15 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-15 .animate-fadeInLeft, .panel-15 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 16){
                        jQuery('.panel-16 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-16 .animate-fadeInUp, .panel-16 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-16 .animate-fadeInLeft, .panel-16 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 17){
                        jQuery('.panel-17 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-17 .animate-fadeInUp, .panel-17 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-17 .animate-fadeInLeft, .panel-17 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 18){
                        jQuery('.panel-18 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-18 .animate-fadeInUp, .panel-18 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-18 .animate-fadeInLeft, .panel-18 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 19){
                        jQuery('.panel-19 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-19 .animate-fadeInUp, .panel-19 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-19 .animate-fadeInLeft, .panel-19 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 20){
                        jQuery('.panel-20 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-20 .animate-fadeInUp, .panel-20 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-20 .animate-fadeInLeft, .panel-20 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 21){
                        jQuery('.panel-21 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-21 .animate-fadeInUp, .panel-21 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-21 .animate-fadeInLeft, .panel-21 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 22){
                        jQuery('.panel-22 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-22 .animate-fadeInUp, .panel-22 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-22 .animate-fadeInLeft, .panel-22 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 23){
                        jQuery('.panel-23 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-23 .animate-fadeInUp, .panel-23 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-23 .animate-fadeInLeft, .panel-23 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 24){
                        jQuery('.panel-24 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-24 .animate-fadeInUp, .panel-24 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-24 .animate-fadeInLeft, .panel-24 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 25){
                        jQuery('.panel-25 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-25 .animate-fadeInUp, .panel-25 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-25 .animate-fadeInLeft, .panel-25 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 26){
                        jQuery('.panel-26 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-26 .animate-fadeInUp, .panel-26 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-26 .animate-fadeInLeft, .panel-26 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 27){
                        jQuery('.panel-27 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-27 .animate-fadeInUp, .panel-27 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-27 .animate-fadeInLeft, .panel-27 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 28){
                        jQuery('.panel-28 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-28 .animate-fadeInUp, .panel-28 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-28 .animate-fadeInLeft, .panel-28 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 29){
                        jQuery('.panel-29 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-29 .animate-fadeInUp, .panel-29 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-29 .animate-fadeInLeft, .panel-29 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 30){
                        jQuery('.panel-30 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-30 .animate-fadeInUp, .panel-30 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-30 .animate-fadeInLeft, .panel-30 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 55){
                        jQuery('.panel-55 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-55 .animate-fadeInUp, .panel-55 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-55 .animate-fadeInLeft, .panel-55 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }


                }
            });
        }else{


            jQuery('#fullpage').fullpage({
                autoScrolling: customScroll,
                scrollOverflow: customScroll,
                fitToSection:false,
                resize: false,
                anchors: [sections_perma+'1', sections_perma+'2', sections_perma+'3', sections_perma+'4', sections_perma+'5', sections_perma+'6', sections_perma+'7', sections_perma+'8', sections_perma+'9', sections_perma+'10', sections_perma+'11', sections_perma+'12', sections_perma+'13', sections_perma+'14', sections_perma+'15', sections_perma+'16', sections_perma+'17', sections_perma+'18', sections_perma+'19', sections_perma+'20', sections_perma+'21', sections_perma+'22', sections_perma+'23', sections_perma+'24', sections_perma+'25', sections_perma+'26', sections_perma+'27', sections_perma+'28', sections_perma+'29', sections_perma+'30', sections_perma+'55'],
                menu: '.nav-menu',
                navigation: true,
                navigationPosition: 'right',
                slidesNavigation: true,
                loopHorizontal: true,
                afterLoad: function(anchorLink, index){
                    var nr=jQuery('.section.footer-panel').attr("data-anchor").match(/\d+/);
                    jQuery('.section.footer-panel').addClass("panel-"+nr);

                    //jQuery(window).trigger('resize')

                    if(index == 2){
                        jQuery('.panel-2 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-2 .animate-fadeInUp, .panel-2 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-2 .animate-fadeInLeft, .panel-2 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 3){
                        jQuery('.panel-3 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-3 .animate-fadeInUp, .panel-3 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-3 .animate-fadeInLeft, .panel-3 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 4){
                        jQuery('.panel-4 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-4 .animate-fadeInUp, .panel-4 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-4 .animate-fadeInLeft, .panel-4 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 5){
                        jQuery('.panel-5 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-5 .animate-fadeInUp, .panel-5 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-5 .animate-fadeInLeft, .panel-5 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 6){
                        jQuery('.panel-6 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-6 .animate-fadeInUp, .panel-6 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-6 .animate-fadeInLeft, .panel-6 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 7){
                        jQuery('.panel-7 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-7 .animate-fadeInUp, .panel-7 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-7 .animate-fadeInLeft, .panel-7 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 8){
                        jQuery('.panel-8 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-8 .animate-fadeInUp, .panel-8 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-8 .animate-fadeInLeft, .panel-8 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 9){
                        jQuery('.panel-9 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-9 .animate-fadeInUp, .panel-9 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-9 .animate-fadeInLeft, .panel-9 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 10){
                        jQuery('.panel-10 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-10 .animate-fadeInUp, .panel-10 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-10 .animate-fadeInLeft, .panel-10 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 11){
                        jQuery('.panel-11 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-11 .animate-fadeInUp, .panel-11 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-11 .animate-fadeInLeft, .panel-11 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 12){
                        jQuery('.panel-12 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-12 .animate-fadeInUp, .panel-12 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-12 .animate-fadeInLeft, .panel-12 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 13){
                        jQuery('.panel-13 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-13 .animate-fadeInUp, .panel-13 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-13 .animate-fadeInLeft, .panel-13 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 14){
                        jQuery('.panel-14 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-14 .animate-fadeInUp, .panel-14 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-14 .animate-fadeInLeft, .panel-14 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 15){
                        jQuery('.panel-15 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-15 .animate-fadeInUp, .panel-15 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-15 .animate-fadeInLeft, .panel-15 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 16){
                        jQuery('.panel-16 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-16 .animate-fadeInUp, .panel-16 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-16 .animate-fadeInLeft, .panel-16 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 17){
                        jQuery('.panel-17 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-17 .animate-fadeInUp, .panel-17 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-17 .animate-fadeInLeft, .panel-17 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 18){
                        jQuery('.panel-18 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-18 .animate-fadeInUp, .panel-18 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-18 .animate-fadeInLeft, .panel-18 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 19){
                        jQuery('.panel-19 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-19 .animate-fadeInUp, .panel-19 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-19 .animate-fadeInLeft, .panel-19 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 20){
                        jQuery('.panel-20 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-20 .animate-fadeInUp, .panel-20 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-20 .animate-fadeInLeft, .panel-20 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 21){
                        jQuery('.panel-21 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-21 .animate-fadeInUp, .panel-21 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-21 .animate-fadeInLeft, .panel-21 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 22){
                        jQuery('.panel-22 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-22 .animate-fadeInUp, .panel-22 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-22 .animate-fadeInLeft, .panel-22 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 23){
                        jQuery('.panel-23 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-23 .animate-fadeInUp, .panel-23 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-23 .animate-fadeInLeft, .panel-23 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 24){
                        jQuery('.panel-24 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-24 .animate-fadeInUp, .panel-24 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-24 .animate-fadeInLeft, .panel-24 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 25){
                        jQuery('.panel-25 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-25 .animate-fadeInUp, .panel-25 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-25 .animate-fadeInLeft, .panel-25 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 26){
                        jQuery('.panel-26 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-26 .animate-fadeInUp, .panel-26 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-26 .animate-fadeInLeft, .panel-26 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 27){
                        jQuery('.panel-27 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-27 .animate-fadeInUp, .panel-27 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-27 .animate-fadeInLeft, .panel-27 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 28){
                        jQuery('.panel-28 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-28 .animate-fadeInUp, .panel-28 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-28 .animate-fadeInLeft, .panel-28 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 29){
                        jQuery('.panel-29 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-29 .animate-fadeInUp, .panel-29 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-29 .animate-fadeInLeft, .panel-29 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 30){
                        jQuery('.panel-30 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-30 .animate-fadeInUp, .panel-30 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-30 .animate-fadeInLeft, .panel-30 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                    if(index == 55){
                        jQuery('.panel-55 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-55 .animate-fadeInUp, .panel-55 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
                        jQuery('.panel-55 .animate-fadeInLeft, .panel-55 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
                    }
                }
            });
        }
    }




    // ===== Custom Data Attribute ===== //
    var bgImage = "#fullpage .section, #fullpage .section .slide, .slider-panel-wrapper .slides li, .full-carousel-wrapper .carousel-item, .page-header, .page-footer, .page-team, .myVideo,.scroll_section"

    jQuery("*").css('height', function () {
        return jQuery(this).attr('data-height')+'px'
    });

    jQuery("*").css('color', function () {
        return jQuery(this).data('color')
    });

    jQuery("*").css('opacity', function () {
        return jQuery(this).data('opacity')
    });

    jQuery("*").css('background-color', function () {
        return jQuery(this).data('bg-color')
    });


    jQuery(bgImage).css('background-image', function () {
        var bg = ('url(' + jQuery(this).data("image-src") + ')');
        return bg;
    });


    jQuery(".top-triangle").css("border-bottom-color", function () {
        return jQuery(this).data('shape-color')
    });




    // ===== Block Title Before After ===== //
    jQuery('.block-title h1').before('<div class="line-before"></div>').after('<div class="line-after"></div>').wrapInner('<span></span>');

    jQuery(window).on("load resize", function() {
        jQuery('.block-title h1').each(function() {
            var titleText = jQuery(this).children().width();
            jQuery(this).width(titleText);
        });
    });


    // ===== Fit Image to DIV ===== //
    jQuery('.fit-img').each(function() {
        var $div = jQuery(this),
            $img = jQuery('img', $div),
            src = $img.attr('src');
        $div.css('backgroundImage', 'url(' + src + ')');
        $img.remove();
    });


    // ===== More Item Link Position Settings ===== //
    jQuery(window).on("load resize", function() {
        var wHeight = jQuery(window).height();
        var cHeight = jQuery('.group-wrapper').height();

        if ( cHeight > wHeight - 60 ) {
            jQuery('.more-item-link').css({ 'position' : 'relative' });
        } else {
            jQuery('.more-item-link').css({ 'position' : 'absolute' });
        }
    });


    // ===== jQuery SlimScroll Settings ===== //
    var buildScroll = jQuery('.nav-inner-wrap, .container-wrapper');
    var destroyScroll = jQuery('');

    destroyScroll.slimScroll({  // ===== CHANGE 'destroyScroll' TO 'buildScroll' WHEN YOU USING AUTO SCROLLING FUNCTION ===== //
        position: 'right'
    });


    // ===== Load Progress Bar When Scroll To Element ===== //
    var progressBar = ".progress-bar-wrapper:in-viewport";

    function loadDaBars() {
        jQuery('.progress-bar').css('width',  function() {
            return (jQuery(this).attr('data-percentage')+'%')
        });

        jQuery('.progress-title').css('opacity', '1');
    }

    //jQuery('.container-wrapper').on("scroll", function(){
    jQuery(window).on("scroll", function(){
        jQuery(progressBar).each(function(){
            loadDaBars();
        });
    });


    // ===== Animation Settings ===== //
    var animateFadeIn = ".animate-fadeIn:in-viewport";
    var animateFadeInUp = ".animate-fadeInUp:in-viewport";
    var animateFadeInDown = ".animate-fadeInDown:in-viewport";
    var animateFadeInLeft = ".animate-fadeInLeft:in-viewport";
    var animateFadeInRight = ".animate-fadeInRight:in-viewport";

    jQuery(animateFadeIn).each(function(){
        jQuery(animateFadeIn).delay(300).animate({ opacity: 1 }, 2000, 'easeOutExpo');
    });
    jQuery(animateFadeInUp).each(function(){
        jQuery(animateFadeInUp).delay(300).animate({ top: '0', opacity: 1 }, 2000, 'easeOutExpo');
    });
    jQuery(animateFadeInDown).each(function(){
        jQuery(animateFadeInDown).delay(300).animate({ top: '0', opacity: 1 }, 2000, 'easeOutExpo');
    });
    jQuery(animateFadeInLeft).each(function(){
        jQuery(animateFadeInLeft).delay(300).animate({ left: '0', opacity: 1 }, 2000, 'easeOutExpo');
    });
    jQuery(animateFadeInRight).each(function(){
        jQuery(animateFadeInRight).delay(300).animate({ left: '0', opacity: 1 }, 2000, 'easeOutExpo');
    });

    //jQuery('.container-wrapper').on("scroll", function(){
    jQuery(window).on("scroll", function(){

        jQuery(animateFadeIn).each(function(){
            jQuery(animateFadeIn).delay(300).animate({ opacity: 1 }, 2000, 'easeOutExpo');
        });
        jQuery(animateFadeInUp).each(function(){
            jQuery(animateFadeInUp).delay(300).animate({ top: '0', opacity: 1 }, 2000, 'easeOutExpo');
        });
        jQuery(animateFadeInDown).each(function(){
            jQuery(animateFadeInDown).delay(300).animate({ top: '0', opacity: 1 }, 2000, 'easeOutExpo');
        });
        jQuery(animateFadeInLeft).each(function(){
            jQuery(animateFadeInLeft).delay(300).animate({ left: '0', opacity: 1 }, 2000, 'easeOutExpo');
        });
        jQuery(animateFadeInRight).each(function(){
            jQuery(animateFadeInRight).delay(300).animate({ left: '0', opacity: 1 }, 2000, 'easeOutExpo');
        });
    });


    // ===== Ripple Effect Settings ===== //
    jQuery(".ripple").on("click", function(e){
        var x = e.pageX;
        var y = e.pageY;
        var clickY = y - jQuery(this).offset().top;
        var clickX = x - jQuery(this).offset().left;
        var box = this;

        var setX = parseInt(clickX,10);
        var setY = parseInt(clickY,10);
        jQuery(this).find("svg").remove();
        jQuery(this).append('<svg><circle cx="'+setX+'" cy="'+setY+'" r="'+0+'"></circle></svg>');

        var c = jQuery(box).find("circle");
        c.animate(
            {
                "r" : jQuery(box).outerWidth()
            },
            {
                easing: "easeOutQuad",
                duration: 400,
                step : function(val){
                    c.attr("r", val);
                }
            }
        );

        jQuery('circle').fadeOut(1500);

    });


    // ===== Hide Elements On Small Devices ===== //
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        navigator.userAgent.match(/ZuneWP7/i)
    ) {
        //jQuery('.myVideo video').hide();
        jQuery('#fullpage .section, #fullpage .section .slide').css('min-height', '0px');
    }



    // ===== Navigation Menu Settings ===== //
    // Append Click Navigation Menu
    jQuery("#main-menu .nav-menu li:has(ul)").each(function(){
        jQuery(this).append( "<span></span>" );
        jQuery(this).addClass("dropdown-menu");
    });

    // Navigation Menu Toggle
    jQuery('.dropdown-menu ul').hide();
    jQuery("#main-menu .nav-menu li span").on("click", function(){
        jQuery(this).prev("ul").slideToggle(300);
    });


    // ===== jQuery Sidebar Navigation Settings ===== //
    var sides = ["left", "right"];

    // Defines Menu Position
    if ( jQuery("#main-menu").hasClass("right") ) {
        jQuery(".nav-btn").attr("data-side", "right");
        jQuery('.sidebar-nav').addClass("right");
    } else {
        jQuery(".nav-btn").attr("data-side", "left");
        jQuery('.sidebar-nav').addClass("left");
    }

    // Initialize sidebars
    for (var i = 0; i < sides.length; ++i) {
        var cSide = sides[i];
        jQuery(".sidebar-nav." + cSide).sidebar({
            side: cSide
        });
    }

    // Click handlers
    jQuery(".nav-btn[data-action]").on("click", function () {
        var $this = jQuery(this);
        var action = $this.attr("data-action");
        var side = $this.attr("data-side");
        jQuery(".sidebar-nav." + side).trigger("sidebar:" + action);
        return false;
    });

    jQuery(".nav-menu li a").on("click", function () {
        jQuery(".sidebar-nav").trigger("sidebar:close");
        jQuery('.dropdown-menu ul').hide(300);
    });

    // Fixed Menu Overflow on iOS
    if (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i)
    ) {
        jQuery('#main-menu .nav-menu').css( { "margin-bottom" : "100px" } );
    }


    // ===== OWL Carousel Setting ===== //
    // Services Panel Style 3
    var owlFullService = jQuery(".services-panel3 .full-carousel-wrapper");
    owlFullService.owlCarousel({
        dots: false,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            720:{
                items:2
            },
            768:{
                items:2
            },
            960:{
                items:3
            },
            1024:{
                items:3
            }
        }
    });

    // Content Block Style 2
    var owlFullContent = jQuery(".content-block2 .full-carousel-wrapper");
    owlFullContent.owlCarousel({
        dots: false,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            720:{
                items:2
            },
            768:{
                items:2
            },
            960:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    // Portfolio Panel Style 2
    var owlPortfolio = jQuery(".portfolio-panel2 .full-carousel-wrapper");
    owlPortfolio.owlCarousel({
        dots: false,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            720:{
                items:2
            },
            768:{
                items:2
            },
            960:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    // Portfolio Single Page
    var owlPortfolioSingle = jQuery(".related-work .owl-carousel");
    owlPortfolioSingle.owlCarousel({
        dots: false,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            960:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    // Custom Navigation
    jQuery(".btn.next").on("click", function(){
        owlFullService.trigger('next.owl.carousel', [500]);
        owlFullContent.trigger('next.owl.carousel', [500]);
        owlPortfolio.trigger('next.owl.carousel', [500]);
        owlPortfolioSingle.trigger('next.owl.carousel', [500]);
    })
    jQuery(".btn.prev").on("click", function(){
        owlFullService.trigger('prev.owl.carousel', [500]);
        owlFullContent.trigger('prev.owl.carousel', [500]);
        owlPortfolio.trigger('prev.owl.carousel', [500]);
        owlPortfolioSingle.trigger('prev.owl.carousel', [500]);
    })

    // Carousel Inner Vertical Middle
    jQuery(window).on("load resize", function() {
        var carouselTitle = jQuery('.carousel-inner.title')
        var titleHeight = jQuery('.carousel-block-title').height();
        var carouselItem = jQuery('.carousel-inner.item');
        var itemHeight = carouselItem.height();
        carouselTitle.each(function(){
            jQuery(this).css('margin-top', - titleHeight / 2);
        });
        carouselItem.each(function(){
            jQuery(this).css('margin-top', - itemHeight / 2);
        });
    });

    // Content Block Style 1
    var owlBlock = jQuery(".content-block1 .box-carousel-wrapper");
    owlBlock.owlCarousel({
        dots: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            720:{
                items:2
            },
            768:{
                items:2
            },
            960:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });

    // Home Blog Panel
    var owlBlog = jQuery(".home-blog-panel .box-carousel-wrapper");
    owlBlog.owlCarousel({
        dots: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            720:{
                items:2
            },
            768:{
                items:2
            },
            960:{
                items:3
            },
            1024:{
                items:3
            }
        }
    });

    // Home Team Panel and Page Team Section
    var owlTeam = jQuery(".home-team-panel .box-carousel-wrapper, .page-team .box-carousel-wrapper");
    owlTeam.owlCarousel({
        dots: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            720:{
                items:2
            },
            768:{
                items:2
            },
            960:{
                items:3
            },
            1024:{
                items:3
            }
        }
    });


    // ===== jQuery FlexSlider Settings ===== //

    jQuery(window).on("load", function() {
        jQuery('.flexslider.slider-panel-wrapper').flexslider({
            controlNav: false,
            directionNav: false,
            slideshow: true,
            animationSpeed: 800,
            multipleKeyboard: true,
            pauseOnHover: true
        });

        jQuery('.featured-area .flexslider').flexslider({
            controlNav: false,
            directionNav: false,
            slideshow: true,
            animationSpeed: 800,
            multipleKeyboard: true,
            pauseOnHover: true
        });

        jQuery('.slide-prev.prev, .slide-next.next').on('click', function(){
            var href = jQuery(this).attr('href');
            jQuery('.flexslider').flexslider(href)
            return false;
        });
    });

    // Fit Height Elements
    jQuery(window).on("load resize", function() {
        var fitHeight = jQuery(window).height();
        var slideHeight = jQuery('.slider-panel-wrapper .slides li');
        slideHeight.height(fitHeight);
    });


    jQuery('.slide-prev.prev, .slide-next.next').on('click', function(){
        var href = jQuery(this).attr('href');
        jQuery('.flexslider').flexslider(href)
        return false;
    });
    // ===== jQuery Megafolio Settings ===== //
    var api=jQuery('.portfolio-panel1 .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [8]
    });

    var portfolioPage=jQuery('.portfolio-page .flv_container4 .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [11]
    });
    var portfolioPage1=jQuery('.portfolio-page .flv_container5 .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [12]
    });
    var portfolioPage2=jQuery('.portfolio-page .flv_container6 .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [13]
    });

    var portfolioPage3=jQuery('.portfolio-page .flv_container2 .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [2]
    });

    var portfolioPage4=jQuery('.portfolio-page .flv_container3 .megafolio-container').megafoliopro({
        filterChangeAnimation: "pagemiddle",
        filterChangeSpeed: 800,
        paddingHorizontal: 0,
        paddingVertical: 0,
        layoutarray: [10]
    });



    // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
    jQuery('.filter').on("click", function() {
        jQuery('.filter').each(function() {
            jQuery(this).removeClass("selected")
        });
        api.megafilter(jQuery(this).data('category'));
        portfolioPage.megafilter(jQuery(this).data('category'));
        portfolioPage1.megafilter(jQuery(this).data('category'));
        portfolioPage2.megafilter(jQuery(this).data('category'));
        portfolioPage3.megafilter(jQuery(this).data('category'));
        portfolioPage4.megafilter(jQuery(this).data('category'));
        jQuery(this).addClass("selected");
    });


    // ===== FancyBox Settings ===== //

    jQuery(".fancybox").fancybox({
        //padding: 0
    });
    jQuery(".various6").fancybox({
        padding           : 0,
        autoScale     	: false,
        transitionIn	: 'none',
        transitionOut		: 'none',
        width	: 680,
        height		: 495
    });
    jQuery(".various1").fancybox({
        fitToView	: false,
        width		: '60%',
        height		: '70%',
        autoSize	: false,
        openEffect	: 'elastic',
        closeEffect	: 'none'
    });
    jQuery(".various").fancybox({
        autoSize	: true,
        padding: 0,
        helpers: {  overlay: { locked: false  }  }
    });

    // ===== Change burger menu background-color on the fly with Midnight jQuery ===== //
    jQuery('.nav-open').midnight();



    // Move down mouse icon
    jQuery('#moveSectionDown,.moveSectionDown').on("click", function(e){
        e.preventDefault();
        jQuery.fn.fullpage.moveSectionDown();
    });


    // ===== Services Tooltip Settings ===== //
    jQuery('.service-tooltip').tooltipster({
        position: 'top',
        animation: 'grow',
        delay: 200,
        speed: 350,
        theme: 'tooltipster-shadow',
        touchDevices: true,
        trigger: 'hover',
        maxWidth: 228,
        offsetX: 0,
        offsetY: 10
    });

    // ===== Portfolio Tabs Settings ===== //
    jQuery('#portfolioTabs').tabulous({
        effect: 'slideUp' //** This Template use effect slideUp only for the proper design.
    });

    // Fix Auto Height tabs_container
    jQuery(window).on("load resize", function() {
        var pHeight = jQuery('.portfolio-panel3 .portfolio-detail-wrapper');
        var ptHeight = jQuery('.portfolio-tabs').height();

        pHeight.height(ptHeight);
    });



    /* contact form*/
    $j("form#commentform").submit(function(e){
        e.preventDefault();
        var errors=0;
        if($j('.flvcontactform .flvname').val()!=undefined)
            if($j('.flvcontactform .flvname').val()=='') {
                var hasClass=$j('.flvcontactform .flvname').parent().next().hasClass("error");
                if(!hasClass)
                    $j('<label for="contactname" generated="true" class="error">Please enter your name</label>').insertAfter( $j('.flvcontactform .flvname').parent());
                $j('.flvcontactform .flvname').focus();
                errors++;
            }
            else
            if($j('.flvcontactform .flvname').parent().next().hasClass("error"))$j('.flvcontactform .flvname').parent().next().remove();


        if($j('.flvcontactform .flvemail').val()!=undefined)
            if(validate_email($j('.flvcontactform .flvemail').val())==false ) {
                var hasClass=$j('.flvcontactform .flvemail').parent().next().hasClass("error");
                if(!hasClass)
                    $j('<label for="contactname" generated="true" class="error">Please enter a valid email address</label>').insertAfter( $j('.flvcontactform .flvemail').parent());
                $j('.flvcontactform .flvemail').focus();
                errors++;
            }
            else
            if($j('.flvcontactform .flvemail').parent().next().hasClass("error"))$j('.flvcontactform .flvemail').parent().next().remove();


        if($j('.flvcontactform .flvmessage').val()!=undefined)
            if($j('.flvcontactform .flvmessage').val()==''){
                var hasClass=$j('.flvcontactform .flvmessage').parent().next().hasClass("error");
                if(!hasClass)
                    $j('<label for="contactname" generated="true" class="error">Please enter a message</label>').insertAfter( $j('.flvcontactform .flvmessage').parent());
                $j('.flvcontactform .flvmessage').focus();
                errors++;
            }
            else
            if($j('.flvcontactform .flvmessage').parent().next().hasClass("error"))$j('.flvcontactform .flvmessage').parent().next().remove();

        if($j('.flvcontactform .dzscapcha').val()!=undefined)
            if($j('.flvcontactform .dzscapcha').val()<5 || $j('.flvcontactform .dzscapcha').val()>9 ){
                var hasClass=$j('.flvcontactform .dzscapcha').parent().next().hasClass("error");
                if(!hasClass)
                    $j('<label for="contactname" generated="true" class="error">Please enter a valid number</label>').insertAfter( $j('.flvcontactform .dzscapcha').parent());
                $j('.flvcontactform .dzscapcha').focus();
                errors++;
            }
            else
            if($j('.flvcontactform .dzscapcha').parent().next().hasClass("error"))$j('.flvcontactform .dzscapcha').parent().next().remove();

        if(errors==0) {

            var formInput = $j(this).serialize();
            $j.post($j(this).attr('action'),formInput, function(data){
                $j('form#commentform').slideUp("fast", function() {
                    $j(this).before('<div class="flv-msg alert alert-success alert-dismissable">'+window.message_flv+' <a onclick="call_flv();" href="javascript:;" class="msg_close" >x</a></div>');
                });
            });
        }


        return false;
    });






    jQuery('.footer-panel').each(function(){
        var par=jQuery('.footer-panel').prev();
        jQuery(this).appendTo(par);

    });


});
jQuery(window).load(function() {
    jQuery(window).trigger('resize')
})
function call_flv(){
    var cthis=jQuery(document).find(".msg_close");

    cthis.parent().next().slideDown("fast");
    cthis.parent().remove();
}


function validate_email(address) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(address) == false) {
        return false;
    }
    else
        return true;
}