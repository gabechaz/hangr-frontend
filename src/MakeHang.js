import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select'
import React, { useState, useEffect} from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

function MakeHang ({API}) {


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
      ,[]
      )

      const hangObj = {
          activityId: chosenAct,
          location: location ,
          time: time,
          peopleNeeded: peopleNeeded
      }
    
    const [activityArr, setActivityArr] = useState([])
    const [chosenAct, setChosenAct] = useState("")
    const [location, setLocation] = useState("")
    const [time, setTime] = useState("")
    const [peopleNeeded, setPeopleNeeded] = useState("")

    function handleTimeChoice (e) {

    }

    function handleLocationChoice (e) {

    }

    function handlePeopleNeeded () {

    }

    function handleActChange(e) {
        setChosenAct(e.id)
    }

    const classes = useStyles();
    return (
<form className={classes.root} noValidate autoComplete="off">
        <Select onChange = {handleActChange} options = {activityArr} />
        <TextField
          id="time"
          label="Time"
          value={time}
          onChange={handleChange}
          variant="filled"
        />

        <TextField
          id="place"
          label="Name"
          value={name}
          onChange={handleChange}
          variant="filled"
        />

        <TextField
          id="people-needed"
          label="Name"
          value={name}
          onChange={handleChange}
          variant="filled"
        />

        
      
    </form>
    )
}

export default MakeHang