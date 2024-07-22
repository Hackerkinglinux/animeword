// carrusel.js

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const intervalTime = 60000; // 1 minuto
    const totalItems = items.length;

    function showNextItem() {
        items[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % totalItems;
        items[currentItem].classList.add('active');
    }

    setInterval(showNextItem, intervalTime);
    items[currentItem].classList.add('active');
});
