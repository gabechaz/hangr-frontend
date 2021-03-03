import { useParams } from "react-router-dom";
import {useState} from 'react'
import { useEffect } from "react";

function Hang ({currentUser, API}) {
const { id }= useParams()
console.log(id)
const [hang, setHang] = useState("")
useEffect( () => {
    fetch(`${API}/hangs/${id}`)
    .then (res => res.json())
    .then(hang => setHang(hang))
}, [API, id]
)

return (
    
    <div>
    <h1>This is information about the hang!</h1>
    <div>
         {hang.activity_name}
    </div>
    <div>
        People Needed {hang.people_needed}
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