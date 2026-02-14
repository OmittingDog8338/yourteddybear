$(document).ready(function () {
  let isCardOpen = false;
  let isCardZoomed = false;
  
  // Card click to zoom
  $(".card").click(function (e) {
    e.stopPropagation();
    if (!isCardZoomed) {
      $(".card").addClass("zoomed");
      $(".envelope").addClass("blurred");
      $(".front").addClass("blurred");
      $(".hearts").addClass("blurred");
      $("body").append('<div class="card-overlay active"></div>');
      isCardZoomed = true;
    } else {
      $(".card").removeClass("zoomed");
      $(".envelope").removeClass("blurred");
      $(".front").removeClass("blurred");
      $(".hearts").removeClass("blurred");
      $(".card-overlay").remove();
      isCardZoomed = false;
    }
  });
  
  // Close zoom when clicking overlay
  $(document).on("click", ".card-overlay", function () {
    $(".card").removeClass("zoomed");
    $(".envelope").removeClass("blurred");
    $(".front").removeClass("blurred");
    $(".hearts").removeClass("blurred");
    $(".card-overlay").remove();
    isCardZoomed = false;
  });
  
  // Mobile button click
  $(".mobile-btn").click(function () {
    if (!isCardOpen) {
      $(".card").stop().animate(
        {
          top: "-240px",
        },
        "slow"
      );
      $(this).text("Close Letter");
      isCardOpen = true;
    } else {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
      $(this).text("Open Letter");
      isCardOpen = false;
    }
  });
  
  // Desktop hover
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-240px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});
