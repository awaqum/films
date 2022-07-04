'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastFilm1 = prompt('Один из поледних просмотренных фильмов?', "");
personalMovieDB.movies[lastFilm1] = prompt('На сколько цените его?', "");
const lastFilm2 = prompt('Один из поледних просмотренных фильмов?', "");
personalMovieDB.movies[lastFilm2] = prompt('На сколько цените его?', "");

// console.log(personalMovieDB);