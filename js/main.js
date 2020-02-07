// Modal
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var triggerMobile = document.querySelector(".trigger-mobile");
var closeButton = document.querySelector(".close-button");
var closeButton2 = document.querySelector(".close-button2");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
triggerMobile.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
closeButton2.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
// Ens Modal

const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}

// PlusMinus
$(document).ready(function(){
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});
//End PlusMinus

$('.sim-thumb').on('click', function() {
    $('#main-product-image').attr('src', $(this).data('image'));
})  

//Collapse
var mq = window.matchMedia( "(min-width: 791px)" );

if (mq.matches) {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "none") {
            content.style.display = "block";
            } else {
            content.style.display = "none";
            }
        });
    };
} else {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
    };
};

//End Collapse

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "flex";
      btnText.innerHTML = "Показать все"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Спрятать"; 
      moreText.style.display = "flex";
    }
}

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Main Menu
function openNav() {
    var x = window.matchMedia("(max-width:900px)");

    if (x.matches) {
        document.getElementById("mySidepanel").style.width = "80%";
    } else {
        document.getElementById("mySidepanel").style.width = "25%";
    }
};
    
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
};

// Phone Menu
function openPhone() {
    var x = window.matchMedia("(max-width:900px)");

    if (x.matches) {
        document.getElementById("myOpenphone").style.width = "80%";
    } else {
        document.getElementById("myOpenphone").style.width = "25%";
    }
};
    
function closePhone() {
    document.getElementById("myOpenphone").style.width = "0";
};

// Tabs
$("document").ready(function(){
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
});
  
$(".tab-slider--nav li").click(function() {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});
// End Tabs

$(document).ready(function(){
    $('.mainSlider').owlCarousel({
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dotsContainer: '.mainSliderCustomDots',
        autoplay: true,
        autoplayTimeout: 10000,
        center: true,
        margin: 10,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            900:{
                items:1
            },
            1200:{
                items:1
            },
            1920:{
                items:1
            }
        }
    });

    var mainSliderDots = $('.mainSlider');
        mainSliderDots.owlCarousel();

        $('.owl-dot').click(function () {
            mainSliderDots.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
});

$(document).ready(function(){
    $('.recomendationSlider').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            671:{
                items:4
            },
            900:{
                items:4
            },
            1200:{
                items:4
            },
            1920:{
                items:4
            }
        }
    });

    var recomendationSlider = $('.recomendationSlider');
        recomendationSlider.owlCarousel();

        $('.nextBtn').click(function() {
            recomendationSlider.trigger('next.owl.carousel');
        })

        $('.prevBtn').click(function() {
            recomendationSlider.trigger('prev.owl.carousel', [300]);
        });
});

$(document).ready(function(){
    $('.saleSlider').owlCarousel({
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dotsContainer: '.saleSliderCustomDots',
        autoplay: true,
        autoplayTimeout: 10000,
        center: true,
        margin: 10,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            900:{
                items:1
            },
            1200:{
                items:1
            },
            1920:{
                items:1
            }
        }
    });

    var saleSliderDots = $('.saleSlider');
        saleSliderDots.owlCarousel();

        $('.owl-dot').click(function () {
            saleSliderDots.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
});

$(document).ready(function(){
    $('.prodImageMobileSlider').owlCarousel({
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dotsContainer: '.prodImageMobileCustomDots',
        autoplay: true,
        autoplayTimeout: 10000,
        center: true,
        margin: 10,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            900:{
                items:1
            },
            1200:{
                items:1
            },
            1920:{
                items:1
            }
        }
    });

    var prodImageMobileDots = $('.prodImageMobileSlider');
    prodImageMobileDots.owlCarousel();

        $('.owl-dot').click(function () {
            prodImageMobileDots.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
});

$(document).ready(function(){
    $('.hitsSlider').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            671:{
                items:4
            },
            900:{
                items:4
            },
            1200:{
                items:4
            },
            1920:{
                items:4
            }
        }
    });

    var hitsSlider = $('.hitsSlider');
        hitsSlider.owlCarousel();

        $('.nextBtn').click(function() {
            hitsSlider.trigger('next.owl.carousel');
        })

        $('.prevBtn').click(function() {
            hitsSlider.trigger('prev.owl.carousel', [300]);
        });
});

