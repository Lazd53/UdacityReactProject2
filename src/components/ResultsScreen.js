import React from 'react';
import { connect } from 'react-redux';

class ResultsScreen extends React.Component{
  render (){
    return (
      <div>Test Results</div>
    )
  }
}

export default connect( (store) =>{
  return {store: store}
})(ResultsScreen)
