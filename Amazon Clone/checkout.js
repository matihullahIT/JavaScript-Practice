document.addEventListener("DOMContentLoaded", function () {
    const delbtn = document.getElementById("delbtn");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cart_items = document.getElementById("cart_items");
    if(!cart){
        window.location.href = "catalogue .html";
    }
    function GetCartdata() {
        if (cart_items) {
            cart_items.innerHTML = cart
                .map((item, index) => {
                    const name = item.name || "No Name";
                    const quantity = item.quantity || 0;
                    const price = item.price || 0;
                    const bill = quantity * price;
                    return `
                    <ul data-index="${index}">
                        <li class="name">item name: ${name}</li>
                        <li>Quantity: ${quantity}</li>
                        <li>Price: $${price}</li>
                        <li>Bill: $${bill}</li>
                        <button class="addbtn border-2 border-orange-500 rounded-2xl px-3">+</button>
                        <span class="quantity">${quantity}</span>
                        <button class="minusbtn border-2 border-orange-500 rounded-2xl px-3">-</button>
                        <button class="removeBtn border-2 border-amazon_yellow p-2 rounded-3xl transition-all hover:border-orange-500">remove</button>
                    </ul>`;
                })
                .join("");

            const totalBill = cart.reduce((total, item) => total + item.quantity * item.price, 0);
            document.getElementById("total_items").innerHTML = cart.length;
            document.getElementById("total_Bill").innerHTML = `Total Bill: $${totalBill}`;
        }
    }

    GetCartdata();

    cart_items.addEventListener("click", (event) => {
        const target = event.target;
        const parentUl = target.closest("ul");
        const index = parentUl ? parseInt(parentUl.getAttribute("data-index")) : -1;

        if (index === -1) return; // If no valid index, exit

        if (target.classList.contains("addbtn")) {
            cart[index].quantity = parseInt(cart[index].quantity) + 1; // Increment the quantity of the correct item
        } else if (target.classList.contains("minusbtn")) {
            if (cart[index].quantity > 0) {
                cart[index].quantity = parseInt(cart[index].quantity) - 1; // Decrement the quantity of the correct item
            }
        } else if (target.classList.contains("removeBtn")) {
            cart.splice(index, 1); // Remove the item from the cart
        }

        localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
        GetCartdata(); // Refresh the cart display
    });

    delbtn.addEventListener("click", () => {
        localStorage.removeItem("cart");
        cart_items.innerHTML = "No items in cart";
        document.getElementById("total_Bill").innerHTML = "Total Bill: $0";
    });
});