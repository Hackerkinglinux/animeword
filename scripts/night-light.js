document.addEventListener('DOMContentLoaded', () => {
    const nightLightToggle = document.getElementById('nightLightToggle');
    
    // Recuperar el estado guardado del tema nocturno
    const isNightLight = localStorage.getItem('nightLight') === 'true';
    if (isNightLight) {
        document.body.classList.add('night-light');
        nightLightToggle.classList.add('active');
    }

    nightLightToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-light');
        nightLightToggle.classList.toggle('active');
        
        // Guardar el estado en localStorage
        const isNightLightActive = document.body.classList.contains('night-light');
        localStorage.setItem('nightLight', isNightLightActive);
    });
});
