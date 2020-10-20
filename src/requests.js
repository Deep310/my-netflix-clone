const APIKEY = "d7226dd6be04f16c198179681d0ca6d2";

const requests = {
    fetchTrending: `trending/all/day?api_key=${APIKEY}`,
    fetchNetflixOriginals: `discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchActionMovies: `discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies: `discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;