import './index.css'

const WinStatusCard = props => {
  const {yourUrl, opponetUrl, onChangePlayButton, gameStatus} = props
  const changeButton = () => {
    onChangePlayButton()
  }
  const res = gameStatus === 'DRAW' ? 'IT IS DRAW' : `YOU ${gameStatus}`
  return (
    <>
      <div className="winorloss-container">
        <div className="titleandimage-container">
          <h1 className="winorlosstitle-heading">YOU</h1>
          <img src={yourUrl} alt="your choice" className="winorloss-image" />
        </div>
        <div className="titleandimage-container">
          <h1 className="winorlosstitle-heading">OPPONENT</h1>
          <img
            src={opponetUrl}
            alt="opponent choice"
            className="winorloss-image"
          />
        </div>
      </div>
      <div className="titleandimage-container">
        <p className="winorlosstitle-heading">{res}</p>
        <button
          type="button"
          className="button-style-playagain"
          onClick={changeButton}
        >
          PLAY AGAIN
        </button>
      </div>
    </>
  )
}
export default WinStatusCard
