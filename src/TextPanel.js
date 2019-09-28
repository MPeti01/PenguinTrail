import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';


import { gameData } from './gameData.js'

class TextPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyPressed: null }
  }

  render() {
    const gameState = gameData[this.props.gameState]
    return (
        <p>
          This is the text panel. {this.state.keyPressed ? this.state.keyPressed +' pressed!' : ''} {gameState.text}
          <ul>
            {gameState.actions.map((action) => <li>{action.text}</li>)}
          </ul>
          <KeyboardEventHandler
            handleKeys={['0', '1']}
            onKeyEvent={(key, e) => {
                this.setState({keyPressed: key})
                this.props.changeState(gameState.actions[key-'0'].nextState)
            }} />
        </p>
    )
  }
}

export default TextPanel;
