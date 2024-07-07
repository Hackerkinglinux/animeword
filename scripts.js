    $(document).ready(function() {
        // Inicialmente mostramos el contenido de la primera pestaña
        $('#series').addClass('active');

        // Cambiar de pestaña al hacer clic en un enlace de las tabs
        $('.tabs a').on('click', function(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('.content-section').removeClass('active');
            $(target).addClass('active');
        });

        // Configuración del carrusel básico
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
        }, 3000); // Cambia cada 3 segundos, ajusta el valor según lo que necesites

    });
