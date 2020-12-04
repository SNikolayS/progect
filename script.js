"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }

}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }

}
writeYourGenres();


function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        var a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt('На сколько оцените его?');
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
    // console.log(personalMovieDB);
}

// rememberMyFilms();


function detectPersonalLevel() {
    let c = (personalMovieDB.count < 10) ? "Просмотрено довольно мало фильмов" :
        (personalMovieDB.count > 10 || personalMovieDB.count < 30) ? "Вы классический зритель" :
        (personalMovieDB.count > 30) ? "Вы киноман" : "Произошла ошибка";

    console.log(c);
}

// detectPersonalLevel();
