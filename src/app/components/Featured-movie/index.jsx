import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'
import Image from 'next/image'
function FeaturedMovie({movie = {} }) {
  const { Plot, Title, Images } = movie
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{Title}</h1>
      <p className={styles.movieOverview}>{Plot}</p>
      <div className={styles.actionButtons}>

        <Link className={styles.playButton} href='/'>Play</Link>

        <button className={styles.addButton}>+</button>

      </div>

      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
      <Image
        unoptimized
        alt={Title}
            src={Images[1]}
        fill
      
      />

       
      </div>
    </div>
  )
}

export default FeaturedMovie