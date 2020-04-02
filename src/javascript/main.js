var tabletWidth = 768,
    isMobileWidth = window.matchMedia("(max-width: " + (tabletWidth - 1) + "px)").matches,

bras = {
    init: function() {
        bras.hover();
        bras.nav();
        bras.bannerPrincipal();
        bras.mobileNav();
        bras.closed();
        bras.imgNav();
    },
    hover: function() {
        var _isopen = '_is-open';
        $('._bra-nav>li').hover(function() {
            $(this).addClass(_isopen);
        },
        function() {
            $(this).removeClass(_isopen); 
        }
        );
    },
    nav: function(){
        $('._bra-burguer').on('click', function(){
            if(!$(this).hasClass('_active')){
                $(this).addClass('_active');
                $(this).parents('header').find('nav').addClass('_active');
            }else{
                $(this).removeClass('_active');
                $(this).parents('header').find('nav').removeClass('_active');
            }
        });
           
    },
    imgNav: function(){
        $('._bra-link').hover(function(){
            var dataImg = $(this).attr('data-img');
            $(this).parents('._container').find('picture').find('.img-responsive').attr('src', dataImg);
            $(this).parents('._container').find('picture').find('source').attr('srcset', dataImg);
        });        
    },
    bannerPrincipal: function(){
        $('._bra-banner-principal').slick({
            arrows: false,
            dots: true,
            autoplay: true
        });
    },
    mobileNav: function(){
        if(isMobileWidth){
            $('._bra-nav .link').on('click', function(e){
                e.preventDefault();
            });
        }
    },
    closed: function(){
        $('._bra-closed').on('click', function(){
            $(this).parents('li').removeClass('_is-open');
        })        
    }
}

$(document).ready(function() {
    bras.init();
});