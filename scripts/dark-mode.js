// scripts/dark-mode.js
$(document).ready(function() {
    const toggleButton = $('#toggleDarkMode');
    const body = $('body');

    // Comprueba si el usuario ya ha seleccionado el modo oscuro anteriormente
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.addClass('dark-mode');
    }

    toggleButton.on('click', function() {
        body.toggleClass('dark-mode');

        // Guardar la preferencia del usuario en el almacenamiento local
        if (body.hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
