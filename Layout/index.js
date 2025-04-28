document.addEventListener("DOMContentLoaded", function () {
    const imgurls = [
        "./media/abstract-grunge-style-metallic-background.webp",
        "./media/abstract-triangles-background.webp",
        "./media/black-abstract-background-wallpaper-image.webp",
    ];
    const CardData = [
        `<h2 class="font-bold text-xl">Fast Performance</h2><p>Lightning speed and optimized code for all devices.</p>`,
        `<h2 class="font-bold text-xl">Responsive Layout</h2><p>Perfectly optimized for all devices and screen sizes.</p>`,
        `<h2 class="font-bold text-xl">Launch Into Modern Design</h2><p>Experience design that's not only sleek but also ahead of its time.</p>`
    ];
    const Testimonials = [
        `<i class="fas fa-user border-2 border-white rounded-full p-5"></i>
         <h3 class="text-3xl">NightWave transformed our online presence — it's stunning!</h3>
         <p class="italic text-2xl">Alex R., Startup Founder</p>`,
        `<i class="fas fa-user border-2 border-white rounded-full p-5"></i>
         <h3 class="text-3xl">Amazing performance and design. Highly recommend it!</h3>
         <p class="italic text-2xl" >Jordan K., Web Developer</p>`,
        `<i class="fas fa-user border-2 border-white p-3"></i>
         <h3 class="text-3xl">Exceptional service and attention to detail!</h3>
         <p class="italic text-2xl">Maria L., Designer</p>`
    ];
    const cards = document.querySelectorAll('.card'); // Select all cards
    const checkbox = document.querySelector("#showpassword");
const passwordField = document.querySelector("#password");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        passwordField.type = "text"; // Show password
    } else {
        passwordField.type = "password"; // Hide password
    }
});
    cards.forEach((card, index) => {
        // Store the original content for each card in a data attribute or variable
        const originalContent = card.innerHTML;

        // On mouseover: Change the content of the hovered card
        card.addEventListener("mouseover", () => {
            card.innerHTML = CardData[index]; // Change the content based on the card index
        });

        // On mouseout: Revert the content back to the original state
        card.addEventListener("mouseout", () => {
            card.innerHTML = originalContent; // Restore the original content
        });
    });

    // Testimonials functionality
    let testimonialIndex = 0;
    const testimonialsContainer = document.querySelector('#testimonials');

    function updateTestimonials() {
        testimonialsContainer.innerHTML = Testimonials[testimonialIndex];
        testimonialIndex++;
        if (testimonialIndex >= Testimonials.length) {
            testimonialIndex = 0;
        }
    }

    setInterval(updateTestimonials, 5000);

    updateTestimonials();
    let i = 0;
    const banner = document.querySelector('#banner');
    banner.style.backgroundImage = `url(${imgurls[i]})`;

    function changeBanner() {
        i++;
        if (i >= imgurls.length) {
            i = 0;
        }
        banner.style.backgroundImage = `url(${imgurls[i]})`;
    }
    setInterval(changeBanner, 3000);
});