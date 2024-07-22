document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showItem(index) {
        items[currentItem].classList.remove('active');
        currentItem = index;
        if (currentItem >= items.length) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = items.length - 1;
        }
        items[currentItem].classList.add('active');
    }

    setInterval(() => {
        showItem(currentItem + 1);
    }, 5000);
});
