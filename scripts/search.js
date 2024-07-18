$(document).ready(function() {
    $('#searchForm').on('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores de los campos del formulario
        const searchQuery = $('#searchInput').val().toLowerCase();
        const genre = $('#genreSelect').val();
        const status = $('#statusSelect').val();
        
        // Limpiar resultados de búsqueda anteriores
        $('#searchResults').empty();
        
        // Simulación de datos de anime (esto debería reemplazarse con una llamada a una API o base de datos)
        const animes = [
            { nombre: 'One Piece', genero: 'accion', estado: 'emision' },
            { nombre: 'Kaiju No 8', genero: 'accion', estado: 'finalizado' },
            { nombre: 'Solo Leveling', genero: 'aventura', estado: 'emision' },
            { nombre: 'Sousou No Frieren', genero: 'drama', estado: 'emision' },
            { nombre: 'El Niño y La Garza', genero: 'fantasia', estado: 'finalizado' },
            // Agrega más datos de anime según sea necesario
        ];
        
        // Filtrar animes según los criterios de búsqueda
        const filteredAnimes = animes.filter(anime => {
            const matchName = anime.nombre.toLowerCase().includes(searchQuery);
            const matchGenre = genre ? anime.genero === genre : true;
            const matchStatus = status ? anime.estado === status : true;
            return matchName && matchGenre && matchStatus;
        });
        
        // Mostrar los resultados de la búsqueda
        if (filteredAnimes.length > 0) {
            filteredAnimes.forEach(anime => {
                $('#searchResults').append(`
                    <div class="anime-result">
                        <h3>${anime.nombre}</h3>
                        <p>Género: ${anime.genero}</p>
                        <p>Estado: ${anime.estado}</p>
                    </div>
                `);
            });
        } else {
            $('#searchResults').append('<p>No se encontraron resultados</p>');
        }
    });
});
