// 轮播图js
var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});