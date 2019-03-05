import React, { Component } from "react";

class MovieTitles extends Component {
    render() {
        return (
            <div className="movie-titles">
            <h4>{this.props.children}</h4>
            <p>{this.props.name}</p>
            </div>
        );
    }
}

export default MovieTitles;