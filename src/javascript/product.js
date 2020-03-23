var brasProduct = {
    init: function(){
        brasProduct.slickNav();
        brasProduct.productCarrousel();
        brasProduct.aos();
    },
    slickNav: function(){
        $('._bra-productCarrousel').not('._bra-close').slick({
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
            $('._bra-close').addClass('_active');
        });
        $('._bra-close').on('click', function(){
            $(this).next().removeClass('_active');
            $(this).removeClass('_active');
        })
    },
    aos: function(){
        if($(window).width() > 768){
            AOS.init();
        };
    }
}

$(document).ready(function(){
    brasProduct.init();
});