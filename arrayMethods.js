
const moviesData=[
  {title:"dance monkey",year:2014,rating:4.0},
  {title:"dance",year:2015,rating:4.4},
  {title:"commando",year:2013,rating:4.5},
  {title:"x-men",year:2017,rating:5.0},
  {title:"venom",year:2018,rating:5.5},
  {title:"shaw-shank",year:2013,rating:6.0}
]

//array.filter()
console.log(moviesData.filter(function(movie){
  return movie.year>2015&&movie.rating>=4.0
}))


//array.map
console.log(moviesData.map(function(movie){
  return  movie.year>2012&&movie.rating>3
}))

//array.find
console.log(moviesData.find(function(movie){
  return  movie.year>2012&&movie.rating>3
}))

//array.forEach
console.log(moviesData.forEach(function(movie){
  return movie.title
}))

//array.reduce
console.log(moviesData.reduce(function(currentTotal,movie){
  return currentTotal+movie.rating
},0))