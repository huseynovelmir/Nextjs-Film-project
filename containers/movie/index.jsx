import FeaturedMovie from "@/components/Featured-movie";
import React from "react";


function MovieContainer({ movie }) {

    return <FeaturedMovie movie={movie} isCompact={false} />;
}

export default MovieContainer;