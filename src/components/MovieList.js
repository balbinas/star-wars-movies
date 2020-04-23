import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 movies">
                    {
                        props.movies.map((movie, i) => {

                            return (
                                <Movie key={i} title={movie.Title} year={movie.Year} image={movie.Poster}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default MovieList;