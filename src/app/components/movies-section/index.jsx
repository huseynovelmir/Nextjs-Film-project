import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./styles.module.css"

function MoviesSection({ movie = {}, title }) {
  return (

    <div>
      <h3>{title}</h3>
      {movie.map((films) => (

      <div>
        <div>
          <Link>
          <Image/>
          </Link>
          saa
        </div>
      </div>

        ))}



    </div>
  )
}

export default MoviesSection