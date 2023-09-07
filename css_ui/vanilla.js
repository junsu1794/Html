/* es6 */
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
// let navLinks=document.querySelector("li");
let navLinks = document.querySelector("li");

hamMenuIcon.addEventListener('click', function () {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
});

/*자바스크립트에서 데이터가 여러개(배열,객체)일때는 반복문
  forEach 는 배열의 데이터를 하나씩 꺼내어 순회하는 함수
*/
navLinks.forEach(function (x) {
    x.navLinks.addEventListener('click', function () {
        navBar.classList.remove('active');
        hamMenuIcon.classList.toggle('fa-times');
    });
});
