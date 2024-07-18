$(document).ready(function () {
    // Lista de animes simulada
    const animes = [
        { nombre: 'One Piece', genero: 'accion', estado: 'emision' },
        { nombre: 'Kaiju No 8', genero: 'accion', estado: 'emision' },
        { nombre: 'Sousou No Frieren', genero: 'aventura', estado: 'emision' },
        { nombre: 'Solo Leveling', genero: 'accion', estado: 'emision' },
        { nombre: 'The Boys and The Heron', genero: 'fantasia', estado: 'finalizado' },
        { nombre: 'Crunchyroll', genero: 'aventura', estado: 'emision' }
    ];

    const fuse = new Fuse(animes, {
        keys: ['nombre'],
        threshold: 0.3 // Ajusta este valor según el nivel de coincidencia que desees
    });

    $('#searchForm').on('submit', function (e) {
        e.preventDefault();

        const searchInput = $('#searchInput').val().toLowerCase();
        const genreSelect = $('#genreSelect').val();
        const statusSelect = $('#statusSelect').val();

        const searchResults = fuse.search(searchInput).map(result => result.item);

        const filteredAnimes = searchResults.filter(anime => {
            const matchesGenre = genreSelect === "" || anime.genero === genreSelect;
            const matchesStatus = statusSelect === "" || anime.estado === statusSelect;
            return matchesGenre && matchesStatus;
        });

        displayResults(filteredAnimes);
    });

    function displayResults(animes) {
        const resultsContainer = $('#searchResults');
        resultsContainer.empty();

        if (animes.length > 0) {
            animes.forEach(anime => {
                const animeElement = `<div class="anime-result">
                    <h3>${anime.nombre}</h3>
                    <p>Género: ${anime.genero}</p>
                    <p>Estado: ${anime.estado}</p>
                </div>`;
                resultsContainer.append(animeElement);
            });
            $('.anime-result').hide().fadeIn(500);
        } else {
            resultsContainer.append('<p>No se encontraron resultados</p>').hide().fadeIn(500);
        }
    }
});
