$(document).ready(function() {
    // Carousel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentSlide].style.display = 'block';

    function showSlide(index) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
});
