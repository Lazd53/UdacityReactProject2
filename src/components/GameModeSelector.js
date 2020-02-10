import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GameModeSelector extends React.Component{

  render(){
    let {pathname} = this.props.location;
    let [questions, leaderboard, add] = [false, false, false];
    switch(pathname){
      case "/Leaderboard":
        leaderboard = true;
        break;
      case "/add":
        add = true;
        break;
      default:
        questions = true;
    }

    return (
      <div className="game-mode-selector">
        <Link
          className={questions ?
            "game-mode-selector-link selected":
            "game-mode-selector-link"
          }
          to="/"
        >
          Questions
        </Link>

        <Link
          className={leaderboard ?
            "game-mode-selector-link selected":
            "game-mode-selector-link"
          }
          to="/Leaderboard"
        >
          LeaderBoard
        </Link>
        <Link
          className={add ?
            "game-mode-selector-link selected":
            "game-mode-selector-link"
          }
          to="/add"
        >
          Add a Question
        </Link>

      </div>
    )
  }
}

export default withRouter(GameModeSelector);
