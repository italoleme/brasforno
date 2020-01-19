let brasProduct = {
    init: function(){
        brasProduct.slickNav();
    },
    slickNav: function(){
        $('._bra-productCarrousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor : '._bra-nav-productCarrousel'
        });
        $('._bra-nav-productCarrousel').slick({
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