// Services section 

$(".onlinebtn").on("click", function () { 
    $(".online-option").toggleClass("visible");
    }
)

// About section 

function toggleMore() {
        const moreText = $("#more");
        const btnText = $("#moreBtn");
      
        if (btnText.html() !== "Explore more...") {
          btnText.html("Explore more..."); 
          moreText.css("display", "none");
        } else {
          btnText.html("Read less..."); 
          moreText.css("display", "inline");
        }
}

// Video carousel section

// Solution for controlling embedded youtube video:
// https://codepen.io/KimSarabia/pen/KoBmzZ