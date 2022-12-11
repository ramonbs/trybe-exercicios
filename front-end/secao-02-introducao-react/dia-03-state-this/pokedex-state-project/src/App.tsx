import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';
import pokemonList from './data/data';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className='App'>
        <Pokedex data={pokemonList} />
      </div>
    );
  }
}

export default App;
