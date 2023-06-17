import React from 'react'
import Categories from '@/components/Categories/index'
import FeaturedMovie from '@/components/Featured-movie/index'
import MoviesSection from '@/components/movies-section/index'


function HomePage({topRatedMovies = [], popularMovies= [], categories,selectedCategory}) {

  return (
    <div >
      <FeaturedMovie movie={topRatedMovies[0]}/>

    {selectedCategory.movies.length > 0 && (
      <MoviesSection title={categories.find((genre) => `${genre.id}`== selectedCategory.id)
      .name
    }
   movie={selectedCategory.movies.slice(1, 10)}
    />
    )}
      <Categories categories={categories.slice(0,5)}/>
      <MoviesSection title = "Top Rated Movies" movie={topRatedMovies.slice(10,20)}/>
      <MoviesSection title = "Popular Movies" movie={popularMovies.slice(0,10)}/>

    </div>
  )
}

export default HomePage