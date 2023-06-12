import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import WinStatusCard from '../WinStatusCard'

import './index.css'

class RockPaper extends Component {
  state = {
    choiceList: this.props,
    yourUrl: '',
    opponetUrl: '',
    score: '0',
    gameStatus: '',
  }

  onChangePlayButton = () => {
    this.setState({yourUrl: '', opponetUrl: '', score: '0', gameStatus: ''})
  }

  onRockImage = () => {
    const randomNum = Math.floor(Math.random() * 3)
    const {choiceList} = this.state
    if (choiceList.choicesList[randomNum].id === 'ROCK') {
      this.setState({
        score: 0,
        gameStatus: 'DRAW',
        yourUrl: choiceList.choicesList[0].imageUrl,
        opponetUrl: choiceList.choicesList[randomNum].imageUrl,
      })
    } else if (
      choiceList.choicesList[randomNum].id !== 'ROCK' &&
      choiceList.choicesList[randomNum].id === 'PAPER'
    ) {
      this.setState({
        score: -1,
        gameStatus: 'LOSE',
        yourUrl: choiceList.choicesList[0].imageUrl,
        opponetUrl: choiceList.choicesList[randomNum].imageUrl,
      })
    } else {
      this.setState({
        score: 1,
        gameStatus: 'WON',
        yourUrl: choiceList.choicesList[0].imageUrl,
        opponetUrl: choiceList.choicesList[randomNum].imageUrl,
      })
    }
  }

  onPapersImage = () => {
    const randomNum = Math.floor(Math.random() * 3)
    const {choiceList} = this.state
    if (choiceList.choicesList[randomNum].id === 'PAPER') {
      this.setState({
        score: 0,
        gameStatus: 'DRAW',
        yourUrl: choiceList.choicesList[2].imageUrl,
        opponetUrl: choiceList.choicesList[randomNum].imageUrl,
      })
    } else if (
      choiceList.choicesList[randomNum].id !== 'PAPER' &&
      choiceList.choicesList[randomNum].id === 'ROCK'
    ) {
      this.setState({
        score: 1,
        gameStatus: 'WON',
        yourUrl: choiceList.choicesList[2].imageUrl,
        opponetUrl: choiceList.choicesList[randomNum].imageUrl,
      })
    } else {
      this.setState({
        score: -1,
        gameStatus: 'LOSE',
        yourUrl: choiceList.choicesList[2].imageUrl,
        opponetUrl: choiceList.choicesList[randomNum].imageUrl,
      })
    }
  }

  onScissorsImage = () => {
    const randomNum = Math.floor(Math.random() * 3)
    const {choiceList} = this.state
    if (choiceList.choicesList[randomNum].id === 'SCISSORS') {
      this.setState({
        score: 0,
        gameStatus: 'DRAW',
        yourUrl: choiceList.choicesList[1].imageUrl,
        opponetUrl: choiceList.choicesList[randomNum].imageUrl,
      })
    } else if (
      choiceList.choicesList[randomNum].id !== 'SCISSORS' &&
      choiceList.choicesList[randomNum].id === 'PAPER'
    ) {
      this.setState({
        score: 1,
        gameStatus: 'WON',
        yourUrl: choiceList.choicesList[1].imageUrl,
        opponetUrl: choiceList.choicesList[randomNum].imageUrl,
      })
    } else {
      this.setState({
        score: -1,
        gameStatus: 'LOSE',
        yourUrl: choiceList.choicesList[1].imageUrl,
        opponetUrl: choiceList.choicesList[randomNum].imageUrl,
      })
    }
  }

  gamingStatusCard = () => {
    const {gameStatus, yourUrl, opponetUrl} = this.state
    switch (gameStatus) {
      case 'WON':
        return (
          <WinStatusCard
            yourUrl={yourUrl}
            opponetUrl={opponetUrl}
            onChangePlayButton={this.onChangePlayButton}
            gameStatus={gameStatus}
          />
        )
      case 'LOSE':
        return (
          <WinStatusCard
            yourUrl={yourUrl}
            opponetUrl={opponetUrl}
            onChangePlayButton={this.onChangePlayButton}
            gameStatus={gameStatus}
          />
        )
      case 'DRAW':
        return (
          <WinStatusCard
            yourUrl={yourUrl}
            opponetUrl={opponetUrl}
            onChangePlayButton={this.onChangePlayButton}
            gameStatus={gameStatus}
          />
        )
      default:
        return null
    }
  }

  render() {
    const {choiceList, score, gameStatus} = this.state
    const {choicesList} = choiceList
    const stylesCss = gameStatus !== '' ? 'disappear' : ''

    return (
      <div className="main-container">
        <div className="score-container">
          <div>
            <h1 className="heading-title">
              ROCK <br />
              PAPER <br /> SCISSORS
            </h1>
          </div>
          <div className="score-container1">
            <p className="heading-title-score">Score</p>
            <p className="heading-title-score score">{score}</p>
          </div>
        </div>
        <div className={`total-image-container ${stylesCss}`}>
          <div className="image-container">
            <button
              type="button"
              className="button-style"
              onClick={this.onRockImage}
              data-testid="rockButton"
            >
              <img
                src={choicesList[0].imageUrl}
                alt="ROCK"
                className="image-setting"
              />
            </button>
            <button
              type="button"
              className="button-style"
              onClick={this.onScissorsImage}
              data-testid="scissorsButton"
            >
              <img
                src={choicesList[1].imageUrl}
                alt="SCISSORS"
                className="image-setting"
              />
            </button>
          </div>
          <div className="image-container1">
            <button
              type="button"
              className="button-style"
              onClick={this.onPapersImage}
              data-testid="paperButton"
            >
              <img
                src={choicesList[2].imageUrl}
                alt="PAPER"
                className="image-setting"
              />
            </button>
          </div>
        </div>
        <div className="total-image-container">{this.gamingStatusCard()}</div>
        <div className="main-popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
            className="popup-style"
          >
            {close => (
              <div className="pas">
                <div className="popup-container">
                  <div className="cross-container">
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      <RiCloseLine className="cross-symbol" />
                    </button>
                  </div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rules-image"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}
export default RockPaper
