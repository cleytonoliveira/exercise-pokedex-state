import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import Button from './Button';

import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedPokemon: 0,
      selectedType: null,
    }
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterListPokemon = this.filterListPokemon.bind(this);
    this.filteredType = this.filteredType.bind(this);
    this.listFilteresPokemon = this.listFilteresPokemon.bind(this);
  }

  nextPokemon(listFiltered) {
    const { selectedPokemon } = this.state;
    (selectedPokemon < listFiltered.length -1) ?
    this.setState((previousPokemon) => ({
      selectedPokemon: previousPokemon.selectedPokemon + 1,
    })) :
    this.setState((previousPokemon) => ({
      selectedPokemon: 0,
    }))
  }

  filterListPokemon() {
    return pokemons.map((pokemon) => pokemon.type)
      .filter((type, index, all) => {
        return all.indexOf(type) === index;
      });
  }

  filteredType(type) {
    this.setState({
      selectedPokemon: 0,
      selectedType: type,
    })
  }

  listFilteresPokemon() {
    const { selectedType } = this.state;
    const filtered = pokemons.filter(pokemon => {
      return selectedType
      ? selectedType === pokemon.type
      : true
    });
    return filtered;
  }

  render() {
    const { selectedPokemon } = this.state;
    const allTypes = this.filterListPokemon();
    const listFiltered = this.listFilteresPokemon();

    return (
      <div className="pokedex">
        <Pokemon pokemon={listFiltered[selectedPokemon]} />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filteredType(null)}
            className="filter-button"
          >
            All
          </Button>
          
          {allTypes.map((type, index) => 
            <Button
              key={index}
              onClick={() => this.filteredType(type)}
              className="filter-button"
            >
              {type}
            </Button>
          )}
        </div>
          <Button
            onClick={() => this.nextPokemon(listFiltered)}
            disabled={listFiltered.length <= 1}
            className="pokedex-button"
          >
            Próximo pokémon
          </Button>
      </div>
    );
  }
}

export default Pokedex;