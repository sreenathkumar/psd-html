document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("mobile-menu-toggle")
    .addEventListener("click", function () {
      const menu = document.getElementById("mobile-menu");
      menu.classList.toggle("open");
    });

  //slider codes

  const slides = document.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const totalSlides = images.length;
  let index = 0;

  const dots = document.querySelectorAll(".dot");
  updateDots();

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      index = dotIndex;
      updateSlidePosition();
      updateDots();
    });
  });

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function updateDots() {
    dots.forEach((dot, dotIndex) => {
      dot.classList.remove("bg-gray-800");
      dot.classList.add("bg-gray-400");
      if (dotIndex === index) {
        dot.classList.add("bg-gray-800");
        dot.classList.remove("bg-gray-400");
      }
    });
  }

  function autoPlay() {
    index = index < totalSlides - 1 ? index + 1 : 0;
    updateSlidePosition();
    updateDots();
  }

  setInterval(autoPlay, 3000); // Change slide every 3 seconds
});
