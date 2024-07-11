$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;

    function showItem(index) {
        items.removeClass('active');
        items.eq(index).addClass('active');
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        showItem(currentIndex);
    }

    $('.carousel-next').click(nextItem);
    $('.carousel-prev').click(prevItem);

    setInterval(nextItem, 5000); // Cambia de imagen cada 5 segundos
});
    