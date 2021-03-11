import './css-files/FindAHangCard.css'
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

    function goToProfile (e) {
    
        history.push(`/profile/${hang.user.id}`)
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
        <h3>{hang.game_name} with {hang.user.name} </h3> 
        <br />
        <img className='Game-image' src={hang.game_image} alt = {hang.game_name} />
        <br />
        Where: {hang.location}
        <br />
        When: {hang.time}
        <br />
        How (many): {hang.people_needed}
        <br />
        <p>
        Host: {hang.user.name} 
        <img onClick = {goToProfile} className = 'user-image' src = {hang.user.img} alt = 'user-avatar' />
        </p>
        <br />
        <button className='find-hang-btn' onClick={signup}  variant="primary">Signup</button>
        </div>
    )
}

export default FindAHangCard