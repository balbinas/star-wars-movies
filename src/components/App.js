import React, { Component } from 'react';
import './../App.scss';
import Movie from './Movie';
import axios from 'axios';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  constructor(){
        super()
        this.apiKey = process.env.REACT_APP_API
        this.movieSearch = 'Star+Wars'
        this.state = {
          moviesList: [],
          OGmovies: [],
          yearsList: []
      };
        axios.get(`https://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.movieSearch}&type=movie`)
          .then(res => res.data)
          .then(res => {
              if (!res.Search) {
                  this.setState({ moviesList: [] });
                  return;
              }
              const yearsList = res.Search.map(movie => parseInt(movie.Year));
              const moviesList = res.Search.map(movie => movie.imdbID);
              const OGmovies = moviesList;
              this.setState({
                  moviesList,
                  OGmovies,
                  yearsList
              });
          });
      }

  filter(decade) {
    const moviesList = [];
    this.setState({ moviesList })
    const { OGmovies, yearsList } = this.state;
    if(decade == 0) {
      for(let j=0; j<10; j++) {
        moviesList.push(this.state.OGmovies[j]);
        this.setState({ moviesList });
      }
    } else {
      for(let i=0; i<10; i++) {
        let y = decade + i;
        for(let j=0; j<10; j++) {
          if(yearsList[j] == y) {
            moviesList.push(this.state.OGmovies[j]);
            this.setState({ moviesList });
          }
        }
      }
    }
  }

  render() {
      const { moviesList } = this.state;

      return (
        <div className="App">
        <Container>
          <Row className="justify-content-md-center">
          <h1>Star Wars Movies</h1>
          </Row>
          <Row className="justify-content-md-center">
            <ButtonGroup aria-label="Basic example">
              <Button variant="light" className="decades" onClick={() => this.filter(0)}>All</Button>
              <Button variant="light" className="decades" onClick={() => this.filter(1970)}>1970's</Button>
              <Button variant="light" className="decades" onClick={() => this.filter(1980)}>1980's</Button>
              <Button variant="light" className="decades" onClick={() => this.filter(1990)}>1990's</Button>
              <Button variant="light" className="decades" onClick={() => this.filter(2000)}>2000's</Button>
              <Button variant="light" className="decades" onClick={() => this.filter(2010)}>2010's</Button>
            </ButtonGroup>
          </Row>

         <br />
         
          <Row className="justify-content-md-center">
            <Col xs={7}>
              {moviesList.map(movie => (<Movie movieID={movie} key={movie} />))}
            </Col>
          </Row>
         </Container>
         <br />
     </div>
      );
  }
}

export default App;
