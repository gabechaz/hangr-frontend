import './css-files/Hang.css'
import { useParams, useHistory } from "react-router-dom";
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
        setHang(theHang)
        setAttendees(handleAttendees(theHang.rsvps))
    })
}, [API, id]
)

const history = useHistory()


console.log(typeof(hang.time))
const [attendees, setAttendees] = useState([])
function handleAttendees (attArr) {

    return (
        attArr.map(a => {
            function goToProfile(id) {
                history.push(`/profile/${a.id}`)
                console.log('clicked')
            }
            console.log('attendee!')
            return (
            <div key ={a.id} onClick={goToProfile}>
            <img onClick={goToProfile} className = 'avatar-thumb' src={a.img} alt='user-avatar' />
            <span  key ={a.id}>{a.name} </span>
            </div>)
            
        })
    )
}
console.log(hang.user)
return (
    <div className= 'outer-hang-div'>
    <div className='hang-div'>
    <h1>{hang.game_name} with {hang.user.name}!</h1>
    <div>
         Game: {hang.game_name}
         <br />
         <img className='hang-game-image' src={hang.game_image} alt = {hang.game_name} />
    </div>
    <div>
        Host: {hang.user.name}
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
    </div>
)


}

export default Hang