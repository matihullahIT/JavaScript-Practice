
// $(document).ready(() => {
//     $(".relative").hover(
//         function () {
//             // Show the dropdown when hovering over the label or answers
//             $(this).find(".answer").stop(true, true).slideDown("slow");
//         },
//         function () {
//             // Close the dropdown when leaving the entire container
//             $(this).find(".answer").stop(true, true).slideUp("slow");
//         }
//     );
//     localStorage.setItem("cart", JSON.stringify([])); // Initialize cart in local storage
//     let cartbutton = $("#cartbtn");
//     let list = $("#list");
//     list.html("See More");
//     list.click(function () {
//         const nextlist = $(this).next("#list_details"); // Select the next sibling with class "list_details"
//         if (list.html() === "See More") {
//             list.html("See Less");
//             $(".list_details").not(nextlist).slideUp("slow");
//             nextlist.slideToggle("slow");
//         } else {
//             list.html("See More");
//             nextlist.slideToggle("slow");
//         }
//     });

//     const stars = [$("#star1"), $("#star2"), $("#star3"), $("#star4")];
//     stars.forEach(star => star.css("color", "black"));
//     stars.forEach((star, index) => {
//         star.click(function () {
//             stars.forEach((s, i) => {
//                 s.css("color", i <= index ? "gold" : "black");
//             });
//         });
//     });
//});


document.addEventListener("DOMContentLoaded",()=>{
    // Define imageurls globally so it can be accessed by all functions
    let cartBtn=document.getElementById("cartbtn");
    let list = document.querySelector("#list");
    const next=document.getElementById("next");
    const prev=document.getElementById("prev");
    const cart_count=document.getElementById("cart_count");
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
    cartBtn.addEventListener("click",()=>{
        const card = cartBtn.closest('.card'); // Get the parent .card
        const title = card.querySelector('#name').textContent;
        const price = card.querySelector('#price').textContent;
        const description = card.querySelector('#description').textContent;
        const quantity = card.querySelector('#quantity').textContent;
        // console.log("this is parent",title,description,quantity);
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({"name": title, "description": description, "quantity": quantity,"price":price});;
        localStorage.setItem("cart", JSON.stringify(cart));
        const cartdata = localStorage.getItem("cart");
        console.log(cartdata);
        cart_count.textContent = cart.length;
        // window.location.href = "checkout.html";
    })
})
