import React, { Component, useState } from 'react';
import './../App.scss';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import MovieList from './MovieList';
// import MovieInfo from './MovieInfo';

// function App() {
  

//   constructor() {
//     super()
//     this.state = {
//       movies: [],
//       year: 1970
//     }
//     this.apiKey = process.env.REACT_APP_API;
//     // fetch(`http://www.omdbapi.com/?s=Star+Wars&apikey=${this.apiKey}`)
//     // .then(data => data.json())
//     // .then(data => {
//     //   this.setState({ movies: [...data.results]})
//     // })
//     const [books, setBooks] = . useState(null);
//     const apiURL = 'http://www.omdbapi.com/?s=Star+Wars&apikey=217a5d88'
//     const fetchData = async () => {
//       const response = await axios.get(apiURL)
  
//       setBooks(response.data) 
//     }
//   }

//   handleClick() {
    
    
//     // fetch(`http://www.omdbapi.com/?s=Star+Wars&apikey=217a5d88`)
//     // .then(data => data.json())
//     // .then(data => {
//     //   console.log(data)
//     //   // this.setState({ movies: [...data.Search]})
//     // })
//     // e.preventDefault()
//     // const years = this.state.squares.slice();
//     // if(years == '70') {
//     //     return;
//     // }
//     // squares[i] = this.state.xIsNext ? 'X' : 'O';
//     // this.setState({
//     //     squares: squares,
//     //     xIsNext: !this.state.xIsNext,
//     // })
//     // for(let j=0; j<10; j++) {
//     //   `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`
//     // }
// }

//   // render (){
//     return (
//     <div className="App">
//       <h1>Star Wars Movies</h1>
//       <ButtonGroup aria-label="Basic example">
//         <Button variant="light" onClick={fetchData}>1970's</Button>
//         <Button variant="light">1980's</Button>
//         <Button variant="light">1990's</Button>
//         <Button variant="light">2000's</Button>
//         <Button variant="light">2010's</Button>
//       </ButtonGroup>
//     )
//   // }
// }

// export default App;

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
    this.apiKey = process.env.REACT_APP_API
  }

  fetchData = async () => { 
    fetch(`http://www.omdbapi.com/?s=Star+Wars&apikey=${this.apiKey}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: data.Search})
      console.log(data)
    })
  }

  // const [movies, setMovies] = useState(null);

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     ''
  //   )
  //   .then(response => response.data.Search.map( movie => ({
  //     title: `${movie.Title}`,
  //     year: `${movie.Year}`,
  //     poster: `${movie.Poster}`,
  //     imdb: `${movie.imdbID}`
  //   }))
  //   )

  //   setMovies(response)
  //   console.log(response)
  // };

  render() {

  return (
    <div className="App">
      <h1>Star Wars Movies</h1>
       <ButtonGroup aria-label="Basic example">
         <Button variant="light">1970's</Button>
         <Button variant="light">1980's</Button>
         <Button variant="light">1990's</Button>
         <Button variant="light">2000's</Button>
         <Button variant="light">2010's</Button>
       </ButtonGroup>

      {/* Fetch data from API */}
      <div>
      <Button variant="info" onClick={() => this.fetchData()}>Get data</Button>
      <MovieList movies={this.state.movies}/>
      {/* <Button variant="primary" onClick={fetchData}>Get data</Button> */}
        <br />
      </div>

      {/* <div className="movies"> */}
        {/* {movies && movies.map(movie => {
          const { title, year, poster, imdb } = movie;
            return (
              <div className="movie" key={imdb}>
                <h4>{title}</h4>

                <div className="details">
                  <p>⏰: {year}</p>
                  <p>imdb: {imdb}</p>
                  <a url="http://www.omdbapi.com/?i={imdb}&apikey=217a5d88">imdb: http://www.omdbapi.com/?i={imdb}&apikey=217a5d88</a>
                  <img className="poster" src={poster} alt="Logo" />
                  <Button variant="primary" onClick={() => this.getMovie(movie)}>Get movie info</Button>
                </div>
              </div>
            );
          })} */}
        {/* {movies &&
          movies.map((movie, index) => {
            return (
              <div className="movie" key={index}>
                <h4>{movie.Title}</h4>

                <div className="details">
                  <p>⏰: {movie.Year}</p>
                  <p>imdb: {movie.imdbID}</p>
                  <img className="poster" src={movie.Poster} alt="Logo" />
                  <Button variant="primary" onClick={() => this.getMovie(movie)}>Get movie info</Button>
                </div>
              </div>
            );
          })} */}
      {/* </div> */}
      {/* <div className="movies">
        <MovieList movies={this.state.movies}></MovieList>
      </div> */}

    </div>
  );
    }
}

export default App;
