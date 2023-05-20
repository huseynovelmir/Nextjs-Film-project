import React from 'react'
import MovieContainer from '@/containers/movie'
import Movie from "@/Mocks/Movies.json"

function MoviePage({params}) {
  const movieDetail = Movie.results.find(movie => movie.id === params.id)
  console.log(params);
  return (
    <div>MoviePage</div>
  )
}

export default MoviePage