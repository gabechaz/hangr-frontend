import './css-files/SelectedGame.css'

function SelectedGame ({selectedGame}) {
    console.log(selectedGame)
    const game = selectedGame[0]
    return (
        <div className = 'outer-selected-div'>
            <h1>{game.name}</h1>
        <div className = 'inner-selected-div'>
            <img className = 'selected-image' src = {game.image} alt = 'game' />
        </div>
           
        </div>
    )
}

export default SelectedGame