import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button'
import {useState} from 'react'

function GameCard ({setGameImg, gamesList, setGamesList, setGameName, setGameID, game: {id, image, name, commentary}}) {

const game = gamesList.filter(game => id === game.id )
  const [selected, setSelected] = useState(false)
  function handleGameChoice () {
    setGameName(name)
    setGameID(id)
    setGameImg(image)
    setSelected(true)
    setGamesList(game)
  }
return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
   {commentary}
    </Card.Text>
    <Button onClick={handleGameChoice} variant="primary">{selected ? 'Selected' : 'Select Game'}</Button>
  </Card.Body>
</Card>
)
}

export default GameCard