import React from 'react';
import PropTypes from 'prop-types';

// Link para renderizar as páginas
import { Link } from 'react-router-dom';

// Componente para renderizar os textos e imagem ao carregar a página
class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <img src={ imagePath } alt="Movie Cover" />
        {/* Link para exibir detalhes em cada card */}
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

// Validação das props referente aos objetos lançados acima
MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};
