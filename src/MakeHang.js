import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateTimePicker from 'react-datetime-picker'
import Select from 'react-select'
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

    


    function populateActOptions (optObjs) {
        return(  optObjs.map(opt => {
              return (
              {
                  label: opt.name,
                  value: opt.id
              })
          }))
      }
  
      useEffect(() => {
          fetch(`${API}/activities`)
          .then (res => res.json())
          .then (acts => (setActivityArr(populateActOptions(acts))))
  
      }
      ,[API]
      )


    
    const [activityArr, setActivityArr] = useState([])
    const [chosenActId, setChosenActId] = useState("")
    const [chosenActName, setChosenActName] = useState("")
    const [location, setLocation] = useState("")
    const [time, setTime] = useState(new Date())
    const [peopleNeeded, setPeopleNeeded] = useState("")
    const history = useHistory()



      function handleTime (e) {
          console.log(e)
        setTime(e)
      }
    

    function handleLocationChoice (e) {
        setLocation(e.target.value)
    }

    function handlePeopleNeeded (e) {
        setPeopleNeeded(e.target.value)
    }

    function handleActChange(e) {
        setChosenActId(e.value)
        setChosenActName(e.label)
    }

    function submitNewHang(e) {
        e.preventDefault()
        const hangObj = {
            user_id: currentUser.id,
            activity_name: chosenActName,
            activity_id: chosenActId,
            location: location,
            time: time,
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

    const classes = useStyles();
    return (
<form onSubmit = {submitNewHang} className={classes.root} noValidate autoComplete="off">
  

        <DateTimePicker
        utc='true'
          id="time"
          label="Time"
          value={time}
          onChange={handleTime}
          variant="filled"
         />

        <TextField
          id="location"
          label="Location"
          value={location}
          onChange={handleLocationChoice}
          variant="filled"
        />

        <TextField
          id="people-needed"
          label="People Needed"
          value={peopleNeeded}
          onChange={handlePeopleNeeded}
          variant="filled"
        />

        <Select className="mt-4 col-md-8 col-offset-4" onChange = {handleActChange} options = {activityArr} />

        <input type="submit" value="Submit" />
      
    </form>
    )
}

export default MakeHang