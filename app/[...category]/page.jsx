import React from 'react'
import HomeContainer from "@/containers/Home"
import Movies from "@/mocks/Movies.js"
function HomePage({params}) {
    let selectedCategory;
    if (params.category?.length > 0) {
        selectedCategory = true;
    }
  return (
   <HomeContainer
  
   />
  );
}

export default HomePage