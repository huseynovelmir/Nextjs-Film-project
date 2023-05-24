import React from 'react'
import HomeContainer from "@/containers/Home/index"
import Movies from "@/Mocks/Movies.json"
const API_URL = 'https://www.themoviedb.org/'

console.log(process.env.API_KEY);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTU2NDUwNjk0ZTU0ODMwNTIyYzcxODU4NDA1NTY1MCIsInN1YiI6IjY0NmNjMTdjNTRhMDk4MDEzODY1YmY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AXVmams4pGLsjfBsRCFXWybzDYaZXnyfXTYR9TdSUdE'
  }
};
const getPopularMovies = async () => {
  const rest = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}language=en-US&page=1`, options)
    .then(response => response.json())
  const data =await rest.json()
  console.log(data);
}

async function HomePage({params}) {
  await getPopularMovies()

  return (
    <div>HomePage</div>
  )
}

export default HomePage