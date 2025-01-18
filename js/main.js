$(function () {
    $('.slider-box').slick({
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow-prev" src="images/icon-arrow-prev.svg" alt="arrow-prev" >',
        nextArrow: '<img class="slider-arrow slider-arrow-next" src="images/icon-arrow-next.svg" alt="arrow-next" >',
        responsive: [
            {
              breakpoint: 641,
              settings: {
                arrows: false
              }
            }
        
        ]
    });

    $('.menu-btn').on('click', function () {
        $('.menu-list').toggleClass('menu-list-active');
    });
 });