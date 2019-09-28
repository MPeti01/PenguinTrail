import React from 'react';

import IllustrationPanel from './IllustrationPanel.js';
import TextPanel from './TextPanel.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameState: "start" };
  }

  render() {
      return (
          <div style={{
                width: '70%',
                position: 'absolute', left: '50%',
                transform: 'translate(-30%, 0)'
            }}>
            <IllustrationPanel
              gameState={this.state.gameState}
              changeState={(state) => this.setState({ gameState: state })}
            />
            <TextPanel
              gameState={this.state.gameState}
              changeState={(state) => this.setState({ gameState: state })}
            />
          </div>
      )

  }
}

export default Game;
