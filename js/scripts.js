if (screen.width > 1040) {
    $(window).on('load', function () {
        setTimeout(function () { 
                $("#preloader_wrap").delay(100).fadeOut();
                $("body").removeClass("loading");
              }, 2000);
        setTimeout(function () { 
                $("#preloader_wrap").remove();
              }, 3000);
    });
}


$(document).ready(function(){
    "use sctict";
    //Main slider=======================/
    function mainSliderBlur(){
        $(".slide").each(function(){
            var thisSlide = $(this),
                thisSlideImg = thisSlide.attr("style"),
                thisBlur = thisSlide.children(".blur"),
                blurDiv = thisBlur.children(".blur_div");
            
            blurDiv.attr("style", thisSlideImg);
        });
    }
    
    $(window).on('resize',function() {
        if ($(window).innerHeight() <= ($(window).innerWidth() * 0.56)) {
            $(".video-section").height($(".video-section").innerHeight());
            $(".video-section .video").css({
                "position": "absolute",
                "bottom": "0"
            })
        } else {
            $(".video-section").removeAttr("style");
            $(".video-section .video").removeAttr("style");
        }
        
    });
    
    mainSliderBlur();
    
    if ($("#main_slider_wrap").length) {
        
        $('#main_slider_wrap').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            fade: false,
            autoplay: false,
            speed: 1000,
            cssEase: 'cubic-bezier(0.19, 1, 0.22, 1) 0s',
            autoplaySpeed: 20000,
            prevArrow: $('#main_slider .arrow.prev'),
            nextArrow: $('#main_slider .arrow.next'),
            swipe: true,
            touchMove: false,
            draggable: false
        });
    }
    
    
    
    //recent-posts=======================/
    
    if ($("#recent-posts").length) {
        
        $('#recent-posts').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            fade: true,
            autoplay: false,
            speed: 1000,
            autoplaySpeed: 20000,
            swipe: true,
            touchMove: false,
            draggable: false
        });
    }
    //recent-posts=======================/
    
    
    
    
    
    //Video replace========================/
    if ((screen.width <= 1040) && ($("#main_slider_wrap").length)) {
        $(".video-slide .video").remove();
        $(".video-slide[data-background]").each(function(){
            var thisScr = $(this).attr("data-background");

            $(this).attr("style", "background-image: url("+thisScr+")");
            $(this).removeAttr("data-background");
        });
    }
    //Video replace========================/
    
    
    
    
    
    
    //OS check========================/
    function getOS() {
      var userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      }

      return os;
    }
    
    if (getOS() == "Windows") {
        $("body").addClass("os-windows");
    }
    
    if (getOS() == "iOS") {
        $("body").addClass("os-ios");
    }
    
    if (navigator.userAgent.search("Chrome") >= 0) {
        $("body").addClass("chrome-browser");
    }
    else if (navigator.userAgent.search("Firefox") >= 0) {
        $("body").addClass("firefox-browser");
        $("head").append("<style>.body-margin {margin-right:"+scrollbarWidth()+"px} .body-margin .single-page .top_panel {right:"+scrollbarWidth()+"px} .body-margin .hum_btn {margin-right:"+scrollbarWidth()+"px} .body-margin .modal_form .close {margin-right:"+scrollbarWidth()+"px}</style>");  
    }
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $("body").addClass("safari-browser");
    }
    else if (navigator.userAgent.search("Opera") >= 0) {
        $("body").addClass("opera-browser");
    }
    
    
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (/IEMobile|Windows Phone/i.test(navigator.userAgent)) {
        var windowsPhone = true;
    }
    //OS check========================/
    
    
    
    
    

    //Scrollbar width========================/
    function scrollbarWidth() {
        var block = $('<div>').css({'height':'50px','width':'50px'}),
            indicator = $('<div>').css({'height':'200px'});

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();    
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }
    //Scrollbar width========================/
    
    
    
    
    
    
    //Popup function========================/
    function popupFunction(){  
        if((iOS == true) || (windowsPhone == true)) {
            var scrollTop = $(window).scrollTop();
            var windowH = $(window).innerHeight();

            $("body").addClass("pop-up-open");
            $("body").attr("data-top", scrollTop);
            if (windowsPhone == true) {
                $("body").css("top", scrollTop);
            }
            $("body").css({
                "top": "-" + scrollTop + "px"
            });
        } 
    }

    function popupCloseFunction(){
        if((iOS == true) || (windowsPhone == true)) {
            var scTop = $("body").attr("data-top");
            if (windowsPhone == true) {
                var scTop = $("body").css("top");
            }
            var suffix = scTop.match(/\d+/);
            $("body").removeClass("pop-up-open");
            $("body").removeAttr("style");

            $("html, body").scrollTop(parseInt(suffix));
        }
    }
    //Popup function========================/
    
    
    $(window).trigger('resize');    
    
    
    
    
    
    //placeholder========================/
    $('.placeholder').placeholderLabel();
    //placeholder========================/
    
    
    
    
    //Input focus========================/
    $('.js_input').on('blur', function(){  
        var $this = $(this),
              val = $this.val();
        $this.parent().removeClass('focus');
    }).on('focus', function(){
      $(this).parent().addClass('focus');
    });
    //Input focus========================/
    
    
    
    
    
    //Anchor links========================/
    $(".js_anchor").on("click",function(e){
        e.preventDefault();
        var thisHref = $(this).attr("data-href");
        var plansOffset=$(thisHref).offset().top;
        $("html, body").animate({
            scrollTop:plansOffset
        },500);
    });
    //Anchor links========================/
    
    
    
    
    
    //if IE========================/
    function msieversion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
        {
            //alert("IE");
            $("body").addClass("ie-browser");
            $("head").append("<style>.body-margin {margin-right:"+scrollbarWidth()+"px} .body-margin .single-page .top_panel {right:"+scrollbarWidth()+"px} .body-margin .hum_btn {margin-right:"+scrollbarWidth()+"px} .body-margin .modal_form .close {margin-right:"+scrollbarWidth()+"px}</style>"); 
            $("#menu-hamburger").on("click", function(){
               var _this = $(this),
                   _menu = $(".menu");  
                _this.toggleClass("active");
                $("body, html").toggleClass("locked");
                $("body").toggleClass("body-margin");
                
                if (screen.width > 1040) {
                    _menu.fadeToggle();
                }
            });
        }
        else 
        {
            // not IE
        }
        return false;
    }
    msieversion();
    //if IE========================/
    
    
    
    
    
    
    //BTN animation========================/
        $(function() {
        $( ".btn" ).on("click",function() {
          var $this = $(this);
        $this.addClass( "onclic", 250);

          setTimeout(function() {
          $this.removeClass( "onclic" );
          $this.addClass( "validate", 450 );
        }, 2250 );

          setTimeout(function() {
            $this.removeClass( "validate" );
          }, 3250 );
      });
      });
    //BTN animation========================/
    
    
    
    
    
    
    //Modal form open========================/
    $(".js-modal-form").on("click", function(e) {
       e.preventDefault();
        var modalForm = $("#modal_form");
        
        modalForm.fadeIn();
        $("#container").addClass("blur");
        $("html, body").addClass("locked");
        $("body").addClass("body-margin");
        
        if (!$(".menu").hasClass("opened")) {
            popupFunction();
        }
    });
    
    $("#modal_form .close").on("click", function(e) {
       $("#modal_form").fadeOut();
        $("#container").removeClass("blur");
        
        
        if (!$(".menu").hasClass("opened")) {
            $("html, body").removeClass("locked");
        $("body").removeClass("body-margin");
            popupCloseFunction();
            }
        
        setTimeout(function () {
            $(".success .text").text("SEND");
            $("#modal_form .form_wrap").show();
            $("#modal_form .success").hide();
            $("#modal_form .title").text(modal_form_title);
        }, 500);
    });
    
    var modal_form_title = $("#modal_form .title").text();
    
    $("#modal_form .js-submit").on("click", function(e) {
        var thisBtn = $(this);
        
        $(".success .text").text("CLOSE");
       $("#modal_form .form_wrap").hide();
        $("#modal_form .success").show();
        $("#modal_form .title").text($("#modal_form .title").attr("data-success"));
    });
    
    $(".success button").on("click", function(e) {
        $("#modal_form").fadeOut();
        $("#container").removeClass("blur");
        
        
        if (!$(".menu").hasClass("opened")) {
            $("html, body").removeClass("locked");
        $("body").removeClass("body-margin");
            popupCloseFunction();
            }
        
        
        
        setTimeout(function () {
            $(".success .text").text("SEND");
            $("#modal_form .form_wrap").show();
            $("#modal_form .success").hide();
            $("#modal_form .title").text(modal_form_title);
        }, 500);
    });
    //Modal form open========================/
    
    
    
    
    
    
    
    //if mobile device========================/
    if (screen.width <= 1040) {
        $("body").addClass("mobile");
        
        $("#menu-hamburger").on("click", function(){
               var _this = $(this),
                   _menu = $(".menu");
            
            if ($(this).hasClass("is-opened-navi")) {
                popupCloseFunction();
            } else {
                popupFunction();
            }
                
                _this.toggleClass("is-opened-navi");
                $("#menu-hamburger .burger").toggleClass("active");
                $("body, html").toggleClass("locked");
                $("body").toggleClass("body-margin");
                _menu.fadeToggle();
                _menu.toggleClass("opened");
            });
        
        
          $("body").append("<div id='setHeight' style='position:fixed; top:0; bottom:0;left:0;right:0;z-index:-10'></div>")
             var activeHeight = $("#setHeight").innerHeight();
             $("#setHeight").remove();
             $(".js_height").innerHeight(activeHeight);
    }
    //if mobile device========================/
    
    
    
    
    
    
    
    //Anchor links single========================/
    $("a.js-anchor").on("click",function(e){
        e.preventDefault();
        var thisHref = $(this).attr("href");
        var plansOffset=$(thisHref).offset().top;
        $("html, body").animate({
            scrollTop:plansOffset
        },500);
        
        if (thisHref == "#concept-block") {
            $(".description-section").css("opacity", "1");
        }
    });
    //Anchor links single========================/
    
    
    
    
    
    
    
    //Single.html animations========================/
    if ($("#services-block").length) {
        var servicesOffset = $("#services-block").offset().top;
    }
    
    if ($("#scroll-effect").length) {
        var conceptOffset = $("#scroll-effect").offset().top;
        var windowHeight = $(window).innerHeight();
    }
    
    var effect = false;
    var lastScrollTop = 0;
    
    $(window).on("scroll", function(e) {
        var scroll = $(window).scrollTop();
        var contentH = $(window).innerHeight();
        
        if (scroll>(servicesOffset - (contentH/2))) {
            $("#services-block").removeClass('is-scrolled');
            
            $('._percent span').each(function(){
                var _this = $(this),
                    thisVal = +(_this.parent().attr("data-val"));
                
                _this
                .delay(100)
                .animate({ number: thisVal }, {
                    duration: 1000
                });
            });
        }
        
        var st = $(this).scrollTop();
        if (st > lastScrollTop){    
            if ((scroll>=(conceptOffset-300)) && (screen.width > 1040)) {    
                if (effect == false) {
                    effect = true;
                }
                
                var opacity = +($('#concept-block').css("opacity"));
                    opacity += 0.1;
                    $('#concept-block').css({
                        opacity: opacity
                      });
                
                    if (opacity >= 1) {
                        effect = false;
                    }
                /*
                Template author: Digistrict
                Template URL: https://themeforest.net/item/ontold-creative-agency-for-digital-age/24151662
                Author URL: hellodigi.ru

                Russian Federation.
                All rights reserved
                */
            }
        } else {
           if ((scroll<=conceptOffset) && (screen.width > 1040)) {
                
                if (effect == false) {
                    effect = true;
                }
                
                var opacity = +($('#concept-block').css("opacity"));
                    opacity -= 0.1;
                    $('#concept-block').css({
                        opacity: opacity
                      });

                    if (opacity <= 0) {
                        effect = false;
                    }
            }
        }
        lastScrollTop = st;
    });
    
    $.Tween.propHooks.number = {
        get: function ( tween ){
            var num = tween.elem.innerHTML.replace(/^[^\d-]+/, '');
            return  parseFloat(num) || 0;
        },
        
        set: function( tween ) {
            var opts = tween.options;
            tween.elem.innerHTML = (opts.prefix || '')
            + tween.now.toFixed(opts.fixed || 0)
            + (opts.postfix || '');
        }
    };
    //Single.html animations========================/
    
    
    
    
    
    
    //Tabs========================/
    $("#showcase .tabs .tab").on("click", function(e){
        e.preventDefault();
        var thisTab = $(this),
            thisValue = thisTab.children("span").text(),
            thisIndex = thisTab.index(),
            portfolioBlock = $("#portfolio .portfolio-block").eq(thisIndex);
        
        $("#showcase .tabs .tab").not(thisTab).removeClass("active");
        thisTab.addClass("active");
        $("#portfolio .portfolio-block").not(portfolioBlock).fadeOut(500);
        setTimeout(function () {
                portfolioBlock.fadeIn(500);
            }, 501);
        
        $("#mobile-select-wrap .value span").text(thisValue);
    });
    
    $("#js-mobile-select").on("change", function(){
        var thisVal = $(this).val();
        var thisTab = $("#showcase .tabs .tab:contains("+thisVal+")");
        var thisTabIndex = thisTab.index(),
            portfolioBlock = $("#portfolio .portfolio-block").eq(thisTabIndex);
        
        $("#showcase .tabs .tab").not(thisTab).removeClass("active");
        thisTab.addClass("active");
        
        $("#portfolio .portfolio-block").not(portfolioBlock).hide();
        $("#portfolio .portfolio-block").not(portfolioBlock).removeClass("opened");
        portfolioBlock.fadeIn();
        portfolioBlock.addClass("opened");
        
        $("#mobile-select-wrap .value span").text(thisVal);
    });
    //Tabs========================/
    
    
    
    
    
    
    //Questions========================/
    $(".faq_item .faq_item_question").on("click", function(){
        var thisQuestion = $(this),
            thisItem = thisQuestion.parent(),
            thisAnswer = thisQuestion.next();
        
        thisItem.toggleClass("active");
        thisAnswer.slideToggle();
    });
    //Questions========================/
    
    
    
    
    
    //Play btn========================/
    $(".play-btn").on("click", function(){
        var thisBtn = $(this),
            thisVideo = thisBtn.next(".video_wrap").find("video");
        
        thisBtn.hide();
        thisVideo.get(0).play();
        thisVideo.prop("controls", true);
    });
    //Play btn========================/
    
    //Dropdown menu========================/
    $(".dropdown_a").on("click", function(e){
        e.preventDefault();
        var thisA = $(this),
            thisUl = thisA.next("ul");
        
        thisA.toggleClass("active");
        thisUl.slideToggle();
    });
    //Dropdown menu========================/
    
    
    //Blog search========================/
    $(".search_block_open").on("click", function(){
        var thisBtn = $(this),
            thisSearch = thisBtn.next(".search_block_field");
        
        thisSearch.fadeIn();
    });
    
    $(".search_block_field .close").on("click", function(){
        var thisBtn = $(this),
            thisSearch = thisBtn.next(".search_block_field");
        
        $(".search_block_field").fadeOut();
        $(".search_block_field input").val("");
    });
    //Blog search========================/
});	

