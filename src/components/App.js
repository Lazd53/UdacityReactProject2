import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import SignIn from './SignIn';
import UserInfo from './UserInfo';
import GameBoard from './GameBoard';
import { handleInitialData } from '../actions/shared';
import { setLoading } from '../actions/loading';


class App extends React.Component {
  state={loading: true}
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(setLoading())
    dispatch(handleInitialData(this.setState({loading: false})));
  }


  render (){
    return (
      <div className="App">
        <header>
          <h1>WOULD YOU RATHER??</h1>
          <UserInfo/>
        </header>
        <Switch>
          <Route
            path="/"
            component={SignIn}
          ></Route>
        </Switch>
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
