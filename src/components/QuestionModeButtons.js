import React from 'react';

const QuestionModeButtons = ( {modes, changeQuestionsMode, currentMode } ) => {
  return (
    <div className="questions-container-buttonsrow">
      {
          modes.map( mode => (
            <button
              className={ mode.type === currentMode ?
                "questions-container-button questions-container-button-selected" :
                "questions-container-button"}
              key={mode.type}
              id={mode.type}
              onClick = { ()=> changeQuestionsMode(mode.type)}
            >
              {mode.text}
            </button>
          ))
      }
    </div>
  )
}

export default QuestionModeButtons;
