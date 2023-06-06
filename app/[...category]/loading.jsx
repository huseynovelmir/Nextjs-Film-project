import React from "react";

import CategoriesLoading from "@/components/Categories/loading";
import FeatureMovieLoading from "@/components/Featured-movie/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";


function HomeLoading() {


    return (
        <div>
            <FeatureMovieLoading/>
            <CategoriesLoading/>
            <MoviesSectionLoading />
            <MoviesSectionLoading />
            
        </div>
    );
}

export default HomeLoading;