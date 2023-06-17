import React from 'react';
import { notFound } from "next/navigation"

import MovieContainer from '@/containers/movie';
import {getmovie} from "@/services/movie"
 


async function moviePage({ params, searchParams }) {

  const movieDetail = await getmovie(params.id)

  if (!movieDetail) {
    notFound()
  }

  if (searchParams.error === "true") {
    throw new Error("Error happend")
  }

  return (
    <MovieContainer movie={movieDetail} />
  )

}

export default moviePage