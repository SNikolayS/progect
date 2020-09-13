"use strict";



/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */




let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms ==null || isNaN(numberOfFilms)){
           numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
         }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  

function remembarMyFilms(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            
            
              if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                  } else {
                console.log('error');
                   i--;                //Вернутся на 1 повторение(итнрацию цикла назад)
                  }
                }

    }

    // remembarMyFilms();

function detectPersonalLevel(){
        const c = (personalMovieDB.count <= 10) ? 'Просмотренно довольно мало фильмов' :
        (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? 'Вы классический зритель' :
        (personalMovieDB.count >= 30) ? 'Вы киноман': 'Произошла ошибка';
        console.log(c);

    }
    // detectPersonalLevel();
 
    function showMyDB (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
    
    showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <=3; i++) {
const genre = prompt(`Ваш любимый жанр под номером ${i}`);
personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();

    /*
       if (personalMovieDB.count < 10) {
        console.log ('Просмотренно довольно мало фильмов');
       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
           console.log ('Вы классический зритель');
           } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
           } else {
            console.log('Произошла ошибка');
           }
           
*/

/*  
const count = 9;
 
switch (true) {
    case count< 10:
        console.log ('Просмотренно довольно мало фильмов');
        break;
    case count >= 10 && count < 30 :
        console.log ('Вы классический зритель');
        break;
    case count >= 30 :
        console.log ('Вы киноман');
        break;
    default :
        console.log ('Произошла ошибка');
 
 
}
*/


                                                                  //    Циклы
/*

let num = 50;
while (num < 55) {
       console.log (num);
       num++;
}
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 30; i++ ) {
    if ( i === 14 ) {
    break;
}
console.log (i);

}

*/
//                                                 Функции
//........................................................................................
/*let num = 10;
function showFirstMessage(text){
     console.log(text);
     num = 20;

}

showFirstMessage('Hello World!');
console.log(num);
*/

/*
function calc(a, b) {
    return (a + b);
}

console.log(calc(1, 2));
console.log(calc(1, 3));
console.log(calc(1, 4));
*/

//...............................................................Методы
/*
const logg ='Hello world';
// console.log(logg.slice(6));
console.log(logg.substr(4, 6));     //Сколько символов вырезать(Начиная с 4-й 6 символов вырезать)

const num = '12.2';
console.log(Math.round(num));                       Если дробная часть числа больше, либо равна 0,5, 
                                                     аргумент будет округлён до ближайшего большего  целого.
const test = 12.2;
console.log(parseFloat(test));                      Функция parseFloat() принимает строку в качестве аргумента
                                                        и возвращает десятичное число (число с плавающей точкой)
*/

