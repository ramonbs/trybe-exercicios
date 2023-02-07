import React from 'react';
import { connect, MapStateToProps } from 'react-redux';

type CharacterCardProps = {
  character: {
    name: string,
    born: string,
    titles: string[],
    aliases: string[],
  },
  loading: boolean,
  error: string,
}

class CharacterCard extends React.Component<CharacterCardProps> {
  render() {
    const { character, loading, error } = this.props;
    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Born: {character.born}</li>
          <li>
            Titles:
            <ol>
              {character.titles.map((title, index) => (
                <li key={`${title}-${index}`}>{title}</li>
              ))}
            </ol>
          </li>
          <li>
            Aliases:
            <ol>
              {character.aliases.map((alias, index) => (
                <li key={`${alias}-${index}`}>{alias}</li>
              ))}
            </ol>
          </li>
        </ul>
      );
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <h3>Loading...</h3>; }
    return <div>Type a character name and click to search!</div>;
  }
}

const mapStateToProps = (state: any) => ({
  character: state.character as CharacterCardProps['character'],
  loading: state.isLoading as CharacterCardProps['loading'],
  error: state.error as CharacterCardProps['error'],
});

export default connect(mapStateToProps)(CharacterCard);
