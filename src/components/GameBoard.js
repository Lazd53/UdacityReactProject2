import React from 'react';
import QuestionsScreen from './QuestionsScreen';
import Leaderboard from './Leaderboard';
import AddQuestion from './AddQuestion';
import GameModeSelector from './GameModeSelector';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';



class GameBoard extends React.Component {

  render(){
    return (
      <div className="game-board">
        <GameModeSelector/>
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
