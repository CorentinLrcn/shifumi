import { useEffect, useState } from 'react'
import './App.css'
import rocks from './assets/rocks.png'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'

const choiceList = ['Rock', 'Paper', 'Scissors']
function computerChoice() {
  return choiceList[Math.floor(Math.random() * 3)]
}

function App() {
  const [count, setCount] = useState(0)
  const [round, setRound] = useState(1)
  const [computerHand, setComputerHand] = useState(computerChoice())
  const [result, setResult] = useState('Egalite')

  const [showResult, setShowResult] = useState(false)


  function reveal(playerChoice) {
    setComputerHand(computerChoice())
    console.log(playerChoice)
    console.log(computerHand)
    if (playerChoice == computerHand) {
      setResult('Egalite')
    } else if ((playerChoice == 'Rock' && computerHand == 'Paper') || (playerChoice == 'Paper' && computerHand == 'Scissors') || (playerChoice == 'Scissors' && computerHand == 'Rock')) {
      setResult('Perdu')
      var newRound = round + 1
      setRound(newRound)
    } else {
      setResult('Gagné')
      var newRound = round + 1
      setRound(newRound)
      var newScore = count + 1
      setCount(newScore)
    }
    setShowResult(true)
  }

  return (
    <div className="App">
      <div className='computer' >
        <p>Ordinateur</p>
        <div>
          {(showResult && computerHand == 'Rock') && <img src={rocks} className="rocklogo" alt="rock icon" />}
          {(showResult && computerHand == 'Paper') && <img src={paper} className="paperlogo" alt="paper icon" />}
          {(showResult && computerHand == 'Scissors') && <img src={scissors} className="scissorslogo" alt="scissors icon" />}
        </div>
      </div>
      <div className='gameInfo' >
        <p>Rock - Paper - Scissors</p>
        <p>Round {round}</p>
        <p>Score : {round - count - 1} vs {count}</p>
        {(showResult) && <p>{result} !</p>}
      </div>
      <div className='player' >
        <p>Vous</p>
        <div onClick={() => reveal('Rock')} >
          <img src={rocks} className="logo" alt="rock icon" />
        </div>
        <div onClick={() => reveal('Paper')} >
          <img src={paper} className="logo" alt="paper icon" />
        </div>
        <div onClick={() => reveal('Scissors')} >
          <img src={scissors} className="logo" alt="scissors icon" />
        </div>
      </div>
    </div >
  )
}

export default App
