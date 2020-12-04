'use strict';

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";


const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelectorAll('.heart'), //первый элемент
    wrapper = document.querySelector('.wrapper');

























// box.style.backgroundColor = 'blue';
// box.style.width = '100%';

// box.style.cssText = `background-color:blue; width: 50%`;

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// // for (let i = 0; i<hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'blue';
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');         //Редко используемое

//div.classList.add('black');               //Добавить определенный класс

//document.body.append(div);              //Помещаем элемент в конец
//wrapper.append(div);
//  wrapper.prepend(div);                //Помещаем элемент вначале
// hearts[0].before(div);                //Перед первым сердечком
// hearts[0].after(div);                    //После первого сердечка

// circles[0].remove();                    //Удаляет элемент

// hearts[0].replaceWith(circles[0]);               //Замена одного элемента другим

// div.innerHTML = '<h1>Hello World</h1>';        //Работа с текстом и тегами
// div.textContent = 'Hello World';             //Работа только с текстом

//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');      //Использовать данные html перед элементом
//div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');       //Вставляет html код вначало элемента
//div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');         //Вставляет html код перед концом эл..
//div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');          //Вставляет html код вконце эл...