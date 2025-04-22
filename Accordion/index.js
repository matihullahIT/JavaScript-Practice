$(document).ready(() => {
    const banner = $("#banner")
    const imageurls=["./media/Landscape_01 - Without Billing.png","./media/pxfuel (1).png","./media/Landscape_01 - Without Billing.png",
        "./media/HD-wallpaper-suleymaniye-mosque-istanbul-cityscape-beautiful-city-bosphorus-turkey-mosque-ottoman-architecture.jpg",
        "./media/Landscape_01 - Without Billing.png",
        "./media/pxfuel (1).png"
    ] 
    $("a[href^='#']").click(function (event) {
      event.preventDefault();
      const target = $($(this).attr("href")); 
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          800
        );
      }
    });
let i = 0;
            banner.css("background-image", `url("${imageurls[i]}")`);

function next(){
              banner.css("background-image", `url("${imageurls[i]}")`);
              i = (i + 1) % imageurls.length; // Loop back to 0 after last item
                  // setTimeout(3000);
          }
$("#next").click(next);
$("#prev").click(() => {
  i = (i - 1 + imageurls.length) % imageurls.length; // Ensure non-negative index
  banner.css("background-image", `url("${imageurls[i]}")`);
});

    // updateBanner();
    $(".label").click(function () {
      const answer = $(this).next(".answer");
      $(".answer").not(answer).slideUp("slow"); 
      answer.slideToggle("slow"); 
    });


        $(".nav-elements").hover($("#nav-item-container").hover(
            function () {
              // On mouse enter, show the details
              $(this).find(".details").stop(true, true).slideDown("fast");
            },
            function () {
              // On mouse leave, hide the details
              $(this).find(".details").stop(true, true).slideUp("fast");
            }
          ))
            
  });