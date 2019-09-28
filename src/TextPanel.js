import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';


import { gameData } from './gameData.js'

class TextPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 }
  }

  modifySelection(offset) {
      const numActions = gameData[this.props.gameState].actions.length
      this.setState({selectedIndex: (this.state.selectedIndex+numActions+offset) % numActions})
  }

  render() {
    const gameState = gameData[this.props.gameState]
    return (
        <p>
          This is the text panel. {this.state.keyPressed ? this.state.keyPressed +' pressed!' : ''} {gameState.text}
          <ul style={{width: "200px"}}>
            {gameState.actions.map((action, index) => <li style={index === this.state.selectedIndex ? {color: "black", "background-color": "white"} : {}}>{action.text}</li>)}
          </ul>
          <KeyboardEventHandler
            handleKeys={['down', 'up', 'enter']}
            onKeyEvent={(key, e) => {
                if (key === 'down') {
                    this.modifySelection(+1)
                } else if (key === 'up') {
                    this.modifySelection(-1)
                } else {
                    this.props.changeState(gameState.actions[this.state.selectedIndex].nextState)
                    this.setState({selectedIndex: 0})
                }
            }} />
        </p>
    )
  }
}

export default TextPanel;
