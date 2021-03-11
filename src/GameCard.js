import './css-files/GameCard.css'
import {useState} from 'react'

function GameCard ({setSelectedGame, setGameImg, gamesList, setGamesList, setGameName, setGameID, game: {id, image, name}}) {

const game = gamesList.filter(game => id === game.id )
  const [selected, setSelected] = useState(false)
  function handleGameChoice () {
    setGameName(name)
    setGameID(id)
    setGameImg(image)
    setSelected(true)
    setGamesList(game)
    setSelectedGame(game)
  }
return (

    <div className= 'game-card' style={{ width: '18rem' }}>
  <img className = 'game-card-image'  src={image} />

    <h3>{name}</h3>
    <button onClick={handleGameChoice} variant="primary">{selected ? 'Selected' : 'Select Game'}</button>

</div>

)
}

export default GameCard