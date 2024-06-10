

// Placeholder for future JavaScript/jQuery code
$(document).ready(function () {
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});


const myCarousel = new Carousel({
    container: document.querySelector('.slider'),
    items: document.querySelectorAll('.slider__item'),
    displayControls: true,
    controlsContainer: document.querySelector('.slider__controls'),
    textControls: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTime: 3000
});
