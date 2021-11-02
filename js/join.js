$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
})
$('#birthday').datepicker({
    changeMonth:true,     // 월 선택
    changeYear:true,      // 연도 선택
    yearRange:'1900:2021'   // 연도 범위
}).attr({
    autocomplete:'off'
})

$('input[type=radio] + label, input[type=checkbox] + label').attr({
    tabindex:'0'
})

$('#anote_all').on('click', function(){
    let check = $(this).prop("checked")
    // console.log(check)
    $('input[id^="anote"]').prop('checked', check)
})