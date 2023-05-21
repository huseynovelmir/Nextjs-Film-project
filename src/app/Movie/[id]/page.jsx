import React from 'react';
import Movies from "@/Mocks/Movies.json"
import { MovieContainer } from '@/containers/Home/movie';

function moviePage({params}) {
    const movieDetail = Movies.results.find(movie =>movie.id.toString() ===params.id)
  return (
   <MovieContainer movie={movieDetail}/>
  )
}

export default moviePage