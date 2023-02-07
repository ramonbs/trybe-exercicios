import './App.css'
import { connect } from 'react-redux';
import actions from './redux/actions';
import Input from './components/Input';
import Name from './components/Name';

function App(props) {
  const { count, dispatch } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          counter
        </h1>
        <button onClick={() => dispatch(actions('INCREMENT', 1))}>
          +
        </button>
        <span>
          {count}
        </span>
        <button onClick={() => dispatch(actions('DECREMENT', 1))}>
          -
        </button>
        <div>
          <button onClick={() => dispatch(actions('RESET', 0))}>
            reset
          </button>
        </div>
        <Input />
        <Name />
      </header>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    count: store.counterReducer.count,
  };
}

export default connect(mapStateToProps)(App);
