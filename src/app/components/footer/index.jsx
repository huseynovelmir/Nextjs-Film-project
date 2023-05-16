import React from 'react'
import Link from 'next/link'
import styles from "./styles.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with 🤍 by&nbsp;
      <Link href='https://github.com/huseynovelmir' className={styles.link}>  Elmir Huseynov </Link>
      

    </footer>
  )
}

export default Footer