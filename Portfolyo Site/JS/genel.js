$(document).ready(function(){
    $(window).scroll(function(){
        // hareketli_navbar açılması
        if(this.scrollY > 20){
            $('.navbar').addClass("hareketli_navbar");
        }else{
            $('.navbar').removeClass("hareketli_navbar");
        }
    });


    $('.navbar .menu li a').click(function(){
        // smooth geçiş
        $('html').css("scrollBehavior", "smooth");
    });

    // burger menu
    $('.menu_butonu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu_butonu i').toggleClass("active");
    });

    // çalışmalar kısmı kayan kısım
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
