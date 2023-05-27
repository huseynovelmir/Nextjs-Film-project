import FeaturedMovie from "@/components/Featured-movie/index";
import React from "react";


function MovieContainer({ movie }) {
    return <FeaturedMovie movie={movie} isCompact={false} />;
}

export { MovieContainer };