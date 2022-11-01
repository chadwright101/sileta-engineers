// Mobile navigation
function mobileNav() {
  navBar = document.getElementById("mobileNav");
  button = document.getElementById("navButton");
  if (navBar.style.display === "none") {
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
}

//  Home slideshow
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

// Contact show email
function showEmailContact(x) {
  x = document.getElementById("showEmailContact");
  x.innerHTML =
    '<a href="mailto:info@sileta.co.za" class="py-2"><h2 class="font-normal not-italic text-siletaBlack hover:text-siletaGreen">info@sileta.co.za</h2></a>';
}

// Footer show email
function showEmail(x) {
  x = document.getElementById("showEmail");
  x.innerHTML =
    '<a href="mailto:info@sileta.co.za" class="text-siletaMedium py-2 px-16 lg:text-siletaBody lg:py-0 lg:px-0">info@sileta.co.za</a>';
}
