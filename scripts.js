$(document).ready(function() {
    console.log("Document ready"); // Verifica si el documento está cargando correctamente

    // Verifica la funcionalidad de cambio de pestañas al hacer clic en los enlaces de las tabs
    $('.tabs a').on('click', function(e) {
        e.preventDefault();
        console.log("Cambio de pestaña detectado"); // Asegura que se está detectando el clic en los enlaces de las tabs
        var target = $(this).attr('href');
        $('.content-section').removeClass('active');
        $(target).addClass('active');
    });

    // Verifica la funcionalidad del carrusel
    var currentIndex = 0;
    var items = $('.carousel-item');
    var itemAmount = items.length;

    function cycleItems() {
        var item = $('.carousel-item').eq(currentIndex);
        items.hide();
        item.css('display', 'block');
    }

    var autoSlide = setInterval(function() {
        currentIndex += 1;
        if (currentIndex > itemAmount - 1) {
            currentIndex = 0;
        }
        cycleItems();
    }, 3000); // Ajusta el intervalo según necesites

    console.log("Script de carrusel cargado"); // Verifica si el script de carrusel se está ejecutando
});