//Top-menu
$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 120) {
        $('.middle').addClass(' sticky-menu ');
        }else{
        $('.middle').removeClass(' sticky-menu ');
        }
    });
});

//Top-Items Sum
$(function(){
    $(window).scroll(function() {
        var windowPosition = $(this).scrollTop();
        if( windowPosition >=300 && windowPosition <=1230 ) {
        $('.items_sum').addClass(' itemsSum-menu ');
        }else{
        $('.items_sum').removeClass(' itemsSum-menu ');
        }
    });
});

//CustomSelect
$(function() {
    $('.choose').each(function() {
        var a = $(this).children('option:first-child').val();
        $(this).after('<div class="custom-select"></div>');
        $('.custom-select').append('<span class="spanVal">' + a + '</span>');
        $('.custom-select').append('<ul></ul>');
    });

    $('.choose option').each(function() {
        var b = $(this).val();
        $('<li>' + b + '</li>').appendTo('.custom-select ul');
    });

    $('.spanVal').on('click', function() {
        $('.custom-select ul').slideToggle('fast');
    });

    $('.custom-select li').on('click', function() {
        var c = $(this).text();
        $('.spanVal').html(c);
        $('.custom-select ul').hide();
    });

    $('.custom-select li').focus(function() {
        alert(0);
    });

    $(document).click(function(e) {
        if (e.target.class != '.custom-select' && !$('.custom-select').find(e.target).length) {
            $(".custom-select ul").hide();
        }
    });
});

$(function() {
    $('.choose-region').each(function() {
        var a = $(this).children('option:first-child').val();
        $(this).after('<div class="region-custom-select"></div>');
        $('.region-custom-select').append('<span class="region-spanVal">' + a + '</span>');
        $('.region-custom-select').append('<ul></ul>');
    });

    $('.choose-region option').each(function() {
        var b = $(this).val();
        $('<li>' + b + '</li>').appendTo('.region-custom-select ul');
    });

    $('.region-spanVal').on('click', function() {
        $('.region-custom-select ul').slideToggle('fast');
    });

    $('.region-custom-select li').on('click', function() {
        var c = $(this).text();
        $('.region-spanVal').html(c);
        $('.region-custom-select ul').hide();
    });

    $('.region-custom-select li').focus(function() {
        alert(0);
    });

    $(document).click(function(e) {
        if (e.target.class != '.region-custom-select' && !$('.region-custom-select').find(e.target).length) {
            $(".region-custom-select ul").hide();
        }
    });
});

$(function() {
    $('.choose-city').each(function() {
        var a = $(this).children('option:first-child').val();
        $(this).after('<div class="city-custom-select"></div>');
        $('.city-custom-select').append('<span class="city-spanVal">' + a + '</span>');
        $('.city-custom-select').append('<ul></ul>');
    });

    $('.choose-city option').each(function() {
        var b = $(this).val();
        $('<li>' + b + '</li>').appendTo('.city-custom-select ul');
    });

    $('.city-spanVal').on('click', function() {
        $('.city-custom-select ul').slideToggle('fast');
    });

    $('.city-custom-select li').on('click', function() {
        var c = $(this).text();
        $('.city-spanVal').html(c);
        $('.city-custom-select ul').hide();
    });

    $('.city-custom-select li').focus(function() {
        alert(0);
    });

    $(document).click(function(e) {
        if (e.target.class != '.city-custom-select' && !$('.city-custom-select').find(e.target).length) {
            $(".city-custom-select ul").hide();
        }
    });
});

