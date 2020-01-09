import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import UserInfo from './UserInfo';
import GameBoard from './GameBoard';
import LoadAndAuth from './LoadAndAuth';

import { handleInitialData } from '../actions/shared';
import { setLoading } from '../actions/loading';


class App extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(setLoading())
    dispatch(handleInitialData(this.setState({loading: false})));
  }


  render (){
    let {loading, authdUser} = this.props;
    return (
      <div className="App">
        <header>
          <h1>WOULD YOU RATHER??</h1>
          <UserInfo/>
        </header>
        { authdUser && loading === false ?
          <GameBoard/>:
          <LoadAndAuth loading={loading}/>
        }
      </div>
    );
  }

}

export default connect((store)=>(
  {
    authdUser: store.authdUser,
    loading: store.loading
  }))(App);
