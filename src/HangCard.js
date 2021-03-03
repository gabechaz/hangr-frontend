import { useHistory } from "react-router-dom";

function HangCard ({hang}) {
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
       People Needed {hang.people_needed}
    </div>
    <div>
       Time: {hang.time}
    </div>
    <div>
      Location:  {hang.location}
    </div>
    <button onClick={goToHangPage}>See Info</button>
    <br />

</div>
    )
}

export default HangCard