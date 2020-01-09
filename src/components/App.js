import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import SignIn from './SignIn';
import UserInfo from './UserInfo';
import GameBoard from './GameBoard';
import {handleInitialData} from '../actions/shared';


class App extends React.Component {
  state={}
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  componentDidUpdate(){
    console.log(this.props)
  }


  render (){
    return (
      <div className="App">
        <header>
          <h1>WOULD YOU RATHER??</h1>
          <UserInfo/>
        </header>
        {this.props.authdUser === false && <SignIn/>}
        <GameBoard/>
      </div>
    );
  }

}

export default connect((state)=>(
  {
    authdUser: state.authdUser
  }))(App);
