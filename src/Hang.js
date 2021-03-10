import './css-files/App.css'
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
                <div>
            <img className = 'avatar-thumb' src={a.img} />
            <span key ={a.id}>{a.name}</span>
            </div>)
            
        })
    )
}

return (
    
    <div>
    <h1>{hang.game_name} with {hang.user.name}!</h1>
    <div>
         Game: {hang.game_name}
         <br />
         <img className='hang-game-image' src={hang.game_image} alt = {hang.game_name} />
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