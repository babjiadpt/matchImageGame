import './index.css'

const NavBar = props => {
  const {score, gameTimer} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="game-count-container">
        <li className="score-label">
          <p>
            Score: <span className="score-value">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer-value">{gameTimer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
