import './css-files/MakeHang.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateTimePicker from 'react-datetime-picker'
import GameCard from './GameCard.js'
import SelectedGame from './SelectedGame.js'
// import Select from 'react-select'
import React, { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

function MakeHang ({API, currentUser}) {

    


    // function populateActOptions (optObjs) {
    //     return(  optObjs.map(opt => {
    //           return (
    //           {
    //               label: opt.name,
    //               value: opt.id
    //           })
    //       }))
    //   }
  
      useEffect(() => {
          fetch(`${API}/activities`)
          .then (res => res.json())
        //   .then (acts => (setActivityArr(populateActOptions(acts))))
  
      }
      ,[API]
      )


    
    // const [activityArr, setActivityArr] = useState([])
    // const [chosenActId, setChosenActId] = useState("")
    // const [chosenActName, setChosenActName] = useState("")
    const [location, setLocation] = useState("")
    const [time, setTime] = useState(new Date())
    const [timeString, setTimeString] = useState("")
    const [peopleNeeded, setPeopleNeeded] = useState("")
    const history = useHistory()
    const [gameID, setGameID] = useState("")
    const [gameName, setGameName] = useState("")
    const [gameImg, setGameImg] = useState("")
    const [selectedGame, setSelectedGame] = useState(null)
    const [apiString, setApiString] = useState("")


    const [gamesList, setGamesList] = useState([])
    const [gameCards, setGameCards] = useState([])

      useEffect(() => {
      
        console.log(selectedGame)
          const gamesCards = gamesList.map(game => {
              return (
                  <GameCard setSelectedGame = {setSelectedGame} setGameImg={setGameImg} setGamesList={setGamesList} gamesList={gamesList} setGameName={setGameName} setGameID={setGameID} key = {game.id} game = {game} />
              )
          })
          setGameCards(gamesCards)
      }
      , [gamesList]
      )

      function handleTime (e) {
        
         setTimeString(String(e))
        setTime(e)     
      }
    

    function handleLocationChoice (e) {
        setLocation(e.target.value)
    }

    function handlePeopleNeeded (e) {
        setPeopleNeeded(e.target.value)
    }

    // function handleActChange(e) {
    //     setChosenActId(e.value)
    //     setChosenActName(e.label)
    // }
  
    function submitNewHang(e) {
        e.preventDefault()
        const hangObj = {
            game_image: gameImg ,
            game_id: gameID ,
            game_name: gameName ,
            user_id: currentUser.id,
            location: location,
            time: time,
            time_string: timeString,
            people_needed: peopleNeeded
        }
      
        fetch(`${API}/hangs`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(hangObj)
          })
          .then(res => res.json())
          .then(newHang => {
              console.log(newHang)
              history.push(`/hangs/${newHang.id}`)
          })
        }

       function  handleGamesRequest (gamesArr) {
           const gameList = []
           gamesArr.forEach(game => {
               gameList.push({commentary: game.commentary, name: game.name, image: game.image_url, id: game.id})
           })
           setGamesList(gameList)
           console.log(gamesList)
                
        }

        function testAPI (string) {
            fetch(`https://api.boardgameatlas.com/api/search?name=${string}&fields=image_url,id,commentary,name&client_id=gmOCoN4Ssb`)
            .then(res => res.json())
            .then(res => {
                handleGamesRequest(res.games)
                })
        }

        function handleGameSearch (e) {
            e.preventDefault()
            const split = apiString.split(" ")
            const united = split.join('%20')
            testAPI(united)
        }

        function handleApiString (e) {
            setApiString(e.target.value)
        }



    const classes = useStyles();
    return (
      <div className='make-hang-outer-div'>
      
<form  className={classes.root} noValidate autoComplete="off">
  

        <DateTimePicker
        utc='true'
          id="time"
          label="Time"
          value={time}
          onChange={handleTime}
          variant="filled"
         />
        <br />


<div className="form-group mb-3">
            <input  type = 'text'
                     value={location}
                     onChange={handleLocationChoice}
            placeholder="Location" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
       </div>

        <br />
        <div className="form-group mb-3">
            <input  type = 'number'
                     value={peopleNeeded}
                     onChange={handlePeopleNeeded}
            placeholder="People Needed" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
       </div>
 
        <br />
        {/* <Select className="mt-4 col-md-8 col-offset-4" onChange = {handleActChange} options = {gameNames} /> */}


    
        <button onClick = {submitNewHang} className='make-hang-button' type="submit" value="Submit" >Make Hang!</button>
      
    </form>
    <form onSubmit={handleGameSearch}>
    <br />

<div className="form-group mb-3">
            <input  type = 'text'
                     value={apiString}
                     onChange={handleApiString}
            placeholder="Enter Game Name" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
       </div>

        <br />
      
          <input  type="submit" value="Find Game" />

    </form>



       {!selectedGame ?<div className ='game-cards'>
    {gameCards} 
    </div> : <SelectedGame selectedGame = {selectedGame} /> }
   

    
        </div>
    )
}

export default MakeHang