document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('p').style.color = ('green');
    document.querySelector('.blue').style.color = ('blue');

    /* 선택 */
    let list1 = document.querySelectorAll('#list1 li');
    list1.forEach((el, idx) => {
        el.textContent += `${idx}🍕textcontent로 추가`
        el.classList.add(`a${idx}`)
        el.style.marginLeft = `${idx}px`
    })
    let list2 = document.querySelector('.theObj');
    list2.innerHTML = `<span>${Math.random()}</span>`;
    list2.setAttribute('date-set', 'accessbillity');
    console.log(list2.getAttribute('class'));//theObj
    document.querySelector('#list2').setAttribute('class', list2.getAttribute('class'));

    const list3 = document.querySelector("#list3");
    const li = `<li>추가한애</li>`
    list3.innerHTML += `<li>innerHTML-list6</li>`
    list3.insertAdjacentHTML('afterbegin', `[afterbegin]${li}`);
    // afterbegin - 장손
    list3.insertAdjacentHTML('beforeend', `[beforeend]${li}`);
    // beforeend -  막둥이
    
    const list3Lis = document.querySelectorAll('#list3 li');
    list3Lis[4].insertAdjacentHTML('beforebegin',`니앞에${li}`) // 니앞에
    list3Lis[4].insertAdjacentHTML('afterbegin',`니뒤에${li}`) // 니뒤에
});