$(document).ready(() => {
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
          ));


  });