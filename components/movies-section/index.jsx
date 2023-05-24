import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./styles.module.css"

function MoviesSection({ movie, title }) {
  // console.log(movie);
  return (

    <div className={styles.movieSection}>
      <h3 className={styles.title}>{title}</h3>

        <div className={styles.movies}>
           {movie.map((films) => (
          <div className={styles.movie} key={films.id}>
            <Link href={`/movie/${films.id}`}>
              <Image
                fill
                unoptimized
                   src={`https://image.tmdb.org/t/p/original${films.poster_path}`}
                   

                alt={films.title}
              />

            </Link>

          </div>
        ))}
        </div>




    </div>
  )
}

export default MoviesSection