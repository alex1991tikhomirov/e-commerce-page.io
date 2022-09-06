

/*  code for side menu and a shopping cart  */

const shoppingCart = document.querySelector('.shopping_cart'); //getting element with class 
const cart = document.getElementById('cart').addEventListener('click', ()=>{
   shoppingCart.classList.toggle('visible');// toggle will add and remove class visible
});
const sideMenu = document.querySelector('.side_menu');
const bars = document.querySelector('.logo').addEventListener('click', visible, false);
const close = document.getElementById('close').addEventListener('click', visible, false);
function visible(){
    sideMenu.classList.toggle('visible');
}




/// code for lightbox apperance////////

const lightBox = document.querySelector('.lightbox_wrapper');
const closeLight = document.getElementById('photo_close').addEventListener('click', showLightBox, false)
let pic = document.getElementById('main_photo').addEventListener('click', showLightBox, false);
function showLightBox(){
    lightBox.classList.toggle('lightbox_visible');
}


