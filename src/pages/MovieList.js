import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.loadMovies = this.loadMovies.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
  }

  async loadMovies() {
    const arrayMovie = await movieAPI.getMovies();
    this.setState({
      movies: arrayMovie, loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
