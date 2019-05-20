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
    $('.owl-carousel').owlCarousel({
         loop: true,
         margin: 10,
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

     var owl = $('.recomendationSlider');
        owl.owlCarousel();

        $('.nextBtn').click(function() {
            owl.trigger('next.owl.carousel');
        })

        $('.prevBtn').click(function() {
            owl.trigger('prev.owl.carousel', [300]);
    })
 });
