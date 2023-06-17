"use client"
import React from 'react'
import Link from 'next/link'
import global from "@/styles/global.module.css"

function error() {
  return (
      <div className={global.notFoundContainer}>
          <h1>Somthing Went Wrong. </h1>
          <h1>Sorry for that!</h1>
          <Link
              className={global.notFounfLink}
              href="/"

          >
              Go home
          </Link>
      </div>
  )
}

export default error