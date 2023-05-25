import React from 'react'
// import HomeContainer from "@/containers/Home/index"
// import Movies from "@/Mocks/Movies.json"
const API_URL = 'https://www.themoviedb.org/'


const getPopularMovies = async () => {
  const rest = await fetch(`${API_URL}3/movie/top_rated?language=en-US&page=1`, `${API_KEY }`)
  .then(response => response.json())
  const data =await rest.json()
  console.log(data);
}

async function HomePage({params}) {
  console.log(API_URL);

  

  await getPopularMovies()

  return (
    <div>HomePage</div>
  )
}

export default HomePage