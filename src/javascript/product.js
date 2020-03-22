var brasProduct = {
    init: function(){
        brasProduct.slickNav();
        brasProduct.productCarrousel();
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
        $('._bra-productCarrousel').prepend('<div class="_bra-close absolute">'+
        '<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492">'+
        '<defs/>'+
        '<path d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"/>'+
        '</svg>'+
        '</div>')
        $('._bra-close').on('click', function(){
            $(this).parent().removeClass('_active');
        })
    }
}

$(document).ready(function(){
    brasProduct.init();
});