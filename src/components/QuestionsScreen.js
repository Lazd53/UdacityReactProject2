import React from 'react';
import { connect } from 'react-redux';

import WYRCard from './WYRCard';

class Questions extends React.Component{
  render(){
    return (
      <div>
        <WYRCard/>
      </div>
    )
  }
}

export default connect((store) => {
  return {store: store}
})(Questions)
