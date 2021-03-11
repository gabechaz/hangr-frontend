import { useEffect, useState } from "react"
import './css-files/MyHangs.css'
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
    const [toggle, setToggle] = useState(false)
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
    // .filter(h =>  Date.parse(h.time) > currentTime)
    .map(hang => {
    console.log(hang)
        return (
   
            <HangCard API={API} currentUser={currentUser} key={hang.id} hang={hang} />

        )
    })
    


    function toggleHangs() {
        setToggle(!toggle)
    }

    const hangs = myHangs.map(hang => {
   
        return (

            <HangCard currentUser={currentUser} key={hang.id} hang={hang} />
        
        )  
    })


    return (

        <div className='outer-outer-div'>
                <button className='button' onClick={toggleHangs}>{!toggle? 'See Hangs' : 'See RSVPS'} </button>
       
      
        <div className  = 'outer-hangs-div'>
              
    
         {toggle ?
          <div className = 'hangs-col'>
         <h3 className = 'hang-col'> {currentUser.name}'s Hangs</h3>
         {hangs}
        </div> :
      <div className = 'rsvps-column'>
        <h3 className = 'rsvp-col'>{currentUser.name}'s RSVPs</h3>

        
           {rsvps}
        
           </div>

           }
         
       </div>
       </div>
    )

}

export default MyHangs