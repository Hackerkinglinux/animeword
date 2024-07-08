$(document).ready(function() {
    // Inicialmente mostramos el contenido de la primera pestaña
    $('#series').addClass('active');

    // Cambiar de pestaña al hacer clic en un enlace de las tabs
    $('.tabs a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.tabs a').removeClass('active');
        $(this).addClass('active');
        $('main > div').removeClass('active');
        $(target).addClass('active');
    });

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
