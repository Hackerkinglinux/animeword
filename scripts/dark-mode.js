document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const nightLightToggle = document.getElementById('nightLightToggle');

    // Cargar preferencias del almacenamiento local
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    if (localStorage.getItem('nightLight') === 'enabled') {
        document.body.classList.add('night-light');
    }

    // Alternar modo oscuro
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Alternar luz nocturna
    nightLightToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-light');
        if (document.body.classList.contains('night-light')) {
            localStorage.setItem('nightLight', 'enabled');
        } else {
            localStorage.setItem('nightLight', 'disabled');
        }
    });
});

