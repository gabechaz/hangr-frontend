import './css-files/FindAHangCard.css'
import {ListGroup, Button} from 'react-bootstrap/'
import { useHistory } from "react-router-dom";
function FindAHangCard ({hang, API, currentUser}) {
const history = useHistory()


    function reducePeople (pObj) {
        fetch(`${API}/hangs/${hang.id}/rsvp`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"},
                body: JSON.stringify(pObj)
            
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function signup (e) {
        const newPeopleNeeded = {people_needed: hang.people_needed - 1}
        const newSUObj = {
            user_id: currentUser.id,
            hang_id: hang.id
        }
        fetch(`${API}/signups` , {
            method: 'POST', 
                headers: {
                    "Content-Type": "application/json",
                    'Accept': "application/json"},
                    body: JSON.stringify(newSUObj)
        })
        .then(res => res.json())
        .then(s => reducePeople(newPeopleNeeded))
        .then (s =>  history.push(`/hangs/${hang.id}`))
        

    }
    return (
        
        <div className='find-hang-div'>
        What: {hang.game_name}
        <br />
        <img className='Game-image' src={hang.game_image} alt = {hang.game_name} />
        <br />
        Where: {hang.location}
        <br />
        When: {hang.time}
        <br />
        How (many): {hang.people_needed}
        <br />
        Host: {hang.user.name}
        <br />
        <Button onClick={signup}  variant="primary">Signup</Button>
        </div>
    )
}

export default FindAHangCard