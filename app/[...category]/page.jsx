import React from 'react'
import HomeContainer from "@/containers/Home"
import Movies from "@/mocks/Movies.json"

const API_URL = 'https://api.themoviedb.org/3'
console.log(API_URL, "hello");
// const getPopularMovies = async () => {
//   const res = await fetch(
//     `${API_URL}/movie/popular?language=en-US&page=1`, `${process.env.API_KEY}`
//     );

//   const data = await res.json()
//   console.log(data);
// }


function HomePage({ params }) {



  let selectedCategory;
  // await getPopularMovies()

  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }} />
  );
}

export default HomePage