import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.filteredMovies = this.filteredMovies.bind(this);
    this.addMovieCallBack = this.addMovieCallBack.bind(this);
  }

  addMovieCallBack(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    if (bookmarkedOnly) {
      return movies.filter((filme) => filme.bookmarked);
    }

    if (selectedGenre) {
      return movies.filter((filme) => filme.genre === selectedGenre);
    }
    if (searchText) {
      return (movies.filter((filme) => filme.title.includes(searchText) ||
        filme.subtitle.includes(searchText) || filme.storyline.includes(searchText)));
    }

    return this.state.movies;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(e) => this.setState({ bookmarkedOnly: e.target.checked })}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />

        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={this.addMovieCallBack} />
      </div>
    );
  }
}

export default MovieLibrary;
