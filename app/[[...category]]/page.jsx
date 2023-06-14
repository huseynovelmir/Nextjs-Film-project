import React from 'react'
import HomeContainer from "@/containers/Home"
import Movies from "@/mocks/Movies.json"


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`
  }
};


const getTopretedmovie = async () => {
  const rest = await fetch(
    `${process.env.API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );


  return rest.json()


}





async function HomePage({ params }) {


  let selectedCategory;
  const { results: topRatedmovie } = await getTopretedmovie();



  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      topRatedmovie={topRatedmovie}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }} />
  );

}

export default HomePage