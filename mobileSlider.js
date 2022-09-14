let counter = 0;
const imgArr = [
            './images/image-product-1.jpg',
            './images/image-product-2.jpg',
            './images/image-product-3.jpg',
            './images/image-product-4.jpg'
        ];

document.getElementById('photo_next').addEventListener('click', ()=>{
let img = document.getElementById('main_photo_mobile');  
    (counter > 2 ? counter = 0 : counter++);
    img.src = imgArr[counter];
});
document.getElementById('photo_previous').addEventListener('click', ()=>{
    let img = document.getElementById('main_photo_mobile');
        (counter > 0 ? counter -= 1 : counter += 3);
        img.src = imgArr[counter];
    })