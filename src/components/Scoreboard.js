const Scoreboard = props => {

  return (
    <div id='scoreboard'>
      <div className="score">Score: {props.score}</div>
      <div className="high-score">High Score: {props.highScore}</div>
    </div>
  )

}

export default Scoreboard;