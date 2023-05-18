
import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'
function Categories({movie = {}}) {



  return (
    <div className={styles.categories}>
      {movie.map((category) => (
      
        <Link
          key={category.Title}
          className={styles.category}
          href={category.Title}
        >
          <div className={styles.name}>{category.Genre.split(' ')[0].slice(0,-1)}</div>
   
        </Link>
      ))}
      
      </div>
  );
}

export default Categories