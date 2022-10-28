// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(el => el.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result2 =  array.filter(el => el.director == director );
  console.log("EXERCICE 2 ->", result2);
  return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result =  array.filter(el => el.director == director);
  let result3 = result.reduce((acc, el) => acc += el.score, 0);
  console.log("EXERCICE 3 ->", result3);
  return Number((result3 / result.length).toFixed(2)) ;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result =  array.map(el => el.title);
  let result1 = result.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

      if(a > b) {
        return 1;
      }
      if(a < b) {
        return -1;
      }
      return 0;
  }).slice(0, 20);
  console.log("EXERCICE 4 ->", result1);
  return result1;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let copyArray = [].concat(array);
  let result1 = copyArray.sort((a, b) => {

    if(a.year > b.year) {
      return 1;
    }
    if(a.year < b.year) {
      return -1;
    }
    if(a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    if(a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  console.log("EXERCICE 5 ->", result1);
  return result1;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
     let result =  array.filter(el => el.genre.includes(genre));
     let result1 = result.reduce((acc, el) => acc += el.score, 0);
     let result2 = result.filter(el => el.score === '');
     let result3 = result1 / (result.length - result2.length);
     let result4 = Number((result3).toFixed(2));

  console.log("EXERCICE 6 ->", result1);
  return result4;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
