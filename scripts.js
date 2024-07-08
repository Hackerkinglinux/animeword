$(document).ready(function(){
    let currentIndex = 0;
    let items = $('#carousel .carousel-item');
    let itemAmt = items.length;

    function cycleItems() {
        let item = $('#carousel .carousel-item').eq(currentIndex);
        items.hide();
        item.css('display','inline-block');
    }

    let autoSlide = setInterval(function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }
        cycleItems();
    }, 3000);
});

