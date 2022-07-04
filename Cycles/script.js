// for (let i=5;i<=10;i++) {
//     console.log(i);
// } 

// for (let i=20;i=>10;i--) {
//     console.log(i);
//     if (i === 13) {
//         break;
//     }
// } 

// for (let i = 2; i<=10;i++) {
//     if (i%2 !== 0) {
//         continue;
//     } else {
//         console.log(i);
//     }    
// }

// let num = 2;

// while (num <= 15) {
//     num++;
//     if (num % 2 === 0) {
//         continue;
//     } else {
//         console.log(num);
//     }
// }

// let arr = [];
// let j = 0;

// first: for (let i=5;i<=10;i++) {
//             arr[j] = i;
//             j++;
// } 

// console.log(arr);


// ___________________________________________________________________
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i=0; i < arr.length; i++) {
//     result[i] = arr[i];
// }



// const data = [5, 10, 'Shopping', 20, 'Homework'];


// for (let i=0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else {
//             data[i] = data[i] + " - done";
//         }
//     }



// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let j = 0;

// for (let i=data.length; i > -1; i--) {
//     if (data[i] === undefined) {
//         continue;
//     }
//     result[j] = data[i];
//     j++;
// }

// console.log(result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);


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


// const lastFilm1 = prompt('Один из поледних просмотренных фильмов?', "");
// personalMovieDB.movies[lastFilm1] = prompt('На сколько цените его?', "");
// const lastFilm2 = prompt('Один из поледних просмотренных фильмов?', "");
// personalMovieDB.movies[lastFilm2] = prompt('На сколько цените его?', "");







console.log(personalMovieDB.movies);