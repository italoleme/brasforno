var brasProduct = {
    init: function(){
        brasProduct.slickNav();
        //brasProduct.productCarrousel();
    },
    slickNav: function(){
        $('._bra-productCarrousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor : '._bra-productCarrousel-nav'
        });
        $('._bra-productCarrousel-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            asNavFor : '._bra-productCarrousel',
            focusOnSelect: true
        });
    },
    productCarrousel: function(){        
        $('._bra-productCarrousel-nav li').on('click', function(){
            $('._bra-productCarrousel').addClass('_active');
        });
    }
}

$(document).ready(function(){
    brasProduct.init();
});