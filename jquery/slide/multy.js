$(() => {
    /*변수지정*/
    const slideWrapper = $('.slide_wrapper');
    const slides = slideWrapper.find('.slides');
    const slide = slides.find('li');
    const slideCount = slide.length;
    let currentIdx = 0;
    const slideWidth = slide.width(); // li의 너비
    const slideMargin = 30; // li의 간격
    let moveAmt; // 움직일 거리
    let maxSlides = 3; // 보여줄 갯수
    let newSlides; //복제한 요소를 새로 저장할 변수
    let newSlideWidth;
    let timer = undefined;


    slides.append(slide.clone().addClass('clone'));
    slides.prepend(slide.clone().addClass('clone'));

    // 슬라이드 가로 배치 함수
    function slideLayout(sw, sm) {
        newSlides = $('.slide_wrapper li');
        moveAmt = sw + sm;
        newSlides.each(function (i) {
            $(this).css({ left: moveAmt * i, width: sw });
        });
    }
    slideLayout(slideWidth, slideMargin);

    //슬라이드 중앙정렬 함수
    function setSlidePos() {
        const ulMoveAmt = -(slideWidth + slideMargin) * slideCount;
        slides.css({ transform: `translateX(${ulMoveAmt}px)` });
    }
    setSlidePos();

    //슬라이드 이동 함수
    function moveSlide(num) {
        moveAmt = slideWidth + slideMargin
        slides.stop().animate({ left: -moveAmt * num }, 500,);
    }

    //오토플레이
    autoPlay();
    function autoPlay() {
        if (timer == undefined) {
            timer = setInterval(() => {
                currentIdx++;
                if (currentIdx == slideCount) {
                    currentIdx = 0;
                }
                moveSlide(currentIdx);
            }, 3000)
        }
    }
    //정지
    function stopPlay() {
        clearInterval(timer);
        timer = undefined;
    }
    slideWrapper.on({
        mouseenter: function () { stopPlay() },
        mouseleave: function () { autoPlay() },
    });
    //컨트롤
    //페이저
    //반응형
});