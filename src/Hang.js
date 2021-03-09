import { useParams } from "react-router-dom";
import {useState} from 'react'
import { useEffect } from "react";

function Hang ({currentUser, API}) {
const { id }= useParams()
const [time, setTime] = useState("")
const [hang, setHang] = useState({activity_name: 'Loading', time: 'Loading', location: 'Loading', user: 'Loading', people_needed: 'Loading'})
useEffect( () => {
    fetch(`${API}/hangs/${id}`)
    .then (res => res.json())
    .then(theHang =>{ 
       const date = new Date(theHang.time)
        setTime(date)
        console.log(date)
        setHang(theHang)
        setAttendees(handleAttendees(theHang.rsvps))
    })
}, [API, id]
)
console.log(typeof(hang.time))
const [attendees, setAttendees] = useState([])
function handleAttendees (attArr) {
    return (
        attArr.map(a => {
            return (
            <p key ={a.id}>{a}</p>)
        })
    )
}

return (
    
    <div>
    <h1>This is information about the hang!</h1>
    <div>
         Game: {hang.game_name}
         <br />
         <img src={hang.game_image} alt = {hang.game_name} />
    </div>
    <div>
        Host: {currentUser.name}
    </div>
    <div>
        People Needed {hang.people_needed}
    </div>
    <div>
        Attendees: {attendees}
    </div>
    <div>
        Location: {hang.location}
    </div>
    <div>
       Time:   {time ? time.getHours() : null}  {time ? time.toDateString() : null}
    </div>
    </div>

)


}

export default Hang