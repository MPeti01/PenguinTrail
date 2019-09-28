import React from 'react';

import { gameData } from './gameData.js'

class TextPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyPressed: null }
  }

  handleKeyPress = e => {
    this.setState({keyPressed: e.key})
  }


  render() {
    const gameState = gameData[this.props.gameState]
    return (
        <p>
          This is the text panel. {this.state.keyPressed ? this.state.keyPressed +' pressed!' : ''} {gameState.text}
          <ul>
            {gameState.actions.map((action) => <li>{action.text}</li>)}
          </ul>
        </p>

    )
  }
}

export default TextPanel;
