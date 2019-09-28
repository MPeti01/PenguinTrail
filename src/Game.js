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
            <TextPanel
              gameState={this.state.gameState}
              changeState={(state) => this.setState({ gameState: state })}
            />
          </div>
      )

  }
}

export default Game;
