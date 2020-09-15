"use strict";
                    /*    Работа с переменными
let num = 3;
alert (num);

let a = 10,
    b = 2;
    alert (a + b);
    alert (a * b);
    alert (a - b);
    alert (a / b);
   

  let c = 15,
      d = 2;
  let result = c + d;
  alert(result);

let a = 10,
    b = 2,
    c = 5;
    let result = a + b + c;
    alert(result);
    
let a = 17,
    b = 10;
let c = a - b;
let result = c;
console.log(result); 

                    //    Робота со строками


let str1 = 'Привет',
    str2 = 'мир!';
console.log(str1 + ' ' + str2);

let nam = 'Kolek',
    age = 41;
console.log('Привет' + ' ' + nam);
console.log('Мне' + ' ' + age + ' ' + 'лет' ); 

                                               //Функция Prompt

const answer = prompt('Your name');
alert (`Ваше имя ${answer}`);
*/
for (let i = 0; i < 1; i++) {
const num = prompt('Узнайте квадрат числа:','');
if (isNaN(num) == true || num == 0 || num == '') {
    alert('Вы не ввели число или ввели 0.Введите пожалуйсто число');
    i--;
} else {
const a = Math.pow (num, 2);

alert (a);
}
}

                                                //Обращение к символам строки

// const str = 'abcde';

