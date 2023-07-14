document.addEventListener("DOMContentLoaded", function(event) {
  var images = document.getElementById("image-container").getElementsByTagName("img");
  var currentImageIndex = 0;
  
  setInterval(function() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
  }, 5000);
});
