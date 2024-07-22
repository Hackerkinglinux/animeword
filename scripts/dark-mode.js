$(document).ready(function () {
    const darkModeToggle = $('#darkModeToggle');
    const nightLightToggle = $('#nightLightToggle');

    // Comprobar el estado del modo oscuro y luz nocturna al cargar la página
    if (localStorage.getItem('darkMode') === 'enabled') {
        $('body').addClass('dark-mode');
        if (localStorage.getItem('nightLight') === 'enabled') {
            $('body').addClass('night-light');
        }
    }

    // Alternar el modo oscuro al hacer clic en el botón
    darkModeToggle.on('click', function () {
        $('body').toggleClass('dark-mode');

        // Guardar la preferencia en el almacenamiento local
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Alternar el efecto de luz nocturna al hacer clic en el botón
    nightLightToggle.on('click', function () {
        $('body').toggleClass('night-light');

        // Guardar la preferencia en el almacenamiento local
        if ($('body').hasClass('night-light')) {
            localStorage.setItem('nightLight', 'enabled');
        } else {
            localStorage.setItem('nightLight', 'disabled');
        }
    });
});
