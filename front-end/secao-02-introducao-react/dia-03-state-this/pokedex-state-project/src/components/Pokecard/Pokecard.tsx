import React from 'react';
import { Data } from '../../data/data';

interface PokecardProps {
    pokemon: Data;
}

class Pokecard extends React.Component<PokecardProps, any> {
  public render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;

    return (
      <li className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            Average weight:
            <span>
              {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </span>
          </p>
        </div>
        <img src={ image } alt={ `${name}` } />
      </li>
    );
  }
}


export default Pokecard;