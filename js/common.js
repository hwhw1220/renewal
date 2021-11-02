// 로딩창
$(window).on('load', function(){
    var i = 0;
    var timer = setInterval(add, 25)

    function add(){
        i++
        if (i>=100) {
            clearInterval(timer)
            $('.introAni').animate({ left:'-100%' }, 500, function(){ $(this).hide() } )
        }
        $('.introAni div').eq(1).text(i+'%')
    }
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

// 클릭하면 맨위로
$('.to_top').on('click', function(){
    $('html, body').animate({
        scrollTop:0
    }, 600)
    return false
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

$('.foot_list a').on('click', function(){
    if ( !$('.menu1').hasClass('on')) {
        $('.menu1').addClass('on')
    } else {
        $('.menu1').removeClass('on')
    }
    return false;
})

$(window).on("load", function(){
    $(".grid").isotope({
        filter:".mv",
        layoutMode:'masonry',
        itemSelector:'.item',
    })
})

$(".singer1 li").on("click", function(){
    var filterValue = $(this).attr("data-filter")
    $(".grid").isotope({
        filter:filterValue,
        layoutMode:'masonry',
        itemSelector:'.item',
    })
    $(".mv").hide()
})

// js에서 디바이스 화면 사이즈를 판단하는 프로그램
// 화면사이즈에 따라서 800 이상이면 html에 pc 클래스를 추가하고
// 800 미만이면 html에 mobile 클래스를 추가하여 판단함
// 여기서부터
var deviceSize1 = 800;
function scrollOX(status) {
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws

if (swd>0) {
    deviceSize1 = deviceSize1 - swd
}
var winWidth = $(window).width()

function init() {
    if (winWidth >= 800) {
        $('html').addClass('pc').removeClass('mobile')
    } else {
        $('html').addClass('mobile').removeClass('pc')
    }
}

init()
$(window).on('resize', function(){
    winWidth = $(this).width()
    init()
})
// 여기까지 화면사이즈별 액션을 구분하기 위한 프로그램

// 800이하 화면일 때 메뉴 링크 안타지게 하기
$('.navi > li > a').on('click', function(){
    if($('html').hasClass('mobile')) {
        $(this).next().next().toggleClass('on')
        $(this).parent().siblings().find('.depth2').removeClass('on')
        return false
    }
})
$('.logo .ham').on('click', function(){
    $('html, body').css({
        overflowY:'hidden'
    })
    $('body').append('<div class="pcmobcover"></div>')
    $('.pcmobcover').css({
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,0)',
        zIndex:'999'
    }).animate({
        backgroundColor:'rgba(0,0,0,0.7)'
    },500)
    $('#header .pcmob').addClass('on')
})

$('#header .top i').on('click', function(){
    $('#header .pcmob').removeClass('on')
    $('.pcmobcover').remove()
    $('html, body').css({
        overflowY:'auto'
    })
})

// 열기
$('.logo .ham').on('click', function(){
    $('#header .pcmob').addClass('on')
})

// 닫기
$('#header .top i').on('click', function(){
    $('#header .pcmob').removeClass('on')
})
