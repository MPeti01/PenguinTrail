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
          <div>
            <IllustrationPanel />
            <TextPanel gameState={this.state.gameState} />
          </div>
      )

  }
}

export default Game;
