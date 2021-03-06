import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
function HangCard ({currentUser, hang}) {
   const history = useHistory()
    function goToHangPage (e) {
        history.push(`/hangs/${hang.id}`)
    }
    console.log(hang.id)
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
       Time: {hang.time}
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