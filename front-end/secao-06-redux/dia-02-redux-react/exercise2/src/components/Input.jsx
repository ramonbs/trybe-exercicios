import React from 'react'
import { connect } from 'react-redux';
import actions from '../redux/actions';

function Input(props) {
    const { dispatch } = props;

  return (
    <input 
        type="text"
        placeholder="Enter your name"
        onChange={(e) => dispatch(actions('INPUT', e.target.value))}
    />
  )
}

const mapStateToProps = (store) => {
    return {
        name: store.reducerInput.name,
    };
}

export default connect(mapStateToProps)(Input);
