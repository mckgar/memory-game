import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [values, setValues] = useState([
    { name: 'Acrid', clicked: false },
    { name: 'Artificer', clicked: false },
    { name: 'Bandit', clicked: false },
    { name: 'Captain', clicked: false },
    { name: 'Commando', clicked: false },
    { name: 'Engineer', clicked: false },
    { name: 'Heretic', clicked: false },
    { name: 'Huntress', clicked: false },
    { name: 'Loader', clicked: false },
    { name: 'MUL-T', clicked: false },
    { name: 'Mercenary', clicked: false },
    { name: 'REX', clicked: false },
    { name: 'Railgunner', clicked: false },
    { name: 'Void Fiend', clicked: false },
  ]);

  const resetScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
  }

  const clickedCard = name => {
    const card = values.find(c => c.name === name);
    if (card.clicked) {
      resetScore();
      setValues(previousValues => (previousValues.map(value => {
        value = { name: value.name, clicked: false }
        return value;
      })));
    } else {
      setScore(score + 1);
      setValues(previousValues => (previousValues.map(value => {
        if (value.name === name) {
          value = { ...value, clicked: true }
        }
        return value;
      })));
    }
    shuffleCards();
  }

  const shuffleCards = () => {
    setValues(previousValues => (previousValues
      .map(value => ({ value, sort: Math.random() * values.length }))
      .sort((a, b) => b.sort - a.sort)
      .map(({ value }) => value)
    ));
  }

  const cards = values.map((value, index) => {
    return <Card key={index} value={value} cardClicked={clickedCard} />
  })

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <Scoreboard score={score} highScore={highScore} />
      </header>
      <p>Click as many distinct cards as you can!</p>
      <div className='cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
