import './css-files/MyHangs.css'
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
function HangCard ({API, currentUser, hang}) {

    const [host, setHost] = useState( currentUser.name)

    console.log(currentUser.name)

    useEffect(() => {
        fetch(`${API}/hangs/${hang.id}`)
        .then(res => res.json())
        .then(hang => {
            currentUser.id === hang.user_id ? setHost(currentUser.name) :
            setHost(hang.user.name)
        })
    }, []
    )
    console.log(hang.time)


    const time =  Date(hang.time)
    console.log(time)
   const history = useHistory()
    function goToHangPage (e) {
        history.push(`/hangs/${hang.id}`)
    }
console.log('rsvp obj', hang)
    return (
<div className = 'outer-card-div'>
    <img className = 'hang-image' src={hang.game_image} />
    <div>
    {hang.activity_name}
    </div>
    <div>
    Host: {host}
    </div>
    <div>
       People Needed {hang.people_needed}
    </div>
    <div>
       {/* Time: {time.toDateString()} */}
    </div>
    <div>
      Location:  {hang.location}
    </div>
    <Button variant='success' onClick={goToHangPage}>See Info</Button>
    <br />

</div>
    )
}

export default HangCard