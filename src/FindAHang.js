import { useEffect, useState } from "react"
import FindAHangCard from './FindAHangCard'



function FindAHang ({API, currentUser}) {

    useEffect(() =>  {
        fetch(`${API}/hangs`)
        .then(res => res.json())
        .then(hangs => {
            console.log(hangs)
            setHangs(handleHangs(hangs))
        })
    }, [API]
    )

    function handleHangs (hangs) {
        return (
        hangs.filter(hang => hang.user.id !== currentUser.id)
        .filter(hang => !hang.rsvp_ids.includes(currentUser.id))
        .filter(hang => hang.people_needed > 0)
        )
    }

    const [hangs, setHangs] = useState([])
    console.log(hangs)
    
    const hangsList = hangs.map(hang => {
        return (
         <FindAHangCard currentUser={currentUser} API={API} key ={hang.id} hang={hang} />
        )
    })

return (
    
    <div><h1>Find a Hang</h1>
    <div className='find-hangs-list-div'>
    {hangsList}
    </div>
    </div>
)
}

export default FindAHang