import React from 'react';
import Movies from "@/mocks/Movies.json"
import  MovieContainer  from '@/containers/Home/index';
import { notFound } from "next/navigation"

function moviePage({ params, searchParams }) {
console.log(params.id);
  const movieDetail = Movies.results.find(
    movie => movie.id == params.id);
 
    if (!movieDetail) {
      notFound()
      
    }
    if(searchParams.error==="true"){
      throw new Error("Error happend")
    }
    return (
      <MovieContainer movie={movieDetail} />
      )
      
}

export default moviePage