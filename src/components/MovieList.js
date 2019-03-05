import React, { Component } from "react";
import MovieTitles from "./MovieTitles";

class MovieList extends Component {
    render() {
        const movieNodes = this.props.data.map(movieTitles => {
            return (
                <MovieTitles name={movieTitles.name} key={movieTitles.id}>{movieTitles.url}></MovieTitles>
            );
        });

        return (
            <div className="movie-list">
            {movieNodes}
            </div>
        );
    }
}

export default MovieList;