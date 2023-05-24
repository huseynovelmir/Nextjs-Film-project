import React from 'react'
import styles from "./styles.module.css"

function loading() {
  return (
      <div className={styles.loaderContainer}>

        <div class={styles.loader}></div>
    </div>
  )
}

export default loading