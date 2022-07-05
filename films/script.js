'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i=1; i<=3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}
writeYourGenres();

function rememberMyFilms() {
    for (let i=1; i <= numberOfFilms; i++) {
        const lastFilm = prompt('Один из поледних просмотренных фильмов?', "");
        const ratingLastFilm = prompt('На сколько цените его?', "");
        if (lastFilm === '' ||  lastFilm.length > 50 || lastFilm === null || ratingLastFilm === '' ||  ratingLastFilm.length > 50 || ratingLastFilm === null) {
            i--;
        } else {
            personalMovieDB.movies[lastFilm] = ratingLastFilm;
        }
    }    
} 

rememberMyFilms ();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if ( numberOfFilms < 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();