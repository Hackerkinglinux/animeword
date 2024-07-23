document.addEventListener('DOMContentLoaded', function () {
    const prevButtons = document.querySelectorAll('.prev');
    const nextButtons = document.querySelectorAll('.next');

    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            const container = button.nextElementSibling;
            container.scrollBy({ left: -200, behavior: 'smooth' });
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const container = button.previousElementSibling;
            container.scrollBy({ left: 200, behavior: 'smooth' });
        });
    });
});
