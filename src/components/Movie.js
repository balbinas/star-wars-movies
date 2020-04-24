import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class Movie extends Component {

    apiKey = process.env.REACT_APP_API

    state = {
        movieData: {}
    };

    componentDidMount() {
        axios.get(
                `https://www.omdbapi.com/?apikey=${this.apiKey}&i=${
                    this.props.movieID
                }`
            )
            .then(res => res.data)
            .then(res => {
                this.setState({ movieData: res });
            });
    }

    render() {
        const {
            Title,
            Released,
            Rated,
            Plot,
            Poster,
            Runtime,
            imdbID
        } = this.state.movieData;
        const imdbSite = `https://www.imdb.com/title/${imdbID}/`

        return (
            <div className="movie-card-container">
                <div className="image-container">
                    <div className="image">
                        <img src={Poster} />
                    </div>
                </div>
                <div className="movie-info">
                    <h5>{Title}</h5>
                    <div className="tags-container">
                        <span>{Rated}</span>
                        <span className="runtime">{Runtime}</span>
                        <span className="release">{Released}</span>
                    </div>
                    <p>{Plot}</p>
                    <div className="visit-button">
                        <Button href={imdbSite} variant="warning">View on IMDB</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;