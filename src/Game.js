import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import IllustrationPanel from './IllustrationPanel.js';
import TextPanel from './TextPanel.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameState: "start", variables: {} };
  }

  updateVariables(current, sideEffects) {
      return Object.assign(current, sideEffects)
  }

  applyAction(action) {
      if (typeof action.nextState === "string") {
          this.setState({gameState: action.nextState,
                         variables: this.updateVariables(this.state.variables,
                                                         action.sideEffects)})
          return action.nextState
      } else {
          const result = action.nextState(this.state.variables)
          this.setState({gameState: result.nextState,
                         variables: this.updateVariables(this.state.variables,
                                                         result.sideEffects)})
          return result.nextState
      }

  }
  
  start() {
      this.setState({gameState: "intro"});
  }

  render() {
      
          if (this.state.gameState === "start") {
            return (
              <div style={{
                    width: '80%',
                    position: 'absolute', left: '50%',
                    transform: 'translate(-50%, 50%)',
                    textAlign: 'center'
                }}>
                <h1> Penguin Trail </h1>
                <p style={{
                    fontSize: '15px',
                }}> A game about how human behaviour affects the life of penguins
                </p>
                <p style={{
                    width: '100%',
                    position: 'absolute', left: '50%',
                    transform: 'translate(-50%, 800%)'
                }}> Press ENTER to play. </p>
                <KeyboardEventHandler
                handleKeys={['enter']}
                onKeyEvent={(key, e) => {
                    this.setState({gameState: "intro"});
                }} />
              </div>
               )
              
          } else {
              return (
              <div style={{
                    width: '70%',
                    position: 'absolute', left: '50%',
                    transform: 'translate(-50%, 0)'
                }}>
                <IllustrationPanel
                  gameState={this.state.gameState}
                />
                <TextPanel
                  gameState={this.state.gameState}
                  changeState={this.applyAction.bind(this)}
                />
              </div>)
          }
  }
}

export default Game;
