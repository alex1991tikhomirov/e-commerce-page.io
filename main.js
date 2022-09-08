
/// making lightbox to work /////
const lightBox = document.querySelector(".lightbox_wrapper");
const closeLight = document.getElementById("photo_close").addEventListener("click", showLightBox, false);
let pic = document.getElementById("main_photo");
pic.addEventListener("click", showLightBox, false);

function showLightBox() {
  lightBox.classList.toggle("lightbox_visible");
}


const arr = [
  //////an array of images big size
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
const thumbArr = [
  ///////an arry of small images
  "./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg",
];
let i = 0;
let nextPic = document.getElementById("main_photo_lightbox"); //lightbox photo variable
nextPic.addEventListener("click", changeSlideNext, false); // changin slide when click at any place on main photo
let thumbImage = document.getElementsByClassName("photo_small"); //small images array
const next = document.getElementById("photo_next_lightbox").addEventListener("click", changeSlideNext, false); //next photo button
const prev = document.getElementById("photo_previous_lightbox").addEventListener("click", changeSlidePrev, false); //previous photo button
let thumbStyles = 'border: 2px solid orange; opacity: 0.8;';
let thumbEmptyStyles = 'border: none; opacity: 1;';
//changing slides forward
function changeSlideNext() {  
  if (i > 2 ) {
    i = 0;
    console.log('another side');
  } else {
    i++;
  }
  nextPic.src = arr[i];
  thumbImage[i].style = thumbStyles;
  thumbImage[i - 1].style = "";
  console.log(i);
}

//changing slides revers
function changeSlidePrev() {
  if (i > 0) {
    i = i - 1;
  } else {
    i += 3;
  }
  nextPic.src = arr[i];
  thumbImage[i].style = thumbStyles;
  thumbImage[i + 1].style = "";
}


//// making main photo viewing on desktop screen to work /////

document.addEventListener('click', event =>{
   switch(event.target.id){
        case 'photo-1':
            pic.src = arr[0];
        break;
        case 'photo-2':
            pic.src = arr[1];
        break;
        case 'photo-3':
            pic.src = arr[2];
        break;
        case 'photo-4':
            pic.src = arr[3];
        break;
        default:
            pic.src = arr[0];
        break;
   }
}, false)