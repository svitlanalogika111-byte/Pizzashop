let total = 0;

const cart = document.querySelector("#cart");
const cartList = document.querySelector("#cartList");
const totalElement = document.querySelector("#total");
const cartBtn = document.querySelector("#cartBtn");
const closeCart = document.querySelector("#closeCart");

// Якщо є кнопка "Кошик"
if (cartBtn) {
    cartBtn.onclick = function () {
        cart.classList.toggle("active");
    };
}

// Якщо є кнопка "Закрити"
if (closeCart) {
    closeCart.onclick = function () {
        cart.classList.remove("active");
    };
}

// Додавання товару
function addToCart(name, price) {
    const li = document.createElement("li");
    li.innerHTML = `${name} - ${price} грн`;

    cartList.appendChild(li);

    total += price;
    totalElement.innerHTML = total;

    // Автоматично відкриваємо кошик
    cart.classList.add("active");
}