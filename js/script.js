const hamMenu = document.querySelector(".hamburger-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

/*carousel code*/

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.carousel-image');
  const leftBtn = document.querySelector('.carousel-arrow.left');
  const rightBtn = document.querySelector('.carousel-arrow.right');
  const dotsContainer = document.getElementById('carousel-dots');
  let current = 0;

  // Generate dots
  dotsContainer.innerHTML = '';
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active-carousel');
    dot.addEventListener('click', () => showImage(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('.dot');

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active-carousel', i === index);
    });
    current = index;
  }

  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  leftBtn.addEventListener('click', prevImage);
  rightBtn.addEventListener('click', nextImage);

  // Initialize
  showImage(current);
});

