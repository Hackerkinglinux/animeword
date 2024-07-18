// scripts/dark-mode.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');
    toggleDarkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelector('.advanced-search').classList.toggle('dark-mode');
        document.querySelector('.anime-row').classList.toggle('dark-mode');
        document.querySelector('.carousel-container').classList.toggle('dark-mode');
    });
});
