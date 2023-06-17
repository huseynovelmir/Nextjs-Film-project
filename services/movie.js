const fetchMovieApi = async (pathname, query = "") => {
    try {
        const res = await fetch(
            `${process.env.API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
        );
        return res.json();
    } catch (error) {
        throw new Error(error)
    }

};





const gettopRatedMovies = async () => {
    return fetchMovieApi("/movie/top_rated", "page=1");
};

const getpopularMovies = async () => {
    return fetchMovieApi("/movie/popular", "page=1");
};

const getcategories = async () => {
    return fetchMovieApi("/genre/movie/list", "page=1")
}

const getdiscover = async (genreId) => {
    return fetchMovieApi("/discover/movie", `with_genres=${genreId}`)
}
const getmovie = async (movieId) => {
    return fetchMovieApi (`/movie/${movieId}`)
}
export {
    fetchMovieApi,
    gettopRatedMovies,
    getpopularMovies,
    getcategories,
    getdiscover,
    getmovie,
}