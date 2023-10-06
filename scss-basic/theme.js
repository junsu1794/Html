let theme = $('#theme');
/*
1. option 값을 취득하는 함수
선택된 option 상태선택자 : selected
2. 1.에서 취득한 값을 css 에 전달하는 함수
*/
theme.on('change', function () {
    // console.log($(this).find('option:selected').val());
    let val = $(this).find('option:selected').val();
    console.log("val", val);
    swichTheme(val);
});
function swichTheme(theme) {
    const body = $('body');
    body.removeClass('dark-theme gray-theme  light-theme')
    if (theme == 'dark') {
        body.addClass('dark-theme');
    } else if (theme == 'gray') {
        body.addClass('gray-theme');
    } else {
        body.addClass('light-theme');
    }
}