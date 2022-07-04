'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if ( numberOfFilms < 30) {
    alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

 for (let i=1; i <= numberOfFilms; i++) {
    const lastFilm = prompt('Один из поледних просмотренных фильмов?', "");
    if (lastFilm === '') {
        i--;
    } else if (lastFilm.length > 50) {
        i--;
    } else if (lastFilm === null) {
        i--;
    } else {
        personalMovieDB.movies[lastFilm] = prompt('На сколько цените его?', "");
    }
   
}

// console.log(personalMovieDB);