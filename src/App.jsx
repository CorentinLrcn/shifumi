import { useEffect, useState } from 'react'
import './App.css'
import rocks from './assets/rocks.png'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'

function App() {
  const [count, setCount] = useState(0)
  const [round, setRound] = useState(1)
  const choiceList = ['Rock', 'Paper', 'Scissors']
  const [computerHand, setComputerHand] = useState('Rock')
  const [result, setResult] = useState('Egalite')

  const [showResult, setShowResult] = useState(false)

  function computerChoice() {
    var i = Math.random(3)
    setComputerHand(choiceList[i])
  }

  function reveal(playerChoice) {
    computerChoice()
    console.log(playerChoice)
    console.log(computerHand)
    if (playerChoice == computerHand) {
      setResult('Egalite')
    } else if ((playerChoice == 'Rock' && computerHand == 'Paper') || (playerChoice == 'Paper' && computerHand == 'Scissors') || (playerChoice == 'Scissors' && computerHand == 'Rock')) {
      setResult('Perdu')
    } else {
      setResult('Gagné')
    }
    setShowResult(true)
  }

  function newRound() {
    setRound(round++)
    setShowResult(false)
  }

  return (
    <div className="App">
      <div className='computer' >
        <p>Ordinateur</p>
        <div className='compRock' >
          <img src={rocks} className="rocklogo" alt="rock icon" />
        </div>
        <div>
          <img src={paper} className="paperlogo" alt="paper icon" />
        </div>
        <div>
          <img src={scissors} className="scissorslogo" alt="scissors icon" />
        </div>
      </div>
      <div className='gameInfo' >
        <p>Rock - Paper - Scissors</p>
        <p>Round {round}</p>
        <p>Score : {round - count - 1} vs {count}</p>
        { showResult ? <div><p>{result} !</p><br/><button onClick={() => newRound()} >Nouvelle partie</button></div> : <div></div> }
      </div>
      <div className='player' >
        <p>Vous</p>
        <button onClick={() => showResult ? () => {} : reveal('Rock')} >
          <img src={rocks} className="rocklogo" alt="rock icon" />
        </button>
        <button onClick={() => showResult ? () => {} : reveal('Paper')} >
          <img src={paper} className="paperlogo" alt="paper icon" />
        </button>
        <button onClick={() => showResult ? () => {} : reveal('Scissors')} >
          <img src={scissors} className="scissorslogo" alt="scissors icon" />
        </button>
      </div>
    </div >
  )
}

export default App
