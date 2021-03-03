import { useEffect, useState } from "react"
import {ListGroup, Button} from 'react-bootstrap/'
function FindAHang ({API}) {
    useEffect(() =>  {
        fetch(`${API}/hangs`)
        .then(res => res.json())
        .then(hangs => setHangs(hangs))
    }, [API]
    )
    const [hangs, setHangs] = useState([])
    const hangsList = hangs.map(hang => {
        return (
            <ListGroup.Item>
                What: {hang.activity_name}
                <br />
                Where: {hang.location}
                <br />
                When: {hang.time}
                <br />
                How (many): {hang.people_needed}
                <br />
                <Button variant="primary">Signup</Button>
            </ListGroup.Item>
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