//making cart apppear and disappear on click of the cart icon
const cartIcon = document.getElementById('cart').addEventListener('click', ()=>{
    let shoppingCart = document.querySelector('.shopping_cart');
    shoppingCart.classList.toggle('visible_cart');
});



document.addEventListener('click', event=>{
    if(event.target.hasAttribute('data-cart')){

        const item = event.target.closest('.buy');// getting selected section into a variable
        let shoppingCartItems = document.querySelector('.shopping_cart_items');
        let shoppingcart = document.querySelector('.shopping_cart_items');
    

// creating an object of the product
        const Product = {
            id: item.dataset.id,
            imgSrc: "./images/image-product-1-thumbnail.jpg",
            title: item.querySelector('[data-title]').innerText,
            itemsNumber: item.querySelector('#total_items').innerText,
            price: 125.00,
            totalItems : function(){
                return this.itemsNumber * this.price;
            }
        }
        if(Product.itemsNumber > 1){
            item.querySelector('#total_items').innerText = 1;// updating output after ites were added to the cart
        }
        const itemInCart = shoppingCartItems.querySelector('.shopping_cart_description');
        let showIcon =  document.querySelector('#cart_items_show');
           showIcon.innerText = Product.itemsNumber;
           showIcon.style = 'display: block';
           console.log(showIcon.innerText)
        //checking if there are items in the cart if so add the amount and price to it
        if(itemInCart){

           const counterEl = itemInCart.querySelector('#items_number');
           let totalEl = counterEl.innerText = parseFloat(counterEl.innerText) + parseFloat(Product.itemsNumber);
           let totalPrice = itemInCart.querySelector('#total_price');
           totalPrice.innerText = `  $${125 * totalEl}`;
           let showIcon =  document.querySelector('#cart_items_show');
           showIcon.innerText = totalEl;
           showIcon.style = 'display: block';
           console.log(showIcon.innerText);

        }else{ //or add new item

            if(Product.itemsNumber > 0){
                
            shoppingcart.style = 'display: flex; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-evenly';
            const cartHTML = `
            <img id="item_image" src="${Product.imgSrc}" alt="thumbnail picture of sneakers">
            <div class="shopping_cart_description">
            <p>${Product.title}</p>
            <p><span id="item_price">$125.00 x </span> <span id="items_number">${Product.itemsNumber}</span><span id="total_price">  $${Product.totalItems()}</span></p>
            </div>
            <a id="delete" data-action="delete" href="#"><img id="delete" data-action="delete" src="images/icon-delete.svg" alt="delete button"></a>
            <button class="Checkout">Checkout</button>`;

            shoppingCartItems.innerHTML = cartHTML;
        }}
    }
});
