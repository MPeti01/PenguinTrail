import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { gameData } from './gameData.js'

class RollingText {
    constructor(text) {
        this.printed = ''
        this.toPrint = text
    }

    update() {
        if (this.toPrint !== '') {
            this.printed = this.printed +
                               this.toPrint.charAt(0)
            this.toPrint = this.toPrint.substring(1)
            return true
        } else {
            return false
        }
    }

    started() {
        return this.printed !== ''
    }

    finished() {
        return this.toPrint === ''
    }

    printedText() {
        return this.printed
    }
}

class TextPanel extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedIndex: 0,
          prevGameState: this.props.gameState,
          mainText: new RollingText(''),
          infoText: null,
          actionTexts: []
      }
  }

  setupTexts(stateData) {
      this.setState({
          mainText: new RollingText(stateData.text),
          infoText: stateData.infoDump != null ? new RollingText(stateData.infoDump) : null,
          actionTexts: stateData.actions.map(
              (action) => new RollingText(action.text))
      })
  }

  modifySelection(offset) {
      const numActions = gameData[this.props.gameState].actions.length
      this.setState({selectedIndex: (this.state.selectedIndex+numActions+offset) % numActions})
  }

  updateText() {
      if (!this.state.mainText.finished()) {
          var text = (this.state.mainText)
          text.update()
          this.setState({mainText: text})
      } else if (this.state.infoText != null && !this.state.infoText.finished()) {
          var text = (this.state.infoText)
          text.update()
          this.setState({infoText: text})
      } else {
          var texts = (this.state.actionTexts)
          texts.some((text) => text.update())
          this.setState({actionTexts: texts})
      }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateText(),
      30
    );
    this.setupTexts(gameData[this.props.gameState])
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    if (this.state.prevGameState !== this.props.gameState) {
        this.setState({
            prevGameState: this.props.gameState,
            printed: '',
            pendingPrint: gameData[this.props.gameState].text
        })
    }
    const gameState = gameData[this.props.gameState]
    return (
        <p style={{
                width: '100%',
                position: 'absolute', left: '50%',
                transform: 'translate(-50%, 0)'
            }}>
          {this.state.mainText.printedText()}
          {this.state.infoText ?
              <p style={{
                    fontSize: '15pt',
                }}> 
                {this.state.infoText.printedText()} 
              </p> : ''}
          {this.state.mainText.finished() ?
              <ul style={{width: "100%"}}>
                {this.state.actionTexts.filter((text) => text.started()).map(
                    (actionText, index) =>
                      <li style={index === this.state.selectedIndex ?
                        {color: "black", backgroundColor: "white"} :
                        {}}>
                          {actionText.printedText()}
                      </li>)}
              </ul> : ''
          }
          <KeyboardEventHandler
            handleKeys={['down', 'up', 'enter']}
            onKeyEvent={(key, e) => {
                if (key === 'down') {
                    this.modifySelection(+1)
                } else if (key === 'up') {
                    this.modifySelection(-1)
                } else {
                    const action = gameState.actions[this.state.selectedIndex]
                    const nextState = this.props.changeState(action)
                    this.setState({selectedIndex: 0})
                    if (nextState !== "start") {
                        this.setupTexts(gameData[nextState])
                    }
                }
            }} />
        </p>
    )
  }
}

export default TextPanel;
