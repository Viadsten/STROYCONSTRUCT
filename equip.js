var modal_equip = document.querySelector('.equip-modal');
var modal_equip_open = document.querySelectorAll('.equip-more-btn');
var modal_equip_close = document.querySelector('.equip__modal-close');
var modal_equip_bg = document.querySelector('.equip-modal__bg');

for (var i = 0; i < modal_equip_open.length; i++){
    modal_equip_open[i].addEventListener('click', function(){
        modal_equip.style.display = 'block';
        modal_equip_bg.style.display = 'block';
    });
}

modal_equip_close.addEventListener('click', function(){
    close_equip_modal();
});

function close_equip_modal(){
    modal_equip.style.display = 'none';
    modal_equip_bg.style.display = 'none';
}

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27){
        evt.preventDefault();
        modal_equip.style.display = "none";
        modal_equip_bg.style.display = "none";
  
    }

});