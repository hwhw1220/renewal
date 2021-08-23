$('.slideInner').slick({
    autoplay:true,
    arrows:false,
    dots:true,
    fade:true,
    speed:1000,
    autoplaySpeed:5000,
    pauseOnHover:false,
    responsive:[{
    breakpoint:801,
    settings:{
    autoplay:false,
    fade:false,
        }
    }]
})

$(".sns li a").eq(0).click(function(e){
    e.preventDefault()
    $("body").toggleClass('bgon').css({
        'transition':'all 0.3s'
    })
    $(".sns li").eq(0).toggleClass('on').css({
        'transition':'all 0.3s'
    })
})