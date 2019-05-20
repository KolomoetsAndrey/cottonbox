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

$(document).ready(function(){
    $('.mainSlider').owlCarousel({
        loop: true,
        dotsContainer: '.mainSliderCustomDots',
        autoplay: true,
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
