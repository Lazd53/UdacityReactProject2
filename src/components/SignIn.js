import React from 'react';
import { connect } from 'react-redux'
import SelectMenu from './SelectMenu'
import SignInUser from './SignInUser'
import {setAuthdUser} from '../actions/users';

class SignIn extends React.Component {

  state={authedUser:null}

  changeAuthedUser = (user) => {
    this.setState({authedUser: user[1]})
  }

  setAuthdUser = (user) => {
    const {dispatch} = this.props;
    dispatch(setAuthdUser(user))
  }

  userContent(){
    let users = this.props.users;
    let entries = Object.entries(users).sort();
    return entries
  }

  render(){
    let users = this.props.users;
    return (
      <div className="sign-in-container">
        <h2>SIGN IN</h2>
        <h4>Please sign in to start the game</h4>
        <form className="sign-in-form">
          {users !== {} &&
            <SelectMenu
              authUser={this.changeAuthedUser}
              users={this.userContent()}
            />
          }
          {this.state.authedUser !== null &&
            <SignInUser user={this.state.authedUser}/>
          }
          <button
            type="submit"
            onClick={ (e) => {
              e.preventDefault();
              this.setAuthdUser(this.state.authedUser)
            }}> 
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

export default connect((store)=> {
  return {users: store.users}
  })(SignIn);
