const large = document.querySelector('#large');
const small = document.querySelectorAll('.small');

small.forEach((el) => {
    el.addEventListener('click', function () {
        let change = this.src;
        large.setAttribute('src', change);
    });
});

// const view = document.querySelector('#view');
// const detail = document.querySelectorAll('#detail');

// detail.forEach((el) => {
//     el.addEventListener('click', function () {
//         let change = this.;
//         view.setAttribute('click', block);
//     });
// });

// 상세 설명 보기
document.querySelector('#view').addEventListener('click', function () {
    document.querySelector('#detail').style.display = 'block';
});



// function displaySrc() {
//     alert('이미지주소' + large.getAttribute('src'));
// }