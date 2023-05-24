import { headers } from 'next/dist/client/components/headers'
import React from 'react'
import { RiMovie2Fill } from 'react-icons/Ri'
import Link from 'next/link'
import style from "./styles.module.css"


function Header() {
  return (
    <header className={style.header}>
    
        <Link href="/" className={style.logo}><RiMovie2Fill />Film</Link>
      <nav className={style.navArea}>
          <Link href="/">Movie</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>

      </nav>

   
    </header>
  )
}

export default Header