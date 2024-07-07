document.addEventListener('DOMContentLoaded', function() {
    // Carrusel
    let currentIndex = 0;
    const items = document.querySelectorAll('#carousel .carousel-item');
    const itemCount = items.length;

    function showNextItem() {
        items[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % itemCount;
        items[currentIndex].style.display = 'block';
    }

    items.forEach((item, index) => {
        item.style.display = index === 0 ? 'block' : 'none';
    });

    setInterval(showNextItem, 3000);

    // Buscador
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        const animeItems = document.querySelectorAll('#catalogo .anime');

        animeItems.forEach(anime => {
            const title = anime.querySelector('h3').textContent.toLowerCase();
            if (title.includes(filter)) {
                anime.style.display = '';
            } else {
                anime.style.display = 'none';
            }
        });
    });
});

