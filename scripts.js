document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('buscador-input');
    const searchButton = document.getElementById('buscador-btn');
    const animeItems = document.querySelectorAll('.catalogo-animes .anime');

    searchButton.addEventListener('click', () => {
        const searchText = searchInput.value.toLowerCase();
        animeItems.forEach(anime => {
            const title = anime.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchText)) {
                anime.style.display = 'block';
            } else {
                anime.style.display = 'none';
            }
        });
    });

    searchInput.addEventListener('keyup', () => {
        const searchText = searchInput.value.toLowerCase();
        animeItems.forEach(anime => {
            const title = anime.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchText)) {
                anime.style.display = 'block';
            } else {
                anime.style.display = 'none';
            }
        });
    });
});
