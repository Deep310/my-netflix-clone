import axios from './axios';
import React, { useState, useEffect } from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// URL to display images of movies
const base_URL = "https://image.tmdb.org/t/p/original/";
const APIKEY = "d7226dd6be04f16c198179681d0ca6d2";


function Row({ title, fetchURL, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    // this snippet of code runs based on a conditional variable
    useEffect(() => {
        // if [] are empty, run once when the row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(fetchURL);
                
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerURL){
            setTrailerURL("");
        }
        else{
            console.log(movie)

            {/*fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
            .then(response => response.json())
            .then(data => console.log(data))
            .then(console.log(2))*/}
            
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                setTrailerURL(urlParams.get("v"));
            })

            .catch( (error) => console.log(error) );
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        key={movie.id} 
                        onClick={() => handleClick(movie)} 
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} 
                    />
                ))}
            </div>

            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}

        </div>
    )
}

export default Row;
