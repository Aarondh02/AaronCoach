$(document).ready(function () {
    $('.slick-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });

    var planContainer = document.querySelector(".plan-container");
    var planButtonsVisible = false;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100 && !planButtonsVisible) {
            planContainer.style.display = "block";
            planButtonsVisible = true;
        } else if (window.scrollY <= 100 && planButtonsVisible) {
            planContainer.style.display = "none";
            planButtonsVisible = false;
        }
    });
});
