import { useEffect, useState } from 'react'
import './App.css'
import rocks from './assets/rocks.png'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'

function App() {
  const [count, setCount] = useState(0)
  const [round, setRound] = useState(1)

  const [newRound, setNewRound] = useState(true)

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <div className='computer' >
        <p>Ordinateur</p>
        <div>
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
      </div>
      <div className='player' >
        <p>Vous</p>
        <button>
          <img src={rocks} className="rocklogo" alt="rock icon" />
        </button>
        <button>
          <img src={paper} className="paperlogo" alt="paper icon" />
        </button>
        <button>
          <img src={scissors} className="scissorslogo" alt="scissors icon" />
        </button>
      </div>
    </div >
  )
}

export default App
