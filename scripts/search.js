$(document).ready(function () {
    const animes = [
        // Acción
        { title: "One Piece", genre: "accion", status: "emision", url: "one-piece.html" },
        { title: "Kaiju No 8", genre: "accion", status: "finalizado", url: "kaiju-no-8.html" },
        { title: "Sousou No Frieren", genre: "fantasia", status: "finalizado", url: "sousou-no-frieren.html" },
        { title: "Solo Leveling", genre: "accion", status: "finalizado", url: "solo-leveling.html" },
        { title: "The Boys and The Heron", genre: "fantasia", status: "finalizado", url: "el-nino-y-la-garza.html" },
        { title: "My Hero Academia", genre: "accion", status: "emision", url: "my-hero-academia.html" },
        { title: "Black Clover", genre: "accion", status: "emision", url: "black-clover.html" },

        // Comedia
        { title: "Gintama", genre: "comedia", status: "finalizado", url: "gintama.html" },
        { title: "Nichijou", genre: "comedia", status: "emision", url: "nichijou.html" },
        { title: "KonoSuba", genre: "comedia", status: "finalizado", url: "konosuba.html" },
        { title: "Saiki Kusuo no Psi-nan", genre: "comedia", status: "emision", url: "saiki-kusuo.html" },
        { title: "Grand Blue", genre: "comedia", status: "finalizado", url: "grand-blue.html" },
        { title: "Asobi Asobase", genre: "comedia", status: "emision", url: "asobi-asobase.html" },
        { title: "Danshi Koukousei no Nichijou", genre: "comedia", status: "emision", url: "danshi-koukousei.html" },
        { title: "Sket Dance", genre: "comedia", status: "emision", url: "sket-dance.html" },
        { title: "Working!!", genre: "comedia", status: "emision", url: "working.html" },
        { title: "Barakamon", genre: "comedia", status: "emision", url: "barakamon.html" },
        { title: "Ouran High School Host Club", genre: "comedia", status: "emision", url: "ouran-highschool.html" },
        { title: "School Rumble", genre: "comedia", status: "emision", url: "school-rumble.html" },
        { title: "Lucky Star", genre: "comedia", status: "emision", url: "lucky-star.html" },
        { title: "Toradora!", genre: "comedia", status: "emision", url: "toradora.html" },
        { title: "Azumanga Daioh", genre: "comedia", status: "emision", url: "azumanga-daioh.html" },
        { title: "Seitokai Yakuindomo", genre: "comedia", status: "emision", url: "seitokai-yakuindomo.html" },
        { title: "Baka to Test to Shoukanjuu", genre: "comedia", status: "emision", url: "baka-to-test.html" },
        { title: "Hinamatsuri", genre: "comedia", status: "emision", url: "hinamatsuri.html" },
        { title: "Arakawa Under the Bridge", genre: "comedia", status: "emision", url: "arakawa-under-the-bridge.html" },
        { title: "Kaguya-sama: Love is War", genre: "comedia", status: "emision", url: "kaguya-sama.html" },

        // Aventura
        { title: "One Piece", genre: "aventura", status: "emision", url: "one-piece.html" },
        { title: "Naruto", genre: "aventura", status: "finalizado", url: "naruto.html" },
        { title: "Attack on Titan", genre: "aventura", status: "finalizado", url: "attack-on-titan.html" },
        { title: "Fullmetal Alchemist: Brotherhood", genre: "aventura", status: "finalizado", url: "fullmetal-alchemist.html" },
        { title: "Dragon Ball", genre: "aventura", status: "emision", url: "dragon-ball.html" },
        { title: "Hunter x Hunter", genre: "aventura", status: "emision", url: "hunter-x-hunter.html" },
        { title: "Made in Abyss", genre: "aventura", status: "emision", url: "made-in-abyss.html" },
        { title: "Vinland Saga", genre: "aventura", status: "finalizado", url: "vinland-saga.html" },
        { title: "Re:Zero", genre: "aventura", status: "emision", url: "re-zero.html" },
        { title: "Sword Art Online", genre: "aventura", status: "finalizado", url: "sword-art-online.html" },
        { title: "Isekai Quartet", genre: "aventura", status: "emision", url: "isekai-quartet.html" },
        { title: "No Game No Life", genre: "aventura", status: "emision", url: "no-game-no-life.html" },
        { title: "The Rising of the Shield Hero", genre: "aventura", status: "emision", url: "the-rising-of-the-shield-hero.html" },
        { title: "Mushoku Tensei", genre: "aventura", status: "emision", url: "mushoku-tensei.html" },
        { title: "Tower of God", genre: "aventura", status: "emision", url: "tower-of-god.html" },
        { title: "Magi: The Labyrinth of Magic", genre: "aventura", status: "emision", url: "magi.html" },
        { title: "Fate/stay night", genre: "aventura", status: "emision", url: "fate-stay-night.html" },
        { title: "JoJo's Bizarre Adventure", genre: "aventura", status: "emision", url: "jojo.html" },
        { title: "Dororo", genre: "aventura", status: "emision", url: "dororo.html" }
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

    // Mostrar y ocultar el buscador avanzado y limpiar resultados
    $('#searchIcon').on('click', function() {
        var searchBox = $('.advanced-search');
        searchBox.toggle();
        if (!searchBox.is(':visible')) {
            clearSearchResults();
        }
    });

    function clearSearchResults() {
        $('#searchResults').empty();
        $('#searchInput').val('');
        $('#genreSelect').val('');
        $('#statusSelect').val('');
    }
});
