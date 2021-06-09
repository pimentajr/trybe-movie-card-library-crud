import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies, loading: false }));
  }

  // componentDidMount() {
  //   this.listMovies();
  // }

  // async listMovies() {
  //   const movieList = await movieAPI.getMovies();
  //   this.setState({ movies: movieList, loading: false });
  // }
  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
