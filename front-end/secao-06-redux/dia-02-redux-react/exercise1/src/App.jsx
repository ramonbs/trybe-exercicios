import './App.css'
import { connect } from 'react-redux'
import { actionCreator } from './redux/actions';

function App(props) {
  const { count, dispatch } = props;

  return (
    <div className="App">
      <div>
        Counter
      </div>
      <div>
        <button onClick={ () => dispatch(actionCreator('DECREMENT', 1)) }>-</button>
        <span>{count}</span>
        <button onClick={ () => dispatch(actionCreator('INCREMENT', 1)) }>+</button>
       </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.counterReducer.count,
})

export default connect(mapStateToProps)(App);
