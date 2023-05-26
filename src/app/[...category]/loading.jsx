import React from "react";

import FeatureMovieLoading from "@/components/Featured-movie/index";
import CategoriesLoading from "@/components/Categories/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";
function HomeLoading() {
    return (
        <>
            <FeatureMovieLoading />
            <CategoriesLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />

        </>
    );
}

export default HomeLoading;