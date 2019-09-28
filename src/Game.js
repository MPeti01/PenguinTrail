import React from 'react';

import IllustrationPanel from './IllustrationPanel.js';
import TextPanel from './TextPanel.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameState: "intro", variables: {} };
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

  render() {
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
          </div>
      )

  }
}

export default Game;
