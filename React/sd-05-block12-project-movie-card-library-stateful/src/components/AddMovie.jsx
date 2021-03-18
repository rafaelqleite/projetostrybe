import React from 'react';

function SelectFunction({ value, onChange }) {
  return (
    <div>
      <label htmlFor="selectedGenre">Gênero</label>
      <br />
      <select
        id="selectedGenre" name="genre" value={value}
        onChange={onChange}
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </div>
  );
}

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.resetaEstados = this.resetaEstados.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle(event) {
    const { name, value } = event.target;
    this.setState({ [name]: (name === 'rating') ? parseFloat(value) : value });
    console.log(this.state);
  }

  resetaEstados() {
    const onClick = this.props.onClick;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    return (
      <form className="AddMove">
        <label htmlFor="a">Título</label>
        <input id="a" name="title" type="text" value={title} onChange={this.onChangeHandle} />
        <label htmlFor="b">Subtítulo</label>
        <input id="b" type="text" name="subtitle" value={subtitle} onChange={this.onChangeHandle} />
        <label htmlFor="c">Imagem</label>
        <input
          id="c" type="text" name="imagePath" value={imagePath}
          onChange={this.onChangeHandle}
        />
        <label htmlFor="d">Sinopse</label>
        <textarea id="d" name="storyline" value={storyline} onChange={this.onChangeHandle} />
        <label htmlFor="e">Avaliação</label>
        <input type="number" id="e" name="rating" value={rating} onChange={this.onChangeHandle} />
        <SelectFunction onChange={this.onChangeHandle} value={genre} />
        <br />
        <button type="button" onClick={this.resetaEstados}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
