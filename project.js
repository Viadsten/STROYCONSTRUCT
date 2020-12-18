var show_modal = document.querySelectorAll(".popup-btn");
var hide_modal = document.querySelector(".popup__cancel");
var modal = document.querySelector(".modal");
var modal_bg = document.querySelector(".modal-bg");

for (i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener('click', function() {
    modal.style.display = "block";
    modal_bg.style.display = "block";
  });
}
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27){
      evt.preventDefault();
      modal.style.display = "none";
      modal_bg.style.display = "none";

  }
})
hide_modal.onclick = function() {
  modal.style.display = "none";
  modal_bg.style.display = "none";

}

var popup_btn = document.querySelectorAll(".popup-btn");


function modal_content(){
      
    let position = 0;
    let slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    let itemWidth = (container.width()) / slidesToShow;
    let movePosition = slidesToScroll * (itemWidth);
  
    var cachedWidth = $(window).width();
    $(window).resize(function () {
      var newWidth = $(window).width();
      if (newWidth !== cachedWidth) {
        $(window).resize(function () {
          if (document.documentElement.clientWidth > 750) {
          }
          if (document.documentElement.clientWidth < 750) {
          }
        });
        widthf();
        $(window).resize(function () {widthf()});
        cachedWidth = newWidth;
      }
    });
  
    function widthf(){
      itemWidth = (container.width()) / slidesToShow;
      movePosition = slidesToScroll * (itemWidth);
    }
    
    widthf();
  
    item.each(function(index, item){
      $(item).css({
          minWidth: itemWidth,
      });
    });
  
    btnPrev.click(function(){
      const itemsLeft = Math.abs(position) / itemWidth;
  
      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      setPosition();
      checkBtns();
    });
    btnNext.click(function(){
      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth)  / itemWidth;
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      setPosition();
      checkBtns();
    });
  
    const setPosition = () => {
      track.css({
        transform: `translateX(${position}px)`
      });
    };
  
    const checkBtns = () => {
      btnPrev.prop('disabled', position === 0);
      btnNext.prop(
        'disabled',
        position <= -(itemsCount - slidesToShow) * itemWidth
      )
    }
    checkBtns();

    function next_slide(){
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth)  / itemWidth;
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      setPosition();
      checkBtns();
      }
}


var project_carousel = document.querySelector('#projects-carousel');
 
const mediaQuery960 = window.matchMedia('(min-width: 960px)')
if (mediaQuery960.matches) {
    project_carousel.classList.remove('owl-carousel');
    project_carousel.classList.remove('owl-carousel-3');
 }

 var wrapperMenu = document.querySelector('.wrapper-menu');

 wrapperMenu.addEventListener('click', function(){
   wrapperMenu.classList.toggle('open');  
 })