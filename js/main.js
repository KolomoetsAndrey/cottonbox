jQuery(document).ready(function(){
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

$('.sim-thumb').on('click', function() {
    $('#main-product-image').attr('src', $(this).data('image'));
})  

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}

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

function openNav() {
    var x = window.matchMedia("(max-width:900px)");

    if (x.matches) {
        document.getElementById("mySidepanel").style.width = "85%";
    } else {
        document.getElementById("mySidepanel").style.width = "25%";
    }
};
    
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
};

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

$(document).ready(function(){
    $('.mainSlider').owlCarousel({
        loop: true,
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