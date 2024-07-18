$(document).ready(function () {
    // Mostrar el buscador al hacer clic en el botón
    $('#showSearchButton').on('click', function () {
        $('#searchContainer').toggleClass('hidden');
    });

    const animes = [
        { nombre: 'One Piece', genero: 'accion', estado: 'emision' },
        { nombre: 'Kaiju No 8', genero: 'accion', estado: 'emision' },
        { nombre: 'Sousou No Frieren', genero: 'aventura', estado: 'emision' },
        { nombre: 'Solo Leveling', genero: 'accion', estado: 'emision' },
        { nombre: 'The Boys and The Heron', genero: 'fantasia', estado: 'finalizado' },
        { nombre: 'Crunchyroll', genero: 'aventura', estado: 'emision' }
    ];

    const options = {
        keys: ['nombre']
    };
    const fuse = new Fuse(animes, options);

    $('#searchForm').on('submit', function (e) {
        e.preventDefault();

        const searchInput = $('#searchInput').val().toLowerCase();
        const genreSelect = $('#genreSelect').val();
        const statusSelect = $('#statusSelect').val();

        const result = fuse.search(searchInput);
        let filteredAnimes = result.map(({ item }) => item);

        if (genreSelect) {
            filteredAnimes = filteredAnimes.filter(anime => anime.genero === genreSelect);
        }

        if (statusSelect) {
            filteredAnimes = filteredAnimes.filter(anime => anime.estado === statusSelect);
        }

        displayResults(filteredAnimes);
    });

    function displayResults(animes) {
        const resultsContainer = $('#searchResults');
        resultsContainer.empty();

        if (animes.length > 0) {
            animes.forEach(anime => {
                const animeElement = `<div class="anime-result" data-anime="${anime.nombre}">
                    <h3>${anime.nombre}</h3>
                    <p>Género: ${anime.genero}</p>
                    <p>Estado: ${anime.estado}</p>
                </div>`;
                resultsContainer.append(animeElement);
            });

            // Hacer que cada resultado redirija a una página específica
            $('.anime-result').on('click', function () {
                const animeName = $(this).data('anime');
                window.location.href = `/${animeName}.html`; // Ajusta esto según tu estructura de URLs
            });
        } else {
            resultsContainer.append('<p>No se encontraron resultados</p>');
        }
    }
});
