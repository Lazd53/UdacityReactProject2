import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GameModeSelector extends React.Component{

  unClickableLink = (e, thisLocation) => {
    let {pathName} = this.props.location;
    if (thisLocation === pathName)
    e.preventDefault()
  }

  render(){
    let {pathname} = this.props.location;
    let [questions, leaderboard] = [false, false];
    pathname === '/Leaderboard' ?
      leaderboard = true :
      questions = true;

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
      </div>
    )
  }
}

export default withRouter(GameModeSelector);
