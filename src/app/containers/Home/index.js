import React from 'react'
import Categories from '@/components/Categories'
import Movies from "@/Mocks/Movies.json"
import FeaturedMovie from '@/components/Featured-movie/index'

function HomePage() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}/>
      <Categories movie={Movies.results.slice(0,5)}/>
    </div>
  )
}

export default HomePage