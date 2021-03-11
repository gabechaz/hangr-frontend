import './css-files/MyHangs.css'
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
function HangCard ({API, currentUser, hang}) {

    const [host, setHost] = useState(currentUser.name)

    console.log(hang)

    useEffect(() => {
        fetch(`${API}/users/${hang.user_id}`)
        .then(res => res.json())
        .then(host =>  setHost(host)
            // setHost(hang.user.name)
            // currentUser.id === hang.user_id ? setHost(currentUser) :
            // setHost(hang.user)
        )
    }, [API, hang.user_id]
    )



    function goToProfile () {
        history.push(`profile/${host.id}`)
    }

    // const time =  Date(hang.time)

   const history = useHistory()
    function goToHangPage (e) {
        history.push(`/hangs/${hang.id}`)
    }

    return (
<div className = 'outer-card-div'>
    <img className = 'hang-image' src={hang.game_image} alt='game' />
    <div>
    {hang.activity_name}
    </div>
    <div>
    Host: {host.name} 
    <img className = 'user-image' onClick={goToProfile} src = {host.img} alt = 'user-avatar' />
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