const numberOfFilms = +prompt ("How many films have you already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What was one of the last watched films?', ''),
      b = prompt('How would you rate it?', ''),
      e = prompt('What film?', ''),
      f = prompt ('What actor did you like the most?', ''),
      g = prompt ('what your favorite genre?');

personalMovieDB.movies[a] = b;
personalMovieDB.actors[e] = f;
personalMovieDB.genres[0] = g;
console.log(personalMovieDB);