import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onBookmarkedChange, searchText, bookmarkedOnly } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form className="SearchBar">
        <label htmlFor="searchText">Inclui o texto:</label>
        <input
          id="searchText" type="text" value={searchText}
          onChange={onSearchTextChange}
        />
        <input
          id="bookmarkedOnly" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}
        />
        <label htmlFor="bookmarkedOnly">Mostrar somente favoritos</label>
        <label htmlFor="selectedGenre">Filtrar por gênero</label>
        <select
          id="selectedGenre" value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
