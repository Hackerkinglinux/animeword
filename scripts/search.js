
// scripts/search.js
$(document).ready(function () {
    const animes = [
        { title: "One Piece", genre: "accion", status: "emision", url: "one-piece.html" },
        { title: "Kaiju No 8", genre: "accion", status: "emision", url: "kaiju-no-8.html" },
        { title: "Sousou No Frieren", genre: "fantasia", status: "emision", url: "sousou-no-frieren.html" },
        { title: "Solo Leveling", genre: "accion", status: "finalizado", url: "solo-leveling.html" },
        { title: "The Boys and The Heron", genre: "fantasia", status: "finalizado", url: "el-nino-y-la-garza.html" },
    ];

    const fuse = new Fuse(animes, {
        keys: ['title', 'genre', 'status'],
        threshold: 0.3
    });

    $('#searchForm').on('submit', function (e) {
        e.preventDefault();
        const searchText = $('#searchInput').val();
        const genre = $('#genreSelect').val();
        const status = $('#statusSelect').val();

        let results = fuse.search(searchText);

        if (genre) {
            results = results.filter(result => result.item.genre === genre);
        }

        if (status) {
            results = results.filter(result => result.item.status === status);
        }

        displayResults(results);
    });

    function displayResults(results) {
        const resultsContainer = $('#searchResults');
        resultsContainer.empty();

        if (results.length > 0) {
            results.forEach(result => {
                const item = result.item;
                const resultItem = $(`
                    <div class="search-result-item" data-url="${item.url}">
                        <h3>${item.title}</h3>
                        <p>Género: ${item.genre}</p>
                        <p>Estado: ${item.status}</p>
                    </div>
                `);
                resultItem.on('click', function () {
                    window.location.href = $(this).data('url');
                });
                resultsContainer.append(resultItem);
            });
        } else {
            resultsContainer.append('<p>No se encontraron resultados</p>');
        }
    }
});
