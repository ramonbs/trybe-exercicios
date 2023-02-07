import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { thunkCharacter } from './redux/actions/actions';
import CharacterCard from './CharacterCard';

interface AppProps {
  dispatch: Dispatch<any>;
}

class App extends React.Component<AppProps> {
  state = {
    character: '',
  }

  render() {
    const { character } = this.state;
    const { dispatch } = this.props;
    return (
      <>
        <input
          type="text"
          onChange={ ({ target }) => this.setState({ character: target.value }) }
          value={ character }
        />
        <button
          type="button"
          onClick={ () => dispatch(thunkCharacter(character)) }
        >
          Search
        </button>
        <CharacterCard />
      </>
    );
  }
}

export default connect()(App);

