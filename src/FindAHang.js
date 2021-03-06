import { useEffect, useState, useMemo } from "react"
import ListGroup from 'react-bootstrap/ListGroup'
import FindAHangCard from './FindAHangCard'
// import TinderCard from 'react-tinder-card'


function FindAHang ({API, currentUser}) {

    useEffect(() =>  {
        fetch(`${API}/hangs`)
        .then(res => res.json())
        .then(hangs => {
            setHangs(handleHangs(hangs))
        })
    }, [API]
    )

    function handleHangs (hangs) {
        return (
        hangs.filter(hang => hang.user.id !== currentUser.id)
        .filter(hang => hang.rsvp_ids.includes(currentUser.id))
        .filter(hang => hang.people_needed > 0)
        )
    }

    const [hangs, setHangs] = useState([])

    
    const hangsList = hangs.map(hang => {
        return (
         <FindAHangCard currentUser={currentUser} API={API} key ={hang.id} hang={hang} />
        )
    })

return (
    
    <div><h1>Find a Hang</h1>
    <ListGroup>
    {hangsList}
    </ListGroup>
    </div>
)
}

export default FindAHang