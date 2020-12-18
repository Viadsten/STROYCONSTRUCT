


  jQuery(function($){
    $(".advantages").viewportChecker({
    callbackFunction:function(){
        $('.advantages__numeral').each(function() {
            $(this).prop('Counter', 0).animate({
              Counter: $(this).text()
            }, {
              duration: 4000,
              easing: 'swing',
              step: function(now) {
                $(this).text(Math.ceil(now));
              }
            });
          });
    }
    });
    });