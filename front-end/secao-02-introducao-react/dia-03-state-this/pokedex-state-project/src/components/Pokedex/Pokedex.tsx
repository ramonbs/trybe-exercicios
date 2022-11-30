import React from 'react';
import { Data } from '../../data/data';
import Pokecard from '../Pokecard/Pokecard';
import Button from '../Button/Button';

interface PokedexProps {
  data: Data[];
}

interface PokedexState {
  pokemonFiltered: Data[];
  initialPokemon: Data;
  count: number;
}

class Pokedex extends React.Component<PokedexProps, PokedexState> {
  public constructor(props: PokedexProps) {
    super(props);
    this.state = {
      pokemonFiltered: [],
      initialPokemon: props.data[0],
      count: 1,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count === 8 ? 0 : prevState.count + 1,
      initialPokemon: this.props.data[this.state.count],
      pokemonFiltered: [],
    }));
  };

  allPokemon = () => {
    this.setState({
      pokemonFiltered: this.props.data,
    });
  };

  filterPokemon = (type: string): void => {
    const { data } = this.props;
    const pokemons: Data[] = [];
    const filteredPokemon = data.filter((pokemon) => pokemon.type === type);
    filteredPokemon.forEach((pokemon) => {
      pokemons.push(pokemon);
    });
    this.setState({ pokemonFiltered: pokemons });
  };

  initialPokemon() {
    const { initialPokemon } = this.state;

    return <Pokecard pokemon={initialPokemon} />;
  }

  renderFilteredPokemon() {
    const { pokemonFiltered: pokemonList } = this.state;

    return pokemonList.map((pokemon) => (
      <Pokecard key={pokemon.id} pokemon={pokemon} />
    ));
  }

  render() {
    const uniqueTypes = [
      ...new Set(this.props.data.map((pokemon) => pokemon.type)),
    ];
    return (
      <div className='container'>
        <h1> Pokédex </h1>
        <ul className='pokedex'>
          {this.state.pokemonFiltered.length !== 0
            ? this.renderFilteredPokemon()
            : this.initialPokemon()}
        </ul>
        <div className='container-buttons'>
          <Button onClick={this.allPokemon} text='Give me All Pokemons!' />
          <Button text='Next Pokemon!' onClick={this.handleClick} />
          {uniqueTypes.map((type) => (
            <Button
              key={type}
              text={type}
              onClick={() => this.filterPokemon(type)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
