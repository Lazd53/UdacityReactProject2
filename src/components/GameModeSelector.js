import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GameModeSelector extends React.Component{
  render(){
    let {pathname} = this.props.location
    return (
      <div className="game-mode-selector">
        { pathname === "/Leaderboard" ?
          <Link className="game-mode-selector-link" to="/">
            Questions
          </Link> :
          <Link className="game-mode-selector-link" to="#">
            Questions
          </Link>

        }
        <Link className="game-mode-selector-link" to="/Leaderboard">
          LeaderBoard
        </Link>
      </div>
    )
  }
}

export default withRouter(GameModeSelector);
