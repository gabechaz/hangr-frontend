import {useEffect, useState} from 'react'
import KarmaForm from './KarmaForm.js'



function KarmaCard ({hang, API, currentUser}) {

 console.log(hang)
    const [attendees, setAttendees] = useState([])
    const [hangObj, setHangObj] = useState("")
    const [showForm, setShowForm] = useState(false)


    
    
    useEffect (() => {
        fetch(`${API}/hangs/${hang.id}`)
        .then (res => res.json())
        .then (hang => {
            setHangObj(hang)
            setAttendees(hang.rsvps)
        })
    }, [API, hang]

    )

    console.log(hangObj)

    const attendeeLis = attendees
    .filter(a => {
        return (
            a.id !== currentUser.id
        )
    })
    .map (a => {
        return (
            <div key = {a.id}>{a.name}</div>
        )
    })

    function revealForm () {
        setShowForm(!showForm)
    }

  


      const attendeeForms = attendees.map (a => {
          return (
      
            <KarmaForm hangId = {hang.id} currentUser ={currentUser} attendee = {a} key ={a.id} API={API} />
          )
      })

    if (hangObj.reviewed) {
    
    if (!hangObj.reviewed.includes(currentUser.id)) {
    return (
     <div className='karma-card'>
          {hangObj.user ? <h5>{hangObj.user.name}'s night of  {hang.game_name}</h5> : <h1>Loading</h1> }
            <br />
            Attendees:
            <br />
            {attendeeLis}
            {!showForm && <button onClick={revealForm}>Review Hang</button>}
            {showForm && <button onClick={revealForm}>Hide Form</button>}
            <div>
            {showForm && 
            <div> 
                {attendeeForms}
            </div>}
            </div>
        </div> 
    )

    
    
    }

    else {
        return (
            null
        )
    }


       }
       else {
        return (
            <h1>Loading</h1>
        )
          }
}

export default KarmaCard