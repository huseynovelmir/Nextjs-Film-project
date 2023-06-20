import React from 'react'
import Categories from '@/components/Categories/index'
import FeaturedMovie from '@/components/Featured-movie/index'
import MoviesSection from '@/components/movies-section/index'


function HomePage({topRatedMovies = [], popularMovies= [], categories,selectedCategory}) {
  let min = Math.floor(Math.random()*10)

  return (
    <div >
      <FeaturedMovie movie={topRatedMovies[0]}/>
      <Categories categories={categories.slice(0,5)}/>
    {selectedCategory.movies.length > 0 && (
      <MoviesSection title={categories.find((genre) => `${genre.id}`== selectedCategory.id)
      .name
    }
   movie={selectedCategory.movies.slice(1, 20)}
    />
    )}
      <MoviesSection title = "Top Rated Movies" movie={topRatedMovies.slice(min , min+10 )}/>
      <MoviesSection title = "Popular Movies" movie={popularMovies.slice(min, min +10)}/>
    </div>
  )
}

export default HomePage