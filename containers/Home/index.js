import React from 'react'
import Categories from '@/components/Categories/index'
import Movies from "@/mocks/Movies.json"
import FeaturedMovie from '@/components/Featured-movie/index'
import MoviesSection from '@/components/movies-section/index'
import Genres from "@/mocks/Genres.json"

function HomePage() {

  return (
    <div >
      <FeaturedMovie movie={Movies.results[0]}/>

      <Categories categories={Genres.genres.slice(0,5)}/>
      <MoviesSection title = "Popular Films" movie={Movies.results.slice(0,10)}/>
      <MoviesSection title = "Your Favorites" movie = {Movies.results.slice(10, 20)}/>

    </div>
  )
}

export default HomePage