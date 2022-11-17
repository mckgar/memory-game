const Scoreboard = props => {

  return (
    <div id='scoreboard'>
      <div className="score">{props.score}</div>
      <div className="high-score">{props.highScore}</div>
    </div>
  )

}

export default Scoreboard;