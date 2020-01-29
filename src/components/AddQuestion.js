import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared.js'
import { setLoading } from '../actions/loading.js'

class AddQuestion extends React.Component{
  constructor(props){
    super(props)
    this.state={optionOne: "", optionTwo: ""}
  }

  updateState = (option, text) => {
    let returnObject = {};
    returnObject[option] = text;
    this.setState( returnObject )
  }

  updateStore = (e) => {
    let {dispatch, authdUser, history} = this.props
    e.preventDefault();
    dispatch(setLoading())
    dispatch(handleAddQuestion(authdUser, this.state.optionOne, this.state.optionTwo))
      .then(() => history.push("/"));
  }

  render(){
    return (
      <div className="wyr-card">
          <h2>Would you rather...</h2>
          <form className="wyr-card-buttons">
            <textarea
              className="wyr-card-button add-question-input"
              type="text"
              value={this.state.optionOne}
              placeholder="Option One"
              required
              onChange={ (e)=> {this.updateState("optionOne", e.target.value ) }}
              >
            </textarea>
            <p> or </p>
            <textarea
              className="wyr-card-button add-question-input"
              value={this.state.optionTwo}
              placeholder="Option Two"
              required
              onChange={ (e)=> {this.updateState("optionTwo", e.target.value ) }}
              >
            </textarea>
            <button
              className="add-question-submit"
              type="submit"
              onClick={(e) => this.updateStore(e)}>
              Submit!
            </button>
          </form>
      </div>
    )
  }
}

export default connect( (store) => ({
  authdUser: store.authdUser
}))(AddQuestion);
