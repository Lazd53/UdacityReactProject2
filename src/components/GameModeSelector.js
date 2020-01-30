import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GameModeSelector extends React.Component{
  render(){
    return (
      <div className="game-mode-selector">
        <Link className="game-mode-selector-link" to="/">
          Questions
        </Link>
        <Link className="game-mode-selector-link" to="/Leaderboard">
          LeaderBoard
        </Link>
      </div>
    )
  }
}

export default GameModeSelector;
