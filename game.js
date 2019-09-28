'use strict';

//import IllustrationPanel from './illustration_panel.js';
import TextPanel from './text_panel.js';

const e = React.createElement;

class Game extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { gameState: "start" };
  }

  render() {
      return 'WTF'
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Game), domContainer);
