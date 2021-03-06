import { useParams } from "react-router-dom";
import {useState} from 'react'
import { useEffect } from "react";

function Hang ({currentUser, API}) {
const { id }= useParams()
const [hang, setHang] = useState({activity_name: 'Loading', time: 'Loading', location: 'Loading', user: 'Loading', people_needed: 'Loading'})
useEffect( () => {
    fetch(`${API}/hangs/${id}`)
    .then (res => res.json())
    .then(theHang =>{ 
        setHang(theHang)
        setAttendees(handleAttendees(theHang.rsvps))
    })
}, [API, id]
)

const [attendees, setAttendees] = useState("")
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
         {hang.activity_name}
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
       Time:  {hang.time}
    </div>
    </div>

)


}

export default Hang