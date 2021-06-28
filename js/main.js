
(function ($) {
    'use strict';

    /*=====================================
    	01. Menu Activation
    =========================================*/


    $('nav.mobilemenu__nav').meanmenu({
        meanMenuClose: 'X',
        meanMenuCloseSize: '18px',
        meanScreenWidth: '991',
        meanExpandableChildren: true,
        meanMenuContainer: '.mobile-menu',
        onePage: true
    });


    /*=========================== 
    	02. Slick Activation
    ============================*/


    (function ($) {
        'use strict';
        // Check if element exists
        $.fn.elExists = function () {
            return this.length > 0;
        };
        // Variables
        var $html = $('html'),
            $elementCarousel = $('.breco-element-carousel');


        if ($elementCarousel.elExists()) {
            var slickInstances = [];
            $elementCarousel.each(function (index, element) {
                var $this = $(this);
                // Carousel Options
                var $options = typeof $this.data('slick-options') !== 'undefined' ? $this.data('slick-options') : '';
                var $spaceBetween = $options.spaceBetween ? parseInt($options.spaceBetween) : 0,
                    $spaceBetween_xl = $options.spaceBetween_xl ? parseInt($options.spaceBetween_xl) : 0,
                    $isCustomArrow = $options.isCustomArrow ? $options.isCustomArrow : false,
                    $customPrev = $isCustomArrow === true ? ($options.customPrev ? $options.customPrev : '') : '',
                    $customNext = $isCustomArrow === true ? ($options.customNext ? $options.customNext : '') : '',
                    $vertical = $options.vertical ? $options.vertical : false,
                    $focusOnSelect = $options.focusOnSelect ? $options.focusOnSelect : false,
                    $asNavFor = $options.asNavFor ? $options.asNavFor : '',
                    $fade = $options.fade ? $options.fade : false,
                    $autoplay = $options.autoplay ? $options.autoplay : false,
                    $autoplaySpeed = $options.autoplaySpeed ? $options.autoplaySpeed : 5000,
                    $swipe = $options.swipe ? $options.swipe : false,
                    $adaptiveHeight = $options.adaptiveHeight ? $options.adaptiveHeight : false,

                    $arrows = $options.arrows ? $options.arrows : false,
                    $dots = $options.dots ? $options.dots : false,
                    $infinite = $options.infinite ? $options.infinite : false,
                    $centerMode = $options.centerMode ? $options.centerMode : false,
                    $centerPadding = $options.centerPadding ? $options.centerPadding : '',
                    $speed = $options.speed ? parseInt($options.speed) : 1000,
                    $prevArrow = $arrows === true ? ($options.prevArrow ? '<span class="' + $options.prevArrow.buttonClass + '"><i class="' + $options.prevArrow.iconClass + '"></i></span>' : '<button class="slick-prev">previous</span>') : '',
                    $nextArrow = $arrows === true ? ($options.nextArrow ? '<span class="' + $options.nextArrow.buttonClass + '"><i class="' + $options.nextArrow.iconClass + '"></i></span>' : '<button class="slick-next">next</span>') : '',
                    $slidesToShow = $options.slidesToShow ? parseInt($options.slidesToShow, 10) : 1,
                    $slidesToScroll = $options.slidesToScroll ? parseInt($options.slidesToScroll, 10) : 1;

                /*Responsive Variable, Array & Loops*/
                var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
                    $responsiveSettingLength = $responsiveSetting.length,
                    $responsiveArray = [];
                for (var i = 0; i < $responsiveSettingLength; i++) {
                    $responsiveArray[i] = $responsiveSetting[i];

                }

                // Adding Class to instances
                $this.addClass('slick-carousel-' + index);
                $this.parent().find('.slick-dots').addClass('dots-' + index);
                $this.parent().find('.slick-btn').addClass('btn-' + index);

                if ($spaceBetween != 0) {
                    $this.addClass('slick-gutter-' + $spaceBetween);
                }
                if ($spaceBetween_xl != 0) {
                    $this.addClass('slick-gutter-xl-' + $spaceBetween_xl);
                }
                $this.slick({
                    slidesToShow: $slidesToShow,
                    slidesToScroll: $slidesToScroll,
                    asNavFor: $asNavFor,
                    autoplay: $autoplay,
                    autoplaySpeed: $autoplaySpeed,
                    speed: $speed,
                    infinite: $infinite,
                    arrows: $arrows,
                    dots: $dots,
                    vertical: $vertical,
                    focusOnSelect: $focusOnSelect,
                    centerMode: $centerMode,
                    centerPadding: $centerPadding,
                    fade: $fade,
                    adaptiveHeight: $adaptiveHeight,
                    prevArrow: $prevArrow,
                    nextArrow: $nextArrow,
                    responsive: $responsiveArray,
                });

                if ($isCustomArrow === true) {
                    $($customPrev).on('click', function () {
                        $this.slick('slickPrev');
                    });
                    $($customNext).on('click', function () {
                        $this.slick('slickNext');
                    });
                }
            });

            // Updating the sliders in tab
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                $elementCarousel.slick('setPosition');
            });
        }

    })(jQuery);


    /* ===================================
    	03. Sidebar Mobile Menu  Active
    =====================================*/

    function menuClose() {
        $body.removeClass('popup-mobile-menu-wrapper'), $html.css({
            overflow: ""
        })
    };

    $('.popup-mobile-click').on('click', function (e) {
        e.preventDefault(),
            function () {
                $body.addClass('popup-mobile-menu-wrapper'), $html.css({
                    overflow: "hidden"
                });
            }()
    });
    

    $('.mobile-close').on('click', function (e) {
        e.preventDefault();
        menuClose();
    });
    $('.popup-mobile-visiable').on('click', function (e) {
        e.target === this && menuClose();
    });

    /* =============================
    	04. Sidebar Mobile Menu 
    ================================*/

    $('.object-custom-menu > li.has-mega-menu > a').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.object-submenu').slideToggle('400');
        $(this).toggleClass('active').siblings('.object-submenu').toggleClass('is-visiable');
    })

    /* =====================
    	05. Hamberger Menu 
    =========================*/

    $('.hamberger-trigger').on('click', function (e) {
        e.preventDefault();
        $('.open-hamberger-wrapper').addClass('is-visiable');
    });

    $('.page-close').on('click', function (e) {
        e.preventDefault();
        $('.open-hamberger-wrapper').removeClass('is-visiable');
    });

    /* ===================================
    	06. All Animation For Fade Up 
    =======================================*/

    $(window).on('load', function () {
        function allAnimation() {
            $('.move-up').css('opacity', 0);
            $('.move-up').waypoint(function () {
                $('.move-up').addClass('animate');
            }, {
                offset: '90%'
            });
        }
        allAnimation();

        function allAnimationx() {
            $('.move-up-x').css('opacity', 0);
            $('.move-up-x').waypoint(function () {
                $('.move-up-x').addClass('animate');
            }, {
                offset: '90%'
            });
        }
        allAnimationx();
    })

    /* ========================
    	07. Ajax Filter 
    ===========================*/

    function itemToggler() {
        $('.ajax-filter-single').slice(0, 3).show();
        $('.ajax-filter').find(".loadMore").on('click', function (e) {
            e.preventDefault();
            $(this).parents('.ajax-filter').find('.ajax-filter-single:hidden').slice(0, 3).slideDown();
            if ($('.ajax-filter-single:hidden').length == 0) {
                $(this).parent('.toggle-btn').fadeOut('slow');
            }
        });
    }
    itemToggler();

    function itemToggler2() {
        $('.ajax-filter-single2').slice(0, 3).show();
        $('.ajax-filter2').find(".loadMore").on('click', function (e) {
            e.preventDefault();
            $(this).parents('.ajax-filter2').find('.ajax-filter-single2:hidden').slice(0, 6).slideDown();
            if ($('.ajax-filter-single2:hidden').length == 0) {
                $(this).parent('.toggle-btn').fadeOut('slow');
            }
        });
    }
    itemToggler2();

    /* =============================
    	08. Tilt Hover Animation
    =================================*/

    $('.paralax-portfolio').tilt({
        maxTilt: 50,
        perspective: 1400,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        speed: 1200,
        glare: true,
        maxGlare: 0.3,
        scale: 1.04
    });



    /* =====================================
        09. Fullpage Scroll Animation   
    ======================================*/
    if ($('#fullpage').length) {
        $('#fullpage').fullpage({
            scrollBar: true,
            navigation: false,
            loopBottom: true,
            sectionSelector: 'section',
            scrollingSpeed: 1000,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
        });
    }

    if ($('#fullpage2').length) {
        var header = $('.br_header');
        $('#fullpage2').fullpage({
            scrollBar: false,
            navigation: true,
            loopBottom: true,
            sectionSelector: 'section',
            scrollingSpeed: 1000,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            afterLoad: function () {
                var activeSetion = $('.fp-section.active');
                header.removeClass('light-logo--version black-logo--version').addClass(activeSetion
                    .data('skin') + '-logo--version');
            },
            onLeave: function (direction) {
                var activeSetion = $('.fp-section.active');

                if (direction == 'down') {
                    header.removeClass('light-logo--version black-logo--version').addClass(
                        activeSetion.data('skin') + '-logo--version');
                } else if (direction == 'up') {
                    header.removeClass('light-logo--version black-logo--version').addClass(
                        activeSetion.data('skin') + '-logo--version');
                };
            },
        });
    }

    /*=============================
        10. Background Marque 
    =============================*/

    $('.background-marque').each(function () {
        var t = 0;
        var i = 1;
        var $this = $(this);
        setInterval(function () {
            t += i;
            $this.css('background-position-x', -t + "px");
        }, 10);
    });

    $('.background-marque2').each(function () {
        var t = 0;
        var i = 1;
        var $this = $(this);
        setInterval(function () {
            t += i;
            $this.css('background-position-x', -t + "px");
        }, 10);
    });



})(jQuery);