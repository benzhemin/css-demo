(function(){

    $(function(){
        var mSwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: 2000,
            pagination: '.swiper-pagination'
        });

        $('img.lazy, div.lazy').lazyload({
            effect : "fadeIn"
        });
    });
})();