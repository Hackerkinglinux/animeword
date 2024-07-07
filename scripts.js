$(document).ready(function() {
    // Configuración del carrusel
    var currentIndex = 0;
    var items = $('.carousel-item');
    var itemAmount = items.length;

    function showCurrent() {
        items.hide().eq(currentIndex).show();
    }

    // Función para avanzar en el carrusel
    function next() {
        currentIndex += 1;
        if (currentIndex > itemAmount - 1) {
            currentIndex = 0;
        }
        showCurrent();
    }

    // Función para retroceder en el carrusel
    function prev() {
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = itemAmount - 1;
        }
        showCurrent();
    }

    // Mostrar el primer elemento
    showCurrent();

    // Control de eventos para los botones de siguiente y anterior
    $('#carousel').append('<button id="prevBtn">Prev</button><button id="nextBtn">Next</button>');
    $('#nextBtn').on('click', next);
    $('#prevBtn').on('click', prev);

    // Configuración de intervalo para el carrusel automático
    setInterval(function() {
        next();
    }, 5000); // Cambiar el intervalo según sea necesario
});
