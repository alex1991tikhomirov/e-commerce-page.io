document.addEventListener('click', event=>{
    if(event.target.id === 'delete'){
       const emptyCart = event.target.closest('.shopping_cart_items');
       emptyCart.innerHTML = `<p style="font-weight: 400; font-size: 15px; line-height: 159.02%; letter-spacing: 0.02em; color: #707070;">Your cart is empty</p>`;
       const showIcon = document.getElementById('cart_items_show');
       showIcon.style = 'display: none';
    }
})