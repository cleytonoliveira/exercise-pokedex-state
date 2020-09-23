import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedPokemon: 0,
    }
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon() {
    const { selectedPokemon } = this.state;
    (selectedPokemon < pokemons.length -1) ?
    this.setState((previousPokemon) => ({
      selectedPokemon: previousPokemon.selectedPokemon + 1,
    })) :
    this.setState((previousPokemon) => ({
      selectedPokemon: 0,
    }))
  }

  render() {
    const { pokemons } = this.props;
    const { selectedPokemon } = this.state;
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemons[selectedPokemon]} />
        <button onClick={this.nextPokemon}>Próximo pokémon</button>
      </div>
    );
  }
}

export default Pokedex;