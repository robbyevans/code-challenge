//write a function that takes an array of objects and returns an array of 
//movies with year not less than 2018 and rating not less than 4.0

const movies=[
  {title:"spider-monkey",year:2018,rating:4.5},
  {title:"wasp",year:2020,rating:4.0},
  {title:"captain-america",year:2012,rating:3.5},
  {title:"pirates",year:2014,rating:5.5},
]

function movieFilter(movies,year,rating){
  return(movies.filter(function(movie){
    if(movie.year>=year && movie.rating>=rating){
      return movie
    }
  }))
}

console.log(movieFilter(movies,2018))