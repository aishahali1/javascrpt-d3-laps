
const movies = [
    {
      title: "The Matrix",
      director: "Wachowski Brothers",
      year: 1999,
      rating: 8.7,
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      rating: 8.8,
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      rating: 8.6,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      rating: 9.2,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      rating: 9.0,
    },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
  ];

  //Q1
  console.log("first movie after 2000");
  let findMovie = movies.find((movie)=> movie.year>2000)
  console.log(findMovie);
  //Q2
  console.log("first movie rating > 9");
  let findRating = movies.find((movie)=> movie.rating>9)
  console.log(findRating);
  //Q3
   console.log("movie by Christopher Nolan");
   let movieByCh = movies.filter((movie)=> movie.director == "Christopher Nolan")
   console.log(movieByCh);
   //Q4
   console.log("first movie before 2010");
   let filterMovie = movies.filter((movie)=> movie.year<2010)
   console.log(filterMovie);
   //Q5
   console.log("movie title array");
   let movieTitleArr = movies.map((movie)=> movie.title)
   console.log(movieTitleArr);
   //Q6
    console.log("median of ratings");
   let ratingsMedian = movies.reduce((acc, curr) => acc + curr.rating, 0)/movies.length;;
   console.log(ratingsMedian);
   //Q7
   console.log("sort by year");
     let sortMovieYear = movies.map((movie)=> movie.year).sort();
     console.log(sortMovieYear);
  //Q8
  console.log("sort by ratings");
     let sortMovieRatings = movies.map((movie)=> movie.rating).sort((b,a)=>a-b);
     console.log(sortMovieRatings);
   //Q9
   console.log("every movie rating>8");
   let everyRating = movies.every((movie)=> movie.rating>8);
   console.log(everyRating);

   //Q10
   console.log("at least one movie year is 1999");
   let someMovieYear = movies.some((movie)=> movie.year = 1999);
   console.log(someMovieYear);

   //Q11
    console.log("every movie directed by one director");
    let everyDirector = movies.every((movie)=> movie.director== "Francis Ford Coppola");
    console.log(everyDirector);
   //Q12
   console.log("at least one movie rating<8.5");
   let someRatings = movies.every((movie)=> movie.rating<8.5);
   console.log(someRatings);
  