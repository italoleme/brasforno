var brasProduct = {
    init: function(){
        brasProduct.slickNav();
        brasProduct.productCarrousel();
        brasProduct.aos();
        brasProduct.dataGroup();
    },
    slickNav: function(){
        $('._bra-productCarrousel').not('._bra-close').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor : '._bra-productCarrousel-nav'
        });

        $('._bra-productCarrousel-nav').each(function(){
            if($(this).find('li').length <= 1){
                $(this).hide()
            }else{
                $('._bra-productCarrousel-nav').slick({
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    asNavFor : '._bra-productCarrousel',
                    focusOnSelect: true
                });
            }
        })
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
        AOS.init();
    },
    dataGroup: function(){
        $("[data-group]").each(function() {
            var t = ($(this).find("[data-target]"),$(this).find("[data-click]")),
                     a = "active";
            t.click(function(t) {
                $("[data-click]").removeClass(a)
                $("[data-target]").removeClass(a)
                t.preventDefault();
                var i = $(this).data("click"),
                    o = $('[data-target="' + i + '"]');
                $(this).hasClass(a) ? (o.removeClass(a),
                $(this).removeClass(a)) : (o.addClass(a),
                $(this).addClass(a))
            })
        })
    }
}

$(document).ready(function(){
    brasProduct.init();
});