import { useHistory } from "react-router-dom";
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
function HangCard ({currentUser, hang}) {


    const time = new Date(hang.time)
   const history = useHistory()
    function goToHangPage (e) {
        history.push(`/hangs/${hang.id}`)
    }

    return (
<div>
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
       Time: {time.toDateString()}
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