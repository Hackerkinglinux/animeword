// dark-mode.js

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const nightLightToggle = document.getElementById('nightLightToggle');

    // Load saved preferences
    const darkMode = localStorage.getItem('darkMode') === 'enabled';
    const nightLight = localStorage.getItem('nightLight') === 'enabled';

    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    if (nightLight) {
        document.body.classList.add('night-light');
    }

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Night Light Toggle
    nightLightToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-light');
        if (document.body.classList.contains('night-light')) {
            localStorage.setItem('nightLight', 'enabled');
        } else {
            localStorage.setItem('nightLight', 'disabled');
        }
    });
});
