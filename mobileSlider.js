document.addEventListener('click', e=>{
    let count = 0;
    if(e.target.id === 'photo_next' || e.target.id === 'photo_previous'){
        const photoCont = e.target.closest('.photo');
        let img = photoCont.querySelector('#main_photo');
        
        const photoArr = [
            './images/image-product-1.jpg',
            './images/image-product-2.jpg',
            './images/image-product-3.jpg',
            './images/image-product-4.jpg',
        ];
        let count = photoArr.length;
        console.log(count);
        count--;
        
    }
   
})