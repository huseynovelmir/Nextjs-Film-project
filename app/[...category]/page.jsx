import React from 'react'
import HomeContainer from "@/containers/Home"
import Movies from "@/mocks/Movies.json"



const getPopularMovies = async () => {

 

  const res = await fetch(`${process.env.API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`);

  const data = await res.json()
  console.log(res);
}




 async function HomePage({ params }) {
  


  let selectedCategory;
  await getPopularMovies()

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