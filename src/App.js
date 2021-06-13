import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies/new">New Movie</Link>
        </nav>

        <Switch>
          <Route exact path="/movies/new" render={ () => <NewMovie /> } />
          <Route exact path="/movies/:id" render={ () => <MovieDetails /> } />
          <Route exact path="/movies/:id/edit" render={ () => <EditMovie /> } />
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
