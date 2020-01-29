import React from 'react';
import QuestionsScreen from './QuestionsScreen';
import Leaderboard from './Leaderboard';
import AddQuestion from './AddQuestion';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';



class GameBoard extends React.Component {

  render(){
    return (
      <div className="game-board">
        <div className="game-mode-selector">
          <Link to="/">Questions</Link>
          <Link to="/questions">LeaderBoard</Link>
        </div>
        <Switch>
          <Route
            path="/add"
            component={AddQuestion}
          >
          </Route>
          <Route
            path="/leaderboard"
            component={Leaderboard}
          >
          </Route>
          <Route
            path="/questions/:id"
            component={QuestionsScreen}
          >
          </Route>
          <Route
            path="/"
            component={QuestionsScreen}
          >
          </Route>
        </Switch>
      </div>
    )
  }
}

export default connect( (store) => (
  {
    users: store.users,
    questions: store.questions
  }
))(GameBoard);
