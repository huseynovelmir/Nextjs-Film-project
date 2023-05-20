import React from 'react'
import Categories from '@/components/Categories'
import Movies from "@/Mocks/Movies.json"
import FeaturedMovie from '@/components/Featured-movie/index'
import MoviesSection from '@/components/movies-section'
import Genres from "@/Mocks/Genres.json"
import styles from "./styles.module.css"
function HomePage() {
  return (
    <div className={styles.HomePage}>
      <FeaturedMovie movie={Movies.results[0]}/>
    
      <Categories categories={Genres.genres.slice(0,5)}/>
      <MoviesSection 
      title = "Popular Films"
      movie={Movies.results.slice(0,10)}/>
        < MoviesSection
        title = "Your Favorites"
        movie = {
          Movies.results.slice(10, 20)
        }
        />
    </div>
  )
}

export default HomePage