import React from 'react'
import HomeContainer from "@/containers/Home"
import Movies from "@/mocks/Movies.json"

  async function delay(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms))
  }

 async function HomePage({params}) {
  await delay(2000)
    let selectedCategory;

    if (params.category?.length > 0) {
        selectedCategory = true;
    }
  return (
   <HomeContainer 
   selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0,7) : [],
  }}/>
  );
}

export default HomePage