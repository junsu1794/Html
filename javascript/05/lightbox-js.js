/* dom 에서 조작해야 하는 요소를 변수에 저장하기 */
/* 작은이미지 할당 */
const pics = document.querySelectorAll('.pic');
console.log(pics);
const lightbox = document.querySelector('#lightbox');
console.log(lightbox);
const lightImg = document.querySelector('#lightboxImg');

for (let i = 0; i < pics.length; i++) { 
    /* 속성으로, dom 활용 , 메서드 */
    pics[i].addEventListener('click',showLightbox)
}

// 클릭시 열기
function showLightbox(){
    const big = this.getAttribute("data-src");
    console.log(big);
    lightImg.setAttribute('src',big);
    lightbox.style.display='block';
    document.querySelector('html').classList.add('on');
}
//  닫기
lightbox.onclick=function () {
    lightbox.style.display='none';
    document.querySelector('html').classList.remove('on');
};

