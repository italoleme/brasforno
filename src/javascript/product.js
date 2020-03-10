var brasProduct = {
    init: function(){
        brasProduct.slickNav();
    },
    slickNav: function(){
        $('._bra-productCarrousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor : '._bra-productCarrousel-nav'
        });
        $('._bra-productCarrousel-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            asNavFor : '._bra-productCarrousel',
            focusOnSelect: true
        });
    }
}

$(document).ready(function(){
    brasProduct.init();
});