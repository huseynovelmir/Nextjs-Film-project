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



export {
    fetchMovieApi,
    gettopRatedMovies,
    getpopularMovies,
}