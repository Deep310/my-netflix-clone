import axios from './axios';
import React, { useState, useEffect } from 'react';
import './Row.css';

// URL to display images of movies
const base_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {

    const [movies, setMovies] = useState([]);

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

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>

           {/* container => posters */}


        </div>
    )
}

export default Row;
