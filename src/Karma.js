import './css-files/index.css'
import {useEffect, useState} from 'react'
import KarmaCard from './KarmaCard.js'



function Karma ({currentUser, API}) {

    const [hangs, setHangs] = useState([])
    const currentTime = new Date()
    const currentTimeStamp = Date.parse(currentTime)
    // console.log(currentTimeStamp,'current time stamp')

    // hangs.forEach(hang => {
    //     console.log(hang)
    //     console.log(Date.parse(hang.time), hang.location)
    // })
    const tBR = hangs.filter(hang => Date.parse(hang.time) < currentTimeStamp 
         )
         console.log(tBR)
         console.log(hangs)
    // console.log(hangs.length)

    useEffect(() =>  {
        
        fetch(`${API}/users/${currentUser.id}`)
        .then(res => res.json())
        .then(data => setHangs(data.rsvps))
        }
        
    ,[API, currentUser.id]
    )


    const karmaCards = tBR.map (hang => {
        return (
            <KarmaCard currentUser = {currentUser} API={API} key ={hang.id} hang={hang} />
        )
    })



    return (
     <div className='karma-div'>karma
     <div className='to-be-reviewed'>
        {karmaCards}
     </div>
     
     </div>


    )
 
}

export default Karma