$(document).ready(function () {
    const darkModeToggle = $('#darkModeToggle');

    // Comprobar estado del modo oscuro al cargar la página
    if (localStorage.getItem('darkMode') === 'enabled') {
        $('body').addClass('dark-mode');
    }

    // Alternar modo oscuro al hacer clic en el botón
    darkModeToggle.on('click', function () {
        $('body').toggleClass('dark-mode');

        // Guardar la preferencia en el almacenamiento local
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
