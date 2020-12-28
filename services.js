
/*
$('.owl-carousel').owlCarousel({
    margin:10,
    autoWidth:true,
    items:1
})
*/
$(function() {
    var owl = $('.owl-carousel'),
        owlOptions = {
            loop: false,
            autoWidth:true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                }
            }
        };

    if ( $(window).width() < 1060 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 1060 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});

$(document).ready(function(){
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".accordion-marker").addClass("rotate-180");
    });
    
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".accordion-marker").addClass("rotate-180");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".accordion-marker").removeClass("rotate-180");
    });
});


var accordion_head = $('.card-header');
//var accordion_btn = $('.btn-accordion');


for (i = 0; i < accordion_head.length; i ++){
    if (i % 2 == 0){
        $(accordion_head[i]).css({'background-color' : 'rgba(168, 183, 211, 0.44)'})
    }else{
        $(accordion_head[i]).css({'background-color' : '#F8F8F8'})
    }
}