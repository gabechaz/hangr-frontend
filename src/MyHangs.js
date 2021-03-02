import { useEffect, useState } from "react"
import HangCard from './HangCard.js'

function MyHangs ({API, currentUser}) {

    const [myHangs, setMyHangs] = useState([])
        useEffect(() =>  {
        
        fetch(`${API}/users/${currentUser.id}`)
        .then(res => res.json())
        .then(data => setMyHangs(data.user_hangs))
        }
    ,[API, currentUser.id]
    )
        console.log(myHangs)
    const hangs = myHangs.map(hang => {
        return (
            <HangCard key={hang.id} hang={hang} />
        )
    })

    console.log(hangs)
    return (
        <div>
        <div> {currentUser.name}'s Hangs</div>
       <div>
           {hangs}
       </div> 
       </div>
    )

}

export default MyHangs