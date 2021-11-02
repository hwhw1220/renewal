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
    autoplay:true,
    fade:false,
        }
    }]
})


// 스크롤
$(window).on('scroll', function(){
    let sct = $(this).scrollTop()
    if (sct > 500) {
        $('.to_top').addClass('on')
    } else {
        $('.to_top').removeClass('on')
    }
})
var newsnear = $('.news').offset().top-$(window).height()/2

$(window).on('scroll', function(){
    let sct = $(this).scrollTop()
    if (sct > 500) {
        $('.snsnone').addClass('on')
    } else {
        $('.snsnone').removeClass('on')
    }
    if (sct >= newsnear) {
        $('.news1, .news2, .news3').addClass('on')
    } else {
        $('.news1, .news2, .news3').removeClass('on')
    }
})


// 미니슬라이드 팝업 창으로
// $('.miniSld').on('click', function(){
//     var src = $(this).find('img').attr('src')
//     $('body').append(`<div class="outerbox"><div class="innerbox"><img src="${src}" alt=""></div></div>`)
//     $('.outerbox').css({
//         position:'fixed',
//         top:0,
//         left:0,
//         right:0,
//         bottom:0,
//         backgroundColor:'rgba(0,0,0,0.5)'
//     })
//     $('.innerbox').css({
//         position:'absolute',
//         top:'50%',
//         left:'50%',
//         transform:'translate(-50%, -50%)'
//     })
// })

$('.miniSld').on('click', function(){
    var src = $(this).find('img').attr('src')
    $('.model img').attr('src', src)
})