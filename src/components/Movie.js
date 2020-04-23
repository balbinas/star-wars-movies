import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Movie = (props) => {
    return (
        <div className="col-12">
        <Card style={{ width: '50rem' }} className="movie">
            <Card.Body>
                <div className="poster card-image">
                    <img src={props.image}/>
                </div>
                <Card.Title>{props.title} ({props.year})</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
            <div className="card">
                <h3></h3>
                <div className="card-image">
                    <img src={props.image}/>
                </div>
            </div>
        </div>
    )
}

export default Movie;