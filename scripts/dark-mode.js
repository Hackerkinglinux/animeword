// scripts/dark-mode.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');

    toggleDarkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Aplicar o quitar la clase 'dark-mode' a los elementos relevantes
        document.querySelectorAll('header, footer, .advanced-search, .anime-row, .carousel-container')
                .forEach(el => el.classList.toggle('dark-mode'));
    });
});
