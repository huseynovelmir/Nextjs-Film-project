import React from 'react'
import HomeContainer from "@/containers/Home"
import Movies from "@/mocks/Movies.json"
import {
  fetchMovieApi,
  gettopRatedMovies,
  getpopularMovies,
} from "@/services/movie"



async function HomePage({ params }) {


  let selectedCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories }

  ] = await Promise.all([

    gettopRatedMovies(),
    getpopularMovies(),

  ]);
  console.log(topRatedMovies);


  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}

      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }} />
  );

}

export default HomePage