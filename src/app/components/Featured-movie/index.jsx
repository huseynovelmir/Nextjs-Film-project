import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'
import Image from 'next/image'
function FeaturedMovie({ movie = {}, isCompact = "true" }) {
  const { overview, title, poster_path } = movie
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>

      <p
        className={`${styles.overview} ${isCompact ? styles.shortOverview : ""
          }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>

        <Link className={styles.playButton} href={`/movie/${movie.id}`}>Play</Link>

        <button className={styles.addButton}>+</button>

      </div>

      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          alt={title}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          fill

        />


      </div>
    </div>
  )
}

export default FeaturedMovie