import React from "react";
import { connect } from "react-redux";

function Name(props) {
  const { name } = props;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    name: store.reducerInput.name,
  };
};

export default connect(mapStateToProps)(Name);
