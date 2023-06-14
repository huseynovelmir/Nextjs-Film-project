import React from 'react'
import Categories from '@/components/Categories/index'
import Movies from "@/mocks/Movies.json"
import FeaturedMovie from '@/components/Featured-movie/index'
import MoviesSection from '@/components/movies-section/index'
import Genres from "@/mocks/Genres.json"

function HomePage({topRatedMovies = [], popularMovies= [],categories}) {

  return (
    <div >
      <FeaturedMovie movie={Movies.results[0]}/>

    {/* {sellectedCategory.movies.length > 0 && (
      <MoviesSection title={Genres.genres.find((genre) => `${genre.id}`== sellectedCategory.id)
      .name
    }
    movie={sellectCategory.movie}
    />
    )} */}
      <Categories categories={categories.slice(0,5)}/>
      <MoviesSection title = "Top Rated Movies" movie={topRatedMovies.slice(10,20)}/>
      <MoviesSection title = "Popular Movies" movie={popularMovies.slice(0,10)}/>

    </div>
  )
}

export default HomePage