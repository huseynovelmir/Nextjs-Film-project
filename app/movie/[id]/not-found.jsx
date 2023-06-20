import React from "react";
import Link from "next/link";
import global from "@/styles/global.module.css"

function Movie404() {
  return (
    <div className={global.notFoundContainer}>
      <h1>We couldn't find the movie you looking for!</h1>
      <Link
        className={global.notFounfLink}
        href="/"
      >
        Go home
      </Link>
    </div>
  );
}

export default Movie404;