$(function() {
    $('.choose-postnumber').each(function() {
        var a = $(this).children('option:first-child').val();
        $(this).after('<div class="postnumber-custom-select"></div>');
        $('.postnumber-custom-select').append('<span class="postnumber-spanVal">' + a + '</span>');
        $('.postnumber-custom-select').append('<ul></ul>');
    });

    $('.choose-postnumber option').each(function() {
        var b = $(this).val();
        $('<li>' + b + '</li>').appendTo('.postnumber-custom-select ul');
    });

    $('.postnumber-spanVal').on('click', function() {
        $('.postnumber-custom-select ul').slideToggle('fast');
    });

    $('.postnumber-custom-select li').on('click', function() {
        var c = $(this).text();
        $('.postnumber-spanVal').html(c);
        $('.postnumber-custom-select ul').hide();
    });

    $('.postnumber-custom-select li').focus(function() {
        alert(0);
    });

    $(document).click(function(e) {
        if (e.target.class != '.postnumber-custom-select' && !$('.postnumber-custom-select').find(e.target).length) {
            $(".postnumber-custom-select ul").hide();
        }
    });
});

$(function() {
    $('.choosemobile').each(function() {
        var a = $(this).children('option:first-child').val();
        $(this).after('<div class="mobile-custom-select"></div>');
        $('.mobile-custom-select').append('<span class="mobile-spanVal">' + a + '</span>');
        $('.mobile-custom-select').append('<ul></ul>');
    });

    $('.choosemobile option').each(function() {
        var b = $(this).val();
        $('<li>' + b + '</li>').appendTo('.mobile-custom-select ul');
    });

    $('.mobile-spanVal').on('click', function() {
        $('.mobile-custom-select ul').slideToggle('fast');
    });

    $('.mobile-custom-select li').on('click', function() {
        var c = $(this).text();
        $('.mobile-spanVal').html(c);
        $('.mobile-custom-select ul').hide();
    });

    $('.mobile-custom-select li').focus(function() {
        alert(0);
    });

    $(document).click(function(e) {
        if (e.target.class != '.mobile-custom-select' && !$('.mobile-custom-select').find(e.target).length) {
            $(".mobile-custom-select ul").hide();
        }
    });
});

$(window).resize(function(){
    var getModuleClass = $('.mainslider .mySlider_fullscreen h1 span');
    var getModule = getModuleClass.is('.fstword');
    var getModuleText = getModuleClass.text();

    if ((getModule == true) && (getModuleText == 'Постачальник')) {
        function getFontResize() {
            if ($(window).width() > '1542') {
                getModuleClass.css('font-size', '72px');
            } else if ( ($(window).width() > '1410') && ($(window).width() < '1542') ) {
                getModuleClass.css('font-size', '64px');
            } else if ( ($(window).width() > '1187') && ($(window).width() < '1410') ) {
                getModuleClass.css('font-size', '55px');
            } else if ( ($(window).width() > '901') && ($(window).width() < '1187') ) {
                getModuleClass.css('font-size', '40px');
            } else if ( ($(window).width() > '700') && ($(window).width() < '901') ) {
                getModuleClass.css('font-size', '30px');
            } else if ( ($(window).width() > '501') && ($(window).width() < '700') ) {
                getModuleClass.css('font-size', '19px');
            } else {
                getModuleClass.css('font-size', '32px');
            }
        };
        getFontResize();
    } else {
        return getModule;
    }
});

$(document).ready(function(){
    var windowWidth = $(window).width();
    var menuwidth = $("#container").outerWidth();
    var minusPadding = $("#container").width();
    var hafmenuwidth = windowWidth - menuwidth;
    var hafWidth = hafmenuwidth / 2;
    var mainmenu = $(".mainslider .sub_menu");
    mainmenu.css('--haf-mainmenu', + hafWidth + 'px');
    mainmenu.css('width', + minusPadding + 'px');
});