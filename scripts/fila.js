// fila.js

document.querySelectorAll('.fila-contenedor').forEach(contenedor => {
    const items = contenedor.querySelector('.fila-items');
    const flechaIzquierda = contenedor.querySelector('.flecha-izquierda');
    const flechaDerecha = contenedor.querySelector('.flecha-derecha');

    flechaIzquierda.addEventListener('click', () => {
        items.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    flechaDerecha.addEventListener('click', () => {
        items.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});
