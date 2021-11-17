const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  const filmTitles = []
  this.films.forEach((film) => {
    filmTitles.push(film.title)
  })
  return filmTitles
};

Cinema.prototype.findByTitle = function(filmTitle) {
    const result = this.films.find((film) => {
      return film.title === filmTitle;
    });
    return result;
  };

Cinema.prototype.filterByGenre = function(genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.checkFilmsYear = function(year){
  const result = this.films.some((film) => {
    return film.year === year;
  });
  return result;
}


module.exports = Cinema;
