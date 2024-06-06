// Placeholder for future JavaScript/jQuery code
$(document).ready(function () {
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    const container = document.querySelector('.carousel-3d__container');
    const prevButton = document.querySelector('.carousel-3d__prev');
    const nextButton = document.querySelector('.carousel-3d__next');
    let currentIndex = 0;

    function rotateCarousel() {
        const angle = 360 / 5; // 5 items in the carousel
        container.style.transform = `rotateY(${-angle * currentIndex}deg)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 5; // 5 items in the carousel
        rotateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 5) % 5; // 5 items in the carousel
        rotateCarousel();
    }

    setInterval(nextSlide, 3000); // Automatic rotation every 3 seconds

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});

document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 1;
    const totalSlides = 5;

    setInterval(() => {
        document.getElementById('s' + currentIndex).checked = true;
        currentIndex = (currentIndex % totalSlides) + 1;
    }, 3000); // Change slide every 2 seconds
});
