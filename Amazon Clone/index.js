    document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cart_count = document.getElementById("cart_count");

    // Update cart count on page load
    cart_count.textContent = cart.length;

    // Select all "Add to Cart" buttons
    const cartButtons = document.querySelectorAll(".cartbtn");

    cartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".card"); // Get the parent .card
            const title = card.querySelector("#name").textContent.trim(); // Get the item name
            const price = parseFloat(card.querySelector("#price").textContent.trim()); // Get the item price
            const quantity = parseInt(card.querySelector("#quantity").textContent.trim()); // Get the item quantity

            // Check if the item already exists in the cart
            const existingItem = cart.find((item) => item.name === title);

            if (existingItem) {
                // If the item exists, update its quantity
                existingItem.quantity += quantity;
            } else {
                // If the item does not exist, add it to the cart
                cart.push({ name: title, price: price, quantity: quantity });
            
            }

            // Save the updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update the cart count
            cart_count.textContent = cart.length;
            console.log("Cart updated:", cart);

        });
    });
    document.getElementById("addtocart").addEventListener("click", () => {
        window.location.href = "checkout.html";

    })
    const list = document.querySelector("#list");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const stars = Array.from(document.querySelectorAll("#star1, #star2, #star3, #star4"));
    const imageurls = [
        "./media/Landscape_01 - Without Billing.png",
        "./media/pxfuel (1).png",
        "./media/Landscape_01 - Without Billing.png",
        "./media/HD-wallpaper-suleymaniye-mosque-istanbul-cityscape-beautiful-city-bosphorus-turkey-mosque-ottoman-architecture.jpg",
        "./media/Landscape_01 - Without Billing.png",
        "./media/pxfuel (1).png"
    ];

    if (list) {
        list.innerHTML = "See More";
    } else {
        console.error("Element with ID 'list' not found in the DOM.");
    }

    let i = 0;

    function nextimg() {
        const banner = document.getElementById("banner");
        i = (i + 1) % imageurls.length;
        banner.style.backgroundImage = `url("${imageurls[i]}")`;
    }

    function previmg() {
        const banner = document.getElementById("banner");
        i = (i - 1 + imageurls.length) % imageurls.length;
        banner.style.backgroundImage = `url("${imageurls[i]}")`;
    }

    next.addEventListener("click", () => nextimg());
    prev.addEventListener("click", () => previmg());
    const banner = document.getElementById("banner");
    banner.style.backgroundImage = `url("${imageurls[i]}")`;
});
