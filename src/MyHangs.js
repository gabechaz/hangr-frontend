import { useEffect, useState } from "react"
import './css-files/App.css'
import HangCard from './HangCard.js'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const currentTime = new Date()
const currentTimeStamp = Date.parse(currentTime)

function MyHangs ({API, currentUser}) {
    const [myRSVPS, setMyRSVPS] = useState([<HangCard />])
    const [myHangs, setMyHangs] = useState([<HangCard />])
        useEffect(() =>  {
        
        fetch(`${API}/users/${currentUser.id}`)
        .then(res => res.json())
        .then(data => setMyHangs(data.user_hangs))
        }
        
    ,[API, currentUser.id]
    )

    useEffect(() =>  {
        
        fetch(`${API}/users/${currentUser.id}`)
        .then(res => res.json())
        .then(user => setMyRSVPS(user.rsvps)
        )
        }
        
    ,[API, currentUser.id]
    )



    const rsvps = myRSVPS
    .filter(h =>  Date.parse(h.time) > currentTime)
    .map(hang => {
        return (
            <ListGroup.Item>
            <HangCard currentUser={currentUser} key={hang.id} hang={hang} />
            </ListGroup.Item>
        )
    })
    
    const hangs = myHangs.map(hang => {
        console.log(hang)
        return (
            <ListGroup.Item>
            <HangCard currentUser={currentUser} key={hang.id} hang={hang} />
            </ListGroup.Item>
        )  
    })


    return (


        <div>
        
     
        <Container>
        <Row>
            <Col>
        <h1> {currentUser.name}'s Hangs</h1>
       
            <ListGroup>
           {hangs}
           </ListGroup>
           </Col>
           <Col>
           <h1>{currentUser.name}'s RSVPs</h1>
           <ListGroup>
           {rsvps}
           </ListGroup>
           </Col>
       </Row>
       </Container>

       </div>
    )

}

export default MyHangs