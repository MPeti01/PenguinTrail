import React from 'react';

import { gameData } from './gameData.js'
import { pictureData } from './pictureData.js'

class IllustrationPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {picture: 0};
  }
    
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  tick() {
      this.setState(function (prevState, props) {
        const lifes = gameData[this.props.gameState].lifes
        const numPictures = pictureData[lifes].pics.length    
        return {
          picture: (prevState.picture + 1) % numPictures
        };
      });

  }
  
  render() {
    const gameState = gameData[this.props.gameState];
    if (pictureData[gameState.lifes].pics[this.state.picture] === undefined) {
        this.setState({picture: 0});
    }
    console.log(pictureData[gameState.lifes].pics[this.state.picture]);
    const picture = this.state.picture % pictureData[gameState.lifes].pics.length
    const address = pictureData[gameState.lifes].pics[picture].address;
    return (
    <img style={{
                position: 'relative', left: '50%',
                transform: 'translate(-50%, 0)'
            }}
         src={require(""+address)} width="256" height="256"/>
        
    )
  }
}

export default IllustrationPanel
