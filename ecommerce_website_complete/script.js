// Get all "Add to Cart" buttons
let cartButtons = document.querySelectorAll('.add-to-cart');

// Create empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add event listener to each button
cartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image
        };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(product.name + " added to cart!");
    });
});

function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    cartItems.forEach((item) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" width="50">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
            </div>
        `;
    });
}

if (document.getElementById('cart-items')) {
    loadCart();
}
