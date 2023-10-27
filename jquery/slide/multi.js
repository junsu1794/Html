const slideWrapper = $('.slide_wrapper'); //최상위 부모
const slides = slideWrapper.find('.slides'); // 이동할요소 (li의 부모 ul)
const slide = slides.find('li'); // li 슬라이드
const slideCount = slide.length; //슬라이드의 총 갯수
const slideWidth = slide.width(); //li 각각 너비
const slideGap = 30; // li간격
const prevBtn = slideWrapper.find('.prev');
const nextBtn = slideWrapper.find('.next');
let currentIdx = 0; //초기값
let moveAmt; //slideWidth+slideGap 이동거리
let newSlides; //새 슬라이드 목록을 저장할 변수
const pager = $('.pager');
let pagerHTML = '';
let maxSlides = 3;
let responsiveGap = 20;
let responseWidth;


//슬라이드 복제함수
cloneSlide(); // 호출
function cloneSlide() {
    //:after
    slides.append(slide.clone().addClass('clone'));
    //:before
    slides.prepend(slide.clone().addClass('clone'));
}
//슬라이드 배치함수
slideLayout(slideWidth, slideGap);
function slideLayout(sw, sm) {
    //li 가로배치
    newSlides = $('.slide_wrapper li');
    moveAmt = sw + sm;
    newSlides.each(function (idx) {
        $(this).css({ left: moveAmt * idx + 'px', width: sw + 'px' });
    });
}

//ul 중앙정렬 함수
setSlidePos();
function setSlidePos() {
    const ulMoveAmt = -moveAmt * slideCount;
    slides.css({ transform: `translateX(${ulMoveAmt}px)` });
}

//autoPlay 함수
//이동함수
// setInterval(() => {
//     moveSlide();
// }, 500);
function moveSlide() {
    currentIdx++;
    if (currentIdx > slideCount) {
        slides.css('left', 0);
        currentIdx = 0;
    }
    slides.stop().animate({ left: moveAmt * -currentIdx }, 500, function () {
        $('.clone').css('background', 'red')
    });
}

//콜백을 활용한 이동함수
//정지,재생 함수

let timer = undefined;
autoSlide();
function autoSlide() {
    timer = setInterval(() => {
        moveSlideCb(currentIdx + 1);
    }, 500);
}
function stopSlide() {
    clearInterval(timer);
    timer = undefined;
}

function moveSlideCb(n){
    if(slide.is(':animated')){
        return;
    }
}

function moveSlideCb(n) {
    // $('selector').css({})
    slides.stop().animate({ left: moveAmt * -n }, 500, function () {
        if (currentIdx < slideCount) {
            slides.css('left', 0);
            currentIdx = 0;
        } else if (currentIdx < -(slideCount - 1)) {
            slides.css(left, -moveAmt * slideCount)
            currentIdx = slideCount;
        }
    });
    currentIdx = n;
    console.log(currentIdx);
    console.log(slideCount);
}

//이벤트 핸들러 작성
slideWrapper.on({
    mouseenter: function () {
        stopSlide();
    },
    mouseleave: function () {
        autoSlide();
    },
});
nextBtn.on('click', function () {
    moveSlideCb(currentIdx + 1);
});
prevBtn.on('click', function () {
    moveSlideCb(currentIdx - 1);
});



//페이저버튼

slide.each(function (i) {
    pagerHTML += `<a href="#">${i + 1}<a>`;
});
pager.html(pagerHTML);

pager.find('a').on('click', function (e) {
    e.preventDefault();
    let i = $(this).index();
    console.log(i);
    moveSlideCb(i);
});

//반응형 함수
$(window).resize(function () {
    let winWidth = $(this).width();
    console.log(winWidth);
    if (winWidth < 900) {
        responsiveGap = 10;
        responseWidth = (slides.width() - (responsiveGap * (maxSlides - 1))) / maxSlides;
    } else {
        responseWidth = slideWidth;
        responsiveGap = slideGap;
    }
    if (winWidth <= 500) {
        responseWidth = slides.width();
        responsiveGap = 0;
    }
    slideLayout(responseWidth, responsiveGap);
    setSlidePos();
});