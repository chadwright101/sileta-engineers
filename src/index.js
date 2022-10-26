// Mobile navigation menu
function mobileNav(x, y) {
  x = document.getElementById("mobileNav");
  y = document.getElementById("navButton");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.boxShadow =
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
  } else {
    x.style.display = "none";
    y.style.boxShadow = "none";
  }
}

// Home page slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// Footer show email
function showEmail(x) {
  x = document.getElementById("showEmail");
  x.innerHTML =
    '<a href="mailto:info@sileta.co.za" class="text-siletaMedium py-2 px-16">info@sileta.co.za</a>';
}
