<script>
  // Obtén el elemento del desplegable de "Planes"
  var planesDropdown = document.getElementById("planesDropdown");

  // Agrega un controlador de eventos al hacer clic en "Planes"
  planesDropdown.addEventListener("click", function () {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    // Alternar la visibilidad del desplegable
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none"; // Oculta el desplegable si ya está visible
    } else {
      dropdownMenu.style.display = "block"; // Muestra el desplegable si está oculto
    }
  });
</script>

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
