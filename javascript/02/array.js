//생성
let srt = [];
// .length 배열이 갖고 있는 속성 : 요소의 총 길이를 반환
srt = '안녕하세요'; // srt 변수초기화
document.write(`${srt}<br>`)
document.write(`${srt[1]}<br>`)
document.write(`${srt[1 + 1]}<br>`)
document.write(`${srt[4]}<br>`)
document.write(`${srt[1 * 4]}<br>`)
document.write(`${srt[srt.length - 1]}<br>`)
console.log(srt.length);
const array = [243, 'String', true, function () { }, {}, [256, 789]]
console.log(array);

let arr = [];
arr[0] = 'zero';
arr[2] = 'two';
console.log(arr[1]);

let arr1 = [, , ,];
let arr2 = new Array('강아지', '고양이');
console.log(arr2);
arr2.forEach(function (item, index) {
    document.getElementById("forof").innerHTML += `${index} : ${item} <br>`
})
