import React from 'react'
import HomeContainer from "@/containers/Home"
import Header from '@/components/header'
import {
  fetchMovieApi,
  gettopRatedMovies,
  getpopularMovies,
  getcategories,
  getdiscover,
} from "@/services/movie"

async function HomePage({ params }) {
  
  let selectedCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    gettopRatedMovies(),
    getpopularMovies(),
    getcategories(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getdiscover(params.category[0]);
    selectedCategory = results
  }

  return (
    <>
    <HomeContainer
    topRatedMovies={topRatedMovies}
    popularMovies={popularMovies}
    categories={categories}
    selectedCategory={{
      id: params.category?.[0] ?? "",
      movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
    }} />
    </>
  );

}

export default HomePage