// scripts/dark-mode.js
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('toggleDarkMode');
    const darkModeClass = 'dark-mode';

    // Verifica si el modo oscuro está guardado en localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add(darkModeClass);
    }

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle(darkModeClass);
        
        // Guarda el estado en localStorage
        if (document.body.classList.contains(darkModeClass)) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
