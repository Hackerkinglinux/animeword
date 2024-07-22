// dark-mode.js

document.addEventListener('DOMContentLoaded', function() {
    const nightLightToggle = document.getElementById('nightLightToggle');
    const body = document.body;

    nightLightToggle.addEventListener('click', function() {
        // Alterna la clase de luz nocturna
        body.classList.toggle('night-light');
    });
});
