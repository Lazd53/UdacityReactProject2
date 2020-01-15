import React from 'react';
import {connect} from 'react-redux'

class WYRAnswers extends React.Component {

  render(){
    return(
      <div className="wyr-card">
      <div className="wyr-card-buttons">
        <div className = "wyr-card-button">
          Option One
        </div>
        <div className = "wyr-card-button">
          Option Two
        </div>
      </div>
      </div>
    )
  }
}

export default connect( (store) => ({
  store: store
}))(WYRAnswers)
