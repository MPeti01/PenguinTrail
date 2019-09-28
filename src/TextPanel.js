import React from 'react';

import { gameData } from './gameData.js'

class TextPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <p>
          This is the text panel. The game state text is {gameData[this.props.gameState].text} 
        </p>
    )
  }
}

export default TextPanel;
