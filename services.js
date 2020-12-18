$('.owl-carousel').owlCarousel({
    margin:10,
    autoWidth:true,
    items:1
})


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