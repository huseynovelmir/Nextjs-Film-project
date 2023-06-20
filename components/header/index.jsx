import React from 'react'
import Link from 'next/link'
import style from "./styles.module.css"

function Header() {
  return (
    <header className={style.header}>
      <Link href="/" className={style.logo}>Find Movie</Link>
    </header>
  )
}

export default Header